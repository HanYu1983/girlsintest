// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18231_SHARP_){return cljs.core._EQ_.call(null,view,p1__18231_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18232_SHARP_){return cljs.core._EQ_.call(null,view,p1__18232_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18233_SHARP_){return cljs.core._EQ_.call(null,view,p1__18233_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18234_SHARP_){return cljs.core._EQ_.call(null,view,p1__18234_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18235_SHARP_){return cljs.core._EQ_.call(null,view,p1__18235_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18236_SHARP_){return cljs.core._EQ_.call(null,view,p1__18236_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18237_SHARP_){return cljs.core._EQ_.call(null,view,p1__18237_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18238_SHARP_){return cljs.core._EQ_.call(null,view,p1__18238_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18239_SHARP_){return cljs.core._EQ_.call(null,view,p1__18239_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__18243){var vec__18244 = p__18243;var model = cljs.core.nth.call(null,vec__18244,(0),null);var detail = cljs.core.nth.call(null,vec__18244,(1),null);var G__18245 = (new Date(detail.Date));G__18245.getTime();
return G__18245;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__18248){var vec__18249 = p__18248;var model = cljs.core.nth.call(null,vec__18249,(0),null);var detail = cljs.core.nth.call(null,vec__18249,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__18291){var map__18292 = p__18291;var map__18292__$1 = ((cljs.core.seq_QMARK_.call(null,map__18292))?cljs.core.apply.call(null,cljs.core.hash_map,map__18292):map__18292);var args = map__18292__$1;var searchKey = cljs.core.get.call(null,map__18292__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__18293_18332 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__18293_18332.done(((function (G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey){
return (function() { 
var G__18333__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey){
return (function (p__18294){var vec__18295 = p__18294;var model = cljs.core.nth.call(null,vec__18295,(0),null);var detail = cljs.core.nth.call(null,vec__18295,(1),null);var obj18297 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj18297;
});})(config,details,filtered,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey))
;var dto = (function (){var obj18299 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj18299;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey){
return (function (state_18306){var state_val_18307 = (state_18306[(1)]);if((state_val_18307 === (2)))
{var inst_18303 = (state_18306[(2)]);var inst_18304 = cljs.core.async.close_BANG_.call(null,ret);var state_18306__$1 = (function (){var statearr_18308 = state_18306;(statearr_18308[(7)] = inst_18303);
return statearr_18308;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18306__$1,inst_18304);
} else
{if((state_val_18307 === (1)))
{var inst_18300 = [null,dto];var inst_18301 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18300,null));var state_18306__$1 = state_18306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18306__$1,(2),ret,inst_18301);
} else
{return null;
}
}
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_18312 = [null,null,null,null,null,null,null,null];(statearr_18312[(0)] = state_machine__6178__auto__);
(statearr_18312[(1)] = (1));
return statearr_18312;
});
var state_machine__6178__auto____1 = (function (state_18306){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_18306);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e18313){if((e18313 instanceof Object))
{var ex__6181__auto__ = e18313;var statearr_18314_18334 = state_18306;(statearr_18314_18334[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18313;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18335 = state_18306;
state_18306 = G__18335;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_18306){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_18306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_18315 = f__6193__auto__.call(null);(statearr_18315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_18315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey))
);
return c__6192__auto__;
};
var G__18333 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18333__delegate.call(this,args__$1);};
G__18333.cljs$lang$maxFixedArity = 0;
G__18333.cljs$lang$applyTo = (function (arglist__18336){
var args__$1 = cljs.core.seq(arglist__18336);
return G__18333__delegate(args__$1);
});
G__18333.cljs$core$IFn$_invoke$arity$variadic = G__18333__delegate;
return G__18333;
})()
;})(G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey))
);
G__18293_18332.fail(((function (G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey){
return (function (state_18322){var state_val_18323 = (state_18322[(1)]);if((state_val_18323 === (2)))
{var inst_18319 = (state_18322[(2)]);var inst_18320 = cljs.core.async.close_BANG_.call(null,ret);var state_18322__$1 = (function (){var statearr_18324 = state_18322;(statearr_18324[(7)] = inst_18319);
return statearr_18324;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18322__$1,inst_18320);
} else
{if((state_val_18323 === (1)))
{var inst_18316 = [err,null];var inst_18317 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18316,null));var state_18322__$1 = state_18322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18322__$1,(2),ret,inst_18317);
} else
{return null;
}
}
});})(c__6192__auto__,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_18328 = [null,null,null,null,null,null,null,null];(statearr_18328[(0)] = state_machine__6178__auto__);
(statearr_18328[(1)] = (1));
return statearr_18328;
});
var state_machine__6178__auto____1 = (function (state_18322){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_18322);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e18329){if((e18329 instanceof Object))
{var ex__6181__auto__ = e18329;var statearr_18330_18337 = state_18322;(statearr_18330_18337[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18322);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18338 = state_18322;
state_18322 = G__18338;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_18322){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_18322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_18331 = f__6193__auto__.call(null);(statearr_18331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_18331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey))
);
return c__6192__auto__;
});})(G__18293_18332,configType,ret,map__18292,map__18292__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__18396){var map__18397 = p__18396;var map__18397__$1 = ((cljs.core.seq_QMARK_.call(null,map__18397))?cljs.core.apply.call(null,cljs.core.hash_map,map__18397):map__18397);var args = map__18397__$1;var id = cljs.core.get.call(null,map__18397__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__18398_18453 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__18398_18453.done(((function (G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function() { 
var G__18454__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function (p__18399){var vec__18400 = p__18399;var key__$1 = cljs.core.nth.call(null,vec__18400,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__18400,(1),null);var obj18402 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj18402;
});})(config,dir,details,detail,filtered,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function iter__18403(s__18404){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function (){var s__18404__$1 = s__18404;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18404__$1);if(temp__4126__auto__)
{var s__18404__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18404__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__18404__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__18406 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__18405 = (0);while(true){
if((i__18405 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__18405);cljs.core.chunk_append.call(null,b__18406,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__18455 = (i__18405 + (1));
i__18405 = G__18455;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18406),iter__18403.call(null,cljs.core.chunk_rest.call(null,s__18404__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18406),null);
}
} else
{var idx = cljs.core.first.call(null,s__18404__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__18403.call(null,cljs.core.rest.call(null,s__18404__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function iter__18407(s__18408){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function (){var s__18408__$1 = s__18408;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18408__$1);if(temp__4126__auto__)
{var s__18408__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18408__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__18408__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__18410 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__18409 = (0);while(true){
if((i__18409 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__18409);cljs.core.chunk_append.call(null,b__18410,(function (){var obj18416 = {"id":url,"url":ServeFn.call(null,url)};return obj18416;
})());
{
var G__18456 = (i__18409 + (1));
i__18409 = G__18456;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18410),iter__18407.call(null,cljs.core.chunk_rest.call(null,s__18408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18410),null);
}
} else
{var url = cljs.core.first.call(null,s__18408__$2);return cljs.core.cons.call(null,(function (){var obj18418 = {"id":url,"url":ServeFn.call(null,url)};return obj18418;
})(),iter__18407.call(null,cljs.core.rest.call(null,s__18408__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
;var dto = (function (){var obj18420 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj18420;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function (state_18427){var state_val_18428 = (state_18427[(1)]);if((state_val_18428 === (2)))
{var inst_18424 = (state_18427[(2)]);var inst_18425 = cljs.core.async.close_BANG_.call(null,ret);var state_18427__$1 = (function (){var statearr_18429 = state_18427;(statearr_18429[(7)] = inst_18424);
return statearr_18429;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18427__$1,inst_18425);
} else
{if((state_val_18428 === (1)))
{var inst_18421 = [null,dto];var inst_18422 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18421,null));var state_18427__$1 = state_18427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18427__$1,(2),ret,inst_18422);
} else
{return null;
}
}
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_18433 = [null,null,null,null,null,null,null,null];(statearr_18433[(0)] = state_machine__6178__auto__);
(statearr_18433[(1)] = (1));
return statearr_18433;
});
var state_machine__6178__auto____1 = (function (state_18427){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_18427);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e18434){if((e18434 instanceof Object))
{var ex__6181__auto__ = e18434;var statearr_18435_18457 = state_18427;(statearr_18435_18457[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18427);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18458 = state_18427;
state_18427 = G__18458;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_18427){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_18427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_18436 = f__6193__auto__.call(null);(statearr_18436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_18436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
);
return c__6192__auto__;
};
var G__18454 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18454__delegate.call(this,args__$1);};
G__18454.cljs$lang$maxFixedArity = 0;
G__18454.cljs$lang$applyTo = (function (arglist__18459){
var args__$1 = cljs.core.seq(arglist__18459);
return G__18454__delegate(args__$1);
});
G__18454.cljs$core$IFn$_invoke$arity$variadic = G__18454__delegate;
return G__18454;
})()
;})(G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
);
G__18398_18453.fail(((function (G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function (state_18443){var state_val_18444 = (state_18443[(1)]);if((state_val_18444 === (2)))
{var inst_18440 = (state_18443[(2)]);var inst_18441 = cljs.core.async.close_BANG_.call(null,ret);var state_18443__$1 = (function (){var statearr_18445 = state_18443;(statearr_18445[(7)] = inst_18440);
return statearr_18445;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18443__$1,inst_18441);
} else
{if((state_val_18444 === (1)))
{var inst_18437 = [err,null];var inst_18438 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18437,null));var state_18443__$1 = state_18443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18443__$1,(2),ret,inst_18438);
} else
{return null;
}
}
});})(c__6192__auto__,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_18449 = [null,null,null,null,null,null,null,null];(statearr_18449[(0)] = state_machine__6178__auto__);
(statearr_18449[(1)] = (1));
return statearr_18449;
});
var state_machine__6178__auto____1 = (function (state_18443){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_18443);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e18450){if((e18450 instanceof Object))
{var ex__6181__auto__ = e18450;var statearr_18451_18460 = state_18443;(statearr_18451_18460[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18443);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18461 = state_18443;
state_18443 = G__18461;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_18443){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_18443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_18452 = f__6193__auto__.call(null);(statearr_18452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_18452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
);
return c__6192__auto__;
});})(G__18398_18453,ret,configType,map__18397,map__18397__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__18463_18500 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__18463_18500.done(((function (G__18463_18500,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__18463_18500,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__18463_18500,ret){
return (function (state_18474){var state_val_18475 = (state_18474[(1)]);if((state_val_18475 === (2)))
{var inst_18471 = (state_18474[(2)]);var inst_18472 = cljs.core.async.close_BANG_.call(null,ret);var state_18474__$1 = (function (){var statearr_18476 = state_18474;(statearr_18476[(7)] = inst_18471);
return statearr_18476;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18474__$1,inst_18472);
} else
{if((state_val_18475 === (1)))
{var inst_18466 = detail.ModelKey;var inst_18467 = {"modelKey":inst_18466};var inst_18468 = [null,inst_18467];var inst_18469 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18468,null));var state_18474__$1 = state_18474;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18474__$1,(2),ret,inst_18469);
} else
{return null;
}
}
});})(c__6192__auto__,G__18463_18500,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__18463_18500,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_18480 = [null,null,null,null,null,null,null,null];(statearr_18480[(0)] = state_machine__6178__auto__);
(statearr_18480[(1)] = (1));
return statearr_18480;
});
var state_machine__6178__auto____1 = (function (state_18474){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_18474);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e18481){if((e18481 instanceof Object))
{var ex__6181__auto__ = e18481;var statearr_18482_18501 = state_18474;(statearr_18482_18501[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18474);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18502 = state_18474;
state_18474 = G__18502;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_18474){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_18474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__18463_18500,ret))
})();var state__6194__auto__ = (function (){var statearr_18483 = f__6193__auto__.call(null);(statearr_18483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_18483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__18463_18500,ret))
);
return c__6192__auto__;
});})(G__18463_18500,ret))
);
G__18463_18500.fail(((function (G__18463_18500,ret){
return (function (p1__18462_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__18463_18500,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__18463_18500,ret){
return (function (state_18490){var state_val_18491 = (state_18490[(1)]);if((state_val_18491 === (2)))
{var inst_18487 = (state_18490[(2)]);var inst_18488 = cljs.core.async.close_BANG_.call(null,ret);var state_18490__$1 = (function (){var statearr_18492 = state_18490;(statearr_18492[(7)] = inst_18487);
return statearr_18492;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18490__$1,inst_18488);
} else
{if((state_val_18491 === (1)))
{var inst_18484 = [p1__18462_SHARP_,null];var inst_18485 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18484,null));var state_18490__$1 = state_18490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18490__$1,(2),ret,inst_18485);
} else
{return null;
}
}
});})(c__6192__auto__,G__18463_18500,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__18463_18500,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_18496 = [null,null,null,null,null,null,null,null];(statearr_18496[(0)] = state_machine__6178__auto__);
(statearr_18496[(1)] = (1));
return statearr_18496;
});
var state_machine__6178__auto____1 = (function (state_18490){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_18490);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e18497){if((e18497 instanceof Object))
{var ex__6181__auto__ = e18497;var statearr_18498_18503 = state_18490;(statearr_18498_18503[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18504 = state_18490;
state_18490 = G__18504;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_18490){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_18490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__18463_18500,ret))
})();var state__6194__auto__ = (function (){var statearr_18499 = f__6193__auto__.call(null);(statearr_18499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_18499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__18463_18500,ret))
);
return c__6192__auto__;
});})(G__18463_18500,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__18505){var map__18506 = p__18505;var map__18506__$1 = ((cljs.core.seq_QMARK_.call(null,map__18506))?cljs.core.apply.call(null,cljs.core.hash_map,map__18506):map__18506);var args = map__18506__$1;var url = cljs.core.get.call(null,map__18506__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___18527 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___18527,ret,map__18506,map__18506__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___18527,ret,map__18506,map__18506__$1,args,url){
return (function (state_18517){var state_val_18518 = (state_18517[(1)]);if((state_val_18518 === (2)))
{var inst_18514 = (state_18517[(2)]);var inst_18515 = cljs.core.async.close_BANG_.call(null,ret);var state_18517__$1 = (function (){var statearr_18519 = state_18517;(statearr_18519[(7)] = inst_18514);
return statearr_18519;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18517__$1,inst_18515);
} else
{if((state_val_18518 === (1)))
{var inst_18509 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_18510 = {"url":inst_18509};var inst_18511 = [null,inst_18510];var inst_18512 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18511,null));var state_18517__$1 = state_18517;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18517__$1,(2),ret,inst_18512);
} else
{return null;
}
}
});})(c__6192__auto___18527,ret,map__18506,map__18506__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___18527,ret,map__18506,map__18506__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_18523 = [null,null,null,null,null,null,null,null];(statearr_18523[(0)] = state_machine__6178__auto__);
(statearr_18523[(1)] = (1));
return statearr_18523;
});
var state_machine__6178__auto____1 = (function (state_18517){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_18517);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e18524){if((e18524 instanceof Object))
{var ex__6181__auto__ = e18524;var statearr_18525_18528 = state_18517;(statearr_18525_18528[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18524;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18529 = state_18517;
state_18517 = G__18529;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_18517){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_18517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___18527,ret,map__18506,map__18506__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_18526 = f__6193__auto__.call(null);(statearr_18526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___18527);
return statearr_18526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___18527,ret,map__18506,map__18506__$1,args,url))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
