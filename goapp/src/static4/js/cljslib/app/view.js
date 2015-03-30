// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24277,key,view){var map__24278 = p__24277;var map__24278__$1 = ((cljs.core.seq_QMARK_.call(null,map__24278))?cljs.core.apply.call(null,cljs.core.hash_map,map__24278):map__24278);var ctx = map__24278__$1;var container = cljs.core.get.call(null,map__24278__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__24279 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__24279.appendTo(container);
G__24279.fadeIn((400));
return G__24279;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24280,key,view){var map__24281 = p__24280;var map__24281__$1 = ((cljs.core.seq_QMARK_.call(null,map__24281))?cljs.core.apply.call(null,cljs.core.hash_map,map__24281):map__24281);var ctx = map__24281__$1;var container = cljs.core.get.call(null,map__24281__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__24282 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__24282.remove();
return G__24282;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_24441 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_24442 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_24443 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_24443.off("click");
btn_search_24442.off("click");
mc_modelContainer_24441.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_24382){var state_val_24383 = (state_24382[(1)]);if((state_val_24383 === (2)))
{var inst_24364 = (state_24382[(2)]);var inst_24365 = cljs.core.nth.call(null,inst_24364,(0),null);var inst_24366 = cljs.core.nth.call(null,inst_24364,(1),null);var inst_24367 = $("#tmpl_streetsnap_list");var inst_24368 = inst_24367.tmpl(inst_24366,null);var inst_24369 = inst_24368.find("#mc_modelContainer");var inst_24370 = inst_24368.find("#btn_search");var inst_24371 = inst_24368.find("#btn_return");var inst_24372 = (function (){var btn_return = inst_24371;var btn_search = inst_24370;var mc_modelContainer = inst_24369;var elem = inst_24368;var tmpl = inst_24367;var model = inst_24366;var err = inst_24365;var vec__24362 = inst_24364;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,state_val_24383,c__6216__auto__){
return (function (){var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,state_val_24383,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,state_val_24383,c__6216__auto__){
return (function (state_24389){var state_val_24390 = (state_24389[(1)]);if((state_val_24390 === (2)))
{var inst_24387 = (state_24389[(2)]);var state_24389__$1 = state_24389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24389__$1,inst_24387);
} else
{if((state_val_24390 === (1)))
{var inst_24384 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_24385 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24384,null));var state_24389__$1 = state_24389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24389__$1,(2),tool.react.OnReact,inst_24385);
} else
{return null;
}
}
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,state_val_24383,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,state_val_24383,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_24394 = [null,null,null,null,null,null,null];(statearr_24394[(0)] = state_machine__6202__auto__);
(statearr_24394[(1)] = (1));
return statearr_24394;
});
var state_machine__6202__auto____1 = (function (state_24389){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_24389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e24395){if((e24395 instanceof Object))
{var ex__6205__auto__ = e24395;var statearr_24396_24444 = state_24389;(statearr_24396_24444[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24445 = state_24389;
state_24389 = G__24445;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_24389){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_24389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,state_val_24383,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_24397 = f__6217__auto__.call(null);(statearr_24397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_24397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,state_val_24383,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,state_val_24383,c__6216__auto__))
})();var inst_24373 = inst_24371.click(inst_24372);var inst_24374 = (function (){var btn_return = inst_24371;var btn_search = inst_24370;var mc_modelContainer = inst_24369;var elem = inst_24368;var tmpl = inst_24367;var model = inst_24366;var err = inst_24365;var vec__24362 = inst_24364;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,state_val_24383,c__6216__auto__){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,state_val_24383,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,state_val_24383,c__6216__auto__){
return (function (state_24406){var state_val_24407 = (state_24406[(1)]);if((state_val_24407 === (2)))
{var inst_24404 = (state_24406[(2)]);var state_24406__$1 = state_24406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24406__$1,inst_24404);
} else
{if((state_val_24407 === (1)))
{var inst_24398 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_24399 = [searchKey];var inst_24400 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24398,inst_24399);var inst_24401 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_24400];var inst_24402 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24401,null));var state_24406__$1 = state_24406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24406__$1,(2),tool.react.OnReact,inst_24402);
} else
{return null;
}
}
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,state_val_24383,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,state_val_24383,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_24411 = [null,null,null,null,null,null,null];(statearr_24411[(0)] = state_machine__6202__auto__);
(statearr_24411[(1)] = (1));
return statearr_24411;
});
var state_machine__6202__auto____1 = (function (state_24406){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_24406);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e24412){if((e24412 instanceof Object))
{var ex__6205__auto__ = e24412;var statearr_24413_24446 = state_24406;(statearr_24413_24446[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24406);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24412;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24447 = state_24406;
state_24406 = G__24447;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_24406){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_24406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,state_val_24383,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_24414 = f__6217__auto__.call(null);(statearr_24414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_24414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,state_val_24383,c__6216__auto__))
);
return c__6216__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,state_val_24383,c__6216__auto__))
})();var inst_24375 = inst_24370.click(inst_24374);var inst_24376 = (function (){var btn_return = inst_24371;var btn_search = inst_24370;var mc_modelContainer = inst_24369;var elem = inst_24368;var tmpl = inst_24367;var model = inst_24366;var err = inst_24365;var vec__24362 = inst_24364;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,inst_24374,inst_24375,state_val_24383,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,inst_24374,inst_24375,state_val_24383,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,inst_24374,inst_24375,state_val_24383,c__6216__auto__){
return (function (state_24424){var state_val_24425 = (state_24424[(1)]);if((state_val_24425 === (2)))
{var inst_24422 = (state_24424[(2)]);var state_24424__$1 = state_24424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24424__$1,inst_24422);
} else
{if((state_val_24425 === (1)))
{var inst_24415 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_24416 = that.id;var inst_24417 = [inst_24416];var inst_24418 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24415,inst_24417);var inst_24419 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_24418];var inst_24420 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24419,null));var state_24424__$1 = state_24424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24424__$1,(2),tool.react.OnReact,inst_24420);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,inst_24374,inst_24375,state_val_24383,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,inst_24374,inst_24375,state_val_24383,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_24429 = [null,null,null,null,null,null,null];(statearr_24429[(0)] = state_machine__6202__auto__);
(statearr_24429[(1)] = (1));
return statearr_24429;
});
var state_machine__6202__auto____1 = (function (state_24424){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_24424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e24430){if((e24430 instanceof Object))
{var ex__6205__auto__ = e24430;var statearr_24431_24448 = state_24424;(statearr_24431_24448[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24430;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24449 = state_24424;
state_24424 = G__24449;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_24424){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_24424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,inst_24374,inst_24375,state_val_24383,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_24432 = f__6217__auto__.call(null);(statearr_24432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_24432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,inst_24374,inst_24375,state_val_24383,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24362,inst_24364,inst_24365,inst_24366,inst_24367,inst_24368,inst_24369,inst_24370,inst_24371,inst_24372,inst_24373,inst_24374,inst_24375,state_val_24383,c__6216__auto__))
})();var inst_24377 = inst_24369.delegate("div[modelFrame]","click",inst_24376);var inst_24378 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_24379 = [inst_24368];var inst_24380 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24378,inst_24379);var state_24382__$1 = (function (){var statearr_24433 = state_24382;(statearr_24433[(7)] = inst_24375);
(statearr_24433[(8)] = inst_24377);
(statearr_24433[(9)] = inst_24373);
return statearr_24433;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24382__$1,inst_24380);
} else
{if((state_val_24383 === (1)))
{var state_24382__$1 = state_24382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24382__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_24437 = [null,null,null,null,null,null,null,null,null,null];(statearr_24437[(0)] = state_machine__6202__auto__);
(statearr_24437[(1)] = (1));
return statearr_24437;
});
var state_machine__6202__auto____1 = (function (state_24382){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_24382);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e24438){if((e24438 instanceof Object))
{var ex__6205__auto__ = e24438;var statearr_24439_24450 = state_24382;(statearr_24439_24450[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24382);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24451 = state_24382;
state_24382 = G__24451;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_24382){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_24382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_24440 = f__6217__auto__.call(null);(statearr_24440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_24440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__24517){var map__24518 = p__24517;var map__24518__$1 = ((cljs.core.seq_QMARK_.call(null,map__24518))?cljs.core.apply.call(null,cljs.core.hash_map,map__24518):map__24518);var view = map__24518__$1;var elem = cljs.core.get.call(null,map__24518__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_24582 = elem.find("#mc_historyContainer");mc_modelContainer_24582.undelegate("img","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_24536){var state_val_24537 = (state_24536[(1)]);if((state_val_24537 === (2)))
{var inst_24521 = (state_24536[(2)]);var inst_24522 = cljs.core.nth.call(null,inst_24521,(0),null);var inst_24523 = cljs.core.nth.call(null,inst_24521,(1),null);var inst_24524 = $("#tmpl_streetsnap");var inst_24525 = inst_24524.tmpl(inst_24523,null);var inst_24526 = inst_24525.find("#mc_historyContainer");var inst_24527 = inst_24525.find("#mc_sideContainer");var inst_24528 = (function (){var mc_sideContainer = inst_24527;var mc_historyContainer = inst_24526;var elem = inst_24525;var tmpl = inst_24524;var model = inst_24523;var err = inst_24522;var vec__24519 = inst_24521;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,state_val_24537,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,state_val_24537,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,state_val_24537,c__6216__auto__){
return (function (state_24547){var state_val_24548 = (state_24547[(1)]);if((state_val_24548 === (2)))
{var inst_24545 = (state_24547[(2)]);var state_24547__$1 = state_24547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24547__$1,inst_24545);
} else
{if((state_val_24548 === (1)))
{var inst_24538 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_24539 = that.id;var inst_24540 = [inst_24539];var inst_24541 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24538,inst_24540);var inst_24542 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_24541];var inst_24543 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24542,null));var state_24547__$1 = state_24547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24547__$1,(2),tool.react.OnReact,inst_24543);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,state_val_24537,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,state_val_24537,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_24552 = [null,null,null,null,null,null,null];(statearr_24552[(0)] = state_machine__6202__auto__);
(statearr_24552[(1)] = (1));
return statearr_24552;
});
var state_machine__6202__auto____1 = (function (state_24547){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_24547);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e24553){if((e24553 instanceof Object))
{var ex__6205__auto__ = e24553;var statearr_24554_24583 = state_24547;(statearr_24554_24583[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24547);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24584 = state_24547;
state_24547 = G__24584;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_24547){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_24547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,state_val_24537,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_24555 = f__6217__auto__.call(null);(statearr_24555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_24555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,state_val_24537,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,state_val_24537,c__6216__auto__))
})();var inst_24529 = inst_24527.delegate("img","click",inst_24528);var inst_24530 = (function (){var mc_sideContainer = inst_24527;var mc_historyContainer = inst_24526;var elem = inst_24525;var tmpl = inst_24524;var model = inst_24523;var err = inst_24522;var vec__24519 = inst_24521;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,inst_24528,inst_24529,state_val_24537,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,inst_24528,inst_24529,state_val_24537,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,inst_24528,inst_24529,state_val_24537,c__6216__auto__){
return (function (state_24565){var state_val_24566 = (state_24565[(1)]);if((state_val_24566 === (2)))
{var inst_24563 = (state_24565[(2)]);var state_24565__$1 = state_24565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24565__$1,inst_24563);
} else
{if((state_val_24566 === (1)))
{var inst_24556 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_24557 = that.id;var inst_24558 = [inst_24557];var inst_24559 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24556,inst_24558);var inst_24560 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_24559];var inst_24561 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24560,null));var state_24565__$1 = state_24565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24565__$1,(2),tool.react.OnReact,inst_24561);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,inst_24528,inst_24529,state_val_24537,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,inst_24528,inst_24529,state_val_24537,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_24570 = [null,null,null,null,null,null,null];(statearr_24570[(0)] = state_machine__6202__auto__);
(statearr_24570[(1)] = (1));
return statearr_24570;
});
var state_machine__6202__auto____1 = (function (state_24565){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_24565);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e24571){if((e24571 instanceof Object))
{var ex__6205__auto__ = e24571;var statearr_24572_24585 = state_24565;(statearr_24572_24585[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24565);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24586 = state_24565;
state_24565 = G__24586;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_24565){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_24565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,inst_24528,inst_24529,state_val_24537,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_24573 = f__6217__auto__.call(null);(statearr_24573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_24573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,inst_24528,inst_24529,state_val_24537,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__24519,inst_24521,inst_24522,inst_24523,inst_24524,inst_24525,inst_24526,inst_24527,inst_24528,inst_24529,state_val_24537,c__6216__auto__))
})();var inst_24531 = inst_24526.delegate("img","click",inst_24530);var inst_24532 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_24533 = [inst_24525];var inst_24534 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24532,inst_24533);var state_24536__$1 = (function (){var statearr_24574 = state_24536;(statearr_24574[(7)] = inst_24531);
(statearr_24574[(8)] = inst_24529);
return statearr_24574;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24536__$1,inst_24534);
} else
{if((state_val_24537 === (1)))
{var state_24536__$1 = state_24536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24536__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_24578 = [null,null,null,null,null,null,null,null,null];(statearr_24578[(0)] = state_machine__6202__auto__);
(statearr_24578[(1)] = (1));
return statearr_24578;
});
var state_machine__6202__auto____1 = (function (state_24536){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_24536);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e24579){if((e24579 instanceof Object))
{var ex__6205__auto__ = e24579;var statearr_24580_24587 = state_24536;(statearr_24580_24587[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24536);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24588 = state_24536;
state_24536 = G__24588;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_24536){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_24536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_24581 = f__6217__auto__.call(null);(statearr_24581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_24581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_24597){var state_val_24598 = (state_24597[(1)]);if((state_val_24598 === (2)))
{var inst_24590 = (state_24597[(2)]);var inst_24591 = $("#tmpl_home");var inst_24592 = inst_24591.tmpl(inst_24590,null);var inst_24593 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_24594 = [inst_24592];var inst_24595 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24593,inst_24594);var state_24597__$1 = state_24597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24597__$1,inst_24595);
} else
{if((state_val_24598 === (1)))
{var state_24597__$1 = state_24597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24597__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_24602 = [null,null,null,null,null,null,null];(statearr_24602[(0)] = state_machine__6202__auto__);
(statearr_24602[(1)] = (1));
return statearr_24602;
});
var state_machine__6202__auto____1 = (function (state_24597){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_24597);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e24603){if((e24603 instanceof Object))
{var ex__6205__auto__ = e24603;var statearr_24604_24606 = state_24597;(statearr_24604_24606[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24607 = state_24597;
state_24597 = G__24607;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_24597){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_24597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_24605 = f__6217__auto__.call(null);(statearr_24605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_24605;
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
