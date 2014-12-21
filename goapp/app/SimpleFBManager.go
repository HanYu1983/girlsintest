package app

import (
    "errors"
    "encoding/json"
    "io/ioutil"
    "lib/tool"
    "appengine"
    "appengine/urlfetch"
)

type SimpleFBManager struct {
    GraphApi string
}

func FBManagerWithGraphAPI( graphapi string ) SimpleFBManager {
    return SimpleFBManager{GraphApi:graphapi}
}

func (mgr *SimpleFBManager) Verify(sys tool.ISystem, fbtoken string) (user FBUserEntity, err error) {
    res, err := CallFBME( sys, mgr.GraphApi, fbtoken )
    if err != nil {
        return FBUserEntity{}, err
    } else {
        var jsonobj interface{}
        err := json.Unmarshal(res, &jsonobj)
        if err != nil {
            sys.Log( err.Error() )
            return FBUserEntity{}, err
        } else {
            info := jsonobj.(map[string]interface{})
            fbErrorInterface, hasError := info["error"]
            if hasError {
                fbError := fbErrorInterface.(map[string]interface{})
                errMsg := fbError["message"].(string)
                return FBUserEntity{}, errors.New(errMsg)
            }
            return FBUserEntity{FbId: info["id"].(string), Name: info["first_name"].(string)}, nil
        }
    }
}

func CallFBME (sys tool.ISystem, graphapi string, token string) (res []byte, err error) {
    url := graphapi + "me?access_token="+token
    return HttpGet(sys, url)
}

func HttpGet (sys tool.ISystem, url string) (res []byte, err error){
    c := appengine.NewContext(sys.GetRequest())
    client := urlfetch.Client(c)
    resp, err := client.Get(url)
    if err != nil {
        return nil, err
    } else {
        defer resp.Body.Close()
        body, err := ioutil.ReadAll(resp.Body)
        if err != nil {
            return nil, err
        } else {
            return body, nil
        }
    }
}

