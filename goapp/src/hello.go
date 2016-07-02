package hello

import (
	_ "appengine"
	"fmt"
	auth "lib/auth"
	"lib/rest"
	"lib/tool"
	"net/http"
	"os"
	"strings"
)

func Secret(user, realm string) string {
	if user == "hanvic" {
		// md5("hanvic:sdyle.net:gaNGangAnfInAlstEve")
		return "0c9c73c7af08ea47a7c65c5ed310e4da"
	}
	return ""
}

func responseHello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<html><body><h1>Hello!</h1></body></html>")
}

func WrapCacheControl(maxage int, fn http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", fmt.Sprintf("max-age=%d, public", maxage))
		fn(w, r)
	}
}

func init() {
	// rest style setting
	cmdhandlers := map[string]func(sys tool.ISystem) interface{}{}

	handlers := map[string]func(string, *os.File, http.ResponseWriter, *http.Request){
		"png":  rest.HandleImage(),
		"jpg":  rest.HandleImage(),
		"jpeg": rest.HandleImage(),
		"json": rest.HandleJson(),
		"cmd":  rest.HandleCmd(tool.AppEngineContextFactory, cmdhandlers),
	}

	AuthWrap := auth.Factory(auth.Config{
		Realm:     "sdyle.net",
		Opaque:    "test1", // 這個值可以任意換，換了可以強迫前端重新認證
		Secrets:   Secret,
		WhiteList: []string{""},
	})

	http.HandleFunc("/goapp/auth", AuthWrap(responseHello)) // 認證不能被快取，所以獨立出來

	// 前台cache就行了，不必使用後台的validator(ETag)
	restFn := rest.RestWithConfig("./package", func(url string) string {
		return strings.Replace(url, "goapp/", "", 1)
	}, etagValidator, handlers)
	restFn = WrapCacheControl(cacheMaxAge, restFn)
	http.HandleFunc("/goapp/", restFn)

	// test code
	http.HandleFunc("/auth3", AuthWrap(responseHello))
	http.HandleFunc("/goapp/whereami", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "addr:[%s]", r.RemoteAddr)
	})
}
