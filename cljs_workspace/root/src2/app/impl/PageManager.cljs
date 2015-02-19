(ns app.impl.PageManager
  (:require
    [app.design.IPage :as page]
    [app.design.IPageManager :as pageMgr]
    [app.impl.Page]
    [app.impl.HeaderPage]))

(defrecord PageManager [])

(defn create []
  (let [header (page/create :HeaderPage {:elem (js/$ "#mc_header")})]
    (merge
      (PageManager.)
      {:header header})))
  
(extend-type PageManager
  pageMgr/IPageManager
  (open [this key param cb])
  (close [this key]))
