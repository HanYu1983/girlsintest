// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__9874,key,view){var map__9875 = p__9874;var map__9875__$1 = ((cljs.core.seq_QMARK_.call(null,map__9875))?cljs.core.apply.call(null,cljs.core.hash_map,map__9875):map__9875);var ctx = map__9875__$1;var container = cljs.core.get.call(null,map__9875__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__9876 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__9876.appendTo(container);
G__9876.fadeIn((400));
return G__9876;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__9877,key,view){var map__9878 = p__9877;var map__9878__$1 = ((cljs.core.seq_QMARK_.call(null,map__9878))?cljs.core.apply.call(null,cljs.core.hash_map,map__9878):map__9878);var ctx = map__9878__$1;var container = cljs.core.get.call(null,map__9878__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__9879 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__9879.remove();
return G__9879;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_9964 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");mc_modelContainer_9964.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__){
return (function (state_9936){var state_val_9937 = (state_9936[(1)]);if((state_val_9937 === (2)))
{var inst_9924 = (state_9936[(2)]);var inst_9925 = cljs.core.nth.call(null,inst_9924,(0),null);var inst_9926 = cljs.core.nth.call(null,inst_9924,(1),null);var inst_9927 = $("#tmpl_streetsnap_list");var inst_9928 = inst_9927.tmpl(inst_9926,null);var inst_9929 = inst_9928.find("#mc_modelContainer");var inst_9930 = (function (){var mc_modelContainer = inst_9929;var elem = inst_9928;var tmpl = inst_9927;var model = inst_9926;var err = inst_9925;var vec__9922 = inst_9924;return ((function (mc_modelContainer,elem,tmpl,model,err,vec__9922,inst_9924,inst_9925,inst_9926,inst_9927,inst_9928,inst_9929,state_val_9937,c__6225__auto__){
return (function (){var that = this;var c__6225__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__9922,inst_9924,inst_9925,inst_9926,inst_9927,inst_9928,inst_9929,state_val_9937,c__6225__auto__){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__9922,inst_9924,inst_9925,inst_9926,inst_9927,inst_9928,inst_9929,state_val_9937,c__6225__auto__){
return (function (state_9947){var state_val_9948 = (state_9947[(1)]);if((state_val_9948 === (2)))
{var inst_9945 = (state_9947[(2)]);var state_9947__$1 = state_9947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9947__$1,inst_9945);
} else
{if((state_val_9948 === (1)))
{var inst_9938 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_9939 = that.id;var inst_9940 = [inst_9939];var inst_9941 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9938,inst_9940);var inst_9942 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_9941];var inst_9943 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9942,null));var state_9947__$1 = state_9947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9947__$1,(2),tool.react.OnReact,inst_9943);
} else
{return null;
}
}
});})(c__6225__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__9922,inst_9924,inst_9925,inst_9926,inst_9927,inst_9928,inst_9929,state_val_9937,c__6225__auto__))
;return ((function (switch__6210__auto__,c__6225__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__9922,inst_9924,inst_9925,inst_9926,inst_9927,inst_9928,inst_9929,state_val_9937,c__6225__auto__){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_9952 = [null,null,null,null,null,null,null];(statearr_9952[(0)] = state_machine__6211__auto__);
(statearr_9952[(1)] = (1));
return statearr_9952;
});
var state_machine__6211__auto____1 = (function (state_9947){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_9947);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e9953){if((e9953 instanceof Object))
{var ex__6214__auto__ = e9953;var statearr_9954_9965 = state_9947;(statearr_9954_9965[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9966 = state_9947;
state_9947 = G__9966;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_9947){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_9947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__9922,inst_9924,inst_9925,inst_9926,inst_9927,inst_9928,inst_9929,state_val_9937,c__6225__auto__))
})();var state__6227__auto__ = (function (){var statearr_9955 = f__6226__auto__.call(null);(statearr_9955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto____$1);
return statearr_9955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto____$1,that,mc_modelContainer,elem,tmpl,model,err,vec__9922,inst_9924,inst_9925,inst_9926,inst_9927,inst_9928,inst_9929,state_val_9937,c__6225__auto__))
);
return c__6225__auto____$1;
});
;})(mc_modelContainer,elem,tmpl,model,err,vec__9922,inst_9924,inst_9925,inst_9926,inst_9927,inst_9928,inst_9929,state_val_9937,c__6225__auto__))
})();var inst_9931 = inst_9929.delegate("div[modelFrame]","click",inst_9930);var inst_9932 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_9933 = [inst_9928];var inst_9934 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9932,inst_9933);var state_9936__$1 = (function (){var statearr_9956 = state_9936;(statearr_9956[(7)] = inst_9931);
return statearr_9956;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9936__$1,inst_9934);
} else
{if((state_val_9937 === (1)))
{var state_9936__$1 = state_9936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9936__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6225__auto__))
;return ((function (switch__6210__auto__,c__6225__auto__){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_9960 = [null,null,null,null,null,null,null,null];(statearr_9960[(0)] = state_machine__6211__auto__);
(statearr_9960[(1)] = (1));
return statearr_9960;
});
var state_machine__6211__auto____1 = (function (state_9936){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_9936);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e9961){if((e9961 instanceof Object))
{var ex__6214__auto__ = e9961;var statearr_9962_9967 = state_9936;(statearr_9962_9967[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9936);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9968 = state_9936;
state_9936 = G__9968;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_9936){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_9936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__))
})();var state__6227__auto__ = (function (){var statearr_9963 = f__6226__auto__.call(null);(statearr_9963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_9963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__))
);
return c__6225__auto__;
}));
});
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__10034){var map__10035 = p__10034;var map__10035__$1 = ((cljs.core.seq_QMARK_.call(null,map__10035))?cljs.core.apply.call(null,cljs.core.hash_map,map__10035):map__10035);var view = map__10035__$1;var elem = cljs.core.get.call(null,map__10035__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_10099 = elem.find("#mc_historyContainer");mc_modelContainer_10099.undelegate("img","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (ctx,key,modelChan){var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__){
return (function (state_10053){var state_val_10054 = (state_10053[(1)]);if((state_val_10054 === (2)))
{var inst_10038 = (state_10053[(2)]);var inst_10039 = cljs.core.nth.call(null,inst_10038,(0),null);var inst_10040 = cljs.core.nth.call(null,inst_10038,(1),null);var inst_10041 = $("#tmpl_streetsnap");var inst_10042 = inst_10041.tmpl(inst_10040,null);var inst_10043 = inst_10042.find("#mc_historyContainer");var inst_10044 = inst_10042.find("#mc_sideContainer");var inst_10045 = (function (){var mc_sideContainer = inst_10044;var mc_historyContainer = inst_10043;var elem = inst_10042;var tmpl = inst_10041;var model = inst_10040;var err = inst_10039;var vec__10036 = inst_10038;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,state_val_10054,c__6225__auto__){
return (function (){var that = this;var c__6225__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,state_val_10054,c__6225__auto__){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,state_val_10054,c__6225__auto__){
return (function (state_10064){var state_val_10065 = (state_10064[(1)]);if((state_val_10065 === (2)))
{var inst_10062 = (state_10064[(2)]);var state_10064__$1 = state_10064;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10064__$1,inst_10062);
} else
{if((state_val_10065 === (1)))
{var inst_10055 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_10056 = that.id;var inst_10057 = [inst_10056];var inst_10058 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10055,inst_10057);var inst_10059 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_10058];var inst_10060 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10059,null));var state_10064__$1 = state_10064;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10064__$1,(2),tool.react.OnReact,inst_10060);
} else
{return null;
}
}
});})(c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,state_val_10054,c__6225__auto__))
;return ((function (switch__6210__auto__,c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,state_val_10054,c__6225__auto__){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_10069 = [null,null,null,null,null,null,null];(statearr_10069[(0)] = state_machine__6211__auto__);
(statearr_10069[(1)] = (1));
return statearr_10069;
});
var state_machine__6211__auto____1 = (function (state_10064){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_10064);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e10070){if((e10070 instanceof Object))
{var ex__6214__auto__ = e10070;var statearr_10071_10100 = state_10064;(statearr_10071_10100[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10064);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10101 = state_10064;
state_10064 = G__10101;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_10064){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_10064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,state_val_10054,c__6225__auto__))
})();var state__6227__auto__ = (function (){var statearr_10072 = f__6226__auto__.call(null);(statearr_10072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto____$1);
return statearr_10072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,state_val_10054,c__6225__auto__))
);
return c__6225__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,state_val_10054,c__6225__auto__))
})();var inst_10046 = inst_10044.delegate("img","click",inst_10045);var inst_10047 = (function (){var mc_sideContainer = inst_10044;var mc_historyContainer = inst_10043;var elem = inst_10042;var tmpl = inst_10041;var model = inst_10040;var err = inst_10039;var vec__10036 = inst_10038;return ((function (mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,inst_10045,inst_10046,state_val_10054,c__6225__auto__){
return (function (){var that = this;var c__6225__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,inst_10045,inst_10046,state_val_10054,c__6225__auto__){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,inst_10045,inst_10046,state_val_10054,c__6225__auto__){
return (function (state_10082){var state_val_10083 = (state_10082[(1)]);if((state_val_10083 === (2)))
{var inst_10080 = (state_10082[(2)]);var state_10082__$1 = state_10082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10082__$1,inst_10080);
} else
{if((state_val_10083 === (1)))
{var inst_10073 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_10074 = that.id;var inst_10075 = [inst_10074];var inst_10076 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10073,inst_10075);var inst_10077 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_10076];var inst_10078 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10077,null));var state_10082__$1 = state_10082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10082__$1,(2),tool.react.OnReact,inst_10078);
} else
{return null;
}
}
});})(c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,inst_10045,inst_10046,state_val_10054,c__6225__auto__))
;return ((function (switch__6210__auto__,c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,inst_10045,inst_10046,state_val_10054,c__6225__auto__){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_10087 = [null,null,null,null,null,null,null];(statearr_10087[(0)] = state_machine__6211__auto__);
(statearr_10087[(1)] = (1));
return statearr_10087;
});
var state_machine__6211__auto____1 = (function (state_10082){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_10082);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e10088){if((e10088 instanceof Object))
{var ex__6214__auto__ = e10088;var statearr_10089_10102 = state_10082;(statearr_10089_10102[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10082);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10103 = state_10082;
state_10082 = G__10103;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_10082){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_10082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,inst_10045,inst_10046,state_val_10054,c__6225__auto__))
})();var state__6227__auto__ = (function (){var statearr_10090 = f__6226__auto__.call(null);(statearr_10090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto____$1);
return statearr_10090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto____$1,that,mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,inst_10045,inst_10046,state_val_10054,c__6225__auto__))
);
return c__6225__auto____$1;
});
;})(mc_sideContainer,mc_historyContainer,elem,tmpl,model,err,vec__10036,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,inst_10043,inst_10044,inst_10045,inst_10046,state_val_10054,c__6225__auto__))
})();var inst_10048 = inst_10043.delegate("img","click",inst_10047);var inst_10049 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_10050 = [inst_10042];var inst_10051 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10049,inst_10050);var state_10053__$1 = (function (){var statearr_10091 = state_10053;(statearr_10091[(7)] = inst_10048);
(statearr_10091[(8)] = inst_10046);
return statearr_10091;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10053__$1,inst_10051);
} else
{if((state_val_10054 === (1)))
{var state_10053__$1 = state_10053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10053__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6225__auto__))
;return ((function (switch__6210__auto__,c__6225__auto__){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_10095 = [null,null,null,null,null,null,null,null,null];(statearr_10095[(0)] = state_machine__6211__auto__);
(statearr_10095[(1)] = (1));
return statearr_10095;
});
var state_machine__6211__auto____1 = (function (state_10053){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_10053);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e10096){if((e10096 instanceof Object))
{var ex__6214__auto__ = e10096;var statearr_10097_10104 = state_10053;(statearr_10097_10104[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10053);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10105 = state_10053;
state_10053 = G__10105;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_10053){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_10053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__))
})();var state__6227__auto__ = (function (){var statearr_10098 = f__6226__auto__.call(null);(statearr_10098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_10098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__))
);
return c__6225__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,modelChan){var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__){
return (function (state_10114){var state_val_10115 = (state_10114[(1)]);if((state_val_10115 === (2)))
{var inst_10107 = (state_10114[(2)]);var inst_10108 = $("#tmpl_home");var inst_10109 = inst_10108.tmpl(inst_10107,null);var inst_10110 = [new cljs.core.Keyword(null,"elem","elem",618631056)];var inst_10111 = [inst_10109];var inst_10112 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10110,inst_10111);var state_10114__$1 = state_10114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10114__$1,inst_10112);
} else
{if((state_val_10115 === (1)))
{var state_10114__$1 = state_10114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10114__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6225__auto__))
;return ((function (switch__6210__auto__,c__6225__auto__){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_10119 = [null,null,null,null,null,null,null];(statearr_10119[(0)] = state_machine__6211__auto__);
(statearr_10119[(1)] = (1));
return statearr_10119;
});
var state_machine__6211__auto____1 = (function (state_10114){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_10114);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e10120){if((e10120 instanceof Object))
{var ex__6214__auto__ = e10120;var statearr_10121_10123 = state_10114;(statearr_10121_10123[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10124 = state_10114;
state_10114 = G__10124;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_10114){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_10114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__))
})();var state__6227__auto__ = (function (){var statearr_10122 = f__6226__auto__.call(null);(statearr_10122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_10122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__))
);
return c__6225__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
