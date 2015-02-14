package app

import (
	"lib/tool"
	"appengine"
    "appengine/datastore"
)

type UserDAO struct{
	tool.SimpleDAO
}

func (r *UserDAO) Init(){
	r.Kind = "User"
	r.PutFn = func(ctx appengine.Context, key *datastore.Key, po interface{}) (retkey *datastore.Key, err error) {
		card := po.(UserEntity)
		return  datastore.Put(ctx, key, &card)
	}
	r.GetFn = func(ctx appengine.Context, keys []*datastore.Key) (ret []interface{}, err error) {
		isSingle := len(keys) <= 1
		if isSingle {
			entity := UserEntity{}
			err = datastore.Get(ctx, keys[0], &entity)
			entity.Key = keys[0].IntID()
			ret = append( ret, entity )
			return
			
		} else {
			var entities []UserEntity
			entities = make([]UserEntity, len(keys))
			err = datastore.GetMulti(ctx, keys, &entities)
			for idx, entity := range entities {
				entity.Key = keys[idx].IntID()
				ret = append(ret, entity)
			}
			return
		}
	}
	r.GetAllFn = func(ctx appengine.Context, q *datastore.Query) (ret []interface{}, keys []*datastore.Key, err error ) {
		var cards []UserEntity
		keys, err = q.GetAll(ctx, &cards)
		ret = []interface{}{}
		for idx, card := range cards {
			card.Key = keys[idx].IntID()
			ret = append(ret, card)
		}
		return
	}
}

func (r *UserDAO) Verify(account string, password string) bool {
	return true
}

