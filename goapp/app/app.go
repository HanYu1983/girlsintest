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
	UserRepository UserRepository
}

func (app *SimpleApp) Init(){
	app.UserRepository.Init()
/*
	app.UserRepository = tool.SimpleRepository{
		Kind: "User",
		PutFn: func(ctx appengine.Context, key *datastore.Key, po interface{}) (retkey *datastore.Key, err error) {
			card := po.(User)
			return  datastore.Put(ctx, key, &card)
		},
		GetFn: func(ctx appengine.Context, key *datastore.Key) (ret interface{}, err error) {
			var card User
			err = datastore.Get(ctx, key, &card)
			card.Key = key.IntID()
			ret = card
			return
		},
		GetAllFn: func(ctx appengine.Context, q *datastore.Query) (ret []interface{}, keys []*datastore.Key, err error ) {
			var cards []User
			keys, err = q.GetAll(ctx, &cards)
			for idx, card := range cards {
				card.Key = keys[idx].IntID()
				ret = append(ret, card)
			}
			return
		},
	}*/
}
func (app *SimpleApp) GetUserRepository() IUserRepository{
	return &app.UserRepository
}
func (app *SimpleApp) GetSessionManager() ISessionManager{
	return nil
}
func (app *SimpleApp) GetCookieManager() tool.ICookieManager{
	return &app.CookieManager
}