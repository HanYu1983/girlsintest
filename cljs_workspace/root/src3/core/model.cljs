(ns core.model
  (:require
    [core.fn :as fn]))
  
(defn CreatePage1Model [a-ctx args]
  (let [promise (new js/$.Deferred)]
    (js/setTimeout
      #(let [hp 155]
        (swap! a-ctx (fn [ctx] (update-in ctx [:model :hp] + hp)))
        (.resolve promise (js-obj "hp" (-> @a-ctx :model :hp)))))
    promise))
    
(defn ChangeHP [a-ctx]
  (let [ctx @a-ctx]
    (.log js/console (pr-str (-> ctx :views (keys))))
    (.log js/console (pr-str (-> ctx :model)))))
    
    
(defn CreateHomeModel [a-ctx args]
  (let [promise (new js/$.Deferred)]
    (js/setTimeout
      #(.resolve promise (js-obj "modelKey" 0)) 0)
      promise))

(defn CreateStreetSnapModel [a-ctx args]
  (let [promise (new js/$.Deferred)]
    (js/setTimeout
      #(.resolve promise (js-obj "searchWord" "" "streetsnapList" (array))) 0)
      promise))