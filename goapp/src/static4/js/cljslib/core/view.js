// Compiled by ClojureScript 0.0-2268
goog.provide('core.view');
goog.require('cljs.core');
goog.require('core.event');
goog.require('core.event');
goog.require('tool.app');
goog.require('tool.app');
cljs.core._add_method.call(null,tool.app.CreateAppView,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,CreateModel){var CreateElem = (function (){return tool.app.CreateElem.call(null,$("#tmpl_home"),CreateModel,null);
});var view = tool.app.CreateView.call(null,CreateElem,cljs.core.partial.call(null,tool.app.FadeIn,(400)),tool.app.NormalOut);var G__5267_5268 = view.elemPromise;G__5267_5268.done(((function (G__5267_5268,CreateElem,view){
return (function (elem){return null;
});})(G__5267_5268,CreateElem,view))
);
return view;
}));
core.view.defcommonlist = (function defcommonlist(name){var CloseFn = (function (elem,Complete){return tool.app.NormalOut.call(null,elem,(function (){var mc_modelContainer = elem.find("#mc_modelContainer");mc_modelContainer.undelegate("div[modelFrame]","click");
return Complete.call(null);
}));
});return cljs.core._add_method.call(null,tool.app.CreateAppView,name,((function (CloseFn){
return (function (ctx,key,CreateModel){var CreateElem = ((function (CloseFn){
return (function (){return tool.app.CreateElem.call(null,$("#tmpl_streetsnap_list"),CreateModel,null);
});})(CloseFn))
;var view = tool.app.CreateView.call(null,CreateElem,cljs.core.partial.call(null,tool.app.FadeIn,(400)),CloseFn);var G__5270_5271 = view.elemPromise;G__5270_5271.done(((function (G__5270_5271,CreateElem,view,CloseFn){
return (function (elem){var mc_modelContainer = elem.find("#mc_modelContainer");return mc_modelContainer.delegate("div[modelFrame]","click",((function (mc_modelContainer,G__5270_5271,CreateElem,view,CloseFn){
return (function (){var that = this;return core.event.OnRoute.onNext(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),that.id,new cljs.core.Keyword(null,"view","view",1247994814),name], null)], null));
});})(mc_modelContainer,G__5270_5271,CreateElem,view,CloseFn))
);
});})(G__5270_5271,CreateElem,view,CloseFn))
);
return view;
});})(CloseFn))
);
});
core.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
core.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
core.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
core.view.defcommondetail = (function defcommondetail(viewname){var CloseFn = (function (elem,Complete){return tool.app.NormalOut.call(null,elem,(function (){var mc_modelContainer = elem.find("#mc_historyContainer");mc_modelContainer.undelegate("img","click");
return Complete.call(null);
}));
});return cljs.core._add_method.call(null,tool.app.CreateAppView,viewname,((function (CloseFn){
return (function (ctx,key,CreateModel){var CreateElem = ((function (CloseFn){
return (function (){return tool.app.CreateElem.call(null,$("#tmpl_streetsnap"),CreateModel,null);
});})(CloseFn))
;var view = tool.app.CreateView.call(null,CreateElem,cljs.core.partial.call(null,tool.app.FadeIn,(400)),CloseFn);var G__5273_5274 = view.elemPromise;G__5273_5274.done(((function (G__5273_5274,CreateElem,view,CloseFn){
return (function (elem){var mc_historyContainer = elem.find("#mc_historyContainer");return mc_historyContainer.delegate("img","click",(function (){var listview = cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,viewname))+"List"));return ((function (listview,mc_historyContainer,G__5273_5274,CreateElem,view,CloseFn){
return (function (){var that = this;return core.event.OnRoute.onNext(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [listview,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),that.id,new cljs.core.Keyword(null,"view","view",1247994814),listview,new cljs.core.Keyword(null,"dto","dto",-2048364190),elem.DTO], null)], null));
});
;})(listview,mc_historyContainer,G__5273_5274,CreateElem,view,CloseFn))
})());
});})(G__5273_5274,CreateElem,view,CloseFn))
);
return view;
});})(CloseFn))
);
});
core.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
core.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
core.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
