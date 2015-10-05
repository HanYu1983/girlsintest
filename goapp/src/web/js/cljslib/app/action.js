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
ComposeAction.cljs$lang$applyTo = (function (arglist__34443){
var fns = cljs.core.seq(arglist__34443);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__34444){var map__34446 = p__34444;var map__34446__$1 = ((cljs.core.seq_QMARK_.call(null,map__34446))?cljs.core.apply.call(null,cljs.core.hash_map,map__34446):map__34446);var args = map__34446__$1;var model = cljs.core.get.call(null,map__34446__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__34447){var map__34449 = p__34447;var map__34449__$1 = ((cljs.core.seq_QMARK_.call(null,map__34449))?cljs.core.apply.call(null,cljs.core.hash_map,map__34449):map__34449);var args = map__34449__$1;var basicUrl = cljs.core.get.call(null,map__34449__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__34451,p__34452){var map__34465 = p__34451;var map__34465__$1 = ((cljs.core.seq_QMARK_.call(null,map__34465))?cljs.core.apply.call(null,cljs.core.hash_map,map__34465):map__34465);var ctx = map__34465__$1;var root = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__34466 = p__34452;var map__34466__$1 = ((cljs.core.seq_QMARK_.call(null,map__34466))?cljs.core.apply.call(null,cljs.core.hash_map,map__34466):map__34466);var args = map__34466__$1;var curr_view = cljs.core.get.call(null,map__34466__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_34477 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__34467_34478 = cljs.core.seq.call(null,logoNames_34477);var chunk__34468_34479 = null;var count__34469_34480 = (0);var i__34470_34481 = (0);while(true){
if((i__34470_34481 < count__34469_34480))
{var vec__34471_34482 = cljs.core._nth.call(null,chunk__34468_34479,i__34470_34481);var names_34483 = cljs.core.nth.call(null,vec__34471_34482,(0),null);var logoName_34484 = cljs.core.nth.call(null,vec__34471_34482,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__34467_34478,chunk__34468_34479,count__34469_34480,i__34470_34481,vec__34471_34482,names_34483,logoName_34484,logoNames_34477,map__34465,map__34465__$1,ctx,root,map__34466,map__34466__$1,args,curr_view){
return (function (p1__34450_SHARP_){return cljs.core._EQ_.call(null,p1__34450_SHARP_,curr_view);
});})(seq__34467_34478,chunk__34468_34479,count__34469_34480,i__34470_34481,vec__34471_34482,names_34483,logoName_34484,logoNames_34477,map__34465,map__34465__$1,ctx,root,map__34466,map__34466__$1,args,curr_view))
,names_34483)))
{var G__34472_34485 = root.find(logoName_34484);G__34472_34485.fadeIn((400));
} else
{var G__34473_34486 = root.find(logoName_34484);G__34473_34486.hide();
}
{
var G__34487 = seq__34467_34478;
var G__34488 = chunk__34468_34479;
var G__34489 = count__34469_34480;
var G__34490 = (i__34470_34481 + (1));
seq__34467_34478 = G__34487;
chunk__34468_34479 = G__34488;
count__34469_34480 = G__34489;
i__34470_34481 = G__34490;
continue;
}
} else
{var temp__4126__auto___34491 = cljs.core.seq.call(null,seq__34467_34478);if(temp__4126__auto___34491)
{var seq__34467_34492__$1 = temp__4126__auto___34491;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34467_34492__$1))
{var c__4307__auto___34493 = cljs.core.chunk_first.call(null,seq__34467_34492__$1);{
var G__34494 = cljs.core.chunk_rest.call(null,seq__34467_34492__$1);
var G__34495 = c__4307__auto___34493;
var G__34496 = cljs.core.count.call(null,c__4307__auto___34493);
var G__34497 = (0);
seq__34467_34478 = G__34494;
chunk__34468_34479 = G__34495;
count__34469_34480 = G__34496;
i__34470_34481 = G__34497;
continue;
}
} else
{var vec__34474_34498 = cljs.core.first.call(null,seq__34467_34492__$1);var names_34499 = cljs.core.nth.call(null,vec__34474_34498,(0),null);var logoName_34500 = cljs.core.nth.call(null,vec__34474_34498,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__34467_34478,chunk__34468_34479,count__34469_34480,i__34470_34481,vec__34474_34498,names_34499,logoName_34500,seq__34467_34492__$1,temp__4126__auto___34491,logoNames_34477,map__34465,map__34465__$1,ctx,root,map__34466,map__34466__$1,args,curr_view){
return (function (p1__34450_SHARP_){return cljs.core._EQ_.call(null,p1__34450_SHARP_,curr_view);
});})(seq__34467_34478,chunk__34468_34479,count__34469_34480,i__34470_34481,vec__34474_34498,names_34499,logoName_34500,seq__34467_34492__$1,temp__4126__auto___34491,logoNames_34477,map__34465,map__34465__$1,ctx,root,map__34466,map__34466__$1,args,curr_view))
,names_34499)))
{var G__34475_34501 = root.find(logoName_34500);G__34475_34501.fadeIn((400));
} else
{var G__34476_34502 = root.find(logoName_34500);G__34476_34502.hide();
}
{
var G__34503 = cljs.core.next.call(null,seq__34467_34492__$1);
var G__34504 = null;
var G__34505 = (0);
var G__34506 = (0);
seq__34467_34478 = G__34503;
chunk__34468_34479 = G__34504;
count__34469_34480 = G__34505;
i__34470_34481 = G__34506;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__34508,p__34509){var map__34514 = p__34508;var map__34514__$1 = ((cljs.core.seq_QMARK_.call(null,map__34514))?cljs.core.apply.call(null,cljs.core.hash_map,map__34514):map__34514);var ctx = map__34514__$1;var root = cljs.core.get.call(null,map__34514__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__34515 = p__34509;var map__34515__$1 = ((cljs.core.seq_QMARK_.call(null,map__34515))?cljs.core.apply.call(null,cljs.core.hash_map,map__34515):map__34515);var args = map__34515__$1;var curr_view = cljs.core.get.call(null,map__34515__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_34518 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_34518,map__34514,map__34514__$1,ctx,root,map__34515,map__34515__$1,args,curr_view){
return (function (p1__34507_SHARP_){return cljs.core._EQ_.call(null,p1__34507_SHARP_,curr_view);
});})(shouldHide_34518,map__34514,map__34514__$1,ctx,root,map__34515,map__34515__$1,args,curr_view))
,shouldHide_34518)))
{var G__34516_34519 = root.find("#mc_footer");G__34516_34519.fadeOut();
} else
{var G__34517_34520 = root.find("#mc_footer");G__34517_34520.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__34523,p__34524){var map__34529 = p__34523;var map__34529__$1 = ((cljs.core.seq_QMARK_.call(null,map__34529))?cljs.core.apply.call(null,cljs.core.hash_map,map__34529):map__34529);var ctx = map__34529__$1;var router = cljs.core.get.call(null,map__34529__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__34530 = p__34524;var map__34530__$1 = ((cljs.core.seq_QMARK_.call(null,map__34530))?cljs.core.apply.call(null,cljs.core.hash_map,map__34530):map__34530);var args = map__34530__$1;var searchKey = cljs.core.get.call(null,map__34530__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__34530__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__34530__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__34529,map__34529__$1,ctx,router,map__34530,map__34530__$1,args,searchKey,id,react_action){
return (function (p1__34521_SHARP_){return cljs.core._EQ_.call(null,p1__34521_SHARP_,react_action);
});})(map__34529,map__34529__$1,ctx,router,map__34530,map__34530__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__34529,map__34529__$1,ctx,router,map__34530,map__34530__$1,args,searchKey,id,react_action){
return (function (p1__34522_SHARP_){return cljs.core._EQ_.call(null,p1__34522_SHARP_,react_action);
});})(map__34529,map__34529__$1,ctx,router,map__34530,map__34530__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj34532 = {"trigger":true};return obj34532;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__34534){var map__34538 = p__34534;var map__34538__$1 = ((cljs.core.seq_QMARK_.call(null,map__34538))?cljs.core.apply.call(null,cljs.core.hash_map,map__34538):map__34538);var args = map__34538__$1;var model = cljs.core.get.call(null,map__34538__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj34540 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__34538,map__34538__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__34538,map__34538__$1,args,model))
,"err":((function (map__34538,map__34538__$1,args,model){
return (function (p1__34533_SHARP_){return alert(p1__34533_SHARP_);
});})(map__34538,map__34538__$1,args,model))
};return obj34540;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__34541){var map__34543 = p__34541;var map__34543__$1 = ((cljs.core.seq_QMARK_.call(null,map__34543))?cljs.core.apply.call(null,cljs.core.hash_map,map__34543):map__34543);var args = map__34543__$1;var view_obj = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__34544,args){var map__34546 = p__34544;var map__34546__$1 = ((cljs.core.seq_QMARK_.call(null,map__34546))?cljs.core.apply.call(null,cljs.core.hash_map,map__34546):map__34546);var ctx = map__34546__$1;var root = cljs.core.get.call(null,map__34546__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__34546__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_34547 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_34548 = root.find("#mc_menubar");var isHide_34549 = cljs.core._EQ_.call(null,"none",menu_elem_34548.css("display"));if(should_apply_this_34547)
{if(isHide_34549)
{menu_elem_34548.show();
} else
{menu_elem_34548.hide();
}
} else
{}
return ctx;
});
app.action.ToggleMenuForce = (function ToggleMenuForce(p__34550,args){var map__34552 = p__34550;var map__34552__$1 = ((cljs.core.seq_QMARK_.call(null,map__34552))?cljs.core.apply.call(null,cljs.core.hash_map,map__34552):map__34552);var ctx = map__34552__$1;var root = cljs.core.get.call(null,map__34552__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__34552__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_34553 = true;var menu_elem_34554 = root.find("#mc_menubar");var isHide_34555 = cljs.core._EQ_.call(null,"none",menu_elem_34554.css("display"));if(should_apply_this_34553)
{if(isHide_34555)
{menu_elem_34554.show();
} else
{menu_elem_34554.hide();
}
} else
{}
return ctx;
});
app.action.OpenMenuIfPcMode = (function OpenMenuIfPcMode(p__34556,args){var map__34558 = p__34556;var map__34558__$1 = ((cljs.core.seq_QMARK_.call(null,map__34558))?cljs.core.apply.call(null,cljs.core.hash_map,map__34558):map__34558);var ctx = map__34558__$1;var root = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_34559 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),media_type);var menu_elem_34560 = root.find("#mc_menubar");if(should_apply_this_34559)
{menu_elem_34560.show();
} else
{}
return ctx;
});
app.action.CloseMenu = (function CloseMenu(p__34561,args){var map__34563 = p__34561;var map__34563__$1 = ((cljs.core.seq_QMARK_.call(null,map__34563))?cljs.core.apply.call(null,cljs.core.hash_map,map__34563):map__34563);var ctx = map__34563__$1;var root = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_34564 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_34565 = root.find("#mc_menubar");if(should_apply_this_34564)
{menu_elem_34565.hide();
} else
{}
return ctx;
});
app.action.DetectMediaQuery = (function DetectMediaQuery(ctx,_){var media_query_info = $("#media-query-info");var media_type = (function (){var pred__34569 = cljs.core._EQ_;var expr__34570 = media_query_info.css("left");if(cljs.core.truth_(pred__34569.call(null,"0px",expr__34570)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__34569.call(null,"1px",expr__34570)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__34569.call(null,"2px",expr__34570)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"media-type","media-type",-764436129),media_type);
});
app.action.AlertInfomationIfModelPageAtMobileDevice = (function AlertInfomationIfModelPageAtMobileDevice(ctx,p__34573){var map__34575 = p__34573;var map__34575__$1 = ((cljs.core.seq_QMARK_.call(null,map__34575))?cljs.core.apply.call(null,cljs.core.hash_map,map__34575):map__34575);var args = map__34575__$1;var curr_view = cljs.core.get.call(null,map__34575__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));if(cljs.core.truth_((function (){var and__3539__auto__ = cljs.core.some.call(null,((function (map__34575,map__34575__$1,args,curr_view){
return (function (p1__34572_SHARP_){return cljs.core._EQ_.call(null,p1__34572_SHARP_,curr_view);
});})(map__34575,map__34575__$1,args,curr_view))
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
{setTimeout(((function (map__34575,map__34575__$1,args,curr_view){
return (function (){return alert(constant.modelInformation);
});})(map__34575,map__34575__$1,args,curr_view))
,(1000));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.Keyword(null,"mobileInformation","mobileInformation",-789142128)], null),true);
} else
{return ctx;
}
});
app.action.Tracking = (function Tracking(ctx,p__34576){var map__34581 = p__34576;var map__34581__$1 = ((cljs.core.seq_QMARK_.call(null,map__34581))?cljs.core.apply.call(null,cljs.core.hash_map,map__34581):map__34581);var args = map__34581__$1;var where = cljs.core.get.call(null,map__34581__$1,new cljs.core.Keyword(null,"react-where","react-where",-127883626));var where2 = cljs.core.get.call(null,map__34581__$1,new cljs.core.Keyword(null,"react-where2","react-where2",611305798));var act = cljs.core.get.call(null,map__34581__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));var pred__34582_34585 = cljs.core._EQ_;var expr__34583_34586 = where;if(cljs.core.truth_(pred__34582_34585.call(null,new cljs.core.Keyword(null,"Router","Router",1225596421),expr__34583_34586)))
{googleTracking.page.call(null,cljs.core.name.call(null,act));
} else
{googleTracking.click.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,where))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,where2))));
}
return ctx;
});
