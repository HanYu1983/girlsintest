(ns core.view
  (:require-macros
    [macro.core :as macro :refer [defview]])
  (:require 
    [tool.app :as app]
    [core.event :as evt]))
    
(defview :Home "#tmpl_home" (partial app/FadeIn 400) app/NormalOut [ctx]
  (fn [elem]))

(defn defcommonlist [name]
  (let [CloseFn (fn [elem Complete]
                  (app/NormalOut elem
                    #(let [mc_modelContainer (.find elem "#mc_modelContainer")]
                      (.undelegate mc_modelContainer "div[modelFrame]" "click")
                      (Complete))))]
    (defview name "#tmpl_streetsnap_list" (partial app/FadeIn 400) CloseFn [ctx]
      (fn [elem]
        (let [mc_modelContainer (.find elem "#mc_modelContainer")]
          (.delegate mc_modelContainer "div[modelFrame]" "click"
            #(this-as that
              (.onNext evt/OnRoute [name :toDetail {:id (.-id that)}]))))))))
          
(defcommonlist :StreetSnapList)
(defcommonlist :ModelList)
(defcommonlist :ProductList)

(defn defcommondetail [viewname]
  (let [CloseFn (fn [elem Complete]
                  (app/NormalOut elem
                    #(let [mc_modelContainer (.find elem "#mc_historyContainer")]
                      (.undelegate mc_modelContainer "img" "click")
                      (Complete))))]
    (defview viewname "#tmpl_streetsnap" (partial app/FadeIn 400) CloseFn [ctx]
      (fn [elem]
        (let [mc_historyContainer (.find elem "#mc_historyContainer")
              mc_sideContainer (.find elem "#mc_sideContainer")]
          (.delegate mc_sideContainer "img" "click"
            #(this-as that
              (.onNext evt/OnRoute [viewname :toBig {:id (.-id that) :dto (.-DTO elem)}])))
          (.delegate mc_historyContainer "img" "click"
            (let [listview (-> (name viewname) (str "List") keyword)]
              #(this-as that
                (.onNext evt/OnRoute [listview :toDetail {:id (.-id that) :dto (.-DTO elem)}])))))))))
                    
                    
(defcommondetail :StreetSnap)
(defcommondetail :Model)
(defcommondetail :Product)