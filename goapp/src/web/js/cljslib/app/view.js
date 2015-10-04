// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__14023,key,view){var map__14024 = p__14023;var map__14024__$1 = ((cljs.core.seq_QMARK_.call(null,map__14024))?cljs.core.apply.call(null,cljs.core.hash_map,map__14024):map__14024);var ctx = map__14024__$1;var container = cljs.core.get.call(null,map__14024__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__14025_14044 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__14025_14044.appendTo(container);
G__14025_14044.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__14024,map__14024__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__14024,map__14024__$1,ctx,container){
return (function (state_14035){var state_val_14036 = (state_14035[(1)]);if((state_val_14036 === (2)))
{var inst_14033 = (state_14035[(2)]);var state_14035__$1 = state_14035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14035__$1,inst_14033);
} else
{if((state_val_14036 === (1)))
{var inst_14026 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_14027 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_14028 = [inst_14027,view];var inst_14029 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14026,inst_14028);var inst_14030 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_14029];var inst_14031 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14030,null));var state_14035__$1 = state_14035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14035__$1,(2),tool.react.OnReact,inst_14031);
} else
{return null;
}
}
});})(c__6192__auto__,map__14024,map__14024__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__14024,map__14024__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14040 = [null,null,null,null,null,null,null];(statearr_14040[(0)] = state_machine__6178__auto__);
(statearr_14040[(1)] = (1));
return statearr_14040;
});
var state_machine__6178__auto____1 = (function (state_14035){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14035);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14041){if((e14041 instanceof Object))
{var ex__6181__auto__ = e14041;var statearr_14042_14045 = state_14035;(statearr_14042_14045[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14035);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14046 = state_14035;
state_14035 = G__14046;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14035){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__14024,map__14024__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_14043 = f__6193__auto__.call(null);(statearr_14043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__14024,map__14024__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__14047,key,view){var map__14048 = p__14047;var map__14048__$1 = ((cljs.core.seq_QMARK_.call(null,map__14048))?cljs.core.apply.call(null,cljs.core.hash_map,map__14048):map__14048);var ctx = map__14048__$1;var container = cljs.core.get.call(null,map__14048__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__14049 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__14049.remove();
return G__14049;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_14212 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_14213 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_14214 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_14214.off("click");
btn_search_14213.off("click");
mc_modelContainer_14212.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__14131,key,modelChan){var map__14132 = p__14131;var map__14132__$1 = ((cljs.core.seq_QMARK_.call(null,map__14132))?cljs.core.apply.call(null,cljs.core.hash_map,map__14132):map__14132);var ctx = map__14132__$1;var tmpl_item = cljs.core.get.call(null,map__14132__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (state_14153){var state_val_14154 = (state_14153[(1)]);if((state_val_14154 === (2)))
{var inst_14135 = (state_14153[(2)]);var inst_14136 = cljs.core.nth.call(null,inst_14135,(0),null);var inst_14137 = cljs.core.nth.call(null,inst_14135,(1),null);var inst_14138 = $("#tmpl_streetsnap_list");var inst_14139 = inst_14138.tmpl(inst_14137,tmpl_item);var inst_14140 = inst_14139.find("#mc_modelContainer");var inst_14141 = inst_14139.find("#btn_search");var inst_14142 = inst_14139.find("#btn_return");var inst_14143 = (function (){var btn_return = inst_14142;var btn_search = inst_14141;var mc_modelContainer = inst_14140;var elem = inst_14139;var tmpl = inst_14138;var model = inst_14137;var err = inst_14136;var vec__14133 = inst_14135;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (state_14160){var state_val_14161 = (state_14160[(1)]);if((state_val_14161 === (2)))
{var inst_14158 = (state_14160[(2)]);var state_14160__$1 = state_14160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14160__$1,inst_14158);
} else
{if((state_val_14161 === (1)))
{var inst_14155 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_14156 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14155,null));var state_14160__$1 = state_14160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14160__$1,(2),tool.react.OnReact,inst_14156);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14165 = [null,null,null,null,null,null,null];(statearr_14165[(0)] = state_machine__6178__auto__);
(statearr_14165[(1)] = (1));
return statearr_14165;
});
var state_machine__6178__auto____1 = (function (state_14160){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14160);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14166){if((e14166 instanceof Object))
{var ex__6181__auto__ = e14166;var statearr_14167_14215 = state_14160;(statearr_14167_14215[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14216 = state_14160;
state_14160 = G__14216;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14160){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14168 = f__6193__auto__.call(null);(statearr_14168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
})();var inst_14144 = inst_14142.click(inst_14143);var inst_14145 = (function (){var btn_return = inst_14142;var btn_search = inst_14141;var mc_modelContainer = inst_14140;var elem = inst_14139;var tmpl = inst_14138;var model = inst_14137;var err = inst_14136;var vec__14133 = inst_14135;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (state_14177){var state_val_14178 = (state_14177[(1)]);if((state_val_14178 === (2)))
{var inst_14175 = (state_14177[(2)]);var state_14177__$1 = state_14177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14177__$1,inst_14175);
} else
{if((state_val_14178 === (1)))
{var inst_14169 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_14170 = [searchKey];var inst_14171 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14169,inst_14170);var inst_14172 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_14171];var inst_14173 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14172,null));var state_14177__$1 = state_14177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14177__$1,(2),tool.react.OnReact,inst_14173);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14182 = [null,null,null,null,null,null,null];(statearr_14182[(0)] = state_machine__6178__auto__);
(statearr_14182[(1)] = (1));
return statearr_14182;
});
var state_machine__6178__auto____1 = (function (state_14177){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14177);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14183){if((e14183 instanceof Object))
{var ex__6181__auto__ = e14183;var statearr_14184_14217 = state_14177;(statearr_14184_14217[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14218 = state_14177;
state_14177 = G__14218;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14177){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14185 = f__6193__auto__.call(null);(statearr_14185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
})();var inst_14146 = inst_14141.click(inst_14145);var inst_14147 = (function (){var btn_return = inst_14142;var btn_search = inst_14141;var mc_modelContainer = inst_14140;var elem = inst_14139;var tmpl = inst_14138;var model = inst_14137;var err = inst_14136;var vec__14133 = inst_14135;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,inst_14145,inst_14146,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,inst_14145,inst_14146,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,inst_14145,inst_14146,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function (state_14195){var state_val_14196 = (state_14195[(1)]);if((state_val_14196 === (2)))
{var inst_14193 = (state_14195[(2)]);var state_14195__$1 = state_14195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14195__$1,inst_14193);
} else
{if((state_val_14196 === (1)))
{var inst_14186 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14187 = that.id;var inst_14188 = [inst_14187];var inst_14189 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14186,inst_14188);var inst_14190 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_14189];var inst_14191 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14190,null));var state_14195__$1 = state_14195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14195__$1,(2),tool.react.OnReact,inst_14191);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,inst_14145,inst_14146,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,inst_14145,inst_14146,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14200 = [null,null,null,null,null,null,null];(statearr_14200[(0)] = state_machine__6178__auto__);
(statearr_14200[(1)] = (1));
return statearr_14200;
});
var state_machine__6178__auto____1 = (function (state_14195){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14195);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14201){if((e14201 instanceof Object))
{var ex__6181__auto__ = e14201;var statearr_14202_14219 = state_14195;(statearr_14202_14219[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14220 = state_14195;
state_14195 = G__14220;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14195){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,inst_14145,inst_14146,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14203 = f__6193__auto__.call(null);(statearr_14203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,inst_14145,inst_14146,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__14133,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,inst_14140,inst_14141,inst_14142,inst_14143,inst_14144,inst_14145,inst_14146,state_val_14154,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
})();var inst_14148 = inst_14140.delegate("div[modelFrame]","click",inst_14147);var inst_14149 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_14150 = [inst_14139,name];var inst_14151 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14149,inst_14150);var state_14153__$1 = (function (){var statearr_14204 = state_14153;(statearr_14204[(7)] = inst_14144);
(statearr_14204[(8)] = inst_14146);
(statearr_14204[(9)] = inst_14148);
return statearr_14204;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14153__$1,inst_14151);
} else
{if((state_val_14154 === (1)))
{var state_14153__$1 = state_14153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14153__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14208 = [null,null,null,null,null,null,null,null,null,null];(statearr_14208[(0)] = state_machine__6178__auto__);
(statearr_14208[(1)] = (1));
return statearr_14208;
});
var state_machine__6178__auto____1 = (function (state_14153){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14153);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14209){if((e14209 instanceof Object))
{var ex__6181__auto__ = e14209;var statearr_14210_14221 = state_14153;(statearr_14210_14221[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14153);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14222 = state_14153;
state_14153 = G__14222;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14153){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14211 = f__6193__auto__.call(null);(statearr_14211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__14132,map__14132__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__14408){var map__14409 = p__14408;var map__14409__$1 = ((cljs.core.seq_QMARK_.call(null,map__14409))?cljs.core.apply.call(null,cljs.core.hash_map,map__14409):map__14409);var view = map__14409__$1;var elem = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_14593 = elem.find("#mc_historyContainer");var mc_sideContainer_14594 = elem.find("#mc_sideContainer");var mc_bottomContainer_14595 = elem.find("#mc_bottomContainer");var img_stylePicture_14596 = elem.find("#img_stylePicture");var btn_share_14597 = elem.find("#btn_share");var btn_fullscreen_14598 = elem.find("#btn_fullscreen");var btn_more_14599 = elem.find("#btn_more");mc_modelContainer_14593.undelegate("img","click");
mc_sideContainer_14594.undelegate("img","click");
mc_bottomContainer_14595.undelegate("img","click");
img_stylePicture_14596.off("click");
btn_share_14597.off("click");
btn_fullscreen_14598.off("click");
btn_more_14599.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__14410){var map__14411 = p__14410;var map__14411__$1 = ((cljs.core.seq_QMARK_.call(null,map__14411))?cljs.core.apply.call(null,cljs.core.hash_map,map__14411):map__14411);var view = map__14411__$1;var elem = cljs.core.get.call(null,map__14411__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_14600 = elem.find("#mc_3dmask");var c__6192__auto___14601 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___14601,mc_3dmask_14600,map__14411,map__14411__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___14601,mc_3dmask_14600,map__14411,map__14411__$1,view,elem){
return (function (state_14417){var state_val_14418 = (state_14417[(1)]);if((state_val_14418 === (2)))
{var inst_14414 = (state_14417[(2)]);var inst_14415 = mc_3dmask_14600.fadeOut((400));var state_14417__$1 = (function (){var statearr_14419 = state_14417;(statearr_14419[(7)] = inst_14414);
return statearr_14419;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14417__$1,inst_14415);
} else
{if((state_val_14418 === (1)))
{var inst_14412 = cljs.core.async.timeout.call(null,(3000));var state_14417__$1 = state_14417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14417__$1,(2),inst_14412);
} else
{return null;
}
}
});})(c__6192__auto___14601,mc_3dmask_14600,map__14411,map__14411__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___14601,mc_3dmask_14600,map__14411,map__14411__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14423 = [null,null,null,null,null,null,null,null];(statearr_14423[(0)] = state_machine__6178__auto__);
(statearr_14423[(1)] = (1));
return statearr_14423;
});
var state_machine__6178__auto____1 = (function (state_14417){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14417);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14424){if((e14424 instanceof Object))
{var ex__6181__auto__ = e14424;var statearr_14425_14602 = state_14417;(statearr_14425_14602[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14417);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14603 = state_14417;
state_14417 = G__14603;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14417){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___14601,mc_3dmask_14600,map__14411,map__14411__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_14426 = f__6193__auto__.call(null);(statearr_14426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14601);
return statearr_14426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___14601,mc_3dmask_14600,map__14411,map__14411__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__14427,key,modelChan){var map__14428 = p__14427;var map__14428__$1 = ((cljs.core.seq_QMARK_.call(null,map__14428))?cljs.core.apply.call(null,cljs.core.hash_map,map__14428):map__14428);var ctx = map__14428__$1;var tmpl_item = cljs.core.get.call(null,map__14428__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (state_14461){var state_val_14462 = (state_14461[(1)]);if((state_val_14462 === (2)))
{var inst_14431 = (state_14461[(2)]);var inst_14432 = cljs.core.nth.call(null,inst_14431,(0),null);var inst_14433 = cljs.core.nth.call(null,inst_14431,(1),null);var inst_14434 = $("#tmpl_streetsnap");var inst_14435 = inst_14434.tmpl(inst_14433,tmpl_item);var inst_14436 = inst_14435.find("#mc_historyContainer");var inst_14437 = inst_14435.find("#mc_sideContainer");var inst_14438 = inst_14435.find("#mc_bottomContainer");var inst_14439 = inst_14435.find("#img_stylePicture");var inst_14440 = inst_14435.find("#btn_share");var inst_14441 = inst_14435.find("#btn_fullscreen");var inst_14442 = inst_14435.find("#btn_more");var inst_14443 = (function (){var model = inst_14433;var btn_more = inst_14442;var mc_sideContainer = inst_14437;var mc_historyContainer = inst_14436;var err = inst_14432;var tmpl = inst_14434;var img_stylePicture = inst_14439;var elem = inst_14435;var vec__14429 = inst_14431;var btn_share = inst_14440;var mc_bottomContainer = inst_14438;var btn_fullscreen = inst_14441;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (state_14468){var state_val_14469 = (state_14468[(1)]);if((state_val_14469 === (2)))
{var inst_14466 = (state_14468[(2)]);var state_14468__$1 = state_14468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14468__$1,inst_14466);
} else
{if((state_val_14469 === (1)))
{var inst_14463 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_14464 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14463,null));var state_14468__$1 = state_14468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14468__$1,(2),tool.react.OnReact,inst_14464);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14473 = [null,null,null,null,null,null,null];(statearr_14473[(0)] = state_machine__6178__auto__);
(statearr_14473[(1)] = (1));
return statearr_14473;
});
var state_machine__6178__auto____1 = (function (state_14468){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14468);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14474){if((e14474 instanceof Object))
{var ex__6181__auto__ = e14474;var statearr_14475_14604 = state_14468;(statearr_14475_14604[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14468);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14605 = state_14468;
state_14468 = G__14605;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14468){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14476 = f__6193__auto__.call(null);(statearr_14476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var inst_14444 = inst_14442.on("click",inst_14443);var inst_14445 = (function (){var model = inst_14433;var btn_more = inst_14442;var mc_sideContainer = inst_14437;var mc_historyContainer = inst_14436;var err = inst_14432;var tmpl = inst_14434;var img_stylePicture = inst_14439;var elem = inst_14435;var vec__14429 = inst_14431;var btn_share = inst_14440;var mc_bottomContainer = inst_14438;var btn_fullscreen = inst_14441;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (state_14485){var state_val_14486 = (state_14485[(1)]);if((state_val_14486 === (2)))
{var inst_14483 = (state_14485[(2)]);var state_14485__$1 = state_14485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14485__$1,inst_14483);
} else
{if((state_val_14486 === (1)))
{var inst_14477 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_14478 = [model];var inst_14479 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14477,inst_14478);var inst_14480 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_14479];var inst_14481 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14480,null));var state_14485__$1 = state_14485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14485__$1,(2),tool.react.OnReact,inst_14481);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14490 = [null,null,null,null,null,null,null];(statearr_14490[(0)] = state_machine__6178__auto__);
(statearr_14490[(1)] = (1));
return statearr_14490;
});
var state_machine__6178__auto____1 = (function (state_14485){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14485);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14491){if((e14491 instanceof Object))
{var ex__6181__auto__ = e14491;var statearr_14492_14606 = state_14485;(statearr_14492_14606[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14485);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14607 = state_14485;
state_14485 = G__14607;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14485){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14493 = f__6193__auto__.call(null);(statearr_14493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var inst_14446 = inst_14441.on("click",inst_14445);var inst_14447 = (function (){var model = inst_14433;var btn_more = inst_14442;var mc_sideContainer = inst_14437;var mc_historyContainer = inst_14436;var err = inst_14432;var tmpl = inst_14434;var img_stylePicture = inst_14439;var elem = inst_14435;var vec__14429 = inst_14431;var btn_share = inst_14440;var mc_bottomContainer = inst_14438;var btn_fullscreen = inst_14441;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (state_14503){var state_val_14504 = (state_14503[(1)]);if((state_val_14504 === (2)))
{var inst_14501 = (state_14503[(2)]);var state_14503__$1 = state_14503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14503__$1,inst_14501);
} else
{if((state_val_14504 === (1)))
{var inst_14494 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_14495 = model.styleUrl;var inst_14496 = [inst_14495];var inst_14497 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14494,inst_14496);var inst_14498 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_14497];var inst_14499 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14498,null));var state_14503__$1 = state_14503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14503__$1,(2),tool.react.OnReact,inst_14499);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14508 = [null,null,null,null,null,null,null];(statearr_14508[(0)] = state_machine__6178__auto__);
(statearr_14508[(1)] = (1));
return statearr_14508;
});
var state_machine__6178__auto____1 = (function (state_14503){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14503);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14509){if((e14509 instanceof Object))
{var ex__6181__auto__ = e14509;var statearr_14510_14608 = state_14503;(statearr_14510_14608[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14503);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14609 = state_14503;
state_14503 = G__14609;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14503){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14511 = f__6193__auto__.call(null);(statearr_14511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var inst_14448 = inst_14439.on("click",inst_14447);var inst_14449 = (function (){var model = inst_14433;var btn_more = inst_14442;var mc_sideContainer = inst_14437;var mc_historyContainer = inst_14436;var err = inst_14432;var tmpl = inst_14434;var img_stylePicture = inst_14439;var elem = inst_14435;var vec__14429 = inst_14431;var btn_share = inst_14440;var mc_bottomContainer = inst_14438;var btn_fullscreen = inst_14441;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (state_14520){var state_val_14521 = (state_14520[(1)]);if((state_val_14521 === (2)))
{var inst_14518 = (state_14520[(2)]);var state_14520__$1 = state_14520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14520__$1,inst_14518);
} else
{if((state_val_14521 === (1)))
{var inst_14512 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_14513 = [model];var inst_14514 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14512,inst_14513);var inst_14515 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_14514];var inst_14516 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14515,null));var state_14520__$1 = state_14520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14520__$1,(2),tool.react.OnReact,inst_14516);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14525 = [null,null,null,null,null,null,null];(statearr_14525[(0)] = state_machine__6178__auto__);
(statearr_14525[(1)] = (1));
return statearr_14525;
});
var state_machine__6178__auto____1 = (function (state_14520){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14526){if((e14526 instanceof Object))
{var ex__6181__auto__ = e14526;var statearr_14527_14610 = state_14520;(statearr_14527_14610[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14611 = state_14520;
state_14520 = G__14611;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14520){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14528 = f__6193__auto__.call(null);(statearr_14528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var inst_14450 = inst_14440.on("click",inst_14449);var inst_14451 = (function (){var model = inst_14433;var btn_more = inst_14442;var mc_sideContainer = inst_14437;var mc_historyContainer = inst_14436;var err = inst_14432;var tmpl = inst_14434;var img_stylePicture = inst_14439;var elem = inst_14435;var vec__14429 = inst_14431;var btn_share = inst_14440;var mc_bottomContainer = inst_14438;var btn_fullscreen = inst_14441;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (state_14539){var state_val_14540 = (state_14539[(1)]);if((state_val_14540 === (2)))
{var inst_14537 = (state_14539[(2)]);var state_14539__$1 = state_14539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14539__$1,inst_14537);
} else
{if((state_val_14540 === (1)))
{var inst_14529 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_14530 = that.id;var inst_14531 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14530));var inst_14532 = [inst_14531];var inst_14533 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14529,inst_14532);var inst_14534 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_14533];var inst_14535 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14534,null));var state_14539__$1 = state_14539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14539__$1,(2),tool.react.OnReact,inst_14535);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14544 = [null,null,null,null,null,null,null];(statearr_14544[(0)] = state_machine__6178__auto__);
(statearr_14544[(1)] = (1));
return statearr_14544;
});
var state_machine__6178__auto____1 = (function (state_14539){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14539);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14545){if((e14545 instanceof Object))
{var ex__6181__auto__ = e14545;var statearr_14546_14612 = state_14539;(statearr_14546_14612[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14613 = state_14539;
state_14539 = G__14613;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14539){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14547 = f__6193__auto__.call(null);(statearr_14547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var inst_14452 = inst_14437.delegate("img","click",inst_14451);var inst_14453 = (function (){var model = inst_14433;var btn_more = inst_14442;var mc_sideContainer = inst_14437;var mc_historyContainer = inst_14436;var err = inst_14432;var tmpl = inst_14434;var img_stylePicture = inst_14439;var elem = inst_14435;var vec__14429 = inst_14431;var btn_share = inst_14440;var mc_bottomContainer = inst_14438;var btn_fullscreen = inst_14441;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (state_14558){var state_val_14559 = (state_14558[(1)]);if((state_val_14559 === (2)))
{var inst_14556 = (state_14558[(2)]);var state_14558__$1 = state_14558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14558__$1,inst_14556);
} else
{if((state_val_14559 === (1)))
{var inst_14548 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_14549 = that.id;var inst_14550 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14549));var inst_14551 = [inst_14550];var inst_14552 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14548,inst_14551);var inst_14553 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_14552];var inst_14554 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14553,null));var state_14558__$1 = state_14558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14558__$1,(2),tool.react.OnReact,inst_14554);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14563 = [null,null,null,null,null,null,null];(statearr_14563[(0)] = state_machine__6178__auto__);
(statearr_14563[(1)] = (1));
return statearr_14563;
});
var state_machine__6178__auto____1 = (function (state_14558){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14564){if((e14564 instanceof Object))
{var ex__6181__auto__ = e14564;var statearr_14565_14614 = state_14558;(statearr_14565_14614[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14615 = state_14558;
state_14558 = G__14615;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14558){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14566 = f__6193__auto__.call(null);(statearr_14566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var inst_14454 = inst_14438.delegate("img","click",inst_14453);var inst_14455 = (function (){var model = inst_14433;var btn_more = inst_14442;var mc_sideContainer = inst_14437;var mc_historyContainer = inst_14436;var err = inst_14432;var tmpl = inst_14434;var img_stylePicture = inst_14439;var elem = inst_14435;var vec__14429 = inst_14431;var btn_share = inst_14440;var mc_bottomContainer = inst_14438;var btn_fullscreen = inst_14441;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,inst_14453,inst_14454,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,inst_14453,inst_14454,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,inst_14453,inst_14454,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function (state_14576){var state_val_14577 = (state_14576[(1)]);if((state_val_14577 === (2)))
{var inst_14574 = (state_14576[(2)]);var state_14576__$1 = state_14576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14576__$1,inst_14574);
} else
{if((state_val_14577 === (1)))
{var inst_14567 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14568 = that.id;var inst_14569 = [inst_14568];var inst_14570 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14567,inst_14569);var inst_14571 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_14570];var inst_14572 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14571,null));var state_14576__$1 = state_14576;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14576__$1,(2),tool.react.OnReact,inst_14572);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,inst_14453,inst_14454,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,inst_14453,inst_14454,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14581 = [null,null,null,null,null,null,null];(statearr_14581[(0)] = state_machine__6178__auto__);
(statearr_14581[(1)] = (1));
return statearr_14581;
});
var state_machine__6178__auto____1 = (function (state_14576){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14576);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14582){if((e14582 instanceof Object))
{var ex__6181__auto__ = e14582;var statearr_14583_14616 = state_14576;(statearr_14583_14616[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14576);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14617 = state_14576;
state_14576 = G__14617;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14576){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,inst_14453,inst_14454,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14584 = f__6193__auto__.call(null);(statearr_14584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,inst_14453,inst_14454,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__14429,btn_share,mc_bottomContainer,btn_fullscreen,inst_14431,inst_14432,inst_14433,inst_14434,inst_14435,inst_14436,inst_14437,inst_14438,inst_14439,inst_14440,inst_14441,inst_14442,inst_14443,inst_14444,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,inst_14453,inst_14454,state_val_14462,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var inst_14456 = inst_14436.delegate("img","click",inst_14455);var inst_14457 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_14458 = [inst_14435,name];var inst_14459 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14457,inst_14458);var state_14461__$1 = (function (){var statearr_14585 = state_14461;(statearr_14585[(7)] = inst_14450);
(statearr_14585[(8)] = inst_14456);
(statearr_14585[(9)] = inst_14446);
(statearr_14585[(10)] = inst_14452);
(statearr_14585[(11)] = inst_14448);
(statearr_14585[(12)] = inst_14444);
(statearr_14585[(13)] = inst_14454);
return statearr_14585;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14461__$1,inst_14459);
} else
{if((state_val_14462 === (1)))
{var state_14461__$1 = state_14461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14461__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14589[(0)] = state_machine__6178__auto__);
(statearr_14589[(1)] = (1));
return statearr_14589;
});
var state_machine__6178__auto____1 = (function (state_14461){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14461);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14590){if((e14590 instanceof Object))
{var ex__6181__auto__ = e14590;var statearr_14591_14618 = state_14461;(statearr_14591_14618[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14461);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14619 = state_14461;
state_14461 = G__14619;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14461){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14592 = f__6193__auto__.call(null);(statearr_14592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14592;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__14428,map__14428__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__14620){var map__14621 = p__14620;var map__14621__$1 = ((cljs.core.seq_QMARK_.call(null,map__14621))?cljs.core.apply.call(null,cljs.core.hash_map,map__14621):map__14621);var view = map__14621__$1;var elem = cljs.core.get.call(null,map__14621__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_14637 = elem.find("#mc_3dmask");var c__6192__auto___14638 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___14638,mc_3dmask_14637,map__14621,map__14621__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___14638,mc_3dmask_14637,map__14621,map__14621__$1,view,elem){
return (function (state_14627){var state_val_14628 = (state_14627[(1)]);if((state_val_14628 === (2)))
{var inst_14624 = (state_14627[(2)]);var inst_14625 = mc_3dmask_14637.fadeOut((400));var state_14627__$1 = (function (){var statearr_14629 = state_14627;(statearr_14629[(7)] = inst_14624);
return statearr_14629;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14627__$1,inst_14625);
} else
{if((state_val_14628 === (1)))
{var inst_14622 = cljs.core.async.timeout.call(null,(3000));var state_14627__$1 = state_14627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14627__$1,(2),inst_14622);
} else
{return null;
}
}
});})(c__6192__auto___14638,mc_3dmask_14637,map__14621,map__14621__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___14638,mc_3dmask_14637,map__14621,map__14621__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14633 = [null,null,null,null,null,null,null,null];(statearr_14633[(0)] = state_machine__6178__auto__);
(statearr_14633[(1)] = (1));
return statearr_14633;
});
var state_machine__6178__auto____1 = (function (state_14627){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14627);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14634){if((e14634 instanceof Object))
{var ex__6181__auto__ = e14634;var statearr_14635_14639 = state_14627;(statearr_14635_14639[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14627);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14640 = state_14627;
state_14627 = G__14640;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14627){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___14638,mc_3dmask_14637,map__14621,map__14621__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_14636 = f__6193__auto__.call(null);(statearr_14636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14638);
return statearr_14636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___14638,mc_3dmask_14637,map__14621,map__14621__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__14641,key,modelChan){var map__14642 = p__14641;var map__14642__$1 = ((cljs.core.seq_QMARK_.call(null,map__14642))?cljs.core.apply.call(null,cljs.core.hash_map,map__14642):map__14642);var ctx = map__14642__$1;var tmpl_item = cljs.core.get.call(null,map__14642__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__14642,map__14642__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__14642,map__14642__$1,ctx,tmpl_item){
return (function (state_14654){var state_val_14655 = (state_14654[(1)]);if((state_val_14655 === (2)))
{var inst_14645 = (state_14654[(2)]);var inst_14646 = cljs.core.nth.call(null,inst_14645,(0),null);var inst_14647 = cljs.core.nth.call(null,inst_14645,(1),null);var inst_14648 = $("#tmpl_home");var inst_14649 = inst_14648.tmpl(inst_14647,tmpl_item);var inst_14650 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_14651 = [inst_14649,key];var inst_14652 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14650,inst_14651);var state_14654__$1 = (function (){var statearr_14656 = state_14654;(statearr_14656[(7)] = inst_14646);
return statearr_14656;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14654__$1,inst_14652);
} else
{if((state_val_14655 === (1)))
{var state_14654__$1 = state_14654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14654__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__14642,map__14642__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__14642,map__14642__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14660 = [null,null,null,null,null,null,null,null];(statearr_14660[(0)] = state_machine__6178__auto__);
(statearr_14660[(1)] = (1));
return statearr_14660;
});
var state_machine__6178__auto____1 = (function (state_14654){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14654);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14661){if((e14661 instanceof Object))
{var ex__6181__auto__ = e14661;var statearr_14662_14664 = state_14654;(statearr_14662_14664[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14661;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14665 = state_14654;
state_14654 = G__14665;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14654){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__14642,map__14642__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14663 = f__6193__auto__.call(null);(statearr_14663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__14642,map__14642__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__14666,key,view){var map__14667 = p__14666;var map__14667__$1 = ((cljs.core.seq_QMARK_.call(null,map__14667))?cljs.core.apply.call(null,cljs.core.hash_map,map__14667):map__14667);var ctx = map__14667__$1;var popupContainer = cljs.core.get.call(null,map__14667__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__14668 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__14668.appendTo(popupContainer);
G__14668.fadeIn((400));
return G__14668;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__14669,key,p__14670){var map__14671 = p__14669;var map__14671__$1 = ((cljs.core.seq_QMARK_.call(null,map__14671))?cljs.core.apply.call(null,cljs.core.hash_map,map__14671):map__14671);var ctx = map__14671__$1;var container = cljs.core.get.call(null,map__14671__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__14672 = p__14670;var map__14672__$1 = ((cljs.core.seq_QMARK_.call(null,map__14672))?cljs.core.apply.call(null,cljs.core.hash_map,map__14672):map__14672);var view = map__14672__$1;var elem = cljs.core.get.call(null,map__14672__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__14671,map__14671__$1,ctx,container,map__14672,map__14672__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__14671,map__14671__$1,ctx,container,map__14672,map__14672__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__14673,key,modelChan){var map__14674 = p__14673;var map__14674__$1 = ((cljs.core.seq_QMARK_.call(null,map__14674))?cljs.core.apply.call(null,cljs.core.hash_map,map__14674):map__14674);var ctx = map__14674__$1;var media_type = cljs.core.get.call(null,map__14674__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var tmpl_item = cljs.core.get.call(null,map__14674__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item){
return (function (state_14727){var state_val_14728 = (state_14727[(1)]);if((state_val_14728 === (7)))
{var inst_14697 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type);var state_14727__$1 = state_14727;if(inst_14697)
{var statearr_14729_14764 = state_14727__$1;(statearr_14729_14764[(1)] = (9));
} else
{var statearr_14730_14765 = state_14727__$1;(statearr_14730_14765[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14728 === (1)))
{var state_14727__$1 = state_14727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14727__$1,(2),modelChan);
} else
{if((state_val_14728 === (4)))
{var inst_14690 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type);var state_14727__$1 = state_14727;if(inst_14690)
{var statearr_14731_14766 = state_14727__$1;(statearr_14731_14766[(1)] = (6));
} else
{var statearr_14732_14767 = state_14727__$1;(statearr_14732_14767[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14728 === (6)))
{var inst_14681 = (state_14727[(7)]);var inst_14692 = inst_14681.width();var inst_14693 = inst_14681.height();var inst_14694 = [inst_14692,inst_14693];var inst_14695 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14694,null));var state_14727__$1 = state_14727;var statearr_14733_14768 = state_14727__$1;(statearr_14733_14768[(2)] = inst_14695);
(statearr_14733_14768[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14728 === (3)))
{var inst_14687 = [(800),(600)];var inst_14688 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14687,null));var state_14727__$1 = state_14727;var statearr_14734_14769 = state_14727__$1;(statearr_14734_14769[(2)] = inst_14688);
(statearr_14734_14769[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14728 === (2)))
{var inst_14678 = (state_14727[(8)]);var inst_14678__$1 = (state_14727[(2)]);var inst_14679 = cljs.core.nth.call(null,inst_14678__$1,(0),null);var inst_14680 = cljs.core.nth.call(null,inst_14678__$1,(1),null);var inst_14681 = $("body");var inst_14685 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),media_type);var state_14727__$1 = (function (){var statearr_14735 = state_14727;(statearr_14735[(8)] = inst_14678__$1);
(statearr_14735[(7)] = inst_14681);
(statearr_14735[(9)] = inst_14680);
(statearr_14735[(10)] = inst_14679);
return statearr_14735;
})();if(inst_14685)
{var statearr_14736_14770 = state_14727__$1;(statearr_14736_14770[(1)] = (3));
} else
{var statearr_14737_14771 = state_14727__$1;(statearr_14737_14771[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14728 === (11)))
{var inst_14709 = (state_14727[(2)]);var state_14727__$1 = state_14727;var statearr_14738_14772 = state_14727__$1;(statearr_14738_14772[(2)] = inst_14709);
(statearr_14738_14772[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14728 === (9)))
{var inst_14681 = (state_14727[(7)]);var inst_14699 = inst_14681.width();var inst_14700 = inst_14681.height();var inst_14701 = [inst_14699,inst_14700];var inst_14702 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14701,null));var state_14727__$1 = state_14727;var statearr_14739_14773 = state_14727__$1;(statearr_14739_14773[(2)] = inst_14702);
(statearr_14739_14773[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14728 === (5)))
{var inst_14678 = (state_14727[(8)]);var inst_14681 = (state_14727[(7)]);var inst_14680 = (state_14727[(9)]);var inst_14679 = (state_14727[(10)]);var inst_14713 = (state_14727[(2)]);var inst_14714 = cljs.core.nth.call(null,inst_14713,(0),null);var inst_14715 = cljs.core.nth.call(null,inst_14713,(1),null);var inst_14716 = inst_14680.url;var inst_14717 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14716)+"?Width="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14714)+"&Height="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14715));var inst_14718 = inst_14680.url = inst_14717;var inst_14719 = $("#tmpl_bigPhoto");var inst_14720 = inst_14719.tmpl(inst_14680,tmpl_item);var inst_14721 = (function (){var model = inst_14680;var _ = inst_14718;var err = inst_14679;var tmpl = inst_14719;var vec__14676 = inst_14713;var pw = inst_14714;var elem = inst_14720;var root_elem = inst_14681;var vec__14675 = inst_14678;var back = inst_14720;var ph = inst_14715;return ((function (model,_,err,tmpl,vec__14676,pw,elem,root_elem,vec__14675,back,ph,inst_14678,inst_14681,inst_14680,inst_14679,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,inst_14720,state_val_14728,c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,_,err,tmpl,vec__14676,pw,elem,root_elem,vec__14675,back,ph,inst_14678,inst_14681,inst_14680,inst_14679,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,inst_14720,state_val_14728,c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,_,err,tmpl,vec__14676,pw,elem,root_elem,vec__14675,back,ph,inst_14678,inst_14681,inst_14680,inst_14679,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,inst_14720,state_val_14728,c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item){
return (function (state_14745){var state_val_14746 = (state_14745[(1)]);if((state_val_14746 === (2)))
{var inst_14743 = (state_14745[(2)]);var state_14745__$1 = state_14745;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14745__$1,inst_14743);
} else
{if((state_val_14746 === (1)))
{var inst_14740 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_14741 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14740,null));var state_14745__$1 = state_14745;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14745__$1,(2),tool.react.OnReact,inst_14741);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,_,err,tmpl,vec__14676,pw,elem,root_elem,vec__14675,back,ph,inst_14678,inst_14681,inst_14680,inst_14679,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,inst_14720,state_val_14728,c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,_,err,tmpl,vec__14676,pw,elem,root_elem,vec__14675,back,ph,inst_14678,inst_14681,inst_14680,inst_14679,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,inst_14720,state_val_14728,c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14750 = [null,null,null,null,null,null,null];(statearr_14750[(0)] = state_machine__6178__auto__);
(statearr_14750[(1)] = (1));
return statearr_14750;
});
var state_machine__6178__auto____1 = (function (state_14745){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14745);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14751){if((e14751 instanceof Object))
{var ex__6181__auto__ = e14751;var statearr_14752_14774 = state_14745;(statearr_14752_14774[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14745);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14775 = state_14745;
state_14745 = G__14775;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14745){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,_,err,tmpl,vec__14676,pw,elem,root_elem,vec__14675,back,ph,inst_14678,inst_14681,inst_14680,inst_14679,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,inst_14720,state_val_14728,c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14753 = f__6193__auto__.call(null);(statearr_14753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,_,err,tmpl,vec__14676,pw,elem,root_elem,vec__14675,back,ph,inst_14678,inst_14681,inst_14680,inst_14679,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,inst_14720,state_val_14728,c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,_,err,tmpl,vec__14676,pw,elem,root_elem,vec__14675,back,ph,inst_14678,inst_14681,inst_14680,inst_14679,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,inst_14720,state_val_14728,c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item))
})();var inst_14722 = inst_14720.on("click",inst_14721);var inst_14723 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_14724 = [inst_14720,key];var inst_14725 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14723,inst_14724);var state_14727__$1 = (function (){var statearr_14754 = state_14727;(statearr_14754[(11)] = inst_14722);
return statearr_14754;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14727__$1,inst_14725);
} else
{if((state_val_14728 === (10)))
{var inst_14681 = (state_14727[(7)]);var inst_14704 = inst_14681.width();var inst_14705 = inst_14681.height();var inst_14706 = [inst_14704,inst_14705];var inst_14707 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14706,null));var state_14727__$1 = state_14727;var statearr_14755_14776 = state_14727__$1;(statearr_14755_14776[(2)] = inst_14707);
(statearr_14755_14776[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14728 === (8)))
{var inst_14711 = (state_14727[(2)]);var state_14727__$1 = state_14727;var statearr_14756_14777 = state_14727__$1;(statearr_14756_14777[(2)] = inst_14711);
(statearr_14756_14777[(1)] = (5));
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
});})(c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14760 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14760[(0)] = state_machine__6178__auto__);
(statearr_14760[(1)] = (1));
return statearr_14760;
});
var state_machine__6178__auto____1 = (function (state_14727){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14727);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14761){if((e14761 instanceof Object))
{var ex__6181__auto__ = e14761;var statearr_14762_14778 = state_14727;(statearr_14762_14778[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14761;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14779 = state_14727;
state_14727 = G__14779;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14727){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14763 = f__6193__auto__.call(null);(statearr_14763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__14674,map__14674__$1,ctx,media_type,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__14780,key,modelChan){var map__14781 = p__14780;var map__14781__$1 = ((cljs.core.seq_QMARK_.call(null,map__14781))?cljs.core.apply.call(null,cljs.core.hash_map,map__14781):map__14781);var ctx = map__14781__$1;var tmpl_item = cljs.core.get.call(null,map__14781__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__14781,map__14781__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__14781,map__14781__$1,ctx,tmpl_item){
return (function (state_14793){var state_val_14794 = (state_14793[(1)]);if((state_val_14794 === (2)))
{var inst_14784 = (state_14793[(2)]);var inst_14785 = cljs.core.nth.call(null,inst_14784,(0),null);var inst_14786 = cljs.core.nth.call(null,inst_14784,(1),null);var inst_14787 = $("#tmpl_news");var inst_14788 = inst_14787.tmpl(inst_14786,tmpl_item);var inst_14789 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_14790 = [inst_14788,key];var inst_14791 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14789,inst_14790);var state_14793__$1 = (function (){var statearr_14795 = state_14793;(statearr_14795[(7)] = inst_14785);
return statearr_14795;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14793__$1,inst_14791);
} else
{if((state_val_14794 === (1)))
{var state_14793__$1 = state_14793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14793__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__14781,map__14781__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__14781,map__14781__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14799 = [null,null,null,null,null,null,null,null];(statearr_14799[(0)] = state_machine__6178__auto__);
(statearr_14799[(1)] = (1));
return statearr_14799;
});
var state_machine__6178__auto____1 = (function (state_14793){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14793);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14800){if((e14800 instanceof Object))
{var ex__6181__auto__ = e14800;var statearr_14801_14803 = state_14793;(statearr_14801_14803[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14804 = state_14793;
state_14793 = G__14804;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14793){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__14781,map__14781__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14802 = f__6193__auto__.call(null);(statearr_14802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__14781,map__14781__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
