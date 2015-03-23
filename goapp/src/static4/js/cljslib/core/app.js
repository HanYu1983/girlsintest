// Compiled by ClojureScript 0.0-2268
goog.provide('core.app');
goog.require('cljs.core');
core.app.emptyModel = (function emptyModel(){return cljs.core.atom.call(null,null);
});
core.app.CreateElem = (function CreateElem(tmpl,CreateModel,helper){return tmpl.tmpl(cljs.core.deref.call(null,CreateModel.call(null)),helper);
});
core.app.CreateView = (function CreateView(CreateElem,Open,Close){var elem = CreateElem.call(null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"Open","Open",-1161482466),cljs.core.partial.call(null,Open,elem),new cljs.core.Keyword(null,"Close","Close",1272690491),cljs.core.partial.call(null,Close,elem)], null);
});
core.app.FadeOut = (function FadeOut(elem){console.log("FadeOut");
console.log(elem);
return elem.fadeOut((400));
});
core.app.FadeIn = (function FadeIn(elem){console.log("FadeIn");
console.log(elem);
return elem.fadeIn((400));
});
core.app.CreateAppView = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("CreateAppView",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (key,args){return key;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
cljs.core._add_method.call(null,core.app.CreateAppView,new cljs.core.Keyword(null,"Header","Header",1255420133),(function (key,args){return core.app.CreateView.call(null,(function (){return core.app.CreateElem.call(null,$("#mc_header"),core.app.emptyModel,null);
}),core.app.FadeIn,core.app.FadeOut);
}));
core.app.OpenView = (function OpenView(p__4953,key,args){var map__4962 = p__4953;var map__4962__$1 = ((cljs.core.seq_QMARK_.call(null,map__4962))?cljs.core.apply.call(null,cljs.core.hash_map,map__4962):map__4962);var ctx = map__4962__$1;var views = cljs.core.get.call(null,map__4962__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__4962__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var v = core.app.CreateAppView.call(null,key,args);var seq__4963_4970 = cljs.core.seq.call(null,views);var chunk__4964_4971 = null;var count__4965_4972 = (0);var i__4966_4973 = (0);while(true){
if((i__4966_4973 < count__4965_4972))
{var vec__4967_4974 = cljs.core._nth.call(null,chunk__4964_4971,i__4966_4973);var k_4975 = cljs.core.nth.call(null,vec__4967_4974,(0),null);var v_4976__$1 = cljs.core.nth.call(null,vec__4967_4974,(1),null);new cljs.core.Keyword(null,"Close","Close",1272690491).cljs$core$IFn$_invoke$arity$1(v_4976__$1);
{
var G__4977 = seq__4963_4970;
var G__4978 = chunk__4964_4971;
var G__4979 = count__4965_4972;
var G__4980 = (i__4966_4973 + (1));
seq__4963_4970 = G__4977;
chunk__4964_4971 = G__4978;
count__4965_4972 = G__4979;
i__4966_4973 = G__4980;
continue;
}
} else
{var temp__4126__auto___4981 = cljs.core.seq.call(null,seq__4963_4970);if(temp__4126__auto___4981)
{var seq__4963_4982__$1 = temp__4126__auto___4981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4963_4982__$1))
{var c__4307__auto___4983 = cljs.core.chunk_first.call(null,seq__4963_4982__$1);{
var G__4984 = cljs.core.chunk_rest.call(null,seq__4963_4982__$1);
var G__4985 = c__4307__auto___4983;
var G__4986 = cljs.core.count.call(null,c__4307__auto___4983);
var G__4987 = (0);
seq__4963_4970 = G__4984;
chunk__4964_4971 = G__4985;
count__4965_4972 = G__4986;
i__4966_4973 = G__4987;
continue;
}
} else
{var vec__4968_4988 = cljs.core.first.call(null,seq__4963_4982__$1);var k_4989 = cljs.core.nth.call(null,vec__4968_4988,(0),null);var v_4990__$1 = cljs.core.nth.call(null,vec__4968_4988,(1),null);new cljs.core.Keyword(null,"Close","Close",1272690491).cljs$core$IFn$_invoke$arity$1(v_4990__$1);
{
var G__4991 = cljs.core.next.call(null,seq__4963_4982__$1);
var G__4992 = null;
var G__4993 = (0);
var G__4994 = (0);
seq__4963_4970 = G__4991;
chunk__4964_4971 = G__4992;
count__4965_4972 = G__4993;
i__4966_4973 = G__4994;
continue;
}
}
} else
{}
}
break;
}
var G__4969_4995 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(v);G__4969_4995.appendTo(container);
new cljs.core.Keyword(null,"Open","Open",-1161482466).cljs$core$IFn$_invoke$arity$1(v);
return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"container","container",-1736937707),cljs.core.assoc.call(null,views,key,v));
});
core.app.CreateModel = (function CreateModel(args){var model = cljs.core.atom.call(null,null);cljs.core.reset_BANG_.call(null,model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(20)], null));
return model;
});
core.app.testCreateElem = (function testCreateElem(){var elem = core.app.CreateElem.call(null,$("#tmpl_celebrity"),cljs.core.partial.call(null,core.app.CreateModel,cljs.core.PersistentArrayMap.EMPTY),cljs.core.PersistentArrayMap.EMPTY);return console.log(elem);
});
core.app.testCreateElem2 = (function testCreateElem2(){var ctx = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),$("#mc_pageContainer")], null));return cljs.core.swap_BANG_.call(null,ctx,((function (ctx){
return (function (p1__4996_SHARP_){return core.app.OpenView.call(null,p1__4996_SHARP_,new cljs.core.Keyword(null,"Header","Header",1255420133),null);
});})(ctx))
);
});
core.app.testCreateElem2.call(null);
