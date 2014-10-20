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
	r.GetFn = func(ctx appengine.Context, key *datastore.Key) (ret interface{}, err error) {
		var card PhotoEntity
		err = datastore.Get(ctx, key, &card)
		card.Key = key.IntID()
		ret = card
		return
	}
	r.GetAllFn = func(ctx appengine.Context, q *datastore.Query) (ret []interface{}, keys []*datastore.Key, err error ) {
		var cards []PhotoEntity
		keys, err = q.GetAll(ctx, &cards)
		for idx, card := range cards {
			card.Key = keys[idx].IntID()
			ret = append(ret, card)
		}
		return
	}
}

