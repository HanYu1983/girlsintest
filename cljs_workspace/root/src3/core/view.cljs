(ns core.view
  (:require-macros
    [macro.core :as macro :refer [defview]])
  (:require 
    [tool.app :as app]
    [core.event :as evt]))
    
(defview :Home "#tmpl_home" app/FadeIn app/FadeOut [ctx]
  (fn [elem]))

(defn defcommonview [name]
  (let [CloseFn (fn [elem Complete]
                  (app/FadeOut elem
                    #(let [mc_modelContainer (.find elem "#mc_modelContainer")]
                      (.undelegate mc_modelContainer "div[modelFrame]" "click")
                      (Complete))))]
    (defview name "#tmpl_streetsnap_list" app/FadeIn CloseFn [ctx]
      (fn [elem]
        (let [mc_modelContainer (.find elem "#mc_modelContainer")]
          (.delegate mc_modelContainer "div[modelFrame]" "click"
            #(this-as that
              (.onNext evt/OnStreetSnapListBtnClick {:id (.-id that) :view name}))))))))
          
(defcommonview :StreetSnapList)
(defcommonview :ModelList)
(defcommonview :ProductList)

(defview :StreetSnap "#tmpl_streetsnap" app/FadeIn app/FadeOut [ctx]
  (fn [elem]
    (.log js/console elem)))