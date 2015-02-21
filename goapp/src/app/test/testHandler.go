package test

import (
	"lib/tool"
	"os"
	"image"
	"image/jpeg"
	"image/png"
	"encoding/base64"
	"bytes"
	"app"
  "fmt"
)


func thumb() image.Image {
	file, err := os.Open("static/images/marcjacobs-website.jpg")
	if err != nil {
		panic(err.Error())
	}
	img, err := jpeg.Decode(file)
	if err != nil {
		panic(err.Error())
	}
	file.Close()
	return img
}

func TestShowImage(sys tool.ISystem) interface{} {
	sys.GetResponse().Header().Set("Content-Type", "image/jpeg")
	err := jpeg.Encode(sys.GetResponse(), thumb(), &jpeg.Options{Quality:100})
	if err != nil {
		sys.GetResponse().WriteHeader(500)
	} else {
		sys.GetResponse().WriteHeader(200)
	}
	return tool.CustomView
}






func encode() string {
 
	file, _ := os.Open("static/images/marcjacobs-website.jpg")
	defer file.Close()
 
	fi, _ := file.Stat()
	size := fi.Size()
 
	data := make([]byte, size)
	file.Read(data)
 
	return base64.StdEncoding.EncodeToString(data)
}
 
func decode(str string) image.Image{
	data, _ := base64.StdEncoding.DecodeString(str) 
	image, _, err := image.Decode(bytes.NewReader(data))
	if err != nil {
		panic(err.Error())
	}
	return image
}

func TestBase64(sys tool.ISystem) interface{} {
	base := encode()
	//sys.Log(base)
	//img := decode(base)
	img := tool.DecodeBase64ToImage(base)
	
	sys.GetResponse().Header().Set("Content-Type", "image/png")
	tool.WritePng(sys.GetResponse(), img)
	/*
	err := png.Encode(sys.GetResponse(), img)
	if err != nil {
		sys.GetResponse().WriteHeader(500)
	} else {
		sys.GetResponse().WriteHeader(200)
	}
	*/
	return tool.CustomView
}

func TestRandomModel(sys tool.ISystem) interface{} {
	dao := app.GetApp().GetStreetModelDAO()
	dao.GetRandomModel(sys, 1)
	return tool.CustomView
}

func TestSearchRegular(sys tool.ISystem) interface{} {
	dao := app.GetApp().GetStreetModelDAO()
	sys.Log( dao.SearchModelWithRegexp(sys, ".a", 2) )
	return tool.CustomView	
}

func TestReadFile(sys tool.ISystem) interface{} {
  ctx := sys.GetContext()
  readChannel := tool.GetContent(ctx, "package/config.json")
  switch info := <-readChannel;info.(type) {
  case error:
    sys.Log(info.(error).Error())
  case []byte:
    loaded := info.([]byte)
    sys.Log(fmt.Sprintf("loaded %s", loaded))
    json, err := tool.Byte2Json(loaded)
    if err != nil {
      sys.Log(err.Error())
    }else{
      sys.Log(json)
    }
  }
  return tool.CustomView
}


func TestPackageImage(sys tool.ISystem) interface{}{
	file, err := os.Open("package/event/event_1/image_1.png")
  defer file.Close()
	if err != nil {
		panic(err.Error())
	}
	img, err := png.Decode(file)
	if err != nil {
		panic(err.Error())
	}
	
	sys.GetResponse().Header().Set("Content-Type", "image/png")
	tool.WritePng(sys.GetResponse(), img)
  
	return tool.CustomView
}
