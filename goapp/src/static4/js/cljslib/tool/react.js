// Compiled by ClojureScript 0.0-2268
goog.provide('tool.react');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
tool.react.model_ch = (function (){var method_table__4434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4437__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4438__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("model-ch",((function (method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__,hierarchy__4438__auto__){
return (function (ctx,key,args){return key;
});})(method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__,hierarchy__4438__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4438__auto__,method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__));
})();
tool.react.view_ch = (function (){var method_table__4434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4437__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4438__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("view-ch",((function (method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__,hierarchy__4438__auto__){
return (function (ctx,key,modelChan){return key;
});})(method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__,hierarchy__4438__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4438__auto__,method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__));
})();
tool.react.AnimateOpen = (function (){var method_table__4434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4437__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4438__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("AnimateOpen",((function (method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__,hierarchy__4438__auto__){
return (function (ctx,key,view){return key;
});})(method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__,hierarchy__4438__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4438__auto__,method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__));
})();
tool.react.AnimateClose = (function (){var method_table__4434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4437__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4438__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("AnimateClose",((function (method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__,hierarchy__4438__auto__){
return (function (ctx,key,view){return key;
});})(method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__,hierarchy__4438__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4438__auto__,method_table__4434__auto__,prefer_table__4435__auto__,method_cache__4436__auto__,cached_hierarchy__4437__auto__));
})();
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ctx,key,view){return null;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ctx,key,view){return null;
}));
tool.react.OpenView = (function OpenView(p__10125,p__10126){var map__10143 = p__10125;var map__10143__$1 = ((cljs.core.seq_QMARK_.call(null,map__10143))?cljs.core.apply.call(null,cljs.core.hash_map,map__10143):map__10143);var ctx = map__10143__$1;var views = cljs.core.get.call(null,map__10143__$1,new cljs.core.Keyword(null,"views","views",1450155487));var map__10144 = p__10126;var map__10144__$1 = ((cljs.core.seq_QMARK_.call(null,map__10144))?cljs.core.apply.call(null,cljs.core.hash_map,map__10144):map__10144);var args = map__10144__$1;var react_curr = cljs.core.get.call(null,map__10144__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var a_view = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var viewpromise = (function (){var G__10145 = (new $.Deferred());G__10145.done(((function (G__10145,a_view,map__10143,map__10143__$1,ctx,views,map__10144,map__10144__$1,args,react_curr){
return (function (view){cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),view);
return tool.react.AnimateOpen.call(null,ctx,react_curr,view);
});})(G__10145,a_view,map__10143,map__10143__$1,ctx,views,map__10144,map__10144__$1,args,react_curr))
);
return G__10145;
})();var ResolvePromise = ((function (a_view,viewpromise,map__10143,map__10143__$1,ctx,views,map__10144,map__10144__$1,args,react_curr){
return (function (chan){var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__,a_view,viewpromise,map__10143,map__10143__$1,ctx,views,map__10144,map__10144__$1,args,react_curr){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__,a_view,viewpromise,map__10143,map__10143__$1,ctx,views,map__10144,map__10144__$1,args,react_curr){
return (function (state_10150){var state_val_10151 = (state_10150[(1)]);if((state_val_10151 === (2)))
{var inst_10147 = (state_10150[(2)]);var inst_10148 = viewpromise.resolve(inst_10147);var state_10150__$1 = state_10150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10150__$1,inst_10148);
} else
{if((state_val_10151 === (1)))
{var state_10150__$1 = state_10150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10150__$1,(2),chan);
} else
{return null;
}
}
});})(c__6225__auto__,a_view,viewpromise,map__10143,map__10143__$1,ctx,views,map__10144,map__10144__$1,args,react_curr))
;return ((function (switch__6210__auto__,c__6225__auto__,a_view,viewpromise,map__10143,map__10143__$1,ctx,views,map__10144,map__10144__$1,args,react_curr){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_10155 = [null,null,null,null,null,null,null];(statearr_10155[(0)] = state_machine__6211__auto__);
(statearr_10155[(1)] = (1));
return statearr_10155;
});
var state_machine__6211__auto____1 = (function (state_10150){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_10150);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e10156){if((e10156 instanceof Object))
{var ex__6214__auto__ = e10156;var statearr_10157_10159 = state_10150;(statearr_10157_10159[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10150);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10160 = state_10150;
state_10150 = G__10160;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_10150){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_10150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__,a_view,viewpromise,map__10143,map__10143__$1,ctx,views,map__10144,map__10144__$1,args,react_curr))
})();var state__6227__auto__ = (function (){var statearr_10158 = f__6226__auto__.call(null);(statearr_10158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_10158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__,a_view,viewpromise,map__10143,map__10143__$1,ctx,views,map__10144,map__10144__$1,args,react_curr))
);
return c__6225__auto__;
});})(a_view,viewpromise,map__10143,map__10143__$1,ctx,views,map__10144,map__10144__$1,args,react_curr))
;cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"promise","promise",1767129287),viewpromise);
ResolvePromise.call(null,tool.react.view_ch.call(null,ctx,react_curr,tool.react.model_ch.call(null,ctx,react_curr,args)));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),react_curr], null),a_view);
});
tool.react.CloseView = (function CloseView(p__10161,p__10162){var map__10166 = p__10161;var map__10166__$1 = ((cljs.core.seq_QMARK_.call(null,map__10166))?cljs.core.apply.call(null,cljs.core.hash_map,map__10166):map__10166);var ctx = map__10166__$1;var views = cljs.core.get.call(null,map__10166__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__10166__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__10167 = p__10162;var map__10167__$1 = ((cljs.core.seq_QMARK_.call(null,map__10167))?cljs.core.apply.call(null,cljs.core.hash_map,map__10167):map__10167);var args = map__10167__$1;var react_curr = cljs.core.get.call(null,map__10167__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));if(cljs.core.some_QMARK_.call(null,react_curr.call(null,views)))
{var map__10168 = cljs.core.deref.call(null,react_curr.call(null,views));var map__10168__$1 = ((cljs.core.seq_QMARK_.call(null,map__10168))?cljs.core.apply.call(null,cljs.core.hash_map,map__10168):map__10168);var promise = cljs.core.get.call(null,map__10168__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));var view = cljs.core.get.call(null,map__10168__$1,new cljs.core.Keyword(null,"view","view",1247994814));if(cljs.core.some_QMARK_.call(null,view))
{tool.react.AnimateClose.call(null,ctx,react_curr,view);
} else
{promise.reject("CloseView");
}
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,react_curr);
} else
{return ctx;
}
});
tool.react.ChangeView = (function ChangeView(p__10169,p__10170){var map__10173 = p__10169;var map__10173__$1 = ((cljs.core.seq_QMARK_.call(null,map__10173))?cljs.core.apply.call(null,cljs.core.hash_map,map__10173):map__10173);var ctx = map__10173__$1;var views = cljs.core.get.call(null,map__10173__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__10173__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__10174 = p__10170;var map__10174__$1 = ((cljs.core.seq_QMARK_.call(null,map__10174))?cljs.core.apply.call(null,cljs.core.hash_map,map__10174):map__10174);var args = map__10174__$1;var react_curr = cljs.core.get.call(null,map__10174__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var closeAll = ((function (map__10173,map__10173__$1,ctx,views,container,map__10174,map__10174__$1,args,react_curr){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__10173,map__10173__$1,ctx,views,container,map__10174,map__10174__$1,args,react_curr){
return (function (ctx__$2,key){return tool.react.CloseView.call(null,ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-curr","react-curr",984299478),key], null));
});})(map__10173,map__10173__$1,ctx,views,container,map__10174,map__10174__$1,args,react_curr))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__10173,map__10173__$1,ctx,views,container,map__10174,map__10174__$1,args,react_curr))
;var thenOpen = ((function (closeAll,map__10173,map__10173__$1,ctx,views,container,map__10174,map__10174__$1,args,react_curr){
return (function (ctx__$1){return tool.react.OpenView.call(null,ctx__$1,args);
});})(closeAll,map__10173,map__10173__$1,ctx,views,container,map__10174,map__10174__$1,args,react_curr))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.react.React = (function React(p__10175,p__10176){var map__10180 = p__10175;var map__10180__$1 = ((cljs.core.seq_QMARK_.call(null,map__10180))?cljs.core.apply.call(null,cljs.core.hash_map,map__10180):map__10180);var ctx = map__10180__$1;var route = cljs.core.get.call(null,map__10180__$1,new cljs.core.Keyword(null,"route","route",329891309));var vec__10181 = p__10176;var key = cljs.core.nth.call(null,vec__10181,(0),null);var whichRoute = cljs.core.nth.call(null,vec__10181,(1),null);var args = cljs.core.nth.call(null,vec__10181,(2),null);var vec__10182 = whichRoute.call(null,key.call(null,route));var curr = cljs.core.nth.call(null,vec__10182,(0),null);var Operation = cljs.core.nth.call(null,vec__10182,(1),null);return Operation.call(null,ctx,cljs.core.merge.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-prev","react-prev",-1532545102),key,new cljs.core.Keyword(null,"react-curr","react-curr",984299478),curr], null)));
});
tool.react.OnReact = cljs.core.async.chan.call(null);
