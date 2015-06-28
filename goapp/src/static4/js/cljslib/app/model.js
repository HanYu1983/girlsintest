// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15944_SHARP_){return cljs.core._EQ_.call(null,view,p1__15944_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15945_SHARP_){return cljs.core._EQ_.call(null,view,p1__15945_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15946_SHARP_){return cljs.core._EQ_.call(null,view,p1__15946_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15947_SHARP_){return cljs.core._EQ_.call(null,view,p1__15947_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15948_SHARP_){return cljs.core._EQ_.call(null,view,p1__15948_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15949_SHARP_){return cljs.core._EQ_.call(null,view,p1__15949_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15950_SHARP_){return cljs.core._EQ_.call(null,view,p1__15950_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15951_SHARP_){return cljs.core._EQ_.call(null,view,p1__15951_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15952_SHARP_){return cljs.core._EQ_.call(null,view,p1__15952_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__15956){var vec__15957 = p__15956;var model = cljs.core.nth.call(null,vec__15957,(0),null);var detail = cljs.core.nth.call(null,vec__15957,(1),null);var G__15958 = (new Date(detail.Date));G__15958.getTime();
return G__15958;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__15961){var vec__15962 = p__15961;var model = cljs.core.nth.call(null,vec__15962,(0),null);var detail = cljs.core.nth.call(null,vec__15962,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__15965){var vec__15966 = p__15965;var model = cljs.core.nth.call(null,vec__15966,(0),null);var detail = cljs.core.nth.call(null,vec__15966,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__16008){var map__16009 = p__16008;var map__16009__$1 = ((cljs.core.seq_QMARK_.call(null,map__16009))?cljs.core.apply.call(null,cljs.core.hash_map,map__16009):map__16009);var args = map__16009__$1;var page = cljs.core.get.call(null,map__16009__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__16009__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__16010_16049 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__16010_16049.done(((function (G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey){
return (function (p__16011){var vec__16012 = p__16011;var model = cljs.core.nth.call(null,vec__16012,(0),null);var detail = cljs.core.nth.call(null,vec__16012,(1),null);var obj16014 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj16014;
});})(modelCountPerPage,filtered,totalPage,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey))
;var dto = (function (){var obj16016 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj16016;
})();var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey){
return (function (state_16023){var state_val_16024 = (state_16023[(1)]);if((state_val_16024 === (2)))
{var inst_16020 = (state_16023[(2)]);var inst_16021 = cljs.core.async.close_BANG_.call(null,ret);var state_16023__$1 = (function (){var statearr_16025 = state_16023;(statearr_16025[(7)] = inst_16020);
return statearr_16025;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16023__$1,inst_16021);
} else
{if((state_val_16024 === (1)))
{var inst_16017 = [null,dto];var inst_16018 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16017,null));var state_16023__$1 = state_16023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16023__$1,(2),ret,inst_16018);
} else
{return null;
}
}
});})(c__6234__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey))
;return ((function (switch__6178__auto__,c__6234__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_16029 = [null,null,null,null,null,null,null,null];(statearr_16029[(0)] = state_machine__6179__auto__);
(statearr_16029[(1)] = (1));
return statearr_16029;
});
var state_machine__6179__auto____1 = (function (state_16023){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_16023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e16030){if((e16030 instanceof Object))
{var ex__6182__auto__ = e16030;var statearr_16031_16050 = state_16023;(statearr_16031_16050[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16051 = state_16023;
state_16023 = G__16051;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_16023){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_16023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey))
})();var state__6236__auto__ = (function (){var statearr_16032 = f__6235__auto__.call(null);(statearr_16032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_16032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey))
);
return c__6234__auto__;
});})(G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey))
);
G__16010_16049.fail(((function (G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey){
return (function (err){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey){
return (function (state_16039){var state_val_16040 = (state_16039[(1)]);if((state_val_16040 === (2)))
{var inst_16036 = (state_16039[(2)]);var inst_16037 = cljs.core.async.close_BANG_.call(null,ret);var state_16039__$1 = (function (){var statearr_16041 = state_16039;(statearr_16041[(7)] = inst_16036);
return statearr_16041;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16039__$1,inst_16037);
} else
{if((state_val_16040 === (1)))
{var inst_16033 = [err,null];var inst_16034 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16033,null));var state_16039__$1 = state_16039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16039__$1,(2),ret,inst_16034);
} else
{return null;
}
}
});})(c__6234__auto__,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey))
;return ((function (switch__6178__auto__,c__6234__auto__,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_16045 = [null,null,null,null,null,null,null,null];(statearr_16045[(0)] = state_machine__6179__auto__);
(statearr_16045[(1)] = (1));
return statearr_16045;
});
var state_machine__6179__auto____1 = (function (state_16039){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_16039);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e16046){if((e16046 instanceof Object))
{var ex__6182__auto__ = e16046;var statearr_16047_16052 = state_16039;(statearr_16047_16052[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16039);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16046;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16053 = state_16039;
state_16039 = G__16053;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_16039){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_16039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey))
})();var state__6236__auto__ = (function (){var statearr_16048 = f__6235__auto__.call(null);(statearr_16048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_16048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey))
);
return c__6234__auto__;
});})(G__16010_16049,configType,ret,map__16009,map__16009__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__16111){var map__16112 = p__16111;var map__16112__$1 = ((cljs.core.seq_QMARK_.call(null,map__16112))?cljs.core.apply.call(null,cljs.core.hash_map,map__16112):map__16112);var args = map__16112__$1;var id = cljs.core.get.call(null,map__16112__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__16113_16168 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__16113_16168.done(((function (G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function (p__16114){var vec__16115 = p__16114;var key__$1 = cljs.core.nth.call(null,vec__16115,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__16115,(1),null);var obj16117 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj16117;
});})(dir,detail,filtered,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function iter__16118(s__16119){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function (){var s__16119__$1 = s__16119;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16119__$1);if(temp__4126__auto__)
{var s__16119__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16119__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16119__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16121 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16120 = (0);while(true){
if((i__16120 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__16120);cljs.core.chunk_append.call(null,b__16121,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__16169 = (i__16120 + (1));
i__16120 = G__16169;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16121),iter__16118.call(null,cljs.core.chunk_rest.call(null,s__16119__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16121),null);
}
} else
{var idx = cljs.core.first.call(null,s__16119__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__16118.call(null,cljs.core.rest.call(null,s__16119__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function iter__16122(s__16123){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function (){var s__16123__$1 = s__16123;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16123__$1);if(temp__4126__auto__)
{var s__16123__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16123__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16123__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16125 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16124 = (0);while(true){
if((i__16124 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__16124);cljs.core.chunk_append.call(null,b__16125,(function (){var obj16131 = {"id":url,"url":ServeFn.call(null,url)};return obj16131;
})());
{
var G__16170 = (i__16124 + (1));
i__16124 = G__16170;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16125),iter__16122.call(null,cljs.core.chunk_rest.call(null,s__16123__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16125),null);
}
} else
{var url = cljs.core.first.call(null,s__16123__$2);return cljs.core.cons.call(null,(function (){var obj16133 = {"id":url,"url":ServeFn.call(null,url)};return obj16133;
})(),iter__16122.call(null,cljs.core.rest.call(null,s__16123__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
;var dto = (function (){var obj16135 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj16135;
})();var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function (state_16142){var state_val_16143 = (state_16142[(1)]);if((state_val_16143 === (2)))
{var inst_16139 = (state_16142[(2)]);var inst_16140 = cljs.core.async.close_BANG_.call(null,ret);var state_16142__$1 = (function (){var statearr_16144 = state_16142;(statearr_16144[(7)] = inst_16139);
return statearr_16144;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16142__$1,inst_16140);
} else
{if((state_val_16143 === (1)))
{var inst_16136 = [null,dto];var inst_16137 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16136,null));var state_16142__$1 = state_16142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16142__$1,(2),ret,inst_16137);
} else
{return null;
}
}
});})(c__6234__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
;return ((function (switch__6178__auto__,c__6234__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_16148 = [null,null,null,null,null,null,null,null];(statearr_16148[(0)] = state_machine__6179__auto__);
(statearr_16148[(1)] = (1));
return statearr_16148;
});
var state_machine__6179__auto____1 = (function (state_16142){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_16142);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e16149){if((e16149 instanceof Object))
{var ex__6182__auto__ = e16149;var statearr_16150_16171 = state_16142;(statearr_16150_16171[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16142);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16172 = state_16142;
state_16142 = G__16172;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_16142){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_16142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
})();var state__6236__auto__ = (function (){var statearr_16151 = f__6235__auto__.call(null);(statearr_16151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_16151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
);
return c__6234__auto__;
});})(G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
);
G__16113_16168.fail(((function (G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function (err){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function (state_16158){var state_val_16159 = (state_16158[(1)]);if((state_val_16159 === (2)))
{var inst_16155 = (state_16158[(2)]);var inst_16156 = cljs.core.async.close_BANG_.call(null,ret);var state_16158__$1 = (function (){var statearr_16160 = state_16158;(statearr_16160[(7)] = inst_16155);
return statearr_16160;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16158__$1,inst_16156);
} else
{if((state_val_16159 === (1)))
{var inst_16152 = [err,null];var inst_16153 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16152,null));var state_16158__$1 = state_16158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16158__$1,(2),ret,inst_16153);
} else
{return null;
}
}
});})(c__6234__auto__,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
;return ((function (switch__6178__auto__,c__6234__auto__,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_16164 = [null,null,null,null,null,null,null,null];(statearr_16164[(0)] = state_machine__6179__auto__);
(statearr_16164[(1)] = (1));
return statearr_16164;
});
var state_machine__6179__auto____1 = (function (state_16158){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_16158);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e16165){if((e16165 instanceof Object))
{var ex__6182__auto__ = e16165;var statearr_16166_16173 = state_16158;(statearr_16166_16173[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16158);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16165;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16174 = state_16158;
state_16158 = G__16174;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_16158){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_16158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
})();var state__6236__auto__ = (function (){var statearr_16167 = f__6235__auto__.call(null);(statearr_16167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_16167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
);
return c__6234__auto__;
});})(G__16113_16168,ret,configType,map__16112,map__16112__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__16176_16215 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__16176_16215.done(((function (G__16176_16215,ret){
return (function (where,modelKey,detail){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,G__16176_16215,ret){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,G__16176_16215,ret){
return (function (state_16189){var state_val_16190 = (state_16189[(1)]);if((state_val_16190 === (2)))
{var inst_16186 = (state_16189[(2)]);var inst_16187 = cljs.core.async.close_BANG_.call(null,ret);var state_16189__$1 = (function (){var statearr_16191 = state_16189;(statearr_16191[(7)] = inst_16186);
return statearr_16191;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16189__$1,inst_16187);
} else
{if((state_val_16190 === (1)))
{var inst_16179 = detail.ModelKey;var inst_16180 = clojure.string.capitalize.call(null,where);var inst_16181 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16180)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_16182 = {"modelKey":inst_16179,"moreUrl":inst_16181};var inst_16183 = [null,inst_16182];var inst_16184 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16183,null));var state_16189__$1 = state_16189;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16189__$1,(2),ret,inst_16184);
} else
{return null;
}
}
});})(c__6234__auto__,G__16176_16215,ret))
;return ((function (switch__6178__auto__,c__6234__auto__,G__16176_16215,ret){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_16195 = [null,null,null,null,null,null,null,null];(statearr_16195[(0)] = state_machine__6179__auto__);
(statearr_16195[(1)] = (1));
return statearr_16195;
});
var state_machine__6179__auto____1 = (function (state_16189){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_16189);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e16196){if((e16196 instanceof Object))
{var ex__6182__auto__ = e16196;var statearr_16197_16216 = state_16189;(statearr_16197_16216[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16189);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16217 = state_16189;
state_16189 = G__16217;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_16189){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_16189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,G__16176_16215,ret))
})();var state__6236__auto__ = (function (){var statearr_16198 = f__6235__auto__.call(null);(statearr_16198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_16198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,G__16176_16215,ret))
);
return c__6234__auto__;
});})(G__16176_16215,ret))
);
G__16176_16215.fail(((function (G__16176_16215,ret){
return (function (p1__16175_SHARP_){var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,G__16176_16215,ret){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,G__16176_16215,ret){
return (function (state_16205){var state_val_16206 = (state_16205[(1)]);if((state_val_16206 === (2)))
{var inst_16202 = (state_16205[(2)]);var inst_16203 = cljs.core.async.close_BANG_.call(null,ret);var state_16205__$1 = (function (){var statearr_16207 = state_16205;(statearr_16207[(7)] = inst_16202);
return statearr_16207;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16205__$1,inst_16203);
} else
{if((state_val_16206 === (1)))
{var inst_16199 = [p1__16175_SHARP_,null];var inst_16200 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16199,null));var state_16205__$1 = state_16205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16205__$1,(2),ret,inst_16200);
} else
{return null;
}
}
});})(c__6234__auto__,G__16176_16215,ret))
;return ((function (switch__6178__auto__,c__6234__auto__,G__16176_16215,ret){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_16211 = [null,null,null,null,null,null,null,null];(statearr_16211[(0)] = state_machine__6179__auto__);
(statearr_16211[(1)] = (1));
return statearr_16211;
});
var state_machine__6179__auto____1 = (function (state_16205){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_16205);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e16212){if((e16212 instanceof Object))
{var ex__6182__auto__ = e16212;var statearr_16213_16218 = state_16205;(statearr_16213_16218[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16219 = state_16205;
state_16205 = G__16219;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_16205){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_16205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,G__16176_16215,ret))
})();var state__6236__auto__ = (function (){var statearr_16214 = f__6235__auto__.call(null);(statearr_16214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_16214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,G__16176_16215,ret))
);
return c__6234__auto__;
});})(G__16176_16215,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__16220){var map__16221 = p__16220;var map__16221__$1 = ((cljs.core.seq_QMARK_.call(null,map__16221))?cljs.core.apply.call(null,cljs.core.hash_map,map__16221):map__16221);var args = map__16221__$1;var url = cljs.core.get.call(null,map__16221__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6234__auto___16242 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto___16242,ret,map__16221,map__16221__$1,args,url){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto___16242,ret,map__16221,map__16221__$1,args,url){
return (function (state_16232){var state_val_16233 = (state_16232[(1)]);if((state_val_16233 === (2)))
{var inst_16229 = (state_16232[(2)]);var inst_16230 = cljs.core.async.close_BANG_.call(null,ret);var state_16232__$1 = (function (){var statearr_16234 = state_16232;(statearr_16234[(7)] = inst_16229);
return statearr_16234;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16232__$1,inst_16230);
} else
{if((state_val_16233 === (1)))
{var inst_16224 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_16225 = {"url":inst_16224};var inst_16226 = [null,inst_16225];var inst_16227 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16226,null));var state_16232__$1 = state_16232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16232__$1,(2),ret,inst_16227);
} else
{return null;
}
}
});})(c__6234__auto___16242,ret,map__16221,map__16221__$1,args,url))
;return ((function (switch__6178__auto__,c__6234__auto___16242,ret,map__16221,map__16221__$1,args,url){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_16238 = [null,null,null,null,null,null,null,null];(statearr_16238[(0)] = state_machine__6179__auto__);
(statearr_16238[(1)] = (1));
return statearr_16238;
});
var state_machine__6179__auto____1 = (function (state_16232){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_16232);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e16239){if((e16239 instanceof Object))
{var ex__6182__auto__ = e16239;var statearr_16240_16243 = state_16232;(statearr_16240_16243[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16244 = state_16232;
state_16232 = G__16244;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_16232){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_16232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto___16242,ret,map__16221,map__16221__$1,args,url))
})();var state__6236__auto__ = (function (){var statearr_16241 = f__6235__auto__.call(null);(statearr_16241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto___16242);
return statearr_16241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto___16242,ret,map__16221,map__16221__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__16245){var map__16246 = p__16245;var map__16246__$1 = ((cljs.core.seq_QMARK_.call(null,map__16246))?cljs.core.apply.call(null,cljs.core.hash_map,map__16246):map__16246);var args = map__16246__$1;var id = cljs.core.get.call(null,map__16246__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6234__auto___16263 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto___16263,ret,map__16246,map__16246__$1,args,id){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto___16263,ret,map__16246,map__16246__$1,args,id){
return (function (state_16253){var state_val_16254 = (state_16253[(1)]);if((state_val_16254 === (2)))
{var inst_16250 = (state_16253[(2)]);var inst_16251 = cljs.core.async.close_BANG_.call(null,ret);var state_16253__$1 = (function (){var statearr_16255 = state_16253;(statearr_16255[(7)] = inst_16250);
return statearr_16255;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16253__$1,inst_16251);
} else
{if((state_val_16254 === (1)))
{var inst_16247 = [null,null];var inst_16248 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16247,null));var state_16253__$1 = state_16253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16253__$1,(2),ret,inst_16248);
} else
{return null;
}
}
});})(c__6234__auto___16263,ret,map__16246,map__16246__$1,args,id))
;return ((function (switch__6178__auto__,c__6234__auto___16263,ret,map__16246,map__16246__$1,args,id){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_16259 = [null,null,null,null,null,null,null,null];(statearr_16259[(0)] = state_machine__6179__auto__);
(statearr_16259[(1)] = (1));
return statearr_16259;
});
var state_machine__6179__auto____1 = (function (state_16253){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_16253);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e16260){if((e16260 instanceof Object))
{var ex__6182__auto__ = e16260;var statearr_16261_16264 = state_16253;(statearr_16261_16264[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16253);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16260;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16265 = state_16253;
state_16253 = G__16265;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_16253){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_16253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto___16263,ret,map__16246,map__16246__$1,args,id))
})();var state__6236__auto__ = (function (){var statearr_16262 = f__6235__auto__.call(null);(statearr_16262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto___16263);
return statearr_16262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto___16263,ret,map__16246,map__16246__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__16266 = cljs.core.rest.call(null,list);
var G__16267 = id;
var G__16268 = (start + (1));
list = G__16266;
id = G__16267;
start = G__16268;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__16270){var map__16271 = p__16270;var map__16271__$1 = ((cljs.core.seq_QMARK_.call(null,map__16271))?cljs.core.apply.call(null,cljs.core.hash_map,map__16271):map__16271);var args = map__16271__$1;var id = cljs.core.get.call(null,map__16271__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__16272_16304 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__16272_16304.done(((function (G__16272_16304,ret,map__16271,map__16271__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__16272_16304,ret,map__16271,map__16271__$1,args,id){
return (function (p1__16269_SHARP_){var obj16274 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__16269_SHARP_ + (1)))+".jpg"))};return obj16274;
});})(filtered,evtId,evt,G__16272_16304,ret,map__16271,map__16271__$1,args,id))
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
})();var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,filtered,evtId,evt,photos,idx,idx2,G__16272_16304,ret,map__16271,map__16271__$1,args,id){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,filtered,evtId,evt,photos,idx,idx2,G__16272_16304,ret,map__16271,map__16271__$1,args,id){
return (function (state_16294){var state_val_16295 = (state_16294[(1)]);if((state_val_16295 === (2)))
{var inst_16291 = (state_16294[(2)]);var inst_16292 = cljs.core.async.close_BANG_.call(null,ret);var state_16294__$1 = (function (){var statearr_16296 = state_16294;(statearr_16296[(7)] = inst_16291);
return statearr_16296;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16294__$1,inst_16292);
} else
{if((state_val_16295 === (1)))
{var inst_16277 = cljs.core.nth.call(null,filtered,idx);var inst_16278 = cljs.core.first.call(null,inst_16277);var inst_16279 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16278));var inst_16280 = cljs.core.nth.call(null,filtered,idx2);var inst_16281 = cljs.core.first.call(null,inst_16280);var inst_16282 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16281));var inst_16283 = (evt["Title"]);var inst_16284 = (evt["Date"]);var inst_16285 = (evt["Content"]);var inst_16286 = (evt["Form"]);var inst_16287 = {"prev_href":inst_16279,"next_href":inst_16282,"title":inst_16283,"date":inst_16284,"sideList":photos,"content":inst_16285,"form":inst_16286};var inst_16288 = [null,inst_16287];var inst_16289 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16288,null));var state_16294__$1 = state_16294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16294__$1,(2),ret,inst_16289);
} else
{return null;
}
}
});})(c__6234__auto__,filtered,evtId,evt,photos,idx,idx2,G__16272_16304,ret,map__16271,map__16271__$1,args,id))
;return ((function (switch__6178__auto__,c__6234__auto__,filtered,evtId,evt,photos,idx,idx2,G__16272_16304,ret,map__16271,map__16271__$1,args,id){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_16300 = [null,null,null,null,null,null,null,null];(statearr_16300[(0)] = state_machine__6179__auto__);
(statearr_16300[(1)] = (1));
return statearr_16300;
});
var state_machine__6179__auto____1 = (function (state_16294){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_16294);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e16301){if((e16301 instanceof Object))
{var ex__6182__auto__ = e16301;var statearr_16302_16305 = state_16294;(statearr_16302_16305[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16294);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16306 = state_16294;
state_16294 = G__16306;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_16294){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_16294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,filtered,evtId,evt,photos,idx,idx2,G__16272_16304,ret,map__16271,map__16271__$1,args,id))
})();var state__6236__auto__ = (function (){var statearr_16303 = f__6235__auto__.call(null);(statearr_16303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_16303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,filtered,evtId,evt,photos,idx,idx2,G__16272_16304,ret,map__16271,map__16271__$1,args,id))
);
return c__6234__auto__;
});})(G__16272_16304,ret,map__16271,map__16271__$1,args,id))
);
G__16272_16304.fail(((function (G__16272_16304,ret,map__16271,map__16271__$1,args,id){
return (function (err){return console.log(err);
});})(G__16272_16304,ret,map__16271,map__16271__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
