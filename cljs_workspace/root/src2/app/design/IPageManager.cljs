(ns app.design.IPageManager)

(defprotocol IPageManager
  (open [this key param])
  (close [this key]))