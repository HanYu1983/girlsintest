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
tool.react.OpenView = (function OpenView(p__22706,p__22707){var map__22724 = p__22706;var map__22724__$1 = ((cljs.core.seq_QMARK_.call(null,map__22724))?cljs.core.apply.call(null,cljs.core.hash_map,map__22724):map__22724);var ctx = map__22724__$1;var views = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"views","views",1450155487));var map__22725 = p__22707;var map__22725__$1 = ((cljs.core.seq_QMARK_.call(null,map__22725))?cljs.core.apply.call(null,cljs.core.hash_map,map__22725):map__22725);var args = map__22725__$1;var react_action = cljs.core.get.call(null,map__22725__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));var a_view = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var viewpromise = (function (){var G__22726 = (new $.Deferred());G__22726.done(((function (G__22726,a_view,map__22724,map__22724__$1,ctx,views,map__22725,map__22725__$1,args,react_action){
return (function (view){cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),view);
return tool.react.AnimateOpen.call(null,ctx,react_action,view);
});})(G__22726,a_view,map__22724,map__22724__$1,ctx,views,map__22725,map__22725__$1,args,react_action))
);
return G__22726;
})();var ResolvePromise = ((function (a_view,viewpromise,map__22724,map__22724__$1,ctx,views,map__22725,map__22725__$1,args,react_action){
return (function (chan){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,a_view,viewpromise,map__22724,map__22724__$1,ctx,views,map__22725,map__22725__$1,args,react_action){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,a_view,viewpromise,map__22724,map__22724__$1,ctx,views,map__22725,map__22725__$1,args,react_action){
return (function (state_22731){var state_val_22732 = (state_22731[(1)]);if((state_val_22732 === (2)))
{var inst_22728 = (state_22731[(2)]);var inst_22729 = viewpromise.resolve(inst_22728);var state_22731__$1 = state_22731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22731__$1,inst_22729);
} else
{if((state_val_22732 === (1)))
{var state_22731__$1 = state_22731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22731__$1,(2),chan);
} else
{return null;
}
}
});})(c__6192__auto__,a_view,viewpromise,map__22724,map__22724__$1,ctx,views,map__22725,map__22725__$1,args,react_action))
;return ((function (switch__6177__auto__,c__6192__auto__,a_view,viewpromise,map__22724,map__22724__$1,ctx,views,map__22725,map__22725__$1,args,react_action){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22736 = [null,null,null,null,null,null,null];(statearr_22736[(0)] = state_machine__6178__auto__);
(statearr_22736[(1)] = (1));
return statearr_22736;
});
var state_machine__6178__auto____1 = (function (state_22731){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22731);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22737){if((e22737 instanceof Object))
{var ex__6181__auto__ = e22737;var statearr_22738_22740 = state_22731;(statearr_22738_22740[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22741 = state_22731;
state_22731 = G__22741;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22731){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,a_view,viewpromise,map__22724,map__22724__$1,ctx,views,map__22725,map__22725__$1,args,react_action))
})();var state__6194__auto__ = (function (){var statearr_22739 = f__6193__auto__.call(null);(statearr_22739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,a_view,viewpromise,map__22724,map__22724__$1,ctx,views,map__22725,map__22725__$1,args,react_action))
);
return c__6192__auto__;
});})(a_view,viewpromise,map__22724,map__22724__$1,ctx,views,map__22725,map__22725__$1,args,react_action))
;cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"promise","promise",1767129287),viewpromise);
ResolvePromise.call(null,tool.react.view_ch.call(null,ctx,react_action,tool.react.model_ch.call(null,ctx,react_action,args)));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),react_action], null),a_view);
});
tool.react.CloseView = (function CloseView(p__22742,p__22743){var map__22747 = p__22742;var map__22747__$1 = ((cljs.core.seq_QMARK_.call(null,map__22747))?cljs.core.apply.call(null,cljs.core.hash_map,map__22747):map__22747);var ctx = map__22747__$1;var views = cljs.core.get.call(null,map__22747__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__22747__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__22748 = p__22743;var map__22748__$1 = ((cljs.core.seq_QMARK_.call(null,map__22748))?cljs.core.apply.call(null,cljs.core.hash_map,map__22748):map__22748);var args = map__22748__$1;var react_action = cljs.core.get.call(null,map__22748__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));if(cljs.core.some_QMARK_.call(null,react_action.call(null,views)))
{var map__22749 = cljs.core.deref.call(null,react_action.call(null,views));var map__22749__$1 = ((cljs.core.seq_QMARK_.call(null,map__22749))?cljs.core.apply.call(null,cljs.core.hash_map,map__22749):map__22749);var promise = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));var view = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"view","view",1247994814));if(cljs.core.some_QMARK_.call(null,view))
{tool.react.AnimateClose.call(null,ctx,react_action,view);
} else
{promise.reject("CloseView");
}
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,react_action);
} else
{return ctx;
}
});
tool.react.ChangeView = (function ChangeView(p__22750,p__22751){var map__22754 = p__22750;var map__22754__$1 = ((cljs.core.seq_QMARK_.call(null,map__22754))?cljs.core.apply.call(null,cljs.core.hash_map,map__22754):map__22754);var ctx = map__22754__$1;var views = cljs.core.get.call(null,map__22754__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__22754__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__22755 = p__22751;var map__22755__$1 = ((cljs.core.seq_QMARK_.call(null,map__22755))?cljs.core.apply.call(null,cljs.core.hash_map,map__22755):map__22755);var args = map__22755__$1;var react_action = cljs.core.get.call(null,map__22755__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));var closeAll = ((function (map__22754,map__22754__$1,ctx,views,container,map__22755,map__22755__$1,args,react_action){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__22754,map__22754__$1,ctx,views,container,map__22755,map__22755__$1,args,react_action){
return (function (ctx__$2,key){return tool.react.CloseView.call(null,ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-action","react-action",-1116711177),key], null));
});})(map__22754,map__22754__$1,ctx,views,container,map__22755,map__22755__$1,args,react_action))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__22754,map__22754__$1,ctx,views,container,map__22755,map__22755__$1,args,react_action))
;var thenOpen = ((function (closeAll,map__22754,map__22754__$1,ctx,views,container,map__22755,map__22755__$1,args,react_action){
return (function (ctx__$1){return tool.react.OpenView.call(null,ctx__$1,args);
});})(closeAll,map__22754,map__22754__$1,ctx,views,container,map__22755,map__22755__$1,args,react_action))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.react.React = (function React(route,ctx,p__22757){var vec__22760 = p__22757;var key = cljs.core.nth.call(null,vec__22760,(0),null);var whichRoute = cljs.core.nth.call(null,vec__22760,(1),null);var args = cljs.core.nth.call(null,vec__22760,(2),null);var vec__22761 = whichRoute.call(null,key.call(null,route));var curr = cljs.core.nth.call(null,vec__22761,(0),null);var Operation = cljs.core.nth.call(null,vec__22761,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__22761,curr,Operation,vec__22760,key,whichRoute,args){
return (function (p1__22756_SHARP_){return (p1__22756_SHARP_ == null);
});})(vec__22761,curr,Operation,vec__22760,key,whichRoute,args))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,Operation], null))))
{console.log(("from "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(whichRoute)+" isn't exist!!"));
return ctx;
} else
{return Operation.call(null,ctx,cljs.core.merge.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-where","react-where",-127883626),key,new cljs.core.Keyword(null,"react-action","react-action",-1116711177),curr], null)));
}
});
tool.react.OnReact = cljs.core.async.chan.call(null);
