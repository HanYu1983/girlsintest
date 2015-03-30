(ns tool.react
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [chan <!]]))
    
(defmulti model-ch (fn [ctx key args] key))
(defmulti view-ch (fn [ctx key modelChan] key))
(defmulti AnimateOpen (fn [ctx key view] key))
(defmulti AnimateClose (fn [ctx key view] key))

(defmethod AnimateOpen :default [ctx key view])
(defmethod AnimateClose :default [ctx key view])
        
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
  (if (some? (react-curr views))
    (let [{:keys [view promise]} @(react-curr views)]
      (if (some? view)
        (AnimateClose ctx react-curr view)
        (.reject promise "CloseView"))
      (update-in ctx [:views] dissoc react-curr))
    ctx))
    
(defn ChangeView [{:keys [container views] :as ctx} {:keys [react-curr] :as args}]
  (let [closeAll (fn [ctx]
                   (reduce (fn [ctx key] (CloseView ctx {:react-curr key})) ctx (keys views)))
        thenOpen (fn [ctx]
                   (OpenView ctx args))]
    (-> ctx
      closeAll
      thenOpen)))

(defn React [route ctx [key whichRoute args]]
  (let [[curr Operation] (-> route key whichRoute)]
    (Operation ctx (merge args {:react-prev key :react-curr curr}))))

(def OnReact (chan))


(defn async-when [& chans]
  (go 
    (let [HasError (fn [[err _]] (some? err))
          mergeall (apply async/when (fn [& args] (apply list args)) chans)
          alldata (<! mergeall)]
      (if (some HasError alldata)
        (->>
          alldata 
          (filter HasError)
          first)
        (map second alldata)))))