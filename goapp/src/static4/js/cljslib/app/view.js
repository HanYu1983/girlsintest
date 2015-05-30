// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28002,key,view){var map__28003 = p__28002;var map__28003__$1 = ((cljs.core.seq_QMARK_.call(null,map__28003))?cljs.core.apply.call(null,cljs.core.hash_map,map__28003):map__28003);var ctx = map__28003__$1;var container = cljs.core.get.call(null,map__28003__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__28004_28023 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__28004_28023.appendTo(container);
G__28004_28023.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__28003,map__28003__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__28003,map__28003__$1,ctx,container){
return (function (state_28014){var state_val_28015 = (state_28014[(1)]);if((state_val_28015 === (2)))
{var inst_28012 = (state_28014[(2)]);var state_28014__$1 = state_28014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28014__$1,inst_28012);
} else
{if((state_val_28015 === (1)))
{var inst_28005 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_28006 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_28007 = [inst_28006,view];var inst_28008 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28005,inst_28007);var inst_28009 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_28008];var inst_28010 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28009,null));var state_28014__$1 = state_28014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28014__$1,(2),tool.react.OnReact,inst_28010);
} else
{return null;
}
}
});})(c__6192__auto__,map__28003,map__28003__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__28003,map__28003__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28019 = [null,null,null,null,null,null,null];(statearr_28019[(0)] = state_machine__6178__auto__);
(statearr_28019[(1)] = (1));
return statearr_28019;
});
var state_machine__6178__auto____1 = (function (state_28014){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28014);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28020){if((e28020 instanceof Object))
{var ex__6181__auto__ = e28020;var statearr_28021_28024 = state_28014;(statearr_28021_28024[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28025 = state_28014;
state_28014 = G__28025;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28014){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__28003,map__28003__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_28022 = f__6193__auto__.call(null);(statearr_28022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_28022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__28003,map__28003__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28026,key,view){var map__28027 = p__28026;var map__28027__$1 = ((cljs.core.seq_QMARK_.call(null,map__28027))?cljs.core.apply.call(null,cljs.core.hash_map,map__28027):map__28027);var ctx = map__28027__$1;var container = cljs.core.get.call(null,map__28027__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__28028 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__28028.remove();
return G__28028;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_28191 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_28192 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_28193 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_28193.off("click");
btn_search_28192.off("click");
mc_modelContainer_28191.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__28110,key,modelChan){var map__28111 = p__28110;var map__28111__$1 = ((cljs.core.seq_QMARK_.call(null,map__28111))?cljs.core.apply.call(null,cljs.core.hash_map,map__28111):map__28111);var ctx = map__28111__$1;var tmpl_item = cljs.core.get.call(null,map__28111__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (state_28132){var state_val_28133 = (state_28132[(1)]);if((state_val_28133 === (2)))
{var inst_28114 = (state_28132[(2)]);var inst_28115 = cljs.core.nth.call(null,inst_28114,(0),null);var inst_28116 = cljs.core.nth.call(null,inst_28114,(1),null);var inst_28117 = $("#tmpl_streetsnap_list");var inst_28118 = inst_28117.tmpl(inst_28116,tmpl_item);var inst_28119 = inst_28118.find("#mc_modelContainer");var inst_28120 = inst_28118.find("#btn_search");var inst_28121 = inst_28118.find("#btn_return");var inst_28122 = (function (){var btn_return = inst_28121;var btn_search = inst_28120;var mc_modelContainer = inst_28119;var elem = inst_28118;var tmpl = inst_28117;var model = inst_28116;var err = inst_28115;var vec__28112 = inst_28114;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (state_28139){var state_val_28140 = (state_28139[(1)]);if((state_val_28140 === (2)))
{var inst_28137 = (state_28139[(2)]);var state_28139__$1 = state_28139;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28139__$1,inst_28137);
} else
{if((state_val_28140 === (1)))
{var inst_28134 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_28135 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28134,null));var state_28139__$1 = state_28139;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28139__$1,(2),tool.react.OnReact,inst_28135);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28144 = [null,null,null,null,null,null,null];(statearr_28144[(0)] = state_machine__6178__auto__);
(statearr_28144[(1)] = (1));
return statearr_28144;
});
var state_machine__6178__auto____1 = (function (state_28139){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28139);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28145){if((e28145 instanceof Object))
{var ex__6181__auto__ = e28145;var statearr_28146_28194 = state_28139;(statearr_28146_28194[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28139);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28195 = state_28139;
state_28139 = G__28195;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28139){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28147 = f__6193__auto__.call(null);(statearr_28147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_28147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
})();var inst_28123 = inst_28121.click(inst_28122);var inst_28124 = (function (){var btn_return = inst_28121;var btn_search = inst_28120;var mc_modelContainer = inst_28119;var elem = inst_28118;var tmpl = inst_28117;var model = inst_28116;var err = inst_28115;var vec__28112 = inst_28114;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (state_28156){var state_val_28157 = (state_28156[(1)]);if((state_val_28157 === (2)))
{var inst_28154 = (state_28156[(2)]);var state_28156__$1 = state_28156;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28156__$1,inst_28154);
} else
{if((state_val_28157 === (1)))
{var inst_28148 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_28149 = [searchKey];var inst_28150 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28148,inst_28149);var inst_28151 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_28150];var inst_28152 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28151,null));var state_28156__$1 = state_28156;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28156__$1,(2),tool.react.OnReact,inst_28152);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28161 = [null,null,null,null,null,null,null];(statearr_28161[(0)] = state_machine__6178__auto__);
(statearr_28161[(1)] = (1));
return statearr_28161;
});
var state_machine__6178__auto____1 = (function (state_28156){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28156);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28162){if((e28162 instanceof Object))
{var ex__6181__auto__ = e28162;var statearr_28163_28196 = state_28156;(statearr_28163_28196[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28156);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28162;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28197 = state_28156;
state_28156 = G__28197;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28156){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28164 = f__6193__auto__.call(null);(statearr_28164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_28164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
})();var inst_28125 = inst_28120.click(inst_28124);var inst_28126 = (function (){var btn_return = inst_28121;var btn_search = inst_28120;var mc_modelContainer = inst_28119;var elem = inst_28118;var tmpl = inst_28117;var model = inst_28116;var err = inst_28115;var vec__28112 = inst_28114;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,inst_28124,inst_28125,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,inst_28124,inst_28125,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,inst_28124,inst_28125,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function (state_28174){var state_val_28175 = (state_28174[(1)]);if((state_val_28175 === (2)))
{var inst_28172 = (state_28174[(2)]);var state_28174__$1 = state_28174;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28174__$1,inst_28172);
} else
{if((state_val_28175 === (1)))
{var inst_28165 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_28166 = that.id;var inst_28167 = [inst_28166];var inst_28168 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28165,inst_28167);var inst_28169 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_28168];var inst_28170 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28169,null));var state_28174__$1 = state_28174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28174__$1,(2),tool.react.OnReact,inst_28170);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,inst_28124,inst_28125,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,inst_28124,inst_28125,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28179 = [null,null,null,null,null,null,null];(statearr_28179[(0)] = state_machine__6178__auto__);
(statearr_28179[(1)] = (1));
return statearr_28179;
});
var state_machine__6178__auto____1 = (function (state_28174){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28174);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28180){if((e28180 instanceof Object))
{var ex__6181__auto__ = e28180;var statearr_28181_28198 = state_28174;(statearr_28181_28198[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28199 = state_28174;
state_28174 = G__28199;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28174){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,inst_28124,inst_28125,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28182 = f__6193__auto__.call(null);(statearr_28182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_28182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,inst_28124,inst_28125,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__28112,inst_28114,inst_28115,inst_28116,inst_28117,inst_28118,inst_28119,inst_28120,inst_28121,inst_28122,inst_28123,inst_28124,inst_28125,state_val_28133,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
})();var inst_28127 = inst_28119.delegate("div[modelFrame]","click",inst_28126);var inst_28128 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_28129 = [inst_28118,name];var inst_28130 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28128,inst_28129);var state_28132__$1 = (function (){var statearr_28183 = state_28132;(statearr_28183[(7)] = inst_28123);
(statearr_28183[(8)] = inst_28125);
(statearr_28183[(9)] = inst_28127);
return statearr_28183;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28132__$1,inst_28130);
} else
{if((state_val_28133 === (1)))
{var state_28132__$1 = state_28132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28132__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28187 = [null,null,null,null,null,null,null,null,null,null];(statearr_28187[(0)] = state_machine__6178__auto__);
(statearr_28187[(1)] = (1));
return statearr_28187;
});
var state_machine__6178__auto____1 = (function (state_28132){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28132);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28188){if((e28188 instanceof Object))
{var ex__6181__auto__ = e28188;var statearr_28189_28200 = state_28132;(statearr_28189_28200[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28132);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28188;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28201 = state_28132;
state_28132 = G__28201;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28132){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28190 = f__6193__auto__.call(null);(statearr_28190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_28190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__28111,map__28111__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__28370){var map__28371 = p__28370;var map__28371__$1 = ((cljs.core.seq_QMARK_.call(null,map__28371))?cljs.core.apply.call(null,cljs.core.hash_map,map__28371):map__28371);var view = map__28371__$1;var elem = cljs.core.get.call(null,map__28371__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_28538 = elem.find("#mc_historyContainer");var mc_sideContainer_28539 = elem.find("#mc_sideContainer");var mc_bottomContainer_28540 = elem.find("#mc_bottomContainer");var img_stylePicture_28541 = elem.find("#img_stylePicture");var btn_share_28542 = elem.find("#btn_share");mc_modelContainer_28538.undelegate("img","click");
mc_sideContainer_28539.undelegate("img","click");
mc_bottomContainer_28540.undelegate("img","click");
img_stylePicture_28541.off("click");
btn_share_28542.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__28372){var map__28373 = p__28372;var map__28373__$1 = ((cljs.core.seq_QMARK_.call(null,map__28373))?cljs.core.apply.call(null,cljs.core.hash_map,map__28373):map__28373);var view = map__28373__$1;var elem = cljs.core.get.call(null,map__28373__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_28543 = elem.find("#mc_3dmask");var c__6192__auto___28544 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___28544,mc_3dmask_28543,map__28373,map__28373__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___28544,mc_3dmask_28543,map__28373,map__28373__$1,view,elem){
return (function (state_28379){var state_val_28380 = (state_28379[(1)]);if((state_val_28380 === (2)))
{var inst_28376 = (state_28379[(2)]);var inst_28377 = mc_3dmask_28543.fadeOut((400));var state_28379__$1 = (function (){var statearr_28381 = state_28379;(statearr_28381[(7)] = inst_28376);
return statearr_28381;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28379__$1,inst_28377);
} else
{if((state_val_28380 === (1)))
{var inst_28374 = cljs.core.async.timeout.call(null,(5000));var state_28379__$1 = state_28379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28379__$1,(2),inst_28374);
} else
{return null;
}
}
});})(c__6192__auto___28544,mc_3dmask_28543,map__28373,map__28373__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___28544,mc_3dmask_28543,map__28373,map__28373__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28385 = [null,null,null,null,null,null,null,null];(statearr_28385[(0)] = state_machine__6178__auto__);
(statearr_28385[(1)] = (1));
return statearr_28385;
});
var state_machine__6178__auto____1 = (function (state_28379){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28379);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28386){if((e28386 instanceof Object))
{var ex__6181__auto__ = e28386;var statearr_28387_28545 = state_28379;(statearr_28387_28545[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28379);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28546 = state_28379;
state_28379 = G__28546;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28379){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___28544,mc_3dmask_28543,map__28373,map__28373__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_28388 = f__6193__auto__.call(null);(statearr_28388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___28544);
return statearr_28388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___28544,mc_3dmask_28543,map__28373,map__28373__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__28389,key,modelChan){var map__28390 = p__28389;var map__28390__$1 = ((cljs.core.seq_QMARK_.call(null,map__28390))?cljs.core.apply.call(null,cljs.core.hash_map,map__28390):map__28390);var ctx = map__28390__$1;var tmpl_item = cljs.core.get.call(null,map__28390__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (state_28420){var state_val_28421 = (state_28420[(1)]);if((state_val_28421 === (2)))
{var inst_28393 = (state_28420[(2)]);var inst_28394 = cljs.core.nth.call(null,inst_28393,(0),null);var inst_28395 = cljs.core.nth.call(null,inst_28393,(1),null);var inst_28396 = $("#tmpl_streetsnap");var inst_28397 = inst_28396.tmpl(inst_28395,tmpl_item);var inst_28398 = inst_28397.find("#mc_historyContainer");var inst_28399 = inst_28397.find("#mc_sideContainer");var inst_28400 = inst_28397.find("#mc_bottomContainer");var inst_28401 = inst_28397.find("#img_stylePicture");var inst_28402 = inst_28397.find("#btn_share");var inst_28403 = inst_28397.find("#btn_fullscreen");var inst_28404 = (function (){var model = inst_28395;var mc_sideContainer = inst_28399;var mc_historyContainer = inst_28398;var err = inst_28394;var tmpl = inst_28396;var img_stylePicture = inst_28401;var elem = inst_28397;var btn_share = inst_28402;var vec__28391 = inst_28393;var mc_bottomContainer = inst_28400;var btn_fullscreen = inst_28403;return ((function (model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (state_28430){var state_val_28431 = (state_28430[(1)]);if((state_val_28431 === (2)))
{var inst_28428 = (state_28430[(2)]);var state_28430__$1 = state_28430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28430__$1,inst_28428);
} else
{if((state_val_28431 === (1)))
{var inst_28422 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_28423 = [model];var inst_28424 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28422,inst_28423);var inst_28425 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_28424];var inst_28426 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28425,null));var state_28430__$1 = state_28430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28430__$1,(2),tool.react.OnReact,inst_28426);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28435 = [null,null,null,null,null,null,null];(statearr_28435[(0)] = state_machine__6178__auto__);
(statearr_28435[(1)] = (1));
return statearr_28435;
});
var state_machine__6178__auto____1 = (function (state_28430){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28430);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28436){if((e28436 instanceof Object))
{var ex__6181__auto__ = e28436;var statearr_28437_28547 = state_28430;(statearr_28437_28547[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28548 = state_28430;
state_28430 = G__28548;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28430){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28438 = f__6193__auto__.call(null);(statearr_28438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_28438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var inst_28405 = inst_28403.on("click",inst_28404);var inst_28406 = (function (){var model = inst_28395;var mc_sideContainer = inst_28399;var mc_historyContainer = inst_28398;var err = inst_28394;var tmpl = inst_28396;var img_stylePicture = inst_28401;var elem = inst_28397;var btn_share = inst_28402;var vec__28391 = inst_28393;var mc_bottomContainer = inst_28400;var btn_fullscreen = inst_28403;return ((function (model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (state_28448){var state_val_28449 = (state_28448[(1)]);if((state_val_28449 === (2)))
{var inst_28446 = (state_28448[(2)]);var state_28448__$1 = state_28448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28448__$1,inst_28446);
} else
{if((state_val_28449 === (1)))
{var inst_28439 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_28440 = model.styleUrl;var inst_28441 = [inst_28440];var inst_28442 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28439,inst_28441);var inst_28443 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_28442];var inst_28444 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28443,null));var state_28448__$1 = state_28448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28448__$1,(2),tool.react.OnReact,inst_28444);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28453 = [null,null,null,null,null,null,null];(statearr_28453[(0)] = state_machine__6178__auto__);
(statearr_28453[(1)] = (1));
return statearr_28453;
});
var state_machine__6178__auto____1 = (function (state_28448){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28448);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28454){if((e28454 instanceof Object))
{var ex__6181__auto__ = e28454;var statearr_28455_28549 = state_28448;(statearr_28455_28549[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28448);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28550 = state_28448;
state_28448 = G__28550;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28448){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28456 = f__6193__auto__.call(null);(statearr_28456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_28456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var inst_28407 = inst_28401.on("click",inst_28406);var inst_28408 = (function (){var model = inst_28395;var mc_sideContainer = inst_28399;var mc_historyContainer = inst_28398;var err = inst_28394;var tmpl = inst_28396;var img_stylePicture = inst_28401;var elem = inst_28397;var btn_share = inst_28402;var vec__28391 = inst_28393;var mc_bottomContainer = inst_28400;var btn_fullscreen = inst_28403;return ((function (model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (state_28465){var state_val_28466 = (state_28465[(1)]);if((state_val_28466 === (2)))
{var inst_28463 = (state_28465[(2)]);var state_28465__$1 = state_28465;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28465__$1,inst_28463);
} else
{if((state_val_28466 === (1)))
{var inst_28457 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_28458 = [model];var inst_28459 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28457,inst_28458);var inst_28460 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_28459];var inst_28461 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28460,null));var state_28465__$1 = state_28465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28465__$1,(2),tool.react.OnReact,inst_28461);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28470 = [null,null,null,null,null,null,null];(statearr_28470[(0)] = state_machine__6178__auto__);
(statearr_28470[(1)] = (1));
return statearr_28470;
});
var state_machine__6178__auto____1 = (function (state_28465){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28465);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28471){if((e28471 instanceof Object))
{var ex__6181__auto__ = e28471;var statearr_28472_28551 = state_28465;(statearr_28472_28551[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28465);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28552 = state_28465;
state_28465 = G__28552;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28465){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28473 = f__6193__auto__.call(null);(statearr_28473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_28473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var inst_28409 = inst_28402.on("click",inst_28408);var inst_28410 = (function (){var model = inst_28395;var mc_sideContainer = inst_28399;var mc_historyContainer = inst_28398;var err = inst_28394;var tmpl = inst_28396;var img_stylePicture = inst_28401;var elem = inst_28397;var btn_share = inst_28402;var vec__28391 = inst_28393;var mc_bottomContainer = inst_28400;var btn_fullscreen = inst_28403;return ((function (model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (state_28484){var state_val_28485 = (state_28484[(1)]);if((state_val_28485 === (2)))
{var inst_28482 = (state_28484[(2)]);var state_28484__$1 = state_28484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28484__$1,inst_28482);
} else
{if((state_val_28485 === (1)))
{var inst_28474 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_28475 = that.id;var inst_28476 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28475));var inst_28477 = [inst_28476];var inst_28478 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28474,inst_28477);var inst_28479 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_28478];var inst_28480 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28479,null));var state_28484__$1 = state_28484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28484__$1,(2),tool.react.OnReact,inst_28480);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28489 = [null,null,null,null,null,null,null];(statearr_28489[(0)] = state_machine__6178__auto__);
(statearr_28489[(1)] = (1));
return statearr_28489;
});
var state_machine__6178__auto____1 = (function (state_28484){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28484);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28490){if((e28490 instanceof Object))
{var ex__6181__auto__ = e28490;var statearr_28491_28553 = state_28484;(statearr_28491_28553[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28484);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28554 = state_28484;
state_28484 = G__28554;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28484){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28492 = f__6193__auto__.call(null);(statearr_28492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_28492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var inst_28411 = inst_28399.delegate("img","click",inst_28410);var inst_28412 = (function (){var model = inst_28395;var mc_sideContainer = inst_28399;var mc_historyContainer = inst_28398;var err = inst_28394;var tmpl = inst_28396;var img_stylePicture = inst_28401;var elem = inst_28397;var btn_share = inst_28402;var vec__28391 = inst_28393;var mc_bottomContainer = inst_28400;var btn_fullscreen = inst_28403;return ((function (model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (state_28503){var state_val_28504 = (state_28503[(1)]);if((state_val_28504 === (2)))
{var inst_28501 = (state_28503[(2)]);var state_28503__$1 = state_28503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28503__$1,inst_28501);
} else
{if((state_val_28504 === (1)))
{var inst_28493 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_28494 = that.id;var inst_28495 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28494));var inst_28496 = [inst_28495];var inst_28497 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28493,inst_28496);var inst_28498 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_28497];var inst_28499 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28498,null));var state_28503__$1 = state_28503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28503__$1,(2),tool.react.OnReact,inst_28499);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28508 = [null,null,null,null,null,null,null];(statearr_28508[(0)] = state_machine__6178__auto__);
(statearr_28508[(1)] = (1));
return statearr_28508;
});
var state_machine__6178__auto____1 = (function (state_28503){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28503);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28509){if((e28509 instanceof Object))
{var ex__6181__auto__ = e28509;var statearr_28510_28555 = state_28503;(statearr_28510_28555[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28503);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28556 = state_28503;
state_28503 = G__28556;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28503){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28511 = f__6193__auto__.call(null);(statearr_28511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_28511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var inst_28413 = inst_28400.delegate("img","click",inst_28412);var inst_28414 = (function (){var model = inst_28395;var mc_sideContainer = inst_28399;var mc_historyContainer = inst_28398;var err = inst_28394;var tmpl = inst_28396;var img_stylePicture = inst_28401;var elem = inst_28397;var btn_share = inst_28402;var vec__28391 = inst_28393;var mc_bottomContainer = inst_28400;var btn_fullscreen = inst_28403;return ((function (model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,inst_28412,inst_28413,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,inst_28412,inst_28413,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,inst_28412,inst_28413,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function (state_28521){var state_val_28522 = (state_28521[(1)]);if((state_val_28522 === (2)))
{var inst_28519 = (state_28521[(2)]);var state_28521__$1 = state_28521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28521__$1,inst_28519);
} else
{if((state_val_28522 === (1)))
{var inst_28512 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_28513 = that.id;var inst_28514 = [inst_28513];var inst_28515 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28512,inst_28514);var inst_28516 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_28515];var inst_28517 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28516,null));var state_28521__$1 = state_28521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28521__$1,(2),tool.react.OnReact,inst_28517);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,inst_28412,inst_28413,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,inst_28412,inst_28413,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28526 = [null,null,null,null,null,null,null];(statearr_28526[(0)] = state_machine__6178__auto__);
(statearr_28526[(1)] = (1));
return statearr_28526;
});
var state_machine__6178__auto____1 = (function (state_28521){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28521);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28527){if((e28527 instanceof Object))
{var ex__6181__auto__ = e28527;var statearr_28528_28557 = state_28521;(statearr_28528_28557[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28521);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28558 = state_28521;
state_28521 = G__28558;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28521){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,inst_28412,inst_28413,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28529 = f__6193__auto__.call(null);(statearr_28529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_28529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,inst_28412,inst_28413,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,vec__28391,mc_bottomContainer,btn_fullscreen,inst_28393,inst_28394,inst_28395,inst_28396,inst_28397,inst_28398,inst_28399,inst_28400,inst_28401,inst_28402,inst_28403,inst_28404,inst_28405,inst_28406,inst_28407,inst_28408,inst_28409,inst_28410,inst_28411,inst_28412,inst_28413,state_val_28421,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var inst_28415 = inst_28398.delegate("img","click",inst_28414);var inst_28416 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_28417 = [inst_28397,name];var inst_28418 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28416,inst_28417);var state_28420__$1 = (function (){var statearr_28530 = state_28420;(statearr_28530[(7)] = inst_28409);
(statearr_28530[(8)] = inst_28411);
(statearr_28530[(9)] = inst_28407);
(statearr_28530[(10)] = inst_28415);
(statearr_28530[(11)] = inst_28413);
(statearr_28530[(12)] = inst_28405);
return statearr_28530;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28420__$1,inst_28418);
} else
{if((state_val_28421 === (1)))
{var state_28420__$1 = state_28420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28420__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28534 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28534[(0)] = state_machine__6178__auto__);
(statearr_28534[(1)] = (1));
return statearr_28534;
});
var state_machine__6178__auto____1 = (function (state_28420){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28420);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28535){if((e28535 instanceof Object))
{var ex__6181__auto__ = e28535;var statearr_28536_28559 = state_28420;(statearr_28536_28559[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28560 = state_28420;
state_28420 = G__28560;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28420){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28537 = f__6193__auto__.call(null);(statearr_28537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_28537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__28390,map__28390__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__28561){var map__28562 = p__28561;var map__28562__$1 = ((cljs.core.seq_QMARK_.call(null,map__28562))?cljs.core.apply.call(null,cljs.core.hash_map,map__28562):map__28562);var view = map__28562__$1;var elem = cljs.core.get.call(null,map__28562__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_28578 = elem.find("#mc_3dmask");var c__6192__auto___28579 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___28579,mc_3dmask_28578,map__28562,map__28562__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___28579,mc_3dmask_28578,map__28562,map__28562__$1,view,elem){
return (function (state_28568){var state_val_28569 = (state_28568[(1)]);if((state_val_28569 === (2)))
{var inst_28565 = (state_28568[(2)]);var inst_28566 = mc_3dmask_28578.fadeOut((400));var state_28568__$1 = (function (){var statearr_28570 = state_28568;(statearr_28570[(7)] = inst_28565);
return statearr_28570;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28568__$1,inst_28566);
} else
{if((state_val_28569 === (1)))
{var inst_28563 = cljs.core.async.timeout.call(null,(5000));var state_28568__$1 = state_28568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28568__$1,(2),inst_28563);
} else
{return null;
}
}
});})(c__6192__auto___28579,mc_3dmask_28578,map__28562,map__28562__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___28579,mc_3dmask_28578,map__28562,map__28562__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28574 = [null,null,null,null,null,null,null,null];(statearr_28574[(0)] = state_machine__6178__auto__);
(statearr_28574[(1)] = (1));
return statearr_28574;
});
var state_machine__6178__auto____1 = (function (state_28568){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28568);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28575){if((e28575 instanceof Object))
{var ex__6181__auto__ = e28575;var statearr_28576_28580 = state_28568;(statearr_28576_28580[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28568);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28581 = state_28568;
state_28568 = G__28581;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28568){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___28579,mc_3dmask_28578,map__28562,map__28562__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_28577 = f__6193__auto__.call(null);(statearr_28577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___28579);
return statearr_28577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___28579,mc_3dmask_28578,map__28562,map__28562__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__28582,key,modelChan){var map__28583 = p__28582;var map__28583__$1 = ((cljs.core.seq_QMARK_.call(null,map__28583))?cljs.core.apply.call(null,cljs.core.hash_map,map__28583):map__28583);var ctx = map__28583__$1;var tmpl_item = cljs.core.get.call(null,map__28583__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__28583,map__28583__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__28583,map__28583__$1,ctx,tmpl_item){
return (function (state_28595){var state_val_28596 = (state_28595[(1)]);if((state_val_28596 === (2)))
{var inst_28586 = (state_28595[(2)]);var inst_28587 = cljs.core.nth.call(null,inst_28586,(0),null);var inst_28588 = cljs.core.nth.call(null,inst_28586,(1),null);var inst_28589 = $("#tmpl_home");var inst_28590 = inst_28589.tmpl(inst_28588,tmpl_item);var inst_28591 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_28592 = [inst_28590,key];var inst_28593 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28591,inst_28592);var state_28595__$1 = (function (){var statearr_28597 = state_28595;(statearr_28597[(7)] = inst_28587);
return statearr_28597;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28595__$1,inst_28593);
} else
{if((state_val_28596 === (1)))
{var state_28595__$1 = state_28595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28595__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__28583,map__28583__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__28583,map__28583__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28601 = [null,null,null,null,null,null,null,null];(statearr_28601[(0)] = state_machine__6178__auto__);
(statearr_28601[(1)] = (1));
return statearr_28601;
});
var state_machine__6178__auto____1 = (function (state_28595){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28595);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28602){if((e28602 instanceof Object))
{var ex__6181__auto__ = e28602;var statearr_28603_28605 = state_28595;(statearr_28603_28605[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28595);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28606 = state_28595;
state_28595 = G__28606;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28595){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__28583,map__28583__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28604 = f__6193__auto__.call(null);(statearr_28604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_28604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__28583,map__28583__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__28607,key,view){var map__28608 = p__28607;var map__28608__$1 = ((cljs.core.seq_QMARK_.call(null,map__28608))?cljs.core.apply.call(null,cljs.core.hash_map,map__28608):map__28608);var ctx = map__28608__$1;var popupContainer = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__28609 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__28609.appendTo(popupContainer);
G__28609.fadeIn((400));
return G__28609;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__28610,key,p__28611){var map__28612 = p__28610;var map__28612__$1 = ((cljs.core.seq_QMARK_.call(null,map__28612))?cljs.core.apply.call(null,cljs.core.hash_map,map__28612):map__28612);var ctx = map__28612__$1;var container = cljs.core.get.call(null,map__28612__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__28613 = p__28611;var map__28613__$1 = ((cljs.core.seq_QMARK_.call(null,map__28613))?cljs.core.apply.call(null,cljs.core.hash_map,map__28613):map__28613);var view = map__28613__$1;var elem = cljs.core.get.call(null,map__28613__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__28612,map__28612__$1,ctx,container,map__28613,map__28613__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__28612,map__28612__$1,ctx,container,map__28613,map__28613__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__28614,key,modelChan){var map__28615 = p__28614;var map__28615__$1 = ((cljs.core.seq_QMARK_.call(null,map__28615))?cljs.core.apply.call(null,cljs.core.hash_map,map__28615):map__28615);var ctx = map__28615__$1;var tmpl_item = cljs.core.get.call(null,map__28615__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item){
return (function (state_28630){var state_val_28631 = (state_28630[(1)]);if((state_val_28631 === (2)))
{var inst_28618 = (state_28630[(2)]);var inst_28619 = cljs.core.nth.call(null,inst_28618,(0),null);var inst_28620 = cljs.core.nth.call(null,inst_28618,(1),null);var inst_28621 = $("#tmpl_bigPhoto");var inst_28622 = inst_28621.tmpl(inst_28620,tmpl_item);var inst_28623 = inst_28622.find("#mc_bigPhotoFixPosition");var inst_28624 = (function (){var back = inst_28623;var elem = inst_28622;var tmpl = inst_28621;var model = inst_28620;var err = inst_28619;var vec__28616 = inst_28618;return ((function (back,elem,tmpl,model,err,vec__28616,inst_28618,inst_28619,inst_28620,inst_28621,inst_28622,inst_28623,state_val_28631,c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__28616,inst_28618,inst_28619,inst_28620,inst_28621,inst_28622,inst_28623,state_val_28631,c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__28616,inst_28618,inst_28619,inst_28620,inst_28621,inst_28622,inst_28623,state_val_28631,c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item){
return (function (state_28637){var state_val_28638 = (state_28637[(1)]);if((state_val_28638 === (2)))
{var inst_28635 = (state_28637[(2)]);var state_28637__$1 = state_28637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28637__$1,inst_28635);
} else
{if((state_val_28638 === (1)))
{var inst_28632 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_28633 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28632,null));var state_28637__$1 = state_28637;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28637__$1,(2),tool.react.OnReact,inst_28633);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__28616,inst_28618,inst_28619,inst_28620,inst_28621,inst_28622,inst_28623,state_val_28631,c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__28616,inst_28618,inst_28619,inst_28620,inst_28621,inst_28622,inst_28623,state_val_28631,c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28642 = [null,null,null,null,null,null,null];(statearr_28642[(0)] = state_machine__6178__auto__);
(statearr_28642[(1)] = (1));
return statearr_28642;
});
var state_machine__6178__auto____1 = (function (state_28637){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28637);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28643){if((e28643 instanceof Object))
{var ex__6181__auto__ = e28643;var statearr_28644_28654 = state_28637;(statearr_28644_28654[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28637);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28655 = state_28637;
state_28637 = G__28655;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28637){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__28616,inst_28618,inst_28619,inst_28620,inst_28621,inst_28622,inst_28623,state_val_28631,c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28645 = f__6193__auto__.call(null);(statearr_28645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_28645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__28616,inst_28618,inst_28619,inst_28620,inst_28621,inst_28622,inst_28623,state_val_28631,c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__28616,inst_28618,inst_28619,inst_28620,inst_28621,inst_28622,inst_28623,state_val_28631,c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item))
})();var inst_28625 = inst_28623.on("click",inst_28624);var inst_28626 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_28627 = [inst_28622,key];var inst_28628 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_28626,inst_28627);var state_28630__$1 = (function (){var statearr_28646 = state_28630;(statearr_28646[(7)] = inst_28625);
return statearr_28646;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28630__$1,inst_28628);
} else
{if((state_val_28631 === (1)))
{var state_28630__$1 = state_28630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28630__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_28650 = [null,null,null,null,null,null,null,null];(statearr_28650[(0)] = state_machine__6178__auto__);
(statearr_28650[(1)] = (1));
return statearr_28650;
});
var state_machine__6178__auto____1 = (function (state_28630){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_28630);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e28651){if((e28651 instanceof Object))
{var ex__6181__auto__ = e28651;var statearr_28652_28656 = state_28630;(statearr_28652_28656[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28657 = state_28630;
state_28630 = G__28657;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_28630){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_28630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_28653 = f__6193__auto__.call(null);(statearr_28653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_28653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__28615,map__28615__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
