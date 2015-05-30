(ns app.main
  (:require-macros 
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [chan <!]]
    [tool.react :as react]
    [app.fn :as fn]
    [app.model :as model]
    [app.view :as view]
    [app.action :as act]))

(declare 
  menubar
  header
  create-router)

(defn main []
  (let [urlRouter (create-router)
        route { :Router         {:toHome            [:Home react/ChangeView]
                                 :toModelList       [:ModelList react/ChangeView]
                                 :toStreetSnapList  [:StreetSnapList react/ChangeView]
                                 :toProductList     [:ProductList react/ChangeView]
                                 :toStreetSnap      [:StreetSnap react/ChangeView]
                                 :toModel           [:Model react/ChangeView]
                                 :toProduct         [:Product react/ChangeView]}
                :Event          {:onOpen            [:nil (act/ComposeAction 
                                                            act/ShowLoadingImage
                                                            act/ChangeLogo
                                                            (act/Unuse act/ShowFooterOrNot))]}
                :Home           {:reset             [:Home act/Navigate]
                                 :toModelList       [:ModelList act/Navigate]
                                 :toStreetSnapList  [:StreetSnapList act/Navigate]
                                 :toProductList     [:ProductList act/Navigate]}
                :StreetSnapList {:toDetail [:StreetSnap act/Navigate]
                                 :search   [:StreetSnapList act/Navigate]
                                 :reset    [:StreetSnapList act/Navigate]}
                :ModelList      {:toDetail [:Model act/Navigate]
                                 :search   [:ModelList act/Navigate]
                                 :reset    [:ModelList act/Navigate]}
                :ProductList    {:toDetail [:Product act/Navigate]
                                 :search   [:ProductList act/Navigate]
                                 :reset    [:ProductList act/Navigate]}
                :StreetSnap     {:toDetail [:StreetSnap act/Navigate]
                                 :toBig    [:Big react/OpenView]
                                 :shareFB  [:Model act/ShareFB]}
                :Model          {:toDetail [:Model act/Navigate]
                                 :toBig    [:Big react/OpenView]
                                 :shareFB  [:Model act/ShareFB]}
                :Product        {:toDetail [:Product act/Navigate]
                                 :toBig    [:Big react/OpenView]
                                 :shareFB  [:Model act/ShareFB]}
                :Big            {:close    [:Big react/CloseView]}}
        sdyleColor "rgb(185,71,132)"
        root (js/$ ".root")
        tmpl-item (js-obj 
                    "brandToColor" 
                    (fn [brand] 
                      (if (-> (.-length brand) (> 0))
                        sdyleColor
                        "rgb(122,122,122)"))
                        
                    "checkHot"
                    (fn [timestr]
                      (let [today (.today js/Date)
                            date (-> (.parse js/Date timestr) (.at "0:0:0"))]
                        (.equals today date))))
        ctx {:root root
             :router urlRouter
             :views {} 
             :container (.find root "#mc_pageContainer")
             :popupContainer (.find root "#mc_popupContainer")
             :tmpl-item tmpl-item}]
    (menubar root)
    (header urlRouter root)
    (go (async/reduce (partial react/React route) ctx react/OnReact))
    (.start js/Backbone.history)))

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
                                   "Model" "Model"
                                   "Model/id=:id" "Model"
                                   "ModelList" "ModelList"
                                   "ModelList/search=:search" "ModelList"
                                   "Product" "Product"
                                   "Product/id=:id" "Product"
                                   "ProductList" "ProductList"
                                   "ProductList/search=:search" "ProductList"
                                   "" "default")
                  "StreetSnap"      (fn [id]
                                      (go (>! react/OnReact [:Router :toStreetSnap {:id id}])))
                  "StreetSnapList"  (fn [search]
                                      (go (>! react/OnReact [:Router :toStreetSnapList {:searchKey search}])))
                  "Model"           (fn [id]
                                      (go (>! react/OnReact [:Router :toModel {:id id}])))
                  "ModelList"       (fn [search]
                                      (go (>! react/OnReact [:Router :toModelList {:searchKey search}])))
                  "Product"         (fn [id]
                                      (go (>! react/OnReact [:Router :toProduct {:id id}])))
                  "ProductList"     (fn [search]
                                      (go (>! react/OnReact [:Router :toProductList {:searchKey search}])))
                  "default"         #(go (>! react/OnReact [:Router :toHome nil])))
                (.extend js/Backbone.Router))
        router (new Router)]
    router))
    
(main)