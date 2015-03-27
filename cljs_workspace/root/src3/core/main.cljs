(ns core.main
  (:require-macros [macro.core :as tool])
  (:require 
    [tool.app :as app]
    [core.model :as model]
    [core.view :as view]
    [core.event :as evt]
    [core.fn :as fn]))

(defn menubar [root]
  (let [menubar (.find root "#mc_menubar")
        handleBtnMouseOut (fn [evt] 
                            (this-as that
                              (let [btnSelf (js/$ that)
                                    btnOver (.find btnSelf ".navover")]
                                (.animate btnOver (js-obj "width" "0px") 300))))
        handleBtnMouseOver (fn [evt]
                            (this-as that
                              (let [btnSelf (js/$ that)
                                    btnOver (.find btnSelf ".navover")]
                                (.animate btnOver (js-obj "width" "120px") 300))))]
    (.delegate menubar "div" "mouseover" handleBtnMouseOver)
    (.delegate menubar "div" "mouseout" handleBtnMouseOut)
    (.delegate menubar "div" "click" 
      (fn [evt]
        (this-as that
          (let [id (.-id that)
                route (condp = id
                        "btn_nav_celebrity" [:Home :toCelebrity nil]
                        "btn_nav_event" [:Home :toEvent nil]
                        "btn_nav_model" [:Home :toModelList [:model]]
                        "btn_nav_streetSnap" [:Home :toStreetSnapList [:street]]
                        "btn_nav_product" [:Home :toProductList [:product]]
                        identity)]
            (.onNext evt/OnRoute route)))))))


(defn main []
  (let [root (js/$ ".root")
        ctx (atom {
              :views {}
              :container (.find root "#mc_pageContainer")
              :route {:Home {:toModelList [:ModelList model/CreateStreetSnapListModel]
                             :toStreetSnapList [:StreetSnapList model/CreateStreetSnapListModel]
                             :toProductList [:ProductList model/CreateStreetSnapListModel]}
                      :StreetSnapList {:toDetail [:StreetSnap model/CreateStreetSnapModel]}
                      :ModelList      {:toDetail [:Model model/CreateStreetSnapModel]}
                      :ProductList    {:toDetail [:Product model/CreateStreetSnapModel]}}})]
    (menubar root)
    (.subscribe evt/OnRoute #(apply (partial app/Route ctx) %))
    (swap! ctx #(app/OpenView %1 :Home (partial model/CreateHomeModel ctx :Home)))))


(main)