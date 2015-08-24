// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__13336,key,view){var map__13337 = p__13336;var map__13337__$1 = ((cljs.core.seq_QMARK_.call(null,map__13337))?cljs.core.apply.call(null,cljs.core.hash_map,map__13337):map__13337);var ctx = map__13337__$1;var container = cljs.core.get.call(null,map__13337__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__13338_13357 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__13338_13357.appendTo(container);
G__13338_13357.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13337,map__13337__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13337,map__13337__$1,ctx,container){
return (function (state_13348){var state_val_13349 = (state_13348[(1)]);if((state_val_13349 === (2)))
{var inst_13346 = (state_13348[(2)]);var state_13348__$1 = state_13348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13348__$1,inst_13346);
} else
{if((state_val_13349 === (1)))
{var inst_13339 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_13340 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_13341 = [inst_13340,view];var inst_13342 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13339,inst_13341);var inst_13343 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_13342];var inst_13344 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13343,null));var state_13348__$1 = state_13348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13348__$1,(2),tool.react.OnReact,inst_13344);
} else
{return null;
}
}
});})(c__6192__auto__,map__13337,map__13337__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13337,map__13337__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13353 = [null,null,null,null,null,null,null];(statearr_13353[(0)] = state_machine__6178__auto__);
(statearr_13353[(1)] = (1));
return statearr_13353;
});
var state_machine__6178__auto____1 = (function (state_13348){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13348);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13354){if((e13354 instanceof Object))
{var ex__6181__auto__ = e13354;var statearr_13355_13358 = state_13348;(statearr_13355_13358[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13348);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13359 = state_13348;
state_13348 = G__13359;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13348){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13337,map__13337__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_13356 = f__6193__auto__.call(null);(statearr_13356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13337,map__13337__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__13360,key,view){var map__13361 = p__13360;var map__13361__$1 = ((cljs.core.seq_QMARK_.call(null,map__13361))?cljs.core.apply.call(null,cljs.core.hash_map,map__13361):map__13361);var ctx = map__13361__$1;var container = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__13362 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__13362.remove();
return G__13362;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_13525 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_13526 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_13527 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_13527.off("click");
btn_search_13526.off("click");
mc_modelContainer_13525.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__13444,key,modelChan){var map__13445 = p__13444;var map__13445__$1 = ((cljs.core.seq_QMARK_.call(null,map__13445))?cljs.core.apply.call(null,cljs.core.hash_map,map__13445):map__13445);var ctx = map__13445__$1;var tmpl_item = cljs.core.get.call(null,map__13445__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (state_13466){var state_val_13467 = (state_13466[(1)]);if((state_val_13467 === (2)))
{var inst_13448 = (state_13466[(2)]);var inst_13449 = cljs.core.nth.call(null,inst_13448,(0),null);var inst_13450 = cljs.core.nth.call(null,inst_13448,(1),null);var inst_13451 = $("#tmpl_streetsnap_list");var inst_13452 = inst_13451.tmpl(inst_13450,tmpl_item);var inst_13453 = inst_13452.find("#mc_modelContainer");var inst_13454 = inst_13452.find("#btn_search");var inst_13455 = inst_13452.find("#btn_return");var inst_13456 = (function (){var btn_return = inst_13455;var btn_search = inst_13454;var mc_modelContainer = inst_13453;var elem = inst_13452;var tmpl = inst_13451;var model = inst_13450;var err = inst_13449;var vec__13446 = inst_13448;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (state_13473){var state_val_13474 = (state_13473[(1)]);if((state_val_13474 === (2)))
{var inst_13471 = (state_13473[(2)]);var state_13473__$1 = state_13473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13473__$1,inst_13471);
} else
{if((state_val_13474 === (1)))
{var inst_13468 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_13469 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13468,null));var state_13473__$1 = state_13473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13473__$1,(2),tool.react.OnReact,inst_13469);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13478 = [null,null,null,null,null,null,null];(statearr_13478[(0)] = state_machine__6178__auto__);
(statearr_13478[(1)] = (1));
return statearr_13478;
});
var state_machine__6178__auto____1 = (function (state_13473){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13473);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13479){if((e13479 instanceof Object))
{var ex__6181__auto__ = e13479;var statearr_13480_13528 = state_13473;(statearr_13480_13528[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13473);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13529 = state_13473;
state_13473 = G__13529;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13473){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13481 = f__6193__auto__.call(null);(statearr_13481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
})();var inst_13457 = inst_13455.click(inst_13456);var inst_13458 = (function (){var btn_return = inst_13455;var btn_search = inst_13454;var mc_modelContainer = inst_13453;var elem = inst_13452;var tmpl = inst_13451;var model = inst_13450;var err = inst_13449;var vec__13446 = inst_13448;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (state_13490){var state_val_13491 = (state_13490[(1)]);if((state_val_13491 === (2)))
{var inst_13488 = (state_13490[(2)]);var state_13490__$1 = state_13490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13490__$1,inst_13488);
} else
{if((state_val_13491 === (1)))
{var inst_13482 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_13483 = [searchKey];var inst_13484 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13482,inst_13483);var inst_13485 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_13484];var inst_13486 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13485,null));var state_13490__$1 = state_13490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13490__$1,(2),tool.react.OnReact,inst_13486);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13495 = [null,null,null,null,null,null,null];(statearr_13495[(0)] = state_machine__6178__auto__);
(statearr_13495[(1)] = (1));
return statearr_13495;
});
var state_machine__6178__auto____1 = (function (state_13490){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13490);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13496){if((e13496 instanceof Object))
{var ex__6181__auto__ = e13496;var statearr_13497_13530 = state_13490;(statearr_13497_13530[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13496;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13531 = state_13490;
state_13490 = G__13531;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13490){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13498 = f__6193__auto__.call(null);(statearr_13498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
})();var inst_13459 = inst_13454.click(inst_13458);var inst_13460 = (function (){var btn_return = inst_13455;var btn_search = inst_13454;var mc_modelContainer = inst_13453;var elem = inst_13452;var tmpl = inst_13451;var model = inst_13450;var err = inst_13449;var vec__13446 = inst_13448;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,inst_13458,inst_13459,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,inst_13458,inst_13459,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,inst_13458,inst_13459,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function (state_13508){var state_val_13509 = (state_13508[(1)]);if((state_val_13509 === (2)))
{var inst_13506 = (state_13508[(2)]);var state_13508__$1 = state_13508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13508__$1,inst_13506);
} else
{if((state_val_13509 === (1)))
{var inst_13499 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_13500 = that.id;var inst_13501 = [inst_13500];var inst_13502 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13499,inst_13501);var inst_13503 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_13502];var inst_13504 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13503,null));var state_13508__$1 = state_13508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13508__$1,(2),tool.react.OnReact,inst_13504);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,inst_13458,inst_13459,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,inst_13458,inst_13459,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13513 = [null,null,null,null,null,null,null];(statearr_13513[(0)] = state_machine__6178__auto__);
(statearr_13513[(1)] = (1));
return statearr_13513;
});
var state_machine__6178__auto____1 = (function (state_13508){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13508);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13514){if((e13514 instanceof Object))
{var ex__6181__auto__ = e13514;var statearr_13515_13532 = state_13508;(statearr_13515_13532[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13508);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13533 = state_13508;
state_13508 = G__13533;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13508){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,inst_13458,inst_13459,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13516 = f__6193__auto__.call(null);(statearr_13516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,inst_13458,inst_13459,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13446,inst_13448,inst_13449,inst_13450,inst_13451,inst_13452,inst_13453,inst_13454,inst_13455,inst_13456,inst_13457,inst_13458,inst_13459,state_val_13467,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
})();var inst_13461 = inst_13453.delegate("div[modelFrame]","click",inst_13460);var inst_13462 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_13463 = [inst_13452,name];var inst_13464 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13462,inst_13463);var state_13466__$1 = (function (){var statearr_13517 = state_13466;(statearr_13517[(7)] = inst_13461);
(statearr_13517[(8)] = inst_13457);
(statearr_13517[(9)] = inst_13459);
return statearr_13517;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13466__$1,inst_13464);
} else
{if((state_val_13467 === (1)))
{var state_13466__$1 = state_13466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13466__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13521 = [null,null,null,null,null,null,null,null,null,null];(statearr_13521[(0)] = state_machine__6178__auto__);
(statearr_13521[(1)] = (1));
return statearr_13521;
});
var state_machine__6178__auto____1 = (function (state_13466){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13522){if((e13522 instanceof Object))
{var ex__6181__auto__ = e13522;var statearr_13523_13534 = state_13466;(statearr_13523_13534[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13535 = state_13466;
state_13466 = G__13535;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13466){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13524 = f__6193__auto__.call(null);(statearr_13524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13445,map__13445__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__13721){var map__13722 = p__13721;var map__13722__$1 = ((cljs.core.seq_QMARK_.call(null,map__13722))?cljs.core.apply.call(null,cljs.core.hash_map,map__13722):map__13722);var view = map__13722__$1;var elem = cljs.core.get.call(null,map__13722__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_13906 = elem.find("#mc_historyContainer");var mc_sideContainer_13907 = elem.find("#mc_sideContainer");var mc_bottomContainer_13908 = elem.find("#mc_bottomContainer");var img_stylePicture_13909 = elem.find("#img_stylePicture");var btn_share_13910 = elem.find("#btn_share");var btn_fullscreen_13911 = elem.find("#btn_fullscreen");var btn_more_13912 = elem.find("#btn_more");mc_modelContainer_13906.undelegate("img","click");
mc_sideContainer_13907.undelegate("img","click");
mc_bottomContainer_13908.undelegate("img","click");
img_stylePicture_13909.off("click");
btn_share_13910.off("click");
btn_fullscreen_13911.off("click");
btn_more_13912.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__13723){var map__13724 = p__13723;var map__13724__$1 = ((cljs.core.seq_QMARK_.call(null,map__13724))?cljs.core.apply.call(null,cljs.core.hash_map,map__13724):map__13724);var view = map__13724__$1;var elem = cljs.core.get.call(null,map__13724__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_13913 = elem.find("#mc_3dmask");var c__6192__auto___13914 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13914,mc_3dmask_13913,map__13724,map__13724__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13914,mc_3dmask_13913,map__13724,map__13724__$1,view,elem){
return (function (state_13730){var state_val_13731 = (state_13730[(1)]);if((state_val_13731 === (2)))
{var inst_13727 = (state_13730[(2)]);var inst_13728 = mc_3dmask_13913.fadeOut((400));var state_13730__$1 = (function (){var statearr_13732 = state_13730;(statearr_13732[(7)] = inst_13727);
return statearr_13732;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13730__$1,inst_13728);
} else
{if((state_val_13731 === (1)))
{var inst_13725 = cljs.core.async.timeout.call(null,(3000));var state_13730__$1 = state_13730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13730__$1,(2),inst_13725);
} else
{return null;
}
}
});})(c__6192__auto___13914,mc_3dmask_13913,map__13724,map__13724__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___13914,mc_3dmask_13913,map__13724,map__13724__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13736 = [null,null,null,null,null,null,null,null];(statearr_13736[(0)] = state_machine__6178__auto__);
(statearr_13736[(1)] = (1));
return statearr_13736;
});
var state_machine__6178__auto____1 = (function (state_13730){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13730);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13737){if((e13737 instanceof Object))
{var ex__6181__auto__ = e13737;var statearr_13738_13915 = state_13730;(statearr_13738_13915[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13730);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13916 = state_13730;
state_13730 = G__13916;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13730){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13914,mc_3dmask_13913,map__13724,map__13724__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_13739 = f__6193__auto__.call(null);(statearr_13739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13914);
return statearr_13739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13914,mc_3dmask_13913,map__13724,map__13724__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__13740,key,modelChan){var map__13741 = p__13740;var map__13741__$1 = ((cljs.core.seq_QMARK_.call(null,map__13741))?cljs.core.apply.call(null,cljs.core.hash_map,map__13741):map__13741);var ctx = map__13741__$1;var tmpl_item = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (state_13774){var state_val_13775 = (state_13774[(1)]);if((state_val_13775 === (2)))
{var inst_13744 = (state_13774[(2)]);var inst_13745 = cljs.core.nth.call(null,inst_13744,(0),null);var inst_13746 = cljs.core.nth.call(null,inst_13744,(1),null);var inst_13747 = $("#tmpl_streetsnap");var inst_13748 = inst_13747.tmpl(inst_13746,tmpl_item);var inst_13749 = inst_13748.find("#mc_historyContainer");var inst_13750 = inst_13748.find("#mc_sideContainer");var inst_13751 = inst_13748.find("#mc_bottomContainer");var inst_13752 = inst_13748.find("#img_stylePicture");var inst_13753 = inst_13748.find("#btn_share");var inst_13754 = inst_13748.find("#btn_fullscreen");var inst_13755 = inst_13748.find("#btn_more");var inst_13756 = (function (){var model = inst_13746;var btn_more = inst_13755;var mc_sideContainer = inst_13750;var mc_historyContainer = inst_13749;var err = inst_13745;var tmpl = inst_13747;var img_stylePicture = inst_13752;var elem = inst_13748;var btn_share = inst_13753;var mc_bottomContainer = inst_13751;var btn_fullscreen = inst_13754;var vec__13742 = inst_13744;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (state_13781){var state_val_13782 = (state_13781[(1)]);if((state_val_13782 === (2)))
{var inst_13779 = (state_13781[(2)]);var state_13781__$1 = state_13781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13781__$1,inst_13779);
} else
{if((state_val_13782 === (1)))
{var inst_13776 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_13777 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13776,null));var state_13781__$1 = state_13781;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13781__$1,(2),tool.react.OnReact,inst_13777);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13786 = [null,null,null,null,null,null,null];(statearr_13786[(0)] = state_machine__6178__auto__);
(statearr_13786[(1)] = (1));
return statearr_13786;
});
var state_machine__6178__auto____1 = (function (state_13781){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13781);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13787){if((e13787 instanceof Object))
{var ex__6181__auto__ = e13787;var statearr_13788_13917 = state_13781;(statearr_13788_13917[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13781);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13918 = state_13781;
state_13781 = G__13918;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13781){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13789 = f__6193__auto__.call(null);(statearr_13789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var inst_13757 = inst_13755.on("click",inst_13756);var inst_13758 = (function (){var model = inst_13746;var btn_more = inst_13755;var mc_sideContainer = inst_13750;var mc_historyContainer = inst_13749;var err = inst_13745;var tmpl = inst_13747;var img_stylePicture = inst_13752;var elem = inst_13748;var btn_share = inst_13753;var mc_bottomContainer = inst_13751;var btn_fullscreen = inst_13754;var vec__13742 = inst_13744;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (state_13798){var state_val_13799 = (state_13798[(1)]);if((state_val_13799 === (2)))
{var inst_13796 = (state_13798[(2)]);var state_13798__$1 = state_13798;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13798__$1,inst_13796);
} else
{if((state_val_13799 === (1)))
{var inst_13790 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_13791 = [model];var inst_13792 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13790,inst_13791);var inst_13793 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_13792];var inst_13794 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13793,null));var state_13798__$1 = state_13798;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13798__$1,(2),tool.react.OnReact,inst_13794);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13803 = [null,null,null,null,null,null,null];(statearr_13803[(0)] = state_machine__6178__auto__);
(statearr_13803[(1)] = (1));
return statearr_13803;
});
var state_machine__6178__auto____1 = (function (state_13798){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13798);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13804){if((e13804 instanceof Object))
{var ex__6181__auto__ = e13804;var statearr_13805_13919 = state_13798;(statearr_13805_13919[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13798);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13920 = state_13798;
state_13798 = G__13920;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13798){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13806 = f__6193__auto__.call(null);(statearr_13806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var inst_13759 = inst_13754.on("click",inst_13758);var inst_13760 = (function (){var model = inst_13746;var btn_more = inst_13755;var mc_sideContainer = inst_13750;var mc_historyContainer = inst_13749;var err = inst_13745;var tmpl = inst_13747;var img_stylePicture = inst_13752;var elem = inst_13748;var btn_share = inst_13753;var mc_bottomContainer = inst_13751;var btn_fullscreen = inst_13754;var vec__13742 = inst_13744;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (state_13816){var state_val_13817 = (state_13816[(1)]);if((state_val_13817 === (2)))
{var inst_13814 = (state_13816[(2)]);var state_13816__$1 = state_13816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13816__$1,inst_13814);
} else
{if((state_val_13817 === (1)))
{var inst_13807 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_13808 = model.styleUrl;var inst_13809 = [inst_13808];var inst_13810 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13807,inst_13809);var inst_13811 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_13810];var inst_13812 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13811,null));var state_13816__$1 = state_13816;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13816__$1,(2),tool.react.OnReact,inst_13812);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13821 = [null,null,null,null,null,null,null];(statearr_13821[(0)] = state_machine__6178__auto__);
(statearr_13821[(1)] = (1));
return statearr_13821;
});
var state_machine__6178__auto____1 = (function (state_13816){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13816);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13822){if((e13822 instanceof Object))
{var ex__6181__auto__ = e13822;var statearr_13823_13921 = state_13816;(statearr_13823_13921[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13816);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13922 = state_13816;
state_13816 = G__13922;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13816){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13824 = f__6193__auto__.call(null);(statearr_13824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var inst_13761 = inst_13752.on("click",inst_13760);var inst_13762 = (function (){var model = inst_13746;var btn_more = inst_13755;var mc_sideContainer = inst_13750;var mc_historyContainer = inst_13749;var err = inst_13745;var tmpl = inst_13747;var img_stylePicture = inst_13752;var elem = inst_13748;var btn_share = inst_13753;var mc_bottomContainer = inst_13751;var btn_fullscreen = inst_13754;var vec__13742 = inst_13744;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (state_13833){var state_val_13834 = (state_13833[(1)]);if((state_val_13834 === (2)))
{var inst_13831 = (state_13833[(2)]);var state_13833__$1 = state_13833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13833__$1,inst_13831);
} else
{if((state_val_13834 === (1)))
{var inst_13825 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_13826 = [model];var inst_13827 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13825,inst_13826);var inst_13828 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_13827];var inst_13829 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13828,null));var state_13833__$1 = state_13833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13833__$1,(2),tool.react.OnReact,inst_13829);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13838 = [null,null,null,null,null,null,null];(statearr_13838[(0)] = state_machine__6178__auto__);
(statearr_13838[(1)] = (1));
return statearr_13838;
});
var state_machine__6178__auto____1 = (function (state_13833){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13833);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13839){if((e13839 instanceof Object))
{var ex__6181__auto__ = e13839;var statearr_13840_13923 = state_13833;(statearr_13840_13923[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13833);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13924 = state_13833;
state_13833 = G__13924;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13833){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13841 = f__6193__auto__.call(null);(statearr_13841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var inst_13763 = inst_13753.on("click",inst_13762);var inst_13764 = (function (){var model = inst_13746;var btn_more = inst_13755;var mc_sideContainer = inst_13750;var mc_historyContainer = inst_13749;var err = inst_13745;var tmpl = inst_13747;var img_stylePicture = inst_13752;var elem = inst_13748;var btn_share = inst_13753;var mc_bottomContainer = inst_13751;var btn_fullscreen = inst_13754;var vec__13742 = inst_13744;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (state_13852){var state_val_13853 = (state_13852[(1)]);if((state_val_13853 === (2)))
{var inst_13850 = (state_13852[(2)]);var state_13852__$1 = state_13852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13852__$1,inst_13850);
} else
{if((state_val_13853 === (1)))
{var inst_13842 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_13843 = that.id;var inst_13844 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13843));var inst_13845 = [inst_13844];var inst_13846 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13842,inst_13845);var inst_13847 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_13846];var inst_13848 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13847,null));var state_13852__$1 = state_13852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13852__$1,(2),tool.react.OnReact,inst_13848);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13857 = [null,null,null,null,null,null,null];(statearr_13857[(0)] = state_machine__6178__auto__);
(statearr_13857[(1)] = (1));
return statearr_13857;
});
var state_machine__6178__auto____1 = (function (state_13852){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13852);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13858){if((e13858 instanceof Object))
{var ex__6181__auto__ = e13858;var statearr_13859_13925 = state_13852;(statearr_13859_13925[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13852);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13926 = state_13852;
state_13852 = G__13926;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13852){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13860 = f__6193__auto__.call(null);(statearr_13860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var inst_13765 = inst_13750.delegate("img","click",inst_13764);var inst_13766 = (function (){var model = inst_13746;var btn_more = inst_13755;var mc_sideContainer = inst_13750;var mc_historyContainer = inst_13749;var err = inst_13745;var tmpl = inst_13747;var img_stylePicture = inst_13752;var elem = inst_13748;var btn_share = inst_13753;var mc_bottomContainer = inst_13751;var btn_fullscreen = inst_13754;var vec__13742 = inst_13744;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (state_13871){var state_val_13872 = (state_13871[(1)]);if((state_val_13872 === (2)))
{var inst_13869 = (state_13871[(2)]);var state_13871__$1 = state_13871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13871__$1,inst_13869);
} else
{if((state_val_13872 === (1)))
{var inst_13861 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_13862 = that.id;var inst_13863 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13862));var inst_13864 = [inst_13863];var inst_13865 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13861,inst_13864);var inst_13866 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_13865];var inst_13867 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13866,null));var state_13871__$1 = state_13871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13871__$1,(2),tool.react.OnReact,inst_13867);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13876 = [null,null,null,null,null,null,null];(statearr_13876[(0)] = state_machine__6178__auto__);
(statearr_13876[(1)] = (1));
return statearr_13876;
});
var state_machine__6178__auto____1 = (function (state_13871){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13871);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13877){if((e13877 instanceof Object))
{var ex__6181__auto__ = e13877;var statearr_13878_13927 = state_13871;(statearr_13878_13927[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13871);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13928 = state_13871;
state_13871 = G__13928;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13871){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13879 = f__6193__auto__.call(null);(statearr_13879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var inst_13767 = inst_13751.delegate("img","click",inst_13766);var inst_13768 = (function (){var model = inst_13746;var btn_more = inst_13755;var mc_sideContainer = inst_13750;var mc_historyContainer = inst_13749;var err = inst_13745;var tmpl = inst_13747;var img_stylePicture = inst_13752;var elem = inst_13748;var btn_share = inst_13753;var mc_bottomContainer = inst_13751;var btn_fullscreen = inst_13754;var vec__13742 = inst_13744;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,inst_13766,inst_13767,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,inst_13766,inst_13767,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,inst_13766,inst_13767,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function (state_13889){var state_val_13890 = (state_13889[(1)]);if((state_val_13890 === (2)))
{var inst_13887 = (state_13889[(2)]);var state_13889__$1 = state_13889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13889__$1,inst_13887);
} else
{if((state_val_13890 === (1)))
{var inst_13880 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_13881 = that.id;var inst_13882 = [inst_13881];var inst_13883 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13880,inst_13882);var inst_13884 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_13883];var inst_13885 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13884,null));var state_13889__$1 = state_13889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13889__$1,(2),tool.react.OnReact,inst_13885);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,inst_13766,inst_13767,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,inst_13766,inst_13767,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13894 = [null,null,null,null,null,null,null];(statearr_13894[(0)] = state_machine__6178__auto__);
(statearr_13894[(1)] = (1));
return statearr_13894;
});
var state_machine__6178__auto____1 = (function (state_13889){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13889);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13895){if((e13895 instanceof Object))
{var ex__6181__auto__ = e13895;var statearr_13896_13929 = state_13889;(statearr_13896_13929[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13889);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13895;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13930 = state_13889;
state_13889 = G__13930;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13889){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,inst_13766,inst_13767,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13897 = f__6193__auto__.call(null);(statearr_13897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,inst_13766,inst_13767,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__13742,inst_13744,inst_13745,inst_13746,inst_13747,inst_13748,inst_13749,inst_13750,inst_13751,inst_13752,inst_13753,inst_13754,inst_13755,inst_13756,inst_13757,inst_13758,inst_13759,inst_13760,inst_13761,inst_13762,inst_13763,inst_13764,inst_13765,inst_13766,inst_13767,state_val_13775,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var inst_13769 = inst_13749.delegate("img","click",inst_13768);var inst_13770 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_13771 = [inst_13748,name];var inst_13772 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13770,inst_13771);var state_13774__$1 = (function (){var statearr_13898 = state_13774;(statearr_13898[(7)] = inst_13761);
(statearr_13898[(8)] = inst_13765);
(statearr_13898[(9)] = inst_13769);
(statearr_13898[(10)] = inst_13767);
(statearr_13898[(11)] = inst_13757);
(statearr_13898[(12)] = inst_13763);
(statearr_13898[(13)] = inst_13759);
return statearr_13898;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13774__$1,inst_13772);
} else
{if((state_val_13775 === (1)))
{var state_13774__$1 = state_13774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13774__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13902[(0)] = state_machine__6178__auto__);
(statearr_13902[(1)] = (1));
return statearr_13902;
});
var state_machine__6178__auto____1 = (function (state_13774){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13774);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13903){if((e13903 instanceof Object))
{var ex__6181__auto__ = e13903;var statearr_13904_13931 = state_13774;(statearr_13904_13931[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13932 = state_13774;
state_13774 = G__13932;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13774){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13905 = f__6193__auto__.call(null);(statearr_13905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13741,map__13741__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__13933){var map__13934 = p__13933;var map__13934__$1 = ((cljs.core.seq_QMARK_.call(null,map__13934))?cljs.core.apply.call(null,cljs.core.hash_map,map__13934):map__13934);var view = map__13934__$1;var elem = cljs.core.get.call(null,map__13934__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_13950 = elem.find("#mc_3dmask");var c__6192__auto___13951 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13951,mc_3dmask_13950,map__13934,map__13934__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13951,mc_3dmask_13950,map__13934,map__13934__$1,view,elem){
return (function (state_13940){var state_val_13941 = (state_13940[(1)]);if((state_val_13941 === (2)))
{var inst_13937 = (state_13940[(2)]);var inst_13938 = mc_3dmask_13950.fadeOut((400));var state_13940__$1 = (function (){var statearr_13942 = state_13940;(statearr_13942[(7)] = inst_13937);
return statearr_13942;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13940__$1,inst_13938);
} else
{if((state_val_13941 === (1)))
{var inst_13935 = cljs.core.async.timeout.call(null,(3000));var state_13940__$1 = state_13940;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13940__$1,(2),inst_13935);
} else
{return null;
}
}
});})(c__6192__auto___13951,mc_3dmask_13950,map__13934,map__13934__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___13951,mc_3dmask_13950,map__13934,map__13934__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13946 = [null,null,null,null,null,null,null,null];(statearr_13946[(0)] = state_machine__6178__auto__);
(statearr_13946[(1)] = (1));
return statearr_13946;
});
var state_machine__6178__auto____1 = (function (state_13940){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13940);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13947){if((e13947 instanceof Object))
{var ex__6181__auto__ = e13947;var statearr_13948_13952 = state_13940;(statearr_13948_13952[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13940);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13953 = state_13940;
state_13940 = G__13953;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13940){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13951,mc_3dmask_13950,map__13934,map__13934__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_13949 = f__6193__auto__.call(null);(statearr_13949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13951);
return statearr_13949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13951,mc_3dmask_13950,map__13934,map__13934__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__13954,key,modelChan){var map__13955 = p__13954;var map__13955__$1 = ((cljs.core.seq_QMARK_.call(null,map__13955))?cljs.core.apply.call(null,cljs.core.hash_map,map__13955):map__13955);var ctx = map__13955__$1;var tmpl_item = cljs.core.get.call(null,map__13955__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13955,map__13955__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13955,map__13955__$1,ctx,tmpl_item){
return (function (state_13967){var state_val_13968 = (state_13967[(1)]);if((state_val_13968 === (2)))
{var inst_13958 = (state_13967[(2)]);var inst_13959 = cljs.core.nth.call(null,inst_13958,(0),null);var inst_13960 = cljs.core.nth.call(null,inst_13958,(1),null);var inst_13961 = $("#tmpl_home");var inst_13962 = inst_13961.tmpl(inst_13960,tmpl_item);var inst_13963 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_13964 = [inst_13962,key];var inst_13965 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13963,inst_13964);var state_13967__$1 = (function (){var statearr_13969 = state_13967;(statearr_13969[(7)] = inst_13959);
return statearr_13969;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13967__$1,inst_13965);
} else
{if((state_val_13968 === (1)))
{var state_13967__$1 = state_13967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13967__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__13955,map__13955__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13955,map__13955__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13973 = [null,null,null,null,null,null,null,null];(statearr_13973[(0)] = state_machine__6178__auto__);
(statearr_13973[(1)] = (1));
return statearr_13973;
});
var state_machine__6178__auto____1 = (function (state_13967){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13967);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13974){if((e13974 instanceof Object))
{var ex__6181__auto__ = e13974;var statearr_13975_13977 = state_13967;(statearr_13975_13977[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13978 = state_13967;
state_13967 = G__13978;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13967){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13955,map__13955__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13976 = f__6193__auto__.call(null);(statearr_13976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13955,map__13955__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__13979,key,view){var map__13980 = p__13979;var map__13980__$1 = ((cljs.core.seq_QMARK_.call(null,map__13980))?cljs.core.apply.call(null,cljs.core.hash_map,map__13980):map__13980);var ctx = map__13980__$1;var popupContainer = cljs.core.get.call(null,map__13980__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__13981 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__13981.appendTo(popupContainer);
G__13981.fadeIn((400));
return G__13981;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__13982,key,p__13983){var map__13984 = p__13982;var map__13984__$1 = ((cljs.core.seq_QMARK_.call(null,map__13984))?cljs.core.apply.call(null,cljs.core.hash_map,map__13984):map__13984);var ctx = map__13984__$1;var container = cljs.core.get.call(null,map__13984__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__13985 = p__13983;var map__13985__$1 = ((cljs.core.seq_QMARK_.call(null,map__13985))?cljs.core.apply.call(null,cljs.core.hash_map,map__13985):map__13985);var view = map__13985__$1;var elem = cljs.core.get.call(null,map__13985__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__13984,map__13984__$1,ctx,container,map__13985,map__13985__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__13984,map__13984__$1,ctx,container,map__13985,map__13985__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__13986,key,modelChan){var map__13987 = p__13986;var map__13987__$1 = ((cljs.core.seq_QMARK_.call(null,map__13987))?cljs.core.apply.call(null,cljs.core.hash_map,map__13987):map__13987);var ctx = map__13987__$1;var tmpl_item = cljs.core.get.call(null,map__13987__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item){
return (function (state_14002){var state_val_14003 = (state_14002[(1)]);if((state_val_14003 === (2)))
{var inst_13990 = (state_14002[(2)]);var inst_13991 = cljs.core.nth.call(null,inst_13990,(0),null);var inst_13992 = cljs.core.nth.call(null,inst_13990,(1),null);var inst_13993 = $("#tmpl_bigPhoto");var inst_13994 = inst_13993.tmpl(inst_13992,tmpl_item);var inst_13995 = inst_13994.find("#mc_bigPhotoFixPosition");var inst_13996 = (function (){var back = inst_13995;var elem = inst_13994;var tmpl = inst_13993;var model = inst_13992;var err = inst_13991;var vec__13988 = inst_13990;return ((function (back,elem,tmpl,model,err,vec__13988,inst_13990,inst_13991,inst_13992,inst_13993,inst_13994,inst_13995,state_val_14003,c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__13988,inst_13990,inst_13991,inst_13992,inst_13993,inst_13994,inst_13995,state_val_14003,c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__13988,inst_13990,inst_13991,inst_13992,inst_13993,inst_13994,inst_13995,state_val_14003,c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item){
return (function (state_14009){var state_val_14010 = (state_14009[(1)]);if((state_val_14010 === (2)))
{var inst_14007 = (state_14009[(2)]);var state_14009__$1 = state_14009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14009__$1,inst_14007);
} else
{if((state_val_14010 === (1)))
{var inst_14004 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_14005 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14004,null));var state_14009__$1 = state_14009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14009__$1,(2),tool.react.OnReact,inst_14005);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__13988,inst_13990,inst_13991,inst_13992,inst_13993,inst_13994,inst_13995,state_val_14003,c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__13988,inst_13990,inst_13991,inst_13992,inst_13993,inst_13994,inst_13995,state_val_14003,c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14014 = [null,null,null,null,null,null,null];(statearr_14014[(0)] = state_machine__6178__auto__);
(statearr_14014[(1)] = (1));
return statearr_14014;
});
var state_machine__6178__auto____1 = (function (state_14009){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14009);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14015){if((e14015 instanceof Object))
{var ex__6181__auto__ = e14015;var statearr_14016_14026 = state_14009;(statearr_14016_14026[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14027 = state_14009;
state_14009 = G__14027;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14009){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__13988,inst_13990,inst_13991,inst_13992,inst_13993,inst_13994,inst_13995,state_val_14003,c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14017 = f__6193__auto__.call(null);(statearr_14017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__13988,inst_13990,inst_13991,inst_13992,inst_13993,inst_13994,inst_13995,state_val_14003,c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__13988,inst_13990,inst_13991,inst_13992,inst_13993,inst_13994,inst_13995,state_val_14003,c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item))
})();var inst_13997 = inst_13995.on("click",inst_13996);var inst_13998 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_13999 = [inst_13994,key];var inst_14000 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13998,inst_13999);var state_14002__$1 = (function (){var statearr_14018 = state_14002;(statearr_14018[(7)] = inst_13997);
return statearr_14018;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14002__$1,inst_14000);
} else
{if((state_val_14003 === (1)))
{var state_14002__$1 = state_14002;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14002__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14022 = [null,null,null,null,null,null,null,null];(statearr_14022[(0)] = state_machine__6178__auto__);
(statearr_14022[(1)] = (1));
return statearr_14022;
});
var state_machine__6178__auto____1 = (function (state_14002){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14002);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14023){if((e14023 instanceof Object))
{var ex__6181__auto__ = e14023;var statearr_14024_14028 = state_14002;(statearr_14024_14028[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14002);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14029 = state_14002;
state_14002 = G__14029;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14002){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14025 = f__6193__auto__.call(null);(statearr_14025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13987,map__13987__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__14030,key,modelChan){var map__14031 = p__14030;var map__14031__$1 = ((cljs.core.seq_QMARK_.call(null,map__14031))?cljs.core.apply.call(null,cljs.core.hash_map,map__14031):map__14031);var ctx = map__14031__$1;var tmpl_item = cljs.core.get.call(null,map__14031__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__14031,map__14031__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__14031,map__14031__$1,ctx,tmpl_item){
return (function (state_14043){var state_val_14044 = (state_14043[(1)]);if((state_val_14044 === (2)))
{var inst_14034 = (state_14043[(2)]);var inst_14035 = cljs.core.nth.call(null,inst_14034,(0),null);var inst_14036 = cljs.core.nth.call(null,inst_14034,(1),null);var inst_14037 = $("#tmpl_news");var inst_14038 = inst_14037.tmpl(inst_14036,tmpl_item);var inst_14039 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_14040 = [inst_14038,key];var inst_14041 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14039,inst_14040);var state_14043__$1 = (function (){var statearr_14045 = state_14043;(statearr_14045[(7)] = inst_14035);
return statearr_14045;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14043__$1,inst_14041);
} else
{if((state_val_14044 === (1)))
{var state_14043__$1 = state_14043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14043__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__14031,map__14031__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__14031,map__14031__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14049 = [null,null,null,null,null,null,null,null];(statearr_14049[(0)] = state_machine__6178__auto__);
(statearr_14049[(1)] = (1));
return statearr_14049;
});
var state_machine__6178__auto____1 = (function (state_14043){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14043);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14050){if((e14050 instanceof Object))
{var ex__6181__auto__ = e14050;var statearr_14051_14053 = state_14043;(statearr_14051_14053[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14043);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14054 = state_14043;
state_14043 = G__14054;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14043){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__14031,map__14031__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14052 = f__6193__auto__.call(null);(statearr_14052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__14031,map__14031__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
