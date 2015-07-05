package tool

import (
    "strings"
    "html/template"
    "strconv"
    "io/ioutil"
    "appengine/urlfetch"
    "encoding/json"
    "net/http"
    "net/url"
    "bytes"
    "appengine"
    "fmt"
)

// tool

func Str2Int64(str string) int64{
	ret, err := strconv.ParseInt(str, 10, 0)
	if err != nil { panic(err.Error()) }
	return ret
}

type int64Array []int64
func (s int64Array) Len() int { return len(s) }
func (s int64Array) Swap(i, j int) { s[i], s[j] = s[j], s[i] }
func (s int64Array) Less(i, j int) bool { return s[i] < s[j] }


// template

func TemplateWithFile(key string, path string) *template.Template{
    t := template.New(key)
    var err error
    t, err = t.Parse(StringWithFilePath(path))
    if err != nil {
        panic( err.Error() )
    }
    return t
}



// http

func HttpGet (sys ISystem, url string) (res []byte, err error){
    c := sys.GetContext()
    client := urlfetch.Client(c)
    resp, err := client.Get(url)
    if err != nil {
        return nil, err
    } else {
        defer resp.Body.Close()
        body, err := ioutil.ReadAll(resp.Body)
        if err != nil {
            return nil, err
        } else {
            return body, nil
        }
    }
}

func UseETag(etag string) func(w http.ResponseWriter, r *http.Request) bool{
  return func(w http.ResponseWriter, r *http.Request) bool{
    ifNoneMatch := r.Header.Get("If-None-Match")
    if ifNoneMatch == etag {
      w.WriteHeader(http.StatusNotModified)
      return true
    }else{
      w.Header().Set("ETag", etag)
      return false
    }
  }
}

// json

func Byte2Json(data []byte) (jsonobj map[string]interface{}, err error) {
    var ret interface{}
    err = json.Unmarshal(data, &ret)
    if err == nil {
        jsonobj = ret.(map[string]interface{})
    }
    return
}

// base64

func NormalizeImageBase64(origin string)string{
  return strings.Replace(strings.Replace(origin, "\r", "", -1),"\n","", -1) 
}


func ReadAjaxPost(r *http.Request) (url.Values, error){
  body, err := ioutil.ReadAll(r.Body)
  if err != nil {
    return nil, err
  }
  u, err := url.Parse("?"+string(body))
  if err != nil {
    return nil, err
  }
  return u.Query(), nil
}

func GetRequest(url string, data url.Values) (*http.Request, error) {
  urlPath := url 
  if data != nil {
    urlPath = fmt.Sprintf("%s?%s", url, data.Encode())
  }
  r, err := http.NewRequest("GET", urlPath, nil)
  if err != nil {
    return nil, err
  }
  return r, nil
}

func PostRequest(url string, data url.Values) (*http.Request, error) {
  databytes := data.Encode()
  r, err := http.NewRequest("POST", url, bytes.NewBufferString(databytes))
  if err != nil {
    return nil, err
  }
  r.Header.Add("Content-Type", "application/x-www-form-urlencoded")
  r.Header.Add("Content-Length", strconv.Itoa(len(databytes)))
  return r, nil
}

func DoRequest( r *http.Request, ctx appengine.Context ) (*http.Response, error) {
  client := urlfetch.Client( ctx )
  return client.Do(r)
}


