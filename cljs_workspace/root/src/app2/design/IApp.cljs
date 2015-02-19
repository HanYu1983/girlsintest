(ns app2.design.IApp)

(defprotocol IApp
  (setup [this])
  (pageManager [this]))