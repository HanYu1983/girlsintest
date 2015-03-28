(ns tool.app)

(defn emptyModel [ctx prev view args]
  (let [promise (new js/$.Deferred)]
    (js/setTimeout #(.resolve promise nil) 0)
    promise))

(defn CreateElem [tmpl CreateModel helper]  
  (let [promise (new js/$.Deferred)
        modelPromise (CreateModel)]
    (.done modelPromise 
      (fn [model] 
        (let [elem (.tmpl tmpl model helper)]
          (set! (.-DTO elem) model)
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
    
(defn NormalOut [elem Complete]
  (Complete))
     
(defn FadeOut [time elem Complete]
  (.fadeOut elem time)
  (js/setTimeout Complete time))
  
(defn FadeIn [time elem]
  (.fadeIn elem time))
  
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
      
(defn React [ctx [key whichRoute args]]
  (let [handleRoute (fn [{:keys [route] :as ctx}]
                      (let [[nextPage CreateModel] (-> route key whichRoute)]
                        (if nextPage
                          (ChangeView ctx nextPage (partial CreateModel ctx key nextPage args))
                          (if CreateModel
                            (CreateModel ctx key nextPage args)
                            (throw (new js/Error (str "route error, " key " do " whichRoute)))))))]
    (handleRoute ctx)))
    
(defn Route [a-ctx key whichRoute args]
  (let [handleRoute (fn [{:keys [route] :as ctx}]
                      (let [[nextPage CreateModel] (-> route key whichRoute)]
                        (if nextPage
                          (ChangeView ctx nextPage (partial CreateModel ctx key nextPage args))
                          (if CreateModel
                            (CreateModel ctx key nextPage args)
                            (throw (new js/Error (str "route error, " key " do " whichRoute)))))))]
    (swap! a-ctx handleRoute)))