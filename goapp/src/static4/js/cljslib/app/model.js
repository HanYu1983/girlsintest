// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28935_SHARP_){return cljs.core._EQ_.call(null,view,p1__28935_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28936_SHARP_){return cljs.core._EQ_.call(null,view,p1__28936_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28937_SHARP_){return cljs.core._EQ_.call(null,view,p1__28937_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28938_SHARP_){return cljs.core._EQ_.call(null,view,p1__28938_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28939_SHARP_){return cljs.core._EQ_.call(null,view,p1__28939_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28940_SHARP_){return cljs.core._EQ_.call(null,view,p1__28940_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28941_SHARP_){return cljs.core._EQ_.call(null,view,p1__28941_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28942_SHARP_){return cljs.core._EQ_.call(null,view,p1__28942_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28943_SHARP_){return cljs.core._EQ_.call(null,view,p1__28943_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__28947){var vec__28948 = p__28947;var model = cljs.core.nth.call(null,vec__28948,(0),null);var detail = cljs.core.nth.call(null,vec__28948,(1),null);var G__28949 = (new Date(detail.Date));G__28949.getTime();
return G__28949;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__28952){var vec__28953 = p__28952;var model = cljs.core.nth.call(null,vec__28953,(0),null);var detail = cljs.core.nth.call(null,vec__28953,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__28956){var vec__28957 = p__28956;var model = cljs.core.nth.call(null,vec__28957,(0),null);var detail = cljs.core.nth.call(null,vec__28957,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__28999){var map__29000 = p__28999;var map__29000__$1 = ((cljs.core.seq_QMARK_.call(null,map__29000))?cljs.core.apply.call(null,cljs.core.hash_map,map__29000):map__29000);var args = map__29000__$1;var page = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__29001_29040 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__29001_29040.done(((function (G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey){
return (function (p__29002){var vec__29003 = p__29002;var model = cljs.core.nth.call(null,vec__29003,(0),null);var detail = cljs.core.nth.call(null,vec__29003,(1),null);var obj29005 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj29005;
});})(modelCountPerPage,filtered,totalPage,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey))
;var dto = (function (){var obj29007 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj29007;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey){
return (function (state_29014){var state_val_29015 = (state_29014[(1)]);if((state_val_29015 === (2)))
{var inst_29011 = (state_29014[(2)]);var inst_29012 = cljs.core.async.close_BANG_.call(null,ret);var state_29014__$1 = (function (){var statearr_29016 = state_29014;(statearr_29016[(7)] = inst_29011);
return statearr_29016;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29014__$1,inst_29012);
} else
{if((state_val_29015 === (1)))
{var inst_29008 = [null,dto];var inst_29009 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29008,null));var state_29014__$1 = state_29014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29014__$1,(2),ret,inst_29009);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29020 = [null,null,null,null,null,null,null,null];(statearr_29020[(0)] = state_machine__6178__auto__);
(statearr_29020[(1)] = (1));
return statearr_29020;
});
var state_machine__6178__auto____1 = (function (state_29014){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29014);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29021){if((e29021 instanceof Object))
{var ex__6181__auto__ = e29021;var statearr_29022_29041 = state_29014;(statearr_29022_29041[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29042 = state_29014;
state_29014 = G__29042;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29014){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_29023 = f__6193__auto__.call(null);(statearr_29023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey))
);
G__29001_29040.fail(((function (G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey){
return (function (state_29030){var state_val_29031 = (state_29030[(1)]);if((state_val_29031 === (2)))
{var inst_29027 = (state_29030[(2)]);var inst_29028 = cljs.core.async.close_BANG_.call(null,ret);var state_29030__$1 = (function (){var statearr_29032 = state_29030;(statearr_29032[(7)] = inst_29027);
return statearr_29032;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29030__$1,inst_29028);
} else
{if((state_val_29031 === (1)))
{var inst_29024 = [err,null];var inst_29025 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29024,null));var state_29030__$1 = state_29030;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29030__$1,(2),ret,inst_29025);
} else
{return null;
}
}
});})(c__6192__auto__,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29036 = [null,null,null,null,null,null,null,null];(statearr_29036[(0)] = state_machine__6178__auto__);
(statearr_29036[(1)] = (1));
return statearr_29036;
});
var state_machine__6178__auto____1 = (function (state_29030){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29030);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29037){if((e29037 instanceof Object))
{var ex__6181__auto__ = e29037;var statearr_29038_29043 = state_29030;(statearr_29038_29043[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29030);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29044 = state_29030;
state_29030 = G__29044;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29030){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_29039 = f__6193__auto__.call(null);(statearr_29039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__29001_29040,configType,ret,map__29000,map__29000__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__29102){var map__29103 = p__29102;var map__29103__$1 = ((cljs.core.seq_QMARK_.call(null,map__29103))?cljs.core.apply.call(null,cljs.core.hash_map,map__29103):map__29103);var args = map__29103__$1;var id = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__29104_29159 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__29104_29159.done(((function (G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function (p__29105){var vec__29106 = p__29105;var key__$1 = cljs.core.nth.call(null,vec__29106,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__29106,(1),null);var obj29108 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj29108;
});})(dir,detail,filtered,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function iter__29109(s__29110){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function (){var s__29110__$1 = s__29110;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29110__$1);if(temp__4126__auto__)
{var s__29110__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29110__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__29110__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__29112 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__29111 = (0);while(true){
if((i__29111 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__29111);cljs.core.chunk_append.call(null,b__29112,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__29160 = (i__29111 + (1));
i__29111 = G__29160;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29112),iter__29109.call(null,cljs.core.chunk_rest.call(null,s__29110__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29112),null);
}
} else
{var idx = cljs.core.first.call(null,s__29110__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__29109.call(null,cljs.core.rest.call(null,s__29110__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function iter__29113(s__29114){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function (){var s__29114__$1 = s__29114;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29114__$1);if(temp__4126__auto__)
{var s__29114__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29114__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__29114__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__29116 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__29115 = (0);while(true){
if((i__29115 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__29115);cljs.core.chunk_append.call(null,b__29116,(function (){var obj29122 = {"id":url,"url":ServeFn.call(null,url)};return obj29122;
})());
{
var G__29161 = (i__29115 + (1));
i__29115 = G__29161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29116),iter__29113.call(null,cljs.core.chunk_rest.call(null,s__29114__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29116),null);
}
} else
{var url = cljs.core.first.call(null,s__29114__$2);return cljs.core.cons.call(null,(function (){var obj29124 = {"id":url,"url":ServeFn.call(null,url)};return obj29124;
})(),iter__29113.call(null,cljs.core.rest.call(null,s__29114__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
;var dto = (function (){var obj29126 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj29126;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function (state_29133){var state_val_29134 = (state_29133[(1)]);if((state_val_29134 === (2)))
{var inst_29130 = (state_29133[(2)]);var inst_29131 = cljs.core.async.close_BANG_.call(null,ret);var state_29133__$1 = (function (){var statearr_29135 = state_29133;(statearr_29135[(7)] = inst_29130);
return statearr_29135;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29133__$1,inst_29131);
} else
{if((state_val_29134 === (1)))
{var inst_29127 = [null,dto];var inst_29128 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29127,null));var state_29133__$1 = state_29133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29133__$1,(2),ret,inst_29128);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29139 = [null,null,null,null,null,null,null,null];(statearr_29139[(0)] = state_machine__6178__auto__);
(statearr_29139[(1)] = (1));
return statearr_29139;
});
var state_machine__6178__auto____1 = (function (state_29133){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29133);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29140){if((e29140 instanceof Object))
{var ex__6181__auto__ = e29140;var statearr_29141_29162 = state_29133;(statearr_29141_29162[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29133);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29163 = state_29133;
state_29133 = G__29163;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29133){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_29142 = f__6193__auto__.call(null);(statearr_29142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
);
return c__6192__auto__;
});})(G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
);
G__29104_29159.fail(((function (G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function (state_29149){var state_val_29150 = (state_29149[(1)]);if((state_val_29150 === (2)))
{var inst_29146 = (state_29149[(2)]);var inst_29147 = cljs.core.async.close_BANG_.call(null,ret);var state_29149__$1 = (function (){var statearr_29151 = state_29149;(statearr_29151[(7)] = inst_29146);
return statearr_29151;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29149__$1,inst_29147);
} else
{if((state_val_29150 === (1)))
{var inst_29143 = [err,null];var inst_29144 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29143,null));var state_29149__$1 = state_29149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29149__$1,(2),ret,inst_29144);
} else
{return null;
}
}
});})(c__6192__auto__,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29155 = [null,null,null,null,null,null,null,null];(statearr_29155[(0)] = state_machine__6178__auto__);
(statearr_29155[(1)] = (1));
return statearr_29155;
});
var state_machine__6178__auto____1 = (function (state_29149){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29149);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29156){if((e29156 instanceof Object))
{var ex__6181__auto__ = e29156;var statearr_29157_29164 = state_29149;(statearr_29157_29164[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29165 = state_29149;
state_29149 = G__29165;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29149){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_29158 = f__6193__auto__.call(null);(statearr_29158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
);
return c__6192__auto__;
});})(G__29104_29159,ret,configType,map__29103,map__29103__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__29167_29204 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__29167_29204.done(((function (G__29167_29204,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__29167_29204,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__29167_29204,ret){
return (function (state_29178){var state_val_29179 = (state_29178[(1)]);if((state_val_29179 === (2)))
{var inst_29175 = (state_29178[(2)]);var inst_29176 = cljs.core.async.close_BANG_.call(null,ret);var state_29178__$1 = (function (){var statearr_29180 = state_29178;(statearr_29180[(7)] = inst_29175);
return statearr_29180;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29178__$1,inst_29176);
} else
{if((state_val_29179 === (1)))
{var inst_29170 = detail.ModelKey;var inst_29171 = {"modelKey":inst_29170};var inst_29172 = [null,inst_29171];var inst_29173 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29172,null));var state_29178__$1 = state_29178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29178__$1,(2),ret,inst_29173);
} else
{return null;
}
}
});})(c__6192__auto__,G__29167_29204,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__29167_29204,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29184 = [null,null,null,null,null,null,null,null];(statearr_29184[(0)] = state_machine__6178__auto__);
(statearr_29184[(1)] = (1));
return statearr_29184;
});
var state_machine__6178__auto____1 = (function (state_29178){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29178);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29185){if((e29185 instanceof Object))
{var ex__6181__auto__ = e29185;var statearr_29186_29205 = state_29178;(statearr_29186_29205[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29178);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29206 = state_29178;
state_29178 = G__29206;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29178){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__29167_29204,ret))
})();var state__6194__auto__ = (function (){var statearr_29187 = f__6193__auto__.call(null);(statearr_29187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__29167_29204,ret))
);
return c__6192__auto__;
});})(G__29167_29204,ret))
);
G__29167_29204.fail(((function (G__29167_29204,ret){
return (function (p1__29166_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__29167_29204,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__29167_29204,ret){
return (function (state_29194){var state_val_29195 = (state_29194[(1)]);if((state_val_29195 === (2)))
{var inst_29191 = (state_29194[(2)]);var inst_29192 = cljs.core.async.close_BANG_.call(null,ret);var state_29194__$1 = (function (){var statearr_29196 = state_29194;(statearr_29196[(7)] = inst_29191);
return statearr_29196;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29194__$1,inst_29192);
} else
{if((state_val_29195 === (1)))
{var inst_29188 = [p1__29166_SHARP_,null];var inst_29189 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29188,null));var state_29194__$1 = state_29194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29194__$1,(2),ret,inst_29189);
} else
{return null;
}
}
});})(c__6192__auto__,G__29167_29204,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__29167_29204,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29200 = [null,null,null,null,null,null,null,null];(statearr_29200[(0)] = state_machine__6178__auto__);
(statearr_29200[(1)] = (1));
return statearr_29200;
});
var state_machine__6178__auto____1 = (function (state_29194){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29194);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29201){if((e29201 instanceof Object))
{var ex__6181__auto__ = e29201;var statearr_29202_29207 = state_29194;(statearr_29202_29207[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29194);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29208 = state_29194;
state_29194 = G__29208;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29194){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__29167_29204,ret))
})();var state__6194__auto__ = (function (){var statearr_29203 = f__6193__auto__.call(null);(statearr_29203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__29167_29204,ret))
);
return c__6192__auto__;
});})(G__29167_29204,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__29209){var map__29210 = p__29209;var map__29210__$1 = ((cljs.core.seq_QMARK_.call(null,map__29210))?cljs.core.apply.call(null,cljs.core.hash_map,map__29210):map__29210);var args = map__29210__$1;var url = cljs.core.get.call(null,map__29210__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___29231 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___29231,ret,map__29210,map__29210__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___29231,ret,map__29210,map__29210__$1,args,url){
return (function (state_29221){var state_val_29222 = (state_29221[(1)]);if((state_val_29222 === (2)))
{var inst_29218 = (state_29221[(2)]);var inst_29219 = cljs.core.async.close_BANG_.call(null,ret);var state_29221__$1 = (function (){var statearr_29223 = state_29221;(statearr_29223[(7)] = inst_29218);
return statearr_29223;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29221__$1,inst_29219);
} else
{if((state_val_29222 === (1)))
{var inst_29213 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_29214 = {"url":inst_29213};var inst_29215 = [null,inst_29214];var inst_29216 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29215,null));var state_29221__$1 = state_29221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29221__$1,(2),ret,inst_29216);
} else
{return null;
}
}
});})(c__6192__auto___29231,ret,map__29210,map__29210__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___29231,ret,map__29210,map__29210__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29227 = [null,null,null,null,null,null,null,null];(statearr_29227[(0)] = state_machine__6178__auto__);
(statearr_29227[(1)] = (1));
return statearr_29227;
});
var state_machine__6178__auto____1 = (function (state_29221){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29221);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29228){if((e29228 instanceof Object))
{var ex__6181__auto__ = e29228;var statearr_29229_29232 = state_29221;(statearr_29229_29232[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29221);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29233 = state_29221;
state_29221 = G__29233;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29221){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___29231,ret,map__29210,map__29210__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_29230 = f__6193__auto__.call(null);(statearr_29230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___29231);
return statearr_29230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___29231,ret,map__29210,map__29210__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__29234){var map__29235 = p__29234;var map__29235__$1 = ((cljs.core.seq_QMARK_.call(null,map__29235))?cljs.core.apply.call(null,cljs.core.hash_map,map__29235):map__29235);var args = map__29235__$1;var id = cljs.core.get.call(null,map__29235__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___29252 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___29252,ret,map__29235,map__29235__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___29252,ret,map__29235,map__29235__$1,args,id){
return (function (state_29242){var state_val_29243 = (state_29242[(1)]);if((state_val_29243 === (2)))
{var inst_29239 = (state_29242[(2)]);var inst_29240 = cljs.core.async.close_BANG_.call(null,ret);var state_29242__$1 = (function (){var statearr_29244 = state_29242;(statearr_29244[(7)] = inst_29239);
return statearr_29244;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29242__$1,inst_29240);
} else
{if((state_val_29243 === (1)))
{var inst_29236 = [null,null];var inst_29237 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29236,null));var state_29242__$1 = state_29242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29242__$1,(2),ret,inst_29237);
} else
{return null;
}
}
});})(c__6192__auto___29252,ret,map__29235,map__29235__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___29252,ret,map__29235,map__29235__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29248 = [null,null,null,null,null,null,null,null];(statearr_29248[(0)] = state_machine__6178__auto__);
(statearr_29248[(1)] = (1));
return statearr_29248;
});
var state_machine__6178__auto____1 = (function (state_29242){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29242);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29249){if((e29249 instanceof Object))
{var ex__6181__auto__ = e29249;var statearr_29250_29253 = state_29242;(statearr_29250_29253[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29254 = state_29242;
state_29242 = G__29254;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29242){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___29252,ret,map__29235,map__29235__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_29251 = f__6193__auto__.call(null);(statearr_29251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___29252);
return statearr_29251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___29252,ret,map__29235,map__29235__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__29255 = cljs.core.rest.call(null,list);
var G__29256 = id;
var G__29257 = (start + (1));
list = G__29255;
id = G__29256;
start = G__29257;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__29259){var map__29260 = p__29259;var map__29260__$1 = ((cljs.core.seq_QMARK_.call(null,map__29260))?cljs.core.apply.call(null,cljs.core.hash_map,map__29260):map__29260);var args = map__29260__$1;var id = cljs.core.get.call(null,map__29260__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__29261_29293 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__29261_29293.done(((function (G__29261_29293,ret,map__29260,map__29260__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__29261_29293,ret,map__29260,map__29260__$1,args,id){
return (function (p1__29258_SHARP_){var obj29263 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__29258_SHARP_ + (1)))+".jpg"))};return obj29263;
});})(filtered,evtId,evt,G__29261_29293,ret,map__29260,map__29260__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29261_29293,ret,map__29260,map__29260__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29261_29293,ret,map__29260,map__29260__$1,args,id){
return (function (state_29283){var state_val_29284 = (state_29283[(1)]);if((state_val_29284 === (2)))
{var inst_29280 = (state_29283[(2)]);var inst_29281 = cljs.core.async.close_BANG_.call(null,ret);var state_29283__$1 = (function (){var statearr_29285 = state_29283;(statearr_29285[(7)] = inst_29280);
return statearr_29285;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29283__$1,inst_29281);
} else
{if((state_val_29284 === (1)))
{var inst_29266 = cljs.core.nth.call(null,filtered,idx);var inst_29267 = cljs.core.first.call(null,inst_29266);var inst_29268 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29267));var inst_29269 = cljs.core.nth.call(null,filtered,idx2);var inst_29270 = cljs.core.first.call(null,inst_29269);var inst_29271 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29270));var inst_29272 = (evt["Title"]);var inst_29273 = (evt["Date"]);var inst_29274 = (evt["Content"]);var inst_29275 = (evt["Form"]);var inst_29276 = {"prev_href":inst_29268,"next_href":inst_29271,"title":inst_29272,"date":inst_29273,"sideList":photos,"content":inst_29274,"form":inst_29275};var inst_29277 = [null,inst_29276];var inst_29278 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29277,null));var state_29283__$1 = state_29283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29283__$1,(2),ret,inst_29278);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29261_29293,ret,map__29260,map__29260__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29261_29293,ret,map__29260,map__29260__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29289 = [null,null,null,null,null,null,null,null];(statearr_29289[(0)] = state_machine__6178__auto__);
(statearr_29289[(1)] = (1));
return statearr_29289;
});
var state_machine__6178__auto____1 = (function (state_29283){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29290){if((e29290 instanceof Object))
{var ex__6181__auto__ = e29290;var statearr_29291_29294 = state_29283;(statearr_29291_29294[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29295 = state_29283;
state_29283 = G__29295;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29283){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29261_29293,ret,map__29260,map__29260__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_29292 = f__6193__auto__.call(null);(statearr_29292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29261_29293,ret,map__29260,map__29260__$1,args,id))
);
return c__6192__auto__;
});})(G__29261_29293,ret,map__29260,map__29260__$1,args,id))
);
G__29261_29293.fail(((function (G__29261_29293,ret,map__29260,map__29260__$1,args,id){
return (function (err){return console.log(err);
});})(G__29261_29293,ret,map__29260,map__29260__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
