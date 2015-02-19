// Compiled by ClojureScript 0.0-2268
goog.provide('app.impl.HeaderPage');
goog.require('cljs.core');
goog.require('app.design.IPage');
goog.require('app.design.IPage');
goog.require('app.design.IEvent');
goog.require('app.design.IEvent');
cljs.core._add_method.call(null,app.design.IPage.create,new cljs.core.Keyword(null,"HeaderPage","HeaderPage",-877774815),(function (page,p__4998){var map__4999 = p__4998;var map__4999__$1 = ((cljs.core.seq_QMARK_.call(null,map__4999))?cljs.core.apply.call(null,cljs.core.hash_map,map__4999):map__4999);var elem = cljs.core.get.call(null,map__4999__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var this$ = cljs.core.atom.call(null,null);var btn_backhome = (function (){var G__5000 = elem.find("#btn_backhome");G__5000.click(((function (G__5000,this$,map__4999,map__4999__$1,elem){
return (function (){return app.design.IEvent.onHeaderBtnBackhomeClick.onNext(cljs.core.deref.call(null,this$));
});})(G__5000,this$,map__4999,map__4999__$1,elem))
);
return G__5000;
})();var img_homeLogo = elem.find("#img_homeLogo");var img_streetSnapLogo = elem.find("#img_streetSnapLogo");var img_streetNewsLogo = elem.find("#img_streetNewsLogo");var img_streetModelsLogo = elem.find("#img_streetModelsLogo");var img_streetEventLogo = elem.find("#img_streetEventLogo");var img_streetCelebrityLogo = elem.find("#img_streetCelebrityLogo");return cljs.core.reset_BANG_.call(null,this$,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"StreetCelebrity","StreetCelebrity",-422187416),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"StreetNews","StreetNews",1399822125),new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"btn_backhome","btn_backhome",220539220),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetEvent","StreetEvent",-530516872),new cljs.core.Keyword(null,"StreetModels","StreetModels",-643658470)],[img_homeLogo,img_streetCelebrityLogo,page,img_streetNewsLogo,elem,btn_backhome,img_streetSnapLogo,img_streetEventLogo,img_streetModelsLogo]));
}));
app.impl.HeaderPage.show = (function show(this$,logo){var seq__5007_5013 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetNews","StreetNews",1399822125),new cljs.core.Keyword(null,"StreetModels","StreetModels",-643658470),new cljs.core.Keyword(null,"StreetEvent","StreetEvent",-530516872),new cljs.core.Keyword(null,"StreetCelebrity","StreetCelebrity",-422187416)], null));var chunk__5009_5014 = null;var count__5010_5015 = (0);var i__5011_5016 = (0);while(true){
if((i__5011_5016 < count__5010_5015))
{var elem_5017 = cljs.core._nth.call(null,chunk__5009_5014,i__5011_5016);if(cljs.core.truth_(((cljs.core._EQ_.call(null,logo,elem_5017))?null:null)))
{elem_5017.call(null,this$).hide();
{
var G__5018 = seq__5007_5013;
var G__5019 = chunk__5009_5014;
var G__5020 = count__5010_5015;
var G__5021 = (i__5011_5016 + (1));
seq__5007_5013 = G__5018;
chunk__5009_5014 = G__5019;
count__5010_5015 = G__5020;
i__5011_5016 = G__5021;
continue;
}
} else
{{
var G__5022 = seq__5007_5013;
var G__5023 = chunk__5009_5014;
var G__5024 = count__5010_5015;
var G__5025 = (i__5011_5016 + (1));
seq__5007_5013 = G__5022;
chunk__5009_5014 = G__5023;
count__5010_5015 = G__5024;
i__5011_5016 = G__5025;
continue;
}
}
} else
{var temp__4126__auto___5026 = cljs.core.seq.call(null,seq__5007_5013);if(temp__4126__auto___5026)
{var seq__5007_5027__$1 = temp__4126__auto___5026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5007_5027__$1))
{var c__4307__auto___5028 = cljs.core.chunk_first.call(null,seq__5007_5027__$1);{
var G__5029 = cljs.core.chunk_rest.call(null,seq__5007_5027__$1);
var G__5030 = c__4307__auto___5028;
var G__5031 = cljs.core.count.call(null,c__4307__auto___5028);
var G__5032 = (0);
seq__5007_5013 = G__5029;
chunk__5009_5014 = G__5030;
count__5010_5015 = G__5031;
i__5011_5016 = G__5032;
continue;
}
} else
{var elem_5033 = cljs.core.first.call(null,seq__5007_5027__$1);if(cljs.core.truth_(((cljs.core._EQ_.call(null,logo,elem_5033))?null:null)))
{elem_5033.call(null,this$).hide();
{
var G__5034 = cljs.core.next.call(null,seq__5007_5027__$1);
var G__5035 = null;
var G__5036 = (0);
var G__5037 = (0);
seq__5007_5013 = G__5034;
chunk__5009_5014 = G__5035;
count__5010_5015 = G__5036;
i__5011_5016 = G__5037;
continue;
}
} else
{{
var G__5038 = cljs.core.next.call(null,seq__5007_5027__$1);
var G__5039 = null;
var G__5040 = (0);
var G__5041 = (0);
seq__5007_5013 = G__5038;
chunk__5009_5014 = G__5039;
count__5010_5015 = G__5040;
i__5011_5016 = G__5041;
continue;
}
}
}
} else
{}
}
break;
}
return logo.call(null,this$).fadeIn((400));
});
cljs.core._add_method.call(null,app.design.IPage.open,new cljs.core.Keyword(null,"HeaderPage","HeaderPage",-877774815),(function (this$,cb){return cb.call(null,null);
}));
