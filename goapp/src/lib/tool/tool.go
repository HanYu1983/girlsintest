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
    "appengine"
  	"image"
  	"image/jpeg"
  	"image/png"
    "errors"
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


func GetContent(ctx appengine.Context, filepath string)chan interface{}{
  channel := make(chan interface{})
  readChannel := GetContentStepByStep(ctx, filepath, 16)
  go func(){
    defer close(channel)
    var loaded []byte
    var err error = nil
    for info := range readChannel {
      switch info.(type) {
      case []byte:
        bytes := info.([]byte)
        loaded = append(loaded, bytes...)
      case error:
        err = info.(error)
      }
    }
    if err != nil {
      channel <- err
    }else{
      channel <- loaded
    }
  }()
  return channel
}


func GetContentStepByStep(ctx appengine.Context, filepath string, buffersize int) chan interface{}{
  channel := make(chan interface{})
  go func(){
    defer close(channel)
    
    file, err := os.OpenFile(filepath, os.O_RDONLY, 0666)
    defer file.Close()
  
    if err != nil {
      channel <- err
    
    }else{
      buffer := make([]byte, buffersize)
      dat, err := file.Read(buffer)
      for err == nil{
        channel <- buffer[0:dat]
        buffer = make([]byte, buffersize)
        dat, err = file.Read(buffer)
      }
      if err != io.EOF {
        channel <- err
      }
    }
  }()
  return channel
}

func GetFile(filepath string) (file *os.File, err error){
  return os.Open(filepath)
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