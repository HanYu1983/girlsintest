(ns app.controller)

(defprotocol IController
    (open [this])
    (close [this])
    (set-view! [this view])
    (create-model [this param cb]))