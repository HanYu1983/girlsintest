(ns app.page.HeaderController
    (:require [app.controller :as ctr]))

(defrecord HeaderController [])

(defn view [this]
    @(:view this))

(defn show [this logo]
    (-> (view this) (show logo)))
    
(defn open [this]
    (show (view this) :home))

(defn close [this]
    (close (view this)))
    
(defn set-view! [this view]
    (reset! (view this) view))
    
(defn create-model [this param cb]
    (cb nil))
    
(extend-type HeaderController
    ctr/IController
    (open [this]
        (open this))
    (close [this]
        (close this))
    (set-view! [this view]
        (set-view! this view))
    (create-model [this param cb]
        (create-model this param db)))