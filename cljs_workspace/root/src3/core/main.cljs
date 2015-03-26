(ns core.main
  (:require-macros [macro.core :as tool])
  (:require 
    [core.app :as app]
    [core.model :as model]
    [core.view :as view]
    [core.event :as evt]
    [core.fn :as fn]))

(defn testCreateElem2 []
  (let [ctx (atom {
              :model {:hp 100}
              :views {}
              :container (js/$ "#mc_pageContainer")
              :route {:Page1 {:addhp   [nil model/ChangeHP]
                              :topage2 [:Page2 app/emptyModel]}
                      :Page2 {:topage1 [:Page1 model/CreatePage1Model]}}})]
    (.subscribe evt/OnPage1BtnClick (partial app/Route ctx :Page1 :topage2))
    (.subscribe evt/OnPage2BtnClick (partial app/Route ctx :Page2 :topage1))
    (.subscribe evt/OnPage1AddHpBtnClick (partial app/Route ctx :Page1 :addhp))
    (swap! ctx #(app/OpenView %1 :Page1 (partial model/CreatePage1Model ctx)))))
    
    

(defn initHeader [root]
  (let [menubar (.find root "#mc_menubar")]
    (.delegate menubar "div" "click" 
      (fn [evt] 
        (this-as that
          (.onNext evt/OnMenubarBtnClick (.-id that)))))))


(defn testIndex3 []
  (let [root (js/$ ".root")
        ctx (atom {
              :views {}
              :container (.find root "#mc_pageContainer")
              :route {:Home {:toModel [:Model app/emptyModel]
                             :toStreetSnapList [:StreetSnapList model/CreateStreetSnapListModel]
                             :toProduct [:Product app/emptyModel]}}})]
    (initHeader root)
    (.subscribe evt/OnMenubarBtnClick 
      (fn [id]
        (condp = id
          "btn_nav_celebrity" (app/Route ctx :Home :toCelebrity nil)
          "btn_nav_event" (app/Route ctx :Home :toEvent nil)
          "btn_nav_model" (app/Route ctx :Home :toModel nil)
          "btn_nav_streetSnap" (app/Route ctx :Home :toStreetSnapList nil)
          "btn_nav_product" (app/Route ctx :Home :toProduct nil)
          identity)))
    (swap! ctx #(app/OpenView %1 :Home (partial model/CreateHomeModel ctx)))))


(defn testFn []
  (doto (fn/GetAllModelBy "config.json" "product")
    (.done (fn [] (.log js/console js/arguments)))
    (.fail (fn [err] (js/alert err)))))
    
(testIndex3)