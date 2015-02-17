(ns app.page.HeaderController
  (:require 
    [app.controller :as ctr]
    [app.page.DefaultController :as dctr]))

(defrecord HeaderController [])

(defn create []
  (merge
    (HeaderController.)
    {:view (atom nil)}))

(defn create-model [this param cb]
  (cb nil))
  
(defn open [this]
  (-> @(:view this) (app.page.HeaderView/show :Home)))

(extend-type HeaderController
  ctr/IController
  (open [this]
    (open this))
  (close [this]
    (dctr/close this))
  (set-view [this view]
    (dctr/set-view this view))
  (create-model [this param cb]
    (create-model this param cb)))