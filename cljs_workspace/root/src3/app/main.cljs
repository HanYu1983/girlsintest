(ns app.main
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [chan <!]]
    [tool.react :as react]
    [app.fn :as fn]
    [app.model :as model]
    [app.view :as view]
    [app.action :as act]
    [app.auth :as auth]))

(declare
  startapp
  menubar
  header
  create-router
  detectOrientation)

(defn main []
  (doto (auth/auth "/auth")
    (.done startapp)
    (.fail #(.log js/console "fail!"))))

  ; goappengine 不支援中文檔案名稱，所以不能使用中文檔名
(defn startapp []
  (let [urlRouter (create-router)
        route { :Router         {:toHome            [:Home react/ChangeView]
                                 :toModelList       [:ModelList react/ChangeView]
                                 :toStreetSnapList  [:StreetSnapList react/ChangeView]
                                 :toProductList     [:ProductList react/ChangeView]
                                 :toStreetSnap      [:StreetSnap react/ChangeView]
                                 :toModel           [:Model react/ChangeView]
                                 :toProduct         [:Product react/ChangeView]
                                 :toEvent           [:Event react/ChangeView]
                                 :toNews            [:News react/ChangeView]}
                :Event          {:orientationchange [:nil 
                                                     (act/ComposeAction
                                                       act/DetectMediaQuery
                                                       act/OpenMenuIfPcMode)]
                                 :onOpen            [:nil 
                                                     (act/ComposeAction
                                                        act/CloseMenu
                                                        act/ShowLoadingImage
                                                        act/ChangeLogo
                                                       (act/Unuse act/ShowFooterOrNot))]}
                :Home           {:nothing           [:nil identity]
                                 :reset             [:Home
                                                     (act/ComposeAction
                                                        act/ToggleMenu
                                                        act/Navigate)]
                                 :toNews            [:News
                                                     (act/ComposeAction
                                                        act/ToggleMenu
                                                        act/Navigate)]
                                 :toEvent           [:Event
                                                     (act/ComposeAction
                                                        act/ToggleMenu
                                                        act/Navigate)]
                                 :toModelList       [:ModelList 
                                                     (act/ComposeAction
                                                        act/ToggleMenu
                                                        act/Navigate)]
                                 :toStreetSnapList  [:StreetSnapList 
                                                     (act/ComposeAction
                                                        act/ToggleMenu
                                                        act/Navigate)]
                                 :toProductList     [:ProductList 
                                                     (act/ComposeAction
                                                        act/ToggleMenu
                                                        act/Navigate)]
                                 :menuClick        [:nil act/ToggleMenu]}
                :StreetSnapList {:toDetail [:StreetSnap act/Navigate]
                                 :search   [:StreetSnapList act/Navigate]
                                 :reset    [:StreetSnapList act/Navigate]}
                :ModelList      {:toDetail [:Model act/Navigate]
                                 :search   [:ModelList act/Navigate]
                                 :reset    [:ModelList act/Navigate]}
                :ProductList    {:toDetail [:Product act/Navigate]
                                 :search   [:ProductList act/Navigate]
                                 :reset    [:ProductList act/Navigate]}
                :StreetSnap     {:toList   [:StreetSnapList act/Navigate]
                                 :fullscreen [:nil act/OpenFullScreen]
                                 :toDetail [:StreetSnap act/Navigate]
                                 :toBig    [:Big react/OpenView]
                                 :shareFB  [:Model act/ShareFB]}
                :Model          {:toList   [:ModelList act/Navigate]
                                 :fullscreen [:nil act/OpenFullScreen]
                                 :toDetail [:Model act/Navigate]
                                 :toBig    [:Big react/OpenView]
                                 :shareFB  [:Model act/ShareFB]}
                :Product        {:toList   [:ProductList act/Navigate]
                                 :fullscreen [:nil act/OpenFullScreen]
                                 :toDetail [:Product act/Navigate]
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
                      (let [tomorrow (.add (.today js/Date) (js-obj "days" 1))
                            startday (.add (.today js/Date) (js-obj "days" -1))
                            now (.parse js/Date timestr)]
                        (.between now startday tomorrow))))
        
        menubarElem (.find root "#mc_menubar")
        
        media-query-info (js/$ "#media-query-info")
        media-type
        (condp = (.css media-query-info "left")
          "0px" :pc
          "1px" :ipad
          "2px" :iphone
          :iphone)
                  
        ctx {:root root
             :router urlRouter
             :views {}
             :container (.find root "#mc_pageContainer")
             :popupContainer (.find root "#mc_popupContainer")
             :tmpl-item tmpl-item
             :media-type media-type}]
    (detectOrientation)
    (menubar menubarElem)
    (header urlRouter root)
    (go (async/reduce (partial react/React route) ctx react/OnReact))
    (.start js/Backbone.history)))

(defn detectOrientation []
  (.on (js/$ js/window)
    "orientationchange"
    (fn [e]
      (go (>! react/OnReact [:Event :orientationchange (.-orientation e)])))))

(defn menubar [elem]
  (let [handleBtnMouseOut (fn [evt]
                            (this-as that
                              (let [btnSelf (js/$ that)
                                    btnOver (.find btnSelf ".btn_nav_over")]
                                (.animate btnOver (js-obj "width" "0px") 300))))
        handleBtnMouseOver (fn [evt]
                            (this-as that
                              (let [btnSelf (js/$ that)
                                    btnOver (.find btnSelf ".btn_nav_over")]
                                (.animate btnOver (js-obj "width" "120px") 300))))]
    (.delegate elem "div" "mouseover" handleBtnMouseOver)
    (.delegate elem "div" "mouseout" handleBtnMouseOut)
    (.delegate elem "div" "click"
      (fn [evt]
        (this-as that
          (let [id (.-id that)
                route (condp = id
                        "btn_nav_celebrity" [:Home :toCelebrity nil]
                        "btn_nav_event" [:Home :toEvent nil]
                        "btn_nav_model" [:Home :toModelList nil]
                        "btn_nav_streetSnap" [:Home :toStreetSnapList nil]
                        "btn_nav_product" [:Home :toProductList nil]
                        "btn_nav_news" [:Home :toNews nil]
                        (do (.log js/console "no menu " id)
                            [:Home :nothing nil]))]
            (go (>! react/OnReact route))))))))

(defn header [router root]
  (let [btn_home (.find root "#btn_backhome")
        btn_menu (.find root "#btn_menu")]
    (.click btn_home
      #(go (>! react/OnReact [:Home :reset nil])))
    (.click btn_menu
      #(go (>! react/OnReact [:Home :menuClick nil])))))

(defn create-router []
  (let [Router (->>
                (js-obj
                  "routes" (js-obj "StreetSnap" "StreetSnap"
                                   "StreetSnap/id=:id" "StreetSnap"
                                   "StreetSnapList" "StreetSnapList"
                                   "StreetSnapList/:search/:page" "StreetSnapListSearch"
                                   "StreetSnapList/:page" "StreetSnapList"

                                   "Model" "Model"
                                   "Model/id=:id" "Model"
                                   "ModelList" "ModelList"
                                   "ModelList/:search/:page" "ModelListSearch"
                                   "ModelList/:page" "ModelList"

                                   "Product" "Product"
                                   "Product/id=:id" "Product"
                                   "ProductList" "ProductList"
                                   "ProductList/:search/:page" "ProductListSearch"
                                   "ProductList/:page" "ProductList"

                                   "Event" "Event"
                                   "News" "News"
                                   "News/id=:id" "News"
                                   "" "default")
                  ;將key編碼，以支援中文的key(appengine不支援中文檔名)
                  "StreetSnap"
                  (fn [id]
                    (go (>! react/OnReact [:Router :toStreetSnap {:id (js/encodeURIComponent id)}])))

                  "StreetSnapList"
                  (fn [page]
                    (let [real (if (nil? page) 0 (int page))]
                      (go (>! react/OnReact [:Router :toStreetSnapList {:page real}]))))

                  "StreetSnapListSearch"
                  (fn [search page]
                    (go (>! react/OnReact [:Router :toStreetSnapList {:searchKey search :page (int page)}])))

                  "Model"
                  (fn [id]
                    (go (>! react/OnReact [:Router :toModel {:id (js/encodeURIComponent id)}])))

                  "ModelList"
                  (fn [page]
                    (let [real (if (nil? page) 0 (int page))]
                      (go (>! react/OnReact [:Router :toModelList {:page real}]))))

                  "ModelListSearch"
                  (fn [search page]
                    (go (>! react/OnReact [:Router :toModelList {:searchKey search :page (int page)}])))

                  "Product"
                  (fn [id]
                    (go (>! react/OnReact [:Router :toProduct {:id (js/encodeURIComponent id)}])))

                  "ProductList"
                  (fn [page]
                    (let [real (if (nil? page) 0 (int page))]
                      (go (>! react/OnReact [:Router :toProductList {:page real}]))))

                  "ProductListSearch"
                  (fn [search page]
                    (go (>! react/OnReact [:Router :toProductList {:searchKey search :page (int page)}])))

                  "Event"
                  (fn [id]
                    (go (>! react/OnReact [:Router :toEvent {:id (js/encodeURIComponent id)}])))

                  "News"
                  (fn [id]
                    (go (>! react/OnReact [:Router :toNews {:id (js/encodeURIComponent id)}])))

                  "default"
                  #(go (>! react/OnReact [:Router :toHome nil])))

                (.extend js/Backbone.Router))
        router (new Router)]
    router))

(main)
