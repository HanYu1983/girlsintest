(ns core.model
  (:require-macros [macro.core :as macro])
  (:require
    [core.fn :as fn]))
    
(defn CreateHomeModel [a-ctx args]
  (let [promise (new js/$.Deferred)]
    (js/setTimeout
      #(.resolve promise (js-obj "modelKey" 0)) 0)
      promise))
      
(defn CreateStreetSnapListModel [a-ctx [type]]
  (let [configType (name type)]
    (macro/makepromise p
      (fn/GetAllModelBy "config.json" configType)
      (fn [& args] 
        (let [config (first args)
              details (second args)
              ConvertDTO (fn [[model detail]]
                          (js-obj
                            "id" model
                            "name" (.-Caption detail)
                            "date" (.-Date detail)
                            "brand" (.-Brand detail)
                            "imgStylePath" (fn/ServeImagePath (str (aget config configType) "/" model "/image_2.jpg"))
                            "imgSideAPath" (fn/ServeImagePath100 (str (aget config configType) "/" model "/image_3.jpg"))
                            "imgSideBPath" (fn/ServeImagePath100 (str (aget config configType) "/" model "/image_4.jpg"))
                            "imgSideCPath" (fn/ServeImagePath100 (str (aget config configType) "/" model "/image_5.jpg"))))
              dto (js-obj 
                    "searchWord" ""
                    "streetsnapList" (->> (map ConvertDTO details) (apply array)))]
          (.resolve p dto))))))
