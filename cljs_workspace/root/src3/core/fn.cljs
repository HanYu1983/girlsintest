(ns core.fn
  (:require-macros [macro.core :as macro]))

(defn ServeImagePath [path]
  (str "http://" window.location.host "/" path))
  
(defn ServeImagePath100 [path]
  (str "http://" window.location.host "/" path "?Width=" 100 "&Height=" 100))

(defn FetchFile [path]
  (.getJSON js/$ (str "http://" window.location.host "/" path)))
    
(defn FetchModelKeyList [path]
  (macro/makepromise p
    (FetchFile path)
    (fn [data]
      (let [keylist (for [modelKey data :when (not= modelKey "config.json")] modelKey)]
        (.resolve p keylist)))))
    
(defn FetchAllModel [path keys]
  (macro/makepromise promise
    (let [fetchFilePromise (apply array 
                             (for [key keys] (FetchFile (str path "/" key "/config.json"))))]
      (.apply js/$.when js/$ fetchFilePromise))
    (fn [& args]
      (if (= 1 (count keys))
        ; 如果輸入的ajax只有一個，則不會回傳array
        ; 每一個ajax不知為何會回傳3個物件(result, "success", response)
        (let [detail (first args)]
          (.resolve promise {(first keys) detail}))
        ; 每一個ajax不知為何會回傳3個物件(result, "success", response)
        (let [details (map (fn [data] (aget data 0)) args)]
          (.resolve promise (zipmap keys details)))))))
    
(defn GetAllModelBy [configPath type]
  (macro/makepromise promise
    (FetchFile configPath)
    (fn [config]
      (let [pkgPath (aget config type)]
        (->
          (FetchModelKeyList pkgPath)
          (.pipe (partial FetchAllModel pkgPath))
          (doto
            (.done (fn [ret] (.resolve promise config ret)))
            (.fail (fn [err] (.reject promise err)))))))))
            
(def GetAllModelBy (memoize GetAllModelBy))