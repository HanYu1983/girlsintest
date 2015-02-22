package tool

import (
    "bufio"
    "strings"
    "html/template"
    "strconv"
    "io/ioutil"
    "appengine/urlfetch"
    "encoding/json"
    "io"
    "os"
  	"image"
  	"image/jpeg"
  	"image/png"
    "errors"
    "net/http"
)

func Str2Int64(str string) int64{
	ret, err := strconv.ParseInt(str, 10, 0)
	if err != nil { panic(err.Error()) }
	return ret
}

func TemplateWithFile(key string, path string) *template.Template{
    t := template.New(key)
    var err error
    t, err = t.Parse(StringWithFile(path))
    if err != nil {
        panic( err.Error() )
    }
    return t
}

func StringWithFile(path string) string {
    lines, err := ReadLines( path )
    if err != nil {
        panic( err.Error() )
    }
    return strings.Join( lines, "" )
}

func ReadLines(path string) ([]string, error) {
  file, err := os.Open(path)
  if err != nil {
    return nil, err
  }
  defer file.Close()

  var lines []string
  scanner := bufio.NewScanner(file)
  for scanner.Scan() {
    lines = append(lines, scanner.Text())
  }
  return lines, scanner.Err()
}

type int64Array []int64
func (s int64Array) Len() int { return len(s) }
func (s int64Array) Swap(i, j int) { s[i], s[j] = s[j], s[i] }
func (s int64Array) Less(i, j int) bool { return s[i] < s[j] }

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

func Byte2Json(data []byte) (jsonobj map[string]interface{}, err error) {
    var ret interface{}
    err = json.Unmarshal(data, &ret)
    if err == nil {
        jsonobj = ret.(map[string]interface{})
    }
    return
}

func NormalizeImageBase64(origin string)string{
  return strings.Replace(strings.Replace(origin, "\r", "", -1),"\n","", -1) 
}

func GetFile(filepath string) (file *os.File, err error){
  return os.Open(filepath)
}

func File2Bytes(file *os.File) (ret []byte, err error) {
  var bytes []byte
  buf := make([]byte, 16)
  for {
    n, err := file.Read(buf)
    if err != nil && err != io.EOF {
      return nil, err
    }
    if n == 0 {
      break
    }
    bytes = append(bytes, buf[:n]...)
  }
  return bytes, nil
}


func File2Image(file *os.File, imageType string) (img image.Image, err error){
  DecodeFn := func() func(file *os.File) (img image.Image, err error){
    switch imageType {
    case "png":
      return func(file *os.File) (img image.Image, err error){
        return png.Decode(file)
      }
    case "jpg", "jpeg":
      return func(file *os.File) (img image.Image, err error){
        return jpeg.Decode(file)
      }
    }
    return func(file *os.File) (img image.Image, err error){
      return nil, errors.New("image type not found")
    }
  }()
  return DecodeFn(file)
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

