(ns core.app)

(defn emptyModel []
  (atom nil))

(defn CreateElem [tmpl CreateModel helper]
  (.tmpl tmpl @(CreateModel) helper))

(defn CreateView [CreateElem Open Close]
  (let [elem (CreateElem)]
    {:elem elem
     :Open (partial Open elem)
     :Close (partial Close elem)}))
     
(defn FadeOut [elem]
  (.log js/console "FadeOut")
  (.log js/console elem)
  (.fadeOut elem 400))
  
(defn FadeIn [elem Complete]
  (.log js/console "FadeIn")
  (.log js/console elem)
  (.fadeIn elem 400)
  (js/setTimeout Complete 400))
  
(defmulti CreateAppView (fn [ctx key args] key))

(defmethod CreateAppView :Header [ctx key args]
  (let [elem #(CreateElem (js/$ "#mc_header") emptyModel nil)]
    (doto #(.find elem)
      (.click #(.onNext evt/xxx nil)))
    (.subscribe evt/xxx #())]
    (CreateView elem FadeIn FadeOut)))

(defn OpenView [{:keys [container views] :as ctx} key args]
  (let [v (CreateAppView ctx key args)]
    (doto (:elem v)
      (.appendTo container))
    (do (:Open v))
    (update-in ctx [:views] assoc key v)))
    
(defn CloseView [{:keys [container views] :as ctx} key]
  (if-let [v (key views)]
    (do 
      (:Close v #(.log js/console "delete elem:" (:elem v)))
      (update-in ctx [:views] dissoc key))
    ctx)
    
(defn ChangeView [{:keys [container views] :as ctx} key args]
  (let [closeAll (fn [ctx]
                   (reduce (fn [ctx key] (CloseView ctx key)) ctx (keys views)))
        thenOpen (fn [ctx]
                (OpenView ctx key args))]
    (-> ctx
      closeAll
      thenOpen)))

(defn CreateModel [args]
  (let [model (atom nil)]
    (reset! model {:x 20})
    model))

(defn testCreateElem []
  (let [elem (CreateElem (js/$ "#tmpl_celebrity") (partial CreateModel {}) {})]
    (.log js/console elem)))
    
(defn testCreateElem2 []
  (let [ctx (atom {
              :views {}
              :container (js/$ "#mc_pageContainer")
              :route {:Header {"ok" [:Step1 CreateStep1Model]
                               "fail" [:Step2 emptyModel]}
                      :Step1 {"ok" [:Header emptyModel]}}})]
    (.subscribe evt/xxx (partial Route ctx :Header "ok"))
    (.subscribe evt/xxx (partial Route ctx :Header "fail"))
    
    (swap! ctx #(OpenView %1 :Header nil))))
    
(defn Route [a-ctx key whichRoute args]
  (let [handleRoute (fn [{:keys [route] :as ctx}
                         [nextPage CreateModel] (-> route (key) (whichRoute))]
                       (if-let nextPage
                         (ChangePage ctx nextPage args)
                         ctx))]
    (swap! a-ctx handleRoute)))
    
(testCreateElem2)