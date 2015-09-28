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
ComposeAction.cljs$lang$applyTo = (function (arglist__26936){
var fns = cljs.core.seq(arglist__26936);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__26937){var map__26939 = p__26937;var map__26939__$1 = ((cljs.core.seq_QMARK_.call(null,map__26939))?cljs.core.apply.call(null,cljs.core.hash_map,map__26939):map__26939);var args = map__26939__$1;var model = cljs.core.get.call(null,map__26939__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__26940){var map__26942 = p__26940;var map__26942__$1 = ((cljs.core.seq_QMARK_.call(null,map__26942))?cljs.core.apply.call(null,cljs.core.hash_map,map__26942):map__26942);var args = map__26942__$1;var basicUrl = cljs.core.get.call(null,map__26942__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__26944,p__26945){var map__26958 = p__26944;var map__26958__$1 = ((cljs.core.seq_QMARK_.call(null,map__26958))?cljs.core.apply.call(null,cljs.core.hash_map,map__26958):map__26958);var ctx = map__26958__$1;var root = cljs.core.get.call(null,map__26958__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__26959 = p__26945;var map__26959__$1 = ((cljs.core.seq_QMARK_.call(null,map__26959))?cljs.core.apply.call(null,cljs.core.hash_map,map__26959):map__26959);var args = map__26959__$1;var curr_view = cljs.core.get.call(null,map__26959__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_26970 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__26960_26971 = cljs.core.seq.call(null,logoNames_26970);var chunk__26961_26972 = null;var count__26962_26973 = (0);var i__26963_26974 = (0);while(true){
if((i__26963_26974 < count__26962_26973))
{var vec__26964_26975 = cljs.core._nth.call(null,chunk__26961_26972,i__26963_26974);var names_26976 = cljs.core.nth.call(null,vec__26964_26975,(0),null);var logoName_26977 = cljs.core.nth.call(null,vec__26964_26975,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__26960_26971,chunk__26961_26972,count__26962_26973,i__26963_26974,vec__26964_26975,names_26976,logoName_26977,logoNames_26970,map__26958,map__26958__$1,ctx,root,map__26959,map__26959__$1,args,curr_view){
return (function (p1__26943_SHARP_){return cljs.core._EQ_.call(null,p1__26943_SHARP_,curr_view);
});})(seq__26960_26971,chunk__26961_26972,count__26962_26973,i__26963_26974,vec__26964_26975,names_26976,logoName_26977,logoNames_26970,map__26958,map__26958__$1,ctx,root,map__26959,map__26959__$1,args,curr_view))
,names_26976)))
{var G__26965_26978 = root.find(logoName_26977);G__26965_26978.fadeIn((400));
} else
{var G__26966_26979 = root.find(logoName_26977);G__26966_26979.hide();
}
{
var G__26980 = seq__26960_26971;
var G__26981 = chunk__26961_26972;
var G__26982 = count__26962_26973;
var G__26983 = (i__26963_26974 + (1));
seq__26960_26971 = G__26980;
chunk__26961_26972 = G__26981;
count__26962_26973 = G__26982;
i__26963_26974 = G__26983;
continue;
}
} else
{var temp__4126__auto___26984 = cljs.core.seq.call(null,seq__26960_26971);if(temp__4126__auto___26984)
{var seq__26960_26985__$1 = temp__4126__auto___26984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26960_26985__$1))
{var c__4307__auto___26986 = cljs.core.chunk_first.call(null,seq__26960_26985__$1);{
var G__26987 = cljs.core.chunk_rest.call(null,seq__26960_26985__$1);
var G__26988 = c__4307__auto___26986;
var G__26989 = cljs.core.count.call(null,c__4307__auto___26986);
var G__26990 = (0);
seq__26960_26971 = G__26987;
chunk__26961_26972 = G__26988;
count__26962_26973 = G__26989;
i__26963_26974 = G__26990;
continue;
}
} else
{var vec__26967_26991 = cljs.core.first.call(null,seq__26960_26985__$1);var names_26992 = cljs.core.nth.call(null,vec__26967_26991,(0),null);var logoName_26993 = cljs.core.nth.call(null,vec__26967_26991,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__26960_26971,chunk__26961_26972,count__26962_26973,i__26963_26974,vec__26967_26991,names_26992,logoName_26993,seq__26960_26985__$1,temp__4126__auto___26984,logoNames_26970,map__26958,map__26958__$1,ctx,root,map__26959,map__26959__$1,args,curr_view){
return (function (p1__26943_SHARP_){return cljs.core._EQ_.call(null,p1__26943_SHARP_,curr_view);
});})(seq__26960_26971,chunk__26961_26972,count__26962_26973,i__26963_26974,vec__26967_26991,names_26992,logoName_26993,seq__26960_26985__$1,temp__4126__auto___26984,logoNames_26970,map__26958,map__26958__$1,ctx,root,map__26959,map__26959__$1,args,curr_view))
,names_26992)))
{var G__26968_26994 = root.find(logoName_26993);G__26968_26994.fadeIn((400));
} else
{var G__26969_26995 = root.find(logoName_26993);G__26969_26995.hide();
}
{
var G__26996 = cljs.core.next.call(null,seq__26960_26985__$1);
var G__26997 = null;
var G__26998 = (0);
var G__26999 = (0);
seq__26960_26971 = G__26996;
chunk__26961_26972 = G__26997;
count__26962_26973 = G__26998;
i__26963_26974 = G__26999;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__27001,p__27002){var map__27007 = p__27001;var map__27007__$1 = ((cljs.core.seq_QMARK_.call(null,map__27007))?cljs.core.apply.call(null,cljs.core.hash_map,map__27007):map__27007);var ctx = map__27007__$1;var root = cljs.core.get.call(null,map__27007__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__27008 = p__27002;var map__27008__$1 = ((cljs.core.seq_QMARK_.call(null,map__27008))?cljs.core.apply.call(null,cljs.core.hash_map,map__27008):map__27008);var args = map__27008__$1;var curr_view = cljs.core.get.call(null,map__27008__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_27011 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_27011,map__27007,map__27007__$1,ctx,root,map__27008,map__27008__$1,args,curr_view){
return (function (p1__27000_SHARP_){return cljs.core._EQ_.call(null,p1__27000_SHARP_,curr_view);
});})(shouldHide_27011,map__27007,map__27007__$1,ctx,root,map__27008,map__27008__$1,args,curr_view))
,shouldHide_27011)))
{var G__27009_27012 = root.find("#mc_footer");G__27009_27012.fadeOut();
} else
{var G__27010_27013 = root.find("#mc_footer");G__27010_27013.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__27016,p__27017){var map__27022 = p__27016;var map__27022__$1 = ((cljs.core.seq_QMARK_.call(null,map__27022))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);var ctx = map__27022__$1;var router = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__27023 = p__27017;var map__27023__$1 = ((cljs.core.seq_QMARK_.call(null,map__27023))?cljs.core.apply.call(null,cljs.core.hash_map,map__27023):map__27023);var args = map__27023__$1;var searchKey = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__27022,map__27022__$1,ctx,router,map__27023,map__27023__$1,args,searchKey,id,react_action){
return (function (p1__27014_SHARP_){return cljs.core._EQ_.call(null,p1__27014_SHARP_,react_action);
});})(map__27022,map__27022__$1,ctx,router,map__27023,map__27023__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__27022,map__27022__$1,ctx,router,map__27023,map__27023__$1,args,searchKey,id,react_action){
return (function (p1__27015_SHARP_){return cljs.core._EQ_.call(null,p1__27015_SHARP_,react_action);
});})(map__27022,map__27022__$1,ctx,router,map__27023,map__27023__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj27025 = {"trigger":true};return obj27025;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__27027){var map__27031 = p__27027;var map__27031__$1 = ((cljs.core.seq_QMARK_.call(null,map__27031))?cljs.core.apply.call(null,cljs.core.hash_map,map__27031):map__27031);var args = map__27031__$1;var model = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj27033 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__27031,map__27031__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__27031,map__27031__$1,args,model))
,"err":((function (map__27031,map__27031__$1,args,model){
return (function (p1__27026_SHARP_){return alert(p1__27026_SHARP_);
});})(map__27031,map__27031__$1,args,model))
};return obj27033;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__27034){var map__27036 = p__27034;var map__27036__$1 = ((cljs.core.seq_QMARK_.call(null,map__27036))?cljs.core.apply.call(null,cljs.core.hash_map,map__27036):map__27036);var args = map__27036__$1;var view_obj = cljs.core.get.call(null,map__27036__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__27037,args){var map__27039 = p__27037;var map__27039__$1 = ((cljs.core.seq_QMARK_.call(null,map__27039))?cljs.core.apply.call(null,cljs.core.hash_map,map__27039):map__27039);var ctx = map__27039__$1;var root = cljs.core.get.call(null,map__27039__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__27039__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_27040 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_27041 = root.find("#mc_menubar");var isHide_27042 = cljs.core._EQ_.call(null,"none",menu_elem_27041.css("display"));if(should_apply_this_27040)
{if(isHide_27042)
{menu_elem_27041.show();
} else
{menu_elem_27041.hide();
}
} else
{}
return ctx;
});
app.action.ToggleMenuForce = (function ToggleMenuForce(p__27043,args){var map__27045 = p__27043;var map__27045__$1 = ((cljs.core.seq_QMARK_.call(null,map__27045))?cljs.core.apply.call(null,cljs.core.hash_map,map__27045):map__27045);var ctx = map__27045__$1;var root = cljs.core.get.call(null,map__27045__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__27045__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_27046 = true;var menu_elem_27047 = root.find("#mc_menubar");var isHide_27048 = cljs.core._EQ_.call(null,"none",menu_elem_27047.css("display"));if(should_apply_this_27046)
{if(isHide_27048)
{menu_elem_27047.show();
} else
{menu_elem_27047.hide();
}
} else
{}
return ctx;
});
app.action.OpenMenuIfPcMode = (function OpenMenuIfPcMode(p__27049,args){var map__27051 = p__27049;var map__27051__$1 = ((cljs.core.seq_QMARK_.call(null,map__27051))?cljs.core.apply.call(null,cljs.core.hash_map,map__27051):map__27051);var ctx = map__27051__$1;var root = cljs.core.get.call(null,map__27051__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__27051__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_27052 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),media_type);var menu_elem_27053 = root.find("#mc_menubar");if(should_apply_this_27052)
{menu_elem_27053.show();
} else
{}
return ctx;
});
app.action.CloseMenu = (function CloseMenu(p__27054,args){var map__27056 = p__27054;var map__27056__$1 = ((cljs.core.seq_QMARK_.call(null,map__27056))?cljs.core.apply.call(null,cljs.core.hash_map,map__27056):map__27056);var ctx = map__27056__$1;var root = cljs.core.get.call(null,map__27056__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__27056__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_27057 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_27058 = root.find("#mc_menubar");if(should_apply_this_27057)
{menu_elem_27058.hide();
} else
{}
return ctx;
});
app.action.DetectMediaQuery = (function DetectMediaQuery(ctx,_){var media_query_info = $("#media-query-info");var media_type = (function (){var pred__27062 = cljs.core._EQ_;var expr__27063 = media_query_info.css("left");if(cljs.core.truth_(pred__27062.call(null,"0px",expr__27063)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__27062.call(null,"1px",expr__27063)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__27062.call(null,"2px",expr__27063)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"media-type","media-type",-764436129),media_type);
});
app.action.AlertInfomationIfModelPageAtMobileDevice = (function AlertInfomationIfModelPageAtMobileDevice(ctx,p__27066){var map__27068 = p__27066;var map__27068__$1 = ((cljs.core.seq_QMARK_.call(null,map__27068))?cljs.core.apply.call(null,cljs.core.hash_map,map__27068):map__27068);var args = map__27068__$1;var curr_view = cljs.core.get.call(null,map__27068__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));if(cljs.core.truth_((function (){var and__3539__auto__ = cljs.core.some.call(null,((function (map__27068,map__27068__$1,args,curr_view){
return (function (p1__27065_SHARP_){return cljs.core._EQ_.call(null,p1__27065_SHARP_,curr_view);
});})(map__27068,map__27068__$1,args,curr_view))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null));if(cljs.core.truth_(and__3539__auto__))
{var and__3539__auto____$1 = mobileAndTabletcheck();if(cljs.core.truth_(and__3539__auto____$1))
{return cljs.core.not.call(null,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.Keyword(null,"mobileInformation","mobileInformation",-789142128)], null)));
} else
{return and__3539__auto____$1;
}
} else
{return and__3539__auto__;
}
})()))
{alert(constant.modelInformation);
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.Keyword(null,"mobileInformation","mobileInformation",-789142128)], null),true);
} else
{return ctx;
}
});
