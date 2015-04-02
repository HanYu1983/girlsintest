// Compiled by ClojureScript 0.0-2268
goog.provide('app.action');
goog.require('cljs.core');
goog.require('app.fn');
goog.require('app.fn');
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
ComposeAction.cljs$lang$applyTo = (function (arglist__59813){
var fns = cljs.core.seq(arglist__59813);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__59814){var map__59816 = p__59814;var map__59816__$1 = ((cljs.core.seq_QMARK_.call(null,map__59816))?cljs.core.apply.call(null,cljs.core.hash_map,map__59816):map__59816);var args = map__59816__$1;var basicUrl = cljs.core.get.call(null,map__59816__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__59818,p__59819){var map__59832 = p__59818;var map__59832__$1 = ((cljs.core.seq_QMARK_.call(null,map__59832))?cljs.core.apply.call(null,cljs.core.hash_map,map__59832):map__59832);var ctx = map__59832__$1;var root = cljs.core.get.call(null,map__59832__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__59833 = p__59819;var map__59833__$1 = ((cljs.core.seq_QMARK_.call(null,map__59833))?cljs.core.apply.call(null,cljs.core.hash_map,map__59833):map__59833);var args = map__59833__$1;var curr_view = cljs.core.get.call(null,map__59833__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_59844 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__59834_59845 = cljs.core.seq.call(null,logoNames_59844);var chunk__59835_59846 = null;var count__59836_59847 = (0);var i__59837_59848 = (0);while(true){
if((i__59837_59848 < count__59836_59847))
{var vec__59838_59849 = cljs.core._nth.call(null,chunk__59835_59846,i__59837_59848);var names_59850 = cljs.core.nth.call(null,vec__59838_59849,(0),null);var logoName_59851 = cljs.core.nth.call(null,vec__59838_59849,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__59834_59845,chunk__59835_59846,count__59836_59847,i__59837_59848,vec__59838_59849,names_59850,logoName_59851,logoNames_59844,map__59832,map__59832__$1,ctx,root,map__59833,map__59833__$1,args,curr_view){
return (function (p1__59817_SHARP_){return cljs.core._EQ_.call(null,p1__59817_SHARP_,curr_view);
});})(seq__59834_59845,chunk__59835_59846,count__59836_59847,i__59837_59848,vec__59838_59849,names_59850,logoName_59851,logoNames_59844,map__59832,map__59832__$1,ctx,root,map__59833,map__59833__$1,args,curr_view))
,names_59850)))
{var G__59839_59852 = root.find(logoName_59851);G__59839_59852.fadeIn((400));
} else
{var G__59840_59853 = root.find(logoName_59851);G__59840_59853.hide();
}
{
var G__59854 = seq__59834_59845;
var G__59855 = chunk__59835_59846;
var G__59856 = count__59836_59847;
var G__59857 = (i__59837_59848 + (1));
seq__59834_59845 = G__59854;
chunk__59835_59846 = G__59855;
count__59836_59847 = G__59856;
i__59837_59848 = G__59857;
continue;
}
} else
{var temp__4126__auto___59858 = cljs.core.seq.call(null,seq__59834_59845);if(temp__4126__auto___59858)
{var seq__59834_59859__$1 = temp__4126__auto___59858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59834_59859__$1))
{var c__4307__auto___59860 = cljs.core.chunk_first.call(null,seq__59834_59859__$1);{
var G__59861 = cljs.core.chunk_rest.call(null,seq__59834_59859__$1);
var G__59862 = c__4307__auto___59860;
var G__59863 = cljs.core.count.call(null,c__4307__auto___59860);
var G__59864 = (0);
seq__59834_59845 = G__59861;
chunk__59835_59846 = G__59862;
count__59836_59847 = G__59863;
i__59837_59848 = G__59864;
continue;
}
} else
{var vec__59841_59865 = cljs.core.first.call(null,seq__59834_59859__$1);var names_59866 = cljs.core.nth.call(null,vec__59841_59865,(0),null);var logoName_59867 = cljs.core.nth.call(null,vec__59841_59865,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__59834_59845,chunk__59835_59846,count__59836_59847,i__59837_59848,vec__59841_59865,names_59866,logoName_59867,seq__59834_59859__$1,temp__4126__auto___59858,logoNames_59844,map__59832,map__59832__$1,ctx,root,map__59833,map__59833__$1,args,curr_view){
return (function (p1__59817_SHARP_){return cljs.core._EQ_.call(null,p1__59817_SHARP_,curr_view);
});})(seq__59834_59845,chunk__59835_59846,count__59836_59847,i__59837_59848,vec__59841_59865,names_59866,logoName_59867,seq__59834_59859__$1,temp__4126__auto___59858,logoNames_59844,map__59832,map__59832__$1,ctx,root,map__59833,map__59833__$1,args,curr_view))
,names_59866)))
{var G__59842_59868 = root.find(logoName_59867);G__59842_59868.fadeIn((400));
} else
{var G__59843_59869 = root.find(logoName_59867);G__59843_59869.hide();
}
{
var G__59870 = cljs.core.next.call(null,seq__59834_59859__$1);
var G__59871 = null;
var G__59872 = (0);
var G__59873 = (0);
seq__59834_59845 = G__59870;
chunk__59835_59846 = G__59871;
count__59836_59847 = G__59872;
i__59837_59848 = G__59873;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__59875,p__59876){var map__59881 = p__59875;var map__59881__$1 = ((cljs.core.seq_QMARK_.call(null,map__59881))?cljs.core.apply.call(null,cljs.core.hash_map,map__59881):map__59881);var ctx = map__59881__$1;var root = cljs.core.get.call(null,map__59881__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__59882 = p__59876;var map__59882__$1 = ((cljs.core.seq_QMARK_.call(null,map__59882))?cljs.core.apply.call(null,cljs.core.hash_map,map__59882):map__59882);var args = map__59882__$1;var curr_view = cljs.core.get.call(null,map__59882__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_59885 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_59885,map__59881,map__59881__$1,ctx,root,map__59882,map__59882__$1,args,curr_view){
return (function (p1__59874_SHARP_){return cljs.core._EQ_.call(null,p1__59874_SHARP_,curr_view);
});})(shouldHide_59885,map__59881,map__59881__$1,ctx,root,map__59882,map__59882__$1,args,curr_view))
,shouldHide_59885)))
{var G__59883_59886 = root.find("#mc_footer");G__59883_59886.fadeOut();
} else
{var G__59884_59887 = root.find("#mc_footer");G__59884_59887.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__59890,p__59891){var map__59896 = p__59890;var map__59896__$1 = ((cljs.core.seq_QMARK_.call(null,map__59896))?cljs.core.apply.call(null,cljs.core.hash_map,map__59896):map__59896);var ctx = map__59896__$1;var router = cljs.core.get.call(null,map__59896__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__59897 = p__59891;var map__59897__$1 = ((cljs.core.seq_QMARK_.call(null,map__59897))?cljs.core.apply.call(null,cljs.core.hash_map,map__59897):map__59897);var args = map__59897__$1;var searchKey = cljs.core.get.call(null,map__59897__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__59897__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__59897__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__59896,map__59896__$1,ctx,router,map__59897,map__59897__$1,args,searchKey,id,react_action){
return (function (p1__59888_SHARP_){return cljs.core._EQ_.call(null,p1__59888_SHARP_,react_action);
});})(map__59896,map__59896__$1,ctx,router,map__59897,map__59897__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__59896,map__59896__$1,ctx,router,map__59897,map__59897__$1,args,searchKey,id,react_action){
return (function (p1__59889_SHARP_){return cljs.core._EQ_.call(null,p1__59889_SHARP_,react_action);
});})(map__59896,map__59896__$1,ctx,router,map__59897,map__59897__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj59899 = {"trigger":true};return obj59899;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__59901){var map__59905 = p__59901;var map__59905__$1 = ((cljs.core.seq_QMARK_.call(null,map__59905))?cljs.core.apply.call(null,cljs.core.hash_map,map__59905):map__59905);var args = map__59905__$1;var model = cljs.core.get.call(null,map__59905__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj59907 = {"name":"sdyle","link":(window["location"]["href"]),"picture":(model["styleUrl"]),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__59905,map__59905__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("share success!");
} else
{return null;
}
});})(map__59905,map__59905__$1,args,model))
,"err":((function (map__59905,map__59905__$1,args,model){
return (function (p1__59900_SHARP_){return alert(p1__59900_SHARP_);
});})(map__59905,map__59905__$1,args,model))
};return obj59907;
})());
return ctx;
});
