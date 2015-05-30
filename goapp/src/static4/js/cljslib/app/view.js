// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33474,key,view){var map__33475 = p__33474;var map__33475__$1 = ((cljs.core.seq_QMARK_.call(null,map__33475))?cljs.core.apply.call(null,cljs.core.hash_map,map__33475):map__33475);var ctx = map__33475__$1;var container = cljs.core.get.call(null,map__33475__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__33476_33495 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__33476_33495.appendTo(container);
G__33476_33495.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__33475,map__33475__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__33475,map__33475__$1,ctx,container){
return (function (state_33486){var state_val_33487 = (state_33486[(1)]);if((state_val_33487 === (2)))
{var inst_33484 = (state_33486[(2)]);var state_33486__$1 = state_33486;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33486__$1,inst_33484);
} else
{if((state_val_33487 === (1)))
{var inst_33477 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_33478 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_33479 = [inst_33478,view];var inst_33480 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33477,inst_33479);var inst_33481 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_33480];var inst_33482 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33481,null));var state_33486__$1 = state_33486;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33486__$1,(2),tool.react.OnReact,inst_33482);
} else
{return null;
}
}
});})(c__6192__auto__,map__33475,map__33475__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__33475,map__33475__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33491 = [null,null,null,null,null,null,null];(statearr_33491[(0)] = state_machine__6178__auto__);
(statearr_33491[(1)] = (1));
return statearr_33491;
});
var state_machine__6178__auto____1 = (function (state_33486){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33486);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33492){if((e33492 instanceof Object))
{var ex__6181__auto__ = e33492;var statearr_33493_33496 = state_33486;(statearr_33493_33496[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33486);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33497 = state_33486;
state_33486 = G__33497;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33486){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__33475,map__33475__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_33494 = f__6193__auto__.call(null);(statearr_33494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_33494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__33475,map__33475__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33498,key,view){var map__33499 = p__33498;var map__33499__$1 = ((cljs.core.seq_QMARK_.call(null,map__33499))?cljs.core.apply.call(null,cljs.core.hash_map,map__33499):map__33499);var ctx = map__33499__$1;var container = cljs.core.get.call(null,map__33499__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__33500 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__33500.remove();
return G__33500;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_33663 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_33664 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_33665 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_33665.off("click");
btn_search_33664.off("click");
mc_modelContainer_33663.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__33582,key,modelChan){var map__33583 = p__33582;var map__33583__$1 = ((cljs.core.seq_QMARK_.call(null,map__33583))?cljs.core.apply.call(null,cljs.core.hash_map,map__33583):map__33583);var ctx = map__33583__$1;var tmpl_item = cljs.core.get.call(null,map__33583__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (state_33604){var state_val_33605 = (state_33604[(1)]);if((state_val_33605 === (2)))
{var inst_33586 = (state_33604[(2)]);var inst_33587 = cljs.core.nth.call(null,inst_33586,(0),null);var inst_33588 = cljs.core.nth.call(null,inst_33586,(1),null);var inst_33589 = $("#tmpl_streetsnap_list");var inst_33590 = inst_33589.tmpl(inst_33588,tmpl_item);var inst_33591 = inst_33590.find("#mc_modelContainer");var inst_33592 = inst_33590.find("#btn_search");var inst_33593 = inst_33590.find("#btn_return");var inst_33594 = (function (){var btn_return = inst_33593;var btn_search = inst_33592;var mc_modelContainer = inst_33591;var elem = inst_33590;var tmpl = inst_33589;var model = inst_33588;var err = inst_33587;var vec__33584 = inst_33586;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (state_33611){var state_val_33612 = (state_33611[(1)]);if((state_val_33612 === (2)))
{var inst_33609 = (state_33611[(2)]);var state_33611__$1 = state_33611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33611__$1,inst_33609);
} else
{if((state_val_33612 === (1)))
{var inst_33606 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_33607 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33606,null));var state_33611__$1 = state_33611;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33611__$1,(2),tool.react.OnReact,inst_33607);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33616 = [null,null,null,null,null,null,null];(statearr_33616[(0)] = state_machine__6178__auto__);
(statearr_33616[(1)] = (1));
return statearr_33616;
});
var state_machine__6178__auto____1 = (function (state_33611){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33611);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33617){if((e33617 instanceof Object))
{var ex__6181__auto__ = e33617;var statearr_33618_33666 = state_33611;(statearr_33618_33666[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33667 = state_33611;
state_33611 = G__33667;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33611){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_33619 = f__6193__auto__.call(null);(statearr_33619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_33619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
})();var inst_33595 = inst_33593.click(inst_33594);var inst_33596 = (function (){var btn_return = inst_33593;var btn_search = inst_33592;var mc_modelContainer = inst_33591;var elem = inst_33590;var tmpl = inst_33589;var model = inst_33588;var err = inst_33587;var vec__33584 = inst_33586;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (state_33628){var state_val_33629 = (state_33628[(1)]);if((state_val_33629 === (2)))
{var inst_33626 = (state_33628[(2)]);var state_33628__$1 = state_33628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33628__$1,inst_33626);
} else
{if((state_val_33629 === (1)))
{var inst_33620 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_33621 = [searchKey];var inst_33622 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33620,inst_33621);var inst_33623 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_33622];var inst_33624 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33623,null));var state_33628__$1 = state_33628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33628__$1,(2),tool.react.OnReact,inst_33624);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33633 = [null,null,null,null,null,null,null];(statearr_33633[(0)] = state_machine__6178__auto__);
(statearr_33633[(1)] = (1));
return statearr_33633;
});
var state_machine__6178__auto____1 = (function (state_33628){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33628);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33634){if((e33634 instanceof Object))
{var ex__6181__auto__ = e33634;var statearr_33635_33668 = state_33628;(statearr_33635_33668[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33669 = state_33628;
state_33628 = G__33669;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33628){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_33636 = f__6193__auto__.call(null);(statearr_33636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_33636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
})();var inst_33597 = inst_33592.click(inst_33596);var inst_33598 = (function (){var btn_return = inst_33593;var btn_search = inst_33592;var mc_modelContainer = inst_33591;var elem = inst_33590;var tmpl = inst_33589;var model = inst_33588;var err = inst_33587;var vec__33584 = inst_33586;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,inst_33596,inst_33597,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,inst_33596,inst_33597,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,inst_33596,inst_33597,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function (state_33646){var state_val_33647 = (state_33646[(1)]);if((state_val_33647 === (2)))
{var inst_33644 = (state_33646[(2)]);var state_33646__$1 = state_33646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33646__$1,inst_33644);
} else
{if((state_val_33647 === (1)))
{var inst_33637 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_33638 = that.id;var inst_33639 = [inst_33638];var inst_33640 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33637,inst_33639);var inst_33641 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_33640];var inst_33642 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33641,null));var state_33646__$1 = state_33646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33646__$1,(2),tool.react.OnReact,inst_33642);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,inst_33596,inst_33597,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,inst_33596,inst_33597,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33651 = [null,null,null,null,null,null,null];(statearr_33651[(0)] = state_machine__6178__auto__);
(statearr_33651[(1)] = (1));
return statearr_33651;
});
var state_machine__6178__auto____1 = (function (state_33646){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33646);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33652){if((e33652 instanceof Object))
{var ex__6181__auto__ = e33652;var statearr_33653_33670 = state_33646;(statearr_33653_33670[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33646);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33671 = state_33646;
state_33646 = G__33671;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33646){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,inst_33596,inst_33597,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_33654 = f__6193__auto__.call(null);(statearr_33654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_33654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,inst_33596,inst_33597,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__33584,inst_33586,inst_33587,inst_33588,inst_33589,inst_33590,inst_33591,inst_33592,inst_33593,inst_33594,inst_33595,inst_33596,inst_33597,state_val_33605,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
})();var inst_33599 = inst_33591.delegate("div[modelFrame]","click",inst_33598);var inst_33600 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_33601 = [inst_33590,name];var inst_33602 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33600,inst_33601);var state_33604__$1 = (function (){var statearr_33655 = state_33604;(statearr_33655[(7)] = inst_33595);
(statearr_33655[(8)] = inst_33597);
(statearr_33655[(9)] = inst_33599);
return statearr_33655;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33604__$1,inst_33602);
} else
{if((state_val_33605 === (1)))
{var state_33604__$1 = state_33604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33604__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33659 = [null,null,null,null,null,null,null,null,null,null];(statearr_33659[(0)] = state_machine__6178__auto__);
(statearr_33659[(1)] = (1));
return statearr_33659;
});
var state_machine__6178__auto____1 = (function (state_33604){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33660){if((e33660 instanceof Object))
{var ex__6181__auto__ = e33660;var statearr_33661_33672 = state_33604;(statearr_33661_33672[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33673 = state_33604;
state_33604 = G__33673;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33604){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_33662 = f__6193__auto__.call(null);(statearr_33662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_33662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__33583,map__33583__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__33859){var map__33860 = p__33859;var map__33860__$1 = ((cljs.core.seq_QMARK_.call(null,map__33860))?cljs.core.apply.call(null,cljs.core.hash_map,map__33860):map__33860);var view = map__33860__$1;var elem = cljs.core.get.call(null,map__33860__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_34044 = elem.find("#mc_historyContainer");var mc_sideContainer_34045 = elem.find("#mc_sideContainer");var mc_bottomContainer_34046 = elem.find("#mc_bottomContainer");var img_stylePicture_34047 = elem.find("#img_stylePicture");var btn_share_34048 = elem.find("#btn_share");var btn_fullscreen_34049 = elem.find("#btn_fullscreen");var btn_more_34050 = elem.find("#btn_more");mc_modelContainer_34044.undelegate("img","click");
mc_sideContainer_34045.undelegate("img","click");
mc_bottomContainer_34046.undelegate("img","click");
img_stylePicture_34047.off("click");
btn_share_34048.off("click");
btn_fullscreen_34049.off("click");
btn_more_34050.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__33861){var map__33862 = p__33861;var map__33862__$1 = ((cljs.core.seq_QMARK_.call(null,map__33862))?cljs.core.apply.call(null,cljs.core.hash_map,map__33862):map__33862);var view = map__33862__$1;var elem = cljs.core.get.call(null,map__33862__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_34051 = elem.find("#mc_3dmask");var c__6192__auto___34052 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___34052,mc_3dmask_34051,map__33862,map__33862__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___34052,mc_3dmask_34051,map__33862,map__33862__$1,view,elem){
return (function (state_33868){var state_val_33869 = (state_33868[(1)]);if((state_val_33869 === (2)))
{var inst_33865 = (state_33868[(2)]);var inst_33866 = mc_3dmask_34051.fadeOut((400));var state_33868__$1 = (function (){var statearr_33870 = state_33868;(statearr_33870[(7)] = inst_33865);
return statearr_33870;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33868__$1,inst_33866);
} else
{if((state_val_33869 === (1)))
{var inst_33863 = cljs.core.async.timeout.call(null,(5000));var state_33868__$1 = state_33868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33868__$1,(2),inst_33863);
} else
{return null;
}
}
});})(c__6192__auto___34052,mc_3dmask_34051,map__33862,map__33862__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___34052,mc_3dmask_34051,map__33862,map__33862__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33874 = [null,null,null,null,null,null,null,null];(statearr_33874[(0)] = state_machine__6178__auto__);
(statearr_33874[(1)] = (1));
return statearr_33874;
});
var state_machine__6178__auto____1 = (function (state_33868){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33868);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33875){if((e33875 instanceof Object))
{var ex__6181__auto__ = e33875;var statearr_33876_34053 = state_33868;(statearr_33876_34053[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33868);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34054 = state_33868;
state_33868 = G__34054;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33868){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___34052,mc_3dmask_34051,map__33862,map__33862__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_33877 = f__6193__auto__.call(null);(statearr_33877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___34052);
return statearr_33877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___34052,mc_3dmask_34051,map__33862,map__33862__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__33878,key,modelChan){var map__33879 = p__33878;var map__33879__$1 = ((cljs.core.seq_QMARK_.call(null,map__33879))?cljs.core.apply.call(null,cljs.core.hash_map,map__33879):map__33879);var ctx = map__33879__$1;var tmpl_item = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (state_33912){var state_val_33913 = (state_33912[(1)]);if((state_val_33913 === (2)))
{var inst_33882 = (state_33912[(2)]);var inst_33883 = cljs.core.nth.call(null,inst_33882,(0),null);var inst_33884 = cljs.core.nth.call(null,inst_33882,(1),null);var inst_33885 = $("#tmpl_streetsnap");var inst_33886 = inst_33885.tmpl(inst_33884,tmpl_item);var inst_33887 = inst_33886.find("#mc_historyContainer");var inst_33888 = inst_33886.find("#mc_sideContainer");var inst_33889 = inst_33886.find("#mc_bottomContainer");var inst_33890 = inst_33886.find("#img_stylePicture");var inst_33891 = inst_33886.find("#btn_share");var inst_33892 = inst_33886.find("#btn_fullscreen");var inst_33893 = inst_33886.find("#btn_more");var inst_33894 = (function (){var model = inst_33884;var btn_more = inst_33893;var mc_sideContainer = inst_33888;var mc_historyContainer = inst_33887;var err = inst_33883;var tmpl = inst_33885;var img_stylePicture = inst_33890;var elem = inst_33886;var btn_share = inst_33891;var mc_bottomContainer = inst_33889;var vec__33880 = inst_33882;var btn_fullscreen = inst_33892;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (state_33919){var state_val_33920 = (state_33919[(1)]);if((state_val_33920 === (2)))
{var inst_33917 = (state_33919[(2)]);var state_33919__$1 = state_33919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33919__$1,inst_33917);
} else
{if((state_val_33920 === (1)))
{var inst_33914 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_33915 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33914,null));var state_33919__$1 = state_33919;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33919__$1,(2),tool.react.OnReact,inst_33915);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33924 = [null,null,null,null,null,null,null];(statearr_33924[(0)] = state_machine__6178__auto__);
(statearr_33924[(1)] = (1));
return statearr_33924;
});
var state_machine__6178__auto____1 = (function (state_33919){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33919);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33925){if((e33925 instanceof Object))
{var ex__6181__auto__ = e33925;var statearr_33926_34055 = state_33919;(statearr_33926_34055[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33919);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34056 = state_33919;
state_33919 = G__34056;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33919){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_33927 = f__6193__auto__.call(null);(statearr_33927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_33927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var inst_33895 = inst_33893.on("click",inst_33894);var inst_33896 = (function (){var model = inst_33884;var btn_more = inst_33893;var mc_sideContainer = inst_33888;var mc_historyContainer = inst_33887;var err = inst_33883;var tmpl = inst_33885;var img_stylePicture = inst_33890;var elem = inst_33886;var btn_share = inst_33891;var mc_bottomContainer = inst_33889;var vec__33880 = inst_33882;var btn_fullscreen = inst_33892;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (state_33936){var state_val_33937 = (state_33936[(1)]);if((state_val_33937 === (2)))
{var inst_33934 = (state_33936[(2)]);var state_33936__$1 = state_33936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33936__$1,inst_33934);
} else
{if((state_val_33937 === (1)))
{var inst_33928 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_33929 = [model];var inst_33930 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33928,inst_33929);var inst_33931 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_33930];var inst_33932 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33931,null));var state_33936__$1 = state_33936;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33936__$1,(2),tool.react.OnReact,inst_33932);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33941 = [null,null,null,null,null,null,null];(statearr_33941[(0)] = state_machine__6178__auto__);
(statearr_33941[(1)] = (1));
return statearr_33941;
});
var state_machine__6178__auto____1 = (function (state_33936){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33936);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33942){if((e33942 instanceof Object))
{var ex__6181__auto__ = e33942;var statearr_33943_34057 = state_33936;(statearr_33943_34057[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33936);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34058 = state_33936;
state_33936 = G__34058;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33936){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_33944 = f__6193__auto__.call(null);(statearr_33944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_33944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var inst_33897 = inst_33892.on("click",inst_33896);var inst_33898 = (function (){var model = inst_33884;var btn_more = inst_33893;var mc_sideContainer = inst_33888;var mc_historyContainer = inst_33887;var err = inst_33883;var tmpl = inst_33885;var img_stylePicture = inst_33890;var elem = inst_33886;var btn_share = inst_33891;var mc_bottomContainer = inst_33889;var vec__33880 = inst_33882;var btn_fullscreen = inst_33892;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (state_33954){var state_val_33955 = (state_33954[(1)]);if((state_val_33955 === (2)))
{var inst_33952 = (state_33954[(2)]);var state_33954__$1 = state_33954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33954__$1,inst_33952);
} else
{if((state_val_33955 === (1)))
{var inst_33945 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_33946 = model.styleUrl;var inst_33947 = [inst_33946];var inst_33948 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33945,inst_33947);var inst_33949 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_33948];var inst_33950 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33949,null));var state_33954__$1 = state_33954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33954__$1,(2),tool.react.OnReact,inst_33950);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33959 = [null,null,null,null,null,null,null];(statearr_33959[(0)] = state_machine__6178__auto__);
(statearr_33959[(1)] = (1));
return statearr_33959;
});
var state_machine__6178__auto____1 = (function (state_33954){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33954);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33960){if((e33960 instanceof Object))
{var ex__6181__auto__ = e33960;var statearr_33961_34059 = state_33954;(statearr_33961_34059[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33954);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33960;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34060 = state_33954;
state_33954 = G__34060;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33954){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_33962 = f__6193__auto__.call(null);(statearr_33962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_33962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var inst_33899 = inst_33890.on("click",inst_33898);var inst_33900 = (function (){var model = inst_33884;var btn_more = inst_33893;var mc_sideContainer = inst_33888;var mc_historyContainer = inst_33887;var err = inst_33883;var tmpl = inst_33885;var img_stylePicture = inst_33890;var elem = inst_33886;var btn_share = inst_33891;var mc_bottomContainer = inst_33889;var vec__33880 = inst_33882;var btn_fullscreen = inst_33892;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (state_33971){var state_val_33972 = (state_33971[(1)]);if((state_val_33972 === (2)))
{var inst_33969 = (state_33971[(2)]);var state_33971__$1 = state_33971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33971__$1,inst_33969);
} else
{if((state_val_33972 === (1)))
{var inst_33963 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_33964 = [model];var inst_33965 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33963,inst_33964);var inst_33966 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_33965];var inst_33967 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33966,null));var state_33971__$1 = state_33971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33971__$1,(2),tool.react.OnReact,inst_33967);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33976 = [null,null,null,null,null,null,null];(statearr_33976[(0)] = state_machine__6178__auto__);
(statearr_33976[(1)] = (1));
return statearr_33976;
});
var state_machine__6178__auto____1 = (function (state_33971){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33971);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33977){if((e33977 instanceof Object))
{var ex__6181__auto__ = e33977;var statearr_33978_34061 = state_33971;(statearr_33978_34061[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33971);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34062 = state_33971;
state_33971 = G__34062;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33971){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_33979 = f__6193__auto__.call(null);(statearr_33979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_33979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var inst_33901 = inst_33891.on("click",inst_33900);var inst_33902 = (function (){var model = inst_33884;var btn_more = inst_33893;var mc_sideContainer = inst_33888;var mc_historyContainer = inst_33887;var err = inst_33883;var tmpl = inst_33885;var img_stylePicture = inst_33890;var elem = inst_33886;var btn_share = inst_33891;var mc_bottomContainer = inst_33889;var vec__33880 = inst_33882;var btn_fullscreen = inst_33892;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (state_33990){var state_val_33991 = (state_33990[(1)]);if((state_val_33991 === (2)))
{var inst_33988 = (state_33990[(2)]);var state_33990__$1 = state_33990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33990__$1,inst_33988);
} else
{if((state_val_33991 === (1)))
{var inst_33980 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_33981 = that.id;var inst_33982 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33981));var inst_33983 = [inst_33982];var inst_33984 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33980,inst_33983);var inst_33985 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_33984];var inst_33986 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33985,null));var state_33990__$1 = state_33990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33990__$1,(2),tool.react.OnReact,inst_33986);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_33995 = [null,null,null,null,null,null,null];(statearr_33995[(0)] = state_machine__6178__auto__);
(statearr_33995[(1)] = (1));
return statearr_33995;
});
var state_machine__6178__auto____1 = (function (state_33990){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33990);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e33996){if((e33996 instanceof Object))
{var ex__6181__auto__ = e33996;var statearr_33997_34063 = state_33990;(statearr_33997_34063[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34064 = state_33990;
state_33990 = G__34064;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33990){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_33998 = f__6193__auto__.call(null);(statearr_33998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_33998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var inst_33903 = inst_33888.delegate("img","click",inst_33902);var inst_33904 = (function (){var model = inst_33884;var btn_more = inst_33893;var mc_sideContainer = inst_33888;var mc_historyContainer = inst_33887;var err = inst_33883;var tmpl = inst_33885;var img_stylePicture = inst_33890;var elem = inst_33886;var btn_share = inst_33891;var mc_bottomContainer = inst_33889;var vec__33880 = inst_33882;var btn_fullscreen = inst_33892;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (state_34009){var state_val_34010 = (state_34009[(1)]);if((state_val_34010 === (2)))
{var inst_34007 = (state_34009[(2)]);var state_34009__$1 = state_34009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34009__$1,inst_34007);
} else
{if((state_val_34010 === (1)))
{var inst_33999 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_34000 = that.id;var inst_34001 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34000));var inst_34002 = [inst_34001];var inst_34003 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33999,inst_34002);var inst_34004 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_34003];var inst_34005 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34004,null));var state_34009__$1 = state_34009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34009__$1,(2),tool.react.OnReact,inst_34005);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34014 = [null,null,null,null,null,null,null];(statearr_34014[(0)] = state_machine__6178__auto__);
(statearr_34014[(1)] = (1));
return statearr_34014;
});
var state_machine__6178__auto____1 = (function (state_34009){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34009);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34015){if((e34015 instanceof Object))
{var ex__6181__auto__ = e34015;var statearr_34016_34065 = state_34009;(statearr_34016_34065[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34066 = state_34009;
state_34009 = G__34066;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34009){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34017 = f__6193__auto__.call(null);(statearr_34017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var inst_33905 = inst_33889.delegate("img","click",inst_33904);var inst_33906 = (function (){var model = inst_33884;var btn_more = inst_33893;var mc_sideContainer = inst_33888;var mc_historyContainer = inst_33887;var err = inst_33883;var tmpl = inst_33885;var img_stylePicture = inst_33890;var elem = inst_33886;var btn_share = inst_33891;var mc_bottomContainer = inst_33889;var vec__33880 = inst_33882;var btn_fullscreen = inst_33892;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,inst_33904,inst_33905,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,inst_33904,inst_33905,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,inst_33904,inst_33905,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function (state_34027){var state_val_34028 = (state_34027[(1)]);if((state_val_34028 === (2)))
{var inst_34025 = (state_34027[(2)]);var state_34027__$1 = state_34027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34027__$1,inst_34025);
} else
{if((state_val_34028 === (1)))
{var inst_34018 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_34019 = that.id;var inst_34020 = [inst_34019];var inst_34021 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34018,inst_34020);var inst_34022 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_34021];var inst_34023 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34022,null));var state_34027__$1 = state_34027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34027__$1,(2),tool.react.OnReact,inst_34023);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,inst_33904,inst_33905,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,inst_33904,inst_33905,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34032 = [null,null,null,null,null,null,null];(statearr_34032[(0)] = state_machine__6178__auto__);
(statearr_34032[(1)] = (1));
return statearr_34032;
});
var state_machine__6178__auto____1 = (function (state_34027){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34027);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34033){if((e34033 instanceof Object))
{var ex__6181__auto__ = e34033;var statearr_34034_34067 = state_34027;(statearr_34034_34067[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34068 = state_34027;
state_34027 = G__34068;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34027){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,inst_33904,inst_33905,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34035 = f__6193__auto__.call(null);(statearr_34035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,inst_33904,inst_33905,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,vec__33880,btn_fullscreen,inst_33882,inst_33883,inst_33884,inst_33885,inst_33886,inst_33887,inst_33888,inst_33889,inst_33890,inst_33891,inst_33892,inst_33893,inst_33894,inst_33895,inst_33896,inst_33897,inst_33898,inst_33899,inst_33900,inst_33901,inst_33902,inst_33903,inst_33904,inst_33905,state_val_33913,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var inst_33907 = inst_33887.delegate("img","click",inst_33906);var inst_33908 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_33909 = [inst_33886,name];var inst_33910 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33908,inst_33909);var state_33912__$1 = (function (){var statearr_34036 = state_33912;(statearr_34036[(7)] = inst_33901);
(statearr_34036[(8)] = inst_33899);
(statearr_34036[(9)] = inst_33897);
(statearr_34036[(10)] = inst_33907);
(statearr_34036[(11)] = inst_33905);
(statearr_34036[(12)] = inst_33895);
(statearr_34036[(13)] = inst_33903);
return statearr_34036;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33912__$1,inst_33910);
} else
{if((state_val_33913 === (1)))
{var state_33912__$1 = state_33912;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33912__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34040[(0)] = state_machine__6178__auto__);
(statearr_34040[(1)] = (1));
return statearr_34040;
});
var state_machine__6178__auto____1 = (function (state_33912){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_33912);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34041){if((e34041 instanceof Object))
{var ex__6181__auto__ = e34041;var statearr_34042_34069 = state_33912;(statearr_34042_34069[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33912);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34070 = state_33912;
state_33912 = G__34070;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_33912){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_33912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34043 = f__6193__auto__.call(null);(statearr_34043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_34043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__33879,map__33879__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__34071){var map__34072 = p__34071;var map__34072__$1 = ((cljs.core.seq_QMARK_.call(null,map__34072))?cljs.core.apply.call(null,cljs.core.hash_map,map__34072):map__34072);var view = map__34072__$1;var elem = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_34088 = elem.find("#mc_3dmask");var c__6192__auto___34089 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___34089,mc_3dmask_34088,map__34072,map__34072__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___34089,mc_3dmask_34088,map__34072,map__34072__$1,view,elem){
return (function (state_34078){var state_val_34079 = (state_34078[(1)]);if((state_val_34079 === (2)))
{var inst_34075 = (state_34078[(2)]);var inst_34076 = mc_3dmask_34088.fadeOut((400));var state_34078__$1 = (function (){var statearr_34080 = state_34078;(statearr_34080[(7)] = inst_34075);
return statearr_34080;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34078__$1,inst_34076);
} else
{if((state_val_34079 === (1)))
{var inst_34073 = cljs.core.async.timeout.call(null,(5000));var state_34078__$1 = state_34078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34078__$1,(2),inst_34073);
} else
{return null;
}
}
});})(c__6192__auto___34089,mc_3dmask_34088,map__34072,map__34072__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___34089,mc_3dmask_34088,map__34072,map__34072__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34084 = [null,null,null,null,null,null,null,null];(statearr_34084[(0)] = state_machine__6178__auto__);
(statearr_34084[(1)] = (1));
return statearr_34084;
});
var state_machine__6178__auto____1 = (function (state_34078){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34078);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34085){if((e34085 instanceof Object))
{var ex__6181__auto__ = e34085;var statearr_34086_34090 = state_34078;(statearr_34086_34090[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34091 = state_34078;
state_34078 = G__34091;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34078){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___34089,mc_3dmask_34088,map__34072,map__34072__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_34087 = f__6193__auto__.call(null);(statearr_34087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___34089);
return statearr_34087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___34089,mc_3dmask_34088,map__34072,map__34072__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__34092,key,modelChan){var map__34093 = p__34092;var map__34093__$1 = ((cljs.core.seq_QMARK_.call(null,map__34093))?cljs.core.apply.call(null,cljs.core.hash_map,map__34093):map__34093);var ctx = map__34093__$1;var tmpl_item = cljs.core.get.call(null,map__34093__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__34093,map__34093__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__34093,map__34093__$1,ctx,tmpl_item){
return (function (state_34105){var state_val_34106 = (state_34105[(1)]);if((state_val_34106 === (2)))
{var inst_34096 = (state_34105[(2)]);var inst_34097 = cljs.core.nth.call(null,inst_34096,(0),null);var inst_34098 = cljs.core.nth.call(null,inst_34096,(1),null);var inst_34099 = $("#tmpl_home");var inst_34100 = inst_34099.tmpl(inst_34098,tmpl_item);var inst_34101 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_34102 = [inst_34100,key];var inst_34103 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34101,inst_34102);var state_34105__$1 = (function (){var statearr_34107 = state_34105;(statearr_34107[(7)] = inst_34097);
return statearr_34107;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34105__$1,inst_34103);
} else
{if((state_val_34106 === (1)))
{var state_34105__$1 = state_34105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34105__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__34093,map__34093__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__34093,map__34093__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34111 = [null,null,null,null,null,null,null,null];(statearr_34111[(0)] = state_machine__6178__auto__);
(statearr_34111[(1)] = (1));
return statearr_34111;
});
var state_machine__6178__auto____1 = (function (state_34105){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34105);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34112){if((e34112 instanceof Object))
{var ex__6181__auto__ = e34112;var statearr_34113_34115 = state_34105;(statearr_34113_34115[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34105);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34116 = state_34105;
state_34105 = G__34116;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34105){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__34093,map__34093__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34114 = f__6193__auto__.call(null);(statearr_34114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_34114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__34093,map__34093__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__34117,key,view){var map__34118 = p__34117;var map__34118__$1 = ((cljs.core.seq_QMARK_.call(null,map__34118))?cljs.core.apply.call(null,cljs.core.hash_map,map__34118):map__34118);var ctx = map__34118__$1;var popupContainer = cljs.core.get.call(null,map__34118__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__34119 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__34119.appendTo(popupContainer);
G__34119.fadeIn((400));
return G__34119;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__34120,key,p__34121){var map__34122 = p__34120;var map__34122__$1 = ((cljs.core.seq_QMARK_.call(null,map__34122))?cljs.core.apply.call(null,cljs.core.hash_map,map__34122):map__34122);var ctx = map__34122__$1;var container = cljs.core.get.call(null,map__34122__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__34123 = p__34121;var map__34123__$1 = ((cljs.core.seq_QMARK_.call(null,map__34123))?cljs.core.apply.call(null,cljs.core.hash_map,map__34123):map__34123);var view = map__34123__$1;var elem = cljs.core.get.call(null,map__34123__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__34122,map__34122__$1,ctx,container,map__34123,map__34123__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__34122,map__34122__$1,ctx,container,map__34123,map__34123__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__34124,key,modelChan){var map__34125 = p__34124;var map__34125__$1 = ((cljs.core.seq_QMARK_.call(null,map__34125))?cljs.core.apply.call(null,cljs.core.hash_map,map__34125):map__34125);var ctx = map__34125__$1;var tmpl_item = cljs.core.get.call(null,map__34125__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item){
return (function (state_34140){var state_val_34141 = (state_34140[(1)]);if((state_val_34141 === (2)))
{var inst_34128 = (state_34140[(2)]);var inst_34129 = cljs.core.nth.call(null,inst_34128,(0),null);var inst_34130 = cljs.core.nth.call(null,inst_34128,(1),null);var inst_34131 = $("#tmpl_bigPhoto");var inst_34132 = inst_34131.tmpl(inst_34130,tmpl_item);var inst_34133 = inst_34132.find("#mc_bigPhotoFixPosition");var inst_34134 = (function (){var back = inst_34133;var elem = inst_34132;var tmpl = inst_34131;var model = inst_34130;var err = inst_34129;var vec__34126 = inst_34128;return ((function (back,elem,tmpl,model,err,vec__34126,inst_34128,inst_34129,inst_34130,inst_34131,inst_34132,inst_34133,state_val_34141,c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__34126,inst_34128,inst_34129,inst_34130,inst_34131,inst_34132,inst_34133,state_val_34141,c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__34126,inst_34128,inst_34129,inst_34130,inst_34131,inst_34132,inst_34133,state_val_34141,c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item){
return (function (state_34147){var state_val_34148 = (state_34147[(1)]);if((state_val_34148 === (2)))
{var inst_34145 = (state_34147[(2)]);var state_34147__$1 = state_34147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34147__$1,inst_34145);
} else
{if((state_val_34148 === (1)))
{var inst_34142 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_34143 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34142,null));var state_34147__$1 = state_34147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34147__$1,(2),tool.react.OnReact,inst_34143);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__34126,inst_34128,inst_34129,inst_34130,inst_34131,inst_34132,inst_34133,state_val_34141,c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__34126,inst_34128,inst_34129,inst_34130,inst_34131,inst_34132,inst_34133,state_val_34141,c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34152 = [null,null,null,null,null,null,null];(statearr_34152[(0)] = state_machine__6178__auto__);
(statearr_34152[(1)] = (1));
return statearr_34152;
});
var state_machine__6178__auto____1 = (function (state_34147){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34147);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34153){if((e34153 instanceof Object))
{var ex__6181__auto__ = e34153;var statearr_34154_34164 = state_34147;(statearr_34154_34164[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34165 = state_34147;
state_34147 = G__34165;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34147){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__34126,inst_34128,inst_34129,inst_34130,inst_34131,inst_34132,inst_34133,state_val_34141,c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34155 = f__6193__auto__.call(null);(statearr_34155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_34155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__34126,inst_34128,inst_34129,inst_34130,inst_34131,inst_34132,inst_34133,state_val_34141,c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__34126,inst_34128,inst_34129,inst_34130,inst_34131,inst_34132,inst_34133,state_val_34141,c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item))
})();var inst_34135 = inst_34133.on("click",inst_34134);var inst_34136 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_34137 = [inst_34132,key];var inst_34138 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34136,inst_34137);var state_34140__$1 = (function (){var statearr_34156 = state_34140;(statearr_34156[(7)] = inst_34135);
return statearr_34156;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34140__$1,inst_34138);
} else
{if((state_val_34141 === (1)))
{var state_34140__$1 = state_34140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34140__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_34160 = [null,null,null,null,null,null,null,null];(statearr_34160[(0)] = state_machine__6178__auto__);
(statearr_34160[(1)] = (1));
return statearr_34160;
});
var state_machine__6178__auto____1 = (function (state_34140){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34140);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e34161){if((e34161 instanceof Object))
{var ex__6181__auto__ = e34161;var statearr_34162_34166 = state_34140;(statearr_34162_34166[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34167 = state_34140;
state_34140 = G__34167;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34140){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_34163 = f__6193__auto__.call(null);(statearr_34163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_34163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__34125,map__34125__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
