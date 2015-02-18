(ns app.page)

(defprotocol IPage
	(open [this] "")
	(close [this] ""))