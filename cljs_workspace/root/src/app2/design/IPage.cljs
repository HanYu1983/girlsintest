(ns app2.design.IPage)
  
(defmulti create identity :default [page elem tmpl])
(defmulti open #(:page %) :default [this])
(defmulti close #(:page %) :default [this])