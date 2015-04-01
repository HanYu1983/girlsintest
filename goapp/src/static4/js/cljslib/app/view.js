// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__20791,key,view){var map__20792 = p__20791;var map__20792__$1 = ((cljs.core.seq_QMARK_.call(null,map__20792))?cljs.core.apply.call(null,cljs.core.hash_map,map__20792):map__20792);var ctx = map__20792__$1;var container = cljs.core.get.call(null,map__20792__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var c__6216__auto___20812 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___20812,map__20792,map__20792__$1,ctx,container){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___20812,map__20792,map__20792__$1,ctx,container){
return (function (state_20802){var state_val_20803 = (state_20802[(1)]);if((state_val_20803 === (2)))
{var inst_20800 = (state_20802[(2)]);var state_20802__$1 = state_20802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20802__$1,inst_20800);
} else
{if((state_val_20803 === (1)))
{var inst_20793 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094)];var inst_20794 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_20795 = [inst_20794];var inst_20796 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20793,inst_20795);var inst_20797 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_20796];var inst_20798 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20797,null));var state_20802__$1 = state_20802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20802__$1,(2),tool.react.OnReact,inst_20798);
} else
{return null;
}
}
});})(c__6216__auto___20812,map__20792,map__20792__$1,ctx,container))
;return ((function (switch__6201__auto__,c__6216__auto___20812,map__20792,map__20792__$1,ctx,container){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_20807 = [null,null,null,null,null,null,null];(statearr_20807[(0)] = state_machine__6202__auto__);
(statearr_20807[(1)] = (1));
return statearr_20807;
});
var state_machine__6202__auto____1 = (function (state_20802){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_20802);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e20808){if((e20808 instanceof Object))
{var ex__6205__auto__ = e20808;var statearr_20809_20813 = state_20802;(statearr_20809_20813[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20802);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20808;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20814 = state_20802;
state_20802 = G__20814;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_20802){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_20802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___20812,map__20792,map__20792__$1,ctx,container))
})();var state__6218__auto__ = (function (){var statearr_20810 = f__6217__auto__.call(null);(statearr_20810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___20812);
return statearr_20810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___20812,map__20792,map__20792__$1,ctx,container))
);
var G__20811 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__20811.appendTo(container);
G__20811.fadeIn((400));
return G__20811;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__20815,key,view){var map__20816 = p__20815;var map__20816__$1 = ((cljs.core.seq_QMARK_.call(null,map__20816))?cljs.core.apply.call(null,cljs.core.hash_map,map__20816):map__20816);var ctx = map__20816__$1;var container = cljs.core.get.call(null,map__20816__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__20817 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__20817.remove();
return G__20817;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_20980 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_20981 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_20982 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_20982.off("click");
btn_search_20981.off("click");
mc_modelContainer_20980.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__20899,key,modelChan){var map__20900 = p__20899;var map__20900__$1 = ((cljs.core.seq_QMARK_.call(null,map__20900))?cljs.core.apply.call(null,cljs.core.hash_map,map__20900):map__20900);var ctx = map__20900__$1;var tmpl_item = cljs.core.get.call(null,map__20900__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (state_20921){var state_val_20922 = (state_20921[(1)]);if((state_val_20922 === (2)))
{var inst_20903 = (state_20921[(2)]);var inst_20904 = cljs.core.nth.call(null,inst_20903,(0),null);var inst_20905 = cljs.core.nth.call(null,inst_20903,(1),null);var inst_20906 = $("#tmpl_streetsnap_list");var inst_20907 = inst_20906.tmpl(inst_20905,tmpl_item);var inst_20908 = inst_20907.find("#mc_modelContainer");var inst_20909 = inst_20907.find("#btn_search");var inst_20910 = inst_20907.find("#btn_return");var inst_20911 = (function (){var btn_return = inst_20910;var btn_search = inst_20909;var mc_modelContainer = inst_20908;var elem = inst_20907;var tmpl = inst_20906;var model = inst_20905;var err = inst_20904;var vec__20901 = inst_20903;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (){var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (state_20928){var state_val_20929 = (state_20928[(1)]);if((state_val_20929 === (2)))
{var inst_20926 = (state_20928[(2)]);var state_20928__$1 = state_20928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20928__$1,inst_20926);
} else
{if((state_val_20929 === (1)))
{var inst_20923 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_20924 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20923,null));var state_20928__$1 = state_20928;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20928__$1,(2),tool.react.OnReact,inst_20924);
} else
{return null;
}
}
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_20933 = [null,null,null,null,null,null,null];(statearr_20933[(0)] = state_machine__6202__auto__);
(statearr_20933[(1)] = (1));
return statearr_20933;
});
var state_machine__6202__auto____1 = (function (state_20928){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_20928);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e20934){if((e20934 instanceof Object))
{var ex__6205__auto__ = e20934;var statearr_20935_20983 = state_20928;(statearr_20935_20983[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20934;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20984 = state_20928;
state_20928 = G__20984;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_20928){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_20928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_20936 = f__6217__auto__.call(null);(statearr_20936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_20936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
})();var inst_20912 = inst_20910.click(inst_20911);var inst_20913 = (function (){var btn_return = inst_20910;var btn_search = inst_20909;var mc_modelContainer = inst_20908;var elem = inst_20907;var tmpl = inst_20906;var model = inst_20905;var err = inst_20904;var vec__20901 = inst_20903;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (state_20945){var state_val_20946 = (state_20945[(1)]);if((state_val_20946 === (2)))
{var inst_20943 = (state_20945[(2)]);var state_20945__$1 = state_20945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20945__$1,inst_20943);
} else
{if((state_val_20946 === (1)))
{var inst_20937 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_20938 = [searchKey];var inst_20939 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20937,inst_20938);var inst_20940 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_20939];var inst_20941 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20940,null));var state_20945__$1 = state_20945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20945__$1,(2),tool.react.OnReact,inst_20941);
} else
{return null;
}
}
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_20950 = [null,null,null,null,null,null,null];(statearr_20950[(0)] = state_machine__6202__auto__);
(statearr_20950[(1)] = (1));
return statearr_20950;
});
var state_machine__6202__auto____1 = (function (state_20945){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_20945);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e20951){if((e20951 instanceof Object))
{var ex__6205__auto__ = e20951;var statearr_20952_20985 = state_20945;(statearr_20952_20985[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20945);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20951;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20986 = state_20945;
state_20945 = G__20986;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_20945){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_20945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_20953 = f__6217__auto__.call(null);(statearr_20953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_20953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
})();var inst_20914 = inst_20909.click(inst_20913);var inst_20915 = (function (){var btn_return = inst_20910;var btn_search = inst_20909;var mc_modelContainer = inst_20908;var elem = inst_20907;var tmpl = inst_20906;var model = inst_20905;var err = inst_20904;var vec__20901 = inst_20903;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,inst_20913,inst_20914,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,inst_20913,inst_20914,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,inst_20913,inst_20914,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function (state_20963){var state_val_20964 = (state_20963[(1)]);if((state_val_20964 === (2)))
{var inst_20961 = (state_20963[(2)]);var state_20963__$1 = state_20963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20963__$1,inst_20961);
} else
{if((state_val_20964 === (1)))
{var inst_20954 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_20955 = that.id;var inst_20956 = [inst_20955];var inst_20957 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20954,inst_20956);var inst_20958 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_20957];var inst_20959 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20958,null));var state_20963__$1 = state_20963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20963__$1,(2),tool.react.OnReact,inst_20959);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,inst_20913,inst_20914,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,inst_20913,inst_20914,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_20968 = [null,null,null,null,null,null,null];(statearr_20968[(0)] = state_machine__6202__auto__);
(statearr_20968[(1)] = (1));
return statearr_20968;
});
var state_machine__6202__auto____1 = (function (state_20963){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_20963);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e20969){if((e20969 instanceof Object))
{var ex__6205__auto__ = e20969;var statearr_20970_20987 = state_20963;(statearr_20970_20987[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20963);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20988 = state_20963;
state_20963 = G__20988;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_20963){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_20963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,inst_20913,inst_20914,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_20971 = f__6217__auto__.call(null);(statearr_20971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_20971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,inst_20913,inst_20914,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__20901,inst_20903,inst_20904,inst_20905,inst_20906,inst_20907,inst_20908,inst_20909,inst_20910,inst_20911,inst_20912,inst_20913,inst_20914,state_val_20922,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
})();var inst_20916 = inst_20908.delegate("div[modelFrame]","click",inst_20915);var inst_20917 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_20918 = [inst_20907,name];var inst_20919 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20917,inst_20918);var state_20921__$1 = (function (){var statearr_20972 = state_20921;(statearr_20972[(7)] = inst_20912);
(statearr_20972[(8)] = inst_20914);
(statearr_20972[(9)] = inst_20916);
return statearr_20972;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20921__$1,inst_20919);
} else
{if((state_val_20922 === (1)))
{var state_20921__$1 = state_20921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20921__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_20976 = [null,null,null,null,null,null,null,null,null,null];(statearr_20976[(0)] = state_machine__6202__auto__);
(statearr_20976[(1)] = (1));
return statearr_20976;
});
var state_machine__6202__auto____1 = (function (state_20921){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_20921);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e20977){if((e20977 instanceof Object))
{var ex__6205__auto__ = e20977;var statearr_20978_20989 = state_20921;(statearr_20978_20989[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20921);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20990 = state_20921;
state_20921 = G__20990;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_20921){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_20921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_20979 = f__6217__auto__.call(null);(statearr_20979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_20979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,map__20900,map__20900__$1,ctx,tmpl_item))
);
return c__6216__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__21075){var map__21076 = p__21075;var map__21076__$1 = ((cljs.core.seq_QMARK_.call(null,map__21076))?cljs.core.apply.call(null,cljs.core.hash_map,map__21076):map__21076);var view = map__21076__$1;var elem = cljs.core.get.call(null,map__21076__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_21159 = elem.find("#mc_historyContainer");mc_modelContainer_21159.undelegate("img","click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__21077){var map__21078 = p__21077;var map__21078__$1 = ((cljs.core.seq_QMARK_.call(null,map__21078))?cljs.core.apply.call(null,cljs.core.hash_map,map__21078):map__21078);var view = map__21078__$1;var elem = cljs.core.get.call(null,map__21078__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_21160 = elem.find("#mc_3dmask");var c__6216__auto___21161 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___21161,mc_3dmask_21160,map__21078,map__21078__$1,view,elem){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___21161,mc_3dmask_21160,map__21078,map__21078__$1,view,elem){
return (function (state_21084){var state_val_21085 = (state_21084[(1)]);if((state_val_21085 === (2)))
{var inst_21081 = (state_21084[(2)]);var inst_21082 = mc_3dmask_21160.fadeOut((400));var state_21084__$1 = (function (){var statearr_21086 = state_21084;(statearr_21086[(7)] = inst_21081);
return statearr_21086;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21084__$1,inst_21082);
} else
{if((state_val_21085 === (1)))
{var inst_21079 = cljs.core.async.timeout.call(null,(5000));var state_21084__$1 = state_21084;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21084__$1,(2),inst_21079);
} else
{return null;
}
}
});})(c__6216__auto___21161,mc_3dmask_21160,map__21078,map__21078__$1,view,elem))
;return ((function (switch__6201__auto__,c__6216__auto___21161,mc_3dmask_21160,map__21078,map__21078__$1,view,elem){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_21090 = [null,null,null,null,null,null,null,null];(statearr_21090[(0)] = state_machine__6202__auto__);
(statearr_21090[(1)] = (1));
return statearr_21090;
});
var state_machine__6202__auto____1 = (function (state_21084){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_21084);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e21091){if((e21091 instanceof Object))
{var ex__6205__auto__ = e21091;var statearr_21092_21162 = state_21084;(statearr_21092_21162[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21084);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21163 = state_21084;
state_21084 = G__21163;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_21084){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_21084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___21161,mc_3dmask_21160,map__21078,map__21078__$1,view,elem))
})();var state__6218__auto__ = (function (){var statearr_21093 = f__6217__auto__.call(null);(statearr_21093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___21161);
return statearr_21093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___21161,mc_3dmask_21160,map__21078,map__21078__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__21094,key,modelChan){var map__21095 = p__21094;var map__21095__$1 = ((cljs.core.seq_QMARK_.call(null,map__21095))?cljs.core.apply.call(null,cljs.core.hash_map,map__21095):map__21095);var ctx = map__21095__$1;var tmpl_item = cljs.core.get.call(null,map__21095__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function (state_21113){var state_val_21114 = (state_21113[(1)]);if((state_val_21114 === (2)))
{var inst_21098 = (state_21113[(2)]);var inst_21099 = cljs.core.nth.call(null,inst_21098,(0),null);var inst_21100 = cljs.core.nth.call(null,inst_21098,(1),null);var inst_21101 = $("#tmpl_streetsnap");var inst_21102 = inst_21101.tmpl(inst_21100,tmpl_item);var inst_21103 = inst_21102.find("#mc_historyContainer");var inst_21104 = inst_21102.find("#mc_sideContainer");var inst_21105 = (function (){var mc_sideContainer = inst_21104;var mc_historyContainer = inst_21103;var elem = inst_21102;var tmpl = inst_21101;var model = inst_21100;var err = inst_21099;var vec__21096 = inst_21098;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function (state_21124){var state_val_21125 = (state_21124[(1)]);if((state_val_21125 === (2)))
{var inst_21122 = (state_21124[(2)]);var state_21124__$1 = state_21124;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21124__$1,inst_21122);
} else
{if((state_val_21125 === (1)))
{var inst_21115 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_21116 = that.id;var inst_21117 = [inst_21116];var inst_21118 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21115,inst_21117);var inst_21119 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_21118];var inst_21120 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21119,null));var state_21124__$1 = state_21124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21124__$1,(2),tool.react.OnReact,inst_21120);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_21129 = [null,null,null,null,null,null,null];(statearr_21129[(0)] = state_machine__6202__auto__);
(statearr_21129[(1)] = (1));
return statearr_21129;
});
var state_machine__6202__auto____1 = (function (state_21124){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_21124);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e21130){if((e21130 instanceof Object))
{var ex__6205__auto__ = e21130;var statearr_21131_21164 = state_21124;(statearr_21131_21164[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21124);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21165 = state_21124;
state_21124 = G__21165;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_21124){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_21124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_21132 = f__6217__auto__.call(null);(statearr_21132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_21132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
})();var inst_21106 = inst_21104.delegate("img","click",inst_21105);var inst_21107 = (function (){var mc_sideContainer = inst_21104;var mc_historyContainer = inst_21103;var elem = inst_21102;var tmpl = inst_21101;var model = inst_21100;var err = inst_21099;var vec__21096 = inst_21098;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,inst_21105,inst_21106,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6216__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,inst_21105,inst_21106,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,inst_21105,inst_21106,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function (state_21142){var state_val_21143 = (state_21142[(1)]);if((state_val_21143 === (2)))
{var inst_21140 = (state_21142[(2)]);var state_21142__$1 = state_21142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21142__$1,inst_21140);
} else
{if((state_val_21143 === (1)))
{var inst_21133 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_21134 = that.id;var inst_21135 = [inst_21134];var inst_21136 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21133,inst_21135);var inst_21137 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_21136];var inst_21138 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21137,null));var state_21142__$1 = state_21142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21142__$1,(2),tool.react.OnReact,inst_21138);
} else
{return null;
}
}
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,inst_21105,inst_21106,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,inst_21105,inst_21106,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_21147 = [null,null,null,null,null,null,null];(statearr_21147[(0)] = state_machine__6202__auto__);
(statearr_21147[(1)] = (1));
return statearr_21147;
});
var state_machine__6202__auto____1 = (function (state_21142){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_21142);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e21148){if((e21148 instanceof Object))
{var ex__6205__auto__ = e21148;var statearr_21149_21166 = state_21142;(statearr_21149_21166[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21142);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21148;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21167 = state_21142;
state_21142 = G__21167;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_21142){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_21142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,inst_21105,inst_21106,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_21150 = f__6217__auto__.call(null);(statearr_21150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto____$1);
return statearr_21150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,inst_21105,inst_21106,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
);
return c__6216__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__21096,inst_21098,inst_21099,inst_21100,inst_21101,inst_21102,inst_21103,inst_21104,inst_21105,inst_21106,state_val_21114,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
})();var inst_21108 = inst_21103.delegate("img","click",inst_21107);var inst_21109 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_21110 = [inst_21102,name];var inst_21111 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21109,inst_21110);var state_21113__$1 = (function (){var statearr_21151 = state_21113;(statearr_21151[(7)] = inst_21108);
(statearr_21151[(8)] = inst_21106);
return statearr_21151;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21113__$1,inst_21111);
} else
{if((state_val_21114 === (1)))
{var state_21113__$1 = state_21113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21113__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_21155 = [null,null,null,null,null,null,null,null,null];(statearr_21155[(0)] = state_machine__6202__auto__);
(statearr_21155[(1)] = (1));
return statearr_21155;
});
var state_machine__6202__auto____1 = (function (state_21113){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_21113);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e21156){if((e21156 instanceof Object))
{var ex__6205__auto__ = e21156;var statearr_21157_21168 = state_21113;(statearr_21157_21168[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21113);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21169 = state_21113;
state_21113 = G__21169;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_21113){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_21113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_21158 = f__6217__auto__.call(null);(statearr_21158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_21158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,map__21095,map__21095__$1,ctx,tmpl_item))
);
return c__6216__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__21170){var map__21171 = p__21170;var map__21171__$1 = ((cljs.core.seq_QMARK_.call(null,map__21171))?cljs.core.apply.call(null,cljs.core.hash_map,map__21171):map__21171);var view = map__21171__$1;var elem = cljs.core.get.call(null,map__21171__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_21187 = elem.find("#mc_3dmask");var c__6216__auto___21188 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___21188,mc_3dmask_21187,map__21171,map__21171__$1,view,elem){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___21188,mc_3dmask_21187,map__21171,map__21171__$1,view,elem){
return (function (state_21177){var state_val_21178 = (state_21177[(1)]);if((state_val_21178 === (2)))
{var inst_21174 = (state_21177[(2)]);var inst_21175 = mc_3dmask_21187.fadeOut((400));var state_21177__$1 = (function (){var statearr_21179 = state_21177;(statearr_21179[(7)] = inst_21174);
return statearr_21179;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21177__$1,inst_21175);
} else
{if((state_val_21178 === (1)))
{var inst_21172 = cljs.core.async.timeout.call(null,(5000));var state_21177__$1 = state_21177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21177__$1,(2),inst_21172);
} else
{return null;
}
}
});})(c__6216__auto___21188,mc_3dmask_21187,map__21171,map__21171__$1,view,elem))
;return ((function (switch__6201__auto__,c__6216__auto___21188,mc_3dmask_21187,map__21171,map__21171__$1,view,elem){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_21183 = [null,null,null,null,null,null,null,null];(statearr_21183[(0)] = state_machine__6202__auto__);
(statearr_21183[(1)] = (1));
return statearr_21183;
});
var state_machine__6202__auto____1 = (function (state_21177){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_21177);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e21184){if((e21184 instanceof Object))
{var ex__6205__auto__ = e21184;var statearr_21185_21189 = state_21177;(statearr_21185_21189[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21190 = state_21177;
state_21177 = G__21190;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_21177){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_21177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___21188,mc_3dmask_21187,map__21171,map__21171__$1,view,elem))
})();var state__6218__auto__ = (function (){var statearr_21186 = f__6217__auto__.call(null);(statearr_21186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___21188);
return statearr_21186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___21188,mc_3dmask_21187,map__21171,map__21171__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__21191,key,modelChan){var map__21192 = p__21191;var map__21192__$1 = ((cljs.core.seq_QMARK_.call(null,map__21192))?cljs.core.apply.call(null,cljs.core.hash_map,map__21192):map__21192);var ctx = map__21192__$1;var tmpl_item = cljs.core.get.call(null,map__21192__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,map__21192,map__21192__$1,ctx,tmpl_item){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,map__21192,map__21192__$1,ctx,tmpl_item){
return (function (state_21204){var state_val_21205 = (state_21204[(1)]);if((state_val_21205 === (2)))
{var inst_21195 = (state_21204[(2)]);var inst_21196 = cljs.core.nth.call(null,inst_21195,(0),null);var inst_21197 = cljs.core.nth.call(null,inst_21195,(1),null);var inst_21198 = $("#tmpl_home");var inst_21199 = inst_21198.tmpl(inst_21197,tmpl_item);var inst_21200 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_21201 = [inst_21199,key];var inst_21202 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21200,inst_21201);var state_21204__$1 = (function (){var statearr_21206 = state_21204;(statearr_21206[(7)] = inst_21196);
return statearr_21206;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21204__$1,inst_21202);
} else
{if((state_val_21205 === (1)))
{var state_21204__$1 = state_21204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21204__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6216__auto__,map__21192,map__21192__$1,ctx,tmpl_item))
;return ((function (switch__6201__auto__,c__6216__auto__,map__21192,map__21192__$1,ctx,tmpl_item){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_21210 = [null,null,null,null,null,null,null,null];(statearr_21210[(0)] = state_machine__6202__auto__);
(statearr_21210[(1)] = (1));
return statearr_21210;
});
var state_machine__6202__auto____1 = (function (state_21204){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_21204);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e21211){if((e21211 instanceof Object))
{var ex__6205__auto__ = e21211;var statearr_21212_21214 = state_21204;(statearr_21212_21214[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21204);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21215 = state_21204;
state_21204 = G__21215;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_21204){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_21204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,map__21192,map__21192__$1,ctx,tmpl_item))
})();var state__6218__auto__ = (function (){var statearr_21213 = f__6217__auto__.call(null);(statearr_21213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_21213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,map__21192,map__21192__$1,ctx,tmpl_item))
);
return c__6216__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
