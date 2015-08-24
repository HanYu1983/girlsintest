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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11233_SHARP_){return cljs.core._EQ_.call(null,view,p1__11233_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11234_SHARP_){return cljs.core._EQ_.call(null,view,p1__11234_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11235_SHARP_){return cljs.core._EQ_.call(null,view,p1__11235_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11236_SHARP_){return cljs.core._EQ_.call(null,view,p1__11236_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11237_SHARP_){return cljs.core._EQ_.call(null,view,p1__11237_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11238_SHARP_){return cljs.core._EQ_.call(null,view,p1__11238_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11239_SHARP_){return cljs.core._EQ_.call(null,view,p1__11239_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11240_SHARP_){return cljs.core._EQ_.call(null,view,p1__11240_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11241_SHARP_){return cljs.core._EQ_.call(null,view,p1__11241_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__11245){var vec__11246 = p__11245;var model = cljs.core.nth.call(null,vec__11246,(0),null);var detail = cljs.core.nth.call(null,vec__11246,(1),null);var G__11247 = (new Date(detail.Date));G__11247.getTime();
return G__11247;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__11250){var vec__11251 = p__11250;var model = cljs.core.nth.call(null,vec__11251,(0),null);var detail = cljs.core.nth.call(null,vec__11251,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__11254){var vec__11255 = p__11254;var model = cljs.core.nth.call(null,vec__11255,(0),null);var detail = cljs.core.nth.call(null,vec__11255,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11297){var map__11298 = p__11297;var map__11298__$1 = ((cljs.core.seq_QMARK_.call(null,map__11298))?cljs.core.apply.call(null,cljs.core.hash_map,map__11298):map__11298);var args = map__11298__$1;var page = cljs.core.get.call(null,map__11298__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__11298__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__11299_11338 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11299_11338.done(((function (G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey){
return (function (p__11300){var vec__11301 = p__11300;var model = cljs.core.nth.call(null,vec__11301,(0),null);var detail = cljs.core.nth.call(null,vec__11301,(1),null);var obj11303 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj11303;
});})(modelCountPerPage,filtered,totalPage,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey))
;var dto = (function (){var obj11305 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj11305;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey){
return (function (state_11312){var state_val_11313 = (state_11312[(1)]);if((state_val_11313 === (2)))
{var inst_11309 = (state_11312[(2)]);var inst_11310 = cljs.core.async.close_BANG_.call(null,ret);var state_11312__$1 = (function (){var statearr_11314 = state_11312;(statearr_11314[(7)] = inst_11309);
return statearr_11314;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11312__$1,inst_11310);
} else
{if((state_val_11313 === (1)))
{var inst_11306 = [null,dto];var inst_11307 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11306,null));var state_11312__$1 = state_11312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11312__$1,(2),ret,inst_11307);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11318 = [null,null,null,null,null,null,null,null];(statearr_11318[(0)] = state_machine__6178__auto__);
(statearr_11318[(1)] = (1));
return statearr_11318;
});
var state_machine__6178__auto____1 = (function (state_11312){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11312);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11319){if((e11319 instanceof Object))
{var ex__6181__auto__ = e11319;var statearr_11320_11339 = state_11312;(statearr_11320_11339[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11340 = state_11312;
state_11312 = G__11340;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11312){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11321 = f__6193__auto__.call(null);(statearr_11321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey))
);
G__11299_11338.fail(((function (G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey){
return (function (state_11328){var state_val_11329 = (state_11328[(1)]);if((state_val_11329 === (2)))
{var inst_11325 = (state_11328[(2)]);var inst_11326 = cljs.core.async.close_BANG_.call(null,ret);var state_11328__$1 = (function (){var statearr_11330 = state_11328;(statearr_11330[(7)] = inst_11325);
return statearr_11330;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11328__$1,inst_11326);
} else
{if((state_val_11329 === (1)))
{var inst_11322 = [err,null];var inst_11323 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11322,null));var state_11328__$1 = state_11328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11328__$1,(2),ret,inst_11323);
} else
{return null;
}
}
});})(c__6192__auto__,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11334 = [null,null,null,null,null,null,null,null];(statearr_11334[(0)] = state_machine__6178__auto__);
(statearr_11334[(1)] = (1));
return statearr_11334;
});
var state_machine__6178__auto____1 = (function (state_11328){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11328);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11335){if((e11335 instanceof Object))
{var ex__6181__auto__ = e11335;var statearr_11336_11341 = state_11328;(statearr_11336_11341[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11342 = state_11328;
state_11328 = G__11342;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11328){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11337 = f__6193__auto__.call(null);(statearr_11337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11299_11338,configType,ret,map__11298,map__11298__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11400){var map__11401 = p__11400;var map__11401__$1 = ((cljs.core.seq_QMARK_.call(null,map__11401))?cljs.core.apply.call(null,cljs.core.hash_map,map__11401):map__11401);var args = map__11401__$1;var id = cljs.core.get.call(null,map__11401__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__11402_11457 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11402_11457.done(((function (G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function (p__11403){var vec__11404 = p__11403;var key__$1 = cljs.core.nth.call(null,vec__11404,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11404,(1),null);var obj11406 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj11406;
});})(dir,detail,filtered,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function iter__11407(s__11408){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function (){var s__11408__$1 = s__11408;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11408__$1);if(temp__4126__auto__)
{var s__11408__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11408__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11408__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11410 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11409 = (0);while(true){
if((i__11409 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__11409);cljs.core.chunk_append.call(null,b__11410,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__11458 = (i__11409 + (1));
i__11409 = G__11458;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11410),iter__11407.call(null,cljs.core.chunk_rest.call(null,s__11408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11410),null);
}
} else
{var idx = cljs.core.first.call(null,s__11408__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__11407.call(null,cljs.core.rest.call(null,s__11408__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function iter__11411(s__11412){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function (){var s__11412__$1 = s__11412;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11412__$1);if(temp__4126__auto__)
{var s__11412__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11412__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11412__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11414 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11413 = (0);while(true){
if((i__11413 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__11413);cljs.core.chunk_append.call(null,b__11414,(function (){var obj11420 = {"id":url,"url":ServeFn.call(null,url)};return obj11420;
})());
{
var G__11459 = (i__11413 + (1));
i__11413 = G__11459;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11414),iter__11411.call(null,cljs.core.chunk_rest.call(null,s__11412__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11414),null);
}
} else
{var url = cljs.core.first.call(null,s__11412__$2);return cljs.core.cons.call(null,(function (){var obj11422 = {"id":url,"url":ServeFn.call(null,url)};return obj11422;
})(),iter__11411.call(null,cljs.core.rest.call(null,s__11412__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
;var dto = (function (){var obj11424 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj11424;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function (state_11431){var state_val_11432 = (state_11431[(1)]);if((state_val_11432 === (2)))
{var inst_11428 = (state_11431[(2)]);var inst_11429 = cljs.core.async.close_BANG_.call(null,ret);var state_11431__$1 = (function (){var statearr_11433 = state_11431;(statearr_11433[(7)] = inst_11428);
return statearr_11433;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11431__$1,inst_11429);
} else
{if((state_val_11432 === (1)))
{var inst_11425 = [null,dto];var inst_11426 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11425,null));var state_11431__$1 = state_11431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11431__$1,(2),ret,inst_11426);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11437 = [null,null,null,null,null,null,null,null];(statearr_11437[(0)] = state_machine__6178__auto__);
(statearr_11437[(1)] = (1));
return statearr_11437;
});
var state_machine__6178__auto____1 = (function (state_11431){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11431);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11438){if((e11438 instanceof Object))
{var ex__6181__auto__ = e11438;var statearr_11439_11460 = state_11431;(statearr_11439_11460[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11431);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11461 = state_11431;
state_11431 = G__11461;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11431){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11440 = f__6193__auto__.call(null);(statearr_11440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
);
return c__6192__auto__;
});})(G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
);
G__11402_11457.fail(((function (G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function (state_11447){var state_val_11448 = (state_11447[(1)]);if((state_val_11448 === (2)))
{var inst_11444 = (state_11447[(2)]);var inst_11445 = cljs.core.async.close_BANG_.call(null,ret);var state_11447__$1 = (function (){var statearr_11449 = state_11447;(statearr_11449[(7)] = inst_11444);
return statearr_11449;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11447__$1,inst_11445);
} else
{if((state_val_11448 === (1)))
{var inst_11441 = [err,null];var inst_11442 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11441,null));var state_11447__$1 = state_11447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11447__$1,(2),ret,inst_11442);
} else
{return null;
}
}
});})(c__6192__auto__,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11453 = [null,null,null,null,null,null,null,null];(statearr_11453[(0)] = state_machine__6178__auto__);
(statearr_11453[(1)] = (1));
return statearr_11453;
});
var state_machine__6178__auto____1 = (function (state_11447){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11447);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11454){if((e11454 instanceof Object))
{var ex__6181__auto__ = e11454;var statearr_11455_11462 = state_11447;(statearr_11455_11462[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11447);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11463 = state_11447;
state_11447 = G__11463;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11447){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11456 = f__6193__auto__.call(null);(statearr_11456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
);
return c__6192__auto__;
});})(G__11402_11457,ret,configType,map__11401,map__11401__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__11465_11504 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__11465_11504.done(((function (G__11465_11504,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11465_11504,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11465_11504,ret){
return (function (state_11478){var state_val_11479 = (state_11478[(1)]);if((state_val_11479 === (2)))
{var inst_11475 = (state_11478[(2)]);var inst_11476 = cljs.core.async.close_BANG_.call(null,ret);var state_11478__$1 = (function (){var statearr_11480 = state_11478;(statearr_11480[(7)] = inst_11475);
return statearr_11480;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11478__$1,inst_11476);
} else
{if((state_val_11479 === (1)))
{var inst_11468 = detail.ModelKey;var inst_11469 = clojure.string.capitalize.call(null,where);var inst_11470 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11469)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_11471 = {"modelKey":inst_11468,"moreUrl":inst_11470};var inst_11472 = [null,inst_11471];var inst_11473 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11472,null));var state_11478__$1 = state_11478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11478__$1,(2),ret,inst_11473);
} else
{return null;
}
}
});})(c__6192__auto__,G__11465_11504,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11465_11504,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11484 = [null,null,null,null,null,null,null,null];(statearr_11484[(0)] = state_machine__6178__auto__);
(statearr_11484[(1)] = (1));
return statearr_11484;
});
var state_machine__6178__auto____1 = (function (state_11478){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11478);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11485){if((e11485 instanceof Object))
{var ex__6181__auto__ = e11485;var statearr_11486_11505 = state_11478;(statearr_11486_11505[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11478);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11506 = state_11478;
state_11478 = G__11506;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11478){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11465_11504,ret))
})();var state__6194__auto__ = (function (){var statearr_11487 = f__6193__auto__.call(null);(statearr_11487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11465_11504,ret))
);
return c__6192__auto__;
});})(G__11465_11504,ret))
);
G__11465_11504.fail(((function (G__11465_11504,ret){
return (function (p1__11464_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11465_11504,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11465_11504,ret){
return (function (state_11494){var state_val_11495 = (state_11494[(1)]);if((state_val_11495 === (2)))
{var inst_11491 = (state_11494[(2)]);var inst_11492 = cljs.core.async.close_BANG_.call(null,ret);var state_11494__$1 = (function (){var statearr_11496 = state_11494;(statearr_11496[(7)] = inst_11491);
return statearr_11496;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11494__$1,inst_11492);
} else
{if((state_val_11495 === (1)))
{var inst_11488 = [p1__11464_SHARP_,null];var inst_11489 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11488,null));var state_11494__$1 = state_11494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11494__$1,(2),ret,inst_11489);
} else
{return null;
}
}
});})(c__6192__auto__,G__11465_11504,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11465_11504,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11500 = [null,null,null,null,null,null,null,null];(statearr_11500[(0)] = state_machine__6178__auto__);
(statearr_11500[(1)] = (1));
return statearr_11500;
});
var state_machine__6178__auto____1 = (function (state_11494){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11494);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11501){if((e11501 instanceof Object))
{var ex__6181__auto__ = e11501;var statearr_11502_11507 = state_11494;(statearr_11502_11507[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11494);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11508 = state_11494;
state_11494 = G__11508;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11494){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11465_11504,ret))
})();var state__6194__auto__ = (function (){var statearr_11503 = f__6193__auto__.call(null);(statearr_11503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11465_11504,ret))
);
return c__6192__auto__;
});})(G__11465_11504,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__11509){var map__11510 = p__11509;var map__11510__$1 = ((cljs.core.seq_QMARK_.call(null,map__11510))?cljs.core.apply.call(null,cljs.core.hash_map,map__11510):map__11510);var args = map__11510__$1;var url = cljs.core.get.call(null,map__11510__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11530 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11530,ret,map__11510,map__11510__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11530,ret,map__11510,map__11510__$1,args,url){
return (function (state_11520){var state_val_11521 = (state_11520[(1)]);if((state_val_11521 === (2)))
{var inst_11517 = (state_11520[(2)]);var inst_11518 = cljs.core.async.close_BANG_.call(null,ret);var state_11520__$1 = (function (){var statearr_11522 = state_11520;(statearr_11522[(7)] = inst_11517);
return statearr_11522;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11520__$1,inst_11518);
} else
{if((state_val_11521 === (1)))
{var inst_11513 = {"url":url};var inst_11514 = [null,inst_11513];var inst_11515 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11514,null));var state_11520__$1 = state_11520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11520__$1,(2),ret,inst_11515);
} else
{return null;
}
}
});})(c__6192__auto___11530,ret,map__11510,map__11510__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___11530,ret,map__11510,map__11510__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11526 = [null,null,null,null,null,null,null,null];(statearr_11526[(0)] = state_machine__6178__auto__);
(statearr_11526[(1)] = (1));
return statearr_11526;
});
var state_machine__6178__auto____1 = (function (state_11520){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11527){if((e11527 instanceof Object))
{var ex__6181__auto__ = e11527;var statearr_11528_11531 = state_11520;(statearr_11528_11531[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11532 = state_11520;
state_11520 = G__11532;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11520){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11530,ret,map__11510,map__11510__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_11529 = f__6193__auto__.call(null);(statearr_11529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11530);
return statearr_11529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11530,ret,map__11510,map__11510__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__11533){var map__11534 = p__11533;var map__11534__$1 = ((cljs.core.seq_QMARK_.call(null,map__11534))?cljs.core.apply.call(null,cljs.core.hash_map,map__11534):map__11534);var args = map__11534__$1;var id = cljs.core.get.call(null,map__11534__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11551 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11551,ret,map__11534,map__11534__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11551,ret,map__11534,map__11534__$1,args,id){
return (function (state_11541){var state_val_11542 = (state_11541[(1)]);if((state_val_11542 === (2)))
{var inst_11538 = (state_11541[(2)]);var inst_11539 = cljs.core.async.close_BANG_.call(null,ret);var state_11541__$1 = (function (){var statearr_11543 = state_11541;(statearr_11543[(7)] = inst_11538);
return statearr_11543;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11541__$1,inst_11539);
} else
{if((state_val_11542 === (1)))
{var inst_11535 = [null,null];var inst_11536 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11535,null));var state_11541__$1 = state_11541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11541__$1,(2),ret,inst_11536);
} else
{return null;
}
}
});})(c__6192__auto___11551,ret,map__11534,map__11534__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___11551,ret,map__11534,map__11534__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11547 = [null,null,null,null,null,null,null,null];(statearr_11547[(0)] = state_machine__6178__auto__);
(statearr_11547[(1)] = (1));
return statearr_11547;
});
var state_machine__6178__auto____1 = (function (state_11541){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11541);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11548){if((e11548 instanceof Object))
{var ex__6181__auto__ = e11548;var statearr_11549_11552 = state_11541;(statearr_11549_11552[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11541);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11553 = state_11541;
state_11541 = G__11553;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11541){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11551,ret,map__11534,map__11534__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11550 = f__6193__auto__.call(null);(statearr_11550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11551);
return statearr_11550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11551,ret,map__11534,map__11534__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__11554 = cljs.core.rest.call(null,list);
var G__11555 = id;
var G__11556 = (start + (1));
list = G__11554;
id = G__11555;
start = G__11556;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__11558){var map__11559 = p__11558;var map__11559__$1 = ((cljs.core.seq_QMARK_.call(null,map__11559))?cljs.core.apply.call(null,cljs.core.hash_map,map__11559):map__11559);var args = map__11559__$1;var id = cljs.core.get.call(null,map__11559__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__11560_11609 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__11560_11609.done(((function (G__11560_11609,ret,map__11559,map__11559__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__11560_11609,ret,map__11559,map__11559__$1,args,id){
return (function (p1__11557_SHARP_){var obj11562 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__11557_SHARP_ + (1)))+".jpg"))};return obj11562;
});})(filtered,evtId,evt,G__11560_11609,ret,map__11559,map__11559__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11560_11609,ret,map__11559,map__11559__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11560_11609,ret,map__11559,map__11559__$1,args,id){
return (function (state_11590){var state_val_11591 = (state_11590[(1)]);if((state_val_11591 === (8)))
{var inst_11571 = (state_11590[(7)]);var inst_11578 = (state_11590[(2)]);var inst_11579 = (evt["Title"]);var inst_11580 = (evt["Date"]);var inst_11581 = (evt["Content"]);var inst_11582 = (evt["Form"]);var inst_11583 = {"prev_href":inst_11571,"next_href":inst_11578,"title":inst_11579,"date":inst_11580,"sideList":photos,"content":inst_11581,"form":inst_11582};var inst_11584 = [null,inst_11583];var inst_11585 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11584,null));var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11590__$1,(2),ret,inst_11585);
} else
{if((state_val_11591 === (7)))
{var state_11590__$1 = state_11590;var statearr_11592_11610 = state_11590__$1;(statearr_11592_11610[(2)] = null);
(statearr_11592_11610[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11591 === (6)))
{var inst_11573 = cljs.core.nth.call(null,filtered,nextId);var inst_11574 = cljs.core.first.call(null,inst_11573);var inst_11575 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11574));var state_11590__$1 = state_11590;var statearr_11593_11611 = state_11590__$1;(statearr_11593_11611[(2)] = inst_11575);
(statearr_11593_11611[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11591 === (5)))
{var inst_11571 = (state_11590[(2)]);var state_11590__$1 = (function (){var statearr_11594 = state_11590;(statearr_11594[(7)] = inst_11571);
return statearr_11594;
})();if(cljs.core.truth_(nextId))
{var statearr_11595_11612 = state_11590__$1;(statearr_11595_11612[(1)] = (6));
} else
{var statearr_11596_11613 = state_11590__$1;(statearr_11596_11613[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11591 === (4)))
{var state_11590__$1 = state_11590;var statearr_11597_11614 = state_11590__$1;(statearr_11597_11614[(2)] = null);
(statearr_11597_11614[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11591 === (3)))
{var inst_11566 = cljs.core.nth.call(null,filtered,prevId);var inst_11567 = cljs.core.first.call(null,inst_11566);var inst_11568 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11567));var state_11590__$1 = state_11590;var statearr_11598_11615 = state_11590__$1;(statearr_11598_11615[(2)] = inst_11568);
(statearr_11598_11615[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11591 === (2)))
{var inst_11587 = (state_11590[(2)]);var inst_11588 = cljs.core.async.close_BANG_.call(null,ret);var state_11590__$1 = (function (){var statearr_11599 = state_11590;(statearr_11599[(8)] = inst_11587);
return statearr_11599;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11590__$1,inst_11588);
} else
{if((state_val_11591 === (1)))
{var state_11590__$1 = state_11590;if(cljs.core.truth_(prevId))
{var statearr_11600_11616 = state_11590__$1;(statearr_11600_11616[(1)] = (3));
} else
{var statearr_11601_11617 = state_11590__$1;(statearr_11601_11617[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11560_11609,ret,map__11559,map__11559__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11560_11609,ret,map__11559,map__11559__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11605 = [null,null,null,null,null,null,null,null,null];(statearr_11605[(0)] = state_machine__6178__auto__);
(statearr_11605[(1)] = (1));
return statearr_11605;
});
var state_machine__6178__auto____1 = (function (state_11590){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11590);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11606){if((e11606 instanceof Object))
{var ex__6181__auto__ = e11606;var statearr_11607_11618 = state_11590;(statearr_11607_11618[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11619 = state_11590;
state_11590 = G__11619;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11590){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11560_11609,ret,map__11559,map__11559__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11608 = f__6193__auto__.call(null);(statearr_11608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11560_11609,ret,map__11559,map__11559__$1,args,id))
);
return c__6192__auto__;
});})(G__11560_11609,ret,map__11559,map__11559__$1,args,id))
);
G__11560_11609.fail(((function (G__11560_11609,ret,map__11559,map__11559__$1,args,id){
return (function (err){return console.log(err);
});})(G__11560_11609,ret,map__11559,map__11559__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
