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
ComposeAction.cljs$lang$applyTo = (function (arglist__12021){
var fns = cljs.core.seq(arglist__12021);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__12022){var map__12024 = p__12022;var map__12024__$1 = ((cljs.core.seq_QMARK_.call(null,map__12024))?cljs.core.apply.call(null,cljs.core.hash_map,map__12024):map__12024);var args = map__12024__$1;var model = cljs.core.get.call(null,map__12024__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__12025){var map__12027 = p__12025;var map__12027__$1 = ((cljs.core.seq_QMARK_.call(null,map__12027))?cljs.core.apply.call(null,cljs.core.hash_map,map__12027):map__12027);var args = map__12027__$1;var basicUrl = cljs.core.get.call(null,map__12027__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__12029,p__12030){var map__12043 = p__12029;var map__12043__$1 = ((cljs.core.seq_QMARK_.call(null,map__12043))?cljs.core.apply.call(null,cljs.core.hash_map,map__12043):map__12043);var ctx = map__12043__$1;var root = cljs.core.get.call(null,map__12043__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__12044 = p__12030;var map__12044__$1 = ((cljs.core.seq_QMARK_.call(null,map__12044))?cljs.core.apply.call(null,cljs.core.hash_map,map__12044):map__12044);var args = map__12044__$1;var curr_view = cljs.core.get.call(null,map__12044__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_12055 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__12045_12056 = cljs.core.seq.call(null,logoNames_12055);var chunk__12046_12057 = null;var count__12047_12058 = (0);var i__12048_12059 = (0);while(true){
if((i__12048_12059 < count__12047_12058))
{var vec__12049_12060 = cljs.core._nth.call(null,chunk__12046_12057,i__12048_12059);var names_12061 = cljs.core.nth.call(null,vec__12049_12060,(0),null);var logoName_12062 = cljs.core.nth.call(null,vec__12049_12060,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__12045_12056,chunk__12046_12057,count__12047_12058,i__12048_12059,vec__12049_12060,names_12061,logoName_12062,logoNames_12055,map__12043,map__12043__$1,ctx,root,map__12044,map__12044__$1,args,curr_view){
return (function (p1__12028_SHARP_){return cljs.core._EQ_.call(null,p1__12028_SHARP_,curr_view);
});})(seq__12045_12056,chunk__12046_12057,count__12047_12058,i__12048_12059,vec__12049_12060,names_12061,logoName_12062,logoNames_12055,map__12043,map__12043__$1,ctx,root,map__12044,map__12044__$1,args,curr_view))
,names_12061)))
{var G__12050_12063 = root.find(logoName_12062);G__12050_12063.fadeIn((400));
} else
{var G__12051_12064 = root.find(logoName_12062);G__12051_12064.hide();
}
{
var G__12065 = seq__12045_12056;
var G__12066 = chunk__12046_12057;
var G__12067 = count__12047_12058;
var G__12068 = (i__12048_12059 + (1));
seq__12045_12056 = G__12065;
chunk__12046_12057 = G__12066;
count__12047_12058 = G__12067;
i__12048_12059 = G__12068;
continue;
}
} else
{var temp__4126__auto___12069 = cljs.core.seq.call(null,seq__12045_12056);if(temp__4126__auto___12069)
{var seq__12045_12070__$1 = temp__4126__auto___12069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12045_12070__$1))
{var c__4307__auto___12071 = cljs.core.chunk_first.call(null,seq__12045_12070__$1);{
var G__12072 = cljs.core.chunk_rest.call(null,seq__12045_12070__$1);
var G__12073 = c__4307__auto___12071;
var G__12074 = cljs.core.count.call(null,c__4307__auto___12071);
var G__12075 = (0);
seq__12045_12056 = G__12072;
chunk__12046_12057 = G__12073;
count__12047_12058 = G__12074;
i__12048_12059 = G__12075;
continue;
}
} else
{var vec__12052_12076 = cljs.core.first.call(null,seq__12045_12070__$1);var names_12077 = cljs.core.nth.call(null,vec__12052_12076,(0),null);var logoName_12078 = cljs.core.nth.call(null,vec__12052_12076,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__12045_12056,chunk__12046_12057,count__12047_12058,i__12048_12059,vec__12052_12076,names_12077,logoName_12078,seq__12045_12070__$1,temp__4126__auto___12069,logoNames_12055,map__12043,map__12043__$1,ctx,root,map__12044,map__12044__$1,args,curr_view){
return (function (p1__12028_SHARP_){return cljs.core._EQ_.call(null,p1__12028_SHARP_,curr_view);
});})(seq__12045_12056,chunk__12046_12057,count__12047_12058,i__12048_12059,vec__12052_12076,names_12077,logoName_12078,seq__12045_12070__$1,temp__4126__auto___12069,logoNames_12055,map__12043,map__12043__$1,ctx,root,map__12044,map__12044__$1,args,curr_view))
,names_12077)))
{var G__12053_12079 = root.find(logoName_12078);G__12053_12079.fadeIn((400));
} else
{var G__12054_12080 = root.find(logoName_12078);G__12054_12080.hide();
}
{
var G__12081 = cljs.core.next.call(null,seq__12045_12070__$1);
var G__12082 = null;
var G__12083 = (0);
var G__12084 = (0);
seq__12045_12056 = G__12081;
chunk__12046_12057 = G__12082;
count__12047_12058 = G__12083;
i__12048_12059 = G__12084;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__12086,p__12087){var map__12092 = p__12086;var map__12092__$1 = ((cljs.core.seq_QMARK_.call(null,map__12092))?cljs.core.apply.call(null,cljs.core.hash_map,map__12092):map__12092);var ctx = map__12092__$1;var root = cljs.core.get.call(null,map__12092__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__12093 = p__12087;var map__12093__$1 = ((cljs.core.seq_QMARK_.call(null,map__12093))?cljs.core.apply.call(null,cljs.core.hash_map,map__12093):map__12093);var args = map__12093__$1;var curr_view = cljs.core.get.call(null,map__12093__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_12096 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_12096,map__12092,map__12092__$1,ctx,root,map__12093,map__12093__$1,args,curr_view){
return (function (p1__12085_SHARP_){return cljs.core._EQ_.call(null,p1__12085_SHARP_,curr_view);
});})(shouldHide_12096,map__12092,map__12092__$1,ctx,root,map__12093,map__12093__$1,args,curr_view))
,shouldHide_12096)))
{var G__12094_12097 = root.find("#mc_footer");G__12094_12097.fadeOut();
} else
{var G__12095_12098 = root.find("#mc_footer");G__12095_12098.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__12101,p__12102){var map__12107 = p__12101;var map__12107__$1 = ((cljs.core.seq_QMARK_.call(null,map__12107))?cljs.core.apply.call(null,cljs.core.hash_map,map__12107):map__12107);var ctx = map__12107__$1;var router = cljs.core.get.call(null,map__12107__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__12108 = p__12102;var map__12108__$1 = ((cljs.core.seq_QMARK_.call(null,map__12108))?cljs.core.apply.call(null,cljs.core.hash_map,map__12108):map__12108);var args = map__12108__$1;var searchKey = cljs.core.get.call(null,map__12108__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__12108__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__12108__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__12107,map__12107__$1,ctx,router,map__12108,map__12108__$1,args,searchKey,id,react_action){
return (function (p1__12099_SHARP_){return cljs.core._EQ_.call(null,p1__12099_SHARP_,react_action);
});})(map__12107,map__12107__$1,ctx,router,map__12108,map__12108__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__12107,map__12107__$1,ctx,router,map__12108,map__12108__$1,args,searchKey,id,react_action){
return (function (p1__12100_SHARP_){return cljs.core._EQ_.call(null,p1__12100_SHARP_,react_action);
});})(map__12107,map__12107__$1,ctx,router,map__12108,map__12108__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj12110 = {"trigger":true};return obj12110;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__12112){var map__12116 = p__12112;var map__12116__$1 = ((cljs.core.seq_QMARK_.call(null,map__12116))?cljs.core.apply.call(null,cljs.core.hash_map,map__12116):map__12116);var args = map__12116__$1;var model = cljs.core.get.call(null,map__12116__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj12118 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__12116,map__12116__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__12116,map__12116__$1,args,model))
,"err":((function (map__12116,map__12116__$1,args,model){
return (function (p1__12111_SHARP_){return alert(p1__12111_SHARP_);
});})(map__12116,map__12116__$1,args,model))
};return obj12118;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__12119){var map__12121 = p__12119;var map__12121__$1 = ((cljs.core.seq_QMARK_.call(null,map__12121))?cljs.core.apply.call(null,cljs.core.hash_map,map__12121):map__12121);var args = map__12121__$1;var view_obj = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
