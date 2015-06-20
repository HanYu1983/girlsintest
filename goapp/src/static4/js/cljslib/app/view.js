// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31814,key,view){var map__31815 = p__31814;var map__31815__$1 = ((cljs.core.seq_QMARK_.call(null,map__31815))?cljs.core.apply.call(null,cljs.core.hash_map,map__31815):map__31815);var ctx = map__31815__$1;var container = cljs.core.get.call(null,map__31815__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__31816_31835 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__31816_31835.appendTo(container);
G__31816_31835.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__31815,map__31815__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__31815,map__31815__$1,ctx,container){
return (function (state_31826){var state_val_31827 = (state_31826[(1)]);if((state_val_31827 === (2)))
{var inst_31824 = (state_31826[(2)]);var state_31826__$1 = state_31826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31826__$1,inst_31824);
} else
{if((state_val_31827 === (1)))
{var inst_31817 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_31818 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_31819 = [inst_31818,view];var inst_31820 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31817,inst_31819);var inst_31821 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_31820];var inst_31822 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31821,null));var state_31826__$1 = state_31826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31826__$1,(2),tool.react.OnReact,inst_31822);
} else
{return null;
}
}
});})(c__6192__auto__,map__31815,map__31815__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__31815,map__31815__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31831 = [null,null,null,null,null,null,null];(statearr_31831[(0)] = state_machine__6178__auto__);
(statearr_31831[(1)] = (1));
return statearr_31831;
});
var state_machine__6178__auto____1 = (function (state_31826){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31826);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31832){if((e31832 instanceof Object))
{var ex__6181__auto__ = e31832;var statearr_31833_31836 = state_31826;(statearr_31833_31836[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31826);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31837 = state_31826;
state_31826 = G__31837;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31826){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__31815,map__31815__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_31834 = f__6193__auto__.call(null);(statearr_31834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__31815,map__31815__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31838,key,view){var map__31839 = p__31838;var map__31839__$1 = ((cljs.core.seq_QMARK_.call(null,map__31839))?cljs.core.apply.call(null,cljs.core.hash_map,map__31839):map__31839);var ctx = map__31839__$1;var container = cljs.core.get.call(null,map__31839__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__31840 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__31840.remove();
return G__31840;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_32003 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_32004 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_32005 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_32005.off("click");
btn_search_32004.off("click");
mc_modelContainer_32003.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__31922,key,modelChan){var map__31923 = p__31922;var map__31923__$1 = ((cljs.core.seq_QMARK_.call(null,map__31923))?cljs.core.apply.call(null,cljs.core.hash_map,map__31923):map__31923);var ctx = map__31923__$1;var tmpl_item = cljs.core.get.call(null,map__31923__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (state_31944){var state_val_31945 = (state_31944[(1)]);if((state_val_31945 === (2)))
{var inst_31926 = (state_31944[(2)]);var inst_31927 = cljs.core.nth.call(null,inst_31926,(0),null);var inst_31928 = cljs.core.nth.call(null,inst_31926,(1),null);var inst_31929 = $("#tmpl_streetsnap_list");var inst_31930 = inst_31929.tmpl(inst_31928,tmpl_item);var inst_31931 = inst_31930.find("#mc_modelContainer");var inst_31932 = inst_31930.find("#btn_search");var inst_31933 = inst_31930.find("#btn_return");var inst_31934 = (function (){var btn_return = inst_31933;var btn_search = inst_31932;var mc_modelContainer = inst_31931;var elem = inst_31930;var tmpl = inst_31929;var model = inst_31928;var err = inst_31927;var vec__31924 = inst_31926;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (state_31951){var state_val_31952 = (state_31951[(1)]);if((state_val_31952 === (2)))
{var inst_31949 = (state_31951[(2)]);var state_31951__$1 = state_31951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31951__$1,inst_31949);
} else
{if((state_val_31952 === (1)))
{var inst_31946 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_31947 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31946,null));var state_31951__$1 = state_31951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31951__$1,(2),tool.react.OnReact,inst_31947);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31956 = [null,null,null,null,null,null,null];(statearr_31956[(0)] = state_machine__6178__auto__);
(statearr_31956[(1)] = (1));
return statearr_31956;
});
var state_machine__6178__auto____1 = (function (state_31951){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31951);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31957){if((e31957 instanceof Object))
{var ex__6181__auto__ = e31957;var statearr_31958_32006 = state_31951;(statearr_31958_32006[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31951);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31957;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32007 = state_31951;
state_31951 = G__32007;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31951){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31959 = f__6193__auto__.call(null);(statearr_31959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31959;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
})();var inst_31935 = inst_31933.click(inst_31934);var inst_31936 = (function (){var btn_return = inst_31933;var btn_search = inst_31932;var mc_modelContainer = inst_31931;var elem = inst_31930;var tmpl = inst_31929;var model = inst_31928;var err = inst_31927;var vec__31924 = inst_31926;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (state_31968){var state_val_31969 = (state_31968[(1)]);if((state_val_31969 === (2)))
{var inst_31966 = (state_31968[(2)]);var state_31968__$1 = state_31968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31968__$1,inst_31966);
} else
{if((state_val_31969 === (1)))
{var inst_31960 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_31961 = [searchKey];var inst_31962 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31960,inst_31961);var inst_31963 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_31962];var inst_31964 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31963,null));var state_31968__$1 = state_31968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31968__$1,(2),tool.react.OnReact,inst_31964);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31973 = [null,null,null,null,null,null,null];(statearr_31973[(0)] = state_machine__6178__auto__);
(statearr_31973[(1)] = (1));
return statearr_31973;
});
var state_machine__6178__auto____1 = (function (state_31968){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31968);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31974){if((e31974 instanceof Object))
{var ex__6181__auto__ = e31974;var statearr_31975_32008 = state_31968;(statearr_31975_32008[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32009 = state_31968;
state_31968 = G__32009;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31968){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31976 = f__6193__auto__.call(null);(statearr_31976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
})();var inst_31937 = inst_31932.click(inst_31936);var inst_31938 = (function (){var btn_return = inst_31933;var btn_search = inst_31932;var mc_modelContainer = inst_31931;var elem = inst_31930;var tmpl = inst_31929;var model = inst_31928;var err = inst_31927;var vec__31924 = inst_31926;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,inst_31936,inst_31937,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,inst_31936,inst_31937,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,inst_31936,inst_31937,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function (state_31986){var state_val_31987 = (state_31986[(1)]);if((state_val_31987 === (2)))
{var inst_31984 = (state_31986[(2)]);var state_31986__$1 = state_31986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31986__$1,inst_31984);
} else
{if((state_val_31987 === (1)))
{var inst_31977 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_31978 = that.id;var inst_31979 = [inst_31978];var inst_31980 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31977,inst_31979);var inst_31981 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_31980];var inst_31982 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31981,null));var state_31986__$1 = state_31986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31986__$1,(2),tool.react.OnReact,inst_31982);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,inst_31936,inst_31937,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,inst_31936,inst_31937,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31991 = [null,null,null,null,null,null,null];(statearr_31991[(0)] = state_machine__6178__auto__);
(statearr_31991[(1)] = (1));
return statearr_31991;
});
var state_machine__6178__auto____1 = (function (state_31986){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31986);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31992){if((e31992 instanceof Object))
{var ex__6181__auto__ = e31992;var statearr_31993_32010 = state_31986;(statearr_31993_32010[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32011 = state_31986;
state_31986 = G__32011;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31986){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,inst_31936,inst_31937,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31994 = f__6193__auto__.call(null);(statearr_31994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,inst_31936,inst_31937,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__31924,inst_31926,inst_31927,inst_31928,inst_31929,inst_31930,inst_31931,inst_31932,inst_31933,inst_31934,inst_31935,inst_31936,inst_31937,state_val_31945,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
})();var inst_31939 = inst_31931.delegate("div[modelFrame]","click",inst_31938);var inst_31940 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_31941 = [inst_31930,name];var inst_31942 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31940,inst_31941);var state_31944__$1 = (function (){var statearr_31995 = state_31944;(statearr_31995[(7)] = inst_31937);
(statearr_31995[(8)] = inst_31939);
(statearr_31995[(9)] = inst_31935);
return statearr_31995;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31944__$1,inst_31942);
} else
{if((state_val_31945 === (1)))
{var state_31944__$1 = state_31944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31944__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31999 = [null,null,null,null,null,null,null,null,null,null];(statearr_31999[(0)] = state_machine__6178__auto__);
(statearr_31999[(1)] = (1));
return statearr_31999;
});
var state_machine__6178__auto____1 = (function (state_31944){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31944);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32000){if((e32000 instanceof Object))
{var ex__6181__auto__ = e32000;var statearr_32001_32012 = state_31944;(statearr_32001_32012[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32000;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32013 = state_31944;
state_31944 = G__32013;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31944){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32002 = f__6193__auto__.call(null);(statearr_32002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_32002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__31923,map__31923__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__32199){var map__32200 = p__32199;var map__32200__$1 = ((cljs.core.seq_QMARK_.call(null,map__32200))?cljs.core.apply.call(null,cljs.core.hash_map,map__32200):map__32200);var view = map__32200__$1;var elem = cljs.core.get.call(null,map__32200__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_32384 = elem.find("#mc_historyContainer");var mc_sideContainer_32385 = elem.find("#mc_sideContainer");var mc_bottomContainer_32386 = elem.find("#mc_bottomContainer");var img_stylePicture_32387 = elem.find("#img_stylePicture");var btn_share_32388 = elem.find("#btn_share");var btn_fullscreen_32389 = elem.find("#btn_fullscreen");var btn_more_32390 = elem.find("#btn_more");mc_modelContainer_32384.undelegate("img","click");
mc_sideContainer_32385.undelegate("img","click");
mc_bottomContainer_32386.undelegate("img","click");
img_stylePicture_32387.off("click");
btn_share_32388.off("click");
btn_fullscreen_32389.off("click");
btn_more_32390.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__32201){var map__32202 = p__32201;var map__32202__$1 = ((cljs.core.seq_QMARK_.call(null,map__32202))?cljs.core.apply.call(null,cljs.core.hash_map,map__32202):map__32202);var view = map__32202__$1;var elem = cljs.core.get.call(null,map__32202__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_32391 = elem.find("#mc_3dmask");var c__6192__auto___32392 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___32392,mc_3dmask_32391,map__32202,map__32202__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___32392,mc_3dmask_32391,map__32202,map__32202__$1,view,elem){
return (function (state_32208){var state_val_32209 = (state_32208[(1)]);if((state_val_32209 === (2)))
{var inst_32205 = (state_32208[(2)]);var inst_32206 = mc_3dmask_32391.fadeOut((400));var state_32208__$1 = (function (){var statearr_32210 = state_32208;(statearr_32210[(7)] = inst_32205);
return statearr_32210;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32208__$1,inst_32206);
} else
{if((state_val_32209 === (1)))
{var inst_32203 = cljs.core.async.timeout.call(null,(3000));var state_32208__$1 = state_32208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32208__$1,(2),inst_32203);
} else
{return null;
}
}
});})(c__6192__auto___32392,mc_3dmask_32391,map__32202,map__32202__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___32392,mc_3dmask_32391,map__32202,map__32202__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32214 = [null,null,null,null,null,null,null,null];(statearr_32214[(0)] = state_machine__6178__auto__);
(statearr_32214[(1)] = (1));
return statearr_32214;
});
var state_machine__6178__auto____1 = (function (state_32208){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32208);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32215){if((e32215 instanceof Object))
{var ex__6181__auto__ = e32215;var statearr_32216_32393 = state_32208;(statearr_32216_32393[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32208);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32394 = state_32208;
state_32208 = G__32394;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32208){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___32392,mc_3dmask_32391,map__32202,map__32202__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_32217 = f__6193__auto__.call(null);(statearr_32217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___32392);
return statearr_32217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___32392,mc_3dmask_32391,map__32202,map__32202__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__32218,key,modelChan){var map__32219 = p__32218;var map__32219__$1 = ((cljs.core.seq_QMARK_.call(null,map__32219))?cljs.core.apply.call(null,cljs.core.hash_map,map__32219):map__32219);var ctx = map__32219__$1;var tmpl_item = cljs.core.get.call(null,map__32219__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (state_32252){var state_val_32253 = (state_32252[(1)]);if((state_val_32253 === (2)))
{var inst_32222 = (state_32252[(2)]);var inst_32223 = cljs.core.nth.call(null,inst_32222,(0),null);var inst_32224 = cljs.core.nth.call(null,inst_32222,(1),null);var inst_32225 = $("#tmpl_streetsnap");var inst_32226 = inst_32225.tmpl(inst_32224,tmpl_item);var inst_32227 = inst_32226.find("#mc_historyContainer");var inst_32228 = inst_32226.find("#mc_sideContainer");var inst_32229 = inst_32226.find("#mc_bottomContainer");var inst_32230 = inst_32226.find("#img_stylePicture");var inst_32231 = inst_32226.find("#btn_share");var inst_32232 = inst_32226.find("#btn_fullscreen");var inst_32233 = inst_32226.find("#btn_more");var inst_32234 = (function (){var model = inst_32224;var btn_more = inst_32233;var vec__32220 = inst_32222;var mc_sideContainer = inst_32228;var mc_historyContainer = inst_32227;var err = inst_32223;var tmpl = inst_32225;var img_stylePicture = inst_32230;var elem = inst_32226;var btn_share = inst_32231;var mc_bottomContainer = inst_32229;var btn_fullscreen = inst_32232;return ((function (model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (state_32259){var state_val_32260 = (state_32259[(1)]);if((state_val_32260 === (2)))
{var inst_32257 = (state_32259[(2)]);var state_32259__$1 = state_32259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32259__$1,inst_32257);
} else
{if((state_val_32260 === (1)))
{var inst_32254 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_32255 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32254,null));var state_32259__$1 = state_32259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32259__$1,(2),tool.react.OnReact,inst_32255);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32264 = [null,null,null,null,null,null,null];(statearr_32264[(0)] = state_machine__6178__auto__);
(statearr_32264[(1)] = (1));
return statearr_32264;
});
var state_machine__6178__auto____1 = (function (state_32259){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32259);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32265){if((e32265 instanceof Object))
{var ex__6181__auto__ = e32265;var statearr_32266_32395 = state_32259;(statearr_32266_32395[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32259);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32396 = state_32259;
state_32259 = G__32396;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32259){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32267 = f__6193__auto__.call(null);(statearr_32267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_32267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var inst_32235 = inst_32233.on("click",inst_32234);var inst_32236 = (function (){var model = inst_32224;var btn_more = inst_32233;var vec__32220 = inst_32222;var mc_sideContainer = inst_32228;var mc_historyContainer = inst_32227;var err = inst_32223;var tmpl = inst_32225;var img_stylePicture = inst_32230;var elem = inst_32226;var btn_share = inst_32231;var mc_bottomContainer = inst_32229;var btn_fullscreen = inst_32232;return ((function (model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (state_32276){var state_val_32277 = (state_32276[(1)]);if((state_val_32277 === (2)))
{var inst_32274 = (state_32276[(2)]);var state_32276__$1 = state_32276;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32276__$1,inst_32274);
} else
{if((state_val_32277 === (1)))
{var inst_32268 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_32269 = [model];var inst_32270 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32268,inst_32269);var inst_32271 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_32270];var inst_32272 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32271,null));var state_32276__$1 = state_32276;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32276__$1,(2),tool.react.OnReact,inst_32272);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32281 = [null,null,null,null,null,null,null];(statearr_32281[(0)] = state_machine__6178__auto__);
(statearr_32281[(1)] = (1));
return statearr_32281;
});
var state_machine__6178__auto____1 = (function (state_32276){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32276);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32282){if((e32282 instanceof Object))
{var ex__6181__auto__ = e32282;var statearr_32283_32397 = state_32276;(statearr_32283_32397[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32276);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32398 = state_32276;
state_32276 = G__32398;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32276){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32284 = f__6193__auto__.call(null);(statearr_32284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_32284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var inst_32237 = inst_32232.on("click",inst_32236);var inst_32238 = (function (){var model = inst_32224;var btn_more = inst_32233;var vec__32220 = inst_32222;var mc_sideContainer = inst_32228;var mc_historyContainer = inst_32227;var err = inst_32223;var tmpl = inst_32225;var img_stylePicture = inst_32230;var elem = inst_32226;var btn_share = inst_32231;var mc_bottomContainer = inst_32229;var btn_fullscreen = inst_32232;return ((function (model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (state_32294){var state_val_32295 = (state_32294[(1)]);if((state_val_32295 === (2)))
{var inst_32292 = (state_32294[(2)]);var state_32294__$1 = state_32294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32294__$1,inst_32292);
} else
{if((state_val_32295 === (1)))
{var inst_32285 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_32286 = model.styleUrl;var inst_32287 = [inst_32286];var inst_32288 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32285,inst_32287);var inst_32289 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_32288];var inst_32290 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32289,null));var state_32294__$1 = state_32294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32294__$1,(2),tool.react.OnReact,inst_32290);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32299 = [null,null,null,null,null,null,null];(statearr_32299[(0)] = state_machine__6178__auto__);
(statearr_32299[(1)] = (1));
return statearr_32299;
});
var state_machine__6178__auto____1 = (function (state_32294){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32294);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32300){if((e32300 instanceof Object))
{var ex__6181__auto__ = e32300;var statearr_32301_32399 = state_32294;(statearr_32301_32399[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32294);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32400 = state_32294;
state_32294 = G__32400;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32294){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32302 = f__6193__auto__.call(null);(statearr_32302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_32302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var inst_32239 = inst_32230.on("click",inst_32238);var inst_32240 = (function (){var model = inst_32224;var btn_more = inst_32233;var vec__32220 = inst_32222;var mc_sideContainer = inst_32228;var mc_historyContainer = inst_32227;var err = inst_32223;var tmpl = inst_32225;var img_stylePicture = inst_32230;var elem = inst_32226;var btn_share = inst_32231;var mc_bottomContainer = inst_32229;var btn_fullscreen = inst_32232;return ((function (model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (state_32311){var state_val_32312 = (state_32311[(1)]);if((state_val_32312 === (2)))
{var inst_32309 = (state_32311[(2)]);var state_32311__$1 = state_32311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32311__$1,inst_32309);
} else
{if((state_val_32312 === (1)))
{var inst_32303 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_32304 = [model];var inst_32305 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32303,inst_32304);var inst_32306 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_32305];var inst_32307 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32306,null));var state_32311__$1 = state_32311;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32311__$1,(2),tool.react.OnReact,inst_32307);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32316 = [null,null,null,null,null,null,null];(statearr_32316[(0)] = state_machine__6178__auto__);
(statearr_32316[(1)] = (1));
return statearr_32316;
});
var state_machine__6178__auto____1 = (function (state_32311){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32311);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32317){if((e32317 instanceof Object))
{var ex__6181__auto__ = e32317;var statearr_32318_32401 = state_32311;(statearr_32318_32401[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32311);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32317;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32402 = state_32311;
state_32311 = G__32402;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32311){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32319 = f__6193__auto__.call(null);(statearr_32319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_32319;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var inst_32241 = inst_32231.on("click",inst_32240);var inst_32242 = (function (){var model = inst_32224;var btn_more = inst_32233;var vec__32220 = inst_32222;var mc_sideContainer = inst_32228;var mc_historyContainer = inst_32227;var err = inst_32223;var tmpl = inst_32225;var img_stylePicture = inst_32230;var elem = inst_32226;var btn_share = inst_32231;var mc_bottomContainer = inst_32229;var btn_fullscreen = inst_32232;return ((function (model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (state_32330){var state_val_32331 = (state_32330[(1)]);if((state_val_32331 === (2)))
{var inst_32328 = (state_32330[(2)]);var state_32330__$1 = state_32330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32330__$1,inst_32328);
} else
{if((state_val_32331 === (1)))
{var inst_32320 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_32321 = that.id;var inst_32322 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32321));var inst_32323 = [inst_32322];var inst_32324 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32320,inst_32323);var inst_32325 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_32324];var inst_32326 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32325,null));var state_32330__$1 = state_32330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32330__$1,(2),tool.react.OnReact,inst_32326);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32335 = [null,null,null,null,null,null,null];(statearr_32335[(0)] = state_machine__6178__auto__);
(statearr_32335[(1)] = (1));
return statearr_32335;
});
var state_machine__6178__auto____1 = (function (state_32330){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32330);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32336){if((e32336 instanceof Object))
{var ex__6181__auto__ = e32336;var statearr_32337_32403 = state_32330;(statearr_32337_32403[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32404 = state_32330;
state_32330 = G__32404;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32330){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32338 = f__6193__auto__.call(null);(statearr_32338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_32338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var inst_32243 = inst_32228.delegate("img","click",inst_32242);var inst_32244 = (function (){var model = inst_32224;var btn_more = inst_32233;var vec__32220 = inst_32222;var mc_sideContainer = inst_32228;var mc_historyContainer = inst_32227;var err = inst_32223;var tmpl = inst_32225;var img_stylePicture = inst_32230;var elem = inst_32226;var btn_share = inst_32231;var mc_bottomContainer = inst_32229;var btn_fullscreen = inst_32232;return ((function (model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (state_32349){var state_val_32350 = (state_32349[(1)]);if((state_val_32350 === (2)))
{var inst_32347 = (state_32349[(2)]);var state_32349__$1 = state_32349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32349__$1,inst_32347);
} else
{if((state_val_32350 === (1)))
{var inst_32339 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_32340 = that.id;var inst_32341 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32340));var inst_32342 = [inst_32341];var inst_32343 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32339,inst_32342);var inst_32344 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_32343];var inst_32345 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32344,null));var state_32349__$1 = state_32349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32349__$1,(2),tool.react.OnReact,inst_32345);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32354 = [null,null,null,null,null,null,null];(statearr_32354[(0)] = state_machine__6178__auto__);
(statearr_32354[(1)] = (1));
return statearr_32354;
});
var state_machine__6178__auto____1 = (function (state_32349){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32349);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32355){if((e32355 instanceof Object))
{var ex__6181__auto__ = e32355;var statearr_32356_32405 = state_32349;(statearr_32356_32405[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32349);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32406 = state_32349;
state_32349 = G__32406;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32349){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32357 = f__6193__auto__.call(null);(statearr_32357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_32357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var inst_32245 = inst_32229.delegate("img","click",inst_32244);var inst_32246 = (function (){var model = inst_32224;var btn_more = inst_32233;var vec__32220 = inst_32222;var mc_sideContainer = inst_32228;var mc_historyContainer = inst_32227;var err = inst_32223;var tmpl = inst_32225;var img_stylePicture = inst_32230;var elem = inst_32226;var btn_share = inst_32231;var mc_bottomContainer = inst_32229;var btn_fullscreen = inst_32232;return ((function (model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,inst_32244,inst_32245,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,inst_32244,inst_32245,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,inst_32244,inst_32245,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function (state_32367){var state_val_32368 = (state_32367[(1)]);if((state_val_32368 === (2)))
{var inst_32365 = (state_32367[(2)]);var state_32367__$1 = state_32367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32367__$1,inst_32365);
} else
{if((state_val_32368 === (1)))
{var inst_32358 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_32359 = that.id;var inst_32360 = [inst_32359];var inst_32361 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32358,inst_32360);var inst_32362 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_32361];var inst_32363 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32362,null));var state_32367__$1 = state_32367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32367__$1,(2),tool.react.OnReact,inst_32363);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,inst_32244,inst_32245,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,inst_32244,inst_32245,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32372 = [null,null,null,null,null,null,null];(statearr_32372[(0)] = state_machine__6178__auto__);
(statearr_32372[(1)] = (1));
return statearr_32372;
});
var state_machine__6178__auto____1 = (function (state_32367){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32367);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32373){if((e32373 instanceof Object))
{var ex__6181__auto__ = e32373;var statearr_32374_32407 = state_32367;(statearr_32374_32407[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32367);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32373;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32408 = state_32367;
state_32367 = G__32408;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32367){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,inst_32244,inst_32245,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32375 = f__6193__auto__.call(null);(statearr_32375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_32375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,inst_32244,inst_32245,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,vec__32220,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_32222,inst_32223,inst_32224,inst_32225,inst_32226,inst_32227,inst_32228,inst_32229,inst_32230,inst_32231,inst_32232,inst_32233,inst_32234,inst_32235,inst_32236,inst_32237,inst_32238,inst_32239,inst_32240,inst_32241,inst_32242,inst_32243,inst_32244,inst_32245,state_val_32253,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var inst_32247 = inst_32227.delegate("img","click",inst_32246);var inst_32248 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_32249 = [inst_32226,name];var inst_32250 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32248,inst_32249);var state_32252__$1 = (function (){var statearr_32376 = state_32252;(statearr_32376[(7)] = inst_32237);
(statearr_32376[(8)] = inst_32247);
(statearr_32376[(9)] = inst_32243);
(statearr_32376[(10)] = inst_32245);
(statearr_32376[(11)] = inst_32235);
(statearr_32376[(12)] = inst_32241);
(statearr_32376[(13)] = inst_32239);
return statearr_32376;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32252__$1,inst_32250);
} else
{if((state_val_32253 === (1)))
{var state_32252__$1 = state_32252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32252__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32380[(0)] = state_machine__6178__auto__);
(statearr_32380[(1)] = (1));
return statearr_32380;
});
var state_machine__6178__auto____1 = (function (state_32252){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32252);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32381){if((e32381 instanceof Object))
{var ex__6181__auto__ = e32381;var statearr_32382_32409 = state_32252;(statearr_32382_32409[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32252);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32410 = state_32252;
state_32252 = G__32410;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32252){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32383 = f__6193__auto__.call(null);(statearr_32383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_32383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__32219,map__32219__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__32411){var map__32412 = p__32411;var map__32412__$1 = ((cljs.core.seq_QMARK_.call(null,map__32412))?cljs.core.apply.call(null,cljs.core.hash_map,map__32412):map__32412);var view = map__32412__$1;var elem = cljs.core.get.call(null,map__32412__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_32428 = elem.find("#mc_3dmask");var c__6192__auto___32429 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___32429,mc_3dmask_32428,map__32412,map__32412__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___32429,mc_3dmask_32428,map__32412,map__32412__$1,view,elem){
return (function (state_32418){var state_val_32419 = (state_32418[(1)]);if((state_val_32419 === (2)))
{var inst_32415 = (state_32418[(2)]);var inst_32416 = mc_3dmask_32428.fadeOut((400));var state_32418__$1 = (function (){var statearr_32420 = state_32418;(statearr_32420[(7)] = inst_32415);
return statearr_32420;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32418__$1,inst_32416);
} else
{if((state_val_32419 === (1)))
{var inst_32413 = cljs.core.async.timeout.call(null,(3000));var state_32418__$1 = state_32418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32418__$1,(2),inst_32413);
} else
{return null;
}
}
});})(c__6192__auto___32429,mc_3dmask_32428,map__32412,map__32412__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___32429,mc_3dmask_32428,map__32412,map__32412__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32424 = [null,null,null,null,null,null,null,null];(statearr_32424[(0)] = state_machine__6178__auto__);
(statearr_32424[(1)] = (1));
return statearr_32424;
});
var state_machine__6178__auto____1 = (function (state_32418){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32418);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32425){if((e32425 instanceof Object))
{var ex__6181__auto__ = e32425;var statearr_32426_32430 = state_32418;(statearr_32426_32430[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32431 = state_32418;
state_32418 = G__32431;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32418){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___32429,mc_3dmask_32428,map__32412,map__32412__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_32427 = f__6193__auto__.call(null);(statearr_32427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___32429);
return statearr_32427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___32429,mc_3dmask_32428,map__32412,map__32412__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__32432,key,modelChan){var map__32433 = p__32432;var map__32433__$1 = ((cljs.core.seq_QMARK_.call(null,map__32433))?cljs.core.apply.call(null,cljs.core.hash_map,map__32433):map__32433);var ctx = map__32433__$1;var tmpl_item = cljs.core.get.call(null,map__32433__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__32433,map__32433__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__32433,map__32433__$1,ctx,tmpl_item){
return (function (state_32445){var state_val_32446 = (state_32445[(1)]);if((state_val_32446 === (2)))
{var inst_32436 = (state_32445[(2)]);var inst_32437 = cljs.core.nth.call(null,inst_32436,(0),null);var inst_32438 = cljs.core.nth.call(null,inst_32436,(1),null);var inst_32439 = $("#tmpl_home");var inst_32440 = inst_32439.tmpl(inst_32438,tmpl_item);var inst_32441 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_32442 = [inst_32440,key];var inst_32443 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32441,inst_32442);var state_32445__$1 = (function (){var statearr_32447 = state_32445;(statearr_32447[(7)] = inst_32437);
return statearr_32447;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32445__$1,inst_32443);
} else
{if((state_val_32446 === (1)))
{var state_32445__$1 = state_32445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32445__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__32433,map__32433__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__32433,map__32433__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32451 = [null,null,null,null,null,null,null,null];(statearr_32451[(0)] = state_machine__6178__auto__);
(statearr_32451[(1)] = (1));
return statearr_32451;
});
var state_machine__6178__auto____1 = (function (state_32445){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32445);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32452){if((e32452 instanceof Object))
{var ex__6181__auto__ = e32452;var statearr_32453_32455 = state_32445;(statearr_32453_32455[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32445);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32456 = state_32445;
state_32445 = G__32456;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32445){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__32433,map__32433__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32454 = f__6193__auto__.call(null);(statearr_32454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_32454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__32433,map__32433__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__32457,key,view){var map__32458 = p__32457;var map__32458__$1 = ((cljs.core.seq_QMARK_.call(null,map__32458))?cljs.core.apply.call(null,cljs.core.hash_map,map__32458):map__32458);var ctx = map__32458__$1;var popupContainer = cljs.core.get.call(null,map__32458__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__32459 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__32459.appendTo(popupContainer);
G__32459.fadeIn((400));
return G__32459;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__32460,key,p__32461){var map__32462 = p__32460;var map__32462__$1 = ((cljs.core.seq_QMARK_.call(null,map__32462))?cljs.core.apply.call(null,cljs.core.hash_map,map__32462):map__32462);var ctx = map__32462__$1;var container = cljs.core.get.call(null,map__32462__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__32463 = p__32461;var map__32463__$1 = ((cljs.core.seq_QMARK_.call(null,map__32463))?cljs.core.apply.call(null,cljs.core.hash_map,map__32463):map__32463);var view = map__32463__$1;var elem = cljs.core.get.call(null,map__32463__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__32462,map__32462__$1,ctx,container,map__32463,map__32463__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__32462,map__32462__$1,ctx,container,map__32463,map__32463__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__32464,key,modelChan){var map__32465 = p__32464;var map__32465__$1 = ((cljs.core.seq_QMARK_.call(null,map__32465))?cljs.core.apply.call(null,cljs.core.hash_map,map__32465):map__32465);var ctx = map__32465__$1;var tmpl_item = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item){
return (function (state_32480){var state_val_32481 = (state_32480[(1)]);if((state_val_32481 === (2)))
{var inst_32468 = (state_32480[(2)]);var inst_32469 = cljs.core.nth.call(null,inst_32468,(0),null);var inst_32470 = cljs.core.nth.call(null,inst_32468,(1),null);var inst_32471 = $("#tmpl_bigPhoto");var inst_32472 = inst_32471.tmpl(inst_32470,tmpl_item);var inst_32473 = inst_32472.find("#mc_bigPhotoFixPosition");var inst_32474 = (function (){var back = inst_32473;var elem = inst_32472;var tmpl = inst_32471;var model = inst_32470;var err = inst_32469;var vec__32466 = inst_32468;return ((function (back,elem,tmpl,model,err,vec__32466,inst_32468,inst_32469,inst_32470,inst_32471,inst_32472,inst_32473,state_val_32481,c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__32466,inst_32468,inst_32469,inst_32470,inst_32471,inst_32472,inst_32473,state_val_32481,c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__32466,inst_32468,inst_32469,inst_32470,inst_32471,inst_32472,inst_32473,state_val_32481,c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item){
return (function (state_32487){var state_val_32488 = (state_32487[(1)]);if((state_val_32488 === (2)))
{var inst_32485 = (state_32487[(2)]);var state_32487__$1 = state_32487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32487__$1,inst_32485);
} else
{if((state_val_32488 === (1)))
{var inst_32482 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_32483 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32482,null));var state_32487__$1 = state_32487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32487__$1,(2),tool.react.OnReact,inst_32483);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__32466,inst_32468,inst_32469,inst_32470,inst_32471,inst_32472,inst_32473,state_val_32481,c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__32466,inst_32468,inst_32469,inst_32470,inst_32471,inst_32472,inst_32473,state_val_32481,c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32492 = [null,null,null,null,null,null,null];(statearr_32492[(0)] = state_machine__6178__auto__);
(statearr_32492[(1)] = (1));
return statearr_32492;
});
var state_machine__6178__auto____1 = (function (state_32487){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32487);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32493){if((e32493 instanceof Object))
{var ex__6181__auto__ = e32493;var statearr_32494_32504 = state_32487;(statearr_32494_32504[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32487);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32505 = state_32487;
state_32487 = G__32505;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32487){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__32466,inst_32468,inst_32469,inst_32470,inst_32471,inst_32472,inst_32473,state_val_32481,c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32495 = f__6193__auto__.call(null);(statearr_32495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_32495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__32466,inst_32468,inst_32469,inst_32470,inst_32471,inst_32472,inst_32473,state_val_32481,c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__32466,inst_32468,inst_32469,inst_32470,inst_32471,inst_32472,inst_32473,state_val_32481,c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item))
})();var inst_32475 = inst_32473.on("click",inst_32474);var inst_32476 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_32477 = [inst_32472,key];var inst_32478 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32476,inst_32477);var state_32480__$1 = (function (){var statearr_32496 = state_32480;(statearr_32496[(7)] = inst_32475);
return statearr_32496;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32480__$1,inst_32478);
} else
{if((state_val_32481 === (1)))
{var state_32480__$1 = state_32480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32480__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32500 = [null,null,null,null,null,null,null,null];(statearr_32500[(0)] = state_machine__6178__auto__);
(statearr_32500[(1)] = (1));
return statearr_32500;
});
var state_machine__6178__auto____1 = (function (state_32480){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32480);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32501){if((e32501 instanceof Object))
{var ex__6181__auto__ = e32501;var statearr_32502_32506 = state_32480;(statearr_32502_32506[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32480);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32507 = state_32480;
state_32480 = G__32507;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32480){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32503 = f__6193__auto__.call(null);(statearr_32503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_32503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__32465,map__32465__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__32508,key,modelChan){var map__32509 = p__32508;var map__32509__$1 = ((cljs.core.seq_QMARK_.call(null,map__32509))?cljs.core.apply.call(null,cljs.core.hash_map,map__32509):map__32509);var ctx = map__32509__$1;var tmpl_item = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__32509,map__32509__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__32509,map__32509__$1,ctx,tmpl_item){
return (function (state_32521){var state_val_32522 = (state_32521[(1)]);if((state_val_32522 === (2)))
{var inst_32512 = (state_32521[(2)]);var inst_32513 = cljs.core.nth.call(null,inst_32512,(0),null);var inst_32514 = cljs.core.nth.call(null,inst_32512,(1),null);var inst_32515 = $("#tmpl_news");var inst_32516 = inst_32515.tmpl(inst_32514,tmpl_item);var inst_32517 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_32518 = [inst_32516,key];var inst_32519 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32517,inst_32518);var state_32521__$1 = (function (){var statearr_32523 = state_32521;(statearr_32523[(7)] = inst_32513);
return statearr_32523;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32521__$1,inst_32519);
} else
{if((state_val_32522 === (1)))
{var state_32521__$1 = state_32521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32521__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__32509,map__32509__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__32509,map__32509__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_32527 = [null,null,null,null,null,null,null,null];(statearr_32527[(0)] = state_machine__6178__auto__);
(statearr_32527[(1)] = (1));
return statearr_32527;
});
var state_machine__6178__auto____1 = (function (state_32521){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_32521);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e32528){if((e32528 instanceof Object))
{var ex__6181__auto__ = e32528;var statearr_32529_32531 = state_32521;(statearr_32529_32531[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32521);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32528;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32532 = state_32521;
state_32521 = G__32532;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_32521){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_32521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__32509,map__32509__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_32530 = f__6193__auto__.call(null);(statearr_32530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_32530;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__32509,map__32509__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
