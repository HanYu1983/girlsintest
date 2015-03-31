// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14216_SHARP_){return cljs.core._EQ_.call(null,view,p1__14216_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14217_SHARP_){return cljs.core._EQ_.call(null,view,p1__14217_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14218_SHARP_){return cljs.core._EQ_.call(null,view,p1__14218_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14219_SHARP_){return cljs.core._EQ_.call(null,view,p1__14219_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14220_SHARP_){return cljs.core._EQ_.call(null,view,p1__14220_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14221_SHARP_){return cljs.core._EQ_.call(null,view,p1__14221_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14222_SHARP_){return cljs.core._EQ_.call(null,view,p1__14222_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14223_SHARP_){return cljs.core._EQ_.call(null,view,p1__14223_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14224_SHARP_){return cljs.core._EQ_.call(null,view,p1__14224_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__14228){var vec__14229 = p__14228;var model = cljs.core.nth.call(null,vec__14229,(0),null);var detail = cljs.core.nth.call(null,vec__14229,(1),null);var G__14230 = (new Date(detail.Date));G__14230.getTime();
return G__14230;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__14233){var vec__14234 = p__14233;var model = cljs.core.nth.call(null,vec__14234,(0),null);var detail = cljs.core.nth.call(null,vec__14234,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__14276){var map__14277 = p__14276;var map__14277__$1 = ((cljs.core.seq_QMARK_.call(null,map__14277))?cljs.core.apply.call(null,cljs.core.hash_map,map__14277):map__14277);var args = map__14277__$1;var searchKey = cljs.core.get.call(null,map__14277__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__14278_14317 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__14278_14317.done(((function (G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey){
return (function() { 
var G__14318__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey){
return (function (p__14279){var vec__14280 = p__14279;var model = cljs.core.nth.call(null,vec__14280,(0),null);var detail = cljs.core.nth.call(null,vec__14280,(1),null);var obj14282 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj14282;
});})(config,details,filtered,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey))
;var dto = (function (){var obj14284 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj14284;
})();var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey){
return (function (state_14291){var state_val_14292 = (state_14291[(1)]);if((state_val_14292 === (2)))
{var inst_14288 = (state_14291[(2)]);var inst_14289 = cljs.core.async.close_BANG_.call(null,ret);var state_14291__$1 = (function (){var statearr_14293 = state_14291;(statearr_14293[(7)] = inst_14288);
return statearr_14293;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14291__$1,inst_14289);
} else
{if((state_val_14292 === (1)))
{var inst_14285 = [null,dto];var inst_14286 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14285,null));var state_14291__$1 = state_14291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14291__$1,(2),ret,inst_14286);
} else
{return null;
}
}
});})(c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey))
;return ((function (switch__6201__auto__,c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14297 = [null,null,null,null,null,null,null,null];(statearr_14297[(0)] = state_machine__6202__auto__);
(statearr_14297[(1)] = (1));
return statearr_14297;
});
var state_machine__6202__auto____1 = (function (state_14291){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14291);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14298){if((e14298 instanceof Object))
{var ex__6205__auto__ = e14298;var statearr_14299_14319 = state_14291;(statearr_14299_14319[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14320 = state_14291;
state_14291 = G__14320;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14291){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey))
})();var state__6218__auto__ = (function (){var statearr_14300 = f__6217__auto__.call(null);(statearr_14300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey))
);
return c__6216__auto__;
};
var G__14318 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14318__delegate.call(this,args__$1);};
G__14318.cljs$lang$maxFixedArity = 0;
G__14318.cljs$lang$applyTo = (function (arglist__14321){
var args__$1 = cljs.core.seq(arglist__14321);
return G__14318__delegate(args__$1);
});
G__14318.cljs$core$IFn$_invoke$arity$variadic = G__14318__delegate;
return G__14318;
})()
;})(G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey))
);
G__14278_14317.fail(((function (G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey){
return (function (err){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey){
return (function (state_14307){var state_val_14308 = (state_14307[(1)]);if((state_val_14308 === (2)))
{var inst_14304 = (state_14307[(2)]);var inst_14305 = cljs.core.async.close_BANG_.call(null,ret);var state_14307__$1 = (function (){var statearr_14309 = state_14307;(statearr_14309[(7)] = inst_14304);
return statearr_14309;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14307__$1,inst_14305);
} else
{if((state_val_14308 === (1)))
{var inst_14301 = [err,null];var inst_14302 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14301,null));var state_14307__$1 = state_14307;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14307__$1,(2),ret,inst_14302);
} else
{return null;
}
}
});})(c__6216__auto__,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey))
;return ((function (switch__6201__auto__,c__6216__auto__,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14313 = [null,null,null,null,null,null,null,null];(statearr_14313[(0)] = state_machine__6202__auto__);
(statearr_14313[(1)] = (1));
return statearr_14313;
});
var state_machine__6202__auto____1 = (function (state_14307){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14307);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14314){if((e14314 instanceof Object))
{var ex__6205__auto__ = e14314;var statearr_14315_14322 = state_14307;(statearr_14315_14322[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14307);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14314;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14323 = state_14307;
state_14307 = G__14323;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14307){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey))
})();var state__6218__auto__ = (function (){var statearr_14316 = f__6217__auto__.call(null);(statearr_14316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey))
);
return c__6216__auto__;
});})(G__14278_14317,configType,ret,map__14277,map__14277__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__14381){var map__14382 = p__14381;var map__14382__$1 = ((cljs.core.seq_QMARK_.call(null,map__14382))?cljs.core.apply.call(null,cljs.core.hash_map,map__14382):map__14382);var args = map__14382__$1;var id = cljs.core.get.call(null,map__14382__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__14383_14438 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__14383_14438.done(((function (G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function() { 
var G__14439__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function (p__14384){var vec__14385 = p__14384;var key__$1 = cljs.core.nth.call(null,vec__14385,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__14385,(1),null);var obj14387 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj14387;
});})(config,dir,details,detail,filtered,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function iter__14388(s__14389){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function (){var s__14389__$1 = s__14389;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14389__$1);if(temp__4126__auto__)
{var s__14389__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14389__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14389__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14391 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14390 = (0);while(true){
if((i__14390 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__14390);cljs.core.chunk_append.call(null,b__14391,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__14440 = (i__14390 + (1));
i__14390 = G__14440;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14391),iter__14388.call(null,cljs.core.chunk_rest.call(null,s__14389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14391),null);
}
} else
{var idx = cljs.core.first.call(null,s__14389__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__14388.call(null,cljs.core.rest.call(null,s__14389__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function iter__14392(s__14393){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function (){var s__14393__$1 = s__14393;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14393__$1);if(temp__4126__auto__)
{var s__14393__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14393__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14393__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14395 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14394 = (0);while(true){
if((i__14394 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__14394);cljs.core.chunk_append.call(null,b__14395,(function (){var obj14401 = {"id":url,"url":ServeFn.call(null,url)};return obj14401;
})());
{
var G__14441 = (i__14394 + (1));
i__14394 = G__14441;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14395),iter__14392.call(null,cljs.core.chunk_rest.call(null,s__14393__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14395),null);
}
} else
{var url = cljs.core.first.call(null,s__14393__$2);return cljs.core.cons.call(null,(function (){var obj14403 = {"id":url,"url":ServeFn.call(null,url)};return obj14403;
})(),iter__14392.call(null,cljs.core.rest.call(null,s__14393__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
;var dto = (function (){var obj14405 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj14405;
})();var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function (state_14412){var state_val_14413 = (state_14412[(1)]);if((state_val_14413 === (2)))
{var inst_14409 = (state_14412[(2)]);var inst_14410 = cljs.core.async.close_BANG_.call(null,ret);var state_14412__$1 = (function (){var statearr_14414 = state_14412;(statearr_14414[(7)] = inst_14409);
return statearr_14414;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14412__$1,inst_14410);
} else
{if((state_val_14413 === (1)))
{var inst_14406 = [null,dto];var inst_14407 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14406,null));var state_14412__$1 = state_14412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14412__$1,(2),ret,inst_14407);
} else
{return null;
}
}
});})(c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
;return ((function (switch__6201__auto__,c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14418 = [null,null,null,null,null,null,null,null];(statearr_14418[(0)] = state_machine__6202__auto__);
(statearr_14418[(1)] = (1));
return statearr_14418;
});
var state_machine__6202__auto____1 = (function (state_14412){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14412);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14419){if((e14419 instanceof Object))
{var ex__6205__auto__ = e14419;var statearr_14420_14442 = state_14412;(statearr_14420_14442[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14412);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14443 = state_14412;
state_14412 = G__14443;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14412){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
})();var state__6218__auto__ = (function (){var statearr_14421 = f__6217__auto__.call(null);(statearr_14421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
);
return c__6216__auto__;
};
var G__14439 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14439__delegate.call(this,args__$1);};
G__14439.cljs$lang$maxFixedArity = 0;
G__14439.cljs$lang$applyTo = (function (arglist__14444){
var args__$1 = cljs.core.seq(arglist__14444);
return G__14439__delegate(args__$1);
});
G__14439.cljs$core$IFn$_invoke$arity$variadic = G__14439__delegate;
return G__14439;
})()
;})(G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
);
G__14383_14438.fail(((function (G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function (err){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function (state_14428){var state_val_14429 = (state_14428[(1)]);if((state_val_14429 === (2)))
{var inst_14425 = (state_14428[(2)]);var inst_14426 = cljs.core.async.close_BANG_.call(null,ret);var state_14428__$1 = (function (){var statearr_14430 = state_14428;(statearr_14430[(7)] = inst_14425);
return statearr_14430;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14428__$1,inst_14426);
} else
{if((state_val_14429 === (1)))
{var inst_14422 = [err,null];var inst_14423 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14422,null));var state_14428__$1 = state_14428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14428__$1,(2),ret,inst_14423);
} else
{return null;
}
}
});})(c__6216__auto__,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
;return ((function (switch__6201__auto__,c__6216__auto__,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14434 = [null,null,null,null,null,null,null,null];(statearr_14434[(0)] = state_machine__6202__auto__);
(statearr_14434[(1)] = (1));
return statearr_14434;
});
var state_machine__6202__auto____1 = (function (state_14428){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14428);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14435){if((e14435 instanceof Object))
{var ex__6205__auto__ = e14435;var statearr_14436_14445 = state_14428;(statearr_14436_14445[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14428);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14446 = state_14428;
state_14428 = G__14446;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14428){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
})();var state__6218__auto__ = (function (){var statearr_14437 = f__6217__auto__.call(null);(statearr_14437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
);
return c__6216__auto__;
});})(G__14383_14438,ret,configType,map__14382,map__14382__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_14451){var state_val_14452 = (state_14451[(1)]);if((state_val_14452 === (1)))
{var inst_14449 = {"modelKey":""};var state_14451__$1 = state_14451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14451__$1,inst_14449);
} else
{return null;
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_14456 = [null,null,null,null,null,null,null];(statearr_14456[(0)] = state_machine__6202__auto__);
(statearr_14456[(1)] = (1));
return statearr_14456;
});
var state_machine__6202__auto____1 = (function (state_14451){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_14451);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e14457){if((e14457 instanceof Object))
{var ex__6205__auto__ = e14457;var statearr_14458_14460 = state_14451;(statearr_14458_14460[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14451);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14461 = state_14451;
state_14451 = G__14461;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_14451){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_14451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_14459 = f__6217__auto__.call(null);(statearr_14459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_14459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
