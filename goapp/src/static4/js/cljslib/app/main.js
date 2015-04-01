// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('app.fn');
goog.require('app.view');
goog.require('app.model');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('app.fn');
goog.require('cljs.core.async');
goog.require('app.model');
goog.require('tool.react');
goog.require('app.view');
app.main.menubar = (function menubar(root){var menubar__$1 = root.find("#mc_menubar");var handleBtnMouseOut = ((function (menubar__$1){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj40090 = {"width":"0px"};return obj40090;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj40092 = {"width":"120px"};return obj40092;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__40093 = cljs.core._EQ_;var expr__40094 = id;if(cljs.core.truth_(pred__40093.call(null,"btn_nav_celebrity",expr__40094)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__40093.call(null,"btn_nav_event",expr__40094)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__40093.call(null,"btn_nav_model",expr__40094)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__40093.call(null,"btn_nav_streetSnap",expr__40094)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__40093.call(null,"btn_nav_product",expr__40094)))
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
return (function (state_40099){var state_val_40100 = (state_40099[(1)]);if((state_val_40100 === (2)))
{var inst_40097 = (state_40099[(2)]);var state_40099__$1 = state_40099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40099__$1,inst_40097);
} else
{if((state_val_40100 === (1)))
{var state_40099__$1 = state_40099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40099__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6201__auto__,c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_40104 = [null,null,null,null,null,null,null];(statearr_40104[(0)] = state_machine__6202__auto__);
(statearr_40104[(1)] = (1));
return statearr_40104;
});
var state_machine__6202__auto____1 = (function (state_40099){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_40099);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e40105){if((e40105 instanceof Object))
{var ex__6205__auto__ = e40105;var statearr_40106_40108 = state_40099;(statearr_40106_40108[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40105;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40109 = state_40099;
state_40099 = G__40109;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_40099){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_40099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6218__auto__ = (function (){var statearr_40107 = f__6217__auto__.call(null);(statearr_40107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_40107;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6216__auto__;
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
app.main.header = (function header(router,root){var btn_home = root.find("#btn_backhome");return btn_home.click(((function (btn_home){
return (function (){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,btn_home){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,btn_home){
return (function (state_40129){var state_val_40130 = (state_40129[(1)]);if((state_val_40130 === (2)))
{var inst_40127 = (state_40129[(2)]);var state_40129__$1 = state_40129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40129__$1,inst_40127);
} else
{if((state_val_40130 === (1)))
{var inst_40124 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_40125 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40124,null));var state_40129__$1 = state_40129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40129__$1,(2),tool.react.OnReact,inst_40125);
} else
{return null;
}
}
});})(c__6216__auto__,btn_home))
;return ((function (switch__6201__auto__,c__6216__auto__,btn_home){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_40134 = [null,null,null,null,null,null,null];(statearr_40134[(0)] = state_machine__6202__auto__);
(statearr_40134[(1)] = (1));
return statearr_40134;
});
var state_machine__6202__auto____1 = (function (state_40129){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_40129);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e40135){if((e40135 instanceof Object))
{var ex__6205__auto__ = e40135;var statearr_40136_40138 = state_40129;(statearr_40136_40138[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40129);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40139 = state_40129;
state_40129 = G__40139;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_40129){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_40129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,btn_home))
})();var state__6218__auto__ = (function (){var statearr_40137 = f__6217__auto__.call(null);(statearr_40137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_40137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,btn_home))
);
return c__6216__auto__;
});})(btn_home))
);
});
app.main.create_router = (function create_router(){var Router = Backbone.Router.extend((function (){var obj40261 = {"routes":(function (){var obj40263 = {"":"default","ModelList":"ModelList","ModelList/search=:search":"ModelList","StreetSnap":"StreetSnap","Product":"Product","Model/id=:id":"Model","StreetSnapList":"StreetSnapList","ProductList":"ProductList","Product/id=:id":"Product","ProductList/search=:search":"ProductList","Model":"Model","StreetSnap/id=:id":"StreetSnap","StreetSnapList/search=:search":"StreetSnapList"};return obj40263;
})(),"StreetSnap":(function (id){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_40272){var state_val_40273 = (state_40272[(1)]);if((state_val_40273 === (2)))
{var inst_40270 = (state_40272[(2)]);var state_40272__$1 = state_40272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40272__$1,inst_40270);
} else
{if((state_val_40273 === (1)))
{var inst_40264 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_40265 = [id];var inst_40266 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_40264,inst_40265);var inst_40267 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),inst_40266];var inst_40268 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40267,null));var state_40272__$1 = state_40272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40272__$1,(2),tool.react.OnReact,inst_40268);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_40277 = [null,null,null,null,null,null,null];(statearr_40277[(0)] = state_machine__6202__auto__);
(statearr_40277[(1)] = (1));
return statearr_40277;
});
var state_machine__6202__auto____1 = (function (state_40272){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_40272);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e40278){if((e40278 instanceof Object))
{var ex__6205__auto__ = e40278;var statearr_40279_40380 = state_40272;(statearr_40279_40380[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40272);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40381 = state_40272;
state_40272 = G__40381;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_40272){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_40272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_40280 = f__6217__auto__.call(null);(statearr_40280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_40280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}),"StreetSnapList":(function (search){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_40289){var state_val_40290 = (state_40289[(1)]);if((state_val_40290 === (2)))
{var inst_40287 = (state_40289[(2)]);var state_40289__$1 = state_40289;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40289__$1,inst_40287);
} else
{if((state_val_40290 === (1)))
{var inst_40281 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_40282 = [search];var inst_40283 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_40281,inst_40282);var inst_40284 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_40283];var inst_40285 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40284,null));var state_40289__$1 = state_40289;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40289__$1,(2),tool.react.OnReact,inst_40285);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_40294 = [null,null,null,null,null,null,null];(statearr_40294[(0)] = state_machine__6202__auto__);
(statearr_40294[(1)] = (1));
return statearr_40294;
});
var state_machine__6202__auto____1 = (function (state_40289){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_40289);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e40295){if((e40295 instanceof Object))
{var ex__6205__auto__ = e40295;var statearr_40296_40382 = state_40289;(statearr_40296_40382[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40289);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40383 = state_40289;
state_40289 = G__40383;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_40289){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_40289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_40297 = f__6217__auto__.call(null);(statearr_40297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_40297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}),"Model":(function (id){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_40306){var state_val_40307 = (state_40306[(1)]);if((state_val_40307 === (2)))
{var inst_40304 = (state_40306[(2)]);var state_40306__$1 = state_40306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40306__$1,inst_40304);
} else
{if((state_val_40307 === (1)))
{var inst_40298 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_40299 = [id];var inst_40300 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_40298,inst_40299);var inst_40301 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),inst_40300];var inst_40302 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40301,null));var state_40306__$1 = state_40306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40306__$1,(2),tool.react.OnReact,inst_40302);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_40311 = [null,null,null,null,null,null,null];(statearr_40311[(0)] = state_machine__6202__auto__);
(statearr_40311[(1)] = (1));
return statearr_40311;
});
var state_machine__6202__auto____1 = (function (state_40306){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_40306);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e40312){if((e40312 instanceof Object))
{var ex__6205__auto__ = e40312;var statearr_40313_40384 = state_40306;(statearr_40313_40384[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40385 = state_40306;
state_40306 = G__40385;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_40306){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_40306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_40314 = f__6217__auto__.call(null);(statearr_40314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_40314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}),"ModelList":(function (search){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_40323){var state_val_40324 = (state_40323[(1)]);if((state_val_40324 === (2)))
{var inst_40321 = (state_40323[(2)]);var state_40323__$1 = state_40323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40323__$1,inst_40321);
} else
{if((state_val_40324 === (1)))
{var inst_40315 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_40316 = [search];var inst_40317 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_40315,inst_40316);var inst_40318 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_40317];var inst_40319 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40318,null));var state_40323__$1 = state_40323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40323__$1,(2),tool.react.OnReact,inst_40319);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_40328 = [null,null,null,null,null,null,null];(statearr_40328[(0)] = state_machine__6202__auto__);
(statearr_40328[(1)] = (1));
return statearr_40328;
});
var state_machine__6202__auto____1 = (function (state_40323){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_40323);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e40329){if((e40329 instanceof Object))
{var ex__6205__auto__ = e40329;var statearr_40330_40386 = state_40323;(statearr_40330_40386[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40323);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40387 = state_40323;
state_40323 = G__40387;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_40323){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_40323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_40331 = f__6217__auto__.call(null);(statearr_40331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_40331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}),"Product":(function (id){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_40340){var state_val_40341 = (state_40340[(1)]);if((state_val_40341 === (2)))
{var inst_40338 = (state_40340[(2)]);var state_40340__$1 = state_40340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40340__$1,inst_40338);
} else
{if((state_val_40341 === (1)))
{var inst_40332 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_40333 = [id];var inst_40334 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_40332,inst_40333);var inst_40335 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),inst_40334];var inst_40336 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40335,null));var state_40340__$1 = state_40340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40340__$1,(2),tool.react.OnReact,inst_40336);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_40345 = [null,null,null,null,null,null,null];(statearr_40345[(0)] = state_machine__6202__auto__);
(statearr_40345[(1)] = (1));
return statearr_40345;
});
var state_machine__6202__auto____1 = (function (state_40340){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_40340);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e40346){if((e40346 instanceof Object))
{var ex__6205__auto__ = e40346;var statearr_40347_40388 = state_40340;(statearr_40347_40388[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40389 = state_40340;
state_40340 = G__40389;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_40340){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_40340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_40348 = f__6217__auto__.call(null);(statearr_40348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_40348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}),"ProductList":(function (search){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_40357){var state_val_40358 = (state_40357[(1)]);if((state_val_40358 === (2)))
{var inst_40355 = (state_40357[(2)]);var state_40357__$1 = state_40357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40357__$1,inst_40355);
} else
{if((state_val_40358 === (1)))
{var inst_40349 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_40350 = [search];var inst_40351 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_40349,inst_40350);var inst_40352 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_40351];var inst_40353 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40352,null));var state_40357__$1 = state_40357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40357__$1,(2),tool.react.OnReact,inst_40353);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_40362 = [null,null,null,null,null,null,null];(statearr_40362[(0)] = state_machine__6202__auto__);
(statearr_40362[(1)] = (1));
return statearr_40362;
});
var state_machine__6202__auto____1 = (function (state_40357){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_40357);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e40363){if((e40363 instanceof Object))
{var ex__6205__auto__ = e40363;var statearr_40364_40390 = state_40357;(statearr_40364_40390[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40391 = state_40357;
state_40357 = G__40391;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_40357){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_40357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_40365 = f__6217__auto__.call(null);(statearr_40365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_40365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}),"default":(function (){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_40371){var state_val_40372 = (state_40371[(1)]);if((state_val_40372 === (2)))
{var inst_40369 = (state_40371[(2)]);var state_40371__$1 = state_40371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40371__$1,inst_40369);
} else
{if((state_val_40372 === (1)))
{var inst_40366 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toHome","toHome",-1352725795),null];var inst_40367 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40366,null));var state_40371__$1 = state_40371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40371__$1,(2),tool.react.OnReact,inst_40367);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_40376 = [null,null,null,null,null,null,null];(statearr_40376[(0)] = state_machine__6202__auto__);
(statearr_40376[(1)] = (1));
return statearr_40376;
});
var state_machine__6202__auto____1 = (function (state_40371){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_40371);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e40377){if((e40377 instanceof Object))
{var ex__6205__auto__ = e40377;var statearr_40378_40392 = state_40371;(statearr_40378_40392[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40393 = state_40371;
state_40371 = G__40393;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_40371){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_40371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_40379 = f__6217__auto__.call(null);(statearr_40379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_40379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
})};return obj40261;
})());var router = (new Router());return router;
});
app.main.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__40394){var map__40396 = p__40394;var map__40396__$1 = ((cljs.core.seq_QMARK_.call(null,map__40396))?cljs.core.apply.call(null,cljs.core.hash_map,map__40396):map__40396);var args = map__40396__$1;var basicUrl = cljs.core.get.call(null,map__40396__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.main.ShowLogo = (function ShowLogo(p__40398,p__40399){var map__40412 = p__40398;var map__40412__$1 = ((cljs.core.seq_QMARK_.call(null,map__40412))?cljs.core.apply.call(null,cljs.core.hash_map,map__40412):map__40412);var ctx = map__40412__$1;var root = cljs.core.get.call(null,map__40412__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__40413 = p__40399;var map__40413__$1 = ((cljs.core.seq_QMARK_.call(null,map__40413))?cljs.core.apply.call(null,cljs.core.hash_map,map__40413):map__40413);var args = map__40413__$1;var curr_view = cljs.core.get.call(null,map__40413__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_40424 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__40414_40425 = cljs.core.seq.call(null,logoNames_40424);var chunk__40415_40426 = null;var count__40416_40427 = (0);var i__40417_40428 = (0);while(true){
if((i__40417_40428 < count__40416_40427))
{var vec__40418_40429 = cljs.core._nth.call(null,chunk__40415_40426,i__40417_40428);var names_40430 = cljs.core.nth.call(null,vec__40418_40429,(0),null);var logoName_40431 = cljs.core.nth.call(null,vec__40418_40429,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__40414_40425,chunk__40415_40426,count__40416_40427,i__40417_40428,vec__40418_40429,names_40430,logoName_40431,logoNames_40424,map__40412,map__40412__$1,ctx,root,map__40413,map__40413__$1,args,curr_view){
return (function (p1__40397_SHARP_){return cljs.core._EQ_.call(null,p1__40397_SHARP_,curr_view);
});})(seq__40414_40425,chunk__40415_40426,count__40416_40427,i__40417_40428,vec__40418_40429,names_40430,logoName_40431,logoNames_40424,map__40412,map__40412__$1,ctx,root,map__40413,map__40413__$1,args,curr_view))
,names_40430)))
{var G__40419_40432 = root.find(logoName_40431);G__40419_40432.fadeIn((400));
} else
{var G__40420_40433 = root.find(logoName_40431);G__40420_40433.hide();
}
{
var G__40434 = seq__40414_40425;
var G__40435 = chunk__40415_40426;
var G__40436 = count__40416_40427;
var G__40437 = (i__40417_40428 + (1));
seq__40414_40425 = G__40434;
chunk__40415_40426 = G__40435;
count__40416_40427 = G__40436;
i__40417_40428 = G__40437;
continue;
}
} else
{var temp__4126__auto___40438 = cljs.core.seq.call(null,seq__40414_40425);if(temp__4126__auto___40438)
{var seq__40414_40439__$1 = temp__4126__auto___40438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40414_40439__$1))
{var c__4307__auto___40440 = cljs.core.chunk_first.call(null,seq__40414_40439__$1);{
var G__40441 = cljs.core.chunk_rest.call(null,seq__40414_40439__$1);
var G__40442 = c__4307__auto___40440;
var G__40443 = cljs.core.count.call(null,c__4307__auto___40440);
var G__40444 = (0);
seq__40414_40425 = G__40441;
chunk__40415_40426 = G__40442;
count__40416_40427 = G__40443;
i__40417_40428 = G__40444;
continue;
}
} else
{var vec__40421_40445 = cljs.core.first.call(null,seq__40414_40439__$1);var names_40446 = cljs.core.nth.call(null,vec__40421_40445,(0),null);var logoName_40447 = cljs.core.nth.call(null,vec__40421_40445,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__40414_40425,chunk__40415_40426,count__40416_40427,i__40417_40428,vec__40421_40445,names_40446,logoName_40447,seq__40414_40439__$1,temp__4126__auto___40438,logoNames_40424,map__40412,map__40412__$1,ctx,root,map__40413,map__40413__$1,args,curr_view){
return (function (p1__40397_SHARP_){return cljs.core._EQ_.call(null,p1__40397_SHARP_,curr_view);
});})(seq__40414_40425,chunk__40415_40426,count__40416_40427,i__40417_40428,vec__40421_40445,names_40446,logoName_40447,seq__40414_40439__$1,temp__4126__auto___40438,logoNames_40424,map__40412,map__40412__$1,ctx,root,map__40413,map__40413__$1,args,curr_view))
,names_40446)))
{var G__40422_40448 = root.find(logoName_40447);G__40422_40448.fadeIn((400));
} else
{var G__40423_40449 = root.find(logoName_40447);G__40423_40449.hide();
}
{
var G__40450 = cljs.core.next.call(null,seq__40414_40439__$1);
var G__40451 = null;
var G__40452 = (0);
var G__40453 = (0);
seq__40414_40425 = G__40450;
chunk__40415_40426 = G__40451;
count__40416_40427 = G__40452;
i__40417_40428 = G__40453;
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
app.main.Navigate = (function Navigate(p__40456,p__40457){var map__40462 = p__40456;var map__40462__$1 = ((cljs.core.seq_QMARK_.call(null,map__40462))?cljs.core.apply.call(null,cljs.core.hash_map,map__40462):map__40462);var ctx = map__40462__$1;var router = cljs.core.get.call(null,map__40462__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__40463 = p__40457;var map__40463__$1 = ((cljs.core.seq_QMARK_.call(null,map__40463))?cljs.core.apply.call(null,cljs.core.hash_map,map__40463):map__40463);var args = map__40463__$1;var searchKey = cljs.core.get.call(null,map__40463__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__40463__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__40463__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__40462,map__40462__$1,ctx,router,map__40463,map__40463__$1,args,searchKey,id,react_action){
return (function (p1__40454_SHARP_){return cljs.core._EQ_.call(null,p1__40454_SHARP_,react_action);
});})(map__40462,map__40462__$1,ctx,router,map__40463,map__40463__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__40462,map__40462__$1,ctx,router,map__40463,map__40463__$1,args,searchKey,id,react_action){
return (function (p1__40455_SHARP_){return cljs.core._EQ_.call(null,p1__40455_SHARP_,react_action);
});})(map__40462,map__40462__$1,ctx,router,map__40463,map__40463__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj40465 = {"trigger":true};return obj40465;
})());
return ctx;
});
app.main.main = (function main(){var urlRouter = app.main.create_router.call(null);var route = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),app.main.Navigate], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.main.Navigate], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.main.Navigate], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.main.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.main.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.main.OpenPhotoUrl], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"toHome","toHome",-1352725795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.main.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.main.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.main.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.main.ShowLogo], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.main.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.main.OpenPhotoUrl], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.main.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.main.OpenPhotoUrl], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.main.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.main.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.main.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.main.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.main.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.main.Navigate], null)], null)]);var sdyleColor = "rgb(185,71,132)";var root = $(".root");var tmpl_item = (function (){var obj40481 = {"brandToColor":((function (urlRouter,route,sdyleColor,root){
return (function (brand){if((brand.length > (0)))
{return sdyleColor;
} else
{return null;
}
});})(urlRouter,route,sdyleColor,root))
};return obj40481;
})();var ctx = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"router","router",1091916230),urlRouter,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701),tmpl_item], null);app.main.menubar.call(null,root);
app.main.header.call(null,urlRouter,root);
var c__6216__auto___40494 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___40494,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___40494,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function (state_40485){var state_val_40486 = (state_40485[(1)]);if((state_val_40486 === (1)))
{var inst_40482 = cljs.core.partial.call(null,tool.react.React,route);var inst_40483 = cljs.core.async.reduce.call(null,inst_40482,ctx,tool.react.OnReact);var state_40485__$1 = state_40485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40485__$1,inst_40483);
} else
{return null;
}
});})(c__6216__auto___40494,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
;return ((function (switch__6201__auto__,c__6216__auto___40494,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_40490 = [null,null,null,null,null,null,null];(statearr_40490[(0)] = state_machine__6202__auto__);
(statearr_40490[(1)] = (1));
return statearr_40490;
});
var state_machine__6202__auto____1 = (function (state_40485){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_40485);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e40491){if((e40491 instanceof Object))
{var ex__6205__auto__ = e40491;var statearr_40492_40495 = state_40485;(statearr_40492_40495[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40485);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40496 = state_40485;
state_40485 = G__40496;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_40485){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_40485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___40494,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
})();var state__6218__auto__ = (function (){var statearr_40493 = f__6217__auto__.call(null);(statearr_40493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___40494);
return statearr_40493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___40494,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
);
return Backbone.history.start();
});
app.main.main.call(null);
