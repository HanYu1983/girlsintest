(ns app.model
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :refer [chan >! <! close!]]
    [app.fn :as fn]
    [tool.react :as react]))
    
(defn configType [view]
  (cond
    (some #(= view %) [:StreetSnap :StreetSnapList]) "street"
    (some #(= view %) [:Model :ModelList]) "model"
    (some #(= view %) [:Product :ProductList]) "product"
    :else (throw (new js/Error (str "no configType with " view)))))
    
(defn bottomTab1 [view]
  (cond
    (some #(= view %) [:StreetSnap :StreetSnapList]) "MODEL資料"
    (some #(= view %) [:Model :ModelList]) "MODEL資料"
    (some #(= view %) [:Product :ProductList]) "產品資料"
    :else (throw (new js/Error (str "no bottomTab1 with " view)))))
    
(defn bottomTab2 [view]
  (cond
    (some #(= view %) [:StreetSnap :StreetSnapList]) "MODEL訪談"
    (some #(= view %) [:Model :ModelList]) "MODEL訪談"
    (some #(= view %) [:Product :ProductList]) "產品特色"
    :else (throw (new js/Error (str "no bottomTab2 with " view)))))

(defn defcommonlistmodel [name]
  (defmethod react/model-ch name [ctx key args]
    (let [ret (chan)
          configType (configType name)]
      (doto (fn/GetAllModelBy "config.json" configType)
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
                                "imgStylePath" (fn/ServeImagePath (str (aget config configType) "/" model "/image_2.jpg"))
                                "imgSideAPath" (fn/ServeImagePath100 (str (aget config configType) "/" model "/image_3.jpg"))
                                "imgSideBPath" (fn/ServeImagePath100 (str (aget config configType) "/" model "/image_4.jpg"))
                                "imgSideCPath" (fn/ServeImagePath100 (str (aget config configType) "/" model "/image_5.jpg"))))
                  dto (js-obj 
                        "searchWord" ""
                        "streetsnapList" (->> (map ConvertDTO details) (apply array)))]
              (go 
                (>! ret [nil dto])
                (close! ret)))))
        (.fail
          (fn [err]
            (go
              (>! ret [err nil])
              (close! ret)))))
      ret)))

(defn defcommonmodel [name]
  (defmethod react/model-ch name [ctx key {:keys [id] :as args}]
    (let [ret (chan)
          configType (configType name)]
      (doto (fn/GetAllModelBy "config.json" configType)
        (.done
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
                        "bottomTab1" (bottomTab1 name)
                        "bottomTab2" (bottomTab2 name))]
              (go 
                (>! ret [nil dto])
                (close! ret)))))
        (.fail
          (fn [err]
            (go
              (>! ret [err nil])
              (close! ret)))))
      ret)))

(defmethod react/model-ch :Home [ctx key args]
  (go (js-obj "modelKey" "")))
(defcommonlistmodel :StreetSnapList)
(defcommonlistmodel :ModelList)
(defcommonlistmodel :ProductList)
(defcommonmodel :StreetSnap)
(defcommonmodel :Model)
(defcommonmodel :Product)