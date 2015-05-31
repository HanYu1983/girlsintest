// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12273_SHARP_){return cljs.core._EQ_.call(null,view,p1__12273_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12274_SHARP_){return cljs.core._EQ_.call(null,view,p1__12274_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12275_SHARP_){return cljs.core._EQ_.call(null,view,p1__12275_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12276_SHARP_){return cljs.core._EQ_.call(null,view,p1__12276_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12277_SHARP_){return cljs.core._EQ_.call(null,view,p1__12277_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12278_SHARP_){return cljs.core._EQ_.call(null,view,p1__12278_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12279_SHARP_){return cljs.core._EQ_.call(null,view,p1__12279_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12280_SHARP_){return cljs.core._EQ_.call(null,view,p1__12280_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12281_SHARP_){return cljs.core._EQ_.call(null,view,p1__12281_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__12285){var vec__12286 = p__12285;var model = cljs.core.nth.call(null,vec__12286,(0),null);var detail = cljs.core.nth.call(null,vec__12286,(1),null);var G__12287 = (new Date(detail.Date));G__12287.getTime();
return G__12287;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__12290){var vec__12291 = p__12290;var model = cljs.core.nth.call(null,vec__12291,(0),null);var detail = cljs.core.nth.call(null,vec__12291,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__12333){var map__12334 = p__12333;var map__12334__$1 = ((cljs.core.seq_QMARK_.call(null,map__12334))?cljs.core.apply.call(null,cljs.core.hash_map,map__12334):map__12334);var args = map__12334__$1;var searchKey = cljs.core.get.call(null,map__12334__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__12335_12374 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__12335_12374.done(((function (G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey){
return (function() { 
var G__12375__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey){
return (function (p__12336){var vec__12337 = p__12336;var model = cljs.core.nth.call(null,vec__12337,(0),null);var detail = cljs.core.nth.call(null,vec__12337,(1),null);var obj12339 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj12339;
});})(config,details,filtered,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey))
;var dto = (function (){var obj12341 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj12341;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey){
return (function (state_12348){var state_val_12349 = (state_12348[(1)]);if((state_val_12349 === (2)))
{var inst_12345 = (state_12348[(2)]);var inst_12346 = cljs.core.async.close_BANG_.call(null,ret);var state_12348__$1 = (function (){var statearr_12350 = state_12348;(statearr_12350[(7)] = inst_12345);
return statearr_12350;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12348__$1,inst_12346);
} else
{if((state_val_12349 === (1)))
{var inst_12342 = [null,dto];var inst_12343 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12342,null));var state_12348__$1 = state_12348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12348__$1,(2),ret,inst_12343);
} else
{return null;
}
}
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12354 = [null,null,null,null,null,null,null,null];(statearr_12354[(0)] = state_machine__6178__auto__);
(statearr_12354[(1)] = (1));
return statearr_12354;
});
var state_machine__6178__auto____1 = (function (state_12348){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12348);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12355){if((e12355 instanceof Object))
{var ex__6181__auto__ = e12355;var statearr_12356_12376 = state_12348;(statearr_12356_12376[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12348);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12377 = state_12348;
state_12348 = G__12377;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12348){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_12357 = f__6193__auto__.call(null);(statearr_12357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey))
);
return c__6192__auto__;
};
var G__12375 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12375__delegate.call(this,args__$1);};
G__12375.cljs$lang$maxFixedArity = 0;
G__12375.cljs$lang$applyTo = (function (arglist__12378){
var args__$1 = cljs.core.seq(arglist__12378);
return G__12375__delegate(args__$1);
});
G__12375.cljs$core$IFn$_invoke$arity$variadic = G__12375__delegate;
return G__12375;
})()
;})(G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey))
);
G__12335_12374.fail(((function (G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey){
return (function (state_12364){var state_val_12365 = (state_12364[(1)]);if((state_val_12365 === (2)))
{var inst_12361 = (state_12364[(2)]);var inst_12362 = cljs.core.async.close_BANG_.call(null,ret);var state_12364__$1 = (function (){var statearr_12366 = state_12364;(statearr_12366[(7)] = inst_12361);
return statearr_12366;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12364__$1,inst_12362);
} else
{if((state_val_12365 === (1)))
{var inst_12358 = [err,null];var inst_12359 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12358,null));var state_12364__$1 = state_12364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12364__$1,(2),ret,inst_12359);
} else
{return null;
}
}
});})(c__6192__auto__,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12370 = [null,null,null,null,null,null,null,null];(statearr_12370[(0)] = state_machine__6178__auto__);
(statearr_12370[(1)] = (1));
return statearr_12370;
});
var state_machine__6178__auto____1 = (function (state_12364){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12364);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12371){if((e12371 instanceof Object))
{var ex__6181__auto__ = e12371;var statearr_12372_12379 = state_12364;(statearr_12372_12379[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12364);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12380 = state_12364;
state_12364 = G__12380;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12364){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_12373 = f__6193__auto__.call(null);(statearr_12373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey))
);
return c__6192__auto__;
});})(G__12335_12374,configType,ret,map__12334,map__12334__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__12438){var map__12439 = p__12438;var map__12439__$1 = ((cljs.core.seq_QMARK_.call(null,map__12439))?cljs.core.apply.call(null,cljs.core.hash_map,map__12439):map__12439);var args = map__12439__$1;var id = cljs.core.get.call(null,map__12439__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__12440_12495 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__12440_12495.done(((function (G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function() { 
var G__12496__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function (p__12441){var vec__12442 = p__12441;var key__$1 = cljs.core.nth.call(null,vec__12442,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__12442,(1),null);var obj12444 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj12444;
});})(config,dir,details,detail,filtered,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function iter__12445(s__12446){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function (){var s__12446__$1 = s__12446;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12446__$1);if(temp__4126__auto__)
{var s__12446__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12446__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12446__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12448 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12447 = (0);while(true){
if((i__12447 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__12447);cljs.core.chunk_append.call(null,b__12448,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__12497 = (i__12447 + (1));
i__12447 = G__12497;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12448),iter__12445.call(null,cljs.core.chunk_rest.call(null,s__12446__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12448),null);
}
} else
{var idx = cljs.core.first.call(null,s__12446__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__12445.call(null,cljs.core.rest.call(null,s__12446__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function iter__12449(s__12450){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function (){var s__12450__$1 = s__12450;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12450__$1);if(temp__4126__auto__)
{var s__12450__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12450__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12450__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12452 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12451 = (0);while(true){
if((i__12451 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__12451);cljs.core.chunk_append.call(null,b__12452,(function (){var obj12458 = {"id":url,"url":ServeFn.call(null,url)};return obj12458;
})());
{
var G__12498 = (i__12451 + (1));
i__12451 = G__12498;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12452),iter__12449.call(null,cljs.core.chunk_rest.call(null,s__12450__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12452),null);
}
} else
{var url = cljs.core.first.call(null,s__12450__$2);return cljs.core.cons.call(null,(function (){var obj12460 = {"id":url,"url":ServeFn.call(null,url)};return obj12460;
})(),iter__12449.call(null,cljs.core.rest.call(null,s__12450__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
;var dto = (function (){var obj12462 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj12462;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function (state_12469){var state_val_12470 = (state_12469[(1)]);if((state_val_12470 === (2)))
{var inst_12466 = (state_12469[(2)]);var inst_12467 = cljs.core.async.close_BANG_.call(null,ret);var state_12469__$1 = (function (){var statearr_12471 = state_12469;(statearr_12471[(7)] = inst_12466);
return statearr_12471;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12469__$1,inst_12467);
} else
{if((state_val_12470 === (1)))
{var inst_12463 = [null,dto];var inst_12464 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12463,null));var state_12469__$1 = state_12469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12469__$1,(2),ret,inst_12464);
} else
{return null;
}
}
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12475 = [null,null,null,null,null,null,null,null];(statearr_12475[(0)] = state_machine__6178__auto__);
(statearr_12475[(1)] = (1));
return statearr_12475;
});
var state_machine__6178__auto____1 = (function (state_12469){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12469);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12476){if((e12476 instanceof Object))
{var ex__6181__auto__ = e12476;var statearr_12477_12499 = state_12469;(statearr_12477_12499[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12469);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12500 = state_12469;
state_12469 = G__12500;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12469){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12478 = f__6193__auto__.call(null);(statearr_12478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
);
return c__6192__auto__;
};
var G__12496 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12496__delegate.call(this,args__$1);};
G__12496.cljs$lang$maxFixedArity = 0;
G__12496.cljs$lang$applyTo = (function (arglist__12501){
var args__$1 = cljs.core.seq(arglist__12501);
return G__12496__delegate(args__$1);
});
G__12496.cljs$core$IFn$_invoke$arity$variadic = G__12496__delegate;
return G__12496;
})()
;})(G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
);
G__12440_12495.fail(((function (G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function (state_12485){var state_val_12486 = (state_12485[(1)]);if((state_val_12486 === (2)))
{var inst_12482 = (state_12485[(2)]);var inst_12483 = cljs.core.async.close_BANG_.call(null,ret);var state_12485__$1 = (function (){var statearr_12487 = state_12485;(statearr_12487[(7)] = inst_12482);
return statearr_12487;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12485__$1,inst_12483);
} else
{if((state_val_12486 === (1)))
{var inst_12479 = [err,null];var inst_12480 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12479,null));var state_12485__$1 = state_12485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12485__$1,(2),ret,inst_12480);
} else
{return null;
}
}
});})(c__6192__auto__,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12491 = [null,null,null,null,null,null,null,null];(statearr_12491[(0)] = state_machine__6178__auto__);
(statearr_12491[(1)] = (1));
return statearr_12491;
});
var state_machine__6178__auto____1 = (function (state_12485){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12485);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12492){if((e12492 instanceof Object))
{var ex__6181__auto__ = e12492;var statearr_12493_12502 = state_12485;(statearr_12493_12502[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12485);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12503 = state_12485;
state_12485 = G__12503;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12485){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12494 = f__6193__auto__.call(null);(statearr_12494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
);
return c__6192__auto__;
});})(G__12440_12495,ret,configType,map__12439,map__12439__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__12505_12542 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__12505_12542.done(((function (G__12505_12542,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12505_12542,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12505_12542,ret){
return (function (state_12516){var state_val_12517 = (state_12516[(1)]);if((state_val_12517 === (2)))
{var inst_12513 = (state_12516[(2)]);var inst_12514 = cljs.core.async.close_BANG_.call(null,ret);var state_12516__$1 = (function (){var statearr_12518 = state_12516;(statearr_12518[(7)] = inst_12513);
return statearr_12518;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12516__$1,inst_12514);
} else
{if((state_val_12517 === (1)))
{var inst_12508 = detail.ModelKey;var inst_12509 = {"modelKey":inst_12508};var inst_12510 = [null,inst_12509];var inst_12511 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12510,null));var state_12516__$1 = state_12516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12516__$1,(2),ret,inst_12511);
} else
{return null;
}
}
});})(c__6192__auto__,G__12505_12542,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12505_12542,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12522 = [null,null,null,null,null,null,null,null];(statearr_12522[(0)] = state_machine__6178__auto__);
(statearr_12522[(1)] = (1));
return statearr_12522;
});
var state_machine__6178__auto____1 = (function (state_12516){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12516);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12523){if((e12523 instanceof Object))
{var ex__6181__auto__ = e12523;var statearr_12524_12543 = state_12516;(statearr_12524_12543[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12516);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12544 = state_12516;
state_12516 = G__12544;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12516){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12505_12542,ret))
})();var state__6194__auto__ = (function (){var statearr_12525 = f__6193__auto__.call(null);(statearr_12525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12505_12542,ret))
);
return c__6192__auto__;
});})(G__12505_12542,ret))
);
G__12505_12542.fail(((function (G__12505_12542,ret){
return (function (p1__12504_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12505_12542,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12505_12542,ret){
return (function (state_12532){var state_val_12533 = (state_12532[(1)]);if((state_val_12533 === (2)))
{var inst_12529 = (state_12532[(2)]);var inst_12530 = cljs.core.async.close_BANG_.call(null,ret);var state_12532__$1 = (function (){var statearr_12534 = state_12532;(statearr_12534[(7)] = inst_12529);
return statearr_12534;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12532__$1,inst_12530);
} else
{if((state_val_12533 === (1)))
{var inst_12526 = [p1__12504_SHARP_,null];var inst_12527 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12526,null));var state_12532__$1 = state_12532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12532__$1,(2),ret,inst_12527);
} else
{return null;
}
}
});})(c__6192__auto__,G__12505_12542,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12505_12542,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12538 = [null,null,null,null,null,null,null,null];(statearr_12538[(0)] = state_machine__6178__auto__);
(statearr_12538[(1)] = (1));
return statearr_12538;
});
var state_machine__6178__auto____1 = (function (state_12532){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12532);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12539){if((e12539 instanceof Object))
{var ex__6181__auto__ = e12539;var statearr_12540_12545 = state_12532;(statearr_12540_12545[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12546 = state_12532;
state_12532 = G__12546;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12532){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12505_12542,ret))
})();var state__6194__auto__ = (function (){var statearr_12541 = f__6193__auto__.call(null);(statearr_12541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12505_12542,ret))
);
return c__6192__auto__;
});})(G__12505_12542,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__12547){var map__12548 = p__12547;var map__12548__$1 = ((cljs.core.seq_QMARK_.call(null,map__12548))?cljs.core.apply.call(null,cljs.core.hash_map,map__12548):map__12548);var args = map__12548__$1;var url = cljs.core.get.call(null,map__12548__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___12569 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___12569,ret,map__12548,map__12548__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___12569,ret,map__12548,map__12548__$1,args,url){
return (function (state_12559){var state_val_12560 = (state_12559[(1)]);if((state_val_12560 === (2)))
{var inst_12556 = (state_12559[(2)]);var inst_12557 = cljs.core.async.close_BANG_.call(null,ret);var state_12559__$1 = (function (){var statearr_12561 = state_12559;(statearr_12561[(7)] = inst_12556);
return statearr_12561;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12559__$1,inst_12557);
} else
{if((state_val_12560 === (1)))
{var inst_12551 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_12552 = {"url":inst_12551};var inst_12553 = [null,inst_12552];var inst_12554 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12553,null));var state_12559__$1 = state_12559;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12559__$1,(2),ret,inst_12554);
} else
{return null;
}
}
});})(c__6192__auto___12569,ret,map__12548,map__12548__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___12569,ret,map__12548,map__12548__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12565 = [null,null,null,null,null,null,null,null];(statearr_12565[(0)] = state_machine__6178__auto__);
(statearr_12565[(1)] = (1));
return statearr_12565;
});
var state_machine__6178__auto____1 = (function (state_12559){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12559);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12566){if((e12566 instanceof Object))
{var ex__6181__auto__ = e12566;var statearr_12567_12570 = state_12559;(statearr_12567_12570[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12559);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12571 = state_12559;
state_12559 = G__12571;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12559){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___12569,ret,map__12548,map__12548__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_12568 = f__6193__auto__.call(null);(statearr_12568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12569);
return statearr_12568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___12569,ret,map__12548,map__12548__$1,args,url))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
