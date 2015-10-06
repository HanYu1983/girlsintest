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
ComposeAction.cljs$lang$applyTo = (function (arglist__14241){
var fns = cljs.core.seq(arglist__14241);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__14242){var map__14244 = p__14242;var map__14244__$1 = ((cljs.core.seq_QMARK_.call(null,map__14244))?cljs.core.apply.call(null,cljs.core.hash_map,map__14244):map__14244);var args = map__14244__$1;var model = cljs.core.get.call(null,map__14244__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__14245){var map__14247 = p__14245;var map__14247__$1 = ((cljs.core.seq_QMARK_.call(null,map__14247))?cljs.core.apply.call(null,cljs.core.hash_map,map__14247):map__14247);var args = map__14247__$1;var basicUrl = cljs.core.get.call(null,map__14247__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__14249,p__14250){var map__14263 = p__14249;var map__14263__$1 = ((cljs.core.seq_QMARK_.call(null,map__14263))?cljs.core.apply.call(null,cljs.core.hash_map,map__14263):map__14263);var ctx = map__14263__$1;var root = cljs.core.get.call(null,map__14263__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__14264 = p__14250;var map__14264__$1 = ((cljs.core.seq_QMARK_.call(null,map__14264))?cljs.core.apply.call(null,cljs.core.hash_map,map__14264):map__14264);var args = map__14264__$1;var curr_view = cljs.core.get.call(null,map__14264__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_14275 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__14265_14276 = cljs.core.seq.call(null,logoNames_14275);var chunk__14266_14277 = null;var count__14267_14278 = (0);var i__14268_14279 = (0);while(true){
if((i__14268_14279 < count__14267_14278))
{var vec__14269_14280 = cljs.core._nth.call(null,chunk__14266_14277,i__14268_14279);var names_14281 = cljs.core.nth.call(null,vec__14269_14280,(0),null);var logoName_14282 = cljs.core.nth.call(null,vec__14269_14280,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__14265_14276,chunk__14266_14277,count__14267_14278,i__14268_14279,vec__14269_14280,names_14281,logoName_14282,logoNames_14275,map__14263,map__14263__$1,ctx,root,map__14264,map__14264__$1,args,curr_view){
return (function (p1__14248_SHARP_){return cljs.core._EQ_.call(null,p1__14248_SHARP_,curr_view);
});})(seq__14265_14276,chunk__14266_14277,count__14267_14278,i__14268_14279,vec__14269_14280,names_14281,logoName_14282,logoNames_14275,map__14263,map__14263__$1,ctx,root,map__14264,map__14264__$1,args,curr_view))
,names_14281)))
{var G__14270_14283 = root.find(logoName_14282);G__14270_14283.fadeIn((400));
} else
{var G__14271_14284 = root.find(logoName_14282);G__14271_14284.hide();
}
{
var G__14285 = seq__14265_14276;
var G__14286 = chunk__14266_14277;
var G__14287 = count__14267_14278;
var G__14288 = (i__14268_14279 + (1));
seq__14265_14276 = G__14285;
chunk__14266_14277 = G__14286;
count__14267_14278 = G__14287;
i__14268_14279 = G__14288;
continue;
}
} else
{var temp__4126__auto___14289 = cljs.core.seq.call(null,seq__14265_14276);if(temp__4126__auto___14289)
{var seq__14265_14290__$1 = temp__4126__auto___14289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14265_14290__$1))
{var c__4307__auto___14291 = cljs.core.chunk_first.call(null,seq__14265_14290__$1);{
var G__14292 = cljs.core.chunk_rest.call(null,seq__14265_14290__$1);
var G__14293 = c__4307__auto___14291;
var G__14294 = cljs.core.count.call(null,c__4307__auto___14291);
var G__14295 = (0);
seq__14265_14276 = G__14292;
chunk__14266_14277 = G__14293;
count__14267_14278 = G__14294;
i__14268_14279 = G__14295;
continue;
}
} else
{var vec__14272_14296 = cljs.core.first.call(null,seq__14265_14290__$1);var names_14297 = cljs.core.nth.call(null,vec__14272_14296,(0),null);var logoName_14298 = cljs.core.nth.call(null,vec__14272_14296,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__14265_14276,chunk__14266_14277,count__14267_14278,i__14268_14279,vec__14272_14296,names_14297,logoName_14298,seq__14265_14290__$1,temp__4126__auto___14289,logoNames_14275,map__14263,map__14263__$1,ctx,root,map__14264,map__14264__$1,args,curr_view){
return (function (p1__14248_SHARP_){return cljs.core._EQ_.call(null,p1__14248_SHARP_,curr_view);
});})(seq__14265_14276,chunk__14266_14277,count__14267_14278,i__14268_14279,vec__14272_14296,names_14297,logoName_14298,seq__14265_14290__$1,temp__4126__auto___14289,logoNames_14275,map__14263,map__14263__$1,ctx,root,map__14264,map__14264__$1,args,curr_view))
,names_14297)))
{var G__14273_14299 = root.find(logoName_14298);G__14273_14299.fadeIn((400));
} else
{var G__14274_14300 = root.find(logoName_14298);G__14274_14300.hide();
}
{
var G__14301 = cljs.core.next.call(null,seq__14265_14290__$1);
var G__14302 = null;
var G__14303 = (0);
var G__14304 = (0);
seq__14265_14276 = G__14301;
chunk__14266_14277 = G__14302;
count__14267_14278 = G__14303;
i__14268_14279 = G__14304;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__14306,p__14307){var map__14312 = p__14306;var map__14312__$1 = ((cljs.core.seq_QMARK_.call(null,map__14312))?cljs.core.apply.call(null,cljs.core.hash_map,map__14312):map__14312);var ctx = map__14312__$1;var root = cljs.core.get.call(null,map__14312__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__14313 = p__14307;var map__14313__$1 = ((cljs.core.seq_QMARK_.call(null,map__14313))?cljs.core.apply.call(null,cljs.core.hash_map,map__14313):map__14313);var args = map__14313__$1;var curr_view = cljs.core.get.call(null,map__14313__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_14316 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_14316,map__14312,map__14312__$1,ctx,root,map__14313,map__14313__$1,args,curr_view){
return (function (p1__14305_SHARP_){return cljs.core._EQ_.call(null,p1__14305_SHARP_,curr_view);
});})(shouldHide_14316,map__14312,map__14312__$1,ctx,root,map__14313,map__14313__$1,args,curr_view))
,shouldHide_14316)))
{var G__14314_14317 = root.find("#mc_footer");G__14314_14317.fadeOut();
} else
{var G__14315_14318 = root.find("#mc_footer");G__14315_14318.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__14321,p__14322){var map__14327 = p__14321;var map__14327__$1 = ((cljs.core.seq_QMARK_.call(null,map__14327))?cljs.core.apply.call(null,cljs.core.hash_map,map__14327):map__14327);var ctx = map__14327__$1;var router = cljs.core.get.call(null,map__14327__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__14328 = p__14322;var map__14328__$1 = ((cljs.core.seq_QMARK_.call(null,map__14328))?cljs.core.apply.call(null,cljs.core.hash_map,map__14328):map__14328);var args = map__14328__$1;var searchKey = cljs.core.get.call(null,map__14328__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__14328__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__14328__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__14327,map__14327__$1,ctx,router,map__14328,map__14328__$1,args,searchKey,id,react_action){
return (function (p1__14319_SHARP_){return cljs.core._EQ_.call(null,p1__14319_SHARP_,react_action);
});})(map__14327,map__14327__$1,ctx,router,map__14328,map__14328__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__14327,map__14327__$1,ctx,router,map__14328,map__14328__$1,args,searchKey,id,react_action){
return (function (p1__14320_SHARP_){return cljs.core._EQ_.call(null,p1__14320_SHARP_,react_action);
});})(map__14327,map__14327__$1,ctx,router,map__14328,map__14328__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj14330 = {"trigger":true};return obj14330;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__14332){var map__14336 = p__14332;var map__14336__$1 = ((cljs.core.seq_QMARK_.call(null,map__14336))?cljs.core.apply.call(null,cljs.core.hash_map,map__14336):map__14336);var args = map__14336__$1;var model = cljs.core.get.call(null,map__14336__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj14338 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__14336,map__14336__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__14336,map__14336__$1,args,model))
,"err":((function (map__14336,map__14336__$1,args,model){
return (function (p1__14331_SHARP_){return alert(p1__14331_SHARP_);
});})(map__14336,map__14336__$1,args,model))
};return obj14338;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__14339){var map__14341 = p__14339;var map__14341__$1 = ((cljs.core.seq_QMARK_.call(null,map__14341))?cljs.core.apply.call(null,cljs.core.hash_map,map__14341):map__14341);var args = map__14341__$1;var view_obj = cljs.core.get.call(null,map__14341__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__14342,args){var map__14344 = p__14342;var map__14344__$1 = ((cljs.core.seq_QMARK_.call(null,map__14344))?cljs.core.apply.call(null,cljs.core.hash_map,map__14344):map__14344);var ctx = map__14344__$1;var root = cljs.core.get.call(null,map__14344__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__14344__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_14345 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_14346 = root.find("#mc_menubar");var isHide_14347 = cljs.core._EQ_.call(null,"none",menu_elem_14346.css("display"));if(should_apply_this_14345)
{if(isHide_14347)
{menu_elem_14346.show();
} else
{menu_elem_14346.hide();
}
} else
{}
return ctx;
});
app.action.ToggleMenuForce = (function ToggleMenuForce(p__14348,args){var map__14350 = p__14348;var map__14350__$1 = ((cljs.core.seq_QMARK_.call(null,map__14350))?cljs.core.apply.call(null,cljs.core.hash_map,map__14350):map__14350);var ctx = map__14350__$1;var root = cljs.core.get.call(null,map__14350__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__14350__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_14351 = true;var menu_elem_14352 = root.find("#mc_menubar");var isHide_14353 = cljs.core._EQ_.call(null,"none",menu_elem_14352.css("display"));if(should_apply_this_14351)
{if(isHide_14353)
{menu_elem_14352.show();
} else
{menu_elem_14352.hide();
}
} else
{}
return ctx;
});
app.action.OpenMenuIfPcMode = (function OpenMenuIfPcMode(p__14354,args){var map__14356 = p__14354;var map__14356__$1 = ((cljs.core.seq_QMARK_.call(null,map__14356))?cljs.core.apply.call(null,cljs.core.hash_map,map__14356):map__14356);var ctx = map__14356__$1;var root = cljs.core.get.call(null,map__14356__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__14356__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_14357 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),media_type);var menu_elem_14358 = root.find("#mc_menubar");if(should_apply_this_14357)
{menu_elem_14358.show();
} else
{}
return ctx;
});
app.action.CloseMenu = (function CloseMenu(p__14359,args){var map__14361 = p__14359;var map__14361__$1 = ((cljs.core.seq_QMARK_.call(null,map__14361))?cljs.core.apply.call(null,cljs.core.hash_map,map__14361):map__14361);var ctx = map__14361__$1;var root = cljs.core.get.call(null,map__14361__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__14361__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_14362 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_14363 = root.find("#mc_menubar");if(should_apply_this_14362)
{menu_elem_14363.hide();
} else
{}
return ctx;
});
app.action.DetectMediaQuery = (function DetectMediaQuery(ctx,_){var media_query_info = $("#media-query-info");var media_type = (function (){var pred__14367 = cljs.core._EQ_;var expr__14368 = media_query_info.css("left");if(cljs.core.truth_(pred__14367.call(null,"0px",expr__14368)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__14367.call(null,"1px",expr__14368)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__14367.call(null,"2px",expr__14368)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"media-type","media-type",-764436129),media_type);
});
app.action.AlertInfomationIfModelPageAtMobileDevice = (function AlertInfomationIfModelPageAtMobileDevice(ctx,p__14371){var map__14373 = p__14371;var map__14373__$1 = ((cljs.core.seq_QMARK_.call(null,map__14373))?cljs.core.apply.call(null,cljs.core.hash_map,map__14373):map__14373);var args = map__14373__$1;var curr_view = cljs.core.get.call(null,map__14373__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));if(cljs.core.truth_((function (){var and__3539__auto__ = cljs.core.some.call(null,((function (map__14373,map__14373__$1,args,curr_view){
return (function (p1__14370_SHARP_){return cljs.core._EQ_.call(null,p1__14370_SHARP_,curr_view);
});})(map__14373,map__14373__$1,args,curr_view))
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
{setTimeout(((function (map__14373,map__14373__$1,args,curr_view){
return (function (){return alert(constant.modelInformation);
});})(map__14373,map__14373__$1,args,curr_view))
,(1000));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.Keyword(null,"mobileInformation","mobileInformation",-789142128)], null),true);
} else
{return ctx;
}
});
app.action.Tracking = (function Tracking(ctx,p__14374){var map__14379 = p__14374;var map__14379__$1 = ((cljs.core.seq_QMARK_.call(null,map__14379))?cljs.core.apply.call(null,cljs.core.hash_map,map__14379):map__14379);var args = map__14379__$1;var where = cljs.core.get.call(null,map__14379__$1,new cljs.core.Keyword(null,"react-where","react-where",-127883626));var where2 = cljs.core.get.call(null,map__14379__$1,new cljs.core.Keyword(null,"react-where2","react-where2",611305798));var act = cljs.core.get.call(null,map__14379__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));var pred__14380_14383 = cljs.core._EQ_;var expr__14381_14384 = where;if(cljs.core.truth_(pred__14380_14383.call(null,new cljs.core.Keyword(null,"Router","Router",1225596421),expr__14381_14384)))
{googleTracking.page.call(null,cljs.core.name.call(null,act));
} else
{googleTracking.click.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,where))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,where2))));
}
return ctx;
});
app.action.WindowScrollToZero = (function WindowScrollToZero(ctx,_){window.scrollTo((0),(0));
return ctx;
});
