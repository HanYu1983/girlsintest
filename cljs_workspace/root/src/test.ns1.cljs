(ns test.ns1
	(:require 
		[test.ns2 :refer [eat]] 
		[app.Main :as main]))

(defn main []
	(main/create)
	(main/create)
	(.subscribe main/on-main-click #(.log js/console %))
	(.log js/console (js/jQuery "<div></div>"))
	(eat "choco"))