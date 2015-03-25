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
          (let [keylist (for [modelKey data :when (not= modelKey "config.json")] modelKey)]
            (.resolve promise keylist))))
      (.fail 
        (fn [err]
          (.reject promise err))))
    promise))
    
(defn FetchAllModel [path keys]
  (let [promise (new js/$.Deferred)
        fetchFilePromise (apply array 
                           (for [key keys] (FetchFile (str path "/" key "/config.json"))))]
    (doto (.apply js/$.when js/$ fetchFilePromise)
      (.done 
        (fn []
          (if (= 1 (count keys))
            ; 如果輸入的ajax只有一個，則不會回傳array
            ; 每一個ajax不知為何會回傳3個物件(result, "success", response)
            (let [detail (aget js/arguments 0)]
              (.resolve promise (seq {(first keys) detail})))
            ; 每一個ajax不知為何會回傳3個物件(result, "success", response)
            (let [details (.map js/_ js/arguments (fn [data] (aget data 0)))]
              (.resolve promise (zipmap keys details))))))
      (.fail #(.reject promise %)))
    promise))

(defn GetAllModelBy [configPath type]
  (let [promise (new js/$.Deferred)]
    (doto (FetchFile configPath)
      (.done 
        (fn [config]
          (let [pkgPath (aget config type)]
            (->
              (FetchModelKeyList pkgPath)
              (.pipe (partial FetchAllModel pkgPath))
              (doto
                (.done (fn [ret] (.resolve promise config ret)))
                (.fail (fn [err] (.reject promise err))))))))
      (.fail
        (fn [err]
          (.reject promise err))))
    promise))