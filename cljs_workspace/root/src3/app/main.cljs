(ns app.main
  (:require-macros 
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [chan <!]]
    [tool.react :as react]
    [app.fn :as fn]
    [app.model :as model]
    [app.view :as view]))

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
            (go (>! react/OnReact route))))))))
            
  
(defn OpenPhotoUrl [ctx {:keys [basicUrl] :as args}]
  (.open js/window (fn/ServeImagePath basicUrl) "_blank")
  ctx)

(defn main []
  (let [route { :Home           {:Open              [:Home react/OpenView]
                                 :toModelList       [:ModelList react/ChangeView]
                                 :toStreetSnapList  [:StreetSnapList react/ChangeView]
                                 :toProductList     [:ProductList react/ChangeView]}
                :StreetSnapList {:toDetail [:StreetSnap react/ChangeView]
                                 :search   [:StreetSnapList react/ChangeView]
                                 :reset    [:StreetSnapList react/ChangeView]}
                :ModelList      {:toDetail [:Model react/ChangeView]
                                 :search   [:ModelList react/ChangeView]
                                 :reset    [:ModelList react/ChangeView]}
                :ProductList    {:toDetail [:Product react/ChangeView]
                                 :search   [:ProductList react/ChangeView]
                                 :reset    [:ProductList react/ChangeView]}
                :StreetSnap     {:toDetail [:StreetSnap react/ChangeView]
                                 :toBig    [:Big OpenPhotoUrl]}
                :Model          {:toDetail [:Model react/ChangeView]
                                 :toBig    [:Big OpenPhotoUrl]}
                :Product        {:toDetail [:Product react/ChangeView]
                                 :toBig    [:Big OpenPhotoUrl]}}
        root (js/$ ".root")
        ctx {:views {} :container (.find root "#mc_pageContainer")}]
    (menubar root)
    (go (async/reduce (partial react/React route) ctx react/OnReact))
    (go (>! react/OnReact [:Home :Open nil]))))
    
(main)