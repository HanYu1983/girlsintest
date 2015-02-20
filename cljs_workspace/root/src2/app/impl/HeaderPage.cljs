(ns app.impl.HeaderPage
  (:require
    [app.design.IEvent :as evt]
    [app.design.IPage :as page]))

(defmethod page/create :HeaderPage [page {:keys [elem]}]
  (let [this (atom nil)
        btn_backhome (doto (.find elem "#btn_backhome")
                           (.click #(.onNext evt/onHeaderBtnBackhomeClick @this)))
        img_homeLogo (.find elem "#img_homeLogo")
        img_streetSnapLogo (.find elem "#img_streetSnapLogo")
        img_streetNewsLogo (.find elem "#img_streetNewsLogo")
        img_streetModelsLogo (.find elem "#img_streetModelsLogo")
        img_streetEventLogo (.find elem "#img_streetEventLogo")
        img_streetCelebrityLogo (.find elem "#img_streetCelebrityLogo")]
    (reset!
      this
      {:page page
       :elem elem
       :btn_backhome btn_backhome
       :Home img_homeLogo
       :StreetSnap img_streetSnapLogo
       :StreetNews img_streetNewsLogo
       :StreetModels img_streetModelsLogo
       :StreetEvent img_streetEventLogo
       :StreetCelebrity img_streetCelebrityLogo})))
         
(defn show [this logo]
  (doseq [elem [:Home
                :StreetSnap
                :StreetNews
                :StreetModels
                :StreetEvent
                :StreetCelebrity]
                :when (when-not (= logo elem))]
    (.hide (elem this)))
  (.fadeIn (logo this) 400))
  
(defmethod page/open :HeaderPage [this cb]
    (cb nil))