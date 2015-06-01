// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23292_SHARP_){return cljs.core._EQ_.call(null,view,p1__23292_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23293_SHARP_){return cljs.core._EQ_.call(null,view,p1__23293_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23294_SHARP_){return cljs.core._EQ_.call(null,view,p1__23294_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23295_SHARP_){return cljs.core._EQ_.call(null,view,p1__23295_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23296_SHARP_){return cljs.core._EQ_.call(null,view,p1__23296_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23297_SHARP_){return cljs.core._EQ_.call(null,view,p1__23297_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23298_SHARP_){return cljs.core._EQ_.call(null,view,p1__23298_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23299_SHARP_){return cljs.core._EQ_.call(null,view,p1__23299_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23300_SHARP_){return cljs.core._EQ_.call(null,view,p1__23300_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__23304){var vec__23305 = p__23304;var model = cljs.core.nth.call(null,vec__23305,(0),null);var detail = cljs.core.nth.call(null,vec__23305,(1),null);var G__23306 = (new Date(detail.Date));G__23306.getTime();
return G__23306;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__23309){var vec__23310 = p__23309;var model = cljs.core.nth.call(null,vec__23310,(0),null);var detail = cljs.core.nth.call(null,vec__23310,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__23352){var map__23353 = p__23352;var map__23353__$1 = ((cljs.core.seq_QMARK_.call(null,map__23353))?cljs.core.apply.call(null,cljs.core.hash_map,map__23353):map__23353);var args = map__23353__$1;var searchKey = cljs.core.get.call(null,map__23353__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__23354_23393 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__23354_23393.done(((function (G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey){
return (function() { 
var G__23394__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey){
return (function (p__23355){var vec__23356 = p__23355;var model = cljs.core.nth.call(null,vec__23356,(0),null);var detail = cljs.core.nth.call(null,vec__23356,(1),null);var obj23358 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj23358;
});})(config,details,filtered,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey))
;var dto = (function (){var obj23360 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj23360;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey){
return (function (state_23367){var state_val_23368 = (state_23367[(1)]);if((state_val_23368 === (2)))
{var inst_23364 = (state_23367[(2)]);var inst_23365 = cljs.core.async.close_BANG_.call(null,ret);var state_23367__$1 = (function (){var statearr_23369 = state_23367;(statearr_23369[(7)] = inst_23364);
return statearr_23369;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23367__$1,inst_23365);
} else
{if((state_val_23368 === (1)))
{var inst_23361 = [null,dto];var inst_23362 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23361,null));var state_23367__$1 = state_23367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23367__$1,(2),ret,inst_23362);
} else
{return null;
}
}
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23373 = [null,null,null,null,null,null,null,null];(statearr_23373[(0)] = state_machine__6178__auto__);
(statearr_23373[(1)] = (1));
return statearr_23373;
});
var state_machine__6178__auto____1 = (function (state_23367){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23367);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23374){if((e23374 instanceof Object))
{var ex__6181__auto__ = e23374;var statearr_23375_23395 = state_23367;(statearr_23375_23395[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23367);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23396 = state_23367;
state_23367 = G__23396;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23367){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_23376 = f__6193__auto__.call(null);(statearr_23376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey))
);
return c__6192__auto__;
};
var G__23394 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23394__delegate.call(this,args__$1);};
G__23394.cljs$lang$maxFixedArity = 0;
G__23394.cljs$lang$applyTo = (function (arglist__23397){
var args__$1 = cljs.core.seq(arglist__23397);
return G__23394__delegate(args__$1);
});
G__23394.cljs$core$IFn$_invoke$arity$variadic = G__23394__delegate;
return G__23394;
})()
;})(G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey))
);
G__23354_23393.fail(((function (G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey){
return (function (state_23383){var state_val_23384 = (state_23383[(1)]);if((state_val_23384 === (2)))
{var inst_23380 = (state_23383[(2)]);var inst_23381 = cljs.core.async.close_BANG_.call(null,ret);var state_23383__$1 = (function (){var statearr_23385 = state_23383;(statearr_23385[(7)] = inst_23380);
return statearr_23385;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23383__$1,inst_23381);
} else
{if((state_val_23384 === (1)))
{var inst_23377 = [err,null];var inst_23378 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23377,null));var state_23383__$1 = state_23383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23383__$1,(2),ret,inst_23378);
} else
{return null;
}
}
});})(c__6192__auto__,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23389 = [null,null,null,null,null,null,null,null];(statearr_23389[(0)] = state_machine__6178__auto__);
(statearr_23389[(1)] = (1));
return statearr_23389;
});
var state_machine__6178__auto____1 = (function (state_23383){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23383);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23390){if((e23390 instanceof Object))
{var ex__6181__auto__ = e23390;var statearr_23391_23398 = state_23383;(statearr_23391_23398[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23383);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23399 = state_23383;
state_23383 = G__23399;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23383){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_23392 = f__6193__auto__.call(null);(statearr_23392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey))
);
return c__6192__auto__;
});})(G__23354_23393,configType,ret,map__23353,map__23353__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__23457){var map__23458 = p__23457;var map__23458__$1 = ((cljs.core.seq_QMARK_.call(null,map__23458))?cljs.core.apply.call(null,cljs.core.hash_map,map__23458):map__23458);var args = map__23458__$1;var id = cljs.core.get.call(null,map__23458__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__23459_23514 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__23459_23514.done(((function (G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function() { 
var G__23515__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function (p__23460){var vec__23461 = p__23460;var key__$1 = cljs.core.nth.call(null,vec__23461,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__23461,(1),null);var obj23463 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj23463;
});})(config,dir,details,detail,filtered,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function iter__23464(s__23465){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function (){var s__23465__$1 = s__23465;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23465__$1);if(temp__4126__auto__)
{var s__23465__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23465__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__23465__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__23467 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__23466 = (0);while(true){
if((i__23466 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__23466);cljs.core.chunk_append.call(null,b__23467,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__23516 = (i__23466 + (1));
i__23466 = G__23516;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23467),iter__23464.call(null,cljs.core.chunk_rest.call(null,s__23465__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23467),null);
}
} else
{var idx = cljs.core.first.call(null,s__23465__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__23464.call(null,cljs.core.rest.call(null,s__23465__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function iter__23468(s__23469){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function (){var s__23469__$1 = s__23469;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23469__$1);if(temp__4126__auto__)
{var s__23469__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23469__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__23469__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__23471 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__23470 = (0);while(true){
if((i__23470 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__23470);cljs.core.chunk_append.call(null,b__23471,(function (){var obj23477 = {"id":url,"url":ServeFn.call(null,url)};return obj23477;
})());
{
var G__23517 = (i__23470 + (1));
i__23470 = G__23517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23471),iter__23468.call(null,cljs.core.chunk_rest.call(null,s__23469__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23471),null);
}
} else
{var url = cljs.core.first.call(null,s__23469__$2);return cljs.core.cons.call(null,(function (){var obj23479 = {"id":url,"url":ServeFn.call(null,url)};return obj23479;
})(),iter__23468.call(null,cljs.core.rest.call(null,s__23469__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
;var dto = (function (){var obj23481 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj23481;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function (state_23488){var state_val_23489 = (state_23488[(1)]);if((state_val_23489 === (2)))
{var inst_23485 = (state_23488[(2)]);var inst_23486 = cljs.core.async.close_BANG_.call(null,ret);var state_23488__$1 = (function (){var statearr_23490 = state_23488;(statearr_23490[(7)] = inst_23485);
return statearr_23490;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23488__$1,inst_23486);
} else
{if((state_val_23489 === (1)))
{var inst_23482 = [null,dto];var inst_23483 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23482,null));var state_23488__$1 = state_23488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23488__$1,(2),ret,inst_23483);
} else
{return null;
}
}
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23494 = [null,null,null,null,null,null,null,null];(statearr_23494[(0)] = state_machine__6178__auto__);
(statearr_23494[(1)] = (1));
return statearr_23494;
});
var state_machine__6178__auto____1 = (function (state_23488){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23488);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23495){if((e23495 instanceof Object))
{var ex__6181__auto__ = e23495;var statearr_23496_23518 = state_23488;(statearr_23496_23518[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23488);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23519 = state_23488;
state_23488 = G__23519;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23488){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23497 = f__6193__auto__.call(null);(statearr_23497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
);
return c__6192__auto__;
};
var G__23515 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23515__delegate.call(this,args__$1);};
G__23515.cljs$lang$maxFixedArity = 0;
G__23515.cljs$lang$applyTo = (function (arglist__23520){
var args__$1 = cljs.core.seq(arglist__23520);
return G__23515__delegate(args__$1);
});
G__23515.cljs$core$IFn$_invoke$arity$variadic = G__23515__delegate;
return G__23515;
})()
;})(G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
);
G__23459_23514.fail(((function (G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function (state_23504){var state_val_23505 = (state_23504[(1)]);if((state_val_23505 === (2)))
{var inst_23501 = (state_23504[(2)]);var inst_23502 = cljs.core.async.close_BANG_.call(null,ret);var state_23504__$1 = (function (){var statearr_23506 = state_23504;(statearr_23506[(7)] = inst_23501);
return statearr_23506;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23504__$1,inst_23502);
} else
{if((state_val_23505 === (1)))
{var inst_23498 = [err,null];var inst_23499 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23498,null));var state_23504__$1 = state_23504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23504__$1,(2),ret,inst_23499);
} else
{return null;
}
}
});})(c__6192__auto__,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23510 = [null,null,null,null,null,null,null,null];(statearr_23510[(0)] = state_machine__6178__auto__);
(statearr_23510[(1)] = (1));
return statearr_23510;
});
var state_machine__6178__auto____1 = (function (state_23504){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23504);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23511){if((e23511 instanceof Object))
{var ex__6181__auto__ = e23511;var statearr_23512_23521 = state_23504;(statearr_23512_23521[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23504);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23522 = state_23504;
state_23504 = G__23522;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23504){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23513 = f__6193__auto__.call(null);(statearr_23513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
);
return c__6192__auto__;
});})(G__23459_23514,ret,configType,map__23458,map__23458__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__23524_23561 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__23524_23561.done(((function (G__23524_23561,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23524_23561,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23524_23561,ret){
return (function (state_23535){var state_val_23536 = (state_23535[(1)]);if((state_val_23536 === (2)))
{var inst_23532 = (state_23535[(2)]);var inst_23533 = cljs.core.async.close_BANG_.call(null,ret);var state_23535__$1 = (function (){var statearr_23537 = state_23535;(statearr_23537[(7)] = inst_23532);
return statearr_23537;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23535__$1,inst_23533);
} else
{if((state_val_23536 === (1)))
{var inst_23527 = detail.ModelKey;var inst_23528 = {"modelKey":inst_23527};var inst_23529 = [null,inst_23528];var inst_23530 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23529,null));var state_23535__$1 = state_23535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23535__$1,(2),ret,inst_23530);
} else
{return null;
}
}
});})(c__6192__auto__,G__23524_23561,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23524_23561,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23541 = [null,null,null,null,null,null,null,null];(statearr_23541[(0)] = state_machine__6178__auto__);
(statearr_23541[(1)] = (1));
return statearr_23541;
});
var state_machine__6178__auto____1 = (function (state_23535){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23535);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23542){if((e23542 instanceof Object))
{var ex__6181__auto__ = e23542;var statearr_23543_23562 = state_23535;(statearr_23543_23562[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23563 = state_23535;
state_23535 = G__23563;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23535){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23524_23561,ret))
})();var state__6194__auto__ = (function (){var statearr_23544 = f__6193__auto__.call(null);(statearr_23544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23524_23561,ret))
);
return c__6192__auto__;
});})(G__23524_23561,ret))
);
G__23524_23561.fail(((function (G__23524_23561,ret){
return (function (p1__23523_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23524_23561,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23524_23561,ret){
return (function (state_23551){var state_val_23552 = (state_23551[(1)]);if((state_val_23552 === (2)))
{var inst_23548 = (state_23551[(2)]);var inst_23549 = cljs.core.async.close_BANG_.call(null,ret);var state_23551__$1 = (function (){var statearr_23553 = state_23551;(statearr_23553[(7)] = inst_23548);
return statearr_23553;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23551__$1,inst_23549);
} else
{if((state_val_23552 === (1)))
{var inst_23545 = [p1__23523_SHARP_,null];var inst_23546 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23545,null));var state_23551__$1 = state_23551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23551__$1,(2),ret,inst_23546);
} else
{return null;
}
}
});})(c__6192__auto__,G__23524_23561,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23524_23561,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23557 = [null,null,null,null,null,null,null,null];(statearr_23557[(0)] = state_machine__6178__auto__);
(statearr_23557[(1)] = (1));
return statearr_23557;
});
var state_machine__6178__auto____1 = (function (state_23551){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23551);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23558){if((e23558 instanceof Object))
{var ex__6181__auto__ = e23558;var statearr_23559_23564 = state_23551;(statearr_23559_23564[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23565 = state_23551;
state_23551 = G__23565;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23551){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23524_23561,ret))
})();var state__6194__auto__ = (function (){var statearr_23560 = f__6193__auto__.call(null);(statearr_23560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23524_23561,ret))
);
return c__6192__auto__;
});})(G__23524_23561,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__23566){var map__23567 = p__23566;var map__23567__$1 = ((cljs.core.seq_QMARK_.call(null,map__23567))?cljs.core.apply.call(null,cljs.core.hash_map,map__23567):map__23567);var args = map__23567__$1;var url = cljs.core.get.call(null,map__23567__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___23588 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___23588,ret,map__23567,map__23567__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___23588,ret,map__23567,map__23567__$1,args,url){
return (function (state_23578){var state_val_23579 = (state_23578[(1)]);if((state_val_23579 === (2)))
{var inst_23575 = (state_23578[(2)]);var inst_23576 = cljs.core.async.close_BANG_.call(null,ret);var state_23578__$1 = (function (){var statearr_23580 = state_23578;(statearr_23580[(7)] = inst_23575);
return statearr_23580;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23578__$1,inst_23576);
} else
{if((state_val_23579 === (1)))
{var inst_23570 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_23571 = {"url":inst_23570};var inst_23572 = [null,inst_23571];var inst_23573 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23572,null));var state_23578__$1 = state_23578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23578__$1,(2),ret,inst_23573);
} else
{return null;
}
}
});})(c__6192__auto___23588,ret,map__23567,map__23567__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___23588,ret,map__23567,map__23567__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23584 = [null,null,null,null,null,null,null,null];(statearr_23584[(0)] = state_machine__6178__auto__);
(statearr_23584[(1)] = (1));
return statearr_23584;
});
var state_machine__6178__auto____1 = (function (state_23578){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23578);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23585){if((e23585 instanceof Object))
{var ex__6181__auto__ = e23585;var statearr_23586_23589 = state_23578;(statearr_23586_23589[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23578);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23585;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23590 = state_23578;
state_23578 = G__23590;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23578){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___23588,ret,map__23567,map__23567__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_23587 = f__6193__auto__.call(null);(statearr_23587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___23588);
return statearr_23587;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___23588,ret,map__23567,map__23567__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__23591){var map__23592 = p__23591;var map__23592__$1 = ((cljs.core.seq_QMARK_.call(null,map__23592))?cljs.core.apply.call(null,cljs.core.hash_map,map__23592):map__23592);var args = map__23592__$1;var id = cljs.core.get.call(null,map__23592__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___23609 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___23609,ret,map__23592,map__23592__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___23609,ret,map__23592,map__23592__$1,args,id){
return (function (state_23599){var state_val_23600 = (state_23599[(1)]);if((state_val_23600 === (2)))
{var inst_23596 = (state_23599[(2)]);var inst_23597 = cljs.core.async.close_BANG_.call(null,ret);var state_23599__$1 = (function (){var statearr_23601 = state_23599;(statearr_23601[(7)] = inst_23596);
return statearr_23601;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23599__$1,inst_23597);
} else
{if((state_val_23600 === (1)))
{var inst_23593 = [null,null];var inst_23594 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23593,null));var state_23599__$1 = state_23599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23599__$1,(2),ret,inst_23594);
} else
{return null;
}
}
});})(c__6192__auto___23609,ret,map__23592,map__23592__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___23609,ret,map__23592,map__23592__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23605 = [null,null,null,null,null,null,null,null];(statearr_23605[(0)] = state_machine__6178__auto__);
(statearr_23605[(1)] = (1));
return statearr_23605;
});
var state_machine__6178__auto____1 = (function (state_23599){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23599);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23606){if((e23606 instanceof Object))
{var ex__6181__auto__ = e23606;var statearr_23607_23610 = state_23599;(statearr_23607_23610[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23611 = state_23599;
state_23599 = G__23611;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23599){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___23609,ret,map__23592,map__23592__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23608 = f__6193__auto__.call(null);(statearr_23608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___23609);
return statearr_23608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___23609,ret,map__23592,map__23592__$1,args,id))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__23612){var map__23613 = p__23612;var map__23613__$1 = ((cljs.core.seq_QMARK_.call(null,map__23613))?cljs.core.apply.call(null,cljs.core.hash_map,map__23613):map__23613);var args = map__23613__$1;var id = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___23637 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___23637,ret,map__23613,map__23613__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___23637,ret,map__23613,map__23613__$1,args,id){
return (function (state_23627){var state_val_23628 = (state_23627[(1)]);if((state_val_23628 === (2)))
{var inst_23624 = (state_23627[(2)]);var inst_23625 = cljs.core.async.close_BANG_.call(null,ret);var state_23627__$1 = (function (){var statearr_23629 = state_23627;(statearr_23629[(7)] = inst_23624);
return statearr_23629;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23627__$1,inst_23625);
} else
{if((state_val_23628 === (1)))
{var inst_23618 = {"path":""};var inst_23619 = [inst_23618];var inst_23620 = {"title":"test title","date":"2015/6/1","sideList":inst_23619,"content":"content","form":"form"};var inst_23621 = [null,inst_23620];var inst_23622 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23621,null));var state_23627__$1 = state_23627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23627__$1,(2),ret,inst_23622);
} else
{return null;
}
}
});})(c__6192__auto___23637,ret,map__23613,map__23613__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___23637,ret,map__23613,map__23613__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23633 = [null,null,null,null,null,null,null,null];(statearr_23633[(0)] = state_machine__6178__auto__);
(statearr_23633[(1)] = (1));
return statearr_23633;
});
var state_machine__6178__auto____1 = (function (state_23627){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23627);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23634){if((e23634 instanceof Object))
{var ex__6181__auto__ = e23634;var statearr_23635_23638 = state_23627;(statearr_23635_23638[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23627);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23639 = state_23627;
state_23627 = G__23639;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23627){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___23637,ret,map__23613,map__23613__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23636 = f__6193__auto__.call(null);(statearr_23636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___23637);
return statearr_23636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___23637,ret,map__23613,map__23613__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
