// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24524,key,view){var map__24525 = p__24524;var map__24525__$1 = ((cljs.core.seq_QMARK_.call(null,map__24525))?cljs.core.apply.call(null,cljs.core.hash_map,map__24525):map__24525);var ctx = map__24525__$1;var container = cljs.core.get.call(null,map__24525__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var c__6192__auto___24545 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___24545,map__24525,map__24525__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___24545,map__24525,map__24525__$1,ctx,container){
return (function (state_24535){var state_val_24536 = (state_24535[(1)]);if((state_val_24536 === (2)))
{var inst_24533 = (state_24535[(2)]);var state_24535__$1 = state_24535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24535__$1,inst_24533);
} else
{if((state_val_24536 === (1)))
{var inst_24526 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_24527 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_24528 = [inst_24527,view];var inst_24529 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24526,inst_24528);var inst_24530 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_24529];var inst_24531 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24530,null));var state_24535__$1 = state_24535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24535__$1,(2),tool.react.OnReact,inst_24531);
} else
{return null;
}
}
});})(c__6192__auto___24545,map__24525,map__24525__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto___24545,map__24525,map__24525__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24540 = [null,null,null,null,null,null,null];(statearr_24540[(0)] = state_machine__6178__auto__);
(statearr_24540[(1)] = (1));
return statearr_24540;
});
var state_machine__6178__auto____1 = (function (state_24535){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24535);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24541){if((e24541 instanceof Object))
{var ex__6181__auto__ = e24541;var statearr_24542_24546 = state_24535;(statearr_24542_24546[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24547 = state_24535;
state_24535 = G__24547;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24535){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___24545,map__24525,map__24525__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_24543 = f__6193__auto__.call(null);(statearr_24543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___24545);
return statearr_24543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___24545,map__24525,map__24525__$1,ctx,container))
);
var G__24544 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__24544.appendTo(container);
G__24544.fadeIn((400));
return G__24544;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24548,key,view){var map__24549 = p__24548;var map__24549__$1 = ((cljs.core.seq_QMARK_.call(null,map__24549))?cljs.core.apply.call(null,cljs.core.hash_map,map__24549):map__24549);var ctx = map__24549__$1;var container = cljs.core.get.call(null,map__24549__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__24550 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__24550.remove();
return G__24550;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_24713 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_24714 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_24715 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_24715.off("click");
btn_search_24714.off("click");
mc_modelContainer_24713.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__24632,key,modelChan){var map__24633 = p__24632;var map__24633__$1 = ((cljs.core.seq_QMARK_.call(null,map__24633))?cljs.core.apply.call(null,cljs.core.hash_map,map__24633):map__24633);var ctx = map__24633__$1;var tmpl_item = cljs.core.get.call(null,map__24633__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (state_24654){var state_val_24655 = (state_24654[(1)]);if((state_val_24655 === (2)))
{var inst_24636 = (state_24654[(2)]);var inst_24637 = cljs.core.nth.call(null,inst_24636,(0),null);var inst_24638 = cljs.core.nth.call(null,inst_24636,(1),null);var inst_24639 = $("#tmpl_streetsnap_list");var inst_24640 = inst_24639.tmpl(inst_24638,tmpl_item);var inst_24641 = inst_24640.find("#mc_modelContainer");var inst_24642 = inst_24640.find("#btn_search");var inst_24643 = inst_24640.find("#btn_return");var inst_24644 = (function (){var btn_return = inst_24643;var btn_search = inst_24642;var mc_modelContainer = inst_24641;var elem = inst_24640;var tmpl = inst_24639;var model = inst_24638;var err = inst_24637;var vec__24634 = inst_24636;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (state_24661){var state_val_24662 = (state_24661[(1)]);if((state_val_24662 === (2)))
{var inst_24659 = (state_24661[(2)]);var state_24661__$1 = state_24661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24661__$1,inst_24659);
} else
{if((state_val_24662 === (1)))
{var inst_24656 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_24657 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24656,null));var state_24661__$1 = state_24661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24661__$1,(2),tool.react.OnReact,inst_24657);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24666 = [null,null,null,null,null,null,null];(statearr_24666[(0)] = state_machine__6178__auto__);
(statearr_24666[(1)] = (1));
return statearr_24666;
});
var state_machine__6178__auto____1 = (function (state_24661){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24661);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24667){if((e24667 instanceof Object))
{var ex__6181__auto__ = e24667;var statearr_24668_24716 = state_24661;(statearr_24668_24716[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24717 = state_24661;
state_24661 = G__24717;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24661){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_24669 = f__6193__auto__.call(null);(statearr_24669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_24669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
})();var inst_24645 = inst_24643.click(inst_24644);var inst_24646 = (function (){var btn_return = inst_24643;var btn_search = inst_24642;var mc_modelContainer = inst_24641;var elem = inst_24640;var tmpl = inst_24639;var model = inst_24638;var err = inst_24637;var vec__24634 = inst_24636;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (state_24678){var state_val_24679 = (state_24678[(1)]);if((state_val_24679 === (2)))
{var inst_24676 = (state_24678[(2)]);var state_24678__$1 = state_24678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24678__$1,inst_24676);
} else
{if((state_val_24679 === (1)))
{var inst_24670 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_24671 = [searchKey];var inst_24672 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24670,inst_24671);var inst_24673 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_24672];var inst_24674 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24673,null));var state_24678__$1 = state_24678;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24678__$1,(2),tool.react.OnReact,inst_24674);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24683 = [null,null,null,null,null,null,null];(statearr_24683[(0)] = state_machine__6178__auto__);
(statearr_24683[(1)] = (1));
return statearr_24683;
});
var state_machine__6178__auto____1 = (function (state_24678){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24678);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24684){if((e24684 instanceof Object))
{var ex__6181__auto__ = e24684;var statearr_24685_24718 = state_24678;(statearr_24685_24718[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24678);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24684;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24719 = state_24678;
state_24678 = G__24719;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24678){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_24686 = f__6193__auto__.call(null);(statearr_24686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_24686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
})();var inst_24647 = inst_24642.click(inst_24646);var inst_24648 = (function (){var btn_return = inst_24643;var btn_search = inst_24642;var mc_modelContainer = inst_24641;var elem = inst_24640;var tmpl = inst_24639;var model = inst_24638;var err = inst_24637;var vec__24634 = inst_24636;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,inst_24646,inst_24647,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,inst_24646,inst_24647,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,inst_24646,inst_24647,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function (state_24696){var state_val_24697 = (state_24696[(1)]);if((state_val_24697 === (2)))
{var inst_24694 = (state_24696[(2)]);var state_24696__$1 = state_24696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24696__$1,inst_24694);
} else
{if((state_val_24697 === (1)))
{var inst_24687 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_24688 = that.id;var inst_24689 = [inst_24688];var inst_24690 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24687,inst_24689);var inst_24691 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_24690];var inst_24692 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24691,null));var state_24696__$1 = state_24696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24696__$1,(2),tool.react.OnReact,inst_24692);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,inst_24646,inst_24647,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,inst_24646,inst_24647,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24701 = [null,null,null,null,null,null,null];(statearr_24701[(0)] = state_machine__6178__auto__);
(statearr_24701[(1)] = (1));
return statearr_24701;
});
var state_machine__6178__auto____1 = (function (state_24696){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24696);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24702){if((e24702 instanceof Object))
{var ex__6181__auto__ = e24702;var statearr_24703_24720 = state_24696;(statearr_24703_24720[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24721 = state_24696;
state_24696 = G__24721;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24696){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,inst_24646,inst_24647,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_24704 = f__6193__auto__.call(null);(statearr_24704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_24704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,inst_24646,inst_24647,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__24634,inst_24636,inst_24637,inst_24638,inst_24639,inst_24640,inst_24641,inst_24642,inst_24643,inst_24644,inst_24645,inst_24646,inst_24647,state_val_24655,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
})();var inst_24649 = inst_24641.delegate("div[modelFrame]","click",inst_24648);var inst_24650 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_24651 = [inst_24640,name];var inst_24652 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24650,inst_24651);var state_24654__$1 = (function (){var statearr_24705 = state_24654;(statearr_24705[(7)] = inst_24645);
(statearr_24705[(8)] = inst_24647);
(statearr_24705[(9)] = inst_24649);
return statearr_24705;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24654__$1,inst_24652);
} else
{if((state_val_24655 === (1)))
{var state_24654__$1 = state_24654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24654__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24709 = [null,null,null,null,null,null,null,null,null,null];(statearr_24709[(0)] = state_machine__6178__auto__);
(statearr_24709[(1)] = (1));
return statearr_24709;
});
var state_machine__6178__auto____1 = (function (state_24654){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24654);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24710){if((e24710 instanceof Object))
{var ex__6181__auto__ = e24710;var statearr_24711_24722 = state_24654;(statearr_24711_24722[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24723 = state_24654;
state_24654 = G__24723;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24654){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_24712 = f__6193__auto__.call(null);(statearr_24712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_24712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__24633,map__24633__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__24875){var map__24876 = p__24875;var map__24876__$1 = ((cljs.core.seq_QMARK_.call(null,map__24876))?cljs.core.apply.call(null,cljs.core.hash_map,map__24876):map__24876);var view = map__24876__$1;var elem = cljs.core.get.call(null,map__24876__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_25026 = elem.find("#mc_historyContainer");var mc_sideContainer_25027 = elem.find("#mc_sideContainer");var mc_bottomContainer_25028 = elem.find("#mc_bottomContainer");var img_stylePicture_25029 = elem.find("#img_stylePicture");var btn_share_25030 = elem.find("#btn_share");mc_modelContainer_25026.undelegate("img","click");
mc_sideContainer_25027.undelegate("img","click");
mc_bottomContainer_25028.undelegate("img","click");
img_stylePicture_25029.off("click");
btn_share_25030.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__24877){var map__24878 = p__24877;var map__24878__$1 = ((cljs.core.seq_QMARK_.call(null,map__24878))?cljs.core.apply.call(null,cljs.core.hash_map,map__24878):map__24878);var view = map__24878__$1;var elem = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_25031 = elem.find("#mc_3dmask");var c__6192__auto___25032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___25032,mc_3dmask_25031,map__24878,map__24878__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___25032,mc_3dmask_25031,map__24878,map__24878__$1,view,elem){
return (function (state_24884){var state_val_24885 = (state_24884[(1)]);if((state_val_24885 === (2)))
{var inst_24881 = (state_24884[(2)]);var inst_24882 = mc_3dmask_25031.fadeOut((400));var state_24884__$1 = (function (){var statearr_24886 = state_24884;(statearr_24886[(7)] = inst_24881);
return statearr_24886;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24884__$1,inst_24882);
} else
{if((state_val_24885 === (1)))
{var inst_24879 = cljs.core.async.timeout.call(null,(5000));var state_24884__$1 = state_24884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24884__$1,(2),inst_24879);
} else
{return null;
}
}
});})(c__6192__auto___25032,mc_3dmask_25031,map__24878,map__24878__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___25032,mc_3dmask_25031,map__24878,map__24878__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24890 = [null,null,null,null,null,null,null,null];(statearr_24890[(0)] = state_machine__6178__auto__);
(statearr_24890[(1)] = (1));
return statearr_24890;
});
var state_machine__6178__auto____1 = (function (state_24884){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24884);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24891){if((e24891 instanceof Object))
{var ex__6181__auto__ = e24891;var statearr_24892_25033 = state_24884;(statearr_24892_25033[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25034 = state_24884;
state_24884 = G__25034;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24884){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___25032,mc_3dmask_25031,map__24878,map__24878__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_24893 = f__6193__auto__.call(null);(statearr_24893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___25032);
return statearr_24893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___25032,mc_3dmask_25031,map__24878,map__24878__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__24894,key,modelChan){var map__24895 = p__24894;var map__24895__$1 = ((cljs.core.seq_QMARK_.call(null,map__24895))?cljs.core.apply.call(null,cljs.core.hash_map,map__24895):map__24895);var ctx = map__24895__$1;var tmpl_item = cljs.core.get.call(null,map__24895__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (state_24925){var state_val_24926 = (state_24925[(1)]);if((state_val_24926 === (2)))
{var inst_24898 = (state_24925[(2)]);var inst_24899 = cljs.core.nth.call(null,inst_24898,(0),null);var inst_24900 = cljs.core.nth.call(null,inst_24898,(1),null);var inst_24901 = $("#tmpl_streetsnap");var inst_24902 = inst_24901.tmpl(inst_24900,tmpl_item);var inst_24903 = inst_24902.find("#mc_historyContainer");var inst_24904 = inst_24902.find("#mc_sideContainer");var inst_24905 = inst_24902.find("#mc_bottomContainer");var inst_24906 = inst_24902.find("#img_stylePicture");var inst_24907 = inst_24902.find("#btn_share");var inst_24908 = inst_24902.find("#btn_fullscreen");var inst_24909 = (function (){var vec__24896 = inst_24898;var model = inst_24900;var mc_sideContainer = inst_24904;var mc_historyContainer = inst_24903;var err = inst_24899;var tmpl = inst_24901;var img_stylePicture = inst_24906;var elem = inst_24902;var btn_share = inst_24907;var mc_bottomContainer = inst_24905;var btn_fullscreen = inst_24908;return ((function (vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){return console.log("haha");
});
;})(vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var inst_24910 = inst_24908.on("click",inst_24909);var inst_24911 = (function (){var vec__24896 = inst_24898;var model = inst_24900;var mc_sideContainer = inst_24904;var mc_historyContainer = inst_24903;var err = inst_24899;var tmpl = inst_24901;var img_stylePicture = inst_24906;var elem = inst_24902;var btn_share = inst_24907;var mc_bottomContainer = inst_24905;var btn_fullscreen = inst_24908;return ((function (vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (state_24936){var state_val_24937 = (state_24936[(1)]);if((state_val_24937 === (2)))
{var inst_24934 = (state_24936[(2)]);var state_24936__$1 = state_24936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24936__$1,inst_24934);
} else
{if((state_val_24937 === (1)))
{var inst_24927 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_24928 = model.styleUrl;var inst_24929 = [inst_24928];var inst_24930 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24927,inst_24929);var inst_24931 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_24930];var inst_24932 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24931,null));var state_24936__$1 = state_24936;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24936__$1,(2),tool.react.OnReact,inst_24932);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24941 = [null,null,null,null,null,null,null];(statearr_24941[(0)] = state_machine__6178__auto__);
(statearr_24941[(1)] = (1));
return statearr_24941;
});
var state_machine__6178__auto____1 = (function (state_24936){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24936);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24942){if((e24942 instanceof Object))
{var ex__6181__auto__ = e24942;var statearr_24943_25035 = state_24936;(statearr_24943_25035[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24936);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25036 = state_24936;
state_24936 = G__25036;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24936){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_24944 = f__6193__auto__.call(null);(statearr_24944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_24944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var inst_24912 = inst_24906.on("click",inst_24911);var inst_24913 = (function (){var vec__24896 = inst_24898;var model = inst_24900;var mc_sideContainer = inst_24904;var mc_historyContainer = inst_24903;var err = inst_24899;var tmpl = inst_24901;var img_stylePicture = inst_24906;var elem = inst_24902;var btn_share = inst_24907;var mc_bottomContainer = inst_24905;var btn_fullscreen = inst_24908;return ((function (vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (state_24953){var state_val_24954 = (state_24953[(1)]);if((state_val_24954 === (2)))
{var inst_24951 = (state_24953[(2)]);var state_24953__$1 = state_24953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24953__$1,inst_24951);
} else
{if((state_val_24954 === (1)))
{var inst_24945 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_24946 = [model];var inst_24947 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24945,inst_24946);var inst_24948 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_24947];var inst_24949 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24948,null));var state_24953__$1 = state_24953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24953__$1,(2),tool.react.OnReact,inst_24949);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24958 = [null,null,null,null,null,null,null];(statearr_24958[(0)] = state_machine__6178__auto__);
(statearr_24958[(1)] = (1));
return statearr_24958;
});
var state_machine__6178__auto____1 = (function (state_24953){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24953);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24959){if((e24959 instanceof Object))
{var ex__6181__auto__ = e24959;var statearr_24960_25037 = state_24953;(statearr_24960_25037[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24953);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25038 = state_24953;
state_24953 = G__25038;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24953){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_24961 = f__6193__auto__.call(null);(statearr_24961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_24961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var inst_24914 = inst_24907.on("click",inst_24913);var inst_24915 = (function (){var vec__24896 = inst_24898;var model = inst_24900;var mc_sideContainer = inst_24904;var mc_historyContainer = inst_24903;var err = inst_24899;var tmpl = inst_24901;var img_stylePicture = inst_24906;var elem = inst_24902;var btn_share = inst_24907;var mc_bottomContainer = inst_24905;var btn_fullscreen = inst_24908;return ((function (vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (state_24972){var state_val_24973 = (state_24972[(1)]);if((state_val_24973 === (2)))
{var inst_24970 = (state_24972[(2)]);var state_24972__$1 = state_24972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24972__$1,inst_24970);
} else
{if((state_val_24973 === (1)))
{var inst_24962 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_24963 = that.id;var inst_24964 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24963));var inst_24965 = [inst_24964];var inst_24966 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24962,inst_24965);var inst_24967 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_24966];var inst_24968 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24967,null));var state_24972__$1 = state_24972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24972__$1,(2),tool.react.OnReact,inst_24968);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24977 = [null,null,null,null,null,null,null];(statearr_24977[(0)] = state_machine__6178__auto__);
(statearr_24977[(1)] = (1));
return statearr_24977;
});
var state_machine__6178__auto____1 = (function (state_24972){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24972);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24978){if((e24978 instanceof Object))
{var ex__6181__auto__ = e24978;var statearr_24979_25039 = state_24972;(statearr_24979_25039[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25040 = state_24972;
state_24972 = G__25040;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24972){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_24980 = f__6193__auto__.call(null);(statearr_24980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_24980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var inst_24916 = inst_24904.delegate("img","click",inst_24915);var inst_24917 = (function (){var vec__24896 = inst_24898;var model = inst_24900;var mc_sideContainer = inst_24904;var mc_historyContainer = inst_24903;var err = inst_24899;var tmpl = inst_24901;var img_stylePicture = inst_24906;var elem = inst_24902;var btn_share = inst_24907;var mc_bottomContainer = inst_24905;var btn_fullscreen = inst_24908;return ((function (vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (state_24991){var state_val_24992 = (state_24991[(1)]);if((state_val_24992 === (2)))
{var inst_24989 = (state_24991[(2)]);var state_24991__$1 = state_24991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24991__$1,inst_24989);
} else
{if((state_val_24992 === (1)))
{var inst_24981 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_24982 = that.id;var inst_24983 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24982));var inst_24984 = [inst_24983];var inst_24985 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24981,inst_24984);var inst_24986 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_24985];var inst_24987 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24986,null));var state_24991__$1 = state_24991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24991__$1,(2),tool.react.OnReact,inst_24987);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24996 = [null,null,null,null,null,null,null];(statearr_24996[(0)] = state_machine__6178__auto__);
(statearr_24996[(1)] = (1));
return statearr_24996;
});
var state_machine__6178__auto____1 = (function (state_24991){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24991);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24997){if((e24997 instanceof Object))
{var ex__6181__auto__ = e24997;var statearr_24998_25041 = state_24991;(statearr_24998_25041[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25042 = state_24991;
state_24991 = G__25042;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24991){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_24999 = f__6193__auto__.call(null);(statearr_24999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_24999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var inst_24918 = inst_24905.delegate("img","click",inst_24917);var inst_24919 = (function (){var vec__24896 = inst_24898;var model = inst_24900;var mc_sideContainer = inst_24904;var mc_historyContainer = inst_24903;var err = inst_24899;var tmpl = inst_24901;var img_stylePicture = inst_24906;var elem = inst_24902;var btn_share = inst_24907;var mc_bottomContainer = inst_24905;var btn_fullscreen = inst_24908;return ((function (vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,inst_24917,inst_24918,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,inst_24917,inst_24918,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,inst_24917,inst_24918,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function (state_25009){var state_val_25010 = (state_25009[(1)]);if((state_val_25010 === (2)))
{var inst_25007 = (state_25009[(2)]);var state_25009__$1 = state_25009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25009__$1,inst_25007);
} else
{if((state_val_25010 === (1)))
{var inst_25000 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_25001 = that.id;var inst_25002 = [inst_25001];var inst_25003 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25000,inst_25002);var inst_25004 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_25003];var inst_25005 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25004,null));var state_25009__$1 = state_25009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25009__$1,(2),tool.react.OnReact,inst_25005);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,inst_24917,inst_24918,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,inst_24917,inst_24918,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_25014 = [null,null,null,null,null,null,null];(statearr_25014[(0)] = state_machine__6178__auto__);
(statearr_25014[(1)] = (1));
return statearr_25014;
});
var state_machine__6178__auto____1 = (function (state_25009){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_25009);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e25015){if((e25015 instanceof Object))
{var ex__6181__auto__ = e25015;var statearr_25016_25043 = state_25009;(statearr_25016_25043[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25044 = state_25009;
state_25009 = G__25044;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_25009){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_25009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,inst_24917,inst_24918,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_25017 = f__6193__auto__.call(null);(statearr_25017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_25017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,inst_24917,inst_24918,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__24896,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_24898,inst_24899,inst_24900,inst_24901,inst_24902,inst_24903,inst_24904,inst_24905,inst_24906,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911,inst_24912,inst_24913,inst_24914,inst_24915,inst_24916,inst_24917,inst_24918,state_val_24926,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var inst_24920 = inst_24903.delegate("img","click",inst_24919);var inst_24921 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_24922 = [inst_24902,name];var inst_24923 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24921,inst_24922);var state_24925__$1 = (function (){var statearr_25018 = state_24925;(statearr_25018[(7)] = inst_24912);
(statearr_25018[(8)] = inst_24918);
(statearr_25018[(9)] = inst_24910);
(statearr_25018[(10)] = inst_24916);
(statearr_25018[(11)] = inst_24914);
(statearr_25018[(12)] = inst_24920);
return statearr_25018;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24925__$1,inst_24923);
} else
{if((state_val_24926 === (1)))
{var state_24925__$1 = state_24925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24925__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_25022 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25022[(0)] = state_machine__6178__auto__);
(statearr_25022[(1)] = (1));
return statearr_25022;
});
var state_machine__6178__auto____1 = (function (state_24925){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24925);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e25023){if((e25023 instanceof Object))
{var ex__6181__auto__ = e25023;var statearr_25024_25045 = state_24925;(statearr_25024_25045[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24925);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25046 = state_24925;
state_24925 = G__25046;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24925){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_25025 = f__6193__auto__.call(null);(statearr_25025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_25025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__24895,map__24895__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__25047){var map__25048 = p__25047;var map__25048__$1 = ((cljs.core.seq_QMARK_.call(null,map__25048))?cljs.core.apply.call(null,cljs.core.hash_map,map__25048):map__25048);var view = map__25048__$1;var elem = cljs.core.get.call(null,map__25048__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_25064 = elem.find("#mc_3dmask");var c__6192__auto___25065 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___25065,mc_3dmask_25064,map__25048,map__25048__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___25065,mc_3dmask_25064,map__25048,map__25048__$1,view,elem){
return (function (state_25054){var state_val_25055 = (state_25054[(1)]);if((state_val_25055 === (2)))
{var inst_25051 = (state_25054[(2)]);var inst_25052 = mc_3dmask_25064.fadeOut((400));var state_25054__$1 = (function (){var statearr_25056 = state_25054;(statearr_25056[(7)] = inst_25051);
return statearr_25056;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25054__$1,inst_25052);
} else
{if((state_val_25055 === (1)))
{var inst_25049 = cljs.core.async.timeout.call(null,(5000));var state_25054__$1 = state_25054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25054__$1,(2),inst_25049);
} else
{return null;
}
}
});})(c__6192__auto___25065,mc_3dmask_25064,map__25048,map__25048__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___25065,mc_3dmask_25064,map__25048,map__25048__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_25060 = [null,null,null,null,null,null,null,null];(statearr_25060[(0)] = state_machine__6178__auto__);
(statearr_25060[(1)] = (1));
return statearr_25060;
});
var state_machine__6178__auto____1 = (function (state_25054){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_25054);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e25061){if((e25061 instanceof Object))
{var ex__6181__auto__ = e25061;var statearr_25062_25066 = state_25054;(statearr_25062_25066[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25054);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25067 = state_25054;
state_25054 = G__25067;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_25054){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_25054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___25065,mc_3dmask_25064,map__25048,map__25048__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_25063 = f__6193__auto__.call(null);(statearr_25063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___25065);
return statearr_25063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___25065,mc_3dmask_25064,map__25048,map__25048__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__25068,key,modelChan){var map__25069 = p__25068;var map__25069__$1 = ((cljs.core.seq_QMARK_.call(null,map__25069))?cljs.core.apply.call(null,cljs.core.hash_map,map__25069):map__25069);var ctx = map__25069__$1;var tmpl_item = cljs.core.get.call(null,map__25069__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__25069,map__25069__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__25069,map__25069__$1,ctx,tmpl_item){
return (function (state_25081){var state_val_25082 = (state_25081[(1)]);if((state_val_25082 === (2)))
{var inst_25072 = (state_25081[(2)]);var inst_25073 = cljs.core.nth.call(null,inst_25072,(0),null);var inst_25074 = cljs.core.nth.call(null,inst_25072,(1),null);var inst_25075 = $("#tmpl_home");var inst_25076 = inst_25075.tmpl(inst_25074,tmpl_item);var inst_25077 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_25078 = [inst_25076,key];var inst_25079 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25077,inst_25078);var state_25081__$1 = (function (){var statearr_25083 = state_25081;(statearr_25083[(7)] = inst_25073);
return statearr_25083;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25081__$1,inst_25079);
} else
{if((state_val_25082 === (1)))
{var state_25081__$1 = state_25081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25081__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__25069,map__25069__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__25069,map__25069__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_25087 = [null,null,null,null,null,null,null,null];(statearr_25087[(0)] = state_machine__6178__auto__);
(statearr_25087[(1)] = (1));
return statearr_25087;
});
var state_machine__6178__auto____1 = (function (state_25081){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_25081);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e25088){if((e25088 instanceof Object))
{var ex__6181__auto__ = e25088;var statearr_25089_25091 = state_25081;(statearr_25089_25091[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25092 = state_25081;
state_25081 = G__25092;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_25081){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_25081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__25069,map__25069__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_25090 = f__6193__auto__.call(null);(statearr_25090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_25090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__25069,map__25069__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__25093,key,view){var map__25094 = p__25093;var map__25094__$1 = ((cljs.core.seq_QMARK_.call(null,map__25094))?cljs.core.apply.call(null,cljs.core.hash_map,map__25094):map__25094);var ctx = map__25094__$1;var popupContainer = cljs.core.get.call(null,map__25094__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__25095 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__25095.appendTo(popupContainer);
G__25095.fadeIn((400));
return G__25095;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__25096,key,p__25097){var map__25098 = p__25096;var map__25098__$1 = ((cljs.core.seq_QMARK_.call(null,map__25098))?cljs.core.apply.call(null,cljs.core.hash_map,map__25098):map__25098);var ctx = map__25098__$1;var container = cljs.core.get.call(null,map__25098__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__25099 = p__25097;var map__25099__$1 = ((cljs.core.seq_QMARK_.call(null,map__25099))?cljs.core.apply.call(null,cljs.core.hash_map,map__25099):map__25099);var view = map__25099__$1;var elem = cljs.core.get.call(null,map__25099__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__25098,map__25098__$1,ctx,container,map__25099,map__25099__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__25098,map__25098__$1,ctx,container,map__25099,map__25099__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__25100,key,modelChan){var map__25101 = p__25100;var map__25101__$1 = ((cljs.core.seq_QMARK_.call(null,map__25101))?cljs.core.apply.call(null,cljs.core.hash_map,map__25101):map__25101);var ctx = map__25101__$1;var tmpl_item = cljs.core.get.call(null,map__25101__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item){
return (function (state_25116){var state_val_25117 = (state_25116[(1)]);if((state_val_25117 === (2)))
{var inst_25104 = (state_25116[(2)]);var inst_25105 = cljs.core.nth.call(null,inst_25104,(0),null);var inst_25106 = cljs.core.nth.call(null,inst_25104,(1),null);var inst_25107 = $("#tmpl_bigPhoto");var inst_25108 = inst_25107.tmpl(inst_25106,tmpl_item);var inst_25109 = inst_25108.find("#mc_bigPhotoFixPosition");var inst_25110 = (function (){var back = inst_25109;var elem = inst_25108;var tmpl = inst_25107;var model = inst_25106;var err = inst_25105;var vec__25102 = inst_25104;return ((function (back,elem,tmpl,model,err,vec__25102,inst_25104,inst_25105,inst_25106,inst_25107,inst_25108,inst_25109,state_val_25117,c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__25102,inst_25104,inst_25105,inst_25106,inst_25107,inst_25108,inst_25109,state_val_25117,c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__25102,inst_25104,inst_25105,inst_25106,inst_25107,inst_25108,inst_25109,state_val_25117,c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item){
return (function (state_25123){var state_val_25124 = (state_25123[(1)]);if((state_val_25124 === (2)))
{var inst_25121 = (state_25123[(2)]);var state_25123__$1 = state_25123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25123__$1,inst_25121);
} else
{if((state_val_25124 === (1)))
{var inst_25118 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_25119 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25118,null));var state_25123__$1 = state_25123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25123__$1,(2),tool.react.OnReact,inst_25119);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__25102,inst_25104,inst_25105,inst_25106,inst_25107,inst_25108,inst_25109,state_val_25117,c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__25102,inst_25104,inst_25105,inst_25106,inst_25107,inst_25108,inst_25109,state_val_25117,c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_25128 = [null,null,null,null,null,null,null];(statearr_25128[(0)] = state_machine__6178__auto__);
(statearr_25128[(1)] = (1));
return statearr_25128;
});
var state_machine__6178__auto____1 = (function (state_25123){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_25123);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e25129){if((e25129 instanceof Object))
{var ex__6181__auto__ = e25129;var statearr_25130_25140 = state_25123;(statearr_25130_25140[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25141 = state_25123;
state_25123 = G__25141;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_25123){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_25123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__25102,inst_25104,inst_25105,inst_25106,inst_25107,inst_25108,inst_25109,state_val_25117,c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_25131 = f__6193__auto__.call(null);(statearr_25131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_25131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__25102,inst_25104,inst_25105,inst_25106,inst_25107,inst_25108,inst_25109,state_val_25117,c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__25102,inst_25104,inst_25105,inst_25106,inst_25107,inst_25108,inst_25109,state_val_25117,c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item))
})();var inst_25111 = inst_25109.on("click",inst_25110);var inst_25112 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_25113 = [inst_25108,key];var inst_25114 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25112,inst_25113);var state_25116__$1 = (function (){var statearr_25132 = state_25116;(statearr_25132[(7)] = inst_25111);
return statearr_25132;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25116__$1,inst_25114);
} else
{if((state_val_25117 === (1)))
{var state_25116__$1 = state_25116;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25116__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_25136 = [null,null,null,null,null,null,null,null];(statearr_25136[(0)] = state_machine__6178__auto__);
(statearr_25136[(1)] = (1));
return statearr_25136;
});
var state_machine__6178__auto____1 = (function (state_25116){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_25116);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e25137){if((e25137 instanceof Object))
{var ex__6181__auto__ = e25137;var statearr_25138_25142 = state_25116;(statearr_25138_25142[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25116);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25143 = state_25116;
state_25116 = G__25143;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_25116){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_25116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_25139 = f__6193__auto__.call(null);(statearr_25139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_25139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__25101,map__25101__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
