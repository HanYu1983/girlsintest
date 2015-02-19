(ns app2.impl.Page
  (:require
    [app2.design.IPage :as page]))


(defmethod page/create :default [page elem tmpl]
  ())
  
(defmethod page/create :Home [elem tmpl]
  ())
  
(defmethod page/open :Home [this]
  (open (assoc this :page :default)))
    
(defmethod page/create :Menu [elem tmpl]
  ())