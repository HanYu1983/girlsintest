(ns app.fn
  (:require-macros 
    [cljs.core.async.macros :refer [go]]
    [tool.macro :as macro]))
    
(defn cache [f]
  (let [c (atom {})]
    (fn [& args]
      (let [p (.Deferred js/$)
            ckey (keyword (pr-str args))
            ret (get @c ckey)]
        (if ret
          (.resolve p (aget ret 0) (aget ret 1) (aget ret 2))
          (doto (apply f args)
            (.done 
              (fn []
                (swap! c assoc ckey (array (aget js/arguments 0) (aget js/arguments 1) (aget js/arguments 2)))
                (.resolve p (aget js/arguments 0) (aget js/arguments 1) (aget js/arguments 2))))
            (.fail
              #(.reject p %))))))))
    
(defn encodePath [path]
  (-> (.map js/_ (.split path "/") js/encodeURIComponent) (.join "/")))

(defn ServeImagePath [path]
  (str "//" window.location.host "/" path))
  
(defn ServeImagePath100 [path]
  (str "//" window.location.host "/" path "?Width=" 100 "&Height=" 100))

(defn ServeImagePathWH [path w h]
  (str "//" window.location.host "/" path "?Width=" w "&Height=" h))

(defn FetchFile [path]
  (.getJSON js/$ (str "//" window.location.host "/" path)))
  
  ;只在取得keylist的時候將key編碼，以支援中文的key(appengine不支援中文檔名)
(defn FetchModelKeyList [path]
  (macro/makepromise p
    (FetchFile path)
    (fn [data]
      (let [keylist (for [modelKey data :when (not= modelKey "config.json")] (js/encodeURIComponent modelKey))]
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
    
(comment (defn GetAllModelBy 
  "多次request"
  [configPath type]
  (macro/makepromise promise
    (FetchFile configPath)
    (fn [config]
      (let [pkgPath (aget config type)]
        (->
          (FetchModelKeyList pkgPath)
          (.pipe (partial FetchAllModel pkgPath))
          (doto
            (.done (fn [ret] (.resolve promise config ret)))
            (.fail (fn [err] (.reject promise err))))))))))

(defn GetAllModelOnce
  "一次request"
  [configPath type]
  (macro/makepromise promise
    (FetchFile configPath)
    (fn [config]
      (let [pkgPath (aget config type)]
        (->
          (FetchFile (str pkgPath "/?Path=config.json"))
          (doto
            (.done (fn [ret] 
              (let [ident (atom {})
                    process (.mapObject js/_ ret (fn [v k] (swap! ident assoc k v)))]
                (.resolve promise config @ident))))
            (.fail (fn [err] (.reject promise err)))))))))

(defn GetHomeModelMaybeKey
  "用來取得首頁的3D-Key"
  [configPath]
  (macro/makepromise promise
    (FetchFile configPath)
    (fn [config]
      (let [pathInfo (aget config "app" "home-model-key")
            which (aget pathInfo "which")]
        (condp = which
          "model" (let [pathPair (aget pathInfo "model")
                        where (aget config (aget pathPair 0))
                        modelKey (aget pathPair 1)]
                    (doto (FetchFile (str where "/" modelKey "/config.json"))
                      (.done #(.resolve promise where modelKey %))
                      (.fail #(.reject promise %))))
          "key" (go (.resolve promise (js-obj "ModelKey" (aget pathInfo "key"))))
          (go
            (.log js/console "which is not right:" which) 
            (.resolve promise (js-obj "ModelKey" ""))))))))

            
(def GetAllModelOnce (cache GetAllModelOnce))
(def GetHomeModelMaybeKey (cache GetHomeModelMaybeKey))