(ns app.view
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [chan <!]]
    [tool.react :as react]))

(defmethod react/AnimateOpen :default [{:keys [container] :as ctx} key view]
  (doto (:elem view)
    (.appendTo container)
    (.fadeIn 400)))

(defmethod react/AnimateClose :default [{:keys [container] :as ctx} key view]
  (doto (:elem view)
    (.remove)))
      
(defn defcommonlist [name]  
  (defmethod react/AnimateClose name [ctx key view]
    (let [mc_modelContainer (.find (:elem view) "#mc_modelContainer")
          btn_search (.find (:elem view) "#btn_search")]
      (.off btn_search "click")
      (.undelegate mc_modelContainer "div[modelFrame]" "click"))
    (react/AnimateClose name :default view))
    
  (defmethod react/view-ch name [ctx key modelChan]
    (go
      (let [[err model] (<! modelChan)
            tmpl (js/$ "#tmpl_streetsnap_list")
            elem (.tmpl tmpl model nil)
            mc_modelContainer (.find elem "#mc_modelContainer")
            btn_search (.find elem "#btn_search")]
        (.click btn_search
          #(let [searchKey (-> (.find elem "#input_search") (.val))]
            (when (> (.-length searchKey) 0)
              (go (>! react/OnReact [name :search {:searchKey searchKey}])))))
        (.delegate mc_modelContainer "div[modelFrame]" "click"
          #(this-as that
            (go (>! react/OnReact [name :toDetail {:id (.-id that)}]))))
        {:elem elem}))))

(defn defcommondetail [name]
  (defmethod react/AnimateClose name [ctx key {:keys [elem] :as view}]
    (let [mc_modelContainer (.find elem "#mc_historyContainer")]
      (.undelegate mc_modelContainer "img" "click"))
    (react/AnimateClose name :default view))
    
  (defmethod react/view-ch name [ctx key modelChan]
    (go
      (let [[err model] (<! modelChan)
            tmpl (js/$ "#tmpl_streetsnap")
            elem (.tmpl tmpl model nil)
            mc_historyContainer (.find elem "#mc_historyContainer")
            mc_sideContainer (.find elem "#mc_sideContainer")]
        (.delegate mc_sideContainer "img" "click"
          #(this-as that
            (go (>! react/OnReact [name :toBig {:id (.-id that)}]))))
        (.delegate mc_historyContainer "img" "click"
          #(this-as that
            (go (>! react/OnReact [name :toDetail {:id (.-id that)}]))))
        {:elem elem}))))

(defmethod react/view-ch :Home [ctx key modelChan]
  (go
    (let [model (<! modelChan)
          tmpl (js/$ "#tmpl_home")
          elem (.tmpl tmpl model nil)]
      {:elem elem})))
      
(defcommonlist :StreetSnapList)
(defcommonlist :ModelList)
(defcommonlist :ProductList)
(defcommondetail :StreetSnap)
(defcommondetail :Model)
(defcommondetail :Product)