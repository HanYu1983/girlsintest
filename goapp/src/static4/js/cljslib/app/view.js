// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17714,key,view){var map__17715 = p__17714;var map__17715__$1 = ((cljs.core.seq_QMARK_.call(null,map__17715))?cljs.core.apply.call(null,cljs.core.hash_map,map__17715):map__17715);var ctx = map__17715__$1;var container = cljs.core.get.call(null,map__17715__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__17716 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__17716.appendTo(container);
G__17716.fadeIn((400));
return G__17716;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17717,key,view){var map__17718 = p__17717;var map__17718__$1 = ((cljs.core.seq_QMARK_.call(null,map__17718))?cljs.core.apply.call(null,cljs.core.hash_map,map__17718):map__17718);var ctx = map__17718__$1;var container = cljs.core.get.call(null,map__17718__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__17719 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__17719.remove();
return G__17719;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_17878 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_17879 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_17880 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_17880.off("click");
btn_search_17879.off("click");
mc_modelContainer_17878.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_17819){var state_val_17820 = (state_17819[(1)]);if((state_val_17820 === (2)))
{var inst_17801 = (state_17819[(2)]);var inst_17802 = cljs.core.nth.call(null,inst_17801,(0),null);var inst_17803 = cljs.core.nth.call(null,inst_17801,(1),null);var inst_17804 = $("#tmpl_streetsnap_list");var inst_17805 = inst_17804.tmpl(inst_17803,null);var inst_17806 = inst_17805.find("#mc_modelContainer");var inst_17807 = inst_17805.find("#btn_search");var inst_17808 = inst_17805.find("#btn_return");var inst_17809 = (function (){var btn_return = inst_17808;var btn_search = inst_17807;var mc_modelContainer = inst_17806;var elem = inst_17805;var tmpl = inst_17804;var model = inst_17803;var err = inst_17802;var vec__17799 = inst_17801;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,state_val_17820,c__6216__auto__){
return (function (){var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,state_val_17820,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,state_val_17820,c__6216__auto__){
return (function (state_17826){var state_val_17827 = (state_17826[(1)]);if((state_val_17827 === (2)))
{var inst_17824 = (state_17826[(2)]);var state_17826__$1 = state_17826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17826__$1,inst_17824);
} else
{if((state_val_17827 === (1)))
{var inst_17821 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_17822 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17821,null));var state_17826__$1 = state_17826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17826__$1,(2),tool.react.OnReact,inst_17822);
} else
{return null;
}
}
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,state_val_17820,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,state_val_17820,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17831 = [null,null,null,null,null,null,null];(statearr_17831[(0)] = state_machine__6202__auto__);
(statearr_17831[(1)] = (1));
return statearr_17831;
});
var state_machine__6202__auto____1 = (function (state_17826){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17826);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17832){if((e17832 instanceof Object))
{var ex__6205__auto__ = e17832;var statearr_17833_17881 = state_17826;(statearr_17833_17881[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17826);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17882 = state_17826;
state_17826 = G__17882;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17826){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,state_val_17820,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_17834 = f__6217__auto__.call(null);(statearr_17834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_17834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,state_val_17820,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,state_val_17820,c__6216__auto__))
})();var inst_17810 = inst_17808.click(inst_17809);var inst_17811 = (function (){var btn_return = inst_17808;var btn_search = inst_17807;var mc_modelContainer = inst_17806;var elem = inst_17805;var tmpl = inst_17804;var model = inst_17803;var err = inst_17802;var vec__17799 = inst_17801;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,state_val_17820,c__6216__auto__){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,state_val_17820,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,state_val_17820,c__6216__auto__){
return (function (state_17843){var state_val_17844 = (state_17843[(1)]);if((state_val_17844 === (2)))
{var inst_17841 = (state_17843[(2)]);var state_17843__$1 = state_17843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17843__$1,inst_17841);
} else
{if((state_val_17844 === (1)))
{var inst_17835 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_17836 = [searchKey];var inst_17837 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17835,inst_17836);var inst_17838 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_17837];var inst_17839 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17838,null));var state_17843__$1 = state_17843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17843__$1,(2),tool.react.OnReact,inst_17839);
} else
{return null;
}
}
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,state_val_17820,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,state_val_17820,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17848 = [null,null,null,null,null,null,null];(statearr_17848[(0)] = state_machine__6202__auto__);
(statearr_17848[(1)] = (1));
return statearr_17848;
});
var state_machine__6202__auto____1 = (function (state_17843){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17843);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17849){if((e17849 instanceof Object))
{var ex__6205__auto__ = e17849;var statearr_17850_17883 = state_17843;(statearr_17850_17883[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17843);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17884 = state_17843;
state_17843 = G__17884;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17843){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,state_val_17820,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_17851 = f__6217__auto__.call(null);(statearr_17851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_17851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,state_val_17820,c__6216__auto__))
);
return c__6216__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,state_val_17820,c__6216__auto__))
})();var inst_17812 = inst_17807.click(inst_17811);var inst_17813 = (function (){var btn_return = inst_17808;var btn_search = inst_17807;var mc_modelContainer = inst_17806;var elem = inst_17805;var tmpl = inst_17804;var model = inst_17803;var err = inst_17802;var vec__17799 = inst_17801;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,inst_17811,inst_17812,state_val_17820,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,inst_17811,inst_17812,state_val_17820,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,inst_17811,inst_17812,state_val_17820,c__6216__auto__){
return (function (state_17861){var state_val_17862 = (state_17861[(1)]);if((state_val_17862 === (2)))
{var inst_17859 = (state_17861[(2)]);var state_17861__$1 = state_17861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17861__$1,inst_17859);
} else
{if((state_val_17862 === (1)))
{var inst_17852 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_17853 = that.id;var inst_17854 = [inst_17853];var inst_17855 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17852,inst_17854);var inst_17856 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_17855];var inst_17857 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17856,null));var state_17861__$1 = state_17861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17861__$1,(2),tool.react.OnReact,inst_17857);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,inst_17811,inst_17812,state_val_17820,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,inst_17811,inst_17812,state_val_17820,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17866 = [null,null,null,null,null,null,null];(statearr_17866[(0)] = state_machine__6202__auto__);
(statearr_17866[(1)] = (1));
return statearr_17866;
});
var state_machine__6202__auto____1 = (function (state_17861){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17861);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17867){if((e17867 instanceof Object))
{var ex__6205__auto__ = e17867;var statearr_17868_17885 = state_17861;(statearr_17868_17885[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17861);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17886 = state_17861;
state_17861 = G__17886;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17861){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,inst_17811,inst_17812,state_val_17820,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_17869 = f__6217__auto__.call(null);(statearr_17869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_17869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,inst_17811,inst_17812,state_val_17820,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__17799,inst_17801,inst_17802,inst_17803,inst_17804,inst_17805,inst_17806,inst_17807,inst_17808,inst_17809,inst_17810,inst_17811,inst_17812,state_val_17820,c__6216__auto__))
})();var inst_17814 = inst_17806.delegate("div[modelFrame]","click",inst_17813);var inst_17815 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_17816 = [inst_17805];var inst_17817 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17815,inst_17816);var state_17819__$1 = (function (){var statearr_17870 = state_17819;(statearr_17870[(7)] = inst_17812);
(statearr_17870[(8)] = inst_17810);
(statearr_17870[(9)] = inst_17814);
return statearr_17870;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17819__$1,inst_17817);
} else
{if((state_val_17820 === (1)))
{var state_17819__$1 = state_17819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17819__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17874 = [null,null,null,null,null,null,null,null,null,null];(statearr_17874[(0)] = state_machine__6202__auto__);
(statearr_17874[(1)] = (1));
return statearr_17874;
});
var state_machine__6202__auto____1 = (function (state_17819){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17819);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17875){if((e17875 instanceof Object))
{var ex__6205__auto__ = e17875;var statearr_17876_17887 = state_17819;(statearr_17876_17887[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17888 = state_17819;
state_17819 = G__17888;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17819){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_17877 = f__6217__auto__.call(null);(statearr_17877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_17877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__17971){var map__17972 = p__17971;var map__17972__$1 = ((cljs.core.seq_QMARK_.call(null,map__17972))?cljs.core.apply.call(null,cljs.core.hash_map,map__17972):map__17972);var view = map__17972__$1;var elem = cljs.core.get.call(null,map__17972__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_18053 = elem.find("#mc_historyContainer");mc_modelContainer_18053.undelegate("img","click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__17973){var map__17974 = p__17973;var map__17974__$1 = ((cljs.core.seq_QMARK_.call(null,map__17974))?cljs.core.apply.call(null,cljs.core.hash_map,map__17974):map__17974);var view = map__17974__$1;var elem = cljs.core.get.call(null,map__17974__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_18054 = elem.find("#mc_3dmask");var c__6216__auto___18055 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___18055,mc_3dmask_18054,map__17974,map__17974__$1,view,elem){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___18055,mc_3dmask_18054,map__17974,map__17974__$1,view,elem){
return (function (state_17980){var state_val_17981 = (state_17980[(1)]);if((state_val_17981 === (2)))
{var inst_17977 = (state_17980[(2)]);var inst_17978 = mc_3dmask_18054.fadeOut((400));var state_17980__$1 = (function (){var statearr_17982 = state_17980;(statearr_17982[(7)] = inst_17977);
return statearr_17982;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17980__$1,inst_17978);
} else
{if((state_val_17981 === (1)))
{var inst_17975 = cljs.core.async.timeout.call(null,(5000));var state_17980__$1 = state_17980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17980__$1,(2),inst_17975);
} else
{return null;
}
}
});})(c__6216__auto___18055,mc_3dmask_18054,map__17974,map__17974__$1,view,elem))
;return ((function (switch__6201__auto__,c__6216__auto___18055,mc_3dmask_18054,map__17974,map__17974__$1,view,elem){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17986 = [null,null,null,null,null,null,null,null];(statearr_17986[(0)] = state_machine__6202__auto__);
(statearr_17986[(1)] = (1));
return statearr_17986;
});
var state_machine__6202__auto____1 = (function (state_17980){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17980);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17987){if((e17987 instanceof Object))
{var ex__6205__auto__ = e17987;var statearr_17988_18056 = state_17980;(statearr_17988_18056[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17980);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18057 = state_17980;
state_17980 = G__18057;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17980){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___18055,mc_3dmask_18054,map__17974,map__17974__$1,view,elem))
})();var state__6218__auto__ = (function (){var statearr_17989 = f__6217__auto__.call(null);(statearr_17989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___18055);
return statearr_17989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___18055,mc_3dmask_18054,map__17974,map__17974__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_18007){var state_val_18008 = (state_18007[(1)]);if((state_val_18008 === (2)))
{var inst_17992 = (state_18007[(2)]);var inst_17993 = cljs.core.nth.call(null,inst_17992,(0),null);var inst_17994 = cljs.core.nth.call(null,inst_17992,(1),null);var inst_17995 = $("#tmpl_streetsnap");var inst_17996 = inst_17995.tmpl(inst_17994,null);var inst_17997 = inst_17996.find("#mc_historyContainer");var inst_17998 = inst_17996.find("#mc_sideContainer");var inst_17999 = (function (){var mc_sideContainer = inst_17998;var mc_historyContainer = inst_17997;var elem = inst_17996;var tmpl = inst_17995;var model = inst_17994;var err = inst_17993;var vec__17990 = inst_17992;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,state_val_18008,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,state_val_18008,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,state_val_18008,c__6216__auto__){
return (function (state_18018){var state_val_18019 = (state_18018[(1)]);if((state_val_18019 === (2)))
{var inst_18016 = (state_18018[(2)]);var state_18018__$1 = state_18018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18018__$1,inst_18016);
} else
{if((state_val_18019 === (1)))
{var inst_18009 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_18010 = that.id;var inst_18011 = [inst_18010];var inst_18012 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18009,inst_18011);var inst_18013 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_18012];var inst_18014 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18013,null));var state_18018__$1 = state_18018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18018__$1,(2),tool.react.OnReact,inst_18014);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,state_val_18008,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,state_val_18008,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_18023 = [null,null,null,null,null,null,null];(statearr_18023[(0)] = state_machine__6202__auto__);
(statearr_18023[(1)] = (1));
return statearr_18023;
});
var state_machine__6202__auto____1 = (function (state_18018){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_18018);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e18024){if((e18024 instanceof Object))
{var ex__6205__auto__ = e18024;var statearr_18025_18058 = state_18018;(statearr_18025_18058[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18018);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18059 = state_18018;
state_18018 = G__18059;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_18018){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_18018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,state_val_18008,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_18026 = f__6217__auto__.call(null);(statearr_18026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_18026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,state_val_18008,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,state_val_18008,c__6216__auto__))
})();var inst_18000 = inst_17998.delegate("img","click",inst_17999);var inst_18001 = (function (){var mc_sideContainer = inst_17998;var mc_historyContainer = inst_17997;var elem = inst_17996;var tmpl = inst_17995;var model = inst_17994;var err = inst_17993;var vec__17990 = inst_17992;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,inst_17999,inst_18000,state_val_18008,c__6216__auto__){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,inst_17999,inst_18000,state_val_18008,c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,inst_17999,inst_18000,state_val_18008,c__6216__auto__){
return (function (state_18036){var state_val_18037 = (state_18036[(1)]);if((state_val_18037 === (2)))
{var inst_18034 = (state_18036[(2)]);var state_18036__$1 = state_18036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18036__$1,inst_18034);
} else
{if((state_val_18037 === (1)))
{var inst_18027 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_18028 = that.id;var inst_18029 = [inst_18028];var inst_18030 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18027,inst_18029);var inst_18031 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_18030];var inst_18032 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18031,null));var state_18036__$1 = state_18036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18036__$1,(2),tool.react.OnReact,inst_18032);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,inst_17999,inst_18000,state_val_18008,c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,inst_17999,inst_18000,state_val_18008,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_18041 = [null,null,null,null,null,null,null];(statearr_18041[(0)] = state_machine__6202__auto__);
(statearr_18041[(1)] = (1));
return statearr_18041;
});
var state_machine__6202__auto____1 = (function (state_18036){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_18036);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e18042){if((e18042 instanceof Object))
{var ex__6205__auto__ = e18042;var statearr_18043_18060 = state_18036;(statearr_18043_18060[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18036);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18061 = state_18036;
state_18036 = G__18061;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_18036){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_18036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,inst_17999,inst_18000,state_val_18008,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_18044 = f__6217__auto__.call(null);(statearr_18044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_18044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,inst_17999,inst_18000,state_val_18008,c__6216__auto__))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__17990,inst_17992,inst_17993,inst_17994,inst_17995,inst_17996,inst_17997,inst_17998,inst_17999,inst_18000,state_val_18008,c__6216__auto__))
})();var inst_18002 = inst_17997.delegate("img","click",inst_18001);var inst_18003 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_18004 = [inst_17996];var inst_18005 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18003,inst_18004);var state_18007__$1 = (function (){var statearr_18045 = state_18007;(statearr_18045[(7)] = inst_18000);
(statearr_18045[(8)] = inst_18002);
return statearr_18045;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18007__$1,inst_18005);
} else
{if((state_val_18008 === (1)))
{var state_18007__$1 = state_18007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18007__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_18049 = [null,null,null,null,null,null,null,null,null];(statearr_18049[(0)] = state_machine__6202__auto__);
(statearr_18049[(1)] = (1));
return statearr_18049;
});
var state_machine__6202__auto____1 = (function (state_18007){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_18007);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e18050){if((e18050 instanceof Object))
{var ex__6205__auto__ = e18050;var statearr_18051_18062 = state_18007;(statearr_18051_18062[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18007);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18063 = state_18007;
state_18007 = G__18063;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_18007){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_18007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_18052 = f__6217__auto__.call(null);(statearr_18052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_18052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__18064){var map__18065 = p__18064;var map__18065__$1 = ((cljs.core.seq_QMARK_.call(null,map__18065))?cljs.core.apply.call(null,cljs.core.hash_map,map__18065):map__18065);var view = map__18065__$1;var elem = cljs.core.get.call(null,map__18065__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_18081 = elem.find("#mc_3dmask");var c__6216__auto___18082 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___18082,mc_3dmask_18081,map__18065,map__18065__$1,view,elem){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___18082,mc_3dmask_18081,map__18065,map__18065__$1,view,elem){
return (function (state_18071){var state_val_18072 = (state_18071[(1)]);if((state_val_18072 === (2)))
{var inst_18068 = (state_18071[(2)]);var inst_18069 = mc_3dmask_18081.fadeOut((400));var state_18071__$1 = (function (){var statearr_18073 = state_18071;(statearr_18073[(7)] = inst_18068);
return statearr_18073;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18071__$1,inst_18069);
} else
{if((state_val_18072 === (1)))
{var inst_18066 = cljs.core.async.timeout.call(null,(5000));var state_18071__$1 = state_18071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18071__$1,(2),inst_18066);
} else
{return null;
}
}
});})(c__6216__auto___18082,mc_3dmask_18081,map__18065,map__18065__$1,view,elem))
;return ((function (switch__6201__auto__,c__6216__auto___18082,mc_3dmask_18081,map__18065,map__18065__$1,view,elem){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_18077 = [null,null,null,null,null,null,null,null];(statearr_18077[(0)] = state_machine__6202__auto__);
(statearr_18077[(1)] = (1));
return statearr_18077;
});
var state_machine__6202__auto____1 = (function (state_18071){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_18071);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e18078){if((e18078 instanceof Object))
{var ex__6205__auto__ = e18078;var statearr_18079_18083 = state_18071;(statearr_18079_18083[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18084 = state_18071;
state_18071 = G__18084;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_18071){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_18071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___18082,mc_3dmask_18081,map__18065,map__18065__$1,view,elem))
})();var state__6218__auto__ = (function (){var statearr_18080 = f__6217__auto__.call(null);(statearr_18080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___18082);
return statearr_18080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___18082,mc_3dmask_18081,map__18065,map__18065__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,modelChan){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_18096){var state_val_18097 = (state_18096[(1)]);if((state_val_18097 === (2)))
{var inst_18087 = (state_18096[(2)]);var inst_18088 = cljs.core.nth.call(null,inst_18087,(0),null);var inst_18089 = cljs.core.nth.call(null,inst_18087,(1),null);var inst_18090 = $("#tmpl_home");var inst_18091 = inst_18090.tmpl(inst_18089,null);var inst_18092 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_18093 = [inst_18091];var inst_18094 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18092,inst_18093);var state_18096__$1 = (function (){var statearr_18098 = state_18096;(statearr_18098[(7)] = inst_18088);
return statearr_18098;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18096__$1,inst_18094);
} else
{if((state_val_18097 === (1)))
{var state_18096__$1 = state_18096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18096__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_18102 = [null,null,null,null,null,null,null,null];(statearr_18102[(0)] = state_machine__6202__auto__);
(statearr_18102[(1)] = (1));
return statearr_18102;
});
var state_machine__6202__auto____1 = (function (state_18096){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_18096);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e18103){if((e18103 instanceof Object))
{var ex__6205__auto__ = e18103;var statearr_18104_18106 = state_18096;(statearr_18104_18106[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18096);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18107 = state_18096;
state_18096 = G__18107;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_18096){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_18096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_18105 = f__6217__auto__.call(null);(statearr_18105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_18105;
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
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__18108){var map__18109 = p__18108;var map__18109__$1 = ((cljs.core.seq_QMARK_.call(null,map__18109))?cljs.core.apply.call(null,cljs.core.hash_map,map__18109):map__18109);var view = map__18109__$1;var elem = cljs.core.get.call(null,map__18109__$1,new cljs.core.Keyword(null,"elem","elem",618631056));elem.off("click");
return tool.react.AnimateClose.call(null,cljs.core.name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
