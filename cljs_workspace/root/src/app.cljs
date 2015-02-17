(ns app
  (:require 
    [app.controller :as ctr]
    [app.page.HeaderView]
    [app.page.HeaderController]
    [app.event :as evt]))
    
(declare onHeaderBtnBackhomeClick)

(defn main []
  (let [this (atom nil)
        coll_pages (atom {})
        mc_pageContainer (js/$ "#mc_pageContainer")
        mc_popupContainer (js/$ "#mc_popupContainer")
        mc_loading (js/$ "#mc_loading")
        header (doto
                  (app.page.HeaderController/create)
                  (ctr/set-view
                    (app.page.HeaderView/create (js/$ "#mc_header"))))]
    (.subscribe evt/onHeaderBtnBackhomeClick (partial onHeaderBtnBackhomeClick this))
    (ctr/open header)
    (reset! this {:coll_pages coll_pages
                  :mc_pageContainer mc_pageContainer
                  :mc_popupContainer mc_popupContainer
                  :mc_loading mc_loading})))

(defn onHeaderBtnBackhomeClick [this view]
  (.log js/console @this view))

(main)