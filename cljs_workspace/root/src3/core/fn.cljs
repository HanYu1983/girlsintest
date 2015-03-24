(ns core.fn)

(defn ServeImagePath [path]
  (str "http://" window.location.host "/" path))
  
(defn ServeImagePath100 [path]
  (str "http://" window.location.host "/" path "?Width=" 100 "&Height" 100))

(defn FetchFile [path]
  (.getJSON js/$ (str "http://" window.location.host "/" path)))
  
(defn FetchModelKeyList [path]
  (let [promise (new js/$.Deferred)]
    (doto (FetchFile path)
      (.done 
        (fn [data]
          (.resolve promise (for [modelKey data :when (not= modelKey "config.json")] modelKey))))
      (.fail 
        (fn [err]
          (.reject promise err))))
    promise))