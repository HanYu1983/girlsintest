// Compiled by ClojureScript 0.0-2268
goog.provide('core2.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29207,key,view){var map__29208 = p__29207;var map__29208__$1 = ((cljs.core.seq_QMARK_.call(null,map__29208))?cljs.core.apply.call(null,cljs.core.hash_map,map__29208):map__29208);var ctx = map__29208__$1;var container = cljs.core.get.call(null,map__29208__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__29209 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__29209.appendTo(container);
G__29209.fadeIn((400));
return G__29209;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29210,key,view){var map__29211 = p__29210;var map__29211__$1 = ((cljs.core.seq_QMARK_.call(null,map__29211))?cljs.core.apply.call(null,cljs.core.hash_map,map__29211):map__29211);var ctx = map__29211__$1;var container = cljs.core.get.call(null,map__29211__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__29212 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__29212.remove();
return G__29212;
}));
core2.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_29297 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");mc_modelContainer_29297.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__){
return (function (state_29269){var state_val_29270 = (state_29269[(1)]);if((state_val_29270 === (2)))
{var inst_29257 = (state_29269[(2)]);var inst_29258 = cljs.core.nth.call(null,inst_29257,(0),null);var inst_29259 = cljs.core.nth.call(null,inst_29257,(1),null);var inst_29260 = $("#tmpl_streetsnap_list");var inst_29261 = inst_29260.tmpl(inst_29259,null);var inst_29262 = inst_29261.find("#mc_modelContainer");var inst_29263 = (function (){var mc_modelContainer = inst_29262;var elem = inst_29261;var tmpl = inst_29260;var model = inst_29259;var err = inst_29258;var vec__29255 = inst_29257;return ((function (mc_modelContainer,elem,tmpl,model,err,vec__29255,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29270,c__6344__auto__){
return (function (){var that = this;var c__6344__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__29255,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29270,c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__29255,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29270,c__6344__auto__){
return (function (state_29280){var state_val_29281 = (state_29280[(1)]);if((state_val_29281 === (2)))
{var inst_29278 = (state_29280[(2)]);var state_29280__$1 = state_29280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29280__$1,inst_29278);
} else
{if((state_val_29281 === (1)))
{var inst_29271 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_29272 = that.id;var inst_29273 = [inst_29272];var inst_29274 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29271,inst_29273);var inst_29275 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_29274];var inst_29276 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29275,null));var state_29280__$1 = state_29280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29280__$1,(2),tool.react.OnReact,inst_29276);
} else
{return null;
}
}
});})(c__6344__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__29255,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29270,c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__29255,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29270,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29285 = [null,null,null,null,null,null,null];(statearr_29285[(0)] = state_machine__6330__auto__);
(statearr_29285[(1)] = (1));
return statearr_29285;
});
var state_machine__6330__auto____1 = (function (state_29280){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29280);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29286){if((e29286 instanceof Object))
{var ex__6333__auto__ = e29286;var statearr_29287_29298 = state_29280;(statearr_29287_29298[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29280);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29299 = state_29280;
state_29280 = G__29299;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29280){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__29255,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29270,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_29288 = f__6345__auto__.call(null);(statearr_29288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto____$1);
return statearr_29288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__29255,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29270,c__6344__auto__))
);
return c__6344__auto____$1;
});
;})(mc_modelContainer,elem,tmpl,model,err,vec__29255,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29270,c__6344__auto__))
})();var inst_29264 = inst_29262.delegate("div[modelFrame]","click",inst_29263);var inst_29265 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_29266 = [inst_29261];var inst_29267 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29265,inst_29266);var state_29269__$1 = (function (){var statearr_29289 = state_29269;(statearr_29289[(7)] = inst_29264);
return statearr_29289;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29269__$1,inst_29267);
} else
{if((state_val_29270 === (1)))
{var state_29269__$1 = state_29269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29269__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29293 = [null,null,null,null,null,null,null,null];(statearr_29293[(0)] = state_machine__6330__auto__);
(statearr_29293[(1)] = (1));
return statearr_29293;
});
var state_machine__6330__auto____1 = (function (state_29269){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29269);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29294){if((e29294 instanceof Object))
{var ex__6333__auto__ = e29294;var statearr_29295_29300 = state_29269;(statearr_29295_29300[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29269);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29294;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29301 = state_29269;
state_29269 = G__29301;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29269){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_29296 = f__6345__auto__.call(null);(statearr_29296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_29296;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__))
);
return c__6344__auto__;
}));
});
core2.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__29367){var map__29368 = p__29367;var map__29368__$1 = ((cljs.core.seq_QMARK_.call(null,map__29368))?cljs.core.apply.call(null,cljs.core.hash_map,map__29368):map__29368);var view = map__29368__$1;var elem = cljs.core.get.call(null,map__29368__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_29432 = elem.find("#mc_historyContainer");mc_modelContainer_29432.undelegate("img","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__){
return (function (state_29386){var state_val_29387 = (state_29386[(1)]);if((state_val_29387 === (2)))
{var inst_29371 = (state_29386[(2)]);var inst_29372 = cljs.core.nth.call(null,inst_29371,(0),null);var inst_29373 = cljs.core.nth.call(null,inst_29371,(1),null);var inst_29374 = $("#tmpl_streetsnap");var inst_29375 = inst_29374.tmpl(inst_29373,null);var inst_29376 = inst_29375.find("#mc_historyContainer");var inst_29377 = inst_29375.find("#mc_sideContainer");var inst_29378 = (function (){var mc_sideContainer = inst_29377;var mc_historyContainer = inst_29376;var elem = inst_29375;var tmpl = inst_29374;var model = inst_29373;var err = inst_29372;var vec__29369 = inst_29371;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,state_val_29387,c__6344__auto__){
return (function (){var that = this;var c__6344__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,state_val_29387,c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,state_val_29387,c__6344__auto__){
return (function (state_29397){var state_val_29398 = (state_29397[(1)]);if((state_val_29398 === (2)))
{var inst_29395 = (state_29397[(2)]);var state_29397__$1 = state_29397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29397__$1,inst_29395);
} else
{if((state_val_29398 === (1)))
{var inst_29388 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_29389 = that.id;var inst_29390 = [inst_29389];var inst_29391 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29388,inst_29390);var inst_29392 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_29391];var inst_29393 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29392,null));var state_29397__$1 = state_29397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29397__$1,(2),tool.react.OnReact,inst_29393);
} else
{return null;
}
}
});})(c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,state_val_29387,c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,state_val_29387,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29402 = [null,null,null,null,null,null,null];(statearr_29402[(0)] = state_machine__6330__auto__);
(statearr_29402[(1)] = (1));
return statearr_29402;
});
var state_machine__6330__auto____1 = (function (state_29397){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29397);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29403){if((e29403 instanceof Object))
{var ex__6333__auto__ = e29403;var statearr_29404_29433 = state_29397;(statearr_29404_29433[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29397);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29434 = state_29397;
state_29397 = G__29434;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29397){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,state_val_29387,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_29405 = f__6345__auto__.call(null);(statearr_29405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto____$1);
return statearr_29405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,state_val_29387,c__6344__auto__))
);
return c__6344__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,state_val_29387,c__6344__auto__))
})();var inst_29379 = inst_29377.delegate("img","click",inst_29378);var inst_29380 = (function (){var mc_sideContainer = inst_29377;var mc_historyContainer = inst_29376;var elem = inst_29375;var tmpl = inst_29374;var model = inst_29373;var err = inst_29372;var vec__29369 = inst_29371;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,inst_29378,inst_29379,state_val_29387,c__6344__auto__){
return (function (){var that = this;var c__6344__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,inst_29378,inst_29379,state_val_29387,c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,inst_29378,inst_29379,state_val_29387,c__6344__auto__){
return (function (state_29415){var state_val_29416 = (state_29415[(1)]);if((state_val_29416 === (2)))
{var inst_29413 = (state_29415[(2)]);var state_29415__$1 = state_29415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29415__$1,inst_29413);
} else
{if((state_val_29416 === (1)))
{var inst_29406 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_29407 = that.id;var inst_29408 = [inst_29407];var inst_29409 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29406,inst_29408);var inst_29410 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_29409];var inst_29411 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29410,null));var state_29415__$1 = state_29415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29415__$1,(2),tool.react.OnReact,inst_29411);
} else
{return null;
}
}
});})(c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,inst_29378,inst_29379,state_val_29387,c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,inst_29378,inst_29379,state_val_29387,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29420 = [null,null,null,null,null,null,null];(statearr_29420[(0)] = state_machine__6330__auto__);
(statearr_29420[(1)] = (1));
return statearr_29420;
});
var state_machine__6330__auto____1 = (function (state_29415){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29415);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29421){if((e29421 instanceof Object))
{var ex__6333__auto__ = e29421;var statearr_29422_29435 = state_29415;(statearr_29422_29435[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29436 = state_29415;
state_29415 = G__29436;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29415){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,inst_29378,inst_29379,state_val_29387,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_29423 = f__6345__auto__.call(null);(statearr_29423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto____$1);
return statearr_29423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,inst_29378,inst_29379,state_val_29387,c__6344__auto__))
);
return c__6344__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__29369,inst_29371,inst_29372,inst_29373,inst_29374,inst_29375,inst_29376,inst_29377,inst_29378,inst_29379,state_val_29387,c__6344__auto__))
})();var inst_29381 = inst_29376.delegate("img","click",inst_29380);var inst_29382 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_29383 = [inst_29375];var inst_29384 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29382,inst_29383);var state_29386__$1 = (function (){var statearr_29424 = state_29386;(statearr_29424[(7)] = inst_29379);
(statearr_29424[(8)] = inst_29381);
return statearr_29424;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29386__$1,inst_29384);
} else
{if((state_val_29387 === (1)))
{var state_29386__$1 = state_29386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29386__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29428 = [null,null,null,null,null,null,null,null,null];(statearr_29428[(0)] = state_machine__6330__auto__);
(statearr_29428[(1)] = (1));
return statearr_29428;
});
var state_machine__6330__auto____1 = (function (state_29386){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29429){if((e29429 instanceof Object))
{var ex__6333__auto__ = e29429;var statearr_29430_29437 = state_29386;(statearr_29430_29437[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29438 = state_29386;
state_29386 = G__29438;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29386){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_29431 = f__6345__auto__.call(null);(statearr_29431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_29431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__))
);
return c__6344__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,modelChan){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__){
return (function (state_29447){var state_val_29448 = (state_29447[(1)]);if((state_val_29448 === (2)))
{var inst_29440 = (state_29447[(2)]);var inst_29441 = $("#tmpl_home");var inst_29442 = inst_29441.tmpl(inst_29440,null);var inst_29443 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_29444 = [inst_29442];var inst_29445 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29443,inst_29444);var state_29447__$1 = state_29447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29447__$1,inst_29445);
} else
{if((state_val_29448 === (1)))
{var state_29447__$1 = state_29447;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29447__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29452 = [null,null,null,null,null,null,null];(statearr_29452[(0)] = state_machine__6330__auto__);
(statearr_29452[(1)] = (1));
return statearr_29452;
});
var state_machine__6330__auto____1 = (function (state_29447){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29447);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29453){if((e29453 instanceof Object))
{var ex__6333__auto__ = e29453;var statearr_29454_29456 = state_29447;(statearr_29454_29456[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29447);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29457 = state_29447;
state_29447 = G__29457;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29447){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_29455 = f__6345__auto__.call(null);(statearr_29455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_29455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__))
);
return c__6344__auto__;
}));
core2.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
core2.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
core2.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
core2.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
core2.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
core2.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
