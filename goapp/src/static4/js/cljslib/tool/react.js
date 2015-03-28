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
tool.react.OpenView = (function OpenView(p__15913,p__15914){var map__15931 = p__15913;var map__15931__$1 = ((cljs.core.seq_QMARK_.call(null,map__15931))?cljs.core.apply.call(null,cljs.core.hash_map,map__15931):map__15931);var ctx = map__15931__$1;var views = cljs.core.get.call(null,map__15931__$1,new cljs.core.Keyword(null,"views","views",1450155487));var map__15932 = p__15914;var map__15932__$1 = ((cljs.core.seq_QMARK_.call(null,map__15932))?cljs.core.apply.call(null,cljs.core.hash_map,map__15932):map__15932);var args = map__15932__$1;var key = cljs.core.get.call(null,map__15932__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var a_view = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var viewpromise = (function (){var G__15933 = (new $.Deferred());G__15933.done(((function (G__15933,a_view,map__15931,map__15931__$1,ctx,views,map__15932,map__15932__$1,args,key){
return (function (view){cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),view);
return tool.react.AnimateOpen.call(null,ctx,key,view);
});})(G__15933,a_view,map__15931,map__15931__$1,ctx,views,map__15932,map__15932__$1,args,key))
);
return G__15933;
})();var ResolvePromise = ((function (a_view,viewpromise,map__15931,map__15931__$1,ctx,views,map__15932,map__15932__$1,args,key){
return (function (chan){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,a_view,viewpromise,map__15931,map__15931__$1,ctx,views,map__15932,map__15932__$1,args,key){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,a_view,viewpromise,map__15931,map__15931__$1,ctx,views,map__15932,map__15932__$1,args,key){
return (function (state_15938){var state_val_15939 = (state_15938[(1)]);if((state_val_15939 === (2)))
{var inst_15935 = (state_15938[(2)]);var inst_15936 = viewpromise.resolve(inst_15935);var state_15938__$1 = state_15938;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15938__$1,inst_15936);
} else
{if((state_val_15939 === (1)))
{var state_15938__$1 = state_15938;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15938__$1,(2),chan);
} else
{return null;
}
}
});})(c__6344__auto__,a_view,viewpromise,map__15931,map__15931__$1,ctx,views,map__15932,map__15932__$1,args,key))
;return ((function (switch__6329__auto__,c__6344__auto__,a_view,viewpromise,map__15931,map__15931__$1,ctx,views,map__15932,map__15932__$1,args,key){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_15943 = [null,null,null,null,null,null,null];(statearr_15943[(0)] = state_machine__6330__auto__);
(statearr_15943[(1)] = (1));
return statearr_15943;
});
var state_machine__6330__auto____1 = (function (state_15938){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_15938);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e15944){if((e15944 instanceof Object))
{var ex__6333__auto__ = e15944;var statearr_15945_15947 = state_15938;(statearr_15945_15947[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15938);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15944;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15948 = state_15938;
state_15938 = G__15948;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_15938){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_15938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,a_view,viewpromise,map__15931,map__15931__$1,ctx,views,map__15932,map__15932__$1,args,key))
})();var state__6346__auto__ = (function (){var statearr_15946 = f__6345__auto__.call(null);(statearr_15946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_15946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,a_view,viewpromise,map__15931,map__15931__$1,ctx,views,map__15932,map__15932__$1,args,key))
);
return c__6344__auto__;
});})(a_view,viewpromise,map__15931,map__15931__$1,ctx,views,map__15932,map__15932__$1,args,key))
;cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"promise","promise",1767129287),viewpromise);
ResolvePromise.call(null,cljs.core.partial.call(null,cljs.core.partial.call(null,args,tool.react.model_ch,ctx,key),tool.react.view_ch,ctx,key));
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.assoc,a_view);
});
tool.react.CloseView = (function CloseView(p__15949,p__15950){var map__15954 = p__15949;var map__15954__$1 = ((cljs.core.seq_QMARK_.call(null,map__15954))?cljs.core.apply.call(null,cljs.core.hash_map,map__15954):map__15954);var ctx = map__15954__$1;var views = cljs.core.get.call(null,map__15954__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__15954__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__15955 = p__15950;var map__15955__$1 = ((cljs.core.seq_QMARK_.call(null,map__15955))?cljs.core.apply.call(null,cljs.core.hash_map,map__15955):map__15955);var args = map__15955__$1;var key = cljs.core.get.call(null,map__15955__$1,new cljs.core.Keyword(null,"key","key",-1516042587));if(!((key.call(null,tool.react.view) == null)))
{var map__15956 = cljs.core.deref.call(null,key.call(null,views));var map__15956__$1 = ((cljs.core.seq_QMARK_.call(null,map__15956))?cljs.core.apply.call(null,cljs.core.hash_map,map__15956):map__15956);var promise = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));var view = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"view","view",1247994814));if((view == null))
{promise.reject("CloseView");
} else
{tool.react.AnimateClose.call(null,ctx,key,view);
}
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,key);
} else
{return ctx;
}
});
tool.react.ChangeView = (function ChangeView(p__15957,p__15958){var map__15961 = p__15957;var map__15961__$1 = ((cljs.core.seq_QMARK_.call(null,map__15961))?cljs.core.apply.call(null,cljs.core.hash_map,map__15961):map__15961);var ctx = map__15961__$1;var views = cljs.core.get.call(null,map__15961__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__15961__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__15962 = p__15958;var map__15962__$1 = ((cljs.core.seq_QMARK_.call(null,map__15962))?cljs.core.apply.call(null,cljs.core.hash_map,map__15962):map__15962);var args = map__15962__$1;var key = cljs.core.get.call(null,map__15962__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var closeAll = ((function (map__15961,map__15961__$1,ctx,views,container,map__15962,map__15962__$1,args,key){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__15961,map__15961__$1,ctx,views,container,map__15962,map__15962__$1,args,key){
return (function (ctx__$2,key__$1){return tool.react.CloseView.call(null,ctx__$2,key__$1);
});})(map__15961,map__15961__$1,ctx,views,container,map__15962,map__15962__$1,args,key))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__15961,map__15961__$1,ctx,views,container,map__15962,map__15962__$1,args,key))
;var thenOpen = ((function (closeAll,map__15961,map__15961__$1,ctx,views,container,map__15962,map__15962__$1,args,key){
return (function (ctx__$1){return tool.react.OpenView.call(null,ctx__$1,args);
});})(closeAll,map__15961,map__15961__$1,ctx,views,container,map__15962,map__15962__$1,args,key))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.react.React = (function React(p__15963,p__15964){var map__15968 = p__15963;var map__15968__$1 = ((cljs.core.seq_QMARK_.call(null,map__15968))?cljs.core.apply.call(null,cljs.core.hash_map,map__15968):map__15968);var ctx = map__15968__$1;var route = cljs.core.get.call(null,map__15968__$1,new cljs.core.Keyword(null,"route","route",329891309));var vec__15969 = p__15964;var key = cljs.core.nth.call(null,vec__15969,(0),null);var whichRoute = cljs.core.nth.call(null,vec__15969,(1),null);var args = cljs.core.nth.call(null,vec__15969,(2),null);var vec__15970 = whichRoute.call(null,key.call(null,route));var curr = cljs.core.nth.call(null,vec__15970,(0),null);var Operation = cljs.core.nth.call(null,vec__15970,(1),null);return Operation.call(null,ctx,cljs.core.merge.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-prev","react-prev",-1532545102),key,new cljs.core.Keyword(null,"react-curr","react-curr",984299478),curr], null)));
});
