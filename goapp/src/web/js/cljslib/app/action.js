// Compiled by ClojureScript 0.0-2268
goog.provide('app.action');
goog.require('cljs.core');
goog.require('app.fn');
goog.require('app.fn');
app.action.Unuse = (function Unuse(fns){return (function (ctx,args){return ctx;
});
});
/**
* @param {...*} var_args
*/
app.action.ComposeAction = (function() { 
var ComposeAction__delegate = function (fns){return (function (ctx,args){return cljs.core.reduce.call(null,(function (ctx__$1,f){return f.call(null,ctx__$1,args);
}),ctx,cljs.core.apply.call(null,cljs.core.vector,fns));
});
};
var ComposeAction = function (var_args){
var fns = null;if (arguments.length > 0) {
  fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ComposeAction__delegate.call(this,fns);};
ComposeAction.cljs$lang$maxFixedArity = 0;
ComposeAction.cljs$lang$applyTo = (function (arglist__27228){
var fns = cljs.core.seq(arglist__27228);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__27229){var map__27231 = p__27229;var map__27231__$1 = ((cljs.core.seq_QMARK_.call(null,map__27231))?cljs.core.apply.call(null,cljs.core.hash_map,map__27231):map__27231);var args = map__27231__$1;var model = cljs.core.get.call(null,map__27231__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__27232){var map__27234 = p__27232;var map__27234__$1 = ((cljs.core.seq_QMARK_.call(null,map__27234))?cljs.core.apply.call(null,cljs.core.hash_map,map__27234):map__27234);var args = map__27234__$1;var basicUrl = cljs.core.get.call(null,map__27234__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__27236,p__27237){var map__27250 = p__27236;var map__27250__$1 = ((cljs.core.seq_QMARK_.call(null,map__27250))?cljs.core.apply.call(null,cljs.core.hash_map,map__27250):map__27250);var ctx = map__27250__$1;var root = cljs.core.get.call(null,map__27250__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__27251 = p__27237;var map__27251__$1 = ((cljs.core.seq_QMARK_.call(null,map__27251))?cljs.core.apply.call(null,cljs.core.hash_map,map__27251):map__27251);var args = map__27251__$1;var curr_view = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_27262 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__27252_27263 = cljs.core.seq.call(null,logoNames_27262);var chunk__27253_27264 = null;var count__27254_27265 = (0);var i__27255_27266 = (0);while(true){
if((i__27255_27266 < count__27254_27265))
{var vec__27256_27267 = cljs.core._nth.call(null,chunk__27253_27264,i__27255_27266);var names_27268 = cljs.core.nth.call(null,vec__27256_27267,(0),null);var logoName_27269 = cljs.core.nth.call(null,vec__27256_27267,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__27252_27263,chunk__27253_27264,count__27254_27265,i__27255_27266,vec__27256_27267,names_27268,logoName_27269,logoNames_27262,map__27250,map__27250__$1,ctx,root,map__27251,map__27251__$1,args,curr_view){
return (function (p1__27235_SHARP_){return cljs.core._EQ_.call(null,p1__27235_SHARP_,curr_view);
});})(seq__27252_27263,chunk__27253_27264,count__27254_27265,i__27255_27266,vec__27256_27267,names_27268,logoName_27269,logoNames_27262,map__27250,map__27250__$1,ctx,root,map__27251,map__27251__$1,args,curr_view))
,names_27268)))
{var G__27257_27270 = root.find(logoName_27269);G__27257_27270.fadeIn((400));
} else
{var G__27258_27271 = root.find(logoName_27269);G__27258_27271.hide();
}
{
var G__27272 = seq__27252_27263;
var G__27273 = chunk__27253_27264;
var G__27274 = count__27254_27265;
var G__27275 = (i__27255_27266 + (1));
seq__27252_27263 = G__27272;
chunk__27253_27264 = G__27273;
count__27254_27265 = G__27274;
i__27255_27266 = G__27275;
continue;
}
} else
{var temp__4126__auto___27276 = cljs.core.seq.call(null,seq__27252_27263);if(temp__4126__auto___27276)
{var seq__27252_27277__$1 = temp__4126__auto___27276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27252_27277__$1))
{var c__4324__auto___27278 = cljs.core.chunk_first.call(null,seq__27252_27277__$1);{
var G__27279 = cljs.core.chunk_rest.call(null,seq__27252_27277__$1);
var G__27280 = c__4324__auto___27278;
var G__27281 = cljs.core.count.call(null,c__4324__auto___27278);
var G__27282 = (0);
seq__27252_27263 = G__27279;
chunk__27253_27264 = G__27280;
count__27254_27265 = G__27281;
i__27255_27266 = G__27282;
continue;
}
} else
{var vec__27259_27283 = cljs.core.first.call(null,seq__27252_27277__$1);var names_27284 = cljs.core.nth.call(null,vec__27259_27283,(0),null);var logoName_27285 = cljs.core.nth.call(null,vec__27259_27283,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__27252_27263,chunk__27253_27264,count__27254_27265,i__27255_27266,vec__27259_27283,names_27284,logoName_27285,seq__27252_27277__$1,temp__4126__auto___27276,logoNames_27262,map__27250,map__27250__$1,ctx,root,map__27251,map__27251__$1,args,curr_view){
return (function (p1__27235_SHARP_){return cljs.core._EQ_.call(null,p1__27235_SHARP_,curr_view);
});})(seq__27252_27263,chunk__27253_27264,count__27254_27265,i__27255_27266,vec__27259_27283,names_27284,logoName_27285,seq__27252_27277__$1,temp__4126__auto___27276,logoNames_27262,map__27250,map__27250__$1,ctx,root,map__27251,map__27251__$1,args,curr_view))
,names_27284)))
{var G__27260_27286 = root.find(logoName_27285);G__27260_27286.fadeIn((400));
} else
{var G__27261_27287 = root.find(logoName_27285);G__27261_27287.hide();
}
{
var G__27288 = cljs.core.next.call(null,seq__27252_27277__$1);
var G__27289 = null;
var G__27290 = (0);
var G__27291 = (0);
seq__27252_27263 = G__27288;
chunk__27253_27264 = G__27289;
count__27254_27265 = G__27290;
i__27255_27266 = G__27291;
continue;
}
}
} else
{}
}
break;
}
return ctx;
});
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__27293,p__27294){var map__27299 = p__27293;var map__27299__$1 = ((cljs.core.seq_QMARK_.call(null,map__27299))?cljs.core.apply.call(null,cljs.core.hash_map,map__27299):map__27299);var ctx = map__27299__$1;var root = cljs.core.get.call(null,map__27299__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__27300 = p__27294;var map__27300__$1 = ((cljs.core.seq_QMARK_.call(null,map__27300))?cljs.core.apply.call(null,cljs.core.hash_map,map__27300):map__27300);var args = map__27300__$1;var curr_view = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_27303 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_27303,map__27299,map__27299__$1,ctx,root,map__27300,map__27300__$1,args,curr_view){
return (function (p1__27292_SHARP_){return cljs.core._EQ_.call(null,p1__27292_SHARP_,curr_view);
});})(shouldHide_27303,map__27299,map__27299__$1,ctx,root,map__27300,map__27300__$1,args,curr_view))
,shouldHide_27303)))
{var G__27301_27304 = root.find("#mc_footer");G__27301_27304.fadeOut();
} else
{var G__27302_27305 = root.find("#mc_footer");G__27302_27305.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__27308,p__27309){var map__27314 = p__27308;var map__27314__$1 = ((cljs.core.seq_QMARK_.call(null,map__27314))?cljs.core.apply.call(null,cljs.core.hash_map,map__27314):map__27314);var ctx = map__27314__$1;var router = cljs.core.get.call(null,map__27314__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__27315 = p__27309;var map__27315__$1 = ((cljs.core.seq_QMARK_.call(null,map__27315))?cljs.core.apply.call(null,cljs.core.hash_map,map__27315):map__27315);var args = map__27315__$1;var searchKey = cljs.core.get.call(null,map__27315__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__27315__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__27315__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__27314,map__27314__$1,ctx,router,map__27315,map__27315__$1,args,searchKey,id,react_action){
return (function (p1__27306_SHARP_){return cljs.core._EQ_.call(null,p1__27306_SHARP_,react_action);
});})(map__27314,map__27314__$1,ctx,router,map__27315,map__27315__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__27314,map__27314__$1,ctx,router,map__27315,map__27315__$1,args,searchKey,id,react_action){
return (function (p1__27307_SHARP_){return cljs.core._EQ_.call(null,p1__27307_SHARP_,react_action);
});})(map__27314,map__27314__$1,ctx,router,map__27315,map__27315__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj27317 = {"trigger":true};return obj27317;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__27319){var map__27323 = p__27319;var map__27323__$1 = ((cljs.core.seq_QMARK_.call(null,map__27323))?cljs.core.apply.call(null,cljs.core.hash_map,map__27323):map__27323);var args = map__27323__$1;var model = cljs.core.get.call(null,map__27323__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj27325 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__27323,map__27323__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__27323,map__27323__$1,args,model))
,"err":((function (map__27323,map__27323__$1,args,model){
return (function (p1__27318_SHARP_){return alert(p1__27318_SHARP_);
});})(map__27323,map__27323__$1,args,model))
};return obj27325;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__27326){var map__27328 = p__27326;var map__27328__$1 = ((cljs.core.seq_QMARK_.call(null,map__27328))?cljs.core.apply.call(null,cljs.core.hash_map,map__27328):map__27328);var args = map__27328__$1;var view_obj = cljs.core.get.call(null,map__27328__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__27329,args){var map__27331 = p__27329;var map__27331__$1 = ((cljs.core.seq_QMARK_.call(null,map__27331))?cljs.core.apply.call(null,cljs.core.hash_map,map__27331):map__27331);var ctx = map__27331__$1;var root = cljs.core.get.call(null,map__27331__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_query_info_27332 = $("#media-query-info");var should_apply_this_27333 = (cljs.core._EQ_.call(null,"1px",media_query_info_27332.css("left"))) || (cljs.core._EQ_.call(null,"2px",media_query_info_27332.css("left")));var menu_elem_27334 = root.find("#mc_menubar");var isHide_27335 = cljs.core._EQ_.call(null,"none",menu_elem_27334.css("display"));if(should_apply_this_27333)
{if(isHide_27335)
{menu_elem_27334.show();
} else
{menu_elem_27334.hide();
}
} else
{}
return ctx;
});
