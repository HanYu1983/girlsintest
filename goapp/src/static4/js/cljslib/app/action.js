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
ComposeAction.cljs$lang$applyTo = (function (arglist__18564){
var fns = cljs.core.seq(arglist__18564);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__18565){var map__18567 = p__18565;var map__18567__$1 = ((cljs.core.seq_QMARK_.call(null,map__18567))?cljs.core.apply.call(null,cljs.core.hash_map,map__18567):map__18567);var args = map__18567__$1;var basicUrl = cljs.core.get.call(null,map__18567__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__18569,p__18570){var map__18583 = p__18569;var map__18583__$1 = ((cljs.core.seq_QMARK_.call(null,map__18583))?cljs.core.apply.call(null,cljs.core.hash_map,map__18583):map__18583);var ctx = map__18583__$1;var root = cljs.core.get.call(null,map__18583__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__18584 = p__18570;var map__18584__$1 = ((cljs.core.seq_QMARK_.call(null,map__18584))?cljs.core.apply.call(null,cljs.core.hash_map,map__18584):map__18584);var args = map__18584__$1;var curr_view = cljs.core.get.call(null,map__18584__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_18595 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__18585_18596 = cljs.core.seq.call(null,logoNames_18595);var chunk__18586_18597 = null;var count__18587_18598 = (0);var i__18588_18599 = (0);while(true){
if((i__18588_18599 < count__18587_18598))
{var vec__18589_18600 = cljs.core._nth.call(null,chunk__18586_18597,i__18588_18599);var names_18601 = cljs.core.nth.call(null,vec__18589_18600,(0),null);var logoName_18602 = cljs.core.nth.call(null,vec__18589_18600,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__18585_18596,chunk__18586_18597,count__18587_18598,i__18588_18599,vec__18589_18600,names_18601,logoName_18602,logoNames_18595,map__18583,map__18583__$1,ctx,root,map__18584,map__18584__$1,args,curr_view){
return (function (p1__18568_SHARP_){return cljs.core._EQ_.call(null,p1__18568_SHARP_,curr_view);
});})(seq__18585_18596,chunk__18586_18597,count__18587_18598,i__18588_18599,vec__18589_18600,names_18601,logoName_18602,logoNames_18595,map__18583,map__18583__$1,ctx,root,map__18584,map__18584__$1,args,curr_view))
,names_18601)))
{var G__18590_18603 = root.find(logoName_18602);G__18590_18603.fadeIn((400));
} else
{var G__18591_18604 = root.find(logoName_18602);G__18591_18604.hide();
}
{
var G__18605 = seq__18585_18596;
var G__18606 = chunk__18586_18597;
var G__18607 = count__18587_18598;
var G__18608 = (i__18588_18599 + (1));
seq__18585_18596 = G__18605;
chunk__18586_18597 = G__18606;
count__18587_18598 = G__18607;
i__18588_18599 = G__18608;
continue;
}
} else
{var temp__4126__auto___18609 = cljs.core.seq.call(null,seq__18585_18596);if(temp__4126__auto___18609)
{var seq__18585_18610__$1 = temp__4126__auto___18609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18585_18610__$1))
{var c__4307__auto___18611 = cljs.core.chunk_first.call(null,seq__18585_18610__$1);{
var G__18612 = cljs.core.chunk_rest.call(null,seq__18585_18610__$1);
var G__18613 = c__4307__auto___18611;
var G__18614 = cljs.core.count.call(null,c__4307__auto___18611);
var G__18615 = (0);
seq__18585_18596 = G__18612;
chunk__18586_18597 = G__18613;
count__18587_18598 = G__18614;
i__18588_18599 = G__18615;
continue;
}
} else
{var vec__18592_18616 = cljs.core.first.call(null,seq__18585_18610__$1);var names_18617 = cljs.core.nth.call(null,vec__18592_18616,(0),null);var logoName_18618 = cljs.core.nth.call(null,vec__18592_18616,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__18585_18596,chunk__18586_18597,count__18587_18598,i__18588_18599,vec__18592_18616,names_18617,logoName_18618,seq__18585_18610__$1,temp__4126__auto___18609,logoNames_18595,map__18583,map__18583__$1,ctx,root,map__18584,map__18584__$1,args,curr_view){
return (function (p1__18568_SHARP_){return cljs.core._EQ_.call(null,p1__18568_SHARP_,curr_view);
});})(seq__18585_18596,chunk__18586_18597,count__18587_18598,i__18588_18599,vec__18592_18616,names_18617,logoName_18618,seq__18585_18610__$1,temp__4126__auto___18609,logoNames_18595,map__18583,map__18583__$1,ctx,root,map__18584,map__18584__$1,args,curr_view))
,names_18617)))
{var G__18593_18619 = root.find(logoName_18618);G__18593_18619.fadeIn((400));
} else
{var G__18594_18620 = root.find(logoName_18618);G__18594_18620.hide();
}
{
var G__18621 = cljs.core.next.call(null,seq__18585_18610__$1);
var G__18622 = null;
var G__18623 = (0);
var G__18624 = (0);
seq__18585_18596 = G__18621;
chunk__18586_18597 = G__18622;
count__18587_18598 = G__18623;
i__18588_18599 = G__18624;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__18626,p__18627){var map__18632 = p__18626;var map__18632__$1 = ((cljs.core.seq_QMARK_.call(null,map__18632))?cljs.core.apply.call(null,cljs.core.hash_map,map__18632):map__18632);var ctx = map__18632__$1;var root = cljs.core.get.call(null,map__18632__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__18633 = p__18627;var map__18633__$1 = ((cljs.core.seq_QMARK_.call(null,map__18633))?cljs.core.apply.call(null,cljs.core.hash_map,map__18633):map__18633);var args = map__18633__$1;var curr_view = cljs.core.get.call(null,map__18633__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_18636 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_18636,map__18632,map__18632__$1,ctx,root,map__18633,map__18633__$1,args,curr_view){
return (function (p1__18625_SHARP_){return cljs.core._EQ_.call(null,p1__18625_SHARP_,curr_view);
});})(shouldHide_18636,map__18632,map__18632__$1,ctx,root,map__18633,map__18633__$1,args,curr_view))
,shouldHide_18636)))
{var G__18634_18637 = root.find("#mc_footer");G__18634_18637.fadeOut();
} else
{var G__18635_18638 = root.find("#mc_footer");G__18635_18638.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__18641,p__18642){var map__18647 = p__18641;var map__18647__$1 = ((cljs.core.seq_QMARK_.call(null,map__18647))?cljs.core.apply.call(null,cljs.core.hash_map,map__18647):map__18647);var ctx = map__18647__$1;var router = cljs.core.get.call(null,map__18647__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__18648 = p__18642;var map__18648__$1 = ((cljs.core.seq_QMARK_.call(null,map__18648))?cljs.core.apply.call(null,cljs.core.hash_map,map__18648):map__18648);var args = map__18648__$1;var searchKey = cljs.core.get.call(null,map__18648__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__18648__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__18648__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__18647,map__18647__$1,ctx,router,map__18648,map__18648__$1,args,searchKey,id,react_action){
return (function (p1__18639_SHARP_){return cljs.core._EQ_.call(null,p1__18639_SHARP_,react_action);
});})(map__18647,map__18647__$1,ctx,router,map__18648,map__18648__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__18647,map__18647__$1,ctx,router,map__18648,map__18648__$1,args,searchKey,id,react_action){
return (function (p1__18640_SHARP_){return cljs.core._EQ_.call(null,p1__18640_SHARP_,react_action);
});})(map__18647,map__18647__$1,ctx,router,map__18648,map__18648__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj18650 = {"trigger":true};return obj18650;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__18652){var map__18656 = p__18652;var map__18656__$1 = ((cljs.core.seq_QMARK_.call(null,map__18656))?cljs.core.apply.call(null,cljs.core.hash_map,map__18656):map__18656);var args = map__18656__$1;var model = cljs.core.get.call(null,map__18656__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj18658 = {"name":"sdyle","link":(window["location"]["href"]),"picture":(model["styleUrl"]),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__18656,map__18656__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("share success!");
} else
{return null;
}
});})(map__18656,map__18656__$1,args,model))
,"err":((function (map__18656,map__18656__$1,args,model){
return (function (p1__18651_SHARP_){return alert(p1__18651_SHARP_);
});})(map__18656,map__18656__$1,args,model))
};return obj18658;
})());
return ctx;
});
