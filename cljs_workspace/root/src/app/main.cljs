(ns app.main
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [chan <! timeout]]
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
  (doto (auth/auth "/goapp/auth")
    (.done startapp)
    (.fail #(.log js/console "fail!"))))

  ; goappengine 不支援中文檔案名稱，所以不能使用中文檔名
(defn startapp []
  (let [urlRouter (create-router)
        route { :Router         {:toHome            [:Home 
                                                    (act/ComposeAction
                                                      act/Tracking
                                                      react/ChangeView)]
                                 :toModelList       [:ModelList 
                                                    (act/ComposeAction
                                                      act/Tracking
                                                      react/ChangeView)]
                                 :toStreetSnapList  [:StreetSnapList
                                                    (act/ComposeAction
                                                      act/Tracking
                                                      react/ChangeView)]
                                 :toProductList     [:ProductList 
                                                    (act/ComposeAction
                                                      act/Tracking
                                                      react/ChangeView)]
                                 :toStreetSnap      [:StreetSnap 
                                                    (act/ComposeAction
                                                      act/Tracking
                                                      act/WindowScrollToZero
                                                      react/ChangeView)]
                                 :toModel           [:Model 
                                                    (act/ComposeAction
                                                      act/Tracking
                                                      act/WindowScrollToZero
                                                      react/ChangeView)]
                                 :toProduct         [:Product 
                                                    (act/ComposeAction
                                                      act/Tracking
                                                      act/WindowScrollToZero
                                                      react/ChangeView)]
                                 :toEvent           [:Event 
                                                    (act/ComposeAction
                                                      act/Tracking
                                                      react/ChangeView)]
                                 :toNews            [:News 
                                                    (act/ComposeAction
                                                      act/Tracking
                                                      react/ChangeView)]}
                :Event          {:orientationchange [:nil 
                                                     (act/ComposeAction
                                                       act/DetectMediaQuery
                                                       act/OpenMenuIfPcMode)]
                                 :onOpen            [:nil 
                                                     (act/ComposeAction
                                                        act/CloseMenu
                                                        act/ShowLoadingImage
                                                        act/ChangeLogo
                                                        act/AlertInfomationIfModelPageAtMobileDevice
                                                        (act/Unuse act/ShowFooterOrNot))]}
                :Home           {:nothing           [:nil identity]
                                 :reset             [:Home
                                                     (act/ComposeAction
                                                       act/Tracking
                                                       act/ToggleMenu
                                                       act/Navigate)]
                                 :toNews            [:News
                                                     (act/ComposeAction
                                                       act/Tracking
                                                       act/ToggleMenu
                                                       act/Navigate)]
                                 :toEvent           [:Event
                                                     (act/ComposeAction
                                                       act/Tracking
                                                       act/ToggleMenu
                                                       act/Navigate)]
                                 :toModelList       [:ModelList 
                                                     (act/ComposeAction
                                                       act/Tracking
                                                       act/ToggleMenu
                                                       act/Navigate)]
                                 :toStreetSnapList  [:StreetSnapList 
                                                     (act/ComposeAction
                                                       act/Tracking
                                                       act/ToggleMenu
                                                       act/Navigate)]
                                 :toProductList     [:ProductList 
                                                     (act/ComposeAction
                                                       act/Tracking
                                                       act/ToggleMenu
                                                       act/Navigate)]
                                 :menuClick        [:nil act/ToggleMenuForce]}
                :StreetSnapList {:toDetail [:StreetSnap (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :search   [:StreetSnapList (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :reset    [:StreetSnapList (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]}
                :ModelList      {:toDetail [:Model (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :search   [:ModelList (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :reset    [:ModelList (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]}
                :ProductList    {:toDetail [:Product (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :search   [:ProductList (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :reset    [:ProductList (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]}
                :StreetSnap     {:toList   [:StreetSnapList (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :fullscreen [:nil (act/ComposeAction
                                             act/Tracking
                                             act/OpenFullScreen)]
                                 :toDetail [:StreetSnap (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :toBig    [:Big (act/ComposeAction
                                             act/Tracking
                                             react/OpenView)]
                                 :shareFB  [:Model (act/ComposeAction
                                             act/Tracking
                                             act/ShareFB)]}
                :Model          {:toList   [:ModelList (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :fullscreen [:nil (act/ComposeAction
                                             act/Tracking
                                             act/OpenFullScreen)]
                                 :toDetail [:Model (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :toBig    [:Big (act/ComposeAction
                                             act/Tracking
                                             react/OpenView)]
                                 :shareFB  [:Model (act/ComposeAction
                                             act/Tracking
                                             act/ShareFB)]}
                :Product        {:toList   [:ProductList (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :fullscreen [:nil (act/ComposeAction
                                             act/Tracking
                                             act/OpenFullScreen)]
                                 :toDetail [:Product (act/ComposeAction
                                             act/Tracking
                                             act/Navigate)]
                                 :toBig    [:Big (act/ComposeAction
                                             act/Tracking
                                             react/OpenView)]
                                 :shareFB  [:Model (act/ComposeAction
                                             act/Tracking
                                             act/ShareFB)]}
                :Big            {:close    [:Big (act/ComposeAction
                                             act/Tracking
                                             react/CloseView)]}}
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
        browser (.detectBrowser js/leo.utils)
        ctx {
          :root root
          :router urlRouter
          :views {}
          :container (.find root "#mc_pageContainer")
          :popupContainer (.find root "#mc_popupContainer")
          :tmpl-item tmpl-item
          :media-type media-type
          :flag {
            ; 讓行動版本解析度不足資訊只show一次
            :mobileInformation false 
          }
          :browser browser
        }]
    (when-not 
      (or 
        (.-isChrome browser)
        (.-isSafari browser))
      (js/alert js/constant.browserInformation))
    (.log js/console (.stringify js/JSON browser))
    (detectOrientation)
    (menubar menubarElem)
    (header urlRouter root)
    (go (async/reduce (partial react/React route) ctx react/OnReact))
    (.start js/Backbone.history)))


(defn detectOrientation []
  (.on (js/$ js/window)
    "orientationchange"
    (fn [e]
      (go
        (<! (timeout 1000)) ; 延遲後才能正確query到
        (>! react/OnReact [:Event :orientationchange (.-orientation e)])))))

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
      #(go 
        (>! react/OnReact [:Home :menuClick nil])))))

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
