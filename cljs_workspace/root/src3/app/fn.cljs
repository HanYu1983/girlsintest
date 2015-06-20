(ns app.fn
  (:require-macros 
    [cljs.core.async.macros :refer [go]]
    [tool.macro :as macro]))
    
(defn encodePath [path]
  (-> (.map js/_ (.split path "/") js/encodeURIComponent) (.join "/")))

(defn ServeImagePath [path]
  (str "http://" window.location.host "/" path))
  
(defn ServeImagePath100 [path]
  (str "http://" window.location.host "/" path "?Width=" 100 "&Height=" 100))

(defn FetchFile [path]
  (.getJSON js/$ (str "http://" window.location.host "/" path)))
  
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
    
(defn GetAllModelBy 
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
            (.fail (fn [err] (.reject promise err)))))))))

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
                      (.done #(.resolve promise %))
                      (.fail #(.reject promise %))))
          "key" (go (.resolve promise (js-obj "ModelKey" (aget pathInfo "key"))))
          (go
            (.log js/console "which is not right:" which) 
            (.resolve promise (js-obj "ModelKey" ""))))))))

            
(def GetAllModelBy (memoize GetAllModelBy))
(def GetAllModelOnce (memoize GetAllModelOnce))
(def GetHomeModelMaybeKey (memoize GetHomeModelMaybeKey))