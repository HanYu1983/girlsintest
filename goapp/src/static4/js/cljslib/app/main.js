// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('app.fn');
goog.require('app.action');
goog.require('app.view');
goog.require('app.model');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('app.fn');
goog.require('cljs.core.async');
goog.require('app.model');
goog.require('tool.react');
goog.require('app.action');
goog.require('app.view');
app.main.main = (function main(){var urlRouter = app.main.create_router.call(null);var route = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Big","Big",-1370423625),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)],[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),app.action.Navigate], null),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),app.action.Navigate], null),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),app.action.Navigate], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),new cljs.core.Keyword(null,"toHome","toHome",-1352725795)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.ChangeView], null)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.ShowLoadingImage,app.action.ChangeLogo,app.action.Unuse.call(null,app.action.ShowFooterOrNot))], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.CloseView], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null)], null)]);var sdyleColor = "rgb(185,71,132)";var root = $(".root");var tmpl_item = (function (){var obj21040 = {"brandToColor":((function (urlRouter,route,sdyleColor,root){
return (function (brand){if((brand.length > (0)))
{return sdyleColor;
} else
{return "rgb(122,122,122)";
}
});})(urlRouter,route,sdyleColor,root))
,"checkHot":((function (urlRouter,route,sdyleColor,root){
return (function (timestr){var today = Date.today();var date = Date.parse(timestr).at("0:0:0");return today.equals(date);
});})(urlRouter,route,sdyleColor,root))
};return obj21040;
})();var ctx = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"router","router",1091916230),urlRouter,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852),root.find("#mc_popupContainer"),new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701),tmpl_item], null);app.main.menubar.call(null,root);
app.main.header.call(null,urlRouter,root);
var c__6192__auto___21053 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___21053,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___21053,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function (state_21044){var state_val_21045 = (state_21044[(1)]);if((state_val_21045 === (1)))
{var inst_21041 = cljs.core.partial.call(null,tool.react.React,route);var inst_21042 = cljs.core.async.reduce.call(null,inst_21041,ctx,tool.react.OnReact);var state_21044__$1 = state_21044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21044__$1,inst_21042);
} else
{return null;
}
});})(c__6192__auto___21053,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
;return ((function (switch__6177__auto__,c__6192__auto___21053,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21049 = [null,null,null,null,null,null,null];(statearr_21049[(0)] = state_machine__6178__auto__);
(statearr_21049[(1)] = (1));
return statearr_21049;
});
var state_machine__6178__auto____1 = (function (state_21044){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21044);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21050){if((e21050 instanceof Object))
{var ex__6181__auto__ = e21050;var statearr_21051_21054 = state_21044;(statearr_21051_21054[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21044);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21055 = state_21044;
state_21044 = G__21055;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21044){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___21053,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
})();var state__6194__auto__ = (function (){var statearr_21052 = f__6193__auto__.call(null);(statearr_21052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___21053);
return statearr_21052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___21053,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
);
return Backbone.history.start();
});
app.main.menubar = (function menubar(root){var menubar__$1 = root.find("#mc_menubar");var handleBtnMouseOut = ((function (menubar__$1){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj21076 = {"width":"0px"};return obj21076;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj21078 = {"width":"120px"};return obj21078;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__21079 = cljs.core._EQ_;var expr__21080 = id;if(cljs.core.truth_(pred__21079.call(null,"btn_nav_celebrity",expr__21080)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__21079.call(null,"btn_nav_event",expr__21080)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__21079.call(null,"btn_nav_model",expr__21080)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__21079.call(null,"btn_nav_streetSnap",expr__21080)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__21079.call(null,"btn_nav_product",expr__21080)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),null], null);
} else
{if(cljs.core.truth_(pred__21079.call(null,"btn_nav_news",expr__21080)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toNews","toNews",1841267218),null], null);
} else
{console.log("no menu ",id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
}
}
}
}
}
}
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (state_21085){var state_val_21086 = (state_21085[(1)]);if((state_val_21086 === (2)))
{var inst_21083 = (state_21085[(2)]);var state_21085__$1 = state_21085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21085__$1,inst_21083);
} else
{if((state_val_21086 === (1)))
{var state_21085__$1 = state_21085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21085__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6192__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6177__auto__,c__6192__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21090 = [null,null,null,null,null,null,null];(statearr_21090[(0)] = state_machine__6178__auto__);
(statearr_21090[(1)] = (1));
return statearr_21090;
});
var state_machine__6178__auto____1 = (function (state_21085){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21085);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21091){if((e21091 instanceof Object))
{var ex__6181__auto__ = e21091;var statearr_21092_21094 = state_21085;(statearr_21092_21094[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21085);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21095 = state_21085;
state_21085 = G__21095;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21085){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6194__auto__ = (function (){var statearr_21093 = f__6193__auto__.call(null);(statearr_21093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6192__auto__;
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
app.main.header = (function header(router,root){var btn_home = root.find("#btn_backhome");return btn_home.click(((function (btn_home){
return (function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,btn_home){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,btn_home){
return (function (state_21115){var state_val_21116 = (state_21115[(1)]);if((state_val_21116 === (2)))
{var inst_21113 = (state_21115[(2)]);var state_21115__$1 = state_21115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21115__$1,inst_21113);
} else
{if((state_val_21116 === (1)))
{var inst_21110 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_21111 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21110,null));var state_21115__$1 = state_21115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21115__$1,(2),tool.react.OnReact,inst_21111);
} else
{return null;
}
}
});})(c__6192__auto__,btn_home))
;return ((function (switch__6177__auto__,c__6192__auto__,btn_home){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21120 = [null,null,null,null,null,null,null];(statearr_21120[(0)] = state_machine__6178__auto__);
(statearr_21120[(1)] = (1));
return statearr_21120;
});
var state_machine__6178__auto____1 = (function (state_21115){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21115);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21121){if((e21121 instanceof Object))
{var ex__6181__auto__ = e21121;var statearr_21122_21124 = state_21115;(statearr_21122_21124[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21115);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21125 = state_21115;
state_21115 = G__21125;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21115){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,btn_home))
})();var state__6194__auto__ = (function (){var statearr_21123 = f__6193__auto__.call(null);(statearr_21123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,btn_home))
);
return c__6192__auto__;
});})(btn_home))
);
});
app.main.create_router = (function create_router(){var Router = Backbone.Router.extend((function (){var obj21320 = {"ModelList":(function (page){console.log(page);
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21329){var state_val_21330 = (state_21329[(1)]);if((state_val_21330 === (2)))
{var inst_21327 = (state_21329[(2)]);var state_21329__$1 = state_21329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21329__$1,inst_21327);
} else
{if((state_val_21330 === (1)))
{var inst_21321 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_21322 = [page];var inst_21323 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21321,inst_21322);var inst_21324 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_21323];var inst_21325 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21324,null));var state_21329__$1 = state_21329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21329__$1,(2),tool.react.OnReact,inst_21325);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21334 = [null,null,null,null,null,null,null];(statearr_21334[(0)] = state_machine__6178__auto__);
(statearr_21334[(1)] = (1));
return statearr_21334;
});
var state_machine__6178__auto____1 = (function (state_21329){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21329);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21335){if((e21335 instanceof Object))
{var ex__6181__auto__ = e21335;var statearr_21336_21512 = state_21329;(statearr_21336_21512[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21329);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21513 = state_21329;
state_21329 = G__21513;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21329){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21337 = f__6193__auto__.call(null);(statearr_21337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnap":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21347){var state_val_21348 = (state_21347[(1)]);if((state_val_21348 === (2)))
{var inst_21345 = (state_21347[(2)]);var state_21347__$1 = state_21347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21347__$1,inst_21345);
} else
{if((state_val_21348 === (1)))
{var inst_21338 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_21339 = encodeURIComponent(id);var inst_21340 = [inst_21339];var inst_21341 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21338,inst_21340);var inst_21342 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),inst_21341];var inst_21343 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21342,null));var state_21347__$1 = state_21347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21347__$1,(2),tool.react.OnReact,inst_21343);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21352 = [null,null,null,null,null,null,null];(statearr_21352[(0)] = state_machine__6178__auto__);
(statearr_21352[(1)] = (1));
return statearr_21352;
});
var state_machine__6178__auto____1 = (function (state_21347){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21347);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21353){if((e21353 instanceof Object))
{var ex__6181__auto__ = e21353;var statearr_21354_21514 = state_21347;(statearr_21354_21514[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21515 = state_21347;
state_21347 = G__21515;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21347){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21355 = f__6193__auto__.call(null);(statearr_21355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"News":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21365){var state_val_21366 = (state_21365[(1)]);if((state_val_21366 === (2)))
{var inst_21363 = (state_21365[(2)]);var state_21365__$1 = state_21365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21365__$1,inst_21363);
} else
{if((state_val_21366 === (1)))
{var inst_21356 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_21357 = encodeURIComponent(id);var inst_21358 = [inst_21357];var inst_21359 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21356,inst_21358);var inst_21360 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toNews","toNews",1841267218),inst_21359];var inst_21361 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21360,null));var state_21365__$1 = state_21365;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21365__$1,(2),tool.react.OnReact,inst_21361);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21370 = [null,null,null,null,null,null,null];(statearr_21370[(0)] = state_machine__6178__auto__);
(statearr_21370[(1)] = (1));
return statearr_21370;
});
var state_machine__6178__auto____1 = (function (state_21365){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21365);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21371){if((e21371 instanceof Object))
{var ex__6181__auto__ = e21371;var statearr_21372_21516 = state_21365;(statearr_21372_21516[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21365);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21517 = state_21365;
state_21365 = G__21517;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21365){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21373 = f__6193__auto__.call(null);(statearr_21373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Product":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21383){var state_val_21384 = (state_21383[(1)]);if((state_val_21384 === (2)))
{var inst_21381 = (state_21383[(2)]);var state_21383__$1 = state_21383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21383__$1,inst_21381);
} else
{if((state_val_21384 === (1)))
{var inst_21374 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_21375 = encodeURIComponent(id);var inst_21376 = [inst_21375];var inst_21377 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21374,inst_21376);var inst_21378 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),inst_21377];var inst_21379 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21378,null));var state_21383__$1 = state_21383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21383__$1,(2),tool.react.OnReact,inst_21379);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21388 = [null,null,null,null,null,null,null];(statearr_21388[(0)] = state_machine__6178__auto__);
(statearr_21388[(1)] = (1));
return statearr_21388;
});
var state_machine__6178__auto____1 = (function (state_21383){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21383);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21389){if((e21389 instanceof Object))
{var ex__6181__auto__ = e21389;var statearr_21390_21518 = state_21383;(statearr_21390_21518[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21383);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21519 = state_21383;
state_21383 = G__21519;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21383){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21391 = f__6193__auto__.call(null);(statearr_21391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnapList":(function (page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21400){var state_val_21401 = (state_21400[(1)]);if((state_val_21401 === (2)))
{var inst_21398 = (state_21400[(2)]);var state_21400__$1 = state_21400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21400__$1,inst_21398);
} else
{if((state_val_21401 === (1)))
{var inst_21392 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_21393 = [page];var inst_21394 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21392,inst_21393);var inst_21395 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_21394];var inst_21396 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21395,null));var state_21400__$1 = state_21400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21400__$1,(2),tool.react.OnReact,inst_21396);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21405 = [null,null,null,null,null,null,null];(statearr_21405[(0)] = state_machine__6178__auto__);
(statearr_21405[(1)] = (1));
return statearr_21405;
});
var state_machine__6178__auto____1 = (function (state_21400){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21400);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21406){if((e21406 instanceof Object))
{var ex__6181__auto__ = e21406;var statearr_21407_21520 = state_21400;(statearr_21407_21520[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21400);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21521 = state_21400;
state_21400 = G__21521;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21400){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21408 = f__6193__auto__.call(null);(statearr_21408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"ProductList":(function (search){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21417){var state_val_21418 = (state_21417[(1)]);if((state_val_21418 === (2)))
{var inst_21415 = (state_21417[(2)]);var state_21417__$1 = state_21417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21417__$1,inst_21415);
} else
{if((state_val_21418 === (1)))
{var inst_21409 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_21410 = [search];var inst_21411 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21409,inst_21410);var inst_21412 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_21411];var inst_21413 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21412,null));var state_21417__$1 = state_21417;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21417__$1,(2),tool.react.OnReact,inst_21413);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21422 = [null,null,null,null,null,null,null];(statearr_21422[(0)] = state_machine__6178__auto__);
(statearr_21422[(1)] = (1));
return statearr_21422;
});
var state_machine__6178__auto____1 = (function (state_21417){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21417);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21423){if((e21423 instanceof Object))
{var ex__6181__auto__ = e21423;var statearr_21424_21522 = state_21417;(statearr_21424_21522[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21417);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21523 = state_21417;
state_21417 = G__21523;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21417){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21425 = f__6193__auto__.call(null);(statearr_21425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"ModelListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21434){var state_val_21435 = (state_21434[(1)]);if((state_val_21435 === (2)))
{var inst_21432 = (state_21434[(2)]);var state_21434__$1 = state_21434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21434__$1,inst_21432);
} else
{if((state_val_21435 === (1)))
{var inst_21426 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_21427 = [search,page];var inst_21428 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21426,inst_21427);var inst_21429 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_21428];var inst_21430 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21429,null));var state_21434__$1 = state_21434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21434__$1,(2),tool.react.OnReact,inst_21430);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21439 = [null,null,null,null,null,null,null];(statearr_21439[(0)] = state_machine__6178__auto__);
(statearr_21439[(1)] = (1));
return statearr_21439;
});
var state_machine__6178__auto____1 = (function (state_21434){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21434);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21440){if((e21440 instanceof Object))
{var ex__6181__auto__ = e21440;var statearr_21441_21524 = state_21434;(statearr_21441_21524[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21434);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21525 = state_21434;
state_21434 = G__21525;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21434){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21442 = f__6193__auto__.call(null);(statearr_21442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Event":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21452){var state_val_21453 = (state_21452[(1)]);if((state_val_21453 === (2)))
{var inst_21450 = (state_21452[(2)]);var state_21452__$1 = state_21452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21452__$1,inst_21450);
} else
{if((state_val_21453 === (1)))
{var inst_21443 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_21444 = encodeURIComponent(id);var inst_21445 = [inst_21444];var inst_21446 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21443,inst_21445);var inst_21447 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),inst_21446];var inst_21448 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21447,null));var state_21452__$1 = state_21452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21452__$1,(2),tool.react.OnReact,inst_21448);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21457 = [null,null,null,null,null,null,null];(statearr_21457[(0)] = state_machine__6178__auto__);
(statearr_21457[(1)] = (1));
return statearr_21457;
});
var state_machine__6178__auto____1 = (function (state_21452){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21452);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21458){if((e21458 instanceof Object))
{var ex__6181__auto__ = e21458;var statearr_21459_21526 = state_21452;(statearr_21459_21526[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21452);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21527 = state_21452;
state_21452 = G__21527;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21452){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21460 = f__6193__auto__.call(null);(statearr_21460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Model":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21470){var state_val_21471 = (state_21470[(1)]);if((state_val_21471 === (2)))
{var inst_21468 = (state_21470[(2)]);var state_21470__$1 = state_21470;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21470__$1,inst_21468);
} else
{if((state_val_21471 === (1)))
{var inst_21461 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_21462 = encodeURIComponent(id);var inst_21463 = [inst_21462];var inst_21464 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21461,inst_21463);var inst_21465 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),inst_21464];var inst_21466 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21465,null));var state_21470__$1 = state_21470;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21470__$1,(2),tool.react.OnReact,inst_21466);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21475 = [null,null,null,null,null,null,null];(statearr_21475[(0)] = state_machine__6178__auto__);
(statearr_21475[(1)] = (1));
return statearr_21475;
});
var state_machine__6178__auto____1 = (function (state_21470){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21470);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21476){if((e21476 instanceof Object))
{var ex__6181__auto__ = e21476;var statearr_21477_21528 = state_21470;(statearr_21477_21528[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21470);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21529 = state_21470;
state_21470 = G__21529;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21470){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21478 = f__6193__auto__.call(null);(statearr_21478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnapListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21487){var state_val_21488 = (state_21487[(1)]);if((state_val_21488 === (2)))
{var inst_21485 = (state_21487[(2)]);var state_21487__$1 = state_21487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21487__$1,inst_21485);
} else
{if((state_val_21488 === (1)))
{var inst_21479 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_21480 = [search,page];var inst_21481 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21479,inst_21480);var inst_21482 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_21481];var inst_21483 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21482,null));var state_21487__$1 = state_21487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21487__$1,(2),tool.react.OnReact,inst_21483);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21492 = [null,null,null,null,null,null,null];(statearr_21492[(0)] = state_machine__6178__auto__);
(statearr_21492[(1)] = (1));
return statearr_21492;
});
var state_machine__6178__auto____1 = (function (state_21487){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21487);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21493){if((e21493 instanceof Object))
{var ex__6181__auto__ = e21493;var statearr_21494_21530 = state_21487;(statearr_21494_21530[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21487);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21531 = state_21487;
state_21487 = G__21531;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21487){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21495 = f__6193__auto__.call(null);(statearr_21495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"default":(function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_21501){var state_val_21502 = (state_21501[(1)]);if((state_val_21502 === (2)))
{var inst_21499 = (state_21501[(2)]);var state_21501__$1 = state_21501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21501__$1,inst_21499);
} else
{if((state_val_21502 === (1)))
{var inst_21496 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toHome","toHome",-1352725795),null];var inst_21497 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21496,null));var state_21501__$1 = state_21501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21501__$1,(2),tool.react.OnReact,inst_21497);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21506 = [null,null,null,null,null,null,null];(statearr_21506[(0)] = state_machine__6178__auto__);
(statearr_21506[(1)] = (1));
return statearr_21506;
});
var state_machine__6178__auto____1 = (function (state_21501){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21501);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21507){if((e21507 instanceof Object))
{var ex__6181__auto__ = e21507;var statearr_21508_21532 = state_21501;(statearr_21508_21532[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21501);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21507;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21533 = state_21501;
state_21501 = G__21533;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21501){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_21509 = f__6193__auto__.call(null);(statearr_21509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"routes":(function (){var obj21511 = {"":"default","ModelList":"ModelList","StreetSnap":"StreetSnap","News":"News","Product":"Product","Model/id=:id":"Model","StreetSnapList":"StreetSnapList","StreetSnapList/search=:search/:page":"StreetSnapListSearch","ModelList/search=:search/:page":"ModelListSearch","ProductList":"ProductList","Event":"Event","Product/id=:id":"Product","ProductList/search=:search":"ProductList","Model":"Model","StreetSnapList/:page":"StreetSnapList","News/id=:id":"News","StreetSnap/id=:id":"StreetSnap","ModelList/:page":"ModelList"};return obj21511;
})()};return obj21320;
})());var router = (new Router());return router;
});
app.main.main.call(null);
