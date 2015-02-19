(ns app.design.IPageManager)

(defprotocol IPageManager
  (open [this key param cb])
  (close [this key]))