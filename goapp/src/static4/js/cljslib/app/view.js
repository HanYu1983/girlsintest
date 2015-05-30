// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__20762,key,view){var map__20763 = p__20762;var map__20763__$1 = ((cljs.core.seq_QMARK_.call(null,map__20763))?cljs.core.apply.call(null,cljs.core.hash_map,map__20763):map__20763);var ctx = map__20763__$1;var container = cljs.core.get.call(null,map__20763__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var c__6192__auto___20783 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___20783,map__20763,map__20763__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___20783,map__20763,map__20763__$1,ctx,container){
return (function (state_20773){var state_val_20774 = (state_20773[(1)]);if((state_val_20774 === (2)))
{var inst_20771 = (state_20773[(2)]);var state_20773__$1 = state_20773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20773__$1,inst_20771);
} else
{if((state_val_20774 === (1)))
{var inst_20764 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_20765 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_20766 = [inst_20765,view];var inst_20767 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20764,inst_20766);var inst_20768 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_20767];var inst_20769 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20768,null));var state_20773__$1 = state_20773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20773__$1,(2),tool.react.OnReact,inst_20769);
} else
{return null;
}
}
});})(c__6192__auto___20783,map__20763,map__20763__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto___20783,map__20763,map__20763__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20778 = [null,null,null,null,null,null,null];(statearr_20778[(0)] = state_machine__6178__auto__);
(statearr_20778[(1)] = (1));
return statearr_20778;
});
var state_machine__6178__auto____1 = (function (state_20773){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20773);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20779){if((e20779 instanceof Object))
{var ex__6181__auto__ = e20779;var statearr_20780_20784 = state_20773;(statearr_20780_20784[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20773);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20785 = state_20773;
state_20773 = G__20785;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20773){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___20783,map__20763,map__20763__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_20781 = f__6193__auto__.call(null);(statearr_20781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___20783);
return statearr_20781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___20783,map__20763,map__20763__$1,ctx,container))
);
var G__20782 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__20782.appendTo(container);
G__20782.fadeIn((400));
return G__20782;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__20786,key,view){var map__20787 = p__20786;var map__20787__$1 = ((cljs.core.seq_QMARK_.call(null,map__20787))?cljs.core.apply.call(null,cljs.core.hash_map,map__20787):map__20787);var ctx = map__20787__$1;var container = cljs.core.get.call(null,map__20787__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__20788 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__20788.remove();
return G__20788;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_20951 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_20952 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_20953 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_20953.off("click");
btn_search_20952.off("click");
mc_modelContainer_20951.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__20870,key,modelChan){var map__20871 = p__20870;var map__20871__$1 = ((cljs.core.seq_QMARK_.call(null,map__20871))?cljs.core.apply.call(null,cljs.core.hash_map,map__20871):map__20871);var ctx = map__20871__$1;var tmpl_item = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (state_20892){var state_val_20893 = (state_20892[(1)]);if((state_val_20893 === (2)))
{var inst_20874 = (state_20892[(2)]);var inst_20875 = cljs.core.nth.call(null,inst_20874,(0),null);var inst_20876 = cljs.core.nth.call(null,inst_20874,(1),null);var inst_20877 = $("#tmpl_streetsnap_list");var inst_20878 = inst_20877.tmpl(inst_20876,tmpl_item);var inst_20879 = inst_20878.find("#mc_modelContainer");var inst_20880 = inst_20878.find("#btn_search");var inst_20881 = inst_20878.find("#btn_return");var inst_20882 = (function (){var btn_return = inst_20881;var btn_search = inst_20880;var mc_modelContainer = inst_20879;var elem = inst_20878;var tmpl = inst_20877;var model = inst_20876;var err = inst_20875;var vec__20872 = inst_20874;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (state_20899){var state_val_20900 = (state_20899[(1)]);if((state_val_20900 === (2)))
{var inst_20897 = (state_20899[(2)]);var state_20899__$1 = state_20899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20899__$1,inst_20897);
} else
{if((state_val_20900 === (1)))
{var inst_20894 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_20895 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20894,null));var state_20899__$1 = state_20899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20899__$1,(2),tool.react.OnReact,inst_20895);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20904 = [null,null,null,null,null,null,null];(statearr_20904[(0)] = state_machine__6178__auto__);
(statearr_20904[(1)] = (1));
return statearr_20904;
});
var state_machine__6178__auto____1 = (function (state_20899){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20899);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20905){if((e20905 instanceof Object))
{var ex__6181__auto__ = e20905;var statearr_20906_20954 = state_20899;(statearr_20906_20954[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20955 = state_20899;
state_20899 = G__20955;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20899){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_20907 = f__6193__auto__.call(null);(statearr_20907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_20907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
})();var inst_20883 = inst_20881.click(inst_20882);var inst_20884 = (function (){var btn_return = inst_20881;var btn_search = inst_20880;var mc_modelContainer = inst_20879;var elem = inst_20878;var tmpl = inst_20877;var model = inst_20876;var err = inst_20875;var vec__20872 = inst_20874;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (state_20916){var state_val_20917 = (state_20916[(1)]);if((state_val_20917 === (2)))
{var inst_20914 = (state_20916[(2)]);var state_20916__$1 = state_20916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20916__$1,inst_20914);
} else
{if((state_val_20917 === (1)))
{var inst_20908 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_20909 = [searchKey];var inst_20910 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20908,inst_20909);var inst_20911 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_20910];var inst_20912 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20911,null));var state_20916__$1 = state_20916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20916__$1,(2),tool.react.OnReact,inst_20912);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20921 = [null,null,null,null,null,null,null];(statearr_20921[(0)] = state_machine__6178__auto__);
(statearr_20921[(1)] = (1));
return statearr_20921;
});
var state_machine__6178__auto____1 = (function (state_20916){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20916);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20922){if((e20922 instanceof Object))
{var ex__6181__auto__ = e20922;var statearr_20923_20956 = state_20916;(statearr_20923_20956[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20957 = state_20916;
state_20916 = G__20957;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20916){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_20924 = f__6193__auto__.call(null);(statearr_20924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_20924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
})();var inst_20885 = inst_20880.click(inst_20884);var inst_20886 = (function (){var btn_return = inst_20881;var btn_search = inst_20880;var mc_modelContainer = inst_20879;var elem = inst_20878;var tmpl = inst_20877;var model = inst_20876;var err = inst_20875;var vec__20872 = inst_20874;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,inst_20884,inst_20885,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,inst_20884,inst_20885,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,inst_20884,inst_20885,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function (state_20934){var state_val_20935 = (state_20934[(1)]);if((state_val_20935 === (2)))
{var inst_20932 = (state_20934[(2)]);var state_20934__$1 = state_20934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20934__$1,inst_20932);
} else
{if((state_val_20935 === (1)))
{var inst_20925 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_20926 = that.id;var inst_20927 = [inst_20926];var inst_20928 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20925,inst_20927);var inst_20929 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_20928];var inst_20930 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20929,null));var state_20934__$1 = state_20934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20934__$1,(2),tool.react.OnReact,inst_20930);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,inst_20884,inst_20885,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,inst_20884,inst_20885,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20939 = [null,null,null,null,null,null,null];(statearr_20939[(0)] = state_machine__6178__auto__);
(statearr_20939[(1)] = (1));
return statearr_20939;
});
var state_machine__6178__auto____1 = (function (state_20934){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20934);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20940){if((e20940 instanceof Object))
{var ex__6181__auto__ = e20940;var statearr_20941_20958 = state_20934;(statearr_20941_20958[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20934);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20959 = state_20934;
state_20934 = G__20959;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20934){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,inst_20884,inst_20885,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_20942 = f__6193__auto__.call(null);(statearr_20942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_20942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,inst_20884,inst_20885,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20872,inst_20874,inst_20875,inst_20876,inst_20877,inst_20878,inst_20879,inst_20880,inst_20881,inst_20882,inst_20883,inst_20884,inst_20885,state_val_20893,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
})();var inst_20887 = inst_20879.delegate("div[modelFrame]","click",inst_20886);var inst_20888 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_20889 = [inst_20878,name];var inst_20890 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20888,inst_20889);var state_20892__$1 = (function (){var statearr_20943 = state_20892;(statearr_20943[(7)] = inst_20883);
(statearr_20943[(8)] = inst_20887);
(statearr_20943[(9)] = inst_20885);
return statearr_20943;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20892__$1,inst_20890);
} else
{if((state_val_20893 === (1)))
{var state_20892__$1 = state_20892;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20947 = [null,null,null,null,null,null,null,null,null,null];(statearr_20947[(0)] = state_machine__6178__auto__);
(statearr_20947[(1)] = (1));
return statearr_20947;
});
var state_machine__6178__auto____1 = (function (state_20892){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20892);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20948){if((e20948 instanceof Object))
{var ex__6181__auto__ = e20948;var statearr_20949_20960 = state_20892;(statearr_20949_20960[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20892);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20961 = state_20892;
state_20892 = G__20961;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20892){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_20950 = f__6193__auto__.call(null);(statearr_20950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_20950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__20871,map__20871__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__21111){var map__21112 = p__21111;var map__21112__$1 = ((cljs.core.seq_QMARK_.call(null,map__21112))?cljs.core.apply.call(null,cljs.core.hash_map,map__21112):map__21112);var view = map__21112__$1;var elem = cljs.core.get.call(null,map__21112__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_21260 = elem.find("#mc_historyContainer");var mc_sideContainer_21261 = elem.find("#mc_sideContainer");var mc_bottomContainer_21262 = elem.find("#mc_bottomContainer");var img_stylePicture_21263 = elem.find("#img_stylePicture");var btn_share_21264 = elem.find("#btn_share");mc_modelContainer_21260.undelegate("img","click");
mc_sideContainer_21261.undelegate("img","click");
mc_bottomContainer_21262.undelegate("img","click");
img_stylePicture_21263.off("click");
btn_share_21264.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__21113){var map__21114 = p__21113;var map__21114__$1 = ((cljs.core.seq_QMARK_.call(null,map__21114))?cljs.core.apply.call(null,cljs.core.hash_map,map__21114):map__21114);var view = map__21114__$1;var elem = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_21265 = elem.find("#mc_3dmask");var c__6192__auto___21266 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___21266,mc_3dmask_21265,map__21114,map__21114__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___21266,mc_3dmask_21265,map__21114,map__21114__$1,view,elem){
return (function (state_21120){var state_val_21121 = (state_21120[(1)]);if((state_val_21121 === (2)))
{var inst_21117 = (state_21120[(2)]);var inst_21118 = mc_3dmask_21265.fadeOut((400));var state_21120__$1 = (function (){var statearr_21122 = state_21120;(statearr_21122[(7)] = inst_21117);
return statearr_21122;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21120__$1,inst_21118);
} else
{if((state_val_21121 === (1)))
{var inst_21115 = cljs.core.async.timeout.call(null,(5000));var state_21120__$1 = state_21120;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21120__$1,(2),inst_21115);
} else
{return null;
}
}
});})(c__6192__auto___21266,mc_3dmask_21265,map__21114,map__21114__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___21266,mc_3dmask_21265,map__21114,map__21114__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21126 = [null,null,null,null,null,null,null,null];(statearr_21126[(0)] = state_machine__6178__auto__);
(statearr_21126[(1)] = (1));
return statearr_21126;
});
var state_machine__6178__auto____1 = (function (state_21120){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21120);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21127){if((e21127 instanceof Object))
{var ex__6181__auto__ = e21127;var statearr_21128_21267 = state_21120;(statearr_21128_21267[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21120);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21268 = state_21120;
state_21120 = G__21268;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21120){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___21266,mc_3dmask_21265,map__21114,map__21114__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_21129 = f__6193__auto__.call(null);(statearr_21129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___21266);
return statearr_21129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___21266,mc_3dmask_21265,map__21114,map__21114__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__21130,key,modelChan){var map__21131 = p__21130;var map__21131__$1 = ((cljs.core.seq_QMARK_.call(null,map__21131))?cljs.core.apply.call(null,cljs.core.hash_map,map__21131):map__21131);var ctx = map__21131__$1;var tmpl_item = cljs.core.get.call(null,map__21131__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (state_21159){var state_val_21160 = (state_21159[(1)]);if((state_val_21160 === (2)))
{var inst_21134 = (state_21159[(2)]);var inst_21135 = cljs.core.nth.call(null,inst_21134,(0),null);var inst_21136 = cljs.core.nth.call(null,inst_21134,(1),null);var inst_21137 = $("#tmpl_streetsnap");var inst_21138 = inst_21137.tmpl(inst_21136,tmpl_item);var inst_21139 = inst_21138.find("#mc_historyContainer");var inst_21140 = inst_21138.find("#mc_sideContainer");var inst_21141 = inst_21138.find("#mc_bottomContainer");var inst_21142 = inst_21138.find("#img_stylePicture");var inst_21143 = inst_21138.find("#btn_share");var inst_21144 = console.log(inst_21136);var inst_21145 = (function (){var model = inst_21136;var mc_sideContainer = inst_21140;var mc_historyContainer = inst_21139;var vec__21132 = inst_21134;var err = inst_21135;var tmpl = inst_21137;var img_stylePicture = inst_21142;var elem = inst_21138;var btn_share = inst_21143;var mc_bottomContainer = inst_21141;return ((function (model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (state_21170){var state_val_21171 = (state_21170[(1)]);if((state_val_21171 === (2)))
{var inst_21168 = (state_21170[(2)]);var state_21170__$1 = state_21170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21170__$1,inst_21168);
} else
{if((state_val_21171 === (1)))
{var inst_21161 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_21162 = model.styleUrl;var inst_21163 = [inst_21162];var inst_21164 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21161,inst_21163);var inst_21165 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_21164];var inst_21166 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21165,null));var state_21170__$1 = state_21170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21170__$1,(2),tool.react.OnReact,inst_21166);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21175 = [null,null,null,null,null,null,null];(statearr_21175[(0)] = state_machine__6178__auto__);
(statearr_21175[(1)] = (1));
return statearr_21175;
});
var state_machine__6178__auto____1 = (function (state_21170){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21170);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21176){if((e21176 instanceof Object))
{var ex__6181__auto__ = e21176;var statearr_21177_21269 = state_21170;(statearr_21177_21269[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21170);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21176;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21270 = state_21170;
state_21170 = G__21270;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21170){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21178 = f__6193__auto__.call(null);(statearr_21178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var inst_21146 = inst_21142.on("click",inst_21145);var inst_21147 = (function (){var model = inst_21136;var mc_sideContainer = inst_21140;var mc_historyContainer = inst_21139;var vec__21132 = inst_21134;var err = inst_21135;var tmpl = inst_21137;var img_stylePicture = inst_21142;var elem = inst_21138;var btn_share = inst_21143;var mc_bottomContainer = inst_21141;return ((function (model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (state_21187){var state_val_21188 = (state_21187[(1)]);if((state_val_21188 === (2)))
{var inst_21185 = (state_21187[(2)]);var state_21187__$1 = state_21187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21187__$1,inst_21185);
} else
{if((state_val_21188 === (1)))
{var inst_21179 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_21180 = [model];var inst_21181 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21179,inst_21180);var inst_21182 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_21181];var inst_21183 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21182,null));var state_21187__$1 = state_21187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21187__$1,(2),tool.react.OnReact,inst_21183);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21192 = [null,null,null,null,null,null,null];(statearr_21192[(0)] = state_machine__6178__auto__);
(statearr_21192[(1)] = (1));
return statearr_21192;
});
var state_machine__6178__auto____1 = (function (state_21187){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21187);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21193){if((e21193 instanceof Object))
{var ex__6181__auto__ = e21193;var statearr_21194_21271 = state_21187;(statearr_21194_21271[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21272 = state_21187;
state_21187 = G__21272;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21187){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21195 = f__6193__auto__.call(null);(statearr_21195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var inst_21148 = inst_21143.on("click",inst_21147);var inst_21149 = (function (){var model = inst_21136;var mc_sideContainer = inst_21140;var mc_historyContainer = inst_21139;var vec__21132 = inst_21134;var err = inst_21135;var tmpl = inst_21137;var img_stylePicture = inst_21142;var elem = inst_21138;var btn_share = inst_21143;var mc_bottomContainer = inst_21141;return ((function (model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (state_21206){var state_val_21207 = (state_21206[(1)]);if((state_val_21207 === (2)))
{var inst_21204 = (state_21206[(2)]);var state_21206__$1 = state_21206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21206__$1,inst_21204);
} else
{if((state_val_21207 === (1)))
{var inst_21196 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_21197 = that.id;var inst_21198 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21197));var inst_21199 = [inst_21198];var inst_21200 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21196,inst_21199);var inst_21201 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_21200];var inst_21202 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21201,null));var state_21206__$1 = state_21206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21206__$1,(2),tool.react.OnReact,inst_21202);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21211 = [null,null,null,null,null,null,null];(statearr_21211[(0)] = state_machine__6178__auto__);
(statearr_21211[(1)] = (1));
return statearr_21211;
});
var state_machine__6178__auto____1 = (function (state_21206){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21206);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21212){if((e21212 instanceof Object))
{var ex__6181__auto__ = e21212;var statearr_21213_21273 = state_21206;(statearr_21213_21273[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21206);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21274 = state_21206;
state_21206 = G__21274;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21206){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21214 = f__6193__auto__.call(null);(statearr_21214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var inst_21150 = inst_21140.delegate("img","click",inst_21149);var inst_21151 = (function (){var model = inst_21136;var mc_sideContainer = inst_21140;var mc_historyContainer = inst_21139;var vec__21132 = inst_21134;var err = inst_21135;var tmpl = inst_21137;var img_stylePicture = inst_21142;var elem = inst_21138;var btn_share = inst_21143;var mc_bottomContainer = inst_21141;return ((function (model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (state_21225){var state_val_21226 = (state_21225[(1)]);if((state_val_21226 === (2)))
{var inst_21223 = (state_21225[(2)]);var state_21225__$1 = state_21225;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21225__$1,inst_21223);
} else
{if((state_val_21226 === (1)))
{var inst_21215 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_21216 = that.id;var inst_21217 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21216));var inst_21218 = [inst_21217];var inst_21219 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21215,inst_21218);var inst_21220 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_21219];var inst_21221 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21220,null));var state_21225__$1 = state_21225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21225__$1,(2),tool.react.OnReact,inst_21221);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21230 = [null,null,null,null,null,null,null];(statearr_21230[(0)] = state_machine__6178__auto__);
(statearr_21230[(1)] = (1));
return statearr_21230;
});
var state_machine__6178__auto____1 = (function (state_21225){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21225);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21231){if((e21231 instanceof Object))
{var ex__6181__auto__ = e21231;var statearr_21232_21275 = state_21225;(statearr_21232_21275[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21225);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21276 = state_21225;
state_21225 = G__21276;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21225){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21233 = f__6193__auto__.call(null);(statearr_21233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var inst_21152 = inst_21141.delegate("img","click",inst_21151);var inst_21153 = (function (){var model = inst_21136;var mc_sideContainer = inst_21140;var mc_historyContainer = inst_21139;var vec__21132 = inst_21134;var err = inst_21135;var tmpl = inst_21137;var img_stylePicture = inst_21142;var elem = inst_21138;var btn_share = inst_21143;var mc_bottomContainer = inst_21141;return ((function (model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,inst_21151,inst_21152,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,inst_21151,inst_21152,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,inst_21151,inst_21152,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function (state_21243){var state_val_21244 = (state_21243[(1)]);if((state_val_21244 === (2)))
{var inst_21241 = (state_21243[(2)]);var state_21243__$1 = state_21243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21243__$1,inst_21241);
} else
{if((state_val_21244 === (1)))
{var inst_21234 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_21235 = that.id;var inst_21236 = [inst_21235];var inst_21237 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21234,inst_21236);var inst_21238 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_21237];var inst_21239 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21238,null));var state_21243__$1 = state_21243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21243__$1,(2),tool.react.OnReact,inst_21239);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,inst_21151,inst_21152,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,inst_21151,inst_21152,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21248 = [null,null,null,null,null,null,null];(statearr_21248[(0)] = state_machine__6178__auto__);
(statearr_21248[(1)] = (1));
return statearr_21248;
});
var state_machine__6178__auto____1 = (function (state_21243){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21243);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21249){if((e21249 instanceof Object))
{var ex__6181__auto__ = e21249;var statearr_21250_21277 = state_21243;(statearr_21250_21277[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21278 = state_21243;
state_21243 = G__21278;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21243){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,inst_21151,inst_21152,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21251 = f__6193__auto__.call(null);(statearr_21251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,inst_21151,inst_21152,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,mc_sideContainer,mc_historyContainer,vec__21132,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,inst_21134,inst_21135,inst_21136,inst_21137,inst_21138,inst_21139,inst_21140,inst_21141,inst_21142,inst_21143,inst_21144,inst_21145,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,inst_21151,inst_21152,state_val_21160,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var inst_21154 = inst_21139.delegate("img","click",inst_21153);var inst_21155 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_21156 = [inst_21138,name];var inst_21157 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21155,inst_21156);var state_21159__$1 = (function (){var statearr_21252 = state_21159;(statearr_21252[(7)] = inst_21146);
(statearr_21252[(8)] = inst_21148);
(statearr_21252[(9)] = inst_21150);
(statearr_21252[(10)] = inst_21154);
(statearr_21252[(11)] = inst_21144);
(statearr_21252[(12)] = inst_21152);
return statearr_21252;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21159__$1,inst_21157);
} else
{if((state_val_21160 === (1)))
{var state_21159__$1 = state_21159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21159__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21256 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21256[(0)] = state_machine__6178__auto__);
(statearr_21256[(1)] = (1));
return statearr_21256;
});
var state_machine__6178__auto____1 = (function (state_21159){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21159);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21257){if((e21257 instanceof Object))
{var ex__6181__auto__ = e21257;var statearr_21258_21279 = state_21159;(statearr_21258_21279[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21159);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21257;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21280 = state_21159;
state_21159 = G__21280;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21159){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21259 = f__6193__auto__.call(null);(statearr_21259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21259;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__21131,map__21131__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__21281){var map__21282 = p__21281;var map__21282__$1 = ((cljs.core.seq_QMARK_.call(null,map__21282))?cljs.core.apply.call(null,cljs.core.hash_map,map__21282):map__21282);var view = map__21282__$1;var elem = cljs.core.get.call(null,map__21282__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_21298 = elem.find("#mc_3dmask");var c__6192__auto___21299 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___21299,mc_3dmask_21298,map__21282,map__21282__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___21299,mc_3dmask_21298,map__21282,map__21282__$1,view,elem){
return (function (state_21288){var state_val_21289 = (state_21288[(1)]);if((state_val_21289 === (2)))
{var inst_21285 = (state_21288[(2)]);var inst_21286 = mc_3dmask_21298.fadeOut((400));var state_21288__$1 = (function (){var statearr_21290 = state_21288;(statearr_21290[(7)] = inst_21285);
return statearr_21290;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21288__$1,inst_21286);
} else
{if((state_val_21289 === (1)))
{var inst_21283 = cljs.core.async.timeout.call(null,(5000));var state_21288__$1 = state_21288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21288__$1,(2),inst_21283);
} else
{return null;
}
}
});})(c__6192__auto___21299,mc_3dmask_21298,map__21282,map__21282__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___21299,mc_3dmask_21298,map__21282,map__21282__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21294 = [null,null,null,null,null,null,null,null];(statearr_21294[(0)] = state_machine__6178__auto__);
(statearr_21294[(1)] = (1));
return statearr_21294;
});
var state_machine__6178__auto____1 = (function (state_21288){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21288);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21295){if((e21295 instanceof Object))
{var ex__6181__auto__ = e21295;var statearr_21296_21300 = state_21288;(statearr_21296_21300[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21288);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21301 = state_21288;
state_21288 = G__21301;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21288){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___21299,mc_3dmask_21298,map__21282,map__21282__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_21297 = f__6193__auto__.call(null);(statearr_21297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___21299);
return statearr_21297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___21299,mc_3dmask_21298,map__21282,map__21282__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__21302,key,modelChan){var map__21303 = p__21302;var map__21303__$1 = ((cljs.core.seq_QMARK_.call(null,map__21303))?cljs.core.apply.call(null,cljs.core.hash_map,map__21303):map__21303);var ctx = map__21303__$1;var tmpl_item = cljs.core.get.call(null,map__21303__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__21303,map__21303__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__21303,map__21303__$1,ctx,tmpl_item){
return (function (state_21315){var state_val_21316 = (state_21315[(1)]);if((state_val_21316 === (2)))
{var inst_21306 = (state_21315[(2)]);var inst_21307 = cljs.core.nth.call(null,inst_21306,(0),null);var inst_21308 = cljs.core.nth.call(null,inst_21306,(1),null);var inst_21309 = $("#tmpl_home");var inst_21310 = inst_21309.tmpl(inst_21308,tmpl_item);var inst_21311 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_21312 = [inst_21310,key];var inst_21313 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21311,inst_21312);var state_21315__$1 = (function (){var statearr_21317 = state_21315;(statearr_21317[(7)] = inst_21307);
return statearr_21317;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21315__$1,inst_21313);
} else
{if((state_val_21316 === (1)))
{var state_21315__$1 = state_21315;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21315__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__21303,map__21303__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__21303,map__21303__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21321 = [null,null,null,null,null,null,null,null];(statearr_21321[(0)] = state_machine__6178__auto__);
(statearr_21321[(1)] = (1));
return statearr_21321;
});
var state_machine__6178__auto____1 = (function (state_21315){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21315);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21322){if((e21322 instanceof Object))
{var ex__6181__auto__ = e21322;var statearr_21323_21325 = state_21315;(statearr_21323_21325[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21315);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21326 = state_21315;
state_21315 = G__21326;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21315){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__21303,map__21303__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21324 = f__6193__auto__.call(null);(statearr_21324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__21303,map__21303__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__21327,key,view){var map__21328 = p__21327;var map__21328__$1 = ((cljs.core.seq_QMARK_.call(null,map__21328))?cljs.core.apply.call(null,cljs.core.hash_map,map__21328):map__21328);var ctx = map__21328__$1;var popupContainer = cljs.core.get.call(null,map__21328__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__21329 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__21329.appendTo(popupContainer);
G__21329.fadeIn((400));
return G__21329;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__21330,key,p__21331){var map__21332 = p__21330;var map__21332__$1 = ((cljs.core.seq_QMARK_.call(null,map__21332))?cljs.core.apply.call(null,cljs.core.hash_map,map__21332):map__21332);var ctx = map__21332__$1;var container = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__21333 = p__21331;var map__21333__$1 = ((cljs.core.seq_QMARK_.call(null,map__21333))?cljs.core.apply.call(null,cljs.core.hash_map,map__21333):map__21333);var view = map__21333__$1;var elem = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__21332,map__21332__$1,ctx,container,map__21333,map__21333__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__21332,map__21332__$1,ctx,container,map__21333,map__21333__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__21334,key,modelChan){var map__21335 = p__21334;var map__21335__$1 = ((cljs.core.seq_QMARK_.call(null,map__21335))?cljs.core.apply.call(null,cljs.core.hash_map,map__21335):map__21335);var ctx = map__21335__$1;var tmpl_item = cljs.core.get.call(null,map__21335__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item){
return (function (state_21350){var state_val_21351 = (state_21350[(1)]);if((state_val_21351 === (2)))
{var inst_21338 = (state_21350[(2)]);var inst_21339 = cljs.core.nth.call(null,inst_21338,(0),null);var inst_21340 = cljs.core.nth.call(null,inst_21338,(1),null);var inst_21341 = $("#tmpl_bigPhoto");var inst_21342 = inst_21341.tmpl(inst_21340,tmpl_item);var inst_21343 = inst_21342.find("#mc_bigPhotoFixPosition");var inst_21344 = (function (){var back = inst_21343;var elem = inst_21342;var tmpl = inst_21341;var model = inst_21340;var err = inst_21339;var vec__21336 = inst_21338;return ((function (back,elem,tmpl,model,err,vec__21336,inst_21338,inst_21339,inst_21340,inst_21341,inst_21342,inst_21343,state_val_21351,c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__21336,inst_21338,inst_21339,inst_21340,inst_21341,inst_21342,inst_21343,state_val_21351,c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__21336,inst_21338,inst_21339,inst_21340,inst_21341,inst_21342,inst_21343,state_val_21351,c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item){
return (function (state_21357){var state_val_21358 = (state_21357[(1)]);if((state_val_21358 === (2)))
{var inst_21355 = (state_21357[(2)]);var state_21357__$1 = state_21357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21357__$1,inst_21355);
} else
{if((state_val_21358 === (1)))
{var inst_21352 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_21353 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21352,null));var state_21357__$1 = state_21357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21357__$1,(2),tool.react.OnReact,inst_21353);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__21336,inst_21338,inst_21339,inst_21340,inst_21341,inst_21342,inst_21343,state_val_21351,c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__21336,inst_21338,inst_21339,inst_21340,inst_21341,inst_21342,inst_21343,state_val_21351,c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21362 = [null,null,null,null,null,null,null];(statearr_21362[(0)] = state_machine__6178__auto__);
(statearr_21362[(1)] = (1));
return statearr_21362;
});
var state_machine__6178__auto____1 = (function (state_21357){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21357);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21363){if((e21363 instanceof Object))
{var ex__6181__auto__ = e21363;var statearr_21364_21374 = state_21357;(statearr_21364_21374[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21375 = state_21357;
state_21357 = G__21375;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21357){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__21336,inst_21338,inst_21339,inst_21340,inst_21341,inst_21342,inst_21343,state_val_21351,c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21365 = f__6193__auto__.call(null);(statearr_21365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_21365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__21336,inst_21338,inst_21339,inst_21340,inst_21341,inst_21342,inst_21343,state_val_21351,c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__21336,inst_21338,inst_21339,inst_21340,inst_21341,inst_21342,inst_21343,state_val_21351,c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item))
})();var inst_21345 = inst_21343.on("click",inst_21344);var inst_21346 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_21347 = [inst_21342,key];var inst_21348 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21346,inst_21347);var state_21350__$1 = (function (){var statearr_21366 = state_21350;(statearr_21366[(7)] = inst_21345);
return statearr_21366;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21350__$1,inst_21348);
} else
{if((state_val_21351 === (1)))
{var state_21350__$1 = state_21350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21350__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21370 = [null,null,null,null,null,null,null,null];(statearr_21370[(0)] = state_machine__6178__auto__);
(statearr_21370[(1)] = (1));
return statearr_21370;
});
var state_machine__6178__auto____1 = (function (state_21350){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21350);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21371){if((e21371 instanceof Object))
{var ex__6181__auto__ = e21371;var statearr_21372_21376 = state_21350;(statearr_21372_21376[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21350);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21377 = state_21350;
state_21350 = G__21377;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21350){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_21373 = f__6193__auto__.call(null);(statearr_21373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__21335,map__21335__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
