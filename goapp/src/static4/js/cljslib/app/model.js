// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23319_SHARP_){return cljs.core._EQ_.call(null,view,p1__23319_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23320_SHARP_){return cljs.core._EQ_.call(null,view,p1__23320_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23321_SHARP_){return cljs.core._EQ_.call(null,view,p1__23321_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23322_SHARP_){return cljs.core._EQ_.call(null,view,p1__23322_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23323_SHARP_){return cljs.core._EQ_.call(null,view,p1__23323_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23324_SHARP_){return cljs.core._EQ_.call(null,view,p1__23324_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23325_SHARP_){return cljs.core._EQ_.call(null,view,p1__23325_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23326_SHARP_){return cljs.core._EQ_.call(null,view,p1__23326_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23327_SHARP_){return cljs.core._EQ_.call(null,view,p1__23327_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__23331){var vec__23332 = p__23331;var model = cljs.core.nth.call(null,vec__23332,(0),null);var detail = cljs.core.nth.call(null,vec__23332,(1),null);var G__23333 = (new Date(detail.Date));G__23333.getTime();
return G__23333;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__23336){var vec__23337 = p__23336;var model = cljs.core.nth.call(null,vec__23337,(0),null);var detail = cljs.core.nth.call(null,vec__23337,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__23379){var map__23380 = p__23379;var map__23380__$1 = ((cljs.core.seq_QMARK_.call(null,map__23380))?cljs.core.apply.call(null,cljs.core.hash_map,map__23380):map__23380);var args = map__23380__$1;var page = cljs.core.get.call(null,map__23380__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__23380__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__23381_23420 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__23381_23420.done(((function (G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = (6);var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details))));var ConvertDTO = ((function (modelCountPerPage,filtered,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey){
return (function (p__23382){var vec__23383 = p__23382;var model = cljs.core.nth.call(null,vec__23383,(0),null);var detail = cljs.core.nth.call(null,vec__23383,(1),null);var obj23385 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj23385;
});})(modelCountPerPage,filtered,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey))
;var dto = (function (){var obj23387 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page - (1)))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page + (1)))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj23387;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey){
return (function (state_23394){var state_val_23395 = (state_23394[(1)]);if((state_val_23395 === (2)))
{var inst_23391 = (state_23394[(2)]);var inst_23392 = cljs.core.async.close_BANG_.call(null,ret);var state_23394__$1 = (function (){var statearr_23396 = state_23394;(statearr_23396[(7)] = inst_23391);
return statearr_23396;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23394__$1,inst_23392);
} else
{if((state_val_23395 === (1)))
{var inst_23388 = [null,dto];var inst_23389 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23388,null));var state_23394__$1 = state_23394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23394__$1,(2),ret,inst_23389);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23400 = [null,null,null,null,null,null,null,null];(statearr_23400[(0)] = state_machine__6178__auto__);
(statearr_23400[(1)] = (1));
return statearr_23400;
});
var state_machine__6178__auto____1 = (function (state_23394){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23394);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23401){if((e23401 instanceof Object))
{var ex__6181__auto__ = e23401;var statearr_23402_23421 = state_23394;(statearr_23402_23421[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23394);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23401;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23422 = state_23394;
state_23394 = G__23422;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23394){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_23403 = f__6193__auto__.call(null);(statearr_23403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey))
);
G__23381_23420.fail(((function (G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey){
return (function (state_23410){var state_val_23411 = (state_23410[(1)]);if((state_val_23411 === (2)))
{var inst_23407 = (state_23410[(2)]);var inst_23408 = cljs.core.async.close_BANG_.call(null,ret);var state_23410__$1 = (function (){var statearr_23412 = state_23410;(statearr_23412[(7)] = inst_23407);
return statearr_23412;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23410__$1,inst_23408);
} else
{if((state_val_23411 === (1)))
{var inst_23404 = [err,null];var inst_23405 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23404,null));var state_23410__$1 = state_23410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23410__$1,(2),ret,inst_23405);
} else
{return null;
}
}
});})(c__6192__auto__,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23416 = [null,null,null,null,null,null,null,null];(statearr_23416[(0)] = state_machine__6178__auto__);
(statearr_23416[(1)] = (1));
return statearr_23416;
});
var state_machine__6178__auto____1 = (function (state_23410){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23410);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23417){if((e23417 instanceof Object))
{var ex__6181__auto__ = e23417;var statearr_23418_23423 = state_23410;(statearr_23418_23423[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23410);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23424 = state_23410;
state_23410 = G__23424;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23410){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_23419 = f__6193__auto__.call(null);(statearr_23419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__23381_23420,configType,ret,map__23380,map__23380__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__23482){var map__23483 = p__23482;var map__23483__$1 = ((cljs.core.seq_QMARK_.call(null,map__23483))?cljs.core.apply.call(null,cljs.core.hash_map,map__23483):map__23483);var args = map__23483__$1;var id = cljs.core.get.call(null,map__23483__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__23484_23539 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__23484_23539.done(((function (G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (dir,detail,filtered,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function (p__23485){var vec__23486 = p__23485;var key__$1 = cljs.core.nth.call(null,vec__23486,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__23486,(1),null);var obj23488 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj23488;
});})(dir,detail,filtered,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function iter__23489(s__23490){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function (){var s__23490__$1 = s__23490;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23490__$1);if(temp__4126__auto__)
{var s__23490__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23490__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__23490__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__23492 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__23491 = (0);while(true){
if((i__23491 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__23491);cljs.core.chunk_append.call(null,b__23492,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__23540 = (i__23491 + (1));
i__23491 = G__23540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23492),iter__23489.call(null,cljs.core.chunk_rest.call(null,s__23490__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23492),null);
}
} else
{var idx = cljs.core.first.call(null,s__23490__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__23489.call(null,cljs.core.rest.call(null,s__23490__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function iter__23493(s__23494){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function (){var s__23494__$1 = s__23494;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23494__$1);if(temp__4126__auto__)
{var s__23494__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23494__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__23494__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__23496 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__23495 = (0);while(true){
if((i__23495 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__23495);cljs.core.chunk_append.call(null,b__23496,(function (){var obj23502 = {"id":url,"url":ServeFn.call(null,url)};return obj23502;
})());
{
var G__23541 = (i__23495 + (1));
i__23495 = G__23541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23496),iter__23493.call(null,cljs.core.chunk_rest.call(null,s__23494__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23496),null);
}
} else
{var url = cljs.core.first.call(null,s__23494__$2);return cljs.core.cons.call(null,(function (){var obj23504 = {"id":url,"url":ServeFn.call(null,url)};return obj23504;
})(),iter__23493.call(null,cljs.core.rest.call(null,s__23494__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
;var dto = (function (){var obj23506 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj23506;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function (state_23513){var state_val_23514 = (state_23513[(1)]);if((state_val_23514 === (2)))
{var inst_23510 = (state_23513[(2)]);var inst_23511 = cljs.core.async.close_BANG_.call(null,ret);var state_23513__$1 = (function (){var statearr_23515 = state_23513;(statearr_23515[(7)] = inst_23510);
return statearr_23515;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23513__$1,inst_23511);
} else
{if((state_val_23514 === (1)))
{var inst_23507 = [null,dto];var inst_23508 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23507,null));var state_23513__$1 = state_23513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23513__$1,(2),ret,inst_23508);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23519 = [null,null,null,null,null,null,null,null];(statearr_23519[(0)] = state_machine__6178__auto__);
(statearr_23519[(1)] = (1));
return statearr_23519;
});
var state_machine__6178__auto____1 = (function (state_23513){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23513);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23520){if((e23520 instanceof Object))
{var ex__6181__auto__ = e23520;var statearr_23521_23542 = state_23513;(statearr_23521_23542[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23543 = state_23513;
state_23513 = G__23543;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23513){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23522 = f__6193__auto__.call(null);(statearr_23522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
);
return c__6192__auto__;
});})(G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
);
G__23484_23539.fail(((function (G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function (state_23529){var state_val_23530 = (state_23529[(1)]);if((state_val_23530 === (2)))
{var inst_23526 = (state_23529[(2)]);var inst_23527 = cljs.core.async.close_BANG_.call(null,ret);var state_23529__$1 = (function (){var statearr_23531 = state_23529;(statearr_23531[(7)] = inst_23526);
return statearr_23531;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23529__$1,inst_23527);
} else
{if((state_val_23530 === (1)))
{var inst_23523 = [err,null];var inst_23524 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23523,null));var state_23529__$1 = state_23529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23529__$1,(2),ret,inst_23524);
} else
{return null;
}
}
});})(c__6192__auto__,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23535 = [null,null,null,null,null,null,null,null];(statearr_23535[(0)] = state_machine__6178__auto__);
(statearr_23535[(1)] = (1));
return statearr_23535;
});
var state_machine__6178__auto____1 = (function (state_23529){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23529);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23536){if((e23536 instanceof Object))
{var ex__6181__auto__ = e23536;var statearr_23537_23544 = state_23529;(statearr_23537_23544[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23529);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23545 = state_23529;
state_23529 = G__23545;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23529){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23538 = f__6193__auto__.call(null);(statearr_23538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
);
return c__6192__auto__;
});})(G__23484_23539,ret,configType,map__23483,map__23483__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__23547_23584 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__23547_23584.done(((function (G__23547_23584,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23547_23584,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23547_23584,ret){
return (function (state_23558){var state_val_23559 = (state_23558[(1)]);if((state_val_23559 === (2)))
{var inst_23555 = (state_23558[(2)]);var inst_23556 = cljs.core.async.close_BANG_.call(null,ret);var state_23558__$1 = (function (){var statearr_23560 = state_23558;(statearr_23560[(7)] = inst_23555);
return statearr_23560;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23558__$1,inst_23556);
} else
{if((state_val_23559 === (1)))
{var inst_23550 = detail.ModelKey;var inst_23551 = {"modelKey":inst_23550};var inst_23552 = [null,inst_23551];var inst_23553 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23552,null));var state_23558__$1 = state_23558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23558__$1,(2),ret,inst_23553);
} else
{return null;
}
}
});})(c__6192__auto__,G__23547_23584,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23547_23584,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23564 = [null,null,null,null,null,null,null,null];(statearr_23564[(0)] = state_machine__6178__auto__);
(statearr_23564[(1)] = (1));
return statearr_23564;
});
var state_machine__6178__auto____1 = (function (state_23558){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23565){if((e23565 instanceof Object))
{var ex__6181__auto__ = e23565;var statearr_23566_23585 = state_23558;(statearr_23566_23585[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23586 = state_23558;
state_23558 = G__23586;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23558){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23547_23584,ret))
})();var state__6194__auto__ = (function (){var statearr_23567 = f__6193__auto__.call(null);(statearr_23567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23547_23584,ret))
);
return c__6192__auto__;
});})(G__23547_23584,ret))
);
G__23547_23584.fail(((function (G__23547_23584,ret){
return (function (p1__23546_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23547_23584,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23547_23584,ret){
return (function (state_23574){var state_val_23575 = (state_23574[(1)]);if((state_val_23575 === (2)))
{var inst_23571 = (state_23574[(2)]);var inst_23572 = cljs.core.async.close_BANG_.call(null,ret);var state_23574__$1 = (function (){var statearr_23576 = state_23574;(statearr_23576[(7)] = inst_23571);
return statearr_23576;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23574__$1,inst_23572);
} else
{if((state_val_23575 === (1)))
{var inst_23568 = [p1__23546_SHARP_,null];var inst_23569 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23568,null));var state_23574__$1 = state_23574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23574__$1,(2),ret,inst_23569);
} else
{return null;
}
}
});})(c__6192__auto__,G__23547_23584,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23547_23584,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23580 = [null,null,null,null,null,null,null,null];(statearr_23580[(0)] = state_machine__6178__auto__);
(statearr_23580[(1)] = (1));
return statearr_23580;
});
var state_machine__6178__auto____1 = (function (state_23574){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23574);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23581){if((e23581 instanceof Object))
{var ex__6181__auto__ = e23581;var statearr_23582_23587 = state_23574;(statearr_23582_23587[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23588 = state_23574;
state_23574 = G__23588;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23574){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23547_23584,ret))
})();var state__6194__auto__ = (function (){var statearr_23583 = f__6193__auto__.call(null);(statearr_23583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23547_23584,ret))
);
return c__6192__auto__;
});})(G__23547_23584,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__23589){var map__23590 = p__23589;var map__23590__$1 = ((cljs.core.seq_QMARK_.call(null,map__23590))?cljs.core.apply.call(null,cljs.core.hash_map,map__23590):map__23590);var args = map__23590__$1;var url = cljs.core.get.call(null,map__23590__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___23611 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___23611,ret,map__23590,map__23590__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___23611,ret,map__23590,map__23590__$1,args,url){
return (function (state_23601){var state_val_23602 = (state_23601[(1)]);if((state_val_23602 === (2)))
{var inst_23598 = (state_23601[(2)]);var inst_23599 = cljs.core.async.close_BANG_.call(null,ret);var state_23601__$1 = (function (){var statearr_23603 = state_23601;(statearr_23603[(7)] = inst_23598);
return statearr_23603;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23601__$1,inst_23599);
} else
{if((state_val_23602 === (1)))
{var inst_23593 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_23594 = {"url":inst_23593};var inst_23595 = [null,inst_23594];var inst_23596 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23595,null));var state_23601__$1 = state_23601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23601__$1,(2),ret,inst_23596);
} else
{return null;
}
}
});})(c__6192__auto___23611,ret,map__23590,map__23590__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___23611,ret,map__23590,map__23590__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23607 = [null,null,null,null,null,null,null,null];(statearr_23607[(0)] = state_machine__6178__auto__);
(statearr_23607[(1)] = (1));
return statearr_23607;
});
var state_machine__6178__auto____1 = (function (state_23601){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23601);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23608){if((e23608 instanceof Object))
{var ex__6181__auto__ = e23608;var statearr_23609_23612 = state_23601;(statearr_23609_23612[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23601);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23608;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23613 = state_23601;
state_23601 = G__23613;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23601){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___23611,ret,map__23590,map__23590__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_23610 = f__6193__auto__.call(null);(statearr_23610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___23611);
return statearr_23610;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___23611,ret,map__23590,map__23590__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__23614){var map__23615 = p__23614;var map__23615__$1 = ((cljs.core.seq_QMARK_.call(null,map__23615))?cljs.core.apply.call(null,cljs.core.hash_map,map__23615):map__23615);var args = map__23615__$1;var id = cljs.core.get.call(null,map__23615__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___23632 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___23632,ret,map__23615,map__23615__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___23632,ret,map__23615,map__23615__$1,args,id){
return (function (state_23622){var state_val_23623 = (state_23622[(1)]);if((state_val_23623 === (2)))
{var inst_23619 = (state_23622[(2)]);var inst_23620 = cljs.core.async.close_BANG_.call(null,ret);var state_23622__$1 = (function (){var statearr_23624 = state_23622;(statearr_23624[(7)] = inst_23619);
return statearr_23624;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23622__$1,inst_23620);
} else
{if((state_val_23623 === (1)))
{var inst_23616 = [null,null];var inst_23617 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23616,null));var state_23622__$1 = state_23622;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23622__$1,(2),ret,inst_23617);
} else
{return null;
}
}
});})(c__6192__auto___23632,ret,map__23615,map__23615__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___23632,ret,map__23615,map__23615__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23628 = [null,null,null,null,null,null,null,null];(statearr_23628[(0)] = state_machine__6178__auto__);
(statearr_23628[(1)] = (1));
return statearr_23628;
});
var state_machine__6178__auto____1 = (function (state_23622){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23622);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23629){if((e23629 instanceof Object))
{var ex__6181__auto__ = e23629;var statearr_23630_23633 = state_23622;(statearr_23630_23633[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23622);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23634 = state_23622;
state_23622 = G__23634;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23622){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___23632,ret,map__23615,map__23615__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23631 = f__6193__auto__.call(null);(statearr_23631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___23632);
return statearr_23631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___23632,ret,map__23615,map__23615__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__23635 = cljs.core.rest.call(null,list);
var G__23636 = id;
var G__23637 = (start + (1));
list = G__23635;
id = G__23636;
start = G__23637;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__23639){var map__23640 = p__23639;var map__23640__$1 = ((cljs.core.seq_QMARK_.call(null,map__23640))?cljs.core.apply.call(null,cljs.core.hash_map,map__23640):map__23640);var args = map__23640__$1;var id = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__23641_23673 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__23641_23673.done(((function (G__23641_23673,ret,map__23640,map__23640__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__23641_23673,ret,map__23640,map__23640__$1,args,id){
return (function (p1__23638_SHARP_){var obj23643 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__23638_SHARP_ + (1)))+".jpg"))};return obj23643;
});})(filtered,evtId,evt,G__23641_23673,ret,map__23640,map__23640__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__23641_23673,ret,map__23640,map__23640__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__23641_23673,ret,map__23640,map__23640__$1,args,id){
return (function (state_23663){var state_val_23664 = (state_23663[(1)]);if((state_val_23664 === (2)))
{var inst_23660 = (state_23663[(2)]);var inst_23661 = cljs.core.async.close_BANG_.call(null,ret);var state_23663__$1 = (function (){var statearr_23665 = state_23663;(statearr_23665[(7)] = inst_23660);
return statearr_23665;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23663__$1,inst_23661);
} else
{if((state_val_23664 === (1)))
{var inst_23646 = cljs.core.nth.call(null,filtered,idx);var inst_23647 = cljs.core.first.call(null,inst_23646);var inst_23648 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23647));var inst_23649 = cljs.core.nth.call(null,filtered,idx2);var inst_23650 = cljs.core.first.call(null,inst_23649);var inst_23651 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23650));var inst_23652 = (evt["Title"]);var inst_23653 = (evt["Date"]);var inst_23654 = (evt["Content"]);var inst_23655 = (evt["Form"]);var inst_23656 = {"prev_href":inst_23648,"next_href":inst_23651,"title":inst_23652,"date":inst_23653,"sideList":photos,"content":inst_23654,"form":inst_23655};var inst_23657 = [null,inst_23656];var inst_23658 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23657,null));var state_23663__$1 = state_23663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23663__$1,(2),ret,inst_23658);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__23641_23673,ret,map__23640,map__23640__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__23641_23673,ret,map__23640,map__23640__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23669 = [null,null,null,null,null,null,null,null];(statearr_23669[(0)] = state_machine__6178__auto__);
(statearr_23669[(1)] = (1));
return statearr_23669;
});
var state_machine__6178__auto____1 = (function (state_23663){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23663);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23670){if((e23670 instanceof Object))
{var ex__6181__auto__ = e23670;var statearr_23671_23674 = state_23663;(statearr_23671_23674[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23663);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23675 = state_23663;
state_23663 = G__23675;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23663){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__23641_23673,ret,map__23640,map__23640__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23672 = f__6193__auto__.call(null);(statearr_23672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__23641_23673,ret,map__23640,map__23640__$1,args,id))
);
return c__6192__auto__;
});})(G__23641_23673,ret,map__23640,map__23640__$1,args,id))
);
G__23641_23673.fail(((function (G__23641_23673,ret,map__23640,map__23640__$1,args,id){
return (function (err){return console.log(err);
});})(G__23641_23673,ret,map__23640,map__23640__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
