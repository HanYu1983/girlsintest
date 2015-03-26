// Compiled by ClojureScript 0.0-2268
goog.provide('core.app');
goog.require('cljs.core');
core.app.emptyModel = (function emptyModel(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve(null);
});})(promise))
,(0));
return promise;
});
core.app.CreateElem = (function CreateElem(tmpl,CreateModel,helper){var promise = (new $.Deferred());var modelPromise = CreateModel.call(null);modelPromise.done(((function (promise,modelPromise){
return (function (model){var elem = tmpl.tmpl(model,helper);return promise.resolve(elem);
});})(promise,modelPromise))
);
modelPromise.fail(((function (promise,modelPromise){
return (function (p1__4977_SHARP_){return promise.reject(p1__4977_SHARP_);
});})(promise,modelPromise))
);
return promise;
});
core.app.CreateView = (function CreateView(CreateElem,Open,Close){var elemPromise = CreateElem.call(null);var view = (function (){var obj4982 = {"elemPromise":elemPromise,"Open":Open,"Close":Close};return obj4982;
})();var G__4983_4984 = elemPromise;G__4983_4984.done(((function (G__4983_4984,elemPromise,view){
return (function (elem){return view.elem = elem;
});})(G__4983_4984,elemPromise,view))
);
return view;
});
core.app.FadeOut = (function FadeOut(elem,Complete){elem.fadeOut((400));
return setTimeout(Complete,(400));
});
core.app.FadeIn = (function FadeIn(elem){return elem.fadeIn((400));
});
core.app.CreateAppView = (function (){var method_table__4441__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4442__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4445__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("CreateAppView",((function (method_table__4441__auto__,prefer_table__4442__auto__,method_cache__4443__auto__,cached_hierarchy__4444__auto__,hierarchy__4445__auto__){
return (function (ctx,key,CreateModel){return key;
});})(method_table__4441__auto__,prefer_table__4442__auto__,method_cache__4443__auto__,cached_hierarchy__4444__auto__,hierarchy__4445__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4445__auto__,method_table__4441__auto__,prefer_table__4442__auto__,method_cache__4443__auto__,cached_hierarchy__4444__auto__));
})();
core.app.OpenView = (function OpenView(p__4985,key,CreateModel){var map__4988 = p__4985;var map__4988__$1 = ((cljs.core.seq_QMARK_.call(null,map__4988))?cljs.core.apply.call(null,cljs.core.hash_map,map__4988):map__4988);var ctx = map__4988__$1;var views = cljs.core.get.call(null,map__4988__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__4988__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var v = core.app.CreateAppView.call(null,ctx,key,CreateModel);var G__4989_4990 = v.elemPromise;G__4989_4990.done(((function (G__4989_4990,v,map__4988,map__4988__$1,ctx,views,container){
return (function (elem){elem.appendTo(container);
return v.Open.call(null,elem);
});})(G__4989_4990,v,map__4988,map__4988__$1,ctx,views,container))
);
G__4989_4990.fail(((function (G__4989_4990,v,map__4988,map__4988__$1,ctx,views,container){
return (function (err){return alert(err);
});})(G__4989_4990,v,map__4988,map__4988__$1,ctx,views,container))
);
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.assoc,key,v);
});
core.app.CloseView = (function CloseView(p__4991,key){var map__4993 = p__4991;var map__4993__$1 = ((cljs.core.seq_QMARK_.call(null,map__4993))?cljs.core.apply.call(null,cljs.core.hash_map,map__4993):map__4993);var ctx = map__4993__$1;var views = cljs.core.get.call(null,map__4993__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__4993__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var temp__4124__auto__ = key.call(null,views);if(cljs.core.truth_(temp__4124__auto__))
{var v = temp__4124__auto__;v.Close.call(null,v.elem,((function (v,temp__4124__auto__,map__4993,map__4993__$1,ctx,views,container){
return (function (){return v.elem.remove();
});})(v,temp__4124__auto__,map__4993,map__4993__$1,ctx,views,container))
);
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,key);
} else
{return ctx;
}
});
core.app.ChangeView = (function ChangeView(p__4994,key,CreateModel){var map__4996 = p__4994;var map__4996__$1 = ((cljs.core.seq_QMARK_.call(null,map__4996))?cljs.core.apply.call(null,cljs.core.hash_map,map__4996):map__4996);var ctx = map__4996__$1;var views = cljs.core.get.call(null,map__4996__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__4996__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var closeAll = ((function (map__4996,map__4996__$1,ctx,views,container){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__4996,map__4996__$1,ctx,views,container){
return (function (ctx__$2,key__$1){return core.app.CloseView.call(null,ctx__$2,key__$1);
});})(map__4996,map__4996__$1,ctx,views,container))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__4996,map__4996__$1,ctx,views,container))
;var thenOpen = ((function (closeAll,map__4996,map__4996__$1,ctx,views,container){
return (function (ctx__$1){return core.app.OpenView.call(null,ctx__$1,key,CreateModel);
});})(closeAll,map__4996,map__4996__$1,ctx,views,container))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
core.app.Route = (function Route(a_ctx,key,whichRoute,args){var handleRoute = (function (p__5000){var map__5001 = p__5000;var map__5001__$1 = ((cljs.core.seq_QMARK_.call(null,map__5001))?cljs.core.apply.call(null,cljs.core.hash_map,map__5001):map__5001);var ctx = map__5001__$1;var route = cljs.core.get.call(null,map__5001__$1,new cljs.core.Keyword(null,"route","route",329891309));var vec__5002 = whichRoute.call(null,key.call(null,route));var nextPage = cljs.core.nth.call(null,vec__5002,(0),null);var CreateModel = cljs.core.nth.call(null,vec__5002,(1),null);if(!(cljs.core._EQ_.call(null,nextPage,null)))
{return core.app.ChangeView.call(null,ctx,nextPage,cljs.core.partial.call(null,CreateModel,a_ctx,args));
} else
{CreateModel.call(null,a_ctx);
return ctx;
}
});return cljs.core.swap_BANG_.call(null,a_ctx,handleRoute);
});
