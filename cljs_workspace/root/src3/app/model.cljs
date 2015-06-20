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

(defn SortByDate [details]
  (->> details
    (sort-by
      (fn [[model detail]]
        (doto
          (js/Date. (.-Date detail)) 
          (.getTime))))
    reverse))
    
(defn AvaliableIs [v details]
  (filter 
    (fn [[model detail]] (= v (.-Available detail)))
    details))

(defn FilterBySearch [searchKey details]
  (if (some? searchKey)
    (->> details
      (filter (fn [[model detail]]
        (some? (re-find (re-pattern (str ".?" searchKey ".?")) (.-Tag detail))))))
    details))

(defn defcommonlistmodel [name]
  (defmethod react/model-ch name [ctx key {:keys [searchKey page] :as args}]
    (let [configType (configType name)
          ret (chan)]
      (doto (fn/GetAllModelOnce "config.json" configType)
        (.done 
          (fn [config details] 
            (let [modelCountPerPage (if (> (.height (js/$ js/window)) 768) 9 6)
                  filtered (->> details  ;注意！本來為map，被轉為seq
                             (AvaliableIs true)
                             SortByDate
                             (FilterBySearch searchKey)
                             (drop (* page modelCountPerPage))
                             (take modelCountPerPage))
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
                        "prev_href" (str "#" (cljs.core/name key) "/" (dec page))
                        "next_href" (str "#" (cljs.core/name key) "/" (inc page))
                        "searchWord" (if (some? searchKey) searchKey "")
                        "streetsnapList" (->> (map ConvertDTO filtered) (apply array)))]
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
      (doto (fn/GetAllModelOnce "config.json" configType)
        (.done
          (fn [config details] 
            (let [dir (aget config configType)
                  detail (get details id)
                  filtered (->> details  ;注意！本來為map，被轉為seq
                             (AvaliableIs true)
                             SortByDate
                             (take 6))
                  ConvertHeadDTO (fn [[key, detail]]
                                   (js-obj "id" key "url" (fn/ServeImagePath (str dir "/" key "/image_1.jpg"))))
                  CreateImageDTO (fn [ServeFn idxs]
                                   (let [urls (for [idx idxs] (str dir "/" id "/image_" idx ".jpg"))
                                         dtos (for [url urls] (js-obj "id" url "url" (ServeFn url)))]
                                     (apply array dtos)))
                  dto (js-obj 
                        "visibleFullscreen" (or (true? (.-Fullscreen detail)) false)
                        "visibleFBComment" (or (true? (.-FBComment detail)) false)
                        "historyList" (->> (map ConvertHeadDTO filtered) (apply array))
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
  (let [ret (chan)]
    (doto (fn/GetHomeModelMaybeKey "config.json")
      (.done 
        (fn [detail]
          (go 
            (>! ret [nil (js-obj "modelKey" (.-ModelKey detail))])
            (close! ret))))
      (.fail
        #(go 
          (>! ret [% nil])
          (close! ret))))
    ret))
    
(defmethod react/model-ch :Big [ctx key {url :basicUrl :as args}]
  (let [ret (chan)]
    (go 
      (>! ret [nil (js-obj "url" (str url "?Width=600&Height=480"))])
      (close! ret))
    ret))
    
(defmethod react/model-ch :Event [ctx key {id :id :as args}]
  (let [ret (chan)]
    (go 
      (>! ret [nil nil])
      (close! ret))
    ret))
    
(defn indexOf [list id start]
  (if (= id (ffirst list))
      start
      (recur (rest list) id (inc start))))
    
(defmethod react/model-ch :News [ctx key {id :id :as args}]
  (let [ret (chan)]
    (doto (fn/GetAllModelOnce "config.json" "event")
          (.done (fn [config data]
                    (let [filtered (SortByDate data)
                          evtId (if (= "null" (str id)) (ffirst filtered) id)
                          evt (get data evtId)
                          photos (apply array 
                                    (map 
                                      #(js-obj
                                        "path"
                                        (fn/ServeImagePath (str (aget config "event") "/" evtId "/image_" (inc %) ".jpg")))
                                      (range (aget evt "Count"))))
                          idx (let [find (dec (indexOf filtered evtId 0))]
                                (cond
                                  (< find 0) (dec (count filtered))
                                  (>= find (count filtered)) 0
                                  :else find))
                          idx2 (let [find (inc (indexOf filtered evtId 0))]
                                (cond
                                  (< find 0) (dec (count filtered))
                                  (>= find (count filtered)) 0
                                  :else find))]
                      (go 
                        (>! ret [nil (js-obj 
                                        "prev_href" (str "#News/id=" (first (nth filtered idx)))
                                        "next_href" (str "#News/id=" (first (nth filtered idx2)))
                                        "title" (aget evt "Title")
                                        "date" (aget evt "Date")
                                        "sideList" photos
                                        "content" (aget evt "Content")
                                        "form" (aget evt "Form"))])
                        (close! ret)))))
          (.fail (fn [err] (.log js/console err))))
    ret))
  
(defcommonlistmodel :StreetSnapList)
(defcommonlistmodel :ModelList)
(defcommonlistmodel :ProductList)
(defcommonmodel :StreetSnap)
(defcommonmodel :Model)
(defcommonmodel :Product)