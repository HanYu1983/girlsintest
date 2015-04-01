// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__14456,key,view){var map__14457 = p__14456;var map__14457__$1 = ((cljs.core.seq_QMARK_.call(null,map__14457))?cljs.core.apply.call(null,cljs.core.hash_map,map__14457):map__14457);var ctx = map__14457__$1;var container = cljs.core.get.call(null,map__14457__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__14458 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__14458.appendTo(container);
G__14458.fadeIn((400));
return G__14458;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__14459,key,view){var map__14460 = p__14459;var map__14460__$1 = ((cljs.core.seq_QMARK_.call(null,map__14460))?cljs.core.apply.call(null,cljs.core.hash_map,map__14460):map__14460);var ctx = map__14460__$1;var container = cljs.core.get.call(null,map__14460__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__14461 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__14461.remove();
return G__14461;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_14624 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_14625 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_14626 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_14626.off("click");
btn_search_14625.off("click");
mc_modelContainer_14624.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__14543,key,modelChan){var map__14544 = p__14543;var map__14544__$1 = ((cljs.core.seq_QMARK_.call(null,map__14544))?cljs.core.apply.call(null,cljs.core.hash_map,map__14544):map__14544);var ctx = map__14544__$1;var tmpl_item = cljs.core.get.call(null,map__14544__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (state_14565){var state_val_14566 = (state_14565[(1)]);if((state_val_14566 === (2)))
{var inst_14547 = (state_14565[(2)]);var inst_14548 = cljs.core.nth.call(null,inst_14547,(0),null);var inst_14549 = cljs.core.nth.call(null,inst_14547,(1),null);var inst_14550 = $("#tmpl_streetsnap_list");var inst_14551 = inst_14550.tmpl(inst_14549,tmpl_item);var inst_14552 = inst_14551.find("#mc_modelContainer");var inst_14553 = inst_14551.find("#btn_search");var inst_14554 = inst_14551.find("#btn_return");var inst_14555 = (function (){var btn_return = inst_14554;var btn_search = inst_14553;var mc_modelContainer = inst_14552;var elem = inst_14551;var tmpl = inst_14550;var model = inst_14549;var err = inst_14548;var vec__14545 = inst_14547;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (){var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (state_14572){var state_val_14573 = (state_14572[(1)]);if((state_val_14573 === (2)))
{var inst_14570 = (state_14572[(2)]);var state_14572__$1 = state_14572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14572__$1,inst_14570);
} else
{if((state_val_14573 === (1)))
{var inst_14567 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_14568 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14567,null));var state_14572__$1 = state_14572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14572__$1,(2),tool.react.OnReact,inst_14568);
} else
{return null;
}
}
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14577 = [null,null,null,null,null,null,null];(statearr_14577[(0)] = state_machine__6202__auto__);
(statearr_14577[(1)] = (1));
return statearr_14577;
});
var state_machine__6202__auto____1 = (function (state_14572){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14572);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14578){if((e14578 instanceof Object))
{var ex__6205__auto__ = e14578;var statearr_14579_14627 = state_14572;(statearr_14579_14627[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14628 = state_14572;
state_14572 = G__14628;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14572){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_14580 = f__6217__auto__.call(null);(statearr_14580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_14580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
})();var inst_14556 = inst_14554.click(inst_14555);var inst_14557 = (function (){var btn_return = inst_14554;var btn_search = inst_14553;var mc_modelContainer = inst_14552;var elem = inst_14551;var tmpl = inst_14550;var model = inst_14549;var err = inst_14548;var vec__14545 = inst_14547;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (state_14589){var state_val_14590 = (state_14589[(1)]);if((state_val_14590 === (2)))
{var inst_14587 = (state_14589[(2)]);var state_14589__$1 = state_14589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14589__$1,inst_14587);
} else
{if((state_val_14590 === (1)))
{var inst_14581 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_14582 = [searchKey];var inst_14583 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14581,inst_14582);var inst_14584 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_14583];var inst_14585 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14584,null));var state_14589__$1 = state_14589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14589__$1,(2),tool.react.OnReact,inst_14585);
} else
{return null;
}
}
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14594 = [null,null,null,null,null,null,null];(statearr_14594[(0)] = state_machine__6202__auto__);
(statearr_14594[(1)] = (1));
return statearr_14594;
});
var state_machine__6202__auto____1 = (function (state_14589){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14589);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14595){if((e14595 instanceof Object))
{var ex__6205__auto__ = e14595;var statearr_14596_14629 = state_14589;(statearr_14596_14629[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14595;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14630 = state_14589;
state_14589 = G__14630;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14589){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_14597 = f__6217__auto__.call(null);(statearr_14597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_14597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
})();var inst_14558 = inst_14553.click(inst_14557);var inst_14559 = (function (){var btn_return = inst_14554;var btn_search = inst_14553;var mc_modelContainer = inst_14552;var elem = inst_14551;var tmpl = inst_14550;var model = inst_14549;var err = inst_14548;var vec__14545 = inst_14547;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function (state_14607){var state_val_14608 = (state_14607[(1)]);if((state_val_14608 === (2)))
{var inst_14605 = (state_14607[(2)]);var state_14607__$1 = state_14607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14607__$1,inst_14605);
} else
{if((state_val_14608 === (1)))
{var inst_14598 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14599 = that.id;var inst_14600 = [inst_14599];var inst_14601 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14598,inst_14600);var inst_14602 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_14601];var inst_14603 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14602,null));var state_14607__$1 = state_14607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14607__$1,(2),tool.react.OnReact,inst_14603);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14612 = [null,null,null,null,null,null,null];(statearr_14612[(0)] = state_machine__6202__auto__);
(statearr_14612[(1)] = (1));
return statearr_14612;
});
var state_machine__6202__auto____1 = (function (state_14607){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14607);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14613){if((e14613 instanceof Object))
{var ex__6205__auto__ = e14613;var statearr_14614_14631 = state_14607;(statearr_14614_14631[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14607);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14632 = state_14607;
state_14607 = G__14632;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14607){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_14615 = f__6217__auto__.call(null);(statearr_14615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_14615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14545,inst_14547,inst_14548,inst_14549,inst_14550,inst_14551,inst_14552,inst_14553,inst_14554,inst_14555,inst_14556,inst_14557,inst_14558,state_val_14566,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
})();var inst_14560 = inst_14552.delegate("div[modelFrame]","click",inst_14559);var inst_14561 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_14562 = [inst_14551];var inst_14563 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14561,inst_14562);var state_14565__$1 = (function (){var statearr_14616 = state_14565;(statearr_14616[(7)] = inst_14560);
(statearr_14616[(8)] = inst_14558);
(statearr_14616[(9)] = inst_14556);
return statearr_14616;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14565__$1,inst_14563);
} else
{if((state_val_14566 === (1)))
{var state_14565__$1 = state_14565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14565__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14620 = [null,null,null,null,null,null,null,null,null,null];(statearr_14620[(0)] = state_machine__6202__auto__);
(statearr_14620[(1)] = (1));
return statearr_14620;
});
var state_machine__6202__auto____1 = (function (state_14565){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14565);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14621){if((e14621 instanceof Object))
{var ex__6205__auto__ = e14621;var statearr_14622_14633 = state_14565;(statearr_14622_14633[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14565);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14634 = state_14565;
state_14565 = G__14634;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14565){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_14623 = f__6217__auto__.call(null);(statearr_14623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,map__14544,map__14544__$1,ctx,tmpl_item))
);
return c__6216__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__14719){var map__14720 = p__14719;var map__14720__$1 = ((cljs.core.seq_QMARK_.call(null,map__14720))?cljs.core.apply.call(null,cljs.core.hash_map,map__14720):map__14720);var view = map__14720__$1;var elem = cljs.core.get.call(null,map__14720__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_14803 = elem.find("#mc_historyContainer");mc_modelContainer_14803.undelegate("img","click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__14721){var map__14722 = p__14721;var map__14722__$1 = ((cljs.core.seq_QMARK_.call(null,map__14722))?cljs.core.apply.call(null,cljs.core.hash_map,map__14722):map__14722);var view = map__14722__$1;var elem = cljs.core.get.call(null,map__14722__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_14804 = elem.find("#mc_3dmask");var c__6216__auto___14805 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___14805,mc_3dmask_14804,map__14722,map__14722__$1,view,elem){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___14805,mc_3dmask_14804,map__14722,map__14722__$1,view,elem){
return (function (state_14728){var state_val_14729 = (state_14728[(1)]);if((state_val_14729 === (2)))
{var inst_14725 = (state_14728[(2)]);var inst_14726 = mc_3dmask_14804.fadeOut((400));var state_14728__$1 = (function (){var statearr_14730 = state_14728;(statearr_14730[(7)] = inst_14725);
return statearr_14730;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14728__$1,inst_14726);
} else
{if((state_val_14729 === (1)))
{var inst_14723 = cljs.core.async.timeout.call(null,(5000));var state_14728__$1 = state_14728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14728__$1,(2),inst_14723);
} else
{return null;
}
}
});})(c__6216__auto___14805,mc_3dmask_14804,map__14722,map__14722__$1,view,elem))
;return ((function (switch__6201__auto__,c__6216__auto___14805,mc_3dmask_14804,map__14722,map__14722__$1,view,elem){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14734 = [null,null,null,null,null,null,null,null];(statearr_14734[(0)] = state_machine__6202__auto__);
(statearr_14734[(1)] = (1));
return statearr_14734;
});
var state_machine__6202__auto____1 = (function (state_14728){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14728);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14735){if((e14735 instanceof Object))
{var ex__6205__auto__ = e14735;var statearr_14736_14806 = state_14728;(statearr_14736_14806[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14735;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14807 = state_14728;
state_14728 = G__14807;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14728){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___14805,mc_3dmask_14804,map__14722,map__14722__$1,view,elem))
})();var state__6218__auto__ = (function (){var statearr_14737 = f__6217__auto__.call(null);(statearr_14737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___14805);
return statearr_14737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___14805,mc_3dmask_14804,map__14722,map__14722__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__14738,key,modelChan){var map__14739 = p__14738;var map__14739__$1 = ((cljs.core.seq_QMARK_.call(null,map__14739))?cljs.core.apply.call(null,cljs.core.hash_map,map__14739):map__14739);var ctx = map__14739__$1;var tmpl_item = cljs.core.get.call(null,map__14739__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function (state_14757){var state_val_14758 = (state_14757[(1)]);if((state_val_14758 === (2)))
{var inst_14742 = (state_14757[(2)]);var inst_14743 = cljs.core.nth.call(null,inst_14742,(0),null);var inst_14744 = cljs.core.nth.call(null,inst_14742,(1),null);var inst_14745 = $("#tmpl_streetsnap");var inst_14746 = inst_14745.tmpl(inst_14744,tmpl_item);var inst_14747 = inst_14746.find("#mc_historyContainer");var inst_14748 = inst_14746.find("#mc_sideContainer");var inst_14749 = (function (){var mc_sideContainer = inst_14748;var mc_historyContainer = inst_14747;var elem = inst_14746;var tmpl = inst_14745;var model = inst_14744;var err = inst_14743;var vec__14740 = inst_14742;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function (state_14768){var state_val_14769 = (state_14768[(1)]);if((state_val_14769 === (2)))
{var inst_14766 = (state_14768[(2)]);var state_14768__$1 = state_14768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14768__$1,inst_14766);
} else
{if((state_val_14769 === (1)))
{var inst_14759 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_14760 = that.id;var inst_14761 = [inst_14760];var inst_14762 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14759,inst_14761);var inst_14763 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_14762];var inst_14764 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14763,null));var state_14768__$1 = state_14768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14768__$1,(2),tool.react.OnReact,inst_14764);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14773 = [null,null,null,null,null,null,null];(statearr_14773[(0)] = state_machine__6202__auto__);
(statearr_14773[(1)] = (1));
return statearr_14773;
});
var state_machine__6202__auto____1 = (function (state_14768){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14768);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14774){if((e14774 instanceof Object))
{var ex__6205__auto__ = e14774;var statearr_14775_14808 = state_14768;(statearr_14775_14808[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14809 = state_14768;
state_14768 = G__14809;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14768){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_14776 = f__6217__auto__.call(null);(statearr_14776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_14776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
})();var inst_14750 = inst_14748.delegate("img","click",inst_14749);var inst_14751 = (function (){var mc_sideContainer = inst_14748;var mc_historyContainer = inst_14747;var elem = inst_14746;var tmpl = inst_14745;var model = inst_14744;var err = inst_14743;var vec__14740 = inst_14742;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function (state_14786){var state_val_14787 = (state_14786[(1)]);if((state_val_14787 === (2)))
{var inst_14784 = (state_14786[(2)]);var state_14786__$1 = state_14786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14786__$1,inst_14784);
} else
{if((state_val_14787 === (1)))
{var inst_14777 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14778 = that.id;var inst_14779 = [inst_14778];var inst_14780 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14777,inst_14779);var inst_14781 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_14780];var inst_14782 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14781,null));var state_14786__$1 = state_14786;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14786__$1,(2),tool.react.OnReact,inst_14782);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14791 = [null,null,null,null,null,null,null];(statearr_14791[(0)] = state_machine__6202__auto__);
(statearr_14791[(1)] = (1));
return statearr_14791;
});
var state_machine__6202__auto____1 = (function (state_14786){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14786);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14792){if((e14792 instanceof Object))
{var ex__6205__auto__ = e14792;var statearr_14793_14810 = state_14786;(statearr_14793_14810[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14786);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14792;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14811 = state_14786;
state_14786 = G__14811;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14786){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_14794 = f__6217__auto__.call(null);(statearr_14794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_14794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__14740,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,state_val_14758,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
})();var inst_14752 = inst_14747.delegate("img","click",inst_14751);var inst_14753 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_14754 = [inst_14746];var inst_14755 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14753,inst_14754);var state_14757__$1 = (function (){var statearr_14795 = state_14757;(statearr_14795[(7)] = inst_14750);
(statearr_14795[(8)] = inst_14752);
return statearr_14795;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14757__$1,inst_14755);
} else
{if((state_val_14758 === (1)))
{var state_14757__$1 = state_14757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14757__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14799 = [null,null,null,null,null,null,null,null,null];(statearr_14799[(0)] = state_machine__6202__auto__);
(statearr_14799[(1)] = (1));
return statearr_14799;
});
var state_machine__6202__auto____1 = (function (state_14757){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14757);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14800){if((e14800 instanceof Object))
{var ex__6205__auto__ = e14800;var statearr_14801_14812 = state_14757;(statearr_14801_14812[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14813 = state_14757;
state_14757 = G__14813;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14757){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_14802 = f__6217__auto__.call(null);(statearr_14802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,map__14739,map__14739__$1,ctx,tmpl_item))
);
return c__6216__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__14814){var map__14815 = p__14814;var map__14815__$1 = ((cljs.core.seq_QMARK_.call(null,map__14815))?cljs.core.apply.call(null,cljs.core.hash_map,map__14815):map__14815);var view = map__14815__$1;var elem = cljs.core.get.call(null,map__14815__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_14831 = elem.find("#mc_3dmask");var c__6216__auto___14832 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___14832,mc_3dmask_14831,map__14815,map__14815__$1,view,elem){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___14832,mc_3dmask_14831,map__14815,map__14815__$1,view,elem){
return (function (state_14821){var state_val_14822 = (state_14821[(1)]);if((state_val_14822 === (2)))
{var inst_14818 = (state_14821[(2)]);var inst_14819 = mc_3dmask_14831.fadeOut((400));var state_14821__$1 = (function (){var statearr_14823 = state_14821;(statearr_14823[(7)] = inst_14818);
return statearr_14823;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14821__$1,inst_14819);
} else
{if((state_val_14822 === (1)))
{var inst_14816 = cljs.core.async.timeout.call(null,(5000));var state_14821__$1 = state_14821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14821__$1,(2),inst_14816);
} else
{return null;
}
}
});})(c__6216__auto___14832,mc_3dmask_14831,map__14815,map__14815__$1,view,elem))
;return ((function (switch__6201__auto__,c__6216__auto___14832,mc_3dmask_14831,map__14815,map__14815__$1,view,elem){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14827 = [null,null,null,null,null,null,null,null];(statearr_14827[(0)] = state_machine__6202__auto__);
(statearr_14827[(1)] = (1));
return statearr_14827;
});
var state_machine__6202__auto____1 = (function (state_14821){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14821);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14828){if((e14828 instanceof Object))
{var ex__6205__auto__ = e14828;var statearr_14829_14833 = state_14821;(statearr_14829_14833[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14821);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14834 = state_14821;
state_14821 = G__14834;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14821){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___14832,mc_3dmask_14831,map__14815,map__14815__$1,view,elem))
})();var state__6218__auto__ = (function (){var statearr_14830 = f__6217__auto__.call(null);(statearr_14830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___14832);
return statearr_14830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___14832,mc_3dmask_14831,map__14815,map__14815__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__14835,key,modelChan){var map__14836 = p__14835;var map__14836__$1 = ((cljs.core.seq_QMARK_.call(null,map__14836))?cljs.core.apply.call(null,cljs.core.hash_map,map__14836):map__14836);var ctx = map__14836__$1;var tmpl_item = cljs.core.get.call(null,map__14836__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,map__14836,map__14836__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,map__14836,map__14836__$1,ctx,tmpl_item){
return (function (state_14848){var state_val_14849 = (state_14848[(1)]);if((state_val_14849 === (2)))
{var inst_14839 = (state_14848[(2)]);var inst_14840 = cljs.core.nth.call(null,inst_14839,(0),null);var inst_14841 = cljs.core.nth.call(null,inst_14839,(1),null);var inst_14842 = $("#tmpl_home");var inst_14843 = inst_14842.tmpl(inst_14841,tmpl_item);var inst_14844 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_14845 = [inst_14843];var inst_14846 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14844,inst_14845);var state_14848__$1 = (function (){var statearr_14850 = state_14848;(statearr_14850[(7)] = inst_14840);
return statearr_14850;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14848__$1,inst_14846);
} else
{if((state_val_14849 === (1)))
{var state_14848__$1 = state_14848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14848__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__,map__14836,map__14836__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto__,map__14836,map__14836__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14854 = [null,null,null,null,null,null,null,null];(statearr_14854[(0)] = state_machine__6202__auto__);
(statearr_14854[(1)] = (1));
return statearr_14854;
});
var state_machine__6202__auto____1 = (function (state_14848){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14848);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14855){if((e14855 instanceof Object))
{var ex__6205__auto__ = e14855;var statearr_14856_14858 = state_14848;(statearr_14856_14858[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14859 = state_14848;
state_14848 = G__14859;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14848){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,map__14836,map__14836__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_14857 = f__6217__auto__.call(null);(statearr_14857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,map__14836,map__14836__$1,ctx,tmpl_item))
);
return c__6216__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
