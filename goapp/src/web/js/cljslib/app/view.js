// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16836,key,view){var map__16837 = p__16836;var map__16837__$1 = ((cljs.core.seq_QMARK_.call(null,map__16837))?cljs.core.apply.call(null,cljs.core.hash_map,map__16837):map__16837);var ctx = map__16837__$1;var container = cljs.core.get.call(null,map__16837__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__16838_16857 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__16838_16857.appendTo(container);
G__16838_16857.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__16837,map__16837__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__16837,map__16837__$1,ctx,container){
return (function (state_16848){var state_val_16849 = (state_16848[(1)]);if((state_val_16849 === (2)))
{var inst_16846 = (state_16848[(2)]);var state_16848__$1 = state_16848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16848__$1,inst_16846);
} else
{if((state_val_16849 === (1)))
{var inst_16839 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_16840 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_16841 = [inst_16840,view];var inst_16842 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16839,inst_16841);var inst_16843 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_16842];var inst_16844 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16843,null));var state_16848__$1 = state_16848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16848__$1,(2),tool.react.OnReact,inst_16844);
} else
{return null;
}
}
});})(c__6192__auto__,map__16837,map__16837__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__16837,map__16837__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16853 = [null,null,null,null,null,null,null];(statearr_16853[(0)] = state_machine__6178__auto__);
(statearr_16853[(1)] = (1));
return statearr_16853;
});
var state_machine__6178__auto____1 = (function (state_16848){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16848);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16854){if((e16854 instanceof Object))
{var ex__6181__auto__ = e16854;var statearr_16855_16858 = state_16848;(statearr_16855_16858[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16859 = state_16848;
state_16848 = G__16859;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16848){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__16837,map__16837__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_16856 = f__6193__auto__.call(null);(statearr_16856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__16837,map__16837__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16860,key,view){var map__16861 = p__16860;var map__16861__$1 = ((cljs.core.seq_QMARK_.call(null,map__16861))?cljs.core.apply.call(null,cljs.core.hash_map,map__16861):map__16861);var ctx = map__16861__$1;var container = cljs.core.get.call(null,map__16861__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__16862 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__16862.remove();
return G__16862;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_17025 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_17026 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_17027 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_17027.off("click");
btn_search_17026.off("click");
mc_modelContainer_17025.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__16944,key,modelChan){var map__16945 = p__16944;var map__16945__$1 = ((cljs.core.seq_QMARK_.call(null,map__16945))?cljs.core.apply.call(null,cljs.core.hash_map,map__16945):map__16945);var ctx = map__16945__$1;var tmpl_item = cljs.core.get.call(null,map__16945__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (state_16966){var state_val_16967 = (state_16966[(1)]);if((state_val_16967 === (2)))
{var inst_16948 = (state_16966[(2)]);var inst_16949 = cljs.core.nth.call(null,inst_16948,(0),null);var inst_16950 = cljs.core.nth.call(null,inst_16948,(1),null);var inst_16951 = $("#tmpl_streetsnap_list");var inst_16952 = inst_16951.tmpl(inst_16950,tmpl_item);var inst_16953 = inst_16952.find("#mc_modelContainer");var inst_16954 = inst_16952.find("#btn_search");var inst_16955 = inst_16952.find("#btn_return");var inst_16956 = (function (){var btn_return = inst_16955;var btn_search = inst_16954;var mc_modelContainer = inst_16953;var elem = inst_16952;var tmpl = inst_16951;var model = inst_16950;var err = inst_16949;var vec__16946 = inst_16948;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (state_16973){var state_val_16974 = (state_16973[(1)]);if((state_val_16974 === (2)))
{var inst_16971 = (state_16973[(2)]);var state_16973__$1 = state_16973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16973__$1,inst_16971);
} else
{if((state_val_16974 === (1)))
{var inst_16968 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_16969 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16968,null));var state_16973__$1 = state_16973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16973__$1,(2),tool.react.OnReact,inst_16969);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16978 = [null,null,null,null,null,null,null];(statearr_16978[(0)] = state_machine__6178__auto__);
(statearr_16978[(1)] = (1));
return statearr_16978;
});
var state_machine__6178__auto____1 = (function (state_16973){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16973);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16979){if((e16979 instanceof Object))
{var ex__6181__auto__ = e16979;var statearr_16980_17028 = state_16973;(statearr_16980_17028[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16973);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16979;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17029 = state_16973;
state_16973 = G__17029;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16973){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16981 = f__6193__auto__.call(null);(statearr_16981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
})();var inst_16957 = inst_16955.click(inst_16956);var inst_16958 = (function (){var btn_return = inst_16955;var btn_search = inst_16954;var mc_modelContainer = inst_16953;var elem = inst_16952;var tmpl = inst_16951;var model = inst_16950;var err = inst_16949;var vec__16946 = inst_16948;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (state_16990){var state_val_16991 = (state_16990[(1)]);if((state_val_16991 === (2)))
{var inst_16988 = (state_16990[(2)]);var state_16990__$1 = state_16990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16990__$1,inst_16988);
} else
{if((state_val_16991 === (1)))
{var inst_16982 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_16983 = [searchKey];var inst_16984 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16982,inst_16983);var inst_16985 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_16984];var inst_16986 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16985,null));var state_16990__$1 = state_16990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16990__$1,(2),tool.react.OnReact,inst_16986);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16995 = [null,null,null,null,null,null,null];(statearr_16995[(0)] = state_machine__6178__auto__);
(statearr_16995[(1)] = (1));
return statearr_16995;
});
var state_machine__6178__auto____1 = (function (state_16990){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16990);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16996){if((e16996 instanceof Object))
{var ex__6181__auto__ = e16996;var statearr_16997_17030 = state_16990;(statearr_16997_17030[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17031 = state_16990;
state_16990 = G__17031;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16990){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16998 = f__6193__auto__.call(null);(statearr_16998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
})();var inst_16959 = inst_16954.click(inst_16958);var inst_16960 = (function (){var btn_return = inst_16955;var btn_search = inst_16954;var mc_modelContainer = inst_16953;var elem = inst_16952;var tmpl = inst_16951;var model = inst_16950;var err = inst_16949;var vec__16946 = inst_16948;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,inst_16958,inst_16959,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,inst_16958,inst_16959,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,inst_16958,inst_16959,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function (state_17008){var state_val_17009 = (state_17008[(1)]);if((state_val_17009 === (2)))
{var inst_17006 = (state_17008[(2)]);var state_17008__$1 = state_17008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17008__$1,inst_17006);
} else
{if((state_val_17009 === (1)))
{var inst_16999 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_17000 = that.id;var inst_17001 = [inst_17000];var inst_17002 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16999,inst_17001);var inst_17003 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_17002];var inst_17004 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17003,null));var state_17008__$1 = state_17008;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17008__$1,(2),tool.react.OnReact,inst_17004);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,inst_16958,inst_16959,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,inst_16958,inst_16959,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17013 = [null,null,null,null,null,null,null];(statearr_17013[(0)] = state_machine__6178__auto__);
(statearr_17013[(1)] = (1));
return statearr_17013;
});
var state_machine__6178__auto____1 = (function (state_17008){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17008);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17014){if((e17014 instanceof Object))
{var ex__6181__auto__ = e17014;var statearr_17015_17032 = state_17008;(statearr_17015_17032[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17008);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17033 = state_17008;
state_17008 = G__17033;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17008){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,inst_16958,inst_16959,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17016 = f__6193__auto__.call(null);(statearr_17016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_17016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,inst_16958,inst_16959,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16946,inst_16948,inst_16949,inst_16950,inst_16951,inst_16952,inst_16953,inst_16954,inst_16955,inst_16956,inst_16957,inst_16958,inst_16959,state_val_16967,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
})();var inst_16961 = inst_16953.delegate("div[modelFrame]","click",inst_16960);var inst_16962 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_16963 = [inst_16952,name];var inst_16964 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16962,inst_16963);var state_16966__$1 = (function (){var statearr_17017 = state_16966;(statearr_17017[(7)] = inst_16961);
(statearr_17017[(8)] = inst_16959);
(statearr_17017[(9)] = inst_16957);
return statearr_17017;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16966__$1,inst_16964);
} else
{if((state_val_16967 === (1)))
{var state_16966__$1 = state_16966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16966__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17021 = [null,null,null,null,null,null,null,null,null,null];(statearr_17021[(0)] = state_machine__6178__auto__);
(statearr_17021[(1)] = (1));
return statearr_17021;
});
var state_machine__6178__auto____1 = (function (state_16966){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16966);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17022){if((e17022 instanceof Object))
{var ex__6181__auto__ = e17022;var statearr_17023_17034 = state_16966;(statearr_17023_17034[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16966);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17035 = state_16966;
state_16966 = G__17035;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16966){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17024 = f__6193__auto__.call(null);(statearr_17024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__16945,map__16945__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__17221){var map__17222 = p__17221;var map__17222__$1 = ((cljs.core.seq_QMARK_.call(null,map__17222))?cljs.core.apply.call(null,cljs.core.hash_map,map__17222):map__17222);var view = map__17222__$1;var elem = cljs.core.get.call(null,map__17222__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_17406 = elem.find("#mc_historyContainer");var mc_sideContainer_17407 = elem.find("#mc_sideContainer");var mc_bottomContainer_17408 = elem.find("#mc_bottomContainer");var img_stylePicture_17409 = elem.find("#img_stylePicture");var btn_share_17410 = elem.find("#btn_share");var btn_fullscreen_17411 = elem.find("#btn_fullscreen");var btn_more_17412 = elem.find("#btn_more");mc_modelContainer_17406.undelegate("img","click");
mc_sideContainer_17407.undelegate("img","click");
mc_bottomContainer_17408.undelegate("img","click");
img_stylePicture_17409.off("click");
btn_share_17410.off("click");
btn_fullscreen_17411.off("click");
btn_more_17412.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__17223){var map__17224 = p__17223;var map__17224__$1 = ((cljs.core.seq_QMARK_.call(null,map__17224))?cljs.core.apply.call(null,cljs.core.hash_map,map__17224):map__17224);var view = map__17224__$1;var elem = cljs.core.get.call(null,map__17224__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_17413 = elem.find("#mc_3dmask");var c__6192__auto___17414 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___17414,mc_3dmask_17413,map__17224,map__17224__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___17414,mc_3dmask_17413,map__17224,map__17224__$1,view,elem){
return (function (state_17230){var state_val_17231 = (state_17230[(1)]);if((state_val_17231 === (2)))
{var inst_17227 = (state_17230[(2)]);var inst_17228 = mc_3dmask_17413.fadeOut((400));var state_17230__$1 = (function (){var statearr_17232 = state_17230;(statearr_17232[(7)] = inst_17227);
return statearr_17232;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17230__$1,inst_17228);
} else
{if((state_val_17231 === (1)))
{var inst_17225 = cljs.core.async.timeout.call(null,(3000));var state_17230__$1 = state_17230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17230__$1,(2),inst_17225);
} else
{return null;
}
}
});})(c__6192__auto___17414,mc_3dmask_17413,map__17224,map__17224__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___17414,mc_3dmask_17413,map__17224,map__17224__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17236 = [null,null,null,null,null,null,null,null];(statearr_17236[(0)] = state_machine__6178__auto__);
(statearr_17236[(1)] = (1));
return statearr_17236;
});
var state_machine__6178__auto____1 = (function (state_17230){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17230);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17237){if((e17237 instanceof Object))
{var ex__6181__auto__ = e17237;var statearr_17238_17415 = state_17230;(statearr_17238_17415[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17230);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17416 = state_17230;
state_17230 = G__17416;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17230){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___17414,mc_3dmask_17413,map__17224,map__17224__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_17239 = f__6193__auto__.call(null);(statearr_17239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___17414);
return statearr_17239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___17414,mc_3dmask_17413,map__17224,map__17224__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__17240,key,modelChan){var map__17241 = p__17240;var map__17241__$1 = ((cljs.core.seq_QMARK_.call(null,map__17241))?cljs.core.apply.call(null,cljs.core.hash_map,map__17241):map__17241);var ctx = map__17241__$1;var tmpl_item = cljs.core.get.call(null,map__17241__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (state_17274){var state_val_17275 = (state_17274[(1)]);if((state_val_17275 === (2)))
{var inst_17244 = (state_17274[(2)]);var inst_17245 = cljs.core.nth.call(null,inst_17244,(0),null);var inst_17246 = cljs.core.nth.call(null,inst_17244,(1),null);var inst_17247 = $("#tmpl_streetsnap");var inst_17248 = inst_17247.tmpl(inst_17246,tmpl_item);var inst_17249 = inst_17248.find("#mc_historyContainer");var inst_17250 = inst_17248.find("#mc_sideContainer");var inst_17251 = inst_17248.find("#mc_bottomContainer");var inst_17252 = inst_17248.find("#img_stylePicture");var inst_17253 = inst_17248.find("#btn_share");var inst_17254 = inst_17248.find("#btn_fullscreen");var inst_17255 = inst_17248.find("#btn_more");var inst_17256 = (function (){var model = inst_17246;var btn_more = inst_17255;var mc_sideContainer = inst_17250;var mc_historyContainer = inst_17249;var err = inst_17245;var tmpl = inst_17247;var img_stylePicture = inst_17252;var elem = inst_17248;var btn_share = inst_17253;var mc_bottomContainer = inst_17251;var btn_fullscreen = inst_17254;var vec__17242 = inst_17244;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (state_17281){var state_val_17282 = (state_17281[(1)]);if((state_val_17282 === (2)))
{var inst_17279 = (state_17281[(2)]);var state_17281__$1 = state_17281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17281__$1,inst_17279);
} else
{if((state_val_17282 === (1)))
{var inst_17276 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_17277 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17276,null));var state_17281__$1 = state_17281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17281__$1,(2),tool.react.OnReact,inst_17277);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17286 = [null,null,null,null,null,null,null];(statearr_17286[(0)] = state_machine__6178__auto__);
(statearr_17286[(1)] = (1));
return statearr_17286;
});
var state_machine__6178__auto____1 = (function (state_17281){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17281);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17287){if((e17287 instanceof Object))
{var ex__6181__auto__ = e17287;var statearr_17288_17417 = state_17281;(statearr_17288_17417[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17281);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17418 = state_17281;
state_17281 = G__17418;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17281){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17289 = f__6193__auto__.call(null);(statearr_17289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_17289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var inst_17257 = inst_17255.on("click",inst_17256);var inst_17258 = (function (){var model = inst_17246;var btn_more = inst_17255;var mc_sideContainer = inst_17250;var mc_historyContainer = inst_17249;var err = inst_17245;var tmpl = inst_17247;var img_stylePicture = inst_17252;var elem = inst_17248;var btn_share = inst_17253;var mc_bottomContainer = inst_17251;var btn_fullscreen = inst_17254;var vec__17242 = inst_17244;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (state_17298){var state_val_17299 = (state_17298[(1)]);if((state_val_17299 === (2)))
{var inst_17296 = (state_17298[(2)]);var state_17298__$1 = state_17298;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17298__$1,inst_17296);
} else
{if((state_val_17299 === (1)))
{var inst_17290 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_17291 = [model];var inst_17292 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17290,inst_17291);var inst_17293 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_17292];var inst_17294 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17293,null));var state_17298__$1 = state_17298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17298__$1,(2),tool.react.OnReact,inst_17294);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17303 = [null,null,null,null,null,null,null];(statearr_17303[(0)] = state_machine__6178__auto__);
(statearr_17303[(1)] = (1));
return statearr_17303;
});
var state_machine__6178__auto____1 = (function (state_17298){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17298);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17304){if((e17304 instanceof Object))
{var ex__6181__auto__ = e17304;var statearr_17305_17419 = state_17298;(statearr_17305_17419[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17298);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17304;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17420 = state_17298;
state_17298 = G__17420;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17298){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17306 = f__6193__auto__.call(null);(statearr_17306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_17306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var inst_17259 = inst_17254.on("click",inst_17258);var inst_17260 = (function (){var model = inst_17246;var btn_more = inst_17255;var mc_sideContainer = inst_17250;var mc_historyContainer = inst_17249;var err = inst_17245;var tmpl = inst_17247;var img_stylePicture = inst_17252;var elem = inst_17248;var btn_share = inst_17253;var mc_bottomContainer = inst_17251;var btn_fullscreen = inst_17254;var vec__17242 = inst_17244;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (state_17316){var state_val_17317 = (state_17316[(1)]);if((state_val_17317 === (2)))
{var inst_17314 = (state_17316[(2)]);var state_17316__$1 = state_17316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17316__$1,inst_17314);
} else
{if((state_val_17317 === (1)))
{var inst_17307 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_17308 = model.styleUrl;var inst_17309 = [inst_17308];var inst_17310 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17307,inst_17309);var inst_17311 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_17310];var inst_17312 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17311,null));var state_17316__$1 = state_17316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17316__$1,(2),tool.react.OnReact,inst_17312);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17321 = [null,null,null,null,null,null,null];(statearr_17321[(0)] = state_machine__6178__auto__);
(statearr_17321[(1)] = (1));
return statearr_17321;
});
var state_machine__6178__auto____1 = (function (state_17316){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17316);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17322){if((e17322 instanceof Object))
{var ex__6181__auto__ = e17322;var statearr_17323_17421 = state_17316;(statearr_17323_17421[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17422 = state_17316;
state_17316 = G__17422;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17316){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17324 = f__6193__auto__.call(null);(statearr_17324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_17324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var inst_17261 = inst_17252.on("click",inst_17260);var inst_17262 = (function (){var model = inst_17246;var btn_more = inst_17255;var mc_sideContainer = inst_17250;var mc_historyContainer = inst_17249;var err = inst_17245;var tmpl = inst_17247;var img_stylePicture = inst_17252;var elem = inst_17248;var btn_share = inst_17253;var mc_bottomContainer = inst_17251;var btn_fullscreen = inst_17254;var vec__17242 = inst_17244;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (state_17333){var state_val_17334 = (state_17333[(1)]);if((state_val_17334 === (2)))
{var inst_17331 = (state_17333[(2)]);var state_17333__$1 = state_17333;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17333__$1,inst_17331);
} else
{if((state_val_17334 === (1)))
{var inst_17325 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_17326 = [model];var inst_17327 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17325,inst_17326);var inst_17328 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_17327];var inst_17329 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17328,null));var state_17333__$1 = state_17333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17333__$1,(2),tool.react.OnReact,inst_17329);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17338 = [null,null,null,null,null,null,null];(statearr_17338[(0)] = state_machine__6178__auto__);
(statearr_17338[(1)] = (1));
return statearr_17338;
});
var state_machine__6178__auto____1 = (function (state_17333){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17333);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17339){if((e17339 instanceof Object))
{var ex__6181__auto__ = e17339;var statearr_17340_17423 = state_17333;(statearr_17340_17423[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17333);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17424 = state_17333;
state_17333 = G__17424;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17333){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17341 = f__6193__auto__.call(null);(statearr_17341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_17341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var inst_17263 = inst_17253.on("click",inst_17262);var inst_17264 = (function (){var model = inst_17246;var btn_more = inst_17255;var mc_sideContainer = inst_17250;var mc_historyContainer = inst_17249;var err = inst_17245;var tmpl = inst_17247;var img_stylePicture = inst_17252;var elem = inst_17248;var btn_share = inst_17253;var mc_bottomContainer = inst_17251;var btn_fullscreen = inst_17254;var vec__17242 = inst_17244;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (state_17352){var state_val_17353 = (state_17352[(1)]);if((state_val_17353 === (2)))
{var inst_17350 = (state_17352[(2)]);var state_17352__$1 = state_17352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17352__$1,inst_17350);
} else
{if((state_val_17353 === (1)))
{var inst_17342 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_17343 = that.id;var inst_17344 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/goapp/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17343));var inst_17345 = [inst_17344];var inst_17346 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17342,inst_17345);var inst_17347 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_17346];var inst_17348 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17347,null));var state_17352__$1 = state_17352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17352__$1,(2),tool.react.OnReact,inst_17348);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17357 = [null,null,null,null,null,null,null];(statearr_17357[(0)] = state_machine__6178__auto__);
(statearr_17357[(1)] = (1));
return statearr_17357;
});
var state_machine__6178__auto____1 = (function (state_17352){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17352);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17358){if((e17358 instanceof Object))
{var ex__6181__auto__ = e17358;var statearr_17359_17425 = state_17352;(statearr_17359_17425[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17352);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17426 = state_17352;
state_17352 = G__17426;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17352){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17360 = f__6193__auto__.call(null);(statearr_17360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_17360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var inst_17265 = inst_17250.delegate("img","click",inst_17264);var inst_17266 = (function (){var model = inst_17246;var btn_more = inst_17255;var mc_sideContainer = inst_17250;var mc_historyContainer = inst_17249;var err = inst_17245;var tmpl = inst_17247;var img_stylePicture = inst_17252;var elem = inst_17248;var btn_share = inst_17253;var mc_bottomContainer = inst_17251;var btn_fullscreen = inst_17254;var vec__17242 = inst_17244;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (state_17371){var state_val_17372 = (state_17371[(1)]);if((state_val_17372 === (2)))
{var inst_17369 = (state_17371[(2)]);var state_17371__$1 = state_17371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17371__$1,inst_17369);
} else
{if((state_val_17372 === (1)))
{var inst_17361 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_17362 = that.id;var inst_17363 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/goapp/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17362));var inst_17364 = [inst_17363];var inst_17365 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17361,inst_17364);var inst_17366 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_17365];var inst_17367 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17366,null));var state_17371__$1 = state_17371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17371__$1,(2),tool.react.OnReact,inst_17367);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17376 = [null,null,null,null,null,null,null];(statearr_17376[(0)] = state_machine__6178__auto__);
(statearr_17376[(1)] = (1));
return statearr_17376;
});
var state_machine__6178__auto____1 = (function (state_17371){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17371);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17377){if((e17377 instanceof Object))
{var ex__6181__auto__ = e17377;var statearr_17378_17427 = state_17371;(statearr_17378_17427[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17428 = state_17371;
state_17371 = G__17428;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17371){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17379 = f__6193__auto__.call(null);(statearr_17379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_17379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var inst_17267 = inst_17251.delegate("img","click",inst_17266);var inst_17268 = (function (){var model = inst_17246;var btn_more = inst_17255;var mc_sideContainer = inst_17250;var mc_historyContainer = inst_17249;var err = inst_17245;var tmpl = inst_17247;var img_stylePicture = inst_17252;var elem = inst_17248;var btn_share = inst_17253;var mc_bottomContainer = inst_17251;var btn_fullscreen = inst_17254;var vec__17242 = inst_17244;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function (state_17389){var state_val_17390 = (state_17389[(1)]);if((state_val_17390 === (2)))
{var inst_17387 = (state_17389[(2)]);var state_17389__$1 = state_17389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17389__$1,inst_17387);
} else
{if((state_val_17390 === (1)))
{var inst_17380 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_17381 = that.id;var inst_17382 = [inst_17381];var inst_17383 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17380,inst_17382);var inst_17384 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_17383];var inst_17385 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17384,null));var state_17389__$1 = state_17389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17389__$1,(2),tool.react.OnReact,inst_17385);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17394 = [null,null,null,null,null,null,null];(statearr_17394[(0)] = state_machine__6178__auto__);
(statearr_17394[(1)] = (1));
return statearr_17394;
});
var state_machine__6178__auto____1 = (function (state_17389){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17395){if((e17395 instanceof Object))
{var ex__6181__auto__ = e17395;var statearr_17396_17429 = state_17389;(statearr_17396_17429[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17430 = state_17389;
state_17389 = G__17430;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17389){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17397 = f__6193__auto__.call(null);(statearr_17397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_17397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,vec__17242,inst_17244,inst_17245,inst_17246,inst_17247,inst_17248,inst_17249,inst_17250,inst_17251,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,state_val_17275,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var inst_17269 = inst_17249.delegate("img","click",inst_17268);var inst_17270 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_17271 = [inst_17248,name];var inst_17272 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17270,inst_17271);var state_17274__$1 = (function (){var statearr_17398 = state_17274;(statearr_17398[(7)] = inst_17259);
(statearr_17398[(8)] = inst_17263);
(statearr_17398[(9)] = inst_17261);
(statearr_17398[(10)] = inst_17257);
(statearr_17398[(11)] = inst_17265);
(statearr_17398[(12)] = inst_17269);
(statearr_17398[(13)] = inst_17267);
return statearr_17398;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17274__$1,inst_17272);
} else
{if((state_val_17275 === (1)))
{var state_17274__$1 = state_17274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17274__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17402[(0)] = state_machine__6178__auto__);
(statearr_17402[(1)] = (1));
return statearr_17402;
});
var state_machine__6178__auto____1 = (function (state_17274){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17274);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17403){if((e17403 instanceof Object))
{var ex__6181__auto__ = e17403;var statearr_17404_17431 = state_17274;(statearr_17404_17431[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17432 = state_17274;
state_17274 = G__17432;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17274){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17405 = f__6193__auto__.call(null);(statearr_17405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__17241,map__17241__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__17433){var map__17434 = p__17433;var map__17434__$1 = ((cljs.core.seq_QMARK_.call(null,map__17434))?cljs.core.apply.call(null,cljs.core.hash_map,map__17434):map__17434);var view = map__17434__$1;var elem = cljs.core.get.call(null,map__17434__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_17450 = elem.find("#mc_3dmask");var c__6192__auto___17451 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___17451,mc_3dmask_17450,map__17434,map__17434__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___17451,mc_3dmask_17450,map__17434,map__17434__$1,view,elem){
return (function (state_17440){var state_val_17441 = (state_17440[(1)]);if((state_val_17441 === (2)))
{var inst_17437 = (state_17440[(2)]);var inst_17438 = mc_3dmask_17450.fadeOut((400));var state_17440__$1 = (function (){var statearr_17442 = state_17440;(statearr_17442[(7)] = inst_17437);
return statearr_17442;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17440__$1,inst_17438);
} else
{if((state_val_17441 === (1)))
{var inst_17435 = cljs.core.async.timeout.call(null,(3000));var state_17440__$1 = state_17440;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17440__$1,(2),inst_17435);
} else
{return null;
}
}
});})(c__6192__auto___17451,mc_3dmask_17450,map__17434,map__17434__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___17451,mc_3dmask_17450,map__17434,map__17434__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17446 = [null,null,null,null,null,null,null,null];(statearr_17446[(0)] = state_machine__6178__auto__);
(statearr_17446[(1)] = (1));
return statearr_17446;
});
var state_machine__6178__auto____1 = (function (state_17440){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17440);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17447){if((e17447 instanceof Object))
{var ex__6181__auto__ = e17447;var statearr_17448_17452 = state_17440;(statearr_17448_17452[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17440);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17453 = state_17440;
state_17440 = G__17453;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17440){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___17451,mc_3dmask_17450,map__17434,map__17434__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_17449 = f__6193__auto__.call(null);(statearr_17449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___17451);
return statearr_17449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___17451,mc_3dmask_17450,map__17434,map__17434__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__17454,key,modelChan){var map__17455 = p__17454;var map__17455__$1 = ((cljs.core.seq_QMARK_.call(null,map__17455))?cljs.core.apply.call(null,cljs.core.hash_map,map__17455):map__17455);var ctx = map__17455__$1;var tmpl_item = cljs.core.get.call(null,map__17455__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__17455,map__17455__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__17455,map__17455__$1,ctx,tmpl_item){
return (function (state_17467){var state_val_17468 = (state_17467[(1)]);if((state_val_17468 === (2)))
{var inst_17458 = (state_17467[(2)]);var inst_17459 = cljs.core.nth.call(null,inst_17458,(0),null);var inst_17460 = cljs.core.nth.call(null,inst_17458,(1),null);var inst_17461 = $("#tmpl_home");var inst_17462 = inst_17461.tmpl(inst_17460,tmpl_item);var inst_17463 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_17464 = [inst_17462,key];var inst_17465 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17463,inst_17464);var state_17467__$1 = (function (){var statearr_17469 = state_17467;(statearr_17469[(7)] = inst_17459);
return statearr_17469;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17467__$1,inst_17465);
} else
{if((state_val_17468 === (1)))
{var state_17467__$1 = state_17467;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17467__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__17455,map__17455__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__17455,map__17455__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17473 = [null,null,null,null,null,null,null,null];(statearr_17473[(0)] = state_machine__6178__auto__);
(statearr_17473[(1)] = (1));
return statearr_17473;
});
var state_machine__6178__auto____1 = (function (state_17467){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17467);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17474){if((e17474 instanceof Object))
{var ex__6181__auto__ = e17474;var statearr_17475_17477 = state_17467;(statearr_17475_17477[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17467);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17478 = state_17467;
state_17467 = G__17478;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17467){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__17455,map__17455__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17476 = f__6193__auto__.call(null);(statearr_17476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__17455,map__17455__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__17479,key,view){var map__17480 = p__17479;var map__17480__$1 = ((cljs.core.seq_QMARK_.call(null,map__17480))?cljs.core.apply.call(null,cljs.core.hash_map,map__17480):map__17480);var ctx = map__17480__$1;var popupContainer = cljs.core.get.call(null,map__17480__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__17481 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__17481.appendTo(popupContainer);
G__17481.fadeIn((400));
return G__17481;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__17482,key,p__17483){var map__17484 = p__17482;var map__17484__$1 = ((cljs.core.seq_QMARK_.call(null,map__17484))?cljs.core.apply.call(null,cljs.core.hash_map,map__17484):map__17484);var ctx = map__17484__$1;var container = cljs.core.get.call(null,map__17484__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__17485 = p__17483;var map__17485__$1 = ((cljs.core.seq_QMARK_.call(null,map__17485))?cljs.core.apply.call(null,cljs.core.hash_map,map__17485):map__17485);var view = map__17485__$1;var elem = cljs.core.get.call(null,map__17485__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__17484,map__17484__$1,ctx,container,map__17485,map__17485__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__17484,map__17484__$1,ctx,container,map__17485,map__17485__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__17486,key,modelChan){var map__17487 = p__17486;var map__17487__$1 = ((cljs.core.seq_QMARK_.call(null,map__17487))?cljs.core.apply.call(null,cljs.core.hash_map,map__17487):map__17487);var ctx = map__17487__$1;var media_type = cljs.core.get.call(null,map__17487__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var tmpl_item = cljs.core.get.call(null,map__17487__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item){
return (function (state_17540){var state_val_17541 = (state_17540[(1)]);if((state_val_17541 === (7)))
{var inst_17510 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type);var state_17540__$1 = state_17540;if(inst_17510)
{var statearr_17542_17577 = state_17540__$1;(statearr_17542_17577[(1)] = (9));
} else
{var statearr_17543_17578 = state_17540__$1;(statearr_17543_17578[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17541 === (1)))
{var state_17540__$1 = state_17540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17540__$1,(2),modelChan);
} else
{if((state_val_17541 === (4)))
{var inst_17503 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type);var state_17540__$1 = state_17540;if(inst_17503)
{var statearr_17544_17579 = state_17540__$1;(statearr_17544_17579[(1)] = (6));
} else
{var statearr_17545_17580 = state_17540__$1;(statearr_17545_17580[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17541 === (6)))
{var inst_17494 = (state_17540[(7)]);var inst_17505 = inst_17494.width();var inst_17506 = inst_17494.height();var inst_17507 = [inst_17505,inst_17506];var inst_17508 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17507,null));var state_17540__$1 = state_17540;var statearr_17546_17581 = state_17540__$1;(statearr_17546_17581[(2)] = inst_17508);
(statearr_17546_17581[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17541 === (3)))
{var inst_17500 = [(800),(600)];var inst_17501 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17500,null));var state_17540__$1 = state_17540;var statearr_17547_17582 = state_17540__$1;(statearr_17547_17582[(2)] = inst_17501);
(statearr_17547_17582[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17541 === (2)))
{var inst_17491 = (state_17540[(8)]);var inst_17491__$1 = (state_17540[(2)]);var inst_17492 = cljs.core.nth.call(null,inst_17491__$1,(0),null);var inst_17493 = cljs.core.nth.call(null,inst_17491__$1,(1),null);var inst_17494 = $("body");var inst_17498 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),media_type);var state_17540__$1 = (function (){var statearr_17548 = state_17540;(statearr_17548[(9)] = inst_17493);
(statearr_17548[(10)] = inst_17492);
(statearr_17548[(8)] = inst_17491__$1);
(statearr_17548[(7)] = inst_17494);
return statearr_17548;
})();if(inst_17498)
{var statearr_17549_17583 = state_17540__$1;(statearr_17549_17583[(1)] = (3));
} else
{var statearr_17550_17584 = state_17540__$1;(statearr_17550_17584[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17541 === (11)))
{var inst_17522 = (state_17540[(2)]);var state_17540__$1 = state_17540;var statearr_17551_17585 = state_17540__$1;(statearr_17551_17585[(2)] = inst_17522);
(statearr_17551_17585[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17541 === (9)))
{var inst_17494 = (state_17540[(7)]);var inst_17512 = inst_17494.width();var inst_17513 = inst_17494.height();var inst_17514 = [inst_17512,inst_17513];var inst_17515 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17514,null));var state_17540__$1 = state_17540;var statearr_17552_17586 = state_17540__$1;(statearr_17552_17586[(2)] = inst_17515);
(statearr_17552_17586[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17541 === (5)))
{var inst_17493 = (state_17540[(9)]);var inst_17492 = (state_17540[(10)]);var inst_17491 = (state_17540[(8)]);var inst_17494 = (state_17540[(7)]);var inst_17526 = (state_17540[(2)]);var inst_17527 = cljs.core.nth.call(null,inst_17526,(0),null);var inst_17528 = cljs.core.nth.call(null,inst_17526,(1),null);var inst_17529 = inst_17493.url;var inst_17530 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17529)+"?Width="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17527)+"&Height="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17528));var inst_17531 = inst_17493.url = inst_17530;var inst_17532 = $("#tmpl_bigPhoto");var inst_17533 = inst_17532.tmpl(inst_17493,tmpl_item);var inst_17534 = (function (){var model = inst_17493;var _ = inst_17531;var err = inst_17492;var tmpl = inst_17532;var pw = inst_17527;var elem = inst_17533;var vec__17488 = inst_17491;var root_elem = inst_17494;var vec__17489 = inst_17526;var back = inst_17533;var ph = inst_17528;return ((function (model,_,err,tmpl,pw,elem,vec__17488,root_elem,vec__17489,back,ph,inst_17493,inst_17492,inst_17491,inst_17494,inst_17526,inst_17527,inst_17528,inst_17529,inst_17530,inst_17531,inst_17532,inst_17533,state_val_17541,c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,_,err,tmpl,pw,elem,vec__17488,root_elem,vec__17489,back,ph,inst_17493,inst_17492,inst_17491,inst_17494,inst_17526,inst_17527,inst_17528,inst_17529,inst_17530,inst_17531,inst_17532,inst_17533,state_val_17541,c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,_,err,tmpl,pw,elem,vec__17488,root_elem,vec__17489,back,ph,inst_17493,inst_17492,inst_17491,inst_17494,inst_17526,inst_17527,inst_17528,inst_17529,inst_17530,inst_17531,inst_17532,inst_17533,state_val_17541,c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item){
return (function (state_17558){var state_val_17559 = (state_17558[(1)]);if((state_val_17559 === (2)))
{var inst_17556 = (state_17558[(2)]);var state_17558__$1 = state_17558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17558__$1,inst_17556);
} else
{if((state_val_17559 === (1)))
{var inst_17553 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_17554 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17553,null));var state_17558__$1 = state_17558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17558__$1,(2),tool.react.OnReact,inst_17554);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,_,err,tmpl,pw,elem,vec__17488,root_elem,vec__17489,back,ph,inst_17493,inst_17492,inst_17491,inst_17494,inst_17526,inst_17527,inst_17528,inst_17529,inst_17530,inst_17531,inst_17532,inst_17533,state_val_17541,c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,_,err,tmpl,pw,elem,vec__17488,root_elem,vec__17489,back,ph,inst_17493,inst_17492,inst_17491,inst_17494,inst_17526,inst_17527,inst_17528,inst_17529,inst_17530,inst_17531,inst_17532,inst_17533,state_val_17541,c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17563 = [null,null,null,null,null,null,null];(statearr_17563[(0)] = state_machine__6178__auto__);
(statearr_17563[(1)] = (1));
return statearr_17563;
});
var state_machine__6178__auto____1 = (function (state_17558){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17564){if((e17564 instanceof Object))
{var ex__6181__auto__ = e17564;var statearr_17565_17587 = state_17558;(statearr_17565_17587[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17588 = state_17558;
state_17558 = G__17588;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17558){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,_,err,tmpl,pw,elem,vec__17488,root_elem,vec__17489,back,ph,inst_17493,inst_17492,inst_17491,inst_17494,inst_17526,inst_17527,inst_17528,inst_17529,inst_17530,inst_17531,inst_17532,inst_17533,state_val_17541,c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17566 = f__6193__auto__.call(null);(statearr_17566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_17566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,_,err,tmpl,pw,elem,vec__17488,root_elem,vec__17489,back,ph,inst_17493,inst_17492,inst_17491,inst_17494,inst_17526,inst_17527,inst_17528,inst_17529,inst_17530,inst_17531,inst_17532,inst_17533,state_val_17541,c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,_,err,tmpl,pw,elem,vec__17488,root_elem,vec__17489,back,ph,inst_17493,inst_17492,inst_17491,inst_17494,inst_17526,inst_17527,inst_17528,inst_17529,inst_17530,inst_17531,inst_17532,inst_17533,state_val_17541,c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item))
})();var inst_17535 = inst_17533.on("click",inst_17534);var inst_17536 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_17537 = [inst_17533,key];var inst_17538 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17536,inst_17537);var state_17540__$1 = (function (){var statearr_17567 = state_17540;(statearr_17567[(11)] = inst_17535);
return statearr_17567;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17540__$1,inst_17538);
} else
{if((state_val_17541 === (10)))
{var inst_17494 = (state_17540[(7)]);var inst_17517 = inst_17494.width();var inst_17518 = inst_17494.height();var inst_17519 = [inst_17517,inst_17518];var inst_17520 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17519,null));var state_17540__$1 = state_17540;var statearr_17568_17589 = state_17540__$1;(statearr_17568_17589[(2)] = inst_17520);
(statearr_17568_17589[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17541 === (8)))
{var inst_17524 = (state_17540[(2)]);var state_17540__$1 = state_17540;var statearr_17569_17590 = state_17540__$1;(statearr_17569_17590[(2)] = inst_17524);
(statearr_17569_17590[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17573 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17573[(0)] = state_machine__6178__auto__);
(statearr_17573[(1)] = (1));
return statearr_17573;
});
var state_machine__6178__auto____1 = (function (state_17540){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17574){if((e17574 instanceof Object))
{var ex__6181__auto__ = e17574;var statearr_17575_17591 = state_17540;(statearr_17575_17591[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17574;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17592 = state_17540;
state_17540 = G__17592;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17540){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17576 = f__6193__auto__.call(null);(statearr_17576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17576;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__17487,map__17487__$1,ctx,media_type,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__17593,key,modelChan){var map__17594 = p__17593;var map__17594__$1 = ((cljs.core.seq_QMARK_.call(null,map__17594))?cljs.core.apply.call(null,cljs.core.hash_map,map__17594):map__17594);var ctx = map__17594__$1;var tmpl_item = cljs.core.get.call(null,map__17594__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__17594,map__17594__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__17594,map__17594__$1,ctx,tmpl_item){
return (function (state_17606){var state_val_17607 = (state_17606[(1)]);if((state_val_17607 === (2)))
{var inst_17597 = (state_17606[(2)]);var inst_17598 = cljs.core.nth.call(null,inst_17597,(0),null);var inst_17599 = cljs.core.nth.call(null,inst_17597,(1),null);var inst_17600 = $("#tmpl_news");var inst_17601 = inst_17600.tmpl(inst_17599,tmpl_item);var inst_17602 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_17603 = [inst_17601,key];var inst_17604 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17602,inst_17603);var state_17606__$1 = (function (){var statearr_17608 = state_17606;(statearr_17608[(7)] = inst_17598);
return statearr_17608;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17606__$1,inst_17604);
} else
{if((state_val_17607 === (1)))
{var state_17606__$1 = state_17606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17606__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__17594,map__17594__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__17594,map__17594__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17612 = [null,null,null,null,null,null,null,null];(statearr_17612[(0)] = state_machine__6178__auto__);
(statearr_17612[(1)] = (1));
return statearr_17612;
});
var state_machine__6178__auto____1 = (function (state_17606){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17606);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17613){if((e17613 instanceof Object))
{var ex__6181__auto__ = e17613;var statearr_17614_17616 = state_17606;(statearr_17614_17616[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17606);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17617 = state_17606;
state_17606 = G__17617;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17606){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__17594,map__17594__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_17615 = f__6193__auto__.call(null);(statearr_17615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__17594,map__17594__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
