// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__15313,key,view){var map__15314 = p__15313;var map__15314__$1 = ((cljs.core.seq_QMARK_.call(null,map__15314))?cljs.core.apply.call(null,cljs.core.hash_map,map__15314):map__15314);var ctx = map__15314__$1;var container = cljs.core.get.call(null,map__15314__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__15315 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__15315.appendTo(container);
G__15315.fadeIn((400));
return G__15315;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__15316,key,view){var map__15317 = p__15316;var map__15317__$1 = ((cljs.core.seq_QMARK_.call(null,map__15317))?cljs.core.apply.call(null,cljs.core.hash_map,map__15317):map__15317);var ctx = map__15317__$1;var container = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__15318 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__15318.remove();
return G__15318;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_15443 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_15444 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");btn_search_15444.off("click");
mc_modelContainer_15443.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_15398){var state_val_15399 = (state_15398[(1)]);if((state_val_15399 === (2)))
{var inst_15383 = (state_15398[(2)]);var inst_15384 = cljs.core.nth.call(null,inst_15383,(0),null);var inst_15385 = cljs.core.nth.call(null,inst_15383,(1),null);var inst_15386 = $("#tmpl_streetsnap_list");var inst_15387 = inst_15386.tmpl(inst_15385,null);var inst_15388 = inst_15387.find("#mc_modelContainer");var inst_15389 = inst_15387.find("#btn_search");var inst_15390 = (function (){var btn_search = inst_15389;var mc_modelContainer = inst_15388;var elem = inst_15387;var tmpl = inst_15386;var model = inst_15385;var err = inst_15384;var vec__15381 = inst_15383;return ((function (btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,state_val_15399,c__6216__auto__){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,searchKey,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,state_val_15399,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,searchKey,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,state_val_15399,c__6216__auto__){
return (function (state_15408){var state_val_15409 = (state_15408[(1)]);if((state_val_15409 === (2)))
{var inst_15406 = (state_15408[(2)]);var state_15408__$1 = state_15408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15408__$1,inst_15406);
} else
{if((state_val_15409 === (1)))
{var inst_15400 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_15401 = [searchKey];var inst_15402 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15400,inst_15401);var inst_15403 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_15402];var inst_15404 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15403,null));var state_15408__$1 = state_15408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15408__$1,(2),tool.react.OnReact,inst_15404);
} else
{return null;
}
}
});})(c__6216__auto____$1,searchKey,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,state_val_15399,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,searchKey,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,state_val_15399,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_15413 = [null,null,null,null,null,null,null];(statearr_15413[(0)] = state_machine__6202__auto__);
(statearr_15413[(1)] = (1));
return statearr_15413;
});
var state_machine__6202__auto____1 = (function (state_15408){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_15408);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e15414){if((e15414 instanceof Object))
{var ex__6205__auto__ = e15414;var statearr_15415_15445 = state_15408;(statearr_15415_15445[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15408);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15414;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15446 = state_15408;
state_15408 = G__15446;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_15408){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_15408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,searchKey,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,state_val_15399,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_15416 = f__6217__auto__.call(null);(statearr_15416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_15416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,searchKey,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,state_val_15399,c__6216__auto__))
);
return c__6216__auto____$1;
} else
{return null;
}
});
;})(btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,state_val_15399,c__6216__auto__))
})();var inst_15391 = inst_15389.click(inst_15390);var inst_15392 = (function (){var btn_search = inst_15389;var mc_modelContainer = inst_15388;var elem = inst_15387;var tmpl = inst_15386;var model = inst_15385;var err = inst_15384;var vec__15381 = inst_15383;return ((function (btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,inst_15390,inst_15391,state_val_15399,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,inst_15390,inst_15391,state_val_15399,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,inst_15390,inst_15391,state_val_15399,c__6216__auto__){
return (function (state_15426){var state_val_15427 = (state_15426[(1)]);if((state_val_15427 === (2)))
{var inst_15424 = (state_15426[(2)]);var state_15426__$1 = state_15426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15426__$1,inst_15424);
} else
{if((state_val_15427 === (1)))
{var inst_15417 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_15418 = that.id;var inst_15419 = [inst_15418];var inst_15420 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15417,inst_15419);var inst_15421 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_15420];var inst_15422 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15421,null));var state_15426__$1 = state_15426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15426__$1,(2),tool.react.OnReact,inst_15422);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,inst_15390,inst_15391,state_val_15399,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,inst_15390,inst_15391,state_val_15399,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_15431 = [null,null,null,null,null,null,null];(statearr_15431[(0)] = state_machine__6202__auto__);
(statearr_15431[(1)] = (1));
return statearr_15431;
});
var state_machine__6202__auto____1 = (function (state_15426){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_15426);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e15432){if((e15432 instanceof Object))
{var ex__6205__auto__ = e15432;var statearr_15433_15447 = state_15426;(statearr_15433_15447[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15426);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15448 = state_15426;
state_15426 = G__15448;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_15426){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_15426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,inst_15390,inst_15391,state_val_15399,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_15434 = f__6217__auto__.call(null);(statearr_15434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_15434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,inst_15390,inst_15391,state_val_15399,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15381,inst_15383,inst_15384,inst_15385,inst_15386,inst_15387,inst_15388,inst_15389,inst_15390,inst_15391,state_val_15399,c__6216__auto__))
})();var inst_15393 = inst_15388.delegate("div[modelFrame]","click",inst_15392);var inst_15394 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_15395 = [inst_15387];var inst_15396 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15394,inst_15395);var state_15398__$1 = (function (){var statearr_15435 = state_15398;(statearr_15435[(7)] = inst_15391);
(statearr_15435[(8)] = inst_15393);
return statearr_15435;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15398__$1,inst_15396);
} else
{if((state_val_15399 === (1)))
{var state_15398__$1 = state_15398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15398__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_15439 = [null,null,null,null,null,null,null,null,null];(statearr_15439[(0)] = state_machine__6202__auto__);
(statearr_15439[(1)] = (1));
return statearr_15439;
});
var state_machine__6202__auto____1 = (function (state_15398){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_15398);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e15440){if((e15440 instanceof Object))
{var ex__6205__auto__ = e15440;var statearr_15441_15449 = state_15398;(statearr_15441_15449[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15398);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15450 = state_15398;
state_15398 = G__15450;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_15398){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_15398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_15442 = f__6217__auto__.call(null);(statearr_15442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_15442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__15516){var map__15517 = p__15516;var map__15517__$1 = ((cljs.core.seq_QMARK_.call(null,map__15517))?cljs.core.apply.call(null,cljs.core.hash_map,map__15517):map__15517);var view = map__15517__$1;var elem = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_15581 = elem.find("#mc_historyContainer");mc_modelContainer_15581.undelegate("img","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_15535){var state_val_15536 = (state_15535[(1)]);if((state_val_15536 === (2)))
{var inst_15520 = (state_15535[(2)]);var inst_15521 = cljs.core.nth.call(null,inst_15520,(0),null);var inst_15522 = cljs.core.nth.call(null,inst_15520,(1),null);var inst_15523 = $("#tmpl_streetsnap");var inst_15524 = inst_15523.tmpl(inst_15522,null);var inst_15525 = inst_15524.find("#mc_historyContainer");var inst_15526 = inst_15524.find("#mc_sideContainer");var inst_15527 = (function (){var mc_sideContainer = inst_15526;var mc_historyContainer = inst_15525;var elem = inst_15524;var tmpl = inst_15523;var model = inst_15522;var err = inst_15521;var vec__15518 = inst_15520;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,state_val_15536,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,state_val_15536,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,state_val_15536,c__6216__auto__){
return (function (state_15546){var state_val_15547 = (state_15546[(1)]);if((state_val_15547 === (2)))
{var inst_15544 = (state_15546[(2)]);var state_15546__$1 = state_15546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15546__$1,inst_15544);
} else
{if((state_val_15547 === (1)))
{var inst_15537 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_15538 = that.id;var inst_15539 = [inst_15538];var inst_15540 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15537,inst_15539);var inst_15541 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_15540];var inst_15542 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15541,null));var state_15546__$1 = state_15546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15546__$1,(2),tool.react.OnReact,inst_15542);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,state_val_15536,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,state_val_15536,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_15551 = [null,null,null,null,null,null,null];(statearr_15551[(0)] = state_machine__6202__auto__);
(statearr_15551[(1)] = (1));
return statearr_15551;
});
var state_machine__6202__auto____1 = (function (state_15546){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_15546);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e15552){if((e15552 instanceof Object))
{var ex__6205__auto__ = e15552;var statearr_15553_15582 = state_15546;(statearr_15553_15582[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15583 = state_15546;
state_15546 = G__15583;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_15546){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_15546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,state_val_15536,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_15554 = f__6217__auto__.call(null);(statearr_15554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_15554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,state_val_15536,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,state_val_15536,c__6216__auto__))
})();var inst_15528 = inst_15526.delegate("img","click",inst_15527);var inst_15529 = (function (){var mc_sideContainer = inst_15526;var mc_historyContainer = inst_15525;var elem = inst_15524;var tmpl = inst_15523;var model = inst_15522;var err = inst_15521;var vec__15518 = inst_15520;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,inst_15527,inst_15528,state_val_15536,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,inst_15527,inst_15528,state_val_15536,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,inst_15527,inst_15528,state_val_15536,c__6216__auto__){
return (function (state_15564){var state_val_15565 = (state_15564[(1)]);if((state_val_15565 === (2)))
{var inst_15562 = (state_15564[(2)]);var state_15564__$1 = state_15564;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15564__$1,inst_15562);
} else
{if((state_val_15565 === (1)))
{var inst_15555 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_15556 = that.id;var inst_15557 = [inst_15556];var inst_15558 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15555,inst_15557);var inst_15559 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_15558];var inst_15560 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15559,null));var state_15564__$1 = state_15564;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15564__$1,(2),tool.react.OnReact,inst_15560);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,inst_15527,inst_15528,state_val_15536,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,inst_15527,inst_15528,state_val_15536,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_15569 = [null,null,null,null,null,null,null];(statearr_15569[(0)] = state_machine__6202__auto__);
(statearr_15569[(1)] = (1));
return statearr_15569;
});
var state_machine__6202__auto____1 = (function (state_15564){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_15564);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e15570){if((e15570 instanceof Object))
{var ex__6205__auto__ = e15570;var statearr_15571_15584 = state_15564;(statearr_15571_15584[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15564);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15585 = state_15564;
state_15564 = G__15585;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_15564){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_15564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,inst_15527,inst_15528,state_val_15536,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_15572 = f__6217__auto__.call(null);(statearr_15572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_15572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,inst_15527,inst_15528,state_val_15536,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15518,inst_15520,inst_15521,inst_15522,inst_15523,inst_15524,inst_15525,inst_15526,inst_15527,inst_15528,state_val_15536,c__6216__auto__))
})();var inst_15530 = inst_15525.delegate("img","click",inst_15529);var inst_15531 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_15532 = [inst_15524];var inst_15533 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15531,inst_15532);var state_15535__$1 = (function (){var statearr_15573 = state_15535;(statearr_15573[(7)] = inst_15530);
(statearr_15573[(8)] = inst_15528);
return statearr_15573;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15535__$1,inst_15533);
} else
{if((state_val_15536 === (1)))
{var state_15535__$1 = state_15535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15535__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_15577 = [null,null,null,null,null,null,null,null,null];(statearr_15577[(0)] = state_machine__6202__auto__);
(statearr_15577[(1)] = (1));
return statearr_15577;
});
var state_machine__6202__auto____1 = (function (state_15535){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_15535);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e15578){if((e15578 instanceof Object))
{var ex__6205__auto__ = e15578;var statearr_15579_15586 = state_15535;(statearr_15579_15586[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15587 = state_15535;
state_15535 = G__15587;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_15535){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_15535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_15580 = f__6217__auto__.call(null);(statearr_15580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_15580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_15596){var state_val_15597 = (state_15596[(1)]);if((state_val_15597 === (2)))
{var inst_15589 = (state_15596[(2)]);var inst_15590 = $("#tmpl_home");var inst_15591 = inst_15590.tmpl(inst_15589,null);var inst_15592 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_15593 = [inst_15591];var inst_15594 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15592,inst_15593);var state_15596__$1 = state_15596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15596__$1,inst_15594);
} else
{if((state_val_15597 === (1)))
{var state_15596__$1 = state_15596;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15596__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_15601 = [null,null,null,null,null,null,null];(statearr_15601[(0)] = state_machine__6202__auto__);
(statearr_15601[(1)] = (1));
return statearr_15601;
});
var state_machine__6202__auto____1 = (function (state_15596){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_15596);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e15602){if((e15602 instanceof Object))
{var ex__6205__auto__ = e15602;var statearr_15603_15605 = state_15596;(statearr_15603_15605[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15596);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15606 = state_15596;
state_15596 = G__15606;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_15596){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_15596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_15604 = f__6217__auto__.call(null);(statearr_15604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_15604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
