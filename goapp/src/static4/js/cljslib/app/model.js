// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11398_SHARP_){return cljs.core._EQ_.call(null,view,p1__11398_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11399_SHARP_){return cljs.core._EQ_.call(null,view,p1__11399_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11400_SHARP_){return cljs.core._EQ_.call(null,view,p1__11400_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11401_SHARP_){return cljs.core._EQ_.call(null,view,p1__11401_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11402_SHARP_){return cljs.core._EQ_.call(null,view,p1__11402_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11403_SHARP_){return cljs.core._EQ_.call(null,view,p1__11403_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11404_SHARP_){return cljs.core._EQ_.call(null,view,p1__11404_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11405_SHARP_){return cljs.core._EQ_.call(null,view,p1__11405_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11406_SHARP_){return cljs.core._EQ_.call(null,view,p1__11406_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__11410){var vec__11411 = p__11410;var model = cljs.core.nth.call(null,vec__11411,(0),null);var detail = cljs.core.nth.call(null,vec__11411,(1),null);var G__11412 = (new Date(detail.Date));G__11412.getTime();
return G__11412;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__11415){var vec__11416 = p__11415;var model = cljs.core.nth.call(null,vec__11416,(0),null);var detail = cljs.core.nth.call(null,vec__11416,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11458){var map__11459 = p__11458;var map__11459__$1 = ((cljs.core.seq_QMARK_.call(null,map__11459))?cljs.core.apply.call(null,cljs.core.hash_map,map__11459):map__11459);var args = map__11459__$1;var searchKey = cljs.core.get.call(null,map__11459__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__11460_11499 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11460_11499.done(((function (G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey){
return (function() { 
var G__11500__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey){
return (function (p__11461){var vec__11462 = p__11461;var model = cljs.core.nth.call(null,vec__11462,(0),null);var detail = cljs.core.nth.call(null,vec__11462,(1),null);var obj11464 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj11464;
});})(config,details,filtered,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey))
;var dto = (function (){var obj11466 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj11466;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey){
return (function (state_11473){var state_val_11474 = (state_11473[(1)]);if((state_val_11474 === (2)))
{var inst_11470 = (state_11473[(2)]);var inst_11471 = cljs.core.async.close_BANG_.call(null,ret);var state_11473__$1 = (function (){var statearr_11475 = state_11473;(statearr_11475[(7)] = inst_11470);
return statearr_11475;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11473__$1,inst_11471);
} else
{if((state_val_11474 === (1)))
{var inst_11467 = [null,dto];var inst_11468 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11467,null));var state_11473__$1 = state_11473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11473__$1,(2),ret,inst_11468);
} else
{return null;
}
}
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11479 = [null,null,null,null,null,null,null,null];(statearr_11479[(0)] = state_machine__6178__auto__);
(statearr_11479[(1)] = (1));
return statearr_11479;
});
var state_machine__6178__auto____1 = (function (state_11473){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11473);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11480){if((e11480 instanceof Object))
{var ex__6181__auto__ = e11480;var statearr_11481_11501 = state_11473;(statearr_11481_11501[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11473);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11502 = state_11473;
state_11473 = G__11502;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11473){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11482 = f__6193__auto__.call(null);(statearr_11482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey))
);
return c__6192__auto__;
};
var G__11500 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11500__delegate.call(this,args__$1);};
G__11500.cljs$lang$maxFixedArity = 0;
G__11500.cljs$lang$applyTo = (function (arglist__11503){
var args__$1 = cljs.core.seq(arglist__11503);
return G__11500__delegate(args__$1);
});
G__11500.cljs$core$IFn$_invoke$arity$variadic = G__11500__delegate;
return G__11500;
})()
;})(G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey))
);
G__11460_11499.fail(((function (G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey){
return (function (state_11489){var state_val_11490 = (state_11489[(1)]);if((state_val_11490 === (2)))
{var inst_11486 = (state_11489[(2)]);var inst_11487 = cljs.core.async.close_BANG_.call(null,ret);var state_11489__$1 = (function (){var statearr_11491 = state_11489;(statearr_11491[(7)] = inst_11486);
return statearr_11491;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11489__$1,inst_11487);
} else
{if((state_val_11490 === (1)))
{var inst_11483 = [err,null];var inst_11484 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11483,null));var state_11489__$1 = state_11489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11489__$1,(2),ret,inst_11484);
} else
{return null;
}
}
});})(c__6192__auto__,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11495 = [null,null,null,null,null,null,null,null];(statearr_11495[(0)] = state_machine__6178__auto__);
(statearr_11495[(1)] = (1));
return statearr_11495;
});
var state_machine__6178__auto____1 = (function (state_11489){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11489);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11496){if((e11496 instanceof Object))
{var ex__6181__auto__ = e11496;var statearr_11497_11504 = state_11489;(statearr_11497_11504[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11496;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11505 = state_11489;
state_11489 = G__11505;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11489){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11498 = f__6193__auto__.call(null);(statearr_11498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey))
);
return c__6192__auto__;
});})(G__11460_11499,configType,ret,map__11459,map__11459__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11563){var map__11564 = p__11563;var map__11564__$1 = ((cljs.core.seq_QMARK_.call(null,map__11564))?cljs.core.apply.call(null,cljs.core.hash_map,map__11564):map__11564);var args = map__11564__$1;var id = cljs.core.get.call(null,map__11564__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__11565_11620 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11565_11620.done(((function (G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function() { 
var G__11621__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function (p__11566){var vec__11567 = p__11566;var key__$1 = cljs.core.nth.call(null,vec__11567,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11567,(1),null);var obj11569 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj11569;
});})(config,dir,details,detail,filtered,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function iter__11570(s__11571){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function (){var s__11571__$1 = s__11571;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11571__$1);if(temp__4126__auto__)
{var s__11571__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11571__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11571__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11573 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11572 = (0);while(true){
if((i__11572 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__11572);cljs.core.chunk_append.call(null,b__11573,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__11622 = (i__11572 + (1));
i__11572 = G__11622;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11573),iter__11570.call(null,cljs.core.chunk_rest.call(null,s__11571__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11573),null);
}
} else
{var idx = cljs.core.first.call(null,s__11571__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__11570.call(null,cljs.core.rest.call(null,s__11571__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function iter__11574(s__11575){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function (){var s__11575__$1 = s__11575;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11575__$1);if(temp__4126__auto__)
{var s__11575__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11575__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11575__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11577 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11576 = (0);while(true){
if((i__11576 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__11576);cljs.core.chunk_append.call(null,b__11577,(function (){var obj11583 = {"id":url,"url":ServeFn.call(null,url)};return obj11583;
})());
{
var G__11623 = (i__11576 + (1));
i__11576 = G__11623;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11577),iter__11574.call(null,cljs.core.chunk_rest.call(null,s__11575__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11577),null);
}
} else
{var url = cljs.core.first.call(null,s__11575__$2);return cljs.core.cons.call(null,(function (){var obj11585 = {"id":url,"url":ServeFn.call(null,url)};return obj11585;
})(),iter__11574.call(null,cljs.core.rest.call(null,s__11575__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
;var dto = (function (){var obj11587 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj11587;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function (state_11594){var state_val_11595 = (state_11594[(1)]);if((state_val_11595 === (2)))
{var inst_11591 = (state_11594[(2)]);var inst_11592 = cljs.core.async.close_BANG_.call(null,ret);var state_11594__$1 = (function (){var statearr_11596 = state_11594;(statearr_11596[(7)] = inst_11591);
return statearr_11596;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11594__$1,inst_11592);
} else
{if((state_val_11595 === (1)))
{var inst_11588 = [null,dto];var inst_11589 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11588,null));var state_11594__$1 = state_11594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11594__$1,(2),ret,inst_11589);
} else
{return null;
}
}
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11600 = [null,null,null,null,null,null,null,null];(statearr_11600[(0)] = state_machine__6178__auto__);
(statearr_11600[(1)] = (1));
return statearr_11600;
});
var state_machine__6178__auto____1 = (function (state_11594){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11594);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11601){if((e11601 instanceof Object))
{var ex__6181__auto__ = e11601;var statearr_11602_11624 = state_11594;(statearr_11602_11624[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11594);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11625 = state_11594;
state_11594 = G__11625;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11594){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11603 = f__6193__auto__.call(null);(statearr_11603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
);
return c__6192__auto__;
};
var G__11621 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11621__delegate.call(this,args__$1);};
G__11621.cljs$lang$maxFixedArity = 0;
G__11621.cljs$lang$applyTo = (function (arglist__11626){
var args__$1 = cljs.core.seq(arglist__11626);
return G__11621__delegate(args__$1);
});
G__11621.cljs$core$IFn$_invoke$arity$variadic = G__11621__delegate;
return G__11621;
})()
;})(G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
);
G__11565_11620.fail(((function (G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function (state_11610){var state_val_11611 = (state_11610[(1)]);if((state_val_11611 === (2)))
{var inst_11607 = (state_11610[(2)]);var inst_11608 = cljs.core.async.close_BANG_.call(null,ret);var state_11610__$1 = (function (){var statearr_11612 = state_11610;(statearr_11612[(7)] = inst_11607);
return statearr_11612;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11610__$1,inst_11608);
} else
{if((state_val_11611 === (1)))
{var inst_11604 = [err,null];var inst_11605 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11604,null));var state_11610__$1 = state_11610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11610__$1,(2),ret,inst_11605);
} else
{return null;
}
}
});})(c__6192__auto__,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11616 = [null,null,null,null,null,null,null,null];(statearr_11616[(0)] = state_machine__6178__auto__);
(statearr_11616[(1)] = (1));
return statearr_11616;
});
var state_machine__6178__auto____1 = (function (state_11610){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11610);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11617){if((e11617 instanceof Object))
{var ex__6181__auto__ = e11617;var statearr_11618_11627 = state_11610;(statearr_11618_11627[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11610);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11628 = state_11610;
state_11610 = G__11628;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11610){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11619 = f__6193__auto__.call(null);(statearr_11619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
);
return c__6192__auto__;
});})(G__11565_11620,ret,configType,map__11564,map__11564__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__11630_11667 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__11630_11667.done(((function (G__11630_11667,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11630_11667,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11630_11667,ret){
return (function (state_11641){var state_val_11642 = (state_11641[(1)]);if((state_val_11642 === (2)))
{var inst_11638 = (state_11641[(2)]);var inst_11639 = cljs.core.async.close_BANG_.call(null,ret);var state_11641__$1 = (function (){var statearr_11643 = state_11641;(statearr_11643[(7)] = inst_11638);
return statearr_11643;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11641__$1,inst_11639);
} else
{if((state_val_11642 === (1)))
{var inst_11633 = detail.ModelKey;var inst_11634 = {"modelKey":inst_11633};var inst_11635 = [null,inst_11634];var inst_11636 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11635,null));var state_11641__$1 = state_11641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11641__$1,(2),ret,inst_11636);
} else
{return null;
}
}
});})(c__6192__auto__,G__11630_11667,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11630_11667,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11647 = [null,null,null,null,null,null,null,null];(statearr_11647[(0)] = state_machine__6178__auto__);
(statearr_11647[(1)] = (1));
return statearr_11647;
});
var state_machine__6178__auto____1 = (function (state_11641){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11641);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11648){if((e11648 instanceof Object))
{var ex__6181__auto__ = e11648;var statearr_11649_11668 = state_11641;(statearr_11649_11668[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11669 = state_11641;
state_11641 = G__11669;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11641){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11630_11667,ret))
})();var state__6194__auto__ = (function (){var statearr_11650 = f__6193__auto__.call(null);(statearr_11650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11630_11667,ret))
);
return c__6192__auto__;
});})(G__11630_11667,ret))
);
G__11630_11667.fail(((function (G__11630_11667,ret){
return (function (p1__11629_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11630_11667,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11630_11667,ret){
return (function (state_11657){var state_val_11658 = (state_11657[(1)]);if((state_val_11658 === (2)))
{var inst_11654 = (state_11657[(2)]);var inst_11655 = cljs.core.async.close_BANG_.call(null,ret);var state_11657__$1 = (function (){var statearr_11659 = state_11657;(statearr_11659[(7)] = inst_11654);
return statearr_11659;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11657__$1,inst_11655);
} else
{if((state_val_11658 === (1)))
{var inst_11651 = [p1__11629_SHARP_,null];var inst_11652 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11651,null));var state_11657__$1 = state_11657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11657__$1,(2),ret,inst_11652);
} else
{return null;
}
}
});})(c__6192__auto__,G__11630_11667,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11630_11667,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11663 = [null,null,null,null,null,null,null,null];(statearr_11663[(0)] = state_machine__6178__auto__);
(statearr_11663[(1)] = (1));
return statearr_11663;
});
var state_machine__6178__auto____1 = (function (state_11657){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11657);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11664){if((e11664 instanceof Object))
{var ex__6181__auto__ = e11664;var statearr_11665_11670 = state_11657;(statearr_11665_11670[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11657);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11664;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11671 = state_11657;
state_11657 = G__11671;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11657){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11630_11667,ret))
})();var state__6194__auto__ = (function (){var statearr_11666 = f__6193__auto__.call(null);(statearr_11666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11630_11667,ret))
);
return c__6192__auto__;
});})(G__11630_11667,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__11672){var map__11673 = p__11672;var map__11673__$1 = ((cljs.core.seq_QMARK_.call(null,map__11673))?cljs.core.apply.call(null,cljs.core.hash_map,map__11673):map__11673);var args = map__11673__$1;var url = cljs.core.get.call(null,map__11673__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11694 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11694,ret,map__11673,map__11673__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11694,ret,map__11673,map__11673__$1,args,url){
return (function (state_11684){var state_val_11685 = (state_11684[(1)]);if((state_val_11685 === (2)))
{var inst_11681 = (state_11684[(2)]);var inst_11682 = cljs.core.async.close_BANG_.call(null,ret);var state_11684__$1 = (function (){var statearr_11686 = state_11684;(statearr_11686[(7)] = inst_11681);
return statearr_11686;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11684__$1,inst_11682);
} else
{if((state_val_11685 === (1)))
{var inst_11676 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_11677 = {"url":inst_11676};var inst_11678 = [null,inst_11677];var inst_11679 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11678,null));var state_11684__$1 = state_11684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11684__$1,(2),ret,inst_11679);
} else
{return null;
}
}
});})(c__6192__auto___11694,ret,map__11673,map__11673__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___11694,ret,map__11673,map__11673__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11690 = [null,null,null,null,null,null,null,null];(statearr_11690[(0)] = state_machine__6178__auto__);
(statearr_11690[(1)] = (1));
return statearr_11690;
});
var state_machine__6178__auto____1 = (function (state_11684){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11684);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11691){if((e11691 instanceof Object))
{var ex__6181__auto__ = e11691;var statearr_11692_11695 = state_11684;(statearr_11692_11695[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11691;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11696 = state_11684;
state_11684 = G__11696;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11684){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11694,ret,map__11673,map__11673__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_11693 = f__6193__auto__.call(null);(statearr_11693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11694);
return statearr_11693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11694,ret,map__11673,map__11673__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__11697){var map__11698 = p__11697;var map__11698__$1 = ((cljs.core.seq_QMARK_.call(null,map__11698))?cljs.core.apply.call(null,cljs.core.hash_map,map__11698):map__11698);var args = map__11698__$1;var id = cljs.core.get.call(null,map__11698__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11715 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11715,ret,map__11698,map__11698__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11715,ret,map__11698,map__11698__$1,args,id){
return (function (state_11705){var state_val_11706 = (state_11705[(1)]);if((state_val_11706 === (2)))
{var inst_11702 = (state_11705[(2)]);var inst_11703 = cljs.core.async.close_BANG_.call(null,ret);var state_11705__$1 = (function (){var statearr_11707 = state_11705;(statearr_11707[(7)] = inst_11702);
return statearr_11707;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11705__$1,inst_11703);
} else
{if((state_val_11706 === (1)))
{var inst_11699 = [null,null];var inst_11700 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11699,null));var state_11705__$1 = state_11705;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11705__$1,(2),ret,inst_11700);
} else
{return null;
}
}
});})(c__6192__auto___11715,ret,map__11698,map__11698__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___11715,ret,map__11698,map__11698__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11711 = [null,null,null,null,null,null,null,null];(statearr_11711[(0)] = state_machine__6178__auto__);
(statearr_11711[(1)] = (1));
return statearr_11711;
});
var state_machine__6178__auto____1 = (function (state_11705){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11705);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11712){if((e11712 instanceof Object))
{var ex__6181__auto__ = e11712;var statearr_11713_11716 = state_11705;(statearr_11713_11716[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11705);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11717 = state_11705;
state_11705 = G__11717;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11705){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11715,ret,map__11698,map__11698__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11714 = f__6193__auto__.call(null);(statearr_11714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11715);
return statearr_11714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11715,ret,map__11698,map__11698__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__11718 = cljs.core.rest.call(null,list);
var G__11719 = id;
var G__11720 = (start + (1));
list = G__11718;
id = G__11719;
start = G__11720;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__11722){var map__11723 = p__11722;var map__11723__$1 = ((cljs.core.seq_QMARK_.call(null,map__11723))?cljs.core.apply.call(null,cljs.core.hash_map,map__11723):map__11723);var args = map__11723__$1;var id = cljs.core.get.call(null,map__11723__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__11724_11756 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__11724_11756.done(((function (G__11724_11756,ret,map__11723,map__11723__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__11724_11756,ret,map__11723,map__11723__$1,args,id){
return (function (p1__11721_SHARP_){var obj11726 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__11721_SHARP_ + (1)))+".jpg"))};return obj11726;
});})(filtered,evtId,evt,G__11724_11756,ret,map__11723,map__11723__$1,args,id))
,cljs.core.range.call(null,(evt["Count"]))));var idx = (function (){var find = (app.model.indexOf.call(null,filtered,evtId,(0)) - (1));if((find < (0)))
{return (cljs.core.count.call(null,filtered) - (1));
} else
{if((find >= cljs.core.count.call(null,filtered)))
{return (0);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return find;
} else
{return null;
}
}
}
})();var idx2 = (function (){var find = (app.model.indexOf.call(null,filtered,evtId,(0)) + (1));if((find < (0)))
{return (cljs.core.count.call(null,filtered) - (1));
} else
{if((find >= cljs.core.count.call(null,filtered)))
{return (0);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return find;
} else
{return null;
}
}
}
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11724_11756,ret,map__11723,map__11723__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11724_11756,ret,map__11723,map__11723__$1,args,id){
return (function (state_11746){var state_val_11747 = (state_11746[(1)]);if((state_val_11747 === (2)))
{var inst_11743 = (state_11746[(2)]);var inst_11744 = cljs.core.async.close_BANG_.call(null,ret);var state_11746__$1 = (function (){var statearr_11748 = state_11746;(statearr_11748[(7)] = inst_11743);
return statearr_11748;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11746__$1,inst_11744);
} else
{if((state_val_11747 === (1)))
{var inst_11729 = cljs.core.nth.call(null,filtered,idx);var inst_11730 = cljs.core.first.call(null,inst_11729);var inst_11731 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11730));var inst_11732 = cljs.core.nth.call(null,filtered,idx2);var inst_11733 = cljs.core.first.call(null,inst_11732);var inst_11734 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11733));var inst_11735 = (evt["Title"]);var inst_11736 = (evt["Date"]);var inst_11737 = (evt["Content"]);var inst_11738 = (evt["Form"]);var inst_11739 = {"prev_href":inst_11731,"next_href":inst_11734,"title":inst_11735,"date":inst_11736,"sideList":photos,"content":inst_11737,"form":inst_11738};var inst_11740 = [null,inst_11739];var inst_11741 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11740,null));var state_11746__$1 = state_11746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11746__$1,(2),ret,inst_11741);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11724_11756,ret,map__11723,map__11723__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11724_11756,ret,map__11723,map__11723__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11752 = [null,null,null,null,null,null,null,null];(statearr_11752[(0)] = state_machine__6178__auto__);
(statearr_11752[(1)] = (1));
return statearr_11752;
});
var state_machine__6178__auto____1 = (function (state_11746){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11746);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11753){if((e11753 instanceof Object))
{var ex__6181__auto__ = e11753;var statearr_11754_11757 = state_11746;(statearr_11754_11757[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11746);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11758 = state_11746;
state_11746 = G__11758;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11746){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11724_11756,ret,map__11723,map__11723__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11755 = f__6193__auto__.call(null);(statearr_11755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11724_11756,ret,map__11723,map__11723__$1,args,id))
);
return c__6192__auto__;
});})(G__11724_11756,ret,map__11723,map__11723__$1,args,id))
);
G__11724_11756.fail(((function (G__11724_11756,ret,map__11723,map__11723__$1,args,id){
return (function (err){return console.log(err);
});})(G__11724_11756,ret,map__11723,map__11723__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
