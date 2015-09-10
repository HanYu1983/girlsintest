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
ComposeAction.cljs$lang$applyTo = (function (arglist__16515){
var fns = cljs.core.seq(arglist__16515);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__16516){var map__16518 = p__16516;var map__16518__$1 = ((cljs.core.seq_QMARK_.call(null,map__16518))?cljs.core.apply.call(null,cljs.core.hash_map,map__16518):map__16518);var args = map__16518__$1;var model = cljs.core.get.call(null,map__16518__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__16519){var map__16521 = p__16519;var map__16521__$1 = ((cljs.core.seq_QMARK_.call(null,map__16521))?cljs.core.apply.call(null,cljs.core.hash_map,map__16521):map__16521);var args = map__16521__$1;var basicUrl = cljs.core.get.call(null,map__16521__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__16523,p__16524){var map__16537 = p__16523;var map__16537__$1 = ((cljs.core.seq_QMARK_.call(null,map__16537))?cljs.core.apply.call(null,cljs.core.hash_map,map__16537):map__16537);var ctx = map__16537__$1;var root = cljs.core.get.call(null,map__16537__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__16538 = p__16524;var map__16538__$1 = ((cljs.core.seq_QMARK_.call(null,map__16538))?cljs.core.apply.call(null,cljs.core.hash_map,map__16538):map__16538);var args = map__16538__$1;var curr_view = cljs.core.get.call(null,map__16538__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_16549 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__16539_16550 = cljs.core.seq.call(null,logoNames_16549);var chunk__16540_16551 = null;var count__16541_16552 = (0);var i__16542_16553 = (0);while(true){
if((i__16542_16553 < count__16541_16552))
{var vec__16543_16554 = cljs.core._nth.call(null,chunk__16540_16551,i__16542_16553);var names_16555 = cljs.core.nth.call(null,vec__16543_16554,(0),null);var logoName_16556 = cljs.core.nth.call(null,vec__16543_16554,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__16539_16550,chunk__16540_16551,count__16541_16552,i__16542_16553,vec__16543_16554,names_16555,logoName_16556,logoNames_16549,map__16537,map__16537__$1,ctx,root,map__16538,map__16538__$1,args,curr_view){
return (function (p1__16522_SHARP_){return cljs.core._EQ_.call(null,p1__16522_SHARP_,curr_view);
});})(seq__16539_16550,chunk__16540_16551,count__16541_16552,i__16542_16553,vec__16543_16554,names_16555,logoName_16556,logoNames_16549,map__16537,map__16537__$1,ctx,root,map__16538,map__16538__$1,args,curr_view))
,names_16555)))
{var G__16544_16557 = root.find(logoName_16556);G__16544_16557.fadeIn((400));
} else
{var G__16545_16558 = root.find(logoName_16556);G__16545_16558.hide();
}
{
var G__16559 = seq__16539_16550;
var G__16560 = chunk__16540_16551;
var G__16561 = count__16541_16552;
var G__16562 = (i__16542_16553 + (1));
seq__16539_16550 = G__16559;
chunk__16540_16551 = G__16560;
count__16541_16552 = G__16561;
i__16542_16553 = G__16562;
continue;
}
} else
{var temp__4126__auto___16563 = cljs.core.seq.call(null,seq__16539_16550);if(temp__4126__auto___16563)
{var seq__16539_16564__$1 = temp__4126__auto___16563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16539_16564__$1))
{var c__4307__auto___16565 = cljs.core.chunk_first.call(null,seq__16539_16564__$1);{
var G__16566 = cljs.core.chunk_rest.call(null,seq__16539_16564__$1);
var G__16567 = c__4307__auto___16565;
var G__16568 = cljs.core.count.call(null,c__4307__auto___16565);
var G__16569 = (0);
seq__16539_16550 = G__16566;
chunk__16540_16551 = G__16567;
count__16541_16552 = G__16568;
i__16542_16553 = G__16569;
continue;
}
} else
{var vec__16546_16570 = cljs.core.first.call(null,seq__16539_16564__$1);var names_16571 = cljs.core.nth.call(null,vec__16546_16570,(0),null);var logoName_16572 = cljs.core.nth.call(null,vec__16546_16570,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__16539_16550,chunk__16540_16551,count__16541_16552,i__16542_16553,vec__16546_16570,names_16571,logoName_16572,seq__16539_16564__$1,temp__4126__auto___16563,logoNames_16549,map__16537,map__16537__$1,ctx,root,map__16538,map__16538__$1,args,curr_view){
return (function (p1__16522_SHARP_){return cljs.core._EQ_.call(null,p1__16522_SHARP_,curr_view);
});})(seq__16539_16550,chunk__16540_16551,count__16541_16552,i__16542_16553,vec__16546_16570,names_16571,logoName_16572,seq__16539_16564__$1,temp__4126__auto___16563,logoNames_16549,map__16537,map__16537__$1,ctx,root,map__16538,map__16538__$1,args,curr_view))
,names_16571)))
{var G__16547_16573 = root.find(logoName_16572);G__16547_16573.fadeIn((400));
} else
{var G__16548_16574 = root.find(logoName_16572);G__16548_16574.hide();
}
{
var G__16575 = cljs.core.next.call(null,seq__16539_16564__$1);
var G__16576 = null;
var G__16577 = (0);
var G__16578 = (0);
seq__16539_16550 = G__16575;
chunk__16540_16551 = G__16576;
count__16541_16552 = G__16577;
i__16542_16553 = G__16578;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__16580,p__16581){var map__16586 = p__16580;var map__16586__$1 = ((cljs.core.seq_QMARK_.call(null,map__16586))?cljs.core.apply.call(null,cljs.core.hash_map,map__16586):map__16586);var ctx = map__16586__$1;var root = cljs.core.get.call(null,map__16586__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__16587 = p__16581;var map__16587__$1 = ((cljs.core.seq_QMARK_.call(null,map__16587))?cljs.core.apply.call(null,cljs.core.hash_map,map__16587):map__16587);var args = map__16587__$1;var curr_view = cljs.core.get.call(null,map__16587__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_16590 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_16590,map__16586,map__16586__$1,ctx,root,map__16587,map__16587__$1,args,curr_view){
return (function (p1__16579_SHARP_){return cljs.core._EQ_.call(null,p1__16579_SHARP_,curr_view);
});})(shouldHide_16590,map__16586,map__16586__$1,ctx,root,map__16587,map__16587__$1,args,curr_view))
,shouldHide_16590)))
{var G__16588_16591 = root.find("#mc_footer");G__16588_16591.fadeOut();
} else
{var G__16589_16592 = root.find("#mc_footer");G__16589_16592.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__16595,p__16596){var map__16601 = p__16595;var map__16601__$1 = ((cljs.core.seq_QMARK_.call(null,map__16601))?cljs.core.apply.call(null,cljs.core.hash_map,map__16601):map__16601);var ctx = map__16601__$1;var router = cljs.core.get.call(null,map__16601__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__16602 = p__16596;var map__16602__$1 = ((cljs.core.seq_QMARK_.call(null,map__16602))?cljs.core.apply.call(null,cljs.core.hash_map,map__16602):map__16602);var args = map__16602__$1;var searchKey = cljs.core.get.call(null,map__16602__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__16602__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__16602__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__16601,map__16601__$1,ctx,router,map__16602,map__16602__$1,args,searchKey,id,react_action){
return (function (p1__16593_SHARP_){return cljs.core._EQ_.call(null,p1__16593_SHARP_,react_action);
});})(map__16601,map__16601__$1,ctx,router,map__16602,map__16602__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__16601,map__16601__$1,ctx,router,map__16602,map__16602__$1,args,searchKey,id,react_action){
return (function (p1__16594_SHARP_){return cljs.core._EQ_.call(null,p1__16594_SHARP_,react_action);
});})(map__16601,map__16601__$1,ctx,router,map__16602,map__16602__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj16604 = {"trigger":true};return obj16604;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__16606){var map__16610 = p__16606;var map__16610__$1 = ((cljs.core.seq_QMARK_.call(null,map__16610))?cljs.core.apply.call(null,cljs.core.hash_map,map__16610):map__16610);var args = map__16610__$1;var model = cljs.core.get.call(null,map__16610__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj16612 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__16610,map__16610__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__16610,map__16610__$1,args,model))
,"err":((function (map__16610,map__16610__$1,args,model){
return (function (p1__16605_SHARP_){return alert(p1__16605_SHARP_);
});})(map__16610,map__16610__$1,args,model))
};return obj16612;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__16613){var map__16615 = p__16613;var map__16615__$1 = ((cljs.core.seq_QMARK_.call(null,map__16615))?cljs.core.apply.call(null,cljs.core.hash_map,map__16615):map__16615);var args = map__16615__$1;var view_obj = cljs.core.get.call(null,map__16615__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__16616,args){var map__16618 = p__16616;var map__16618__$1 = ((cljs.core.seq_QMARK_.call(null,map__16618))?cljs.core.apply.call(null,cljs.core.hash_map,map__16618):map__16618);var ctx = map__16618__$1;var root = cljs.core.get.call(null,map__16618__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__16618__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_16619 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_16620 = root.find("#mc_menubar");var isHide_16621 = cljs.core._EQ_.call(null,"none",menu_elem_16620.css("display"));if(should_apply_this_16619)
{if(isHide_16621)
{menu_elem_16620.show();
} else
{menu_elem_16620.hide();
}
} else
{}
return ctx;
});
app.action.OpenMenuIfPcMode = (function OpenMenuIfPcMode(p__16622,args){var map__16624 = p__16622;var map__16624__$1 = ((cljs.core.seq_QMARK_.call(null,map__16624))?cljs.core.apply.call(null,cljs.core.hash_map,map__16624):map__16624);var ctx = map__16624__$1;var root = cljs.core.get.call(null,map__16624__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__16624__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_16625 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),media_type);var menu_elem_16626 = root.find("#mc_menubar");if(should_apply_this_16625)
{menu_elem_16626.show();
} else
{}
return ctx;
});
app.action.CloseMenu = (function CloseMenu(p__16627,args){var map__16629 = p__16627;var map__16629__$1 = ((cljs.core.seq_QMARK_.call(null,map__16629))?cljs.core.apply.call(null,cljs.core.hash_map,map__16629):map__16629);var ctx = map__16629__$1;var root = cljs.core.get.call(null,map__16629__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__16629__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_16630 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_16631 = root.find("#mc_menubar");if(should_apply_this_16630)
{menu_elem_16631.hide();
} else
{}
return ctx;
});
app.action.DetectMediaQuery = (function DetectMediaQuery(ctx,_){var media_query_info = $("#media-query-info");var media_type = (function (){var pred__16635 = cljs.core._EQ_;var expr__16636 = media_query_info.css("left");if(cljs.core.truth_(pred__16635.call(null,"0px",expr__16636)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__16635.call(null,"1px",expr__16636)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__16635.call(null,"2px",expr__16636)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"media-type","media-type",-764436129),media_type);
});
