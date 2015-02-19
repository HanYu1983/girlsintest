(ns app.design.IPage)
  
(defmulti create (fn [page option] page))
(defmulti open (fn [this cb] (:page this)))
(defmulti close (fn [this] (:page this)))