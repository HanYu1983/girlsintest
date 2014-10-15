package app

import (
	"lib/tool"
)

var app IApp = func()IApp{
	var ret SimpleApp
	ret.Init()
	return &ret
}()

type SimpleApp struct{
	CookieManager tool.SimpleCookieManager
	UserDAO UserDAO
	StreetModelDAO StreetModelDAO
}

func (app *SimpleApp) Init(){
	app.UserDAO.Init()
	app.StreetModelDAO.Init()
}

func (app *SimpleApp) GetUserDAO() IUserDAO{
	return &app.UserDAO
}

func (app *SimpleApp) GetStreetModelDAO() IStreetModelDAO{
	return &app.StreetModelDAO
}

func (app *SimpleApp) GetSessionManager() ISessionManager{
	return nil
}

func (app *SimpleApp) GetCookieManager() tool.ICookieManager{
	return &app.CookieManager
}