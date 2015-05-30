// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37083,key,view){var map__37084 = p__37083;var map__37084__$1 = ((cljs.core.seq_QMARK_.call(null,map__37084))?cljs.core.apply.call(null,cljs.core.hash_map,map__37084):map__37084);var ctx = map__37084__$1;var container = cljs.core.get.call(null,map__37084__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__37085_37104 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__37085_37104.appendTo(container);
G__37085_37104.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__37084,map__37084__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__37084,map__37084__$1,ctx,container){
return (function (state_37095){var state_val_37096 = (state_37095[(1)]);if((state_val_37096 === (2)))
{var inst_37093 = (state_37095[(2)]);var state_37095__$1 = state_37095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37095__$1,inst_37093);
} else
{if((state_val_37096 === (1)))
{var inst_37086 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_37087 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_37088 = [inst_37087,view];var inst_37089 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37086,inst_37088);var inst_37090 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_37089];var inst_37091 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37090,null));var state_37095__$1 = state_37095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37095__$1,(2),tool.react.OnReact,inst_37091);
} else
{return null;
}
}
});})(c__6192__auto__,map__37084,map__37084__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__37084,map__37084__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37100 = [null,null,null,null,null,null,null];(statearr_37100[(0)] = state_machine__6178__auto__);
(statearr_37100[(1)] = (1));
return statearr_37100;
});
var state_machine__6178__auto____1 = (function (state_37095){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37095);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37101){if((e37101 instanceof Object))
{var ex__6181__auto__ = e37101;var statearr_37102_37105 = state_37095;(statearr_37102_37105[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37106 = state_37095;
state_37095 = G__37106;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37095){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__37084,map__37084__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_37103 = f__6193__auto__.call(null);(statearr_37103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_37103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__37084,map__37084__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37107,key,view){var map__37108 = p__37107;var map__37108__$1 = ((cljs.core.seq_QMARK_.call(null,map__37108))?cljs.core.apply.call(null,cljs.core.hash_map,map__37108):map__37108);var ctx = map__37108__$1;var container = cljs.core.get.call(null,map__37108__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__37109 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__37109.remove();
return G__37109;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_37272 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_37273 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_37274 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_37274.off("click");
btn_search_37273.off("click");
mc_modelContainer_37272.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__37191,key,modelChan){var map__37192 = p__37191;var map__37192__$1 = ((cljs.core.seq_QMARK_.call(null,map__37192))?cljs.core.apply.call(null,cljs.core.hash_map,map__37192):map__37192);var ctx = map__37192__$1;var tmpl_item = cljs.core.get.call(null,map__37192__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (state_37213){var state_val_37214 = (state_37213[(1)]);if((state_val_37214 === (2)))
{var inst_37195 = (state_37213[(2)]);var inst_37196 = cljs.core.nth.call(null,inst_37195,(0),null);var inst_37197 = cljs.core.nth.call(null,inst_37195,(1),null);var inst_37198 = $("#tmpl_streetsnap_list");var inst_37199 = inst_37198.tmpl(inst_37197,tmpl_item);var inst_37200 = inst_37199.find("#mc_modelContainer");var inst_37201 = inst_37199.find("#btn_search");var inst_37202 = inst_37199.find("#btn_return");var inst_37203 = (function (){var btn_return = inst_37202;var btn_search = inst_37201;var mc_modelContainer = inst_37200;var elem = inst_37199;var tmpl = inst_37198;var model = inst_37197;var err = inst_37196;var vec__37193 = inst_37195;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (state_37220){var state_val_37221 = (state_37220[(1)]);if((state_val_37221 === (2)))
{var inst_37218 = (state_37220[(2)]);var state_37220__$1 = state_37220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37220__$1,inst_37218);
} else
{if((state_val_37221 === (1)))
{var inst_37215 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_37216 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37215,null));var state_37220__$1 = state_37220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37220__$1,(2),tool.react.OnReact,inst_37216);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37225 = [null,null,null,null,null,null,null];(statearr_37225[(0)] = state_machine__6178__auto__);
(statearr_37225[(1)] = (1));
return statearr_37225;
});
var state_machine__6178__auto____1 = (function (state_37220){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37220);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37226){if((e37226 instanceof Object))
{var ex__6181__auto__ = e37226;var statearr_37227_37275 = state_37220;(statearr_37227_37275[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37220);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37276 = state_37220;
state_37220 = G__37276;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37220){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37228 = f__6193__auto__.call(null);(statearr_37228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
})();var inst_37204 = inst_37202.click(inst_37203);var inst_37205 = (function (){var btn_return = inst_37202;var btn_search = inst_37201;var mc_modelContainer = inst_37200;var elem = inst_37199;var tmpl = inst_37198;var model = inst_37197;var err = inst_37196;var vec__37193 = inst_37195;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (state_37237){var state_val_37238 = (state_37237[(1)]);if((state_val_37238 === (2)))
{var inst_37235 = (state_37237[(2)]);var state_37237__$1 = state_37237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37237__$1,inst_37235);
} else
{if((state_val_37238 === (1)))
{var inst_37229 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_37230 = [searchKey];var inst_37231 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37229,inst_37230);var inst_37232 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_37231];var inst_37233 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37232,null));var state_37237__$1 = state_37237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37237__$1,(2),tool.react.OnReact,inst_37233);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37242 = [null,null,null,null,null,null,null];(statearr_37242[(0)] = state_machine__6178__auto__);
(statearr_37242[(1)] = (1));
return statearr_37242;
});
var state_machine__6178__auto____1 = (function (state_37237){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37237);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37243){if((e37243 instanceof Object))
{var ex__6181__auto__ = e37243;var statearr_37244_37277 = state_37237;(statearr_37244_37277[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37237);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37278 = state_37237;
state_37237 = G__37278;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37237){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37245 = f__6193__auto__.call(null);(statearr_37245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
})();var inst_37206 = inst_37201.click(inst_37205);var inst_37207 = (function (){var btn_return = inst_37202;var btn_search = inst_37201;var mc_modelContainer = inst_37200;var elem = inst_37199;var tmpl = inst_37198;var model = inst_37197;var err = inst_37196;var vec__37193 = inst_37195;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,inst_37205,inst_37206,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,inst_37205,inst_37206,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,inst_37205,inst_37206,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function (state_37255){var state_val_37256 = (state_37255[(1)]);if((state_val_37256 === (2)))
{var inst_37253 = (state_37255[(2)]);var state_37255__$1 = state_37255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37255__$1,inst_37253);
} else
{if((state_val_37256 === (1)))
{var inst_37246 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_37247 = that.id;var inst_37248 = [inst_37247];var inst_37249 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37246,inst_37248);var inst_37250 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_37249];var inst_37251 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37250,null));var state_37255__$1 = state_37255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37255__$1,(2),tool.react.OnReact,inst_37251);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,inst_37205,inst_37206,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,inst_37205,inst_37206,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37260 = [null,null,null,null,null,null,null];(statearr_37260[(0)] = state_machine__6178__auto__);
(statearr_37260[(1)] = (1));
return statearr_37260;
});
var state_machine__6178__auto____1 = (function (state_37255){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37255);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37261){if((e37261 instanceof Object))
{var ex__6181__auto__ = e37261;var statearr_37262_37279 = state_37255;(statearr_37262_37279[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37255);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37261;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37280 = state_37255;
state_37255 = G__37280;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37255){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,inst_37205,inst_37206,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37263 = f__6193__auto__.call(null);(statearr_37263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,inst_37205,inst_37206,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__37193,inst_37195,inst_37196,inst_37197,inst_37198,inst_37199,inst_37200,inst_37201,inst_37202,inst_37203,inst_37204,inst_37205,inst_37206,state_val_37214,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
})();var inst_37208 = inst_37200.delegate("div[modelFrame]","click",inst_37207);var inst_37209 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_37210 = [inst_37199,name];var inst_37211 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37209,inst_37210);var state_37213__$1 = (function (){var statearr_37264 = state_37213;(statearr_37264[(7)] = inst_37206);
(statearr_37264[(8)] = inst_37204);
(statearr_37264[(9)] = inst_37208);
return statearr_37264;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37213__$1,inst_37211);
} else
{if((state_val_37214 === (1)))
{var state_37213__$1 = state_37213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37213__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37268 = [null,null,null,null,null,null,null,null,null,null];(statearr_37268[(0)] = state_machine__6178__auto__);
(statearr_37268[(1)] = (1));
return statearr_37268;
});
var state_machine__6178__auto____1 = (function (state_37213){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37213);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37269){if((e37269 instanceof Object))
{var ex__6181__auto__ = e37269;var statearr_37270_37281 = state_37213;(statearr_37270_37281[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37213);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37282 = state_37213;
state_37213 = G__37282;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37213){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37271 = f__6193__auto__.call(null);(statearr_37271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_37271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__37192,map__37192__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__37468){var map__37469 = p__37468;var map__37469__$1 = ((cljs.core.seq_QMARK_.call(null,map__37469))?cljs.core.apply.call(null,cljs.core.hash_map,map__37469):map__37469);var view = map__37469__$1;var elem = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_37653 = elem.find("#mc_historyContainer");var mc_sideContainer_37654 = elem.find("#mc_sideContainer");var mc_bottomContainer_37655 = elem.find("#mc_bottomContainer");var img_stylePicture_37656 = elem.find("#img_stylePicture");var btn_share_37657 = elem.find("#btn_share");var btn_fullscreen_37658 = elem.find("#btn_fullscreen");var btn_more_37659 = elem.find("#btn_more");mc_modelContainer_37653.undelegate("img","click");
mc_sideContainer_37654.undelegate("img","click");
mc_bottomContainer_37655.undelegate("img","click");
img_stylePicture_37656.off("click");
btn_share_37657.off("click");
btn_fullscreen_37658.off("click");
btn_more_37659.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__37470){var map__37471 = p__37470;var map__37471__$1 = ((cljs.core.seq_QMARK_.call(null,map__37471))?cljs.core.apply.call(null,cljs.core.hash_map,map__37471):map__37471);var view = map__37471__$1;var elem = cljs.core.get.call(null,map__37471__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_37660 = elem.find("#mc_3dmask");var c__6192__auto___37661 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___37661,mc_3dmask_37660,map__37471,map__37471__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___37661,mc_3dmask_37660,map__37471,map__37471__$1,view,elem){
return (function (state_37477){var state_val_37478 = (state_37477[(1)]);if((state_val_37478 === (2)))
{var inst_37474 = (state_37477[(2)]);var inst_37475 = mc_3dmask_37660.fadeOut((400));var state_37477__$1 = (function (){var statearr_37479 = state_37477;(statearr_37479[(7)] = inst_37474);
return statearr_37479;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37477__$1,inst_37475);
} else
{if((state_val_37478 === (1)))
{var inst_37472 = cljs.core.async.timeout.call(null,(5000));var state_37477__$1 = state_37477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37477__$1,(2),inst_37472);
} else
{return null;
}
}
});})(c__6192__auto___37661,mc_3dmask_37660,map__37471,map__37471__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___37661,mc_3dmask_37660,map__37471,map__37471__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37483 = [null,null,null,null,null,null,null,null];(statearr_37483[(0)] = state_machine__6178__auto__);
(statearr_37483[(1)] = (1));
return statearr_37483;
});
var state_machine__6178__auto____1 = (function (state_37477){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37477);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37484){if((e37484 instanceof Object))
{var ex__6181__auto__ = e37484;var statearr_37485_37662 = state_37477;(statearr_37485_37662[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37477);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37663 = state_37477;
state_37477 = G__37663;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37477){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___37661,mc_3dmask_37660,map__37471,map__37471__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_37486 = f__6193__auto__.call(null);(statearr_37486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___37661);
return statearr_37486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___37661,mc_3dmask_37660,map__37471,map__37471__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__37487,key,modelChan){var map__37488 = p__37487;var map__37488__$1 = ((cljs.core.seq_QMARK_.call(null,map__37488))?cljs.core.apply.call(null,cljs.core.hash_map,map__37488):map__37488);var ctx = map__37488__$1;var tmpl_item = cljs.core.get.call(null,map__37488__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (state_37521){var state_val_37522 = (state_37521[(1)]);if((state_val_37522 === (2)))
{var inst_37491 = (state_37521[(2)]);var inst_37492 = cljs.core.nth.call(null,inst_37491,(0),null);var inst_37493 = cljs.core.nth.call(null,inst_37491,(1),null);var inst_37494 = $("#tmpl_streetsnap");var inst_37495 = inst_37494.tmpl(inst_37493,tmpl_item);var inst_37496 = inst_37495.find("#mc_historyContainer");var inst_37497 = inst_37495.find("#mc_sideContainer");var inst_37498 = inst_37495.find("#mc_bottomContainer");var inst_37499 = inst_37495.find("#img_stylePicture");var inst_37500 = inst_37495.find("#btn_share");var inst_37501 = inst_37495.find("#btn_fullscreen");var inst_37502 = inst_37495.find("#btn_more");var inst_37503 = (function (){var model = inst_37493;var btn_more = inst_37502;var mc_sideContainer = inst_37497;var mc_historyContainer = inst_37496;var err = inst_37492;var tmpl = inst_37494;var img_stylePicture = inst_37499;var elem = inst_37495;var vec__37489 = inst_37491;var btn_share = inst_37500;var mc_bottomContainer = inst_37498;var btn_fullscreen = inst_37501;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (state_37528){var state_val_37529 = (state_37528[(1)]);if((state_val_37529 === (2)))
{var inst_37526 = (state_37528[(2)]);var state_37528__$1 = state_37528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37528__$1,inst_37526);
} else
{if((state_val_37529 === (1)))
{var inst_37523 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_37524 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37523,null));var state_37528__$1 = state_37528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37528__$1,(2),tool.react.OnReact,inst_37524);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37533 = [null,null,null,null,null,null,null];(statearr_37533[(0)] = state_machine__6178__auto__);
(statearr_37533[(1)] = (1));
return statearr_37533;
});
var state_machine__6178__auto____1 = (function (state_37528){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37528);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37534){if((e37534 instanceof Object))
{var ex__6181__auto__ = e37534;var statearr_37535_37664 = state_37528;(statearr_37535_37664[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37528);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37665 = state_37528;
state_37528 = G__37665;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37528){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37536 = f__6193__auto__.call(null);(statearr_37536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var inst_37504 = inst_37502.on("click",inst_37503);var inst_37505 = (function (){var model = inst_37493;var btn_more = inst_37502;var mc_sideContainer = inst_37497;var mc_historyContainer = inst_37496;var err = inst_37492;var tmpl = inst_37494;var img_stylePicture = inst_37499;var elem = inst_37495;var vec__37489 = inst_37491;var btn_share = inst_37500;var mc_bottomContainer = inst_37498;var btn_fullscreen = inst_37501;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (state_37545){var state_val_37546 = (state_37545[(1)]);if((state_val_37546 === (2)))
{var inst_37543 = (state_37545[(2)]);var state_37545__$1 = state_37545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37545__$1,inst_37543);
} else
{if((state_val_37546 === (1)))
{var inst_37537 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_37538 = [model];var inst_37539 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37537,inst_37538);var inst_37540 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_37539];var inst_37541 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37540,null));var state_37545__$1 = state_37545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37545__$1,(2),tool.react.OnReact,inst_37541);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37550 = [null,null,null,null,null,null,null];(statearr_37550[(0)] = state_machine__6178__auto__);
(statearr_37550[(1)] = (1));
return statearr_37550;
});
var state_machine__6178__auto____1 = (function (state_37545){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37545);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37551){if((e37551 instanceof Object))
{var ex__6181__auto__ = e37551;var statearr_37552_37666 = state_37545;(statearr_37552_37666[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37545);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37667 = state_37545;
state_37545 = G__37667;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37545){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37553 = f__6193__auto__.call(null);(statearr_37553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var inst_37506 = inst_37501.on("click",inst_37505);var inst_37507 = (function (){var model = inst_37493;var btn_more = inst_37502;var mc_sideContainer = inst_37497;var mc_historyContainer = inst_37496;var err = inst_37492;var tmpl = inst_37494;var img_stylePicture = inst_37499;var elem = inst_37495;var vec__37489 = inst_37491;var btn_share = inst_37500;var mc_bottomContainer = inst_37498;var btn_fullscreen = inst_37501;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (state_37563){var state_val_37564 = (state_37563[(1)]);if((state_val_37564 === (2)))
{var inst_37561 = (state_37563[(2)]);var state_37563__$1 = state_37563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37563__$1,inst_37561);
} else
{if((state_val_37564 === (1)))
{var inst_37554 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_37555 = model.styleUrl;var inst_37556 = [inst_37555];var inst_37557 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37554,inst_37556);var inst_37558 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_37557];var inst_37559 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37558,null));var state_37563__$1 = state_37563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37563__$1,(2),tool.react.OnReact,inst_37559);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37568 = [null,null,null,null,null,null,null];(statearr_37568[(0)] = state_machine__6178__auto__);
(statearr_37568[(1)] = (1));
return statearr_37568;
});
var state_machine__6178__auto____1 = (function (state_37563){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37563);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37569){if((e37569 instanceof Object))
{var ex__6181__auto__ = e37569;var statearr_37570_37668 = state_37563;(statearr_37570_37668[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37669 = state_37563;
state_37563 = G__37669;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37563){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37571 = f__6193__auto__.call(null);(statearr_37571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var inst_37508 = inst_37499.on("click",inst_37507);var inst_37509 = (function (){var model = inst_37493;var btn_more = inst_37502;var mc_sideContainer = inst_37497;var mc_historyContainer = inst_37496;var err = inst_37492;var tmpl = inst_37494;var img_stylePicture = inst_37499;var elem = inst_37495;var vec__37489 = inst_37491;var btn_share = inst_37500;var mc_bottomContainer = inst_37498;var btn_fullscreen = inst_37501;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (state_37580){var state_val_37581 = (state_37580[(1)]);if((state_val_37581 === (2)))
{var inst_37578 = (state_37580[(2)]);var state_37580__$1 = state_37580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37580__$1,inst_37578);
} else
{if((state_val_37581 === (1)))
{var inst_37572 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_37573 = [model];var inst_37574 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37572,inst_37573);var inst_37575 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_37574];var inst_37576 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37575,null));var state_37580__$1 = state_37580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37580__$1,(2),tool.react.OnReact,inst_37576);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37585 = [null,null,null,null,null,null,null];(statearr_37585[(0)] = state_machine__6178__auto__);
(statearr_37585[(1)] = (1));
return statearr_37585;
});
var state_machine__6178__auto____1 = (function (state_37580){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37580);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37586){if((e37586 instanceof Object))
{var ex__6181__auto__ = e37586;var statearr_37587_37670 = state_37580;(statearr_37587_37670[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37580);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37586;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37671 = state_37580;
state_37580 = G__37671;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37580){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37588 = f__6193__auto__.call(null);(statearr_37588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var inst_37510 = inst_37500.on("click",inst_37509);var inst_37511 = (function (){var model = inst_37493;var btn_more = inst_37502;var mc_sideContainer = inst_37497;var mc_historyContainer = inst_37496;var err = inst_37492;var tmpl = inst_37494;var img_stylePicture = inst_37499;var elem = inst_37495;var vec__37489 = inst_37491;var btn_share = inst_37500;var mc_bottomContainer = inst_37498;var btn_fullscreen = inst_37501;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (state_37599){var state_val_37600 = (state_37599[(1)]);if((state_val_37600 === (2)))
{var inst_37597 = (state_37599[(2)]);var state_37599__$1 = state_37599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37599__$1,inst_37597);
} else
{if((state_val_37600 === (1)))
{var inst_37589 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_37590 = that.id;var inst_37591 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37590));var inst_37592 = [inst_37591];var inst_37593 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37589,inst_37592);var inst_37594 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_37593];var inst_37595 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37594,null));var state_37599__$1 = state_37599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37599__$1,(2),tool.react.OnReact,inst_37595);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37604 = [null,null,null,null,null,null,null];(statearr_37604[(0)] = state_machine__6178__auto__);
(statearr_37604[(1)] = (1));
return statearr_37604;
});
var state_machine__6178__auto____1 = (function (state_37599){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37599);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37605){if((e37605 instanceof Object))
{var ex__6181__auto__ = e37605;var statearr_37606_37672 = state_37599;(statearr_37606_37672[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37673 = state_37599;
state_37599 = G__37673;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37599){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37607 = f__6193__auto__.call(null);(statearr_37607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var inst_37512 = inst_37497.delegate("img","click",inst_37511);var inst_37513 = (function (){var model = inst_37493;var btn_more = inst_37502;var mc_sideContainer = inst_37497;var mc_historyContainer = inst_37496;var err = inst_37492;var tmpl = inst_37494;var img_stylePicture = inst_37499;var elem = inst_37495;var vec__37489 = inst_37491;var btn_share = inst_37500;var mc_bottomContainer = inst_37498;var btn_fullscreen = inst_37501;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (state_37618){var state_val_37619 = (state_37618[(1)]);if((state_val_37619 === (2)))
{var inst_37616 = (state_37618[(2)]);var state_37618__$1 = state_37618;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37618__$1,inst_37616);
} else
{if((state_val_37619 === (1)))
{var inst_37608 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_37609 = that.id;var inst_37610 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37609));var inst_37611 = [inst_37610];var inst_37612 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37608,inst_37611);var inst_37613 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_37612];var inst_37614 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37613,null));var state_37618__$1 = state_37618;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37618__$1,(2),tool.react.OnReact,inst_37614);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37623 = [null,null,null,null,null,null,null];(statearr_37623[(0)] = state_machine__6178__auto__);
(statearr_37623[(1)] = (1));
return statearr_37623;
});
var state_machine__6178__auto____1 = (function (state_37618){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37618);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37624){if((e37624 instanceof Object))
{var ex__6181__auto__ = e37624;var statearr_37625_37674 = state_37618;(statearr_37625_37674[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37618);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37675 = state_37618;
state_37618 = G__37675;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37618){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37626 = f__6193__auto__.call(null);(statearr_37626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var inst_37514 = inst_37498.delegate("img","click",inst_37513);var inst_37515 = (function (){var model = inst_37493;var btn_more = inst_37502;var mc_sideContainer = inst_37497;var mc_historyContainer = inst_37496;var err = inst_37492;var tmpl = inst_37494;var img_stylePicture = inst_37499;var elem = inst_37495;var vec__37489 = inst_37491;var btn_share = inst_37500;var mc_bottomContainer = inst_37498;var btn_fullscreen = inst_37501;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,inst_37513,inst_37514,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,inst_37513,inst_37514,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,inst_37513,inst_37514,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function (state_37636){var state_val_37637 = (state_37636[(1)]);if((state_val_37637 === (2)))
{var inst_37634 = (state_37636[(2)]);var state_37636__$1 = state_37636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37636__$1,inst_37634);
} else
{if((state_val_37637 === (1)))
{var inst_37627 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_37628 = that.id;var inst_37629 = [inst_37628];var inst_37630 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37627,inst_37629);var inst_37631 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_37630];var inst_37632 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37631,null));var state_37636__$1 = state_37636;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37636__$1,(2),tool.react.OnReact,inst_37632);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,inst_37513,inst_37514,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,inst_37513,inst_37514,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37641 = [null,null,null,null,null,null,null];(statearr_37641[(0)] = state_machine__6178__auto__);
(statearr_37641[(1)] = (1));
return statearr_37641;
});
var state_machine__6178__auto____1 = (function (state_37636){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37636);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37642){if((e37642 instanceof Object))
{var ex__6181__auto__ = e37642;var statearr_37643_37676 = state_37636;(statearr_37643_37676[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37636);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37677 = state_37636;
state_37636 = G__37677;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37636){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,inst_37513,inst_37514,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37644 = f__6193__auto__.call(null);(statearr_37644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,inst_37513,inst_37514,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,vec__37489,btn_share,mc_bottomContainer,btn_fullscreen,inst_37491,inst_37492,inst_37493,inst_37494,inst_37495,inst_37496,inst_37497,inst_37498,inst_37499,inst_37500,inst_37501,inst_37502,inst_37503,inst_37504,inst_37505,inst_37506,inst_37507,inst_37508,inst_37509,inst_37510,inst_37511,inst_37512,inst_37513,inst_37514,state_val_37522,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var inst_37516 = inst_37496.delegate("img","click",inst_37515);var inst_37517 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_37518 = [inst_37495,name];var inst_37519 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37517,inst_37518);var state_37521__$1 = (function (){var statearr_37645 = state_37521;(statearr_37645[(7)] = inst_37506);
(statearr_37645[(8)] = inst_37516);
(statearr_37645[(9)] = inst_37508);
(statearr_37645[(10)] = inst_37514);
(statearr_37645[(11)] = inst_37512);
(statearr_37645[(12)] = inst_37504);
(statearr_37645[(13)] = inst_37510);
return statearr_37645;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37521__$1,inst_37519);
} else
{if((state_val_37522 === (1)))
{var state_37521__$1 = state_37521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37521__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37649[(0)] = state_machine__6178__auto__);
(statearr_37649[(1)] = (1));
return statearr_37649;
});
var state_machine__6178__auto____1 = (function (state_37521){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37521);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37650){if((e37650 instanceof Object))
{var ex__6181__auto__ = e37650;var statearr_37651_37678 = state_37521;(statearr_37651_37678[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37521);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37679 = state_37521;
state_37521 = G__37679;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37521){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37652 = f__6193__auto__.call(null);(statearr_37652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_37652;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__37488,map__37488__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__37680){var map__37681 = p__37680;var map__37681__$1 = ((cljs.core.seq_QMARK_.call(null,map__37681))?cljs.core.apply.call(null,cljs.core.hash_map,map__37681):map__37681);var view = map__37681__$1;var elem = cljs.core.get.call(null,map__37681__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_37697 = elem.find("#mc_3dmask");var c__6192__auto___37698 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___37698,mc_3dmask_37697,map__37681,map__37681__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___37698,mc_3dmask_37697,map__37681,map__37681__$1,view,elem){
return (function (state_37687){var state_val_37688 = (state_37687[(1)]);if((state_val_37688 === (2)))
{var inst_37684 = (state_37687[(2)]);var inst_37685 = mc_3dmask_37697.fadeOut((400));var state_37687__$1 = (function (){var statearr_37689 = state_37687;(statearr_37689[(7)] = inst_37684);
return statearr_37689;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37687__$1,inst_37685);
} else
{if((state_val_37688 === (1)))
{var inst_37682 = cljs.core.async.timeout.call(null,(5000));var state_37687__$1 = state_37687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37687__$1,(2),inst_37682);
} else
{return null;
}
}
});})(c__6192__auto___37698,mc_3dmask_37697,map__37681,map__37681__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___37698,mc_3dmask_37697,map__37681,map__37681__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37693 = [null,null,null,null,null,null,null,null];(statearr_37693[(0)] = state_machine__6178__auto__);
(statearr_37693[(1)] = (1));
return statearr_37693;
});
var state_machine__6178__auto____1 = (function (state_37687){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37694){if((e37694 instanceof Object))
{var ex__6181__auto__ = e37694;var statearr_37695_37699 = state_37687;(statearr_37695_37699[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37694;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37700 = state_37687;
state_37687 = G__37700;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37687){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___37698,mc_3dmask_37697,map__37681,map__37681__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_37696 = f__6193__auto__.call(null);(statearr_37696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___37698);
return statearr_37696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___37698,mc_3dmask_37697,map__37681,map__37681__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__37701,key,modelChan){var map__37702 = p__37701;var map__37702__$1 = ((cljs.core.seq_QMARK_.call(null,map__37702))?cljs.core.apply.call(null,cljs.core.hash_map,map__37702):map__37702);var ctx = map__37702__$1;var tmpl_item = cljs.core.get.call(null,map__37702__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__37702,map__37702__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__37702,map__37702__$1,ctx,tmpl_item){
return (function (state_37714){var state_val_37715 = (state_37714[(1)]);if((state_val_37715 === (2)))
{var inst_37705 = (state_37714[(2)]);var inst_37706 = cljs.core.nth.call(null,inst_37705,(0),null);var inst_37707 = cljs.core.nth.call(null,inst_37705,(1),null);var inst_37708 = $("#tmpl_home");var inst_37709 = inst_37708.tmpl(inst_37707,tmpl_item);var inst_37710 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_37711 = [inst_37709,key];var inst_37712 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37710,inst_37711);var state_37714__$1 = (function (){var statearr_37716 = state_37714;(statearr_37716[(7)] = inst_37706);
return statearr_37716;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37714__$1,inst_37712);
} else
{if((state_val_37715 === (1)))
{var state_37714__$1 = state_37714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37714__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__37702,map__37702__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__37702,map__37702__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37720 = [null,null,null,null,null,null,null,null];(statearr_37720[(0)] = state_machine__6178__auto__);
(statearr_37720[(1)] = (1));
return statearr_37720;
});
var state_machine__6178__auto____1 = (function (state_37714){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37714);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37721){if((e37721 instanceof Object))
{var ex__6181__auto__ = e37721;var statearr_37722_37724 = state_37714;(statearr_37722_37724[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37725 = state_37714;
state_37714 = G__37725;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37714){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__37702,map__37702__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37723 = f__6193__auto__.call(null);(statearr_37723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_37723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__37702,map__37702__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__37726,key,view){var map__37727 = p__37726;var map__37727__$1 = ((cljs.core.seq_QMARK_.call(null,map__37727))?cljs.core.apply.call(null,cljs.core.hash_map,map__37727):map__37727);var ctx = map__37727__$1;var popupContainer = cljs.core.get.call(null,map__37727__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__37728 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__37728.appendTo(popupContainer);
G__37728.fadeIn((400));
return G__37728;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__37729,key,p__37730){var map__37731 = p__37729;var map__37731__$1 = ((cljs.core.seq_QMARK_.call(null,map__37731))?cljs.core.apply.call(null,cljs.core.hash_map,map__37731):map__37731);var ctx = map__37731__$1;var container = cljs.core.get.call(null,map__37731__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__37732 = p__37730;var map__37732__$1 = ((cljs.core.seq_QMARK_.call(null,map__37732))?cljs.core.apply.call(null,cljs.core.hash_map,map__37732):map__37732);var view = map__37732__$1;var elem = cljs.core.get.call(null,map__37732__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__37731,map__37731__$1,ctx,container,map__37732,map__37732__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__37731,map__37731__$1,ctx,container,map__37732,map__37732__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__37733,key,modelChan){var map__37734 = p__37733;var map__37734__$1 = ((cljs.core.seq_QMARK_.call(null,map__37734))?cljs.core.apply.call(null,cljs.core.hash_map,map__37734):map__37734);var ctx = map__37734__$1;var tmpl_item = cljs.core.get.call(null,map__37734__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item){
return (function (state_37749){var state_val_37750 = (state_37749[(1)]);if((state_val_37750 === (2)))
{var inst_37737 = (state_37749[(2)]);var inst_37738 = cljs.core.nth.call(null,inst_37737,(0),null);var inst_37739 = cljs.core.nth.call(null,inst_37737,(1),null);var inst_37740 = $("#tmpl_bigPhoto");var inst_37741 = inst_37740.tmpl(inst_37739,tmpl_item);var inst_37742 = inst_37741.find("#mc_bigPhotoFixPosition");var inst_37743 = (function (){var back = inst_37742;var elem = inst_37741;var tmpl = inst_37740;var model = inst_37739;var err = inst_37738;var vec__37735 = inst_37737;return ((function (back,elem,tmpl,model,err,vec__37735,inst_37737,inst_37738,inst_37739,inst_37740,inst_37741,inst_37742,state_val_37750,c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__37735,inst_37737,inst_37738,inst_37739,inst_37740,inst_37741,inst_37742,state_val_37750,c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__37735,inst_37737,inst_37738,inst_37739,inst_37740,inst_37741,inst_37742,state_val_37750,c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item){
return (function (state_37756){var state_val_37757 = (state_37756[(1)]);if((state_val_37757 === (2)))
{var inst_37754 = (state_37756[(2)]);var state_37756__$1 = state_37756;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37756__$1,inst_37754);
} else
{if((state_val_37757 === (1)))
{var inst_37751 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_37752 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37751,null));var state_37756__$1 = state_37756;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37756__$1,(2),tool.react.OnReact,inst_37752);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__37735,inst_37737,inst_37738,inst_37739,inst_37740,inst_37741,inst_37742,state_val_37750,c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__37735,inst_37737,inst_37738,inst_37739,inst_37740,inst_37741,inst_37742,state_val_37750,c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37761 = [null,null,null,null,null,null,null];(statearr_37761[(0)] = state_machine__6178__auto__);
(statearr_37761[(1)] = (1));
return statearr_37761;
});
var state_machine__6178__auto____1 = (function (state_37756){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37756);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37762){if((e37762 instanceof Object))
{var ex__6181__auto__ = e37762;var statearr_37763_37773 = state_37756;(statearr_37763_37773[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37756);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37762;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37774 = state_37756;
state_37756 = G__37774;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37756){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__37735,inst_37737,inst_37738,inst_37739,inst_37740,inst_37741,inst_37742,state_val_37750,c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37764 = f__6193__auto__.call(null);(statearr_37764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_37764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__37735,inst_37737,inst_37738,inst_37739,inst_37740,inst_37741,inst_37742,state_val_37750,c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__37735,inst_37737,inst_37738,inst_37739,inst_37740,inst_37741,inst_37742,state_val_37750,c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item))
})();var inst_37744 = inst_37742.on("click",inst_37743);var inst_37745 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_37746 = [inst_37741,key];var inst_37747 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37745,inst_37746);var state_37749__$1 = (function (){var statearr_37765 = state_37749;(statearr_37765[(7)] = inst_37744);
return statearr_37765;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37749__$1,inst_37747);
} else
{if((state_val_37750 === (1)))
{var state_37749__$1 = state_37749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37749__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_37769 = [null,null,null,null,null,null,null,null];(statearr_37769[(0)] = state_machine__6178__auto__);
(statearr_37769[(1)] = (1));
return statearr_37769;
});
var state_machine__6178__auto____1 = (function (state_37749){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_37749);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e37770){if((e37770 instanceof Object))
{var ex__6181__auto__ = e37770;var statearr_37771_37775 = state_37749;(statearr_37771_37775[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37749);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37776 = state_37749;
state_37749 = G__37776;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_37749){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_37749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_37772 = f__6193__auto__.call(null);(statearr_37772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_37772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__37734,map__37734__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
