(ns app2.design.IPageManager)

(defprotocol IPageManager
  (open [this key param cb])
  (close [this key]))