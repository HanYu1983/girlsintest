(ns app.main
  (:require
    [app.design.IApp :as app]
    [app.impl.App]))

(defn main []
  (doto (app.impl.App/create)
    (app/setup)))
  
(main)