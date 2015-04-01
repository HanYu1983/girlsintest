// Compiled by ClojureScript 0.0-2268
goog.provide('app.action');
goog.require('cljs.core');
goog.require('app.fn');
goog.require('app.fn');
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__55613){var map__55615 = p__55613;var map__55615__$1 = ((cljs.core.seq_QMARK_.call(null,map__55615))?cljs.core.apply.call(null,cljs.core.hash_map,map__55615):map__55615);var args = map__55615__$1;var basicUrl = cljs.core.get.call(null,map__55615__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__55617,p__55618){var map__55631 = p__55617;var map__55631__$1 = ((cljs.core.seq_QMARK_.call(null,map__55631))?cljs.core.apply.call(null,cljs.core.hash_map,map__55631):map__55631);var ctx = map__55631__$1;var root = cljs.core.get.call(null,map__55631__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__55632 = p__55618;var map__55632__$1 = ((cljs.core.seq_QMARK_.call(null,map__55632))?cljs.core.apply.call(null,cljs.core.hash_map,map__55632):map__55632);var args = map__55632__$1;var curr_view = cljs.core.get.call(null,map__55632__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_55643 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__55633_55644 = cljs.core.seq.call(null,logoNames_55643);var chunk__55634_55645 = null;var count__55635_55646 = (0);var i__55636_55647 = (0);while(true){
if((i__55636_55647 < count__55635_55646))
{var vec__55637_55648 = cljs.core._nth.call(null,chunk__55634_55645,i__55636_55647);var names_55649 = cljs.core.nth.call(null,vec__55637_55648,(0),null);var logoName_55650 = cljs.core.nth.call(null,vec__55637_55648,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__55633_55644,chunk__55634_55645,count__55635_55646,i__55636_55647,vec__55637_55648,names_55649,logoName_55650,logoNames_55643,map__55631,map__55631__$1,ctx,root,map__55632,map__55632__$1,args,curr_view){
return (function (p1__55616_SHARP_){return cljs.core._EQ_.call(null,p1__55616_SHARP_,curr_view);
});})(seq__55633_55644,chunk__55634_55645,count__55635_55646,i__55636_55647,vec__55637_55648,names_55649,logoName_55650,logoNames_55643,map__55631,map__55631__$1,ctx,root,map__55632,map__55632__$1,args,curr_view))
,names_55649)))
{var G__55638_55651 = root.find(logoName_55650);G__55638_55651.fadeIn((400));
} else
{var G__55639_55652 = root.find(logoName_55650);G__55639_55652.hide();
}
{
var G__55653 = seq__55633_55644;
var G__55654 = chunk__55634_55645;
var G__55655 = count__55635_55646;
var G__55656 = (i__55636_55647 + (1));
seq__55633_55644 = G__55653;
chunk__55634_55645 = G__55654;
count__55635_55646 = G__55655;
i__55636_55647 = G__55656;
continue;
}
} else
{var temp__4126__auto___55657 = cljs.core.seq.call(null,seq__55633_55644);if(temp__4126__auto___55657)
{var seq__55633_55658__$1 = temp__4126__auto___55657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55633_55658__$1))
{var c__4307__auto___55659 = cljs.core.chunk_first.call(null,seq__55633_55658__$1);{
var G__55660 = cljs.core.chunk_rest.call(null,seq__55633_55658__$1);
var G__55661 = c__4307__auto___55659;
var G__55662 = cljs.core.count.call(null,c__4307__auto___55659);
var G__55663 = (0);
seq__55633_55644 = G__55660;
chunk__55634_55645 = G__55661;
count__55635_55646 = G__55662;
i__55636_55647 = G__55663;
continue;
}
} else
{var vec__55640_55664 = cljs.core.first.call(null,seq__55633_55658__$1);var names_55665 = cljs.core.nth.call(null,vec__55640_55664,(0),null);var logoName_55666 = cljs.core.nth.call(null,vec__55640_55664,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__55633_55644,chunk__55634_55645,count__55635_55646,i__55636_55647,vec__55640_55664,names_55665,logoName_55666,seq__55633_55658__$1,temp__4126__auto___55657,logoNames_55643,map__55631,map__55631__$1,ctx,root,map__55632,map__55632__$1,args,curr_view){
return (function (p1__55616_SHARP_){return cljs.core._EQ_.call(null,p1__55616_SHARP_,curr_view);
});})(seq__55633_55644,chunk__55634_55645,count__55635_55646,i__55636_55647,vec__55640_55664,names_55665,logoName_55666,seq__55633_55658__$1,temp__4126__auto___55657,logoNames_55643,map__55631,map__55631__$1,ctx,root,map__55632,map__55632__$1,args,curr_view))
,names_55665)))
{var G__55641_55667 = root.find(logoName_55666);G__55641_55667.fadeIn((400));
} else
{var G__55642_55668 = root.find(logoName_55666);G__55642_55668.hide();
}
{
var G__55669 = cljs.core.next.call(null,seq__55633_55658__$1);
var G__55670 = null;
var G__55671 = (0);
var G__55672 = (0);
seq__55633_55644 = G__55669;
chunk__55634_55645 = G__55670;
count__55635_55646 = G__55671;
i__55636_55647 = G__55672;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__55674,p__55675){var map__55680 = p__55674;var map__55680__$1 = ((cljs.core.seq_QMARK_.call(null,map__55680))?cljs.core.apply.call(null,cljs.core.hash_map,map__55680):map__55680);var ctx = map__55680__$1;var root = cljs.core.get.call(null,map__55680__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__55681 = p__55675;var map__55681__$1 = ((cljs.core.seq_QMARK_.call(null,map__55681))?cljs.core.apply.call(null,cljs.core.hash_map,map__55681):map__55681);var args = map__55681__$1;var curr_view = cljs.core.get.call(null,map__55681__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_55684 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_55684,map__55680,map__55680__$1,ctx,root,map__55681,map__55681__$1,args,curr_view){
return (function (p1__55673_SHARP_){return cljs.core._EQ_.call(null,p1__55673_SHARP_,curr_view);
});})(shouldHide_55684,map__55680,map__55680__$1,ctx,root,map__55681,map__55681__$1,args,curr_view))
,shouldHide_55684)))
{var G__55682_55685 = root.find("#mc_footer");G__55682_55685.fadeOut();
} else
{var G__55683_55686 = root.find("#mc_footer");G__55683_55686.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__55689,p__55690){var map__55695 = p__55689;var map__55695__$1 = ((cljs.core.seq_QMARK_.call(null,map__55695))?cljs.core.apply.call(null,cljs.core.hash_map,map__55695):map__55695);var ctx = map__55695__$1;var router = cljs.core.get.call(null,map__55695__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__55696 = p__55690;var map__55696__$1 = ((cljs.core.seq_QMARK_.call(null,map__55696))?cljs.core.apply.call(null,cljs.core.hash_map,map__55696):map__55696);var args = map__55696__$1;var searchKey = cljs.core.get.call(null,map__55696__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__55696__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__55696__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__55695,map__55695__$1,ctx,router,map__55696,map__55696__$1,args,searchKey,id,react_action){
return (function (p1__55687_SHARP_){return cljs.core._EQ_.call(null,p1__55687_SHARP_,react_action);
});})(map__55695,map__55695__$1,ctx,router,map__55696,map__55696__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__55695,map__55695__$1,ctx,router,map__55696,map__55696__$1,args,searchKey,id,react_action){
return (function (p1__55688_SHARP_){return cljs.core._EQ_.call(null,p1__55688_SHARP_,react_action);
});})(map__55695,map__55695__$1,ctx,router,map__55696,map__55696__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj55698 = {"trigger":true};return obj55698;
})());
return ctx;
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
ComposeAction.cljs$lang$applyTo = (function (arglist__55699){
var fns = cljs.core.seq(arglist__55699);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
