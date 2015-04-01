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
            
(defn header [router root]
  (let [btn_home (.find root "#btn_backhome")]
    (.click btn_home
      #(go (>! react/OnReact [:Home :reset nil])))))

(defn create-router []
  (let [Router (->>
                (js-obj
                  "routes" (js-obj "StreetSnap" "StreetSnap"
                                   "StreetSnap/id=:id" "StreetSnap"
                                   "StreetSnapList" "StreetSnapList"
                                   "StreetSnapList/search=:search" "StreetSnapList"
                                   "" "default")
                  "StreetSnap"      (fn [id]
                                      (go (>! react/OnReact [:Router :toDetail {:id id}])))
                  "StreetSnapList"  (fn [search]
                                      (go (>! react/OnReact [:Router :toStreetSnapList {:searchKey search}])))
                  "default"         #(go (>! react/OnReact [:Router :toHome nil])))
                (.extend js/Backbone.Router))
        router (new Router)]
    (.start js/Backbone.history)
    router))

(defn OpenPhotoUrl [ctx {:keys [basicUrl] :as args}]
  (.open js/window (fn/ServeImagePath basicUrl) "_blank")
  ctx)
  
(defn ShowLogo [{:keys [root] :as ctx} {:keys [curr-view] :as args}]
  (let [logoNames [[[:Product :ProductList] "#img_streetProductLogo"]
                   [[:StreetSnap :StreetSnapList] "#img_streetSnapLogo"]
                   [[:Model :ModelList] "#img_streetModelsLogo"]
                   [[:Home :default] "#img_homeLogo"]]]
    (doseq [[names logoName] logoNames]
      (if (some #(= % curr-view) names)
        (doto (.find root logoName)
          (.fadeIn 400))
        (doto (.find root logoName)
          (.hide)))))
  ctx)
  
(defn Navigate [{:keys [router] :as ctx} {:keys [react-action] :as args}]
  (-> router
    (.navigate 
      (if (= :Home react-action)
        ""
        (name react-action))
      (js-obj "trigger" true)))
  ctx)
  

(defn main []
  (let [urlRouter (create-router)
        route { :Router         {:toHome            [:Home react/ChangeView]
                                 :toModelList       [:ModelList react/ChangeView]
                                 :toStreetSnapList  [:StreetSnapList react/ChangeView]
                                 :toProductList     [:ProductList react/ChangeView]}
                :Event          {:onOpen            [:nil ShowLogo]}
                :Home           {:reset             [:Home Navigate]
                                 :toModelList       [:ModelList Navigate]
                                 :toStreetSnapList  [:StreetSnapList Navigate]
                                 :toProductList     [:ProductList Navigate]}
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
        sdyleColor "rgb(185,71,132)"
        root (js/$ ".root")
        tmpl-item (js-obj 
                    "brandToColor" 
                    (fn [brand] (when (-> (.-length brand) (> 0)) sdyleColor)))
        ctx {:root root
             :router urlRouter
             :views {} 
             :container (.find root "#mc_pageContainer")
             :tmpl-item tmpl-item}]
    (menubar root)
    (header urlRouter root)
    (go (async/reduce (partial react/React route) ctx react/OnReact))))
    
(main)