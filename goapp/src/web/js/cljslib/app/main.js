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
app.main.main = (function main(){var G__13722 = app.auth.auth.call(null,"/goapp/auth");G__13722.done(app.main.startapp);
G__13722.fail(((function (G__13722){
return (function (){return console.log("fail!");
});})(G__13722))
);
return G__13722;
});
app.main.startapp = (function startapp(){var urlRouter = app.main.create_router.call(null);var route = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Big","Big",-1370423625),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)],[new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),cljs.core.identity], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"menuClick","menuClick",-1553687936),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ToggleMenuForce], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.Tracking,app.action.OpenFullScreen)], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.OpenView)], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ShareFB)], null)], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),new cljs.core.Keyword(null,"toHome","toHome",-1352725795)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.ComposeAction.call(null,app.action.Tracking,app.action.WindowScrollToZero,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.WindowScrollToZero,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.ComposeAction.call(null,app.action.Tracking,app.action.WindowScrollToZero,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orientationchange","orientationchange",2120302263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.DetectMediaQuery,app.action.OpenMenuIfPcMode)], null),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.CloseMenu,app.action.ShowLoadingImage,app.action.ChangeLogo,app.action.AlertInfomationIfModelPageAtMobileDevice,app.action.Unuse.call(null,app.action.ShowFooterOrNot))], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.Tracking,app.action.OpenFullScreen)], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.OpenView)], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ShareFB)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.Tracking,app.action.OpenFullScreen)], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.OpenView)], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ShareFB)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.CloseView)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null)], null)]);var sdyleColor = "rgb(185,71,132)";var root = $(".root");var tmpl_item = (function (){var obj13745 = {"brandToColor":((function (urlRouter,route,sdyleColor,root){
return (function (brand){if((brand.length > (0)))
{return sdyleColor;
} else
{return "rgb(122,122,122)";
}
});})(urlRouter,route,sdyleColor,root))
,"checkHot":((function (urlRouter,route,sdyleColor,root){
return (function (timestr){var tomorrow = Date.today().add((function (){var obj13747 = {"days":(1)};return obj13747;
})());var startday = Date.today().add((function (){var obj13749 = {"days":(-1)};return obj13749;
})());var now = Date.parse(timestr);return now.between(startday,tomorrow);
});})(urlRouter,route,sdyleColor,root))
};return obj13745;
})();var menubarElem = root.find("#mc_menubar");var media_query_info = $("#media-query-info");var media_type = (function (){var pred__13750 = cljs.core._EQ_;var expr__13751 = media_query_info.css("left");if(cljs.core.truth_(pred__13750.call(null,"0px",expr__13751)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__13750.call(null,"1px",expr__13751)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__13750.call(null,"2px",expr__13751)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();var browser = leo.utils.detectBrowser();var ctx = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"media-type","media-type",-764436129),new cljs.core.Keyword(null,"views","views",1450155487)],[tmpl_item,urlRouter,browser,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mobileInformation","mobileInformation",-789142128),false], null),root,root.find("#mc_popupContainer"),root.find("#mc_pageContainer"),media_type,cljs.core.PersistentArrayMap.EMPTY]);if(cljs.core.truth_((function (){var or__3551__auto__ = browser.isChrome;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return browser.isSafari;
}
})()))
{} else
{alert(constant.browserInformation);
}
console.log(JSON.stringify(browser));
app.main.detectOrientation.call(null);
app.main.menubar.call(null,menubarElem);
app.main.header.call(null,urlRouter,root);
var c__6192__auto___13765 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13765,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,browser,ctx){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13765,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,browser,ctx){
return (function (state_13756){var state_val_13757 = (state_13756[(1)]);if((state_val_13757 === (1)))
{var inst_13753 = cljs.core.partial.call(null,tool.react.React,route);var inst_13754 = cljs.core.async.reduce.call(null,inst_13753,ctx,tool.react.OnReact);var state_13756__$1 = state_13756;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13756__$1,inst_13754);
} else
{return null;
}
});})(c__6192__auto___13765,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,browser,ctx))
;return ((function (switch__6177__auto__,c__6192__auto___13765,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,browser,ctx){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13761 = [null,null,null,null,null,null,null];(statearr_13761[(0)] = state_machine__6178__auto__);
(statearr_13761[(1)] = (1));
return statearr_13761;
});
var state_machine__6178__auto____1 = (function (state_13756){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13756);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13762){if((e13762 instanceof Object))
{var ex__6181__auto__ = e13762;var statearr_13763_13766 = state_13756;(statearr_13763_13766[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13756);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13762;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13767 = state_13756;
state_13756 = G__13767;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13756){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13765,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,browser,ctx))
})();var state__6194__auto__ = (function (){var statearr_13764 = f__6193__auto__.call(null);(statearr_13764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13765);
return statearr_13764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13765,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,browser,ctx))
);
return Backbone.history.start();
});
app.main.detectOrientation = (function detectOrientation(){return $(window).on("orientationchange",(function (e){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_13796){var state_val_13797 = (state_13796[(1)]);if((state_val_13797 === (3)))
{var inst_13794 = (state_13796[(2)]);var state_13796__$1 = state_13796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13796__$1,inst_13794);
} else
{if((state_val_13797 === (2)))
{var inst_13789 = (state_13796[(2)]);var inst_13790 = e.orientation;var inst_13791 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"orientationchange","orientationchange",2120302263),inst_13790];var inst_13792 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13791,null));var state_13796__$1 = (function (){var statearr_13798 = state_13796;(statearr_13798[(7)] = inst_13789);
return statearr_13798;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13796__$1,(3),tool.react.OnReact,inst_13792);
} else
{if((state_val_13797 === (1)))
{var inst_13787 = cljs.core.async.timeout.call(null,(1000));var state_13796__$1 = state_13796;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13796__$1,(2),inst_13787);
} else
{return null;
}
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13802 = [null,null,null,null,null,null,null,null];(statearr_13802[(0)] = state_machine__6178__auto__);
(statearr_13802[(1)] = (1));
return statearr_13802;
});
var state_machine__6178__auto____1 = (function (state_13796){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13796);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13803){if((e13803 instanceof Object))
{var ex__6181__auto__ = e13803;var statearr_13804_13806 = state_13796;(statearr_13804_13806[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13796);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13803;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13807 = state_13796;
state_13796 = G__13807;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13796){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_13805 = f__6193__auto__.call(null);(statearr_13805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}));
});
app.main.menubar = (function menubar(elem){var handleBtnMouseOut = (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".btn_nav_over");return btnOver.animate((function (){var obj13828 = {"width":"0px"};return obj13828;
})(),(300));
});var handleBtnMouseOver = ((function (handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".btn_nav_over");return btnOver.animate((function (){var obj13830 = {"width":"120px"};return obj13830;
})(),(300));
});})(handleBtnMouseOut))
;elem.delegate("div","mouseover",handleBtnMouseOver);
elem.delegate("div","mouseout",handleBtnMouseOut);
return elem.delegate("div","click",((function (handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__13831 = cljs.core._EQ_;var expr__13832 = id;if(cljs.core.truth_(pred__13831.call(null,"btn_nav_celebrity",expr__13832)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__13831.call(null,"btn_nav_event",expr__13832)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__13831.call(null,"btn_nav_model",expr__13832)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__13831.call(null,"btn_nav_streetSnap",expr__13832)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__13831.call(null,"btn_nav_product",expr__13832)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),null], null);
} else
{if(cljs.core.truth_(pred__13831.call(null,"btn_nav_news",expr__13832)))
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
return (function (state_13837){var state_val_13838 = (state_13837[(1)]);if((state_val_13838 === (2)))
{var inst_13835 = (state_13837[(2)]);var state_13837__$1 = state_13837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13837__$1,inst_13835);
} else
{if((state_val_13838 === (1)))
{var state_13837__$1 = state_13837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13837__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6177__auto__,c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13842 = [null,null,null,null,null,null,null];(statearr_13842[(0)] = state_machine__6178__auto__);
(statearr_13842[(1)] = (1));
return statearr_13842;
});
var state_machine__6178__auto____1 = (function (state_13837){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13837);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13843){if((e13843 instanceof Object))
{var ex__6181__auto__ = e13843;var statearr_13844_13846 = state_13837;(statearr_13844_13846[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13847 = state_13837;
state_13837 = G__13847;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13837){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6194__auto__ = (function (){var statearr_13845 = f__6193__auto__.call(null);(statearr_13845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13845;
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
return (function (state_13881){var state_val_13882 = (state_13881[(1)]);if((state_val_13882 === (2)))
{var inst_13879 = (state_13881[(2)]);var state_13881__$1 = state_13881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13881__$1,inst_13879);
} else
{if((state_val_13882 === (1)))
{var inst_13876 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_13877 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13876,null));var state_13881__$1 = state_13881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13881__$1,(2),tool.react.OnReact,inst_13877);
} else
{return null;
}
}
});})(c__6192__auto__,btn_home,btn_menu))
;return ((function (switch__6177__auto__,c__6192__auto__,btn_home,btn_menu){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13886 = [null,null,null,null,null,null,null];(statearr_13886[(0)] = state_machine__6178__auto__);
(statearr_13886[(1)] = (1));
return statearr_13886;
});
var state_machine__6178__auto____1 = (function (state_13881){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13881);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13887){if((e13887 instanceof Object))
{var ex__6181__auto__ = e13887;var statearr_13888_13904 = state_13881;(statearr_13888_13904[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13881);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13905 = state_13881;
state_13881 = G__13905;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13881){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,btn_home,btn_menu))
})();var state__6194__auto__ = (function (){var statearr_13889 = f__6193__auto__.call(null);(statearr_13889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,btn_home,btn_menu))
);
return c__6192__auto__;
});})(btn_home,btn_menu))
);
return btn_menu.click(((function (btn_home,btn_menu){
return (function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,btn_home,btn_menu){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,btn_home,btn_menu){
return (function (state_13895){var state_val_13896 = (state_13895[(1)]);if((state_val_13896 === (2)))
{var inst_13893 = (state_13895[(2)]);var state_13895__$1 = state_13895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13895__$1,inst_13893);
} else
{if((state_val_13896 === (1)))
{var inst_13890 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"menuClick","menuClick",-1553687936),null];var inst_13891 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13890,null));var state_13895__$1 = state_13895;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13895__$1,(2),tool.react.OnReact,inst_13891);
} else
{return null;
}
}
});})(c__6192__auto__,btn_home,btn_menu))
;return ((function (switch__6177__auto__,c__6192__auto__,btn_home,btn_menu){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13900 = [null,null,null,null,null,null,null];(statearr_13900[(0)] = state_machine__6178__auto__);
(statearr_13900[(1)] = (1));
return statearr_13900;
});
var state_machine__6178__auto____1 = (function (state_13895){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13895);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13901){if((e13901 instanceof Object))
{var ex__6181__auto__ = e13901;var statearr_13902_13906 = state_13895;(statearr_13902_13906[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13901;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13907 = state_13895;
state_13895 = G__13907;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13895){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,btn_home,btn_menu))
})();var state__6194__auto__ = (function (){var statearr_13903 = f__6193__auto__.call(null);(statearr_13903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,btn_home,btn_menu))
);
return c__6192__auto__;
});})(btn_home,btn_menu))
);
});
app.main.create_router = (function create_router(){var Router = Backbone.Router.extend((function (){var obj14122 = {"ProductListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14132){var state_val_14133 = (state_14132[(1)]);if((state_val_14133 === (2)))
{var inst_14130 = (state_14132[(2)]);var state_14132__$1 = state_14132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14132__$1,inst_14130);
} else
{if((state_val_14133 === (1)))
{var inst_14123 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_14124 = (page | (0));var inst_14125 = [search,inst_14124];var inst_14126 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14123,inst_14125);var inst_14127 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_14126];var inst_14128 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14127,null));var state_14132__$1 = state_14132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14132__$1,(2),tool.react.OnReact,inst_14128);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14137 = [null,null,null,null,null,null,null];(statearr_14137[(0)] = state_machine__6178__auto__);
(statearr_14137[(1)] = (1));
return statearr_14137;
});
var state_machine__6178__auto____1 = (function (state_14132){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14132);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14138){if((e14138 instanceof Object))
{var ex__6181__auto__ = e14138;var statearr_14139_14334 = state_14132;(statearr_14139_14334[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14132);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14138;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14335 = state_14132;
state_14132 = G__14335;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14132){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14140 = f__6193__auto__.call(null);(statearr_14140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14140;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"ModelList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_14149){var state_val_14150 = (state_14149[(1)]);if((state_val_14150 === (2)))
{var inst_14147 = (state_14149[(2)]);var state_14149__$1 = state_14149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14149__$1,inst_14147);
} else
{if((state_val_14150 === (1)))
{var inst_14141 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_14142 = [real];var inst_14143 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14141,inst_14142);var inst_14144 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_14143];var inst_14145 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14144,null));var state_14149__$1 = state_14149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14149__$1,(2),tool.react.OnReact,inst_14145);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14154 = [null,null,null,null,null,null,null];(statearr_14154[(0)] = state_machine__6178__auto__);
(statearr_14154[(1)] = (1));
return statearr_14154;
});
var state_machine__6178__auto____1 = (function (state_14149){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14149);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14155){if((e14155 instanceof Object))
{var ex__6181__auto__ = e14155;var statearr_14156_14336 = state_14149;(statearr_14156_14336[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14337 = state_14149;
state_14149 = G__14337;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14149){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_14157 = f__6193__auto__.call(null);(statearr_14157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"StreetSnap":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14167){var state_val_14168 = (state_14167[(1)]);if((state_val_14168 === (2)))
{var inst_14165 = (state_14167[(2)]);var state_14167__$1 = state_14167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14167__$1,inst_14165);
} else
{if((state_val_14168 === (1)))
{var inst_14158 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14159 = encodeURIComponent(id);var inst_14160 = [inst_14159];var inst_14161 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14158,inst_14160);var inst_14162 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),inst_14161];var inst_14163 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14162,null));var state_14167__$1 = state_14167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14167__$1,(2),tool.react.OnReact,inst_14163);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14172 = [null,null,null,null,null,null,null];(statearr_14172[(0)] = state_machine__6178__auto__);
(statearr_14172[(1)] = (1));
return statearr_14172;
});
var state_machine__6178__auto____1 = (function (state_14167){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14167);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14173){if((e14173 instanceof Object))
{var ex__6181__auto__ = e14173;var statearr_14174_14338 = state_14167;(statearr_14174_14338[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14167);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14173;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14339 = state_14167;
state_14167 = G__14339;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14167){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14175 = f__6193__auto__.call(null);(statearr_14175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"News":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14185){var state_val_14186 = (state_14185[(1)]);if((state_val_14186 === (2)))
{var inst_14183 = (state_14185[(2)]);var state_14185__$1 = state_14185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14185__$1,inst_14183);
} else
{if((state_val_14186 === (1)))
{var inst_14176 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14177 = encodeURIComponent(id);var inst_14178 = [inst_14177];var inst_14179 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14176,inst_14178);var inst_14180 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toNews","toNews",1841267218),inst_14179];var inst_14181 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14180,null));var state_14185__$1 = state_14185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14185__$1,(2),tool.react.OnReact,inst_14181);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14190 = [null,null,null,null,null,null,null];(statearr_14190[(0)] = state_machine__6178__auto__);
(statearr_14190[(1)] = (1));
return statearr_14190;
});
var state_machine__6178__auto____1 = (function (state_14185){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14185);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14191){if((e14191 instanceof Object))
{var ex__6181__auto__ = e14191;var statearr_14192_14340 = state_14185;(statearr_14192_14340[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14185);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14341 = state_14185;
state_14185 = G__14341;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14185){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14193 = f__6193__auto__.call(null);(statearr_14193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Product":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14203){var state_val_14204 = (state_14203[(1)]);if((state_val_14204 === (2)))
{var inst_14201 = (state_14203[(2)]);var state_14203__$1 = state_14203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14203__$1,inst_14201);
} else
{if((state_val_14204 === (1)))
{var inst_14194 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14195 = encodeURIComponent(id);var inst_14196 = [inst_14195];var inst_14197 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14194,inst_14196);var inst_14198 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),inst_14197];var inst_14199 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14198,null));var state_14203__$1 = state_14203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14203__$1,(2),tool.react.OnReact,inst_14199);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14208 = [null,null,null,null,null,null,null];(statearr_14208[(0)] = state_machine__6178__auto__);
(statearr_14208[(1)] = (1));
return statearr_14208;
});
var state_machine__6178__auto____1 = (function (state_14203){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14203);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14209){if((e14209 instanceof Object))
{var ex__6181__auto__ = e14209;var statearr_14210_14342 = state_14203;(statearr_14210_14342[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14203);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14343 = state_14203;
state_14203 = G__14343;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14203){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14211 = f__6193__auto__.call(null);(statearr_14211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnapList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_14220){var state_val_14221 = (state_14220[(1)]);if((state_val_14221 === (2)))
{var inst_14218 = (state_14220[(2)]);var state_14220__$1 = state_14220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14220__$1,inst_14218);
} else
{if((state_val_14221 === (1)))
{var inst_14212 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_14213 = [real];var inst_14214 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14212,inst_14213);var inst_14215 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_14214];var inst_14216 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14215,null));var state_14220__$1 = state_14220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14220__$1,(2),tool.react.OnReact,inst_14216);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14225 = [null,null,null,null,null,null,null];(statearr_14225[(0)] = state_machine__6178__auto__);
(statearr_14225[(1)] = (1));
return statearr_14225;
});
var state_machine__6178__auto____1 = (function (state_14220){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14220);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14226){if((e14226 instanceof Object))
{var ex__6181__auto__ = e14226;var statearr_14227_14344 = state_14220;(statearr_14227_14344[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14220);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14345 = state_14220;
state_14220 = G__14345;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14220){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_14228 = f__6193__auto__.call(null);(statearr_14228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"ProductList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_14237){var state_val_14238 = (state_14237[(1)]);if((state_val_14238 === (2)))
{var inst_14235 = (state_14237[(2)]);var state_14237__$1 = state_14237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14237__$1,inst_14235);
} else
{if((state_val_14238 === (1)))
{var inst_14229 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_14230 = [real];var inst_14231 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14229,inst_14230);var inst_14232 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_14231];var inst_14233 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14232,null));var state_14237__$1 = state_14237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14237__$1,(2),tool.react.OnReact,inst_14233);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14242 = [null,null,null,null,null,null,null];(statearr_14242[(0)] = state_machine__6178__auto__);
(statearr_14242[(1)] = (1));
return statearr_14242;
});
var state_machine__6178__auto____1 = (function (state_14237){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14237);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14243){if((e14243 instanceof Object))
{var ex__6181__auto__ = e14243;var statearr_14244_14346 = state_14237;(statearr_14244_14346[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14237);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14347 = state_14237;
state_14237 = G__14347;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14237){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_14245 = f__6193__auto__.call(null);(statearr_14245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"ModelListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14255){var state_val_14256 = (state_14255[(1)]);if((state_val_14256 === (2)))
{var inst_14253 = (state_14255[(2)]);var state_14255__$1 = state_14255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14255__$1,inst_14253);
} else
{if((state_val_14256 === (1)))
{var inst_14246 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_14247 = (page | (0));var inst_14248 = [search,inst_14247];var inst_14249 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14246,inst_14248);var inst_14250 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_14249];var inst_14251 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14250,null));var state_14255__$1 = state_14255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14255__$1,(2),tool.react.OnReact,inst_14251);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14260 = [null,null,null,null,null,null,null];(statearr_14260[(0)] = state_machine__6178__auto__);
(statearr_14260[(1)] = (1));
return statearr_14260;
});
var state_machine__6178__auto____1 = (function (state_14255){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14255);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14261){if((e14261 instanceof Object))
{var ex__6181__auto__ = e14261;var statearr_14262_14348 = state_14255;(statearr_14262_14348[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14255);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14261;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14349 = state_14255;
state_14255 = G__14349;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14255){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14263 = f__6193__auto__.call(null);(statearr_14263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Event":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14273){var state_val_14274 = (state_14273[(1)]);if((state_val_14274 === (2)))
{var inst_14271 = (state_14273[(2)]);var state_14273__$1 = state_14273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14273__$1,inst_14271);
} else
{if((state_val_14274 === (1)))
{var inst_14264 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14265 = encodeURIComponent(id);var inst_14266 = [inst_14265];var inst_14267 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14264,inst_14266);var inst_14268 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),inst_14267];var inst_14269 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14268,null));var state_14273__$1 = state_14273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14273__$1,(2),tool.react.OnReact,inst_14269);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14278 = [null,null,null,null,null,null,null];(statearr_14278[(0)] = state_machine__6178__auto__);
(statearr_14278[(1)] = (1));
return statearr_14278;
});
var state_machine__6178__auto____1 = (function (state_14273){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14273);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14279){if((e14279 instanceof Object))
{var ex__6181__auto__ = e14279;var statearr_14280_14350 = state_14273;(statearr_14280_14350[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14273);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14351 = state_14273;
state_14273 = G__14351;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14273){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14281 = f__6193__auto__.call(null);(statearr_14281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Model":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14291){var state_val_14292 = (state_14291[(1)]);if((state_val_14292 === (2)))
{var inst_14289 = (state_14291[(2)]);var state_14291__$1 = state_14291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14291__$1,inst_14289);
} else
{if((state_val_14292 === (1)))
{var inst_14282 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14283 = encodeURIComponent(id);var inst_14284 = [inst_14283];var inst_14285 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14282,inst_14284);var inst_14286 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),inst_14285];var inst_14287 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14286,null));var state_14291__$1 = state_14291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14291__$1,(2),tool.react.OnReact,inst_14287);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14296 = [null,null,null,null,null,null,null];(statearr_14296[(0)] = state_machine__6178__auto__);
(statearr_14296[(1)] = (1));
return statearr_14296;
});
var state_machine__6178__auto____1 = (function (state_14291){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14291);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14297){if((e14297 instanceof Object))
{var ex__6181__auto__ = e14297;var statearr_14298_14352 = state_14291;(statearr_14298_14352[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14353 = state_14291;
state_14291 = G__14353;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14291){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14299 = f__6193__auto__.call(null);(statearr_14299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnapListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14309){var state_val_14310 = (state_14309[(1)]);if((state_val_14310 === (2)))
{var inst_14307 = (state_14309[(2)]);var state_14309__$1 = state_14309;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14309__$1,inst_14307);
} else
{if((state_val_14310 === (1)))
{var inst_14300 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_14301 = (page | (0));var inst_14302 = [search,inst_14301];var inst_14303 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14300,inst_14302);var inst_14304 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_14303];var inst_14305 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14304,null));var state_14309__$1 = state_14309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14309__$1,(2),tool.react.OnReact,inst_14305);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14314 = [null,null,null,null,null,null,null];(statearr_14314[(0)] = state_machine__6178__auto__);
(statearr_14314[(1)] = (1));
return statearr_14314;
});
var state_machine__6178__auto____1 = (function (state_14309){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14309);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14315){if((e14315 instanceof Object))
{var ex__6181__auto__ = e14315;var statearr_14316_14354 = state_14309;(statearr_14316_14354[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14309);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14315;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14355 = state_14309;
state_14309 = G__14355;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14309){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14317 = f__6193__auto__.call(null);(statearr_14317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"default":(function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_14323){var state_val_14324 = (state_14323[(1)]);if((state_val_14324 === (2)))
{var inst_14321 = (state_14323[(2)]);var state_14323__$1 = state_14323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14323__$1,inst_14321);
} else
{if((state_val_14324 === (1)))
{var inst_14318 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toHome","toHome",-1352725795),null];var inst_14319 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14318,null));var state_14323__$1 = state_14323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14323__$1,(2),tool.react.OnReact,inst_14319);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14328 = [null,null,null,null,null,null,null];(statearr_14328[(0)] = state_machine__6178__auto__);
(statearr_14328[(1)] = (1));
return statearr_14328;
});
var state_machine__6178__auto____1 = (function (state_14323){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14323);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14329){if((e14329 instanceof Object))
{var ex__6181__auto__ = e14329;var statearr_14330_14356 = state_14323;(statearr_14330_14356[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14323);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14357 = state_14323;
state_14323 = G__14357;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14323){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_14331 = f__6193__auto__.call(null);(statearr_14331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"routes":(function (){var obj14333 = {"":"default","ModelList/:search/:page":"ModelListSearch","ModelList":"ModelList","StreetSnap":"StreetSnap","News":"News","Product":"Product","Model/id=:id":"Model","StreetSnapList":"StreetSnapList","ProductList/:search/:page":"ProductListSearch","ProductList":"ProductList","Event":"Event","Product/id=:id":"Product","Model":"Model","ProductList/:page":"ProductList","StreetSnapList/:page":"StreetSnapList","News/id=:id":"News","StreetSnapList/:search/:page":"StreetSnapListSearch","StreetSnap/id=:id":"StreetSnap","ModelList/:page":"ModelList"};return obj14333;
})()};return obj14122;
})());var router = (new Router());return router;
});
app.main.main.call(null);
