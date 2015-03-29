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
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj9563 = {"width":"0px"};return obj9563;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj9565 = {"width":"120px"};return obj9565;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__9566 = cljs.core._EQ_;var expr__9567 = id;if(cljs.core.truth_(pred__9566.call(null,"btn_nav_celebrity",expr__9567)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__9566.call(null,"btn_nav_event",expr__9567)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__9566.call(null,"btn_nav_model",expr__9567)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__9566.call(null,"btn_nav_streetSnap",expr__9567)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__9566.call(null,"btn_nav_product",expr__9567)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),null], null);
} else
{return cljs.core.identity;
}
}
}
}
}
})();var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (state_9572){var state_val_9573 = (state_9572[(1)]);if((state_val_9573 === (2)))
{var inst_9570 = (state_9572[(2)]);var state_9572__$1 = state_9572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9572__$1,inst_9570);
} else
{if((state_val_9573 === (1)))
{var state_9572__$1 = state_9572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9572__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6225__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6210__auto__,c__6225__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_9577 = [null,null,null,null,null,null,null];(statearr_9577[(0)] = state_machine__6211__auto__);
(statearr_9577[(1)] = (1));
return statearr_9577;
});
var state_machine__6211__auto____1 = (function (state_9572){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_9572);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e9578){if((e9578 instanceof Object))
{var ex__6214__auto__ = e9578;var statearr_9579_9581 = state_9572;(statearr_9579_9581[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9582 = state_9572;
state_9572 = G__9582;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_9572){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_9572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6227__auto__ = (function (){var statearr_9580 = f__6226__auto__.call(null);(statearr_9580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_9580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6225__auto__;
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
app.main.main = (function main(){var root = $(".root");var ctx = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Open","Open",-1161482466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.OpenView], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.ChangeView], null)], null)], null)], null);app.main.menubar.call(null,root);
var c__6225__auto___9637 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___9637,root,ctx){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___9637,root,ctx){
return (function (state_9614){var state_val_9615 = (state_9614[(1)]);if((state_val_9615 === (2)))
{var inst_9612 = (state_9614[(2)]);var state_9614__$1 = state_9614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9614__$1,inst_9612);
} else
{if((state_val_9615 === (1)))
{var inst_9610 = cljs.core.async.reduce.call(null,tool.react.React,ctx,tool.react.OnReact);var state_9614__$1 = state_9614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9614__$1,(2),inst_9610);
} else
{return null;
}
}
});})(c__6225__auto___9637,root,ctx))
;return ((function (switch__6210__auto__,c__6225__auto___9637,root,ctx){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_9619 = [null,null,null,null,null,null,null];(statearr_9619[(0)] = state_machine__6211__auto__);
(statearr_9619[(1)] = (1));
return statearr_9619;
});
var state_machine__6211__auto____1 = (function (state_9614){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_9614);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e9620){if((e9620 instanceof Object))
{var ex__6214__auto__ = e9620;var statearr_9621_9638 = state_9614;(statearr_9621_9638[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9614);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9639 = state_9614;
state_9614 = G__9639;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_9614){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_9614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___9637,root,ctx))
})();var state__6227__auto__ = (function (){var statearr_9622 = f__6226__auto__.call(null);(statearr_9622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___9637);
return statearr_9622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___9637,root,ctx))
);
var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__,root,ctx){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__,root,ctx){
return (function (state_9628){var state_val_9629 = (state_9628[(1)]);if((state_val_9629 === (2)))
{var inst_9626 = (state_9628[(2)]);var state_9628__$1 = state_9628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9628__$1,inst_9626);
} else
{if((state_val_9629 === (1)))
{var inst_9623 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Open","Open",-1161482466),null];var inst_9624 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9623,null));var state_9628__$1 = state_9628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9628__$1,(2),tool.react.OnReact,inst_9624);
} else
{return null;
}
}
});})(c__6225__auto__,root,ctx))
;return ((function (switch__6210__auto__,c__6225__auto__,root,ctx){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_9633 = [null,null,null,null,null,null,null];(statearr_9633[(0)] = state_machine__6211__auto__);
(statearr_9633[(1)] = (1));
return statearr_9633;
});
var state_machine__6211__auto____1 = (function (state_9628){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_9628);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e9634){if((e9634 instanceof Object))
{var ex__6214__auto__ = e9634;var statearr_9635_9640 = state_9628;(statearr_9635_9640[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9641 = state_9628;
state_9628 = G__9641;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_9628){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_9628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__,root,ctx))
})();var state__6227__auto__ = (function (){var statearr_9636 = f__6226__auto__.call(null);(statearr_9636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_9636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__,root,ctx))
);
return c__6225__auto__;
});
app.main.main.call(null);
