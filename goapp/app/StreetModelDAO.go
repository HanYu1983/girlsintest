package app

import (
	"lib/tool"
	"appengine"
    "appengine/datastore"
	"math/rand"
	"regexp"
)

type StreetModelDAO struct{
	tool.SimpleDAO
}

func (r *StreetModelDAO) Init(){
	r.Kind = "StreetModel"
	r.PutFn = func(ctx appengine.Context, key *datastore.Key, po interface{}) (retkey *datastore.Key, err error) {
		card := po.(StreetModelEntity)
		return  datastore.Put(ctx, key, &card)
	}
	r.GetFn = func(ctx appengine.Context, keys []*datastore.Key) (ret []interface{}, err error) {
		isSingle := len(keys) <= 1
		if isSingle {
			entity := StreetModelEntity{}
			err = datastore.Get(ctx, keys[0], &entity)
			entity.Key = keys[0].IntID()
			entity.DateUnix = entity.Date.Unix()
			ret = append( ret, entity )
			return
			
		} else {
			var entities []StreetModelEntity
			entities = make([]StreetModelEntity, len(keys))
			err = datastore.GetMulti(ctx, keys, &entities)
			for idx, entity := range entities {
				entity.Key = keys[idx].IntID()
				entity.DateUnix = entity.Date.Unix()
				ret = append(ret, entity)
			}
			return
		}
	}
	r.GetAllFn = func(ctx appengine.Context, q *datastore.Query) (ret []interface{}, keys []*datastore.Key, err error ) {
		var entities []StreetModelEntity
		q = q.Order("-Date")
		keys, err = q.GetAll(ctx, &entities)
		ret = []interface{}{}
		for idx, entity := range entities {
			entity.Key = keys[idx].IntID()
			entity.DateUnix = entity.Date.Unix()
			ret = append(ret, entity)
		}
		return
	}
}

func (r *StreetModelDAO) GetRandomModel( sys tool.ISystem, count int) StreetModelEntity {
	c := appengine.NewContext(sys.GetRequest())
	query := r.NewQuery(sys)
	query = query.Filter("Available =", true)
	total, err := query.Count(c)
	if err != nil {
		panic(err.Error())
	}
	if total == 0 {
		panic("no model")
	}
	luck := rand.Intn( total )
	query = query.Offset( luck ).Limit(1)
	return r.ReadAll(sys, query)[0].(StreetModelEntity)
}

func (r *StreetModelDAO) SearchModelWithRegexp(sys tool.ISystem, regstr string, count int) []StreetModelEntity {
	c := appengine.NewContext(sys.GetRequest())
	q := r.NewQuery(sys)
	total, err := q.Count(c)
	if err != nil {
		panic(err.Error())
	}
	bufferSize := 100
	q = q.Limit(bufferSize)
	
	var Find func(int, []StreetModelEntity) []StreetModelEntity
	Find = func(offset int, ret []StreetModelEntity) []StreetModelEntity{
		isNotOverCount := offset < total
		isNotEnough := len( ret ) < count
		if isNotOverCount && isNotEnough {
			q = q.Offset( offset )
			models := r.ReadAll( sys, q )
			for _, model := range models {
				streetModel := model.(StreetModelEntity)
				matched, _ := regexp.MatchString(regstr, streetModel.Tag)
				if matched {
					ret = append( ret, streetModel )
					isEnough := len( ret ) >= count
					if isEnough { break }
				}
			}
			return Find(offset + bufferSize, ret)
		} else {
			return ret
		}
	}
	
	return Find( 0, []StreetModelEntity{} )
}