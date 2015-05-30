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
ComposeAction.cljs$lang$applyTo = (function (arglist__33373){
var fns = cljs.core.seq(arglist__33373);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__33374){var map__33376 = p__33374;var map__33376__$1 = ((cljs.core.seq_QMARK_.call(null,map__33376))?cljs.core.apply.call(null,cljs.core.hash_map,map__33376):map__33376);var args = map__33376__$1;var model = cljs.core.get.call(null,map__33376__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__33377){var map__33379 = p__33377;var map__33379__$1 = ((cljs.core.seq_QMARK_.call(null,map__33379))?cljs.core.apply.call(null,cljs.core.hash_map,map__33379):map__33379);var args = map__33379__$1;var basicUrl = cljs.core.get.call(null,map__33379__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__33381,p__33382){var map__33395 = p__33381;var map__33395__$1 = ((cljs.core.seq_QMARK_.call(null,map__33395))?cljs.core.apply.call(null,cljs.core.hash_map,map__33395):map__33395);var ctx = map__33395__$1;var root = cljs.core.get.call(null,map__33395__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__33396 = p__33382;var map__33396__$1 = ((cljs.core.seq_QMARK_.call(null,map__33396))?cljs.core.apply.call(null,cljs.core.hash_map,map__33396):map__33396);var args = map__33396__$1;var curr_view = cljs.core.get.call(null,map__33396__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_33407 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__33397_33408 = cljs.core.seq.call(null,logoNames_33407);var chunk__33398_33409 = null;var count__33399_33410 = (0);var i__33400_33411 = (0);while(true){
if((i__33400_33411 < count__33399_33410))
{var vec__33401_33412 = cljs.core._nth.call(null,chunk__33398_33409,i__33400_33411);var names_33413 = cljs.core.nth.call(null,vec__33401_33412,(0),null);var logoName_33414 = cljs.core.nth.call(null,vec__33401_33412,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__33397_33408,chunk__33398_33409,count__33399_33410,i__33400_33411,vec__33401_33412,names_33413,logoName_33414,logoNames_33407,map__33395,map__33395__$1,ctx,root,map__33396,map__33396__$1,args,curr_view){
return (function (p1__33380_SHARP_){return cljs.core._EQ_.call(null,p1__33380_SHARP_,curr_view);
});})(seq__33397_33408,chunk__33398_33409,count__33399_33410,i__33400_33411,vec__33401_33412,names_33413,logoName_33414,logoNames_33407,map__33395,map__33395__$1,ctx,root,map__33396,map__33396__$1,args,curr_view))
,names_33413)))
{var G__33402_33415 = root.find(logoName_33414);G__33402_33415.fadeIn((400));
} else
{var G__33403_33416 = root.find(logoName_33414);G__33403_33416.hide();
}
{
var G__33417 = seq__33397_33408;
var G__33418 = chunk__33398_33409;
var G__33419 = count__33399_33410;
var G__33420 = (i__33400_33411 + (1));
seq__33397_33408 = G__33417;
chunk__33398_33409 = G__33418;
count__33399_33410 = G__33419;
i__33400_33411 = G__33420;
continue;
}
} else
{var temp__4126__auto___33421 = cljs.core.seq.call(null,seq__33397_33408);if(temp__4126__auto___33421)
{var seq__33397_33422__$1 = temp__4126__auto___33421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33397_33422__$1))
{var c__4307__auto___33423 = cljs.core.chunk_first.call(null,seq__33397_33422__$1);{
var G__33424 = cljs.core.chunk_rest.call(null,seq__33397_33422__$1);
var G__33425 = c__4307__auto___33423;
var G__33426 = cljs.core.count.call(null,c__4307__auto___33423);
var G__33427 = (0);
seq__33397_33408 = G__33424;
chunk__33398_33409 = G__33425;
count__33399_33410 = G__33426;
i__33400_33411 = G__33427;
continue;
}
} else
{var vec__33404_33428 = cljs.core.first.call(null,seq__33397_33422__$1);var names_33429 = cljs.core.nth.call(null,vec__33404_33428,(0),null);var logoName_33430 = cljs.core.nth.call(null,vec__33404_33428,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__33397_33408,chunk__33398_33409,count__33399_33410,i__33400_33411,vec__33404_33428,names_33429,logoName_33430,seq__33397_33422__$1,temp__4126__auto___33421,logoNames_33407,map__33395,map__33395__$1,ctx,root,map__33396,map__33396__$1,args,curr_view){
return (function (p1__33380_SHARP_){return cljs.core._EQ_.call(null,p1__33380_SHARP_,curr_view);
});})(seq__33397_33408,chunk__33398_33409,count__33399_33410,i__33400_33411,vec__33404_33428,names_33429,logoName_33430,seq__33397_33422__$1,temp__4126__auto___33421,logoNames_33407,map__33395,map__33395__$1,ctx,root,map__33396,map__33396__$1,args,curr_view))
,names_33429)))
{var G__33405_33431 = root.find(logoName_33430);G__33405_33431.fadeIn((400));
} else
{var G__33406_33432 = root.find(logoName_33430);G__33406_33432.hide();
}
{
var G__33433 = cljs.core.next.call(null,seq__33397_33422__$1);
var G__33434 = null;
var G__33435 = (0);
var G__33436 = (0);
seq__33397_33408 = G__33433;
chunk__33398_33409 = G__33434;
count__33399_33410 = G__33435;
i__33400_33411 = G__33436;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__33438,p__33439){var map__33444 = p__33438;var map__33444__$1 = ((cljs.core.seq_QMARK_.call(null,map__33444))?cljs.core.apply.call(null,cljs.core.hash_map,map__33444):map__33444);var ctx = map__33444__$1;var root = cljs.core.get.call(null,map__33444__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__33445 = p__33439;var map__33445__$1 = ((cljs.core.seq_QMARK_.call(null,map__33445))?cljs.core.apply.call(null,cljs.core.hash_map,map__33445):map__33445);var args = map__33445__$1;var curr_view = cljs.core.get.call(null,map__33445__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_33448 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_33448,map__33444,map__33444__$1,ctx,root,map__33445,map__33445__$1,args,curr_view){
return (function (p1__33437_SHARP_){return cljs.core._EQ_.call(null,p1__33437_SHARP_,curr_view);
});})(shouldHide_33448,map__33444,map__33444__$1,ctx,root,map__33445,map__33445__$1,args,curr_view))
,shouldHide_33448)))
{var G__33446_33449 = root.find("#mc_footer");G__33446_33449.fadeOut();
} else
{var G__33447_33450 = root.find("#mc_footer");G__33447_33450.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__33453,p__33454){var map__33459 = p__33453;var map__33459__$1 = ((cljs.core.seq_QMARK_.call(null,map__33459))?cljs.core.apply.call(null,cljs.core.hash_map,map__33459):map__33459);var ctx = map__33459__$1;var router = cljs.core.get.call(null,map__33459__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__33460 = p__33454;var map__33460__$1 = ((cljs.core.seq_QMARK_.call(null,map__33460))?cljs.core.apply.call(null,cljs.core.hash_map,map__33460):map__33460);var args = map__33460__$1;var searchKey = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__33459,map__33459__$1,ctx,router,map__33460,map__33460__$1,args,searchKey,id,react_action){
return (function (p1__33451_SHARP_){return cljs.core._EQ_.call(null,p1__33451_SHARP_,react_action);
});})(map__33459,map__33459__$1,ctx,router,map__33460,map__33460__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__33459,map__33459__$1,ctx,router,map__33460,map__33460__$1,args,searchKey,id,react_action){
return (function (p1__33452_SHARP_){return cljs.core._EQ_.call(null,p1__33452_SHARP_,react_action);
});})(map__33459,map__33459__$1,ctx,router,map__33460,map__33460__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj33462 = {"trigger":true};return obj33462;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__33464){var map__33468 = p__33464;var map__33468__$1 = ((cljs.core.seq_QMARK_.call(null,map__33468))?cljs.core.apply.call(null,cljs.core.hash_map,map__33468):map__33468);var args = map__33468__$1;var model = cljs.core.get.call(null,map__33468__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj33470 = {"name":"sdyle","link":(window["location"]["href"]),"picture":(model["styleUrl"]),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__33468,map__33468__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("share success!");
} else
{return null;
}
});})(map__33468,map__33468__$1,args,model))
,"err":((function (map__33468,map__33468__$1,args,model){
return (function (p1__33463_SHARP_){return alert(p1__33463_SHARP_);
});})(map__33468,map__33468__$1,args,model))
};return obj33470;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__33471){var map__33473 = p__33471;var map__33473__$1 = ((cljs.core.seq_QMARK_.call(null,map__33473))?cljs.core.apply.call(null,cljs.core.hash_map,map__33473):map__33473);var args = map__33473__$1;var view_obj = cljs.core.get.call(null,map__33473__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
