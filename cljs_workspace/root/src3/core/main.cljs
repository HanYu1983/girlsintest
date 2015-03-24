(ns core.main
  (:require 
    [core.app :as app]
    [core.model :as model]
    [core.view :as view]
    [core.event :as evt]))
    
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

(testCreateElem2)