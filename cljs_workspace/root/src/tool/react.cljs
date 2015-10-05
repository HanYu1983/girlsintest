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
        
(defn OpenView [{:keys [views] :as ctx} {:keys [react-action] :as args}]
  (let [a-view (atom {})
        viewpromise (doto (new js/$.Deferred)
                      (.done (fn [view]
                        (swap! a-view assoc :view view) 
                        (AnimateOpen ctx react-action view))))
        ResolvePromise (fn [chan]
                         (go (.resolve viewpromise (<! chan))))]
    (swap! a-view assoc :promise viewpromise)
    (->> args
      (model-ch ctx react-action)
      (view-ch ctx react-action)
      ResolvePromise)
    (assoc-in ctx [:views react-action] a-view)))
    
(defn CloseView [{:keys [container views] :as ctx} {:keys [react-action] :as args}]
  (if (some? (react-action views))
    (let [{:keys [view promise]} @(react-action views)]
      (if (some? view)
        (AnimateClose ctx react-action view)
        (.reject promise "CloseView"))
      (update-in ctx [:views] dissoc react-action))
    ctx))
    
(defn ChangeView [{:keys [container views] :as ctx} {:keys [react-action] :as args}]
  (let [closeAll (fn [ctx]
                   (reduce (fn [ctx key] (CloseView ctx {:react-action key})) ctx (keys views)))
        thenOpen (fn [ctx]
                   (OpenView ctx args))]
    (-> ctx
      closeAll
      thenOpen)))

(defn React [route ctx [key whichRoute args]]
  (let [[curr Operation] (-> route key whichRoute)]
    (if (some #(nil? %) [curr Operation])
      (do
        (.log js/console (str "from " key " operator " whichRoute " isn't exist!!"))
        ctx)
      (Operation ctx (merge args {:react-where key :react-action curr :react-where2 whichRoute})))))

(def OnReact (chan))