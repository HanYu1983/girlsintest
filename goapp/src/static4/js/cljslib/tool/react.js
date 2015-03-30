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
tool.react.OpenView = (function OpenView(p__10595,p__10596){var map__10613 = p__10595;var map__10613__$1 = ((cljs.core.seq_QMARK_.call(null,map__10613))?cljs.core.apply.call(null,cljs.core.hash_map,map__10613):map__10613);var ctx = map__10613__$1;var views = cljs.core.get.call(null,map__10613__$1,new cljs.core.Keyword(null,"views","views",1450155487));var map__10614 = p__10596;var map__10614__$1 = ((cljs.core.seq_QMARK_.call(null,map__10614))?cljs.core.apply.call(null,cljs.core.hash_map,map__10614):map__10614);var args = map__10614__$1;var react_curr = cljs.core.get.call(null,map__10614__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var a_view = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var viewpromise = (function (){var G__10615 = (new $.Deferred());G__10615.done(((function (G__10615,a_view,map__10613,map__10613__$1,ctx,views,map__10614,map__10614__$1,args,react_curr){
return (function (view){cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),view);
return tool.react.AnimateOpen.call(null,ctx,react_curr,view);
});})(G__10615,a_view,map__10613,map__10613__$1,ctx,views,map__10614,map__10614__$1,args,react_curr))
);
return G__10615;
})();var ResolvePromise = ((function (a_view,viewpromise,map__10613,map__10613__$1,ctx,views,map__10614,map__10614__$1,args,react_curr){
return (function (chan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,a_view,viewpromise,map__10613,map__10613__$1,ctx,views,map__10614,map__10614__$1,args,react_curr){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,a_view,viewpromise,map__10613,map__10613__$1,ctx,views,map__10614,map__10614__$1,args,react_curr){
return (function (state_10620){var state_val_10621 = (state_10620[(1)]);if((state_val_10621 === (2)))
{var inst_10617 = (state_10620[(2)]);var inst_10618 = viewpromise.resolve(inst_10617);var state_10620__$1 = state_10620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10620__$1,inst_10618);
} else
{if((state_val_10621 === (1)))
{var state_10620__$1 = state_10620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10620__$1,(2),chan);
} else
{return null;
}
}
});})(c__6216__auto__,a_view,viewpromise,map__10613,map__10613__$1,ctx,views,map__10614,map__10614__$1,args,react_curr))
;return ((function (switch__6201__auto__,c__6216__auto__,a_view,viewpromise,map__10613,map__10613__$1,ctx,views,map__10614,map__10614__$1,args,react_curr){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10625 = [null,null,null,null,null,null,null];(statearr_10625[(0)] = state_machine__6202__auto__);
(statearr_10625[(1)] = (1));
return statearr_10625;
});
var state_machine__6202__auto____1 = (function (state_10620){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10620);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10626){if((e10626 instanceof Object))
{var ex__6205__auto__ = e10626;var statearr_10627_10629 = state_10620;(statearr_10627_10629[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10620);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10630 = state_10620;
state_10620 = G__10630;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10620){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,a_view,viewpromise,map__10613,map__10613__$1,ctx,views,map__10614,map__10614__$1,args,react_curr))
})();var state__6218__auto__ = (function (){var statearr_10628 = f__6217__auto__.call(null);(statearr_10628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,a_view,viewpromise,map__10613,map__10613__$1,ctx,views,map__10614,map__10614__$1,args,react_curr))
);
return c__6216__auto__;
});})(a_view,viewpromise,map__10613,map__10613__$1,ctx,views,map__10614,map__10614__$1,args,react_curr))
;cljs.core.swap_BANG_.call(null,a_view,cljs.core.assoc,new cljs.core.Keyword(null,"promise","promise",1767129287),viewpromise);
ResolvePromise.call(null,tool.react.view_ch.call(null,ctx,react_curr,tool.react.model_ch.call(null,ctx,react_curr,args)));
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),react_curr], null),a_view);
});
tool.react.CloseView = (function CloseView(p__10631,p__10632){var map__10636 = p__10631;var map__10636__$1 = ((cljs.core.seq_QMARK_.call(null,map__10636))?cljs.core.apply.call(null,cljs.core.hash_map,map__10636):map__10636);var ctx = map__10636__$1;var views = cljs.core.get.call(null,map__10636__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__10636__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__10637 = p__10632;var map__10637__$1 = ((cljs.core.seq_QMARK_.call(null,map__10637))?cljs.core.apply.call(null,cljs.core.hash_map,map__10637):map__10637);var args = map__10637__$1;var react_curr = cljs.core.get.call(null,map__10637__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));if(cljs.core.some_QMARK_.call(null,react_curr.call(null,views)))
{var map__10638 = cljs.core.deref.call(null,react_curr.call(null,views));var map__10638__$1 = ((cljs.core.seq_QMARK_.call(null,map__10638))?cljs.core.apply.call(null,cljs.core.hash_map,map__10638):map__10638);var promise = cljs.core.get.call(null,map__10638__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));var view = cljs.core.get.call(null,map__10638__$1,new cljs.core.Keyword(null,"view","view",1247994814));if(cljs.core.some_QMARK_.call(null,view))
{tool.react.AnimateClose.call(null,ctx,react_curr,view);
} else
{promise.reject("CloseView");
}
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,react_curr);
} else
{return ctx;
}
});
tool.react.ChangeView = (function ChangeView(p__10639,p__10640){var map__10643 = p__10639;var map__10643__$1 = ((cljs.core.seq_QMARK_.call(null,map__10643))?cljs.core.apply.call(null,cljs.core.hash_map,map__10643):map__10643);var ctx = map__10643__$1;var views = cljs.core.get.call(null,map__10643__$1,new cljs.core.Keyword(null,"views","views",1450155487));var container = cljs.core.get.call(null,map__10643__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__10644 = p__10640;var map__10644__$1 = ((cljs.core.seq_QMARK_.call(null,map__10644))?cljs.core.apply.call(null,cljs.core.hash_map,map__10644):map__10644);var args = map__10644__$1;var react_curr = cljs.core.get.call(null,map__10644__$1,new cljs.core.Keyword(null,"react-curr","react-curr",984299478));var closeAll = ((function (map__10643,map__10643__$1,ctx,views,container,map__10644,map__10644__$1,args,react_curr){
return (function (ctx__$1){return cljs.core.reduce.call(null,((function (map__10643,map__10643__$1,ctx,views,container,map__10644,map__10644__$1,args,react_curr){
return (function (ctx__$2,key){return tool.react.CloseView.call(null,ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-curr","react-curr",984299478),key], null));
});})(map__10643,map__10643__$1,ctx,views,container,map__10644,map__10644__$1,args,react_curr))
,ctx__$1,cljs.core.keys.call(null,views));
});})(map__10643,map__10643__$1,ctx,views,container,map__10644,map__10644__$1,args,react_curr))
;var thenOpen = ((function (closeAll,map__10643,map__10643__$1,ctx,views,container,map__10644,map__10644__$1,args,react_curr){
return (function (ctx__$1){return tool.react.OpenView.call(null,ctx__$1,args);
});})(closeAll,map__10643,map__10643__$1,ctx,views,container,map__10644,map__10644__$1,args,react_curr))
;return thenOpen.call(null,closeAll.call(null,ctx));
});
tool.react.React = (function React(route,ctx,p__10645){var vec__10648 = p__10645;var key = cljs.core.nth.call(null,vec__10648,(0),null);var whichRoute = cljs.core.nth.call(null,vec__10648,(1),null);var args = cljs.core.nth.call(null,vec__10648,(2),null);var vec__10649 = whichRoute.call(null,key.call(null,route));var curr = cljs.core.nth.call(null,vec__10649,(0),null);var Operation = cljs.core.nth.call(null,vec__10649,(1),null);return Operation.call(null,ctx,cljs.core.merge.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-prev","react-prev",-1532545102),key,new cljs.core.Keyword(null,"react-curr","react-curr",984299478),curr], null)));
});
tool.react.OnReact = cljs.core.async.chan.call(null);
/**
* @param {...*} var_args
*/
tool.react.async_when = (function() { 
var async_when__delegate = function (chans){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_10696){var state_val_10697 = (state_10696[(1)]);if((state_val_10697 === (5)))
{var inst_10694 = (state_10696[(2)]);var state_10696__$1 = state_10696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10696__$1,inst_10694);
} else
{if((state_val_10697 === (4)))
{var inst_10686 = (state_10696[(7)]);var inst_10692 = cljs.core.map.call(null,cljs.core.second,inst_10686);var state_10696__$1 = state_10696;var statearr_10698_10712 = state_10696__$1;(statearr_10698_10712[(2)] = inst_10692);
(statearr_10698_10712[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10697 === (3)))
{var inst_10686 = (state_10696[(7)]);var inst_10682 = (state_10696[(8)]);var inst_10689 = cljs.core.filter.call(null,inst_10682,inst_10686);var inst_10690 = cljs.core.first.call(null,inst_10689);var state_10696__$1 = state_10696;var statearr_10699_10713 = state_10696__$1;(statearr_10699_10713[(2)] = inst_10690);
(statearr_10699_10713[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10697 === (2)))
{var inst_10686 = (state_10696[(7)]);var inst_10682 = (state_10696[(8)]);var inst_10686__$1 = (state_10696[(2)]);var inst_10687 = cljs.core.some.call(null,inst_10682,inst_10686__$1);var state_10696__$1 = (function (){var statearr_10700 = state_10696;(statearr_10700[(7)] = inst_10686__$1);
return statearr_10700;
})();if(cljs.core.truth_(inst_10687))
{var statearr_10701_10714 = state_10696__$1;(statearr_10701_10714[(1)] = (3));
} else
{var statearr_10702_10715 = state_10696__$1;(statearr_10702_10715[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10697 === (1)))
{var inst_10682 = (state_10696[(8)]);var inst_10682__$1 = (function (){return ((function (inst_10682,state_val_10697,c__6216__auto__){
return (function (p__10681){var vec__10703 = p__10681;var err = cljs.core.nth.call(null,vec__10703,(0),null);var _ = cljs.core.nth.call(null,vec__10703,(1),null);return cljs.core.some_QMARK_.call(null,err);
});
;})(inst_10682,state_val_10697,c__6216__auto__))
})();var inst_10683 = (function (){var HasError = inst_10682__$1;return ((function (HasError,inst_10682,inst_10682__$1,state_val_10697,c__6216__auto__){
return (function() { 
var G__10716__delegate = function (args){return cljs.core.apply.call(null,cljs.core.list,args);
};
var G__10716 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10716__delegate.call(this,args);};
G__10716.cljs$lang$maxFixedArity = 0;
G__10716.cljs$lang$applyTo = (function (arglist__10717){
var args = cljs.core.seq(arglist__10717);
return G__10716__delegate(args);
});
G__10716.cljs$core$IFn$_invoke$arity$variadic = G__10716__delegate;
return G__10716;
})()
;
;})(HasError,inst_10682,inst_10682__$1,state_val_10697,c__6216__auto__))
})();var inst_10684 = cljs.core.apply.call(null,cljs.core.async.when,inst_10683,chans);var state_10696__$1 = (function (){var statearr_10704 = state_10696;(statearr_10704[(8)] = inst_10682__$1);
return statearr_10704;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10696__$1,(2),inst_10684);
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
var state_machine__6202__auto____0 = (function (){var statearr_10708 = [null,null,null,null,null,null,null,null,null];(statearr_10708[(0)] = state_machine__6202__auto__);
(statearr_10708[(1)] = (1));
return statearr_10708;
});
var state_machine__6202__auto____1 = (function (state_10696){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10696);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10709){if((e10709 instanceof Object))
{var ex__6205__auto__ = e10709;var statearr_10710_10718 = state_10696;(statearr_10710_10718[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10719 = state_10696;
state_10696 = G__10719;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10696){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_10711 = f__6217__auto__.call(null);(statearr_10711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10711;
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
async_when.cljs$lang$applyTo = (function (arglist__10720){
var chans = cljs.core.seq(arglist__10720);
return async_when__delegate(chans);
});
async_when.cljs$core$IFn$_invoke$arity$variadic = async_when__delegate;
return async_when;
})()
;
