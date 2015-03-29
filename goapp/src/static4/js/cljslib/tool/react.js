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
tool.react.OpenView = (function OpenView(p__29458,p__29459){var map__29476 = p__29458;var map__29476__$1 = ((cljs.core.seq_QMARK_.call(null,map__29476))?cljs.core.apply.call(null,cljs.core.hash_map,map__29476):map__29476);var ctx = map__29476__$1;var views = cljs.core.get.call(null,map__29476__$1,new cljs.core.Keyword(null,"views","views",1450155487));var map__29477 = p__29459;var map__29477__$1 = ((cljs.core.seq_QMARK_.call(null,map__29477))?cljs.core.apply.call(null,cljs.core.hash_map,map__29477):map__29477);var args = map__29477__$1;var react_curr = cljs.core.get.call(null,map__29477__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var a_view = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var viewpromise = (function (){var G__29478 = (new $.Deferred());G__29478.done(((function (G__29478,a_view,map__29476,map__29476__$1,ctx,views,map__29477,map__29477__$1,args,react_curr){
return (function (view){cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),view);
return tool.react.AnimateOpen.call(null,ctx,react_curr,view);
});})(G__29478,a_view,map__29476,map__29476__$1,ctx,views,map__29477,map__29477__$1,args,react_curr))
);
return G__29478;
})();var ResolvePromise = ((function (a_view,viewpromise,map__29476,map__29476__$1,ctx,views,map__29477,map__29477__$1,args,react_curr){
return (function (chan){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,a_view,viewpromise,map__29476,map__29476__$1,ctx,views,map__29477,map__29477__$1,args,react_curr){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,a_view,viewpromise,map__29476,map__29476__$1,ctx,views,map__29477,map__29477__$1,args,react_curr){
return (function (state_29483){var state_val_29484 = (state_29483[(1)]);if((state_val_29484 === (2)))
{var inst_29480 = (state_29483[(2)]);var inst_29481 = viewpromise.resolve(inst_29480);var state_29483__$1 = state_29483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29483__$1,inst_29481);
} else
{if((state_val_29484 === (1)))
{var state_29483__$1 = state_29483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29483__$1,(2),chan);
} else
{return null;
}
}
});})(c__6344__auto__,a_view,viewpromise,map__29476,map__29476__$1,ctx,views,map__29477,map__29477__$1,args,react_curr))
;return ((function (switch__6329__auto__,c__6344__auto__,a_view,viewpromise,map__29476,map__29476__$1,ctx,views,map__29477,map__29477__$1,args,react_curr){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29488 = [null,null,null,null,null,null,null];(statearr_29488[(0)] = state_machine__6330__auto__);
(statearr_29488[(1)] = (1));
return statearr_29488;
});
var state_machine__6330__auto____1 = (function (state_29483){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29483);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29489){if((e29489 instanceof Object))
{var ex__6333__auto__ = e29489;var statearr_29490_29492 = state_29483;(statearr_29490_29492[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29483);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29493 = state_29483;
state_29483 = G__29493;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29483){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,a_view,viewpromise,map__29476,map__29476__$1,ctx,views,map__29477,map__29477__$1,args,react_curr))
})();var state__6346__auto__ = (function (){var statearr_29491 = f__6345__auto__.call(null);(statearr_29491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_29491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,a_view,viewpromise,map__29476,map__29476__$1,ctx,views,map__29477,map__29477__$1,args,react_curr))
);
return c__6344__auto__;
});})(a_view,viewpromise,map__29476,map__29476__$1,ctx,views,map__29477,map__29477__$1,args,react_curr))
;cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"promise","promise",1767129287),viewpromise);
ResolvePromise.call(null,tool.react.view_ch.call(null,ctx,react_curr,tool.react.model_ch.call(null,ctx,react_curr,args)));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),react_curr], null),a_view);
});
tool.react.CloseView = (function CloseView(p__29494,p__29495){var map__29499 = p__29494;var map__29499__$1 = ((cljs.core.seq_QMARK_.call(null,map__29499))?cljs.core.apply.call(null,cljs.core.hash_map,map__29499):map__29499);var ctx = map__29499__$1;var views = cljs.core.get.call(null,map__29499__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__29499__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__29500 = p__29495;var map__29500__$1 = ((cljs.core.seq_QMARK_.call(null,map__29500))?cljs.core.apply.call(null,cljs.core.hash_map,map__29500):map__29500);var args = map__29500__$1;var react_curr = cljs.core.get.call(null,map__29500__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));if(cljs.core.some_QMARK_.call(null,react_curr.call(null,views)))
{var map__29501 = cljs.core.deref.call(null,react_curr.call(null,views));var map__29501__$1 = ((cljs.core.seq_QMARK_.call(null,map__29501))?cljs.core.apply.call(null,cljs.core.hash_map,map__29501):map__29501);var promise = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));var view = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"view","view",1247994814));if(cljs.core.some_QMARK_.call(null,view))
{tool.react.AnimateClose.call(null,ctx,react_curr,view);
} else
{promise.reject("CloseView");
}
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,react_curr);
} else
{return ctx;
}
});
tool.react.ChangeView = (function ChangeView(p__29502,p__29503){var map__29506 = p__29502;var map__29506__$1 = ((cljs.core.seq_QMARK_.call(null,map__29506))?cljs.core.apply.call(null,cljs.core.hash_map,map__29506):map__29506);var ctx = map__29506__$1;var views = cljs.core.get.call(null,map__29506__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__29506__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__29507 = p__29503;var map__29507__$1 = ((cljs.core.seq_QMARK_.call(null,map__29507))?cljs.core.apply.call(null,cljs.core.hash_map,map__29507):map__29507);var args = map__29507__$1;var react_curr = cljs.core.get.call(null,map__29507__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var closeAll = ((function (map__29506,map__29506__$1,ctx,views,container,map__29507,map__29507__$1,args,react_curr){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__29506,map__29506__$1,ctx,views,container,map__29507,map__29507__$1,args,react_curr){
return (function (ctx__$2,key){return tool.react.CloseView.call(null,ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-curr","react-curr",984299478),key], null));
});})(map__29506,map__29506__$1,ctx,views,container,map__29507,map__29507__$1,args,react_curr))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__29506,map__29506__$1,ctx,views,container,map__29507,map__29507__$1,args,react_curr))
;var thenOpen = ((function (closeAll,map__29506,map__29506__$1,ctx,views,container,map__29507,map__29507__$1,args,react_curr){
return (function (ctx__$1){return tool.react.OpenView.call(null,ctx__$1,args);
});})(closeAll,map__29506,map__29506__$1,ctx,views,container,map__29507,map__29507__$1,args,react_curr))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.react.React = (function React(p__29508,p__29509){var map__29513 = p__29508;var map__29513__$1 = ((cljs.core.seq_QMARK_.call(null,map__29513))?cljs.core.apply.call(null,cljs.core.hash_map,map__29513):map__29513);var ctx = map__29513__$1;var route = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"route","route",329891309));var vec__29514 = p__29509;var key = cljs.core.nth.call(null,vec__29514,(0),null);var whichRoute = cljs.core.nth.call(null,vec__29514,(1),null);var args = cljs.core.nth.call(null,vec__29514,(2),null);var vec__29515 = whichRoute.call(null,key.call(null,route));var curr = cljs.core.nth.call(null,vec__29515,(0),null);var Operation = cljs.core.nth.call(null,vec__29515,(1),null);return Operation.call(null,ctx,cljs.core.merge.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-prev","react-prev",-1532545102),key,new cljs.core.Keyword(null,"react-curr","react-curr",984299478),curr], null)));
});
tool.react.OnReact = cljs.core.async.chan.call(null);
