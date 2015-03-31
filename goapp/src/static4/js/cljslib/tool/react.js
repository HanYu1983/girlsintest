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
tool.react.OpenView = (function OpenView(p__14160,p__14161){var map__14178 = p__14160;var map__14178__$1 = ((cljs.core.seq_QMARK_.call(null,map__14178))?cljs.core.apply.call(null,cljs.core.hash_map,map__14178):map__14178);var ctx = map__14178__$1;var views = cljs.core.get.call(null,map__14178__$1,new cljs.core.Keyword(null,"views","views",1450155487));var map__14179 = p__14161;var map__14179__$1 = ((cljs.core.seq_QMARK_.call(null,map__14179))?cljs.core.apply.call(null,cljs.core.hash_map,map__14179):map__14179);var args = map__14179__$1;var react_curr = cljs.core.get.call(null,map__14179__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var a_view = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var viewpromise = (function (){var G__14180 = (new $.Deferred());G__14180.done(((function (G__14180,a_view,map__14178,map__14178__$1,ctx,views,map__14179,map__14179__$1,args,react_curr){
return (function (view){cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),view);
return tool.react.AnimateOpen.call(null,ctx,react_curr,view);
});})(G__14180,a_view,map__14178,map__14178__$1,ctx,views,map__14179,map__14179__$1,args,react_curr))
);
return G__14180;
})();var ResolvePromise = ((function (a_view,viewpromise,map__14178,map__14178__$1,ctx,views,map__14179,map__14179__$1,args,react_curr){
return (function (chan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,a_view,viewpromise,map__14178,map__14178__$1,ctx,views,map__14179,map__14179__$1,args,react_curr){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,a_view,viewpromise,map__14178,map__14178__$1,ctx,views,map__14179,map__14179__$1,args,react_curr){
return (function (state_14185){var state_val_14186 = (state_14185[(1)]);if((state_val_14186 === (2)))
{var inst_14182 = (state_14185[(2)]);var inst_14183 = viewpromise.resolve(inst_14182);var state_14185__$1 = state_14185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14185__$1,inst_14183);
} else
{if((state_val_14186 === (1)))
{var state_14185__$1 = state_14185;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14185__$1,(2),chan);
} else
{return null;
}
}
});})(c__6216__auto__,a_view,viewpromise,map__14178,map__14178__$1,ctx,views,map__14179,map__14179__$1,args,react_curr))
;return ((function (switch__6201__auto__,c__6216__auto__,a_view,viewpromise,map__14178,map__14178__$1,ctx,views,map__14179,map__14179__$1,args,react_curr){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14190 = [null,null,null,null,null,null,null];(statearr_14190[(0)] = state_machine__6202__auto__);
(statearr_14190[(1)] = (1));
return statearr_14190;
});
var state_machine__6202__auto____1 = (function (state_14185){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14185);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14191){if((e14191 instanceof Object))
{var ex__6205__auto__ = e14191;var statearr_14192_14194 = state_14185;(statearr_14192_14194[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14185);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14195 = state_14185;
state_14185 = G__14195;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14185){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,a_view,viewpromise,map__14178,map__14178__$1,ctx,views,map__14179,map__14179__$1,args,react_curr))
})();var state__6218__auto__ = (function (){var statearr_14193 = f__6217__auto__.call(null);(statearr_14193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,a_view,viewpromise,map__14178,map__14178__$1,ctx,views,map__14179,map__14179__$1,args,react_curr))
);
return c__6216__auto__;
});})(a_view,viewpromise,map__14178,map__14178__$1,ctx,views,map__14179,map__14179__$1,args,react_curr))
;cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"promise","promise",1767129287),viewpromise);
ResolvePromise.call(null,tool.react.view_ch.call(null,ctx,react_curr,tool.react.model_ch.call(null,ctx,react_curr,args)));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),react_curr], null),a_view);
});
tool.react.CloseView = (function CloseView(p__14196,p__14197){var map__14201 = p__14196;var map__14201__$1 = ((cljs.core.seq_QMARK_.call(null,map__14201))?cljs.core.apply.call(null,cljs.core.hash_map,map__14201):map__14201);var ctx = map__14201__$1;var views = cljs.core.get.call(null,map__14201__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__14201__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__14202 = p__14197;var map__14202__$1 = ((cljs.core.seq_QMARK_.call(null,map__14202))?cljs.core.apply.call(null,cljs.core.hash_map,map__14202):map__14202);var args = map__14202__$1;var react_curr = cljs.core.get.call(null,map__14202__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));if(cljs.core.some_QMARK_.call(null,react_curr.call(null,views)))
{var map__14203 = cljs.core.deref.call(null,react_curr.call(null,views));var map__14203__$1 = ((cljs.core.seq_QMARK_.call(null,map__14203))?cljs.core.apply.call(null,cljs.core.hash_map,map__14203):map__14203);var promise = cljs.core.get.call(null,map__14203__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));var view = cljs.core.get.call(null,map__14203__$1,new cljs.core.Keyword(null,"view","view",1247994814));if(cljs.core.some_QMARK_.call(null,view))
{tool.react.AnimateClose.call(null,ctx,react_curr,view);
} else
{promise.reject("CloseView");
}
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,react_curr);
} else
{return ctx;
}
});
tool.react.ChangeView = (function ChangeView(p__14204,p__14205){var map__14208 = p__14204;var map__14208__$1 = ((cljs.core.seq_QMARK_.call(null,map__14208))?cljs.core.apply.call(null,cljs.core.hash_map,map__14208):map__14208);var ctx = map__14208__$1;var views = cljs.core.get.call(null,map__14208__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__14208__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__14209 = p__14205;var map__14209__$1 = ((cljs.core.seq_QMARK_.call(null,map__14209))?cljs.core.apply.call(null,cljs.core.hash_map,map__14209):map__14209);var args = map__14209__$1;var react_curr = cljs.core.get.call(null,map__14209__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var closeAll = ((function (map__14208,map__14208__$1,ctx,views,container,map__14209,map__14209__$1,args,react_curr){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__14208,map__14208__$1,ctx,views,container,map__14209,map__14209__$1,args,react_curr){
return (function (ctx__$2,key){return tool.react.CloseView.call(null,ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-curr","react-curr",984299478),key], null));
});})(map__14208,map__14208__$1,ctx,views,container,map__14209,map__14209__$1,args,react_curr))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__14208,map__14208__$1,ctx,views,container,map__14209,map__14209__$1,args,react_curr))
;var thenOpen = ((function (closeAll,map__14208,map__14208__$1,ctx,views,container,map__14209,map__14209__$1,args,react_curr){
return (function (ctx__$1){return tool.react.OpenView.call(null,ctx__$1,args);
});})(closeAll,map__14208,map__14208__$1,ctx,views,container,map__14209,map__14209__$1,args,react_curr))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.react.React = (function React(route,ctx,p__14211){var vec__14214 = p__14211;var key = cljs.core.nth.call(null,vec__14214,(0),null);var whichRoute = cljs.core.nth.call(null,vec__14214,(1),null);var args = cljs.core.nth.call(null,vec__14214,(2),null);var vec__14215 = whichRoute.call(null,key.call(null,route));var curr = cljs.core.nth.call(null,vec__14215,(0),null);var Operation = cljs.core.nth.call(null,vec__14215,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__14215,curr,Operation,vec__14214,key,whichRoute,args){
return (function (p1__14210_SHARP_){return (p1__14210_SHARP_ == null);
});})(vec__14215,curr,Operation,vec__14214,key,whichRoute,args))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,Operation], null))))
{console.log(("from "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(whichRoute)+" isn't exist!!"));
return ctx;
} else
{return Operation.call(null,ctx,cljs.core.merge.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-prev","react-prev",-1532545102),key,new cljs.core.Keyword(null,"react-curr","react-curr",984299478),curr], null)));
}
});
tool.react.OnReact = cljs.core.async.chan.call(null);
