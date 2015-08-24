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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12948_SHARP_){return cljs.core._EQ_.call(null,view,p1__12948_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12949_SHARP_){return cljs.core._EQ_.call(null,view,p1__12949_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12950_SHARP_){return cljs.core._EQ_.call(null,view,p1__12950_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12951_SHARP_){return cljs.core._EQ_.call(null,view,p1__12951_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12952_SHARP_){return cljs.core._EQ_.call(null,view,p1__12952_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12953_SHARP_){return cljs.core._EQ_.call(null,view,p1__12953_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12954_SHARP_){return cljs.core._EQ_.call(null,view,p1__12954_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12955_SHARP_){return cljs.core._EQ_.call(null,view,p1__12955_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12956_SHARP_){return cljs.core._EQ_.call(null,view,p1__12956_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__12960){var vec__12961 = p__12960;var model = cljs.core.nth.call(null,vec__12961,(0),null);var detail = cljs.core.nth.call(null,vec__12961,(1),null);var G__12962 = (new Date(detail.Date));G__12962.getTime();
return G__12962;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__12965){var vec__12966 = p__12965;var model = cljs.core.nth.call(null,vec__12966,(0),null);var detail = cljs.core.nth.call(null,vec__12966,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__12969){var vec__12970 = p__12969;var model = cljs.core.nth.call(null,vec__12970,(0),null);var detail = cljs.core.nth.call(null,vec__12970,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__13012){var map__13013 = p__13012;var map__13013__$1 = ((cljs.core.seq_QMARK_.call(null,map__13013))?cljs.core.apply.call(null,cljs.core.hash_map,map__13013):map__13013);var args = map__13013__$1;var page = cljs.core.get.call(null,map__13013__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__13013__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__13014_13053 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__13014_13053.done(((function (G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey){
return (function (p__13015){var vec__13016 = p__13015;var model = cljs.core.nth.call(null,vec__13016,(0),null);var detail = cljs.core.nth.call(null,vec__13016,(1),null);var obj13018 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj13018;
});})(modelCountPerPage,filtered,totalPage,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey))
;var dto = (function (){var obj13020 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj13020;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey){
return (function (state_13027){var state_val_13028 = (state_13027[(1)]);if((state_val_13028 === (2)))
{var inst_13024 = (state_13027[(2)]);var inst_13025 = cljs.core.async.close_BANG_.call(null,ret);var state_13027__$1 = (function (){var statearr_13029 = state_13027;(statearr_13029[(7)] = inst_13024);
return statearr_13029;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13027__$1,inst_13025);
} else
{if((state_val_13028 === (1)))
{var inst_13021 = [null,dto];var inst_13022 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13021,null));var state_13027__$1 = state_13027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13027__$1,(2),ret,inst_13022);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13033 = [null,null,null,null,null,null,null,null];(statearr_13033[(0)] = state_machine__6178__auto__);
(statearr_13033[(1)] = (1));
return statearr_13033;
});
var state_machine__6178__auto____1 = (function (state_13027){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13027);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13034){if((e13034 instanceof Object))
{var ex__6181__auto__ = e13034;var statearr_13035_13054 = state_13027;(statearr_13035_13054[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13055 = state_13027;
state_13027 = G__13055;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13027){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_13036 = f__6193__auto__.call(null);(statearr_13036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey))
);
G__13014_13053.fail(((function (G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey){
return (function (state_13043){var state_val_13044 = (state_13043[(1)]);if((state_val_13044 === (2)))
{var inst_13040 = (state_13043[(2)]);var inst_13041 = cljs.core.async.close_BANG_.call(null,ret);var state_13043__$1 = (function (){var statearr_13045 = state_13043;(statearr_13045[(7)] = inst_13040);
return statearr_13045;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13043__$1,inst_13041);
} else
{if((state_val_13044 === (1)))
{var inst_13037 = [err,null];var inst_13038 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13037,null));var state_13043__$1 = state_13043;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13043__$1,(2),ret,inst_13038);
} else
{return null;
}
}
});})(c__6192__auto__,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13049 = [null,null,null,null,null,null,null,null];(statearr_13049[(0)] = state_machine__6178__auto__);
(statearr_13049[(1)] = (1));
return statearr_13049;
});
var state_machine__6178__auto____1 = (function (state_13043){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13043);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13050){if((e13050 instanceof Object))
{var ex__6181__auto__ = e13050;var statearr_13051_13056 = state_13043;(statearr_13051_13056[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13043);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13057 = state_13043;
state_13043 = G__13057;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13043){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_13052 = f__6193__auto__.call(null);(statearr_13052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__13014_13053,configType,ret,map__13013,map__13013__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__13115){var map__13116 = p__13115;var map__13116__$1 = ((cljs.core.seq_QMARK_.call(null,map__13116))?cljs.core.apply.call(null,cljs.core.hash_map,map__13116):map__13116);var args = map__13116__$1;var id = cljs.core.get.call(null,map__13116__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__13117_13172 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__13117_13172.done(((function (G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function (p__13118){var vec__13119 = p__13118;var key__$1 = cljs.core.nth.call(null,vec__13119,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__13119,(1),null);var obj13121 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj13121;
});})(dir,detail,filtered,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4293__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function iter__13122(s__13123){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function (){var s__13123__$1 = s__13123;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13123__$1);if(temp__4126__auto__)
{var s__13123__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13123__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__13123__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__13125 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__13124 = (0);while(true){
if((i__13124 < size__4292__auto__))
{var idx = cljs.core._nth.call(null,c__4291__auto__,i__13124);cljs.core.chunk_append.call(null,b__13125,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__13173 = (i__13124 + (1));
i__13124 = G__13173;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13125),iter__13122.call(null,cljs.core.chunk_rest.call(null,s__13123__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13125),null);
}
} else
{var idx = cljs.core.first.call(null,s__13123__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__13122.call(null,cljs.core.rest.call(null,s__13123__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
;return iter__4293__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4293__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function iter__13126(s__13127){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function (){var s__13127__$1 = s__13127;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13127__$1);if(temp__4126__auto__)
{var s__13127__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13127__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__13127__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__13129 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__13128 = (0);while(true){
if((i__13128 < size__4292__auto__))
{var url = cljs.core._nth.call(null,c__4291__auto__,i__13128);cljs.core.chunk_append.call(null,b__13129,(function (){var obj13135 = {"id":url,"url":ServeFn.call(null,url)};return obj13135;
})());
{
var G__13174 = (i__13128 + (1));
i__13128 = G__13174;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13129),iter__13126.call(null,cljs.core.chunk_rest.call(null,s__13127__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13129),null);
}
} else
{var url = cljs.core.first.call(null,s__13127__$2);return cljs.core.cons.call(null,(function (){var obj13137 = {"id":url,"url":ServeFn.call(null,url)};return obj13137;
})(),iter__13126.call(null,cljs.core.rest.call(null,s__13127__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
;return iter__4293__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
;var dto = (function (){var obj13139 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj13139;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function (state_13146){var state_val_13147 = (state_13146[(1)]);if((state_val_13147 === (2)))
{var inst_13143 = (state_13146[(2)]);var inst_13144 = cljs.core.async.close_BANG_.call(null,ret);var state_13146__$1 = (function (){var statearr_13148 = state_13146;(statearr_13148[(7)] = inst_13143);
return statearr_13148;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13146__$1,inst_13144);
} else
{if((state_val_13147 === (1)))
{var inst_13140 = [null,dto];var inst_13141 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13140,null));var state_13146__$1 = state_13146;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13146__$1,(2),ret,inst_13141);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13152 = [null,null,null,null,null,null,null,null];(statearr_13152[(0)] = state_machine__6178__auto__);
(statearr_13152[(1)] = (1));
return statearr_13152;
});
var state_machine__6178__auto____1 = (function (state_13146){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13146);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13153){if((e13153 instanceof Object))
{var ex__6181__auto__ = e13153;var statearr_13154_13175 = state_13146;(statearr_13154_13175[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13146);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13176 = state_13146;
state_13146 = G__13176;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13146){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13155 = f__6193__auto__.call(null);(statearr_13155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
);
return c__6192__auto__;
});})(G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
);
G__13117_13172.fail(((function (G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function (state_13162){var state_val_13163 = (state_13162[(1)]);if((state_val_13163 === (2)))
{var inst_13159 = (state_13162[(2)]);var inst_13160 = cljs.core.async.close_BANG_.call(null,ret);var state_13162__$1 = (function (){var statearr_13164 = state_13162;(statearr_13164[(7)] = inst_13159);
return statearr_13164;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13162__$1,inst_13160);
} else
{if((state_val_13163 === (1)))
{var inst_13156 = [err,null];var inst_13157 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13156,null));var state_13162__$1 = state_13162;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13162__$1,(2),ret,inst_13157);
} else
{return null;
}
}
});})(c__6192__auto__,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13168 = [null,null,null,null,null,null,null,null];(statearr_13168[(0)] = state_machine__6178__auto__);
(statearr_13168[(1)] = (1));
return statearr_13168;
});
var state_machine__6178__auto____1 = (function (state_13162){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13162);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13169){if((e13169 instanceof Object))
{var ex__6181__auto__ = e13169;var statearr_13170_13177 = state_13162;(statearr_13170_13177[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13162);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13178 = state_13162;
state_13162 = G__13178;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13162){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13171 = f__6193__auto__.call(null);(statearr_13171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
);
return c__6192__auto__;
});})(G__13117_13172,ret,configType,map__13116,map__13116__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__13180_13219 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__13180_13219.done(((function (G__13180_13219,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13180_13219,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13180_13219,ret){
return (function (state_13193){var state_val_13194 = (state_13193[(1)]);if((state_val_13194 === (2)))
{var inst_13190 = (state_13193[(2)]);var inst_13191 = cljs.core.async.close_BANG_.call(null,ret);var state_13193__$1 = (function (){var statearr_13195 = state_13193;(statearr_13195[(7)] = inst_13190);
return statearr_13195;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13193__$1,inst_13191);
} else
{if((state_val_13194 === (1)))
{var inst_13183 = detail.ModelKey;var inst_13184 = clojure.string.capitalize.call(null,where);var inst_13185 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13184)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_13186 = {"modelKey":inst_13183,"moreUrl":inst_13185};var inst_13187 = [null,inst_13186];var inst_13188 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13187,null));var state_13193__$1 = state_13193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13193__$1,(2),ret,inst_13188);
} else
{return null;
}
}
});})(c__6192__auto__,G__13180_13219,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13180_13219,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13199 = [null,null,null,null,null,null,null,null];(statearr_13199[(0)] = state_machine__6178__auto__);
(statearr_13199[(1)] = (1));
return statearr_13199;
});
var state_machine__6178__auto____1 = (function (state_13193){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13193);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13200){if((e13200 instanceof Object))
{var ex__6181__auto__ = e13200;var statearr_13201_13220 = state_13193;(statearr_13201_13220[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13221 = state_13193;
state_13193 = G__13221;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13193){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13180_13219,ret))
})();var state__6194__auto__ = (function (){var statearr_13202 = f__6193__auto__.call(null);(statearr_13202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13180_13219,ret))
);
return c__6192__auto__;
});})(G__13180_13219,ret))
);
G__13180_13219.fail(((function (G__13180_13219,ret){
return (function (p1__13179_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13180_13219,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13180_13219,ret){
return (function (state_13209){var state_val_13210 = (state_13209[(1)]);if((state_val_13210 === (2)))
{var inst_13206 = (state_13209[(2)]);var inst_13207 = cljs.core.async.close_BANG_.call(null,ret);var state_13209__$1 = (function (){var statearr_13211 = state_13209;(statearr_13211[(7)] = inst_13206);
return statearr_13211;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13209__$1,inst_13207);
} else
{if((state_val_13210 === (1)))
{var inst_13203 = [p1__13179_SHARP_,null];var inst_13204 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13203,null));var state_13209__$1 = state_13209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13209__$1,(2),ret,inst_13204);
} else
{return null;
}
}
});})(c__6192__auto__,G__13180_13219,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13180_13219,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13215 = [null,null,null,null,null,null,null,null];(statearr_13215[(0)] = state_machine__6178__auto__);
(statearr_13215[(1)] = (1));
return statearr_13215;
});
var state_machine__6178__auto____1 = (function (state_13209){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13209);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13216){if((e13216 instanceof Object))
{var ex__6181__auto__ = e13216;var statearr_13217_13222 = state_13209;(statearr_13217_13222[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13209);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13216;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13223 = state_13209;
state_13209 = G__13223;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13209){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13180_13219,ret))
})();var state__6194__auto__ = (function (){var statearr_13218 = f__6193__auto__.call(null);(statearr_13218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13218;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13180_13219,ret))
);
return c__6192__auto__;
});})(G__13180_13219,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__13224){var map__13225 = p__13224;var map__13225__$1 = ((cljs.core.seq_QMARK_.call(null,map__13225))?cljs.core.apply.call(null,cljs.core.hash_map,map__13225):map__13225);var args = map__13225__$1;var url = cljs.core.get.call(null,map__13225__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___13246 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13246,ret,map__13225,map__13225__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13246,ret,map__13225,map__13225__$1,args,url){
return (function (state_13236){var state_val_13237 = (state_13236[(1)]);if((state_val_13237 === (2)))
{var inst_13233 = (state_13236[(2)]);var inst_13234 = cljs.core.async.close_BANG_.call(null,ret);var state_13236__$1 = (function (){var statearr_13238 = state_13236;(statearr_13238[(7)] = inst_13233);
return statearr_13238;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13236__$1,inst_13234);
} else
{if((state_val_13237 === (1)))
{var inst_13228 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_13229 = {"url":inst_13228};var inst_13230 = [null,inst_13229];var inst_13231 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13230,null));var state_13236__$1 = state_13236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13236__$1,(2),ret,inst_13231);
} else
{return null;
}
}
});})(c__6192__auto___13246,ret,map__13225,map__13225__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___13246,ret,map__13225,map__13225__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13242 = [null,null,null,null,null,null,null,null];(statearr_13242[(0)] = state_machine__6178__auto__);
(statearr_13242[(1)] = (1));
return statearr_13242;
});
var state_machine__6178__auto____1 = (function (state_13236){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13236);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13243){if((e13243 instanceof Object))
{var ex__6181__auto__ = e13243;var statearr_13244_13247 = state_13236;(statearr_13244_13247[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13236);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13248 = state_13236;
state_13236 = G__13248;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13236){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13246,ret,map__13225,map__13225__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_13245 = f__6193__auto__.call(null);(statearr_13245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13246);
return statearr_13245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13246,ret,map__13225,map__13225__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__13249){var map__13250 = p__13249;var map__13250__$1 = ((cljs.core.seq_QMARK_.call(null,map__13250))?cljs.core.apply.call(null,cljs.core.hash_map,map__13250):map__13250);var args = map__13250__$1;var id = cljs.core.get.call(null,map__13250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___13267 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13267,ret,map__13250,map__13250__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13267,ret,map__13250,map__13250__$1,args,id){
return (function (state_13257){var state_val_13258 = (state_13257[(1)]);if((state_val_13258 === (2)))
{var inst_13254 = (state_13257[(2)]);var inst_13255 = cljs.core.async.close_BANG_.call(null,ret);var state_13257__$1 = (function (){var statearr_13259 = state_13257;(statearr_13259[(7)] = inst_13254);
return statearr_13259;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13257__$1,inst_13255);
} else
{if((state_val_13258 === (1)))
{var inst_13251 = [null,null];var inst_13252 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13251,null));var state_13257__$1 = state_13257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13257__$1,(2),ret,inst_13252);
} else
{return null;
}
}
});})(c__6192__auto___13267,ret,map__13250,map__13250__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___13267,ret,map__13250,map__13250__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13263 = [null,null,null,null,null,null,null,null];(statearr_13263[(0)] = state_machine__6178__auto__);
(statearr_13263[(1)] = (1));
return statearr_13263;
});
var state_machine__6178__auto____1 = (function (state_13257){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13257);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13264){if((e13264 instanceof Object))
{var ex__6181__auto__ = e13264;var statearr_13265_13268 = state_13257;(statearr_13265_13268[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13257);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13269 = state_13257;
state_13257 = G__13269;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13257){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13267,ret,map__13250,map__13250__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13266 = f__6193__auto__.call(null);(statearr_13266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13267);
return statearr_13266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13267,ret,map__13250,map__13250__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__13270 = cljs.core.rest.call(null,list);
var G__13271 = id;
var G__13272 = (start + (1));
list = G__13270;
id = G__13271;
start = G__13272;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__13274){var map__13275 = p__13274;var map__13275__$1 = ((cljs.core.seq_QMARK_.call(null,map__13275))?cljs.core.apply.call(null,cljs.core.hash_map,map__13275):map__13275);var args = map__13275__$1;var id = cljs.core.get.call(null,map__13275__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__13276_13325 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__13276_13325.done(((function (G__13276_13325,ret,map__13275,map__13275__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__13276_13325,ret,map__13275,map__13275__$1,args,id){
return (function (p1__13273_SHARP_){var obj13278 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__13273_SHARP_ + (1)))+".jpg"))};return obj13278;
});})(filtered,evtId,evt,G__13276_13325,ret,map__13275,map__13275__$1,args,id))
,cljs.core.range.call(null,(evt["Count"]))));var prevId = (function (){var find = (app.model.indexOf.call(null,filtered,evtId,(0)) - (1));if((find < (0)))
{return null;
} else
{if((find >= cljs.core.count.call(null,filtered)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return find;
} else
{return null;
}
}
}
})();var nextId = (function (){var find = (app.model.indexOf.call(null,filtered,evtId,(0)) + (1));if((find < (0)))
{return null;
} else
{if((find >= cljs.core.count.call(null,filtered)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return find;
} else
{return null;
}
}
}
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13276_13325,ret,map__13275,map__13275__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13276_13325,ret,map__13275,map__13275__$1,args,id){
return (function (state_13306){var state_val_13307 = (state_13306[(1)]);if((state_val_13307 === (8)))
{var inst_13287 = (state_13306[(7)]);var inst_13294 = (state_13306[(2)]);var inst_13295 = (evt["Title"]);var inst_13296 = (evt["Date"]);var inst_13297 = (evt["Content"]);var inst_13298 = (evt["Form"]);var inst_13299 = {"prev_href":inst_13287,"next_href":inst_13294,"title":inst_13295,"date":inst_13296,"sideList":photos,"content":inst_13297,"form":inst_13298};var inst_13300 = [null,inst_13299];var inst_13301 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13300,null));var state_13306__$1 = state_13306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13306__$1,(2),ret,inst_13301);
} else
{if((state_val_13307 === (7)))
{var state_13306__$1 = state_13306;var statearr_13308_13326 = state_13306__$1;(statearr_13308_13326[(2)] = null);
(statearr_13308_13326[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13307 === (6)))
{var inst_13289 = cljs.core.nth.call(null,filtered,nextId);var inst_13290 = cljs.core.first.call(null,inst_13289);var inst_13291 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13290));var state_13306__$1 = state_13306;var statearr_13309_13327 = state_13306__$1;(statearr_13309_13327[(2)] = inst_13291);
(statearr_13309_13327[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13307 === (5)))
{var inst_13287 = (state_13306[(2)]);var state_13306__$1 = (function (){var statearr_13310 = state_13306;(statearr_13310[(7)] = inst_13287);
return statearr_13310;
})();if(cljs.core.truth_(nextId))
{var statearr_13311_13328 = state_13306__$1;(statearr_13311_13328[(1)] = (6));
} else
{var statearr_13312_13329 = state_13306__$1;(statearr_13312_13329[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13307 === (4)))
{var state_13306__$1 = state_13306;var statearr_13313_13330 = state_13306__$1;(statearr_13313_13330[(2)] = null);
(statearr_13313_13330[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13307 === (3)))
{var inst_13282 = cljs.core.nth.call(null,filtered,prevId);var inst_13283 = cljs.core.first.call(null,inst_13282);var inst_13284 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13283));var state_13306__$1 = state_13306;var statearr_13314_13331 = state_13306__$1;(statearr_13314_13331[(2)] = inst_13284);
(statearr_13314_13331[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13307 === (2)))
{var inst_13303 = (state_13306[(2)]);var inst_13304 = cljs.core.async.close_BANG_.call(null,ret);var state_13306__$1 = (function (){var statearr_13315 = state_13306;(statearr_13315[(8)] = inst_13303);
return statearr_13315;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13306__$1,inst_13304);
} else
{if((state_val_13307 === (1)))
{var state_13306__$1 = state_13306;if(cljs.core.truth_(prevId))
{var statearr_13316_13332 = state_13306__$1;(statearr_13316_13332[(1)] = (3));
} else
{var statearr_13317_13333 = state_13306__$1;(statearr_13317_13333[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13276_13325,ret,map__13275,map__13275__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13276_13325,ret,map__13275,map__13275__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13321 = [null,null,null,null,null,null,null,null,null];(statearr_13321[(0)] = state_machine__6178__auto__);
(statearr_13321[(1)] = (1));
return statearr_13321;
});
var state_machine__6178__auto____1 = (function (state_13306){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13306);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13322){if((e13322 instanceof Object))
{var ex__6181__auto__ = e13322;var statearr_13323_13334 = state_13306;(statearr_13323_13334[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13335 = state_13306;
state_13306 = G__13335;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13306){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13276_13325,ret,map__13275,map__13275__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13324 = f__6193__auto__.call(null);(statearr_13324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13276_13325,ret,map__13275,map__13275__$1,args,id))
);
return c__6192__auto__;
});})(G__13276_13325,ret,map__13275,map__13275__$1,args,id))
);
G__13276_13325.fail(((function (G__13276_13325,ret,map__13275,map__13275__$1,args,id){
return (function (err){return console.log(err);
});})(G__13276_13325,ret,map__13275,map__13275__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
