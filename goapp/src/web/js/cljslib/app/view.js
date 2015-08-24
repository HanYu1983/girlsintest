// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16072,key,view){var map__16073 = p__16072;var map__16073__$1 = ((cljs.core.seq_QMARK_.call(null,map__16073))?cljs.core.apply.call(null,cljs.core.hash_map,map__16073):map__16073);var ctx = map__16073__$1;var container = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__16074_16093 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__16074_16093.appendTo(container);
G__16074_16093.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__16073,map__16073__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__16073,map__16073__$1,ctx,container){
return (function (state_16084){var state_val_16085 = (state_16084[(1)]);if((state_val_16085 === (2)))
{var inst_16082 = (state_16084[(2)]);var state_16084__$1 = state_16084;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16084__$1,inst_16082);
} else
{if((state_val_16085 === (1)))
{var inst_16075 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_16076 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_16077 = [inst_16076,view];var inst_16078 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16075,inst_16077);var inst_16079 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_16078];var inst_16080 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16079,null));var state_16084__$1 = state_16084;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16084__$1,(2),tool.react.OnReact,inst_16080);
} else
{return null;
}
}
});})(c__6192__auto__,map__16073,map__16073__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__16073,map__16073__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16089 = [null,null,null,null,null,null,null];(statearr_16089[(0)] = state_machine__6178__auto__);
(statearr_16089[(1)] = (1));
return statearr_16089;
});
var state_machine__6178__auto____1 = (function (state_16084){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16084);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16090){if((e16090 instanceof Object))
{var ex__6181__auto__ = e16090;var statearr_16091_16094 = state_16084;(statearr_16091_16094[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16084);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16090;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16095 = state_16084;
state_16084 = G__16095;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16084){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__16073,map__16073__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_16092 = f__6193__auto__.call(null);(statearr_16092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__16073,map__16073__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16096,key,view){var map__16097 = p__16096;var map__16097__$1 = ((cljs.core.seq_QMARK_.call(null,map__16097))?cljs.core.apply.call(null,cljs.core.hash_map,map__16097):map__16097);var ctx = map__16097__$1;var container = cljs.core.get.call(null,map__16097__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__16098 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__16098.remove();
return G__16098;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_16261 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_16262 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_16263 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_16263.off("click");
btn_search_16262.off("click");
mc_modelContainer_16261.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__16180,key,modelChan){var map__16181 = p__16180;var map__16181__$1 = ((cljs.core.seq_QMARK_.call(null,map__16181))?cljs.core.apply.call(null,cljs.core.hash_map,map__16181):map__16181);var ctx = map__16181__$1;var tmpl_item = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (state_16202){var state_val_16203 = (state_16202[(1)]);if((state_val_16203 === (2)))
{var inst_16184 = (state_16202[(2)]);var inst_16185 = cljs.core.nth.call(null,inst_16184,(0),null);var inst_16186 = cljs.core.nth.call(null,inst_16184,(1),null);var inst_16187 = $("#tmpl_streetsnap_list");var inst_16188 = inst_16187.tmpl(inst_16186,tmpl_item);var inst_16189 = inst_16188.find("#mc_modelContainer");var inst_16190 = inst_16188.find("#btn_search");var inst_16191 = inst_16188.find("#btn_return");var inst_16192 = (function (){var btn_return = inst_16191;var btn_search = inst_16190;var mc_modelContainer = inst_16189;var elem = inst_16188;var tmpl = inst_16187;var model = inst_16186;var err = inst_16185;var vec__16182 = inst_16184;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (state_16209){var state_val_16210 = (state_16209[(1)]);if((state_val_16210 === (2)))
{var inst_16207 = (state_16209[(2)]);var state_16209__$1 = state_16209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16209__$1,inst_16207);
} else
{if((state_val_16210 === (1)))
{var inst_16204 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_16205 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16204,null));var state_16209__$1 = state_16209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16209__$1,(2),tool.react.OnReact,inst_16205);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16214 = [null,null,null,null,null,null,null];(statearr_16214[(0)] = state_machine__6178__auto__);
(statearr_16214[(1)] = (1));
return statearr_16214;
});
var state_machine__6178__auto____1 = (function (state_16209){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16209);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16215){if((e16215 instanceof Object))
{var ex__6181__auto__ = e16215;var statearr_16216_16264 = state_16209;(statearr_16216_16264[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16209);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16265 = state_16209;
state_16209 = G__16265;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16209){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16217 = f__6193__auto__.call(null);(statearr_16217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
})();var inst_16193 = inst_16191.click(inst_16192);var inst_16194 = (function (){var btn_return = inst_16191;var btn_search = inst_16190;var mc_modelContainer = inst_16189;var elem = inst_16188;var tmpl = inst_16187;var model = inst_16186;var err = inst_16185;var vec__16182 = inst_16184;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (state_16226){var state_val_16227 = (state_16226[(1)]);if((state_val_16227 === (2)))
{var inst_16224 = (state_16226[(2)]);var state_16226__$1 = state_16226;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16226__$1,inst_16224);
} else
{if((state_val_16227 === (1)))
{var inst_16218 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_16219 = [searchKey];var inst_16220 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16218,inst_16219);var inst_16221 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_16220];var inst_16222 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16221,null));var state_16226__$1 = state_16226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16226__$1,(2),tool.react.OnReact,inst_16222);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16231 = [null,null,null,null,null,null,null];(statearr_16231[(0)] = state_machine__6178__auto__);
(statearr_16231[(1)] = (1));
return statearr_16231;
});
var state_machine__6178__auto____1 = (function (state_16226){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16226);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16232){if((e16232 instanceof Object))
{var ex__6181__auto__ = e16232;var statearr_16233_16266 = state_16226;(statearr_16233_16266[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16226);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16267 = state_16226;
state_16226 = G__16267;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16226){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16234 = f__6193__auto__.call(null);(statearr_16234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
})();var inst_16195 = inst_16190.click(inst_16194);var inst_16196 = (function (){var btn_return = inst_16191;var btn_search = inst_16190;var mc_modelContainer = inst_16189;var elem = inst_16188;var tmpl = inst_16187;var model = inst_16186;var err = inst_16185;var vec__16182 = inst_16184;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,inst_16194,inst_16195,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,inst_16194,inst_16195,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,inst_16194,inst_16195,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function (state_16244){var state_val_16245 = (state_16244[(1)]);if((state_val_16245 === (2)))
{var inst_16242 = (state_16244[(2)]);var state_16244__$1 = state_16244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16244__$1,inst_16242);
} else
{if((state_val_16245 === (1)))
{var inst_16235 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_16236 = that.id;var inst_16237 = [inst_16236];var inst_16238 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16235,inst_16237);var inst_16239 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_16238];var inst_16240 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16239,null));var state_16244__$1 = state_16244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16244__$1,(2),tool.react.OnReact,inst_16240);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,inst_16194,inst_16195,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,inst_16194,inst_16195,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16249 = [null,null,null,null,null,null,null];(statearr_16249[(0)] = state_machine__6178__auto__);
(statearr_16249[(1)] = (1));
return statearr_16249;
});
var state_machine__6178__auto____1 = (function (state_16244){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16244);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16250){if((e16250 instanceof Object))
{var ex__6181__auto__ = e16250;var statearr_16251_16268 = state_16244;(statearr_16251_16268[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16269 = state_16244;
state_16244 = G__16269;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16244){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,inst_16194,inst_16195,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16252 = f__6193__auto__.call(null);(statearr_16252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,inst_16194,inst_16195,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__16182,inst_16184,inst_16185,inst_16186,inst_16187,inst_16188,inst_16189,inst_16190,inst_16191,inst_16192,inst_16193,inst_16194,inst_16195,state_val_16203,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
})();var inst_16197 = inst_16189.delegate("div[modelFrame]","click",inst_16196);var inst_16198 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_16199 = [inst_16188,name];var inst_16200 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16198,inst_16199);var state_16202__$1 = (function (){var statearr_16253 = state_16202;(statearr_16253[(7)] = inst_16193);
(statearr_16253[(8)] = inst_16195);
(statearr_16253[(9)] = inst_16197);
return statearr_16253;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16202__$1,inst_16200);
} else
{if((state_val_16203 === (1)))
{var state_16202__$1 = state_16202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16202__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16257 = [null,null,null,null,null,null,null,null,null,null];(statearr_16257[(0)] = state_machine__6178__auto__);
(statearr_16257[(1)] = (1));
return statearr_16257;
});
var state_machine__6178__auto____1 = (function (state_16202){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16202);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16258){if((e16258 instanceof Object))
{var ex__6181__auto__ = e16258;var statearr_16259_16270 = state_16202;(statearr_16259_16270[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16271 = state_16202;
state_16202 = G__16271;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16202){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16260 = f__6193__auto__.call(null);(statearr_16260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__16181,map__16181__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__16457){var map__16458 = p__16457;var map__16458__$1 = ((cljs.core.seq_QMARK_.call(null,map__16458))?cljs.core.apply.call(null,cljs.core.hash_map,map__16458):map__16458);var view = map__16458__$1;var elem = cljs.core.get.call(null,map__16458__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_16642 = elem.find("#mc_historyContainer");var mc_sideContainer_16643 = elem.find("#mc_sideContainer");var mc_bottomContainer_16644 = elem.find("#mc_bottomContainer");var img_stylePicture_16645 = elem.find("#img_stylePicture");var btn_share_16646 = elem.find("#btn_share");var btn_fullscreen_16647 = elem.find("#btn_fullscreen");var btn_more_16648 = elem.find("#btn_more");mc_modelContainer_16642.undelegate("img","click");
mc_sideContainer_16643.undelegate("img","click");
mc_bottomContainer_16644.undelegate("img","click");
img_stylePicture_16645.off("click");
btn_share_16646.off("click");
btn_fullscreen_16647.off("click");
btn_more_16648.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__16459){var map__16460 = p__16459;var map__16460__$1 = ((cljs.core.seq_QMARK_.call(null,map__16460))?cljs.core.apply.call(null,cljs.core.hash_map,map__16460):map__16460);var view = map__16460__$1;var elem = cljs.core.get.call(null,map__16460__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_16649 = elem.find("#mc_3dmask");var c__6192__auto___16650 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___16650,mc_3dmask_16649,map__16460,map__16460__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___16650,mc_3dmask_16649,map__16460,map__16460__$1,view,elem){
return (function (state_16466){var state_val_16467 = (state_16466[(1)]);if((state_val_16467 === (2)))
{var inst_16463 = (state_16466[(2)]);var inst_16464 = mc_3dmask_16649.fadeOut((400));var state_16466__$1 = (function (){var statearr_16468 = state_16466;(statearr_16468[(7)] = inst_16463);
return statearr_16468;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16466__$1,inst_16464);
} else
{if((state_val_16467 === (1)))
{var inst_16461 = cljs.core.async.timeout.call(null,(3000));var state_16466__$1 = state_16466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16466__$1,(2),inst_16461);
} else
{return null;
}
}
});})(c__6192__auto___16650,mc_3dmask_16649,map__16460,map__16460__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___16650,mc_3dmask_16649,map__16460,map__16460__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16472 = [null,null,null,null,null,null,null,null];(statearr_16472[(0)] = state_machine__6178__auto__);
(statearr_16472[(1)] = (1));
return statearr_16472;
});
var state_machine__6178__auto____1 = (function (state_16466){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16473){if((e16473 instanceof Object))
{var ex__6181__auto__ = e16473;var statearr_16474_16651 = state_16466;(statearr_16474_16651[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16652 = state_16466;
state_16466 = G__16652;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16466){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___16650,mc_3dmask_16649,map__16460,map__16460__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_16475 = f__6193__auto__.call(null);(statearr_16475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___16650);
return statearr_16475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___16650,mc_3dmask_16649,map__16460,map__16460__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__16476,key,modelChan){var map__16477 = p__16476;var map__16477__$1 = ((cljs.core.seq_QMARK_.call(null,map__16477))?cljs.core.apply.call(null,cljs.core.hash_map,map__16477):map__16477);var ctx = map__16477__$1;var tmpl_item = cljs.core.get.call(null,map__16477__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (state_16510){var state_val_16511 = (state_16510[(1)]);if((state_val_16511 === (2)))
{var inst_16480 = (state_16510[(2)]);var inst_16481 = cljs.core.nth.call(null,inst_16480,(0),null);var inst_16482 = cljs.core.nth.call(null,inst_16480,(1),null);var inst_16483 = $("#tmpl_streetsnap");var inst_16484 = inst_16483.tmpl(inst_16482,tmpl_item);var inst_16485 = inst_16484.find("#mc_historyContainer");var inst_16486 = inst_16484.find("#mc_sideContainer");var inst_16487 = inst_16484.find("#mc_bottomContainer");var inst_16488 = inst_16484.find("#img_stylePicture");var inst_16489 = inst_16484.find("#btn_share");var inst_16490 = inst_16484.find("#btn_fullscreen");var inst_16491 = inst_16484.find("#btn_more");var inst_16492 = (function (){var model = inst_16482;var btn_more = inst_16491;var mc_sideContainer = inst_16486;var mc_historyContainer = inst_16485;var err = inst_16481;var tmpl = inst_16483;var img_stylePicture = inst_16488;var vec__16478 = inst_16480;var elem = inst_16484;var btn_share = inst_16489;var mc_bottomContainer = inst_16487;var btn_fullscreen = inst_16490;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (state_16517){var state_val_16518 = (state_16517[(1)]);if((state_val_16518 === (2)))
{var inst_16515 = (state_16517[(2)]);var state_16517__$1 = state_16517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16517__$1,inst_16515);
} else
{if((state_val_16518 === (1)))
{var inst_16512 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_16513 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16512,null));var state_16517__$1 = state_16517;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16517__$1,(2),tool.react.OnReact,inst_16513);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16522 = [null,null,null,null,null,null,null];(statearr_16522[(0)] = state_machine__6178__auto__);
(statearr_16522[(1)] = (1));
return statearr_16522;
});
var state_machine__6178__auto____1 = (function (state_16517){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16517);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16523){if((e16523 instanceof Object))
{var ex__6181__auto__ = e16523;var statearr_16524_16653 = state_16517;(statearr_16524_16653[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16654 = state_16517;
state_16517 = G__16654;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16517){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16525 = f__6193__auto__.call(null);(statearr_16525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var inst_16493 = inst_16491.on("click",inst_16492);var inst_16494 = (function (){var model = inst_16482;var btn_more = inst_16491;var mc_sideContainer = inst_16486;var mc_historyContainer = inst_16485;var err = inst_16481;var tmpl = inst_16483;var img_stylePicture = inst_16488;var vec__16478 = inst_16480;var elem = inst_16484;var btn_share = inst_16489;var mc_bottomContainer = inst_16487;var btn_fullscreen = inst_16490;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (state_16534){var state_val_16535 = (state_16534[(1)]);if((state_val_16535 === (2)))
{var inst_16532 = (state_16534[(2)]);var state_16534__$1 = state_16534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16534__$1,inst_16532);
} else
{if((state_val_16535 === (1)))
{var inst_16526 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_16527 = [model];var inst_16528 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16526,inst_16527);var inst_16529 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_16528];var inst_16530 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16529,null));var state_16534__$1 = state_16534;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16534__$1,(2),tool.react.OnReact,inst_16530);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16539 = [null,null,null,null,null,null,null];(statearr_16539[(0)] = state_machine__6178__auto__);
(statearr_16539[(1)] = (1));
return statearr_16539;
});
var state_machine__6178__auto____1 = (function (state_16534){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16534);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16540){if((e16540 instanceof Object))
{var ex__6181__auto__ = e16540;var statearr_16541_16655 = state_16534;(statearr_16541_16655[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16656 = state_16534;
state_16534 = G__16656;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16534){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16542 = f__6193__auto__.call(null);(statearr_16542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var inst_16495 = inst_16490.on("click",inst_16494);var inst_16496 = (function (){var model = inst_16482;var btn_more = inst_16491;var mc_sideContainer = inst_16486;var mc_historyContainer = inst_16485;var err = inst_16481;var tmpl = inst_16483;var img_stylePicture = inst_16488;var vec__16478 = inst_16480;var elem = inst_16484;var btn_share = inst_16489;var mc_bottomContainer = inst_16487;var btn_fullscreen = inst_16490;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (state_16552){var state_val_16553 = (state_16552[(1)]);if((state_val_16553 === (2)))
{var inst_16550 = (state_16552[(2)]);var state_16552__$1 = state_16552;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16552__$1,inst_16550);
} else
{if((state_val_16553 === (1)))
{var inst_16543 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_16544 = model.styleUrl;var inst_16545 = [inst_16544];var inst_16546 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16543,inst_16545);var inst_16547 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_16546];var inst_16548 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16547,null));var state_16552__$1 = state_16552;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16552__$1,(2),tool.react.OnReact,inst_16548);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16557 = [null,null,null,null,null,null,null];(statearr_16557[(0)] = state_machine__6178__auto__);
(statearr_16557[(1)] = (1));
return statearr_16557;
});
var state_machine__6178__auto____1 = (function (state_16552){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16552);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16558){if((e16558 instanceof Object))
{var ex__6181__auto__ = e16558;var statearr_16559_16657 = state_16552;(statearr_16559_16657[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16552);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16658 = state_16552;
state_16552 = G__16658;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16552){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16560 = f__6193__auto__.call(null);(statearr_16560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var inst_16497 = inst_16488.on("click",inst_16496);var inst_16498 = (function (){var model = inst_16482;var btn_more = inst_16491;var mc_sideContainer = inst_16486;var mc_historyContainer = inst_16485;var err = inst_16481;var tmpl = inst_16483;var img_stylePicture = inst_16488;var vec__16478 = inst_16480;var elem = inst_16484;var btn_share = inst_16489;var mc_bottomContainer = inst_16487;var btn_fullscreen = inst_16490;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (state_16569){var state_val_16570 = (state_16569[(1)]);if((state_val_16570 === (2)))
{var inst_16567 = (state_16569[(2)]);var state_16569__$1 = state_16569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16569__$1,inst_16567);
} else
{if((state_val_16570 === (1)))
{var inst_16561 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_16562 = [model];var inst_16563 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16561,inst_16562);var inst_16564 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_16563];var inst_16565 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16564,null));var state_16569__$1 = state_16569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16569__$1,(2),tool.react.OnReact,inst_16565);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16574 = [null,null,null,null,null,null,null];(statearr_16574[(0)] = state_machine__6178__auto__);
(statearr_16574[(1)] = (1));
return statearr_16574;
});
var state_machine__6178__auto____1 = (function (state_16569){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16569);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16575){if((e16575 instanceof Object))
{var ex__6181__auto__ = e16575;var statearr_16576_16659 = state_16569;(statearr_16576_16659[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16569);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16660 = state_16569;
state_16569 = G__16660;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16569){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16577 = f__6193__auto__.call(null);(statearr_16577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var inst_16499 = inst_16489.on("click",inst_16498);var inst_16500 = (function (){var model = inst_16482;var btn_more = inst_16491;var mc_sideContainer = inst_16486;var mc_historyContainer = inst_16485;var err = inst_16481;var tmpl = inst_16483;var img_stylePicture = inst_16488;var vec__16478 = inst_16480;var elem = inst_16484;var btn_share = inst_16489;var mc_bottomContainer = inst_16487;var btn_fullscreen = inst_16490;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (state_16588){var state_val_16589 = (state_16588[(1)]);if((state_val_16589 === (2)))
{var inst_16586 = (state_16588[(2)]);var state_16588__$1 = state_16588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16588__$1,inst_16586);
} else
{if((state_val_16589 === (1)))
{var inst_16578 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_16579 = that.id;var inst_16580 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16579));var inst_16581 = [inst_16580];var inst_16582 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16578,inst_16581);var inst_16583 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_16582];var inst_16584 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16583,null));var state_16588__$1 = state_16588;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16588__$1,(2),tool.react.OnReact,inst_16584);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16593 = [null,null,null,null,null,null,null];(statearr_16593[(0)] = state_machine__6178__auto__);
(statearr_16593[(1)] = (1));
return statearr_16593;
});
var state_machine__6178__auto____1 = (function (state_16588){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16588);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16594){if((e16594 instanceof Object))
{var ex__6181__auto__ = e16594;var statearr_16595_16661 = state_16588;(statearr_16595_16661[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16588);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16594;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16662 = state_16588;
state_16588 = G__16662;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16588){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16596 = f__6193__auto__.call(null);(statearr_16596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var inst_16501 = inst_16486.delegate("img","click",inst_16500);var inst_16502 = (function (){var model = inst_16482;var btn_more = inst_16491;var mc_sideContainer = inst_16486;var mc_historyContainer = inst_16485;var err = inst_16481;var tmpl = inst_16483;var img_stylePicture = inst_16488;var vec__16478 = inst_16480;var elem = inst_16484;var btn_share = inst_16489;var mc_bottomContainer = inst_16487;var btn_fullscreen = inst_16490;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (state_16607){var state_val_16608 = (state_16607[(1)]);if((state_val_16608 === (2)))
{var inst_16605 = (state_16607[(2)]);var state_16607__$1 = state_16607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16607__$1,inst_16605);
} else
{if((state_val_16608 === (1)))
{var inst_16597 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_16598 = that.id;var inst_16599 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16598));var inst_16600 = [inst_16599];var inst_16601 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16597,inst_16600);var inst_16602 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_16601];var inst_16603 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16602,null));var state_16607__$1 = state_16607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16607__$1,(2),tool.react.OnReact,inst_16603);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16612 = [null,null,null,null,null,null,null];(statearr_16612[(0)] = state_machine__6178__auto__);
(statearr_16612[(1)] = (1));
return statearr_16612;
});
var state_machine__6178__auto____1 = (function (state_16607){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16607);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16613){if((e16613 instanceof Object))
{var ex__6181__auto__ = e16613;var statearr_16614_16663 = state_16607;(statearr_16614_16663[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16607);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16664 = state_16607;
state_16607 = G__16664;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16607){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16615 = f__6193__auto__.call(null);(statearr_16615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var inst_16503 = inst_16487.delegate("img","click",inst_16502);var inst_16504 = (function (){var model = inst_16482;var btn_more = inst_16491;var mc_sideContainer = inst_16486;var mc_historyContainer = inst_16485;var err = inst_16481;var tmpl = inst_16483;var img_stylePicture = inst_16488;var vec__16478 = inst_16480;var elem = inst_16484;var btn_share = inst_16489;var mc_bottomContainer = inst_16487;var btn_fullscreen = inst_16490;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,inst_16502,inst_16503,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,inst_16502,inst_16503,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,inst_16502,inst_16503,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function (state_16625){var state_val_16626 = (state_16625[(1)]);if((state_val_16626 === (2)))
{var inst_16623 = (state_16625[(2)]);var state_16625__$1 = state_16625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16625__$1,inst_16623);
} else
{if((state_val_16626 === (1)))
{var inst_16616 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_16617 = that.id;var inst_16618 = [inst_16617];var inst_16619 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16616,inst_16618);var inst_16620 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_16619];var inst_16621 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16620,null));var state_16625__$1 = state_16625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16625__$1,(2),tool.react.OnReact,inst_16621);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,inst_16502,inst_16503,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,inst_16502,inst_16503,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16630 = [null,null,null,null,null,null,null];(statearr_16630[(0)] = state_machine__6178__auto__);
(statearr_16630[(1)] = (1));
return statearr_16630;
});
var state_machine__6178__auto____1 = (function (state_16625){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16625);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16631){if((e16631 instanceof Object))
{var ex__6181__auto__ = e16631;var statearr_16632_16665 = state_16625;(statearr_16632_16665[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16625);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16666 = state_16625;
state_16625 = G__16666;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16625){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,inst_16502,inst_16503,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16633 = f__6193__auto__.call(null);(statearr_16633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,inst_16502,inst_16503,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,vec__16478,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_16480,inst_16481,inst_16482,inst_16483,inst_16484,inst_16485,inst_16486,inst_16487,inst_16488,inst_16489,inst_16490,inst_16491,inst_16492,inst_16493,inst_16494,inst_16495,inst_16496,inst_16497,inst_16498,inst_16499,inst_16500,inst_16501,inst_16502,inst_16503,state_val_16511,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var inst_16505 = inst_16485.delegate("img","click",inst_16504);var inst_16506 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_16507 = [inst_16484,name];var inst_16508 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16506,inst_16507);var state_16510__$1 = (function (){var statearr_16634 = state_16510;(statearr_16634[(7)] = inst_16497);
(statearr_16634[(8)] = inst_16501);
(statearr_16634[(9)] = inst_16493);
(statearr_16634[(10)] = inst_16499);
(statearr_16634[(11)] = inst_16503);
(statearr_16634[(12)] = inst_16505);
(statearr_16634[(13)] = inst_16495);
return statearr_16634;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16510__$1,inst_16508);
} else
{if((state_val_16511 === (1)))
{var state_16510__$1 = state_16510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16510__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16638[(0)] = state_machine__6178__auto__);
(statearr_16638[(1)] = (1));
return statearr_16638;
});
var state_machine__6178__auto____1 = (function (state_16510){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16510);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16639){if((e16639 instanceof Object))
{var ex__6181__auto__ = e16639;var statearr_16640_16667 = state_16510;(statearr_16640_16667[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16510);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16668 = state_16510;
state_16510 = G__16668;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16510){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16641 = f__6193__auto__.call(null);(statearr_16641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__16477,map__16477__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__16669){var map__16670 = p__16669;var map__16670__$1 = ((cljs.core.seq_QMARK_.call(null,map__16670))?cljs.core.apply.call(null,cljs.core.hash_map,map__16670):map__16670);var view = map__16670__$1;var elem = cljs.core.get.call(null,map__16670__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_16686 = elem.find("#mc_3dmask");var c__6192__auto___16687 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___16687,mc_3dmask_16686,map__16670,map__16670__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___16687,mc_3dmask_16686,map__16670,map__16670__$1,view,elem){
return (function (state_16676){var state_val_16677 = (state_16676[(1)]);if((state_val_16677 === (2)))
{var inst_16673 = (state_16676[(2)]);var inst_16674 = mc_3dmask_16686.fadeOut((400));var state_16676__$1 = (function (){var statearr_16678 = state_16676;(statearr_16678[(7)] = inst_16673);
return statearr_16678;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16676__$1,inst_16674);
} else
{if((state_val_16677 === (1)))
{var inst_16671 = cljs.core.async.timeout.call(null,(3000));var state_16676__$1 = state_16676;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16676__$1,(2),inst_16671);
} else
{return null;
}
}
});})(c__6192__auto___16687,mc_3dmask_16686,map__16670,map__16670__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___16687,mc_3dmask_16686,map__16670,map__16670__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16682 = [null,null,null,null,null,null,null,null];(statearr_16682[(0)] = state_machine__6178__auto__);
(statearr_16682[(1)] = (1));
return statearr_16682;
});
var state_machine__6178__auto____1 = (function (state_16676){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16676);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16683){if((e16683 instanceof Object))
{var ex__6181__auto__ = e16683;var statearr_16684_16688 = state_16676;(statearr_16684_16688[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16676);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16683;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16689 = state_16676;
state_16676 = G__16689;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16676){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___16687,mc_3dmask_16686,map__16670,map__16670__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_16685 = f__6193__auto__.call(null);(statearr_16685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___16687);
return statearr_16685;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___16687,mc_3dmask_16686,map__16670,map__16670__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__16690,key,modelChan){var map__16691 = p__16690;var map__16691__$1 = ((cljs.core.seq_QMARK_.call(null,map__16691))?cljs.core.apply.call(null,cljs.core.hash_map,map__16691):map__16691);var ctx = map__16691__$1;var tmpl_item = cljs.core.get.call(null,map__16691__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__16691,map__16691__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__16691,map__16691__$1,ctx,tmpl_item){
return (function (state_16703){var state_val_16704 = (state_16703[(1)]);if((state_val_16704 === (2)))
{var inst_16694 = (state_16703[(2)]);var inst_16695 = cljs.core.nth.call(null,inst_16694,(0),null);var inst_16696 = cljs.core.nth.call(null,inst_16694,(1),null);var inst_16697 = $("#tmpl_home");var inst_16698 = inst_16697.tmpl(inst_16696,tmpl_item);var inst_16699 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_16700 = [inst_16698,key];var inst_16701 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16699,inst_16700);var state_16703__$1 = (function (){var statearr_16705 = state_16703;(statearr_16705[(7)] = inst_16695);
return statearr_16705;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16703__$1,inst_16701);
} else
{if((state_val_16704 === (1)))
{var state_16703__$1 = state_16703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16703__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__16691,map__16691__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__16691,map__16691__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16709 = [null,null,null,null,null,null,null,null];(statearr_16709[(0)] = state_machine__6178__auto__);
(statearr_16709[(1)] = (1));
return statearr_16709;
});
var state_machine__6178__auto____1 = (function (state_16703){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16703);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16710){if((e16710 instanceof Object))
{var ex__6181__auto__ = e16710;var statearr_16711_16713 = state_16703;(statearr_16711_16713[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16714 = state_16703;
state_16703 = G__16714;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16703){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__16691,map__16691__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16712 = f__6193__auto__.call(null);(statearr_16712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__16691,map__16691__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__16715,key,view){var map__16716 = p__16715;var map__16716__$1 = ((cljs.core.seq_QMARK_.call(null,map__16716))?cljs.core.apply.call(null,cljs.core.hash_map,map__16716):map__16716);var ctx = map__16716__$1;var popupContainer = cljs.core.get.call(null,map__16716__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__16717 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__16717.appendTo(popupContainer);
G__16717.fadeIn((400));
return G__16717;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__16718,key,p__16719){var map__16720 = p__16718;var map__16720__$1 = ((cljs.core.seq_QMARK_.call(null,map__16720))?cljs.core.apply.call(null,cljs.core.hash_map,map__16720):map__16720);var ctx = map__16720__$1;var container = cljs.core.get.call(null,map__16720__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__16721 = p__16719;var map__16721__$1 = ((cljs.core.seq_QMARK_.call(null,map__16721))?cljs.core.apply.call(null,cljs.core.hash_map,map__16721):map__16721);var view = map__16721__$1;var elem = cljs.core.get.call(null,map__16721__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__16720,map__16720__$1,ctx,container,map__16721,map__16721__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__16720,map__16720__$1,ctx,container,map__16721,map__16721__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__16722,key,modelChan){var map__16723 = p__16722;var map__16723__$1 = ((cljs.core.seq_QMARK_.call(null,map__16723))?cljs.core.apply.call(null,cljs.core.hash_map,map__16723):map__16723);var ctx = map__16723__$1;var tmpl_item = cljs.core.get.call(null,map__16723__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item){
return (function (state_16743){var state_val_16744 = (state_16743[(1)]);if((state_val_16744 === (2)))
{var inst_16726 = (state_16743[(2)]);var inst_16727 = cljs.core.nth.call(null,inst_16726,(0),null);var inst_16728 = cljs.core.nth.call(null,inst_16726,(1),null);var inst_16729 = $("body");var inst_16730 = inst_16728.url;var inst_16731 = inst_16729.width();var inst_16732 = inst_16729.height();var inst_16733 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16730)+"?Width="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16731)+"&Height="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16732));var inst_16734 = inst_16728.url = inst_16733;var inst_16735 = $("#tmpl_bigPhoto");var inst_16736 = inst_16735.tmpl(inst_16728,tmpl_item);var inst_16737 = (function (){var back = inst_16736;var elem = inst_16736;var tmpl = inst_16735;var _ = inst_16734;var root_elem = inst_16729;var model = inst_16728;var err = inst_16727;var vec__16724 = inst_16726;return ((function (back,elem,tmpl,_,root_elem,model,err,vec__16724,inst_16726,inst_16727,inst_16728,inst_16729,inst_16730,inst_16731,inst_16732,inst_16733,inst_16734,inst_16735,inst_16736,state_val_16744,c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__16724,inst_16726,inst_16727,inst_16728,inst_16729,inst_16730,inst_16731,inst_16732,inst_16733,inst_16734,inst_16735,inst_16736,state_val_16744,c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__16724,inst_16726,inst_16727,inst_16728,inst_16729,inst_16730,inst_16731,inst_16732,inst_16733,inst_16734,inst_16735,inst_16736,state_val_16744,c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item){
return (function (state_16750){var state_val_16751 = (state_16750[(1)]);if((state_val_16751 === (2)))
{var inst_16748 = (state_16750[(2)]);var state_16750__$1 = state_16750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16750__$1,inst_16748);
} else
{if((state_val_16751 === (1)))
{var inst_16745 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_16746 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16745,null));var state_16750__$1 = state_16750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16750__$1,(2),tool.react.OnReact,inst_16746);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__16724,inst_16726,inst_16727,inst_16728,inst_16729,inst_16730,inst_16731,inst_16732,inst_16733,inst_16734,inst_16735,inst_16736,state_val_16744,c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__16724,inst_16726,inst_16727,inst_16728,inst_16729,inst_16730,inst_16731,inst_16732,inst_16733,inst_16734,inst_16735,inst_16736,state_val_16744,c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16755 = [null,null,null,null,null,null,null];(statearr_16755[(0)] = state_machine__6178__auto__);
(statearr_16755[(1)] = (1));
return statearr_16755;
});
var state_machine__6178__auto____1 = (function (state_16750){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16750);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16756){if((e16756 instanceof Object))
{var ex__6181__auto__ = e16756;var statearr_16757_16767 = state_16750;(statearr_16757_16767[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16768 = state_16750;
state_16750 = G__16768;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16750){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__16724,inst_16726,inst_16727,inst_16728,inst_16729,inst_16730,inst_16731,inst_16732,inst_16733,inst_16734,inst_16735,inst_16736,state_val_16744,c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16758 = f__6193__auto__.call(null);(statearr_16758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_16758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__16724,inst_16726,inst_16727,inst_16728,inst_16729,inst_16730,inst_16731,inst_16732,inst_16733,inst_16734,inst_16735,inst_16736,state_val_16744,c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,_,root_elem,model,err,vec__16724,inst_16726,inst_16727,inst_16728,inst_16729,inst_16730,inst_16731,inst_16732,inst_16733,inst_16734,inst_16735,inst_16736,state_val_16744,c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item))
})();var inst_16738 = inst_16736.on("click",inst_16737);var inst_16739 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_16740 = [inst_16736,key];var inst_16741 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16739,inst_16740);var state_16743__$1 = (function (){var statearr_16759 = state_16743;(statearr_16759[(7)] = inst_16738);
return statearr_16759;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16743__$1,inst_16741);
} else
{if((state_val_16744 === (1)))
{var state_16743__$1 = state_16743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16743__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16763 = [null,null,null,null,null,null,null,null];(statearr_16763[(0)] = state_machine__6178__auto__);
(statearr_16763[(1)] = (1));
return statearr_16763;
});
var state_machine__6178__auto____1 = (function (state_16743){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16764){if((e16764 instanceof Object))
{var ex__6181__auto__ = e16764;var statearr_16765_16769 = state_16743;(statearr_16765_16769[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16770 = state_16743;
state_16743 = G__16770;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16743){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16766 = f__6193__auto__.call(null);(statearr_16766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__16723,map__16723__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__16771,key,modelChan){var map__16772 = p__16771;var map__16772__$1 = ((cljs.core.seq_QMARK_.call(null,map__16772))?cljs.core.apply.call(null,cljs.core.hash_map,map__16772):map__16772);var ctx = map__16772__$1;var tmpl_item = cljs.core.get.call(null,map__16772__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__16772,map__16772__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__16772,map__16772__$1,ctx,tmpl_item){
return (function (state_16784){var state_val_16785 = (state_16784[(1)]);if((state_val_16785 === (2)))
{var inst_16775 = (state_16784[(2)]);var inst_16776 = cljs.core.nth.call(null,inst_16775,(0),null);var inst_16777 = cljs.core.nth.call(null,inst_16775,(1),null);var inst_16778 = $("#tmpl_news");var inst_16779 = inst_16778.tmpl(inst_16777,tmpl_item);var inst_16780 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_16781 = [inst_16779,key];var inst_16782 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16780,inst_16781);var state_16784__$1 = (function (){var statearr_16786 = state_16784;(statearr_16786[(7)] = inst_16776);
return statearr_16786;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16784__$1,inst_16782);
} else
{if((state_val_16785 === (1)))
{var state_16784__$1 = state_16784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16784__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__16772,map__16772__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__16772,map__16772__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16790 = [null,null,null,null,null,null,null,null];(statearr_16790[(0)] = state_machine__6178__auto__);
(statearr_16790[(1)] = (1));
return statearr_16790;
});
var state_machine__6178__auto____1 = (function (state_16784){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16784);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16791){if((e16791 instanceof Object))
{var ex__6181__auto__ = e16791;var statearr_16792_16794 = state_16784;(statearr_16792_16794[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16795 = state_16784;
state_16784 = G__16795;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16784){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__16772,map__16772__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_16793 = f__6193__auto__.call(null);(statearr_16793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__16772,map__16772__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
