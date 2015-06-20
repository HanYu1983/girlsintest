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
ComposeAction.cljs$lang$applyTo = (function (arglist__11366){
var fns = cljs.core.seq(arglist__11366);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__11367){var map__11369 = p__11367;var map__11369__$1 = ((cljs.core.seq_QMARK_.call(null,map__11369))?cljs.core.apply.call(null,cljs.core.hash_map,map__11369):map__11369);var args = map__11369__$1;var model = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__11370){var map__11372 = p__11370;var map__11372__$1 = ((cljs.core.seq_QMARK_.call(null,map__11372))?cljs.core.apply.call(null,cljs.core.hash_map,map__11372):map__11372);var args = map__11372__$1;var basicUrl = cljs.core.get.call(null,map__11372__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__11374,p__11375){var map__11388 = p__11374;var map__11388__$1 = ((cljs.core.seq_QMARK_.call(null,map__11388))?cljs.core.apply.call(null,cljs.core.hash_map,map__11388):map__11388);var ctx = map__11388__$1;var root = cljs.core.get.call(null,map__11388__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__11389 = p__11375;var map__11389__$1 = ((cljs.core.seq_QMARK_.call(null,map__11389))?cljs.core.apply.call(null,cljs.core.hash_map,map__11389):map__11389);var args = map__11389__$1;var curr_view = cljs.core.get.call(null,map__11389__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_11400 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__11390_11401 = cljs.core.seq.call(null,logoNames_11400);var chunk__11391_11402 = null;var count__11392_11403 = (0);var i__11393_11404 = (0);while(true){
if((i__11393_11404 < count__11392_11403))
{var vec__11394_11405 = cljs.core._nth.call(null,chunk__11391_11402,i__11393_11404);var names_11406 = cljs.core.nth.call(null,vec__11394_11405,(0),null);var logoName_11407 = cljs.core.nth.call(null,vec__11394_11405,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11390_11401,chunk__11391_11402,count__11392_11403,i__11393_11404,vec__11394_11405,names_11406,logoName_11407,logoNames_11400,map__11388,map__11388__$1,ctx,root,map__11389,map__11389__$1,args,curr_view){
return (function (p1__11373_SHARP_){return cljs.core._EQ_.call(null,p1__11373_SHARP_,curr_view);
});})(seq__11390_11401,chunk__11391_11402,count__11392_11403,i__11393_11404,vec__11394_11405,names_11406,logoName_11407,logoNames_11400,map__11388,map__11388__$1,ctx,root,map__11389,map__11389__$1,args,curr_view))
,names_11406)))
{var G__11395_11408 = root.find(logoName_11407);G__11395_11408.fadeIn((400));
} else
{var G__11396_11409 = root.find(logoName_11407);G__11396_11409.hide();
}
{
var G__11410 = seq__11390_11401;
var G__11411 = chunk__11391_11402;
var G__11412 = count__11392_11403;
var G__11413 = (i__11393_11404 + (1));
seq__11390_11401 = G__11410;
chunk__11391_11402 = G__11411;
count__11392_11403 = G__11412;
i__11393_11404 = G__11413;
continue;
}
} else
{var temp__4126__auto___11414 = cljs.core.seq.call(null,seq__11390_11401);if(temp__4126__auto___11414)
{var seq__11390_11415__$1 = temp__4126__auto___11414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11390_11415__$1))
{var c__4307__auto___11416 = cljs.core.chunk_first.call(null,seq__11390_11415__$1);{
var G__11417 = cljs.core.chunk_rest.call(null,seq__11390_11415__$1);
var G__11418 = c__4307__auto___11416;
var G__11419 = cljs.core.count.call(null,c__4307__auto___11416);
var G__11420 = (0);
seq__11390_11401 = G__11417;
chunk__11391_11402 = G__11418;
count__11392_11403 = G__11419;
i__11393_11404 = G__11420;
continue;
}
} else
{var vec__11397_11421 = cljs.core.first.call(null,seq__11390_11415__$1);var names_11422 = cljs.core.nth.call(null,vec__11397_11421,(0),null);var logoName_11423 = cljs.core.nth.call(null,vec__11397_11421,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11390_11401,chunk__11391_11402,count__11392_11403,i__11393_11404,vec__11397_11421,names_11422,logoName_11423,seq__11390_11415__$1,temp__4126__auto___11414,logoNames_11400,map__11388,map__11388__$1,ctx,root,map__11389,map__11389__$1,args,curr_view){
return (function (p1__11373_SHARP_){return cljs.core._EQ_.call(null,p1__11373_SHARP_,curr_view);
});})(seq__11390_11401,chunk__11391_11402,count__11392_11403,i__11393_11404,vec__11397_11421,names_11422,logoName_11423,seq__11390_11415__$1,temp__4126__auto___11414,logoNames_11400,map__11388,map__11388__$1,ctx,root,map__11389,map__11389__$1,args,curr_view))
,names_11422)))
{var G__11398_11424 = root.find(logoName_11423);G__11398_11424.fadeIn((400));
} else
{var G__11399_11425 = root.find(logoName_11423);G__11399_11425.hide();
}
{
var G__11426 = cljs.core.next.call(null,seq__11390_11415__$1);
var G__11427 = null;
var G__11428 = (0);
var G__11429 = (0);
seq__11390_11401 = G__11426;
chunk__11391_11402 = G__11427;
count__11392_11403 = G__11428;
i__11393_11404 = G__11429;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__11431,p__11432){var map__11437 = p__11431;var map__11437__$1 = ((cljs.core.seq_QMARK_.call(null,map__11437))?cljs.core.apply.call(null,cljs.core.hash_map,map__11437):map__11437);var ctx = map__11437__$1;var root = cljs.core.get.call(null,map__11437__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__11438 = p__11432;var map__11438__$1 = ((cljs.core.seq_QMARK_.call(null,map__11438))?cljs.core.apply.call(null,cljs.core.hash_map,map__11438):map__11438);var args = map__11438__$1;var curr_view = cljs.core.get.call(null,map__11438__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_11441 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_11441,map__11437,map__11437__$1,ctx,root,map__11438,map__11438__$1,args,curr_view){
return (function (p1__11430_SHARP_){return cljs.core._EQ_.call(null,p1__11430_SHARP_,curr_view);
});})(shouldHide_11441,map__11437,map__11437__$1,ctx,root,map__11438,map__11438__$1,args,curr_view))
,shouldHide_11441)))
{var G__11439_11442 = root.find("#mc_footer");G__11439_11442.fadeOut();
} else
{var G__11440_11443 = root.find("#mc_footer");G__11440_11443.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__11446,p__11447){var map__11452 = p__11446;var map__11452__$1 = ((cljs.core.seq_QMARK_.call(null,map__11452))?cljs.core.apply.call(null,cljs.core.hash_map,map__11452):map__11452);var ctx = map__11452__$1;var router = cljs.core.get.call(null,map__11452__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__11453 = p__11447;var map__11453__$1 = ((cljs.core.seq_QMARK_.call(null,map__11453))?cljs.core.apply.call(null,cljs.core.hash_map,map__11453):map__11453);var args = map__11453__$1;var searchKey = cljs.core.get.call(null,map__11453__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__11453__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__11453__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__11452,map__11452__$1,ctx,router,map__11453,map__11453__$1,args,searchKey,id,react_action){
return (function (p1__11444_SHARP_){return cljs.core._EQ_.call(null,p1__11444_SHARP_,react_action);
});})(map__11452,map__11452__$1,ctx,router,map__11453,map__11453__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__11452,map__11452__$1,ctx,router,map__11453,map__11453__$1,args,searchKey,id,react_action){
return (function (p1__11445_SHARP_){return cljs.core._EQ_.call(null,p1__11445_SHARP_,react_action);
});})(map__11452,map__11452__$1,ctx,router,map__11453,map__11453__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj11455 = {"trigger":true};return obj11455;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__11457){var map__11461 = p__11457;var map__11461__$1 = ((cljs.core.seq_QMARK_.call(null,map__11461))?cljs.core.apply.call(null,cljs.core.hash_map,map__11461):map__11461);var args = map__11461__$1;var model = cljs.core.get.call(null,map__11461__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj11463 = {"name":"sdyle","link":(window["location"]["href"]),"picture":(model["styleUrl"]),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__11461,map__11461__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__11461,map__11461__$1,args,model))
,"err":((function (map__11461,map__11461__$1,args,model){
return (function (p1__11456_SHARP_){return alert(p1__11456_SHARP_);
});})(map__11461,map__11461__$1,args,model))
};return obj11463;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__11464){var map__11466 = p__11464;var map__11466__$1 = ((cljs.core.seq_QMARK_.call(null,map__11466))?cljs.core.apply.call(null,cljs.core.hash_map,map__11466):map__11466);var args = map__11466__$1;var view_obj = cljs.core.get.call(null,map__11466__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
