// Compiled by ClojureScript 0.0-2268
goog.provide('tool.app');
goog.require('cljs.core');
tool.app.emptyModel = (function emptyModel(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve(null);
});})(promise))
,(0));
return promise;
});
tool.app.CreateElem = (function CreateElem(tmpl,CreateModel,helper){var promise = (new $.Deferred());var modelPromise = CreateModel.call(null);modelPromise.done(((function (promise,modelPromise){
return (function (model){var elem = tmpl.tmpl(model,helper);return promise.resolve(elem);
});})(promise,modelPromise))
);
modelPromise.fail(((function (promise,modelPromise){
return (function (p1__9389_SHARP_){return promise.reject(p1__9389_SHARP_);
});})(promise,modelPromise))
);
return promise;
});
tool.app.CreateView = (function CreateView(CreateElem,Open,Close){var elemPromise = CreateElem.call(null);var view = (function (){var obj9394 = {"elemPromise":elemPromise,"Open":Open,"Close":Close};return obj9394;
})();var G__9395_9396 = elemPromise;G__9395_9396.done(((function (G__9395_9396,elemPromise,view){
return (function (elem){return view.elem = elem;
});})(G__9395_9396,elemPromise,view))
);
return view;
});
tool.app.NormalOut = (function NormalOut(elem,Complete){return Complete.call(null);
});
tool.app.FadeOut = (function FadeOut(time,elem,Complete){elem.fadeOut(time);
return setTimeout(Complete,time);
});
tool.app.FadeIn = (function FadeIn(time,elem){return elem.fadeIn(time);
});
tool.app.CreateAppView = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("CreateAppView",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (ctx,key,CreateModel){return key;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
tool.app.OpenView = (function OpenView(p__9397,key,CreateModel){var map__9400 = p__9397;var map__9400__$1 = ((cljs.core.seq_QMARK_.call(null,map__9400))?cljs.core.apply.call(null,cljs.core.hash_map,map__9400):map__9400);var ctx = map__9400__$1;var views = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var v = tool.app.CreateAppView.call(null,ctx,key,CreateModel);var G__9401_9402 = v.elemPromise;G__9401_9402.done(((function (G__9401_9402,v,map__9400,map__9400__$1,ctx,views,container){
return (function (elem){elem.appendTo(container);
return v.Open.call(null,elem);
});})(G__9401_9402,v,map__9400,map__9400__$1,ctx,views,container))
);
G__9401_9402.fail(((function (G__9401_9402,v,map__9400,map__9400__$1,ctx,views,container){
return (function (err){return alert(err);
});})(G__9401_9402,v,map__9400,map__9400__$1,ctx,views,container))
);
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.assoc,key,v);
});
tool.app.CloseView = (function CloseView(p__9403,key){var map__9405 = p__9403;var map__9405__$1 = ((cljs.core.seq_QMARK_.call(null,map__9405))?cljs.core.apply.call(null,cljs.core.hash_map,map__9405):map__9405);var ctx = map__9405__$1;var views = cljs.core.get.call(null,map__9405__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__9405__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var temp__4124__auto__ = key.call(null,views);if(cljs.core.truth_(temp__4124__auto__))
{var v = temp__4124__auto__;v.Close.call(null,v.elem,((function (v,temp__4124__auto__,map__9405,map__9405__$1,ctx,views,container){
return (function (){return v.elem.remove();
});})(v,temp__4124__auto__,map__9405,map__9405__$1,ctx,views,container))
);
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,key);
} else
{return ctx;
}
});
tool.app.ChangeView = (function ChangeView(p__9406,key,CreateModel){var map__9408 = p__9406;var map__9408__$1 = ((cljs.core.seq_QMARK_.call(null,map__9408))?cljs.core.apply.call(null,cljs.core.hash_map,map__9408):map__9408);var ctx = map__9408__$1;var views = cljs.core.get.call(null,map__9408__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__9408__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var closeAll = ((function (map__9408,map__9408__$1,ctx,views,container){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__9408,map__9408__$1,ctx,views,container){
return (function (ctx__$2,key__$1){return tool.app.CloseView.call(null,ctx__$2,key__$1);
});})(map__9408,map__9408__$1,ctx,views,container))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__9408,map__9408__$1,ctx,views,container))
;var thenOpen = ((function (closeAll,map__9408,map__9408__$1,ctx,views,container){
return (function (ctx__$1){return tool.app.OpenView.call(null,ctx__$1,key,CreateModel);
});})(closeAll,map__9408,map__9408__$1,ctx,views,container))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.app.Route = (function Route(a_ctx,key,whichRoute,args){var handleRoute = (function (p__9412){var map__9413 = p__9412;var map__9413__$1 = ((cljs.core.seq_QMARK_.call(null,map__9413))?cljs.core.apply.call(null,cljs.core.hash_map,map__9413):map__9413);var ctx = map__9413__$1;var route = cljs.core.get.call(null,map__9413__$1,new cljs.core.Keyword(null,"route","route",329891309));var vec__9414 = whichRoute.call(null,key.call(null,route));var nextPage = cljs.core.nth.call(null,vec__9414,(0),null);var CreateModel = cljs.core.nth.call(null,vec__9414,(1),null);if(!(cljs.core._EQ_.call(null,nextPage,null)))
{return tool.app.ChangeView.call(null,ctx,nextPage,cljs.core.partial.call(null,CreateModel,a_ctx,args));
} else
{CreateModel.call(null,a_ctx);
return ctx;
}
});return cljs.core.swap_BANG_.call(null,a_ctx,handleRoute);
});
