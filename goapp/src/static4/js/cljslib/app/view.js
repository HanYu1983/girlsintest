// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__12669,key,view){var map__12670 = p__12669;var map__12670__$1 = ((cljs.core.seq_QMARK_.call(null,map__12670))?cljs.core.apply.call(null,cljs.core.hash_map,map__12670):map__12670);var ctx = map__12670__$1;var container = cljs.core.get.call(null,map__12670__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__12671_12690 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__12671_12690.appendTo(container);
G__12671_12690.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__12670,map__12670__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__12670,map__12670__$1,ctx,container){
return (function (state_12681){var state_val_12682 = (state_12681[(1)]);if((state_val_12682 === (2)))
{var inst_12679 = (state_12681[(2)]);var state_12681__$1 = state_12681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12681__$1,inst_12679);
} else
{if((state_val_12682 === (1)))
{var inst_12672 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_12673 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_12674 = [inst_12673,view];var inst_12675 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12672,inst_12674);var inst_12676 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_12675];var inst_12677 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12676,null));var state_12681__$1 = state_12681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12681__$1,(2),tool.react.OnReact,inst_12677);
} else
{return null;
}
}
});})(c__6192__auto__,map__12670,map__12670__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__12670,map__12670__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12686 = [null,null,null,null,null,null,null];(statearr_12686[(0)] = state_machine__6178__auto__);
(statearr_12686[(1)] = (1));
return statearr_12686;
});
var state_machine__6178__auto____1 = (function (state_12681){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12687){if((e12687 instanceof Object))
{var ex__6181__auto__ = e12687;var statearr_12688_12691 = state_12681;(statearr_12688_12691[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12692 = state_12681;
state_12681 = G__12692;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12681){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__12670,map__12670__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_12689 = f__6193__auto__.call(null);(statearr_12689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__12670,map__12670__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__12693,key,view){var map__12694 = p__12693;var map__12694__$1 = ((cljs.core.seq_QMARK_.call(null,map__12694))?cljs.core.apply.call(null,cljs.core.hash_map,map__12694):map__12694);var ctx = map__12694__$1;var container = cljs.core.get.call(null,map__12694__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__12695 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__12695.remove();
return G__12695;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_12858 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_12859 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_12860 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_12860.off("click");
btn_search_12859.off("click");
mc_modelContainer_12858.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__12777,key,modelChan){var map__12778 = p__12777;var map__12778__$1 = ((cljs.core.seq_QMARK_.call(null,map__12778))?cljs.core.apply.call(null,cljs.core.hash_map,map__12778):map__12778);var ctx = map__12778__$1;var tmpl_item = cljs.core.get.call(null,map__12778__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (state_12799){var state_val_12800 = (state_12799[(1)]);if((state_val_12800 === (2)))
{var inst_12781 = (state_12799[(2)]);var inst_12782 = cljs.core.nth.call(null,inst_12781,(0),null);var inst_12783 = cljs.core.nth.call(null,inst_12781,(1),null);var inst_12784 = $("#tmpl_streetsnap_list");var inst_12785 = inst_12784.tmpl(inst_12783,tmpl_item);var inst_12786 = inst_12785.find("#mc_modelContainer");var inst_12787 = inst_12785.find("#btn_search");var inst_12788 = inst_12785.find("#btn_return");var inst_12789 = (function (){var btn_return = inst_12788;var btn_search = inst_12787;var mc_modelContainer = inst_12786;var elem = inst_12785;var tmpl = inst_12784;var model = inst_12783;var err = inst_12782;var vec__12779 = inst_12781;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (state_12806){var state_val_12807 = (state_12806[(1)]);if((state_val_12807 === (2)))
{var inst_12804 = (state_12806[(2)]);var state_12806__$1 = state_12806;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12806__$1,inst_12804);
} else
{if((state_val_12807 === (1)))
{var inst_12801 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_12802 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12801,null));var state_12806__$1 = state_12806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12806__$1,(2),tool.react.OnReact,inst_12802);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12811 = [null,null,null,null,null,null,null];(statearr_12811[(0)] = state_machine__6178__auto__);
(statearr_12811[(1)] = (1));
return statearr_12811;
});
var state_machine__6178__auto____1 = (function (state_12806){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12806);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12812){if((e12812 instanceof Object))
{var ex__6181__auto__ = e12812;var statearr_12813_12861 = state_12806;(statearr_12813_12861[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12806);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12812;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12862 = state_12806;
state_12806 = G__12862;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12806){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12814 = f__6193__auto__.call(null);(statearr_12814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
})();var inst_12790 = inst_12788.click(inst_12789);var inst_12791 = (function (){var btn_return = inst_12788;var btn_search = inst_12787;var mc_modelContainer = inst_12786;var elem = inst_12785;var tmpl = inst_12784;var model = inst_12783;var err = inst_12782;var vec__12779 = inst_12781;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (state_12823){var state_val_12824 = (state_12823[(1)]);if((state_val_12824 === (2)))
{var inst_12821 = (state_12823[(2)]);var state_12823__$1 = state_12823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12823__$1,inst_12821);
} else
{if((state_val_12824 === (1)))
{var inst_12815 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_12816 = [searchKey];var inst_12817 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12815,inst_12816);var inst_12818 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_12817];var inst_12819 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12818,null));var state_12823__$1 = state_12823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12823__$1,(2),tool.react.OnReact,inst_12819);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12828 = [null,null,null,null,null,null,null];(statearr_12828[(0)] = state_machine__6178__auto__);
(statearr_12828[(1)] = (1));
return statearr_12828;
});
var state_machine__6178__auto____1 = (function (state_12823){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12823);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12829){if((e12829 instanceof Object))
{var ex__6181__auto__ = e12829;var statearr_12830_12863 = state_12823;(statearr_12830_12863[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12823);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12864 = state_12823;
state_12823 = G__12864;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12823){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12831 = f__6193__auto__.call(null);(statearr_12831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
})();var inst_12792 = inst_12787.click(inst_12791);var inst_12793 = (function (){var btn_return = inst_12788;var btn_search = inst_12787;var mc_modelContainer = inst_12786;var elem = inst_12785;var tmpl = inst_12784;var model = inst_12783;var err = inst_12782;var vec__12779 = inst_12781;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,inst_12791,inst_12792,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,inst_12791,inst_12792,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,inst_12791,inst_12792,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function (state_12841){var state_val_12842 = (state_12841[(1)]);if((state_val_12842 === (2)))
{var inst_12839 = (state_12841[(2)]);var state_12841__$1 = state_12841;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12841__$1,inst_12839);
} else
{if((state_val_12842 === (1)))
{var inst_12832 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12833 = that.id;var inst_12834 = [inst_12833];var inst_12835 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12832,inst_12834);var inst_12836 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_12835];var inst_12837 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12836,null));var state_12841__$1 = state_12841;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12841__$1,(2),tool.react.OnReact,inst_12837);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,inst_12791,inst_12792,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,inst_12791,inst_12792,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12846 = [null,null,null,null,null,null,null];(statearr_12846[(0)] = state_machine__6178__auto__);
(statearr_12846[(1)] = (1));
return statearr_12846;
});
var state_machine__6178__auto____1 = (function (state_12841){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12841);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12847){if((e12847 instanceof Object))
{var ex__6181__auto__ = e12847;var statearr_12848_12865 = state_12841;(statearr_12848_12865[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12841);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12866 = state_12841;
state_12841 = G__12866;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12841){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,inst_12791,inst_12792,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12849 = f__6193__auto__.call(null);(statearr_12849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,inst_12791,inst_12792,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12779,inst_12781,inst_12782,inst_12783,inst_12784,inst_12785,inst_12786,inst_12787,inst_12788,inst_12789,inst_12790,inst_12791,inst_12792,state_val_12800,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
})();var inst_12794 = inst_12786.delegate("div[modelFrame]","click",inst_12793);var inst_12795 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_12796 = [inst_12785,name];var inst_12797 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12795,inst_12796);var state_12799__$1 = (function (){var statearr_12850 = state_12799;(statearr_12850[(7)] = inst_12792);
(statearr_12850[(8)] = inst_12794);
(statearr_12850[(9)] = inst_12790);
return statearr_12850;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12799__$1,inst_12797);
} else
{if((state_val_12800 === (1)))
{var state_12799__$1 = state_12799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12799__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12854 = [null,null,null,null,null,null,null,null,null,null];(statearr_12854[(0)] = state_machine__6178__auto__);
(statearr_12854[(1)] = (1));
return statearr_12854;
});
var state_machine__6178__auto____1 = (function (state_12799){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12799);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12855){if((e12855 instanceof Object))
{var ex__6181__auto__ = e12855;var statearr_12856_12867 = state_12799;(statearr_12856_12867[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12799);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12868 = state_12799;
state_12799 = G__12868;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12799){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12857 = f__6193__auto__.call(null);(statearr_12857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__12778,map__12778__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__13054){var map__13055 = p__13054;var map__13055__$1 = ((cljs.core.seq_QMARK_.call(null,map__13055))?cljs.core.apply.call(null,cljs.core.hash_map,map__13055):map__13055);var view = map__13055__$1;var elem = cljs.core.get.call(null,map__13055__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_13239 = elem.find("#mc_historyContainer");var mc_sideContainer_13240 = elem.find("#mc_sideContainer");var mc_bottomContainer_13241 = elem.find("#mc_bottomContainer");var img_stylePicture_13242 = elem.find("#img_stylePicture");var btn_share_13243 = elem.find("#btn_share");var btn_fullscreen_13244 = elem.find("#btn_fullscreen");var btn_more_13245 = elem.find("#btn_more");mc_modelContainer_13239.undelegate("img","click");
mc_sideContainer_13240.undelegate("img","click");
mc_bottomContainer_13241.undelegate("img","click");
img_stylePicture_13242.off("click");
btn_share_13243.off("click");
btn_fullscreen_13244.off("click");
btn_more_13245.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__13056){var map__13057 = p__13056;var map__13057__$1 = ((cljs.core.seq_QMARK_.call(null,map__13057))?cljs.core.apply.call(null,cljs.core.hash_map,map__13057):map__13057);var view = map__13057__$1;var elem = cljs.core.get.call(null,map__13057__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_13246 = elem.find("#mc_3dmask");var c__6192__auto___13247 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13247,mc_3dmask_13246,map__13057,map__13057__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13247,mc_3dmask_13246,map__13057,map__13057__$1,view,elem){
return (function (state_13063){var state_val_13064 = (state_13063[(1)]);if((state_val_13064 === (2)))
{var inst_13060 = (state_13063[(2)]);var inst_13061 = mc_3dmask_13246.fadeOut((400));var state_13063__$1 = (function (){var statearr_13065 = state_13063;(statearr_13065[(7)] = inst_13060);
return statearr_13065;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13063__$1,inst_13061);
} else
{if((state_val_13064 === (1)))
{var inst_13058 = cljs.core.async.timeout.call(null,(5000));var state_13063__$1 = state_13063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13063__$1,(2),inst_13058);
} else
{return null;
}
}
});})(c__6192__auto___13247,mc_3dmask_13246,map__13057,map__13057__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___13247,mc_3dmask_13246,map__13057,map__13057__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13069 = [null,null,null,null,null,null,null,null];(statearr_13069[(0)] = state_machine__6178__auto__);
(statearr_13069[(1)] = (1));
return statearr_13069;
});
var state_machine__6178__auto____1 = (function (state_13063){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13063);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13070){if((e13070 instanceof Object))
{var ex__6181__auto__ = e13070;var statearr_13071_13248 = state_13063;(statearr_13071_13248[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13063);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13249 = state_13063;
state_13063 = G__13249;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13063){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13247,mc_3dmask_13246,map__13057,map__13057__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_13072 = f__6193__auto__.call(null);(statearr_13072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13247);
return statearr_13072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13247,mc_3dmask_13246,map__13057,map__13057__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__13073,key,modelChan){var map__13074 = p__13073;var map__13074__$1 = ((cljs.core.seq_QMARK_.call(null,map__13074))?cljs.core.apply.call(null,cljs.core.hash_map,map__13074):map__13074);var ctx = map__13074__$1;var tmpl_item = cljs.core.get.call(null,map__13074__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (state_13107){var state_val_13108 = (state_13107[(1)]);if((state_val_13108 === (2)))
{var inst_13077 = (state_13107[(2)]);var inst_13078 = cljs.core.nth.call(null,inst_13077,(0),null);var inst_13079 = cljs.core.nth.call(null,inst_13077,(1),null);var inst_13080 = $("#tmpl_streetsnap");var inst_13081 = inst_13080.tmpl(inst_13079,tmpl_item);var inst_13082 = inst_13081.find("#mc_historyContainer");var inst_13083 = inst_13081.find("#mc_sideContainer");var inst_13084 = inst_13081.find("#mc_bottomContainer");var inst_13085 = inst_13081.find("#img_stylePicture");var inst_13086 = inst_13081.find("#btn_share");var inst_13087 = inst_13081.find("#btn_fullscreen");var inst_13088 = inst_13081.find("#btn_more");var inst_13089 = (function (){var model = inst_13079;var btn_more = inst_13088;var mc_sideContainer = inst_13083;var mc_historyContainer = inst_13082;var vec__13075 = inst_13077;var err = inst_13078;var tmpl = inst_13080;var img_stylePicture = inst_13085;var elem = inst_13081;var btn_share = inst_13086;var mc_bottomContainer = inst_13084;var btn_fullscreen = inst_13087;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (state_13114){var state_val_13115 = (state_13114[(1)]);if((state_val_13115 === (2)))
{var inst_13112 = (state_13114[(2)]);var state_13114__$1 = state_13114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13114__$1,inst_13112);
} else
{if((state_val_13115 === (1)))
{var inst_13109 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_13110 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13109,null));var state_13114__$1 = state_13114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13114__$1,(2),tool.react.OnReact,inst_13110);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13119 = [null,null,null,null,null,null,null];(statearr_13119[(0)] = state_machine__6178__auto__);
(statearr_13119[(1)] = (1));
return statearr_13119;
});
var state_machine__6178__auto____1 = (function (state_13114){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13114);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13120){if((e13120 instanceof Object))
{var ex__6181__auto__ = e13120;var statearr_13121_13250 = state_13114;(statearr_13121_13250[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13251 = state_13114;
state_13114 = G__13251;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13114){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13122 = f__6193__auto__.call(null);(statearr_13122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var inst_13090 = inst_13088.on("click",inst_13089);var inst_13091 = (function (){var model = inst_13079;var btn_more = inst_13088;var mc_sideContainer = inst_13083;var mc_historyContainer = inst_13082;var vec__13075 = inst_13077;var err = inst_13078;var tmpl = inst_13080;var img_stylePicture = inst_13085;var elem = inst_13081;var btn_share = inst_13086;var mc_bottomContainer = inst_13084;var btn_fullscreen = inst_13087;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (state_13131){var state_val_13132 = (state_13131[(1)]);if((state_val_13132 === (2)))
{var inst_13129 = (state_13131[(2)]);var state_13131__$1 = state_13131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13131__$1,inst_13129);
} else
{if((state_val_13132 === (1)))
{var inst_13123 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_13124 = [model];var inst_13125 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13123,inst_13124);var inst_13126 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_13125];var inst_13127 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13126,null));var state_13131__$1 = state_13131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13131__$1,(2),tool.react.OnReact,inst_13127);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13136 = [null,null,null,null,null,null,null];(statearr_13136[(0)] = state_machine__6178__auto__);
(statearr_13136[(1)] = (1));
return statearr_13136;
});
var state_machine__6178__auto____1 = (function (state_13131){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13131);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13137){if((e13137 instanceof Object))
{var ex__6181__auto__ = e13137;var statearr_13138_13252 = state_13131;(statearr_13138_13252[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13131);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13253 = state_13131;
state_13131 = G__13253;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13131){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13139 = f__6193__auto__.call(null);(statearr_13139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var inst_13092 = inst_13087.on("click",inst_13091);var inst_13093 = (function (){var model = inst_13079;var btn_more = inst_13088;var mc_sideContainer = inst_13083;var mc_historyContainer = inst_13082;var vec__13075 = inst_13077;var err = inst_13078;var tmpl = inst_13080;var img_stylePicture = inst_13085;var elem = inst_13081;var btn_share = inst_13086;var mc_bottomContainer = inst_13084;var btn_fullscreen = inst_13087;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (state_13149){var state_val_13150 = (state_13149[(1)]);if((state_val_13150 === (2)))
{var inst_13147 = (state_13149[(2)]);var state_13149__$1 = state_13149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13149__$1,inst_13147);
} else
{if((state_val_13150 === (1)))
{var inst_13140 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_13141 = model.styleUrl;var inst_13142 = [inst_13141];var inst_13143 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13140,inst_13142);var inst_13144 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_13143];var inst_13145 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13144,null));var state_13149__$1 = state_13149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13149__$1,(2),tool.react.OnReact,inst_13145);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13154 = [null,null,null,null,null,null,null];(statearr_13154[(0)] = state_machine__6178__auto__);
(statearr_13154[(1)] = (1));
return statearr_13154;
});
var state_machine__6178__auto____1 = (function (state_13149){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13149);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13155){if((e13155 instanceof Object))
{var ex__6181__auto__ = e13155;var statearr_13156_13254 = state_13149;(statearr_13156_13254[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13255 = state_13149;
state_13149 = G__13255;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13149){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13157 = f__6193__auto__.call(null);(statearr_13157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var inst_13094 = inst_13085.on("click",inst_13093);var inst_13095 = (function (){var model = inst_13079;var btn_more = inst_13088;var mc_sideContainer = inst_13083;var mc_historyContainer = inst_13082;var vec__13075 = inst_13077;var err = inst_13078;var tmpl = inst_13080;var img_stylePicture = inst_13085;var elem = inst_13081;var btn_share = inst_13086;var mc_bottomContainer = inst_13084;var btn_fullscreen = inst_13087;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (state_13166){var state_val_13167 = (state_13166[(1)]);if((state_val_13167 === (2)))
{var inst_13164 = (state_13166[(2)]);var state_13166__$1 = state_13166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13166__$1,inst_13164);
} else
{if((state_val_13167 === (1)))
{var inst_13158 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_13159 = [model];var inst_13160 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13158,inst_13159);var inst_13161 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_13160];var inst_13162 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13161,null));var state_13166__$1 = state_13166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13166__$1,(2),tool.react.OnReact,inst_13162);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13171 = [null,null,null,null,null,null,null];(statearr_13171[(0)] = state_machine__6178__auto__);
(statearr_13171[(1)] = (1));
return statearr_13171;
});
var state_machine__6178__auto____1 = (function (state_13166){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13166);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13172){if((e13172 instanceof Object))
{var ex__6181__auto__ = e13172;var statearr_13173_13256 = state_13166;(statearr_13173_13256[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13166);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13172;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13257 = state_13166;
state_13166 = G__13257;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13166){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13174 = f__6193__auto__.call(null);(statearr_13174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var inst_13096 = inst_13086.on("click",inst_13095);var inst_13097 = (function (){var model = inst_13079;var btn_more = inst_13088;var mc_sideContainer = inst_13083;var mc_historyContainer = inst_13082;var vec__13075 = inst_13077;var err = inst_13078;var tmpl = inst_13080;var img_stylePicture = inst_13085;var elem = inst_13081;var btn_share = inst_13086;var mc_bottomContainer = inst_13084;var btn_fullscreen = inst_13087;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (state_13185){var state_val_13186 = (state_13185[(1)]);if((state_val_13186 === (2)))
{var inst_13183 = (state_13185[(2)]);var state_13185__$1 = state_13185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13185__$1,inst_13183);
} else
{if((state_val_13186 === (1)))
{var inst_13175 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_13176 = that.id;var inst_13177 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13176));var inst_13178 = [inst_13177];var inst_13179 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13175,inst_13178);var inst_13180 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_13179];var inst_13181 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13180,null));var state_13185__$1 = state_13185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13185__$1,(2),tool.react.OnReact,inst_13181);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13190 = [null,null,null,null,null,null,null];(statearr_13190[(0)] = state_machine__6178__auto__);
(statearr_13190[(1)] = (1));
return statearr_13190;
});
var state_machine__6178__auto____1 = (function (state_13185){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13185);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13191){if((e13191 instanceof Object))
{var ex__6181__auto__ = e13191;var statearr_13192_13258 = state_13185;(statearr_13192_13258[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13185);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13259 = state_13185;
state_13185 = G__13259;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13185){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13193 = f__6193__auto__.call(null);(statearr_13193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var inst_13098 = inst_13083.delegate("img","click",inst_13097);var inst_13099 = (function (){var model = inst_13079;var btn_more = inst_13088;var mc_sideContainer = inst_13083;var mc_historyContainer = inst_13082;var vec__13075 = inst_13077;var err = inst_13078;var tmpl = inst_13080;var img_stylePicture = inst_13085;var elem = inst_13081;var btn_share = inst_13086;var mc_bottomContainer = inst_13084;var btn_fullscreen = inst_13087;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (state_13204){var state_val_13205 = (state_13204[(1)]);if((state_val_13205 === (2)))
{var inst_13202 = (state_13204[(2)]);var state_13204__$1 = state_13204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13204__$1,inst_13202);
} else
{if((state_val_13205 === (1)))
{var inst_13194 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_13195 = that.id;var inst_13196 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13195));var inst_13197 = [inst_13196];var inst_13198 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13194,inst_13197);var inst_13199 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_13198];var inst_13200 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13199,null));var state_13204__$1 = state_13204;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13204__$1,(2),tool.react.OnReact,inst_13200);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13209 = [null,null,null,null,null,null,null];(statearr_13209[(0)] = state_machine__6178__auto__);
(statearr_13209[(1)] = (1));
return statearr_13209;
});
var state_machine__6178__auto____1 = (function (state_13204){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13204);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13210){if((e13210 instanceof Object))
{var ex__6181__auto__ = e13210;var statearr_13211_13260 = state_13204;(statearr_13211_13260[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13204);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13261 = state_13204;
state_13204 = G__13261;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13204){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13212 = f__6193__auto__.call(null);(statearr_13212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13212;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var inst_13100 = inst_13084.delegate("img","click",inst_13099);var inst_13101 = (function (){var model = inst_13079;var btn_more = inst_13088;var mc_sideContainer = inst_13083;var mc_historyContainer = inst_13082;var vec__13075 = inst_13077;var err = inst_13078;var tmpl = inst_13080;var img_stylePicture = inst_13085;var elem = inst_13081;var btn_share = inst_13086;var mc_bottomContainer = inst_13084;var btn_fullscreen = inst_13087;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,inst_13099,inst_13100,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,inst_13099,inst_13100,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,inst_13099,inst_13100,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function (state_13222){var state_val_13223 = (state_13222[(1)]);if((state_val_13223 === (2)))
{var inst_13220 = (state_13222[(2)]);var state_13222__$1 = state_13222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13222__$1,inst_13220);
} else
{if((state_val_13223 === (1)))
{var inst_13213 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_13214 = that.id;var inst_13215 = [inst_13214];var inst_13216 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13213,inst_13215);var inst_13217 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_13216];var inst_13218 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13217,null));var state_13222__$1 = state_13222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13222__$1,(2),tool.react.OnReact,inst_13218);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,inst_13099,inst_13100,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,inst_13099,inst_13100,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13227 = [null,null,null,null,null,null,null];(statearr_13227[(0)] = state_machine__6178__auto__);
(statearr_13227[(1)] = (1));
return statearr_13227;
});
var state_machine__6178__auto____1 = (function (state_13222){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13228){if((e13228 instanceof Object))
{var ex__6181__auto__ = e13228;var statearr_13229_13262 = state_13222;(statearr_13229_13262[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13263 = state_13222;
state_13222 = G__13263;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13222){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,inst_13099,inst_13100,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13230 = f__6193__auto__.call(null);(statearr_13230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,inst_13099,inst_13100,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__13075,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13077,inst_13078,inst_13079,inst_13080,inst_13081,inst_13082,inst_13083,inst_13084,inst_13085,inst_13086,inst_13087,inst_13088,inst_13089,inst_13090,inst_13091,inst_13092,inst_13093,inst_13094,inst_13095,inst_13096,inst_13097,inst_13098,inst_13099,inst_13100,state_val_13108,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var inst_13102 = inst_13082.delegate("img","click",inst_13101);var inst_13103 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_13104 = [inst_13081,name];var inst_13105 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13103,inst_13104);var state_13107__$1 = (function (){var statearr_13231 = state_13107;(statearr_13231[(7)] = inst_13096);
(statearr_13231[(8)] = inst_13098);
(statearr_13231[(9)] = inst_13094);
(statearr_13231[(10)] = inst_13100);
(statearr_13231[(11)] = inst_13092);
(statearr_13231[(12)] = inst_13102);
(statearr_13231[(13)] = inst_13090);
return statearr_13231;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13107__$1,inst_13105);
} else
{if((state_val_13108 === (1)))
{var state_13107__$1 = state_13107;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13107__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13235[(0)] = state_machine__6178__auto__);
(statearr_13235[(1)] = (1));
return statearr_13235;
});
var state_machine__6178__auto____1 = (function (state_13107){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13107);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13236){if((e13236 instanceof Object))
{var ex__6181__auto__ = e13236;var statearr_13237_13264 = state_13107;(statearr_13237_13264[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13107);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13265 = state_13107;
state_13107 = G__13265;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13107){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13238 = f__6193__auto__.call(null);(statearr_13238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13074,map__13074__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__13266){var map__13267 = p__13266;var map__13267__$1 = ((cljs.core.seq_QMARK_.call(null,map__13267))?cljs.core.apply.call(null,cljs.core.hash_map,map__13267):map__13267);var view = map__13267__$1;var elem = cljs.core.get.call(null,map__13267__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_13283 = elem.find("#mc_3dmask");var c__6192__auto___13284 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13284,mc_3dmask_13283,map__13267,map__13267__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13284,mc_3dmask_13283,map__13267,map__13267__$1,view,elem){
return (function (state_13273){var state_val_13274 = (state_13273[(1)]);if((state_val_13274 === (2)))
{var inst_13270 = (state_13273[(2)]);var inst_13271 = mc_3dmask_13283.fadeOut((400));var state_13273__$1 = (function (){var statearr_13275 = state_13273;(statearr_13275[(7)] = inst_13270);
return statearr_13275;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13273__$1,inst_13271);
} else
{if((state_val_13274 === (1)))
{var inst_13268 = cljs.core.async.timeout.call(null,(1000));var state_13273__$1 = state_13273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13273__$1,(2),inst_13268);
} else
{return null;
}
}
});})(c__6192__auto___13284,mc_3dmask_13283,map__13267,map__13267__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___13284,mc_3dmask_13283,map__13267,map__13267__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13279 = [null,null,null,null,null,null,null,null];(statearr_13279[(0)] = state_machine__6178__auto__);
(statearr_13279[(1)] = (1));
return statearr_13279;
});
var state_machine__6178__auto____1 = (function (state_13273){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13273);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13280){if((e13280 instanceof Object))
{var ex__6181__auto__ = e13280;var statearr_13281_13285 = state_13273;(statearr_13281_13285[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13273);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13286 = state_13273;
state_13273 = G__13286;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13273){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13284,mc_3dmask_13283,map__13267,map__13267__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_13282 = f__6193__auto__.call(null);(statearr_13282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13284);
return statearr_13282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13284,mc_3dmask_13283,map__13267,map__13267__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__13287,key,modelChan){var map__13288 = p__13287;var map__13288__$1 = ((cljs.core.seq_QMARK_.call(null,map__13288))?cljs.core.apply.call(null,cljs.core.hash_map,map__13288):map__13288);var ctx = map__13288__$1;var tmpl_item = cljs.core.get.call(null,map__13288__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13288,map__13288__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13288,map__13288__$1,ctx,tmpl_item){
return (function (state_13300){var state_val_13301 = (state_13300[(1)]);if((state_val_13301 === (2)))
{var inst_13291 = (state_13300[(2)]);var inst_13292 = cljs.core.nth.call(null,inst_13291,(0),null);var inst_13293 = cljs.core.nth.call(null,inst_13291,(1),null);var inst_13294 = $("#tmpl_home");var inst_13295 = inst_13294.tmpl(inst_13293,tmpl_item);var inst_13296 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_13297 = [inst_13295,key];var inst_13298 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13296,inst_13297);var state_13300__$1 = (function (){var statearr_13302 = state_13300;(statearr_13302[(7)] = inst_13292);
return statearr_13302;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13300__$1,inst_13298);
} else
{if((state_val_13301 === (1)))
{var state_13300__$1 = state_13300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13300__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__13288,map__13288__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13288,map__13288__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13306 = [null,null,null,null,null,null,null,null];(statearr_13306[(0)] = state_machine__6178__auto__);
(statearr_13306[(1)] = (1));
return statearr_13306;
});
var state_machine__6178__auto____1 = (function (state_13300){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13300);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13307){if((e13307 instanceof Object))
{var ex__6181__auto__ = e13307;var statearr_13308_13310 = state_13300;(statearr_13308_13310[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13300);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13311 = state_13300;
state_13300 = G__13311;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13300){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13288,map__13288__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13309 = f__6193__auto__.call(null);(statearr_13309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13288,map__13288__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__13312,key,view){var map__13313 = p__13312;var map__13313__$1 = ((cljs.core.seq_QMARK_.call(null,map__13313))?cljs.core.apply.call(null,cljs.core.hash_map,map__13313):map__13313);var ctx = map__13313__$1;var popupContainer = cljs.core.get.call(null,map__13313__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__13314 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__13314.appendTo(popupContainer);
G__13314.fadeIn((400));
return G__13314;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__13315,key,p__13316){var map__13317 = p__13315;var map__13317__$1 = ((cljs.core.seq_QMARK_.call(null,map__13317))?cljs.core.apply.call(null,cljs.core.hash_map,map__13317):map__13317);var ctx = map__13317__$1;var container = cljs.core.get.call(null,map__13317__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__13318 = p__13316;var map__13318__$1 = ((cljs.core.seq_QMARK_.call(null,map__13318))?cljs.core.apply.call(null,cljs.core.hash_map,map__13318):map__13318);var view = map__13318__$1;var elem = cljs.core.get.call(null,map__13318__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__13317,map__13317__$1,ctx,container,map__13318,map__13318__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__13317,map__13317__$1,ctx,container,map__13318,map__13318__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__13319,key,modelChan){var map__13320 = p__13319;var map__13320__$1 = ((cljs.core.seq_QMARK_.call(null,map__13320))?cljs.core.apply.call(null,cljs.core.hash_map,map__13320):map__13320);var ctx = map__13320__$1;var tmpl_item = cljs.core.get.call(null,map__13320__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item){
return (function (state_13335){var state_val_13336 = (state_13335[(1)]);if((state_val_13336 === (2)))
{var inst_13323 = (state_13335[(2)]);var inst_13324 = cljs.core.nth.call(null,inst_13323,(0),null);var inst_13325 = cljs.core.nth.call(null,inst_13323,(1),null);var inst_13326 = $("#tmpl_bigPhoto");var inst_13327 = inst_13326.tmpl(inst_13325,tmpl_item);var inst_13328 = inst_13327.find("#mc_bigPhotoFixPosition");var inst_13329 = (function (){var back = inst_13328;var elem = inst_13327;var tmpl = inst_13326;var model = inst_13325;var err = inst_13324;var vec__13321 = inst_13323;return ((function (back,elem,tmpl,model,err,vec__13321,inst_13323,inst_13324,inst_13325,inst_13326,inst_13327,inst_13328,state_val_13336,c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__13321,inst_13323,inst_13324,inst_13325,inst_13326,inst_13327,inst_13328,state_val_13336,c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__13321,inst_13323,inst_13324,inst_13325,inst_13326,inst_13327,inst_13328,state_val_13336,c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item){
return (function (state_13342){var state_val_13343 = (state_13342[(1)]);if((state_val_13343 === (2)))
{var inst_13340 = (state_13342[(2)]);var state_13342__$1 = state_13342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13342__$1,inst_13340);
} else
{if((state_val_13343 === (1)))
{var inst_13337 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_13338 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13337,null));var state_13342__$1 = state_13342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13342__$1,(2),tool.react.OnReact,inst_13338);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__13321,inst_13323,inst_13324,inst_13325,inst_13326,inst_13327,inst_13328,state_val_13336,c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__13321,inst_13323,inst_13324,inst_13325,inst_13326,inst_13327,inst_13328,state_val_13336,c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13347 = [null,null,null,null,null,null,null];(statearr_13347[(0)] = state_machine__6178__auto__);
(statearr_13347[(1)] = (1));
return statearr_13347;
});
var state_machine__6178__auto____1 = (function (state_13342){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13342);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13348){if((e13348 instanceof Object))
{var ex__6181__auto__ = e13348;var statearr_13349_13359 = state_13342;(statearr_13349_13359[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13342);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13360 = state_13342;
state_13342 = G__13360;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13342){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__13321,inst_13323,inst_13324,inst_13325,inst_13326,inst_13327,inst_13328,state_val_13336,c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13350 = f__6193__auto__.call(null);(statearr_13350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__13321,inst_13323,inst_13324,inst_13325,inst_13326,inst_13327,inst_13328,state_val_13336,c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__13321,inst_13323,inst_13324,inst_13325,inst_13326,inst_13327,inst_13328,state_val_13336,c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item))
})();var inst_13330 = inst_13328.on("click",inst_13329);var inst_13331 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_13332 = [inst_13327,key];var inst_13333 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13331,inst_13332);var state_13335__$1 = (function (){var statearr_13351 = state_13335;(statearr_13351[(7)] = inst_13330);
return statearr_13351;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13335__$1,inst_13333);
} else
{if((state_val_13336 === (1)))
{var state_13335__$1 = state_13335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13335__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13355 = [null,null,null,null,null,null,null,null];(statearr_13355[(0)] = state_machine__6178__auto__);
(statearr_13355[(1)] = (1));
return statearr_13355;
});
var state_machine__6178__auto____1 = (function (state_13335){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13335);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13356){if((e13356 instanceof Object))
{var ex__6181__auto__ = e13356;var statearr_13357_13361 = state_13335;(statearr_13357_13361[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13335);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13362 = state_13335;
state_13335 = G__13362;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13335){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13358 = f__6193__auto__.call(null);(statearr_13358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13320,map__13320__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__13363,key,modelChan){var map__13364 = p__13363;var map__13364__$1 = ((cljs.core.seq_QMARK_.call(null,map__13364))?cljs.core.apply.call(null,cljs.core.hash_map,map__13364):map__13364);var ctx = map__13364__$1;var tmpl_item = cljs.core.get.call(null,map__13364__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13364,map__13364__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13364,map__13364__$1,ctx,tmpl_item){
return (function (state_13376){var state_val_13377 = (state_13376[(1)]);if((state_val_13377 === (2)))
{var inst_13367 = (state_13376[(2)]);var inst_13368 = cljs.core.nth.call(null,inst_13367,(0),null);var inst_13369 = cljs.core.nth.call(null,inst_13367,(1),null);var inst_13370 = $("#tmpl_news");var inst_13371 = inst_13370.tmpl(inst_13369,tmpl_item);var inst_13372 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_13373 = [inst_13371,key];var inst_13374 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13372,inst_13373);var state_13376__$1 = (function (){var statearr_13378 = state_13376;(statearr_13378[(7)] = inst_13368);
return statearr_13378;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13376__$1,inst_13374);
} else
{if((state_val_13377 === (1)))
{var state_13376__$1 = state_13376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13376__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__13364,map__13364__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13364,map__13364__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13382 = [null,null,null,null,null,null,null,null];(statearr_13382[(0)] = state_machine__6178__auto__);
(statearr_13382[(1)] = (1));
return statearr_13382;
});
var state_machine__6178__auto____1 = (function (state_13376){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13376);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13383){if((e13383 instanceof Object))
{var ex__6181__auto__ = e13383;var statearr_13384_13386 = state_13376;(statearr_13384_13386[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13376);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13383;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13387 = state_13376;
state_13376 = G__13387;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13376){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13364,map__13364__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13385 = f__6193__auto__.call(null);(statearr_13385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13385;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13364,map__13364__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
