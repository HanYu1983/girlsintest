(ns app.impl.App
  (:require
    [app.design.IEvent :as evt]
    [app.design.IInjector :as injector]
    [app.design.IApp :as app]
    [app.impl.Injector]))
    
(def injector (app.impl.Injector/create))

(defrecord App [])

(defn create []
  (App.))

(defn onHeaderBtnBackhomeClick [this page]
  (.log js/console this))
    
(extend-type App
  app/IApp
  (setup [this]
    (.subscribe evt/onHeaderBtnBackhomeClick (partial onHeaderBtnBackhomeClick this))
    (.log js/console (injector/pageManager injector))))

