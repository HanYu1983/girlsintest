package app

import (
	"lib/tool"
	"appengine"
    "appengine/datastore"
)

type PhotoDAO struct{
	tool.SimpleDAO
}

func (r *PhotoDAO) Init(){
	r.Kind = "Photo"
	r.PutFn = func(ctx appengine.Context, key *datastore.Key, po interface{}) (retkey *datastore.Key, err error) {
		card := po.(PhotoEntity)
		return  datastore.Put(ctx, key, &card)
	}
	r.GetFn = func(ctx appengine.Context, keys []*datastore.Key) (ret []interface{}, err error) {
		isSingle := len(keys) <= 1
		if isSingle {
			entity := PhotoEntity{}
			err = datastore.Get(ctx, keys[0], &entity)
			entity.Key = keys[0].IntID()
			ret = append( ret, entity )
			return
			
		} else {
			var entities []PhotoEntity
			entities = make([]PhotoEntity, len(keys))
			err = datastore.GetMulti(ctx, keys, entities)
			for idx, entity := range entities {
				entity.Key = keys[idx].IntID()
				entity.Base64Str = string(entity.Base64)
				ret = append(ret, entity)
			}
			return
		}
	}
	r.GetAllFn = func(ctx appengine.Context, q *datastore.Query) (ret []interface{}, keys []*datastore.Key, err error ) {
		var entities []PhotoEntity
		keys, err = q.GetAll(ctx, &entities)
		ret = []interface{}{}
		for idx, entity := range entities {
			entity.Key = keys[idx].IntID()
			entity.Base64Str = string(entity.Base64)
			ret = append(ret, entity)
		}
		return
	}
}

