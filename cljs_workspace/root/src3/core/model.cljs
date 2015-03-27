(ns core.model
  (:require-macros [macro.core :as macro])
  (:require
    [core.fn :as fn]))

(defn configType [view]
  (cond
    (= view :StreetSnapList) "street"
    (= view :ModelList) "model"
    (= view :ProductList) "product"
    :else (throw (new js/Error (str "no configType with " view)))))
    
(defn bottomTab1 [view]
  (cond
    (= view :StreetSnapList) "MODEL資料"
    (= view :ModelList) "MODEL資料"
    (= view :ProductList) "產品資料"
    :else (throw (new js/Error (str "no bottomTab1 with " view)))))
    
(defn bottomTab2 [view]
  (cond
    (= view :StreetSnapList) "MODEL訪談"
    (= view :ModelList) "MODEL訪談"
    (= view :ProductList) "產品特色"
    :else (throw (new js/Error (str "no bottomTab2 with " view)))))
    
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
          
(defn CreateStreetSnapModel [a-ctx {:keys [view id] :as args}]
  (let [configType (configType view)]
    (macro/makepromise p
      (fn/GetAllModelBy "config.json" configType)
      (fn [& args] 
        (let [config (first args)
              dir (aget config configType)
              details (second args)
              detail (get details id)
              ConvertHeadDTO (fn [[key, detail]]
                               (js-obj "id" key "url" (fn/ServeImagePath (str dir "/" key "/image_1.jpg"))))
              CreateImageDTO (fn [ServeFn idxs]
                                (let [urls (for [idx idxs] (str dir "/" id "/image_" idx ".jpg"))
                                      dtos (for [url urls] (js-obj "id" url "url" (ServeFn url)))]
                                  (apply array dtos)))
              dto (js-obj 
                    "historyList" (->> (map ConvertHeadDTO details) (apply array))
                    "name" (.-Caption detail)
                    "date" (.-Date detail)
                    "styleUrl" (fn/ServeImagePath (str dir "/" id "/image_2.jpg"))
                    "sideList" (CreateImageDTO fn/ServeImagePath100 (range 3 6)) 
                    "bottomList" (CreateImageDTO fn/ServeImagePath100 (range 6 (inc (.-ImageCount detail)))) 
                    "modelDetail" (.-Description detail)
                    "talk" (.-Talk detail)
                    "protalk" (.-Comment detail)
                    "modelKey" (.-ModelKey detail)
                    "key" id
                    "bottomTab1" (bottomTab1 view)
                    "bottomTab2" (bottomTab2 view))]
          (.resolve p dto))))))