// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__21351,key,view){var map__21352 = p__21351;var map__21352__$1 = ((cljs.core.seq_QMARK_.call(null,map__21352))?cljs.core.apply.call(null,cljs.core.hash_map,map__21352):map__21352);var ctx = map__21352__$1;var container = cljs.core.get.call(null,map__21352__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__21353_21372 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__21353_21372.appendTo(container);
G__21353_21372.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__21352,map__21352__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__21352,map__21352__$1,ctx,container){
return (function (state_21363){var state_val_21364 = (state_21363[(1)]);if((state_val_21364 === (2)))
{var inst_21361 = (state_21363[(2)]);var state_21363__$1 = state_21363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21363__$1,inst_21361);
} else
{if((state_val_21364 === (1)))
{var inst_21354 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_21355 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_21356 = [inst_21355,view];var inst_21357 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21354,inst_21356);var inst_21358 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_21357];var inst_21359 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21358,null));var state_21363__$1 = state_21363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21363__$1,(2),tool.react.OnReact,inst_21359);
} else
{return null;
}
}
});})(c__6192__auto__,map__21352,map__21352__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__21352,map__21352__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21368 = [null,null,null,null,null,null,null];(statearr_21368[(0)] = state_machine__6178__auto__);
(statearr_21368[(1)] = (1));
return statearr_21368;
});
var state_machine__6178__auto____1 = (function (state_21363){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21363);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21369){if((e21369 instanceof Object))
{var ex__6181__auto__ = e21369;var statearr_21370_21373 = state_21363;(statearr_21370_21373[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21363);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21374 = state_21363;
state_21363 = G__21374;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21363){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__21352,map__21352__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_21371 = f__6193__auto__.call(null);(statearr_21371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__21352,map__21352__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__21375,key,view){var map__21376 = p__21375;var map__21376__$1 = ((cljs.core.seq_QMARK_.call(null,map__21376))?cljs.core.apply.call(null,cljs.core.hash_map,map__21376):map__21376);var ctx = map__21376__$1;var container = cljs.core.get.call(null,map__21376__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__21377 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__21377.remove();
return G__21377;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_21540 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_21541 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_21542 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_21542.off("click");
btn_search_21541.off("click");
mc_modelContainer_21540.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__21459,key,modelChan){var map__21460 = p__21459;var map__21460__$1 = ((cljs.core.seq_QMARK_.call(null,map__21460))?cljs.core.apply.call(null,cljs.core.hash_map,map__21460):map__21460);var ctx = map__21460__$1;var tmpl_item = cljs.core.get.call(null,map__21460__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (state_21481){var state_val_21482 = (state_21481[(1)]);if((state_val_21482 === (2)))
{var inst_21463 = (state_21481[(2)]);var inst_21464 = cljs.core.nth.call(null,inst_21463,(0),null);var inst_21465 = cljs.core.nth.call(null,inst_21463,(1),null);var inst_21466 = $("#tmpl_streetsnap_list");var inst_21467 = inst_21466.tmpl(inst_21465,tmpl_item);var inst_21468 = inst_21467.find("#mc_modelContainer");var inst_21469 = inst_21467.find("#btn_search");var inst_21470 = inst_21467.find("#btn_return");var inst_21471 = (function (){var btn_return = inst_21470;var btn_search = inst_21469;var mc_modelContainer = inst_21468;var elem = inst_21467;var tmpl = inst_21466;var model = inst_21465;var err = inst_21464;var vec__21461 = inst_21463;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (state_21488){var state_val_21489 = (state_21488[(1)]);if((state_val_21489 === (2)))
{var inst_21486 = (state_21488[(2)]);var state_21488__$1 = state_21488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21488__$1,inst_21486);
} else
{if((state_val_21489 === (1)))
{var inst_21483 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_21484 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21483,null));var state_21488__$1 = state_21488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21488__$1,(2),tool.react.OnReact,inst_21484);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21493 = [null,null,null,null,null,null,null];(statearr_21493[(0)] = state_machine__6178__auto__);
(statearr_21493[(1)] = (1));
return statearr_21493;
});
var state_machine__6178__auto____1 = (function (state_21488){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21488);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21494){if((e21494 instanceof Object))
{var ex__6181__auto__ = e21494;var statearr_21495_21543 = state_21488;(statearr_21495_21543[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21488);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21544 = state_21488;
state_21488 = G__21544;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21488){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21496 = f__6193__auto__.call(null);(statearr_21496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
})();var inst_21472 = inst_21470.click(inst_21471);var inst_21473 = (function (){var btn_return = inst_21470;var btn_search = inst_21469;var mc_modelContainer = inst_21468;var elem = inst_21467;var tmpl = inst_21466;var model = inst_21465;var err = inst_21464;var vec__21461 = inst_21463;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (state_21505){var state_val_21506 = (state_21505[(1)]);if((state_val_21506 === (2)))
{var inst_21503 = (state_21505[(2)]);var state_21505__$1 = state_21505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21505__$1,inst_21503);
} else
{if((state_val_21506 === (1)))
{var inst_21497 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_21498 = [searchKey];var inst_21499 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21497,inst_21498);var inst_21500 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_21499];var inst_21501 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21500,null));var state_21505__$1 = state_21505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21505__$1,(2),tool.react.OnReact,inst_21501);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21510 = [null,null,null,null,null,null,null];(statearr_21510[(0)] = state_machine__6178__auto__);
(statearr_21510[(1)] = (1));
return statearr_21510;
});
var state_machine__6178__auto____1 = (function (state_21505){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21505);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21511){if((e21511 instanceof Object))
{var ex__6181__auto__ = e21511;var statearr_21512_21545 = state_21505;(statearr_21512_21545[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21505);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21546 = state_21505;
state_21505 = G__21546;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21505){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21513 = f__6193__auto__.call(null);(statearr_21513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
})();var inst_21474 = inst_21469.click(inst_21473);var inst_21475 = (function (){var btn_return = inst_21470;var btn_search = inst_21469;var mc_modelContainer = inst_21468;var elem = inst_21467;var tmpl = inst_21466;var model = inst_21465;var err = inst_21464;var vec__21461 = inst_21463;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,inst_21473,inst_21474,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,inst_21473,inst_21474,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,inst_21473,inst_21474,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function (state_21523){var state_val_21524 = (state_21523[(1)]);if((state_val_21524 === (2)))
{var inst_21521 = (state_21523[(2)]);var state_21523__$1 = state_21523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21523__$1,inst_21521);
} else
{if((state_val_21524 === (1)))
{var inst_21514 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_21515 = that.id;var inst_21516 = [inst_21515];var inst_21517 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21514,inst_21516);var inst_21518 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_21517];var inst_21519 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21518,null));var state_21523__$1 = state_21523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21523__$1,(2),tool.react.OnReact,inst_21519);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,inst_21473,inst_21474,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,inst_21473,inst_21474,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21528 = [null,null,null,null,null,null,null];(statearr_21528[(0)] = state_machine__6178__auto__);
(statearr_21528[(1)] = (1));
return statearr_21528;
});
var state_machine__6178__auto____1 = (function (state_21523){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21523);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21529){if((e21529 instanceof Object))
{var ex__6181__auto__ = e21529;var statearr_21530_21547 = state_21523;(statearr_21530_21547[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21548 = state_21523;
state_21523 = G__21548;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21523){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,inst_21473,inst_21474,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21531 = f__6193__auto__.call(null);(statearr_21531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,inst_21473,inst_21474,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__21461,inst_21463,inst_21464,inst_21465,inst_21466,inst_21467,inst_21468,inst_21469,inst_21470,inst_21471,inst_21472,inst_21473,inst_21474,state_val_21482,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
})();var inst_21476 = inst_21468.delegate("div[modelFrame]","click",inst_21475);var inst_21477 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_21478 = [inst_21467,name];var inst_21479 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21477,inst_21478);var state_21481__$1 = (function (){var statearr_21532 = state_21481;(statearr_21532[(7)] = inst_21476);
(statearr_21532[(8)] = inst_21474);
(statearr_21532[(9)] = inst_21472);
return statearr_21532;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21481__$1,inst_21479);
} else
{if((state_val_21482 === (1)))
{var state_21481__$1 = state_21481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21481__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21536 = [null,null,null,null,null,null,null,null,null,null];(statearr_21536[(0)] = state_machine__6178__auto__);
(statearr_21536[(1)] = (1));
return statearr_21536;
});
var state_machine__6178__auto____1 = (function (state_21481){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21481);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21537){if((e21537 instanceof Object))
{var ex__6181__auto__ = e21537;var statearr_21538_21549 = state_21481;(statearr_21538_21549[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21481);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21550 = state_21481;
state_21481 = G__21550;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21481){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21539 = f__6193__auto__.call(null);(statearr_21539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__21460,map__21460__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__21736){var map__21737 = p__21736;var map__21737__$1 = ((cljs.core.seq_QMARK_.call(null,map__21737))?cljs.core.apply.call(null,cljs.core.hash_map,map__21737):map__21737);var view = map__21737__$1;var elem = cljs.core.get.call(null,map__21737__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_21921 = elem.find("#mc_historyContainer");var mc_sideContainer_21922 = elem.find("#mc_sideContainer");var mc_bottomContainer_21923 = elem.find("#mc_bottomContainer");var img_stylePicture_21924 = elem.find("#img_stylePicture");var btn_share_21925 = elem.find("#btn_share");var btn_fullscreen_21926 = elem.find("#btn_fullscreen");var btn_more_21927 = elem.find("#btn_more");mc_modelContainer_21921.undelegate("img","click");
mc_sideContainer_21922.undelegate("img","click");
mc_bottomContainer_21923.undelegate("img","click");
img_stylePicture_21924.off("click");
btn_share_21925.off("click");
btn_fullscreen_21926.off("click");
btn_more_21927.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__21738){var map__21739 = p__21738;var map__21739__$1 = ((cljs.core.seq_QMARK_.call(null,map__21739))?cljs.core.apply.call(null,cljs.core.hash_map,map__21739):map__21739);var view = map__21739__$1;var elem = cljs.core.get.call(null,map__21739__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_21928 = elem.find("#mc_3dmask");var c__6192__auto___21929 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___21929,mc_3dmask_21928,map__21739,map__21739__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___21929,mc_3dmask_21928,map__21739,map__21739__$1,view,elem){
return (function (state_21745){var state_val_21746 = (state_21745[(1)]);if((state_val_21746 === (2)))
{var inst_21742 = (state_21745[(2)]);var inst_21743 = mc_3dmask_21928.fadeOut((400));var state_21745__$1 = (function (){var statearr_21747 = state_21745;(statearr_21747[(7)] = inst_21742);
return statearr_21747;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21745__$1,inst_21743);
} else
{if((state_val_21746 === (1)))
{var inst_21740 = cljs.core.async.timeout.call(null,(5000));var state_21745__$1 = state_21745;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21745__$1,(2),inst_21740);
} else
{return null;
}
}
});})(c__6192__auto___21929,mc_3dmask_21928,map__21739,map__21739__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___21929,mc_3dmask_21928,map__21739,map__21739__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21751 = [null,null,null,null,null,null,null,null];(statearr_21751[(0)] = state_machine__6178__auto__);
(statearr_21751[(1)] = (1));
return statearr_21751;
});
var state_machine__6178__auto____1 = (function (state_21745){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21745);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21752){if((e21752 instanceof Object))
{var ex__6181__auto__ = e21752;var statearr_21753_21930 = state_21745;(statearr_21753_21930[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21745);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21931 = state_21745;
state_21745 = G__21931;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21745){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___21929,mc_3dmask_21928,map__21739,map__21739__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_21754 = f__6193__auto__.call(null);(statearr_21754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___21929);
return statearr_21754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___21929,mc_3dmask_21928,map__21739,map__21739__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__21755,key,modelChan){var map__21756 = p__21755;var map__21756__$1 = ((cljs.core.seq_QMARK_.call(null,map__21756))?cljs.core.apply.call(null,cljs.core.hash_map,map__21756):map__21756);var ctx = map__21756__$1;var tmpl_item = cljs.core.get.call(null,map__21756__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (state_21789){var state_val_21790 = (state_21789[(1)]);if((state_val_21790 === (2)))
{var inst_21759 = (state_21789[(2)]);var inst_21760 = cljs.core.nth.call(null,inst_21759,(0),null);var inst_21761 = cljs.core.nth.call(null,inst_21759,(1),null);var inst_21762 = $("#tmpl_streetsnap");var inst_21763 = inst_21762.tmpl(inst_21761,tmpl_item);var inst_21764 = inst_21763.find("#mc_historyContainer");var inst_21765 = inst_21763.find("#mc_sideContainer");var inst_21766 = inst_21763.find("#mc_bottomContainer");var inst_21767 = inst_21763.find("#img_stylePicture");var inst_21768 = inst_21763.find("#btn_share");var inst_21769 = inst_21763.find("#btn_fullscreen");var inst_21770 = inst_21763.find("#btn_more");var inst_21771 = (function (){var vec__21757 = inst_21759;var model = inst_21761;var btn_more = inst_21770;var mc_sideContainer = inst_21765;var mc_historyContainer = inst_21764;var err = inst_21760;var tmpl = inst_21762;var img_stylePicture = inst_21767;var elem = inst_21763;var btn_share = inst_21768;var mc_bottomContainer = inst_21766;var btn_fullscreen = inst_21769;return ((function (vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (state_21796){var state_val_21797 = (state_21796[(1)]);if((state_val_21797 === (2)))
{var inst_21794 = (state_21796[(2)]);var state_21796__$1 = state_21796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21796__$1,inst_21794);
} else
{if((state_val_21797 === (1)))
{var inst_21791 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_21792 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21791,null));var state_21796__$1 = state_21796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21796__$1,(2),tool.react.OnReact,inst_21792);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21801 = [null,null,null,null,null,null,null];(statearr_21801[(0)] = state_machine__6178__auto__);
(statearr_21801[(1)] = (1));
return statearr_21801;
});
var state_machine__6178__auto____1 = (function (state_21796){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21796);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21802){if((e21802 instanceof Object))
{var ex__6181__auto__ = e21802;var statearr_21803_21932 = state_21796;(statearr_21803_21932[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21796);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21933 = state_21796;
state_21796 = G__21933;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21796){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21804 = f__6193__auto__.call(null);(statearr_21804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var inst_21772 = inst_21770.on("click",inst_21771);var inst_21773 = (function (){var vec__21757 = inst_21759;var model = inst_21761;var btn_more = inst_21770;var mc_sideContainer = inst_21765;var mc_historyContainer = inst_21764;var err = inst_21760;var tmpl = inst_21762;var img_stylePicture = inst_21767;var elem = inst_21763;var btn_share = inst_21768;var mc_bottomContainer = inst_21766;var btn_fullscreen = inst_21769;return ((function (vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (state_21813){var state_val_21814 = (state_21813[(1)]);if((state_val_21814 === (2)))
{var inst_21811 = (state_21813[(2)]);var state_21813__$1 = state_21813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21813__$1,inst_21811);
} else
{if((state_val_21814 === (1)))
{var inst_21805 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_21806 = [model];var inst_21807 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21805,inst_21806);var inst_21808 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_21807];var inst_21809 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21808,null));var state_21813__$1 = state_21813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21813__$1,(2),tool.react.OnReact,inst_21809);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21818 = [null,null,null,null,null,null,null];(statearr_21818[(0)] = state_machine__6178__auto__);
(statearr_21818[(1)] = (1));
return statearr_21818;
});
var state_machine__6178__auto____1 = (function (state_21813){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21819){if((e21819 instanceof Object))
{var ex__6181__auto__ = e21819;var statearr_21820_21934 = state_21813;(statearr_21820_21934[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21935 = state_21813;
state_21813 = G__21935;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21813){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21821 = f__6193__auto__.call(null);(statearr_21821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var inst_21774 = inst_21769.on("click",inst_21773);var inst_21775 = (function (){var vec__21757 = inst_21759;var model = inst_21761;var btn_more = inst_21770;var mc_sideContainer = inst_21765;var mc_historyContainer = inst_21764;var err = inst_21760;var tmpl = inst_21762;var img_stylePicture = inst_21767;var elem = inst_21763;var btn_share = inst_21768;var mc_bottomContainer = inst_21766;var btn_fullscreen = inst_21769;return ((function (vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (state_21831){var state_val_21832 = (state_21831[(1)]);if((state_val_21832 === (2)))
{var inst_21829 = (state_21831[(2)]);var state_21831__$1 = state_21831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21831__$1,inst_21829);
} else
{if((state_val_21832 === (1)))
{var inst_21822 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_21823 = model.styleUrl;var inst_21824 = [inst_21823];var inst_21825 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21822,inst_21824);var inst_21826 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_21825];var inst_21827 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21826,null));var state_21831__$1 = state_21831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21831__$1,(2),tool.react.OnReact,inst_21827);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21836 = [null,null,null,null,null,null,null];(statearr_21836[(0)] = state_machine__6178__auto__);
(statearr_21836[(1)] = (1));
return statearr_21836;
});
var state_machine__6178__auto____1 = (function (state_21831){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21831);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21837){if((e21837 instanceof Object))
{var ex__6181__auto__ = e21837;var statearr_21838_21936 = state_21831;(statearr_21838_21936[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21831);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21937 = state_21831;
state_21831 = G__21937;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21831){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21839 = f__6193__auto__.call(null);(statearr_21839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var inst_21776 = inst_21767.on("click",inst_21775);var inst_21777 = (function (){var vec__21757 = inst_21759;var model = inst_21761;var btn_more = inst_21770;var mc_sideContainer = inst_21765;var mc_historyContainer = inst_21764;var err = inst_21760;var tmpl = inst_21762;var img_stylePicture = inst_21767;var elem = inst_21763;var btn_share = inst_21768;var mc_bottomContainer = inst_21766;var btn_fullscreen = inst_21769;return ((function (vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (state_21848){var state_val_21849 = (state_21848[(1)]);if((state_val_21849 === (2)))
{var inst_21846 = (state_21848[(2)]);var state_21848__$1 = state_21848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21848__$1,inst_21846);
} else
{if((state_val_21849 === (1)))
{var inst_21840 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_21841 = [model];var inst_21842 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21840,inst_21841);var inst_21843 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_21842];var inst_21844 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21843,null));var state_21848__$1 = state_21848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21848__$1,(2),tool.react.OnReact,inst_21844);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21853 = [null,null,null,null,null,null,null];(statearr_21853[(0)] = state_machine__6178__auto__);
(statearr_21853[(1)] = (1));
return statearr_21853;
});
var state_machine__6178__auto____1 = (function (state_21848){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21848);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21854){if((e21854 instanceof Object))
{var ex__6181__auto__ = e21854;var statearr_21855_21938 = state_21848;(statearr_21855_21938[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21939 = state_21848;
state_21848 = G__21939;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21848){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21856 = f__6193__auto__.call(null);(statearr_21856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var inst_21778 = inst_21768.on("click",inst_21777);var inst_21779 = (function (){var vec__21757 = inst_21759;var model = inst_21761;var btn_more = inst_21770;var mc_sideContainer = inst_21765;var mc_historyContainer = inst_21764;var err = inst_21760;var tmpl = inst_21762;var img_stylePicture = inst_21767;var elem = inst_21763;var btn_share = inst_21768;var mc_bottomContainer = inst_21766;var btn_fullscreen = inst_21769;return ((function (vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (state_21867){var state_val_21868 = (state_21867[(1)]);if((state_val_21868 === (2)))
{var inst_21865 = (state_21867[(2)]);var state_21867__$1 = state_21867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21867__$1,inst_21865);
} else
{if((state_val_21868 === (1)))
{var inst_21857 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_21858 = that.id;var inst_21859 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21858));var inst_21860 = [inst_21859];var inst_21861 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21857,inst_21860);var inst_21862 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_21861];var inst_21863 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21862,null));var state_21867__$1 = state_21867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21867__$1,(2),tool.react.OnReact,inst_21863);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21872 = [null,null,null,null,null,null,null];(statearr_21872[(0)] = state_machine__6178__auto__);
(statearr_21872[(1)] = (1));
return statearr_21872;
});
var state_machine__6178__auto____1 = (function (state_21867){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21867);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21873){if((e21873 instanceof Object))
{var ex__6181__auto__ = e21873;var statearr_21874_21940 = state_21867;(statearr_21874_21940[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21941 = state_21867;
state_21867 = G__21941;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21867){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21875 = f__6193__auto__.call(null);(statearr_21875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var inst_21780 = inst_21765.delegate("img","click",inst_21779);var inst_21781 = (function (){var vec__21757 = inst_21759;var model = inst_21761;var btn_more = inst_21770;var mc_sideContainer = inst_21765;var mc_historyContainer = inst_21764;var err = inst_21760;var tmpl = inst_21762;var img_stylePicture = inst_21767;var elem = inst_21763;var btn_share = inst_21768;var mc_bottomContainer = inst_21766;var btn_fullscreen = inst_21769;return ((function (vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (state_21886){var state_val_21887 = (state_21886[(1)]);if((state_val_21887 === (2)))
{var inst_21884 = (state_21886[(2)]);var state_21886__$1 = state_21886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21886__$1,inst_21884);
} else
{if((state_val_21887 === (1)))
{var inst_21876 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_21877 = that.id;var inst_21878 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21877));var inst_21879 = [inst_21878];var inst_21880 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21876,inst_21879);var inst_21881 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_21880];var inst_21882 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21881,null));var state_21886__$1 = state_21886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21886__$1,(2),tool.react.OnReact,inst_21882);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21891 = [null,null,null,null,null,null,null];(statearr_21891[(0)] = state_machine__6178__auto__);
(statearr_21891[(1)] = (1));
return statearr_21891;
});
var state_machine__6178__auto____1 = (function (state_21886){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21886);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21892){if((e21892 instanceof Object))
{var ex__6181__auto__ = e21892;var statearr_21893_21942 = state_21886;(statearr_21893_21942[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21886);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21943 = state_21886;
state_21886 = G__21943;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21886){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21894 = f__6193__auto__.call(null);(statearr_21894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var inst_21782 = inst_21766.delegate("img","click",inst_21781);var inst_21783 = (function (){var vec__21757 = inst_21759;var model = inst_21761;var btn_more = inst_21770;var mc_sideContainer = inst_21765;var mc_historyContainer = inst_21764;var err = inst_21760;var tmpl = inst_21762;var img_stylePicture = inst_21767;var elem = inst_21763;var btn_share = inst_21768;var mc_bottomContainer = inst_21766;var btn_fullscreen = inst_21769;return ((function (vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,inst_21781,inst_21782,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,inst_21781,inst_21782,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,inst_21781,inst_21782,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function (state_21904){var state_val_21905 = (state_21904[(1)]);if((state_val_21905 === (2)))
{var inst_21902 = (state_21904[(2)]);var state_21904__$1 = state_21904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21904__$1,inst_21902);
} else
{if((state_val_21905 === (1)))
{var inst_21895 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_21896 = that.id;var inst_21897 = [inst_21896];var inst_21898 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21895,inst_21897);var inst_21899 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_21898];var inst_21900 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21899,null));var state_21904__$1 = state_21904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21904__$1,(2),tool.react.OnReact,inst_21900);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,inst_21781,inst_21782,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,inst_21781,inst_21782,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21909 = [null,null,null,null,null,null,null];(statearr_21909[(0)] = state_machine__6178__auto__);
(statearr_21909[(1)] = (1));
return statearr_21909;
});
var state_machine__6178__auto____1 = (function (state_21904){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21904);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21910){if((e21910 instanceof Object))
{var ex__6181__auto__ = e21910;var statearr_21911_21944 = state_21904;(statearr_21911_21944[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21904);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21945 = state_21904;
state_21904 = G__21945;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21904){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,inst_21781,inst_21782,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21912 = f__6193__auto__.call(null);(statearr_21912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,inst_21781,inst_21782,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__21757,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_21759,inst_21760,inst_21761,inst_21762,inst_21763,inst_21764,inst_21765,inst_21766,inst_21767,inst_21768,inst_21769,inst_21770,inst_21771,inst_21772,inst_21773,inst_21774,inst_21775,inst_21776,inst_21777,inst_21778,inst_21779,inst_21780,inst_21781,inst_21782,state_val_21790,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var inst_21784 = inst_21764.delegate("img","click",inst_21783);var inst_21785 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_21786 = [inst_21763,name];var inst_21787 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21785,inst_21786);var state_21789__$1 = (function (){var statearr_21913 = state_21789;(statearr_21913[(7)] = inst_21776);
(statearr_21913[(8)] = inst_21780);
(statearr_21913[(9)] = inst_21778);
(statearr_21913[(10)] = inst_21784);
(statearr_21913[(11)] = inst_21772);
(statearr_21913[(12)] = inst_21774);
(statearr_21913[(13)] = inst_21782);
return statearr_21913;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21789__$1,inst_21787);
} else
{if((state_val_21790 === (1)))
{var state_21789__$1 = state_21789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21789__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21917[(0)] = state_machine__6178__auto__);
(statearr_21917[(1)] = (1));
return statearr_21917;
});
var state_machine__6178__auto____1 = (function (state_21789){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21789);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21918){if((e21918 instanceof Object))
{var ex__6181__auto__ = e21918;var statearr_21919_21946 = state_21789;(statearr_21919_21946[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21789);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21947 = state_21789;
state_21789 = G__21947;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21789){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21920 = f__6193__auto__.call(null);(statearr_21920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__21756,map__21756__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__21948){var map__21949 = p__21948;var map__21949__$1 = ((cljs.core.seq_QMARK_.call(null,map__21949))?cljs.core.apply.call(null,cljs.core.hash_map,map__21949):map__21949);var view = map__21949__$1;var elem = cljs.core.get.call(null,map__21949__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_21965 = elem.find("#mc_3dmask");var c__6192__auto___21966 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___21966,mc_3dmask_21965,map__21949,map__21949__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___21966,mc_3dmask_21965,map__21949,map__21949__$1,view,elem){
return (function (state_21955){var state_val_21956 = (state_21955[(1)]);if((state_val_21956 === (2)))
{var inst_21952 = (state_21955[(2)]);var inst_21953 = mc_3dmask_21965.fadeOut((400));var state_21955__$1 = (function (){var statearr_21957 = state_21955;(statearr_21957[(7)] = inst_21952);
return statearr_21957;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21955__$1,inst_21953);
} else
{if((state_val_21956 === (1)))
{var inst_21950 = cljs.core.async.timeout.call(null,(5000));var state_21955__$1 = state_21955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21955__$1,(2),inst_21950);
} else
{return null;
}
}
});})(c__6192__auto___21966,mc_3dmask_21965,map__21949,map__21949__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___21966,mc_3dmask_21965,map__21949,map__21949__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21961 = [null,null,null,null,null,null,null,null];(statearr_21961[(0)] = state_machine__6178__auto__);
(statearr_21961[(1)] = (1));
return statearr_21961;
});
var state_machine__6178__auto____1 = (function (state_21955){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21962){if((e21962 instanceof Object))
{var ex__6181__auto__ = e21962;var statearr_21963_21967 = state_21955;(statearr_21963_21967[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21955);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21968 = state_21955;
state_21955 = G__21968;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21955){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___21966,mc_3dmask_21965,map__21949,map__21949__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_21964 = f__6193__auto__.call(null);(statearr_21964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___21966);
return statearr_21964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___21966,mc_3dmask_21965,map__21949,map__21949__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__21969,key,modelChan){var map__21970 = p__21969;var map__21970__$1 = ((cljs.core.seq_QMARK_.call(null,map__21970))?cljs.core.apply.call(null,cljs.core.hash_map,map__21970):map__21970);var ctx = map__21970__$1;var tmpl_item = cljs.core.get.call(null,map__21970__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__21970,map__21970__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__21970,map__21970__$1,ctx,tmpl_item){
return (function (state_21982){var state_val_21983 = (state_21982[(1)]);if((state_val_21983 === (2)))
{var inst_21973 = (state_21982[(2)]);var inst_21974 = cljs.core.nth.call(null,inst_21973,(0),null);var inst_21975 = cljs.core.nth.call(null,inst_21973,(1),null);var inst_21976 = $("#tmpl_home");var inst_21977 = inst_21976.tmpl(inst_21975,tmpl_item);var inst_21978 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_21979 = [inst_21977,key];var inst_21980 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21978,inst_21979);var state_21982__$1 = (function (){var statearr_21984 = state_21982;(statearr_21984[(7)] = inst_21974);
return statearr_21984;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21982__$1,inst_21980);
} else
{if((state_val_21983 === (1)))
{var state_21982__$1 = state_21982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21982__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__21970,map__21970__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__21970,map__21970__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21988 = [null,null,null,null,null,null,null,null];(statearr_21988[(0)] = state_machine__6178__auto__);
(statearr_21988[(1)] = (1));
return statearr_21988;
});
var state_machine__6178__auto____1 = (function (state_21982){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21982);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21989){if((e21989 instanceof Object))
{var ex__6181__auto__ = e21989;var statearr_21990_21992 = state_21982;(statearr_21990_21992[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21982);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21993 = state_21982;
state_21982 = G__21993;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21982){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__21970,map__21970__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21991 = f__6193__auto__.call(null);(statearr_21991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__21970,map__21970__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__21994,key,view){var map__21995 = p__21994;var map__21995__$1 = ((cljs.core.seq_QMARK_.call(null,map__21995))?cljs.core.apply.call(null,cljs.core.hash_map,map__21995):map__21995);var ctx = map__21995__$1;var popupContainer = cljs.core.get.call(null,map__21995__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__21996 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__21996.appendTo(popupContainer);
G__21996.fadeIn((400));
return G__21996;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__21997,key,p__21998){var map__21999 = p__21997;var map__21999__$1 = ((cljs.core.seq_QMARK_.call(null,map__21999))?cljs.core.apply.call(null,cljs.core.hash_map,map__21999):map__21999);var ctx = map__21999__$1;var container = cljs.core.get.call(null,map__21999__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__22000 = p__21998;var map__22000__$1 = ((cljs.core.seq_QMARK_.call(null,map__22000))?cljs.core.apply.call(null,cljs.core.hash_map,map__22000):map__22000);var view = map__22000__$1;var elem = cljs.core.get.call(null,map__22000__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__21999,map__21999__$1,ctx,container,map__22000,map__22000__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__21999,map__21999__$1,ctx,container,map__22000,map__22000__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__22001,key,modelChan){var map__22002 = p__22001;var map__22002__$1 = ((cljs.core.seq_QMARK_.call(null,map__22002))?cljs.core.apply.call(null,cljs.core.hash_map,map__22002):map__22002);var ctx = map__22002__$1;var tmpl_item = cljs.core.get.call(null,map__22002__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item){
return (function (state_22017){var state_val_22018 = (state_22017[(1)]);if((state_val_22018 === (2)))
{var inst_22005 = (state_22017[(2)]);var inst_22006 = cljs.core.nth.call(null,inst_22005,(0),null);var inst_22007 = cljs.core.nth.call(null,inst_22005,(1),null);var inst_22008 = $("#tmpl_bigPhoto");var inst_22009 = inst_22008.tmpl(inst_22007,tmpl_item);var inst_22010 = inst_22009.find("#mc_bigPhotoFixPosition");var inst_22011 = (function (){var back = inst_22010;var elem = inst_22009;var tmpl = inst_22008;var model = inst_22007;var err = inst_22006;var vec__22003 = inst_22005;return ((function (back,elem,tmpl,model,err,vec__22003,inst_22005,inst_22006,inst_22007,inst_22008,inst_22009,inst_22010,state_val_22018,c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__22003,inst_22005,inst_22006,inst_22007,inst_22008,inst_22009,inst_22010,state_val_22018,c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__22003,inst_22005,inst_22006,inst_22007,inst_22008,inst_22009,inst_22010,state_val_22018,c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item){
return (function (state_22024){var state_val_22025 = (state_22024[(1)]);if((state_val_22025 === (2)))
{var inst_22022 = (state_22024[(2)]);var state_22024__$1 = state_22024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22024__$1,inst_22022);
} else
{if((state_val_22025 === (1)))
{var inst_22019 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_22020 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22019,null));var state_22024__$1 = state_22024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22024__$1,(2),tool.react.OnReact,inst_22020);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__22003,inst_22005,inst_22006,inst_22007,inst_22008,inst_22009,inst_22010,state_val_22018,c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__22003,inst_22005,inst_22006,inst_22007,inst_22008,inst_22009,inst_22010,state_val_22018,c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22029 = [null,null,null,null,null,null,null];(statearr_22029[(0)] = state_machine__6178__auto__);
(statearr_22029[(1)] = (1));
return statearr_22029;
});
var state_machine__6178__auto____1 = (function (state_22024){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22024);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22030){if((e22030 instanceof Object))
{var ex__6181__auto__ = e22030;var statearr_22031_22041 = state_22024;(statearr_22031_22041[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22024);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22042 = state_22024;
state_22024 = G__22042;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22024){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__22003,inst_22005,inst_22006,inst_22007,inst_22008,inst_22009,inst_22010,state_val_22018,c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22032 = f__6193__auto__.call(null);(statearr_22032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__22003,inst_22005,inst_22006,inst_22007,inst_22008,inst_22009,inst_22010,state_val_22018,c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__22003,inst_22005,inst_22006,inst_22007,inst_22008,inst_22009,inst_22010,state_val_22018,c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item))
})();var inst_22012 = inst_22010.on("click",inst_22011);var inst_22013 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_22014 = [inst_22009,key];var inst_22015 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22013,inst_22014);var state_22017__$1 = (function (){var statearr_22033 = state_22017;(statearr_22033[(7)] = inst_22012);
return statearr_22033;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22017__$1,inst_22015);
} else
{if((state_val_22018 === (1)))
{var state_22017__$1 = state_22017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22017__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22037 = [null,null,null,null,null,null,null,null];(statearr_22037[(0)] = state_machine__6178__auto__);
(statearr_22037[(1)] = (1));
return statearr_22037;
});
var state_machine__6178__auto____1 = (function (state_22017){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22017);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22038){if((e22038 instanceof Object))
{var ex__6181__auto__ = e22038;var statearr_22039_22043 = state_22017;(statearr_22039_22043[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22017);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22044 = state_22017;
state_22017 = G__22044;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22017){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22040 = f__6193__auto__.call(null);(statearr_22040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__22002,map__22002__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__22045,key,modelChan){var map__22046 = p__22045;var map__22046__$1 = ((cljs.core.seq_QMARK_.call(null,map__22046))?cljs.core.apply.call(null,cljs.core.hash_map,map__22046):map__22046);var ctx = map__22046__$1;var tmpl_item = cljs.core.get.call(null,map__22046__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__22046,map__22046__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__22046,map__22046__$1,ctx,tmpl_item){
return (function (state_22058){var state_val_22059 = (state_22058[(1)]);if((state_val_22059 === (2)))
{var inst_22049 = (state_22058[(2)]);var inst_22050 = cljs.core.nth.call(null,inst_22049,(0),null);var inst_22051 = cljs.core.nth.call(null,inst_22049,(1),null);var inst_22052 = $("#tmpl_news");var inst_22053 = inst_22052.tmpl(inst_22051,tmpl_item);var inst_22054 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_22055 = [inst_22053,key];var inst_22056 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22054,inst_22055);var state_22058__$1 = (function (){var statearr_22060 = state_22058;(statearr_22060[(7)] = inst_22050);
return statearr_22060;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22058__$1,inst_22056);
} else
{if((state_val_22059 === (1)))
{var state_22058__$1 = state_22058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22058__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__22046,map__22046__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__22046,map__22046__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22064 = [null,null,null,null,null,null,null,null];(statearr_22064[(0)] = state_machine__6178__auto__);
(statearr_22064[(1)] = (1));
return statearr_22064;
});
var state_machine__6178__auto____1 = (function (state_22058){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22058);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22065){if((e22065 instanceof Object))
{var ex__6181__auto__ = e22065;var statearr_22066_22068 = state_22058;(statearr_22066_22068[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22069 = state_22058;
state_22058 = G__22069;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22058){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__22046,map__22046__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22067 = f__6193__auto__.call(null);(statearr_22067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__22046,map__22046__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
