(ns app.core
  (:require 
    [app.page.core :as page]
    [app.page.HeaderView]
    [app.event :as evt]))
    
(declare onHeaderBtnBackhomeClick)

(defn main []
  (let [this (atom nil)
        coll_pages (atom {})
        mc_pageContainer (js/$ "#mc_pageContainer")
        mc_popupContainer (js/$ "#mc_popupContainer")
        mc_loading (js/$ "#mc_loading")
        header (app.page.HeaderView/create (js/$ "#mc_header"))]
    (.subscribe evt/onHeaderBtnBackhomeClick (partial onHeaderBtnBackhomeClick this))
    (page/open header)
    (reset! this {:coll_pages coll_pages
                  :mc_pageContainer mc_pageContainer
                  :mc_popupContainer mc_popupContainer
                  :mc_loading mc_loading})))

(defn onHeaderBtnBackhomeClick [this view]
  (.log js/console @this view))

(main)