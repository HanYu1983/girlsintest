(ns tool.react
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [chan <!]]))
    
(defmulti model-ch (fn [ctx key args] key))
(defmulti view-ch (fn [ctx key modelChan] key))
(defmulti AnimateOpen (fn [ctx key view] key))
(defmulti AnimateClose (fn [ctx key view] key))
        
(defn OpenView [{:keys [views] :as ctx} {:keys [react-curr] :as args}]
  (let [a-view (atom {})
        viewpromise (doto (new js/$.Deferred)
                      (.done (fn [view]
                        (swap! a-view assoc :view view) 
                        (AnimateOpen ctx react-curr view))))
        ResolvePromise (fn [chan]
                         (go (.resolve viewpromise (<! chan))))]
    (swap! a-view assoc :promise viewpromise)
    (->> args
      (model-ch ctx react-curr)
      (view-ch ctx react-curr)
      ResolvePromise)
    (assoc-in ctx [:views react-curr] a-view)))
    
(defn CloseView [{:keys [container views] :as ctx} {:keys [react-curr] :as args}]
  (if-not (nil? (react-curr views))
    (let [{:keys [view promise]} @(react-curr views)]
      (if (nil? view)
        (.reject promise "CloseView")
        (AnimateClose ctx react-curr view))
      (update-in ctx [:views] dissoc react-curr))
    ctx))
    
(defn ChangeView [{:keys [container views] :as ctx} {:keys [react-curr] :as args}]
  (let [closeAll (fn [ctx]
                   (reduce (fn [ctx key] (CloseView ctx {:react-curr key})) ctx (keys views)))
        thenOpen (fn [ctx]
                   (OpenView ctx args))]
    (.log js/console (pr-str args))
    (-> ctx
      closeAll
      thenOpen)))

(defn React [{:keys [route] :as ctx} [key whichRoute args]]
  (let [[curr Operation] (-> route key whichRoute)]
    (Operation ctx (merge args {:react-prev key :react-curr curr}))))

(def OnReact (chan))