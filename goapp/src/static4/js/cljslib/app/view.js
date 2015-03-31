// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__14462,key,view){var map__14463 = p__14462;var map__14463__$1 = ((cljs.core.seq_QMARK_.call(null,map__14463))?cljs.core.apply.call(null,cljs.core.hash_map,map__14463):map__14463);var ctx = map__14463__$1;var container = cljs.core.get.call(null,map__14463__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__14464 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__14464.appendTo(container);
G__14464.fadeIn((400));
return G__14464;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__14465,key,view){var map__14466 = p__14465;var map__14466__$1 = ((cljs.core.seq_QMARK_.call(null,map__14466))?cljs.core.apply.call(null,cljs.core.hash_map,map__14466):map__14466);var ctx = map__14466__$1;var container = cljs.core.get.call(null,map__14466__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__14467 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__14467.remove();
return G__14467;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_14626 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_14627 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_14628 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_14628.off("click");
btn_search_14627.off("click");
mc_modelContainer_14626.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_14567){var state_val_14568 = (state_14567[(1)]);if((state_val_14568 === (2)))
{var inst_14549 = (state_14567[(2)]);var inst_14550 = cljs.core.nth.call(null,inst_14549,(0),null);var inst_14551 = cljs.core.nth.call(null,inst_14549,(1),null);var inst_14552 = $("#tmpl_streetsnap_list");var inst_14553 = inst_14552.tmpl(inst_14551,null);var inst_14554 = inst_14553.find("#mc_modelContainer");var inst_14555 = inst_14553.find("#btn_search");var inst_14556 = inst_14553.find("#btn_return");var inst_14557 = (function (){var btn_return = inst_14556;var btn_search = inst_14555;var mc_modelContainer = inst_14554;var elem = inst_14553;var tmpl = inst_14552;var model = inst_14551;var err = inst_14550;var vec__14547 = inst_14549;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14568,c__6216__auto__){
return (function (){var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14568,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14568,c__6216__auto__){
return (function (state_14574){var state_val_14575 = (state_14574[(1)]);if((state_val_14575 === (2)))
{var inst_14572 = (state_14574[(2)]);var state_14574__$1 = state_14574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14574__$1,inst_14572);
} else
{if((state_val_14575 === (1)))
{var inst_14569 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_14570 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14569,null));var state_14574__$1 = state_14574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14574__$1,(2),tool.react.OnReact,inst_14570);
} else
{return null;
}
}
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14568,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14568,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14579 = [null,null,null,null,null,null,null];(statearr_14579[(0)] = state_machine__6202__auto__);
(statearr_14579[(1)] = (1));
return statearr_14579;
});
var state_machine__6202__auto____1 = (function (state_14574){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14574);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14580){if((e14580 instanceof Object))
{var ex__6205__auto__ = e14580;var statearr_14581_14629 = state_14574;(statearr_14581_14629[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14580;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14630 = state_14574;
state_14574 = G__14630;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14574){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14568,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_14582 = f__6217__auto__.call(null);(statearr_14582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_14582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14568,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14568,c__6216__auto__))
})();var inst_14558 = inst_14556.click(inst_14557);var inst_14559 = (function (){var btn_return = inst_14556;var btn_search = inst_14555;var mc_modelContainer = inst_14554;var elem = inst_14553;var tmpl = inst_14552;var model = inst_14551;var err = inst_14550;var vec__14547 = inst_14549;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14568,c__6216__auto__){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14568,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14568,c__6216__auto__){
return (function (state_14591){var state_val_14592 = (state_14591[(1)]);if((state_val_14592 === (2)))
{var inst_14589 = (state_14591[(2)]);var state_14591__$1 = state_14591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14591__$1,inst_14589);
} else
{if((state_val_14592 === (1)))
{var inst_14583 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_14584 = [searchKey];var inst_14585 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14583,inst_14584);var inst_14586 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_14585];var inst_14587 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14586,null));var state_14591__$1 = state_14591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14591__$1,(2),tool.react.OnReact,inst_14587);
} else
{return null;
}
}
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14568,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14568,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14596 = [null,null,null,null,null,null,null];(statearr_14596[(0)] = state_machine__6202__auto__);
(statearr_14596[(1)] = (1));
return statearr_14596;
});
var state_machine__6202__auto____1 = (function (state_14591){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14591);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14597){if((e14597 instanceof Object))
{var ex__6205__auto__ = e14597;var statearr_14598_14631 = state_14591;(statearr_14598_14631[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14591);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14632 = state_14591;
state_14591 = G__14632;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14591){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14568,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_14599 = f__6217__auto__.call(null);(statearr_14599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_14599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14568,c__6216__auto__))
);
return c__6216__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14568,c__6216__auto__))
})();var inst_14560 = inst_14555.click(inst_14559);var inst_14561 = (function (){var btn_return = inst_14556;var btn_search = inst_14555;var mc_modelContainer = inst_14554;var elem = inst_14553;var tmpl = inst_14552;var model = inst_14551;var err = inst_14550;var vec__14547 = inst_14549;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,inst_14559,inst_14560,state_val_14568,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,inst_14559,inst_14560,state_val_14568,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,inst_14559,inst_14560,state_val_14568,c__6216__auto__){
return (function (state_14609){var state_val_14610 = (state_14609[(1)]);if((state_val_14610 === (2)))
{var inst_14607 = (state_14609[(2)]);var state_14609__$1 = state_14609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14609__$1,inst_14607);
} else
{if((state_val_14610 === (1)))
{var inst_14600 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14601 = that.id;var inst_14602 = [inst_14601];var inst_14603 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14600,inst_14602);var inst_14604 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_14603];var inst_14605 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14604,null));var state_14609__$1 = state_14609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14609__$1,(2),tool.react.OnReact,inst_14605);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,inst_14559,inst_14560,state_val_14568,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,inst_14559,inst_14560,state_val_14568,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14614 = [null,null,null,null,null,null,null];(statearr_14614[(0)] = state_machine__6202__auto__);
(statearr_14614[(1)] = (1));
return statearr_14614;
});
var state_machine__6202__auto____1 = (function (state_14609){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14609);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14615){if((e14615 instanceof Object))
{var ex__6205__auto__ = e14615;var statearr_14616_14633 = state_14609;(statearr_14616_14633[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14609);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14634 = state_14609;
state_14609 = G__14634;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14609){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,inst_14559,inst_14560,state_val_14568,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_14617 = f__6217__auto__.call(null);(statearr_14617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_14617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,inst_14559,inst_14560,state_val_14568,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14547,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,inst_14559,inst_14560,state_val_14568,c__6216__auto__))
})();var inst_14562 = inst_14554.delegate("div[modelFrame]","click",inst_14561);var inst_14563 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_14564 = [inst_14553];var inst_14565 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14563,inst_14564);var state_14567__$1 = (function (){var statearr_14618 = state_14567;(statearr_14618[(7)] = inst_14562);
(statearr_14618[(8)] = inst_14560);
(statearr_14618[(9)] = inst_14558);
return statearr_14618;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14567__$1,inst_14565);
} else
{if((state_val_14568 === (1)))
{var state_14567__$1 = state_14567;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14567__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14622 = [null,null,null,null,null,null,null,null,null,null];(statearr_14622[(0)] = state_machine__6202__auto__);
(statearr_14622[(1)] = (1));
return statearr_14622;
});
var state_machine__6202__auto____1 = (function (state_14567){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14567);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14623){if((e14623 instanceof Object))
{var ex__6205__auto__ = e14623;var statearr_14624_14635 = state_14567;(statearr_14624_14635[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14567);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14636 = state_14567;
state_14567 = G__14636;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14567){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_14625 = f__6217__auto__.call(null);(statearr_14625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__14702){var map__14703 = p__14702;var map__14703__$1 = ((cljs.core.seq_QMARK_.call(null,map__14703))?cljs.core.apply.call(null,cljs.core.hash_map,map__14703):map__14703);var view = map__14703__$1;var elem = cljs.core.get.call(null,map__14703__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_14767 = elem.find("#mc_historyContainer");mc_modelContainer_14767.undelegate("img","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_14721){var state_val_14722 = (state_14721[(1)]);if((state_val_14722 === (2)))
{var inst_14706 = (state_14721[(2)]);var inst_14707 = cljs.core.nth.call(null,inst_14706,(0),null);var inst_14708 = cljs.core.nth.call(null,inst_14706,(1),null);var inst_14709 = $("#tmpl_streetsnap");var inst_14710 = inst_14709.tmpl(inst_14708,null);var inst_14711 = inst_14710.find("#mc_historyContainer");var inst_14712 = inst_14710.find("#mc_sideContainer");var inst_14713 = (function (){var mc_sideContainer = inst_14712;var mc_historyContainer = inst_14711;var elem = inst_14710;var tmpl = inst_14709;var model = inst_14708;var err = inst_14707;var vec__14704 = inst_14706;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,state_val_14722,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,state_val_14722,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,state_val_14722,c__6216__auto__){
return (function (state_14732){var state_val_14733 = (state_14732[(1)]);if((state_val_14733 === (2)))
{var inst_14730 = (state_14732[(2)]);var state_14732__$1 = state_14732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14732__$1,inst_14730);
} else
{if((state_val_14733 === (1)))
{var inst_14723 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_14724 = that.id;var inst_14725 = [inst_14724];var inst_14726 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14723,inst_14725);var inst_14727 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_14726];var inst_14728 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14727,null));var state_14732__$1 = state_14732;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14732__$1,(2),tool.react.OnReact,inst_14728);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,state_val_14722,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,state_val_14722,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14737 = [null,null,null,null,null,null,null];(statearr_14737[(0)] = state_machine__6202__auto__);
(statearr_14737[(1)] = (1));
return statearr_14737;
});
var state_machine__6202__auto____1 = (function (state_14732){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14732);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14738){if((e14738 instanceof Object))
{var ex__6205__auto__ = e14738;var statearr_14739_14768 = state_14732;(statearr_14739_14768[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14732);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14769 = state_14732;
state_14732 = G__14769;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14732){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,state_val_14722,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_14740 = f__6217__auto__.call(null);(statearr_14740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_14740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,state_val_14722,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,state_val_14722,c__6216__auto__))
})();var inst_14714 = inst_14712.delegate("img","click",inst_14713);var inst_14715 = (function (){var mc_sideContainer = inst_14712;var mc_historyContainer = inst_14711;var elem = inst_14710;var tmpl = inst_14709;var model = inst_14708;var err = inst_14707;var vec__14704 = inst_14706;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,state_val_14722,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,state_val_14722,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,state_val_14722,c__6216__auto__){
return (function (state_14750){var state_val_14751 = (state_14750[(1)]);if((state_val_14751 === (2)))
{var inst_14748 = (state_14750[(2)]);var state_14750__$1 = state_14750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14750__$1,inst_14748);
} else
{if((state_val_14751 === (1)))
{var inst_14741 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14742 = that.id;var inst_14743 = [inst_14742];var inst_14744 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14741,inst_14743);var inst_14745 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_14744];var inst_14746 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14745,null));var state_14750__$1 = state_14750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14750__$1,(2),tool.react.OnReact,inst_14746);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,state_val_14722,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,state_val_14722,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14755 = [null,null,null,null,null,null,null];(statearr_14755[(0)] = state_machine__6202__auto__);
(statearr_14755[(1)] = (1));
return statearr_14755;
});
var state_machine__6202__auto____1 = (function (state_14750){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14750);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14756){if((e14756 instanceof Object))
{var ex__6205__auto__ = e14756;var statearr_14757_14770 = state_14750;(statearr_14757_14770[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14771 = state_14750;
state_14750 = G__14771;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14750){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,state_val_14722,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_14758 = f__6217__auto__.call(null);(statearr_14758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_14758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,state_val_14722,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14704,inst_14706,inst_14707,inst_14708,inst_14709,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,state_val_14722,c__6216__auto__))
})();var inst_14716 = inst_14711.delegate("img","click",inst_14715);var inst_14717 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_14718 = [inst_14710];var inst_14719 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14717,inst_14718);var state_14721__$1 = (function (){var statearr_14759 = state_14721;(statearr_14759[(7)] = inst_14714);
(statearr_14759[(8)] = inst_14716);
return statearr_14759;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14721__$1,inst_14719);
} else
{if((state_val_14722 === (1)))
{var state_14721__$1 = state_14721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14721__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14763 = [null,null,null,null,null,null,null,null,null];(statearr_14763[(0)] = state_machine__6202__auto__);
(statearr_14763[(1)] = (1));
return statearr_14763;
});
var state_machine__6202__auto____1 = (function (state_14721){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14721);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14764){if((e14764 instanceof Object))
{var ex__6205__auto__ = e14764;var statearr_14765_14772 = state_14721;(statearr_14765_14772[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14721);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14773 = state_14721;
state_14721 = G__14773;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14721){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_14766 = f__6217__auto__.call(null);(statearr_14766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_14782){var state_val_14783 = (state_14782[(1)]);if((state_val_14783 === (2)))
{var inst_14775 = (state_14782[(2)]);var inst_14776 = $("#tmpl_home");var inst_14777 = inst_14776.tmpl(inst_14775,null);var inst_14778 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_14779 = [inst_14777];var inst_14780 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14778,inst_14779);var state_14782__$1 = state_14782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14782__$1,inst_14780);
} else
{if((state_val_14783 === (1)))
{var state_14782__$1 = state_14782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14782__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14787 = [null,null,null,null,null,null,null];(statearr_14787[(0)] = state_machine__6202__auto__);
(statearr_14787[(1)] = (1));
return statearr_14787;
});
var state_machine__6202__auto____1 = (function (state_14782){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14782);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14788){if((e14788 instanceof Object))
{var ex__6205__auto__ = e14788;var statearr_14789_14791 = state_14782;(statearr_14789_14791[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14782);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14792 = state_14782;
state_14782 = G__14792;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14782){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_14790 = f__6217__auto__.call(null);(statearr_14790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__14793){var map__14794 = p__14793;var map__14794__$1 = ((cljs.core.seq_QMARK_.call(null,map__14794))?cljs.core.apply.call(null,cljs.core.hash_map,map__14794):map__14794);var view = map__14794__$1;var elem = cljs.core.get.call(null,map__14794__$1,new cljs.core.Keyword(null,"elem","elem",618631056));elem.off("click");
return tool.react.AnimateClose.call(null,cljs.core.name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
