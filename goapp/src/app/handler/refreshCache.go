package handler

import (
  "app"
  "lib/tool"
)

func RefreshCache(sys tool.ISystem) interface{}{
  cacheMgr := app.GetApp().GetBrowserCacheManager()
  cacheMgr.Refresh()
  return tool.Success(nil)
}