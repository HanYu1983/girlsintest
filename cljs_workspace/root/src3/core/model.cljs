(ns core.model
  (:require-macros [macro.core :as macro])
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
      
(defn CreateStreetSnapListModel [a-ctx args]
  (macro/makepromise p
    (fn/GetAllModelBy "config.json" "street")
    (fn [& args] 
      (let [config (first args)
            details (second args)
            ConvertDTO (fn [[model detail]]
                          (js-obj
                            "id" model
                            "name" (.-Caption detail)
                            "date" (.-Date detail)
                            "brand" (.-Brand detail)
                            "imgStylePath" (fn/ServeImagePath (str (aget config "street") "/" model "/image_2.jpg"))
                            "imgSideAPath" (fn/ServeImagePath100 (str (aget config "street") "/" model "/image_3.jpg"))
                            "imgSideBPath" (fn/ServeImagePath100 (str (aget config "street") "/" model "/image_4.jpg"))
                            "imgSideCPath" (fn/ServeImagePath100 (str (aget config "street") "/" model "/image_5.jpg"))))
            dto (js-obj 
                  "searchWord" ""
                  "streetsnapList" (->> (map ConvertDTO details) (apply array)))]
        (.resolve p dto)))))





      (comment 

(defn CreateStreetSnapListModel [a-ctx args]
  (let [promise (new js/$.Deferred)]
    (doto (fn/GetAllModelBy "config.json" "street")
      (.done 
        (fn [& args] 
          (let [config (first args)
                details (second args)
                ConvertDTO (fn [[model detail]]
                              (js-obj
                                "id" model
                                "name" (.-Caption detail)
                                "date" (.-Date detail)
                                "brand" (.-Brand detail)
                                "imgStylePath" (fn/ServeImagePath (str (aget config "street") "/" model "/image_2.jpg"))
                                "imgSideAPath" (fn/ServeImagePath100 (str (aget config "street") "/" model "/image_3.jpg"))
                                "imgSideBPath" (fn/ServeImagePath100 (str (aget config "street") "/" model "/image_4.jpg"))
                                "imgSideCPath" (fn/ServeImagePath100 (str (aget config "street") "/" model "/image_5.jpg"))))
                dto (js-obj 
                      "searchWord" ""
                      "streetsnapList" (->> (map ConvertDTO details) (apply array)))]
            (.resolve promise dto))))
      (.fail #(.reject promise %)))
      promise))
      
      )
