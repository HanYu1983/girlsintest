(ns app.page.HeaderController
  (:require 
    [app.page :as page]
    [app.controller :as ctr]
    [app.page.DefaultController :as dctr]))

(defrecord HeaderController [])

(defn create []
  (merge
    (HeaderController.)
    {:view (atom nil)}))

(extend-type HeaderController
  ctr/IController
  (open [this]
    (-> @(:view this) (app.page.HeaderView/show :Home)))
    
  (close [this]
    (page/close @(:view this)))
    
  (set-view [this view]
    (reset! (:view this) view))
    
  (create-model [this param cb]))