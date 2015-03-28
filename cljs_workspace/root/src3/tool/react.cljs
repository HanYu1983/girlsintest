(ns tool.react
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [chan <!]]))
    
(defmulti model-ch (fn [ctx key args] key))
(defmulti view-ch (fn [ctx key modelChan] key))
(defmulti AnimateOpen (fn [ctx key view] key))
(defmulti AnimateClose (fn [ctx key view] key))

(defn OpenView [{:keys [views] :as ctx} {:keys [key] :as args}]
  (let [a-view (atom {})
        viewpromise (doto (new js/$.Deferred)
                      (.done (fn [view]
                        (swap! a-view assoc :view view) 
                        (AnimateOpen ctx key view))))
        ResolvePromise (fn [chan]
                         (go (.resolve viewpromise (<! chan))))]
    (swap! a-view assoc :promise viewpromise)
    (-> args
      (partial model-ch ctx key)
      (partial view-ch ctx key)
      ResolvePromise)
    (update-in ctx [:views] assoc a-view)))
    
(defn CloseView [{:keys [container views] :as ctx} {:keys [key] :as args}]
  (if-not (nil? (key view))
    (let [{:keys [view promise]} @(key views)]
      (if (nil? view)
        (.reject promise "CloseView")
        (AnimateClose ctx key view))
      (update-in ctx [:views] dissoc key))
    ctx))
    
(defn ChangeView [{:keys [container views] :as ctx} {:keys [key] :as args}]
  (let [closeAll (fn [ctx]
                   (reduce (fn [ctx key] (CloseView ctx key)) ctx (keys views)))
        thenOpen (fn [ctx]
                   (OpenView ctx args))]
    (-> ctx
      closeAll
      thenOpen)))

(defn React [{:keys [route] :as ctx} [key whichRoute args]]
  (let [[curr Operation] (-> route key whichRoute)]
    (Operation ctx (merge args {:react-prev key :react-curr curr}))))