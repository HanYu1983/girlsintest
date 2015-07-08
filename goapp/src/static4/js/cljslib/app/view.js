// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__10777,key,view){var map__10778 = p__10777;var map__10778__$1 = ((cljs.core.seq_QMARK_.call(null,map__10778))?cljs.core.apply.call(null,cljs.core.hash_map,map__10778):map__10778);var ctx = map__10778__$1;var container = cljs.core.get.call(null,map__10778__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__10779_10798 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__10779_10798.appendTo(container);
G__10779_10798.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__10778,map__10778__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__10778,map__10778__$1,ctx,container){
return (function (state_10789){var state_val_10790 = (state_10789[(1)]);if((state_val_10790 === (2)))
{var inst_10787 = (state_10789[(2)]);var state_10789__$1 = state_10789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10789__$1,inst_10787);
} else
{if((state_val_10790 === (1)))
{var inst_10780 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_10781 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_10782 = [inst_10781,view];var inst_10783 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10780,inst_10782);var inst_10784 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_10783];var inst_10785 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10784,null));var state_10789__$1 = state_10789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10789__$1,(2),tool.react.OnReact,inst_10785);
} else
{return null;
}
}
});})(c__6192__auto__,map__10778,map__10778__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__10778,map__10778__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10794 = [null,null,null,null,null,null,null];(statearr_10794[(0)] = state_machine__6178__auto__);
(statearr_10794[(1)] = (1));
return statearr_10794;
});
var state_machine__6178__auto____1 = (function (state_10789){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10789);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10795){if((e10795 instanceof Object))
{var ex__6181__auto__ = e10795;var statearr_10796_10799 = state_10789;(statearr_10796_10799[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10789);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10800 = state_10789;
state_10789 = G__10800;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10789){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__10778,map__10778__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_10797 = f__6193__auto__.call(null);(statearr_10797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__10778,map__10778__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__10801,key,view){var map__10802 = p__10801;var map__10802__$1 = ((cljs.core.seq_QMARK_.call(null,map__10802))?cljs.core.apply.call(null,cljs.core.hash_map,map__10802):map__10802);var ctx = map__10802__$1;var container = cljs.core.get.call(null,map__10802__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__10803 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__10803.remove();
return G__10803;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_10966 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_10967 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_10968 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_10968.off("click");
btn_search_10967.off("click");
mc_modelContainer_10966.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__10885,key,modelChan){var map__10886 = p__10885;var map__10886__$1 = ((cljs.core.seq_QMARK_.call(null,map__10886))?cljs.core.apply.call(null,cljs.core.hash_map,map__10886):map__10886);var ctx = map__10886__$1;var tmpl_item = cljs.core.get.call(null,map__10886__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (state_10907){var state_val_10908 = (state_10907[(1)]);if((state_val_10908 === (2)))
{var inst_10889 = (state_10907[(2)]);var inst_10890 = cljs.core.nth.call(null,inst_10889,(0),null);var inst_10891 = cljs.core.nth.call(null,inst_10889,(1),null);var inst_10892 = $("#tmpl_streetsnap_list");var inst_10893 = inst_10892.tmpl(inst_10891,tmpl_item);var inst_10894 = inst_10893.find("#mc_modelContainer");var inst_10895 = inst_10893.find("#btn_search");var inst_10896 = inst_10893.find("#btn_return");var inst_10897 = (function (){var btn_return = inst_10896;var btn_search = inst_10895;var mc_modelContainer = inst_10894;var elem = inst_10893;var tmpl = inst_10892;var model = inst_10891;var err = inst_10890;var vec__10887 = inst_10889;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (state_10914){var state_val_10915 = (state_10914[(1)]);if((state_val_10915 === (2)))
{var inst_10912 = (state_10914[(2)]);var state_10914__$1 = state_10914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10914__$1,inst_10912);
} else
{if((state_val_10915 === (1)))
{var inst_10909 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_10910 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10909,null));var state_10914__$1 = state_10914;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10914__$1,(2),tool.react.OnReact,inst_10910);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10919 = [null,null,null,null,null,null,null];(statearr_10919[(0)] = state_machine__6178__auto__);
(statearr_10919[(1)] = (1));
return statearr_10919;
});
var state_machine__6178__auto____1 = (function (state_10914){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10914);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10920){if((e10920 instanceof Object))
{var ex__6181__auto__ = e10920;var statearr_10921_10969 = state_10914;(statearr_10921_10969[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10914);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10970 = state_10914;
state_10914 = G__10970;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10914){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_10922 = f__6193__auto__.call(null);(statearr_10922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_10922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
})();var inst_10898 = inst_10896.click(inst_10897);var inst_10899 = (function (){var btn_return = inst_10896;var btn_search = inst_10895;var mc_modelContainer = inst_10894;var elem = inst_10893;var tmpl = inst_10892;var model = inst_10891;var err = inst_10890;var vec__10887 = inst_10889;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (state_10931){var state_val_10932 = (state_10931[(1)]);if((state_val_10932 === (2)))
{var inst_10929 = (state_10931[(2)]);var state_10931__$1 = state_10931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10931__$1,inst_10929);
} else
{if((state_val_10932 === (1)))
{var inst_10923 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_10924 = [searchKey];var inst_10925 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10923,inst_10924);var inst_10926 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_10925];var inst_10927 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10926,null));var state_10931__$1 = state_10931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10931__$1,(2),tool.react.OnReact,inst_10927);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10936 = [null,null,null,null,null,null,null];(statearr_10936[(0)] = state_machine__6178__auto__);
(statearr_10936[(1)] = (1));
return statearr_10936;
});
var state_machine__6178__auto____1 = (function (state_10931){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10931);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10937){if((e10937 instanceof Object))
{var ex__6181__auto__ = e10937;var statearr_10938_10971 = state_10931;(statearr_10938_10971[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10931);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10937;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10972 = state_10931;
state_10931 = G__10972;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10931){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_10939 = f__6193__auto__.call(null);(statearr_10939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_10939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
})();var inst_10900 = inst_10895.click(inst_10899);var inst_10901 = (function (){var btn_return = inst_10896;var btn_search = inst_10895;var mc_modelContainer = inst_10894;var elem = inst_10893;var tmpl = inst_10892;var model = inst_10891;var err = inst_10890;var vec__10887 = inst_10889;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,inst_10899,inst_10900,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,inst_10899,inst_10900,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,inst_10899,inst_10900,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function (state_10949){var state_val_10950 = (state_10949[(1)]);if((state_val_10950 === (2)))
{var inst_10947 = (state_10949[(2)]);var state_10949__$1 = state_10949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10949__$1,inst_10947);
} else
{if((state_val_10950 === (1)))
{var inst_10940 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_10941 = that.id;var inst_10942 = [inst_10941];var inst_10943 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10940,inst_10942);var inst_10944 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_10943];var inst_10945 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10944,null));var state_10949__$1 = state_10949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10949__$1,(2),tool.react.OnReact,inst_10945);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,inst_10899,inst_10900,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,inst_10899,inst_10900,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10954 = [null,null,null,null,null,null,null];(statearr_10954[(0)] = state_machine__6178__auto__);
(statearr_10954[(1)] = (1));
return statearr_10954;
});
var state_machine__6178__auto____1 = (function (state_10949){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10949);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10955){if((e10955 instanceof Object))
{var ex__6181__auto__ = e10955;var statearr_10956_10973 = state_10949;(statearr_10956_10973[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10949);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10955;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10974 = state_10949;
state_10949 = G__10974;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10949){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,inst_10899,inst_10900,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_10957 = f__6193__auto__.call(null);(statearr_10957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_10957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,inst_10899,inst_10900,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__10887,inst_10889,inst_10890,inst_10891,inst_10892,inst_10893,inst_10894,inst_10895,inst_10896,inst_10897,inst_10898,inst_10899,inst_10900,state_val_10908,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
})();var inst_10902 = inst_10894.delegate("div[modelFrame]","click",inst_10901);var inst_10903 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_10904 = [inst_10893,name];var inst_10905 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10903,inst_10904);var state_10907__$1 = (function (){var statearr_10958 = state_10907;(statearr_10958[(7)] = inst_10900);
(statearr_10958[(8)] = inst_10902);
(statearr_10958[(9)] = inst_10898);
return statearr_10958;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10907__$1,inst_10905);
} else
{if((state_val_10908 === (1)))
{var state_10907__$1 = state_10907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10907__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10962 = [null,null,null,null,null,null,null,null,null,null];(statearr_10962[(0)] = state_machine__6178__auto__);
(statearr_10962[(1)] = (1));
return statearr_10962;
});
var state_machine__6178__auto____1 = (function (state_10907){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10907);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10963){if((e10963 instanceof Object))
{var ex__6181__auto__ = e10963;var statearr_10964_10975 = state_10907;(statearr_10964_10975[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10907);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10963;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10976 = state_10907;
state_10907 = G__10976;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10907){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_10965 = f__6193__auto__.call(null);(statearr_10965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10965;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__10886,map__10886__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__11162){var map__11163 = p__11162;var map__11163__$1 = ((cljs.core.seq_QMARK_.call(null,map__11163))?cljs.core.apply.call(null,cljs.core.hash_map,map__11163):map__11163);var view = map__11163__$1;var elem = cljs.core.get.call(null,map__11163__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_11347 = elem.find("#mc_historyContainer");var mc_sideContainer_11348 = elem.find("#mc_sideContainer");var mc_bottomContainer_11349 = elem.find("#mc_bottomContainer");var img_stylePicture_11350 = elem.find("#img_stylePicture");var btn_share_11351 = elem.find("#btn_share");var btn_fullscreen_11352 = elem.find("#btn_fullscreen");var btn_more_11353 = elem.find("#btn_more");mc_modelContainer_11347.undelegate("img","click");
mc_sideContainer_11348.undelegate("img","click");
mc_bottomContainer_11349.undelegate("img","click");
img_stylePicture_11350.off("click");
btn_share_11351.off("click");
btn_fullscreen_11352.off("click");
btn_more_11353.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__11164){var map__11165 = p__11164;var map__11165__$1 = ((cljs.core.seq_QMARK_.call(null,map__11165))?cljs.core.apply.call(null,cljs.core.hash_map,map__11165):map__11165);var view = map__11165__$1;var elem = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_11354 = elem.find("#mc_3dmask");var c__6192__auto___11355 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11355,mc_3dmask_11354,map__11165,map__11165__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11355,mc_3dmask_11354,map__11165,map__11165__$1,view,elem){
return (function (state_11171){var state_val_11172 = (state_11171[(1)]);if((state_val_11172 === (2)))
{var inst_11168 = (state_11171[(2)]);var inst_11169 = mc_3dmask_11354.fadeOut((400));var state_11171__$1 = (function (){var statearr_11173 = state_11171;(statearr_11173[(7)] = inst_11168);
return statearr_11173;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11171__$1,inst_11169);
} else
{if((state_val_11172 === (1)))
{var inst_11166 = cljs.core.async.timeout.call(null,(3000));var state_11171__$1 = state_11171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11171__$1,(2),inst_11166);
} else
{return null;
}
}
});})(c__6192__auto___11355,mc_3dmask_11354,map__11165,map__11165__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___11355,mc_3dmask_11354,map__11165,map__11165__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11177 = [null,null,null,null,null,null,null,null];(statearr_11177[(0)] = state_machine__6178__auto__);
(statearr_11177[(1)] = (1));
return statearr_11177;
});
var state_machine__6178__auto____1 = (function (state_11171){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11171);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11178){if((e11178 instanceof Object))
{var ex__6181__auto__ = e11178;var statearr_11179_11356 = state_11171;(statearr_11179_11356[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11171);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11357 = state_11171;
state_11171 = G__11357;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11171){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11355,mc_3dmask_11354,map__11165,map__11165__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_11180 = f__6193__auto__.call(null);(statearr_11180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11355);
return statearr_11180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11355,mc_3dmask_11354,map__11165,map__11165__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__11181,key,modelChan){var map__11182 = p__11181;var map__11182__$1 = ((cljs.core.seq_QMARK_.call(null,map__11182))?cljs.core.apply.call(null,cljs.core.hash_map,map__11182):map__11182);var ctx = map__11182__$1;var tmpl_item = cljs.core.get.call(null,map__11182__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (state_11215){var state_val_11216 = (state_11215[(1)]);if((state_val_11216 === (2)))
{var inst_11185 = (state_11215[(2)]);var inst_11186 = cljs.core.nth.call(null,inst_11185,(0),null);var inst_11187 = cljs.core.nth.call(null,inst_11185,(1),null);var inst_11188 = $("#tmpl_streetsnap");var inst_11189 = inst_11188.tmpl(inst_11187,tmpl_item);var inst_11190 = inst_11189.find("#mc_historyContainer");var inst_11191 = inst_11189.find("#mc_sideContainer");var inst_11192 = inst_11189.find("#mc_bottomContainer");var inst_11193 = inst_11189.find("#img_stylePicture");var inst_11194 = inst_11189.find("#btn_share");var inst_11195 = inst_11189.find("#btn_fullscreen");var inst_11196 = inst_11189.find("#btn_more");var inst_11197 = (function (){var vec__11183 = inst_11185;var model = inst_11187;var btn_more = inst_11196;var mc_sideContainer = inst_11191;var mc_historyContainer = inst_11190;var err = inst_11186;var tmpl = inst_11188;var img_stylePicture = inst_11193;var elem = inst_11189;var btn_share = inst_11194;var mc_bottomContainer = inst_11192;var btn_fullscreen = inst_11195;return ((function (vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (state_11222){var state_val_11223 = (state_11222[(1)]);if((state_val_11223 === (2)))
{var inst_11220 = (state_11222[(2)]);var state_11222__$1 = state_11222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11222__$1,inst_11220);
} else
{if((state_val_11223 === (1)))
{var inst_11217 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_11218 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11217,null));var state_11222__$1 = state_11222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11222__$1,(2),tool.react.OnReact,inst_11218);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11227 = [null,null,null,null,null,null,null];(statearr_11227[(0)] = state_machine__6178__auto__);
(statearr_11227[(1)] = (1));
return statearr_11227;
});
var state_machine__6178__auto____1 = (function (state_11222){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11228){if((e11228 instanceof Object))
{var ex__6181__auto__ = e11228;var statearr_11229_11358 = state_11222;(statearr_11229_11358[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11359 = state_11222;
state_11222 = G__11359;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11222){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11230 = f__6193__auto__.call(null);(statearr_11230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_11230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var inst_11198 = inst_11196.on("click",inst_11197);var inst_11199 = (function (){var vec__11183 = inst_11185;var model = inst_11187;var btn_more = inst_11196;var mc_sideContainer = inst_11191;var mc_historyContainer = inst_11190;var err = inst_11186;var tmpl = inst_11188;var img_stylePicture = inst_11193;var elem = inst_11189;var btn_share = inst_11194;var mc_bottomContainer = inst_11192;var btn_fullscreen = inst_11195;return ((function (vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (state_11239){var state_val_11240 = (state_11239[(1)]);if((state_val_11240 === (2)))
{var inst_11237 = (state_11239[(2)]);var state_11239__$1 = state_11239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11239__$1,inst_11237);
} else
{if((state_val_11240 === (1)))
{var inst_11231 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_11232 = [model];var inst_11233 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11231,inst_11232);var inst_11234 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_11233];var inst_11235 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11234,null));var state_11239__$1 = state_11239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11239__$1,(2),tool.react.OnReact,inst_11235);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11244 = [null,null,null,null,null,null,null];(statearr_11244[(0)] = state_machine__6178__auto__);
(statearr_11244[(1)] = (1));
return statearr_11244;
});
var state_machine__6178__auto____1 = (function (state_11239){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11239);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11245){if((e11245 instanceof Object))
{var ex__6181__auto__ = e11245;var statearr_11246_11360 = state_11239;(statearr_11246_11360[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11245;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11361 = state_11239;
state_11239 = G__11361;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11239){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11247 = f__6193__auto__.call(null);(statearr_11247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_11247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var inst_11200 = inst_11195.on("click",inst_11199);var inst_11201 = (function (){var vec__11183 = inst_11185;var model = inst_11187;var btn_more = inst_11196;var mc_sideContainer = inst_11191;var mc_historyContainer = inst_11190;var err = inst_11186;var tmpl = inst_11188;var img_stylePicture = inst_11193;var elem = inst_11189;var btn_share = inst_11194;var mc_bottomContainer = inst_11192;var btn_fullscreen = inst_11195;return ((function (vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (state_11257){var state_val_11258 = (state_11257[(1)]);if((state_val_11258 === (2)))
{var inst_11255 = (state_11257[(2)]);var state_11257__$1 = state_11257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11257__$1,inst_11255);
} else
{if((state_val_11258 === (1)))
{var inst_11248 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_11249 = model.styleUrl;var inst_11250 = [inst_11249];var inst_11251 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11248,inst_11250);var inst_11252 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_11251];var inst_11253 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11252,null));var state_11257__$1 = state_11257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11257__$1,(2),tool.react.OnReact,inst_11253);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11262 = [null,null,null,null,null,null,null];(statearr_11262[(0)] = state_machine__6178__auto__);
(statearr_11262[(1)] = (1));
return statearr_11262;
});
var state_machine__6178__auto____1 = (function (state_11257){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11257);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11263){if((e11263 instanceof Object))
{var ex__6181__auto__ = e11263;var statearr_11264_11362 = state_11257;(statearr_11264_11362[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11257);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11363 = state_11257;
state_11257 = G__11363;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11257){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11265 = f__6193__auto__.call(null);(statearr_11265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_11265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var inst_11202 = inst_11193.on("click",inst_11201);var inst_11203 = (function (){var vec__11183 = inst_11185;var model = inst_11187;var btn_more = inst_11196;var mc_sideContainer = inst_11191;var mc_historyContainer = inst_11190;var err = inst_11186;var tmpl = inst_11188;var img_stylePicture = inst_11193;var elem = inst_11189;var btn_share = inst_11194;var mc_bottomContainer = inst_11192;var btn_fullscreen = inst_11195;return ((function (vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (state_11274){var state_val_11275 = (state_11274[(1)]);if((state_val_11275 === (2)))
{var inst_11272 = (state_11274[(2)]);var state_11274__$1 = state_11274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11274__$1,inst_11272);
} else
{if((state_val_11275 === (1)))
{var inst_11266 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_11267 = [model];var inst_11268 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11266,inst_11267);var inst_11269 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_11268];var inst_11270 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11269,null));var state_11274__$1 = state_11274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11274__$1,(2),tool.react.OnReact,inst_11270);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11279 = [null,null,null,null,null,null,null];(statearr_11279[(0)] = state_machine__6178__auto__);
(statearr_11279[(1)] = (1));
return statearr_11279;
});
var state_machine__6178__auto____1 = (function (state_11274){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11274);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11280){if((e11280 instanceof Object))
{var ex__6181__auto__ = e11280;var statearr_11281_11364 = state_11274;(statearr_11281_11364[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11365 = state_11274;
state_11274 = G__11365;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11274){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11282 = f__6193__auto__.call(null);(statearr_11282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_11282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var inst_11204 = inst_11194.on("click",inst_11203);var inst_11205 = (function (){var vec__11183 = inst_11185;var model = inst_11187;var btn_more = inst_11196;var mc_sideContainer = inst_11191;var mc_historyContainer = inst_11190;var err = inst_11186;var tmpl = inst_11188;var img_stylePicture = inst_11193;var elem = inst_11189;var btn_share = inst_11194;var mc_bottomContainer = inst_11192;var btn_fullscreen = inst_11195;return ((function (vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (state_11293){var state_val_11294 = (state_11293[(1)]);if((state_val_11294 === (2)))
{var inst_11291 = (state_11293[(2)]);var state_11293__$1 = state_11293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11293__$1,inst_11291);
} else
{if((state_val_11294 === (1)))
{var inst_11283 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_11284 = that.id;var inst_11285 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11284));var inst_11286 = [inst_11285];var inst_11287 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11283,inst_11286);var inst_11288 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_11287];var inst_11289 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11288,null));var state_11293__$1 = state_11293;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11293__$1,(2),tool.react.OnReact,inst_11289);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11298 = [null,null,null,null,null,null,null];(statearr_11298[(0)] = state_machine__6178__auto__);
(statearr_11298[(1)] = (1));
return statearr_11298;
});
var state_machine__6178__auto____1 = (function (state_11293){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11293);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11299){if((e11299 instanceof Object))
{var ex__6181__auto__ = e11299;var statearr_11300_11366 = state_11293;(statearr_11300_11366[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11367 = state_11293;
state_11293 = G__11367;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11293){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11301 = f__6193__auto__.call(null);(statearr_11301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_11301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var inst_11206 = inst_11191.delegate("img","click",inst_11205);var inst_11207 = (function (){var vec__11183 = inst_11185;var model = inst_11187;var btn_more = inst_11196;var mc_sideContainer = inst_11191;var mc_historyContainer = inst_11190;var err = inst_11186;var tmpl = inst_11188;var img_stylePicture = inst_11193;var elem = inst_11189;var btn_share = inst_11194;var mc_bottomContainer = inst_11192;var btn_fullscreen = inst_11195;return ((function (vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (state_11312){var state_val_11313 = (state_11312[(1)]);if((state_val_11313 === (2)))
{var inst_11310 = (state_11312[(2)]);var state_11312__$1 = state_11312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11312__$1,inst_11310);
} else
{if((state_val_11313 === (1)))
{var inst_11302 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_11303 = that.id;var inst_11304 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11303));var inst_11305 = [inst_11304];var inst_11306 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11302,inst_11305);var inst_11307 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_11306];var inst_11308 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11307,null));var state_11312__$1 = state_11312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11312__$1,(2),tool.react.OnReact,inst_11308);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11317 = [null,null,null,null,null,null,null];(statearr_11317[(0)] = state_machine__6178__auto__);
(statearr_11317[(1)] = (1));
return statearr_11317;
});
var state_machine__6178__auto____1 = (function (state_11312){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11312);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11318){if((e11318 instanceof Object))
{var ex__6181__auto__ = e11318;var statearr_11319_11368 = state_11312;(statearr_11319_11368[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11369 = state_11312;
state_11312 = G__11369;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11312){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11320 = f__6193__auto__.call(null);(statearr_11320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_11320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var inst_11208 = inst_11192.delegate("img","click",inst_11207);var inst_11209 = (function (){var vec__11183 = inst_11185;var model = inst_11187;var btn_more = inst_11196;var mc_sideContainer = inst_11191;var mc_historyContainer = inst_11190;var err = inst_11186;var tmpl = inst_11188;var img_stylePicture = inst_11193;var elem = inst_11189;var btn_share = inst_11194;var mc_bottomContainer = inst_11192;var btn_fullscreen = inst_11195;return ((function (vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,inst_11207,inst_11208,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,inst_11207,inst_11208,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,inst_11207,inst_11208,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function (state_11330){var state_val_11331 = (state_11330[(1)]);if((state_val_11331 === (2)))
{var inst_11328 = (state_11330[(2)]);var state_11330__$1 = state_11330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11330__$1,inst_11328);
} else
{if((state_val_11331 === (1)))
{var inst_11321 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_11322 = that.id;var inst_11323 = [inst_11322];var inst_11324 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11321,inst_11323);var inst_11325 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_11324];var inst_11326 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11325,null));var state_11330__$1 = state_11330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11330__$1,(2),tool.react.OnReact,inst_11326);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,inst_11207,inst_11208,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,inst_11207,inst_11208,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11335 = [null,null,null,null,null,null,null];(statearr_11335[(0)] = state_machine__6178__auto__);
(statearr_11335[(1)] = (1));
return statearr_11335;
});
var state_machine__6178__auto____1 = (function (state_11330){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11330);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11336){if((e11336 instanceof Object))
{var ex__6181__auto__ = e11336;var statearr_11337_11370 = state_11330;(statearr_11337_11370[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11371 = state_11330;
state_11330 = G__11371;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11330){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,inst_11207,inst_11208,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11338 = f__6193__auto__.call(null);(statearr_11338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_11338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,inst_11207,inst_11208,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__11183,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,inst_11191,inst_11192,inst_11193,inst_11194,inst_11195,inst_11196,inst_11197,inst_11198,inst_11199,inst_11200,inst_11201,inst_11202,inst_11203,inst_11204,inst_11205,inst_11206,inst_11207,inst_11208,state_val_11216,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var inst_11210 = inst_11190.delegate("img","click",inst_11209);var inst_11211 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_11212 = [inst_11189,name];var inst_11213 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11211,inst_11212);var state_11215__$1 = (function (){var statearr_11339 = state_11215;(statearr_11339[(7)] = inst_11208);
(statearr_11339[(8)] = inst_11198);
(statearr_11339[(9)] = inst_11206);
(statearr_11339[(10)] = inst_11200);
(statearr_11339[(11)] = inst_11204);
(statearr_11339[(12)] = inst_11210);
(statearr_11339[(13)] = inst_11202);
return statearr_11339;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11215__$1,inst_11213);
} else
{if((state_val_11216 === (1)))
{var state_11215__$1 = state_11215;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11215__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11343[(0)] = state_machine__6178__auto__);
(statearr_11343[(1)] = (1));
return statearr_11343;
});
var state_machine__6178__auto____1 = (function (state_11215){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11215);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11344){if((e11344 instanceof Object))
{var ex__6181__auto__ = e11344;var statearr_11345_11372 = state_11215;(statearr_11345_11372[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11215);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11373 = state_11215;
state_11215 = G__11373;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11215){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11346 = f__6193__auto__.call(null);(statearr_11346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__11182,map__11182__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__11374){var map__11375 = p__11374;var map__11375__$1 = ((cljs.core.seq_QMARK_.call(null,map__11375))?cljs.core.apply.call(null,cljs.core.hash_map,map__11375):map__11375);var view = map__11375__$1;var elem = cljs.core.get.call(null,map__11375__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_11391 = elem.find("#mc_3dmask");var c__6192__auto___11392 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11392,mc_3dmask_11391,map__11375,map__11375__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11392,mc_3dmask_11391,map__11375,map__11375__$1,view,elem){
return (function (state_11381){var state_val_11382 = (state_11381[(1)]);if((state_val_11382 === (2)))
{var inst_11378 = (state_11381[(2)]);var inst_11379 = mc_3dmask_11391.fadeOut((400));var state_11381__$1 = (function (){var statearr_11383 = state_11381;(statearr_11383[(7)] = inst_11378);
return statearr_11383;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11381__$1,inst_11379);
} else
{if((state_val_11382 === (1)))
{var inst_11376 = cljs.core.async.timeout.call(null,(3000));var state_11381__$1 = state_11381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11381__$1,(2),inst_11376);
} else
{return null;
}
}
});})(c__6192__auto___11392,mc_3dmask_11391,map__11375,map__11375__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___11392,mc_3dmask_11391,map__11375,map__11375__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11387 = [null,null,null,null,null,null,null,null];(statearr_11387[(0)] = state_machine__6178__auto__);
(statearr_11387[(1)] = (1));
return statearr_11387;
});
var state_machine__6178__auto____1 = (function (state_11381){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11381);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11388){if((e11388 instanceof Object))
{var ex__6181__auto__ = e11388;var statearr_11389_11393 = state_11381;(statearr_11389_11393[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11381);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11388;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11394 = state_11381;
state_11381 = G__11394;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11381){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11392,mc_3dmask_11391,map__11375,map__11375__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_11390 = f__6193__auto__.call(null);(statearr_11390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11392);
return statearr_11390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11392,mc_3dmask_11391,map__11375,map__11375__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__11395,key,modelChan){var map__11396 = p__11395;var map__11396__$1 = ((cljs.core.seq_QMARK_.call(null,map__11396))?cljs.core.apply.call(null,cljs.core.hash_map,map__11396):map__11396);var ctx = map__11396__$1;var tmpl_item = cljs.core.get.call(null,map__11396__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__11396,map__11396__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__11396,map__11396__$1,ctx,tmpl_item){
return (function (state_11408){var state_val_11409 = (state_11408[(1)]);if((state_val_11409 === (2)))
{var inst_11399 = (state_11408[(2)]);var inst_11400 = cljs.core.nth.call(null,inst_11399,(0),null);var inst_11401 = cljs.core.nth.call(null,inst_11399,(1),null);var inst_11402 = $("#tmpl_home");var inst_11403 = inst_11402.tmpl(inst_11401,tmpl_item);var inst_11404 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_11405 = [inst_11403,key];var inst_11406 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11404,inst_11405);var state_11408__$1 = (function (){var statearr_11410 = state_11408;(statearr_11410[(7)] = inst_11400);
return statearr_11410;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11408__$1,inst_11406);
} else
{if((state_val_11409 === (1)))
{var state_11408__$1 = state_11408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11408__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__11396,map__11396__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__11396,map__11396__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11414 = [null,null,null,null,null,null,null,null];(statearr_11414[(0)] = state_machine__6178__auto__);
(statearr_11414[(1)] = (1));
return statearr_11414;
});
var state_machine__6178__auto____1 = (function (state_11408){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11408);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11415){if((e11415 instanceof Object))
{var ex__6181__auto__ = e11415;var statearr_11416_11418 = state_11408;(statearr_11416_11418[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11408);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11419 = state_11408;
state_11408 = G__11419;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11408){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__11396,map__11396__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11417 = f__6193__auto__.call(null);(statearr_11417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__11396,map__11396__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__11420,key,view){var map__11421 = p__11420;var map__11421__$1 = ((cljs.core.seq_QMARK_.call(null,map__11421))?cljs.core.apply.call(null,cljs.core.hash_map,map__11421):map__11421);var ctx = map__11421__$1;var popupContainer = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__11422 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__11422.appendTo(popupContainer);
G__11422.fadeIn((400));
return G__11422;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__11423,key,p__11424){var map__11425 = p__11423;var map__11425__$1 = ((cljs.core.seq_QMARK_.call(null,map__11425))?cljs.core.apply.call(null,cljs.core.hash_map,map__11425):map__11425);var ctx = map__11425__$1;var container = cljs.core.get.call(null,map__11425__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__11426 = p__11424;var map__11426__$1 = ((cljs.core.seq_QMARK_.call(null,map__11426))?cljs.core.apply.call(null,cljs.core.hash_map,map__11426):map__11426);var view = map__11426__$1;var elem = cljs.core.get.call(null,map__11426__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__11425,map__11425__$1,ctx,container,map__11426,map__11426__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__11425,map__11425__$1,ctx,container,map__11426,map__11426__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__11427,key,modelChan){var map__11428 = p__11427;var map__11428__$1 = ((cljs.core.seq_QMARK_.call(null,map__11428))?cljs.core.apply.call(null,cljs.core.hash_map,map__11428):map__11428);var ctx = map__11428__$1;var tmpl_item = cljs.core.get.call(null,map__11428__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item){
return (function (state_11443){var state_val_11444 = (state_11443[(1)]);if((state_val_11444 === (2)))
{var inst_11431 = (state_11443[(2)]);var inst_11432 = cljs.core.nth.call(null,inst_11431,(0),null);var inst_11433 = cljs.core.nth.call(null,inst_11431,(1),null);var inst_11434 = $("#tmpl_bigPhoto");var inst_11435 = inst_11434.tmpl(inst_11433,tmpl_item);var inst_11436 = inst_11435.find("#mc_bigPhotoFixPosition");var inst_11437 = (function (){var back = inst_11436;var elem = inst_11435;var tmpl = inst_11434;var model = inst_11433;var err = inst_11432;var vec__11429 = inst_11431;return ((function (back,elem,tmpl,model,err,vec__11429,inst_11431,inst_11432,inst_11433,inst_11434,inst_11435,inst_11436,state_val_11444,c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__11429,inst_11431,inst_11432,inst_11433,inst_11434,inst_11435,inst_11436,state_val_11444,c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__11429,inst_11431,inst_11432,inst_11433,inst_11434,inst_11435,inst_11436,state_val_11444,c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item){
return (function (state_11450){var state_val_11451 = (state_11450[(1)]);if((state_val_11451 === (2)))
{var inst_11448 = (state_11450[(2)]);var state_11450__$1 = state_11450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11450__$1,inst_11448);
} else
{if((state_val_11451 === (1)))
{var inst_11445 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_11446 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11445,null));var state_11450__$1 = state_11450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11450__$1,(2),tool.react.OnReact,inst_11446);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__11429,inst_11431,inst_11432,inst_11433,inst_11434,inst_11435,inst_11436,state_val_11444,c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__11429,inst_11431,inst_11432,inst_11433,inst_11434,inst_11435,inst_11436,state_val_11444,c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11455 = [null,null,null,null,null,null,null];(statearr_11455[(0)] = state_machine__6178__auto__);
(statearr_11455[(1)] = (1));
return statearr_11455;
});
var state_machine__6178__auto____1 = (function (state_11450){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11450);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11456){if((e11456 instanceof Object))
{var ex__6181__auto__ = e11456;var statearr_11457_11467 = state_11450;(statearr_11457_11467[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11450);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11468 = state_11450;
state_11450 = G__11468;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11450){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__11429,inst_11431,inst_11432,inst_11433,inst_11434,inst_11435,inst_11436,state_val_11444,c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11458 = f__6193__auto__.call(null);(statearr_11458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_11458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__11429,inst_11431,inst_11432,inst_11433,inst_11434,inst_11435,inst_11436,state_val_11444,c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__11429,inst_11431,inst_11432,inst_11433,inst_11434,inst_11435,inst_11436,state_val_11444,c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item))
})();var inst_11438 = inst_11436.on("click",inst_11437);var inst_11439 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_11440 = [inst_11435,key];var inst_11441 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11439,inst_11440);var state_11443__$1 = (function (){var statearr_11459 = state_11443;(statearr_11459[(7)] = inst_11438);
return statearr_11459;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11443__$1,inst_11441);
} else
{if((state_val_11444 === (1)))
{var state_11443__$1 = state_11443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11443__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11463 = [null,null,null,null,null,null,null,null];(statearr_11463[(0)] = state_machine__6178__auto__);
(statearr_11463[(1)] = (1));
return statearr_11463;
});
var state_machine__6178__auto____1 = (function (state_11443){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11443);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11464){if((e11464 instanceof Object))
{var ex__6181__auto__ = e11464;var statearr_11465_11469 = state_11443;(statearr_11465_11469[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11443);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11470 = state_11443;
state_11443 = G__11470;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11443){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11466 = f__6193__auto__.call(null);(statearr_11466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__11428,map__11428__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__11471,key,modelChan){var map__11472 = p__11471;var map__11472__$1 = ((cljs.core.seq_QMARK_.call(null,map__11472))?cljs.core.apply.call(null,cljs.core.hash_map,map__11472):map__11472);var ctx = map__11472__$1;var tmpl_item = cljs.core.get.call(null,map__11472__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__11472,map__11472__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__11472,map__11472__$1,ctx,tmpl_item){
return (function (state_11484){var state_val_11485 = (state_11484[(1)]);if((state_val_11485 === (2)))
{var inst_11475 = (state_11484[(2)]);var inst_11476 = cljs.core.nth.call(null,inst_11475,(0),null);var inst_11477 = cljs.core.nth.call(null,inst_11475,(1),null);var inst_11478 = $("#tmpl_news");var inst_11479 = inst_11478.tmpl(inst_11477,tmpl_item);var inst_11480 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_11481 = [inst_11479,key];var inst_11482 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11480,inst_11481);var state_11484__$1 = (function (){var statearr_11486 = state_11484;(statearr_11486[(7)] = inst_11476);
return statearr_11486;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11484__$1,inst_11482);
} else
{if((state_val_11485 === (1)))
{var state_11484__$1 = state_11484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11484__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__11472,map__11472__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__11472,map__11472__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11490 = [null,null,null,null,null,null,null,null];(statearr_11490[(0)] = state_machine__6178__auto__);
(statearr_11490[(1)] = (1));
return statearr_11490;
});
var state_machine__6178__auto____1 = (function (state_11484){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11484);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11491){if((e11491 instanceof Object))
{var ex__6181__auto__ = e11491;var statearr_11492_11494 = state_11484;(statearr_11492_11494[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11484);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11495 = state_11484;
state_11484 = G__11495;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11484){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__11472,map__11472__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_11493 = f__6193__auto__.call(null);(statearr_11493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__11472,map__11472__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
