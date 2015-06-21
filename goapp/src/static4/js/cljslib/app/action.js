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
ComposeAction.cljs$lang$applyTo = (function (arglist__10923){
var fns = cljs.core.seq(arglist__10923);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__10924){var map__10926 = p__10924;var map__10926__$1 = ((cljs.core.seq_QMARK_.call(null,map__10926))?cljs.core.apply.call(null,cljs.core.hash_map,map__10926):map__10926);var args = map__10926__$1;var model = cljs.core.get.call(null,map__10926__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__10927){var map__10929 = p__10927;var map__10929__$1 = ((cljs.core.seq_QMARK_.call(null,map__10929))?cljs.core.apply.call(null,cljs.core.hash_map,map__10929):map__10929);var args = map__10929__$1;var basicUrl = cljs.core.get.call(null,map__10929__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__10931,p__10932){var map__10945 = p__10931;var map__10945__$1 = ((cljs.core.seq_QMARK_.call(null,map__10945))?cljs.core.apply.call(null,cljs.core.hash_map,map__10945):map__10945);var ctx = map__10945__$1;var root = cljs.core.get.call(null,map__10945__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__10946 = p__10932;var map__10946__$1 = ((cljs.core.seq_QMARK_.call(null,map__10946))?cljs.core.apply.call(null,cljs.core.hash_map,map__10946):map__10946);var args = map__10946__$1;var curr_view = cljs.core.get.call(null,map__10946__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_10957 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__10947_10958 = cljs.core.seq.call(null,logoNames_10957);var chunk__10948_10959 = null;var count__10949_10960 = (0);var i__10950_10961 = (0);while(true){
if((i__10950_10961 < count__10949_10960))
{var vec__10951_10962 = cljs.core._nth.call(null,chunk__10948_10959,i__10950_10961);var names_10963 = cljs.core.nth.call(null,vec__10951_10962,(0),null);var logoName_10964 = cljs.core.nth.call(null,vec__10951_10962,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10947_10958,chunk__10948_10959,count__10949_10960,i__10950_10961,vec__10951_10962,names_10963,logoName_10964,logoNames_10957,map__10945,map__10945__$1,ctx,root,map__10946,map__10946__$1,args,curr_view){
return (function (p1__10930_SHARP_){return cljs.core._EQ_.call(null,p1__10930_SHARP_,curr_view);
});})(seq__10947_10958,chunk__10948_10959,count__10949_10960,i__10950_10961,vec__10951_10962,names_10963,logoName_10964,logoNames_10957,map__10945,map__10945__$1,ctx,root,map__10946,map__10946__$1,args,curr_view))
,names_10963)))
{var G__10952_10965 = root.find(logoName_10964);G__10952_10965.fadeIn((400));
} else
{var G__10953_10966 = root.find(logoName_10964);G__10953_10966.hide();
}
{
var G__10967 = seq__10947_10958;
var G__10968 = chunk__10948_10959;
var G__10969 = count__10949_10960;
var G__10970 = (i__10950_10961 + (1));
seq__10947_10958 = G__10967;
chunk__10948_10959 = G__10968;
count__10949_10960 = G__10969;
i__10950_10961 = G__10970;
continue;
}
} else
{var temp__4126__auto___10971 = cljs.core.seq.call(null,seq__10947_10958);if(temp__4126__auto___10971)
{var seq__10947_10972__$1 = temp__4126__auto___10971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10947_10972__$1))
{var c__4307__auto___10973 = cljs.core.chunk_first.call(null,seq__10947_10972__$1);{
var G__10974 = cljs.core.chunk_rest.call(null,seq__10947_10972__$1);
var G__10975 = c__4307__auto___10973;
var G__10976 = cljs.core.count.call(null,c__4307__auto___10973);
var G__10977 = (0);
seq__10947_10958 = G__10974;
chunk__10948_10959 = G__10975;
count__10949_10960 = G__10976;
i__10950_10961 = G__10977;
continue;
}
} else
{var vec__10954_10978 = cljs.core.first.call(null,seq__10947_10972__$1);var names_10979 = cljs.core.nth.call(null,vec__10954_10978,(0),null);var logoName_10980 = cljs.core.nth.call(null,vec__10954_10978,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10947_10958,chunk__10948_10959,count__10949_10960,i__10950_10961,vec__10954_10978,names_10979,logoName_10980,seq__10947_10972__$1,temp__4126__auto___10971,logoNames_10957,map__10945,map__10945__$1,ctx,root,map__10946,map__10946__$1,args,curr_view){
return (function (p1__10930_SHARP_){return cljs.core._EQ_.call(null,p1__10930_SHARP_,curr_view);
});})(seq__10947_10958,chunk__10948_10959,count__10949_10960,i__10950_10961,vec__10954_10978,names_10979,logoName_10980,seq__10947_10972__$1,temp__4126__auto___10971,logoNames_10957,map__10945,map__10945__$1,ctx,root,map__10946,map__10946__$1,args,curr_view))
,names_10979)))
{var G__10955_10981 = root.find(logoName_10980);G__10955_10981.fadeIn((400));
} else
{var G__10956_10982 = root.find(logoName_10980);G__10956_10982.hide();
}
{
var G__10983 = cljs.core.next.call(null,seq__10947_10972__$1);
var G__10984 = null;
var G__10985 = (0);
var G__10986 = (0);
seq__10947_10958 = G__10983;
chunk__10948_10959 = G__10984;
count__10949_10960 = G__10985;
i__10950_10961 = G__10986;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__10988,p__10989){var map__10994 = p__10988;var map__10994__$1 = ((cljs.core.seq_QMARK_.call(null,map__10994))?cljs.core.apply.call(null,cljs.core.hash_map,map__10994):map__10994);var ctx = map__10994__$1;var root = cljs.core.get.call(null,map__10994__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__10995 = p__10989;var map__10995__$1 = ((cljs.core.seq_QMARK_.call(null,map__10995))?cljs.core.apply.call(null,cljs.core.hash_map,map__10995):map__10995);var args = map__10995__$1;var curr_view = cljs.core.get.call(null,map__10995__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_10998 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_10998,map__10994,map__10994__$1,ctx,root,map__10995,map__10995__$1,args,curr_view){
return (function (p1__10987_SHARP_){return cljs.core._EQ_.call(null,p1__10987_SHARP_,curr_view);
});})(shouldHide_10998,map__10994,map__10994__$1,ctx,root,map__10995,map__10995__$1,args,curr_view))
,shouldHide_10998)))
{var G__10996_10999 = root.find("#mc_footer");G__10996_10999.fadeOut();
} else
{var G__10997_11000 = root.find("#mc_footer");G__10997_11000.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__11003,p__11004){var map__11009 = p__11003;var map__11009__$1 = ((cljs.core.seq_QMARK_.call(null,map__11009))?cljs.core.apply.call(null,cljs.core.hash_map,map__11009):map__11009);var ctx = map__11009__$1;var router = cljs.core.get.call(null,map__11009__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__11010 = p__11004;var map__11010__$1 = ((cljs.core.seq_QMARK_.call(null,map__11010))?cljs.core.apply.call(null,cljs.core.hash_map,map__11010):map__11010);var args = map__11010__$1;var searchKey = cljs.core.get.call(null,map__11010__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__11010__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__11010__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__11009,map__11009__$1,ctx,router,map__11010,map__11010__$1,args,searchKey,id,react_action){
return (function (p1__11001_SHARP_){return cljs.core._EQ_.call(null,p1__11001_SHARP_,react_action);
});})(map__11009,map__11009__$1,ctx,router,map__11010,map__11010__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__11009,map__11009__$1,ctx,router,map__11010,map__11010__$1,args,searchKey,id,react_action){
return (function (p1__11002_SHARP_){return cljs.core._EQ_.call(null,p1__11002_SHARP_,react_action);
});})(map__11009,map__11009__$1,ctx,router,map__11010,map__11010__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj11012 = {"trigger":true};return obj11012;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__11014){var map__11018 = p__11014;var map__11018__$1 = ((cljs.core.seq_QMARK_.call(null,map__11018))?cljs.core.apply.call(null,cljs.core.hash_map,map__11018):map__11018);var args = map__11018__$1;var model = cljs.core.get.call(null,map__11018__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj11020 = {"name":"sdyle","link":(window["location"]["href"]),"picture":(model["styleUrl"]),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__11018,map__11018__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__11018,map__11018__$1,args,model))
,"err":((function (map__11018,map__11018__$1,args,model){
return (function (p1__11013_SHARP_){return alert(p1__11013_SHARP_);
});})(map__11018,map__11018__$1,args,model))
};return obj11020;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__11021){var map__11023 = p__11021;var map__11023__$1 = ((cljs.core.seq_QMARK_.call(null,map__11023))?cljs.core.apply.call(null,cljs.core.hash_map,map__11023):map__11023);var args = map__11023__$1;var view_obj = cljs.core.get.call(null,map__11023__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
