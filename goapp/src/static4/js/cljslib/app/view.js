// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__15311,key,view){var map__15312 = p__15311;var map__15312__$1 = ((cljs.core.seq_QMARK_.call(null,map__15312))?cljs.core.apply.call(null,cljs.core.hash_map,map__15312):map__15312);var ctx = map__15312__$1;var container = cljs.core.get.call(null,map__15312__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var c__6192__auto___15332 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___15332,map__15312,map__15312__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___15332,map__15312,map__15312__$1,ctx,container){
return (function (state_15322){var state_val_15323 = (state_15322[(1)]);if((state_val_15323 === (2)))
{var inst_15320 = (state_15322[(2)]);var state_15322__$1 = state_15322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15322__$1,inst_15320);
} else
{if((state_val_15323 === (1)))
{var inst_15313 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094)];var inst_15314 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_15315 = [inst_15314];var inst_15316 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15313,inst_15315);var inst_15317 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_15316];var inst_15318 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15317,null));var state_15322__$1 = state_15322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15322__$1,(2),tool.react.OnReact,inst_15318);
} else
{return null;
}
}
});})(c__6192__auto___15332,map__15312,map__15312__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto___15332,map__15312,map__15312__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15327 = [null,null,null,null,null,null,null];(statearr_15327[(0)] = state_machine__6178__auto__);
(statearr_15327[(1)] = (1));
return statearr_15327;
});
var state_machine__6178__auto____1 = (function (state_15322){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15322);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15328){if((e15328 instanceof Object))
{var ex__6181__auto__ = e15328;var statearr_15329_15333 = state_15322;(statearr_15329_15333[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15322);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15334 = state_15322;
state_15322 = G__15334;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15322){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___15332,map__15312,map__15312__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_15330 = f__6193__auto__.call(null);(statearr_15330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___15332);
return statearr_15330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___15332,map__15312,map__15312__$1,ctx,container))
);
var G__15331 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__15331.appendTo(container);
G__15331.fadeIn((400));
return G__15331;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__15335,key,view){var map__15336 = p__15335;var map__15336__$1 = ((cljs.core.seq_QMARK_.call(null,map__15336))?cljs.core.apply.call(null,cljs.core.hash_map,map__15336):map__15336);var ctx = map__15336__$1;var container = cljs.core.get.call(null,map__15336__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__15337 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__15337.remove();
return G__15337;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_15500 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_15501 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_15502 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_15502.off("click");
btn_search_15501.off("click");
mc_modelContainer_15500.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__15419,key,modelChan){var map__15420 = p__15419;var map__15420__$1 = ((cljs.core.seq_QMARK_.call(null,map__15420))?cljs.core.apply.call(null,cljs.core.hash_map,map__15420):map__15420);var ctx = map__15420__$1;var tmpl_item = cljs.core.get.call(null,map__15420__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (state_15441){var state_val_15442 = (state_15441[(1)]);if((state_val_15442 === (2)))
{var inst_15423 = (state_15441[(2)]);var inst_15424 = cljs.core.nth.call(null,inst_15423,(0),null);var inst_15425 = cljs.core.nth.call(null,inst_15423,(1),null);var inst_15426 = $("#tmpl_streetsnap_list");var inst_15427 = inst_15426.tmpl(inst_15425,tmpl_item);var inst_15428 = inst_15427.find("#mc_modelContainer");var inst_15429 = inst_15427.find("#btn_search");var inst_15430 = inst_15427.find("#btn_return");var inst_15431 = (function (){var btn_return = inst_15430;var btn_search = inst_15429;var mc_modelContainer = inst_15428;var elem = inst_15427;var tmpl = inst_15426;var model = inst_15425;var err = inst_15424;var vec__15421 = inst_15423;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (state_15448){var state_val_15449 = (state_15448[(1)]);if((state_val_15449 === (2)))
{var inst_15446 = (state_15448[(2)]);var state_15448__$1 = state_15448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15448__$1,inst_15446);
} else
{if((state_val_15449 === (1)))
{var inst_15443 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_15444 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15443,null));var state_15448__$1 = state_15448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15448__$1,(2),tool.react.OnReact,inst_15444);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15453 = [null,null,null,null,null,null,null];(statearr_15453[(0)] = state_machine__6178__auto__);
(statearr_15453[(1)] = (1));
return statearr_15453;
});
var state_machine__6178__auto____1 = (function (state_15448){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15448);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15454){if((e15454 instanceof Object))
{var ex__6181__auto__ = e15454;var statearr_15455_15503 = state_15448;(statearr_15455_15503[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15448);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15504 = state_15448;
state_15448 = G__15504;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15448){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15456 = f__6193__auto__.call(null);(statearr_15456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_15456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
})();var inst_15432 = inst_15430.click(inst_15431);var inst_15433 = (function (){var btn_return = inst_15430;var btn_search = inst_15429;var mc_modelContainer = inst_15428;var elem = inst_15427;var tmpl = inst_15426;var model = inst_15425;var err = inst_15424;var vec__15421 = inst_15423;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (state_15465){var state_val_15466 = (state_15465[(1)]);if((state_val_15466 === (2)))
{var inst_15463 = (state_15465[(2)]);var state_15465__$1 = state_15465;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15465__$1,inst_15463);
} else
{if((state_val_15466 === (1)))
{var inst_15457 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_15458 = [searchKey];var inst_15459 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15457,inst_15458);var inst_15460 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_15459];var inst_15461 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15460,null));var state_15465__$1 = state_15465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15465__$1,(2),tool.react.OnReact,inst_15461);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15470 = [null,null,null,null,null,null,null];(statearr_15470[(0)] = state_machine__6178__auto__);
(statearr_15470[(1)] = (1));
return statearr_15470;
});
var state_machine__6178__auto____1 = (function (state_15465){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15465);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15471){if((e15471 instanceof Object))
{var ex__6181__auto__ = e15471;var statearr_15472_15505 = state_15465;(statearr_15472_15505[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15465);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15506 = state_15465;
state_15465 = G__15506;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15465){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15473 = f__6193__auto__.call(null);(statearr_15473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_15473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
})();var inst_15434 = inst_15429.click(inst_15433);var inst_15435 = (function (){var btn_return = inst_15430;var btn_search = inst_15429;var mc_modelContainer = inst_15428;var elem = inst_15427;var tmpl = inst_15426;var model = inst_15425;var err = inst_15424;var vec__15421 = inst_15423;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function (state_15483){var state_val_15484 = (state_15483[(1)]);if((state_val_15484 === (2)))
{var inst_15481 = (state_15483[(2)]);var state_15483__$1 = state_15483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15483__$1,inst_15481);
} else
{if((state_val_15484 === (1)))
{var inst_15474 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_15475 = that.id;var inst_15476 = [inst_15475];var inst_15477 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15474,inst_15476);var inst_15478 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_15477];var inst_15479 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15478,null));var state_15483__$1 = state_15483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15483__$1,(2),tool.react.OnReact,inst_15479);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15488 = [null,null,null,null,null,null,null];(statearr_15488[(0)] = state_machine__6178__auto__);
(statearr_15488[(1)] = (1));
return statearr_15488;
});
var state_machine__6178__auto____1 = (function (state_15483){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15483);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15489){if((e15489 instanceof Object))
{var ex__6181__auto__ = e15489;var statearr_15490_15507 = state_15483;(statearr_15490_15507[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15483);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15508 = state_15483;
state_15483 = G__15508;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15483){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15491 = f__6193__auto__.call(null);(statearr_15491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_15491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__15421,inst_15423,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,state_val_15442,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
})();var inst_15436 = inst_15428.delegate("div[modelFrame]","click",inst_15435);var inst_15437 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_15438 = [inst_15427,name];var inst_15439 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15437,inst_15438);var state_15441__$1 = (function (){var statearr_15492 = state_15441;(statearr_15492[(7)] = inst_15432);
(statearr_15492[(8)] = inst_15436);
(statearr_15492[(9)] = inst_15434);
return statearr_15492;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15441__$1,inst_15439);
} else
{if((state_val_15442 === (1)))
{var state_15441__$1 = state_15441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15441__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15496 = [null,null,null,null,null,null,null,null,null,null];(statearr_15496[(0)] = state_machine__6178__auto__);
(statearr_15496[(1)] = (1));
return statearr_15496;
});
var state_machine__6178__auto____1 = (function (state_15441){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15497){if((e15497 instanceof Object))
{var ex__6181__auto__ = e15497;var statearr_15498_15509 = state_15441;(statearr_15498_15509[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15441);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15510 = state_15441;
state_15441 = G__15510;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15441){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15499 = f__6193__auto__.call(null);(statearr_15499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__15420,map__15420__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__15615){var map__15616 = p__15615;var map__15616__$1 = ((cljs.core.seq_QMARK_.call(null,map__15616))?cljs.core.apply.call(null,cljs.core.hash_map,map__15616):map__15616);var view = map__15616__$1;var elem = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_15719 = elem.find("#mc_historyContainer");var btn_share_15720 = elem.find("#btn_share");btn_share_15720.off("click");
mc_modelContainer_15719.undelegate("img","click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__15617){var map__15618 = p__15617;var map__15618__$1 = ((cljs.core.seq_QMARK_.call(null,map__15618))?cljs.core.apply.call(null,cljs.core.hash_map,map__15618):map__15618);var view = map__15618__$1;var elem = cljs.core.get.call(null,map__15618__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_15721 = elem.find("#mc_3dmask");var c__6192__auto___15722 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___15722,mc_3dmask_15721,map__15618,map__15618__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___15722,mc_3dmask_15721,map__15618,map__15618__$1,view,elem){
return (function (state_15624){var state_val_15625 = (state_15624[(1)]);if((state_val_15625 === (2)))
{var inst_15621 = (state_15624[(2)]);var inst_15622 = mc_3dmask_15721.fadeOut((400));var state_15624__$1 = (function (){var statearr_15626 = state_15624;(statearr_15626[(7)] = inst_15621);
return statearr_15626;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15624__$1,inst_15622);
} else
{if((state_val_15625 === (1)))
{var inst_15619 = cljs.core.async.timeout.call(null,(5000));var state_15624__$1 = state_15624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15624__$1,(2),inst_15619);
} else
{return null;
}
}
});})(c__6192__auto___15722,mc_3dmask_15721,map__15618,map__15618__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___15722,mc_3dmask_15721,map__15618,map__15618__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15630 = [null,null,null,null,null,null,null,null];(statearr_15630[(0)] = state_machine__6178__auto__);
(statearr_15630[(1)] = (1));
return statearr_15630;
});
var state_machine__6178__auto____1 = (function (state_15624){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15624);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15631){if((e15631 instanceof Object))
{var ex__6181__auto__ = e15631;var statearr_15632_15723 = state_15624;(statearr_15632_15723[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15624);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15724 = state_15624;
state_15624 = G__15724;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15624){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___15722,mc_3dmask_15721,map__15618,map__15618__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_15633 = f__6193__auto__.call(null);(statearr_15633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___15722);
return statearr_15633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___15722,mc_3dmask_15721,map__15618,map__15618__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__15634,key,modelChan){var map__15635 = p__15634;var map__15635__$1 = ((cljs.core.seq_QMARK_.call(null,map__15635))?cljs.core.apply.call(null,cljs.core.hash_map,map__15635):map__15635);var ctx = map__15635__$1;var tmpl_item = cljs.core.get.call(null,map__15635__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (state_15656){var state_val_15657 = (state_15656[(1)]);if((state_val_15657 === (2)))
{var inst_15638 = (state_15656[(2)]);var inst_15639 = cljs.core.nth.call(null,inst_15638,(0),null);var inst_15640 = cljs.core.nth.call(null,inst_15638,(1),null);var inst_15641 = $("#tmpl_streetsnap");var inst_15642 = inst_15641.tmpl(inst_15640,tmpl_item);var inst_15643 = inst_15642.find("#mc_historyContainer");var inst_15644 = inst_15642.find("#mc_sideContainer");var inst_15645 = inst_15642.find("#btn_share");var inst_15646 = (function (){var btn_share = inst_15645;var mc_sideContainer = inst_15644;var mc_historyContainer = inst_15643;var elem = inst_15642;var tmpl = inst_15641;var model = inst_15640;var err = inst_15639;var vec__15636 = inst_15638;return ((function (btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (state_15666){var state_val_15667 = (state_15666[(1)]);if((state_val_15667 === (2)))
{var inst_15664 = (state_15666[(2)]);var state_15666__$1 = state_15666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15666__$1,inst_15664);
} else
{if((state_val_15667 === (1)))
{var inst_15658 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_15659 = [model];var inst_15660 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15658,inst_15659);var inst_15661 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_15660];var inst_15662 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15661,null));var state_15666__$1 = state_15666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15666__$1,(2),tool.react.OnReact,inst_15662);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15671 = [null,null,null,null,null,null,null];(statearr_15671[(0)] = state_machine__6178__auto__);
(statearr_15671[(1)] = (1));
return statearr_15671;
});
var state_machine__6178__auto____1 = (function (state_15666){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15666);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15672){if((e15672 instanceof Object))
{var ex__6181__auto__ = e15672;var statearr_15673_15725 = state_15666;(statearr_15673_15725[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15726 = state_15666;
state_15666 = G__15726;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15666){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15674 = f__6193__auto__.call(null);(statearr_15674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_15674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
})();var inst_15647 = inst_15645.click(inst_15646);var inst_15648 = (function (){var btn_share = inst_15645;var mc_sideContainer = inst_15644;var mc_historyContainer = inst_15643;var elem = inst_15642;var tmpl = inst_15641;var model = inst_15640;var err = inst_15639;var vec__15636 = inst_15638;return ((function (btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (state_15684){var state_val_15685 = (state_15684[(1)]);if((state_val_15685 === (2)))
{var inst_15682 = (state_15684[(2)]);var state_15684__$1 = state_15684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15684__$1,inst_15682);
} else
{if((state_val_15685 === (1)))
{var inst_15675 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_15676 = that.id;var inst_15677 = [inst_15676];var inst_15678 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15675,inst_15677);var inst_15679 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_15678];var inst_15680 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15679,null));var state_15684__$1 = state_15684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15684__$1,(2),tool.react.OnReact,inst_15680);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15689 = [null,null,null,null,null,null,null];(statearr_15689[(0)] = state_machine__6178__auto__);
(statearr_15689[(1)] = (1));
return statearr_15689;
});
var state_machine__6178__auto____1 = (function (state_15684){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15684);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15690){if((e15690 instanceof Object))
{var ex__6181__auto__ = e15690;var statearr_15691_15727 = state_15684;(statearr_15691_15727[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15690;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15728 = state_15684;
state_15684 = G__15728;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15684){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15692 = f__6193__auto__.call(null);(statearr_15692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_15692;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
})();var inst_15649 = inst_15644.delegate("img","click",inst_15648);var inst_15650 = (function (){var btn_share = inst_15645;var mc_sideContainer = inst_15644;var mc_historyContainer = inst_15643;var elem = inst_15642;var tmpl = inst_15641;var model = inst_15640;var err = inst_15639;var vec__15636 = inst_15638;return ((function (btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,inst_15648,inst_15649,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,inst_15648,inst_15649,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,inst_15648,inst_15649,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function (state_15702){var state_val_15703 = (state_15702[(1)]);if((state_val_15703 === (2)))
{var inst_15700 = (state_15702[(2)]);var state_15702__$1 = state_15702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15702__$1,inst_15700);
} else
{if((state_val_15703 === (1)))
{var inst_15693 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_15694 = that.id;var inst_15695 = [inst_15694];var inst_15696 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15693,inst_15695);var inst_15697 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_15696];var inst_15698 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15697,null));var state_15702__$1 = state_15702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15702__$1,(2),tool.react.OnReact,inst_15698);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,inst_15648,inst_15649,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,inst_15648,inst_15649,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15707 = [null,null,null,null,null,null,null];(statearr_15707[(0)] = state_machine__6178__auto__);
(statearr_15707[(1)] = (1));
return statearr_15707;
});
var state_machine__6178__auto____1 = (function (state_15702){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15702);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15708){if((e15708 instanceof Object))
{var ex__6181__auto__ = e15708;var statearr_15709_15729 = state_15702;(statearr_15709_15729[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15702);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15730 = state_15702;
state_15702 = G__15730;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15702){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,inst_15648,inst_15649,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15710 = f__6193__auto__.call(null);(statearr_15710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_15710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,inst_15648,inst_15649,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_share,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__15636,inst_15638,inst_15639,inst_15640,inst_15641,inst_15642,inst_15643,inst_15644,inst_15645,inst_15646,inst_15647,inst_15648,inst_15649,state_val_15657,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
})();var inst_15651 = inst_15643.delegate("img","click",inst_15650);var inst_15652 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_15653 = [inst_15642,name];var inst_15654 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15652,inst_15653);var state_15656__$1 = (function (){var statearr_15711 = state_15656;(statearr_15711[(7)] = inst_15647);
(statearr_15711[(8)] = inst_15651);
(statearr_15711[(9)] = inst_15649);
return statearr_15711;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15656__$1,inst_15654);
} else
{if((state_val_15657 === (1)))
{var state_15656__$1 = state_15656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15656__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15715 = [null,null,null,null,null,null,null,null,null,null];(statearr_15715[(0)] = state_machine__6178__auto__);
(statearr_15715[(1)] = (1));
return statearr_15715;
});
var state_machine__6178__auto____1 = (function (state_15656){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15656);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15716){if((e15716 instanceof Object))
{var ex__6181__auto__ = e15716;var statearr_15717_15731 = state_15656;(statearr_15717_15731[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15732 = state_15656;
state_15656 = G__15732;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15656){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15718 = f__6193__auto__.call(null);(statearr_15718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__15635,map__15635__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__15733){var map__15734 = p__15733;var map__15734__$1 = ((cljs.core.seq_QMARK_.call(null,map__15734))?cljs.core.apply.call(null,cljs.core.hash_map,map__15734):map__15734);var view = map__15734__$1;var elem = cljs.core.get.call(null,map__15734__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_15750 = elem.find("#mc_3dmask");var c__6192__auto___15751 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___15751,mc_3dmask_15750,map__15734,map__15734__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___15751,mc_3dmask_15750,map__15734,map__15734__$1,view,elem){
return (function (state_15740){var state_val_15741 = (state_15740[(1)]);if((state_val_15741 === (2)))
{var inst_15737 = (state_15740[(2)]);var inst_15738 = mc_3dmask_15750.fadeOut((400));var state_15740__$1 = (function (){var statearr_15742 = state_15740;(statearr_15742[(7)] = inst_15737);
return statearr_15742;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15740__$1,inst_15738);
} else
{if((state_val_15741 === (1)))
{var inst_15735 = cljs.core.async.timeout.call(null,(5000));var state_15740__$1 = state_15740;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15740__$1,(2),inst_15735);
} else
{return null;
}
}
});})(c__6192__auto___15751,mc_3dmask_15750,map__15734,map__15734__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___15751,mc_3dmask_15750,map__15734,map__15734__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15746 = [null,null,null,null,null,null,null,null];(statearr_15746[(0)] = state_machine__6178__auto__);
(statearr_15746[(1)] = (1));
return statearr_15746;
});
var state_machine__6178__auto____1 = (function (state_15740){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15740);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15747){if((e15747 instanceof Object))
{var ex__6181__auto__ = e15747;var statearr_15748_15752 = state_15740;(statearr_15748_15752[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15740);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15753 = state_15740;
state_15740 = G__15753;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15740){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___15751,mc_3dmask_15750,map__15734,map__15734__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_15749 = f__6193__auto__.call(null);(statearr_15749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___15751);
return statearr_15749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___15751,mc_3dmask_15750,map__15734,map__15734__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__15754,key,modelChan){var map__15755 = p__15754;var map__15755__$1 = ((cljs.core.seq_QMARK_.call(null,map__15755))?cljs.core.apply.call(null,cljs.core.hash_map,map__15755):map__15755);var ctx = map__15755__$1;var tmpl_item = cljs.core.get.call(null,map__15755__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__15755,map__15755__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__15755,map__15755__$1,ctx,tmpl_item){
return (function (state_15767){var state_val_15768 = (state_15767[(1)]);if((state_val_15768 === (2)))
{var inst_15758 = (state_15767[(2)]);var inst_15759 = cljs.core.nth.call(null,inst_15758,(0),null);var inst_15760 = cljs.core.nth.call(null,inst_15758,(1),null);var inst_15761 = $("#tmpl_home");var inst_15762 = inst_15761.tmpl(inst_15760,tmpl_item);var inst_15763 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_15764 = [inst_15762,key];var inst_15765 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15763,inst_15764);var state_15767__$1 = (function (){var statearr_15769 = state_15767;(statearr_15769[(7)] = inst_15759);
return statearr_15769;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15767__$1,inst_15765);
} else
{if((state_val_15768 === (1)))
{var state_15767__$1 = state_15767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15767__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__15755,map__15755__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__15755,map__15755__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15773 = [null,null,null,null,null,null,null,null];(statearr_15773[(0)] = state_machine__6178__auto__);
(statearr_15773[(1)] = (1));
return statearr_15773;
});
var state_machine__6178__auto____1 = (function (state_15767){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15767);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15774){if((e15774 instanceof Object))
{var ex__6181__auto__ = e15774;var statearr_15775_15777 = state_15767;(statearr_15775_15777[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15767);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15778 = state_15767;
state_15767 = G__15778;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15767){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__15755,map__15755__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15776 = f__6193__auto__.call(null);(statearr_15776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__15755,map__15755__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__15779,key,view){var map__15780 = p__15779;var map__15780__$1 = ((cljs.core.seq_QMARK_.call(null,map__15780))?cljs.core.apply.call(null,cljs.core.hash_map,map__15780):map__15780);var ctx = map__15780__$1;var popupContainer = cljs.core.get.call(null,map__15780__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var c__6192__auto___15800 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___15800,map__15780,map__15780__$1,ctx,popupContainer){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___15800,map__15780,map__15780__$1,ctx,popupContainer){
return (function (state_15790){var state_val_15791 = (state_15790[(1)]);if((state_val_15791 === (2)))
{var inst_15788 = (state_15790[(2)]);var state_15790__$1 = state_15790;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15790__$1,inst_15788);
} else
{if((state_val_15791 === (1)))
{var inst_15781 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094)];var inst_15782 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_15783 = [inst_15782];var inst_15784 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15781,inst_15783);var inst_15785 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_15784];var inst_15786 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15785,null));var state_15790__$1 = state_15790;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15790__$1,(2),tool.react.OnReact,inst_15786);
} else
{return null;
}
}
});})(c__6192__auto___15800,map__15780,map__15780__$1,ctx,popupContainer))
;return ((function (switch__6177__auto__,c__6192__auto___15800,map__15780,map__15780__$1,ctx,popupContainer){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15795 = [null,null,null,null,null,null,null];(statearr_15795[(0)] = state_machine__6178__auto__);
(statearr_15795[(1)] = (1));
return statearr_15795;
});
var state_machine__6178__auto____1 = (function (state_15790){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15790);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15796){if((e15796 instanceof Object))
{var ex__6181__auto__ = e15796;var statearr_15797_15801 = state_15790;(statearr_15797_15801[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15790);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15802 = state_15790;
state_15790 = G__15802;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15790){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___15800,map__15780,map__15780__$1,ctx,popupContainer))
})();var state__6194__auto__ = (function (){var statearr_15798 = f__6193__auto__.call(null);(statearr_15798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___15800);
return statearr_15798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___15800,map__15780,map__15780__$1,ctx,popupContainer))
);
var G__15799 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__15799.appendTo(popupContainer);
G__15799.fadeIn((400));
return G__15799;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__15803,key,modelChan){var map__15804 = p__15803;var map__15804__$1 = ((cljs.core.seq_QMARK_.call(null,map__15804))?cljs.core.apply.call(null,cljs.core.hash_map,map__15804):map__15804);var ctx = map__15804__$1;var tmpl_item = cljs.core.get.call(null,map__15804__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__15804,map__15804__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__15804,map__15804__$1,ctx,tmpl_item){
return (function (state_15816){var state_val_15817 = (state_15816[(1)]);if((state_val_15817 === (2)))
{var inst_15807 = (state_15816[(2)]);var inst_15808 = cljs.core.nth.call(null,inst_15807,(0),null);var inst_15809 = cljs.core.nth.call(null,inst_15807,(1),null);var inst_15810 = $("#tmpl_bigPhoto");var inst_15811 = inst_15810.tmpl(inst_15809,tmpl_item);var inst_15812 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_15813 = [inst_15811,key];var inst_15814 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15812,inst_15813);var state_15816__$1 = (function (){var statearr_15818 = state_15816;(statearr_15818[(7)] = inst_15808);
return statearr_15818;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15816__$1,inst_15814);
} else
{if((state_val_15817 === (1)))
{var state_15816__$1 = state_15816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15816__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__15804,map__15804__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__15804,map__15804__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15822 = [null,null,null,null,null,null,null,null];(statearr_15822[(0)] = state_machine__6178__auto__);
(statearr_15822[(1)] = (1));
return statearr_15822;
});
var state_machine__6178__auto____1 = (function (state_15816){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15816);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15823){if((e15823 instanceof Object))
{var ex__6181__auto__ = e15823;var statearr_15824_15826 = state_15816;(statearr_15824_15826[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15816);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15827 = state_15816;
state_15816 = G__15827;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15816){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__15804,map__15804__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_15825 = f__6193__auto__.call(null);(statearr_15825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__15804,map__15804__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
