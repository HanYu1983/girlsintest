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
ComposeAction.cljs$lang$applyTo = (function (arglist__25001){
var fns = cljs.core.seq(arglist__25001);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__25002){var map__25004 = p__25002;var map__25004__$1 = ((cljs.core.seq_QMARK_.call(null,map__25004))?cljs.core.apply.call(null,cljs.core.hash_map,map__25004):map__25004);var args = map__25004__$1;var model = cljs.core.get.call(null,map__25004__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__25005){var map__25007 = p__25005;var map__25007__$1 = ((cljs.core.seq_QMARK_.call(null,map__25007))?cljs.core.apply.call(null,cljs.core.hash_map,map__25007):map__25007);var args = map__25007__$1;var basicUrl = cljs.core.get.call(null,map__25007__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__25009,p__25010){var map__25023 = p__25009;var map__25023__$1 = ((cljs.core.seq_QMARK_.call(null,map__25023))?cljs.core.apply.call(null,cljs.core.hash_map,map__25023):map__25023);var ctx = map__25023__$1;var root = cljs.core.get.call(null,map__25023__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__25024 = p__25010;var map__25024__$1 = ((cljs.core.seq_QMARK_.call(null,map__25024))?cljs.core.apply.call(null,cljs.core.hash_map,map__25024):map__25024);var args = map__25024__$1;var curr_view = cljs.core.get.call(null,map__25024__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_25035 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__25025_25036 = cljs.core.seq.call(null,logoNames_25035);var chunk__25026_25037 = null;var count__25027_25038 = (0);var i__25028_25039 = (0);while(true){
if((i__25028_25039 < count__25027_25038))
{var vec__25029_25040 = cljs.core._nth.call(null,chunk__25026_25037,i__25028_25039);var names_25041 = cljs.core.nth.call(null,vec__25029_25040,(0),null);var logoName_25042 = cljs.core.nth.call(null,vec__25029_25040,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__25025_25036,chunk__25026_25037,count__25027_25038,i__25028_25039,vec__25029_25040,names_25041,logoName_25042,logoNames_25035,map__25023,map__25023__$1,ctx,root,map__25024,map__25024__$1,args,curr_view){
return (function (p1__25008_SHARP_){return cljs.core._EQ_.call(null,p1__25008_SHARP_,curr_view);
});})(seq__25025_25036,chunk__25026_25037,count__25027_25038,i__25028_25039,vec__25029_25040,names_25041,logoName_25042,logoNames_25035,map__25023,map__25023__$1,ctx,root,map__25024,map__25024__$1,args,curr_view))
,names_25041)))
{var G__25030_25043 = root.find(logoName_25042);G__25030_25043.fadeIn((400));
} else
{var G__25031_25044 = root.find(logoName_25042);G__25031_25044.hide();
}
{
var G__25045 = seq__25025_25036;
var G__25046 = chunk__25026_25037;
var G__25047 = count__25027_25038;
var G__25048 = (i__25028_25039 + (1));
seq__25025_25036 = G__25045;
chunk__25026_25037 = G__25046;
count__25027_25038 = G__25047;
i__25028_25039 = G__25048;
continue;
}
} else
{var temp__4126__auto___25049 = cljs.core.seq.call(null,seq__25025_25036);if(temp__4126__auto___25049)
{var seq__25025_25050__$1 = temp__4126__auto___25049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25025_25050__$1))
{var c__4324__auto___25051 = cljs.core.chunk_first.call(null,seq__25025_25050__$1);{
var G__25052 = cljs.core.chunk_rest.call(null,seq__25025_25050__$1);
var G__25053 = c__4324__auto___25051;
var G__25054 = cljs.core.count.call(null,c__4324__auto___25051);
var G__25055 = (0);
seq__25025_25036 = G__25052;
chunk__25026_25037 = G__25053;
count__25027_25038 = G__25054;
i__25028_25039 = G__25055;
continue;
}
} else
{var vec__25032_25056 = cljs.core.first.call(null,seq__25025_25050__$1);var names_25057 = cljs.core.nth.call(null,vec__25032_25056,(0),null);var logoName_25058 = cljs.core.nth.call(null,vec__25032_25056,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__25025_25036,chunk__25026_25037,count__25027_25038,i__25028_25039,vec__25032_25056,names_25057,logoName_25058,seq__25025_25050__$1,temp__4126__auto___25049,logoNames_25035,map__25023,map__25023__$1,ctx,root,map__25024,map__25024__$1,args,curr_view){
return (function (p1__25008_SHARP_){return cljs.core._EQ_.call(null,p1__25008_SHARP_,curr_view);
});})(seq__25025_25036,chunk__25026_25037,count__25027_25038,i__25028_25039,vec__25032_25056,names_25057,logoName_25058,seq__25025_25050__$1,temp__4126__auto___25049,logoNames_25035,map__25023,map__25023__$1,ctx,root,map__25024,map__25024__$1,args,curr_view))
,names_25057)))
{var G__25033_25059 = root.find(logoName_25058);G__25033_25059.fadeIn((400));
} else
{var G__25034_25060 = root.find(logoName_25058);G__25034_25060.hide();
}
{
var G__25061 = cljs.core.next.call(null,seq__25025_25050__$1);
var G__25062 = null;
var G__25063 = (0);
var G__25064 = (0);
seq__25025_25036 = G__25061;
chunk__25026_25037 = G__25062;
count__25027_25038 = G__25063;
i__25028_25039 = G__25064;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__25066,p__25067){var map__25072 = p__25066;var map__25072__$1 = ((cljs.core.seq_QMARK_.call(null,map__25072))?cljs.core.apply.call(null,cljs.core.hash_map,map__25072):map__25072);var ctx = map__25072__$1;var root = cljs.core.get.call(null,map__25072__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__25073 = p__25067;var map__25073__$1 = ((cljs.core.seq_QMARK_.call(null,map__25073))?cljs.core.apply.call(null,cljs.core.hash_map,map__25073):map__25073);var args = map__25073__$1;var curr_view = cljs.core.get.call(null,map__25073__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_25076 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_25076,map__25072,map__25072__$1,ctx,root,map__25073,map__25073__$1,args,curr_view){
return (function (p1__25065_SHARP_){return cljs.core._EQ_.call(null,p1__25065_SHARP_,curr_view);
});})(shouldHide_25076,map__25072,map__25072__$1,ctx,root,map__25073,map__25073__$1,args,curr_view))
,shouldHide_25076)))
{var G__25074_25077 = root.find("#mc_footer");G__25074_25077.fadeOut();
} else
{var G__25075_25078 = root.find("#mc_footer");G__25075_25078.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__25081,p__25082){var map__25087 = p__25081;var map__25087__$1 = ((cljs.core.seq_QMARK_.call(null,map__25087))?cljs.core.apply.call(null,cljs.core.hash_map,map__25087):map__25087);var ctx = map__25087__$1;var router = cljs.core.get.call(null,map__25087__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__25088 = p__25082;var map__25088__$1 = ((cljs.core.seq_QMARK_.call(null,map__25088))?cljs.core.apply.call(null,cljs.core.hash_map,map__25088):map__25088);var args = map__25088__$1;var searchKey = cljs.core.get.call(null,map__25088__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__25088__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__25088__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__25087,map__25087__$1,ctx,router,map__25088,map__25088__$1,args,searchKey,id,react_action){
return (function (p1__25079_SHARP_){return cljs.core._EQ_.call(null,p1__25079_SHARP_,react_action);
});})(map__25087,map__25087__$1,ctx,router,map__25088,map__25088__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__25087,map__25087__$1,ctx,router,map__25088,map__25088__$1,args,searchKey,id,react_action){
return (function (p1__25080_SHARP_){return cljs.core._EQ_.call(null,p1__25080_SHARP_,react_action);
});})(map__25087,map__25087__$1,ctx,router,map__25088,map__25088__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj25090 = {"trigger":true};return obj25090;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__25092){var map__25096 = p__25092;var map__25096__$1 = ((cljs.core.seq_QMARK_.call(null,map__25096))?cljs.core.apply.call(null,cljs.core.hash_map,map__25096):map__25096);var args = map__25096__$1;var model = cljs.core.get.call(null,map__25096__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj25098 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__25096,map__25096__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__25096,map__25096__$1,args,model))
,"err":((function (map__25096,map__25096__$1,args,model){
return (function (p1__25091_SHARP_){return alert(p1__25091_SHARP_);
});})(map__25096,map__25096__$1,args,model))
};return obj25098;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__25099){var map__25101 = p__25099;var map__25101__$1 = ((cljs.core.seq_QMARK_.call(null,map__25101))?cljs.core.apply.call(null,cljs.core.hash_map,map__25101):map__25101);var args = map__25101__$1;var view_obj = cljs.core.get.call(null,map__25101__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__25102,args){var map__25104 = p__25102;var map__25104__$1 = ((cljs.core.seq_QMARK_.call(null,map__25104))?cljs.core.apply.call(null,cljs.core.hash_map,map__25104):map__25104);var ctx = map__25104__$1;var root = cljs.core.get.call(null,map__25104__$1,new cljs.core.Keyword(null,"root","root",-448657453));var menu_elem_25105 = root.find("#mc_menubar");var isHide_25106 = cljs.core._EQ_.call(null,"none",menu_elem_25105.css("display"));if(isHide_25106)
{menu_elem_25105.show();
} else
{menu_elem_25105.hide();
}
return ctx;
});
