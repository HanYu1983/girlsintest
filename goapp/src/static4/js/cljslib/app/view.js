// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__59250,key,view){var map__59251 = p__59250;var map__59251__$1 = ((cljs.core.seq_QMARK_.call(null,map__59251))?cljs.core.apply.call(null,cljs.core.hash_map,map__59251):map__59251);var ctx = map__59251__$1;var container = cljs.core.get.call(null,map__59251__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var c__6216__auto___59271 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___59271,map__59251,map__59251__$1,ctx,container){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___59271,map__59251,map__59251__$1,ctx,container){
return (function (state_59261){var state_val_59262 = (state_59261[(1)]);if((state_val_59262 === (2)))
{var inst_59259 = (state_59261[(2)]);var state_59261__$1 = state_59261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59261__$1,inst_59259);
} else
{if((state_val_59262 === (1)))
{var inst_59252 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094)];var inst_59253 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_59254 = [inst_59253];var inst_59255 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59252,inst_59254);var inst_59256 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_59255];var inst_59257 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59256,null));var state_59261__$1 = state_59261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59261__$1,(2),tool.react.OnReact,inst_59257);
} else
{return null;
}
}
});})(c__6216__auto___59271,map__59251,map__59251__$1,ctx,container))
;return ((function (switch__6201__auto__,c__6216__auto___59271,map__59251,map__59251__$1,ctx,container){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59266 = [null,null,null,null,null,null,null];(statearr_59266[(0)] = state_machine__6202__auto__);
(statearr_59266[(1)] = (1));
return statearr_59266;
});
var state_machine__6202__auto____1 = (function (state_59261){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59261);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59267){if((e59267 instanceof Object))
{var ex__6205__auto__ = e59267;var statearr_59268_59272 = state_59261;(statearr_59268_59272[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59273 = state_59261;
state_59261 = G__59273;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59261){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___59271,map__59251,map__59251__$1,ctx,container))
})();var state__6218__auto__ = (function (){var statearr_59269 = f__6217__auto__.call(null);(statearr_59269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___59271);
return statearr_59269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___59271,map__59251,map__59251__$1,ctx,container))
);
var G__59270 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__59270.appendTo(container);
G__59270.fadeIn((400));
return G__59270;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__59274,key,view){var map__59275 = p__59274;var map__59275__$1 = ((cljs.core.seq_QMARK_.call(null,map__59275))?cljs.core.apply.call(null,cljs.core.hash_map,map__59275):map__59275);var ctx = map__59275__$1;var container = cljs.core.get.call(null,map__59275__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__59276 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__59276.remove();
return G__59276;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_59439 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_59440 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_59441 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_59441.off("click");
btn_search_59440.off("click");
mc_modelContainer_59439.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__59358,key,modelChan){var map__59359 = p__59358;var map__59359__$1 = ((cljs.core.seq_QMARK_.call(null,map__59359))?cljs.core.apply.call(null,cljs.core.hash_map,map__59359):map__59359);var ctx = map__59359__$1;var tmpl_item = cljs.core.get.call(null,map__59359__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (state_59380){var state_val_59381 = (state_59380[(1)]);if((state_val_59381 === (2)))
{var inst_59362 = (state_59380[(2)]);var inst_59363 = cljs.core.nth.call(null,inst_59362,(0),null);var inst_59364 = cljs.core.nth.call(null,inst_59362,(1),null);var inst_59365 = $("#tmpl_streetsnap_list");var inst_59366 = inst_59365.tmpl(inst_59364,tmpl_item);var inst_59367 = inst_59366.find("#mc_modelContainer");var inst_59368 = inst_59366.find("#btn_search");var inst_59369 = inst_59366.find("#btn_return");var inst_59370 = (function (){var btn_return = inst_59369;var btn_search = inst_59368;var mc_modelContainer = inst_59367;var elem = inst_59366;var tmpl = inst_59365;var model = inst_59364;var err = inst_59363;var vec__59360 = inst_59362;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (){var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (state_59387){var state_val_59388 = (state_59387[(1)]);if((state_val_59388 === (2)))
{var inst_59385 = (state_59387[(2)]);var state_59387__$1 = state_59387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59387__$1,inst_59385);
} else
{if((state_val_59388 === (1)))
{var inst_59382 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_59383 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59382,null));var state_59387__$1 = state_59387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59387__$1,(2),tool.react.OnReact,inst_59383);
} else
{return null;
}
}
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59392 = [null,null,null,null,null,null,null];(statearr_59392[(0)] = state_machine__6202__auto__);
(statearr_59392[(1)] = (1));
return statearr_59392;
});
var state_machine__6202__auto____1 = (function (state_59387){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59387);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59393){if((e59393 instanceof Object))
{var ex__6205__auto__ = e59393;var statearr_59394_59442 = state_59387;(statearr_59394_59442[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59443 = state_59387;
state_59387 = G__59443;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59387){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_59395 = f__6217__auto__.call(null);(statearr_59395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_59395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
})();var inst_59371 = inst_59369.click(inst_59370);var inst_59372 = (function (){var btn_return = inst_59369;var btn_search = inst_59368;var mc_modelContainer = inst_59367;var elem = inst_59366;var tmpl = inst_59365;var model = inst_59364;var err = inst_59363;var vec__59360 = inst_59362;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (state_59404){var state_val_59405 = (state_59404[(1)]);if((state_val_59405 === (2)))
{var inst_59402 = (state_59404[(2)]);var state_59404__$1 = state_59404;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59404__$1,inst_59402);
} else
{if((state_val_59405 === (1)))
{var inst_59396 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_59397 = [searchKey];var inst_59398 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59396,inst_59397);var inst_59399 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_59398];var inst_59400 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59399,null));var state_59404__$1 = state_59404;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59404__$1,(2),tool.react.OnReact,inst_59400);
} else
{return null;
}
}
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59409 = [null,null,null,null,null,null,null];(statearr_59409[(0)] = state_machine__6202__auto__);
(statearr_59409[(1)] = (1));
return statearr_59409;
});
var state_machine__6202__auto____1 = (function (state_59404){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59404);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59410){if((e59410 instanceof Object))
{var ex__6205__auto__ = e59410;var statearr_59411_59444 = state_59404;(statearr_59411_59444[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59404);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59410;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59445 = state_59404;
state_59404 = G__59445;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59404){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_59412 = f__6217__auto__.call(null);(statearr_59412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_59412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
})();var inst_59373 = inst_59368.click(inst_59372);var inst_59374 = (function (){var btn_return = inst_59369;var btn_search = inst_59368;var mc_modelContainer = inst_59367;var elem = inst_59366;var tmpl = inst_59365;var model = inst_59364;var err = inst_59363;var vec__59360 = inst_59362;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,inst_59372,inst_59373,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,inst_59372,inst_59373,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,inst_59372,inst_59373,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function (state_59422){var state_val_59423 = (state_59422[(1)]);if((state_val_59423 === (2)))
{var inst_59420 = (state_59422[(2)]);var state_59422__$1 = state_59422;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59422__$1,inst_59420);
} else
{if((state_val_59423 === (1)))
{var inst_59413 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_59414 = that.id;var inst_59415 = [inst_59414];var inst_59416 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59413,inst_59415);var inst_59417 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_59416];var inst_59418 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59417,null));var state_59422__$1 = state_59422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59422__$1,(2),tool.react.OnReact,inst_59418);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,inst_59372,inst_59373,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,inst_59372,inst_59373,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59427 = [null,null,null,null,null,null,null];(statearr_59427[(0)] = state_machine__6202__auto__);
(statearr_59427[(1)] = (1));
return statearr_59427;
});
var state_machine__6202__auto____1 = (function (state_59422){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59422);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59428){if((e59428 instanceof Object))
{var ex__6205__auto__ = e59428;var statearr_59429_59446 = state_59422;(statearr_59429_59446[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59422);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59447 = state_59422;
state_59422 = G__59447;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59422){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,inst_59372,inst_59373,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_59430 = f__6217__auto__.call(null);(statearr_59430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_59430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,inst_59372,inst_59373,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__59360,inst_59362,inst_59363,inst_59364,inst_59365,inst_59366,inst_59367,inst_59368,inst_59369,inst_59370,inst_59371,inst_59372,inst_59373,state_val_59381,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
})();var inst_59375 = inst_59367.delegate("div[modelFrame]","click",inst_59374);var inst_59376 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_59377 = [inst_59366,name];var inst_59378 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59376,inst_59377);var state_59380__$1 = (function (){var statearr_59431 = state_59380;(statearr_59431[(7)] = inst_59375);
(statearr_59431[(8)] = inst_59373);
(statearr_59431[(9)] = inst_59371);
return statearr_59431;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59380__$1,inst_59378);
} else
{if((state_val_59381 === (1)))
{var state_59380__$1 = state_59380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59380__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59435 = [null,null,null,null,null,null,null,null,null,null];(statearr_59435[(0)] = state_machine__6202__auto__);
(statearr_59435[(1)] = (1));
return statearr_59435;
});
var state_machine__6202__auto____1 = (function (state_59380){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59380);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59436){if((e59436 instanceof Object))
{var ex__6205__auto__ = e59436;var statearr_59437_59448 = state_59380;(statearr_59437_59448[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59449 = state_59380;
state_59380 = G__59449;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59380){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_59438 = f__6217__auto__.call(null);(statearr_59438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_59438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,map__59359,map__59359__$1,ctx,tmpl_item))
);
return c__6216__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__59554){var map__59555 = p__59554;var map__59555__$1 = ((cljs.core.seq_QMARK_.call(null,map__59555))?cljs.core.apply.call(null,cljs.core.hash_map,map__59555):map__59555);var view = map__59555__$1;var elem = cljs.core.get.call(null,map__59555__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_59658 = elem.find("#mc_historyContainer");var btn_share_59659 = elem.find("#btn_share");btn_share_59659.off("click");
mc_modelContainer_59658.undelegate("img","click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__59556){var map__59557 = p__59556;var map__59557__$1 = ((cljs.core.seq_QMARK_.call(null,map__59557))?cljs.core.apply.call(null,cljs.core.hash_map,map__59557):map__59557);var view = map__59557__$1;var elem = cljs.core.get.call(null,map__59557__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_59660 = elem.find("#mc_3dmask");var c__6216__auto___59661 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___59661,mc_3dmask_59660,map__59557,map__59557__$1,view,elem){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___59661,mc_3dmask_59660,map__59557,map__59557__$1,view,elem){
return (function (state_59563){var state_val_59564 = (state_59563[(1)]);if((state_val_59564 === (2)))
{var inst_59560 = (state_59563[(2)]);var inst_59561 = mc_3dmask_59660.fadeOut((400));var state_59563__$1 = (function (){var statearr_59565 = state_59563;(statearr_59565[(7)] = inst_59560);
return statearr_59565;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59563__$1,inst_59561);
} else
{if((state_val_59564 === (1)))
{var inst_59558 = cljs.core.async.timeout.call(null,(5000));var state_59563__$1 = state_59563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59563__$1,(2),inst_59558);
} else
{return null;
}
}
});})(c__6216__auto___59661,mc_3dmask_59660,map__59557,map__59557__$1,view,elem))
;return ((function (switch__6201__auto__,c__6216__auto___59661,mc_3dmask_59660,map__59557,map__59557__$1,view,elem){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59569 = [null,null,null,null,null,null,null,null];(statearr_59569[(0)] = state_machine__6202__auto__);
(statearr_59569[(1)] = (1));
return statearr_59569;
});
var state_machine__6202__auto____1 = (function (state_59563){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59563);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59570){if((e59570 instanceof Object))
{var ex__6205__auto__ = e59570;var statearr_59571_59662 = state_59563;(statearr_59571_59662[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59663 = state_59563;
state_59563 = G__59663;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59563){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___59661,mc_3dmask_59660,map__59557,map__59557__$1,view,elem))
})();var state__6218__auto__ = (function (){var statearr_59572 = f__6217__auto__.call(null);(statearr_59572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___59661);
return statearr_59572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___59661,mc_3dmask_59660,map__59557,map__59557__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__59573,key,modelChan){var map__59574 = p__59573;var map__59574__$1 = ((cljs.core.seq_QMARK_.call(null,map__59574))?cljs.core.apply.call(null,cljs.core.hash_map,map__59574):map__59574);var ctx = map__59574__$1;var tmpl_item = cljs.core.get.call(null,map__59574__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (state_59595){var state_val_59596 = (state_59595[(1)]);if((state_val_59596 === (2)))
{var inst_59577 = (state_59595[(2)]);var inst_59578 = cljs.core.nth.call(null,inst_59577,(0),null);var inst_59579 = cljs.core.nth.call(null,inst_59577,(1),null);var inst_59580 = $("#tmpl_streetsnap");var inst_59581 = inst_59580.tmpl(inst_59579,tmpl_item);var inst_59582 = inst_59581.find("#mc_historyContainer");var inst_59583 = inst_59581.find("#mc_sideContainer");var inst_59584 = inst_59581.find("#btn_share");var inst_59585 = (function (){var btn_share = inst_59584;var mc_sideContainer = inst_59583;var mc_historyContainer = inst_59582;var elem = inst_59581;var tmpl = inst_59580;var model = inst_59579;var err = inst_59578;var vec__59575 = inst_59577;return ((function (btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (){var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (state_59605){var state_val_59606 = (state_59605[(1)]);if((state_val_59606 === (2)))
{var inst_59603 = (state_59605[(2)]);var state_59605__$1 = state_59605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59605__$1,inst_59603);
} else
{if((state_val_59606 === (1)))
{var inst_59597 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_59598 = [model];var inst_59599 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59597,inst_59598);var inst_59600 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_59599];var inst_59601 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59600,null));var state_59605__$1 = state_59605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59605__$1,(2),tool.react.OnReact,inst_59601);
} else
{return null;
}
}
});})(c__6216__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59610 = [null,null,null,null,null,null,null];(statearr_59610[(0)] = state_machine__6202__auto__);
(statearr_59610[(1)] = (1));
return statearr_59610;
});
var state_machine__6202__auto____1 = (function (state_59605){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59605);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59611){if((e59611 instanceof Object))
{var ex__6205__auto__ = e59611;var statearr_59612_59664 = state_59605;(statearr_59612_59664[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59605);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59665 = state_59605;
state_59605 = G__59665;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59605){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_59613 = f__6217__auto__.call(null);(statearr_59613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_59613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
})();var inst_59586 = inst_59584.click(inst_59585);var inst_59587 = (function (){var btn_share = inst_59584;var mc_sideContainer = inst_59583;var mc_historyContainer = inst_59582;var elem = inst_59581;var tmpl = inst_59580;var model = inst_59579;var err = inst_59578;var vec__59575 = inst_59577;return ((function (btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (state_59623){var state_val_59624 = (state_59623[(1)]);if((state_val_59624 === (2)))
{var inst_59621 = (state_59623[(2)]);var state_59623__$1 = state_59623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59623__$1,inst_59621);
} else
{if((state_val_59624 === (1)))
{var inst_59614 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_59615 = that.id;var inst_59616 = [inst_59615];var inst_59617 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59614,inst_59616);var inst_59618 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_59617];var inst_59619 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59618,null));var state_59623__$1 = state_59623;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59623__$1,(2),tool.react.OnReact,inst_59619);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59628 = [null,null,null,null,null,null,null];(statearr_59628[(0)] = state_machine__6202__auto__);
(statearr_59628[(1)] = (1));
return statearr_59628;
});
var state_machine__6202__auto____1 = (function (state_59623){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59623);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59629){if((e59629 instanceof Object))
{var ex__6205__auto__ = e59629;var statearr_59630_59666 = state_59623;(statearr_59630_59666[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59623);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59667 = state_59623;
state_59623 = G__59667;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59623){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_59631 = f__6217__auto__.call(null);(statearr_59631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_59631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
})();var inst_59588 = inst_59583.delegate("img","click",inst_59587);var inst_59589 = (function (){var btn_share = inst_59584;var mc_sideContainer = inst_59583;var mc_historyContainer = inst_59582;var elem = inst_59581;var tmpl = inst_59580;var model = inst_59579;var err = inst_59578;var vec__59575 = inst_59577;return ((function (btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,inst_59587,inst_59588,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,inst_59587,inst_59588,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,inst_59587,inst_59588,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function (state_59641){var state_val_59642 = (state_59641[(1)]);if((state_val_59642 === (2)))
{var inst_59639 = (state_59641[(2)]);var state_59641__$1 = state_59641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59641__$1,inst_59639);
} else
{if((state_val_59642 === (1)))
{var inst_59632 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_59633 = that.id;var inst_59634 = [inst_59633];var inst_59635 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59632,inst_59634);var inst_59636 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_59635];var inst_59637 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59636,null));var state_59641__$1 = state_59641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59641__$1,(2),tool.react.OnReact,inst_59637);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,inst_59587,inst_59588,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,inst_59587,inst_59588,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59646 = [null,null,null,null,null,null,null];(statearr_59646[(0)] = state_machine__6202__auto__);
(statearr_59646[(1)] = (1));
return statearr_59646;
});
var state_machine__6202__auto____1 = (function (state_59641){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59641);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59647){if((e59647 instanceof Object))
{var ex__6205__auto__ = e59647;var statearr_59648_59668 = state_59641;(statearr_59648_59668[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59669 = state_59641;
state_59641 = G__59669;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59641){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,inst_59587,inst_59588,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_59649 = f__6217__auto__.call(null);(statearr_59649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_59649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,inst_59587,inst_59588,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__59575,inst_59577,inst_59578,inst_59579,inst_59580,inst_59581,inst_59582,inst_59583,inst_59584,inst_59585,inst_59586,inst_59587,inst_59588,state_val_59596,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
})();var inst_59590 = inst_59582.delegate("img","click",inst_59589);var inst_59591 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_59592 = [inst_59581,name];var inst_59593 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59591,inst_59592);var state_59595__$1 = (function (){var statearr_59650 = state_59595;(statearr_59650[(7)] = inst_59586);
(statearr_59650[(8)] = inst_59590);
(statearr_59650[(9)] = inst_59588);
return statearr_59650;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59595__$1,inst_59593);
} else
{if((state_val_59596 === (1)))
{var state_59595__$1 = state_59595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59595__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59654 = [null,null,null,null,null,null,null,null,null,null];(statearr_59654[(0)] = state_machine__6202__auto__);
(statearr_59654[(1)] = (1));
return statearr_59654;
});
var state_machine__6202__auto____1 = (function (state_59595){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59595);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59655){if((e59655 instanceof Object))
{var ex__6205__auto__ = e59655;var statearr_59656_59670 = state_59595;(statearr_59656_59670[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59595);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59655;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59671 = state_59595;
state_59595 = G__59671;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59595){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_59657 = f__6217__auto__.call(null);(statearr_59657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_59657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,map__59574,map__59574__$1,ctx,tmpl_item))
);
return c__6216__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__59672){var map__59673 = p__59672;var map__59673__$1 = ((cljs.core.seq_QMARK_.call(null,map__59673))?cljs.core.apply.call(null,cljs.core.hash_map,map__59673):map__59673);var view = map__59673__$1;var elem = cljs.core.get.call(null,map__59673__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_59689 = elem.find("#mc_3dmask");var c__6216__auto___59690 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___59690,mc_3dmask_59689,map__59673,map__59673__$1,view,elem){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___59690,mc_3dmask_59689,map__59673,map__59673__$1,view,elem){
return (function (state_59679){var state_val_59680 = (state_59679[(1)]);if((state_val_59680 === (2)))
{var inst_59676 = (state_59679[(2)]);var inst_59677 = mc_3dmask_59689.fadeOut((400));var state_59679__$1 = (function (){var statearr_59681 = state_59679;(statearr_59681[(7)] = inst_59676);
return statearr_59681;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59679__$1,inst_59677);
} else
{if((state_val_59680 === (1)))
{var inst_59674 = cljs.core.async.timeout.call(null,(5000));var state_59679__$1 = state_59679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59679__$1,(2),inst_59674);
} else
{return null;
}
}
});})(c__6216__auto___59690,mc_3dmask_59689,map__59673,map__59673__$1,view,elem))
;return ((function (switch__6201__auto__,c__6216__auto___59690,mc_3dmask_59689,map__59673,map__59673__$1,view,elem){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59685 = [null,null,null,null,null,null,null,null];(statearr_59685[(0)] = state_machine__6202__auto__);
(statearr_59685[(1)] = (1));
return statearr_59685;
});
var state_machine__6202__auto____1 = (function (state_59679){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59679);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59686){if((e59686 instanceof Object))
{var ex__6205__auto__ = e59686;var statearr_59687_59691 = state_59679;(statearr_59687_59691[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59679);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59686;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59692 = state_59679;
state_59679 = G__59692;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59679){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___59690,mc_3dmask_59689,map__59673,map__59673__$1,view,elem))
})();var state__6218__auto__ = (function (){var statearr_59688 = f__6217__auto__.call(null);(statearr_59688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___59690);
return statearr_59688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___59690,mc_3dmask_59689,map__59673,map__59673__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__59693,key,modelChan){var map__59694 = p__59693;var map__59694__$1 = ((cljs.core.seq_QMARK_.call(null,map__59694))?cljs.core.apply.call(null,cljs.core.hash_map,map__59694):map__59694);var ctx = map__59694__$1;var tmpl_item = cljs.core.get.call(null,map__59694__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,map__59694,map__59694__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,map__59694,map__59694__$1,ctx,tmpl_item){
return (function (state_59706){var state_val_59707 = (state_59706[(1)]);if((state_val_59707 === (2)))
{var inst_59697 = (state_59706[(2)]);var inst_59698 = cljs.core.nth.call(null,inst_59697,(0),null);var inst_59699 = cljs.core.nth.call(null,inst_59697,(1),null);var inst_59700 = $("#tmpl_home");var inst_59701 = inst_59700.tmpl(inst_59699,tmpl_item);var inst_59702 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_59703 = [inst_59701,key];var inst_59704 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59702,inst_59703);var state_59706__$1 = (function (){var statearr_59708 = state_59706;(statearr_59708[(7)] = inst_59698);
return statearr_59708;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59706__$1,inst_59704);
} else
{if((state_val_59707 === (1)))
{var state_59706__$1 = state_59706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59706__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__,map__59694,map__59694__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto__,map__59694,map__59694__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59712 = [null,null,null,null,null,null,null,null];(statearr_59712[(0)] = state_machine__6202__auto__);
(statearr_59712[(1)] = (1));
return statearr_59712;
});
var state_machine__6202__auto____1 = (function (state_59706){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59706);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59713){if((e59713 instanceof Object))
{var ex__6205__auto__ = e59713;var statearr_59714_59716 = state_59706;(statearr_59714_59716[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59706);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59717 = state_59706;
state_59706 = G__59717;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59706){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,map__59694,map__59694__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_59715 = f__6217__auto__.call(null);(statearr_59715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_59715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,map__59694,map__59694__$1,ctx,tmpl_item))
);
return c__6216__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
