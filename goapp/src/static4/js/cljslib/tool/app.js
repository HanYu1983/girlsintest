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
return (function (p1__5100_SHARP_){return promise.reject(p1__5100_SHARP_);
});})(promise,modelPromise))
);
return promise;
});
tool.app.CreateView = (function CreateView(CreateElem,Open,Close){var elemPromise = CreateElem.call(null);var view = (function (){var obj5105 = {"elemPromise":elemPromise,"Open":Open,"Close":Close};return obj5105;
})();var G__5106_5107 = elemPromise;G__5106_5107.done(((function (G__5106_5107,elemPromise,view){
return (function (elem){return view.elem = elem;
});})(G__5106_5107,elemPromise,view))
);
return view;
});
tool.app.FadeOut = (function FadeOut(elem,Complete){elem.fadeOut((400));
return setTimeout(Complete,(400));
});
tool.app.FadeIn = (function FadeIn(elem){return elem.fadeIn((400));
});
tool.app.CreateAppView = (function (){var method_table__4441__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4442__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4445__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("CreateAppView",((function (method_table__4441__auto__,prefer_table__4442__auto__,method_cache__4443__auto__,cached_hierarchy__4444__auto__,hierarchy__4445__auto__){
return (function (ctx,key,CreateModel){return key;
});})(method_table__4441__auto__,prefer_table__4442__auto__,method_cache__4443__auto__,cached_hierarchy__4444__auto__,hierarchy__4445__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4445__auto__,method_table__4441__auto__,prefer_table__4442__auto__,method_cache__4443__auto__,cached_hierarchy__4444__auto__));
})();
tool.app.OpenView = (function OpenView(p__5108,key,CreateModel){var map__5111 = p__5108;var map__5111__$1 = ((cljs.core.seq_QMARK_.call(null,map__5111))?cljs.core.apply.call(null,cljs.core.hash_map,map__5111):map__5111);var ctx = map__5111__$1;var views = cljs.core.get.call(null,map__5111__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__5111__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var v = tool.app.CreateAppView.call(null,ctx,key,CreateModel);var G__5112_5113 = v.elemPromise;G__5112_5113.done(((function (G__5112_5113,v,map__5111,map__5111__$1,ctx,views,container){
return (function (elem){elem.appendTo(container);
return v.Open.call(null,elem);
});})(G__5112_5113,v,map__5111,map__5111__$1,ctx,views,container))
);
G__5112_5113.fail(((function (G__5112_5113,v,map__5111,map__5111__$1,ctx,views,container){
return (function (err){return alert(err);
});})(G__5112_5113,v,map__5111,map__5111__$1,ctx,views,container))
);
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.assoc,key,v);
});
tool.app.CloseView = (function CloseView(p__5114,key){var map__5116 = p__5114;var map__5116__$1 = ((cljs.core.seq_QMARK_.call(null,map__5116))?cljs.core.apply.call(null,cljs.core.hash_map,map__5116):map__5116);var ctx = map__5116__$1;var views = cljs.core.get.call(null,map__5116__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__5116__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var temp__4124__auto__ = key.call(null,views);if(cljs.core.truth_(temp__4124__auto__))
{var v = temp__4124__auto__;v.Close.call(null,v.elem,((function (v,temp__4124__auto__,map__5116,map__5116__$1,ctx,views,container){
return (function (){return v.elem.remove();
});})(v,temp__4124__auto__,map__5116,map__5116__$1,ctx,views,container))
);
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,key);
} else
{return ctx;
}
});
tool.app.ChangeView = (function ChangeView(p__5117,key,CreateModel){var map__5119 = p__5117;var map__5119__$1 = ((cljs.core.seq_QMARK_.call(null,map__5119))?cljs.core.apply.call(null,cljs.core.hash_map,map__5119):map__5119);var ctx = map__5119__$1;var views = cljs.core.get.call(null,map__5119__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__5119__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var closeAll = ((function (map__5119,map__5119__$1,ctx,views,container){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__5119,map__5119__$1,ctx,views,container){
return (function (ctx__$2,key__$1){return tool.app.CloseView.call(null,ctx__$2,key__$1);
});})(map__5119,map__5119__$1,ctx,views,container))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__5119,map__5119__$1,ctx,views,container))
;var thenOpen = ((function (closeAll,map__5119,map__5119__$1,ctx,views,container){
return (function (ctx__$1){return tool.app.OpenView.call(null,ctx__$1,key,CreateModel);
});})(closeAll,map__5119,map__5119__$1,ctx,views,container))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.app.Route = (function Route(a_ctx,key,whichRoute,args){var handleRoute = (function (p__5123){var map__5124 = p__5123;var map__5124__$1 = ((cljs.core.seq_QMARK_.call(null,map__5124))?cljs.core.apply.call(null,cljs.core.hash_map,map__5124):map__5124);var ctx = map__5124__$1;var route = cljs.core.get.call(null,map__5124__$1,new cljs.core.Keyword(null,"route","route",329891309));var vec__5125 = whichRoute.call(null,key.call(null,route));var nextPage = cljs.core.nth.call(null,vec__5125,(0),null);var CreateModel = cljs.core.nth.call(null,vec__5125,(1),null);if(!(cljs.core._EQ_.call(null,nextPage,null)))
{return tool.app.ChangeView.call(null,ctx,nextPage,cljs.core.partial.call(null,CreateModel,a_ctx,args));
} else
{CreateModel.call(null,a_ctx);
return ctx;
}
});return cljs.core.swap_BANG_.call(null,a_ctx,handleRoute);
});
