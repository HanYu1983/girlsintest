// Compiled by ClojureScript 0.0-2268
goog.provide('core2.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('core.fn');
goog.require('core.fn');
goog.require('cljs.core.async');
core2.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28975_SHARP_){return cljs.core._EQ_.call(null,view,p1__28975_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28976_SHARP_){return cljs.core._EQ_.call(null,view,p1__28976_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28977_SHARP_){return cljs.core._EQ_.call(null,view,p1__28977_SHARP_);
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
core2.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28978_SHARP_){return cljs.core._EQ_.call(null,view,p1__28978_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28979_SHARP_){return cljs.core._EQ_.call(null,view,p1__28979_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28980_SHARP_){return cljs.core._EQ_.call(null,view,p1__28980_SHARP_);
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
core2.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28981_SHARP_){return cljs.core._EQ_.call(null,view,p1__28981_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28982_SHARP_){return cljs.core._EQ_.call(null,view,p1__28982_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28983_SHARP_){return cljs.core._EQ_.call(null,view,p1__28983_SHARP_);
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
core2.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var configType = core2.model.configType.call(null,name);var G__29023_29062 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__29023_29062.done(((function (G__29023_29062,ret,configType){
return (function() { 
var G__29063__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var ConvertDTO = ((function (config,details,G__29023_29062,ret,configType){
return (function (p__29024){var vec__29025 = p__29024;var model = cljs.core.nth.call(null,vec__29025,(0),null);var detail = cljs.core.nth.call(null,vec__29025,(1),null);var obj29027 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj29027;
});})(config,details,G__29023_29062,ret,configType))
;var dto = (function (){var obj29029 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj29029;
})();var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,config,details,ConvertDTO,dto,G__29023_29062,ret,configType){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,config,details,ConvertDTO,dto,G__29023_29062,ret,configType){
return (function (state_29036){var state_val_29037 = (state_29036[(1)]);if((state_val_29037 === (2)))
{var inst_29033 = (state_29036[(2)]);var inst_29034 = cljs.core.async.close_BANG_.call(null,ret);var state_29036__$1 = (function (){var statearr_29038 = state_29036;(statearr_29038[(7)] = inst_29033);
return statearr_29038;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29036__$1,inst_29034);
} else
{if((state_val_29037 === (1)))
{var inst_29030 = [null,dto];var inst_29031 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29030,null));var state_29036__$1 = state_29036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29036__$1,(2),ret,inst_29031);
} else
{return null;
}
}
});})(c__6344__auto__,config,details,ConvertDTO,dto,G__29023_29062,ret,configType))
;return ((function (switch__6329__auto__,c__6344__auto__,config,details,ConvertDTO,dto,G__29023_29062,ret,configType){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29042 = [null,null,null,null,null,null,null,null];(statearr_29042[(0)] = state_machine__6330__auto__);
(statearr_29042[(1)] = (1));
return statearr_29042;
});
var state_machine__6330__auto____1 = (function (state_29036){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29036);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29043){if((e29043 instanceof Object))
{var ex__6333__auto__ = e29043;var statearr_29044_29064 = state_29036;(statearr_29044_29064[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29036);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29043;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29065 = state_29036;
state_29036 = G__29065;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29036){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,config,details,ConvertDTO,dto,G__29023_29062,ret,configType))
})();var state__6346__auto__ = (function (){var statearr_29045 = f__6345__auto__.call(null);(statearr_29045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_29045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,config,details,ConvertDTO,dto,G__29023_29062,ret,configType))
);
return c__6344__auto__;
};
var G__29063 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29063__delegate.call(this,args__$1);};
G__29063.cljs$lang$maxFixedArity = 0;
G__29063.cljs$lang$applyTo = (function (arglist__29066){
var args__$1 = cljs.core.seq(arglist__29066);
return G__29063__delegate(args__$1);
});
G__29063.cljs$core$IFn$_invoke$arity$variadic = G__29063__delegate;
return G__29063;
})()
;})(G__29023_29062,ret,configType))
);
G__29023_29062.fail(((function (G__29023_29062,ret,configType){
return (function (err){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,G__29023_29062,ret,configType){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,G__29023_29062,ret,configType){
return (function (state_29052){var state_val_29053 = (state_29052[(1)]);if((state_val_29053 === (2)))
{var inst_29049 = (state_29052[(2)]);var inst_29050 = cljs.core.async.close_BANG_.call(null,ret);var state_29052__$1 = (function (){var statearr_29054 = state_29052;(statearr_29054[(7)] = inst_29049);
return statearr_29054;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29052__$1,inst_29050);
} else
{if((state_val_29053 === (1)))
{var inst_29046 = [err,null];var inst_29047 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29046,null));var state_29052__$1 = state_29052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29052__$1,(2),ret,inst_29047);
} else
{return null;
}
}
});})(c__6344__auto__,G__29023_29062,ret,configType))
;return ((function (switch__6329__auto__,c__6344__auto__,G__29023_29062,ret,configType){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29058 = [null,null,null,null,null,null,null,null];(statearr_29058[(0)] = state_machine__6330__auto__);
(statearr_29058[(1)] = (1));
return statearr_29058;
});
var state_machine__6330__auto____1 = (function (state_29052){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29052);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29059){if((e29059 instanceof Object))
{var ex__6333__auto__ = e29059;var statearr_29060_29067 = state_29052;(statearr_29060_29067[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29052);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29068 = state_29052;
state_29052 = G__29068;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29052){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,G__29023_29062,ret,configType))
})();var state__6346__auto__ = (function (){var statearr_29061 = f__6345__auto__.call(null);(statearr_29061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_29061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,G__29023_29062,ret,configType))
);
return c__6344__auto__;
});})(G__29023_29062,ret,configType))
);
return ret;
}));
});
core2.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__29126){var map__29127 = p__29126;var map__29127__$1 = ((cljs.core.seq_QMARK_.call(null,map__29127))?cljs.core.apply.call(null,cljs.core.hash_map,map__29127):map__29127);var args = map__29127__$1;var id = cljs.core.get.call(null,map__29127__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = core2.model.configType.call(null,name);var G__29128_29183 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__29128_29183.done(((function (G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function() { 
var G__29184__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var ConvertHeadDTO = ((function (config,dir,details,detail,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function (p__29129){var vec__29130 = p__29129;var key__$1 = cljs.core.nth.call(null,vec__29130,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__29130,(1),null);var obj29132 = {"id":key__$1,"url":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj29132;
});})(config,dir,details,detail,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,ConvertHeadDTO,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,ConvertHeadDTO,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function iter__29133(s__29134){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,ConvertHeadDTO,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function (){var s__29134__$1 = s__29134;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29134__$1);if(temp__4126__auto__)
{var s__29134__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29134__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__29134__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__29136 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__29135 = (0);while(true){
if((i__29135 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__29135);cljs.core.chunk_append.call(null,b__29136,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__29185 = (i__29135 + (1));
i__29135 = G__29185;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29136),iter__29133.call(null,cljs.core.chunk_rest.call(null,s__29134__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29136),null);
}
} else
{var idx = cljs.core.first.call(null,s__29134__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__29133.call(null,cljs.core.rest.call(null,s__29134__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,ConvertHeadDTO,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
,null,null));
});})(config,dir,details,detail,ConvertHeadDTO,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,ConvertHeadDTO,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function iter__29137(s__29138){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,ConvertHeadDTO,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function (){var s__29138__$1 = s__29138;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29138__$1);if(temp__4126__auto__)
{var s__29138__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29138__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__29138__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__29140 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__29139 = (0);while(true){
if((i__29139 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__29139);cljs.core.chunk_append.call(null,b__29140,(function (){var obj29146 = {"id":url,"url":ServeFn.call(null,url)};return obj29146;
})());
{
var G__29186 = (i__29139 + (1));
i__29139 = G__29186;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29140),iter__29137.call(null,cljs.core.chunk_rest.call(null,s__29138__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29140),null);
}
} else
{var url = cljs.core.first.call(null,s__29138__$2);return cljs.core.cons.call(null,(function (){var obj29148 = {"id":url,"url":ServeFn.call(null,url)};return obj29148;
})(),iter__29137.call(null,cljs.core.rest.call(null,s__29138__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,ConvertHeadDTO,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
;var dto = (function (){var obj29150 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":core2.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,core.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":core2.model.bottomTab2.call(null,name),"styleUrl":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,core.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,details)),"date":detail.Date,"protalk":detail.Comment};return obj29150;
})();var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function (state_29157){var state_val_29158 = (state_29157[(1)]);if((state_val_29158 === (2)))
{var inst_29154 = (state_29157[(2)]);var inst_29155 = cljs.core.async.close_BANG_.call(null,ret);var state_29157__$1 = (function (){var statearr_29159 = state_29157;(statearr_29159[(7)] = inst_29154);
return statearr_29159;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29157__$1,inst_29155);
} else
{if((state_val_29158 === (1)))
{var inst_29151 = [null,dto];var inst_29152 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29151,null));var state_29157__$1 = state_29157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29157__$1,(2),ret,inst_29152);
} else
{return null;
}
}
});})(c__6344__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
;return ((function (switch__6329__auto__,c__6344__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29163 = [null,null,null,null,null,null,null,null];(statearr_29163[(0)] = state_machine__6330__auto__);
(statearr_29163[(1)] = (1));
return statearr_29163;
});
var state_machine__6330__auto____1 = (function (state_29157){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29157);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29164){if((e29164 instanceof Object))
{var ex__6333__auto__ = e29164;var statearr_29165_29187 = state_29157;(statearr_29165_29187[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29188 = state_29157;
state_29157 = G__29188;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29157){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
})();var state__6346__auto__ = (function (){var statearr_29166 = f__6345__auto__.call(null);(statearr_29166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_29166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
);
return c__6344__auto__;
};
var G__29184 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29184__delegate.call(this,args__$1);};
G__29184.cljs$lang$maxFixedArity = 0;
G__29184.cljs$lang$applyTo = (function (arglist__29189){
var args__$1 = cljs.core.seq(arglist__29189);
return G__29184__delegate(args__$1);
});
G__29184.cljs$core$IFn$_invoke$arity$variadic = G__29184__delegate;
return G__29184;
})()
;})(G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
);
G__29128_29183.fail(((function (G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function (err){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function (state_29173){var state_val_29174 = (state_29173[(1)]);if((state_val_29174 === (2)))
{var inst_29170 = (state_29173[(2)]);var inst_29171 = cljs.core.async.close_BANG_.call(null,ret);var state_29173__$1 = (function (){var statearr_29175 = state_29173;(statearr_29175[(7)] = inst_29170);
return statearr_29175;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29173__$1,inst_29171);
} else
{if((state_val_29174 === (1)))
{var inst_29167 = [err,null];var inst_29168 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29167,null));var state_29173__$1 = state_29173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29173__$1,(2),ret,inst_29168);
} else
{return null;
}
}
});})(c__6344__auto__,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
;return ((function (switch__6329__auto__,c__6344__auto__,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29179 = [null,null,null,null,null,null,null,null];(statearr_29179[(0)] = state_machine__6330__auto__);
(statearr_29179[(1)] = (1));
return statearr_29179;
});
var state_machine__6330__auto____1 = (function (state_29173){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29173);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29180){if((e29180 instanceof Object))
{var ex__6333__auto__ = e29180;var statearr_29181_29190 = state_29173;(statearr_29181_29190[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29191 = state_29173;
state_29173 = G__29191;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29173){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
})();var state__6346__auto__ = (function (){var statearr_29182 = f__6345__auto__.call(null);(statearr_29182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_29182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
);
return c__6344__auto__;
});})(G__29128_29183,ret,configType,map__29127,map__29127__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__){
return (function (state_29196){var state_val_29197 = (state_29196[(1)]);if((state_val_29197 === (1)))
{var inst_29194 = {"modelKey":""};var state_29196__$1 = state_29196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29196__$1,inst_29194);
} else
{return null;
}
});})(c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_29201 = [null,null,null,null,null,null,null];(statearr_29201[(0)] = state_machine__6330__auto__);
(statearr_29201[(1)] = (1));
return statearr_29201;
});
var state_machine__6330__auto____1 = (function (state_29196){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_29196);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e29202){if((e29202 instanceof Object))
{var ex__6333__auto__ = e29202;var statearr_29203_29205 = state_29196;(statearr_29203_29205[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29196);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29206 = state_29196;
state_29196 = G__29206;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_29196){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_29196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_29204 = f__6345__auto__.call(null);(statearr_29204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_29204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__))
);
return c__6344__auto__;
}));
core2.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
core2.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
core2.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
core2.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
core2.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
core2.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
