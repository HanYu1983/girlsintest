(ns app2.impl.App
  (:require
    [app2.design.IApp :as app]
    [app2.design.IPageManager :as pageMgr]))

(defrecord App [])

(defn create []
  (merge
    (App.)
    {:pageManager (atom nil)}))
  
(extend-type App
  app/IApp
  
  (setup [this]
    (doto 
      (pageManager this)
      (pageMgr/open "menu" nil nil)))
  
  (pageManager [this]
    @(:pageManager this)))