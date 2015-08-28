// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__13455,key,view){var map__13456 = p__13455;var map__13456__$1 = ((cljs.core.seq_QMARK_.call(null,map__13456))?cljs.core.apply.call(null,cljs.core.hash_map,map__13456):map__13456);var ctx = map__13456__$1;var container = cljs.core.get.call(null,map__13456__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__13457_13476 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__13457_13476.appendTo(container);
G__13457_13476.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13456,map__13456__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13456,map__13456__$1,ctx,container){
return (function (state_13467){var state_val_13468 = (state_13467[(1)]);if((state_val_13468 === (2)))
{var inst_13465 = (state_13467[(2)]);var state_13467__$1 = state_13467;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13467__$1,inst_13465);
} else
{if((state_val_13468 === (1)))
{var inst_13458 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_13459 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_13460 = [inst_13459,view];var inst_13461 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13458,inst_13460);var inst_13462 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_13461];var inst_13463 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13462,null));var state_13467__$1 = state_13467;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13467__$1,(2),tool.react.OnReact,inst_13463);
} else
{return null;
}
}
});})(c__6192__auto__,map__13456,map__13456__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13456,map__13456__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13472 = [null,null,null,null,null,null,null];(statearr_13472[(0)] = state_machine__6178__auto__);
(statearr_13472[(1)] = (1));
return statearr_13472;
});
var state_machine__6178__auto____1 = (function (state_13467){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13467);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13473){if((e13473 instanceof Object))
{var ex__6181__auto__ = e13473;var statearr_13474_13477 = state_13467;(statearr_13474_13477[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13467);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13478 = state_13467;
state_13467 = G__13478;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13467){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13456,map__13456__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_13475 = f__6193__auto__.call(null);(statearr_13475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13456,map__13456__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__13479,key,view){var map__13480 = p__13479;var map__13480__$1 = ((cljs.core.seq_QMARK_.call(null,map__13480))?cljs.core.apply.call(null,cljs.core.hash_map,map__13480):map__13480);var ctx = map__13480__$1;var container = cljs.core.get.call(null,map__13480__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__13481 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__13481.remove();
return G__13481;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_13644 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_13645 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_13646 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_13646.off("click");
btn_search_13645.off("click");
mc_modelContainer_13644.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__13563,key,modelChan){var map__13564 = p__13563;var map__13564__$1 = ((cljs.core.seq_QMARK_.call(null,map__13564))?cljs.core.apply.call(null,cljs.core.hash_map,map__13564):map__13564);var ctx = map__13564__$1;var tmpl_item = cljs.core.get.call(null,map__13564__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (state_13585){var state_val_13586 = (state_13585[(1)]);if((state_val_13586 === (2)))
{var inst_13567 = (state_13585[(2)]);var inst_13568 = cljs.core.nth.call(null,inst_13567,(0),null);var inst_13569 = cljs.core.nth.call(null,inst_13567,(1),null);var inst_13570 = $("#tmpl_streetsnap_list");var inst_13571 = inst_13570.tmpl(inst_13569,tmpl_item);var inst_13572 = inst_13571.find("#mc_modelContainer");var inst_13573 = inst_13571.find("#btn_search");var inst_13574 = inst_13571.find("#btn_return");var inst_13575 = (function (){var btn_return = inst_13574;var btn_search = inst_13573;var mc_modelContainer = inst_13572;var elem = inst_13571;var tmpl = inst_13570;var model = inst_13569;var err = inst_13568;var vec__13565 = inst_13567;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (state_13592){var state_val_13593 = (state_13592[(1)]);if((state_val_13593 === (2)))
{var inst_13590 = (state_13592[(2)]);var state_13592__$1 = state_13592;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13592__$1,inst_13590);
} else
{if((state_val_13593 === (1)))
{var inst_13587 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_13588 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13587,null));var state_13592__$1 = state_13592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13592__$1,(2),tool.react.OnReact,inst_13588);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13597 = [null,null,null,null,null,null,null];(statearr_13597[(0)] = state_machine__6178__auto__);
(statearr_13597[(1)] = (1));
return statearr_13597;
});
var state_machine__6178__auto____1 = (function (state_13592){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13592);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13598){if((e13598 instanceof Object))
{var ex__6181__auto__ = e13598;var statearr_13599_13647 = state_13592;(statearr_13599_13647[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13592);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13648 = state_13592;
state_13592 = G__13648;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13592){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13600 = f__6193__auto__.call(null);(statearr_13600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
})();var inst_13576 = inst_13574.click(inst_13575);var inst_13577 = (function (){var btn_return = inst_13574;var btn_search = inst_13573;var mc_modelContainer = inst_13572;var elem = inst_13571;var tmpl = inst_13570;var model = inst_13569;var err = inst_13568;var vec__13565 = inst_13567;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (state_13609){var state_val_13610 = (state_13609[(1)]);if((state_val_13610 === (2)))
{var inst_13607 = (state_13609[(2)]);var state_13609__$1 = state_13609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13609__$1,inst_13607);
} else
{if((state_val_13610 === (1)))
{var inst_13601 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_13602 = [searchKey];var inst_13603 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13601,inst_13602);var inst_13604 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_13603];var inst_13605 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13604,null));var state_13609__$1 = state_13609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13609__$1,(2),tool.react.OnReact,inst_13605);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13614 = [null,null,null,null,null,null,null];(statearr_13614[(0)] = state_machine__6178__auto__);
(statearr_13614[(1)] = (1));
return statearr_13614;
});
var state_machine__6178__auto____1 = (function (state_13609){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13609);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13615){if((e13615 instanceof Object))
{var ex__6181__auto__ = e13615;var statearr_13616_13649 = state_13609;(statearr_13616_13649[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13609);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13650 = state_13609;
state_13609 = G__13650;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13609){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13617 = f__6193__auto__.call(null);(statearr_13617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
})();var inst_13578 = inst_13573.click(inst_13577);var inst_13579 = (function (){var btn_return = inst_13574;var btn_search = inst_13573;var mc_modelContainer = inst_13572;var elem = inst_13571;var tmpl = inst_13570;var model = inst_13569;var err = inst_13568;var vec__13565 = inst_13567;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,inst_13577,inst_13578,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,inst_13577,inst_13578,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,inst_13577,inst_13578,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function (state_13627){var state_val_13628 = (state_13627[(1)]);if((state_val_13628 === (2)))
{var inst_13625 = (state_13627[(2)]);var state_13627__$1 = state_13627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13627__$1,inst_13625);
} else
{if((state_val_13628 === (1)))
{var inst_13618 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_13619 = that.id;var inst_13620 = [inst_13619];var inst_13621 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13618,inst_13620);var inst_13622 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_13621];var inst_13623 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13622,null));var state_13627__$1 = state_13627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13627__$1,(2),tool.react.OnReact,inst_13623);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,inst_13577,inst_13578,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,inst_13577,inst_13578,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13632 = [null,null,null,null,null,null,null];(statearr_13632[(0)] = state_machine__6178__auto__);
(statearr_13632[(1)] = (1));
return statearr_13632;
});
var state_machine__6178__auto____1 = (function (state_13627){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13627);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13633){if((e13633 instanceof Object))
{var ex__6181__auto__ = e13633;var statearr_13634_13651 = state_13627;(statearr_13634_13651[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13627);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13652 = state_13627;
state_13627 = G__13652;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13627){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,inst_13577,inst_13578,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13635 = f__6193__auto__.call(null);(statearr_13635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,inst_13577,inst_13578,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__13565,inst_13567,inst_13568,inst_13569,inst_13570,inst_13571,inst_13572,inst_13573,inst_13574,inst_13575,inst_13576,inst_13577,inst_13578,state_val_13586,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
})();var inst_13580 = inst_13572.delegate("div[modelFrame]","click",inst_13579);var inst_13581 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_13582 = [inst_13571,name];var inst_13583 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13581,inst_13582);var state_13585__$1 = (function (){var statearr_13636 = state_13585;(statearr_13636[(7)] = inst_13576);
(statearr_13636[(8)] = inst_13580);
(statearr_13636[(9)] = inst_13578);
return statearr_13636;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13585__$1,inst_13583);
} else
{if((state_val_13586 === (1)))
{var state_13585__$1 = state_13585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13585__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13640 = [null,null,null,null,null,null,null,null,null,null];(statearr_13640[(0)] = state_machine__6178__auto__);
(statearr_13640[(1)] = (1));
return statearr_13640;
});
var state_machine__6178__auto____1 = (function (state_13585){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13585);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13641){if((e13641 instanceof Object))
{var ex__6181__auto__ = e13641;var statearr_13642_13653 = state_13585;(statearr_13642_13653[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13585);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13654 = state_13585;
state_13585 = G__13654;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13585){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13643 = f__6193__auto__.call(null);(statearr_13643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13564,map__13564__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__13840){var map__13841 = p__13840;var map__13841__$1 = ((cljs.core.seq_QMARK_.call(null,map__13841))?cljs.core.apply.call(null,cljs.core.hash_map,map__13841):map__13841);var view = map__13841__$1;var elem = cljs.core.get.call(null,map__13841__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_14025 = elem.find("#mc_historyContainer");var mc_sideContainer_14026 = elem.find("#mc_sideContainer");var mc_bottomContainer_14027 = elem.find("#mc_bottomContainer");var img_stylePicture_14028 = elem.find("#img_stylePicture");var btn_share_14029 = elem.find("#btn_share");var btn_fullscreen_14030 = elem.find("#btn_fullscreen");var btn_more_14031 = elem.find("#btn_more");mc_modelContainer_14025.undelegate("img","click");
mc_sideContainer_14026.undelegate("img","click");
mc_bottomContainer_14027.undelegate("img","click");
img_stylePicture_14028.off("click");
btn_share_14029.off("click");
btn_fullscreen_14030.off("click");
btn_more_14031.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__13842){var map__13843 = p__13842;var map__13843__$1 = ((cljs.core.seq_QMARK_.call(null,map__13843))?cljs.core.apply.call(null,cljs.core.hash_map,map__13843):map__13843);var view = map__13843__$1;var elem = cljs.core.get.call(null,map__13843__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_14032 = elem.find("#mc_3dmask");var c__6192__auto___14033 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___14033,mc_3dmask_14032,map__13843,map__13843__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___14033,mc_3dmask_14032,map__13843,map__13843__$1,view,elem){
return (function (state_13849){var state_val_13850 = (state_13849[(1)]);if((state_val_13850 === (2)))
{var inst_13846 = (state_13849[(2)]);var inst_13847 = mc_3dmask_14032.fadeOut((400));var state_13849__$1 = (function (){var statearr_13851 = state_13849;(statearr_13851[(7)] = inst_13846);
return statearr_13851;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13849__$1,inst_13847);
} else
{if((state_val_13850 === (1)))
{var inst_13844 = cljs.core.async.timeout.call(null,(3000));var state_13849__$1 = state_13849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13849__$1,(2),inst_13844);
} else
{return null;
}
}
});})(c__6192__auto___14033,mc_3dmask_14032,map__13843,map__13843__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___14033,mc_3dmask_14032,map__13843,map__13843__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13855 = [null,null,null,null,null,null,null,null];(statearr_13855[(0)] = state_machine__6178__auto__);
(statearr_13855[(1)] = (1));
return statearr_13855;
});
var state_machine__6178__auto____1 = (function (state_13849){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13849);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13856){if((e13856 instanceof Object))
{var ex__6181__auto__ = e13856;var statearr_13857_14034 = state_13849;(statearr_13857_14034[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13849);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14035 = state_13849;
state_13849 = G__14035;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13849){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___14033,mc_3dmask_14032,map__13843,map__13843__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_13858 = f__6193__auto__.call(null);(statearr_13858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14033);
return statearr_13858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___14033,mc_3dmask_14032,map__13843,map__13843__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__13859,key,modelChan){var map__13860 = p__13859;var map__13860__$1 = ((cljs.core.seq_QMARK_.call(null,map__13860))?cljs.core.apply.call(null,cljs.core.hash_map,map__13860):map__13860);var ctx = map__13860__$1;var tmpl_item = cljs.core.get.call(null,map__13860__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (state_13893){var state_val_13894 = (state_13893[(1)]);if((state_val_13894 === (2)))
{var inst_13863 = (state_13893[(2)]);var inst_13864 = cljs.core.nth.call(null,inst_13863,(0),null);var inst_13865 = cljs.core.nth.call(null,inst_13863,(1),null);var inst_13866 = $("#tmpl_streetsnap");var inst_13867 = inst_13866.tmpl(inst_13865,tmpl_item);var inst_13868 = inst_13867.find("#mc_historyContainer");var inst_13869 = inst_13867.find("#mc_sideContainer");var inst_13870 = inst_13867.find("#mc_bottomContainer");var inst_13871 = inst_13867.find("#img_stylePicture");var inst_13872 = inst_13867.find("#btn_share");var inst_13873 = inst_13867.find("#btn_fullscreen");var inst_13874 = inst_13867.find("#btn_more");var inst_13875 = (function (){var vec__13861 = inst_13863;var model = inst_13865;var btn_more = inst_13874;var mc_sideContainer = inst_13869;var mc_historyContainer = inst_13868;var err = inst_13864;var tmpl = inst_13866;var img_stylePicture = inst_13871;var elem = inst_13867;var btn_share = inst_13872;var mc_bottomContainer = inst_13870;var btn_fullscreen = inst_13873;return ((function (vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (state_13900){var state_val_13901 = (state_13900[(1)]);if((state_val_13901 === (2)))
{var inst_13898 = (state_13900[(2)]);var state_13900__$1 = state_13900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13900__$1,inst_13898);
} else
{if((state_val_13901 === (1)))
{var inst_13895 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_13896 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13895,null));var state_13900__$1 = state_13900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13900__$1,(2),tool.react.OnReact,inst_13896);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13905 = [null,null,null,null,null,null,null];(statearr_13905[(0)] = state_machine__6178__auto__);
(statearr_13905[(1)] = (1));
return statearr_13905;
});
var state_machine__6178__auto____1 = (function (state_13900){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13900);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13906){if((e13906 instanceof Object))
{var ex__6181__auto__ = e13906;var statearr_13907_14036 = state_13900;(statearr_13907_14036[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14037 = state_13900;
state_13900 = G__14037;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13900){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13908 = f__6193__auto__.call(null);(statearr_13908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var inst_13876 = inst_13874.on("click",inst_13875);var inst_13877 = (function (){var vec__13861 = inst_13863;var model = inst_13865;var btn_more = inst_13874;var mc_sideContainer = inst_13869;var mc_historyContainer = inst_13868;var err = inst_13864;var tmpl = inst_13866;var img_stylePicture = inst_13871;var elem = inst_13867;var btn_share = inst_13872;var mc_bottomContainer = inst_13870;var btn_fullscreen = inst_13873;return ((function (vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (state_13917){var state_val_13918 = (state_13917[(1)]);if((state_val_13918 === (2)))
{var inst_13915 = (state_13917[(2)]);var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13917__$1,inst_13915);
} else
{if((state_val_13918 === (1)))
{var inst_13909 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_13910 = [model];var inst_13911 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13909,inst_13910);var inst_13912 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_13911];var inst_13913 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13912,null));var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13917__$1,(2),tool.react.OnReact,inst_13913);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13922 = [null,null,null,null,null,null,null];(statearr_13922[(0)] = state_machine__6178__auto__);
(statearr_13922[(1)] = (1));
return statearr_13922;
});
var state_machine__6178__auto____1 = (function (state_13917){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13917);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13923){if((e13923 instanceof Object))
{var ex__6181__auto__ = e13923;var statearr_13924_14038 = state_13917;(statearr_13924_14038[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14039 = state_13917;
state_13917 = G__14039;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13917){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13925 = f__6193__auto__.call(null);(statearr_13925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var inst_13878 = inst_13873.on("click",inst_13877);var inst_13879 = (function (){var vec__13861 = inst_13863;var model = inst_13865;var btn_more = inst_13874;var mc_sideContainer = inst_13869;var mc_historyContainer = inst_13868;var err = inst_13864;var tmpl = inst_13866;var img_stylePicture = inst_13871;var elem = inst_13867;var btn_share = inst_13872;var mc_bottomContainer = inst_13870;var btn_fullscreen = inst_13873;return ((function (vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (state_13935){var state_val_13936 = (state_13935[(1)]);if((state_val_13936 === (2)))
{var inst_13933 = (state_13935[(2)]);var state_13935__$1 = state_13935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13935__$1,inst_13933);
} else
{if((state_val_13936 === (1)))
{var inst_13926 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_13927 = model.styleUrl;var inst_13928 = [inst_13927];var inst_13929 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13926,inst_13928);var inst_13930 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_13929];var inst_13931 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13930,null));var state_13935__$1 = state_13935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13935__$1,(2),tool.react.OnReact,inst_13931);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13940 = [null,null,null,null,null,null,null];(statearr_13940[(0)] = state_machine__6178__auto__);
(statearr_13940[(1)] = (1));
return statearr_13940;
});
var state_machine__6178__auto____1 = (function (state_13935){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13935);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13941){if((e13941 instanceof Object))
{var ex__6181__auto__ = e13941;var statearr_13942_14040 = state_13935;(statearr_13942_14040[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13935);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14041 = state_13935;
state_13935 = G__14041;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13935){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13943 = f__6193__auto__.call(null);(statearr_13943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var inst_13880 = inst_13871.on("click",inst_13879);var inst_13881 = (function (){var vec__13861 = inst_13863;var model = inst_13865;var btn_more = inst_13874;var mc_sideContainer = inst_13869;var mc_historyContainer = inst_13868;var err = inst_13864;var tmpl = inst_13866;var img_stylePicture = inst_13871;var elem = inst_13867;var btn_share = inst_13872;var mc_bottomContainer = inst_13870;var btn_fullscreen = inst_13873;return ((function (vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (state_13952){var state_val_13953 = (state_13952[(1)]);if((state_val_13953 === (2)))
{var inst_13950 = (state_13952[(2)]);var state_13952__$1 = state_13952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13952__$1,inst_13950);
} else
{if((state_val_13953 === (1)))
{var inst_13944 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_13945 = [model];var inst_13946 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13944,inst_13945);var inst_13947 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_13946];var inst_13948 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13947,null));var state_13952__$1 = state_13952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13952__$1,(2),tool.react.OnReact,inst_13948);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13957 = [null,null,null,null,null,null,null];(statearr_13957[(0)] = state_machine__6178__auto__);
(statearr_13957[(1)] = (1));
return statearr_13957;
});
var state_machine__6178__auto____1 = (function (state_13952){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13952);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13958){if((e13958 instanceof Object))
{var ex__6181__auto__ = e13958;var statearr_13959_14042 = state_13952;(statearr_13959_14042[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13952);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14043 = state_13952;
state_13952 = G__14043;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13952){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13960 = f__6193__auto__.call(null);(statearr_13960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var inst_13882 = inst_13872.on("click",inst_13881);var inst_13883 = (function (){var vec__13861 = inst_13863;var model = inst_13865;var btn_more = inst_13874;var mc_sideContainer = inst_13869;var mc_historyContainer = inst_13868;var err = inst_13864;var tmpl = inst_13866;var img_stylePicture = inst_13871;var elem = inst_13867;var btn_share = inst_13872;var mc_bottomContainer = inst_13870;var btn_fullscreen = inst_13873;return ((function (vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (state_13971){var state_val_13972 = (state_13971[(1)]);if((state_val_13972 === (2)))
{var inst_13969 = (state_13971[(2)]);var state_13971__$1 = state_13971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13971__$1,inst_13969);
} else
{if((state_val_13972 === (1)))
{var inst_13961 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_13962 = that.id;var inst_13963 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13962));var inst_13964 = [inst_13963];var inst_13965 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13961,inst_13964);var inst_13966 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_13965];var inst_13967 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13966,null));var state_13971__$1 = state_13971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13971__$1,(2),tool.react.OnReact,inst_13967);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13976 = [null,null,null,null,null,null,null];(statearr_13976[(0)] = state_machine__6178__auto__);
(statearr_13976[(1)] = (1));
return statearr_13976;
});
var state_machine__6178__auto____1 = (function (state_13971){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13971);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13977){if((e13977 instanceof Object))
{var ex__6181__auto__ = e13977;var statearr_13978_14044 = state_13971;(statearr_13978_14044[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13971);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14045 = state_13971;
state_13971 = G__14045;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13971){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13979 = f__6193__auto__.call(null);(statearr_13979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var inst_13884 = inst_13869.delegate("img","click",inst_13883);var inst_13885 = (function (){var vec__13861 = inst_13863;var model = inst_13865;var btn_more = inst_13874;var mc_sideContainer = inst_13869;var mc_historyContainer = inst_13868;var err = inst_13864;var tmpl = inst_13866;var img_stylePicture = inst_13871;var elem = inst_13867;var btn_share = inst_13872;var mc_bottomContainer = inst_13870;var btn_fullscreen = inst_13873;return ((function (vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (state_13990){var state_val_13991 = (state_13990[(1)]);if((state_val_13991 === (2)))
{var inst_13988 = (state_13990[(2)]);var state_13990__$1 = state_13990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13990__$1,inst_13988);
} else
{if((state_val_13991 === (1)))
{var inst_13980 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_13981 = that.id;var inst_13982 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13981));var inst_13983 = [inst_13982];var inst_13984 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13980,inst_13983);var inst_13985 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_13984];var inst_13986 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13985,null));var state_13990__$1 = state_13990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13990__$1,(2),tool.react.OnReact,inst_13986);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13995 = [null,null,null,null,null,null,null];(statearr_13995[(0)] = state_machine__6178__auto__);
(statearr_13995[(1)] = (1));
return statearr_13995;
});
var state_machine__6178__auto____1 = (function (state_13990){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13990);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13996){if((e13996 instanceof Object))
{var ex__6181__auto__ = e13996;var statearr_13997_14046 = state_13990;(statearr_13997_14046[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14047 = state_13990;
state_13990 = G__14047;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13990){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_13998 = f__6193__auto__.call(null);(statearr_13998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_13998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var inst_13886 = inst_13870.delegate("img","click",inst_13885);var inst_13887 = (function (){var vec__13861 = inst_13863;var model = inst_13865;var btn_more = inst_13874;var mc_sideContainer = inst_13869;var mc_historyContainer = inst_13868;var err = inst_13864;var tmpl = inst_13866;var img_stylePicture = inst_13871;var elem = inst_13867;var btn_share = inst_13872;var mc_bottomContainer = inst_13870;var btn_fullscreen = inst_13873;return ((function (vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,inst_13885,inst_13886,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,inst_13885,inst_13886,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,inst_13885,inst_13886,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function (state_14008){var state_val_14009 = (state_14008[(1)]);if((state_val_14009 === (2)))
{var inst_14006 = (state_14008[(2)]);var state_14008__$1 = state_14008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14008__$1,inst_14006);
} else
{if((state_val_14009 === (1)))
{var inst_13999 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14000 = that.id;var inst_14001 = [inst_14000];var inst_14002 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13999,inst_14001);var inst_14003 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_14002];var inst_14004 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14003,null));var state_14008__$1 = state_14008;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14008__$1,(2),tool.react.OnReact,inst_14004);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,inst_13885,inst_13886,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,inst_13885,inst_13886,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14013 = [null,null,null,null,null,null,null];(statearr_14013[(0)] = state_machine__6178__auto__);
(statearr_14013[(1)] = (1));
return statearr_14013;
});
var state_machine__6178__auto____1 = (function (state_14008){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14008);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14014){if((e14014 instanceof Object))
{var ex__6181__auto__ = e14014;var statearr_14015_14048 = state_14008;(statearr_14015_14048[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14008);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14049 = state_14008;
state_14008 = G__14049;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14008){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,inst_13885,inst_13886,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14016 = f__6193__auto__.call(null);(statearr_14016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,inst_13885,inst_13886,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__13861,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_13863,inst_13864,inst_13865,inst_13866,inst_13867,inst_13868,inst_13869,inst_13870,inst_13871,inst_13872,inst_13873,inst_13874,inst_13875,inst_13876,inst_13877,inst_13878,inst_13879,inst_13880,inst_13881,inst_13882,inst_13883,inst_13884,inst_13885,inst_13886,state_val_13894,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var inst_13888 = inst_13868.delegate("img","click",inst_13887);var inst_13889 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_13890 = [inst_13867,name];var inst_13891 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13889,inst_13890);var state_13893__$1 = (function (){var statearr_14017 = state_13893;(statearr_14017[(7)] = inst_13888);
(statearr_14017[(8)] = inst_13880);
(statearr_14017[(9)] = inst_13882);
(statearr_14017[(10)] = inst_13886);
(statearr_14017[(11)] = inst_13884);
(statearr_14017[(12)] = inst_13878);
(statearr_14017[(13)] = inst_13876);
return statearr_14017;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13893__$1,inst_13891);
} else
{if((state_val_13894 === (1)))
{var state_13893__$1 = state_13893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13893__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14021[(0)] = state_machine__6178__auto__);
(statearr_14021[(1)] = (1));
return statearr_14021;
});
var state_machine__6178__auto____1 = (function (state_13893){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13893);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14022){if((e14022 instanceof Object))
{var ex__6181__auto__ = e14022;var statearr_14023_14050 = state_13893;(statearr_14023_14050[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14051 = state_13893;
state_13893 = G__14051;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13893){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14024 = f__6193__auto__.call(null);(statearr_14024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__13860,map__13860__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__14052){var map__14053 = p__14052;var map__14053__$1 = ((cljs.core.seq_QMARK_.call(null,map__14053))?cljs.core.apply.call(null,cljs.core.hash_map,map__14053):map__14053);var view = map__14053__$1;var elem = cljs.core.get.call(null,map__14053__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_14069 = elem.find("#mc_3dmask");var c__6192__auto___14070 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___14070,mc_3dmask_14069,map__14053,map__14053__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___14070,mc_3dmask_14069,map__14053,map__14053__$1,view,elem){
return (function (state_14059){var state_val_14060 = (state_14059[(1)]);if((state_val_14060 === (2)))
{var inst_14056 = (state_14059[(2)]);var inst_14057 = mc_3dmask_14069.fadeOut((400));var state_14059__$1 = (function (){var statearr_14061 = state_14059;(statearr_14061[(7)] = inst_14056);
return statearr_14061;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14059__$1,inst_14057);
} else
{if((state_val_14060 === (1)))
{var inst_14054 = cljs.core.async.timeout.call(null,(3000));var state_14059__$1 = state_14059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14059__$1,(2),inst_14054);
} else
{return null;
}
}
});})(c__6192__auto___14070,mc_3dmask_14069,map__14053,map__14053__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___14070,mc_3dmask_14069,map__14053,map__14053__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14065 = [null,null,null,null,null,null,null,null];(statearr_14065[(0)] = state_machine__6178__auto__);
(statearr_14065[(1)] = (1));
return statearr_14065;
});
var state_machine__6178__auto____1 = (function (state_14059){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14059);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14066){if((e14066 instanceof Object))
{var ex__6181__auto__ = e14066;var statearr_14067_14071 = state_14059;(statearr_14067_14071[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14059);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14072 = state_14059;
state_14059 = G__14072;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14059){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___14070,mc_3dmask_14069,map__14053,map__14053__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_14068 = f__6193__auto__.call(null);(statearr_14068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14070);
return statearr_14068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___14070,mc_3dmask_14069,map__14053,map__14053__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__14073,key,modelChan){var map__14074 = p__14073;var map__14074__$1 = ((cljs.core.seq_QMARK_.call(null,map__14074))?cljs.core.apply.call(null,cljs.core.hash_map,map__14074):map__14074);var ctx = map__14074__$1;var tmpl_item = cljs.core.get.call(null,map__14074__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__14074,map__14074__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__14074,map__14074__$1,ctx,tmpl_item){
return (function (state_14086){var state_val_14087 = (state_14086[(1)]);if((state_val_14087 === (2)))
{var inst_14077 = (state_14086[(2)]);var inst_14078 = cljs.core.nth.call(null,inst_14077,(0),null);var inst_14079 = cljs.core.nth.call(null,inst_14077,(1),null);var inst_14080 = $("#tmpl_home");var inst_14081 = inst_14080.tmpl(inst_14079,tmpl_item);var inst_14082 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_14083 = [inst_14081,key];var inst_14084 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14082,inst_14083);var state_14086__$1 = (function (){var statearr_14088 = state_14086;(statearr_14088[(7)] = inst_14078);
return statearr_14088;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14086__$1,inst_14084);
} else
{if((state_val_14087 === (1)))
{var state_14086__$1 = state_14086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14086__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__14074,map__14074__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__14074,map__14074__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14092 = [null,null,null,null,null,null,null,null];(statearr_14092[(0)] = state_machine__6178__auto__);
(statearr_14092[(1)] = (1));
return statearr_14092;
});
var state_machine__6178__auto____1 = (function (state_14086){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14086);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14093){if((e14093 instanceof Object))
{var ex__6181__auto__ = e14093;var statearr_14094_14096 = state_14086;(statearr_14094_14096[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14086);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14097 = state_14086;
state_14086 = G__14097;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14086){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__14074,map__14074__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14095 = f__6193__auto__.call(null);(statearr_14095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14095;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__14074,map__14074__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__14098,key,view){var map__14099 = p__14098;var map__14099__$1 = ((cljs.core.seq_QMARK_.call(null,map__14099))?cljs.core.apply.call(null,cljs.core.hash_map,map__14099):map__14099);var ctx = map__14099__$1;var popupContainer = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__14100 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__14100.appendTo(popupContainer);
G__14100.fadeIn((400));
return G__14100;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__14101,key,p__14102){var map__14103 = p__14101;var map__14103__$1 = ((cljs.core.seq_QMARK_.call(null,map__14103))?cljs.core.apply.call(null,cljs.core.hash_map,map__14103):map__14103);var ctx = map__14103__$1;var container = cljs.core.get.call(null,map__14103__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__14104 = p__14102;var map__14104__$1 = ((cljs.core.seq_QMARK_.call(null,map__14104))?cljs.core.apply.call(null,cljs.core.hash_map,map__14104):map__14104);var view = map__14104__$1;var elem = cljs.core.get.call(null,map__14104__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__14103,map__14103__$1,ctx,container,map__14104,map__14104__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__14103,map__14103__$1,ctx,container,map__14104,map__14104__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__14105,key,modelChan){var map__14106 = p__14105;var map__14106__$1 = ((cljs.core.seq_QMARK_.call(null,map__14106))?cljs.core.apply.call(null,cljs.core.hash_map,map__14106):map__14106);var ctx = map__14106__$1;var media_type = cljs.core.get.call(null,map__14106__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var tmpl_item = cljs.core.get.call(null,map__14106__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item){
return (function (state_14159){var state_val_14160 = (state_14159[(1)]);if((state_val_14160 === (7)))
{var inst_14129 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),media_type);var state_14159__$1 = state_14159;if(inst_14129)
{var statearr_14161_14196 = state_14159__$1;(statearr_14161_14196[(1)] = (9));
} else
{var statearr_14162_14197 = state_14159__$1;(statearr_14162_14197[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (1)))
{var state_14159__$1 = state_14159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14159__$1,(2),modelChan);
} else
{if((state_val_14160 === (4)))
{var inst_14122 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),media_type);var state_14159__$1 = state_14159;if(inst_14122)
{var statearr_14163_14198 = state_14159__$1;(statearr_14163_14198[(1)] = (6));
} else
{var statearr_14164_14199 = state_14159__$1;(statearr_14164_14199[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (6)))
{var inst_14113 = (state_14159[(7)]);var inst_14124 = inst_14113.width();var inst_14125 = inst_14113.height();var inst_14126 = [inst_14124,inst_14125];var inst_14127 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14126,null));var state_14159__$1 = state_14159;var statearr_14165_14200 = state_14159__$1;(statearr_14165_14200[(2)] = inst_14127);
(statearr_14165_14200[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (3)))
{var inst_14119 = [(800),(600)];var inst_14120 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14119,null));var state_14159__$1 = state_14159;var statearr_14166_14201 = state_14159__$1;(statearr_14166_14201[(2)] = inst_14120);
(statearr_14166_14201[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (2)))
{var inst_14110 = (state_14159[(8)]);var inst_14110__$1 = (state_14159[(2)]);var inst_14111 = cljs.core.nth.call(null,inst_14110__$1,(0),null);var inst_14112 = cljs.core.nth.call(null,inst_14110__$1,(1),null);var inst_14113 = $("body");var inst_14117 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),media_type);var state_14159__$1 = (function (){var statearr_14167 = state_14159;(statearr_14167[(9)] = inst_14112);
(statearr_14167[(8)] = inst_14110__$1);
(statearr_14167[(7)] = inst_14113);
(statearr_14167[(10)] = inst_14111);
return statearr_14167;
})();if(inst_14117)
{var statearr_14168_14202 = state_14159__$1;(statearr_14168_14202[(1)] = (3));
} else
{var statearr_14169_14203 = state_14159__$1;(statearr_14169_14203[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (11)))
{var inst_14141 = (state_14159[(2)]);var state_14159__$1 = state_14159;var statearr_14170_14204 = state_14159__$1;(statearr_14170_14204[(2)] = inst_14141);
(statearr_14170_14204[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (9)))
{var inst_14113 = (state_14159[(7)]);var inst_14131 = inst_14113.width();var inst_14132 = inst_14113.height();var inst_14133 = [inst_14131,inst_14132];var inst_14134 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14133,null));var state_14159__$1 = state_14159;var statearr_14171_14205 = state_14159__$1;(statearr_14171_14205[(2)] = inst_14134);
(statearr_14171_14205[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (5)))
{var inst_14112 = (state_14159[(9)]);var inst_14110 = (state_14159[(8)]);var inst_14113 = (state_14159[(7)]);var inst_14111 = (state_14159[(10)]);var inst_14145 = (state_14159[(2)]);var inst_14146 = cljs.core.nth.call(null,inst_14145,(0),null);var inst_14147 = cljs.core.nth.call(null,inst_14145,(1),null);var inst_14148 = inst_14112.url;var inst_14149 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14148)+"?Width="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14146)+"&Height="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14147));var inst_14150 = inst_14112.url = inst_14149;var inst_14151 = $("#tmpl_bigPhoto");var inst_14152 = inst_14151.tmpl(inst_14112,tmpl_item);var inst_14153 = (function (){var model = inst_14112;var vec__14108 = inst_14145;var _ = inst_14150;var err = inst_14111;var tmpl = inst_14151;var pw = inst_14146;var elem = inst_14152;var root_elem = inst_14113;var vec__14107 = inst_14110;var back = inst_14152;var ph = inst_14147;return ((function (model,vec__14108,_,err,tmpl,pw,elem,root_elem,vec__14107,back,ph,inst_14112,inst_14110,inst_14113,inst_14111,inst_14145,inst_14146,inst_14147,inst_14148,inst_14149,inst_14150,inst_14151,inst_14152,state_val_14160,c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,vec__14108,_,err,tmpl,pw,elem,root_elem,vec__14107,back,ph,inst_14112,inst_14110,inst_14113,inst_14111,inst_14145,inst_14146,inst_14147,inst_14148,inst_14149,inst_14150,inst_14151,inst_14152,state_val_14160,c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,vec__14108,_,err,tmpl,pw,elem,root_elem,vec__14107,back,ph,inst_14112,inst_14110,inst_14113,inst_14111,inst_14145,inst_14146,inst_14147,inst_14148,inst_14149,inst_14150,inst_14151,inst_14152,state_val_14160,c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item){
return (function (state_14177){var state_val_14178 = (state_14177[(1)]);if((state_val_14178 === (2)))
{var inst_14175 = (state_14177[(2)]);var state_14177__$1 = state_14177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14177__$1,inst_14175);
} else
{if((state_val_14178 === (1)))
{var inst_14172 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_14173 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14172,null));var state_14177__$1 = state_14177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14177__$1,(2),tool.react.OnReact,inst_14173);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,vec__14108,_,err,tmpl,pw,elem,root_elem,vec__14107,back,ph,inst_14112,inst_14110,inst_14113,inst_14111,inst_14145,inst_14146,inst_14147,inst_14148,inst_14149,inst_14150,inst_14151,inst_14152,state_val_14160,c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,vec__14108,_,err,tmpl,pw,elem,root_elem,vec__14107,back,ph,inst_14112,inst_14110,inst_14113,inst_14111,inst_14145,inst_14146,inst_14147,inst_14148,inst_14149,inst_14150,inst_14151,inst_14152,state_val_14160,c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item){
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
{var ex__6181__auto__ = e14183;var statearr_14184_14206 = state_14177;(statearr_14184_14206[(5)] = ex__6181__auto__);
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
var G__14207 = state_14177;
state_14177 = G__14207;
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
;})(switch__6177__auto__,c__6192__auto____$1,model,vec__14108,_,err,tmpl,pw,elem,root_elem,vec__14107,back,ph,inst_14112,inst_14110,inst_14113,inst_14111,inst_14145,inst_14146,inst_14147,inst_14148,inst_14149,inst_14150,inst_14151,inst_14152,state_val_14160,c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14185 = f__6193__auto__.call(null);(statearr_14185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_14185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,vec__14108,_,err,tmpl,pw,elem,root_elem,vec__14107,back,ph,inst_14112,inst_14110,inst_14113,inst_14111,inst_14145,inst_14146,inst_14147,inst_14148,inst_14149,inst_14150,inst_14151,inst_14152,state_val_14160,c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,vec__14108,_,err,tmpl,pw,elem,root_elem,vec__14107,back,ph,inst_14112,inst_14110,inst_14113,inst_14111,inst_14145,inst_14146,inst_14147,inst_14148,inst_14149,inst_14150,inst_14151,inst_14152,state_val_14160,c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item))
})();var inst_14154 = inst_14152.on("click",inst_14153);var inst_14155 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_14156 = [inst_14152,key];var inst_14157 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14155,inst_14156);var state_14159__$1 = (function (){var statearr_14186 = state_14159;(statearr_14186[(11)] = inst_14154);
return statearr_14186;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14159__$1,inst_14157);
} else
{if((state_val_14160 === (10)))
{var inst_14113 = (state_14159[(7)]);var inst_14136 = inst_14113.width();var inst_14137 = inst_14113.height();var inst_14138 = [inst_14136,inst_14137];var inst_14139 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14138,null));var state_14159__$1 = state_14159;var statearr_14187_14208 = state_14159__$1;(statearr_14187_14208[(2)] = inst_14139);
(statearr_14187_14208[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (8)))
{var inst_14143 = (state_14159[(2)]);var state_14159__$1 = state_14159;var statearr_14188_14209 = state_14159__$1;(statearr_14188_14209[(2)] = inst_14143);
(statearr_14188_14209[(1)] = (5));
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
});})(c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14192 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14192[(0)] = state_machine__6178__auto__);
(statearr_14192[(1)] = (1));
return statearr_14192;
});
var state_machine__6178__auto____1 = (function (state_14159){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14159);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14193){if((e14193 instanceof Object))
{var ex__6181__auto__ = e14193;var statearr_14194_14210 = state_14159;(statearr_14194_14210[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14159);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14211 = state_14159;
state_14159 = G__14211;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14159){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14195 = f__6193__auto__.call(null);(statearr_14195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__14106,map__14106__$1,ctx,media_type,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__14212,key,modelChan){var map__14213 = p__14212;var map__14213__$1 = ((cljs.core.seq_QMARK_.call(null,map__14213))?cljs.core.apply.call(null,cljs.core.hash_map,map__14213):map__14213);var ctx = map__14213__$1;var tmpl_item = cljs.core.get.call(null,map__14213__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__14213,map__14213__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__14213,map__14213__$1,ctx,tmpl_item){
return (function (state_14225){var state_val_14226 = (state_14225[(1)]);if((state_val_14226 === (2)))
{var inst_14216 = (state_14225[(2)]);var inst_14217 = cljs.core.nth.call(null,inst_14216,(0),null);var inst_14218 = cljs.core.nth.call(null,inst_14216,(1),null);var inst_14219 = $("#tmpl_news");var inst_14220 = inst_14219.tmpl(inst_14218,tmpl_item);var inst_14221 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_14222 = [inst_14220,key];var inst_14223 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14221,inst_14222);var state_14225__$1 = (function (){var statearr_14227 = state_14225;(statearr_14227[(7)] = inst_14217);
return statearr_14227;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14225__$1,inst_14223);
} else
{if((state_val_14226 === (1)))
{var state_14225__$1 = state_14225;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14225__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__14213,map__14213__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__14213,map__14213__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14231 = [null,null,null,null,null,null,null,null];(statearr_14231[(0)] = state_machine__6178__auto__);
(statearr_14231[(1)] = (1));
return statearr_14231;
});
var state_machine__6178__auto____1 = (function (state_14225){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14225);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14232){if((e14232 instanceof Object))
{var ex__6181__auto__ = e14232;var statearr_14233_14235 = state_14225;(statearr_14233_14235[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14225);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14236 = state_14225;
state_14225 = G__14236;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14225){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__14213,map__14213__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_14234 = f__6193__auto__.call(null);(statearr_14234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__14213,map__14213__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
