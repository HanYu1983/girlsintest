// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34242,key,view){var map__34243 = p__34242;var map__34243__$1 = ((cljs.core.seq_QMARK_.call(null,map__34243))?cljs.core.apply.call(null,cljs.core.hash_map,map__34243):map__34243);var ctx = map__34243__$1;var container = cljs.core.get.call(null,map__34243__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var c__6192__auto___34263 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___34263,map__34243,map__34243__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___34263,map__34243,map__34243__$1,ctx,container){
return (function (state_34253){var state_val_34254 = (state_34253[(1)]);if((state_val_34254 === (2)))
{var inst_34251 = (state_34253[(2)]);var state_34253__$1 = state_34253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34253__$1,inst_34251);
} else
{if((state_val_34254 === (1)))
{var inst_34244 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094)];var inst_34245 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_34246 = [inst_34245];var inst_34247 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34244,inst_34246);var inst_34248 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_34247];var inst_34249 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34248,null));var state_34253__$1 = state_34253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34253__$1,(2),tool.react.OnReact,inst_34249);
} else
{return null;
}
}
});})(c__6192__auto___34263,map__34243,map__34243__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto___34263,map__34243,map__34243__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34258 = [null,null,null,null,null,null,null];(statearr_34258[(0)] = state_machine__6178__auto__);
(statearr_34258[(1)] = (1));
return statearr_34258;
});
var state_machine__6178__auto____1 = (function (state_34253){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34253);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34259){if((e34259 instanceof Object))
{var ex__6181__auto__ = e34259;var statearr_34260_34264 = state_34253;(statearr_34260_34264[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34253);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34265 = state_34253;
state_34253 = G__34265;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34253){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___34263,map__34243,map__34243__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_34261 = f__6193__auto__.call(null);(statearr_34261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___34263);
return statearr_34261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___34263,map__34243,map__34243__$1,ctx,container))
);
var G__34262 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__34262.appendTo(container);
G__34262.fadeIn((400));
return G__34262;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34266,key,view){var map__34267 = p__34266;var map__34267__$1 = ((cljs.core.seq_QMARK_.call(null,map__34267))?cljs.core.apply.call(null,cljs.core.hash_map,map__34267):map__34267);var ctx = map__34267__$1;var container = cljs.core.get.call(null,map__34267__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__34268 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__34268.remove();
return G__34268;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_34431 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_34432 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_34433 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_34433.off("click");
btn_search_34432.off("click");
mc_modelContainer_34431.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__34350,key,modelChan){var map__34351 = p__34350;var map__34351__$1 = ((cljs.core.seq_QMARK_.call(null,map__34351))?cljs.core.apply.call(null,cljs.core.hash_map,map__34351):map__34351);var ctx = map__34351__$1;var tmpl_item = cljs.core.get.call(null,map__34351__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (state_34372){var state_val_34373 = (state_34372[(1)]);if((state_val_34373 === (2)))
{var inst_34354 = (state_34372[(2)]);var inst_34355 = cljs.core.nth.call(null,inst_34354,(0),null);var inst_34356 = cljs.core.nth.call(null,inst_34354,(1),null);var inst_34357 = $("#tmpl_streetsnap_list");var inst_34358 = inst_34357.tmpl(inst_34356,tmpl_item);var inst_34359 = inst_34358.find("#mc_modelContainer");var inst_34360 = inst_34358.find("#btn_search");var inst_34361 = inst_34358.find("#btn_return");var inst_34362 = (function (){var btn_return = inst_34361;var btn_search = inst_34360;var mc_modelContainer = inst_34359;var elem = inst_34358;var tmpl = inst_34357;var model = inst_34356;var err = inst_34355;var vec__34352 = inst_34354;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (state_34379){var state_val_34380 = (state_34379[(1)]);if((state_val_34380 === (2)))
{var inst_34377 = (state_34379[(2)]);var state_34379__$1 = state_34379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34379__$1,inst_34377);
} else
{if((state_val_34380 === (1)))
{var inst_34374 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_34375 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34374,null));var state_34379__$1 = state_34379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34379__$1,(2),tool.react.OnReact,inst_34375);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34384 = [null,null,null,null,null,null,null];(statearr_34384[(0)] = state_machine__6178__auto__);
(statearr_34384[(1)] = (1));
return statearr_34384;
});
var state_machine__6178__auto____1 = (function (state_34379){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34379);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34385){if((e34385 instanceof Object))
{var ex__6181__auto__ = e34385;var statearr_34386_34434 = state_34379;(statearr_34386_34434[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34379);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34435 = state_34379;
state_34379 = G__34435;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34379){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34387 = f__6193__auto__.call(null);(statearr_34387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
})();var inst_34363 = inst_34361.click(inst_34362);var inst_34364 = (function (){var btn_return = inst_34361;var btn_search = inst_34360;var mc_modelContainer = inst_34359;var elem = inst_34358;var tmpl = inst_34357;var model = inst_34356;var err = inst_34355;var vec__34352 = inst_34354;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (state_34396){var state_val_34397 = (state_34396[(1)]);if((state_val_34397 === (2)))
{var inst_34394 = (state_34396[(2)]);var state_34396__$1 = state_34396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34396__$1,inst_34394);
} else
{if((state_val_34397 === (1)))
{var inst_34388 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_34389 = [searchKey];var inst_34390 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34388,inst_34389);var inst_34391 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_34390];var inst_34392 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34391,null));var state_34396__$1 = state_34396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34396__$1,(2),tool.react.OnReact,inst_34392);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34401 = [null,null,null,null,null,null,null];(statearr_34401[(0)] = state_machine__6178__auto__);
(statearr_34401[(1)] = (1));
return statearr_34401;
});
var state_machine__6178__auto____1 = (function (state_34396){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34396);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34402){if((e34402 instanceof Object))
{var ex__6181__auto__ = e34402;var statearr_34403_34436 = state_34396;(statearr_34403_34436[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34437 = state_34396;
state_34396 = G__34437;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34396){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34404 = f__6193__auto__.call(null);(statearr_34404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
})();var inst_34365 = inst_34360.click(inst_34364);var inst_34366 = (function (){var btn_return = inst_34361;var btn_search = inst_34360;var mc_modelContainer = inst_34359;var elem = inst_34358;var tmpl = inst_34357;var model = inst_34356;var err = inst_34355;var vec__34352 = inst_34354;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,inst_34364,inst_34365,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,inst_34364,inst_34365,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,inst_34364,inst_34365,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function (state_34414){var state_val_34415 = (state_34414[(1)]);if((state_val_34415 === (2)))
{var inst_34412 = (state_34414[(2)]);var state_34414__$1 = state_34414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34414__$1,inst_34412);
} else
{if((state_val_34415 === (1)))
{var inst_34405 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_34406 = that.id;var inst_34407 = [inst_34406];var inst_34408 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34405,inst_34407);var inst_34409 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_34408];var inst_34410 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34409,null));var state_34414__$1 = state_34414;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34414__$1,(2),tool.react.OnReact,inst_34410);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,inst_34364,inst_34365,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,inst_34364,inst_34365,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34419 = [null,null,null,null,null,null,null];(statearr_34419[(0)] = state_machine__6178__auto__);
(statearr_34419[(1)] = (1));
return statearr_34419;
});
var state_machine__6178__auto____1 = (function (state_34414){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34414);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34420){if((e34420 instanceof Object))
{var ex__6181__auto__ = e34420;var statearr_34421_34438 = state_34414;(statearr_34421_34438[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34414);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34439 = state_34414;
state_34414 = G__34439;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34414){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,inst_34364,inst_34365,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34422 = f__6193__auto__.call(null);(statearr_34422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,inst_34364,inst_34365,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__34352,inst_34354,inst_34355,inst_34356,inst_34357,inst_34358,inst_34359,inst_34360,inst_34361,inst_34362,inst_34363,inst_34364,inst_34365,state_val_34373,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
})();var inst_34367 = inst_34359.delegate("div[modelFrame]","click",inst_34366);var inst_34368 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_34369 = [inst_34358,name];var inst_34370 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34368,inst_34369);var state_34372__$1 = (function (){var statearr_34423 = state_34372;(statearr_34423[(7)] = inst_34365);
(statearr_34423[(8)] = inst_34367);
(statearr_34423[(9)] = inst_34363);
return statearr_34423;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34372__$1,inst_34370);
} else
{if((state_val_34373 === (1)))
{var state_34372__$1 = state_34372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34372__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34427 = [null,null,null,null,null,null,null,null,null,null];(statearr_34427[(0)] = state_machine__6178__auto__);
(statearr_34427[(1)] = (1));
return statearr_34427;
});
var state_machine__6178__auto____1 = (function (state_34372){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34372);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34428){if((e34428 instanceof Object))
{var ex__6181__auto__ = e34428;var statearr_34429_34440 = state_34372;(statearr_34429_34440[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34372);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34441 = state_34372;
state_34372 = G__34441;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34372){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34430 = f__6193__auto__.call(null);(statearr_34430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_34430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__34351,map__34351__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__34588){var map__34589 = p__34588;var map__34589__$1 = ((cljs.core.seq_QMARK_.call(null,map__34589))?cljs.core.apply.call(null,cljs.core.hash_map,map__34589):map__34589);var view = map__34589__$1;var elem = cljs.core.get.call(null,map__34589__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_34734 = elem.find("#mc_historyContainer");var mc_sideContainer_34735 = elem.find("#mc_sideContainer");var mc_bottomContainer_34736 = elem.find("#mc_bottomContainer");var img_stylePicture_34737 = elem.find("#img_stylePicture");var btn_share_34738 = elem.find("#btn_share");mc_modelContainer_34734.undelegate("img","click");
mc_sideContainer_34735.undelegate("img","click");
mc_bottomContainer_34736.undelegate("img","click");
img_stylePicture_34737.off("click");
btn_share_34738.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__34590){var map__34591 = p__34590;var map__34591__$1 = ((cljs.core.seq_QMARK_.call(null,map__34591))?cljs.core.apply.call(null,cljs.core.hash_map,map__34591):map__34591);var view = map__34591__$1;var elem = cljs.core.get.call(null,map__34591__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_34739 = elem.find("#mc_3dmask");var c__6192__auto___34740 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___34740,mc_3dmask_34739,map__34591,map__34591__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___34740,mc_3dmask_34739,map__34591,map__34591__$1,view,elem){
return (function (state_34597){var state_val_34598 = (state_34597[(1)]);if((state_val_34598 === (2)))
{var inst_34594 = (state_34597[(2)]);var inst_34595 = mc_3dmask_34739.fadeOut((400));var state_34597__$1 = (function (){var statearr_34599 = state_34597;(statearr_34599[(7)] = inst_34594);
return statearr_34599;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34597__$1,inst_34595);
} else
{if((state_val_34598 === (1)))
{var inst_34592 = cljs.core.async.timeout.call(null,(5000));var state_34597__$1 = state_34597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34597__$1,(2),inst_34592);
} else
{return null;
}
}
});})(c__6192__auto___34740,mc_3dmask_34739,map__34591,map__34591__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___34740,mc_3dmask_34739,map__34591,map__34591__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34603 = [null,null,null,null,null,null,null,null];(statearr_34603[(0)] = state_machine__6178__auto__);
(statearr_34603[(1)] = (1));
return statearr_34603;
});
var state_machine__6178__auto____1 = (function (state_34597){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34597);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34604){if((e34604 instanceof Object))
{var ex__6181__auto__ = e34604;var statearr_34605_34741 = state_34597;(statearr_34605_34741[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34742 = state_34597;
state_34597 = G__34742;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34597){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___34740,mc_3dmask_34739,map__34591,map__34591__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_34606 = f__6193__auto__.call(null);(statearr_34606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___34740);
return statearr_34606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___34740,mc_3dmask_34739,map__34591,map__34591__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__34607,key,modelChan){var map__34608 = p__34607;var map__34608__$1 = ((cljs.core.seq_QMARK_.call(null,map__34608))?cljs.core.apply.call(null,cljs.core.hash_map,map__34608):map__34608);var ctx = map__34608__$1;var tmpl_item = cljs.core.get.call(null,map__34608__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (state_34635){var state_val_34636 = (state_34635[(1)]);if((state_val_34636 === (2)))
{var inst_34611 = (state_34635[(2)]);var inst_34612 = cljs.core.nth.call(null,inst_34611,(0),null);var inst_34613 = cljs.core.nth.call(null,inst_34611,(1),null);var inst_34614 = $("#tmpl_streetsnap");var inst_34615 = inst_34614.tmpl(inst_34613,tmpl_item);var inst_34616 = inst_34615.find("#mc_historyContainer");var inst_34617 = inst_34615.find("#mc_sideContainer");var inst_34618 = inst_34615.find("#mc_bottomContainer");var inst_34619 = inst_34615.find("#img_stylePicture");var inst_34620 = inst_34615.find("#btn_share");var inst_34621 = (function (){var model = inst_34613;var mc_sideContainer = inst_34617;var vec__34609 = inst_34611;var mc_historyContainer = inst_34616;var err = inst_34612;var tmpl = inst_34614;var img_stylePicture = inst_34619;var elem = inst_34615;var btn_share = inst_34620;var mc_bottomContainer = inst_34618;return ((function (model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (state_34646){var state_val_34647 = (state_34646[(1)]);if((state_val_34647 === (2)))
{var inst_34644 = (state_34646[(2)]);var state_34646__$1 = state_34646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34646__$1,inst_34644);
} else
{if((state_val_34647 === (1)))
{var inst_34637 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_34638 = model.styleUrl;var inst_34639 = [inst_34638];var inst_34640 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34637,inst_34639);var inst_34641 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_34640];var inst_34642 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34641,null));var state_34646__$1 = state_34646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34646__$1,(2),tool.react.OnReact,inst_34642);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34651 = [null,null,null,null,null,null,null];(statearr_34651[(0)] = state_machine__6178__auto__);
(statearr_34651[(1)] = (1));
return statearr_34651;
});
var state_machine__6178__auto____1 = (function (state_34646){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34646);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34652){if((e34652 instanceof Object))
{var ex__6181__auto__ = e34652;var statearr_34653_34743 = state_34646;(statearr_34653_34743[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34646);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34744 = state_34646;
state_34646 = G__34744;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34646){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34654 = f__6193__auto__.call(null);(statearr_34654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var inst_34622 = inst_34619.on("click",inst_34621);var inst_34623 = (function (){var model = inst_34613;var mc_sideContainer = inst_34617;var vec__34609 = inst_34611;var mc_historyContainer = inst_34616;var err = inst_34612;var tmpl = inst_34614;var img_stylePicture = inst_34619;var elem = inst_34615;var btn_share = inst_34620;var mc_bottomContainer = inst_34618;return ((function (model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (state_34663){var state_val_34664 = (state_34663[(1)]);if((state_val_34664 === (2)))
{var inst_34661 = (state_34663[(2)]);var state_34663__$1 = state_34663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34663__$1,inst_34661);
} else
{if((state_val_34664 === (1)))
{var inst_34655 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_34656 = [model];var inst_34657 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34655,inst_34656);var inst_34658 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_34657];var inst_34659 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34658,null));var state_34663__$1 = state_34663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34663__$1,(2),tool.react.OnReact,inst_34659);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34668 = [null,null,null,null,null,null,null];(statearr_34668[(0)] = state_machine__6178__auto__);
(statearr_34668[(1)] = (1));
return statearr_34668;
});
var state_machine__6178__auto____1 = (function (state_34663){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34663);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34669){if((e34669 instanceof Object))
{var ex__6181__auto__ = e34669;var statearr_34670_34745 = state_34663;(statearr_34670_34745[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34663);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34746 = state_34663;
state_34663 = G__34746;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34663){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34671 = f__6193__auto__.call(null);(statearr_34671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var inst_34624 = inst_34620.on("click",inst_34623);var inst_34625 = (function (){var model = inst_34613;var mc_sideContainer = inst_34617;var vec__34609 = inst_34611;var mc_historyContainer = inst_34616;var err = inst_34612;var tmpl = inst_34614;var img_stylePicture = inst_34619;var elem = inst_34615;var btn_share = inst_34620;var mc_bottomContainer = inst_34618;return ((function (model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (state_34681){var state_val_34682 = (state_34681[(1)]);if((state_val_34682 === (2)))
{var inst_34679 = (state_34681[(2)]);var state_34681__$1 = state_34681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34681__$1,inst_34679);
} else
{if((state_val_34682 === (1)))
{var inst_34672 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_34673 = that.id;var inst_34674 = [inst_34673];var inst_34675 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34672,inst_34674);var inst_34676 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_34675];var inst_34677 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34676,null));var state_34681__$1 = state_34681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34681__$1,(2),tool.react.OnReact,inst_34677);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34686 = [null,null,null,null,null,null,null];(statearr_34686[(0)] = state_machine__6178__auto__);
(statearr_34686[(1)] = (1));
return statearr_34686;
});
var state_machine__6178__auto____1 = (function (state_34681){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34687){if((e34687 instanceof Object))
{var ex__6181__auto__ = e34687;var statearr_34688_34747 = state_34681;(statearr_34688_34747[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34748 = state_34681;
state_34681 = G__34748;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34681){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34689 = f__6193__auto__.call(null);(statearr_34689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var inst_34626 = inst_34617.delegate("img","click",inst_34625);var inst_34627 = (function (){var model = inst_34613;var mc_sideContainer = inst_34617;var vec__34609 = inst_34611;var mc_historyContainer = inst_34616;var err = inst_34612;var tmpl = inst_34614;var img_stylePicture = inst_34619;var elem = inst_34615;var btn_share = inst_34620;var mc_bottomContainer = inst_34618;return ((function (model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (state_34699){var state_val_34700 = (state_34699[(1)]);if((state_val_34700 === (2)))
{var inst_34697 = (state_34699[(2)]);var state_34699__$1 = state_34699;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34699__$1,inst_34697);
} else
{if((state_val_34700 === (1)))
{var inst_34690 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_34691 = that.id;var inst_34692 = [inst_34691];var inst_34693 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34690,inst_34692);var inst_34694 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_34693];var inst_34695 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34694,null));var state_34699__$1 = state_34699;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34699__$1,(2),tool.react.OnReact,inst_34695);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34704 = [null,null,null,null,null,null,null];(statearr_34704[(0)] = state_machine__6178__auto__);
(statearr_34704[(1)] = (1));
return statearr_34704;
});
var state_machine__6178__auto____1 = (function (state_34699){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34699);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34705){if((e34705 instanceof Object))
{var ex__6181__auto__ = e34705;var statearr_34706_34749 = state_34699;(statearr_34706_34749[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34699);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34750 = state_34699;
state_34699 = G__34750;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34699){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34707 = f__6193__auto__.call(null);(statearr_34707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var inst_34628 = inst_34618.delegate("img","click",inst_34627);var inst_34629 = (function (){var model = inst_34613;var mc_sideContainer = inst_34617;var vec__34609 = inst_34611;var mc_historyContainer = inst_34616;var err = inst_34612;var tmpl = inst_34614;var img_stylePicture = inst_34619;var elem = inst_34615;var btn_share = inst_34620;var mc_bottomContainer = inst_34618;return ((function (model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,inst_34627,inst_34628,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,inst_34627,inst_34628,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,inst_34627,inst_34628,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function (state_34717){var state_val_34718 = (state_34717[(1)]);if((state_val_34718 === (2)))
{var inst_34715 = (state_34717[(2)]);var state_34717__$1 = state_34717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34717__$1,inst_34715);
} else
{if((state_val_34718 === (1)))
{var inst_34708 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_34709 = that.id;var inst_34710 = [inst_34709];var inst_34711 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34708,inst_34710);var inst_34712 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_34711];var inst_34713 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34712,null));var state_34717__$1 = state_34717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34717__$1,(2),tool.react.OnReact,inst_34713);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,inst_34627,inst_34628,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,inst_34627,inst_34628,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34722 = [null,null,null,null,null,null,null];(statearr_34722[(0)] = state_machine__6178__auto__);
(statearr_34722[(1)] = (1));
return statearr_34722;
});
var state_machine__6178__auto____1 = (function (state_34717){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34717);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34723){if((e34723 instanceof Object))
{var ex__6181__auto__ = e34723;var statearr_34724_34751 = state_34717;(statearr_34724_34751[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34717);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34752 = state_34717;
state_34717 = G__34752;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34717){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,inst_34627,inst_34628,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34725 = f__6193__auto__.call(null);(statearr_34725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,inst_34627,inst_34628,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,vec__34609,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_34611,inst_34612,inst_34613,inst_34614,inst_34615,inst_34616,inst_34617,inst_34618,inst_34619,inst_34620,inst_34621,inst_34622,inst_34623,inst_34624,inst_34625,inst_34626,inst_34627,inst_34628,state_val_34636,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var inst_34630 = inst_34616.delegate("img","click",inst_34629);var inst_34631 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_34632 = [inst_34615,name];var inst_34633 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34631,inst_34632);var state_34635__$1 = (function (){var statearr_34726 = state_34635;(statearr_34726[(7)] = inst_34624);
(statearr_34726[(8)] = inst_34628);
(statearr_34726[(9)] = inst_34622);
(statearr_34726[(10)] = inst_34626);
(statearr_34726[(11)] = inst_34630);
return statearr_34726;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34635__$1,inst_34633);
} else
{if((state_val_34636 === (1)))
{var state_34635__$1 = state_34635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34730 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34730[(0)] = state_machine__6178__auto__);
(statearr_34730[(1)] = (1));
return statearr_34730;
});
var state_machine__6178__auto____1 = (function (state_34635){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34635);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34731){if((e34731 instanceof Object))
{var ex__6181__auto__ = e34731;var statearr_34732_34753 = state_34635;(statearr_34732_34753[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34635);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34754 = state_34635;
state_34635 = G__34754;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34635){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34733 = f__6193__auto__.call(null);(statearr_34733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_34733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__34608,map__34608__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__34755){var map__34756 = p__34755;var map__34756__$1 = ((cljs.core.seq_QMARK_.call(null,map__34756))?cljs.core.apply.call(null,cljs.core.hash_map,map__34756):map__34756);var view = map__34756__$1;var elem = cljs.core.get.call(null,map__34756__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_34772 = elem.find("#mc_3dmask");var c__6192__auto___34773 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___34773,mc_3dmask_34772,map__34756,map__34756__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___34773,mc_3dmask_34772,map__34756,map__34756__$1,view,elem){
return (function (state_34762){var state_val_34763 = (state_34762[(1)]);if((state_val_34763 === (2)))
{var inst_34759 = (state_34762[(2)]);var inst_34760 = mc_3dmask_34772.fadeOut((400));var state_34762__$1 = (function (){var statearr_34764 = state_34762;(statearr_34764[(7)] = inst_34759);
return statearr_34764;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34762__$1,inst_34760);
} else
{if((state_val_34763 === (1)))
{var inst_34757 = cljs.core.async.timeout.call(null,(5000));var state_34762__$1 = state_34762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34762__$1,(2),inst_34757);
} else
{return null;
}
}
});})(c__6192__auto___34773,mc_3dmask_34772,map__34756,map__34756__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___34773,mc_3dmask_34772,map__34756,map__34756__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34768 = [null,null,null,null,null,null,null,null];(statearr_34768[(0)] = state_machine__6178__auto__);
(statearr_34768[(1)] = (1));
return statearr_34768;
});
var state_machine__6178__auto____1 = (function (state_34762){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34762);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34769){if((e34769 instanceof Object))
{var ex__6181__auto__ = e34769;var statearr_34770_34774 = state_34762;(statearr_34770_34774[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34775 = state_34762;
state_34762 = G__34775;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34762){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___34773,mc_3dmask_34772,map__34756,map__34756__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_34771 = f__6193__auto__.call(null);(statearr_34771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___34773);
return statearr_34771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___34773,mc_3dmask_34772,map__34756,map__34756__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__34776,key,modelChan){var map__34777 = p__34776;var map__34777__$1 = ((cljs.core.seq_QMARK_.call(null,map__34777))?cljs.core.apply.call(null,cljs.core.hash_map,map__34777):map__34777);var ctx = map__34777__$1;var tmpl_item = cljs.core.get.call(null,map__34777__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__34777,map__34777__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__34777,map__34777__$1,ctx,tmpl_item){
return (function (state_34789){var state_val_34790 = (state_34789[(1)]);if((state_val_34790 === (2)))
{var inst_34780 = (state_34789[(2)]);var inst_34781 = cljs.core.nth.call(null,inst_34780,(0),null);var inst_34782 = cljs.core.nth.call(null,inst_34780,(1),null);var inst_34783 = $("#tmpl_home");var inst_34784 = inst_34783.tmpl(inst_34782,tmpl_item);var inst_34785 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_34786 = [inst_34784,key];var inst_34787 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34785,inst_34786);var state_34789__$1 = (function (){var statearr_34791 = state_34789;(statearr_34791[(7)] = inst_34781);
return statearr_34791;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34789__$1,inst_34787);
} else
{if((state_val_34790 === (1)))
{var state_34789__$1 = state_34789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34789__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__34777,map__34777__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__34777,map__34777__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34795 = [null,null,null,null,null,null,null,null];(statearr_34795[(0)] = state_machine__6178__auto__);
(statearr_34795[(1)] = (1));
return statearr_34795;
});
var state_machine__6178__auto____1 = (function (state_34789){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34789);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34796){if((e34796 instanceof Object))
{var ex__6181__auto__ = e34796;var statearr_34797_34799 = state_34789;(statearr_34797_34799[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34789);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34800 = state_34789;
state_34789 = G__34800;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34789){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__34777,map__34777__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34798 = f__6193__auto__.call(null);(statearr_34798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_34798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__34777,map__34777__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__34801,key,view){var map__34802 = p__34801;var map__34802__$1 = ((cljs.core.seq_QMARK_.call(null,map__34802))?cljs.core.apply.call(null,cljs.core.hash_map,map__34802):map__34802);var ctx = map__34802__$1;var popupContainer = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__34803 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__34803.appendTo(popupContainer);
G__34803.fadeIn((400));
return G__34803;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__34804,key,p__34805){var map__34806 = p__34804;var map__34806__$1 = ((cljs.core.seq_QMARK_.call(null,map__34806))?cljs.core.apply.call(null,cljs.core.hash_map,map__34806):map__34806);var ctx = map__34806__$1;var container = cljs.core.get.call(null,map__34806__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__34807 = p__34805;var map__34807__$1 = ((cljs.core.seq_QMARK_.call(null,map__34807))?cljs.core.apply.call(null,cljs.core.hash_map,map__34807):map__34807);var view = map__34807__$1;var elem = cljs.core.get.call(null,map__34807__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__34806,map__34806__$1,ctx,container,map__34807,map__34807__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__34806,map__34806__$1,ctx,container,map__34807,map__34807__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__34808,key,modelChan){var map__34809 = p__34808;var map__34809__$1 = ((cljs.core.seq_QMARK_.call(null,map__34809))?cljs.core.apply.call(null,cljs.core.hash_map,map__34809):map__34809);var ctx = map__34809__$1;var tmpl_item = cljs.core.get.call(null,map__34809__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item){
return (function (state_34824){var state_val_34825 = (state_34824[(1)]);if((state_val_34825 === (2)))
{var inst_34812 = (state_34824[(2)]);var inst_34813 = cljs.core.nth.call(null,inst_34812,(0),null);var inst_34814 = cljs.core.nth.call(null,inst_34812,(1),null);var inst_34815 = $("#tmpl_bigPhoto");var inst_34816 = inst_34815.tmpl(inst_34814,tmpl_item);var inst_34817 = inst_34816.find("#mc_bigPhotoFixPosition");var inst_34818 = (function (){var back = inst_34817;var elem = inst_34816;var tmpl = inst_34815;var model = inst_34814;var err = inst_34813;var vec__34810 = inst_34812;return ((function (back,elem,tmpl,model,err,vec__34810,inst_34812,inst_34813,inst_34814,inst_34815,inst_34816,inst_34817,state_val_34825,c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__34810,inst_34812,inst_34813,inst_34814,inst_34815,inst_34816,inst_34817,state_val_34825,c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__34810,inst_34812,inst_34813,inst_34814,inst_34815,inst_34816,inst_34817,state_val_34825,c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item){
return (function (state_34831){var state_val_34832 = (state_34831[(1)]);if((state_val_34832 === (2)))
{var inst_34829 = (state_34831[(2)]);var state_34831__$1 = state_34831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34831__$1,inst_34829);
} else
{if((state_val_34832 === (1)))
{var inst_34826 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_34827 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34826,null));var state_34831__$1 = state_34831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34831__$1,(2),tool.react.OnReact,inst_34827);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__34810,inst_34812,inst_34813,inst_34814,inst_34815,inst_34816,inst_34817,state_val_34825,c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__34810,inst_34812,inst_34813,inst_34814,inst_34815,inst_34816,inst_34817,state_val_34825,c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34836 = [null,null,null,null,null,null,null];(statearr_34836[(0)] = state_machine__6178__auto__);
(statearr_34836[(1)] = (1));
return statearr_34836;
});
var state_machine__6178__auto____1 = (function (state_34831){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34831);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34837){if((e34837 instanceof Object))
{var ex__6181__auto__ = e34837;var statearr_34838_34848 = state_34831;(statearr_34838_34848[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34831);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34849 = state_34831;
state_34831 = G__34849;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34831){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__34810,inst_34812,inst_34813,inst_34814,inst_34815,inst_34816,inst_34817,state_val_34825,c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34839 = f__6193__auto__.call(null);(statearr_34839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__34810,inst_34812,inst_34813,inst_34814,inst_34815,inst_34816,inst_34817,state_val_34825,c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__34810,inst_34812,inst_34813,inst_34814,inst_34815,inst_34816,inst_34817,state_val_34825,c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item))
})();var inst_34819 = inst_34817.on("click",inst_34818);var inst_34820 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_34821 = [inst_34816,key];var inst_34822 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34820,inst_34821);var state_34824__$1 = (function (){var statearr_34840 = state_34824;(statearr_34840[(7)] = inst_34819);
return statearr_34840;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34824__$1,inst_34822);
} else
{if((state_val_34825 === (1)))
{var state_34824__$1 = state_34824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34824__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34844 = [null,null,null,null,null,null,null,null];(statearr_34844[(0)] = state_machine__6178__auto__);
(statearr_34844[(1)] = (1));
return statearr_34844;
});
var state_machine__6178__auto____1 = (function (state_34824){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34824);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34845){if((e34845 instanceof Object))
{var ex__6181__auto__ = e34845;var statearr_34846_34850 = state_34824;(statearr_34846_34850[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34824);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34851 = state_34824;
state_34824 = G__34851;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34824){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34847 = f__6193__auto__.call(null);(statearr_34847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_34847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__34809,map__34809__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
