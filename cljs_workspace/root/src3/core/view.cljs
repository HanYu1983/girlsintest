(ns core.view
  (:require-macros
    [macro.core :as macro :refer [defview]])
  (:require 
    [core.app :as app]
    [core.event :as evt]))

(defmethod app/CreateAppView :Page1 [ctx key CreateModel]
  (let [CreateElem #(app/CreateElem (js/$ "#tmpl_page1") CreateModel nil)
        view (app/CreateView CreateElem app/FadeIn app/FadeOut)]
    (doto (.-elemPromise view)
      (.done (fn [elem]
        (let [btn_page2 (.find elem "#btn_page2")
              btn_addhp (.find elem "#btn_addhp")]
          (.click btn_page2 #(.onNext evt/OnPage1BtnClick "btn_page2"))
          (.click btn_addhp #(.onNext evt/OnPage1AddHpBtnClick nil))))))
    view))
    
(defmethod app/CreateAppView :Page2 [ctx key CreateModel]
  (let [CreateElem #(app/CreateElem (js/$ "#tmpl_page2") CreateModel nil)
        view (app/CreateView CreateElem app/FadeIn app/FadeOut)]
    (doto (.-elemPromise view)
      (.done (fn [elem]
        (let [btn_page1 (.find elem "#btn_page1")]
          (.click btn_page1 #(.onNext evt/OnPage2BtnClick "btn_page1"))))))
    view))
    
    
(defview :Home "#tmpl_home" app/FadeIn app/FadeOut [ctx]
  (fn [elem]))
    
(defview :StreetSnapList "#tmpl_streetsnap_list" app/FadeIn app/FadeOut [ctx]
  (fn [elem]))
  
  
  
  
    (comment 
(defmethod app/CreateAppView :Home [ctx key CreateModel]
  (let [CreateElem #(app/CreateElem (js/$ "#tmpl_home") CreateModel nil)
        view (app/CreateView CreateElem app/FadeIn app/FadeOut)]
    (doto (.-elemPromise view)
      (.done (fn [elem])))
    view))
    )
  
    (comment
(defmethod app/CreateAppView :StreetSnapList [ctx key CreateModel]
  (let [CreateElem #(app/CreateElem (js/$ "#tmpl_streetsnap_list") CreateModel nil)
        view (app/CreateView CreateElem app/FadeIn app/FadeOut)]
    (doto (.-elemPromise view)
      (.done (fn [elem])))
    view))
    )