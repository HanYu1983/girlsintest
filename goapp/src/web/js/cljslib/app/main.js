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
app.main.main = (function main(){var G__11694 = app.auth.auth.call(null,"/auth");G__11694.done(app.main.startapp);
G__11694.fail(((function (G__11694){
return (function (){return console.log("fail!");
});})(G__11694))
);
return G__11694;
});
app.main.startapp = (function startapp(){var urlRouter = app.main.create_router.call(null);var route = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Big","Big",-1370423625),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)],[new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),cljs.core.identity], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"menuClick","menuClick",-1553687936),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ToggleMenuForce], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.Tracking,app.action.OpenFullScreen)], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.OpenView)], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ShareFB)], null)], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),new cljs.core.Keyword(null,"toHome","toHome",-1352725795)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.ChangeView)], null)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orientationchange","orientationchange",2120302263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.DetectMediaQuery,app.action.OpenMenuIfPcMode)], null),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.CloseMenu,app.action.ShowLoadingImage,app.action.ChangeLogo,app.action.AlertInfomationIfModelPageAtMobileDevice,app.action.Unuse.call(null,app.action.ShowFooterOrNot))], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.Tracking,app.action.OpenFullScreen)], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.OpenView)], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ShareFB)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.Tracking,app.action.OpenFullScreen)], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.OpenView)], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ComposeAction.call(null,app.action.Tracking,app.action.ShareFB)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.action.ComposeAction.call(null,app.action.Tracking,tool.react.CloseView)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.Tracking,app.action.Navigate)], null)], null)]);var sdyleColor = "rgb(185,71,132)";var root = $(".root");var tmpl_item = (function (){var obj11717 = {"brandToColor":((function (urlRouter,route,sdyleColor,root){
return (function (brand){if((brand.length > (0)))
{return sdyleColor;
} else
{return "rgb(122,122,122)";
}
});})(urlRouter,route,sdyleColor,root))
,"checkHot":((function (urlRouter,route,sdyleColor,root){
return (function (timestr){var tomorrow = Date.today().add((function (){var obj11719 = {"days":(1)};return obj11719;
})());var startday = Date.today().add((function (){var obj11721 = {"days":(-1)};return obj11721;
})());var now = Date.parse(timestr);return now.between(startday,tomorrow);
});})(urlRouter,route,sdyleColor,root))
};return obj11717;
})();var menubarElem = root.find("#mc_menubar");var media_query_info = $("#media-query-info");var media_type = (function (){var pred__11722 = cljs.core._EQ_;var expr__11723 = media_query_info.css("left");if(cljs.core.truth_(pred__11722.call(null,"0px",expr__11723)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__11722.call(null,"1px",expr__11723)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__11722.call(null,"2px",expr__11723)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();var ctx = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"router","router",1091916230),urlRouter,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852),root.find("#mc_popupContainer"),new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701),tmpl_item,new cljs.core.Keyword(null,"media-type","media-type",-764436129),media_type,new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mobileInformation","mobileInformation",-789142128),false], null)], null);app.main.detectOrientation.call(null);
app.main.menubar.call(null,menubarElem);
app.main.header.call(null,urlRouter,root);
var c__6192__auto___11737 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11737,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11737,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx){
return (function (state_11728){var state_val_11729 = (state_11728[(1)]);if((state_val_11729 === (1)))
{var inst_11725 = cljs.core.partial.call(null,tool.react.React,route);var inst_11726 = cljs.core.async.reduce.call(null,inst_11725,ctx,tool.react.OnReact);var state_11728__$1 = state_11728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11728__$1,inst_11726);
} else
{return null;
}
});})(c__6192__auto___11737,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx))
;return ((function (switch__6177__auto__,c__6192__auto___11737,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11733 = [null,null,null,null,null,null,null];(statearr_11733[(0)] = state_machine__6178__auto__);
(statearr_11733[(1)] = (1));
return statearr_11733;
});
var state_machine__6178__auto____1 = (function (state_11728){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11728);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11734){if((e11734 instanceof Object))
{var ex__6181__auto__ = e11734;var statearr_11735_11738 = state_11728;(statearr_11735_11738[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11739 = state_11728;
state_11728 = G__11739;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11728){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11737,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx))
})();var state__6194__auto__ = (function (){var statearr_11736 = f__6193__auto__.call(null);(statearr_11736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11737);
return statearr_11736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11737,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx))
);
return Backbone.history.start();
});
app.main.detectOrientation = (function detectOrientation(){return $(window).on("orientationchange",(function (e){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_11768){var state_val_11769 = (state_11768[(1)]);if((state_val_11769 === (3)))
{var inst_11766 = (state_11768[(2)]);var state_11768__$1 = state_11768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11768__$1,inst_11766);
} else
{if((state_val_11769 === (2)))
{var inst_11761 = (state_11768[(2)]);var inst_11762 = e.orientation;var inst_11763 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"orientationchange","orientationchange",2120302263),inst_11762];var inst_11764 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11763,null));var state_11768__$1 = (function (){var statearr_11770 = state_11768;(statearr_11770[(7)] = inst_11761);
return statearr_11770;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11768__$1,(3),tool.react.OnReact,inst_11764);
} else
{if((state_val_11769 === (1)))
{var inst_11759 = cljs.core.async.timeout.call(null,(1000));var state_11768__$1 = state_11768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11768__$1,(2),inst_11759);
} else
{return null;
}
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11774 = [null,null,null,null,null,null,null,null];(statearr_11774[(0)] = state_machine__6178__auto__);
(statearr_11774[(1)] = (1));
return statearr_11774;
});
var state_machine__6178__auto____1 = (function (state_11768){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11768);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11775){if((e11775 instanceof Object))
{var ex__6181__auto__ = e11775;var statearr_11776_11778 = state_11768;(statearr_11776_11778[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11779 = state_11768;
state_11768 = G__11779;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11768){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_11777 = f__6193__auto__.call(null);(statearr_11777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}));
});
app.main.menubar = (function menubar(elem){var handleBtnMouseOut = (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".btn_nav_over");return btnOver.animate((function (){var obj11800 = {"width":"0px"};return obj11800;
})(),(300));
});var handleBtnMouseOver = ((function (handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".btn_nav_over");return btnOver.animate((function (){var obj11802 = {"width":"120px"};return obj11802;
})(),(300));
});})(handleBtnMouseOut))
;elem.delegate("div","mouseover",handleBtnMouseOver);
elem.delegate("div","mouseout",handleBtnMouseOut);
return elem.delegate("div","click",((function (handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__11803 = cljs.core._EQ_;var expr__11804 = id;if(cljs.core.truth_(pred__11803.call(null,"btn_nav_celebrity",expr__11804)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__11803.call(null,"btn_nav_event",expr__11804)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__11803.call(null,"btn_nav_model",expr__11804)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__11803.call(null,"btn_nav_streetSnap",expr__11804)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__11803.call(null,"btn_nav_product",expr__11804)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),null], null);
} else
{if(cljs.core.truth_(pred__11803.call(null,"btn_nav_news",expr__11804)))
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
return (function (state_11809){var state_val_11810 = (state_11809[(1)]);if((state_val_11810 === (2)))
{var inst_11807 = (state_11809[(2)]);var state_11809__$1 = state_11809;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11809__$1,inst_11807);
} else
{if((state_val_11810 === (1)))
{var state_11809__$1 = state_11809;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11809__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6177__auto__,c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11814 = [null,null,null,null,null,null,null];(statearr_11814[(0)] = state_machine__6178__auto__);
(statearr_11814[(1)] = (1));
return statearr_11814;
});
var state_machine__6178__auto____1 = (function (state_11809){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11809);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11815){if((e11815 instanceof Object))
{var ex__6181__auto__ = e11815;var statearr_11816_11818 = state_11809;(statearr_11816_11818[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11809);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11819 = state_11809;
state_11809 = G__11819;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11809){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6194__auto__ = (function (){var statearr_11817 = f__6193__auto__.call(null);(statearr_11817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11817;
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
return (function (state_11853){var state_val_11854 = (state_11853[(1)]);if((state_val_11854 === (2)))
{var inst_11851 = (state_11853[(2)]);var state_11853__$1 = state_11853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11853__$1,inst_11851);
} else
{if((state_val_11854 === (1)))
{var inst_11848 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_11849 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11848,null));var state_11853__$1 = state_11853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11853__$1,(2),tool.react.OnReact,inst_11849);
} else
{return null;
}
}
});})(c__6192__auto__,btn_home,btn_menu))
;return ((function (switch__6177__auto__,c__6192__auto__,btn_home,btn_menu){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11858 = [null,null,null,null,null,null,null];(statearr_11858[(0)] = state_machine__6178__auto__);
(statearr_11858[(1)] = (1));
return statearr_11858;
});
var state_machine__6178__auto____1 = (function (state_11853){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11853);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11859){if((e11859 instanceof Object))
{var ex__6181__auto__ = e11859;var statearr_11860_11876 = state_11853;(statearr_11860_11876[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11853);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11877 = state_11853;
state_11853 = G__11877;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11853){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,btn_home,btn_menu))
})();var state__6194__auto__ = (function (){var statearr_11861 = f__6193__auto__.call(null);(statearr_11861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,btn_home,btn_menu))
);
return c__6192__auto__;
});})(btn_home,btn_menu))
);
return btn_menu.click(((function (btn_home,btn_menu){
return (function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,btn_home,btn_menu){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,btn_home,btn_menu){
return (function (state_11867){var state_val_11868 = (state_11867[(1)]);if((state_val_11868 === (2)))
{var inst_11865 = (state_11867[(2)]);var state_11867__$1 = state_11867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11867__$1,inst_11865);
} else
{if((state_val_11868 === (1)))
{var inst_11862 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"menuClick","menuClick",-1553687936),null];var inst_11863 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11862,null));var state_11867__$1 = state_11867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11867__$1,(2),tool.react.OnReact,inst_11863);
} else
{return null;
}
}
});})(c__6192__auto__,btn_home,btn_menu))
;return ((function (switch__6177__auto__,c__6192__auto__,btn_home,btn_menu){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11872 = [null,null,null,null,null,null,null];(statearr_11872[(0)] = state_machine__6178__auto__);
(statearr_11872[(1)] = (1));
return statearr_11872;
});
var state_machine__6178__auto____1 = (function (state_11867){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11867);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11873){if((e11873 instanceof Object))
{var ex__6181__auto__ = e11873;var statearr_11874_11878 = state_11867;(statearr_11874_11878[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11879 = state_11867;
state_11867 = G__11879;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11867){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,btn_home,btn_menu))
})();var state__6194__auto__ = (function (){var statearr_11875 = f__6193__auto__.call(null);(statearr_11875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,btn_home,btn_menu))
);
return c__6192__auto__;
});})(btn_home,btn_menu))
);
});
app.main.create_router = (function create_router(){var Router = Backbone.Router.extend((function (){var obj12094 = {"ProductListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12104){var state_val_12105 = (state_12104[(1)]);if((state_val_12105 === (2)))
{var inst_12102 = (state_12104[(2)]);var state_12104__$1 = state_12104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12104__$1,inst_12102);
} else
{if((state_val_12105 === (1)))
{var inst_12095 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_12096 = (page | (0));var inst_12097 = [search,inst_12096];var inst_12098 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12095,inst_12097);var inst_12099 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_12098];var inst_12100 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12099,null));var state_12104__$1 = state_12104;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12104__$1,(2),tool.react.OnReact,inst_12100);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12109 = [null,null,null,null,null,null,null];(statearr_12109[(0)] = state_machine__6178__auto__);
(statearr_12109[(1)] = (1));
return statearr_12109;
});
var state_machine__6178__auto____1 = (function (state_12104){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12104);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12110){if((e12110 instanceof Object))
{var ex__6181__auto__ = e12110;var statearr_12111_12306 = state_12104;(statearr_12111_12306[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12307 = state_12104;
state_12104 = G__12307;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12104){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12112 = f__6193__auto__.call(null);(statearr_12112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"ModelList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_12121){var state_val_12122 = (state_12121[(1)]);if((state_val_12122 === (2)))
{var inst_12119 = (state_12121[(2)]);var state_12121__$1 = state_12121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12121__$1,inst_12119);
} else
{if((state_val_12122 === (1)))
{var inst_12113 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_12114 = [real];var inst_12115 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12113,inst_12114);var inst_12116 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_12115];var inst_12117 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12116,null));var state_12121__$1 = state_12121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12121__$1,(2),tool.react.OnReact,inst_12117);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12126 = [null,null,null,null,null,null,null];(statearr_12126[(0)] = state_machine__6178__auto__);
(statearr_12126[(1)] = (1));
return statearr_12126;
});
var state_machine__6178__auto____1 = (function (state_12121){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12121);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12127){if((e12127 instanceof Object))
{var ex__6181__auto__ = e12127;var statearr_12128_12308 = state_12121;(statearr_12128_12308[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12121);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12309 = state_12121;
state_12121 = G__12309;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12121){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_12129 = f__6193__auto__.call(null);(statearr_12129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"StreetSnap":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12139){var state_val_12140 = (state_12139[(1)]);if((state_val_12140 === (2)))
{var inst_12137 = (state_12139[(2)]);var state_12139__$1 = state_12139;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12139__$1,inst_12137);
} else
{if((state_val_12140 === (1)))
{var inst_12130 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12131 = encodeURIComponent(id);var inst_12132 = [inst_12131];var inst_12133 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12130,inst_12132);var inst_12134 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),inst_12133];var inst_12135 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12134,null));var state_12139__$1 = state_12139;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12139__$1,(2),tool.react.OnReact,inst_12135);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12144 = [null,null,null,null,null,null,null];(statearr_12144[(0)] = state_machine__6178__auto__);
(statearr_12144[(1)] = (1));
return statearr_12144;
});
var state_machine__6178__auto____1 = (function (state_12139){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12139);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12145){if((e12145 instanceof Object))
{var ex__6181__auto__ = e12145;var statearr_12146_12310 = state_12139;(statearr_12146_12310[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12139);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12311 = state_12139;
state_12139 = G__12311;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12139){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12147 = f__6193__auto__.call(null);(statearr_12147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"News":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12157){var state_val_12158 = (state_12157[(1)]);if((state_val_12158 === (2)))
{var inst_12155 = (state_12157[(2)]);var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12157__$1,inst_12155);
} else
{if((state_val_12158 === (1)))
{var inst_12148 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12149 = encodeURIComponent(id);var inst_12150 = [inst_12149];var inst_12151 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12148,inst_12150);var inst_12152 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toNews","toNews",1841267218),inst_12151];var inst_12153 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12152,null));var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12157__$1,(2),tool.react.OnReact,inst_12153);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12162 = [null,null,null,null,null,null,null];(statearr_12162[(0)] = state_machine__6178__auto__);
(statearr_12162[(1)] = (1));
return statearr_12162;
});
var state_machine__6178__auto____1 = (function (state_12157){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12157);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12163){if((e12163 instanceof Object))
{var ex__6181__auto__ = e12163;var statearr_12164_12312 = state_12157;(statearr_12164_12312[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12313 = state_12157;
state_12157 = G__12313;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12157){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12165 = f__6193__auto__.call(null);(statearr_12165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Product":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12175){var state_val_12176 = (state_12175[(1)]);if((state_val_12176 === (2)))
{var inst_12173 = (state_12175[(2)]);var state_12175__$1 = state_12175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12175__$1,inst_12173);
} else
{if((state_val_12176 === (1)))
{var inst_12166 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12167 = encodeURIComponent(id);var inst_12168 = [inst_12167];var inst_12169 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12166,inst_12168);var inst_12170 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),inst_12169];var inst_12171 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12170,null));var state_12175__$1 = state_12175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12175__$1,(2),tool.react.OnReact,inst_12171);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12180 = [null,null,null,null,null,null,null];(statearr_12180[(0)] = state_machine__6178__auto__);
(statearr_12180[(1)] = (1));
return statearr_12180;
});
var state_machine__6178__auto____1 = (function (state_12175){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12175);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12181){if((e12181 instanceof Object))
{var ex__6181__auto__ = e12181;var statearr_12182_12314 = state_12175;(statearr_12182_12314[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12315 = state_12175;
state_12175 = G__12315;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12175){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12183 = f__6193__auto__.call(null);(statearr_12183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnapList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_12192){var state_val_12193 = (state_12192[(1)]);if((state_val_12193 === (2)))
{var inst_12190 = (state_12192[(2)]);var state_12192__$1 = state_12192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12192__$1,inst_12190);
} else
{if((state_val_12193 === (1)))
{var inst_12184 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_12185 = [real];var inst_12186 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12184,inst_12185);var inst_12187 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_12186];var inst_12188 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12187,null));var state_12192__$1 = state_12192;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12192__$1,(2),tool.react.OnReact,inst_12188);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12197 = [null,null,null,null,null,null,null];(statearr_12197[(0)] = state_machine__6178__auto__);
(statearr_12197[(1)] = (1));
return statearr_12197;
});
var state_machine__6178__auto____1 = (function (state_12192){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12192);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12198){if((e12198 instanceof Object))
{var ex__6181__auto__ = e12198;var statearr_12199_12316 = state_12192;(statearr_12199_12316[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12192);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12317 = state_12192;
state_12192 = G__12317;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12192){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_12200 = f__6193__auto__.call(null);(statearr_12200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"ProductList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_12209){var state_val_12210 = (state_12209[(1)]);if((state_val_12210 === (2)))
{var inst_12207 = (state_12209[(2)]);var state_12209__$1 = state_12209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12209__$1,inst_12207);
} else
{if((state_val_12210 === (1)))
{var inst_12201 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_12202 = [real];var inst_12203 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12201,inst_12202);var inst_12204 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_12203];var inst_12205 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12204,null));var state_12209__$1 = state_12209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12209__$1,(2),tool.react.OnReact,inst_12205);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12214 = [null,null,null,null,null,null,null];(statearr_12214[(0)] = state_machine__6178__auto__);
(statearr_12214[(1)] = (1));
return statearr_12214;
});
var state_machine__6178__auto____1 = (function (state_12209){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12209);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12215){if((e12215 instanceof Object))
{var ex__6181__auto__ = e12215;var statearr_12216_12318 = state_12209;(statearr_12216_12318[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12209);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12319 = state_12209;
state_12209 = G__12319;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12209){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_12217 = f__6193__auto__.call(null);(statearr_12217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"ModelListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12227){var state_val_12228 = (state_12227[(1)]);if((state_val_12228 === (2)))
{var inst_12225 = (state_12227[(2)]);var state_12227__$1 = state_12227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12227__$1,inst_12225);
} else
{if((state_val_12228 === (1)))
{var inst_12218 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_12219 = (page | (0));var inst_12220 = [search,inst_12219];var inst_12221 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12218,inst_12220);var inst_12222 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_12221];var inst_12223 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12222,null));var state_12227__$1 = state_12227;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12227__$1,(2),tool.react.OnReact,inst_12223);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12232 = [null,null,null,null,null,null,null];(statearr_12232[(0)] = state_machine__6178__auto__);
(statearr_12232[(1)] = (1));
return statearr_12232;
});
var state_machine__6178__auto____1 = (function (state_12227){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12227);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12233){if((e12233 instanceof Object))
{var ex__6181__auto__ = e12233;var statearr_12234_12320 = state_12227;(statearr_12234_12320[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12227);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12321 = state_12227;
state_12227 = G__12321;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12227){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12235 = f__6193__auto__.call(null);(statearr_12235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Event":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12245){var state_val_12246 = (state_12245[(1)]);if((state_val_12246 === (2)))
{var inst_12243 = (state_12245[(2)]);var state_12245__$1 = state_12245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12245__$1,inst_12243);
} else
{if((state_val_12246 === (1)))
{var inst_12236 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12237 = encodeURIComponent(id);var inst_12238 = [inst_12237];var inst_12239 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12236,inst_12238);var inst_12240 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),inst_12239];var inst_12241 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12240,null));var state_12245__$1 = state_12245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12245__$1,(2),tool.react.OnReact,inst_12241);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12250 = [null,null,null,null,null,null,null];(statearr_12250[(0)] = state_machine__6178__auto__);
(statearr_12250[(1)] = (1));
return statearr_12250;
});
var state_machine__6178__auto____1 = (function (state_12245){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12245);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12251){if((e12251 instanceof Object))
{var ex__6181__auto__ = e12251;var statearr_12252_12322 = state_12245;(statearr_12252_12322[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12245);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12323 = state_12245;
state_12245 = G__12323;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12245){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12253 = f__6193__auto__.call(null);(statearr_12253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Model":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12263){var state_val_12264 = (state_12263[(1)]);if((state_val_12264 === (2)))
{var inst_12261 = (state_12263[(2)]);var state_12263__$1 = state_12263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12263__$1,inst_12261);
} else
{if((state_val_12264 === (1)))
{var inst_12254 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12255 = encodeURIComponent(id);var inst_12256 = [inst_12255];var inst_12257 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12254,inst_12256);var inst_12258 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),inst_12257];var inst_12259 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12258,null));var state_12263__$1 = state_12263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12263__$1,(2),tool.react.OnReact,inst_12259);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12268 = [null,null,null,null,null,null,null];(statearr_12268[(0)] = state_machine__6178__auto__);
(statearr_12268[(1)] = (1));
return statearr_12268;
});
var state_machine__6178__auto____1 = (function (state_12263){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12263);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12269){if((e12269 instanceof Object))
{var ex__6181__auto__ = e12269;var statearr_12270_12324 = state_12263;(statearr_12270_12324[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12325 = state_12263;
state_12263 = G__12325;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12263){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12271 = f__6193__auto__.call(null);(statearr_12271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnapListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12281){var state_val_12282 = (state_12281[(1)]);if((state_val_12282 === (2)))
{var inst_12279 = (state_12281[(2)]);var state_12281__$1 = state_12281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12281__$1,inst_12279);
} else
{if((state_val_12282 === (1)))
{var inst_12272 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_12273 = (page | (0));var inst_12274 = [search,inst_12273];var inst_12275 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12272,inst_12274);var inst_12276 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_12275];var inst_12277 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12276,null));var state_12281__$1 = state_12281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12281__$1,(2),tool.react.OnReact,inst_12277);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12286 = [null,null,null,null,null,null,null];(statearr_12286[(0)] = state_machine__6178__auto__);
(statearr_12286[(1)] = (1));
return statearr_12286;
});
var state_machine__6178__auto____1 = (function (state_12281){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12281);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12287){if((e12287 instanceof Object))
{var ex__6181__auto__ = e12287;var statearr_12288_12326 = state_12281;(statearr_12288_12326[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12281);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12327 = state_12281;
state_12281 = G__12327;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12281){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12289 = f__6193__auto__.call(null);(statearr_12289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"default":(function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12295){var state_val_12296 = (state_12295[(1)]);if((state_val_12296 === (2)))
{var inst_12293 = (state_12295[(2)]);var state_12295__$1 = state_12295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12295__$1,inst_12293);
} else
{if((state_val_12296 === (1)))
{var inst_12290 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toHome","toHome",-1352725795),null];var inst_12291 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12290,null));var state_12295__$1 = state_12295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12295__$1,(2),tool.react.OnReact,inst_12291);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12300 = [null,null,null,null,null,null,null];(statearr_12300[(0)] = state_machine__6178__auto__);
(statearr_12300[(1)] = (1));
return statearr_12300;
});
var state_machine__6178__auto____1 = (function (state_12295){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12295);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12301){if((e12301 instanceof Object))
{var ex__6181__auto__ = e12301;var statearr_12302_12328 = state_12295;(statearr_12302_12328[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12295);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12329 = state_12295;
state_12295 = G__12329;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12295){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12303 = f__6193__auto__.call(null);(statearr_12303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"routes":(function (){var obj12305 = {"":"default","ModelList/:search/:page":"ModelListSearch","ModelList":"ModelList","StreetSnap":"StreetSnap","News":"News","Product":"Product","Model/id=:id":"Model","StreetSnapList":"StreetSnapList","ProductList/:search/:page":"ProductListSearch","ProductList":"ProductList","Event":"Event","Product/id=:id":"Product","Model":"Model","ProductList/:page":"ProductList","StreetSnapList/:page":"StreetSnapList","News/id=:id":"News","StreetSnapList/:search/:page":"StreetSnapListSearch","StreetSnap/id=:id":"StreetSnap","ModelList/:page":"ModelList"};return obj12305;
})()};return obj12094;
})());var router = (new Router());return router;
});
app.main.main.call(null);
