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
tool.react.OpenView = (function OpenView(p__15773,p__15774){var map__15791 = p__15773;var map__15791__$1 = ((cljs.core.seq_QMARK_.call(null,map__15791))?cljs.core.apply.call(null,cljs.core.hash_map,map__15791):map__15791);var ctx = map__15791__$1;var views = cljs.core.get.call(null,map__15791__$1,new cljs.core.Keyword(null,"views","views",1450155487));var map__15792 = p__15774;var map__15792__$1 = ((cljs.core.seq_QMARK_.call(null,map__15792))?cljs.core.apply.call(null,cljs.core.hash_map,map__15792):map__15792);var args = map__15792__$1;var react_action = cljs.core.get.call(null,map__15792__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));var a_view = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var viewpromise = (function (){var G__15793 = (new $.Deferred());G__15793.done(((function (G__15793,a_view,map__15791,map__15791__$1,ctx,views,map__15792,map__15792__$1,args,react_action){
return (function (view){cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),view);
return tool.react.AnimateOpen.call(null,ctx,react_action,view);
});})(G__15793,a_view,map__15791,map__15791__$1,ctx,views,map__15792,map__15792__$1,args,react_action))
);
return G__15793;
})();var ResolvePromise = ((function (a_view,viewpromise,map__15791,map__15791__$1,ctx,views,map__15792,map__15792__$1,args,react_action){
return (function (chan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,a_view,viewpromise,map__15791,map__15791__$1,ctx,views,map__15792,map__15792__$1,args,react_action){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,a_view,viewpromise,map__15791,map__15791__$1,ctx,views,map__15792,map__15792__$1,args,react_action){
return (function (state_15798){var state_val_15799 = (state_15798[(1)]);if((state_val_15799 === (2)))
{var inst_15795 = (state_15798[(2)]);var inst_15796 = viewpromise.resolve(inst_15795);var state_15798__$1 = state_15798;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15798__$1,inst_15796);
} else
{if((state_val_15799 === (1)))
{var state_15798__$1 = state_15798;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15798__$1,(2),chan);
} else
{return null;
}
}
});})(c__6216__auto__,a_view,viewpromise,map__15791,map__15791__$1,ctx,views,map__15792,map__15792__$1,args,react_action))
;return ((function (switch__6201__auto__,c__6216__auto__,a_view,viewpromise,map__15791,map__15791__$1,ctx,views,map__15792,map__15792__$1,args,react_action){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_15803 = [null,null,null,null,null,null,null];(statearr_15803[(0)] = state_machine__6202__auto__);
(statearr_15803[(1)] = (1));
return statearr_15803;
});
var state_machine__6202__auto____1 = (function (state_15798){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_15798);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e15804){if((e15804 instanceof Object))
{var ex__6205__auto__ = e15804;var statearr_15805_15807 = state_15798;(statearr_15805_15807[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15798);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15808 = state_15798;
state_15798 = G__15808;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_15798){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_15798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,a_view,viewpromise,map__15791,map__15791__$1,ctx,views,map__15792,map__15792__$1,args,react_action))
})();var state__6218__auto__ = (function (){var statearr_15806 = f__6217__auto__.call(null);(statearr_15806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_15806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,a_view,viewpromise,map__15791,map__15791__$1,ctx,views,map__15792,map__15792__$1,args,react_action))
);
return c__6216__auto__;
});})(a_view,viewpromise,map__15791,map__15791__$1,ctx,views,map__15792,map__15792__$1,args,react_action))
;cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"promise","promise",1767129287),viewpromise);
ResolvePromise.call(null,tool.react.view_ch.call(null,ctx,react_action,tool.react.model_ch.call(null,ctx,react_action,args)));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),react_action], null),a_view);
});
tool.react.CloseView = (function CloseView(p__15809,p__15810){var map__15814 = p__15809;var map__15814__$1 = ((cljs.core.seq_QMARK_.call(null,map__15814))?cljs.core.apply.call(null,cljs.core.hash_map,map__15814):map__15814);var ctx = map__15814__$1;var views = cljs.core.get.call(null,map__15814__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__15814__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__15815 = p__15810;var map__15815__$1 = ((cljs.core.seq_QMARK_.call(null,map__15815))?cljs.core.apply.call(null,cljs.core.hash_map,map__15815):map__15815);var args = map__15815__$1;var react_action = cljs.core.get.call(null,map__15815__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));if(cljs.core.some_QMARK_.call(null,react_action.call(null,views)))
{var map__15816 = cljs.core.deref.call(null,react_action.call(null,views));var map__15816__$1 = ((cljs.core.seq_QMARK_.call(null,map__15816))?cljs.core.apply.call(null,cljs.core.hash_map,map__15816):map__15816);var promise = cljs.core.get.call(null,map__15816__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));var view = cljs.core.get.call(null,map__15816__$1,new cljs.core.Keyword(null,"view","view",1247994814));if(cljs.core.some_QMARK_.call(null,view))
{tool.react.AnimateClose.call(null,ctx,react_action,view);
} else
{promise.reject("CloseView");
}
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,react_action);
} else
{return ctx;
}
});
tool.react.ChangeView = (function ChangeView(p__15817,p__15818){var map__15821 = p__15817;var map__15821__$1 = ((cljs.core.seq_QMARK_.call(null,map__15821))?cljs.core.apply.call(null,cljs.core.hash_map,map__15821):map__15821);var ctx = map__15821__$1;var views = cljs.core.get.call(null,map__15821__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__15821__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__15822 = p__15818;var map__15822__$1 = ((cljs.core.seq_QMARK_.call(null,map__15822))?cljs.core.apply.call(null,cljs.core.hash_map,map__15822):map__15822);var args = map__15822__$1;var react_action = cljs.core.get.call(null,map__15822__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));var closeAll = ((function (map__15821,map__15821__$1,ctx,views,container,map__15822,map__15822__$1,args,react_action){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__15821,map__15821__$1,ctx,views,container,map__15822,map__15822__$1,args,react_action){
return (function (ctx__$2,key){return tool.react.CloseView.call(null,ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-action","react-action",-1116711177),key], null));
});})(map__15821,map__15821__$1,ctx,views,container,map__15822,map__15822__$1,args,react_action))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__15821,map__15821__$1,ctx,views,container,map__15822,map__15822__$1,args,react_action))
;var thenOpen = ((function (closeAll,map__15821,map__15821__$1,ctx,views,container,map__15822,map__15822__$1,args,react_action){
return (function (ctx__$1){return tool.react.OpenView.call(null,ctx__$1,args);
});})(closeAll,map__15821,map__15821__$1,ctx,views,container,map__15822,map__15822__$1,args,react_action))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.react.React = (function React(route,ctx,p__15824){var vec__15827 = p__15824;var key = cljs.core.nth.call(null,vec__15827,(0),null);var whichRoute = cljs.core.nth.call(null,vec__15827,(1),null);var args = cljs.core.nth.call(null,vec__15827,(2),null);var vec__15828 = whichRoute.call(null,key.call(null,route));var curr = cljs.core.nth.call(null,vec__15828,(0),null);var Operation = cljs.core.nth.call(null,vec__15828,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__15828,curr,Operation,vec__15827,key,whichRoute,args){
return (function (p1__15823_SHARP_){return (p1__15823_SHARP_ == null);
});})(vec__15828,curr,Operation,vec__15827,key,whichRoute,args))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,Operation], null))))
{console.log(("from "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(whichRoute)+" isn't exist!!"));
return ctx;
} else
{return Operation.call(null,ctx,cljs.core.merge.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-where","react-where",-127883626),key,new cljs.core.Keyword(null,"react-action","react-action",-1116711177),curr], null)));
}
});
tool.react.OnReact = cljs.core.async.chan.call(null);
