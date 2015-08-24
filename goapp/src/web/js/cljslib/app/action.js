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
ComposeAction.cljs$lang$applyTo = (function (arglist__27012){
var fns = cljs.core.seq(arglist__27012);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__27013){var map__27015 = p__27013;var map__27015__$1 = ((cljs.core.seq_QMARK_.call(null,map__27015))?cljs.core.apply.call(null,cljs.core.hash_map,map__27015):map__27015);var args = map__27015__$1;var model = cljs.core.get.call(null,map__27015__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__27016){var map__27018 = p__27016;var map__27018__$1 = ((cljs.core.seq_QMARK_.call(null,map__27018))?cljs.core.apply.call(null,cljs.core.hash_map,map__27018):map__27018);var args = map__27018__$1;var basicUrl = cljs.core.get.call(null,map__27018__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__27020,p__27021){var map__27034 = p__27020;var map__27034__$1 = ((cljs.core.seq_QMARK_.call(null,map__27034))?cljs.core.apply.call(null,cljs.core.hash_map,map__27034):map__27034);var ctx = map__27034__$1;var root = cljs.core.get.call(null,map__27034__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__27035 = p__27021;var map__27035__$1 = ((cljs.core.seq_QMARK_.call(null,map__27035))?cljs.core.apply.call(null,cljs.core.hash_map,map__27035):map__27035);var args = map__27035__$1;var curr_view = cljs.core.get.call(null,map__27035__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_27046 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__27036_27047 = cljs.core.seq.call(null,logoNames_27046);var chunk__27037_27048 = null;var count__27038_27049 = (0);var i__27039_27050 = (0);while(true){
if((i__27039_27050 < count__27038_27049))
{var vec__27040_27051 = cljs.core._nth.call(null,chunk__27037_27048,i__27039_27050);var names_27052 = cljs.core.nth.call(null,vec__27040_27051,(0),null);var logoName_27053 = cljs.core.nth.call(null,vec__27040_27051,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__27036_27047,chunk__27037_27048,count__27038_27049,i__27039_27050,vec__27040_27051,names_27052,logoName_27053,logoNames_27046,map__27034,map__27034__$1,ctx,root,map__27035,map__27035__$1,args,curr_view){
return (function (p1__27019_SHARP_){return cljs.core._EQ_.call(null,p1__27019_SHARP_,curr_view);
});})(seq__27036_27047,chunk__27037_27048,count__27038_27049,i__27039_27050,vec__27040_27051,names_27052,logoName_27053,logoNames_27046,map__27034,map__27034__$1,ctx,root,map__27035,map__27035__$1,args,curr_view))
,names_27052)))
{var G__27041_27054 = root.find(logoName_27053);G__27041_27054.fadeIn((400));
} else
{var G__27042_27055 = root.find(logoName_27053);G__27042_27055.hide();
}
{
var G__27056 = seq__27036_27047;
var G__27057 = chunk__27037_27048;
var G__27058 = count__27038_27049;
var G__27059 = (i__27039_27050 + (1));
seq__27036_27047 = G__27056;
chunk__27037_27048 = G__27057;
count__27038_27049 = G__27058;
i__27039_27050 = G__27059;
continue;
}
} else
{var temp__4126__auto___27060 = cljs.core.seq.call(null,seq__27036_27047);if(temp__4126__auto___27060)
{var seq__27036_27061__$1 = temp__4126__auto___27060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27036_27061__$1))
{var c__4324__auto___27062 = cljs.core.chunk_first.call(null,seq__27036_27061__$1);{
var G__27063 = cljs.core.chunk_rest.call(null,seq__27036_27061__$1);
var G__27064 = c__4324__auto___27062;
var G__27065 = cljs.core.count.call(null,c__4324__auto___27062);
var G__27066 = (0);
seq__27036_27047 = G__27063;
chunk__27037_27048 = G__27064;
count__27038_27049 = G__27065;
i__27039_27050 = G__27066;
continue;
}
} else
{var vec__27043_27067 = cljs.core.first.call(null,seq__27036_27061__$1);var names_27068 = cljs.core.nth.call(null,vec__27043_27067,(0),null);var logoName_27069 = cljs.core.nth.call(null,vec__27043_27067,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__27036_27047,chunk__27037_27048,count__27038_27049,i__27039_27050,vec__27043_27067,names_27068,logoName_27069,seq__27036_27061__$1,temp__4126__auto___27060,logoNames_27046,map__27034,map__27034__$1,ctx,root,map__27035,map__27035__$1,args,curr_view){
return (function (p1__27019_SHARP_){return cljs.core._EQ_.call(null,p1__27019_SHARP_,curr_view);
});})(seq__27036_27047,chunk__27037_27048,count__27038_27049,i__27039_27050,vec__27043_27067,names_27068,logoName_27069,seq__27036_27061__$1,temp__4126__auto___27060,logoNames_27046,map__27034,map__27034__$1,ctx,root,map__27035,map__27035__$1,args,curr_view))
,names_27068)))
{var G__27044_27070 = root.find(logoName_27069);G__27044_27070.fadeIn((400));
} else
{var G__27045_27071 = root.find(logoName_27069);G__27045_27071.hide();
}
{
var G__27072 = cljs.core.next.call(null,seq__27036_27061__$1);
var G__27073 = null;
var G__27074 = (0);
var G__27075 = (0);
seq__27036_27047 = G__27072;
chunk__27037_27048 = G__27073;
count__27038_27049 = G__27074;
i__27039_27050 = G__27075;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__27077,p__27078){var map__27083 = p__27077;var map__27083__$1 = ((cljs.core.seq_QMARK_.call(null,map__27083))?cljs.core.apply.call(null,cljs.core.hash_map,map__27083):map__27083);var ctx = map__27083__$1;var root = cljs.core.get.call(null,map__27083__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__27084 = p__27078;var map__27084__$1 = ((cljs.core.seq_QMARK_.call(null,map__27084))?cljs.core.apply.call(null,cljs.core.hash_map,map__27084):map__27084);var args = map__27084__$1;var curr_view = cljs.core.get.call(null,map__27084__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_27087 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_27087,map__27083,map__27083__$1,ctx,root,map__27084,map__27084__$1,args,curr_view){
return (function (p1__27076_SHARP_){return cljs.core._EQ_.call(null,p1__27076_SHARP_,curr_view);
});})(shouldHide_27087,map__27083,map__27083__$1,ctx,root,map__27084,map__27084__$1,args,curr_view))
,shouldHide_27087)))
{var G__27085_27088 = root.find("#mc_footer");G__27085_27088.fadeOut();
} else
{var G__27086_27089 = root.find("#mc_footer");G__27086_27089.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__27092,p__27093){var map__27098 = p__27092;var map__27098__$1 = ((cljs.core.seq_QMARK_.call(null,map__27098))?cljs.core.apply.call(null,cljs.core.hash_map,map__27098):map__27098);var ctx = map__27098__$1;var router = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__27099 = p__27093;var map__27099__$1 = ((cljs.core.seq_QMARK_.call(null,map__27099))?cljs.core.apply.call(null,cljs.core.hash_map,map__27099):map__27099);var args = map__27099__$1;var searchKey = cljs.core.get.call(null,map__27099__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__27099__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__27099__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__27098,map__27098__$1,ctx,router,map__27099,map__27099__$1,args,searchKey,id,react_action){
return (function (p1__27090_SHARP_){return cljs.core._EQ_.call(null,p1__27090_SHARP_,react_action);
});})(map__27098,map__27098__$1,ctx,router,map__27099,map__27099__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__27098,map__27098__$1,ctx,router,map__27099,map__27099__$1,args,searchKey,id,react_action){
return (function (p1__27091_SHARP_){return cljs.core._EQ_.call(null,p1__27091_SHARP_,react_action);
});})(map__27098,map__27098__$1,ctx,router,map__27099,map__27099__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj27101 = {"trigger":true};return obj27101;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__27103){var map__27107 = p__27103;var map__27107__$1 = ((cljs.core.seq_QMARK_.call(null,map__27107))?cljs.core.apply.call(null,cljs.core.hash_map,map__27107):map__27107);var args = map__27107__$1;var model = cljs.core.get.call(null,map__27107__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj27109 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__27107,map__27107__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__27107,map__27107__$1,args,model))
,"err":((function (map__27107,map__27107__$1,args,model){
return (function (p1__27102_SHARP_){return alert(p1__27102_SHARP_);
});})(map__27107,map__27107__$1,args,model))
};return obj27109;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__27110){var map__27112 = p__27110;var map__27112__$1 = ((cljs.core.seq_QMARK_.call(null,map__27112))?cljs.core.apply.call(null,cljs.core.hash_map,map__27112):map__27112);var args = map__27112__$1;var view_obj = cljs.core.get.call(null,map__27112__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__27113,args){var map__27115 = p__27113;var map__27115__$1 = ((cljs.core.seq_QMARK_.call(null,map__27115))?cljs.core.apply.call(null,cljs.core.hash_map,map__27115):map__27115);var ctx = map__27115__$1;var root = cljs.core.get.call(null,map__27115__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_query_info_27116 = $("#media-query-info");var should_apply_this_27117 = (cljs.core._EQ_.call(null,"1px",media_query_info_27116.css("left"))) || (cljs.core._EQ_.call(null,"2px",media_query_info_27116.css("left")));var menu_elem_27118 = root.find("#mc_menubar");var isHide_27119 = cljs.core._EQ_.call(null,"none",menu_elem_27118.css("display"));if(should_apply_this_27117)
{if(isHide_27119)
{menu_elem_27118.show();
} else
{menu_elem_27118.hide();
}
} else
{}
return ctx;
});
