(ns app.Main
	(:require app.IPage))


(defrecord Main [])

(defn create []
	(let [obj (Main. nil)]
		(js/setTimeout (fn [] (.onNext on-main-click obj)) 1000)
		obj))

(def on-main-click (new js/Rx.Subject))
