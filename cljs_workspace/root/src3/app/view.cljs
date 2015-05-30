(ns app.view
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [chan <!]]
    [tool.react :as react]))

(defmethod react/AnimateOpen :default [{:keys [container] :as ctx} key view]
  (doto (:elem view)
    (.appendTo container)
    (.fadeIn 400))
  (go (>! react/OnReact [:Event :onOpen {:curr-view (:name view) :view-obj view}])))

(defmethod react/AnimateClose :default [{:keys [container] :as ctx} key view]
  (doto (:elem view)
    (.remove)))
      
(defn defcommonlist [name]  
  (defmethod react/AnimateClose name [ctx key view]
    (let [mc_modelContainer (.find (:elem view) "#mc_modelContainer")
          btn_search (.find (:elem view) "#btn_search")
          btn_return (.find (:elem view) "#btn_return")]
      (.off btn_return "click")
      (.off btn_search "click")
      (.undelegate mc_modelContainer "div[modelFrame]" "click"))
    (react/AnimateClose name :default view))
    
  (defmethod react/view-ch name [{:keys [tmpl-item] :as ctx} key modelChan]
    (go
      (let [[err model] (<! modelChan)
            tmpl (js/$ "#tmpl_streetsnap_list")
            elem (.tmpl tmpl model tmpl-item)
            mc_modelContainer (.find elem "#mc_modelContainer")
            btn_search (.find elem "#btn_search")
            btn_return (.find elem "#btn_return")]
        (.click btn_return
          #(go (>! react/OnReact [name :reset nil])))
        (.click btn_search
          #(let [searchKey (-> (.find elem "#input_search") (.val))]
            (when (> (.-length searchKey) 0)
              (go (>! react/OnReact [name :search {:searchKey searchKey}])))))
        (.delegate mc_modelContainer "div[modelFrame]" "click"
          #(this-as that
            (go (>! react/OnReact [name :toDetail {:id (.-id that)}]))))
        {:elem elem :name name}))))

(defn defcommondetail
  "詳細頁"
  [name]
  (defmethod react/AnimateClose name [ctx key {:keys [elem] :as view}]
    (let [mc_modelContainer (.find elem "#mc_historyContainer")
          mc_sideContainer (.find elem "#mc_sideContainer")
          mc_bottomContainer (.find elem "#mc_bottomContainer")
          img_stylePicture (.find elem "#img_stylePicture")
          btn_share (.find elem "#btn_share")]
      (.undelegate mc_modelContainer "img" "click")
      (.undelegate mc_sideContainer "img" "click")
      (.undelegate mc_bottomContainer "img" "click")
      (.off img_stylePicture "click")
      (.off btn_share "click"))
    (react/AnimateClose ctx :default view))
    
  (defmethod react/AnimateOpen name [ctx key {:keys [elem] :as view}]
    (let [mc_3dmask (.find elem "#mc_3dmask")]
      (go 
        (<! (async/timeout 5000))
        (.fadeOut mc_3dmask 400)))
    (react/AnimateOpen ctx :default view))
    
  (defmethod react/view-ch name [{:keys [tmpl-item] :as ctx} key modelChan]
    (go
      (let [[err model] (<! modelChan)
            tmpl (js/$ "#tmpl_streetsnap")
            elem (.tmpl tmpl model tmpl-item)
            mc_historyContainer (.find elem "#mc_historyContainer")
            mc_sideContainer (.find elem "#mc_sideContainer")
            mc_bottomContainer (.find elem "#mc_bottomContainer")
            img_stylePicture (.find elem "#img_stylePicture")
            btn_share (.find elem "#btn_share")
            btn_fullscreen (.find elem "#btn_fullscreen")]
        (.on btn_fullscreen "click"
          #(go (>! react/OnReact [name :fullscreen {:model model}])))
        (.on img_stylePicture "click"
          #(go (>! react/OnReact [name :toBig {:basicUrl (.-styleUrl model)}])))
        (.on btn_share "click"
          #(go (>! react/OnReact [name :shareFB {:model model}])))
        (.delegate mc_sideContainer "img" "click"
          #(this-as that
            (go (>! react/OnReact [name :toBig {:basicUrl (str "http://" window.location.host "/" (.-id that))}]))))
        (.delegate mc_bottomContainer "img" "click"
          #(this-as that
            (go (>! react/OnReact [name :toBig {:basicUrl (str "http://" window.location.host "/" (.-id that))}]))))
        (.delegate mc_historyContainer "img" "click"
          #(this-as that
            (go (>! react/OnReact [name :toDetail {:id (.-id that)}]))))
        {:elem elem :name name}))))

(defmethod react/AnimateOpen :Home [ctx key {:keys [elem] :as view}]
  (let [mc_3dmask (.find elem "#mc_3dmask")]
    (go 
      (<! (async/timeout 5000))
      (.fadeOut mc_3dmask 400)))
  (react/AnimateOpen ctx :default view))
          
(defmethod react/view-ch :Home [{:keys [tmpl-item] :as ctx} key modelChan]
  (go
    (let [[err model] (<! modelChan)
          tmpl (js/$ "#tmpl_home")
          elem (.tmpl tmpl model tmpl-item)]
      {:elem elem :name key})))
      
      
(defmethod react/AnimateOpen :Big [{:keys [popupContainer] :as ctx} key view]
  (doto (:elem view)
    (.appendTo popupContainer)
    (.fadeIn 400)))
  
(defmethod react/AnimateClose :Big [{:keys [container] :as ctx} key {elem :elem :as view}]
  (let [back (.find elem "#mc_bigPhotoFixPosition")]
    (.off back "click")
    (.fadeOut elem 400 #(react/AnimateClose ctx :default view))))

(defmethod react/view-ch :Big [{:keys [tmpl-item] :as ctx} key modelChan]
  (go
    (let [[err model] (<! modelChan)
          tmpl (js/$ "#tmpl_bigPhoto")
          elem (.tmpl tmpl model tmpl-item)
          back (.find elem "#mc_bigPhotoFixPosition")]
      (.on back "click" #(go (>! react/OnReact [key :close nil])))
      {:elem elem :name key})))
      
(defcommonlist :StreetSnapList)
(defcommonlist :ModelList)
(defcommonlist :ProductList)
(defcommondetail :StreetSnap)
(defcommondetail :Model)
(defcommondetail :Product)