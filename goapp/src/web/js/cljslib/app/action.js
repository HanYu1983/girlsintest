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
ComposeAction.cljs$lang$applyTo = (function (arglist__11560){
var fns = cljs.core.seq(arglist__11560);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__11561){var map__11563 = p__11561;var map__11563__$1 = ((cljs.core.seq_QMARK_.call(null,map__11563))?cljs.core.apply.call(null,cljs.core.hash_map,map__11563):map__11563);var args = map__11563__$1;var model = cljs.core.get.call(null,map__11563__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__11564){var map__11566 = p__11564;var map__11566__$1 = ((cljs.core.seq_QMARK_.call(null,map__11566))?cljs.core.apply.call(null,cljs.core.hash_map,map__11566):map__11566);var args = map__11566__$1;var basicUrl = cljs.core.get.call(null,map__11566__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__11568,p__11569){var map__11582 = p__11568;var map__11582__$1 = ((cljs.core.seq_QMARK_.call(null,map__11582))?cljs.core.apply.call(null,cljs.core.hash_map,map__11582):map__11582);var ctx = map__11582__$1;var root = cljs.core.get.call(null,map__11582__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__11583 = p__11569;var map__11583__$1 = ((cljs.core.seq_QMARK_.call(null,map__11583))?cljs.core.apply.call(null,cljs.core.hash_map,map__11583):map__11583);var args = map__11583__$1;var curr_view = cljs.core.get.call(null,map__11583__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_11594 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__11584_11595 = cljs.core.seq.call(null,logoNames_11594);var chunk__11585_11596 = null;var count__11586_11597 = (0);var i__11587_11598 = (0);while(true){
if((i__11587_11598 < count__11586_11597))
{var vec__11588_11599 = cljs.core._nth.call(null,chunk__11585_11596,i__11587_11598);var names_11600 = cljs.core.nth.call(null,vec__11588_11599,(0),null);var logoName_11601 = cljs.core.nth.call(null,vec__11588_11599,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11584_11595,chunk__11585_11596,count__11586_11597,i__11587_11598,vec__11588_11599,names_11600,logoName_11601,logoNames_11594,map__11582,map__11582__$1,ctx,root,map__11583,map__11583__$1,args,curr_view){
return (function (p1__11567_SHARP_){return cljs.core._EQ_.call(null,p1__11567_SHARP_,curr_view);
});})(seq__11584_11595,chunk__11585_11596,count__11586_11597,i__11587_11598,vec__11588_11599,names_11600,logoName_11601,logoNames_11594,map__11582,map__11582__$1,ctx,root,map__11583,map__11583__$1,args,curr_view))
,names_11600)))
{var G__11589_11602 = root.find(logoName_11601);G__11589_11602.fadeIn((400));
} else
{var G__11590_11603 = root.find(logoName_11601);G__11590_11603.hide();
}
{
var G__11604 = seq__11584_11595;
var G__11605 = chunk__11585_11596;
var G__11606 = count__11586_11597;
var G__11607 = (i__11587_11598 + (1));
seq__11584_11595 = G__11604;
chunk__11585_11596 = G__11605;
count__11586_11597 = G__11606;
i__11587_11598 = G__11607;
continue;
}
} else
{var temp__4126__auto___11608 = cljs.core.seq.call(null,seq__11584_11595);if(temp__4126__auto___11608)
{var seq__11584_11609__$1 = temp__4126__auto___11608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11584_11609__$1))
{var c__4307__auto___11610 = cljs.core.chunk_first.call(null,seq__11584_11609__$1);{
var G__11611 = cljs.core.chunk_rest.call(null,seq__11584_11609__$1);
var G__11612 = c__4307__auto___11610;
var G__11613 = cljs.core.count.call(null,c__4307__auto___11610);
var G__11614 = (0);
seq__11584_11595 = G__11611;
chunk__11585_11596 = G__11612;
count__11586_11597 = G__11613;
i__11587_11598 = G__11614;
continue;
}
} else
{var vec__11591_11615 = cljs.core.first.call(null,seq__11584_11609__$1);var names_11616 = cljs.core.nth.call(null,vec__11591_11615,(0),null);var logoName_11617 = cljs.core.nth.call(null,vec__11591_11615,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11584_11595,chunk__11585_11596,count__11586_11597,i__11587_11598,vec__11591_11615,names_11616,logoName_11617,seq__11584_11609__$1,temp__4126__auto___11608,logoNames_11594,map__11582,map__11582__$1,ctx,root,map__11583,map__11583__$1,args,curr_view){
return (function (p1__11567_SHARP_){return cljs.core._EQ_.call(null,p1__11567_SHARP_,curr_view);
});})(seq__11584_11595,chunk__11585_11596,count__11586_11597,i__11587_11598,vec__11591_11615,names_11616,logoName_11617,seq__11584_11609__$1,temp__4126__auto___11608,logoNames_11594,map__11582,map__11582__$1,ctx,root,map__11583,map__11583__$1,args,curr_view))
,names_11616)))
{var G__11592_11618 = root.find(logoName_11617);G__11592_11618.fadeIn((400));
} else
{var G__11593_11619 = root.find(logoName_11617);G__11593_11619.hide();
}
{
var G__11620 = cljs.core.next.call(null,seq__11584_11609__$1);
var G__11621 = null;
var G__11622 = (0);
var G__11623 = (0);
seq__11584_11595 = G__11620;
chunk__11585_11596 = G__11621;
count__11586_11597 = G__11622;
i__11587_11598 = G__11623;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__11625,p__11626){var map__11631 = p__11625;var map__11631__$1 = ((cljs.core.seq_QMARK_.call(null,map__11631))?cljs.core.apply.call(null,cljs.core.hash_map,map__11631):map__11631);var ctx = map__11631__$1;var root = cljs.core.get.call(null,map__11631__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__11632 = p__11626;var map__11632__$1 = ((cljs.core.seq_QMARK_.call(null,map__11632))?cljs.core.apply.call(null,cljs.core.hash_map,map__11632):map__11632);var args = map__11632__$1;var curr_view = cljs.core.get.call(null,map__11632__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_11635 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_11635,map__11631,map__11631__$1,ctx,root,map__11632,map__11632__$1,args,curr_view){
return (function (p1__11624_SHARP_){return cljs.core._EQ_.call(null,p1__11624_SHARP_,curr_view);
});})(shouldHide_11635,map__11631,map__11631__$1,ctx,root,map__11632,map__11632__$1,args,curr_view))
,shouldHide_11635)))
{var G__11633_11636 = root.find("#mc_footer");G__11633_11636.fadeOut();
} else
{var G__11634_11637 = root.find("#mc_footer");G__11634_11637.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__11640,p__11641){var map__11646 = p__11640;var map__11646__$1 = ((cljs.core.seq_QMARK_.call(null,map__11646))?cljs.core.apply.call(null,cljs.core.hash_map,map__11646):map__11646);var ctx = map__11646__$1;var router = cljs.core.get.call(null,map__11646__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__11647 = p__11641;var map__11647__$1 = ((cljs.core.seq_QMARK_.call(null,map__11647))?cljs.core.apply.call(null,cljs.core.hash_map,map__11647):map__11647);var args = map__11647__$1;var searchKey = cljs.core.get.call(null,map__11647__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__11647__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__11647__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__11646,map__11646__$1,ctx,router,map__11647,map__11647__$1,args,searchKey,id,react_action){
return (function (p1__11638_SHARP_){return cljs.core._EQ_.call(null,p1__11638_SHARP_,react_action);
});})(map__11646,map__11646__$1,ctx,router,map__11647,map__11647__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__11646,map__11646__$1,ctx,router,map__11647,map__11647__$1,args,searchKey,id,react_action){
return (function (p1__11639_SHARP_){return cljs.core._EQ_.call(null,p1__11639_SHARP_,react_action);
});})(map__11646,map__11646__$1,ctx,router,map__11647,map__11647__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj11649 = {"trigger":true};return obj11649;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__11651){var map__11655 = p__11651;var map__11655__$1 = ((cljs.core.seq_QMARK_.call(null,map__11655))?cljs.core.apply.call(null,cljs.core.hash_map,map__11655):map__11655);var args = map__11655__$1;var model = cljs.core.get.call(null,map__11655__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj11657 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__11655,map__11655__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__11655,map__11655__$1,args,model))
,"err":((function (map__11655,map__11655__$1,args,model){
return (function (p1__11650_SHARP_){return alert(p1__11650_SHARP_);
});})(map__11655,map__11655__$1,args,model))
};return obj11657;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__11658){var map__11660 = p__11658;var map__11660__$1 = ((cljs.core.seq_QMARK_.call(null,map__11660))?cljs.core.apply.call(null,cljs.core.hash_map,map__11660):map__11660);var args = map__11660__$1;var view_obj = cljs.core.get.call(null,map__11660__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__11661,args){var map__11663 = p__11661;var map__11663__$1 = ((cljs.core.seq_QMARK_.call(null,map__11663))?cljs.core.apply.call(null,cljs.core.hash_map,map__11663):map__11663);var ctx = map__11663__$1;var root = cljs.core.get.call(null,map__11663__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__11663__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_11664 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_11665 = root.find("#mc_menubar");var isHide_11666 = cljs.core._EQ_.call(null,"none",menu_elem_11665.css("display"));if(should_apply_this_11664)
{if(isHide_11666)
{menu_elem_11665.show();
} else
{menu_elem_11665.hide();
}
} else
{}
return ctx;
});
app.action.ToggleMenuForce = (function ToggleMenuForce(p__11667,args){var map__11669 = p__11667;var map__11669__$1 = ((cljs.core.seq_QMARK_.call(null,map__11669))?cljs.core.apply.call(null,cljs.core.hash_map,map__11669):map__11669);var ctx = map__11669__$1;var root = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__11669__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_11670 = true;var menu_elem_11671 = root.find("#mc_menubar");var isHide_11672 = cljs.core._EQ_.call(null,"none",menu_elem_11671.css("display"));if(should_apply_this_11670)
{if(isHide_11672)
{menu_elem_11671.show();
} else
{menu_elem_11671.hide();
}
} else
{}
return ctx;
});
app.action.OpenMenuIfPcMode = (function OpenMenuIfPcMode(p__11673,args){var map__11675 = p__11673;var map__11675__$1 = ((cljs.core.seq_QMARK_.call(null,map__11675))?cljs.core.apply.call(null,cljs.core.hash_map,map__11675):map__11675);var ctx = map__11675__$1;var root = cljs.core.get.call(null,map__11675__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__11675__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_11676 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),media_type);var menu_elem_11677 = root.find("#mc_menubar");if(should_apply_this_11676)
{menu_elem_11677.show();
} else
{}
return ctx;
});
app.action.CloseMenu = (function CloseMenu(p__11678,args){var map__11680 = p__11678;var map__11680__$1 = ((cljs.core.seq_QMARK_.call(null,map__11680))?cljs.core.apply.call(null,cljs.core.hash_map,map__11680):map__11680);var ctx = map__11680__$1;var root = cljs.core.get.call(null,map__11680__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__11680__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_11681 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_11682 = root.find("#mc_menubar");if(should_apply_this_11681)
{menu_elem_11682.hide();
} else
{}
return ctx;
});
app.action.DetectMediaQuery = (function DetectMediaQuery(ctx,_){var media_query_info = $("#media-query-info");var media_type = (function (){var pred__11686 = cljs.core._EQ_;var expr__11687 = media_query_info.css("left");if(cljs.core.truth_(pred__11686.call(null,"0px",expr__11687)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__11686.call(null,"1px",expr__11687)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__11686.call(null,"2px",expr__11687)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"media-type","media-type",-764436129),media_type);
});
app.action.AlertInfomationIfModelPageAtMobileDevice = (function AlertInfomationIfModelPageAtMobileDevice(ctx,p__11690){var map__11692 = p__11690;var map__11692__$1 = ((cljs.core.seq_QMARK_.call(null,map__11692))?cljs.core.apply.call(null,cljs.core.hash_map,map__11692):map__11692);var args = map__11692__$1;var curr_view = cljs.core.get.call(null,map__11692__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));if(cljs.core.truth_((function (){var and__3539__auto__ = cljs.core.some.call(null,((function (map__11692,map__11692__$1,args,curr_view){
return (function (p1__11689_SHARP_){return cljs.core._EQ_.call(null,p1__11689_SHARP_,curr_view);
});})(map__11692,map__11692__$1,args,curr_view))
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
{setTimeout(((function (map__11692,map__11692__$1,args,curr_view){
return (function (){return alert(constant.modelInformation);
});})(map__11692,map__11692__$1,args,curr_view))
,(1000));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.Keyword(null,"mobileInformation","mobileInformation",-789142128)], null),true);
} else
{return ctx;
}
});
app.action.Tracking = (function Tracking(ctx,p__11693){var map__11698 = p__11693;var map__11698__$1 = ((cljs.core.seq_QMARK_.call(null,map__11698))?cljs.core.apply.call(null,cljs.core.hash_map,map__11698):map__11698);var args = map__11698__$1;var where = cljs.core.get.call(null,map__11698__$1,new cljs.core.Keyword(null,"react-where","react-where",-127883626));var where2 = cljs.core.get.call(null,map__11698__$1,new cljs.core.Keyword(null,"react-where2","react-where2",611305798));var act = cljs.core.get.call(null,map__11698__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));var pred__11699_11702 = cljs.core._EQ_;var expr__11700_11703 = where;if(cljs.core.truth_(pred__11699_11702.call(null,new cljs.core.Keyword(null,"Router","Router",1225596421),expr__11700_11703)))
{googleTracking.page.call(null,"send","pageview",act);
} else
{googleTracking.page.call(null,"send","event","btn",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,where))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,where2))));
}
return ctx;
});
