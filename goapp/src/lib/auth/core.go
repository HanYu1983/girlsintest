package auth

import (
  "crypto/subtle"
  "net/http"
  "net/url"
  _ "time"
  "fmt"
  _ "strings"
  _ "appengine"
)

type Config struct {
  Realm, Opaque string
  //Secrets = MD5(username + ":" + config.Realm + ":" + config.Password)
  Secrets func( username string, realm string )string
}

func IsNeedAuth(r *http.Request, realm, opaque string) (bool, map[string]string){
  authorization, err := GetCookie(r, "Authorization")
  
  if err != nil {
    return true, nil
  }
  
  authorization, err = url.QueryUnescape(authorization)
  if err != nil {
    return true, nil
  }
  
  return false, DigestAuthParams( authorization )
}

func RequireAuth(w http.ResponseWriter, config Config){
  nonce := RandomKey()
  content := fmt.Sprintf(`Digest realm="%s", nonce="%s", opaque="%s", algorithm="MD5", qop="auth"`, config.Realm, nonce, config.Opaque)
  w.Header().Set("WWW-Authenticate", content)
  w.WriteHeader(404)
}

func Auth(r *http.Request, config Config, auth map[string]string) bool{
  
  if auth == nil || config.Opaque != auth["opaque"] || auth["algorithm"] != "MD5" || auth["qop"] != "auth" {
    return false
  }
  
  // 不要驗証uri
  /*
  switch u, err := url.Parse(auth["uri"]); {
  case err != nil:
    return false
  case r.URL == nil:
    return false
  case len(u.Path) > len(r.URL.Path):
    return false
  case !strings.HasPrefix(r.URL.Path, u.Path):
    return false
  }
  */

  HA1 := config.Secrets( auth["username"], config.Realm )
  KD := GenAuthResponse( HA1, r.Method, auth["uri"], auth["nonce"], auth["nc"], auth["cnonce"], auth["qop"])
  
  if subtle.ConstantTimeCompare([]byte(KD), []byte(auth["response"])) != 1 {
    return false
  }
  
  return true
}

func Factory(config Config) func(http.HandlerFunc) http.HandlerFunc {
  return func(handler http.HandlerFunc) http.HandlerFunc{
    return func(w http.ResponseWriter, r *http.Request){
      isNeedAuth, authInfo := IsNeedAuth(r, config.Realm, config.Opaque)
      if isNeedAuth {
        RequireAuth( w, config )
      } else {
        isPass := Auth( r, config, authInfo )
        if isPass {
          handler( w, r )
        } else {
          RequireAuth( w, config )
        }
      }
    }
  }
}