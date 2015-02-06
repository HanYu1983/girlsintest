(ns app.IPage)

(defprotocol IPage 
	(open [this] "")
	(close [this] ""))