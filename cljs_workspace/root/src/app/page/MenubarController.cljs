(ns app.page.MenubarController
  (:require
    [app.controller :as ctr]
    [app.page.DefaultController :as dctr]))

(defrecord MenubarController [])

(defn create []
  (merge
    (MenubarController.)
    {:view (atom nil)}))

(extend-type MenubarController
  ctr/IController
  (open [this])
  (close [this])
  (set-view [this view]
    (reset! (:view this) view))
  (create-model [this param cb]))