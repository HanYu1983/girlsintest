(ns test.ns1
	(:require 
		[test.ns2 :refer [eat]] 
		[app.Main :as main]
		[app.event :as evt]))

(defn main []
	(.log js/console (pr-str (main/create))))

(defn main2 []
	(main/create)
	(main/create)
	(.subscribe evt/on-menu-start-btn-click  #(.log js/console %))
	(.log js/console (js/jQuery "<div></div>"))
	(eat "choco"))