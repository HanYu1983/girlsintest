// Compiled by ClojureScript 0.0-2268
goog.provide('core2.fn');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
core2.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
core2.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
core2.fn.FetchFile = (function FetchFile(path){var err = cljs.core.async.chan.call(null);var result = cljs.core.async.chan.call(null);var G__18973_18998 = $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));G__18973_18998.done(((function (G__18973_18998,err,result){
return (function (p1__18946_SHARP_){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,G__18973_18998,err,result){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,G__18973_18998,err,result){
return (function (state_18977){var state_val_18978 = (state_18977[(1)]);if((state_val_18978 === (2)))
{var inst_18975 = (state_18977[(2)]);var state_18977__$1 = state_18977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18977__$1,inst_18975);
} else
{if((state_val_18978 === (1)))
{var state_18977__$1 = state_18977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18977__$1,(2),result,p1__18946_SHARP_);
} else
{return null;
}
}
});})(c__6344__auto__,G__18973_18998,err,result))
;return ((function (switch__6329__auto__,c__6344__auto__,G__18973_18998,err,result){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_18982 = [null,null,null,null,null,null,null];(statearr_18982[(0)] = state_machine__6330__auto__);
(statearr_18982[(1)] = (1));
return statearr_18982;
});
var state_machine__6330__auto____1 = (function (state_18977){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_18977);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e18983){if((e18983 instanceof Object))
{var ex__6333__auto__ = e18983;var statearr_18984_18999 = state_18977;(statearr_18984_18999[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18977);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19000 = state_18977;
state_18977 = G__19000;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_18977){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_18977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,G__18973_18998,err,result))
})();var state__6346__auto__ = (function (){var statearr_18985 = f__6345__auto__.call(null);(statearr_18985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_18985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,G__18973_18998,err,result))
);
return c__6344__auto__;
});})(G__18973_18998,err,result))
);
G__18973_18998.fail(((function (G__18973_18998,err,result){
return (function (p1__18947_SHARP_){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,G__18973_18998,err,result){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,G__18973_18998,err,result){
return (function (state_18989){var state_val_18990 = (state_18989[(1)]);if((state_val_18990 === (2)))
{var inst_18987 = (state_18989[(2)]);var state_18989__$1 = state_18989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18989__$1,inst_18987);
} else
{if((state_val_18990 === (1)))
{var state_18989__$1 = state_18989;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18989__$1,(2),err,p1__18947_SHARP_);
} else
{return null;
}
}
});})(c__6344__auto__,G__18973_18998,err,result))
;return ((function (switch__6329__auto__,c__6344__auto__,G__18973_18998,err,result){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_18994 = [null,null,null,null,null,null,null];(statearr_18994[(0)] = state_machine__6330__auto__);
(statearr_18994[(1)] = (1));
return statearr_18994;
});
var state_machine__6330__auto____1 = (function (state_18989){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_18989);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e18995){if((e18995 instanceof Object))
{var ex__6333__auto__ = e18995;var statearr_18996_19001 = state_18989;(statearr_18996_19001[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18989);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19002 = state_18989;
state_18989 = G__19002;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_18989){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_18989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,G__18973_18998,err,result))
})();var state__6346__auto__ = (function (){var statearr_18997 = f__6345__auto__.call(null);(statearr_18997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_18997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,G__18973_18998,err,result))
);
return c__6344__auto__;
});})(G__18973_18998,err,result))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,result], null);
});
core2.fn.FetchModelKeyList = (function FetchModelKeyList(path){var vec__19024 = core2.fn.FetchFile.call(null,path);var err = cljs.core.nth.call(null,vec__19024,(0),null);var result = cljs.core.nth.call(null,vec__19024,(1),null);var c__6344__auto___19045 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___19045,vec__19024,err,result){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___19045,vec__19024,err,result){
return (function (state_19036){var state_val_19037 = (state_19036[(1)]);if((state_val_19037 === (3)))
{var inst_19034 = (state_19036[(2)]);var state_19036__$1 = state_19036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19036__$1,inst_19034);
} else
{if((state_val_19037 === (2)))
{var inst_19026 = (state_19036[(2)]);var inst_19031 = (function (){var data = inst_19026;return ((function (data,inst_19026,state_val_19037,c__6344__auto___19045,vec__19024,err,result){
return (function iter__19027(s__19028){return (new cljs.core.LazySeq(null,((function (data,inst_19026,state_val_19037,c__6344__auto___19045,vec__19024,err,result){
return (function (){var s__19028__$1 = s__19028;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19028__$1);if(temp__4126__auto__)
{var s__19028__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19028__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__19028__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__19030 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__19029 = (0);while(true){
if((i__19029 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__19029);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__19030,modelKey);
{
var G__19046 = (i__19029 + (1));
i__19029 = G__19046;
continue;
}
} else
{{
var G__19047 = (i__19029 + (1));
i__19029 = G__19047;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19030),iter__19027.call(null,cljs.core.chunk_rest.call(null,s__19028__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19030),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__19028__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__19027.call(null,cljs.core.rest.call(null,s__19028__$2)));
} else
{{
var G__19048 = cljs.core.rest.call(null,s__19028__$2);
s__19028__$1 = G__19048;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(data,inst_19026,state_val_19037,c__6344__auto___19045,vec__19024,err,result))
,null,null));
});
;})(data,inst_19026,state_val_19037,c__6344__auto___19045,vec__19024,err,result))
})();var inst_19032 = inst_19031.call(null,inst_19026);var state_19036__$1 = state_19036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19036__$1,(3),result,inst_19032);
} else
{if((state_val_19037 === (1)))
{var state_19036__$1 = state_19036;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19036__$1,(2),result);
} else
{return null;
}
}
}
});})(c__6344__auto___19045,vec__19024,err,result))
;return ((function (switch__6329__auto__,c__6344__auto___19045,vec__19024,err,result){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_19041 = [null,null,null,null,null,null,null];(statearr_19041[(0)] = state_machine__6330__auto__);
(statearr_19041[(1)] = (1));
return statearr_19041;
});
var state_machine__6330__auto____1 = (function (state_19036){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_19036);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e19042){if((e19042 instanceof Object))
{var ex__6333__auto__ = e19042;var statearr_19043_19049 = state_19036;(statearr_19043_19049[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19036);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19050 = state_19036;
state_19036 = G__19050;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_19036){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_19036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___19045,vec__19024,err,result))
})();var state__6346__auto__ = (function (){var statearr_19044 = f__6345__auto__.call(null);(statearr_19044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___19045);
return statearr_19044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___19045,vec__19024,err,result))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,result], null);
});
