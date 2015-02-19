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

(defn templateFor [this key])

(defmulti createModel (fn [page cb] page))
  
(extend-type PageManager
  pageMgr/IPageManager
  (open [this key param]
    (let [tmpl (templateFor this key)
          thanCreatePage (fn [model]
                            (let [elem (.tmpl tmpl model)
                                  page (page/create key {:elem elem})]
                            (.log js/console page)))]
      (createModel key thanCreatePage)))
      
  (close [this key]))
