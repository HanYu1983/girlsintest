(ns app.page.DefaultController)

(defn close [this]
  (close (:view this)))

(defn set-view [this view]
  (reset! (:view this) view))