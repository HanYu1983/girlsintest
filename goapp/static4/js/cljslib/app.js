// Compiled by ClojureScript 0.0-2268
goog.provide('app');
goog.require('cljs.core');
goog.require('app.page.MenubarController');
goog.require('app.page.HeaderController');
goog.require('app.page.HeaderView');
goog.require('app.page.MenubarView');
goog.require('app.event');
goog.require('app.event');
goog.require('app.controller');
goog.require('app.controller');
app.main = (function main(){var this$ = cljs.core.atom.call(null,null);var coll_pages = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var mc_pageContainer = $("#mc_pageContainer");var mc_popupContainer = $("#mc_popupContainer");var mc_loading = $("#mc_loading");var header = (function (){var G__5009 = app.page.HeaderController.create.call(null);app.controller.set_view.call(null,G__5009,app.page.HeaderView.create.call(null,$("#mc_header")));
return G__5009;
})();var menubar = (function (){var G__5010 = app.page.MenubarController.create.call(null);app.controller.set_view.call(null,G__5010,app.page.MenubarView.create.call(null,$("#mc_menubar")));
return G__5010;
})();app.event.onHeaderBtnBackhomeClick.subscribe(cljs.core.partial.call(null,app.onHeaderBtnBackhomeClick,this$));
app.event.onMenubarBtnClick.subscribe(cljs.core.partial.call(null,app.onMenubarBtnClick,this$));
app.controller.open.call(null,header);
app.controller.open.call(null,menubar);
return cljs.core.reset_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coll_pages","coll_pages",14662193),coll_pages,new cljs.core.Keyword(null,"mc_pageContainer","mc_pageContainer",2102405956),mc_pageContainer,new cljs.core.Keyword(null,"mc_popupContainer","mc_popupContainer",954307790),mc_popupContainer,new cljs.core.Keyword(null,"mc_loading","mc_loading",-49304577),mc_loading], null));
});
/**
* 打開一個頁面
*/
app.openPage = (function openPage(this$,name,param){var container = new cljs.core.Keyword(null,"mc_pageContainer","mc_pageContainer",2102405956).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));app.closeAllPage.call(null,this$,container);
return app.openPageController.call(null,this$,name,container,param);
});
/**
* 關閉一個頁面
*/
app.closePage = (function closePage(this$,name,container){return app.closePageController.call(null,this$,name,container);
});
/**
* 關掉指定頁面
*/
app.closePageController = (function closePageController(this$,name,container){var temp__4126__auto__ = (new cljs.core.Keyword(null,"coll_pages","coll_pages",14662193).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))[name]);if(cljs.core.truth_(temp__4126__auto__))
{var page = temp__4126__auto__;container.empty();
page.close();
delete$(new cljs.core.Keyword(null,"coll_pages","coll_pages",14662193).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),name);
return page;
} else
{return null;
}
});
app.closeAllPage = (function closeAllPage(this$,container){return null;
});
app.openPageController = (function openPageController(this$,name,container,param){return null;
});
app.onHeaderBtnBackhomeClick = (function onHeaderBtnBackhomeClick(this$,view){return console.log(cljs.core.deref.call(null,this$),view);
});
app.onMenubarBtnClick = (function onMenubarBtnClick(this$,id){var pred__5020 = cljs.core._EQ_;var expr__5021 = id;if(cljs.core.truth_(pred__5020.call(null,"btn_nav_celebrity",expr__5021)))
{return alert("\u656C\u8ACB\u671F\u5F85");
} else
{if(cljs.core.truth_(pred__5020.call(null,"btn_nav_model",expr__5021)))
{var G__5023 = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));G__5023.navigate("modelsList",(function (){var obj5025 = {"trigger":true};return obj5025;
})());
return G__5023;
} else
{if(cljs.core.truth_(pred__5020.call(null,"btn_nav_event",expr__5021)))
{return alert("\u656C\u8ACB\u671F\u5F85");
} else
{if(cljs.core.truth_(pred__5020.call(null,"btn_nav_streetSnap",expr__5021)))
{var G__5026 = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));G__5026.navigate("streetsnapList",(function (){var obj5028 = {"trigger":true};return obj5028;
})());
return G__5026;
} else
{if(cljs.core.truth_(pred__5020.call(null,"btn_nav_news",expr__5021)))
{return alert("\u656C\u8ACB\u671F\u5F85");
} else
{return true;
}
}
}
}
}
});
app.main.call(null);
