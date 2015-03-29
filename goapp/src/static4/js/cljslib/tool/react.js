// Compiled by ClojureScript 0.0-2268
goog.provide('tool.react');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
tool.react.model_ch = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("model-ch",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (ctx,key,args){return key;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
tool.react.view_ch = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("view-ch",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (ctx,key,modelChan){return key;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
tool.react.AnimateOpen = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("AnimateOpen",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (ctx,key,view){return key;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
tool.react.AnimateClose = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("AnimateClose",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (ctx,key,view){return key;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ctx,key,view){return null;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ctx,key,view){return null;
}));
tool.react.OpenView = (function OpenView(p__10195,p__10196){var map__10213 = p__10195;var map__10213__$1 = ((cljs.core.seq_QMARK_.call(null,map__10213))?cljs.core.apply.call(null,cljs.core.hash_map,map__10213):map__10213);var ctx = map__10213__$1;var views = cljs.core.get.call(null,map__10213__$1,new cljs.core.Keyword(null,"views","views",1450155487));var map__10214 = p__10196;var map__10214__$1 = ((cljs.core.seq_QMARK_.call(null,map__10214))?cljs.core.apply.call(null,cljs.core.hash_map,map__10214):map__10214);var args = map__10214__$1;var react_curr = cljs.core.get.call(null,map__10214__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var a_view = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var viewpromise = (function (){var G__10215 = (new $.Deferred());G__10215.done(((function (G__10215,a_view,map__10213,map__10213__$1,ctx,views,map__10214,map__10214__$1,args,react_curr){
return (function (view){cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),view);
return tool.react.AnimateOpen.call(null,ctx,react_curr,view);
});})(G__10215,a_view,map__10213,map__10213__$1,ctx,views,map__10214,map__10214__$1,args,react_curr))
);
return G__10215;
})();var ResolvePromise = ((function (a_view,viewpromise,map__10213,map__10213__$1,ctx,views,map__10214,map__10214__$1,args,react_curr){
return (function (chan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,a_view,viewpromise,map__10213,map__10213__$1,ctx,views,map__10214,map__10214__$1,args,react_curr){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,a_view,viewpromise,map__10213,map__10213__$1,ctx,views,map__10214,map__10214__$1,args,react_curr){
return (function (state_10220){var state_val_10221 = (state_10220[(1)]);if((state_val_10221 === (2)))
{var inst_10217 = (state_10220[(2)]);var inst_10218 = viewpromise.resolve(inst_10217);var state_10220__$1 = state_10220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10220__$1,inst_10218);
} else
{if((state_val_10221 === (1)))
{var state_10220__$1 = state_10220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10220__$1,(2),chan);
} else
{return null;
}
}
});})(c__6216__auto__,a_view,viewpromise,map__10213,map__10213__$1,ctx,views,map__10214,map__10214__$1,args,react_curr))
;return ((function (switch__6201__auto__,c__6216__auto__,a_view,viewpromise,map__10213,map__10213__$1,ctx,views,map__10214,map__10214__$1,args,react_curr){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10225 = [null,null,null,null,null,null,null];(statearr_10225[(0)] = state_machine__6202__auto__);
(statearr_10225[(1)] = (1));
return statearr_10225;
});
var state_machine__6202__auto____1 = (function (state_10220){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10220);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10226){if((e10226 instanceof Object))
{var ex__6205__auto__ = e10226;var statearr_10227_10229 = state_10220;(statearr_10227_10229[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10220);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10230 = state_10220;
state_10220 = G__10230;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10220){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,a_view,viewpromise,map__10213,map__10213__$1,ctx,views,map__10214,map__10214__$1,args,react_curr))
})();var state__6218__auto__ = (function (){var statearr_10228 = f__6217__auto__.call(null);(statearr_10228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,a_view,viewpromise,map__10213,map__10213__$1,ctx,views,map__10214,map__10214__$1,args,react_curr))
);
return c__6216__auto__;
});})(a_view,viewpromise,map__10213,map__10213__$1,ctx,views,map__10214,map__10214__$1,args,react_curr))
;cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"promise","promise",1767129287),viewpromise);
ResolvePromise.call(null,tool.react.view_ch.call(null,ctx,react_curr,tool.react.model_ch.call(null,ctx,react_curr,args)));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),react_curr], null),a_view);
});
tool.react.CloseView = (function CloseView(p__10231,p__10232){var map__10236 = p__10231;var map__10236__$1 = ((cljs.core.seq_QMARK_.call(null,map__10236))?cljs.core.apply.call(null,cljs.core.hash_map,map__10236):map__10236);var ctx = map__10236__$1;var views = cljs.core.get.call(null,map__10236__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__10236__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__10237 = p__10232;var map__10237__$1 = ((cljs.core.seq_QMARK_.call(null,map__10237))?cljs.core.apply.call(null,cljs.core.hash_map,map__10237):map__10237);var args = map__10237__$1;var react_curr = cljs.core.get.call(null,map__10237__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));if(cljs.core.some_QMARK_.call(null,react_curr.call(null,views)))
{var map__10238 = cljs.core.deref.call(null,react_curr.call(null,views));var map__10238__$1 = ((cljs.core.seq_QMARK_.call(null,map__10238))?cljs.core.apply.call(null,cljs.core.hash_map,map__10238):map__10238);var promise = cljs.core.get.call(null,map__10238__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));var view = cljs.core.get.call(null,map__10238__$1,new cljs.core.Keyword(null,"view","view",1247994814));if(cljs.core.some_QMARK_.call(null,view))
{tool.react.AnimateClose.call(null,ctx,react_curr,view);
} else
{promise.reject("CloseView");
}
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,react_curr);
} else
{return ctx;
}
});
tool.react.ChangeView = (function ChangeView(p__10239,p__10240){var map__10243 = p__10239;var map__10243__$1 = ((cljs.core.seq_QMARK_.call(null,map__10243))?cljs.core.apply.call(null,cljs.core.hash_map,map__10243):map__10243);var ctx = map__10243__$1;var views = cljs.core.get.call(null,map__10243__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__10243__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__10244 = p__10240;var map__10244__$1 = ((cljs.core.seq_QMARK_.call(null,map__10244))?cljs.core.apply.call(null,cljs.core.hash_map,map__10244):map__10244);var args = map__10244__$1;var react_curr = cljs.core.get.call(null,map__10244__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var closeAll = ((function (map__10243,map__10243__$1,ctx,views,container,map__10244,map__10244__$1,args,react_curr){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__10243,map__10243__$1,ctx,views,container,map__10244,map__10244__$1,args,react_curr){
return (function (ctx__$2,key){return tool.react.CloseView.call(null,ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-curr","react-curr",984299478),key], null));
});})(map__10243,map__10243__$1,ctx,views,container,map__10244,map__10244__$1,args,react_curr))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__10243,map__10243__$1,ctx,views,container,map__10244,map__10244__$1,args,react_curr))
;var thenOpen = ((function (closeAll,map__10243,map__10243__$1,ctx,views,container,map__10244,map__10244__$1,args,react_curr){
return (function (ctx__$1){return tool.react.OpenView.call(null,ctx__$1,args);
});})(closeAll,map__10243,map__10243__$1,ctx,views,container,map__10244,map__10244__$1,args,react_curr))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.react.React = (function React(route,ctx,p__10245){var vec__10248 = p__10245;var key = cljs.core.nth.call(null,vec__10248,(0),null);var whichRoute = cljs.core.nth.call(null,vec__10248,(1),null);var args = cljs.core.nth.call(null,vec__10248,(2),null);var vec__10249 = whichRoute.call(null,key.call(null,route));var curr = cljs.core.nth.call(null,vec__10249,(0),null);var Operation = cljs.core.nth.call(null,vec__10249,(1),null);return Operation.call(null,ctx,cljs.core.merge.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-prev","react-prev",-1532545102),key,new cljs.core.Keyword(null,"react-curr","react-curr",984299478),curr], null)));
});
tool.react.OnReact = cljs.core.async.chan.call(null);
