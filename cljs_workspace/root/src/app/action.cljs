(ns app.action
  (:require
    [app.fn :as fn]))

(defn Unuse [fns]
  (fn [ctx args]
    ctx))
    
(defn ComposeAction [& fns]
  (fn [ctx args]
    (->>
      (apply vector fns)
      (reduce (fn [ctx f] (f ctx args)) ctx))))
      
(defn OpenFullScreen [ctx {:keys [model] :as args}]
  (.open js/window (str "indexIframe.html?key=" (.-modelKey model)))
  ctx)
        
(defn OpenPhotoUrl [ctx {:keys [basicUrl] :as args}]
  (.open js/window (fn/ServeImagePath basicUrl) "_blank")
  ctx)
  
(defn ChangeLogo [{:keys [root] :as ctx} {:keys [curr-view] :as args}]
  (let [logoNames [[[:Product :ProductList] "#img_streetProductLogo"]
                   [[:StreetSnap :StreetSnapList] "#img_streetSnapLogo"]
                   [[:Model :ModelList] "#img_streetModelsLogo"]
                   [[:Home :default] "#img_homeLogo"]
                   [[:News] "#img_streetNewsLogo"]]]
    (doseq [[names logoName] logoNames]
      (if (some #(= % curr-view) names)
        (doto (.find root logoName)
          (.fadeIn 400))
        (doto (.find root logoName)
          (.hide)))))
  ctx)
  
(defn ShowFooterOrNot [{:keys [root] :as ctx} {:keys [curr-view] :as args}]
  (let [shouldHide [:Product :Model :StreetSnap]]
    (if (some #(= % curr-view) shouldHide)
      (doto (.find root "#mc_footer")
        (.fadeOut))
      (doto (.find root "#mc_footer")
        (.fadeIn 400))))
  ctx)
  
(defn Navigate [{:keys [router] :as ctx} {:keys [react-action id searchKey] :as args}]
  (-> router
    (.navigate
      
      (cond
        (= :Home react-action)
        ""
        
        (some #(= % react-action) [:StreetSnap :Model :Product])
        (str (name react-action) "/id=" id)
        
        (some #(= % react-action) [:StreetSnapList :ModelList :ProductList])
        (if (some? searchKey)
          (str (name react-action) "/" searchKey "/0")
          (name react-action))
        
        :else
        (name react-action))
        
      (js-obj "trigger" true)))
  ctx)

(defn ShareFB [ctx {:keys [model] :as args}]
  (->>
    (js-obj
      "name" "sdyle"
      "link" (aget js/window "location" "href")
      "picture" (str "https" (aget model "styleUrl"))
      "caption" (str (aget model "name") " in sdyle")
      "description" (aget model "modelDetail")
      "callback" 
      (fn [res]
        (when res (js/alert "分享成功！")))
      "err" #(js/alert %))
    (.postMessageToMyboard js/vic.facebook))
  ctx)
  
(defn ShowLoadingImage [ctx {view-obj :view-obj :as args}]
  (js/waitForImages)
  ctx)
  
  
;點非menu展開按鈕必須關閉menu
(defn ToggleMenu [{root :root media-type :media-type :as ctx} args]
  (let [should-apply-this
        (or 
          (= :iphone media-type)
          (= :ipad media-type))
        menu-elem (.find root "#mc_menubar")
        isHide (= "none" (.css menu-elem "display"))]
    (when should-apply-this
      (if isHide
        (.show menu-elem)
        (.hide menu-elem))))
  ctx)
  
;點選menu展開按鈕必須都有作用，不管是pc版還是mobile版。反正pc版根本沒有menu展開按鈕，這樣可以避開一些問題
(defn ToggleMenuForce [{root :root media-type :media-type :as ctx} args]
  (let [should-apply-this true
        menu-elem (.find root "#mc_menubar")
        isHide (= "none" (.css menu-elem "display"))]
    (when should-apply-this
      (if isHide
        (.show menu-elem)
        (.hide menu-elem))))
  ctx)
  
(defn OpenMenuIfPcMode [{root :root media-type :media-type :as ctx} args]
  (let [should-apply-this (= :pc media-type)
        menu-elem (.find root "#mc_menubar")]
    (when should-apply-this
      (.show menu-elem)))
  ctx)
  
(defn CloseMenu [{root :root media-type :media-type :as ctx} args]
  (let [should-apply-this
        (or 
          (= :iphone media-type)
          (= :ipad media-type))
        menu-elem (.find root "#mc_menubar")]
    (when should-apply-this
      (.hide menu-elem)))
  ctx)

(defn DetectMediaQuery [ctx _]
  (let [media-query-info (js/$ "#media-query-info")
        media-type
        (condp = (.css media-query-info "left")
          "0px" :pc
          "1px" :ipad
          "2px" :iphone
          :iphone)]
    (assoc ctx :media-type media-type)))
    
(defn AlertInfomationIfModelPageAtMobileDevice [ctx {:keys [curr-view] :as args}]
  (if
    (and
      (some #(= % curr-view) [:Model :StreetSnap])
      (js/mobileAndTabletcheck)
      (not (get-in ctx [:flag :mobileInformation])))
    (do
      (js/setTimeout
        #(js/alert js/constant.modelInformation)
        1000)
      (assoc-in ctx [:flag :mobileInformation] true))
    ctx))
  
(defn Tracking [ctx {where :react-where where2 :react-where2 act :react-action :as args}]
  (condp = where
    :Router ((.-page js/googleTracking) (name act))
    ((.-click js/googleTracking) (str (name where) "-" (name where2))))
  ctx)