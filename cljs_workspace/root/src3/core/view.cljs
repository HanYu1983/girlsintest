(ns core.view
  (:require-macros
    [macro.core :as macro :refer [defview]])
  (:require 
    [tool.app :as app]
    [core.event :as evt]))
    
(defview :Home "#tmpl_home" app/FadeIn app/FadeOut [ctx]
  (fn [elem]))
    
(defview :StreetSnapList "#tmpl_streetsnap_list" app/FadeIn app/FadeOut [ctx]
  (fn [elem]))