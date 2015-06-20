// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21318_SHARP_){return cljs.core._EQ_.call(null,view,p1__21318_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21319_SHARP_){return cljs.core._EQ_.call(null,view,p1__21319_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21320_SHARP_){return cljs.core._EQ_.call(null,view,p1__21320_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21321_SHARP_){return cljs.core._EQ_.call(null,view,p1__21321_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21322_SHARP_){return cljs.core._EQ_.call(null,view,p1__21322_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21323_SHARP_){return cljs.core._EQ_.call(null,view,p1__21323_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21324_SHARP_){return cljs.core._EQ_.call(null,view,p1__21324_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21325_SHARP_){return cljs.core._EQ_.call(null,view,p1__21325_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21326_SHARP_){return cljs.core._EQ_.call(null,view,p1__21326_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__21330){var vec__21331 = p__21330;var model = cljs.core.nth.call(null,vec__21331,(0),null);var detail = cljs.core.nth.call(null,vec__21331,(1),null);var G__21332 = (new Date(detail.Date));G__21332.getTime();
return G__21332;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__21335){var vec__21336 = p__21335;var model = cljs.core.nth.call(null,vec__21336,(0),null);var detail = cljs.core.nth.call(null,vec__21336,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__21339){var vec__21340 = p__21339;var model = cljs.core.nth.call(null,vec__21340,(0),null);var detail = cljs.core.nth.call(null,vec__21340,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__21382){var map__21383 = p__21382;var map__21383__$1 = ((cljs.core.seq_QMARK_.call(null,map__21383))?cljs.core.apply.call(null,cljs.core.hash_map,map__21383):map__21383);var args = map__21383__$1;var page = cljs.core.get.call(null,map__21383__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__21383__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__21384_21423 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__21384_21423.done(((function (G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertDTO = ((function (modelCountPerPage,filtered,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey){
return (function (p__21385){var vec__21386 = p__21385;var model = cljs.core.nth.call(null,vec__21386,(0),null);var detail = cljs.core.nth.call(null,vec__21386,(1),null);var obj21388 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj21388;
});})(modelCountPerPage,filtered,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey))
;var dto = (function (){var obj21390 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page - (1)))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page + (1)))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj21390;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey){
return (function (state_21397){var state_val_21398 = (state_21397[(1)]);if((state_val_21398 === (2)))
{var inst_21394 = (state_21397[(2)]);var inst_21395 = cljs.core.async.close_BANG_.call(null,ret);var state_21397__$1 = (function (){var statearr_21399 = state_21397;(statearr_21399[(7)] = inst_21394);
return statearr_21399;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21397__$1,inst_21395);
} else
{if((state_val_21398 === (1)))
{var inst_21391 = [null,dto];var inst_21392 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21391,null));var state_21397__$1 = state_21397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21397__$1,(2),ret,inst_21392);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21403 = [null,null,null,null,null,null,null,null];(statearr_21403[(0)] = state_machine__6178__auto__);
(statearr_21403[(1)] = (1));
return statearr_21403;
});
var state_machine__6178__auto____1 = (function (state_21397){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21397);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21404){if((e21404 instanceof Object))
{var ex__6181__auto__ = e21404;var statearr_21405_21424 = state_21397;(statearr_21405_21424[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21397);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21425 = state_21397;
state_21397 = G__21425;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21397){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_21406 = f__6193__auto__.call(null);(statearr_21406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey))
);
G__21384_21423.fail(((function (G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey){
return (function (state_21413){var state_val_21414 = (state_21413[(1)]);if((state_val_21414 === (2)))
{var inst_21410 = (state_21413[(2)]);var inst_21411 = cljs.core.async.close_BANG_.call(null,ret);var state_21413__$1 = (function (){var statearr_21415 = state_21413;(statearr_21415[(7)] = inst_21410);
return statearr_21415;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21413__$1,inst_21411);
} else
{if((state_val_21414 === (1)))
{var inst_21407 = [err,null];var inst_21408 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21407,null));var state_21413__$1 = state_21413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21413__$1,(2),ret,inst_21408);
} else
{return null;
}
}
});})(c__6192__auto__,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21419 = [null,null,null,null,null,null,null,null];(statearr_21419[(0)] = state_machine__6178__auto__);
(statearr_21419[(1)] = (1));
return statearr_21419;
});
var state_machine__6178__auto____1 = (function (state_21413){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21413);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21420){if((e21420 instanceof Object))
{var ex__6181__auto__ = e21420;var statearr_21421_21426 = state_21413;(statearr_21421_21426[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21413);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21427 = state_21413;
state_21413 = G__21427;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21413){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_21422 = f__6193__auto__.call(null);(statearr_21422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__21384_21423,configType,ret,map__21383,map__21383__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__21485){var map__21486 = p__21485;var map__21486__$1 = ((cljs.core.seq_QMARK_.call(null,map__21486))?cljs.core.apply.call(null,cljs.core.hash_map,map__21486):map__21486);var args = map__21486__$1;var id = cljs.core.get.call(null,map__21486__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__21487_21542 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__21487_21542.done(((function (G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function (p__21488){var vec__21489 = p__21488;var key__$1 = cljs.core.nth.call(null,vec__21489,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__21489,(1),null);var obj21491 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj21491;
});})(dir,detail,filtered,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function iter__21492(s__21493){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function (){var s__21493__$1 = s__21493;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21493__$1);if(temp__4126__auto__)
{var s__21493__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21493__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__21493__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__21495 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__21494 = (0);while(true){
if((i__21494 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__21494);cljs.core.chunk_append.call(null,b__21495,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__21543 = (i__21494 + (1));
i__21494 = G__21543;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21495),iter__21492.call(null,cljs.core.chunk_rest.call(null,s__21493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21495),null);
}
} else
{var idx = cljs.core.first.call(null,s__21493__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__21492.call(null,cljs.core.rest.call(null,s__21493__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function iter__21496(s__21497){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function (){var s__21497__$1 = s__21497;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21497__$1);if(temp__4126__auto__)
{var s__21497__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21497__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__21497__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__21499 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__21498 = (0);while(true){
if((i__21498 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__21498);cljs.core.chunk_append.call(null,b__21499,(function (){var obj21505 = {"id":url,"url":ServeFn.call(null,url)};return obj21505;
})());
{
var G__21544 = (i__21498 + (1));
i__21498 = G__21544;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21499),iter__21496.call(null,cljs.core.chunk_rest.call(null,s__21497__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21499),null);
}
} else
{var url = cljs.core.first.call(null,s__21497__$2);return cljs.core.cons.call(null,(function (){var obj21507 = {"id":url,"url":ServeFn.call(null,url)};return obj21507;
})(),iter__21496.call(null,cljs.core.rest.call(null,s__21497__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
;var dto = (function (){var obj21509 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj21509;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function (state_21516){var state_val_21517 = (state_21516[(1)]);if((state_val_21517 === (2)))
{var inst_21513 = (state_21516[(2)]);var inst_21514 = cljs.core.async.close_BANG_.call(null,ret);var state_21516__$1 = (function (){var statearr_21518 = state_21516;(statearr_21518[(7)] = inst_21513);
return statearr_21518;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21516__$1,inst_21514);
} else
{if((state_val_21517 === (1)))
{var inst_21510 = [null,dto];var inst_21511 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21510,null));var state_21516__$1 = state_21516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21516__$1,(2),ret,inst_21511);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21522 = [null,null,null,null,null,null,null,null];(statearr_21522[(0)] = state_machine__6178__auto__);
(statearr_21522[(1)] = (1));
return statearr_21522;
});
var state_machine__6178__auto____1 = (function (state_21516){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21516);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21523){if((e21523 instanceof Object))
{var ex__6181__auto__ = e21523;var statearr_21524_21545 = state_21516;(statearr_21524_21545[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21516);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21546 = state_21516;
state_21516 = G__21546;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21516){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_21525 = f__6193__auto__.call(null);(statearr_21525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
);
return c__6192__auto__;
});})(G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
);
G__21487_21542.fail(((function (G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function (state_21532){var state_val_21533 = (state_21532[(1)]);if((state_val_21533 === (2)))
{var inst_21529 = (state_21532[(2)]);var inst_21530 = cljs.core.async.close_BANG_.call(null,ret);var state_21532__$1 = (function (){var statearr_21534 = state_21532;(statearr_21534[(7)] = inst_21529);
return statearr_21534;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21532__$1,inst_21530);
} else
{if((state_val_21533 === (1)))
{var inst_21526 = [err,null];var inst_21527 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21526,null));var state_21532__$1 = state_21532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21532__$1,(2),ret,inst_21527);
} else
{return null;
}
}
});})(c__6192__auto__,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21538 = [null,null,null,null,null,null,null,null];(statearr_21538[(0)] = state_machine__6178__auto__);
(statearr_21538[(1)] = (1));
return statearr_21538;
});
var state_machine__6178__auto____1 = (function (state_21532){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21532);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21539){if((e21539 instanceof Object))
{var ex__6181__auto__ = e21539;var statearr_21540_21547 = state_21532;(statearr_21540_21547[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21548 = state_21532;
state_21532 = G__21548;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21532){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_21541 = f__6193__auto__.call(null);(statearr_21541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
);
return c__6192__auto__;
});})(G__21487_21542,ret,configType,map__21486,map__21486__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__21550_21587 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__21550_21587.done(((function (G__21550_21587,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__21550_21587,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__21550_21587,ret){
return (function (state_21561){var state_val_21562 = (state_21561[(1)]);if((state_val_21562 === (2)))
{var inst_21558 = (state_21561[(2)]);var inst_21559 = cljs.core.async.close_BANG_.call(null,ret);var state_21561__$1 = (function (){var statearr_21563 = state_21561;(statearr_21563[(7)] = inst_21558);
return statearr_21563;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21561__$1,inst_21559);
} else
{if((state_val_21562 === (1)))
{var inst_21553 = detail.ModelKey;var inst_21554 = {"modelKey":inst_21553};var inst_21555 = [null,inst_21554];var inst_21556 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21555,null));var state_21561__$1 = state_21561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21561__$1,(2),ret,inst_21556);
} else
{return null;
}
}
});})(c__6192__auto__,G__21550_21587,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__21550_21587,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21567 = [null,null,null,null,null,null,null,null];(statearr_21567[(0)] = state_machine__6178__auto__);
(statearr_21567[(1)] = (1));
return statearr_21567;
});
var state_machine__6178__auto____1 = (function (state_21561){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21561);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21568){if((e21568 instanceof Object))
{var ex__6181__auto__ = e21568;var statearr_21569_21588 = state_21561;(statearr_21569_21588[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21589 = state_21561;
state_21561 = G__21589;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21561){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__21550_21587,ret))
})();var state__6194__auto__ = (function (){var statearr_21570 = f__6193__auto__.call(null);(statearr_21570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__21550_21587,ret))
);
return c__6192__auto__;
});})(G__21550_21587,ret))
);
G__21550_21587.fail(((function (G__21550_21587,ret){
return (function (p1__21549_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__21550_21587,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__21550_21587,ret){
return (function (state_21577){var state_val_21578 = (state_21577[(1)]);if((state_val_21578 === (2)))
{var inst_21574 = (state_21577[(2)]);var inst_21575 = cljs.core.async.close_BANG_.call(null,ret);var state_21577__$1 = (function (){var statearr_21579 = state_21577;(statearr_21579[(7)] = inst_21574);
return statearr_21579;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21577__$1,inst_21575);
} else
{if((state_val_21578 === (1)))
{var inst_21571 = [p1__21549_SHARP_,null];var inst_21572 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21571,null));var state_21577__$1 = state_21577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21577__$1,(2),ret,inst_21572);
} else
{return null;
}
}
});})(c__6192__auto__,G__21550_21587,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__21550_21587,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21583 = [null,null,null,null,null,null,null,null];(statearr_21583[(0)] = state_machine__6178__auto__);
(statearr_21583[(1)] = (1));
return statearr_21583;
});
var state_machine__6178__auto____1 = (function (state_21577){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21577);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21584){if((e21584 instanceof Object))
{var ex__6181__auto__ = e21584;var statearr_21585_21590 = state_21577;(statearr_21585_21590[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21584;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21591 = state_21577;
state_21577 = G__21591;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21577){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__21550_21587,ret))
})();var state__6194__auto__ = (function (){var statearr_21586 = f__6193__auto__.call(null);(statearr_21586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__21550_21587,ret))
);
return c__6192__auto__;
});})(G__21550_21587,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__21592){var map__21593 = p__21592;var map__21593__$1 = ((cljs.core.seq_QMARK_.call(null,map__21593))?cljs.core.apply.call(null,cljs.core.hash_map,map__21593):map__21593);var args = map__21593__$1;var url = cljs.core.get.call(null,map__21593__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___21614 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___21614,ret,map__21593,map__21593__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___21614,ret,map__21593,map__21593__$1,args,url){
return (function (state_21604){var state_val_21605 = (state_21604[(1)]);if((state_val_21605 === (2)))
{var inst_21601 = (state_21604[(2)]);var inst_21602 = cljs.core.async.close_BANG_.call(null,ret);var state_21604__$1 = (function (){var statearr_21606 = state_21604;(statearr_21606[(7)] = inst_21601);
return statearr_21606;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21604__$1,inst_21602);
} else
{if((state_val_21605 === (1)))
{var inst_21596 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_21597 = {"url":inst_21596};var inst_21598 = [null,inst_21597];var inst_21599 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21598,null));var state_21604__$1 = state_21604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21604__$1,(2),ret,inst_21599);
} else
{return null;
}
}
});})(c__6192__auto___21614,ret,map__21593,map__21593__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___21614,ret,map__21593,map__21593__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21610 = [null,null,null,null,null,null,null,null];(statearr_21610[(0)] = state_machine__6178__auto__);
(statearr_21610[(1)] = (1));
return statearr_21610;
});
var state_machine__6178__auto____1 = (function (state_21604){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21611){if((e21611 instanceof Object))
{var ex__6181__auto__ = e21611;var statearr_21612_21615 = state_21604;(statearr_21612_21615[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21616 = state_21604;
state_21604 = G__21616;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21604){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___21614,ret,map__21593,map__21593__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_21613 = f__6193__auto__.call(null);(statearr_21613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___21614);
return statearr_21613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___21614,ret,map__21593,map__21593__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__21617){var map__21618 = p__21617;var map__21618__$1 = ((cljs.core.seq_QMARK_.call(null,map__21618))?cljs.core.apply.call(null,cljs.core.hash_map,map__21618):map__21618);var args = map__21618__$1;var id = cljs.core.get.call(null,map__21618__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___21635 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___21635,ret,map__21618,map__21618__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___21635,ret,map__21618,map__21618__$1,args,id){
return (function (state_21625){var state_val_21626 = (state_21625[(1)]);if((state_val_21626 === (2)))
{var inst_21622 = (state_21625[(2)]);var inst_21623 = cljs.core.async.close_BANG_.call(null,ret);var state_21625__$1 = (function (){var statearr_21627 = state_21625;(statearr_21627[(7)] = inst_21622);
return statearr_21627;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21625__$1,inst_21623);
} else
{if((state_val_21626 === (1)))
{var inst_21619 = [null,null];var inst_21620 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21619,null));var state_21625__$1 = state_21625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21625__$1,(2),ret,inst_21620);
} else
{return null;
}
}
});})(c__6192__auto___21635,ret,map__21618,map__21618__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___21635,ret,map__21618,map__21618__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21631 = [null,null,null,null,null,null,null,null];(statearr_21631[(0)] = state_machine__6178__auto__);
(statearr_21631[(1)] = (1));
return statearr_21631;
});
var state_machine__6178__auto____1 = (function (state_21625){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21625);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21632){if((e21632 instanceof Object))
{var ex__6181__auto__ = e21632;var statearr_21633_21636 = state_21625;(statearr_21633_21636[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21625);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21637 = state_21625;
state_21625 = G__21637;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21625){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___21635,ret,map__21618,map__21618__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_21634 = f__6193__auto__.call(null);(statearr_21634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___21635);
return statearr_21634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___21635,ret,map__21618,map__21618__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__21638 = cljs.core.rest.call(null,list);
var G__21639 = id;
var G__21640 = (start + (1));
list = G__21638;
id = G__21639;
start = G__21640;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__21642){var map__21643 = p__21642;var map__21643__$1 = ((cljs.core.seq_QMARK_.call(null,map__21643))?cljs.core.apply.call(null,cljs.core.hash_map,map__21643):map__21643);var args = map__21643__$1;var id = cljs.core.get.call(null,map__21643__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__21644_21676 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__21644_21676.done(((function (G__21644_21676,ret,map__21643,map__21643__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__21644_21676,ret,map__21643,map__21643__$1,args,id){
return (function (p1__21641_SHARP_){var obj21646 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__21641_SHARP_ + (1)))+".jpg"))};return obj21646;
});})(filtered,evtId,evt,G__21644_21676,ret,map__21643,map__21643__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__21644_21676,ret,map__21643,map__21643__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__21644_21676,ret,map__21643,map__21643__$1,args,id){
return (function (state_21666){var state_val_21667 = (state_21666[(1)]);if((state_val_21667 === (2)))
{var inst_21663 = (state_21666[(2)]);var inst_21664 = cljs.core.async.close_BANG_.call(null,ret);var state_21666__$1 = (function (){var statearr_21668 = state_21666;(statearr_21668[(7)] = inst_21663);
return statearr_21668;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21666__$1,inst_21664);
} else
{if((state_val_21667 === (1)))
{var inst_21649 = cljs.core.nth.call(null,filtered,idx);var inst_21650 = cljs.core.first.call(null,inst_21649);var inst_21651 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21650));var inst_21652 = cljs.core.nth.call(null,filtered,idx2);var inst_21653 = cljs.core.first.call(null,inst_21652);var inst_21654 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21653));var inst_21655 = (evt["Title"]);var inst_21656 = (evt["Date"]);var inst_21657 = (evt["Content"]);var inst_21658 = (evt["Form"]);var inst_21659 = {"prev_href":inst_21651,"next_href":inst_21654,"title":inst_21655,"date":inst_21656,"sideList":photos,"content":inst_21657,"form":inst_21658};var inst_21660 = [null,inst_21659];var inst_21661 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21660,null));var state_21666__$1 = state_21666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21666__$1,(2),ret,inst_21661);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__21644_21676,ret,map__21643,map__21643__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__21644_21676,ret,map__21643,map__21643__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21672 = [null,null,null,null,null,null,null,null];(statearr_21672[(0)] = state_machine__6178__auto__);
(statearr_21672[(1)] = (1));
return statearr_21672;
});
var state_machine__6178__auto____1 = (function (state_21666){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21666);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21673){if((e21673 instanceof Object))
{var ex__6181__auto__ = e21673;var statearr_21674_21677 = state_21666;(statearr_21674_21677[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21678 = state_21666;
state_21666 = G__21678;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21666){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__21644_21676,ret,map__21643,map__21643__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_21675 = f__6193__auto__.call(null);(statearr_21675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__21644_21676,ret,map__21643,map__21643__$1,args,id))
);
return c__6192__auto__;
});})(G__21644_21676,ret,map__21643,map__21643__$1,args,id))
);
G__21644_21676.fail(((function (G__21644_21676,ret,map__21643,map__21643__$1,args,id){
return (function (err){return console.log(err);
});})(G__21644_21676,ret,map__21643,map__21643__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
