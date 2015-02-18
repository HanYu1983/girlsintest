(ns app.Main
	(:require [app.event :as evt]))


(defrecord Main [])

(defn create []
	(let [this (Main.)
		  coll-pages (atom {})]
		(.subscribe evt/on-header-btn-backhome-click (partial on-header-btn-backhome-click this))
		(merge this {:coll-pages coll-pages})))



(defn on-header-btn-backhome-click [this id])





