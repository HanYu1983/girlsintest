(ns app.page.MenubarView
  (:require [app.event :as evt]))

(defrecord MenubarView [])

(defn create [elem]
  (let [this (promise nil)
        handleBtnMouseOut (fn [div] 
                        (let [btnSelf (js/$ div)
                              btnOver (.find btnSelf ".navover")]
                          (.animate btnOver {width "0px"} 300)))
        handleBtnMouseOver (fn [div]
                          (let [btnSelf (js/$ div)
                                btnOver (.find btnSelf ".navover")]
                            (.animate btnOver {width "120px"} 300)))]
    (.delegate elem "div" "click" (fn [div] (.onNext evt/onMenubarBtnClick (.id div))))
    (.delegate elem "div" "mouseover" handleBtnMouseOver)
    (.delegate elem "div" "mouseout" handleBtnMouseOut)
    (deliver this (merge (MenubarView.) {:elem elem}))))

(defn open [this]
  (.fadeIn (:elem this) 400))

(defn close [this]
  (.fadeOut (:elem this) 400))
          
(extend-type MenubarView
  page/IPage
  (open [this]
    (open this))

  (close [this]
    (close this)))