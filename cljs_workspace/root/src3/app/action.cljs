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
                   [[:Home :default] "#img_homeLogo"]]]
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
          (str (name react-action) "/search=" searchKey)
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
      "picture" (aget model "styleUrl")
      "caption" (str (aget model "name") " in sdyle")
      "description" (aget model "modelDetail")
      "callback" (fn [res]
                   (when res (js/alert "share success!")))
      "err" #(js/alert %))
    (.postMessageToMyboard js/vic.facebook))
  ctx)
  
(defn ShowLoadingImage [ctx {view-obj :view-obj :as args}]
  (js/waitForImages)
  ctx)
