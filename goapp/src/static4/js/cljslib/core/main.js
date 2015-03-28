// Compiled by ClojureScript 0.0-2268
goog.provide('core.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('core.view');
goog.require('tool.app');
goog.require('core.view');
goog.require('core.model');
goog.require('cljs.core.async');
goog.require('core.fn');
goog.require('core.fn');
goog.require('cljs.core.async');
goog.require('core.model');
goog.require('core.event');
goog.require('core.event');
goog.require('tool.app');
core.main.menubar = (function menubar(root){var menubar__$1 = root.find("#mc_menubar");var handleBtnMouseOut = ((function (menubar__$1){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj14480 = {"width":"0px"};return obj14480;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj14482 = {"width":"120px"};return obj14482;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__14483 = cljs.core._EQ_;var expr__14484 = id;if(cljs.core.truth_(pred__14483.call(null,"btn_nav_celebrity",expr__14484)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__14483.call(null,"btn_nav_event",expr__14484)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__14483.call(null,"btn_nav_model",expr__14484)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__14483.call(null,"btn_nav_streetSnap",expr__14484)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__14483.call(null,"btn_nav_product",expr__14484)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),null], null);
} else
{return cljs.core.identity;
}
}
}
}
}
})();var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (state_14489){var state_val_14490 = (state_14489[(1)]);if((state_val_14490 === (2)))
{var inst_14487 = (state_14489[(2)]);var state_14489__$1 = state_14489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14489__$1,inst_14487);
} else
{if((state_val_14490 === (1)))
{var state_14489__$1 = state_14489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14489__$1,(2),core.event.OnReact,route);
} else
{return null;
}
}
});})(c__6344__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6329__auto__,c__6344__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_14494 = [null,null,null,null,null,null,null];(statearr_14494[(0)] = state_machine__6330__auto__);
(statearr_14494[(1)] = (1));
return statearr_14494;
});
var state_machine__6330__auto____1 = (function (state_14489){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_14489);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e14495){if((e14495 instanceof Object))
{var ex__6333__auto__ = e14495;var statearr_14496_14498 = state_14489;(statearr_14496_14498[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14499 = state_14489;
state_14489 = G__14499;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_14489){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_14489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6346__auto__ = (function (){var statearr_14497 = f__6345__auto__.call(null);(statearr_14497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_14497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6344__auto__;
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
core.main.main = (function main(){var root = $(".root");var ctx = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),core.model.CreateStreetSnapListModel], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),core.model.CreateStreetSnapListModel], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),core.model.CreateStreetSnapListModel], null)], null),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),core.model.CreateStreetSnapModel], null)], null),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),core.model.CreateStreetSnapModel], null)], null),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),core.model.CreateStreetSnapModel], null)], null),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),core.model.CreateStreetSnapModel], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.app.emptyModel], null)], null),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),core.model.CreateStreetSnapModel], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.app.emptyModel], null)], null),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),core.model.CreateStreetSnapModel], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.app.emptyModel], null)], null)], null)], null);core.main.menubar.call(null,root);
var OpenHome = ((function (root,ctx){
return (function (ctx__$1){return tool.app.OpenView.call(null,ctx__$1,new cljs.core.Keyword(null,"Home","Home",1521501280),cljs.core.partial.call(null,core.model.CreateHomeModel,ctx__$1,null,new cljs.core.Keyword(null,"Home","Home",1521501280),null));
});})(root,ctx))
;var React = ((function (OpenHome,root,ctx){
return (function (ctx__$1){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,OpenHome,root,ctx){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,OpenHome,root,ctx){
return (function (state_14517){var state_val_14518 = (state_14517[(1)]);if((state_val_14518 === (2)))
{var inst_14515 = (state_14517[(2)]);var state_14517__$1 = state_14517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14517__$1,inst_14515);
} else
{if((state_val_14518 === (1)))
{var inst_14513 = cljs.core.async.reduce.call(null,tool.app.React,ctx__$1,core.event.OnReact);var state_14517__$1 = state_14517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14517__$1,(2),inst_14513);
} else
{return null;
}
}
});})(c__6344__auto__,OpenHome,root,ctx))
;return ((function (switch__6329__auto__,c__6344__auto__,OpenHome,root,ctx){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_14522 = [null,null,null,null,null,null,null];(statearr_14522[(0)] = state_machine__6330__auto__);
(statearr_14522[(1)] = (1));
return statearr_14522;
});
var state_machine__6330__auto____1 = (function (state_14517){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_14517);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e14523){if((e14523 instanceof Object))
{var ex__6333__auto__ = e14523;var statearr_14524_14526 = state_14517;(statearr_14524_14526[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14527 = state_14517;
state_14517 = G__14527;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_14517){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_14517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,OpenHome,root,ctx))
})();var state__6346__auto__ = (function (){var statearr_14525 = f__6345__auto__.call(null);(statearr_14525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_14525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,OpenHome,root,ctx))
);
return c__6344__auto__;
});})(OpenHome,root,ctx))
;return React.call(null,OpenHome.call(null,ctx));
});
core.main.main.call(null);
