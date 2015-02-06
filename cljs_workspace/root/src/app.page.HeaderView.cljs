(ns app.page.HeaderView
	(:require [app.page :as page]))

(defrecord HeaderView [])	
			
(defn create [elem]
	(let [this (promise nil)
		  btn_backhome (doto (.find elem "#btn_backhome")
							 (.click elem (.onNext evt/onHeaderBtnBackhomeClick @this)))
		  img_homeLogo (.find elem "#img_homeLogo")
		  img_streetSnapLogo (.find elem "#img_streetSnapLogo")
		  img_streetNewsLogo (.find elem "#img_streetNewsLogo")
		  img_streetModelsLogo (.find elem "#img_streetModelsLogo")
          img_streetEventLogo (.find elem "#img_streetEventLogo")
		  img_streetCelebrityLogo (.find elem "#img_streetCelebrityLogo")]
		  (deliver 
		  	this 
			(merge (HeaderView.) 
				{:btn_backhome btn_backhome
		  		 :img_homeLogo img_homeLogo
				 :img_streetSnapLogo img_streetSnapLogo
				 :img_streetNewsLogo img_streetNewsLogo
				 :img_streetModelsLogo img_streetModelsLogo
				 :img_streetEventLogo img_streetEventLogo
				 :img_streetCelebrityLogo img_streetCelebrityLogo}))))
				 
(defn show [this logo]
	(doseq [elem [:img_streetSnapLogo
				  :img_streetNewsLogo
				  :img_streetModelsLogo
				  :img_streetEventLogo
				  :img_streetCelebrityLogo]
			:when (when-not (= logo elem))]
		(.hide (elem this)))
	(.fadeIn (logo this) 400))
	
(defn open [this]
	(when (contains? this :elem)
		(.fadeIn (:elem this) 400)))

(defn close [this]
	(when (contains? this :elem)
		(.fadeOut (:elem this) 400)))
		
		
(extend-type HeaderView
	page/IPage
	(open [this]
		(open this))
			
	(close [this]
		(close this)))