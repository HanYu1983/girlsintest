// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__11995,key,view){var map__11996 = p__11995;var map__11996__$1 = ((cljs.core.seq_QMARK_.call(null,map__11996))?cljs.core.apply.call(null,cljs.core.hash_map,map__11996):map__11996);var ctx = map__11996__$1;var container = cljs.core.get.call(null,map__11996__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__11997_12016 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__11997_12016.appendTo(container);
G__11997_12016.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__11996,map__11996__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__11996,map__11996__$1,ctx,container){
return (function (state_12007){var state_val_12008 = (state_12007[(1)]);if((state_val_12008 === (2)))
{var inst_12005 = (state_12007[(2)]);var state_12007__$1 = state_12007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12007__$1,inst_12005);
} else
{if((state_val_12008 === (1)))
{var inst_11998 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_11999 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_12000 = [inst_11999,view];var inst_12001 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11998,inst_12000);var inst_12002 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_12001];var inst_12003 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12002,null));var state_12007__$1 = state_12007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12007__$1,(2),tool.react.OnReact,inst_12003);
} else
{return null;
}
}
});})(c__6192__auto__,map__11996,map__11996__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__11996,map__11996__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12012 = [null,null,null,null,null,null,null];(statearr_12012[(0)] = state_machine__6178__auto__);
(statearr_12012[(1)] = (1));
return statearr_12012;
});
var state_machine__6178__auto____1 = (function (state_12007){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12007);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12013){if((e12013 instanceof Object))
{var ex__6181__auto__ = e12013;var statearr_12014_12017 = state_12007;(statearr_12014_12017[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12007);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12018 = state_12007;
state_12007 = G__12018;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12007){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__11996,map__11996__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_12015 = f__6193__auto__.call(null);(statearr_12015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__11996,map__11996__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__12019,key,view){var map__12020 = p__12019;var map__12020__$1 = ((cljs.core.seq_QMARK_.call(null,map__12020))?cljs.core.apply.call(null,cljs.core.hash_map,map__12020):map__12020);var ctx = map__12020__$1;var container = cljs.core.get.call(null,map__12020__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__12021 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__12021.remove();
return G__12021;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_12184 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_12185 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_12186 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_12186.off("click");
btn_search_12185.off("click");
mc_modelContainer_12184.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__12103,key,modelChan){var map__12104 = p__12103;var map__12104__$1 = ((cljs.core.seq_QMARK_.call(null,map__12104))?cljs.core.apply.call(null,cljs.core.hash_map,map__12104):map__12104);var ctx = map__12104__$1;var tmpl_item = cljs.core.get.call(null,map__12104__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (state_12125){var state_val_12126 = (state_12125[(1)]);if((state_val_12126 === (2)))
{var inst_12107 = (state_12125[(2)]);var inst_12108 = cljs.core.nth.call(null,inst_12107,(0),null);var inst_12109 = cljs.core.nth.call(null,inst_12107,(1),null);var inst_12110 = $("#tmpl_streetsnap_list");var inst_12111 = inst_12110.tmpl(inst_12109,tmpl_item);var inst_12112 = inst_12111.find("#mc_modelContainer");var inst_12113 = inst_12111.find("#btn_search");var inst_12114 = inst_12111.find("#btn_return");var inst_12115 = (function (){var btn_return = inst_12114;var btn_search = inst_12113;var mc_modelContainer = inst_12112;var elem = inst_12111;var tmpl = inst_12110;var model = inst_12109;var err = inst_12108;var vec__12105 = inst_12107;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (state_12132){var state_val_12133 = (state_12132[(1)]);if((state_val_12133 === (2)))
{var inst_12130 = (state_12132[(2)]);var state_12132__$1 = state_12132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12132__$1,inst_12130);
} else
{if((state_val_12133 === (1)))
{var inst_12127 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_12128 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12127,null));var state_12132__$1 = state_12132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12132__$1,(2),tool.react.OnReact,inst_12128);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12137 = [null,null,null,null,null,null,null];(statearr_12137[(0)] = state_machine__6178__auto__);
(statearr_12137[(1)] = (1));
return statearr_12137;
});
var state_machine__6178__auto____1 = (function (state_12132){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12132);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12138){if((e12138 instanceof Object))
{var ex__6181__auto__ = e12138;var statearr_12139_12187 = state_12132;(statearr_12139_12187[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12132);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12138;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12188 = state_12132;
state_12132 = G__12188;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12132){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12140 = f__6193__auto__.call(null);(statearr_12140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12140;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
})();var inst_12116 = inst_12114.click(inst_12115);var inst_12117 = (function (){var btn_return = inst_12114;var btn_search = inst_12113;var mc_modelContainer = inst_12112;var elem = inst_12111;var tmpl = inst_12110;var model = inst_12109;var err = inst_12108;var vec__12105 = inst_12107;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (state_12149){var state_val_12150 = (state_12149[(1)]);if((state_val_12150 === (2)))
{var inst_12147 = (state_12149[(2)]);var state_12149__$1 = state_12149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12149__$1,inst_12147);
} else
{if((state_val_12150 === (1)))
{var inst_12141 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_12142 = [searchKey];var inst_12143 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12141,inst_12142);var inst_12144 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_12143];var inst_12145 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12144,null));var state_12149__$1 = state_12149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12149__$1,(2),tool.react.OnReact,inst_12145);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12154 = [null,null,null,null,null,null,null];(statearr_12154[(0)] = state_machine__6178__auto__);
(statearr_12154[(1)] = (1));
return statearr_12154;
});
var state_machine__6178__auto____1 = (function (state_12149){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12149);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12155){if((e12155 instanceof Object))
{var ex__6181__auto__ = e12155;var statearr_12156_12189 = state_12149;(statearr_12156_12189[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12190 = state_12149;
state_12149 = G__12190;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12149){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12157 = f__6193__auto__.call(null);(statearr_12157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
})();var inst_12118 = inst_12113.click(inst_12117);var inst_12119 = (function (){var btn_return = inst_12114;var btn_search = inst_12113;var mc_modelContainer = inst_12112;var elem = inst_12111;var tmpl = inst_12110;var model = inst_12109;var err = inst_12108;var vec__12105 = inst_12107;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,inst_12117,inst_12118,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,inst_12117,inst_12118,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,inst_12117,inst_12118,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function (state_12167){var state_val_12168 = (state_12167[(1)]);if((state_val_12168 === (2)))
{var inst_12165 = (state_12167[(2)]);var state_12167__$1 = state_12167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12167__$1,inst_12165);
} else
{if((state_val_12168 === (1)))
{var inst_12158 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12159 = that.id;var inst_12160 = [inst_12159];var inst_12161 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12158,inst_12160);var inst_12162 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_12161];var inst_12163 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12162,null));var state_12167__$1 = state_12167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12167__$1,(2),tool.react.OnReact,inst_12163);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,inst_12117,inst_12118,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,inst_12117,inst_12118,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12172 = [null,null,null,null,null,null,null];(statearr_12172[(0)] = state_machine__6178__auto__);
(statearr_12172[(1)] = (1));
return statearr_12172;
});
var state_machine__6178__auto____1 = (function (state_12167){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12167);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12173){if((e12173 instanceof Object))
{var ex__6181__auto__ = e12173;var statearr_12174_12191 = state_12167;(statearr_12174_12191[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12167);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12173;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12192 = state_12167;
state_12167 = G__12192;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12167){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,inst_12117,inst_12118,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12175 = f__6193__auto__.call(null);(statearr_12175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,inst_12117,inst_12118,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__12105,inst_12107,inst_12108,inst_12109,inst_12110,inst_12111,inst_12112,inst_12113,inst_12114,inst_12115,inst_12116,inst_12117,inst_12118,state_val_12126,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
})();var inst_12120 = inst_12112.delegate("div[modelFrame]","click",inst_12119);var inst_12121 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_12122 = [inst_12111,name];var inst_12123 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12121,inst_12122);var state_12125__$1 = (function (){var statearr_12176 = state_12125;(statearr_12176[(7)] = inst_12116);
(statearr_12176[(8)] = inst_12118);
(statearr_12176[(9)] = inst_12120);
return statearr_12176;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12125__$1,inst_12123);
} else
{if((state_val_12126 === (1)))
{var state_12125__$1 = state_12125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12125__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12180 = [null,null,null,null,null,null,null,null,null,null];(statearr_12180[(0)] = state_machine__6178__auto__);
(statearr_12180[(1)] = (1));
return statearr_12180;
});
var state_machine__6178__auto____1 = (function (state_12125){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12125);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12181){if((e12181 instanceof Object))
{var ex__6181__auto__ = e12181;var statearr_12182_12193 = state_12125;(statearr_12182_12193[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12125);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12194 = state_12125;
state_12125 = G__12194;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12125){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12183 = f__6193__auto__.call(null);(statearr_12183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__12104,map__12104__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__12380){var map__12381 = p__12380;var map__12381__$1 = ((cljs.core.seq_QMARK_.call(null,map__12381))?cljs.core.apply.call(null,cljs.core.hash_map,map__12381):map__12381);var view = map__12381__$1;var elem = cljs.core.get.call(null,map__12381__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_12565 = elem.find("#mc_historyContainer");var mc_sideContainer_12566 = elem.find("#mc_sideContainer");var mc_bottomContainer_12567 = elem.find("#mc_bottomContainer");var img_stylePicture_12568 = elem.find("#img_stylePicture");var btn_share_12569 = elem.find("#btn_share");var btn_fullscreen_12570 = elem.find("#btn_fullscreen");var btn_more_12571 = elem.find("#btn_more");mc_modelContainer_12565.undelegate("img","click");
mc_sideContainer_12566.undelegate("img","click");
mc_bottomContainer_12567.undelegate("img","click");
img_stylePicture_12568.off("click");
btn_share_12569.off("click");
btn_fullscreen_12570.off("click");
btn_more_12571.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__12382){var map__12383 = p__12382;var map__12383__$1 = ((cljs.core.seq_QMARK_.call(null,map__12383))?cljs.core.apply.call(null,cljs.core.hash_map,map__12383):map__12383);var view = map__12383__$1;var elem = cljs.core.get.call(null,map__12383__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_12572 = elem.find("#mc_3dmask");var c__6192__auto___12573 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___12573,mc_3dmask_12572,map__12383,map__12383__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___12573,mc_3dmask_12572,map__12383,map__12383__$1,view,elem){
return (function (state_12389){var state_val_12390 = (state_12389[(1)]);if((state_val_12390 === (2)))
{var inst_12386 = (state_12389[(2)]);var inst_12387 = mc_3dmask_12572.fadeOut((400));var state_12389__$1 = (function (){var statearr_12391 = state_12389;(statearr_12391[(7)] = inst_12386);
return statearr_12391;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12389__$1,inst_12387);
} else
{if((state_val_12390 === (1)))
{var inst_12384 = cljs.core.async.timeout.call(null,(3000));var state_12389__$1 = state_12389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12389__$1,(2),inst_12384);
} else
{return null;
}
}
});})(c__6192__auto___12573,mc_3dmask_12572,map__12383,map__12383__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___12573,mc_3dmask_12572,map__12383,map__12383__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12395 = [null,null,null,null,null,null,null,null];(statearr_12395[(0)] = state_machine__6178__auto__);
(statearr_12395[(1)] = (1));
return statearr_12395;
});
var state_machine__6178__auto____1 = (function (state_12389){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12396){if((e12396 instanceof Object))
{var ex__6181__auto__ = e12396;var statearr_12397_12574 = state_12389;(statearr_12397_12574[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12575 = state_12389;
state_12389 = G__12575;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12389){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___12573,mc_3dmask_12572,map__12383,map__12383__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_12398 = f__6193__auto__.call(null);(statearr_12398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12573);
return statearr_12398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___12573,mc_3dmask_12572,map__12383,map__12383__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__12399,key,modelChan){var map__12400 = p__12399;var map__12400__$1 = ((cljs.core.seq_QMARK_.call(null,map__12400))?cljs.core.apply.call(null,cljs.core.hash_map,map__12400):map__12400);var ctx = map__12400__$1;var tmpl_item = cljs.core.get.call(null,map__12400__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (state_12433){var state_val_12434 = (state_12433[(1)]);if((state_val_12434 === (2)))
{var inst_12403 = (state_12433[(2)]);var inst_12404 = cljs.core.nth.call(null,inst_12403,(0),null);var inst_12405 = cljs.core.nth.call(null,inst_12403,(1),null);var inst_12406 = $("#tmpl_streetsnap");var inst_12407 = inst_12406.tmpl(inst_12405,tmpl_item);var inst_12408 = inst_12407.find("#mc_historyContainer");var inst_12409 = inst_12407.find("#mc_sideContainer");var inst_12410 = inst_12407.find("#mc_bottomContainer");var inst_12411 = inst_12407.find("#img_stylePicture");var inst_12412 = inst_12407.find("#btn_share");var inst_12413 = inst_12407.find("#btn_fullscreen");var inst_12414 = inst_12407.find("#btn_more");var inst_12415 = (function (){var vec__12401 = inst_12403;var model = inst_12405;var btn_more = inst_12414;var mc_sideContainer = inst_12409;var mc_historyContainer = inst_12408;var err = inst_12404;var tmpl = inst_12406;var img_stylePicture = inst_12411;var elem = inst_12407;var btn_share = inst_12412;var mc_bottomContainer = inst_12410;var btn_fullscreen = inst_12413;return ((function (vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (state_12440){var state_val_12441 = (state_12440[(1)]);if((state_val_12441 === (2)))
{var inst_12438 = (state_12440[(2)]);var state_12440__$1 = state_12440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12440__$1,inst_12438);
} else
{if((state_val_12441 === (1)))
{var inst_12435 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_12436 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12435,null));var state_12440__$1 = state_12440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12440__$1,(2),tool.react.OnReact,inst_12436);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12445 = [null,null,null,null,null,null,null];(statearr_12445[(0)] = state_machine__6178__auto__);
(statearr_12445[(1)] = (1));
return statearr_12445;
});
var state_machine__6178__auto____1 = (function (state_12440){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12440);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12446){if((e12446 instanceof Object))
{var ex__6181__auto__ = e12446;var statearr_12447_12576 = state_12440;(statearr_12447_12576[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12440);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12577 = state_12440;
state_12440 = G__12577;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12440){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12448 = f__6193__auto__.call(null);(statearr_12448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var inst_12416 = inst_12414.on("click",inst_12415);var inst_12417 = (function (){var vec__12401 = inst_12403;var model = inst_12405;var btn_more = inst_12414;var mc_sideContainer = inst_12409;var mc_historyContainer = inst_12408;var err = inst_12404;var tmpl = inst_12406;var img_stylePicture = inst_12411;var elem = inst_12407;var btn_share = inst_12412;var mc_bottomContainer = inst_12410;var btn_fullscreen = inst_12413;return ((function (vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (state_12457){var state_val_12458 = (state_12457[(1)]);if((state_val_12458 === (2)))
{var inst_12455 = (state_12457[(2)]);var state_12457__$1 = state_12457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12457__$1,inst_12455);
} else
{if((state_val_12458 === (1)))
{var inst_12449 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_12450 = [model];var inst_12451 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12449,inst_12450);var inst_12452 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_12451];var inst_12453 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12452,null));var state_12457__$1 = state_12457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12457__$1,(2),tool.react.OnReact,inst_12453);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12462 = [null,null,null,null,null,null,null];(statearr_12462[(0)] = state_machine__6178__auto__);
(statearr_12462[(1)] = (1));
return statearr_12462;
});
var state_machine__6178__auto____1 = (function (state_12457){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12457);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12463){if((e12463 instanceof Object))
{var ex__6181__auto__ = e12463;var statearr_12464_12578 = state_12457;(statearr_12464_12578[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12457);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12579 = state_12457;
state_12457 = G__12579;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12457){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12465 = f__6193__auto__.call(null);(statearr_12465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var inst_12418 = inst_12413.on("click",inst_12417);var inst_12419 = (function (){var vec__12401 = inst_12403;var model = inst_12405;var btn_more = inst_12414;var mc_sideContainer = inst_12409;var mc_historyContainer = inst_12408;var err = inst_12404;var tmpl = inst_12406;var img_stylePicture = inst_12411;var elem = inst_12407;var btn_share = inst_12412;var mc_bottomContainer = inst_12410;var btn_fullscreen = inst_12413;return ((function (vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (state_12475){var state_val_12476 = (state_12475[(1)]);if((state_val_12476 === (2)))
{var inst_12473 = (state_12475[(2)]);var state_12475__$1 = state_12475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12475__$1,inst_12473);
} else
{if((state_val_12476 === (1)))
{var inst_12466 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_12467 = model.styleUrl;var inst_12468 = [inst_12467];var inst_12469 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12466,inst_12468);var inst_12470 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_12469];var inst_12471 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12470,null));var state_12475__$1 = state_12475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12475__$1,(2),tool.react.OnReact,inst_12471);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12480 = [null,null,null,null,null,null,null];(statearr_12480[(0)] = state_machine__6178__auto__);
(statearr_12480[(1)] = (1));
return statearr_12480;
});
var state_machine__6178__auto____1 = (function (state_12475){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12475);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12481){if((e12481 instanceof Object))
{var ex__6181__auto__ = e12481;var statearr_12482_12580 = state_12475;(statearr_12482_12580[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12475);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12581 = state_12475;
state_12475 = G__12581;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12475){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12483 = f__6193__auto__.call(null);(statearr_12483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var inst_12420 = inst_12411.on("click",inst_12419);var inst_12421 = (function (){var vec__12401 = inst_12403;var model = inst_12405;var btn_more = inst_12414;var mc_sideContainer = inst_12409;var mc_historyContainer = inst_12408;var err = inst_12404;var tmpl = inst_12406;var img_stylePicture = inst_12411;var elem = inst_12407;var btn_share = inst_12412;var mc_bottomContainer = inst_12410;var btn_fullscreen = inst_12413;return ((function (vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (state_12492){var state_val_12493 = (state_12492[(1)]);if((state_val_12493 === (2)))
{var inst_12490 = (state_12492[(2)]);var state_12492__$1 = state_12492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12492__$1,inst_12490);
} else
{if((state_val_12493 === (1)))
{var inst_12484 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_12485 = [model];var inst_12486 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12484,inst_12485);var inst_12487 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_12486];var inst_12488 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12487,null));var state_12492__$1 = state_12492;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12492__$1,(2),tool.react.OnReact,inst_12488);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12497 = [null,null,null,null,null,null,null];(statearr_12497[(0)] = state_machine__6178__auto__);
(statearr_12497[(1)] = (1));
return statearr_12497;
});
var state_machine__6178__auto____1 = (function (state_12492){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12492);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12498){if((e12498 instanceof Object))
{var ex__6181__auto__ = e12498;var statearr_12499_12582 = state_12492;(statearr_12499_12582[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12492);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12583 = state_12492;
state_12492 = G__12583;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12492){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12500 = f__6193__auto__.call(null);(statearr_12500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var inst_12422 = inst_12412.on("click",inst_12421);var inst_12423 = (function (){var vec__12401 = inst_12403;var model = inst_12405;var btn_more = inst_12414;var mc_sideContainer = inst_12409;var mc_historyContainer = inst_12408;var err = inst_12404;var tmpl = inst_12406;var img_stylePicture = inst_12411;var elem = inst_12407;var btn_share = inst_12412;var mc_bottomContainer = inst_12410;var btn_fullscreen = inst_12413;return ((function (vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (state_12511){var state_val_12512 = (state_12511[(1)]);if((state_val_12512 === (2)))
{var inst_12509 = (state_12511[(2)]);var state_12511__$1 = state_12511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12511__$1,inst_12509);
} else
{if((state_val_12512 === (1)))
{var inst_12501 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_12502 = that.id;var inst_12503 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12502));var inst_12504 = [inst_12503];var inst_12505 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12501,inst_12504);var inst_12506 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_12505];var inst_12507 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12506,null));var state_12511__$1 = state_12511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12511__$1,(2),tool.react.OnReact,inst_12507);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12516 = [null,null,null,null,null,null,null];(statearr_12516[(0)] = state_machine__6178__auto__);
(statearr_12516[(1)] = (1));
return statearr_12516;
});
var state_machine__6178__auto____1 = (function (state_12511){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12517){if((e12517 instanceof Object))
{var ex__6181__auto__ = e12517;var statearr_12518_12584 = state_12511;(statearr_12518_12584[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12585 = state_12511;
state_12511 = G__12585;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12511){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12519 = f__6193__auto__.call(null);(statearr_12519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var inst_12424 = inst_12409.delegate("img","click",inst_12423);var inst_12425 = (function (){var vec__12401 = inst_12403;var model = inst_12405;var btn_more = inst_12414;var mc_sideContainer = inst_12409;var mc_historyContainer = inst_12408;var err = inst_12404;var tmpl = inst_12406;var img_stylePicture = inst_12411;var elem = inst_12407;var btn_share = inst_12412;var mc_bottomContainer = inst_12410;var btn_fullscreen = inst_12413;return ((function (vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (state_12530){var state_val_12531 = (state_12530[(1)]);if((state_val_12531 === (2)))
{var inst_12528 = (state_12530[(2)]);var state_12530__$1 = state_12530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12530__$1,inst_12528);
} else
{if((state_val_12531 === (1)))
{var inst_12520 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_12521 = that.id;var inst_12522 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12521));var inst_12523 = [inst_12522];var inst_12524 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12520,inst_12523);var inst_12525 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_12524];var inst_12526 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12525,null));var state_12530__$1 = state_12530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12530__$1,(2),tool.react.OnReact,inst_12526);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12535 = [null,null,null,null,null,null,null];(statearr_12535[(0)] = state_machine__6178__auto__);
(statearr_12535[(1)] = (1));
return statearr_12535;
});
var state_machine__6178__auto____1 = (function (state_12530){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12530);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12536){if((e12536 instanceof Object))
{var ex__6181__auto__ = e12536;var statearr_12537_12586 = state_12530;(statearr_12537_12586[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12530);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12587 = state_12530;
state_12530 = G__12587;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12530){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12538 = f__6193__auto__.call(null);(statearr_12538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var inst_12426 = inst_12410.delegate("img","click",inst_12425);var inst_12427 = (function (){var vec__12401 = inst_12403;var model = inst_12405;var btn_more = inst_12414;var mc_sideContainer = inst_12409;var mc_historyContainer = inst_12408;var err = inst_12404;var tmpl = inst_12406;var img_stylePicture = inst_12411;var elem = inst_12407;var btn_share = inst_12412;var mc_bottomContainer = inst_12410;var btn_fullscreen = inst_12413;return ((function (vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function (state_12548){var state_val_12549 = (state_12548[(1)]);if((state_val_12549 === (2)))
{var inst_12546 = (state_12548[(2)]);var state_12548__$1 = state_12548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12548__$1,inst_12546);
} else
{if((state_val_12549 === (1)))
{var inst_12539 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12540 = that.id;var inst_12541 = [inst_12540];var inst_12542 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12539,inst_12541);var inst_12543 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_12542];var inst_12544 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12543,null));var state_12548__$1 = state_12548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12548__$1,(2),tool.react.OnReact,inst_12544);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12553 = [null,null,null,null,null,null,null];(statearr_12553[(0)] = state_machine__6178__auto__);
(statearr_12553[(1)] = (1));
return statearr_12553;
});
var state_machine__6178__auto____1 = (function (state_12548){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12548);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12554){if((e12554 instanceof Object))
{var ex__6181__auto__ = e12554;var statearr_12555_12588 = state_12548;(statearr_12555_12588[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12548);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12589 = state_12548;
state_12548 = G__12589;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12548){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12556 = f__6193__auto__.call(null);(statearr_12556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__12401,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,state_val_12434,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var inst_12428 = inst_12408.delegate("img","click",inst_12427);var inst_12429 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_12430 = [inst_12407,name];var inst_12431 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12429,inst_12430);var state_12433__$1 = (function (){var statearr_12557 = state_12433;(statearr_12557[(7)] = inst_12416);
(statearr_12557[(8)] = inst_12428);
(statearr_12557[(9)] = inst_12418);
(statearr_12557[(10)] = inst_12424);
(statearr_12557[(11)] = inst_12420);
(statearr_12557[(12)] = inst_12422);
(statearr_12557[(13)] = inst_12426);
return statearr_12557;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12433__$1,inst_12431);
} else
{if((state_val_12434 === (1)))
{var state_12433__$1 = state_12433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12433__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12561[(0)] = state_machine__6178__auto__);
(statearr_12561[(1)] = (1));
return statearr_12561;
});
var state_machine__6178__auto____1 = (function (state_12433){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12433);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12562){if((e12562 instanceof Object))
{var ex__6181__auto__ = e12562;var statearr_12563_12590 = state_12433;(statearr_12563_12590[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12433);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12591 = state_12433;
state_12433 = G__12591;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12433){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12564 = f__6193__auto__.call(null);(statearr_12564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__12400,map__12400__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__12592){var map__12593 = p__12592;var map__12593__$1 = ((cljs.core.seq_QMARK_.call(null,map__12593))?cljs.core.apply.call(null,cljs.core.hash_map,map__12593):map__12593);var view = map__12593__$1;var elem = cljs.core.get.call(null,map__12593__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_12609 = elem.find("#mc_3dmask");var c__6192__auto___12610 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___12610,mc_3dmask_12609,map__12593,map__12593__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___12610,mc_3dmask_12609,map__12593,map__12593__$1,view,elem){
return (function (state_12599){var state_val_12600 = (state_12599[(1)]);if((state_val_12600 === (2)))
{var inst_12596 = (state_12599[(2)]);var inst_12597 = mc_3dmask_12609.fadeOut((400));var state_12599__$1 = (function (){var statearr_12601 = state_12599;(statearr_12601[(7)] = inst_12596);
return statearr_12601;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12599__$1,inst_12597);
} else
{if((state_val_12600 === (1)))
{var inst_12594 = cljs.core.async.timeout.call(null,(3000));var state_12599__$1 = state_12599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12599__$1,(2),inst_12594);
} else
{return null;
}
}
});})(c__6192__auto___12610,mc_3dmask_12609,map__12593,map__12593__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___12610,mc_3dmask_12609,map__12593,map__12593__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12605 = [null,null,null,null,null,null,null,null];(statearr_12605[(0)] = state_machine__6178__auto__);
(statearr_12605[(1)] = (1));
return statearr_12605;
});
var state_machine__6178__auto____1 = (function (state_12599){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12599);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12606){if((e12606 instanceof Object))
{var ex__6181__auto__ = e12606;var statearr_12607_12611 = state_12599;(statearr_12607_12611[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12612 = state_12599;
state_12599 = G__12612;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12599){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___12610,mc_3dmask_12609,map__12593,map__12593__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_12608 = f__6193__auto__.call(null);(statearr_12608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12610);
return statearr_12608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___12610,mc_3dmask_12609,map__12593,map__12593__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__12613,key,modelChan){var map__12614 = p__12613;var map__12614__$1 = ((cljs.core.seq_QMARK_.call(null,map__12614))?cljs.core.apply.call(null,cljs.core.hash_map,map__12614):map__12614);var ctx = map__12614__$1;var tmpl_item = cljs.core.get.call(null,map__12614__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__12614,map__12614__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__12614,map__12614__$1,ctx,tmpl_item){
return (function (state_12626){var state_val_12627 = (state_12626[(1)]);if((state_val_12627 === (2)))
{var inst_12617 = (state_12626[(2)]);var inst_12618 = cljs.core.nth.call(null,inst_12617,(0),null);var inst_12619 = cljs.core.nth.call(null,inst_12617,(1),null);var inst_12620 = $("#tmpl_home");var inst_12621 = inst_12620.tmpl(inst_12619,tmpl_item);var inst_12622 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_12623 = [inst_12621,key];var inst_12624 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12622,inst_12623);var state_12626__$1 = (function (){var statearr_12628 = state_12626;(statearr_12628[(7)] = inst_12618);
return statearr_12628;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12626__$1,inst_12624);
} else
{if((state_val_12627 === (1)))
{var state_12626__$1 = state_12626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12626__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__12614,map__12614__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__12614,map__12614__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12632 = [null,null,null,null,null,null,null,null];(statearr_12632[(0)] = state_machine__6178__auto__);
(statearr_12632[(1)] = (1));
return statearr_12632;
});
var state_machine__6178__auto____1 = (function (state_12626){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12633){if((e12633 instanceof Object))
{var ex__6181__auto__ = e12633;var statearr_12634_12636 = state_12626;(statearr_12634_12636[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12626);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12637 = state_12626;
state_12626 = G__12637;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12626){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__12614,map__12614__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12635 = f__6193__auto__.call(null);(statearr_12635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__12614,map__12614__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__12638,key,view){var map__12639 = p__12638;var map__12639__$1 = ((cljs.core.seq_QMARK_.call(null,map__12639))?cljs.core.apply.call(null,cljs.core.hash_map,map__12639):map__12639);var ctx = map__12639__$1;var popupContainer = cljs.core.get.call(null,map__12639__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__12640 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__12640.appendTo(popupContainer);
G__12640.fadeIn((400));
return G__12640;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__12641,key,p__12642){var map__12643 = p__12641;var map__12643__$1 = ((cljs.core.seq_QMARK_.call(null,map__12643))?cljs.core.apply.call(null,cljs.core.hash_map,map__12643):map__12643);var ctx = map__12643__$1;var container = cljs.core.get.call(null,map__12643__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__12644 = p__12642;var map__12644__$1 = ((cljs.core.seq_QMARK_.call(null,map__12644))?cljs.core.apply.call(null,cljs.core.hash_map,map__12644):map__12644);var view = map__12644__$1;var elem = cljs.core.get.call(null,map__12644__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__12643,map__12643__$1,ctx,container,map__12644,map__12644__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__12643,map__12643__$1,ctx,container,map__12644,map__12644__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__12645,key,modelChan){var map__12646 = p__12645;var map__12646__$1 = ((cljs.core.seq_QMARK_.call(null,map__12646))?cljs.core.apply.call(null,cljs.core.hash_map,map__12646):map__12646);var ctx = map__12646__$1;var tmpl_item = cljs.core.get.call(null,map__12646__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item){
return (function (state_12660){var state_val_12661 = (state_12660[(1)]);if((state_val_12661 === (2)))
{var inst_12649 = (state_12660[(2)]);var inst_12650 = cljs.core.nth.call(null,inst_12649,(0),null);var inst_12651 = cljs.core.nth.call(null,inst_12649,(1),null);var inst_12652 = $("#tmpl_bigPhoto");var inst_12653 = inst_12652.tmpl(inst_12651,tmpl_item);var inst_12654 = (function (){var back = inst_12653;var elem = inst_12653;var tmpl = inst_12652;var model = inst_12651;var err = inst_12650;var vec__12647 = inst_12649;return ((function (back,elem,tmpl,model,err,vec__12647,inst_12649,inst_12650,inst_12651,inst_12652,inst_12653,state_val_12661,c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__12647,inst_12649,inst_12650,inst_12651,inst_12652,inst_12653,state_val_12661,c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__12647,inst_12649,inst_12650,inst_12651,inst_12652,inst_12653,state_val_12661,c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item){
return (function (state_12667){var state_val_12668 = (state_12667[(1)]);if((state_val_12668 === (2)))
{var inst_12665 = (state_12667[(2)]);var state_12667__$1 = state_12667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12667__$1,inst_12665);
} else
{if((state_val_12668 === (1)))
{var inst_12662 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_12663 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12662,null));var state_12667__$1 = state_12667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12667__$1,(2),tool.react.OnReact,inst_12663);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__12647,inst_12649,inst_12650,inst_12651,inst_12652,inst_12653,state_val_12661,c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__12647,inst_12649,inst_12650,inst_12651,inst_12652,inst_12653,state_val_12661,c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12672 = [null,null,null,null,null,null,null];(statearr_12672[(0)] = state_machine__6178__auto__);
(statearr_12672[(1)] = (1));
return statearr_12672;
});
var state_machine__6178__auto____1 = (function (state_12667){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12667);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12673){if((e12673 instanceof Object))
{var ex__6181__auto__ = e12673;var statearr_12674_12684 = state_12667;(statearr_12674_12684[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12685 = state_12667;
state_12667 = G__12685;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12667){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__12647,inst_12649,inst_12650,inst_12651,inst_12652,inst_12653,state_val_12661,c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12675 = f__6193__auto__.call(null);(statearr_12675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_12675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__12647,inst_12649,inst_12650,inst_12651,inst_12652,inst_12653,state_val_12661,c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__12647,inst_12649,inst_12650,inst_12651,inst_12652,inst_12653,state_val_12661,c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item))
})();var inst_12655 = inst_12653.on("click",inst_12654);var inst_12656 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_12657 = [inst_12653,key];var inst_12658 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12656,inst_12657);var state_12660__$1 = (function (){var statearr_12676 = state_12660;(statearr_12676[(7)] = inst_12655);
return statearr_12676;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12660__$1,inst_12658);
} else
{if((state_val_12661 === (1)))
{var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12660__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12680 = [null,null,null,null,null,null,null,null];(statearr_12680[(0)] = state_machine__6178__auto__);
(statearr_12680[(1)] = (1));
return statearr_12680;
});
var state_machine__6178__auto____1 = (function (state_12660){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12681){if((e12681 instanceof Object))
{var ex__6181__auto__ = e12681;var statearr_12682_12686 = state_12660;(statearr_12682_12686[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12687 = state_12660;
state_12660 = G__12687;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12660){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12683 = f__6193__auto__.call(null);(statearr_12683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__12646,map__12646__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__12688,key,modelChan){var map__12689 = p__12688;var map__12689__$1 = ((cljs.core.seq_QMARK_.call(null,map__12689))?cljs.core.apply.call(null,cljs.core.hash_map,map__12689):map__12689);var ctx = map__12689__$1;var tmpl_item = cljs.core.get.call(null,map__12689__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__12689,map__12689__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__12689,map__12689__$1,ctx,tmpl_item){
return (function (state_12701){var state_val_12702 = (state_12701[(1)]);if((state_val_12702 === (2)))
{var inst_12692 = (state_12701[(2)]);var inst_12693 = cljs.core.nth.call(null,inst_12692,(0),null);var inst_12694 = cljs.core.nth.call(null,inst_12692,(1),null);var inst_12695 = $("#tmpl_news");var inst_12696 = inst_12695.tmpl(inst_12694,tmpl_item);var inst_12697 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_12698 = [inst_12696,key];var inst_12699 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12697,inst_12698);var state_12701__$1 = (function (){var statearr_12703 = state_12701;(statearr_12703[(7)] = inst_12693);
return statearr_12703;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12701__$1,inst_12699);
} else
{if((state_val_12702 === (1)))
{var state_12701__$1 = state_12701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12701__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__12689,map__12689__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__12689,map__12689__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12707 = [null,null,null,null,null,null,null,null];(statearr_12707[(0)] = state_machine__6178__auto__);
(statearr_12707[(1)] = (1));
return statearr_12707;
});
var state_machine__6178__auto____1 = (function (state_12701){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12701);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12708){if((e12708 instanceof Object))
{var ex__6181__auto__ = e12708;var statearr_12709_12711 = state_12701;(statearr_12709_12711[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12712 = state_12701;
state_12701 = G__12712;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12701){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__12689,map__12689__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_12710 = f__6193__auto__.call(null);(statearr_12710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__12689,map__12689__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
