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
ComposeAction.cljs$lang$applyTo = (function (arglist__37777){
var fns = cljs.core.seq(arglist__37777);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__37778){var map__37780 = p__37778;var map__37780__$1 = ((cljs.core.seq_QMARK_.call(null,map__37780))?cljs.core.apply.call(null,cljs.core.hash_map,map__37780):map__37780);var args = map__37780__$1;var model = cljs.core.get.call(null,map__37780__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__37781){var map__37783 = p__37781;var map__37783__$1 = ((cljs.core.seq_QMARK_.call(null,map__37783))?cljs.core.apply.call(null,cljs.core.hash_map,map__37783):map__37783);var args = map__37783__$1;var basicUrl = cljs.core.get.call(null,map__37783__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__37785,p__37786){var map__37799 = p__37785;var map__37799__$1 = ((cljs.core.seq_QMARK_.call(null,map__37799))?cljs.core.apply.call(null,cljs.core.hash_map,map__37799):map__37799);var ctx = map__37799__$1;var root = cljs.core.get.call(null,map__37799__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__37800 = p__37786;var map__37800__$1 = ((cljs.core.seq_QMARK_.call(null,map__37800))?cljs.core.apply.call(null,cljs.core.hash_map,map__37800):map__37800);var args = map__37800__$1;var curr_view = cljs.core.get.call(null,map__37800__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_37811 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__37801_37812 = cljs.core.seq.call(null,logoNames_37811);var chunk__37802_37813 = null;var count__37803_37814 = (0);var i__37804_37815 = (0);while(true){
if((i__37804_37815 < count__37803_37814))
{var vec__37805_37816 = cljs.core._nth.call(null,chunk__37802_37813,i__37804_37815);var names_37817 = cljs.core.nth.call(null,vec__37805_37816,(0),null);var logoName_37818 = cljs.core.nth.call(null,vec__37805_37816,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__37801_37812,chunk__37802_37813,count__37803_37814,i__37804_37815,vec__37805_37816,names_37817,logoName_37818,logoNames_37811,map__37799,map__37799__$1,ctx,root,map__37800,map__37800__$1,args,curr_view){
return (function (p1__37784_SHARP_){return cljs.core._EQ_.call(null,p1__37784_SHARP_,curr_view);
});})(seq__37801_37812,chunk__37802_37813,count__37803_37814,i__37804_37815,vec__37805_37816,names_37817,logoName_37818,logoNames_37811,map__37799,map__37799__$1,ctx,root,map__37800,map__37800__$1,args,curr_view))
,names_37817)))
{var G__37806_37819 = root.find(logoName_37818);G__37806_37819.fadeIn((400));
} else
{var G__37807_37820 = root.find(logoName_37818);G__37807_37820.hide();
}
{
var G__37821 = seq__37801_37812;
var G__37822 = chunk__37802_37813;
var G__37823 = count__37803_37814;
var G__37824 = (i__37804_37815 + (1));
seq__37801_37812 = G__37821;
chunk__37802_37813 = G__37822;
count__37803_37814 = G__37823;
i__37804_37815 = G__37824;
continue;
}
} else
{var temp__4126__auto___37825 = cljs.core.seq.call(null,seq__37801_37812);if(temp__4126__auto___37825)
{var seq__37801_37826__$1 = temp__4126__auto___37825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37801_37826__$1))
{var c__4307__auto___37827 = cljs.core.chunk_first.call(null,seq__37801_37826__$1);{
var G__37828 = cljs.core.chunk_rest.call(null,seq__37801_37826__$1);
var G__37829 = c__4307__auto___37827;
var G__37830 = cljs.core.count.call(null,c__4307__auto___37827);
var G__37831 = (0);
seq__37801_37812 = G__37828;
chunk__37802_37813 = G__37829;
count__37803_37814 = G__37830;
i__37804_37815 = G__37831;
continue;
}
} else
{var vec__37808_37832 = cljs.core.first.call(null,seq__37801_37826__$1);var names_37833 = cljs.core.nth.call(null,vec__37808_37832,(0),null);var logoName_37834 = cljs.core.nth.call(null,vec__37808_37832,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__37801_37812,chunk__37802_37813,count__37803_37814,i__37804_37815,vec__37808_37832,names_37833,logoName_37834,seq__37801_37826__$1,temp__4126__auto___37825,logoNames_37811,map__37799,map__37799__$1,ctx,root,map__37800,map__37800__$1,args,curr_view){
return (function (p1__37784_SHARP_){return cljs.core._EQ_.call(null,p1__37784_SHARP_,curr_view);
});})(seq__37801_37812,chunk__37802_37813,count__37803_37814,i__37804_37815,vec__37808_37832,names_37833,logoName_37834,seq__37801_37826__$1,temp__4126__auto___37825,logoNames_37811,map__37799,map__37799__$1,ctx,root,map__37800,map__37800__$1,args,curr_view))
,names_37833)))
{var G__37809_37835 = root.find(logoName_37834);G__37809_37835.fadeIn((400));
} else
{var G__37810_37836 = root.find(logoName_37834);G__37810_37836.hide();
}
{
var G__37837 = cljs.core.next.call(null,seq__37801_37826__$1);
var G__37838 = null;
var G__37839 = (0);
var G__37840 = (0);
seq__37801_37812 = G__37837;
chunk__37802_37813 = G__37838;
count__37803_37814 = G__37839;
i__37804_37815 = G__37840;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__37842,p__37843){var map__37848 = p__37842;var map__37848__$1 = ((cljs.core.seq_QMARK_.call(null,map__37848))?cljs.core.apply.call(null,cljs.core.hash_map,map__37848):map__37848);var ctx = map__37848__$1;var root = cljs.core.get.call(null,map__37848__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__37849 = p__37843;var map__37849__$1 = ((cljs.core.seq_QMARK_.call(null,map__37849))?cljs.core.apply.call(null,cljs.core.hash_map,map__37849):map__37849);var args = map__37849__$1;var curr_view = cljs.core.get.call(null,map__37849__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_37852 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_37852,map__37848,map__37848__$1,ctx,root,map__37849,map__37849__$1,args,curr_view){
return (function (p1__37841_SHARP_){return cljs.core._EQ_.call(null,p1__37841_SHARP_,curr_view);
});})(shouldHide_37852,map__37848,map__37848__$1,ctx,root,map__37849,map__37849__$1,args,curr_view))
,shouldHide_37852)))
{var G__37850_37853 = root.find("#mc_footer");G__37850_37853.fadeOut();
} else
{var G__37851_37854 = root.find("#mc_footer");G__37851_37854.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__37857,p__37858){var map__37863 = p__37857;var map__37863__$1 = ((cljs.core.seq_QMARK_.call(null,map__37863))?cljs.core.apply.call(null,cljs.core.hash_map,map__37863):map__37863);var ctx = map__37863__$1;var router = cljs.core.get.call(null,map__37863__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__37864 = p__37858;var map__37864__$1 = ((cljs.core.seq_QMARK_.call(null,map__37864))?cljs.core.apply.call(null,cljs.core.hash_map,map__37864):map__37864);var args = map__37864__$1;var searchKey = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__37863,map__37863__$1,ctx,router,map__37864,map__37864__$1,args,searchKey,id,react_action){
return (function (p1__37855_SHARP_){return cljs.core._EQ_.call(null,p1__37855_SHARP_,react_action);
});})(map__37863,map__37863__$1,ctx,router,map__37864,map__37864__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__37863,map__37863__$1,ctx,router,map__37864,map__37864__$1,args,searchKey,id,react_action){
return (function (p1__37856_SHARP_){return cljs.core._EQ_.call(null,p1__37856_SHARP_,react_action);
});})(map__37863,map__37863__$1,ctx,router,map__37864,map__37864__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj37866 = {"trigger":true};return obj37866;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__37868){var map__37872 = p__37868;var map__37872__$1 = ((cljs.core.seq_QMARK_.call(null,map__37872))?cljs.core.apply.call(null,cljs.core.hash_map,map__37872):map__37872);var args = map__37872__$1;var model = cljs.core.get.call(null,map__37872__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj37874 = {"name":"sdyle","link":(window["location"]["href"]),"picture":(model["styleUrl"]),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__37872,map__37872__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("share success!");
} else
{return null;
}
});})(map__37872,map__37872__$1,args,model))
,"err":((function (map__37872,map__37872__$1,args,model){
return (function (p1__37867_SHARP_){return alert(p1__37867_SHARP_);
});})(map__37872,map__37872__$1,args,model))
};return obj37874;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__37875){var map__37877 = p__37875;var map__37877__$1 = ((cljs.core.seq_QMARK_.call(null,map__37877))?cljs.core.apply.call(null,cljs.core.hash_map,map__37877):map__37877);var args = map__37877__$1;var view_obj = cljs.core.get.call(null,map__37877__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
