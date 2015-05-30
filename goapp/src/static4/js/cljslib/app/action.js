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
ComposeAction.cljs$lang$applyTo = (function (arglist__21868){
var fns = cljs.core.seq(arglist__21868);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__21869){var map__21871 = p__21869;var map__21871__$1 = ((cljs.core.seq_QMARK_.call(null,map__21871))?cljs.core.apply.call(null,cljs.core.hash_map,map__21871):map__21871);var args = map__21871__$1;var basicUrl = cljs.core.get.call(null,map__21871__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__21873,p__21874){var map__21887 = p__21873;var map__21887__$1 = ((cljs.core.seq_QMARK_.call(null,map__21887))?cljs.core.apply.call(null,cljs.core.hash_map,map__21887):map__21887);var ctx = map__21887__$1;var root = cljs.core.get.call(null,map__21887__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__21888 = p__21874;var map__21888__$1 = ((cljs.core.seq_QMARK_.call(null,map__21888))?cljs.core.apply.call(null,cljs.core.hash_map,map__21888):map__21888);var args = map__21888__$1;var curr_view = cljs.core.get.call(null,map__21888__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_21899 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__21889_21900 = cljs.core.seq.call(null,logoNames_21899);var chunk__21890_21901 = null;var count__21891_21902 = (0);var i__21892_21903 = (0);while(true){
if((i__21892_21903 < count__21891_21902))
{var vec__21893_21904 = cljs.core._nth.call(null,chunk__21890_21901,i__21892_21903);var names_21905 = cljs.core.nth.call(null,vec__21893_21904,(0),null);var logoName_21906 = cljs.core.nth.call(null,vec__21893_21904,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__21889_21900,chunk__21890_21901,count__21891_21902,i__21892_21903,vec__21893_21904,names_21905,logoName_21906,logoNames_21899,map__21887,map__21887__$1,ctx,root,map__21888,map__21888__$1,args,curr_view){
return (function (p1__21872_SHARP_){return cljs.core._EQ_.call(null,p1__21872_SHARP_,curr_view);
});})(seq__21889_21900,chunk__21890_21901,count__21891_21902,i__21892_21903,vec__21893_21904,names_21905,logoName_21906,logoNames_21899,map__21887,map__21887__$1,ctx,root,map__21888,map__21888__$1,args,curr_view))
,names_21905)))
{var G__21894_21907 = root.find(logoName_21906);G__21894_21907.fadeIn((400));
} else
{var G__21895_21908 = root.find(logoName_21906);G__21895_21908.hide();
}
{
var G__21909 = seq__21889_21900;
var G__21910 = chunk__21890_21901;
var G__21911 = count__21891_21902;
var G__21912 = (i__21892_21903 + (1));
seq__21889_21900 = G__21909;
chunk__21890_21901 = G__21910;
count__21891_21902 = G__21911;
i__21892_21903 = G__21912;
continue;
}
} else
{var temp__4126__auto___21913 = cljs.core.seq.call(null,seq__21889_21900);if(temp__4126__auto___21913)
{var seq__21889_21914__$1 = temp__4126__auto___21913;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21889_21914__$1))
{var c__4307__auto___21915 = cljs.core.chunk_first.call(null,seq__21889_21914__$1);{
var G__21916 = cljs.core.chunk_rest.call(null,seq__21889_21914__$1);
var G__21917 = c__4307__auto___21915;
var G__21918 = cljs.core.count.call(null,c__4307__auto___21915);
var G__21919 = (0);
seq__21889_21900 = G__21916;
chunk__21890_21901 = G__21917;
count__21891_21902 = G__21918;
i__21892_21903 = G__21919;
continue;
}
} else
{var vec__21896_21920 = cljs.core.first.call(null,seq__21889_21914__$1);var names_21921 = cljs.core.nth.call(null,vec__21896_21920,(0),null);var logoName_21922 = cljs.core.nth.call(null,vec__21896_21920,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__21889_21900,chunk__21890_21901,count__21891_21902,i__21892_21903,vec__21896_21920,names_21921,logoName_21922,seq__21889_21914__$1,temp__4126__auto___21913,logoNames_21899,map__21887,map__21887__$1,ctx,root,map__21888,map__21888__$1,args,curr_view){
return (function (p1__21872_SHARP_){return cljs.core._EQ_.call(null,p1__21872_SHARP_,curr_view);
});})(seq__21889_21900,chunk__21890_21901,count__21891_21902,i__21892_21903,vec__21896_21920,names_21921,logoName_21922,seq__21889_21914__$1,temp__4126__auto___21913,logoNames_21899,map__21887,map__21887__$1,ctx,root,map__21888,map__21888__$1,args,curr_view))
,names_21921)))
{var G__21897_21923 = root.find(logoName_21922);G__21897_21923.fadeIn((400));
} else
{var G__21898_21924 = root.find(logoName_21922);G__21898_21924.hide();
}
{
var G__21925 = cljs.core.next.call(null,seq__21889_21914__$1);
var G__21926 = null;
var G__21927 = (0);
var G__21928 = (0);
seq__21889_21900 = G__21925;
chunk__21890_21901 = G__21926;
count__21891_21902 = G__21927;
i__21892_21903 = G__21928;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__21930,p__21931){var map__21936 = p__21930;var map__21936__$1 = ((cljs.core.seq_QMARK_.call(null,map__21936))?cljs.core.apply.call(null,cljs.core.hash_map,map__21936):map__21936);var ctx = map__21936__$1;var root = cljs.core.get.call(null,map__21936__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__21937 = p__21931;var map__21937__$1 = ((cljs.core.seq_QMARK_.call(null,map__21937))?cljs.core.apply.call(null,cljs.core.hash_map,map__21937):map__21937);var args = map__21937__$1;var curr_view = cljs.core.get.call(null,map__21937__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_21940 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_21940,map__21936,map__21936__$1,ctx,root,map__21937,map__21937__$1,args,curr_view){
return (function (p1__21929_SHARP_){return cljs.core._EQ_.call(null,p1__21929_SHARP_,curr_view);
});})(shouldHide_21940,map__21936,map__21936__$1,ctx,root,map__21937,map__21937__$1,args,curr_view))
,shouldHide_21940)))
{var G__21938_21941 = root.find("#mc_footer");G__21938_21941.fadeOut();
} else
{var G__21939_21942 = root.find("#mc_footer");G__21939_21942.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__21945,p__21946){var map__21951 = p__21945;var map__21951__$1 = ((cljs.core.seq_QMARK_.call(null,map__21951))?cljs.core.apply.call(null,cljs.core.hash_map,map__21951):map__21951);var ctx = map__21951__$1;var router = cljs.core.get.call(null,map__21951__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__21952 = p__21946;var map__21952__$1 = ((cljs.core.seq_QMARK_.call(null,map__21952))?cljs.core.apply.call(null,cljs.core.hash_map,map__21952):map__21952);var args = map__21952__$1;var searchKey = cljs.core.get.call(null,map__21952__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__21952__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__21952__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__21951,map__21951__$1,ctx,router,map__21952,map__21952__$1,args,searchKey,id,react_action){
return (function (p1__21943_SHARP_){return cljs.core._EQ_.call(null,p1__21943_SHARP_,react_action);
});})(map__21951,map__21951__$1,ctx,router,map__21952,map__21952__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__21951,map__21951__$1,ctx,router,map__21952,map__21952__$1,args,searchKey,id,react_action){
return (function (p1__21944_SHARP_){return cljs.core._EQ_.call(null,p1__21944_SHARP_,react_action);
});})(map__21951,map__21951__$1,ctx,router,map__21952,map__21952__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj21954 = {"trigger":true};return obj21954;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__21956){var map__21960 = p__21956;var map__21960__$1 = ((cljs.core.seq_QMARK_.call(null,map__21960))?cljs.core.apply.call(null,cljs.core.hash_map,map__21960):map__21960);var args = map__21960__$1;var model = cljs.core.get.call(null,map__21960__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj21962 = {"name":"sdyle","link":(window["location"]["href"]),"picture":(model["styleUrl"]),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__21960,map__21960__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("share success!");
} else
{return null;
}
});})(map__21960,map__21960__$1,args,model))
,"err":((function (map__21960,map__21960__$1,args,model){
return (function (p1__21955_SHARP_){return alert(p1__21955_SHARP_);
});})(map__21960,map__21960__$1,args,model))
};return obj21962;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__21963){var map__21968 = p__21963;var map__21968__$1 = ((cljs.core.seq_QMARK_.call(null,map__21968))?cljs.core.apply.call(null,cljs.core.hash_map,map__21968):map__21968);var args = map__21968__$1;var view_obj = cljs.core.get.call(null,map__21968__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));var G__21969 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view_obj);G__21969.waitForImages((function (){var obj21971 = {"waitForAll":true,"finished":((function (G__21969,map__21968,map__21968__$1,args,view_obj){
return (function (){return console.log("XXX");
});})(G__21969,map__21968,map__21968__$1,args,view_obj))
};return obj21971;
})());
return G__21969;
});
