(ns app.impl.Page
  (:require
    [app.design.IPage :as page]))


(defmethod page/create :default [page {:keys [elem]}]
  {:page page :elem elem})
  
(defmethod page/open :default [this cb]
  (.fadeIn (:elem this) 400)
  (cb nil))

(defmethod page/close :default [this]
  (.fadeOut (:elem this) 400))
