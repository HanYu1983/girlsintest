(ns app.auth
  (:require
    [clojure.string :as str]))

(def nc "00000001")

(defn calculateResponse [{a1 :a1 method :method uri :uri nonce :nonce realm :realm qop :qop cnonce :cnonce}]
  (let [a2 (.MD5 js/CryptoJS (str method ":" uri))
        digest 
        (->>
          (interpose ":" [a1 nonce nc cnonce qop a2])
          (apply str)
          (.MD5 js/CryptoJS)
          (.toString))]
    digest))
    
(defn generateAuthorizationHeader [wwwAuthenticationHeader {response :response uri :uri username :username cnonce :cnonce}]
  (str
    wwwAuthenticationHeader ", "
    "username=\"" username "\", "
    "uri=\"" uri "\", "
    "response=\"" response "\", "
    "nc=" nc ", "
    "cnonce=\"" cnonce "\""))
    
(defn digestAuthParams [authorization]
  (let [formated (.replace authorization #"Digest " "")
        params
        (into {}
          (->>
            (str/split formated #", ")
            (map (fn [pair] (str/split pair #"=")))
            (map (fn [[k v]] [(keyword k) (.replace v "\"" "")]))))]
    params))
    
(defn auth [url]
  (let [p (.Deferred js/$)]
    (.ajax js/$
      (js-obj
        "url" url
      
        "success"
        (fn []
          (.resolve p))
        
        "error"
        (fn [xhr]
          (let [authorization (.getResponseHeader xhr "WWW-Authenticate")]
            (if authorization
              (let [cnonce "testCnonce"
                    {
                      nonce :nonce
                      realm :realm
                      qop :qop
                    } 
                    (digestAuthParams authorization)
                    a1 (.MD5 js/CryptoJS (str "hanvic:" realm ":gaNGangAnfInAlstEve"))
                    response (calculateResponse {:a1 a1 :method "GET" :uri url :nonce nonce :realm realm :qop qop :cnonce cnonce})
                    authorizationHeaderValue (generateAuthorizationHeader authorization {:response response :uri url :username "hanvic" :cnonce cnonce})]
                (.cookie js/$ "Authorization" authorizationHeaderValue (js-obj "expires" 0.1 "path" "/"))
                (.resolve p))
              (if (.cookie js/$ "Authorization")
                (.resolve p)
                (.reject p "can't not auth")))))))
    p))
    
    
(defn testFn []
  (.log js/console (calculateResponse {:a1 "a1" :method "GET" :uri "uri" :nonce "nonce" :realm "realm" :qop "qop" :cnonce "cnonce"}))
  (.log js/console (generateAuthorizationHeader "header" {:response "res" :uri "uri" :username "username" :cnonce "cnonce"}))
  (.log js/console (pr-str (digestAuthParams "Digest realm=\"realm\", nonce=\"nonce\", opaque=\"opaque\", algorithm=\"algorithm\", qop=\"qop\""))))