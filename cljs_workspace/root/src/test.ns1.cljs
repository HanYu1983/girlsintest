(ns test.ns1
	(:require [test.ns2 :refer [eat]]))

(defn main []
	(js/alert "haha")
	(eat "choco"))