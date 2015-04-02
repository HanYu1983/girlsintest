// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9794_SHARP_){return cljs.core._EQ_.call(null,view,p1__9794_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9795_SHARP_){return cljs.core._EQ_.call(null,view,p1__9795_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9796_SHARP_){return cljs.core._EQ_.call(null,view,p1__9796_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null))))
{return "product";
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error(("no configType with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
} else
{return null;
}
}
}
}
});
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9797_SHARP_){return cljs.core._EQ_.call(null,view,p1__9797_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9798_SHARP_){return cljs.core._EQ_.call(null,view,p1__9798_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9799_SHARP_){return cljs.core._EQ_.call(null,view,p1__9799_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null))))
{return "\u7522\u54C1\u8CC7\u6599";
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error(("no bottomTab1 with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
} else
{return null;
}
}
}
}
});
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9800_SHARP_){return cljs.core._EQ_.call(null,view,p1__9800_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9801_SHARP_){return cljs.core._EQ_.call(null,view,p1__9801_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9802_SHARP_){return cljs.core._EQ_.call(null,view,p1__9802_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null))))
{return "\u7522\u54C1\u7279\u8272";
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error(("no bottomTab2 with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
} else
{return null;
}
}
}
}
});
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__9806){var vec__9807 = p__9806;var model = cljs.core.nth.call(null,vec__9807,(0),null);var detail = cljs.core.nth.call(null,vec__9807,(1),null);var G__9808 = (new Date(detail.Date));G__9808.getTime();
return G__9808;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__9811){var vec__9812 = p__9811;var model = cljs.core.nth.call(null,vec__9812,(0),null);var detail = cljs.core.nth.call(null,vec__9812,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__9854){var map__9855 = p__9854;var map__9855__$1 = ((cljs.core.seq_QMARK_.call(null,map__9855))?cljs.core.apply.call(null,cljs.core.hash_map,map__9855):map__9855);var args = map__9855__$1;var searchKey = cljs.core.get.call(null,map__9855__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__9856_9895 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__9856_9895.done(((function (G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey){
return (function() { 
var G__9896__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey){
return (function (p__9857){var vec__9858 = p__9857;var model = cljs.core.nth.call(null,vec__9858,(0),null);var detail = cljs.core.nth.call(null,vec__9858,(1),null);var obj9860 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj9860;
});})(config,details,filtered,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey))
;var dto = (function (){var obj9862 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj9862;
})();var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey){
return (function (state_9869){var state_val_9870 = (state_9869[(1)]);if((state_val_9870 === (2)))
{var inst_9866 = (state_9869[(2)]);var inst_9867 = cljs.core.async.close_BANG_.call(null,ret);var state_9869__$1 = (function (){var statearr_9871 = state_9869;(statearr_9871[(7)] = inst_9866);
return statearr_9871;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9869__$1,inst_9867);
} else
{if((state_val_9870 === (1)))
{var inst_9863 = [null,dto];var inst_9864 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9863,null));var state_9869__$1 = state_9869;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9869__$1,(2),ret,inst_9864);
} else
{return null;
}
}
});})(c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey))
;return ((function (switch__6201__auto__,c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_9875 = [null,null,null,null,null,null,null,null];(statearr_9875[(0)] = state_machine__6202__auto__);
(statearr_9875[(1)] = (1));
return statearr_9875;
});
var state_machine__6202__auto____1 = (function (state_9869){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_9869);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e9876){if((e9876 instanceof Object))
{var ex__6205__auto__ = e9876;var statearr_9877_9897 = state_9869;(statearr_9877_9897[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9869);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9898 = state_9869;
state_9869 = G__9898;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_9869){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_9869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey))
})();var state__6218__auto__ = (function (){var statearr_9878 = f__6217__auto__.call(null);(statearr_9878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_9878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey))
);
return c__6216__auto__;
};
var G__9896 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9896__delegate.call(this,args__$1);};
G__9896.cljs$lang$maxFixedArity = 0;
G__9896.cljs$lang$applyTo = (function (arglist__9899){
var args__$1 = cljs.core.seq(arglist__9899);
return G__9896__delegate(args__$1);
});
G__9896.cljs$core$IFn$_invoke$arity$variadic = G__9896__delegate;
return G__9896;
})()
;})(G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey))
);
G__9856_9895.fail(((function (G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey){
return (function (err){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey){
return (function (state_9885){var state_val_9886 = (state_9885[(1)]);if((state_val_9886 === (2)))
{var inst_9882 = (state_9885[(2)]);var inst_9883 = cljs.core.async.close_BANG_.call(null,ret);var state_9885__$1 = (function (){var statearr_9887 = state_9885;(statearr_9887[(7)] = inst_9882);
return statearr_9887;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9885__$1,inst_9883);
} else
{if((state_val_9886 === (1)))
{var inst_9879 = [err,null];var inst_9880 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9879,null));var state_9885__$1 = state_9885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9885__$1,(2),ret,inst_9880);
} else
{return null;
}
}
});})(c__6216__auto__,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey))
;return ((function (switch__6201__auto__,c__6216__auto__,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_9891 = [null,null,null,null,null,null,null,null];(statearr_9891[(0)] = state_machine__6202__auto__);
(statearr_9891[(1)] = (1));
return statearr_9891;
});
var state_machine__6202__auto____1 = (function (state_9885){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_9885);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e9892){if((e9892 instanceof Object))
{var ex__6205__auto__ = e9892;var statearr_9893_9900 = state_9885;(statearr_9893_9900[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9885);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9901 = state_9885;
state_9885 = G__9901;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_9885){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_9885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey))
})();var state__6218__auto__ = (function (){var statearr_9894 = f__6217__auto__.call(null);(statearr_9894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_9894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey))
);
return c__6216__auto__;
});})(G__9856_9895,configType,ret,map__9855,map__9855__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__9959){var map__9960 = p__9959;var map__9960__$1 = ((cljs.core.seq_QMARK_.call(null,map__9960))?cljs.core.apply.call(null,cljs.core.hash_map,map__9960):map__9960);var args = map__9960__$1;var id = cljs.core.get.call(null,map__9960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__9961_10016 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__9961_10016.done(((function (G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function() { 
var G__10017__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function (p__9962){var vec__9963 = p__9962;var key__$1 = cljs.core.nth.call(null,vec__9963,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__9963,(1),null);var obj9965 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj9965;
});})(config,dir,details,detail,filtered,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function iter__9966(s__9967){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function (){var s__9967__$1 = s__9967;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9967__$1);if(temp__4126__auto__)
{var s__9967__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9967__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__9967__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__9969 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__9968 = (0);while(true){
if((i__9968 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__9968);cljs.core.chunk_append.call(null,b__9969,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__10018 = (i__9968 + (1));
i__9968 = G__10018;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9969),iter__9966.call(null,cljs.core.chunk_rest.call(null,s__9967__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9969),null);
}
} else
{var idx = cljs.core.first.call(null,s__9967__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__9966.call(null,cljs.core.rest.call(null,s__9967__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function iter__9970(s__9971){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function (){var s__9971__$1 = s__9971;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9971__$1);if(temp__4126__auto__)
{var s__9971__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9971__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__9971__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__9973 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__9972 = (0);while(true){
if((i__9972 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__9972);cljs.core.chunk_append.call(null,b__9973,(function (){var obj9979 = {"id":url,"url":ServeFn.call(null,url)};return obj9979;
})());
{
var G__10019 = (i__9972 + (1));
i__9972 = G__10019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9973),iter__9970.call(null,cljs.core.chunk_rest.call(null,s__9971__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9973),null);
}
} else
{var url = cljs.core.first.call(null,s__9971__$2);return cljs.core.cons.call(null,(function (){var obj9981 = {"id":url,"url":ServeFn.call(null,url)};return obj9981;
})(),iter__9970.call(null,cljs.core.rest.call(null,s__9971__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
;var dto = (function (){var obj9983 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj9983;
})();var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function (state_9990){var state_val_9991 = (state_9990[(1)]);if((state_val_9991 === (2)))
{var inst_9987 = (state_9990[(2)]);var inst_9988 = cljs.core.async.close_BANG_.call(null,ret);var state_9990__$1 = (function (){var statearr_9992 = state_9990;(statearr_9992[(7)] = inst_9987);
return statearr_9992;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9990__$1,inst_9988);
} else
{if((state_val_9991 === (1)))
{var inst_9984 = [null,dto];var inst_9985 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9984,null));var state_9990__$1 = state_9990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9990__$1,(2),ret,inst_9985);
} else
{return null;
}
}
});})(c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
;return ((function (switch__6201__auto__,c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_9996 = [null,null,null,null,null,null,null,null];(statearr_9996[(0)] = state_machine__6202__auto__);
(statearr_9996[(1)] = (1));
return statearr_9996;
});
var state_machine__6202__auto____1 = (function (state_9990){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_9990);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e9997){if((e9997 instanceof Object))
{var ex__6205__auto__ = e9997;var statearr_9998_10020 = state_9990;(statearr_9998_10020[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10021 = state_9990;
state_9990 = G__10021;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_9990){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_9990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
})();var state__6218__auto__ = (function (){var statearr_9999 = f__6217__auto__.call(null);(statearr_9999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_9999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
);
return c__6216__auto__;
};
var G__10017 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10017__delegate.call(this,args__$1);};
G__10017.cljs$lang$maxFixedArity = 0;
G__10017.cljs$lang$applyTo = (function (arglist__10022){
var args__$1 = cljs.core.seq(arglist__10022);
return G__10017__delegate(args__$1);
});
G__10017.cljs$core$IFn$_invoke$arity$variadic = G__10017__delegate;
return G__10017;
})()
;})(G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
);
G__9961_10016.fail(((function (G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function (err){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function (state_10006){var state_val_10007 = (state_10006[(1)]);if((state_val_10007 === (2)))
{var inst_10003 = (state_10006[(2)]);var inst_10004 = cljs.core.async.close_BANG_.call(null,ret);var state_10006__$1 = (function (){var statearr_10008 = state_10006;(statearr_10008[(7)] = inst_10003);
return statearr_10008;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10006__$1,inst_10004);
} else
{if((state_val_10007 === (1)))
{var inst_10000 = [err,null];var inst_10001 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10000,null));var state_10006__$1 = state_10006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10006__$1,(2),ret,inst_10001);
} else
{return null;
}
}
});})(c__6216__auto__,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
;return ((function (switch__6201__auto__,c__6216__auto__,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10012 = [null,null,null,null,null,null,null,null];(statearr_10012[(0)] = state_machine__6202__auto__);
(statearr_10012[(1)] = (1));
return statearr_10012;
});
var state_machine__6202__auto____1 = (function (state_10006){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10006);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10013){if((e10013 instanceof Object))
{var ex__6205__auto__ = e10013;var statearr_10014_10023 = state_10006;(statearr_10014_10023[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10024 = state_10006;
state_10006 = G__10024;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10006){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
})();var state__6218__auto__ = (function (){var statearr_10015 = f__6217__auto__.call(null);(statearr_10015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
);
return c__6216__auto__;
});})(G__9961_10016,ret,configType,map__9960,map__9960__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var configType = "model";var G__10026_10064 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__10026_10064.done(((function (G__10026_10064,ret,configType){
return (function() { 
var G__10065__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var vec__10027 = cljs.core.first.call(null,details);var modelKey = cljs.core.nth.call(null,vec__10027,(0),null);var detail = cljs.core.nth.call(null,vec__10027,(1),null);var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,config,details,vec__10027,modelKey,detail,G__10026_10064,ret,configType){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,config,details,vec__10027,modelKey,detail,G__10026_10064,ret,configType){
return (function (state_10038){var state_val_10039 = (state_10038[(1)]);if((state_val_10039 === (2)))
{var inst_10035 = (state_10038[(2)]);var inst_10036 = cljs.core.async.close_BANG_.call(null,ret);var state_10038__$1 = (function (){var statearr_10040 = state_10038;(statearr_10040[(7)] = inst_10035);
return statearr_10040;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10038__$1,inst_10036);
} else
{if((state_val_10039 === (1)))
{var inst_10030 = detail.ModelKey;var inst_10031 = {"modelKey":inst_10030};var inst_10032 = [null,inst_10031];var inst_10033 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10032,null));var state_10038__$1 = state_10038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10038__$1,(2),ret,inst_10033);
} else
{return null;
}
}
});})(c__6216__auto__,config,details,vec__10027,modelKey,detail,G__10026_10064,ret,configType))
;return ((function (switch__6201__auto__,c__6216__auto__,config,details,vec__10027,modelKey,detail,G__10026_10064,ret,configType){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10044 = [null,null,null,null,null,null,null,null];(statearr_10044[(0)] = state_machine__6202__auto__);
(statearr_10044[(1)] = (1));
return statearr_10044;
});
var state_machine__6202__auto____1 = (function (state_10038){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10038);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10045){if((e10045 instanceof Object))
{var ex__6205__auto__ = e10045;var statearr_10046_10066 = state_10038;(statearr_10046_10066[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10038);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10067 = state_10038;
state_10038 = G__10067;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10038){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,config,details,vec__10027,modelKey,detail,G__10026_10064,ret,configType))
})();var state__6218__auto__ = (function (){var statearr_10047 = f__6217__auto__.call(null);(statearr_10047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,config,details,vec__10027,modelKey,detail,G__10026_10064,ret,configType))
);
return c__6216__auto__;
};
var G__10065 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10065__delegate.call(this,args__$1);};
G__10065.cljs$lang$maxFixedArity = 0;
G__10065.cljs$lang$applyTo = (function (arglist__10068){
var args__$1 = cljs.core.seq(arglist__10068);
return G__10065__delegate(args__$1);
});
G__10065.cljs$core$IFn$_invoke$arity$variadic = G__10065__delegate;
return G__10065;
})()
;})(G__10026_10064,ret,configType))
);
G__10026_10064.fail(((function (G__10026_10064,ret,configType){
return (function (p1__10025_SHARP_){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,G__10026_10064,ret,configType){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,G__10026_10064,ret,configType){
return (function (state_10054){var state_val_10055 = (state_10054[(1)]);if((state_val_10055 === (2)))
{var inst_10051 = (state_10054[(2)]);var inst_10052 = cljs.core.async.close_BANG_.call(null,ret);var state_10054__$1 = (function (){var statearr_10056 = state_10054;(statearr_10056[(7)] = inst_10051);
return statearr_10056;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10054__$1,inst_10052);
} else
{if((state_val_10055 === (1)))
{var inst_10048 = [p1__10025_SHARP_,null];var inst_10049 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10048,null));var state_10054__$1 = state_10054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10054__$1,(2),ret,inst_10049);
} else
{return null;
}
}
});})(c__6216__auto__,G__10026_10064,ret,configType))
;return ((function (switch__6201__auto__,c__6216__auto__,G__10026_10064,ret,configType){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_10060 = [null,null,null,null,null,null,null,null];(statearr_10060[(0)] = state_machine__6202__auto__);
(statearr_10060[(1)] = (1));
return statearr_10060;
});
var state_machine__6202__auto____1 = (function (state_10054){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_10054);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e10061){if((e10061 instanceof Object))
{var ex__6205__auto__ = e10061;var statearr_10062_10069 = state_10054;(statearr_10062_10069[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10054);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10070 = state_10054;
state_10054 = G__10070;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_10054){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_10054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,G__10026_10064,ret,configType))
})();var state__6218__auto__ = (function (){var statearr_10063 = f__6217__auto__.call(null);(statearr_10063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_10063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,G__10026_10064,ret,configType))
);
return c__6216__auto__;
});})(G__10026_10064,ret,configType))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
