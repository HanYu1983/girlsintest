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
ComposeAction.cljs$lang$applyTo = (function (arglist__15073){
var fns = cljs.core.seq(arglist__15073);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__15074){var map__15076 = p__15074;var map__15076__$1 = ((cljs.core.seq_QMARK_.call(null,map__15076))?cljs.core.apply.call(null,cljs.core.hash_map,map__15076):map__15076);var args = map__15076__$1;var model = cljs.core.get.call(null,map__15076__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__15077){var map__15079 = p__15077;var map__15079__$1 = ((cljs.core.seq_QMARK_.call(null,map__15079))?cljs.core.apply.call(null,cljs.core.hash_map,map__15079):map__15079);var args = map__15079__$1;var basicUrl = cljs.core.get.call(null,map__15079__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__15081,p__15082){var map__15095 = p__15081;var map__15095__$1 = ((cljs.core.seq_QMARK_.call(null,map__15095))?cljs.core.apply.call(null,cljs.core.hash_map,map__15095):map__15095);var ctx = map__15095__$1;var root = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__15096 = p__15082;var map__15096__$1 = ((cljs.core.seq_QMARK_.call(null,map__15096))?cljs.core.apply.call(null,cljs.core.hash_map,map__15096):map__15096);var args = map__15096__$1;var curr_view = cljs.core.get.call(null,map__15096__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_15107 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__15097_15108 = cljs.core.seq.call(null,logoNames_15107);var chunk__15098_15109 = null;var count__15099_15110 = (0);var i__15100_15111 = (0);while(true){
if((i__15100_15111 < count__15099_15110))
{var vec__15101_15112 = cljs.core._nth.call(null,chunk__15098_15109,i__15100_15111);var names_15113 = cljs.core.nth.call(null,vec__15101_15112,(0),null);var logoName_15114 = cljs.core.nth.call(null,vec__15101_15112,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__15097_15108,chunk__15098_15109,count__15099_15110,i__15100_15111,vec__15101_15112,names_15113,logoName_15114,logoNames_15107,map__15095,map__15095__$1,ctx,root,map__15096,map__15096__$1,args,curr_view){
return (function (p1__15080_SHARP_){return cljs.core._EQ_.call(null,p1__15080_SHARP_,curr_view);
});})(seq__15097_15108,chunk__15098_15109,count__15099_15110,i__15100_15111,vec__15101_15112,names_15113,logoName_15114,logoNames_15107,map__15095,map__15095__$1,ctx,root,map__15096,map__15096__$1,args,curr_view))
,names_15113)))
{var G__15102_15115 = root.find(logoName_15114);G__15102_15115.fadeIn((400));
} else
{var G__15103_15116 = root.find(logoName_15114);G__15103_15116.hide();
}
{
var G__15117 = seq__15097_15108;
var G__15118 = chunk__15098_15109;
var G__15119 = count__15099_15110;
var G__15120 = (i__15100_15111 + (1));
seq__15097_15108 = G__15117;
chunk__15098_15109 = G__15118;
count__15099_15110 = G__15119;
i__15100_15111 = G__15120;
continue;
}
} else
{var temp__4126__auto___15121 = cljs.core.seq.call(null,seq__15097_15108);if(temp__4126__auto___15121)
{var seq__15097_15122__$1 = temp__4126__auto___15121;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15097_15122__$1))
{var c__4307__auto___15123 = cljs.core.chunk_first.call(null,seq__15097_15122__$1);{
var G__15124 = cljs.core.chunk_rest.call(null,seq__15097_15122__$1);
var G__15125 = c__4307__auto___15123;
var G__15126 = cljs.core.count.call(null,c__4307__auto___15123);
var G__15127 = (0);
seq__15097_15108 = G__15124;
chunk__15098_15109 = G__15125;
count__15099_15110 = G__15126;
i__15100_15111 = G__15127;
continue;
}
} else
{var vec__15104_15128 = cljs.core.first.call(null,seq__15097_15122__$1);var names_15129 = cljs.core.nth.call(null,vec__15104_15128,(0),null);var logoName_15130 = cljs.core.nth.call(null,vec__15104_15128,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__15097_15108,chunk__15098_15109,count__15099_15110,i__15100_15111,vec__15104_15128,names_15129,logoName_15130,seq__15097_15122__$1,temp__4126__auto___15121,logoNames_15107,map__15095,map__15095__$1,ctx,root,map__15096,map__15096__$1,args,curr_view){
return (function (p1__15080_SHARP_){return cljs.core._EQ_.call(null,p1__15080_SHARP_,curr_view);
});})(seq__15097_15108,chunk__15098_15109,count__15099_15110,i__15100_15111,vec__15104_15128,names_15129,logoName_15130,seq__15097_15122__$1,temp__4126__auto___15121,logoNames_15107,map__15095,map__15095__$1,ctx,root,map__15096,map__15096__$1,args,curr_view))
,names_15129)))
{var G__15105_15131 = root.find(logoName_15130);G__15105_15131.fadeIn((400));
} else
{var G__15106_15132 = root.find(logoName_15130);G__15106_15132.hide();
}
{
var G__15133 = cljs.core.next.call(null,seq__15097_15122__$1);
var G__15134 = null;
var G__15135 = (0);
var G__15136 = (0);
seq__15097_15108 = G__15133;
chunk__15098_15109 = G__15134;
count__15099_15110 = G__15135;
i__15100_15111 = G__15136;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__15138,p__15139){var map__15144 = p__15138;var map__15144__$1 = ((cljs.core.seq_QMARK_.call(null,map__15144))?cljs.core.apply.call(null,cljs.core.hash_map,map__15144):map__15144);var ctx = map__15144__$1;var root = cljs.core.get.call(null,map__15144__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__15145 = p__15139;var map__15145__$1 = ((cljs.core.seq_QMARK_.call(null,map__15145))?cljs.core.apply.call(null,cljs.core.hash_map,map__15145):map__15145);var args = map__15145__$1;var curr_view = cljs.core.get.call(null,map__15145__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_15148 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_15148,map__15144,map__15144__$1,ctx,root,map__15145,map__15145__$1,args,curr_view){
return (function (p1__15137_SHARP_){return cljs.core._EQ_.call(null,p1__15137_SHARP_,curr_view);
});})(shouldHide_15148,map__15144,map__15144__$1,ctx,root,map__15145,map__15145__$1,args,curr_view))
,shouldHide_15148)))
{var G__15146_15149 = root.find("#mc_footer");G__15146_15149.fadeOut();
} else
{var G__15147_15150 = root.find("#mc_footer");G__15147_15150.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__15153,p__15154){var map__15159 = p__15153;var map__15159__$1 = ((cljs.core.seq_QMARK_.call(null,map__15159))?cljs.core.apply.call(null,cljs.core.hash_map,map__15159):map__15159);var ctx = map__15159__$1;var router = cljs.core.get.call(null,map__15159__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__15160 = p__15154;var map__15160__$1 = ((cljs.core.seq_QMARK_.call(null,map__15160))?cljs.core.apply.call(null,cljs.core.hash_map,map__15160):map__15160);var args = map__15160__$1;var searchKey = cljs.core.get.call(null,map__15160__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__15160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__15160__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__15159,map__15159__$1,ctx,router,map__15160,map__15160__$1,args,searchKey,id,react_action){
return (function (p1__15151_SHARP_){return cljs.core._EQ_.call(null,p1__15151_SHARP_,react_action);
});})(map__15159,map__15159__$1,ctx,router,map__15160,map__15160__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__15159,map__15159__$1,ctx,router,map__15160,map__15160__$1,args,searchKey,id,react_action){
return (function (p1__15152_SHARP_){return cljs.core._EQ_.call(null,p1__15152_SHARP_,react_action);
});})(map__15159,map__15159__$1,ctx,router,map__15160,map__15160__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj15162 = {"trigger":true};return obj15162;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__15164){var map__15168 = p__15164;var map__15168__$1 = ((cljs.core.seq_QMARK_.call(null,map__15168))?cljs.core.apply.call(null,cljs.core.hash_map,map__15168):map__15168);var args = map__15168__$1;var model = cljs.core.get.call(null,map__15168__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj15170 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__15168,map__15168__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__15168,map__15168__$1,args,model))
,"err":((function (map__15168,map__15168__$1,args,model){
return (function (p1__15163_SHARP_){return alert(p1__15163_SHARP_);
});})(map__15168,map__15168__$1,args,model))
};return obj15170;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__15171){var map__15173 = p__15171;var map__15173__$1 = ((cljs.core.seq_QMARK_.call(null,map__15173))?cljs.core.apply.call(null,cljs.core.hash_map,map__15173):map__15173);var args = map__15173__$1;var view_obj = cljs.core.get.call(null,map__15173__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__15174,args){var map__15176 = p__15174;var map__15176__$1 = ((cljs.core.seq_QMARK_.call(null,map__15176))?cljs.core.apply.call(null,cljs.core.hash_map,map__15176):map__15176);var ctx = map__15176__$1;var root = cljs.core.get.call(null,map__15176__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__15176__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_15177 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_15178 = root.find("#mc_menubar");var isHide_15179 = cljs.core._EQ_.call(null,"none",menu_elem_15178.css("display"));if(should_apply_this_15177)
{if(isHide_15179)
{menu_elem_15178.show();
} else
{menu_elem_15178.hide();
}
} else
{}
return ctx;
});
app.action.OpenMenuIfPcMode = (function OpenMenuIfPcMode(p__15180,args){var map__15182 = p__15180;var map__15182__$1 = ((cljs.core.seq_QMARK_.call(null,map__15182))?cljs.core.apply.call(null,cljs.core.hash_map,map__15182):map__15182);var ctx = map__15182__$1;var root = cljs.core.get.call(null,map__15182__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__15182__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_15183 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),media_type);var menu_elem_15184 = root.find("#mc_menubar");if(should_apply_this_15183)
{menu_elem_15184.show();
} else
{}
return ctx;
});
app.action.CloseMenu = (function CloseMenu(p__15185,args){var map__15187 = p__15185;var map__15187__$1 = ((cljs.core.seq_QMARK_.call(null,map__15187))?cljs.core.apply.call(null,cljs.core.hash_map,map__15187):map__15187);var ctx = map__15187__$1;var root = cljs.core.get.call(null,map__15187__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__15187__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_15188 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_15189 = root.find("#mc_menubar");if(should_apply_this_15188)
{menu_elem_15189.hide();
} else
{}
return ctx;
});
app.action.DetectMediaQuery = (function DetectMediaQuery(ctx,_){var media_query_info = $("#media-query-info");var media_type = (function (){var pred__15193 = cljs.core._EQ_;var expr__15194 = media_query_info.css("left");if(cljs.core.truth_(pred__15193.call(null,"0px",expr__15194)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__15193.call(null,"1px",expr__15194)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__15193.call(null,"2px",expr__15194)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"media-type","media-type",-764436129),media_type);
});
app.action.AlertInfomationIfModelPageAtMobileDevice = (function AlertInfomationIfModelPageAtMobileDevice(ctx,p__15197){var map__15199 = p__15197;var map__15199__$1 = ((cljs.core.seq_QMARK_.call(null,map__15199))?cljs.core.apply.call(null,cljs.core.hash_map,map__15199):map__15199);var args = map__15199__$1;var curr_view = cljs.core.get.call(null,map__15199__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));if(cljs.core.truth_((function (){var and__3539__auto__ = cljs.core.some.call(null,((function (map__15199,map__15199__$1,args,curr_view){
return (function (p1__15196_SHARP_){return cljs.core._EQ_.call(null,p1__15196_SHARP_,curr_view);
});})(map__15199,map__15199__$1,args,curr_view))
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
{alert(constant.modelInformation);
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.Keyword(null,"mobileInformation","mobileInformation",-789142128)], null),true);
} else
{return ctx;
}
});
