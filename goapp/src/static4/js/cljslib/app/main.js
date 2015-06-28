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
app.main.main = (function main(){var urlRouter = app.main.create_router.call(null);var route = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Big","Big",-1370423625),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)],[new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),cljs.core.identity], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),app.action.Navigate], null),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),app.action.Navigate], null),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),app.action.Navigate], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),new cljs.core.Keyword(null,"toHome","toHome",-1352725795)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.ChangeView], null)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.ShowLoadingImage,app.action.ChangeLogo,app.action.Unuse.call(null,app.action.ShowFooterOrNot))], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.CloseView], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null)], null)]);var sdyleColor = "rgb(185,71,132)";var root = $(".root");var tmpl_item = (function (){var obj24683 = {"brandToColor":((function (urlRouter,route,sdyleColor,root){
return (function (brand){if((brand.length > (0)))
{return sdyleColor;
} else
{return "rgb(122,122,122)";
}
});})(urlRouter,route,sdyleColor,root))
,"checkHot":((function (urlRouter,route,sdyleColor,root){
return (function (timestr){var tomorrow = Date.today().add((function (){var obj24685 = {"days":(1)};return obj24685;
})());var startday = Date.today().add((function (){var obj24687 = {"days":(-1)};return obj24687;
})());var now = Date.parse(timestr);return now.between(startday,tomorrow);
});})(urlRouter,route,sdyleColor,root))
};return obj24683;
})();var ctx = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"router","router",1091916230),urlRouter,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852),root.find("#mc_popupContainer"),new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701),tmpl_item], null);app.main.menubar.call(null,root);
app.main.header.call(null,urlRouter,root);
var c__6234__auto___24700 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto___24700,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto___24700,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function (state_24691){var state_val_24692 = (state_24691[(1)]);if((state_val_24692 === (1)))
{var inst_24688 = cljs.core.partial.call(null,tool.react.React,route);var inst_24689 = cljs.core.async.reduce.call(null,inst_24688,ctx,tool.react.OnReact);var state_24691__$1 = state_24691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24691__$1,inst_24689);
} else
{return null;
}
});})(c__6234__auto___24700,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
;return ((function (switch__6178__auto__,c__6234__auto___24700,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_24696 = [null,null,null,null,null,null,null];(statearr_24696[(0)] = state_machine__6179__auto__);
(statearr_24696[(1)] = (1));
return statearr_24696;
});
var state_machine__6179__auto____1 = (function (state_24691){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_24691);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e24697){if((e24697 instanceof Object))
{var ex__6182__auto__ = e24697;var statearr_24698_24701 = state_24691;(statearr_24698_24701[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24691);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24702 = state_24691;
state_24691 = G__24702;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_24691){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_24691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto___24700,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
})();var state__6236__auto__ = (function (){var statearr_24699 = f__6235__auto__.call(null);(statearr_24699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto___24700);
return statearr_24699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto___24700,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
);
return Backbone.history.start();
});
app.main.menubar = (function menubar(root){var menubar__$1 = root.find("#mc_menubar");var handleBtnMouseOut = ((function (menubar__$1){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj24723 = {"width":"0px"};return obj24723;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj24725 = {"width":"120px"};return obj24725;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__24726 = cljs.core._EQ_;var expr__24727 = id;if(cljs.core.truth_(pred__24726.call(null,"btn_nav_celebrity",expr__24727)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__24726.call(null,"btn_nav_event",expr__24727)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__24726.call(null,"btn_nav_model",expr__24727)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__24726.call(null,"btn_nav_streetSnap",expr__24727)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__24726.call(null,"btn_nav_product",expr__24727)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),null], null);
} else
{if(cljs.core.truth_(pred__24726.call(null,"btn_nav_news",expr__24727)))
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
})();var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (state_24732){var state_val_24733 = (state_24732[(1)]);if((state_val_24733 === (2)))
{var inst_24730 = (state_24732[(2)]);var state_24732__$1 = state_24732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24732__$1,inst_24730);
} else
{if((state_val_24733 === (1)))
{var state_24732__$1 = state_24732;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24732__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6234__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6178__auto__,c__6234__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_24737 = [null,null,null,null,null,null,null];(statearr_24737[(0)] = state_machine__6179__auto__);
(statearr_24737[(1)] = (1));
return statearr_24737;
});
var state_machine__6179__auto____1 = (function (state_24732){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_24732);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e24738){if((e24738 instanceof Object))
{var ex__6182__auto__ = e24738;var statearr_24739_24741 = state_24732;(statearr_24739_24741[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24732);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24742 = state_24732;
state_24732 = G__24742;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_24732){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_24732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6236__auto__ = (function (){var statearr_24740 = f__6235__auto__.call(null);(statearr_24740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_24740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6234__auto__;
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
app.main.header = (function header(router,root){var btn_home = root.find("#btn_backhome");return btn_home.click(((function (btn_home){
return (function (){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,btn_home){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,btn_home){
return (function (state_24762){var state_val_24763 = (state_24762[(1)]);if((state_val_24763 === (2)))
{var inst_24760 = (state_24762[(2)]);var state_24762__$1 = state_24762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24762__$1,inst_24760);
} else
{if((state_val_24763 === (1)))
{var inst_24757 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_24758 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24757,null));var state_24762__$1 = state_24762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24762__$1,(2),tool.react.OnReact,inst_24758);
} else
{return null;
}
}
});})(c__6234__auto__,btn_home))
;return ((function (switch__6178__auto__,c__6234__auto__,btn_home){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_24767 = [null,null,null,null,null,null,null];(statearr_24767[(0)] = state_machine__6179__auto__);
(statearr_24767[(1)] = (1));
return statearr_24767;
});
var state_machine__6179__auto____1 = (function (state_24762){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_24762);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e24768){if((e24768 instanceof Object))
{var ex__6182__auto__ = e24768;var statearr_24769_24771 = state_24762;(statearr_24769_24771[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24772 = state_24762;
state_24762 = G__24772;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_24762){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_24762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,btn_home))
})();var state__6236__auto__ = (function (){var statearr_24770 = f__6235__auto__.call(null);(statearr_24770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_24770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,btn_home))
);
return c__6234__auto__;
});})(btn_home))
);
});
app.main.create_router = (function create_router(){var Router = Backbone.Router.extend((function (){var obj24987 = {"ProductListSearch":(function (search,page){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__){
return (function (state_24997){var state_val_24998 = (state_24997[(1)]);if((state_val_24998 === (2)))
{var inst_24995 = (state_24997[(2)]);var state_24997__$1 = state_24997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24997__$1,inst_24995);
} else
{if((state_val_24998 === (1)))
{var inst_24988 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_24989 = (page | (0));var inst_24990 = [search,inst_24989];var inst_24991 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24988,inst_24990);var inst_24992 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_24991];var inst_24993 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24992,null));var state_24997__$1 = state_24997;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24997__$1,(2),tool.react.OnReact,inst_24993);
} else
{return null;
}
}
});})(c__6234__auto__))
;return ((function (switch__6178__auto__,c__6234__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25002 = [null,null,null,null,null,null,null];(statearr_25002[(0)] = state_machine__6179__auto__);
(statearr_25002[(1)] = (1));
return statearr_25002;
});
var state_machine__6179__auto____1 = (function (state_24997){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_24997);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25003){if((e25003 instanceof Object))
{var ex__6182__auto__ = e25003;var statearr_25004_25199 = state_24997;(statearr_25004_25199[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24997);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25200 = state_24997;
state_24997 = G__25200;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_24997){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_24997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__))
})();var state__6236__auto__ = (function (){var statearr_25005 = f__6235__auto__.call(null);(statearr_25005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__))
);
return c__6234__auto__;
}),"ModelList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,real){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,real){
return (function (state_25014){var state_val_25015 = (state_25014[(1)]);if((state_val_25015 === (2)))
{var inst_25012 = (state_25014[(2)]);var state_25014__$1 = state_25014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25014__$1,inst_25012);
} else
{if((state_val_25015 === (1)))
{var inst_25006 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_25007 = [real];var inst_25008 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25006,inst_25007);var inst_25009 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_25008];var inst_25010 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25009,null));var state_25014__$1 = state_25014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25014__$1,(2),tool.react.OnReact,inst_25010);
} else
{return null;
}
}
});})(c__6234__auto__,real))
;return ((function (switch__6178__auto__,c__6234__auto__,real){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25019 = [null,null,null,null,null,null,null];(statearr_25019[(0)] = state_machine__6179__auto__);
(statearr_25019[(1)] = (1));
return statearr_25019;
});
var state_machine__6179__auto____1 = (function (state_25014){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25014);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25020){if((e25020 instanceof Object))
{var ex__6182__auto__ = e25020;var statearr_25021_25201 = state_25014;(statearr_25021_25201[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25202 = state_25014;
state_25014 = G__25202;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25014){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,real))
})();var state__6236__auto__ = (function (){var statearr_25022 = f__6235__auto__.call(null);(statearr_25022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,real))
);
return c__6234__auto__;
}),"StreetSnap":(function (id){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__){
return (function (state_25032){var state_val_25033 = (state_25032[(1)]);if((state_val_25033 === (2)))
{var inst_25030 = (state_25032[(2)]);var state_25032__$1 = state_25032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25032__$1,inst_25030);
} else
{if((state_val_25033 === (1)))
{var inst_25023 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_25024 = encodeURIComponent(id);var inst_25025 = [inst_25024];var inst_25026 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25023,inst_25025);var inst_25027 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),inst_25026];var inst_25028 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25027,null));var state_25032__$1 = state_25032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25032__$1,(2),tool.react.OnReact,inst_25028);
} else
{return null;
}
}
});})(c__6234__auto__))
;return ((function (switch__6178__auto__,c__6234__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25037 = [null,null,null,null,null,null,null];(statearr_25037[(0)] = state_machine__6179__auto__);
(statearr_25037[(1)] = (1));
return statearr_25037;
});
var state_machine__6179__auto____1 = (function (state_25032){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25032);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25038){if((e25038 instanceof Object))
{var ex__6182__auto__ = e25038;var statearr_25039_25203 = state_25032;(statearr_25039_25203[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25032);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25204 = state_25032;
state_25032 = G__25204;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25032){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__))
})();var state__6236__auto__ = (function (){var statearr_25040 = f__6235__auto__.call(null);(statearr_25040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__))
);
return c__6234__auto__;
}),"News":(function (id){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__){
return (function (state_25050){var state_val_25051 = (state_25050[(1)]);if((state_val_25051 === (2)))
{var inst_25048 = (state_25050[(2)]);var state_25050__$1 = state_25050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25050__$1,inst_25048);
} else
{if((state_val_25051 === (1)))
{var inst_25041 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_25042 = encodeURIComponent(id);var inst_25043 = [inst_25042];var inst_25044 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25041,inst_25043);var inst_25045 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toNews","toNews",1841267218),inst_25044];var inst_25046 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25045,null));var state_25050__$1 = state_25050;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25050__$1,(2),tool.react.OnReact,inst_25046);
} else
{return null;
}
}
});})(c__6234__auto__))
;return ((function (switch__6178__auto__,c__6234__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25055 = [null,null,null,null,null,null,null];(statearr_25055[(0)] = state_machine__6179__auto__);
(statearr_25055[(1)] = (1));
return statearr_25055;
});
var state_machine__6179__auto____1 = (function (state_25050){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25050);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25056){if((e25056 instanceof Object))
{var ex__6182__auto__ = e25056;var statearr_25057_25205 = state_25050;(statearr_25057_25205[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25050);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25206 = state_25050;
state_25050 = G__25206;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25050){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__))
})();var state__6236__auto__ = (function (){var statearr_25058 = f__6235__auto__.call(null);(statearr_25058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__))
);
return c__6234__auto__;
}),"Product":(function (id){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__){
return (function (state_25068){var state_val_25069 = (state_25068[(1)]);if((state_val_25069 === (2)))
{var inst_25066 = (state_25068[(2)]);var state_25068__$1 = state_25068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25068__$1,inst_25066);
} else
{if((state_val_25069 === (1)))
{var inst_25059 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_25060 = encodeURIComponent(id);var inst_25061 = [inst_25060];var inst_25062 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25059,inst_25061);var inst_25063 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),inst_25062];var inst_25064 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25063,null));var state_25068__$1 = state_25068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25068__$1,(2),tool.react.OnReact,inst_25064);
} else
{return null;
}
}
});})(c__6234__auto__))
;return ((function (switch__6178__auto__,c__6234__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25073 = [null,null,null,null,null,null,null];(statearr_25073[(0)] = state_machine__6179__auto__);
(statearr_25073[(1)] = (1));
return statearr_25073;
});
var state_machine__6179__auto____1 = (function (state_25068){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25068);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25074){if((e25074 instanceof Object))
{var ex__6182__auto__ = e25074;var statearr_25075_25207 = state_25068;(statearr_25075_25207[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25068);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25208 = state_25068;
state_25068 = G__25208;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25068){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__))
})();var state__6236__auto__ = (function (){var statearr_25076 = f__6235__auto__.call(null);(statearr_25076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__))
);
return c__6234__auto__;
}),"StreetSnapList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,real){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,real){
return (function (state_25085){var state_val_25086 = (state_25085[(1)]);if((state_val_25086 === (2)))
{var inst_25083 = (state_25085[(2)]);var state_25085__$1 = state_25085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25085__$1,inst_25083);
} else
{if((state_val_25086 === (1)))
{var inst_25077 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_25078 = [real];var inst_25079 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25077,inst_25078);var inst_25080 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_25079];var inst_25081 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25080,null));var state_25085__$1 = state_25085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25085__$1,(2),tool.react.OnReact,inst_25081);
} else
{return null;
}
}
});})(c__6234__auto__,real))
;return ((function (switch__6178__auto__,c__6234__auto__,real){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25090 = [null,null,null,null,null,null,null];(statearr_25090[(0)] = state_machine__6179__auto__);
(statearr_25090[(1)] = (1));
return statearr_25090;
});
var state_machine__6179__auto____1 = (function (state_25085){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25085);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25091){if((e25091 instanceof Object))
{var ex__6182__auto__ = e25091;var statearr_25092_25209 = state_25085;(statearr_25092_25209[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25085);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25210 = state_25085;
state_25085 = G__25210;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25085){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,real))
})();var state__6236__auto__ = (function (){var statearr_25093 = f__6235__auto__.call(null);(statearr_25093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,real))
);
return c__6234__auto__;
}),"ProductList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,real){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,real){
return (function (state_25102){var state_val_25103 = (state_25102[(1)]);if((state_val_25103 === (2)))
{var inst_25100 = (state_25102[(2)]);var state_25102__$1 = state_25102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25102__$1,inst_25100);
} else
{if((state_val_25103 === (1)))
{var inst_25094 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_25095 = [real];var inst_25096 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25094,inst_25095);var inst_25097 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_25096];var inst_25098 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25097,null));var state_25102__$1 = state_25102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25102__$1,(2),tool.react.OnReact,inst_25098);
} else
{return null;
}
}
});})(c__6234__auto__,real))
;return ((function (switch__6178__auto__,c__6234__auto__,real){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25107 = [null,null,null,null,null,null,null];(statearr_25107[(0)] = state_machine__6179__auto__);
(statearr_25107[(1)] = (1));
return statearr_25107;
});
var state_machine__6179__auto____1 = (function (state_25102){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25102);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25108){if((e25108 instanceof Object))
{var ex__6182__auto__ = e25108;var statearr_25109_25211 = state_25102;(statearr_25109_25211[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25212 = state_25102;
state_25102 = G__25212;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25102){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,real))
})();var state__6236__auto__ = (function (){var statearr_25110 = f__6235__auto__.call(null);(statearr_25110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,real))
);
return c__6234__auto__;
}),"ModelListSearch":(function (search,page){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__){
return (function (state_25120){var state_val_25121 = (state_25120[(1)]);if((state_val_25121 === (2)))
{var inst_25118 = (state_25120[(2)]);var state_25120__$1 = state_25120;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25120__$1,inst_25118);
} else
{if((state_val_25121 === (1)))
{var inst_25111 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_25112 = (page | (0));var inst_25113 = [search,inst_25112];var inst_25114 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25111,inst_25113);var inst_25115 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_25114];var inst_25116 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25115,null));var state_25120__$1 = state_25120;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25120__$1,(2),tool.react.OnReact,inst_25116);
} else
{return null;
}
}
});})(c__6234__auto__))
;return ((function (switch__6178__auto__,c__6234__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25125 = [null,null,null,null,null,null,null];(statearr_25125[(0)] = state_machine__6179__auto__);
(statearr_25125[(1)] = (1));
return statearr_25125;
});
var state_machine__6179__auto____1 = (function (state_25120){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25120);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25126){if((e25126 instanceof Object))
{var ex__6182__auto__ = e25126;var statearr_25127_25213 = state_25120;(statearr_25127_25213[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25120);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25214 = state_25120;
state_25120 = G__25214;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25120){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__))
})();var state__6236__auto__ = (function (){var statearr_25128 = f__6235__auto__.call(null);(statearr_25128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__))
);
return c__6234__auto__;
}),"Event":(function (id){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__){
return (function (state_25138){var state_val_25139 = (state_25138[(1)]);if((state_val_25139 === (2)))
{var inst_25136 = (state_25138[(2)]);var state_25138__$1 = state_25138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25138__$1,inst_25136);
} else
{if((state_val_25139 === (1)))
{var inst_25129 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_25130 = encodeURIComponent(id);var inst_25131 = [inst_25130];var inst_25132 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25129,inst_25131);var inst_25133 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),inst_25132];var inst_25134 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25133,null));var state_25138__$1 = state_25138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25138__$1,(2),tool.react.OnReact,inst_25134);
} else
{return null;
}
}
});})(c__6234__auto__))
;return ((function (switch__6178__auto__,c__6234__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25143 = [null,null,null,null,null,null,null];(statearr_25143[(0)] = state_machine__6179__auto__);
(statearr_25143[(1)] = (1));
return statearr_25143;
});
var state_machine__6179__auto____1 = (function (state_25138){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25138);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25144){if((e25144 instanceof Object))
{var ex__6182__auto__ = e25144;var statearr_25145_25215 = state_25138;(statearr_25145_25215[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25216 = state_25138;
state_25138 = G__25216;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25138){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__))
})();var state__6236__auto__ = (function (){var statearr_25146 = f__6235__auto__.call(null);(statearr_25146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__))
);
return c__6234__auto__;
}),"Model":(function (id){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__){
return (function (state_25156){var state_val_25157 = (state_25156[(1)]);if((state_val_25157 === (2)))
{var inst_25154 = (state_25156[(2)]);var state_25156__$1 = state_25156;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25156__$1,inst_25154);
} else
{if((state_val_25157 === (1)))
{var inst_25147 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_25148 = encodeURIComponent(id);var inst_25149 = [inst_25148];var inst_25150 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25147,inst_25149);var inst_25151 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),inst_25150];var inst_25152 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25151,null));var state_25156__$1 = state_25156;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25156__$1,(2),tool.react.OnReact,inst_25152);
} else
{return null;
}
}
});})(c__6234__auto__))
;return ((function (switch__6178__auto__,c__6234__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25161 = [null,null,null,null,null,null,null];(statearr_25161[(0)] = state_machine__6179__auto__);
(statearr_25161[(1)] = (1));
return statearr_25161;
});
var state_machine__6179__auto____1 = (function (state_25156){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25156);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25162){if((e25162 instanceof Object))
{var ex__6182__auto__ = e25162;var statearr_25163_25217 = state_25156;(statearr_25163_25217[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25156);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25162;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25218 = state_25156;
state_25156 = G__25218;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25156){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__))
})();var state__6236__auto__ = (function (){var statearr_25164 = f__6235__auto__.call(null);(statearr_25164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__))
);
return c__6234__auto__;
}),"StreetSnapListSearch":(function (search,page){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__){
return (function (state_25174){var state_val_25175 = (state_25174[(1)]);if((state_val_25175 === (2)))
{var inst_25172 = (state_25174[(2)]);var state_25174__$1 = state_25174;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25174__$1,inst_25172);
} else
{if((state_val_25175 === (1)))
{var inst_25165 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_25166 = (page | (0));var inst_25167 = [search,inst_25166];var inst_25168 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25165,inst_25167);var inst_25169 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_25168];var inst_25170 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25169,null));var state_25174__$1 = state_25174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25174__$1,(2),tool.react.OnReact,inst_25170);
} else
{return null;
}
}
});})(c__6234__auto__))
;return ((function (switch__6178__auto__,c__6234__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25179 = [null,null,null,null,null,null,null];(statearr_25179[(0)] = state_machine__6179__auto__);
(statearr_25179[(1)] = (1));
return statearr_25179;
});
var state_machine__6179__auto____1 = (function (state_25174){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25174);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25180){if((e25180 instanceof Object))
{var ex__6182__auto__ = e25180;var statearr_25181_25219 = state_25174;(statearr_25181_25219[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25220 = state_25174;
state_25174 = G__25220;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25174){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__))
})();var state__6236__auto__ = (function (){var statearr_25182 = f__6235__auto__.call(null);(statearr_25182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__))
);
return c__6234__auto__;
}),"default":(function (){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__){
return (function (state_25188){var state_val_25189 = (state_25188[(1)]);if((state_val_25189 === (2)))
{var inst_25186 = (state_25188[(2)]);var state_25188__$1 = state_25188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25188__$1,inst_25186);
} else
{if((state_val_25189 === (1)))
{var inst_25183 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toHome","toHome",-1352725795),null];var inst_25184 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25183,null));var state_25188__$1 = state_25188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25188__$1,(2),tool.react.OnReact,inst_25184);
} else
{return null;
}
}
});})(c__6234__auto__))
;return ((function (switch__6178__auto__,c__6234__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_25193 = [null,null,null,null,null,null,null];(statearr_25193[(0)] = state_machine__6179__auto__);
(statearr_25193[(1)] = (1));
return statearr_25193;
});
var state_machine__6179__auto____1 = (function (state_25188){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_25188);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e25194){if((e25194 instanceof Object))
{var ex__6182__auto__ = e25194;var statearr_25195_25221 = state_25188;(statearr_25195_25221[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25188);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25222 = state_25188;
state_25188 = G__25222;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_25188){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_25188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__))
})();var state__6236__auto__ = (function (){var statearr_25196 = f__6235__auto__.call(null);(statearr_25196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_25196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__))
);
return c__6234__auto__;
}),"routes":(function (){var obj25198 = {"":"default","ModelList/:search/:page":"ModelListSearch","ModelList":"ModelList","StreetSnap":"StreetSnap","News":"News","Product":"Product","Model/id=:id":"Model","StreetSnapList":"StreetSnapList","ProductList/:search/:page":"ProductListSearch","ProductList":"ProductList","Event":"Event","Product/id=:id":"Product","Model":"Model","ProductList/:page":"ProductList","StreetSnapList/:page":"StreetSnapList","News/id=:id":"News","StreetSnapList/:search/:page":"StreetSnapListSearch","StreetSnap/id=:id":"StreetSnap","ModelList/:page":"ModelList"};return obj25198;
})()};return obj24987;
})());var router = (new Router());return router;
});
app.main.main.call(null);
