(ns app.page.MenubarView
  (:require 
    [app.page :as page]
    [app.event :as evt]
    [app.page.DefaultView :as dview]))

(defrecord MenubarView [])

(defn create [elem]
  (let [this (atom nil)
        handleBtnMouseOut (fn [evt] 
                            (this-as that
                              (let [btnSelf (js/$ that)
                                    btnOver (.find btnSelf ".navover")]
                                (.log js/console btnOver)
                                (.animate btnOver {:width "0px"} 300))))
        handleBtnMouseOver (fn [evt]
                              (this-as that
                                (let [btnSelf (js/$ that)
                                      btnOver (.find btnSelf ".navover")]
                                  (.log js/console btnOver)
                                  (.animate btnOver {:width "120px"} 300))))]
    (.delegate elem "div" "click" (fn [div] (.onNext evt/onMenubarBtnClick (.id div))))
    (.delegate elem "div" "mouseover" handleBtnMouseOver)
    (.delegate elem "div" "mouseout" handleBtnMouseOut)
    (reset! this (merge (MenubarView.) {:elem elem}))))

(extend-type MenubarView
  page/IPage
  (open [this]
    (dview/open this))

  (close [this]
    (dview/close this)))