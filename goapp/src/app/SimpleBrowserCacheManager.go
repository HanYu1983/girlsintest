package app

import (
  "lib/tool"
  "fmt"
)

type SimpleBrowserCacheManager struct{
  etagIdx int
}

func (mgr *SimpleBrowserCacheManager) HandleCacheAndShouldReturn(sys tool.ISystem) bool{
  etag := fmt.Sprintf("SimpleBrowserCacheManager: %d", mgr.etagIdx)
  IsMatchCache := tool.UseETag( etag )
  return IsMatchCache( sys.GetResponse(), sys.GetRequest() )
}

func (mgr *SimpleBrowserCacheManager) Refresh(){
  mgr.etagIdx += 1
}