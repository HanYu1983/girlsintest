(ns core.app)

(defn emptyModel [a-ctx args]
  (let [promise (new js/$.Deferred)]
    (js/setTimeout #(.resolve promise nil) 0)
    promise))

(defn CreateElem [tmpl CreateModel helper]  
  (let [promise (new js/$.Deferred)
        modelPromise (CreateModel)]
    (.done modelPromise 
      (fn [model] 
        (let [elem (.tmpl tmpl model helper)]
          (.resolve promise elem))))
    (.fail modelPromise #(.reject promise %1))
    promise))

(defn CreateView [CreateElem Open Close]
  (let [elemPromise (CreateElem)
        view (js-obj "elemPromise" elemPromise "Open" Open "Close" Close)]
    (doto elemPromise
      (.done 
        (fn [elem]
          (set! (.-elem view) elem))))
    view))
     
(defn FadeOut [elem Complete]
  (.fadeOut elem 400)
  (js/setTimeout Complete 400))
  
(defn FadeIn [elem]
  (.fadeIn elem 400))
  
(defmulti CreateAppView (fn [ctx key CreateModel] key))

(defn OpenView [{:keys [container views] :as ctx} key CreateModel]
  (let [v (CreateAppView ctx key CreateModel)]
    (doto (.-elemPromise v)
      (.done (fn [elem] 
                  (.appendTo elem container)
                  ((.-Open v) elem)))
      (.fail (fn [err] (js/alert err))))
    (update-in ctx [:views] assoc key v)))
    
(defn CloseView [{:keys [container views] :as ctx} key]
  (if-let [v (key views)]
    (do 
      ((.-Close v) (.-elem v) #(.remove (.-elem v)))
      (update-in ctx [:views] dissoc key))
    ctx))
    
(defn ChangeView [{:keys [container views] :as ctx} key CreateModel]
  (let [closeAll (fn [ctx]
                   (reduce (fn [ctx key] (CloseView ctx key)) ctx (keys views)))
        thenOpen (fn [ctx]
                (OpenView ctx key CreateModel))]
    (-> ctx
      closeAll
      thenOpen)))
    
(defn Route [a-ctx key whichRoute args]
  (let [handleRoute (fn [{:keys [route] :as ctx}]
                      (let [[nextPage CreateModel] (-> route key whichRoute)]
                        (if-not (= nextPage nil)
                          (ChangeView ctx nextPage (partial CreateModel a-ctx args))
                          (do
                            (CreateModel a-ctx)
                            ctx))))]
    (swap! a-ctx handleRoute)))