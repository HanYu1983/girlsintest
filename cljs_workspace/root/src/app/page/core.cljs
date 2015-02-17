(ns app.page.core)

(defprotocol IPage
	(open [this] "")
	(close [this] ""))