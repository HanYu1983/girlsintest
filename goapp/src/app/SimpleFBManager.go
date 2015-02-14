package app

import (
    "errors"
    "lib/tool"
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
        info, err := tool.Byte2Json(res)
        if err != nil {
            return FBUserEntity{}, err
        } else {
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
    return tool.HttpGet(sys, url)
}
