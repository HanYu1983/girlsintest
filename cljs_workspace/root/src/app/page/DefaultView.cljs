(ns app.page.DefaultView)

(defn open [this]
  (when (contains? this :elem)
    (.fadeIn (:elem this) 400)))

(defn close [this]
  (when (contains? this :elem)
    (.fadeOut (:elem this) 400)))