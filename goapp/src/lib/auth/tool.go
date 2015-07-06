package auth

import (
  "strings"
  "fmt"
  "crypto/rand"
  "encoding/base64"
  "crypto/md5"
  "net/http"
  "time"
)

func GetCookie(r *http.Request, key string) (string, error){
  cookie, err := r.Cookie(key)
  if err != nil {
    return "", err
  }
  return cookie.Value, nil
}

func SetCookie(w http.ResponseWriter, key, path, value string, expiration time.Time) {
  cookie := http.Cookie{Name: key, Path: path, Value: value, Expires: expiration}
  http.SetCookie(w, &cookie)
}

func ClearCookie(w http.ResponseWriter, key, path string) {
  cookie := http.Cookie{Name: key, Path: path, MaxAge: -1}
  http.SetCookie(w, &cookie)
}

/*
 Return a random 16-byte base64 alphabet string
*/
func RandomKey() string {
	k := make([]byte, 12)
	for bytes := 0; bytes < len(k); {
		n, err := rand.Read(k[bytes:])
		if err != nil {
			panic("rand.Read() failed")
		}
		bytes += n
	}
	return base64.StdEncoding.EncodeToString(k)
}

/*
 H function for MD5 algorithm (returns a lower-case hex MD5 digest)
*/
func H(data string) string {
	digest := md5.New()
	digest.Write([]byte(data))
	return fmt.Sprintf("%x", digest.Sum(nil))
}

func DigestAuthParams(authorization string) map[string]string {
	s := strings.SplitN(authorization, " ", 2)
	if len(s) != 2 || s[0] != "Digest" {
		return nil
	}

	result := map[string]string{}
	for _, kv := range strings.Split(s[1], ",") {
		parts := strings.SplitN(kv, "=", 2)
		if len(parts) != 2 {
			continue
		}
		result[strings.Trim(parts[0], "\" ")] = strings.Trim(parts[1], "\" ")
	}
	return result
}

func GenAuthResponse( a1, method, uri, nonce, nc, cnonce, qop string) string{
	HA1 := a1
	HA2 := H(method + ":" + uri)
	KD := H(strings.Join([]string{HA1, nonce, nc, cnonce, qop, HA2}, ":"))
  return KD
}