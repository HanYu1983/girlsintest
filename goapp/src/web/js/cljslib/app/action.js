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
ComposeAction.cljs$lang$applyTo = (function (arglist__23349){
var fns = cljs.core.seq(arglist__23349);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__23350){var map__23352 = p__23350;var map__23352__$1 = ((cljs.core.seq_QMARK_.call(null,map__23352))?cljs.core.apply.call(null,cljs.core.hash_map,map__23352):map__23352);var args = map__23352__$1;var model = cljs.core.get.call(null,map__23352__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__23353){var map__23355 = p__23353;var map__23355__$1 = ((cljs.core.seq_QMARK_.call(null,map__23355))?cljs.core.apply.call(null,cljs.core.hash_map,map__23355):map__23355);var args = map__23355__$1;var basicUrl = cljs.core.get.call(null,map__23355__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__23357,p__23358){var map__23371 = p__23357;var map__23371__$1 = ((cljs.core.seq_QMARK_.call(null,map__23371))?cljs.core.apply.call(null,cljs.core.hash_map,map__23371):map__23371);var ctx = map__23371__$1;var root = cljs.core.get.call(null,map__23371__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__23372 = p__23358;var map__23372__$1 = ((cljs.core.seq_QMARK_.call(null,map__23372))?cljs.core.apply.call(null,cljs.core.hash_map,map__23372):map__23372);var args = map__23372__$1;var curr_view = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_23383 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__23373_23384 = cljs.core.seq.call(null,logoNames_23383);var chunk__23374_23385 = null;var count__23375_23386 = (0);var i__23376_23387 = (0);while(true){
if((i__23376_23387 < count__23375_23386))
{var vec__23377_23388 = cljs.core._nth.call(null,chunk__23374_23385,i__23376_23387);var names_23389 = cljs.core.nth.call(null,vec__23377_23388,(0),null);var logoName_23390 = cljs.core.nth.call(null,vec__23377_23388,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__23373_23384,chunk__23374_23385,count__23375_23386,i__23376_23387,vec__23377_23388,names_23389,logoName_23390,logoNames_23383,map__23371,map__23371__$1,ctx,root,map__23372,map__23372__$1,args,curr_view){
return (function (p1__23356_SHARP_){return cljs.core._EQ_.call(null,p1__23356_SHARP_,curr_view);
});})(seq__23373_23384,chunk__23374_23385,count__23375_23386,i__23376_23387,vec__23377_23388,names_23389,logoName_23390,logoNames_23383,map__23371,map__23371__$1,ctx,root,map__23372,map__23372__$1,args,curr_view))
,names_23389)))
{var G__23378_23391 = root.find(logoName_23390);G__23378_23391.fadeIn((400));
} else
{var G__23379_23392 = root.find(logoName_23390);G__23379_23392.hide();
}
{
var G__23393 = seq__23373_23384;
var G__23394 = chunk__23374_23385;
var G__23395 = count__23375_23386;
var G__23396 = (i__23376_23387 + (1));
seq__23373_23384 = G__23393;
chunk__23374_23385 = G__23394;
count__23375_23386 = G__23395;
i__23376_23387 = G__23396;
continue;
}
} else
{var temp__4126__auto___23397 = cljs.core.seq.call(null,seq__23373_23384);if(temp__4126__auto___23397)
{var seq__23373_23398__$1 = temp__4126__auto___23397;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23373_23398__$1))
{var c__4307__auto___23399 = cljs.core.chunk_first.call(null,seq__23373_23398__$1);{
var G__23400 = cljs.core.chunk_rest.call(null,seq__23373_23398__$1);
var G__23401 = c__4307__auto___23399;
var G__23402 = cljs.core.count.call(null,c__4307__auto___23399);
var G__23403 = (0);
seq__23373_23384 = G__23400;
chunk__23374_23385 = G__23401;
count__23375_23386 = G__23402;
i__23376_23387 = G__23403;
continue;
}
} else
{var vec__23380_23404 = cljs.core.first.call(null,seq__23373_23398__$1);var names_23405 = cljs.core.nth.call(null,vec__23380_23404,(0),null);var logoName_23406 = cljs.core.nth.call(null,vec__23380_23404,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__23373_23384,chunk__23374_23385,count__23375_23386,i__23376_23387,vec__23380_23404,names_23405,logoName_23406,seq__23373_23398__$1,temp__4126__auto___23397,logoNames_23383,map__23371,map__23371__$1,ctx,root,map__23372,map__23372__$1,args,curr_view){
return (function (p1__23356_SHARP_){return cljs.core._EQ_.call(null,p1__23356_SHARP_,curr_view);
});})(seq__23373_23384,chunk__23374_23385,count__23375_23386,i__23376_23387,vec__23380_23404,names_23405,logoName_23406,seq__23373_23398__$1,temp__4126__auto___23397,logoNames_23383,map__23371,map__23371__$1,ctx,root,map__23372,map__23372__$1,args,curr_view))
,names_23405)))
{var G__23381_23407 = root.find(logoName_23406);G__23381_23407.fadeIn((400));
} else
{var G__23382_23408 = root.find(logoName_23406);G__23382_23408.hide();
}
{
var G__23409 = cljs.core.next.call(null,seq__23373_23398__$1);
var G__23410 = null;
var G__23411 = (0);
var G__23412 = (0);
seq__23373_23384 = G__23409;
chunk__23374_23385 = G__23410;
count__23375_23386 = G__23411;
i__23376_23387 = G__23412;
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
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__23414,p__23415){var map__23420 = p__23414;var map__23420__$1 = ((cljs.core.seq_QMARK_.call(null,map__23420))?cljs.core.apply.call(null,cljs.core.hash_map,map__23420):map__23420);var ctx = map__23420__$1;var root = cljs.core.get.call(null,map__23420__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__23421 = p__23415;var map__23421__$1 = ((cljs.core.seq_QMARK_.call(null,map__23421))?cljs.core.apply.call(null,cljs.core.hash_map,map__23421):map__23421);var args = map__23421__$1;var curr_view = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_23424 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_23424,map__23420,map__23420__$1,ctx,root,map__23421,map__23421__$1,args,curr_view){
return (function (p1__23413_SHARP_){return cljs.core._EQ_.call(null,p1__23413_SHARP_,curr_view);
});})(shouldHide_23424,map__23420,map__23420__$1,ctx,root,map__23421,map__23421__$1,args,curr_view))
,shouldHide_23424)))
{var G__23422_23425 = root.find("#mc_footer");G__23422_23425.fadeOut();
} else
{var G__23423_23426 = root.find("#mc_footer");G__23423_23426.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__23429,p__23430){var map__23435 = p__23429;var map__23435__$1 = ((cljs.core.seq_QMARK_.call(null,map__23435))?cljs.core.apply.call(null,cljs.core.hash_map,map__23435):map__23435);var ctx = map__23435__$1;var router = cljs.core.get.call(null,map__23435__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__23436 = p__23430;var map__23436__$1 = ((cljs.core.seq_QMARK_.call(null,map__23436))?cljs.core.apply.call(null,cljs.core.hash_map,map__23436):map__23436);var args = map__23436__$1;var searchKey = cljs.core.get.call(null,map__23436__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__23436__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__23436__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__23435,map__23435__$1,ctx,router,map__23436,map__23436__$1,args,searchKey,id,react_action){
return (function (p1__23427_SHARP_){return cljs.core._EQ_.call(null,p1__23427_SHARP_,react_action);
});})(map__23435,map__23435__$1,ctx,router,map__23436,map__23436__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__23435,map__23435__$1,ctx,router,map__23436,map__23436__$1,args,searchKey,id,react_action){
return (function (p1__23428_SHARP_){return cljs.core._EQ_.call(null,p1__23428_SHARP_,react_action);
});})(map__23435,map__23435__$1,ctx,router,map__23436,map__23436__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj23438 = {"trigger":true};return obj23438;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__23440){var map__23444 = p__23440;var map__23444__$1 = ((cljs.core.seq_QMARK_.call(null,map__23444))?cljs.core.apply.call(null,cljs.core.hash_map,map__23444):map__23444);var args = map__23444__$1;var model = cljs.core.get.call(null,map__23444__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj23446 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__23444,map__23444__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__23444,map__23444__$1,args,model))
,"err":((function (map__23444,map__23444__$1,args,model){
return (function (p1__23439_SHARP_){return alert(p1__23439_SHARP_);
});})(map__23444,map__23444__$1,args,model))
};return obj23446;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__23447){var map__23449 = p__23447;var map__23449__$1 = ((cljs.core.seq_QMARK_.call(null,map__23449))?cljs.core.apply.call(null,cljs.core.hash_map,map__23449):map__23449);var args = map__23449__$1;var view_obj = cljs.core.get.call(null,map__23449__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
app.action.ToggleMenu = (function ToggleMenu(p__23450,args){var map__23452 = p__23450;var map__23452__$1 = ((cljs.core.seq_QMARK_.call(null,map__23452))?cljs.core.apply.call(null,cljs.core.hash_map,map__23452):map__23452);var ctx = map__23452__$1;var root = cljs.core.get.call(null,map__23452__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__23452__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_23453 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_23454 = root.find("#mc_menubar");var isHide_23455 = cljs.core._EQ_.call(null,"none",menu_elem_23454.css("display"));if(should_apply_this_23453)
{if(isHide_23455)
{menu_elem_23454.show();
} else
{menu_elem_23454.hide();
}
} else
{}
return ctx;
});
app.action.ToggleMenuForce = (function ToggleMenuForce(p__23456,args){var map__23458 = p__23456;var map__23458__$1 = ((cljs.core.seq_QMARK_.call(null,map__23458))?cljs.core.apply.call(null,cljs.core.hash_map,map__23458):map__23458);var ctx = map__23458__$1;var root = cljs.core.get.call(null,map__23458__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__23458__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_23459 = true;var menu_elem_23460 = root.find("#mc_menubar");var isHide_23461 = cljs.core._EQ_.call(null,"none",menu_elem_23460.css("display"));if(should_apply_this_23459)
{if(isHide_23461)
{menu_elem_23460.show();
} else
{menu_elem_23460.hide();
}
} else
{}
return ctx;
});
app.action.OpenMenuIfPcMode = (function OpenMenuIfPcMode(p__23462,args){var map__23464 = p__23462;var map__23464__$1 = ((cljs.core.seq_QMARK_.call(null,map__23464))?cljs.core.apply.call(null,cljs.core.hash_map,map__23464):map__23464);var ctx = map__23464__$1;var root = cljs.core.get.call(null,map__23464__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__23464__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_23465 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),media_type);var menu_elem_23466 = root.find("#mc_menubar");if(should_apply_this_23465)
{menu_elem_23466.show();
} else
{}
return ctx;
});
app.action.CloseMenu = (function CloseMenu(p__23467,args){var map__23469 = p__23467;var map__23469__$1 = ((cljs.core.seq_QMARK_.call(null,map__23469))?cljs.core.apply.call(null,cljs.core.hash_map,map__23469):map__23469);var ctx = map__23469__$1;var root = cljs.core.get.call(null,map__23469__$1,new cljs.core.Keyword(null,"root","root",-448657453));var media_type = cljs.core.get.call(null,map__23469__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var should_apply_this_23470 = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type));var menu_elem_23471 = root.find("#mc_menubar");if(should_apply_this_23470)
{menu_elem_23471.hide();
} else
{}
return ctx;
});
app.action.DetectMediaQuery = (function DetectMediaQuery(ctx,_){var media_query_info = $("#media-query-info");var media_type = (function (){var pred__23475 = cljs.core._EQ_;var expr__23476 = media_query_info.css("left");if(cljs.core.truth_(pred__23475.call(null,"0px",expr__23476)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__23475.call(null,"1px",expr__23476)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__23475.call(null,"2px",expr__23476)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"media-type","media-type",-764436129),media_type);
});
app.action.AlertInfomationIfModelPageAtMobileDevice = (function AlertInfomationIfModelPageAtMobileDevice(ctx,p__23479){var map__23481 = p__23479;var map__23481__$1 = ((cljs.core.seq_QMARK_.call(null,map__23481))?cljs.core.apply.call(null,cljs.core.hash_map,map__23481):map__23481);var args = map__23481__$1;var curr_view = cljs.core.get.call(null,map__23481__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));if(cljs.core.truth_((function (){var and__3539__auto__ = cljs.core.some.call(null,((function (map__23481,map__23481__$1,args,curr_view){
return (function (p1__23478_SHARP_){return cljs.core._EQ_.call(null,p1__23478_SHARP_,curr_view);
});})(map__23481,map__23481__$1,args,curr_view))
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
{setTimeout(((function (map__23481,map__23481__$1,args,curr_view){
return (function (){return alert(constant.modelInformation);
});})(map__23481,map__23481__$1,args,curr_view))
,(1000));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.Keyword(null,"mobileInformation","mobileInformation",-789142128)], null),true);
} else
{return ctx;
}
});
app.action.Tracking = (function Tracking(ctx,p__23482){var map__23487 = p__23482;var map__23487__$1 = ((cljs.core.seq_QMARK_.call(null,map__23487))?cljs.core.apply.call(null,cljs.core.hash_map,map__23487):map__23487);var args = map__23487__$1;var where = cljs.core.get.call(null,map__23487__$1,new cljs.core.Keyword(null,"react-where","react-where",-127883626));var where2 = cljs.core.get.call(null,map__23487__$1,new cljs.core.Keyword(null,"react-where2","react-where2",611305798));var act = cljs.core.get.call(null,map__23487__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));var pred__23488_23491 = cljs.core._EQ_;var expr__23489_23492 = where;if(cljs.core.truth_(pred__23488_23491.call(null,new cljs.core.Keyword(null,"Router","Router",1225596421),expr__23489_23492)))
{googleTracking.page.call(null,cljs.core.name.call(null,act));
} else
{googleTracking.click.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,where))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,where2))));
}
return ctx;
});
