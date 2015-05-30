// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__15622,key,view){var map__15623 = p__15622;var map__15623__$1 = ((cljs.core.seq_QMARK_.call(null,map__15623))?cljs.core.apply.call(null,cljs.core.hash_map,map__15623):map__15623);var ctx = map__15623__$1;var container = cljs.core.get.call(null,map__15623__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var c__6192__auto___15643 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___15643,map__15623,map__15623__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___15643,map__15623,map__15623__$1,ctx,container){
return (function (state_15633){var state_val_15634 = (state_15633[(1)]);if((state_val_15634 === (2)))
{var inst_15631 = (state_15633[(2)]);var state_15633__$1 = state_15633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15633__$1,inst_15631);
} else
{if((state_val_15634 === (1)))
{var inst_15624 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094)];var inst_15625 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_15626 = [inst_15625];var inst_15627 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15624,inst_15626);var inst_15628 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_15627];var inst_15629 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15628,null));var state_15633__$1 = state_15633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15633__$1,(2),tool.react.OnReact,inst_15629);
} else
{return null;
}
}
});})(c__6192__auto___15643,map__15623,map__15623__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto___15643,map__15623,map__15623__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15638 = [null,null,null,null,null,null,null];(statearr_15638[(0)] = state_machine__6178__auto__);
(statearr_15638[(1)] = (1));
return statearr_15638;
});
var state_machine__6178__auto____1 = (function (state_15633){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15633);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15639){if((e15639 instanceof Object))
{var ex__6181__auto__ = e15639;var statearr_15640_15644 = state_15633;(statearr_15640_15644[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15633);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15645 = state_15633;
state_15633 = G__15645;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15633){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___15643,map__15623,map__15623__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_15641 = f__6193__auto__.call(null);(statearr_15641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___15643);
return statearr_15641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___15643,map__15623,map__15623__$1,ctx,container))
);
var G__15642 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__15642.appendTo(container);
G__15642.fadeIn((400));
return G__15642;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__15646,key,view){var map__15647 = p__15646;var map__15647__$1 = ((cljs.core.seq_QMARK_.call(null,map__15647))?cljs.core.apply.call(null,cljs.core.hash_map,map__15647):map__15647);var ctx = map__15647__$1;var container = cljs.core.get.call(null,map__15647__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__15648 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__15648.remove();
return G__15648;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_15811 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_15812 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_15813 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_15813.off("click");
btn_search_15812.off("click");
mc_modelContainer_15811.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__15730,key,modelChan){var map__15731 = p__15730;var map__15731__$1 = ((cljs.core.seq_QMARK_.call(null,map__15731))?cljs.core.apply.call(null,cljs.core.hash_map,map__15731):map__15731);var ctx = map__15731__$1;var tmpl_item = cljs.core.get.call(null,map__15731__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (state_15752){var state_val_15753 = (state_15752[(1)]);if((state_val_15753 === (2)))
{var inst_15734 = (state_15752[(2)]);var inst_15735 = cljs.core.nth.call(null,inst_15734,(0),null);var inst_15736 = cljs.core.nth.call(null,inst_15734,(1),null);var inst_15737 = $("#tmpl_streetsnap_list");var inst_15738 = inst_15737.tmpl(inst_15736,tmpl_item);var inst_15739 = inst_15738.find("#mc_modelContainer");var inst_15740 = inst_15738.find("#btn_search");var inst_15741 = inst_15738.find("#btn_return");var inst_15742 = (function (){var btn_return = inst_15741;var btn_search = inst_15740;var mc_modelContainer = inst_15739;var elem = inst_15738;var tmpl = inst_15737;var model = inst_15736;var err = inst_15735;var vec__15732 = inst_15734;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (state_15759){var state_val_15760 = (state_15759[(1)]);if((state_val_15760 === (2)))
{var inst_15757 = (state_15759[(2)]);var state_15759__$1 = state_15759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15759__$1,inst_15757);
} else
{if((state_val_15760 === (1)))
{var inst_15754 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_15755 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15754,null));var state_15759__$1 = state_15759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15759__$1,(2),tool.react.OnReact,inst_15755);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15764 = [null,null,null,null,null,null,null];(statearr_15764[(0)] = state_machine__6178__auto__);
(statearr_15764[(1)] = (1));
return statearr_15764;
});
var state_machine__6178__auto____1 = (function (state_15759){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15759);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15765){if((e15765 instanceof Object))
{var ex__6181__auto__ = e15765;var statearr_15766_15814 = state_15759;(statearr_15766_15814[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15765;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15815 = state_15759;
state_15759 = G__15815;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15759){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15767 = f__6193__auto__.call(null);(statearr_15767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_15767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
})();var inst_15743 = inst_15741.click(inst_15742);var inst_15744 = (function (){var btn_return = inst_15741;var btn_search = inst_15740;var mc_modelContainer = inst_15739;var elem = inst_15738;var tmpl = inst_15737;var model = inst_15736;var err = inst_15735;var vec__15732 = inst_15734;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (state_15776){var state_val_15777 = (state_15776[(1)]);if((state_val_15777 === (2)))
{var inst_15774 = (state_15776[(2)]);var state_15776__$1 = state_15776;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15776__$1,inst_15774);
} else
{if((state_val_15777 === (1)))
{var inst_15768 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_15769 = [searchKey];var inst_15770 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15768,inst_15769);var inst_15771 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_15770];var inst_15772 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15771,null));var state_15776__$1 = state_15776;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15776__$1,(2),tool.react.OnReact,inst_15772);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15781 = [null,null,null,null,null,null,null];(statearr_15781[(0)] = state_machine__6178__auto__);
(statearr_15781[(1)] = (1));
return statearr_15781;
});
var state_machine__6178__auto____1 = (function (state_15776){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15776);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15782){if((e15782 instanceof Object))
{var ex__6181__auto__ = e15782;var statearr_15783_15816 = state_15776;(statearr_15783_15816[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15776);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15782;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15817 = state_15776;
state_15776 = G__15817;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15776){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15784 = f__6193__auto__.call(null);(statearr_15784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_15784;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
})();var inst_15745 = inst_15740.click(inst_15744);var inst_15746 = (function (){var btn_return = inst_15741;var btn_search = inst_15740;var mc_modelContainer = inst_15739;var elem = inst_15738;var tmpl = inst_15737;var model = inst_15736;var err = inst_15735;var vec__15732 = inst_15734;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,inst_15744,inst_15745,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,inst_15744,inst_15745,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,inst_15744,inst_15745,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function (state_15794){var state_val_15795 = (state_15794[(1)]);if((state_val_15795 === (2)))
{var inst_15792 = (state_15794[(2)]);var state_15794__$1 = state_15794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15794__$1,inst_15792);
} else
{if((state_val_15795 === (1)))
{var inst_15785 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_15786 = that.id;var inst_15787 = [inst_15786];var inst_15788 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15785,inst_15787);var inst_15789 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_15788];var inst_15790 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15789,null));var state_15794__$1 = state_15794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15794__$1,(2),tool.react.OnReact,inst_15790);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,inst_15744,inst_15745,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,inst_15744,inst_15745,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15799 = [null,null,null,null,null,null,null];(statearr_15799[(0)] = state_machine__6178__auto__);
(statearr_15799[(1)] = (1));
return statearr_15799;
});
var state_machine__6178__auto____1 = (function (state_15794){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15794);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15800){if((e15800 instanceof Object))
{var ex__6181__auto__ = e15800;var statearr_15801_15818 = state_15794;(statearr_15801_15818[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15794);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15819 = state_15794;
state_15794 = G__15819;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15794){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,inst_15744,inst_15745,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15802 = f__6193__auto__.call(null);(statearr_15802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_15802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,inst_15744,inst_15745,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15732,inst_15734,inst_15735,inst_15736,inst_15737,inst_15738,inst_15739,inst_15740,inst_15741,inst_15742,inst_15743,inst_15744,inst_15745,state_val_15753,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
})();var inst_15747 = inst_15739.delegate("div[modelFrame]","click",inst_15746);var inst_15748 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_15749 = [inst_15738,name];var inst_15750 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15748,inst_15749);var state_15752__$1 = (function (){var statearr_15803 = state_15752;(statearr_15803[(7)] = inst_15743);
(statearr_15803[(8)] = inst_15747);
(statearr_15803[(9)] = inst_15745);
return statearr_15803;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15752__$1,inst_15750);
} else
{if((state_val_15753 === (1)))
{var state_15752__$1 = state_15752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15752__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15807 = [null,null,null,null,null,null,null,null,null,null];(statearr_15807[(0)] = state_machine__6178__auto__);
(statearr_15807[(1)] = (1));
return statearr_15807;
});
var state_machine__6178__auto____1 = (function (state_15752){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15808){if((e15808 instanceof Object))
{var ex__6181__auto__ = e15808;var statearr_15809_15820 = state_15752;(statearr_15809_15820[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15808;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15821 = state_15752;
state_15752 = G__15821;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15752){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15810 = f__6193__auto__.call(null);(statearr_15810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__15731,map__15731__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__15971){var map__15972 = p__15971;var map__15972__$1 = ((cljs.core.seq_QMARK_.call(null,map__15972))?cljs.core.apply.call(null,cljs.core.hash_map,map__15972):map__15972);var view = map__15972__$1;var elem = cljs.core.get.call(null,map__15972__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_16120 = elem.find("#mc_historyContainer");var mc_sideContainer_16121 = elem.find("#mc_sideContainer");var mc_bottomContainer_16122 = elem.find("#mc_bottomContainer");var img_stylePicture_16123 = elem.find("#img_stylePicture");var btn_share_16124 = elem.find("#btn_share");mc_modelContainer_16120.undelegate("img","click");
mc_sideContainer_16121.undelegate("img","click");
mc_bottomContainer_16122.undelegate("img","click");
img_stylePicture_16123.off("click");
btn_share_16124.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__15973){var map__15974 = p__15973;var map__15974__$1 = ((cljs.core.seq_QMARK_.call(null,map__15974))?cljs.core.apply.call(null,cljs.core.hash_map,map__15974):map__15974);var view = map__15974__$1;var elem = cljs.core.get.call(null,map__15974__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_16125 = elem.find("#mc_3dmask");var c__6192__auto___16126 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___16126,mc_3dmask_16125,map__15974,map__15974__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___16126,mc_3dmask_16125,map__15974,map__15974__$1,view,elem){
return (function (state_15980){var state_val_15981 = (state_15980[(1)]);if((state_val_15981 === (2)))
{var inst_15977 = (state_15980[(2)]);var inst_15978 = mc_3dmask_16125.fadeOut((400));var state_15980__$1 = (function (){var statearr_15982 = state_15980;(statearr_15982[(7)] = inst_15977);
return statearr_15982;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15980__$1,inst_15978);
} else
{if((state_val_15981 === (1)))
{var inst_15975 = cljs.core.async.timeout.call(null,(5000));var state_15980__$1 = state_15980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15980__$1,(2),inst_15975);
} else
{return null;
}
}
});})(c__6192__auto___16126,mc_3dmask_16125,map__15974,map__15974__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___16126,mc_3dmask_16125,map__15974,map__15974__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15986 = [null,null,null,null,null,null,null,null];(statearr_15986[(0)] = state_machine__6178__auto__);
(statearr_15986[(1)] = (1));
return statearr_15986;
});
var state_machine__6178__auto____1 = (function (state_15980){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15980);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15987){if((e15987 instanceof Object))
{var ex__6181__auto__ = e15987;var statearr_15988_16127 = state_15980;(statearr_15988_16127[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15980);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16128 = state_15980;
state_15980 = G__16128;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15980){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___16126,mc_3dmask_16125,map__15974,map__15974__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_15989 = f__6193__auto__.call(null);(statearr_15989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___16126);
return statearr_15989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___16126,mc_3dmask_16125,map__15974,map__15974__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__15990,key,modelChan){var map__15991 = p__15990;var map__15991__$1 = ((cljs.core.seq_QMARK_.call(null,map__15991))?cljs.core.apply.call(null,cljs.core.hash_map,map__15991):map__15991);var ctx = map__15991__$1;var tmpl_item = cljs.core.get.call(null,map__15991__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (state_16019){var state_val_16020 = (state_16019[(1)]);if((state_val_16020 === (2)))
{var inst_15994 = (state_16019[(2)]);var inst_15995 = cljs.core.nth.call(null,inst_15994,(0),null);var inst_15996 = cljs.core.nth.call(null,inst_15994,(1),null);var inst_15997 = $("#tmpl_streetsnap");var inst_15998 = inst_15997.tmpl(inst_15996,tmpl_item);var inst_15999 = inst_15998.find("#mc_historyContainer");var inst_16000 = inst_15998.find("#mc_sideContainer");var inst_16001 = inst_15998.find("#mc_bottomContainer");var inst_16002 = inst_15998.find("#img_stylePicture");var inst_16003 = inst_15998.find("#btn_share");var inst_16004 = console.log(inst_15996);var inst_16005 = (function (){var model = inst_15996;var vec__15992 = inst_15994;var mc_sideContainer = inst_16000;var mc_historyContainer = inst_15999;var err = inst_15995;var tmpl = inst_15997;var img_stylePicture = inst_16002;var elem = inst_15998;var btn_share = inst_16003;var mc_bottomContainer = inst_16001;return ((function (model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (state_16030){var state_val_16031 = (state_16030[(1)]);if((state_val_16031 === (2)))
{var inst_16028 = (state_16030[(2)]);var state_16030__$1 = state_16030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16030__$1,inst_16028);
} else
{if((state_val_16031 === (1)))
{var inst_16021 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_16022 = model.styleUrl;var inst_16023 = [inst_16022];var inst_16024 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16021,inst_16023);var inst_16025 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_16024];var inst_16026 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16025,null));var state_16030__$1 = state_16030;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16030__$1,(2),tool.react.OnReact,inst_16026);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16035 = [null,null,null,null,null,null,null];(statearr_16035[(0)] = state_machine__6178__auto__);
(statearr_16035[(1)] = (1));
return statearr_16035;
});
var state_machine__6178__auto____1 = (function (state_16030){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16030);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16036){if((e16036 instanceof Object))
{var ex__6181__auto__ = e16036;var statearr_16037_16129 = state_16030;(statearr_16037_16129[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16030);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16130 = state_16030;
state_16030 = G__16130;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16030){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16038 = f__6193__auto__.call(null);(statearr_16038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16038;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var inst_16006 = inst_16002.on("click",inst_16005);var inst_16007 = (function (){var model = inst_15996;var vec__15992 = inst_15994;var mc_sideContainer = inst_16000;var mc_historyContainer = inst_15999;var err = inst_15995;var tmpl = inst_15997;var img_stylePicture = inst_16002;var elem = inst_15998;var btn_share = inst_16003;var mc_bottomContainer = inst_16001;return ((function (model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (state_16047){var state_val_16048 = (state_16047[(1)]);if((state_val_16048 === (2)))
{var inst_16045 = (state_16047[(2)]);var state_16047__$1 = state_16047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16047__$1,inst_16045);
} else
{if((state_val_16048 === (1)))
{var inst_16039 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_16040 = [model];var inst_16041 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16039,inst_16040);var inst_16042 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_16041];var inst_16043 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16042,null));var state_16047__$1 = state_16047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16047__$1,(2),tool.react.OnReact,inst_16043);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16052 = [null,null,null,null,null,null,null];(statearr_16052[(0)] = state_machine__6178__auto__);
(statearr_16052[(1)] = (1));
return statearr_16052;
});
var state_machine__6178__auto____1 = (function (state_16047){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16053){if((e16053 instanceof Object))
{var ex__6181__auto__ = e16053;var statearr_16054_16131 = state_16047;(statearr_16054_16131[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16132 = state_16047;
state_16047 = G__16132;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16047){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16055 = f__6193__auto__.call(null);(statearr_16055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var inst_16008 = inst_16003.on("click",inst_16007);var inst_16009 = (function (){var model = inst_15996;var vec__15992 = inst_15994;var mc_sideContainer = inst_16000;var mc_historyContainer = inst_15999;var err = inst_15995;var tmpl = inst_15997;var img_stylePicture = inst_16002;var elem = inst_15998;var btn_share = inst_16003;var mc_bottomContainer = inst_16001;return ((function (model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (state_16066){var state_val_16067 = (state_16066[(1)]);if((state_val_16067 === (2)))
{var inst_16064 = (state_16066[(2)]);var state_16066__$1 = state_16066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16066__$1,inst_16064);
} else
{if((state_val_16067 === (1)))
{var inst_16056 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_16057 = that.id;var inst_16058 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16057));var inst_16059 = [inst_16058];var inst_16060 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16056,inst_16059);var inst_16061 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_16060];var inst_16062 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16061,null));var state_16066__$1 = state_16066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16066__$1,(2),tool.react.OnReact,inst_16062);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16071 = [null,null,null,null,null,null,null];(statearr_16071[(0)] = state_machine__6178__auto__);
(statearr_16071[(1)] = (1));
return statearr_16071;
});
var state_machine__6178__auto____1 = (function (state_16066){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16066);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16072){if((e16072 instanceof Object))
{var ex__6181__auto__ = e16072;var statearr_16073_16133 = state_16066;(statearr_16073_16133[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16066);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16134 = state_16066;
state_16066 = G__16134;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16066){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16074 = f__6193__auto__.call(null);(statearr_16074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var inst_16010 = inst_16000.delegate("img","click",inst_16009);var inst_16011 = (function (){var model = inst_15996;var vec__15992 = inst_15994;var mc_sideContainer = inst_16000;var mc_historyContainer = inst_15999;var err = inst_15995;var tmpl = inst_15997;var img_stylePicture = inst_16002;var elem = inst_15998;var btn_share = inst_16003;var mc_bottomContainer = inst_16001;return ((function (model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (state_16085){var state_val_16086 = (state_16085[(1)]);if((state_val_16086 === (2)))
{var inst_16083 = (state_16085[(2)]);var state_16085__$1 = state_16085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16085__$1,inst_16083);
} else
{if((state_val_16086 === (1)))
{var inst_16075 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_16076 = that.id;var inst_16077 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16076));var inst_16078 = [inst_16077];var inst_16079 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16075,inst_16078);var inst_16080 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_16079];var inst_16081 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16080,null));var state_16085__$1 = state_16085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16085__$1,(2),tool.react.OnReact,inst_16081);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16090 = [null,null,null,null,null,null,null];(statearr_16090[(0)] = state_machine__6178__auto__);
(statearr_16090[(1)] = (1));
return statearr_16090;
});
var state_machine__6178__auto____1 = (function (state_16085){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16085);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16091){if((e16091 instanceof Object))
{var ex__6181__auto__ = e16091;var statearr_16092_16135 = state_16085;(statearr_16092_16135[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16085);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16136 = state_16085;
state_16085 = G__16136;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16085){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16093 = f__6193__auto__.call(null);(statearr_16093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var inst_16012 = inst_16001.delegate("img","click",inst_16011);var inst_16013 = (function (){var model = inst_15996;var vec__15992 = inst_15994;var mc_sideContainer = inst_16000;var mc_historyContainer = inst_15999;var err = inst_15995;var tmpl = inst_15997;var img_stylePicture = inst_16002;var elem = inst_15998;var btn_share = inst_16003;var mc_bottomContainer = inst_16001;return ((function (model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function (state_16103){var state_val_16104 = (state_16103[(1)]);if((state_val_16104 === (2)))
{var inst_16101 = (state_16103[(2)]);var state_16103__$1 = state_16103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16103__$1,inst_16101);
} else
{if((state_val_16104 === (1)))
{var inst_16094 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_16095 = that.id;var inst_16096 = [inst_16095];var inst_16097 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16094,inst_16096);var inst_16098 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_16097];var inst_16099 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16098,null));var state_16103__$1 = state_16103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16103__$1,(2),tool.react.OnReact,inst_16099);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16108 = [null,null,null,null,null,null,null];(statearr_16108[(0)] = state_machine__6178__auto__);
(statearr_16108[(1)] = (1));
return statearr_16108;
});
var state_machine__6178__auto____1 = (function (state_16103){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16103);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16109){if((e16109 instanceof Object))
{var ex__6181__auto__ = e16109;var statearr_16110_16137 = state_16103;(statearr_16110_16137[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16138 = state_16103;
state_16103 = G__16138;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16103){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16111 = f__6193__auto__.call(null);(statearr_16111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,vec__15992,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,state_val_16020,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var inst_16014 = inst_15999.delegate("img","click",inst_16013);var inst_16015 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_16016 = [inst_15998,name];var inst_16017 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16015,inst_16016);var state_16019__$1 = (function (){var statearr_16112 = state_16019;(statearr_16112[(7)] = inst_16012);
(statearr_16112[(8)] = inst_16004);
(statearr_16112[(9)] = inst_16006);
(statearr_16112[(10)] = inst_16008);
(statearr_16112[(11)] = inst_16010);
(statearr_16112[(12)] = inst_16014);
return statearr_16112;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16019__$1,inst_16017);
} else
{if((state_val_16020 === (1)))
{var state_16019__$1 = state_16019;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16019__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16116 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16116[(0)] = state_machine__6178__auto__);
(statearr_16116[(1)] = (1));
return statearr_16116;
});
var state_machine__6178__auto____1 = (function (state_16019){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16019);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16117){if((e16117 instanceof Object))
{var ex__6181__auto__ = e16117;var statearr_16118_16139 = state_16019;(statearr_16118_16139[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16019);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16140 = state_16019;
state_16019 = G__16140;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16019){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16119 = f__6193__auto__.call(null);(statearr_16119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16119;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__15991,map__15991__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__16141){var map__16142 = p__16141;var map__16142__$1 = ((cljs.core.seq_QMARK_.call(null,map__16142))?cljs.core.apply.call(null,cljs.core.hash_map,map__16142):map__16142);var view = map__16142__$1;var elem = cljs.core.get.call(null,map__16142__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_16158 = elem.find("#mc_3dmask");var c__6192__auto___16159 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___16159,mc_3dmask_16158,map__16142,map__16142__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___16159,mc_3dmask_16158,map__16142,map__16142__$1,view,elem){
return (function (state_16148){var state_val_16149 = (state_16148[(1)]);if((state_val_16149 === (2)))
{var inst_16145 = (state_16148[(2)]);var inst_16146 = mc_3dmask_16158.fadeOut((400));var state_16148__$1 = (function (){var statearr_16150 = state_16148;(statearr_16150[(7)] = inst_16145);
return statearr_16150;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16148__$1,inst_16146);
} else
{if((state_val_16149 === (1)))
{var inst_16143 = cljs.core.async.timeout.call(null,(5000));var state_16148__$1 = state_16148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16148__$1,(2),inst_16143);
} else
{return null;
}
}
});})(c__6192__auto___16159,mc_3dmask_16158,map__16142,map__16142__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___16159,mc_3dmask_16158,map__16142,map__16142__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16154 = [null,null,null,null,null,null,null,null];(statearr_16154[(0)] = state_machine__6178__auto__);
(statearr_16154[(1)] = (1));
return statearr_16154;
});
var state_machine__6178__auto____1 = (function (state_16148){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16148);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16155){if((e16155 instanceof Object))
{var ex__6181__auto__ = e16155;var statearr_16156_16160 = state_16148;(statearr_16156_16160[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16148);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16161 = state_16148;
state_16148 = G__16161;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16148){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___16159,mc_3dmask_16158,map__16142,map__16142__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_16157 = f__6193__auto__.call(null);(statearr_16157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___16159);
return statearr_16157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___16159,mc_3dmask_16158,map__16142,map__16142__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__16162,key,modelChan){var map__16163 = p__16162;var map__16163__$1 = ((cljs.core.seq_QMARK_.call(null,map__16163))?cljs.core.apply.call(null,cljs.core.hash_map,map__16163):map__16163);var ctx = map__16163__$1;var tmpl_item = cljs.core.get.call(null,map__16163__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__16163,map__16163__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__16163,map__16163__$1,ctx,tmpl_item){
return (function (state_16175){var state_val_16176 = (state_16175[(1)]);if((state_val_16176 === (2)))
{var inst_16166 = (state_16175[(2)]);var inst_16167 = cljs.core.nth.call(null,inst_16166,(0),null);var inst_16168 = cljs.core.nth.call(null,inst_16166,(1),null);var inst_16169 = $("#tmpl_home");var inst_16170 = inst_16169.tmpl(inst_16168,tmpl_item);var inst_16171 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_16172 = [inst_16170,key];var inst_16173 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16171,inst_16172);var state_16175__$1 = (function (){var statearr_16177 = state_16175;(statearr_16177[(7)] = inst_16167);
return statearr_16177;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16175__$1,inst_16173);
} else
{if((state_val_16176 === (1)))
{var state_16175__$1 = state_16175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16175__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__16163,map__16163__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__16163,map__16163__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16181 = [null,null,null,null,null,null,null,null];(statearr_16181[(0)] = state_machine__6178__auto__);
(statearr_16181[(1)] = (1));
return statearr_16181;
});
var state_machine__6178__auto____1 = (function (state_16175){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16175);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16182){if((e16182 instanceof Object))
{var ex__6181__auto__ = e16182;var statearr_16183_16185 = state_16175;(statearr_16183_16185[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16186 = state_16175;
state_16175 = G__16186;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16175){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__16163,map__16163__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16184 = f__6193__auto__.call(null);(statearr_16184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__16163,map__16163__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__16187,key,view){var map__16188 = p__16187;var map__16188__$1 = ((cljs.core.seq_QMARK_.call(null,map__16188))?cljs.core.apply.call(null,cljs.core.hash_map,map__16188):map__16188);var ctx = map__16188__$1;var popupContainer = cljs.core.get.call(null,map__16188__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__16189 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__16189.appendTo(popupContainer);
G__16189.fadeIn((400));
return G__16189;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__16190,key,p__16191){var map__16192 = p__16190;var map__16192__$1 = ((cljs.core.seq_QMARK_.call(null,map__16192))?cljs.core.apply.call(null,cljs.core.hash_map,map__16192):map__16192);var ctx = map__16192__$1;var container = cljs.core.get.call(null,map__16192__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__16193 = p__16191;var map__16193__$1 = ((cljs.core.seq_QMARK_.call(null,map__16193))?cljs.core.apply.call(null,cljs.core.hash_map,map__16193):map__16193);var view = map__16193__$1;var elem = cljs.core.get.call(null,map__16193__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__16192,map__16192__$1,ctx,container,map__16193,map__16193__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__16192,map__16192__$1,ctx,container,map__16193,map__16193__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__16194,key,modelChan){var map__16195 = p__16194;var map__16195__$1 = ((cljs.core.seq_QMARK_.call(null,map__16195))?cljs.core.apply.call(null,cljs.core.hash_map,map__16195):map__16195);var ctx = map__16195__$1;var tmpl_item = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item){
return (function (state_16210){var state_val_16211 = (state_16210[(1)]);if((state_val_16211 === (2)))
{var inst_16198 = (state_16210[(2)]);var inst_16199 = cljs.core.nth.call(null,inst_16198,(0),null);var inst_16200 = cljs.core.nth.call(null,inst_16198,(1),null);var inst_16201 = $("#tmpl_bigPhoto");var inst_16202 = inst_16201.tmpl(inst_16200,tmpl_item);var inst_16203 = inst_16202.find("#mc_bigPhotoFixPosition");var inst_16204 = (function (){var back = inst_16203;var elem = inst_16202;var tmpl = inst_16201;var model = inst_16200;var err = inst_16199;var vec__16196 = inst_16198;return ((function (back,elem,tmpl,model,err,vec__16196,inst_16198,inst_16199,inst_16200,inst_16201,inst_16202,inst_16203,state_val_16211,c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__16196,inst_16198,inst_16199,inst_16200,inst_16201,inst_16202,inst_16203,state_val_16211,c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__16196,inst_16198,inst_16199,inst_16200,inst_16201,inst_16202,inst_16203,state_val_16211,c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item){
return (function (state_16217){var state_val_16218 = (state_16217[(1)]);if((state_val_16218 === (2)))
{var inst_16215 = (state_16217[(2)]);var state_16217__$1 = state_16217;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16217__$1,inst_16215);
} else
{if((state_val_16218 === (1)))
{var inst_16212 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_16213 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16212,null));var state_16217__$1 = state_16217;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16217__$1,(2),tool.react.OnReact,inst_16213);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__16196,inst_16198,inst_16199,inst_16200,inst_16201,inst_16202,inst_16203,state_val_16211,c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__16196,inst_16198,inst_16199,inst_16200,inst_16201,inst_16202,inst_16203,state_val_16211,c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16222 = [null,null,null,null,null,null,null];(statearr_16222[(0)] = state_machine__6178__auto__);
(statearr_16222[(1)] = (1));
return statearr_16222;
});
var state_machine__6178__auto____1 = (function (state_16217){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16217);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16223){if((e16223 instanceof Object))
{var ex__6181__auto__ = e16223;var statearr_16224_16234 = state_16217;(statearr_16224_16234[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16217);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16235 = state_16217;
state_16217 = G__16235;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16217){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__16196,inst_16198,inst_16199,inst_16200,inst_16201,inst_16202,inst_16203,state_val_16211,c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16225 = f__6193__auto__.call(null);(statearr_16225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__16196,inst_16198,inst_16199,inst_16200,inst_16201,inst_16202,inst_16203,state_val_16211,c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__16196,inst_16198,inst_16199,inst_16200,inst_16201,inst_16202,inst_16203,state_val_16211,c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item))
})();var inst_16205 = inst_16203.on("click",inst_16204);var inst_16206 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_16207 = [inst_16202,key];var inst_16208 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16206,inst_16207);var state_16210__$1 = (function (){var statearr_16226 = state_16210;(statearr_16226[(7)] = inst_16205);
return statearr_16226;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16210__$1,inst_16208);
} else
{if((state_val_16211 === (1)))
{var state_16210__$1 = state_16210;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16210__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16230 = [null,null,null,null,null,null,null,null];(statearr_16230[(0)] = state_machine__6178__auto__);
(statearr_16230[(1)] = (1));
return statearr_16230;
});
var state_machine__6178__auto____1 = (function (state_16210){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16210);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16231){if((e16231 instanceof Object))
{var ex__6181__auto__ = e16231;var statearr_16232_16236 = state_16210;(statearr_16232_16236[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16210);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16237 = state_16210;
state_16210 = G__16237;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16210){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16233 = f__6193__auto__.call(null);(statearr_16233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__16195,map__16195__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
