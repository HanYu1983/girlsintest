// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn2');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.fn2.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
app.fn2.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
app.fn2.FetchFile = (function FetchFile(path){var G__10336_10361 = $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));(function (p1__10309_SHARP_){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_10340){var state_val_10341 = (state_10340[(1)]);if((state_val_10341 === (1)))
{var inst_10337 = [null,p1__10309_SHARP_];var inst_10338 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10337,null));var state_10340__$1 = state_10340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10340__$1,inst_10338);
} else
{return null;
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10345 = [null,null,null,null,null,null,null];(statearr_10345[(0)] = state_machine__6202__auto__);
(statearr_10345[(1)] = (1));
return statearr_10345;
});
var state_machine__6202__auto____1 = (function (state_10340){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10340);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10346){if((e10346 instanceof Object))
{var ex__6205__auto__ = e10346;var statearr_10347_10362 = state_10340;(statearr_10347_10362[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10363 = state_10340;
state_10340 = G__10363;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10340){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_10348 = f__6217__auto__.call(null);(statearr_10348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}).done();
return (function (p1__10310_SHARP_){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_10352){var state_val_10353 = (state_10352[(1)]);if((state_val_10353 === (1)))
{var inst_10349 = [p1__10310_SHARP_,null];var inst_10350 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10349,null));var state_10352__$1 = state_10352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10352__$1,inst_10350);
} else
{return null;
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10357 = [null,null,null,null,null,null,null];(statearr_10357[(0)] = state_machine__6202__auto__);
(statearr_10357[(1)] = (1));
return statearr_10357;
});
var state_machine__6202__auto____1 = (function (state_10352){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10352);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10358){if((e10358 instanceof Object))
{var ex__6205__auto__ = e10358;var statearr_10359_10364 = state_10352;(statearr_10359_10364[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10352);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10365 = state_10352;
state_10352 = G__10365;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10352){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_10360 = f__6217__auto__.call(null);(statearr_10360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}).fail();
});
app.fn2.FetchModelKeyList = (function FetchModelKeyList(path){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_10424){var state_val_10425 = (state_10424[(1)]);if((state_val_10425 === (5)))
{var inst_10422 = (state_10424[(2)]);var state_10424__$1 = state_10424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10424__$1,inst_10422);
} else
{if((state_val_10425 === (4)))
{var inst_10406 = (state_10424[(7)]);var inst_10405 = (state_10424[(8)]);var inst_10407 = (state_10424[(9)]);var inst_10417 = (function (){var data = inst_10407;var err = inst_10406;var vec__10402 = inst_10405;return ((function (data,err,vec__10402,inst_10406,inst_10405,inst_10407,state_val_10425,c__6216__auto__){
return (function iter__10413(s__10414){return (new cljs.core.LazySeq(null,((function (data,err,vec__10402,inst_10406,inst_10405,inst_10407,state_val_10425,c__6216__auto__){
return (function (){var s__10414__$1 = s__10414;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10414__$1);if(temp__4126__auto__)
{var s__10414__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10414__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__10414__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__10416 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__10415 = (0);while(true){
if((i__10415 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__10415);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__10416,modelKey);
{
var G__10438 = (i__10415 + (1));
i__10415 = G__10438;
continue;
}
} else
{{
var G__10439 = (i__10415 + (1));
i__10415 = G__10439;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10416),iter__10413.call(null,cljs.core.chunk_rest.call(null,s__10414__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10416),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__10414__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__10413.call(null,cljs.core.rest.call(null,s__10414__$2)));
} else
{{
var G__10440 = cljs.core.rest.call(null,s__10414__$2);
s__10414__$1 = G__10440;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(data,err,vec__10402,inst_10406,inst_10405,inst_10407,state_val_10425,c__6216__auto__))
,null,null));
});
;})(data,err,vec__10402,inst_10406,inst_10405,inst_10407,state_val_10425,c__6216__auto__))
})();var inst_10418 = inst_10417.call(null,inst_10407);var inst_10419 = [null,inst_10418];var inst_10420 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10419,null));var state_10424__$1 = state_10424;var statearr_10426_10441 = state_10424__$1;(statearr_10426_10441[(2)] = inst_10420);
(statearr_10426_10441[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10425 === (3)))
{var inst_10406 = (state_10424[(7)]);var inst_10410 = [inst_10406,null];var inst_10411 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10410,null));var state_10424__$1 = state_10424;var statearr_10427_10442 = state_10424__$1;(statearr_10427_10442[(2)] = inst_10411);
(statearr_10427_10442[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10425 === (2)))
{var inst_10406 = (state_10424[(7)]);var inst_10405 = (state_10424[(8)]);var inst_10405__$1 = (state_10424[(2)]);var inst_10406__$1 = cljs.core.nth.call(null,inst_10405__$1,(0),null);var inst_10407 = cljs.core.nth.call(null,inst_10405__$1,(1),null);var inst_10408 = cljs.core.some_QMARK_.call(null,inst_10406__$1);var state_10424__$1 = (function (){var statearr_10428 = state_10424;(statearr_10428[(7)] = inst_10406__$1);
(statearr_10428[(8)] = inst_10405__$1);
(statearr_10428[(9)] = inst_10407);
return statearr_10428;
})();if(inst_10408)
{var statearr_10429_10443 = state_10424__$1;(statearr_10429_10443[(1)] = (3));
} else
{var statearr_10430_10444 = state_10424__$1;(statearr_10430_10444[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10425 === (1)))
{var inst_10403 = app.fn2.FetchFile.call(null,path);var state_10424__$1 = state_10424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10424__$1,(2),inst_10403);
} else
{return null;
}
}
}
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10434 = [null,null,null,null,null,null,null,null,null,null];(statearr_10434[(0)] = state_machine__6202__auto__);
(statearr_10434[(1)] = (1));
return statearr_10434;
});
var state_machine__6202__auto____1 = (function (state_10424){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10435){if((e10435 instanceof Object))
{var ex__6205__auto__ = e10435;var statearr_10436_10445 = state_10424;(statearr_10436_10445[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10446 = state_10424;
state_10424 = G__10446;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10424){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_10437 = f__6217__auto__.call(null);(statearr_10437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
});
/**
* @param {...*} var_args
*/
app.fn2.async_when = (function() { 
var async_when__delegate = function (chans){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_10493){var state_val_10494 = (state_10493[(1)]);if((state_val_10494 === (5)))
{var inst_10491 = (state_10493[(2)]);var state_10493__$1 = state_10493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10493__$1,inst_10491);
} else
{if((state_val_10494 === (4)))
{var inst_10483 = (state_10493[(7)]);var inst_10489 = cljs.core.map.call(null,cljs.core.second,inst_10483);var state_10493__$1 = state_10493;var statearr_10495_10509 = state_10493__$1;(statearr_10495_10509[(2)] = inst_10489);
(statearr_10495_10509[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10494 === (3)))
{var inst_10479 = (state_10493[(8)]);var inst_10483 = (state_10493[(7)]);var inst_10486 = cljs.core.filter.call(null,inst_10479,inst_10483);var inst_10487 = cljs.core.first.call(null,inst_10486);var state_10493__$1 = state_10493;var statearr_10496_10510 = state_10493__$1;(statearr_10496_10510[(2)] = inst_10487);
(statearr_10496_10510[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10494 === (2)))
{var inst_10479 = (state_10493[(8)]);var inst_10483 = (state_10493[(7)]);var inst_10483__$1 = (state_10493[(2)]);var inst_10484 = cljs.core.some.call(null,inst_10479,inst_10483__$1);var state_10493__$1 = (function (){var statearr_10497 = state_10493;(statearr_10497[(7)] = inst_10483__$1);
return statearr_10497;
})();if(cljs.core.truth_(inst_10484))
{var statearr_10498_10511 = state_10493__$1;(statearr_10498_10511[(1)] = (3));
} else
{var statearr_10499_10512 = state_10493__$1;(statearr_10499_10512[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10494 === (1)))
{var inst_10479 = (state_10493[(8)]);var inst_10479__$1 = (function (){return ((function (inst_10479,state_val_10494,c__6216__auto__){
return (function (p__10478){var vec__10500 = p__10478;var err = cljs.core.nth.call(null,vec__10500,(0),null);var _ = cljs.core.nth.call(null,vec__10500,(1),null);return cljs.core.some_QMARK_.call(null,err);
});
;})(inst_10479,state_val_10494,c__6216__auto__))
})();var inst_10480 = (function (){var HasError = inst_10479__$1;return ((function (HasError,inst_10479,inst_10479__$1,state_val_10494,c__6216__auto__){
return (function() { 
var G__10513__delegate = function (args){return cljs.core.apply.call(null,cljs.core.list,args);
};
var G__10513 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10513__delegate.call(this,args);};
G__10513.cljs$lang$maxFixedArity = 0;
G__10513.cljs$lang$applyTo = (function (arglist__10514){
var args = cljs.core.seq(arglist__10514);
return G__10513__delegate(args);
});
G__10513.cljs$core$IFn$_invoke$arity$variadic = G__10513__delegate;
return G__10513;
})()
;
;})(HasError,inst_10479,inst_10479__$1,state_val_10494,c__6216__auto__))
})();var inst_10481 = cljs.core.apply.call(null,cljs.core.async.when,inst_10480,chans);var state_10493__$1 = (function (){var statearr_10501 = state_10493;(statearr_10501[(8)] = inst_10479__$1);
return statearr_10501;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10493__$1,(2),inst_10481);
} else
{return null;
}
}
}
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10505 = [null,null,null,null,null,null,null,null,null];(statearr_10505[(0)] = state_machine__6202__auto__);
(statearr_10505[(1)] = (1));
return statearr_10505;
});
var state_machine__6202__auto____1 = (function (state_10493){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10493);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10506){if((e10506 instanceof Object))
{var ex__6205__auto__ = e10506;var statearr_10507_10515 = state_10493;(statearr_10507_10515[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10493);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10516 = state_10493;
state_10493 = G__10516;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10493){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_10508 = f__6217__auto__.call(null);(statearr_10508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
};
var async_when = function (var_args){
var chans = null;if (arguments.length > 0) {
  chans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return async_when__delegate.call(this,chans);};
async_when.cljs$lang$maxFixedArity = 0;
async_when.cljs$lang$applyTo = (function (arglist__10517){
var chans = cljs.core.seq(arglist__10517);
return async_when__delegate(chans);
});
async_when.cljs$core$IFn$_invoke$arity$variadic = async_when__delegate;
return async_when;
})()
;
app.fn2.FetchAllModel = (function FetchAllModel(path,keys){var fetchFileChans = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = (function iter__10553(s__10554){return (new cljs.core.LazySeq(null,(function (){var s__10554__$1 = s__10554;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10554__$1);if(temp__4126__auto__)
{var s__10554__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10554__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__10554__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__10556 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__10555 = (0);while(true){
if((i__10555 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__10555);cljs.core.chunk_append.call(null,b__10556,app.fn2.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__10588 = (i__10555 + (1));
i__10555 = G__10588;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10556),iter__10553.call(null,cljs.core.chunk_rest.call(null,s__10554__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10556),null);
}
} else
{var key = cljs.core.first.call(null,s__10554__$2);return cljs.core.cons.call(null,app.fn2.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__10553.call(null,cljs.core.rest.call(null,s__10554__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4276__auto__.call(null,keys);
})());var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,fetchFileChans){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,fetchFileChans){
return (function (state_10574){var state_val_10575 = (state_10574[(1)]);if((state_val_10575 === (5)))
{var inst_10572 = (state_10574[(2)]);var state_10574__$1 = state_10574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10574__$1,inst_10572);
} else
{if((state_val_10575 === (4)))
{var inst_10562 = (state_10574[(7)]);var inst_10568 = cljs.core.zipmap.call(null,keys,inst_10562);var inst_10569 = [null,inst_10568];var inst_10570 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10569,null));var state_10574__$1 = state_10574;var statearr_10576_10589 = state_10574__$1;(statearr_10576_10589[(2)] = inst_10570);
(statearr_10576_10589[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10575 === (3)))
{var inst_10561 = (state_10574[(8)]);var inst_10565 = [inst_10561,null];var inst_10566 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10565,null));var state_10574__$1 = state_10574;var statearr_10577_10590 = state_10574__$1;(statearr_10577_10590[(2)] = inst_10566);
(statearr_10577_10590[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10575 === (2)))
{var inst_10561 = (state_10574[(8)]);var inst_10560 = (state_10574[(2)]);var inst_10561__$1 = cljs.core.nth.call(null,inst_10560,(0),null);var inst_10562 = cljs.core.nth.call(null,inst_10560,(1),null);var inst_10563 = cljs.core.some_QMARK_.call(null,inst_10561__$1);var state_10574__$1 = (function (){var statearr_10578 = state_10574;(statearr_10578[(7)] = inst_10562);
(statearr_10578[(8)] = inst_10561__$1);
return statearr_10578;
})();if(inst_10563)
{var statearr_10579_10591 = state_10574__$1;(statearr_10579_10591[(1)] = (3));
} else
{var statearr_10580_10592 = state_10574__$1;(statearr_10580_10592[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10575 === (1)))
{var inst_10558 = cljs.core.apply.call(null,app.fn2.async_when,fetchFileChans);var state_10574__$1 = state_10574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10574__$1,(2),inst_10558);
} else
{return null;
}
}
}
}
}
});})(c__6216__auto__,fetchFileChans))
;return ((function (switch__6201__auto__,c__6216__auto__,fetchFileChans){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10584 = [null,null,null,null,null,null,null,null,null];(statearr_10584[(0)] = state_machine__6202__auto__);
(statearr_10584[(1)] = (1));
return statearr_10584;
});
var state_machine__6202__auto____1 = (function (state_10574){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10574);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10585){if((e10585 instanceof Object))
{var ex__6205__auto__ = e10585;var statearr_10586_10593 = state_10574;(statearr_10586_10593[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10585;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10594 = state_10574;
state_10574 = G__10594;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10574){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,fetchFileChans))
})();var state__6218__auto__ = (function (){var statearr_10587 = f__6217__auto__.call(null);(statearr_10587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10587;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,fetchFileChans))
);
return c__6216__auto__;
});
