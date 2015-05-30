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
ComposeAction.cljs$lang$applyTo = (function (arglist__32354){
var fns = cljs.core.seq(arglist__32354);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__32355){var map__32357 = p__32355;var map__32357__$1 = ((cljs.core.seq_QMARK_.call(null,map__32357))?cljs.core.apply.call(null,cljs.core.hash_map,map__32357):map__32357);var args = map__32357__$1;var model = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__32358){var map__32360 = p__32358;var map__32360__$1 = ((cljs.core.seq_QMARK_.call(null,map__32360))?cljs.core.apply.call(null,cljs.core.hash_map,map__32360):map__32360);var args = map__32360__$1;var basicUrl = cljs.core.get.call(null,map__32360__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__32362,p__32363){var map__32376 = p__32362;var map__32376__$1 = ((cljs.core.seq_QMARK_.call(null,map__32376))?cljs.core.apply.call(null,cljs.core.hash_map,map__32376):map__32376);var ctx = map__32376__$1;var root = cljs.core.get.call(null,map__32376__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__32377 = p__32363;var map__32377__$1 = ((cljs.core.seq_QMARK_.call(null,map__32377))?cljs.core.apply.call(null,cljs.core.hash_map,map__32377):map__32377);var args = map__32377__$1;var curr_view = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_32388 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__32378_32389 = cljs.core.seq.call(null,logoNames_32388);var chunk__32379_32390 = null;var count__32380_32391 = (0);var i__32381_32392 = (0);while(true){
if((i__32381_32392 < count__32380_32391))
{var vec__32382_32393 = cljs.core._nth.call(null,chunk__32379_32390,i__32381_32392);var names_32394 = cljs.core.nth.call(null,vec__32382_32393,(0),null);var logoName_32395 = cljs.core.nth.call(null,vec__32382_32393,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__32378_32389,chunk__32379_32390,count__32380_32391,i__32381_32392,vec__32382_32393,names_32394,logoName_32395,logoNames_32388,map__32376,map__32376__$1,ctx,root,map__32377,map__32377__$1,args,curr_view){
return (function (p1__32361_SHARP_){return cljs.core._EQ_.call(null,p1__32361_SHARP_,curr_view);
});})(seq__32378_32389,chunk__32379_32390,count__32380_32391,i__32381_32392,vec__32382_32393,names_32394,logoName_32395,logoNames_32388,map__32376,map__32376__$1,ctx,root,map__32377,map__32377__$1,args,curr_view))
,names_32394)))
{var G__32383_32396 = root.find(logoName_32395);G__32383_32396.fadeIn((400));
} else
{var G__32384_32397 = root.find(logoName_32395);G__32384_32397.hide();
}
{
var G__32398 = seq__32378_32389;
var G__32399 = chunk__32379_32390;
var G__32400 = count__32380_32391;
var G__32401 = (i__32381_32392 + (1));
seq__32378_32389 = G__32398;
chunk__32379_32390 = G__32399;
count__32380_32391 = G__32400;
i__32381_32392 = G__32401;
continue;
}
} else
{var temp__4126__auto___32402 = cljs.core.seq.call(null,seq__32378_32389);if(temp__4126__auto___32402)
{var seq__32378_32403__$1 = temp__4126__auto___32402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32378_32403__$1))
{var c__4307__auto___32404 = cljs.core.chunk_first.call(null,seq__32378_32403__$1);{
var G__32405 = cljs.core.chunk_rest.call(null,seq__32378_32403__$1);
var G__32406 = c__4307__auto___32404;
var G__32407 = cljs.core.count.call(null,c__4307__auto___32404);
var G__32408 = (0);
seq__32378_32389 = G__32405;
chunk__32379_32390 = G__32406;
count__32380_32391 = G__32407;
i__32381_32392 = G__32408;
continue;
}
} else
{var vec__32385_32409 = cljs.core.first.call(null,seq__32378_32403__$1);var names_32410 = cljs.core.nth.call(null,vec__32385_32409,(0),null);var logoName_32411 = cljs.core.nth.call(null,vec__32385_32409,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__32378_32389,chunk__32379_32390,count__32380_32391,i__32381_32392,vec__32385_32409,names_32410,logoName_32411,seq__32378_32403__$1,temp__4126__auto___32402,logoNames_32388,map__32376,map__32376__$1,ctx,root,map__32377,map__32377__$1,args,curr_view){
return (function (p1__32361_SHARP_){return cljs.core._EQ_.call(null,p1__32361_SHARP_,curr_view);
});})(seq__32378_32389,chunk__32379_32390,count__32380_32391,i__32381_32392,vec__32385_32409,names_32410,logoName_32411,seq__32378_32403__$1,temp__4126__auto___32402,logoNames_32388,map__32376,map__32376__$1,ctx,root,map__32377,map__32377__$1,args,curr_view))
,names_32410)))
{var G__32386_32412 = root.find(logoName_32411);G__32386_32412.fadeIn((400));
} else
{var G__32387_32413 = root.find(logoName_32411);G__32387_32413.hide();
}
{
var G__32414 = cljs.core.next.call(null,seq__32378_32403__$1);
var G__32415 = null;
var G__32416 = (0);
var G__32417 = (0);
seq__32378_32389 = G__32414;
chunk__32379_32390 = G__32415;
count__32380_32391 = G__32416;
i__32381_32392 = G__32417;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__32419,p__32420){var map__32425 = p__32419;var map__32425__$1 = ((cljs.core.seq_QMARK_.call(null,map__32425))?cljs.core.apply.call(null,cljs.core.hash_map,map__32425):map__32425);var ctx = map__32425__$1;var root = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__32426 = p__32420;var map__32426__$1 = ((cljs.core.seq_QMARK_.call(null,map__32426))?cljs.core.apply.call(null,cljs.core.hash_map,map__32426):map__32426);var args = map__32426__$1;var curr_view = cljs.core.get.call(null,map__32426__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_32429 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_32429,map__32425,map__32425__$1,ctx,root,map__32426,map__32426__$1,args,curr_view){
return (function (p1__32418_SHARP_){return cljs.core._EQ_.call(null,p1__32418_SHARP_,curr_view);
});})(shouldHide_32429,map__32425,map__32425__$1,ctx,root,map__32426,map__32426__$1,args,curr_view))
,shouldHide_32429)))
{var G__32427_32430 = root.find("#mc_footer");G__32427_32430.fadeOut();
} else
{var G__32428_32431 = root.find("#mc_footer");G__32428_32431.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__32434,p__32435){var map__32440 = p__32434;var map__32440__$1 = ((cljs.core.seq_QMARK_.call(null,map__32440))?cljs.core.apply.call(null,cljs.core.hash_map,map__32440):map__32440);var ctx = map__32440__$1;var router = cljs.core.get.call(null,map__32440__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__32441 = p__32435;var map__32441__$1 = ((cljs.core.seq_QMARK_.call(null,map__32441))?cljs.core.apply.call(null,cljs.core.hash_map,map__32441):map__32441);var args = map__32441__$1;var searchKey = cljs.core.get.call(null,map__32441__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__32441__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__32441__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__32440,map__32440__$1,ctx,router,map__32441,map__32441__$1,args,searchKey,id,react_action){
return (function (p1__32432_SHARP_){return cljs.core._EQ_.call(null,p1__32432_SHARP_,react_action);
});})(map__32440,map__32440__$1,ctx,router,map__32441,map__32441__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__32440,map__32440__$1,ctx,router,map__32441,map__32441__$1,args,searchKey,id,react_action){
return (function (p1__32433_SHARP_){return cljs.core._EQ_.call(null,p1__32433_SHARP_,react_action);
});})(map__32440,map__32440__$1,ctx,router,map__32441,map__32441__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj32443 = {"trigger":true};return obj32443;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__32445){var map__32449 = p__32445;var map__32449__$1 = ((cljs.core.seq_QMARK_.call(null,map__32449))?cljs.core.apply.call(null,cljs.core.hash_map,map__32449):map__32449);var args = map__32449__$1;var model = cljs.core.get.call(null,map__32449__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj32451 = {"name":"sdyle","link":(window["location"]["href"]),"picture":(model["styleUrl"]),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__32449,map__32449__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("share success!");
} else
{return null;
}
});})(map__32449,map__32449__$1,args,model))
,"err":((function (map__32449,map__32449__$1,args,model){
return (function (p1__32444_SHARP_){return alert(p1__32444_SHARP_);
});})(map__32449,map__32449__$1,args,model))
};return obj32451;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__32452){var map__32457 = p__32452;var map__32457__$1 = ((cljs.core.seq_QMARK_.call(null,map__32457))?cljs.core.apply.call(null,cljs.core.hash_map,map__32457):map__32457);var args = map__32457__$1;var view_obj = cljs.core.get.call(null,map__32457__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));console.log($("#page_container"));
var G__32458 = $("#page_container");G__32458.waitForImages((function (){var obj32460 = {"waitForAll":true,"finished":((function (G__32458,map__32457,map__32457__$1,args,view_obj){
return (function (){return console.log("XXX");
});})(G__32458,map__32457,map__32457__$1,args,view_obj))
};return obj32460;
})());
return G__32458;
});
