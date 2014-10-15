package tool

import (
    "appengine"
    "appengine/datastore"
)

type SimpleRepository struct {
    Kind string
    PutFn func(ctx appengine.Context, key *datastore.Key, po interface{}) (retkey *datastore.Key, err error)
    GetFn func(ctx appengine.Context, key *datastore.Key) (ret interface{}, err error)
    GetAllFn func(ctx appengine.Context, q *datastore.Query) (ret []interface{}, keys []*datastore.Key, err error )
}

func (cr *SimpleRepository) Create(sys ISystem, po interface{}) int64 {
    c := appengine.NewContext(sys.GetRequest())
    key := datastore.NewIncompleteKey(c, cr.Kind, nil)    
    retkey, err := cr.PutFn(c, key, po)
    if err != nil {
        panic(err.Error())
    }
    return retkey.IntID()
}

func (cr *SimpleRepository) Update(sys ISystem, key int64, po interface{}){
    c := appengine.NewContext(sys.GetRequest())
    pKey := datastore.NewKey(c, cr.Kind, "", key, nil)
    cr.PutFn(c, pKey, po)
}
func (cr *SimpleRepository) Read(sys ISystem, key int64) interface{}{
    c := appengine.NewContext(sys.GetRequest())
    pKey := datastore.NewKey(c, cr.Kind, "", key, nil)
    ret, err := cr.GetFn(c, pKey)
    if err != nil {
        panic(err.Error())
    }
    return ret
}
func (cr *SimpleRepository) Delete(sys ISystem, key int64){
    c := appengine.NewContext(sys.GetRequest())
    pKey := datastore.NewKey(c, cr.Kind, "", key, nil)
    err := datastore.Delete(c, pKey)
    if err != nil {
        panic(err.Error())
    }
}
func (cr *SimpleRepository) GetAll(sys ISystem) []interface{}{
    c := appengine.NewContext(sys.GetRequest())
    q := datastore.NewQuery(cr.Kind)
    pos, _, err := cr.GetAllFn( c, q )
    if err != nil {
        panic( err.Error() )
    }
    return pos
}