package tool

import (
	"net/http"
	"strconv"
)

func Verify(fn func()){
	fn()
}



func ParamShouldExist( r *http.Request, name string ) func() {
	return func(){
		if len(r.Form[name]) < 1 {
			panic( "參數["+name+"]必須存在" )
		}
	}
}

func ParamShouldBeInt( r *http.Request, name string ) func() {
	return func(){
		// 無法呼叫ParamShouldExist, golang的panic不會繼續向外丟出!?
		if len(r.Form[name]) < 1 {
			panic( "參數["+name+"]必須存在" )
		}
		_, err := strconv.ParseInt( r.Form[name][0], 10, 0)
		if err != nil {
			panic( "["+name+"]必須為數字" )
		}
	}
}

func ParamShouldInRange( r *http.Request, name string, min int, max int) func(){
    return func(){
		if len(r.Form[name]) < 1 {
			panic( "參數["+name+"]必須存在" )
		}
		value, err := strconv.ParseInt( r.Form[name][0], 10, 0)
		if err != nil {
			panic( "["+name+"]必須為數字" )
		}
		if int(value) >= min && int(value) <= max {
			panic( "["+name+"]參數必須在["+strconv.Itoa(min)+"-"+strconv.Itoa(max)+"]之間" )
		}
    }
}