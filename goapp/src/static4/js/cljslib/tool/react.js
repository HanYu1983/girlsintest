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
tool.react.OpenView = (function OpenView(p__17875,p__17876){var map__17893 = p__17875;var map__17893__$1 = ((cljs.core.seq_QMARK_.call(null,map__17893))?cljs.core.apply.call(null,cljs.core.hash_map,map__17893):map__17893);var ctx = map__17893__$1;var views = cljs.core.get.call(null,map__17893__$1,new cljs.core.Keyword(null,"views","views",1450155487));var map__17894 = p__17876;var map__17894__$1 = ((cljs.core.seq_QMARK_.call(null,map__17894))?cljs.core.apply.call(null,cljs.core.hash_map,map__17894):map__17894);var args = map__17894__$1;var react_curr = cljs.core.get.call(null,map__17894__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var a_view = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var viewpromise = (function (){var G__17895 = (new $.Deferred());G__17895.done(((function (G__17895,a_view,map__17893,map__17893__$1,ctx,views,map__17894,map__17894__$1,args,react_curr){
return (function (view){cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),view);
return tool.react.AnimateOpen.call(null,ctx,react_curr,view);
});})(G__17895,a_view,map__17893,map__17893__$1,ctx,views,map__17894,map__17894__$1,args,react_curr))
);
return G__17895;
})();var ResolvePromise = ((function (a_view,viewpromise,map__17893,map__17893__$1,ctx,views,map__17894,map__17894__$1,args,react_curr){
return (function (chan){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,a_view,viewpromise,map__17893,map__17893__$1,ctx,views,map__17894,map__17894__$1,args,react_curr){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,a_view,viewpromise,map__17893,map__17893__$1,ctx,views,map__17894,map__17894__$1,args,react_curr){
return (function (state_17900){var state_val_17901 = (state_17900[(1)]);if((state_val_17901 === (2)))
{var inst_17897 = (state_17900[(2)]);var inst_17898 = viewpromise.resolve(inst_17897);var state_17900__$1 = state_17900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17900__$1,inst_17898);
} else
{if((state_val_17901 === (1)))
{var state_17900__$1 = state_17900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17900__$1,(2),chan);
} else
{return null;
}
}
});})(c__6344__auto__,a_view,viewpromise,map__17893,map__17893__$1,ctx,views,map__17894,map__17894__$1,args,react_curr))
;return ((function (switch__6329__auto__,c__6344__auto__,a_view,viewpromise,map__17893,map__17893__$1,ctx,views,map__17894,map__17894__$1,args,react_curr){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_17905 = [null,null,null,null,null,null,null];(statearr_17905[(0)] = state_machine__6330__auto__);
(statearr_17905[(1)] = (1));
return statearr_17905;
});
var state_machine__6330__auto____1 = (function (state_17900){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_17900);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e17906){if((e17906 instanceof Object))
{var ex__6333__auto__ = e17906;var statearr_17907_17909 = state_17900;(statearr_17907_17909[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17910 = state_17900;
state_17900 = G__17910;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_17900){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_17900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,a_view,viewpromise,map__17893,map__17893__$1,ctx,views,map__17894,map__17894__$1,args,react_curr))
})();var state__6346__auto__ = (function (){var statearr_17908 = f__6345__auto__.call(null);(statearr_17908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_17908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,a_view,viewpromise,map__17893,map__17893__$1,ctx,views,map__17894,map__17894__$1,args,react_curr))
);
return c__6344__auto__;
});})(a_view,viewpromise,map__17893,map__17893__$1,ctx,views,map__17894,map__17894__$1,args,react_curr))
;cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"promise","promise",1767129287),viewpromise);
ResolvePromise.call(null,tool.react.view_ch.call(null,ctx,react_curr,tool.react.model_ch.call(null,ctx,react_curr,args)));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),react_curr], null),a_view);
});
tool.react.CloseView = (function CloseView(p__17911,p__17912){var map__17916 = p__17911;var map__17916__$1 = ((cljs.core.seq_QMARK_.call(null,map__17916))?cljs.core.apply.call(null,cljs.core.hash_map,map__17916):map__17916);var ctx = map__17916__$1;var views = cljs.core.get.call(null,map__17916__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__17916__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__17917 = p__17912;var map__17917__$1 = ((cljs.core.seq_QMARK_.call(null,map__17917))?cljs.core.apply.call(null,cljs.core.hash_map,map__17917):map__17917);var args = map__17917__$1;var react_curr = cljs.core.get.call(null,map__17917__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));if(!((react_curr.call(null,views) == null)))
{var map__17918 = cljs.core.deref.call(null,react_curr.call(null,views));var map__17918__$1 = ((cljs.core.seq_QMARK_.call(null,map__17918))?cljs.core.apply.call(null,cljs.core.hash_map,map__17918):map__17918);var promise = cljs.core.get.call(null,map__17918__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));var view = cljs.core.get.call(null,map__17918__$1,new cljs.core.Keyword(null,"view","view",1247994814));if((view == null))
{promise.reject("CloseView");
} else
{tool.react.AnimateClose.call(null,ctx,react_curr,view);
}
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,react_curr);
} else
{return ctx;
}
});
tool.react.ChangeView = (function ChangeView(p__17919,p__17920){var map__17923 = p__17919;var map__17923__$1 = ((cljs.core.seq_QMARK_.call(null,map__17923))?cljs.core.apply.call(null,cljs.core.hash_map,map__17923):map__17923);var ctx = map__17923__$1;var views = cljs.core.get.call(null,map__17923__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__17923__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__17924 = p__17920;var map__17924__$1 = ((cljs.core.seq_QMARK_.call(null,map__17924))?cljs.core.apply.call(null,cljs.core.hash_map,map__17924):map__17924);var args = map__17924__$1;var react_curr = cljs.core.get.call(null,map__17924__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var closeAll = ((function (map__17923,map__17923__$1,ctx,views,container,map__17924,map__17924__$1,args,react_curr){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__17923,map__17923__$1,ctx,views,container,map__17924,map__17924__$1,args,react_curr){
return (function (ctx__$2,key){return tool.react.CloseView.call(null,ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-curr","react-curr",984299478),key], null));
});})(map__17923,map__17923__$1,ctx,views,container,map__17924,map__17924__$1,args,react_curr))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__17923,map__17923__$1,ctx,views,container,map__17924,map__17924__$1,args,react_curr))
;var thenOpen = ((function (closeAll,map__17923,map__17923__$1,ctx,views,container,map__17924,map__17924__$1,args,react_curr){
return (function (ctx__$1){return tool.react.OpenView.call(null,ctx__$1,args);
});})(closeAll,map__17923,map__17923__$1,ctx,views,container,map__17924,map__17924__$1,args,react_curr))
;console.log(cljs.core.pr_str.call(null,args));
return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.react.React = (function React(p__17925,p__17926){var map__17930 = p__17925;var map__17930__$1 = ((cljs.core.seq_QMARK_.call(null,map__17930))?cljs.core.apply.call(null,cljs.core.hash_map,map__17930):map__17930);var ctx = map__17930__$1;var route = cljs.core.get.call(null,map__17930__$1,new cljs.core.Keyword(null,"route","route",329891309));var vec__17931 = p__17926;var key = cljs.core.nth.call(null,vec__17931,(0),null);var whichRoute = cljs.core.nth.call(null,vec__17931,(1),null);var args = cljs.core.nth.call(null,vec__17931,(2),null);var vec__17932 = whichRoute.call(null,key.call(null,route));var curr = cljs.core.nth.call(null,vec__17932,(0),null);var Operation = cljs.core.nth.call(null,vec__17932,(1),null);return Operation.call(null,ctx,cljs.core.merge.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-prev","react-prev",-1532545102),key,new cljs.core.Keyword(null,"react-curr","react-curr",984299478),curr], null)));
});
tool.react.OnReact = cljs.core.async.chan.call(null);
