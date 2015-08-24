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
  create-router)

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
                :Event          {:onOpen            [:nil (act/ComposeAction
                                                            act/ShowLoadingImage
                                                            act/ChangeLogo
                                                            (act/Unuse act/ShowFooterOrNot))]}
                :Home           {:nothing           [:nil identity]
                                 :reset             [:Home act/Navigate]
                                 :toNews            [:News act/Navigate]
                                 :toEvent           [:Event act/Navigate]
                                 :toModelList       [:ModelList act/Navigate]
                                 :toStreetSnapList  [:StreetSnapList act/Navigate]
                                 :toProductList     [:ProductList act/Navigate]
                                 :taggleMenu        [:nil identity]}
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
                                    btnOver (.find btnSelf ".btn_nav_over")]
                                (.animate btnOver (js-obj "width" "0px") 300))))
        handleBtnMouseOver (fn [evt]
                            (this-as that
                              (let [btnSelf (js/$ that)
                                    btnOver (.find btnSelf ".btn_nav_over")]
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
      #(go (>! react/OnReact [:Home :taggleMenu nil])))))

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
