// Compiled by ClojureScript 0.0-2268
goog.provide('core.view');
goog.require('cljs.core');
goog.require('core.event');
goog.require('core.event');
goog.require('tool.app');
goog.require('tool.app');
cljs.core._add_method.call(null,tool.app.CreateAppView,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,CreateModel){var CreateElem = (function (){return tool.app.CreateElem.call(null,$("#tmpl_home"),CreateModel,null);
});var view = tool.app.CreateView.call(null,CreateElem,tool.app.FadeIn,tool.app.FadeOut);var G__5110_5111 = view.elemPromise;G__5110_5111.done(((function (G__5110_5111,CreateElem,view){
return (function (elem){return null;
});})(G__5110_5111,CreateElem,view))
);
return view;
}));
core.view.defcommonview = (function defcommonview(name){var CloseFn = (function (elem,Complete){return tool.app.FadeOut.call(null,elem,(function (){var mc_modelContainer = elem.find("#mc_modelContainer");mc_modelContainer.undelegate("div[modelFrame]","click");
return Complete.call(null);
}));
});return cljs.core._add_method.call(null,tool.app.CreateAppView,name,((function (CloseFn){
return (function (ctx,key,CreateModel){var CreateElem = ((function (CloseFn){
return (function (){return tool.app.CreateElem.call(null,$("#tmpl_streetsnap_list"),CreateModel,null);
});})(CloseFn))
;var view = tool.app.CreateView.call(null,CreateElem,tool.app.FadeIn,CloseFn);var G__5113_5114 = view.elemPromise;G__5113_5114.done(((function (G__5113_5114,CreateElem,view,CloseFn){
return (function (elem){var mc_modelContainer = elem.find("#mc_modelContainer");return mc_modelContainer.delegate("div[modelFrame]","click",((function (mc_modelContainer,G__5113_5114,CreateElem,view,CloseFn){
return (function (){var that = this;return core.event.OnStreetSnapListBtnClick.onNext(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),that.id,new cljs.core.Keyword(null,"view","view",1247994814),name], null));
});})(mc_modelContainer,G__5113_5114,CreateElem,view,CloseFn))
);
});})(G__5113_5114,CreateElem,view,CloseFn))
);
return view;
});})(CloseFn))
);
});
core.view.defcommonview.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
core.view.defcommonview.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
core.view.defcommonview.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
cljs.core._add_method.call(null,tool.app.CreateAppView,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),(function (ctx,key,CreateModel){var CreateElem = (function (){return tool.app.CreateElem.call(null,$("#tmpl_streetsnap"),CreateModel,null);
});var view = tool.app.CreateView.call(null,CreateElem,tool.app.FadeIn,tool.app.FadeOut);var G__5115_5116 = view.elemPromise;G__5115_5116.done(((function (G__5115_5116,CreateElem,view){
return (function (elem){return console.log(elem);
});})(G__5115_5116,CreateElem,view))
);
return view;
}));
