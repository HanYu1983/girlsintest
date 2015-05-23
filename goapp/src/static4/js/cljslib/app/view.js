// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26529,key,view){var map__26530 = p__26529;var map__26530__$1 = ((cljs.core.seq_QMARK_.call(null,map__26530))?cljs.core.apply.call(null,cljs.core.hash_map,map__26530):map__26530);var ctx = map__26530__$1;var container = cljs.core.get.call(null,map__26530__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var c__6192__auto___26550 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___26550,map__26530,map__26530__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___26550,map__26530,map__26530__$1,ctx,container){
return (function (state_26540){var state_val_26541 = (state_26540[(1)]);if((state_val_26541 === (2)))
{var inst_26538 = (state_26540[(2)]);var state_26540__$1 = state_26540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26540__$1,inst_26538);
} else
{if((state_val_26541 === (1)))
{var inst_26531 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094)];var inst_26532 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_26533 = [inst_26532];var inst_26534 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26531,inst_26533);var inst_26535 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_26534];var inst_26536 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26535,null));var state_26540__$1 = state_26540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26540__$1,(2),tool.react.OnReact,inst_26536);
} else
{return null;
}
}
});})(c__6192__auto___26550,map__26530,map__26530__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto___26550,map__26530,map__26530__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26545 = [null,null,null,null,null,null,null];(statearr_26545[(0)] = state_machine__6178__auto__);
(statearr_26545[(1)] = (1));
return statearr_26545;
});
var state_machine__6178__auto____1 = (function (state_26540){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26546){if((e26546 instanceof Object))
{var ex__6181__auto__ = e26546;var statearr_26547_26551 = state_26540;(statearr_26547_26551[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26552 = state_26540;
state_26540 = G__26552;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26540){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___26550,map__26530,map__26530__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_26548 = f__6193__auto__.call(null);(statearr_26548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___26550);
return statearr_26548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___26550,map__26530,map__26530__$1,ctx,container))
);
var G__26549 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__26549.appendTo(container);
G__26549.fadeIn((400));
return G__26549;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26553,key,view){var map__26554 = p__26553;var map__26554__$1 = ((cljs.core.seq_QMARK_.call(null,map__26554))?cljs.core.apply.call(null,cljs.core.hash_map,map__26554):map__26554);var ctx = map__26554__$1;var container = cljs.core.get.call(null,map__26554__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__26555 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__26555.remove();
return G__26555;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_26718 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_26719 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_26720 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_26720.off("click");
btn_search_26719.off("click");
mc_modelContainer_26718.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__26637,key,modelChan){var map__26638 = p__26637;var map__26638__$1 = ((cljs.core.seq_QMARK_.call(null,map__26638))?cljs.core.apply.call(null,cljs.core.hash_map,map__26638):map__26638);var ctx = map__26638__$1;var tmpl_item = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (state_26659){var state_val_26660 = (state_26659[(1)]);if((state_val_26660 === (2)))
{var inst_26641 = (state_26659[(2)]);var inst_26642 = cljs.core.nth.call(null,inst_26641,(0),null);var inst_26643 = cljs.core.nth.call(null,inst_26641,(1),null);var inst_26644 = $("#tmpl_streetsnap_list");var inst_26645 = inst_26644.tmpl(inst_26643,tmpl_item);var inst_26646 = inst_26645.find("#mc_modelContainer");var inst_26647 = inst_26645.find("#btn_search");var inst_26648 = inst_26645.find("#btn_return");var inst_26649 = (function (){var btn_return = inst_26648;var btn_search = inst_26647;var mc_modelContainer = inst_26646;var elem = inst_26645;var tmpl = inst_26644;var model = inst_26643;var err = inst_26642;var vec__26639 = inst_26641;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (state_26666){var state_val_26667 = (state_26666[(1)]);if((state_val_26667 === (2)))
{var inst_26664 = (state_26666[(2)]);var state_26666__$1 = state_26666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26666__$1,inst_26664);
} else
{if((state_val_26667 === (1)))
{var inst_26661 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_26662 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26661,null));var state_26666__$1 = state_26666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26666__$1,(2),tool.react.OnReact,inst_26662);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26671 = [null,null,null,null,null,null,null];(statearr_26671[(0)] = state_machine__6178__auto__);
(statearr_26671[(1)] = (1));
return statearr_26671;
});
var state_machine__6178__auto____1 = (function (state_26666){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26666);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26672){if((e26672 instanceof Object))
{var ex__6181__auto__ = e26672;var statearr_26673_26721 = state_26666;(statearr_26673_26721[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26722 = state_26666;
state_26666 = G__26722;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26666){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_26674 = f__6193__auto__.call(null);(statearr_26674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_26674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
})();var inst_26650 = inst_26648.click(inst_26649);var inst_26651 = (function (){var btn_return = inst_26648;var btn_search = inst_26647;var mc_modelContainer = inst_26646;var elem = inst_26645;var tmpl = inst_26644;var model = inst_26643;var err = inst_26642;var vec__26639 = inst_26641;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (state_26683){var state_val_26684 = (state_26683[(1)]);if((state_val_26684 === (2)))
{var inst_26681 = (state_26683[(2)]);var state_26683__$1 = state_26683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26683__$1,inst_26681);
} else
{if((state_val_26684 === (1)))
{var inst_26675 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_26676 = [searchKey];var inst_26677 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26675,inst_26676);var inst_26678 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_26677];var inst_26679 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26678,null));var state_26683__$1 = state_26683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26683__$1,(2),tool.react.OnReact,inst_26679);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26688 = [null,null,null,null,null,null,null];(statearr_26688[(0)] = state_machine__6178__auto__);
(statearr_26688[(1)] = (1));
return statearr_26688;
});
var state_machine__6178__auto____1 = (function (state_26683){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26683);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26689){if((e26689 instanceof Object))
{var ex__6181__auto__ = e26689;var statearr_26690_26723 = state_26683;(statearr_26690_26723[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26683);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26724 = state_26683;
state_26683 = G__26724;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26683){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_26691 = f__6193__auto__.call(null);(statearr_26691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_26691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
})();var inst_26652 = inst_26647.click(inst_26651);var inst_26653 = (function (){var btn_return = inst_26648;var btn_search = inst_26647;var mc_modelContainer = inst_26646;var elem = inst_26645;var tmpl = inst_26644;var model = inst_26643;var err = inst_26642;var vec__26639 = inst_26641;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,inst_26651,inst_26652,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,inst_26651,inst_26652,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,inst_26651,inst_26652,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function (state_26701){var state_val_26702 = (state_26701[(1)]);if((state_val_26702 === (2)))
{var inst_26699 = (state_26701[(2)]);var state_26701__$1 = state_26701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26701__$1,inst_26699);
} else
{if((state_val_26702 === (1)))
{var inst_26692 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_26693 = that.id;var inst_26694 = [inst_26693];var inst_26695 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26692,inst_26694);var inst_26696 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_26695];var inst_26697 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26696,null));var state_26701__$1 = state_26701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26701__$1,(2),tool.react.OnReact,inst_26697);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,inst_26651,inst_26652,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,inst_26651,inst_26652,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26706 = [null,null,null,null,null,null,null];(statearr_26706[(0)] = state_machine__6178__auto__);
(statearr_26706[(1)] = (1));
return statearr_26706;
});
var state_machine__6178__auto____1 = (function (state_26701){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26701);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26707){if((e26707 instanceof Object))
{var ex__6181__auto__ = e26707;var statearr_26708_26725 = state_26701;(statearr_26708_26725[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26726 = state_26701;
state_26701 = G__26726;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26701){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,inst_26651,inst_26652,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_26709 = f__6193__auto__.call(null);(statearr_26709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_26709;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,inst_26651,inst_26652,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__26639,inst_26641,inst_26642,inst_26643,inst_26644,inst_26645,inst_26646,inst_26647,inst_26648,inst_26649,inst_26650,inst_26651,inst_26652,state_val_26660,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
})();var inst_26654 = inst_26646.delegate("div[modelFrame]","click",inst_26653);var inst_26655 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_26656 = [inst_26645,name];var inst_26657 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26655,inst_26656);var state_26659__$1 = (function (){var statearr_26710 = state_26659;(statearr_26710[(7)] = inst_26652);
(statearr_26710[(8)] = inst_26654);
(statearr_26710[(9)] = inst_26650);
return statearr_26710;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26659__$1,inst_26657);
} else
{if((state_val_26660 === (1)))
{var state_26659__$1 = state_26659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26659__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26714 = [null,null,null,null,null,null,null,null,null,null];(statearr_26714[(0)] = state_machine__6178__auto__);
(statearr_26714[(1)] = (1));
return statearr_26714;
});
var state_machine__6178__auto____1 = (function (state_26659){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26659);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26715){if((e26715 instanceof Object))
{var ex__6181__auto__ = e26715;var statearr_26716_26727 = state_26659;(statearr_26716_26727[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26728 = state_26659;
state_26659 = G__26728;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26659){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_26717 = f__6193__auto__.call(null);(statearr_26717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_26717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__26638,map__26638__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__26833){var map__26834 = p__26833;var map__26834__$1 = ((cljs.core.seq_QMARK_.call(null,map__26834))?cljs.core.apply.call(null,cljs.core.hash_map,map__26834):map__26834);var view = map__26834__$1;var elem = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_26937 = elem.find("#mc_historyContainer");var btn_share_26938 = elem.find("#btn_share");btn_share_26938.off("click");
mc_modelContainer_26937.undelegate("img","click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__26835){var map__26836 = p__26835;var map__26836__$1 = ((cljs.core.seq_QMARK_.call(null,map__26836))?cljs.core.apply.call(null,cljs.core.hash_map,map__26836):map__26836);var view = map__26836__$1;var elem = cljs.core.get.call(null,map__26836__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_26939 = elem.find("#mc_3dmask");var c__6192__auto___26940 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___26940,mc_3dmask_26939,map__26836,map__26836__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___26940,mc_3dmask_26939,map__26836,map__26836__$1,view,elem){
return (function (state_26842){var state_val_26843 = (state_26842[(1)]);if((state_val_26843 === (2)))
{var inst_26839 = (state_26842[(2)]);var inst_26840 = mc_3dmask_26939.fadeOut((400));var state_26842__$1 = (function (){var statearr_26844 = state_26842;(statearr_26844[(7)] = inst_26839);
return statearr_26844;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26842__$1,inst_26840);
} else
{if((state_val_26843 === (1)))
{var inst_26837 = cljs.core.async.timeout.call(null,(5000));var state_26842__$1 = state_26842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26842__$1,(2),inst_26837);
} else
{return null;
}
}
});})(c__6192__auto___26940,mc_3dmask_26939,map__26836,map__26836__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___26940,mc_3dmask_26939,map__26836,map__26836__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26848 = [null,null,null,null,null,null,null,null];(statearr_26848[(0)] = state_machine__6178__auto__);
(statearr_26848[(1)] = (1));
return statearr_26848;
});
var state_machine__6178__auto____1 = (function (state_26842){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26842);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26849){if((e26849 instanceof Object))
{var ex__6181__auto__ = e26849;var statearr_26850_26941 = state_26842;(statearr_26850_26941[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26842);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26942 = state_26842;
state_26842 = G__26942;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26842){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___26940,mc_3dmask_26939,map__26836,map__26836__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_26851 = f__6193__auto__.call(null);(statearr_26851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___26940);
return statearr_26851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___26940,mc_3dmask_26939,map__26836,map__26836__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__26852,key,modelChan){var map__26853 = p__26852;var map__26853__$1 = ((cljs.core.seq_QMARK_.call(null,map__26853))?cljs.core.apply.call(null,cljs.core.hash_map,map__26853):map__26853);var ctx = map__26853__$1;var tmpl_item = cljs.core.get.call(null,map__26853__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (state_26874){var state_val_26875 = (state_26874[(1)]);if((state_val_26875 === (2)))
{var inst_26856 = (state_26874[(2)]);var inst_26857 = cljs.core.nth.call(null,inst_26856,(0),null);var inst_26858 = cljs.core.nth.call(null,inst_26856,(1),null);var inst_26859 = $("#tmpl_streetsnap");var inst_26860 = inst_26859.tmpl(inst_26858,tmpl_item);var inst_26861 = inst_26860.find("#mc_historyContainer");var inst_26862 = inst_26860.find("#mc_sideContainer");var inst_26863 = inst_26860.find("#btn_share");var inst_26864 = (function (){var btn_share = inst_26863;var mc_sideContainer = inst_26862;var mc_historyContainer = inst_26861;var elem = inst_26860;var tmpl = inst_26859;var model = inst_26858;var err = inst_26857;var vec__26854 = inst_26856;return ((function (btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (state_26884){var state_val_26885 = (state_26884[(1)]);if((state_val_26885 === (2)))
{var inst_26882 = (state_26884[(2)]);var state_26884__$1 = state_26884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26884__$1,inst_26882);
} else
{if((state_val_26885 === (1)))
{var inst_26876 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_26877 = [model];var inst_26878 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26876,inst_26877);var inst_26879 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_26878];var inst_26880 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26879,null));var state_26884__$1 = state_26884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26884__$1,(2),tool.react.OnReact,inst_26880);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26889 = [null,null,null,null,null,null,null];(statearr_26889[(0)] = state_machine__6178__auto__);
(statearr_26889[(1)] = (1));
return statearr_26889;
});
var state_machine__6178__auto____1 = (function (state_26884){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26884);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26890){if((e26890 instanceof Object))
{var ex__6181__auto__ = e26890;var statearr_26891_26943 = state_26884;(statearr_26891_26943[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26944 = state_26884;
state_26884 = G__26944;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26884){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_26892 = f__6193__auto__.call(null);(statearr_26892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_26892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
})();var inst_26865 = inst_26863.click(inst_26864);var inst_26866 = (function (){var btn_share = inst_26863;var mc_sideContainer = inst_26862;var mc_historyContainer = inst_26861;var elem = inst_26860;var tmpl = inst_26859;var model = inst_26858;var err = inst_26857;var vec__26854 = inst_26856;return ((function (btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (state_26902){var state_val_26903 = (state_26902[(1)]);if((state_val_26903 === (2)))
{var inst_26900 = (state_26902[(2)]);var state_26902__$1 = state_26902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26902__$1,inst_26900);
} else
{if((state_val_26903 === (1)))
{var inst_26893 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_26894 = that.id;var inst_26895 = [inst_26894];var inst_26896 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26893,inst_26895);var inst_26897 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_26896];var inst_26898 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26897,null));var state_26902__$1 = state_26902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26902__$1,(2),tool.react.OnReact,inst_26898);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26907 = [null,null,null,null,null,null,null];(statearr_26907[(0)] = state_machine__6178__auto__);
(statearr_26907[(1)] = (1));
return statearr_26907;
});
var state_machine__6178__auto____1 = (function (state_26902){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26902);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26908){if((e26908 instanceof Object))
{var ex__6181__auto__ = e26908;var statearr_26909_26945 = state_26902;(statearr_26909_26945[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26946 = state_26902;
state_26902 = G__26946;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26902){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_26910 = f__6193__auto__.call(null);(statearr_26910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_26910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
})();var inst_26867 = inst_26862.delegate("img","click",inst_26866);var inst_26868 = (function (){var btn_share = inst_26863;var mc_sideContainer = inst_26862;var mc_historyContainer = inst_26861;var elem = inst_26860;var tmpl = inst_26859;var model = inst_26858;var err = inst_26857;var vec__26854 = inst_26856;return ((function (btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,inst_26866,inst_26867,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,inst_26866,inst_26867,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,inst_26866,inst_26867,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function (state_26920){var state_val_26921 = (state_26920[(1)]);if((state_val_26921 === (2)))
{var inst_26918 = (state_26920[(2)]);var state_26920__$1 = state_26920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26920__$1,inst_26918);
} else
{if((state_val_26921 === (1)))
{var inst_26911 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_26912 = that.id;var inst_26913 = [inst_26912];var inst_26914 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26911,inst_26913);var inst_26915 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_26914];var inst_26916 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26915,null));var state_26920__$1 = state_26920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26920__$1,(2),tool.react.OnReact,inst_26916);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,inst_26866,inst_26867,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,inst_26866,inst_26867,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26925 = [null,null,null,null,null,null,null];(statearr_26925[(0)] = state_machine__6178__auto__);
(statearr_26925[(1)] = (1));
return statearr_26925;
});
var state_machine__6178__auto____1 = (function (state_26920){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26920);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26926){if((e26926 instanceof Object))
{var ex__6181__auto__ = e26926;var statearr_26927_26947 = state_26920;(statearr_26927_26947[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26920);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26948 = state_26920;
state_26920 = G__26948;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26920){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,inst_26866,inst_26867,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_26928 = f__6193__auto__.call(null);(statearr_26928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_26928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,inst_26866,inst_26867,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__26854,inst_26856,inst_26857,inst_26858,inst_26859,inst_26860,inst_26861,inst_26862,inst_26863,inst_26864,inst_26865,inst_26866,inst_26867,state_val_26875,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
})();var inst_26869 = inst_26861.delegate("img","click",inst_26868);var inst_26870 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_26871 = [inst_26860,name];var inst_26872 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26870,inst_26871);var state_26874__$1 = (function (){var statearr_26929 = state_26874;(statearr_26929[(7)] = inst_26869);
(statearr_26929[(8)] = inst_26865);
(statearr_26929[(9)] = inst_26867);
return statearr_26929;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26874__$1,inst_26872);
} else
{if((state_val_26875 === (1)))
{var state_26874__$1 = state_26874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26874__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26933 = [null,null,null,null,null,null,null,null,null,null];(statearr_26933[(0)] = state_machine__6178__auto__);
(statearr_26933[(1)] = (1));
return statearr_26933;
});
var state_machine__6178__auto____1 = (function (state_26874){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26874);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26934){if((e26934 instanceof Object))
{var ex__6181__auto__ = e26934;var statearr_26935_26949 = state_26874;(statearr_26935_26949[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26874);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26934;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26950 = state_26874;
state_26874 = G__26950;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26874){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_26936 = f__6193__auto__.call(null);(statearr_26936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_26936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__26853,map__26853__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__26951){var map__26952 = p__26951;var map__26952__$1 = ((cljs.core.seq_QMARK_.call(null,map__26952))?cljs.core.apply.call(null,cljs.core.hash_map,map__26952):map__26952);var view = map__26952__$1;var elem = cljs.core.get.call(null,map__26952__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_26968 = elem.find("#mc_3dmask");var c__6192__auto___26969 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___26969,mc_3dmask_26968,map__26952,map__26952__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___26969,mc_3dmask_26968,map__26952,map__26952__$1,view,elem){
return (function (state_26958){var state_val_26959 = (state_26958[(1)]);if((state_val_26959 === (2)))
{var inst_26955 = (state_26958[(2)]);var inst_26956 = mc_3dmask_26968.fadeOut((400));var state_26958__$1 = (function (){var statearr_26960 = state_26958;(statearr_26960[(7)] = inst_26955);
return statearr_26960;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26958__$1,inst_26956);
} else
{if((state_val_26959 === (1)))
{var inst_26953 = cljs.core.async.timeout.call(null,(5000));var state_26958__$1 = state_26958;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26958__$1,(2),inst_26953);
} else
{return null;
}
}
});})(c__6192__auto___26969,mc_3dmask_26968,map__26952,map__26952__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___26969,mc_3dmask_26968,map__26952,map__26952__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26964 = [null,null,null,null,null,null,null,null];(statearr_26964[(0)] = state_machine__6178__auto__);
(statearr_26964[(1)] = (1));
return statearr_26964;
});
var state_machine__6178__auto____1 = (function (state_26958){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26958);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26965){if((e26965 instanceof Object))
{var ex__6181__auto__ = e26965;var statearr_26966_26970 = state_26958;(statearr_26966_26970[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26958);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26971 = state_26958;
state_26958 = G__26971;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26958){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___26969,mc_3dmask_26968,map__26952,map__26952__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_26967 = f__6193__auto__.call(null);(statearr_26967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___26969);
return statearr_26967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___26969,mc_3dmask_26968,map__26952,map__26952__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__26972,key,modelChan){var map__26973 = p__26972;var map__26973__$1 = ((cljs.core.seq_QMARK_.call(null,map__26973))?cljs.core.apply.call(null,cljs.core.hash_map,map__26973):map__26973);var ctx = map__26973__$1;var tmpl_item = cljs.core.get.call(null,map__26973__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__26973,map__26973__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__26973,map__26973__$1,ctx,tmpl_item){
return (function (state_26985){var state_val_26986 = (state_26985[(1)]);if((state_val_26986 === (2)))
{var inst_26976 = (state_26985[(2)]);var inst_26977 = cljs.core.nth.call(null,inst_26976,(0),null);var inst_26978 = cljs.core.nth.call(null,inst_26976,(1),null);var inst_26979 = $("#tmpl_home");var inst_26980 = inst_26979.tmpl(inst_26978,tmpl_item);var inst_26981 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_26982 = [inst_26980,key];var inst_26983 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26981,inst_26982);var state_26985__$1 = (function (){var statearr_26987 = state_26985;(statearr_26987[(7)] = inst_26977);
return statearr_26987;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26985__$1,inst_26983);
} else
{if((state_val_26986 === (1)))
{var state_26985__$1 = state_26985;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26985__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__26973,map__26973__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__26973,map__26973__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26991 = [null,null,null,null,null,null,null,null];(statearr_26991[(0)] = state_machine__6178__auto__);
(statearr_26991[(1)] = (1));
return statearr_26991;
});
var state_machine__6178__auto____1 = (function (state_26985){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26985);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26992){if((e26992 instanceof Object))
{var ex__6181__auto__ = e26992;var statearr_26993_26995 = state_26985;(statearr_26993_26995[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26985);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26996 = state_26985;
state_26985 = G__26996;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26985){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__26973,map__26973__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_26994 = f__6193__auto__.call(null);(statearr_26994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_26994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__26973,map__26973__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__26997,key,view){var map__26998 = p__26997;var map__26998__$1 = ((cljs.core.seq_QMARK_.call(null,map__26998))?cljs.core.apply.call(null,cljs.core.hash_map,map__26998):map__26998);var ctx = map__26998__$1;var popupContainer = cljs.core.get.call(null,map__26998__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var c__6192__auto___27018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___27018,map__26998,map__26998__$1,ctx,popupContainer){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___27018,map__26998,map__26998__$1,ctx,popupContainer){
return (function (state_27008){var state_val_27009 = (state_27008[(1)]);if((state_val_27009 === (2)))
{var inst_27006 = (state_27008[(2)]);var state_27008__$1 = state_27008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27008__$1,inst_27006);
} else
{if((state_val_27009 === (1)))
{var inst_26999 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094)];var inst_27000 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_27001 = [inst_27000];var inst_27002 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26999,inst_27001);var inst_27003 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_27002];var inst_27004 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27003,null));var state_27008__$1 = state_27008;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27008__$1,(2),tool.react.OnReact,inst_27004);
} else
{return null;
}
}
});})(c__6192__auto___27018,map__26998,map__26998__$1,ctx,popupContainer))
;return ((function (switch__6177__auto__,c__6192__auto___27018,map__26998,map__26998__$1,ctx,popupContainer){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_27013 = [null,null,null,null,null,null,null];(statearr_27013[(0)] = state_machine__6178__auto__);
(statearr_27013[(1)] = (1));
return statearr_27013;
});
var state_machine__6178__auto____1 = (function (state_27008){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_27008);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e27014){if((e27014 instanceof Object))
{var ex__6181__auto__ = e27014;var statearr_27015_27019 = state_27008;(statearr_27015_27019[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27008);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27020 = state_27008;
state_27008 = G__27020;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_27008){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_27008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___27018,map__26998,map__26998__$1,ctx,popupContainer))
})();var state__6194__auto__ = (function (){var statearr_27016 = f__6193__auto__.call(null);(statearr_27016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___27018);
return statearr_27016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___27018,map__26998,map__26998__$1,ctx,popupContainer))
);
var G__27017 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__27017.appendTo(popupContainer);
G__27017.fadeIn((400));
return G__27017;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__27021,key,p__27022){var map__27023 = p__27021;var map__27023__$1 = ((cljs.core.seq_QMARK_.call(null,map__27023))?cljs.core.apply.call(null,cljs.core.hash_map,map__27023):map__27023);var ctx = map__27023__$1;var container = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__27024 = p__27022;var map__27024__$1 = ((cljs.core.seq_QMARK_.call(null,map__27024))?cljs.core.apply.call(null,cljs.core.hash_map,map__27024):map__27024);var view = map__27024__$1;var elem = cljs.core.get.call(null,map__27024__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__27023,map__27023__$1,ctx,container,map__27024,map__27024__$1,view,elem){
return (function (){return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__27023,map__27023__$1,ctx,container,map__27024,map__27024__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__27025,key,modelChan){var map__27026 = p__27025;var map__27026__$1 = ((cljs.core.seq_QMARK_.call(null,map__27026))?cljs.core.apply.call(null,cljs.core.hash_map,map__27026):map__27026);var ctx = map__27026__$1;var tmpl_item = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item){
return (function (state_27041){var state_val_27042 = (state_27041[(1)]);if((state_val_27042 === (2)))
{var inst_27029 = (state_27041[(2)]);var inst_27030 = cljs.core.nth.call(null,inst_27029,(0),null);var inst_27031 = cljs.core.nth.call(null,inst_27029,(1),null);var inst_27032 = $("#tmpl_bigPhoto");var inst_27033 = inst_27032.tmpl(inst_27031,tmpl_item);var inst_27034 = inst_27033.find("#mc_bigPhotoFixPosition");var inst_27035 = (function (){var back = inst_27034;var elem = inst_27033;var tmpl = inst_27032;var model = inst_27031;var err = inst_27030;var vec__27027 = inst_27029;return ((function (back,elem,tmpl,model,err,vec__27027,inst_27029,inst_27030,inst_27031,inst_27032,inst_27033,inst_27034,state_val_27042,c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__27027,inst_27029,inst_27030,inst_27031,inst_27032,inst_27033,inst_27034,state_val_27042,c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__27027,inst_27029,inst_27030,inst_27031,inst_27032,inst_27033,inst_27034,state_val_27042,c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item){
return (function (state_27048){var state_val_27049 = (state_27048[(1)]);if((state_val_27049 === (2)))
{var inst_27046 = (state_27048[(2)]);var state_27048__$1 = state_27048;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27048__$1,inst_27046);
} else
{if((state_val_27049 === (1)))
{var inst_27043 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_27044 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27043,null));var state_27048__$1 = state_27048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27048__$1,(2),tool.react.OnReact,inst_27044);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__27027,inst_27029,inst_27030,inst_27031,inst_27032,inst_27033,inst_27034,state_val_27042,c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__27027,inst_27029,inst_27030,inst_27031,inst_27032,inst_27033,inst_27034,state_val_27042,c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_27053 = [null,null,null,null,null,null,null];(statearr_27053[(0)] = state_machine__6178__auto__);
(statearr_27053[(1)] = (1));
return statearr_27053;
});
var state_machine__6178__auto____1 = (function (state_27048){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_27048);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e27054){if((e27054 instanceof Object))
{var ex__6181__auto__ = e27054;var statearr_27055_27065 = state_27048;(statearr_27055_27065[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27048);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27066 = state_27048;
state_27048 = G__27066;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_27048){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_27048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__27027,inst_27029,inst_27030,inst_27031,inst_27032,inst_27033,inst_27034,state_val_27042,c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_27056 = f__6193__auto__.call(null);(statearr_27056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_27056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__27027,inst_27029,inst_27030,inst_27031,inst_27032,inst_27033,inst_27034,state_val_27042,c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__27027,inst_27029,inst_27030,inst_27031,inst_27032,inst_27033,inst_27034,state_val_27042,c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item))
})();var inst_27036 = inst_27034.on("click",inst_27035);var inst_27037 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_27038 = [inst_27033,key];var inst_27039 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_27037,inst_27038);var state_27041__$1 = (function (){var statearr_27057 = state_27041;(statearr_27057[(7)] = inst_27036);
return statearr_27057;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27041__$1,inst_27039);
} else
{if((state_val_27042 === (1)))
{var state_27041__$1 = state_27041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27041__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_27061 = [null,null,null,null,null,null,null,null];(statearr_27061[(0)] = state_machine__6178__auto__);
(statearr_27061[(1)] = (1));
return statearr_27061;
});
var state_machine__6178__auto____1 = (function (state_27041){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_27041);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e27062){if((e27062 instanceof Object))
{var ex__6181__auto__ = e27062;var statearr_27063_27067 = state_27041;(statearr_27063_27067[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27041);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27062;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27068 = state_27041;
state_27041 = G__27068;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_27041){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_27041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_27064 = f__6193__auto__.call(null);(statearr_27064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_27064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__27026,map__27026__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
