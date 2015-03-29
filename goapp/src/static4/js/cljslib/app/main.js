// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('app.view');
goog.require('app.view');
goog.require('app.model');
goog.require('app.model');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.main.menubar = (function menubar(root){var menubar__$1 = root.find("#mc_menubar");var handleBtnMouseOut = ((function (menubar__$1){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj10464 = {"width":"0px"};return obj10464;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj10466 = {"width":"120px"};return obj10466;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__10467 = cljs.core._EQ_;var expr__10468 = id;if(cljs.core.truth_(pred__10467.call(null,"btn_nav_celebrity",expr__10468)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__10467.call(null,"btn_nav_event",expr__10468)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__10467.call(null,"btn_nav_model",expr__10468)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__10467.call(null,"btn_nav_streetSnap",expr__10468)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__10467.call(null,"btn_nav_product",expr__10468)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),null], null);
} else
{return cljs.core.identity;
}
}
}
}
}
})();var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (state_10473){var state_val_10474 = (state_10473[(1)]);if((state_val_10474 === (2)))
{var inst_10471 = (state_10473[(2)]);var state_10473__$1 = state_10473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10473__$1,inst_10471);
} else
{if((state_val_10474 === (1)))
{var state_10473__$1 = state_10473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10473__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6201__auto__,c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10478 = [null,null,null,null,null,null,null];(statearr_10478[(0)] = state_machine__6202__auto__);
(statearr_10478[(1)] = (1));
return statearr_10478;
});
var state_machine__6202__auto____1 = (function (state_10473){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10473);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10479){if((e10479 instanceof Object))
{var ex__6205__auto__ = e10479;var statearr_10480_10482 = state_10473;(statearr_10480_10482[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10473);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10483 = state_10473;
state_10473 = G__10483;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10473){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6218__auto__ = (function (){var statearr_10481 = f__6217__auto__.call(null);(statearr_10481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6216__auto__;
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
app.main.main = (function main(){var route = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Open","Open",-1161482466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.OpenView], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.ChangeView], null)], null)], null);var root = $(".root");var ctx = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer")], null);app.main.menubar.call(null,root);
var c__6216__auto___10536 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___10536,route,root,ctx){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___10536,route,root,ctx){
return (function (state_10513){var state_val_10514 = (state_10513[(1)]);if((state_val_10514 === (1)))
{var inst_10510 = cljs.core.partial.call(null,tool.react.React,route);var inst_10511 = cljs.core.async.reduce.call(null,inst_10510,ctx,tool.react.OnReact);var state_10513__$1 = state_10513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10513__$1,inst_10511);
} else
{return null;
}
});})(c__6216__auto___10536,route,root,ctx))
;return ((function (switch__6201__auto__,c__6216__auto___10536,route,root,ctx){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10518 = [null,null,null,null,null,null,null];(statearr_10518[(0)] = state_machine__6202__auto__);
(statearr_10518[(1)] = (1));
return statearr_10518;
});
var state_machine__6202__auto____1 = (function (state_10513){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10513);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10519){if((e10519 instanceof Object))
{var ex__6205__auto__ = e10519;var statearr_10520_10537 = state_10513;(statearr_10520_10537[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10538 = state_10513;
state_10513 = G__10538;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10513){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___10536,route,root,ctx))
})();var state__6218__auto__ = (function (){var statearr_10521 = f__6217__auto__.call(null);(statearr_10521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___10536);
return statearr_10521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___10536,route,root,ctx))
);
var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,route,root,ctx){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,route,root,ctx){
return (function (state_10527){var state_val_10528 = (state_10527[(1)]);if((state_val_10528 === (2)))
{var inst_10525 = (state_10527[(2)]);var state_10527__$1 = state_10527;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10527__$1,inst_10525);
} else
{if((state_val_10528 === (1)))
{var inst_10522 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Open","Open",-1161482466),null];var inst_10523 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10522,null));var state_10527__$1 = state_10527;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10527__$1,(2),tool.react.OnReact,inst_10523);
} else
{return null;
}
}
});})(c__6216__auto__,route,root,ctx))
;return ((function (switch__6201__auto__,c__6216__auto__,route,root,ctx){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10532 = [null,null,null,null,null,null,null];(statearr_10532[(0)] = state_machine__6202__auto__);
(statearr_10532[(1)] = (1));
return statearr_10532;
});
var state_machine__6202__auto____1 = (function (state_10527){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10527);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10533){if((e10533 instanceof Object))
{var ex__6205__auto__ = e10533;var statearr_10534_10539 = state_10527;(statearr_10534_10539[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10527);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10533;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10540 = state_10527;
state_10527 = G__10540;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10527){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,route,root,ctx))
})();var state__6218__auto__ = (function (){var statearr_10535 = f__6217__auto__.call(null);(statearr_10535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10535;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,route,root,ctx))
);
return c__6216__auto__;
});
app.main.main.call(null);
