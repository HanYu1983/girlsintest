// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('app.fn');
goog.require('app.action');
goog.require('app.view');
goog.require('app.model');
goog.require('app.auth');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('app.fn');
goog.require('cljs.core.async');
goog.require('app.model');
goog.require('tool.react');
goog.require('app.auth');
goog.require('app.action');
goog.require('app.view');
app.main.main = (function main(){var G__14445 = app.auth.auth.call(null,"/auth");G__14445.done(app.main.startapp);
G__14445.fail(((function (G__14445){
return (function (){return console.log("fail!");
});})(G__14445))
);
return G__14445;
});
app.main.startapp = (function startapp(){var urlRouter = app.main.create_router.call(null);var route = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Big","Big",-1370423625),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)],[new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),cljs.core.identity], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),app.action.ComposeAction.call(null,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),app.action.ComposeAction.call(null,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),app.action.ComposeAction.call(null,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"menuClick","menuClick",-1553687936),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ToggleMenu], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),new cljs.core.Keyword(null,"toHome","toHome",-1352725795)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.ChangeView], null)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orientationchange","orientationchange",2120302263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.DetectMediaQuery,app.action.Unuse.call(null,app.action.OpenMenuIfPcMode))], null),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.CloseMenu,app.action.ShowLoadingImage,app.action.ChangeLogo,app.action.AlertInfomationIfModelPageAtMobileDevice,app.action.Unuse.call(null,app.action.ShowFooterOrNot))], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.CloseView], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null)], null)]);var sdyleColor = "rgb(185,71,132)";var root = $(".root");var tmpl_item = (function (){var obj14468 = {"brandToColor":((function (urlRouter,route,sdyleColor,root){
return (function (brand){if((brand.length > (0)))
{return sdyleColor;
} else
{return "rgb(122,122,122)";
}
});})(urlRouter,route,sdyleColor,root))
,"checkHot":((function (urlRouter,route,sdyleColor,root){
return (function (timestr){var tomorrow = Date.today().add((function (){var obj14470 = {"days":(1)};return obj14470;
})());var startday = Date.today().add((function (){var obj14472 = {"days":(-1)};return obj14472;
})());var now = Date.parse(timestr);return now.between(startday,tomorrow);
});})(urlRouter,route,sdyleColor,root))
};return obj14468;
})();var menubarElem = root.find("#mc_menubar");var media_query_info = $("#media-query-info");var media_type = (function (){var pred__14473 = cljs.core._EQ_;var expr__14474 = media_query_info.css("left");if(cljs.core.truth_(pred__14473.call(null,"0px",expr__14474)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__14473.call(null,"1px",expr__14474)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__14473.call(null,"2px",expr__14474)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();var ctx = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"router","router",1091916230),urlRouter,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852),root.find("#mc_popupContainer"),new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701),tmpl_item,new cljs.core.Keyword(null,"media-type","media-type",-764436129),media_type,new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mobileInformation","mobileInformation",-789142128),false], null)], null);app.main.detectOrientation.call(null);
app.main.menubar.call(null,menubarElem);
app.main.header.call(null,urlRouter,root);
var c__6192__auto___14488 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___14488,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___14488,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx){
return (function (state_14479){var state_val_14480 = (state_14479[(1)]);if((state_val_14480 === (1)))
{var inst_14476 = cljs.core.partial.call(null,tool.react.React,route);var inst_14477 = cljs.core.async.reduce.call(null,inst_14476,ctx,tool.react.OnReact);var state_14479__$1 = state_14479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14479__$1,inst_14477);
} else
{return null;
}
});})(c__6192__auto___14488,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx))
;return ((function (switch__6177__auto__,c__6192__auto___14488,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14484 = [null,null,null,null,null,null,null];(statearr_14484[(0)] = state_machine__6178__auto__);
(statearr_14484[(1)] = (1));
return statearr_14484;
});
var state_machine__6178__auto____1 = (function (state_14479){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14479);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14485){if((e14485 instanceof Object))
{var ex__6181__auto__ = e14485;var statearr_14486_14489 = state_14479;(statearr_14486_14489[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14490 = state_14479;
state_14479 = G__14490;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14479){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___14488,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx))
})();var state__6194__auto__ = (function (){var statearr_14487 = f__6193__auto__.call(null);(statearr_14487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14488);
return statearr_14487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___14488,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx))
);
return Backbone.history.start();
});
app.main.detectOrientation = (function detectOrientation(){return $(window).on("orientationchange",(function (e){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14512){var state_val_14513 = (state_14512[(1)]);if((state_val_14513 === (2)))
{var inst_14510 = (state_14512[(2)]);var state_14512__$1 = state_14512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14512__$1,inst_14510);
} else
{if((state_val_14513 === (1)))
{var inst_14506 = e.orientation;var inst_14507 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"orientationchange","orientationchange",2120302263),inst_14506];var inst_14508 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14507,null));var state_14512__$1 = state_14512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14512__$1,(2),tool.react.OnReact,inst_14508);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14517 = [null,null,null,null,null,null,null];(statearr_14517[(0)] = state_machine__6178__auto__);
(statearr_14517[(1)] = (1));
return statearr_14517;
});
var state_machine__6178__auto____1 = (function (state_14512){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14512);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14518){if((e14518 instanceof Object))
{var ex__6181__auto__ = e14518;var statearr_14519_14521 = state_14512;(statearr_14519_14521[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14512);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14522 = state_14512;
state_14512 = G__14522;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14512){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14520 = f__6193__auto__.call(null);(statearr_14520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}));
});
app.main.menubar = (function menubar(elem){var handleBtnMouseOut = (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".btn_nav_over");return btnOver.animate((function (){var obj14543 = {"width":"0px"};return obj14543;
})(),(300));
});var handleBtnMouseOver = ((function (handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".btn_nav_over");return btnOver.animate((function (){var obj14545 = {"width":"120px"};return obj14545;
})(),(300));
});})(handleBtnMouseOut))
;elem.delegate("div","mouseover",handleBtnMouseOver);
elem.delegate("div","mouseout",handleBtnMouseOut);
return elem.delegate("div","click",((function (handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__14546 = cljs.core._EQ_;var expr__14547 = id;if(cljs.core.truth_(pred__14546.call(null,"btn_nav_celebrity",expr__14547)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__14546.call(null,"btn_nav_event",expr__14547)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__14546.call(null,"btn_nav_model",expr__14547)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__14546.call(null,"btn_nav_streetSnap",expr__14547)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__14546.call(null,"btn_nav_product",expr__14547)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),null], null);
} else
{if(cljs.core.truth_(pred__14546.call(null,"btn_nav_news",expr__14547)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toNews","toNews",1841267218),null], null);
} else
{console.log("no menu ",id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),null], null);
}
}
}
}
}
}
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver){
return (function (state_14552){var state_val_14553 = (state_14552[(1)]);if((state_val_14553 === (2)))
{var inst_14550 = (state_14552[(2)]);var state_14552__$1 = state_14552;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14552__$1,inst_14550);
} else
{if((state_val_14553 === (1)))
{var state_14552__$1 = state_14552;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14552__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6177__auto__,c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14557 = [null,null,null,null,null,null,null];(statearr_14557[(0)] = state_machine__6178__auto__);
(statearr_14557[(1)] = (1));
return statearr_14557;
});
var state_machine__6178__auto____1 = (function (state_14552){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14552);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14558){if((e14558 instanceof Object))
{var ex__6181__auto__ = e14558;var statearr_14559_14561 = state_14552;(statearr_14559_14561[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14552);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14562 = state_14552;
state_14552 = G__14562;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14552){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6194__auto__ = (function (){var statearr_14560 = f__6193__auto__.call(null);(statearr_14560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6192__auto__;
});})(handleBtnMouseOut,handleBtnMouseOver))
);
});
app.main.header = (function header(router,root){var btn_home = root.find("#btn_backhome");var btn_menu = root.find("#btn_menu");btn_home.click(((function (btn_home,btn_menu){
return (function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,btn_home,btn_menu){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,btn_home,btn_menu){
return (function (state_14596){var state_val_14597 = (state_14596[(1)]);if((state_val_14597 === (2)))
{var inst_14594 = (state_14596[(2)]);var state_14596__$1 = state_14596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14596__$1,inst_14594);
} else
{if((state_val_14597 === (1)))
{var inst_14591 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_14592 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14591,null));var state_14596__$1 = state_14596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14596__$1,(2),tool.react.OnReact,inst_14592);
} else
{return null;
}
}
});})(c__6192__auto__,btn_home,btn_menu))
;return ((function (switch__6177__auto__,c__6192__auto__,btn_home,btn_menu){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14601 = [null,null,null,null,null,null,null];(statearr_14601[(0)] = state_machine__6178__auto__);
(statearr_14601[(1)] = (1));
return statearr_14601;
});
var state_machine__6178__auto____1 = (function (state_14596){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14596);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14602){if((e14602 instanceof Object))
{var ex__6181__auto__ = e14602;var statearr_14603_14619 = state_14596;(statearr_14603_14619[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14596);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14620 = state_14596;
state_14596 = G__14620;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14596){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,btn_home,btn_menu))
})();var state__6194__auto__ = (function (){var statearr_14604 = f__6193__auto__.call(null);(statearr_14604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,btn_home,btn_menu))
);
return c__6192__auto__;
});})(btn_home,btn_menu))
);
return btn_menu.click(((function (btn_home,btn_menu){
return (function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,btn_home,btn_menu){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,btn_home,btn_menu){
return (function (state_14610){var state_val_14611 = (state_14610[(1)]);if((state_val_14611 === (2)))
{var inst_14608 = (state_14610[(2)]);var state_14610__$1 = state_14610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14610__$1,inst_14608);
} else
{if((state_val_14611 === (1)))
{var inst_14605 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"menuClick","menuClick",-1553687936),null];var inst_14606 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14605,null));var state_14610__$1 = state_14610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14610__$1,(2),tool.react.OnReact,inst_14606);
} else
{return null;
}
}
});})(c__6192__auto__,btn_home,btn_menu))
;return ((function (switch__6177__auto__,c__6192__auto__,btn_home,btn_menu){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14615 = [null,null,null,null,null,null,null];(statearr_14615[(0)] = state_machine__6178__auto__);
(statearr_14615[(1)] = (1));
return statearr_14615;
});
var state_machine__6178__auto____1 = (function (state_14610){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14610);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14616){if((e14616 instanceof Object))
{var ex__6181__auto__ = e14616;var statearr_14617_14621 = state_14610;(statearr_14617_14621[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14610);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14622 = state_14610;
state_14610 = G__14622;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14610){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,btn_home,btn_menu))
})();var state__6194__auto__ = (function (){var statearr_14618 = f__6193__auto__.call(null);(statearr_14618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,btn_home,btn_menu))
);
return c__6192__auto__;
});})(btn_home,btn_menu))
);
});
app.main.create_router = (function create_router(){var Router = Backbone.Router.extend((function (){var obj14837 = {"ProductListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14847){var state_val_14848 = (state_14847[(1)]);if((state_val_14848 === (2)))
{var inst_14845 = (state_14847[(2)]);var state_14847__$1 = state_14847;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14847__$1,inst_14845);
} else
{if((state_val_14848 === (1)))
{var inst_14838 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_14839 = (page | (0));var inst_14840 = [search,inst_14839];var inst_14841 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14838,inst_14840);var inst_14842 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_14841];var inst_14843 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14842,null));var state_14847__$1 = state_14847;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14847__$1,(2),tool.react.OnReact,inst_14843);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14852 = [null,null,null,null,null,null,null];(statearr_14852[(0)] = state_machine__6178__auto__);
(statearr_14852[(1)] = (1));
return statearr_14852;
});
var state_machine__6178__auto____1 = (function (state_14847){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14847);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14853){if((e14853 instanceof Object))
{var ex__6181__auto__ = e14853;var statearr_14854_15049 = state_14847;(statearr_14854_15049[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14847);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15050 = state_14847;
state_14847 = G__15050;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14847){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14855 = f__6193__auto__.call(null);(statearr_14855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"ModelList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_14864){var state_val_14865 = (state_14864[(1)]);if((state_val_14865 === (2)))
{var inst_14862 = (state_14864[(2)]);var state_14864__$1 = state_14864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14864__$1,inst_14862);
} else
{if((state_val_14865 === (1)))
{var inst_14856 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_14857 = [real];var inst_14858 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14856,inst_14857);var inst_14859 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_14858];var inst_14860 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14859,null));var state_14864__$1 = state_14864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14864__$1,(2),tool.react.OnReact,inst_14860);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14869 = [null,null,null,null,null,null,null];(statearr_14869[(0)] = state_machine__6178__auto__);
(statearr_14869[(1)] = (1));
return statearr_14869;
});
var state_machine__6178__auto____1 = (function (state_14864){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14864);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14870){if((e14870 instanceof Object))
{var ex__6181__auto__ = e14870;var statearr_14871_15051 = state_14864;(statearr_14871_15051[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14864);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15052 = state_14864;
state_14864 = G__15052;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14864){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_14872 = f__6193__auto__.call(null);(statearr_14872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"StreetSnap":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14882){var state_val_14883 = (state_14882[(1)]);if((state_val_14883 === (2)))
{var inst_14880 = (state_14882[(2)]);var state_14882__$1 = state_14882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14882__$1,inst_14880);
} else
{if((state_val_14883 === (1)))
{var inst_14873 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14874 = encodeURIComponent(id);var inst_14875 = [inst_14874];var inst_14876 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14873,inst_14875);var inst_14877 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),inst_14876];var inst_14878 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14877,null));var state_14882__$1 = state_14882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14882__$1,(2),tool.react.OnReact,inst_14878);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14887 = [null,null,null,null,null,null,null];(statearr_14887[(0)] = state_machine__6178__auto__);
(statearr_14887[(1)] = (1));
return statearr_14887;
});
var state_machine__6178__auto____1 = (function (state_14882){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14882);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14888){if((e14888 instanceof Object))
{var ex__6181__auto__ = e14888;var statearr_14889_15053 = state_14882;(statearr_14889_15053[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14882);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15054 = state_14882;
state_14882 = G__15054;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14882){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14890 = f__6193__auto__.call(null);(statearr_14890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"News":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14900){var state_val_14901 = (state_14900[(1)]);if((state_val_14901 === (2)))
{var inst_14898 = (state_14900[(2)]);var state_14900__$1 = state_14900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14900__$1,inst_14898);
} else
{if((state_val_14901 === (1)))
{var inst_14891 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14892 = encodeURIComponent(id);var inst_14893 = [inst_14892];var inst_14894 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14891,inst_14893);var inst_14895 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toNews","toNews",1841267218),inst_14894];var inst_14896 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14895,null));var state_14900__$1 = state_14900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14900__$1,(2),tool.react.OnReact,inst_14896);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14905 = [null,null,null,null,null,null,null];(statearr_14905[(0)] = state_machine__6178__auto__);
(statearr_14905[(1)] = (1));
return statearr_14905;
});
var state_machine__6178__auto____1 = (function (state_14900){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14900);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14906){if((e14906 instanceof Object))
{var ex__6181__auto__ = e14906;var statearr_14907_15055 = state_14900;(statearr_14907_15055[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15056 = state_14900;
state_14900 = G__15056;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14900){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14908 = f__6193__auto__.call(null);(statearr_14908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Product":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14918){var state_val_14919 = (state_14918[(1)]);if((state_val_14919 === (2)))
{var inst_14916 = (state_14918[(2)]);var state_14918__$1 = state_14918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14918__$1,inst_14916);
} else
{if((state_val_14919 === (1)))
{var inst_14909 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14910 = encodeURIComponent(id);var inst_14911 = [inst_14910];var inst_14912 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14909,inst_14911);var inst_14913 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),inst_14912];var inst_14914 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14913,null));var state_14918__$1 = state_14918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14918__$1,(2),tool.react.OnReact,inst_14914);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14923 = [null,null,null,null,null,null,null];(statearr_14923[(0)] = state_machine__6178__auto__);
(statearr_14923[(1)] = (1));
return statearr_14923;
});
var state_machine__6178__auto____1 = (function (state_14918){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14918);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14924){if((e14924 instanceof Object))
{var ex__6181__auto__ = e14924;var statearr_14925_15057 = state_14918;(statearr_14925_15057[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14918);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14924;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15058 = state_14918;
state_14918 = G__15058;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14918){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14926 = f__6193__auto__.call(null);(statearr_14926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnapList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_14935){var state_val_14936 = (state_14935[(1)]);if((state_val_14936 === (2)))
{var inst_14933 = (state_14935[(2)]);var state_14935__$1 = state_14935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14935__$1,inst_14933);
} else
{if((state_val_14936 === (1)))
{var inst_14927 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_14928 = [real];var inst_14929 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14927,inst_14928);var inst_14930 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_14929];var inst_14931 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14930,null));var state_14935__$1 = state_14935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14935__$1,(2),tool.react.OnReact,inst_14931);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14940 = [null,null,null,null,null,null,null];(statearr_14940[(0)] = state_machine__6178__auto__);
(statearr_14940[(1)] = (1));
return statearr_14940;
});
var state_machine__6178__auto____1 = (function (state_14935){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14935);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14941){if((e14941 instanceof Object))
{var ex__6181__auto__ = e14941;var statearr_14942_15059 = state_14935;(statearr_14942_15059[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14935);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15060 = state_14935;
state_14935 = G__15060;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14935){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_14943 = f__6193__auto__.call(null);(statearr_14943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"ProductList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_14952){var state_val_14953 = (state_14952[(1)]);if((state_val_14953 === (2)))
{var inst_14950 = (state_14952[(2)]);var state_14952__$1 = state_14952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14952__$1,inst_14950);
} else
{if((state_val_14953 === (1)))
{var inst_14944 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_14945 = [real];var inst_14946 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14944,inst_14945);var inst_14947 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_14946];var inst_14948 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14947,null));var state_14952__$1 = state_14952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14952__$1,(2),tool.react.OnReact,inst_14948);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14957 = [null,null,null,null,null,null,null];(statearr_14957[(0)] = state_machine__6178__auto__);
(statearr_14957[(1)] = (1));
return statearr_14957;
});
var state_machine__6178__auto____1 = (function (state_14952){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14952);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14958){if((e14958 instanceof Object))
{var ex__6181__auto__ = e14958;var statearr_14959_15061 = state_14952;(statearr_14959_15061[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14952);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15062 = state_14952;
state_14952 = G__15062;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14952){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_14960 = f__6193__auto__.call(null);(statearr_14960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"ModelListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14970){var state_val_14971 = (state_14970[(1)]);if((state_val_14971 === (2)))
{var inst_14968 = (state_14970[(2)]);var state_14970__$1 = state_14970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14970__$1,inst_14968);
} else
{if((state_val_14971 === (1)))
{var inst_14961 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_14962 = (page | (0));var inst_14963 = [search,inst_14962];var inst_14964 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14961,inst_14963);var inst_14965 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_14964];var inst_14966 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14965,null));var state_14970__$1 = state_14970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14970__$1,(2),tool.react.OnReact,inst_14966);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14975 = [null,null,null,null,null,null,null];(statearr_14975[(0)] = state_machine__6178__auto__);
(statearr_14975[(1)] = (1));
return statearr_14975;
});
var state_machine__6178__auto____1 = (function (state_14970){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14970);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14976){if((e14976 instanceof Object))
{var ex__6181__auto__ = e14976;var statearr_14977_15063 = state_14970;(statearr_14977_15063[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15064 = state_14970;
state_14970 = G__15064;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14970){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14978 = f__6193__auto__.call(null);(statearr_14978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Event":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14988){var state_val_14989 = (state_14988[(1)]);if((state_val_14989 === (2)))
{var inst_14986 = (state_14988[(2)]);var state_14988__$1 = state_14988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14988__$1,inst_14986);
} else
{if((state_val_14989 === (1)))
{var inst_14979 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14980 = encodeURIComponent(id);var inst_14981 = [inst_14980];var inst_14982 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14979,inst_14981);var inst_14983 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),inst_14982];var inst_14984 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14983,null));var state_14988__$1 = state_14988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14988__$1,(2),tool.react.OnReact,inst_14984);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14993 = [null,null,null,null,null,null,null];(statearr_14993[(0)] = state_machine__6178__auto__);
(statearr_14993[(1)] = (1));
return statearr_14993;
});
var state_machine__6178__auto____1 = (function (state_14988){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14988);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14994){if((e14994 instanceof Object))
{var ex__6181__auto__ = e14994;var statearr_14995_15065 = state_14988;(statearr_14995_15065[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14988);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15066 = state_14988;
state_14988 = G__15066;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14988){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14996 = f__6193__auto__.call(null);(statearr_14996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Model":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_15006){var state_val_15007 = (state_15006[(1)]);if((state_val_15007 === (2)))
{var inst_15004 = (state_15006[(2)]);var state_15006__$1 = state_15006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15006__$1,inst_15004);
} else
{if((state_val_15007 === (1)))
{var inst_14997 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14998 = encodeURIComponent(id);var inst_14999 = [inst_14998];var inst_15000 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14997,inst_14999);var inst_15001 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),inst_15000];var inst_15002 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15001,null));var state_15006__$1 = state_15006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15006__$1,(2),tool.react.OnReact,inst_15002);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15011 = [null,null,null,null,null,null,null];(statearr_15011[(0)] = state_machine__6178__auto__);
(statearr_15011[(1)] = (1));
return statearr_15011;
});
var state_machine__6178__auto____1 = (function (state_15006){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15006);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15012){if((e15012 instanceof Object))
{var ex__6181__auto__ = e15012;var statearr_15013_15067 = state_15006;(statearr_15013_15067[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15068 = state_15006;
state_15006 = G__15068;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15006){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_15014 = f__6193__auto__.call(null);(statearr_15014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnapListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_15024){var state_val_15025 = (state_15024[(1)]);if((state_val_15025 === (2)))
{var inst_15022 = (state_15024[(2)]);var state_15024__$1 = state_15024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15024__$1,inst_15022);
} else
{if((state_val_15025 === (1)))
{var inst_15015 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_15016 = (page | (0));var inst_15017 = [search,inst_15016];var inst_15018 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15015,inst_15017);var inst_15019 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_15018];var inst_15020 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15019,null));var state_15024__$1 = state_15024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15024__$1,(2),tool.react.OnReact,inst_15020);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15029 = [null,null,null,null,null,null,null];(statearr_15029[(0)] = state_machine__6178__auto__);
(statearr_15029[(1)] = (1));
return statearr_15029;
});
var state_machine__6178__auto____1 = (function (state_15024){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15024);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15030){if((e15030 instanceof Object))
{var ex__6181__auto__ = e15030;var statearr_15031_15069 = state_15024;(statearr_15031_15069[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15024);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15070 = state_15024;
state_15024 = G__15070;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15024){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_15032 = f__6193__auto__.call(null);(statearr_15032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"default":(function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_15038){var state_val_15039 = (state_15038[(1)]);if((state_val_15039 === (2)))
{var inst_15036 = (state_15038[(2)]);var state_15038__$1 = state_15038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15038__$1,inst_15036);
} else
{if((state_val_15039 === (1)))
{var inst_15033 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toHome","toHome",-1352725795),null];var inst_15034 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15033,null));var state_15038__$1 = state_15038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15038__$1,(2),tool.react.OnReact,inst_15034);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15043 = [null,null,null,null,null,null,null];(statearr_15043[(0)] = state_machine__6178__auto__);
(statearr_15043[(1)] = (1));
return statearr_15043;
});
var state_machine__6178__auto____1 = (function (state_15038){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15038);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15044){if((e15044 instanceof Object))
{var ex__6181__auto__ = e15044;var statearr_15045_15071 = state_15038;(statearr_15045_15071[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15038);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15072 = state_15038;
state_15038 = G__15072;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15038){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_15046 = f__6193__auto__.call(null);(statearr_15046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"routes":(function (){var obj15048 = {"":"default","ModelList/:search/:page":"ModelListSearch","ModelList":"ModelList","StreetSnap":"StreetSnap","News":"News","Product":"Product","Model/id=:id":"Model","StreetSnapList":"StreetSnapList","ProductList/:search/:page":"ProductListSearch","ProductList":"ProductList","Event":"Event","Product/id=:id":"Product","Model":"Model","ProductList/:page":"ProductList","StreetSnapList/:page":"StreetSnapList","News/id=:id":"News","StreetSnapList/:search/:page":"StreetSnapListSearch","StreetSnap/id=:id":"StreetSnap","ModelList/:page":"ModelList"};return obj15048;
})()};return obj14837;
})());var router = (new Router());return router;
});
app.main.main.call(null);
