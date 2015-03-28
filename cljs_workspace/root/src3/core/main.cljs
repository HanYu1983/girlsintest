(ns core.main
  (:require-macros 
    [cljs.core.async.macros :refer [go]]
    [macro.core :as tool])
  (:require 
    [cljs.core.async :as async :refer [chan <!]]
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
                        "btn_nav_model" [:Home :toModelList nil]
                        "btn_nav_streetSnap" [:Home :toStreetSnapList nil]
                        "btn_nav_product" [:Home :toProductList nil]
                        identity)]
            (go (>! evt/OnReact route))))))))


(defn main []
  (let [root (js/$ ".root")
        ctx { :views {}
              :container (.find root "#mc_pageContainer")
              :route {:Home           {:toModelList       [:ModelList model/CreateStreetSnapListModel]
                                       :toStreetSnapList  [:StreetSnapList model/CreateStreetSnapListModel]
                                       :toProductList     [:ProductList model/CreateStreetSnapListModel]}
                      :StreetSnapList {:toDetail [:StreetSnap model/CreateStreetSnapModel]}
                      :ModelList      {:toDetail [:Model model/CreateStreetSnapModel]}
                      :ProductList    {:toDetail [:Product model/CreateStreetSnapModel]}
                      :StreetSnap     {:toDetail [:StreetSnap model/CreateStreetSnapModel]
                                       :toBig    [:Big app/emptyModel]}
                      :Model          {:toDetail [:Model model/CreateStreetSnapModel]
                                       :toBig    [:Big app/emptyModel]}
                      :Product        {:toDetail [:Product model/CreateStreetSnapModel]
                                       :toBig    [:Big app/emptyModel]}}}]
    (menubar root)
    (let [OpenHome (fn [ctx] (app/OpenView ctx :Home (partial model/CreateHomeModel ctx nil :Home nil)))
          React (fn [ctx] (go (<! (async/reduce app/React ctx evt/OnReact))))]
      (-> ctx
        OpenHome
        React))))


(main)