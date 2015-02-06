(ns app.Main
	(:require [app.event :as evt]))


(defrecord Main [])

(defn create []
	(let [obj (Main. nil)]
		(js/setTimeout (fn [] (.onNext evt/on-menu-start-btn-click obj)) 1000)
		obj))
