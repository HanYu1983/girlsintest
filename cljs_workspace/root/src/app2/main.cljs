(ns app2.main
  (:require
    [app2.design.IApp :as app]
    [app2.impl.App]))

(defn main []
  (doto (app2.impl.App/create)
    (app/setup)))
  
(main)