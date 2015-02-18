(ns app
  (:require 
    [app.controller :as ctr]
    [app.event :as evt]
    [app.page.MenubarView]
    [app.page.HeaderView]
    [app.page.HeaderController]
    [app.page.MenubarController]))
    
(declare onHeaderBtnBackhomeClick)
(declare onMenubarBtnClick)
(declare closeAllPage)
(declare openPageController)
(declare closePageController)

(defn main []
  (let [this (atom nil)
        coll_pages (atom {})
        mc_pageContainer (js/$ "#mc_pageContainer")
        mc_popupContainer (js/$ "#mc_popupContainer")
        mc_loading (js/$ "#mc_loading")
        header (doto
                  (app.page.HeaderController/create)
                  (ctr/set-view
                    (app.page.HeaderView/create (js/$ "#mc_header"))))
        menubar (doto
                  (app.page.MenubarController/create)
                  (ctr/set-view
                    (app.page.MenubarView/create (js/$ "#mc_menubar"))))]
    (.subscribe evt/onHeaderBtnBackhomeClick (partial onHeaderBtnBackhomeClick this))
    (.subscribe evt/onMenubarBtnClick (partial onMenubarBtnClick this))
    (ctr/open header)
    (ctr/open menubar)
    (reset! this {:coll_pages coll_pages
                  :mc_pageContainer mc_pageContainer
                  :mc_popupContainer mc_popupContainer
                  :mc_loading mc_loading})))

(defn openPage
  "打開一個頁面"
  [this name param]
  (let [container (:mc_pageContainer @this)]
    (closeAllPage this container)
    (openPageController this name container param)))

(defn closePage
  "關閉一個頁面"
  [this name container]
  (closePageController this name container))


(defn closePageController
  "關掉指定頁面"
  [this name container]
  (when-let [page (aget (:coll_pages @this) name)]
    (.empty container)
    (.close page)
    (js/delete (:coll_pages @this) name)
    page))

(defn closeAllPage [this container])

(defn openPageController [this name container param])

(defn onHeaderBtnBackhomeClick [this view]
  (.log js/console @this view))
  
(defn onMenubarBtnClick [this id]
  (condp = id
    "btn_nav_celebrity" (js/alert "敬請期待")
    "btn_nav_model" (doto 
                      (:router @this) 
                      (.navigate "modelsList" (js-obj "trigger" true)))
    "btn_nav_event" (js/alert "敬請期待")
    "btn_nav_streetSnap" (doto 
                           (:router @this) 
                           (.navigate "streetsnapList" (js-obj "trigger" true)))
    "btn_nav_news" (js/alert "敬請期待")
    true))

(main)