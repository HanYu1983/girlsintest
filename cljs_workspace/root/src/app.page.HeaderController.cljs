(ns app.page.HeaderController
  (:require 
    [app.controller :as ctr]
    [app.page.DefaultController :as dctr]))

(defrecord HeaderController [])

(defn create []
  (HeaderController.))

(defn show [this logo]
  (-> (:view this) (show logo)))

(defn create-model [this param cb]
  (cb nil))
  
(defn open [this]
  (show (:view this) :Home))

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