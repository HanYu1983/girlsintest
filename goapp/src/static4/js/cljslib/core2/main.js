// Compiled by ClojureScript 0.0-2268
goog.provide('core2.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('core2.view');
goog.require('core2.view');
goog.require('core2.model');
goog.require('core2.model');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
core2.main.menubar = (function menubar(root){var menubar__$1 = root.find("#mc_menubar");var handleBtnMouseOut = ((function (menubar__$1){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj27970 = {"width":"0px"};return obj27970;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj27972 = {"width":"120px"};return obj27972;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__27973 = cljs.core._EQ_;var expr__27974 = id;if(cljs.core.truth_(pred__27973.call(null,"btn_nav_celebrity",expr__27974)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__27973.call(null,"btn_nav_event",expr__27974)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__27973.call(null,"btn_nav_model",expr__27974)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__27973.call(null,"btn_nav_streetSnap",expr__27974)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__27973.call(null,"btn_nav_product",expr__27974)))
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
return (function (state_27979){var state_val_27980 = (state_27979[(1)]);if((state_val_27980 === (2)))
{var inst_27977 = (state_27979[(2)]);var state_27979__$1 = state_27979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27979__$1,inst_27977);
} else
{if((state_val_27980 === (1)))
{var state_27979__$1 = state_27979;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27979__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6344__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6329__auto__,c__6344__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_27984 = [null,null,null,null,null,null,null];(statearr_27984[(0)] = state_machine__6330__auto__);
(statearr_27984[(1)] = (1));
return statearr_27984;
});
var state_machine__6330__auto____1 = (function (state_27979){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_27979);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e27985){if((e27985 instanceof Object))
{var ex__6333__auto__ = e27985;var statearr_27986_27988 = state_27979;(statearr_27986_27988[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27979);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27989 = state_27979;
state_27979 = G__27989;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_27979){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_27979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6346__auto__ = (function (){var statearr_27987 = f__6345__auto__.call(null);(statearr_27987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_27987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6344__auto__;
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
core2.main.main = (function main(){var root = $(".root");var ctx = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Open","Open",-1161482466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.OpenView], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.ChangeView], null)], null)], null)], null);core2.main.menubar.call(null,root);
var c__6344__auto___28044 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___28044,root,ctx){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___28044,root,ctx){
return (function (state_28021){var state_val_28022 = (state_28021[(1)]);if((state_val_28022 === (2)))
{var inst_28019 = (state_28021[(2)]);var state_28021__$1 = state_28021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28021__$1,inst_28019);
} else
{if((state_val_28022 === (1)))
{var inst_28017 = cljs.core.async.reduce.call(null,tool.react.React,ctx,tool.react.OnReact);var state_28021__$1 = state_28021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28021__$1,(2),inst_28017);
} else
{return null;
}
}
});})(c__6344__auto___28044,root,ctx))
;return ((function (switch__6329__auto__,c__6344__auto___28044,root,ctx){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_28026 = [null,null,null,null,null,null,null];(statearr_28026[(0)] = state_machine__6330__auto__);
(statearr_28026[(1)] = (1));
return statearr_28026;
});
var state_machine__6330__auto____1 = (function (state_28021){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_28021);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e28027){if((e28027 instanceof Object))
{var ex__6333__auto__ = e28027;var statearr_28028_28045 = state_28021;(statearr_28028_28045[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28046 = state_28021;
state_28021 = G__28046;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_28021){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_28021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___28044,root,ctx))
})();var state__6346__auto__ = (function (){var statearr_28029 = f__6345__auto__.call(null);(statearr_28029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___28044);
return statearr_28029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___28044,root,ctx))
);
var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,root,ctx){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,root,ctx){
return (function (state_28035){var state_val_28036 = (state_28035[(1)]);if((state_val_28036 === (2)))
{var inst_28033 = (state_28035[(2)]);var state_28035__$1 = state_28035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28035__$1,inst_28033);
} else
{if((state_val_28036 === (1)))
{var inst_28030 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Open","Open",-1161482466),null];var inst_28031 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28030,null));var state_28035__$1 = state_28035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28035__$1,(2),tool.react.OnReact,inst_28031);
} else
{return null;
}
}
});})(c__6344__auto__,root,ctx))
;return ((function (switch__6329__auto__,c__6344__auto__,root,ctx){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_28040 = [null,null,null,null,null,null,null];(statearr_28040[(0)] = state_machine__6330__auto__);
(statearr_28040[(1)] = (1));
return statearr_28040;
});
var state_machine__6330__auto____1 = (function (state_28035){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_28035);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e28041){if((e28041 instanceof Object))
{var ex__6333__auto__ = e28041;var statearr_28042_28047 = state_28035;(statearr_28042_28047[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28035);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28048 = state_28035;
state_28035 = G__28048;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_28035){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_28035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,root,ctx))
})();var state__6346__auto__ = (function (){var statearr_28043 = f__6345__auto__.call(null);(statearr_28043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_28043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,root,ctx))
);
return c__6344__auto__;
});
core2.main.main.call(null);
