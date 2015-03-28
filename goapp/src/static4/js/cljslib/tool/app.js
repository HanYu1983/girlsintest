// Compiled by ClojureScript 0.0-2268
goog.provide('tool.app');
goog.require('cljs.core');
tool.app.emptyModel = (function emptyModel(ctx,prev,view,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve(null);
});})(promise))
,(0));
return promise;
});
tool.app.CreateElem = (function CreateElem(tmpl,CreateModel,helper){var promise = (new $.Deferred());var modelPromise = CreateModel.call(null);modelPromise.done(((function (promise,modelPromise){
return (function (model){var elem = tmpl.tmpl(model,helper);elem.DTO = model;
return promise.resolve(elem);
});})(promise,modelPromise))
);
modelPromise.fail(((function (promise,modelPromise){
return (function (p1__14528_SHARP_){return promise.reject(p1__14528_SHARP_);
});})(promise,modelPromise))
);
return promise;
});
tool.app.CreateView = (function CreateView(CreateElem,Open,Close){var elemPromise = CreateElem.call(null);var view = (function (){var obj14533 = {"elemPromise":elemPromise,"Open":Open,"Close":Close};return obj14533;
})();var G__14534_14535 = elemPromise;G__14534_14535.done(((function (G__14534_14535,elemPromise,view){
return (function (elem){return view.elem = elem;
});})(G__14534_14535,elemPromise,view))
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
tool.app.OpenView = (function OpenView(p__14536,key,CreateModel){var map__14539 = p__14536;var map__14539__$1 = ((cljs.core.seq_QMARK_.call(null,map__14539))?cljs.core.apply.call(null,cljs.core.hash_map,map__14539):map__14539);var ctx = map__14539__$1;var views = cljs.core.get.call(null,map__14539__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__14539__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var v = tool.app.CreateAppView.call(null,ctx,key,CreateModel);var G__14540_14541 = v.elemPromise;G__14540_14541.done(((function (G__14540_14541,v,map__14539,map__14539__$1,ctx,views,container){
return (function (elem){elem.appendTo(container);
return v.Open.call(null,elem);
});})(G__14540_14541,v,map__14539,map__14539__$1,ctx,views,container))
);
G__14540_14541.fail(((function (G__14540_14541,v,map__14539,map__14539__$1,ctx,views,container){
return (function (err){return alert(err);
});})(G__14540_14541,v,map__14539,map__14539__$1,ctx,views,container))
);
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.assoc,key,v);
});
tool.app.CloseView = (function CloseView(p__14542,key){var map__14544 = p__14542;var map__14544__$1 = ((cljs.core.seq_QMARK_.call(null,map__14544))?cljs.core.apply.call(null,cljs.core.hash_map,map__14544):map__14544);var ctx = map__14544__$1;var views = cljs.core.get.call(null,map__14544__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__14544__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var temp__4124__auto__ = key.call(null,views);if(cljs.core.truth_(temp__4124__auto__))
{var v = temp__4124__auto__;v.Close.call(null,v.elem,((function (v,temp__4124__auto__,map__14544,map__14544__$1,ctx,views,container){
return (function (){return v.elem.remove();
});})(v,temp__4124__auto__,map__14544,map__14544__$1,ctx,views,container))
);
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,key);
} else
{return ctx;
}
});
tool.app.ChangeView = (function ChangeView(p__14545,key,CreateModel){var map__14547 = p__14545;var map__14547__$1 = ((cljs.core.seq_QMARK_.call(null,map__14547))?cljs.core.apply.call(null,cljs.core.hash_map,map__14547):map__14547);var ctx = map__14547__$1;var views = cljs.core.get.call(null,map__14547__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__14547__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var closeAll = ((function (map__14547,map__14547__$1,ctx,views,container){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__14547,map__14547__$1,ctx,views,container){
return (function (ctx__$2,key__$1){return tool.app.CloseView.call(null,ctx__$2,key__$1);
});})(map__14547,map__14547__$1,ctx,views,container))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__14547,map__14547__$1,ctx,views,container))
;var thenOpen = ((function (closeAll,map__14547,map__14547__$1,ctx,views,container){
return (function (ctx__$1){return tool.app.OpenView.call(null,ctx__$1,key,CreateModel);
});})(closeAll,map__14547,map__14547__$1,ctx,views,container))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.app.React = (function React(ctx,p__14548){var vec__14553 = p__14548;var key = cljs.core.nth.call(null,vec__14553,(0),null);var whichRoute = cljs.core.nth.call(null,vec__14553,(1),null);var args = cljs.core.nth.call(null,vec__14553,(2),null);var handleRoute = ((function (vec__14553,key,whichRoute,args){
return (function (p__14554){var map__14555 = p__14554;var map__14555__$1 = ((cljs.core.seq_QMARK_.call(null,map__14555))?cljs.core.apply.call(null,cljs.core.hash_map,map__14555):map__14555);var ctx__$1 = map__14555__$1;var route = cljs.core.get.call(null,map__14555__$1,new cljs.core.Keyword(null,"route","route",329891309));var vec__14556 = whichRoute.call(null,key.call(null,route));var nextPage = cljs.core.nth.call(null,vec__14556,(0),null);var CreateModel = cljs.core.nth.call(null,vec__14556,(1),null);if(cljs.core.truth_(nextPage))
{return tool.app.ChangeView.call(null,ctx__$1,nextPage,cljs.core.partial.call(null,CreateModel,ctx__$1,key,nextPage,args));
} else
{if(cljs.core.truth_(CreateModel))
{return CreateModel.call(null,ctx__$1,key,nextPage,args);
} else
{throw (new Error(("route error, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" do "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(whichRoute))));
}
}
});})(vec__14553,key,whichRoute,args))
;return handleRoute.call(null,ctx);
});
tool.app.Route = (function Route(a_ctx,key,whichRoute,args){var handleRoute = (function (p__14560){var map__14561 = p__14560;var map__14561__$1 = ((cljs.core.seq_QMARK_.call(null,map__14561))?cljs.core.apply.call(null,cljs.core.hash_map,map__14561):map__14561);var ctx = map__14561__$1;var route = cljs.core.get.call(null,map__14561__$1,new cljs.core.Keyword(null,"route","route",329891309));var vec__14562 = whichRoute.call(null,key.call(null,route));var nextPage = cljs.core.nth.call(null,vec__14562,(0),null);var CreateModel = cljs.core.nth.call(null,vec__14562,(1),null);if(cljs.core.truth_(nextPage))
{return tool.app.ChangeView.call(null,ctx,nextPage,cljs.core.partial.call(null,CreateModel,ctx,key,nextPage,args));
} else
{if(cljs.core.truth_(CreateModel))
{return CreateModel.call(null,ctx,key,nextPage,args);
} else
{throw (new Error(("route error, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" do "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(whichRoute))));
}
}
});return cljs.core.swap_BANG_.call(null,a_ctx,handleRoute);
});
