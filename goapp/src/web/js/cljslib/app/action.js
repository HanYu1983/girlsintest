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
ComposeAction.cljs$lang$applyTo = (function (arglist__12566){
var fns = cljs.core.seq(arglist__12566);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__12567){var map__12569 = p__12567;var map__12569__$1 = ((cljs.core.seq_QMARK_.call(null,map__12569))?cljs.core.apply.call(null,cljs.core.hash_map,map__12569):map__12569);var args = map__12569__$1;var model = cljs.core.get.call(null,map__12569__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__12570){var map__12572 = p__12570;var map__12572__$1 = ((cljs.core.seq_QMARK_.call(null,map__12572))?cljs.core.apply.call(null,cljs.core.hash_map,map__12572):map__12572);var args = map__12572__$1;var basicUrl = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__12574,p__12575){var map__12588 = p__12574;var map__12588__$1 = ((cljs.core.seq_QMARK_.call(null,map__12588))?cljs.core.apply.call(null,cljs.core.hash_map,map__12588):map__12588);var ctx = map__12588__$1;var root = cljs.core.get.call(null,map__12588__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__12589 = p__12575;var map__12589__$1 = ((cljs.core.seq_QMARK_.call(null,map__12589))?cljs.core.apply.call(null,cljs.core.hash_map,map__12589):map__12589);var args = map__12589__$1;var curr_view = cljs.core.get.call(null,map__12589__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_12600 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__12590_12601 = cljs.core.seq.call(null,logoNames_12600);var chunk__12591_12602 = null;var count__12592_12603 = (0);var i__12593_12604 = (0);while(true){
if((i__12593_12604 < count__12592_12603))
{var vec__12594_12605 = cljs.core._nth.call(null,chunk__12591_12602,i__12593_12604);var names_12606 = cljs.core.nth.call(null,vec__12594_12605,(0),null);var logoName_12607 = cljs.core.nth.call(null,vec__12594_12605,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__12590_12601,chunk__12591_12602,count__12592_12603,i__12593_12604,vec__12594_12605,names_12606,logoName_12607,logoNames_12600,map__12588,map__12588__$1,ctx,root,map__12589,map__12589__$1,args,curr_view){
return (function (p1__12573_SHARP_){return cljs.core._EQ_.call(null,p1__12573_SHARP_,curr_view);
});})(seq__12590_12601,chunk__12591_12602,count__12592_12603,i__12593_12604,vec__12594_12605,names_12606,logoName_12607,logoNames_12600,map__12588,map__12588__$1,ctx,root,map__12589,map__12589__$1,args,curr_view))
,names_12606)))
{var G__12595_12608 = root.find(logoName_12607);G__12595_12608.fadeIn((400));
} else
{var G__12596_12609 = root.find(logoName_12607);G__12596_12609.hide();
}
{
var G__12610 = seq__12590_12601;
var G__12611 = chunk__12591_12602;
var G__12612 = count__12592_12603;
var G__12613 = (i__12593_12604 + (1));
seq__12590_12601 = G__12610;
chunk__12591_12602 = G__12611;
count__12592_12603 = G__12612;
i__12593_12604 = G__12613;
continue;
}
} else
{var temp__4126__auto___12614 = cljs.core.seq.call(null,seq__12590_12601);if(temp__4126__auto___12614)
{var seq__12590_12615__$1 = temp__4126__auto___12614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12590_12615__$1))
{var c__4307__auto___12616 = cljs.core.chunk_first.call(null,seq__12590_12615__$1);{
var G__12617 = cljs.core.chunk_rest.call(null,seq__12590_12615__$1);
var G__12618 = c__4307__auto___12616;
var G__12619 = cljs.core.count.call(null,c__4307__auto___12616);
var G__12620 = (0);
seq__12590_12601 = G__12617;
chunk__12591_12602 = G__12618;
count__12592_12603 = G__12619;
i__12593_12604 = G__12620;
continue;
}
} else
{var vec__12597_12621 = cljs.core.first.call(null,seq__12590_12615__$1);var names_12622 = cljs.core.nth.call(null,vec__12597_12621,(0),null);var logoName_12623 = cljs.core.nth.call(null,vec__12597_12621,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__12590_12601,chunk__12591_12602,count__12592_12603,i__12593_12604,vec__12597_12621,names_12622,logoName_12623,seq__12590_12615__$1,temp__4126__auto___12614,logoNames_12600,map__12588,map__12588__$1,ctx,root,map__12589,map__12589__$1,args,curr_view){
return (function (p1__12573_SHARP_){return cljs.core._EQ_.call(null,p1__12573_SHARP_,curr_view);
});})(seq__12590_12601,chunk__12591_12602,count__12592_12603,i__12593_12604,vec__12597_12621,names_12622,logoName_12623,seq__12590_12615__$1,temp__4126__auto___12614,logoNames_12600,map__12588,map__12588__$1,ctx,root,map__12589,map__12589__$1,args,curr_view))
,names_12622)))
{var G__12598_12624 = root.find(logoName_12623);G__12598_12624.fadeIn((400));
} else
{var G__12599_12625 = root.find(logoName_12623);G__12599_12625.hide();
}
{
var G__12626 = cljs.core.next.call(null,seq__12590_12615__$1);
var G__12627 = null;
var G__12628 = (0);
var G__12629 = (0);
seq__12590_12601 = G__12626;
chunk__12591_12602 = G__12627;
count__12592_12603 = G__12628;
i__12593_12604 = G__12629;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__12631,p__12632){var map__12637 = p__12631;var map__12637__$1 = ((cljs.core.seq_QMARK_.call(null,map__12637))?cljs.core.apply.call(null,cljs.core.hash_map,map__12637):map__12637);var ctx = map__12637__$1;var root = cljs.core.get.call(null,map__12637__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__12638 = p__12632;var map__12638__$1 = ((cljs.core.seq_QMARK_.call(null,map__12638))?cljs.core.apply.call(null,cljs.core.hash_map,map__12638):map__12638);var args = map__12638__$1;var curr_view = cljs.core.get.call(null,map__12638__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_12641 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_12641,map__12637,map__12637__$1,ctx,root,map__12638,map__12638__$1,args,curr_view){
return (function (p1__12630_SHARP_){return cljs.core._EQ_.call(null,p1__12630_SHARP_,curr_view);
});})(shouldHide_12641,map__12637,map__12637__$1,ctx,root,map__12638,map__12638__$1,args,curr_view))
,shouldHide_12641)))
{var G__12639_12642 = root.find("#mc_footer");G__12639_12642.fadeOut();
} else
{var G__12640_12643 = root.find("#mc_footer");G__12640_12643.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__12646,p__12647){var map__12652 = p__12646;var map__12652__$1 = ((cljs.core.seq_QMARK_.call(null,map__12652))?cljs.core.apply.call(null,cljs.core.hash_map,map__12652):map__12652);var ctx = map__12652__$1;var router = cljs.core.get.call(null,map__12652__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__12653 = p__12647;var map__12653__$1 = ((cljs.core.seq_QMARK_.call(null,map__12653))?cljs.core.apply.call(null,cljs.core.hash_map,map__12653):map__12653);var args = map__12653__$1;var searchKey = cljs.core.get.call(null,map__12653__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__12653__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__12653__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__12652,map__12652__$1,ctx,router,map__12653,map__12653__$1,args,searchKey,id,react_action){
return (function (p1__12644_SHARP_){return cljs.core._EQ_.call(null,p1__12644_SHARP_,react_action);
});})(map__12652,map__12652__$1,ctx,router,map__12653,map__12653__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__12652,map__12652__$1,ctx,router,map__12653,map__12653__$1,args,searchKey,id,react_action){
return (function (p1__12645_SHARP_){return cljs.core._EQ_.call(null,p1__12645_SHARP_,react_action);
});})(map__12652,map__12652__$1,ctx,router,map__12653,map__12653__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj12655 = {"trigger":true};return obj12655;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__12657){var map__12661 = p__12657;var map__12661__$1 = ((cljs.core.seq_QMARK_.call(null,map__12661))?cljs.core.apply.call(null,cljs.core.hash_map,map__12661):map__12661);var args = map__12661__$1;var model = cljs.core.get.call(null,map__12661__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj12663 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__12661,map__12661__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__12661,map__12661__$1,args,model))
,"err":((function (map__12661,map__12661__$1,args,model){
return (function (p1__12656_SHARP_){return alert(p1__12656_SHARP_);
});})(map__12661,map__12661__$1,args,model))
};return obj12663;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__12664){var map__12666 = p__12664;var map__12666__$1 = ((cljs.core.seq_QMARK_.call(null,map__12666))?cljs.core.apply.call(null,cljs.core.hash_map,map__12666):map__12666);var args = map__12666__$1;var view_obj = cljs.core.get.call(null,map__12666__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__12667,args){var map__12669 = p__12667;var map__12669__$1 = ((cljs.core.seq_QMARK_.call(null,map__12669))?cljs.core.apply.call(null,cljs.core.hash_map,map__12669):map__12669);var ctx = map__12669__$1;var root = cljs.core.get.call(null,map__12669__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__12669__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_12670 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_12671 = root.find("#mc_menubar");var isHide_12672 = cljs.core._EQ_.call(null,"none",menu_elem_12671.css("display"));if(should_apply_this_12670)
{if(isHide_12672)
{menu_elem_12671.show();
} else
{menu_elem_12671.hide();
}
} else
{}
return ctx;
});
