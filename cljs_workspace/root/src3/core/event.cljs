(ns core.event
  (:require
    [cljs.core.async :refer [chan]]))
;(def OnRoute (new js/Rx.Subject))
(def OnReact (chan))