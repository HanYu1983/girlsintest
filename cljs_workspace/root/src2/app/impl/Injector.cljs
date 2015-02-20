(ns app.impl.Injector
  (:require
    [app.design.IInjector :as injector]
    [app.design.IPageManager :as pageMgr]
    [app.impl.PageManager]))

(defrecord Injector [])

(defn create []
  (merge
    (Injector.)
    {:pageManager (app.impl.PageManager/create)}))
  
(extend-type Injector
  injector/IInjector
  
  (pageManager [this]
    (:pageManager this)))