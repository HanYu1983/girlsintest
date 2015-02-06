(ns test.ns1
	(:require [test.ns2 :refer [eat]]))

(defn main []
	(.log js/console (js/jQuery "<div></div>"))
	(eat "choco"))