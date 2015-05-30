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
ComposeAction.cljs$lang$applyTo = (function (arglist__37878){
var fns = cljs.core.seq(arglist__37878);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__37879){var map__37881 = p__37879;var map__37881__$1 = ((cljs.core.seq_QMARK_.call(null,map__37881))?cljs.core.apply.call(null,cljs.core.hash_map,map__37881):map__37881);var args = map__37881__$1;var model = cljs.core.get.call(null,map__37881__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__37882){var map__37884 = p__37882;var map__37884__$1 = ((cljs.core.seq_QMARK_.call(null,map__37884))?cljs.core.apply.call(null,cljs.core.hash_map,map__37884):map__37884);var args = map__37884__$1;var basicUrl = cljs.core.get.call(null,map__37884__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__37886,p__37887){var map__37900 = p__37886;var map__37900__$1 = ((cljs.core.seq_QMARK_.call(null,map__37900))?cljs.core.apply.call(null,cljs.core.hash_map,map__37900):map__37900);var ctx = map__37900__$1;var root = cljs.core.get.call(null,map__37900__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__37901 = p__37887;var map__37901__$1 = ((cljs.core.seq_QMARK_.call(null,map__37901))?cljs.core.apply.call(null,cljs.core.hash_map,map__37901):map__37901);var args = map__37901__$1;var curr_view = cljs.core.get.call(null,map__37901__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_37912 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__37902_37913 = cljs.core.seq.call(null,logoNames_37912);var chunk__37903_37914 = null;var count__37904_37915 = (0);var i__37905_37916 = (0);while(true){
if((i__37905_37916 < count__37904_37915))
{var vec__37906_37917 = cljs.core._nth.call(null,chunk__37903_37914,i__37905_37916);var names_37918 = cljs.core.nth.call(null,vec__37906_37917,(0),null);var logoName_37919 = cljs.core.nth.call(null,vec__37906_37917,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__37902_37913,chunk__37903_37914,count__37904_37915,i__37905_37916,vec__37906_37917,names_37918,logoName_37919,logoNames_37912,map__37900,map__37900__$1,ctx,root,map__37901,map__37901__$1,args,curr_view){
return (function (p1__37885_SHARP_){return cljs.core._EQ_.call(null,p1__37885_SHARP_,curr_view);
});})(seq__37902_37913,chunk__37903_37914,count__37904_37915,i__37905_37916,vec__37906_37917,names_37918,logoName_37919,logoNames_37912,map__37900,map__37900__$1,ctx,root,map__37901,map__37901__$1,args,curr_view))
,names_37918)))
{var G__37907_37920 = root.find(logoName_37919);G__37907_37920.fadeIn((400));
} else
{var G__37908_37921 = root.find(logoName_37919);G__37908_37921.hide();
}
{
var G__37922 = seq__37902_37913;
var G__37923 = chunk__37903_37914;
var G__37924 = count__37904_37915;
var G__37925 = (i__37905_37916 + (1));
seq__37902_37913 = G__37922;
chunk__37903_37914 = G__37923;
count__37904_37915 = G__37924;
i__37905_37916 = G__37925;
continue;
}
} else
{var temp__4126__auto___37926 = cljs.core.seq.call(null,seq__37902_37913);if(temp__4126__auto___37926)
{var seq__37902_37927__$1 = temp__4126__auto___37926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37902_37927__$1))
{var c__4307__auto___37928 = cljs.core.chunk_first.call(null,seq__37902_37927__$1);{
var G__37929 = cljs.core.chunk_rest.call(null,seq__37902_37927__$1);
var G__37930 = c__4307__auto___37928;
var G__37931 = cljs.core.count.call(null,c__4307__auto___37928);
var G__37932 = (0);
seq__37902_37913 = G__37929;
chunk__37903_37914 = G__37930;
count__37904_37915 = G__37931;
i__37905_37916 = G__37932;
continue;
}
} else
{var vec__37909_37933 = cljs.core.first.call(null,seq__37902_37927__$1);var names_37934 = cljs.core.nth.call(null,vec__37909_37933,(0),null);var logoName_37935 = cljs.core.nth.call(null,vec__37909_37933,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__37902_37913,chunk__37903_37914,count__37904_37915,i__37905_37916,vec__37909_37933,names_37934,logoName_37935,seq__37902_37927__$1,temp__4126__auto___37926,logoNames_37912,map__37900,map__37900__$1,ctx,root,map__37901,map__37901__$1,args,curr_view){
return (function (p1__37885_SHARP_){return cljs.core._EQ_.call(null,p1__37885_SHARP_,curr_view);
});})(seq__37902_37913,chunk__37903_37914,count__37904_37915,i__37905_37916,vec__37909_37933,names_37934,logoName_37935,seq__37902_37927__$1,temp__4126__auto___37926,logoNames_37912,map__37900,map__37900__$1,ctx,root,map__37901,map__37901__$1,args,curr_view))
,names_37934)))
{var G__37910_37936 = root.find(logoName_37935);G__37910_37936.fadeIn((400));
} else
{var G__37911_37937 = root.find(logoName_37935);G__37911_37937.hide();
}
{
var G__37938 = cljs.core.next.call(null,seq__37902_37927__$1);
var G__37939 = null;
var G__37940 = (0);
var G__37941 = (0);
seq__37902_37913 = G__37938;
chunk__37903_37914 = G__37939;
count__37904_37915 = G__37940;
i__37905_37916 = G__37941;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__37943,p__37944){var map__37949 = p__37943;var map__37949__$1 = ((cljs.core.seq_QMARK_.call(null,map__37949))?cljs.core.apply.call(null,cljs.core.hash_map,map__37949):map__37949);var ctx = map__37949__$1;var root = cljs.core.get.call(null,map__37949__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__37950 = p__37944;var map__37950__$1 = ((cljs.core.seq_QMARK_.call(null,map__37950))?cljs.core.apply.call(null,cljs.core.hash_map,map__37950):map__37950);var args = map__37950__$1;var curr_view = cljs.core.get.call(null,map__37950__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_37953 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_37953,map__37949,map__37949__$1,ctx,root,map__37950,map__37950__$1,args,curr_view){
return (function (p1__37942_SHARP_){return cljs.core._EQ_.call(null,p1__37942_SHARP_,curr_view);
});})(shouldHide_37953,map__37949,map__37949__$1,ctx,root,map__37950,map__37950__$1,args,curr_view))
,shouldHide_37953)))
{var G__37951_37954 = root.find("#mc_footer");G__37951_37954.fadeOut();
} else
{var G__37952_37955 = root.find("#mc_footer");G__37952_37955.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__37958,p__37959){var map__37964 = p__37958;var map__37964__$1 = ((cljs.core.seq_QMARK_.call(null,map__37964))?cljs.core.apply.call(null,cljs.core.hash_map,map__37964):map__37964);var ctx = map__37964__$1;var router = cljs.core.get.call(null,map__37964__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__37965 = p__37959;var map__37965__$1 = ((cljs.core.seq_QMARK_.call(null,map__37965))?cljs.core.apply.call(null,cljs.core.hash_map,map__37965):map__37965);var args = map__37965__$1;var searchKey = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__37964,map__37964__$1,ctx,router,map__37965,map__37965__$1,args,searchKey,id,react_action){
return (function (p1__37956_SHARP_){return cljs.core._EQ_.call(null,p1__37956_SHARP_,react_action);
});})(map__37964,map__37964__$1,ctx,router,map__37965,map__37965__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__37964,map__37964__$1,ctx,router,map__37965,map__37965__$1,args,searchKey,id,react_action){
return (function (p1__37957_SHARP_){return cljs.core._EQ_.call(null,p1__37957_SHARP_,react_action);
});})(map__37964,map__37964__$1,ctx,router,map__37965,map__37965__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj37967 = {"trigger":true};return obj37967;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__37969){var map__37973 = p__37969;var map__37973__$1 = ((cljs.core.seq_QMARK_.call(null,map__37973))?cljs.core.apply.call(null,cljs.core.hash_map,map__37973):map__37973);var args = map__37973__$1;var model = cljs.core.get.call(null,map__37973__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj37975 = {"name":"sdyle","link":(window["location"]["href"]),"picture":(model["styleUrl"]),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__37973,map__37973__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__37973,map__37973__$1,args,model))
,"err":((function (map__37973,map__37973__$1,args,model){
return (function (p1__37968_SHARP_){return alert(p1__37968_SHARP_);
});})(map__37973,map__37973__$1,args,model))
};return obj37975;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__37976){var map__37978 = p__37976;var map__37978__$1 = ((cljs.core.seq_QMARK_.call(null,map__37978))?cljs.core.apply.call(null,cljs.core.hash_map,map__37978):map__37978);var args = map__37978__$1;var view_obj = cljs.core.get.call(null,map__37978__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
