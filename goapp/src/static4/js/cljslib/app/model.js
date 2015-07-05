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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15973_SHARP_){return cljs.core._EQ_.call(null,view,p1__15973_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15974_SHARP_){return cljs.core._EQ_.call(null,view,p1__15974_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15975_SHARP_){return cljs.core._EQ_.call(null,view,p1__15975_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15976_SHARP_){return cljs.core._EQ_.call(null,view,p1__15976_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15977_SHARP_){return cljs.core._EQ_.call(null,view,p1__15977_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15978_SHARP_){return cljs.core._EQ_.call(null,view,p1__15978_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15979_SHARP_){return cljs.core._EQ_.call(null,view,p1__15979_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15980_SHARP_){return cljs.core._EQ_.call(null,view,p1__15980_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15981_SHARP_){return cljs.core._EQ_.call(null,view,p1__15981_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__15985){var vec__15986 = p__15985;var model = cljs.core.nth.call(null,vec__15986,(0),null);var detail = cljs.core.nth.call(null,vec__15986,(1),null);var G__15987 = (new Date(detail.Date));G__15987.getTime();
return G__15987;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__15990){var vec__15991 = p__15990;var model = cljs.core.nth.call(null,vec__15991,(0),null);var detail = cljs.core.nth.call(null,vec__15991,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__15994){var vec__15995 = p__15994;var model = cljs.core.nth.call(null,vec__15995,(0),null);var detail = cljs.core.nth.call(null,vec__15995,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__16037){var map__16038 = p__16037;var map__16038__$1 = ((cljs.core.seq_QMARK_.call(null,map__16038))?cljs.core.apply.call(null,cljs.core.hash_map,map__16038):map__16038);var args = map__16038__$1;var page = cljs.core.get.call(null,map__16038__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__16038__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__16039_16078 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__16039_16078.done(((function (G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey){
return (function (p__16040){var vec__16041 = p__16040;var model = cljs.core.nth.call(null,vec__16041,(0),null);var detail = cljs.core.nth.call(null,vec__16041,(1),null);var obj16043 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj16043;
});})(modelCountPerPage,filtered,totalPage,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey))
;var dto = (function (){var obj16045 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj16045;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey){
return (function (state_16052){var state_val_16053 = (state_16052[(1)]);if((state_val_16053 === (2)))
{var inst_16049 = (state_16052[(2)]);var inst_16050 = cljs.core.async.close_BANG_.call(null,ret);var state_16052__$1 = (function (){var statearr_16054 = state_16052;(statearr_16054[(7)] = inst_16049);
return statearr_16054;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16052__$1,inst_16050);
} else
{if((state_val_16053 === (1)))
{var inst_16046 = [null,dto];var inst_16047 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16046,null));var state_16052__$1 = state_16052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16052__$1,(2),ret,inst_16047);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16058 = [null,null,null,null,null,null,null,null];(statearr_16058[(0)] = state_machine__6178__auto__);
(statearr_16058[(1)] = (1));
return statearr_16058;
});
var state_machine__6178__auto____1 = (function (state_16052){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16052);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16059){if((e16059 instanceof Object))
{var ex__6181__auto__ = e16059;var statearr_16060_16079 = state_16052;(statearr_16060_16079[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16052);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16080 = state_16052;
state_16052 = G__16080;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16052){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_16061 = f__6193__auto__.call(null);(statearr_16061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey))
);
G__16039_16078.fail(((function (G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey){
return (function (state_16068){var state_val_16069 = (state_16068[(1)]);if((state_val_16069 === (2)))
{var inst_16065 = (state_16068[(2)]);var inst_16066 = cljs.core.async.close_BANG_.call(null,ret);var state_16068__$1 = (function (){var statearr_16070 = state_16068;(statearr_16070[(7)] = inst_16065);
return statearr_16070;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16068__$1,inst_16066);
} else
{if((state_val_16069 === (1)))
{var inst_16062 = [err,null];var inst_16063 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16062,null));var state_16068__$1 = state_16068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16068__$1,(2),ret,inst_16063);
} else
{return null;
}
}
});})(c__6192__auto__,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16074 = [null,null,null,null,null,null,null,null];(statearr_16074[(0)] = state_machine__6178__auto__);
(statearr_16074[(1)] = (1));
return statearr_16074;
});
var state_machine__6178__auto____1 = (function (state_16068){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16068);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16075){if((e16075 instanceof Object))
{var ex__6181__auto__ = e16075;var statearr_16076_16081 = state_16068;(statearr_16076_16081[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16068);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16082 = state_16068;
state_16068 = G__16082;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16068){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_16077 = f__6193__auto__.call(null);(statearr_16077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__16039_16078,configType,ret,map__16038,map__16038__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__16140){var map__16141 = p__16140;var map__16141__$1 = ((cljs.core.seq_QMARK_.call(null,map__16141))?cljs.core.apply.call(null,cljs.core.hash_map,map__16141):map__16141);var args = map__16141__$1;var id = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__16142_16197 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__16142_16197.done(((function (G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function (p__16143){var vec__16144 = p__16143;var key__$1 = cljs.core.nth.call(null,vec__16144,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__16144,(1),null);var obj16146 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj16146;
});})(dir,detail,filtered,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function iter__16147(s__16148){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function (){var s__16148__$1 = s__16148;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16148__$1);if(temp__4126__auto__)
{var s__16148__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16148__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16148__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16150 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16149 = (0);while(true){
if((i__16149 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__16149);cljs.core.chunk_append.call(null,b__16150,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__16198 = (i__16149 + (1));
i__16149 = G__16198;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16150),iter__16147.call(null,cljs.core.chunk_rest.call(null,s__16148__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16150),null);
}
} else
{var idx = cljs.core.first.call(null,s__16148__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__16147.call(null,cljs.core.rest.call(null,s__16148__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function iter__16151(s__16152){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function (){var s__16152__$1 = s__16152;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16152__$1);if(temp__4126__auto__)
{var s__16152__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16152__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16152__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16154 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16153 = (0);while(true){
if((i__16153 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__16153);cljs.core.chunk_append.call(null,b__16154,(function (){var obj16160 = {"id":url,"url":ServeFn.call(null,url)};return obj16160;
})());
{
var G__16199 = (i__16153 + (1));
i__16153 = G__16199;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16154),iter__16151.call(null,cljs.core.chunk_rest.call(null,s__16152__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16154),null);
}
} else
{var url = cljs.core.first.call(null,s__16152__$2);return cljs.core.cons.call(null,(function (){var obj16162 = {"id":url,"url":ServeFn.call(null,url)};return obj16162;
})(),iter__16151.call(null,cljs.core.rest.call(null,s__16152__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
;var dto = (function (){var obj16164 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj16164;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function (state_16171){var state_val_16172 = (state_16171[(1)]);if((state_val_16172 === (2)))
{var inst_16168 = (state_16171[(2)]);var inst_16169 = cljs.core.async.close_BANG_.call(null,ret);var state_16171__$1 = (function (){var statearr_16173 = state_16171;(statearr_16173[(7)] = inst_16168);
return statearr_16173;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16171__$1,inst_16169);
} else
{if((state_val_16172 === (1)))
{var inst_16165 = [null,dto];var inst_16166 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16165,null));var state_16171__$1 = state_16171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16171__$1,(2),ret,inst_16166);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16177 = [null,null,null,null,null,null,null,null];(statearr_16177[(0)] = state_machine__6178__auto__);
(statearr_16177[(1)] = (1));
return statearr_16177;
});
var state_machine__6178__auto____1 = (function (state_16171){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16171);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16178){if((e16178 instanceof Object))
{var ex__6181__auto__ = e16178;var statearr_16179_16200 = state_16171;(statearr_16179_16200[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16171);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16201 = state_16171;
state_16171 = G__16201;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16171){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16180 = f__6193__auto__.call(null);(statearr_16180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
);
return c__6192__auto__;
});})(G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
);
G__16142_16197.fail(((function (G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function (state_16187){var state_val_16188 = (state_16187[(1)]);if((state_val_16188 === (2)))
{var inst_16184 = (state_16187[(2)]);var inst_16185 = cljs.core.async.close_BANG_.call(null,ret);var state_16187__$1 = (function (){var statearr_16189 = state_16187;(statearr_16189[(7)] = inst_16184);
return statearr_16189;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16187__$1,inst_16185);
} else
{if((state_val_16188 === (1)))
{var inst_16181 = [err,null];var inst_16182 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16181,null));var state_16187__$1 = state_16187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16187__$1,(2),ret,inst_16182);
} else
{return null;
}
}
});})(c__6192__auto__,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16193 = [null,null,null,null,null,null,null,null];(statearr_16193[(0)] = state_machine__6178__auto__);
(statearr_16193[(1)] = (1));
return statearr_16193;
});
var state_machine__6178__auto____1 = (function (state_16187){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16187);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16194){if((e16194 instanceof Object))
{var ex__6181__auto__ = e16194;var statearr_16195_16202 = state_16187;(statearr_16195_16202[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16203 = state_16187;
state_16187 = G__16203;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16187){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16196 = f__6193__auto__.call(null);(statearr_16196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
);
return c__6192__auto__;
});})(G__16142_16197,ret,configType,map__16141,map__16141__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__16205_16244 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__16205_16244.done(((function (G__16205_16244,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16205_16244,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16205_16244,ret){
return (function (state_16218){var state_val_16219 = (state_16218[(1)]);if((state_val_16219 === (2)))
{var inst_16215 = (state_16218[(2)]);var inst_16216 = cljs.core.async.close_BANG_.call(null,ret);var state_16218__$1 = (function (){var statearr_16220 = state_16218;(statearr_16220[(7)] = inst_16215);
return statearr_16220;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16218__$1,inst_16216);
} else
{if((state_val_16219 === (1)))
{var inst_16208 = detail.ModelKey;var inst_16209 = clojure.string.capitalize.call(null,where);var inst_16210 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16209)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_16211 = {"modelKey":inst_16208,"moreUrl":inst_16210};var inst_16212 = [null,inst_16211];var inst_16213 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16212,null));var state_16218__$1 = state_16218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16218__$1,(2),ret,inst_16213);
} else
{return null;
}
}
});})(c__6192__auto__,G__16205_16244,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16205_16244,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16224 = [null,null,null,null,null,null,null,null];(statearr_16224[(0)] = state_machine__6178__auto__);
(statearr_16224[(1)] = (1));
return statearr_16224;
});
var state_machine__6178__auto____1 = (function (state_16218){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16218);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16225){if((e16225 instanceof Object))
{var ex__6181__auto__ = e16225;var statearr_16226_16245 = state_16218;(statearr_16226_16245[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16225;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16246 = state_16218;
state_16218 = G__16246;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16218){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16205_16244,ret))
})();var state__6194__auto__ = (function (){var statearr_16227 = f__6193__auto__.call(null);(statearr_16227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16227;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16205_16244,ret))
);
return c__6192__auto__;
});})(G__16205_16244,ret))
);
G__16205_16244.fail(((function (G__16205_16244,ret){
return (function (p1__16204_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16205_16244,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16205_16244,ret){
return (function (state_16234){var state_val_16235 = (state_16234[(1)]);if((state_val_16235 === (2)))
{var inst_16231 = (state_16234[(2)]);var inst_16232 = cljs.core.async.close_BANG_.call(null,ret);var state_16234__$1 = (function (){var statearr_16236 = state_16234;(statearr_16236[(7)] = inst_16231);
return statearr_16236;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16234__$1,inst_16232);
} else
{if((state_val_16235 === (1)))
{var inst_16228 = [p1__16204_SHARP_,null];var inst_16229 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16228,null));var state_16234__$1 = state_16234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16234__$1,(2),ret,inst_16229);
} else
{return null;
}
}
});})(c__6192__auto__,G__16205_16244,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16205_16244,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16240 = [null,null,null,null,null,null,null,null];(statearr_16240[(0)] = state_machine__6178__auto__);
(statearr_16240[(1)] = (1));
return statearr_16240;
});
var state_machine__6178__auto____1 = (function (state_16234){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16234);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16241){if((e16241 instanceof Object))
{var ex__6181__auto__ = e16241;var statearr_16242_16247 = state_16234;(statearr_16242_16247[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16241;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16248 = state_16234;
state_16234 = G__16248;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16234){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16205_16244,ret))
})();var state__6194__auto__ = (function (){var statearr_16243 = f__6193__auto__.call(null);(statearr_16243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16205_16244,ret))
);
return c__6192__auto__;
});})(G__16205_16244,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__16249){var map__16250 = p__16249;var map__16250__$1 = ((cljs.core.seq_QMARK_.call(null,map__16250))?cljs.core.apply.call(null,cljs.core.hash_map,map__16250):map__16250);var args = map__16250__$1;var url = cljs.core.get.call(null,map__16250__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___16271 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___16271,ret,map__16250,map__16250__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___16271,ret,map__16250,map__16250__$1,args,url){
return (function (state_16261){var state_val_16262 = (state_16261[(1)]);if((state_val_16262 === (2)))
{var inst_16258 = (state_16261[(2)]);var inst_16259 = cljs.core.async.close_BANG_.call(null,ret);var state_16261__$1 = (function (){var statearr_16263 = state_16261;(statearr_16263[(7)] = inst_16258);
return statearr_16263;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16261__$1,inst_16259);
} else
{if((state_val_16262 === (1)))
{var inst_16253 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_16254 = {"url":inst_16253};var inst_16255 = [null,inst_16254];var inst_16256 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16255,null));var state_16261__$1 = state_16261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16261__$1,(2),ret,inst_16256);
} else
{return null;
}
}
});})(c__6192__auto___16271,ret,map__16250,map__16250__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___16271,ret,map__16250,map__16250__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16267 = [null,null,null,null,null,null,null,null];(statearr_16267[(0)] = state_machine__6178__auto__);
(statearr_16267[(1)] = (1));
return statearr_16267;
});
var state_machine__6178__auto____1 = (function (state_16261){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16261);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16268){if((e16268 instanceof Object))
{var ex__6181__auto__ = e16268;var statearr_16269_16272 = state_16261;(statearr_16269_16272[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16268;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16273 = state_16261;
state_16261 = G__16273;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16261){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___16271,ret,map__16250,map__16250__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_16270 = f__6193__auto__.call(null);(statearr_16270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___16271);
return statearr_16270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___16271,ret,map__16250,map__16250__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__16274){var map__16275 = p__16274;var map__16275__$1 = ((cljs.core.seq_QMARK_.call(null,map__16275))?cljs.core.apply.call(null,cljs.core.hash_map,map__16275):map__16275);var args = map__16275__$1;var id = cljs.core.get.call(null,map__16275__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___16292 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___16292,ret,map__16275,map__16275__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___16292,ret,map__16275,map__16275__$1,args,id){
return (function (state_16282){var state_val_16283 = (state_16282[(1)]);if((state_val_16283 === (2)))
{var inst_16279 = (state_16282[(2)]);var inst_16280 = cljs.core.async.close_BANG_.call(null,ret);var state_16282__$1 = (function (){var statearr_16284 = state_16282;(statearr_16284[(7)] = inst_16279);
return statearr_16284;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16282__$1,inst_16280);
} else
{if((state_val_16283 === (1)))
{var inst_16276 = [null,null];var inst_16277 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16276,null));var state_16282__$1 = state_16282;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16282__$1,(2),ret,inst_16277);
} else
{return null;
}
}
});})(c__6192__auto___16292,ret,map__16275,map__16275__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___16292,ret,map__16275,map__16275__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16288 = [null,null,null,null,null,null,null,null];(statearr_16288[(0)] = state_machine__6178__auto__);
(statearr_16288[(1)] = (1));
return statearr_16288;
});
var state_machine__6178__auto____1 = (function (state_16282){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16282);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16289){if((e16289 instanceof Object))
{var ex__6181__auto__ = e16289;var statearr_16290_16293 = state_16282;(statearr_16290_16293[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16282);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16294 = state_16282;
state_16282 = G__16294;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16282){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___16292,ret,map__16275,map__16275__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16291 = f__6193__auto__.call(null);(statearr_16291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___16292);
return statearr_16291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___16292,ret,map__16275,map__16275__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__16295 = cljs.core.rest.call(null,list);
var G__16296 = id;
var G__16297 = (start + (1));
list = G__16295;
id = G__16296;
start = G__16297;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__16299){var map__16300 = p__16299;var map__16300__$1 = ((cljs.core.seq_QMARK_.call(null,map__16300))?cljs.core.apply.call(null,cljs.core.hash_map,map__16300):map__16300);var args = map__16300__$1;var id = cljs.core.get.call(null,map__16300__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__16301_16350 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__16301_16350.done(((function (G__16301_16350,ret,map__16300,map__16300__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__16301_16350,ret,map__16300,map__16300__$1,args,id){
return (function (p1__16298_SHARP_){var obj16303 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__16298_SHARP_ + (1)))+".jpg"))};return obj16303;
});})(filtered,evtId,evt,G__16301_16350,ret,map__16300,map__16300__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16301_16350,ret,map__16300,map__16300__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16301_16350,ret,map__16300,map__16300__$1,args,id){
return (function (state_16331){var state_val_16332 = (state_16331[(1)]);if((state_val_16332 === (8)))
{var inst_16312 = (state_16331[(7)]);var inst_16319 = (state_16331[(2)]);var inst_16320 = (evt["Title"]);var inst_16321 = (evt["Date"]);var inst_16322 = (evt["Content"]);var inst_16323 = (evt["Form"]);var inst_16324 = {"prev_href":inst_16312,"next_href":inst_16319,"title":inst_16320,"date":inst_16321,"sideList":photos,"content":inst_16322,"form":inst_16323};var inst_16325 = [null,inst_16324];var inst_16326 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16325,null));var state_16331__$1 = state_16331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16331__$1,(2),ret,inst_16326);
} else
{if((state_val_16332 === (7)))
{var state_16331__$1 = state_16331;var statearr_16333_16351 = state_16331__$1;(statearr_16333_16351[(2)] = null);
(statearr_16333_16351[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16332 === (6)))
{var inst_16314 = cljs.core.nth.call(null,filtered,nextId);var inst_16315 = cljs.core.first.call(null,inst_16314);var inst_16316 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16315));var state_16331__$1 = state_16331;var statearr_16334_16352 = state_16331__$1;(statearr_16334_16352[(2)] = inst_16316);
(statearr_16334_16352[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16332 === (5)))
{var inst_16312 = (state_16331[(2)]);var state_16331__$1 = (function (){var statearr_16335 = state_16331;(statearr_16335[(7)] = inst_16312);
return statearr_16335;
})();if(cljs.core.truth_(nextId))
{var statearr_16336_16353 = state_16331__$1;(statearr_16336_16353[(1)] = (6));
} else
{var statearr_16337_16354 = state_16331__$1;(statearr_16337_16354[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16332 === (4)))
{var state_16331__$1 = state_16331;var statearr_16338_16355 = state_16331__$1;(statearr_16338_16355[(2)] = null);
(statearr_16338_16355[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16332 === (3)))
{var inst_16307 = cljs.core.nth.call(null,filtered,prevId);var inst_16308 = cljs.core.first.call(null,inst_16307);var inst_16309 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16308));var state_16331__$1 = state_16331;var statearr_16339_16356 = state_16331__$1;(statearr_16339_16356[(2)] = inst_16309);
(statearr_16339_16356[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16332 === (2)))
{var inst_16328 = (state_16331[(2)]);var inst_16329 = cljs.core.async.close_BANG_.call(null,ret);var state_16331__$1 = (function (){var statearr_16340 = state_16331;(statearr_16340[(8)] = inst_16328);
return statearr_16340;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16331__$1,inst_16329);
} else
{if((state_val_16332 === (1)))
{var state_16331__$1 = state_16331;if(cljs.core.truth_(prevId))
{var statearr_16341_16357 = state_16331__$1;(statearr_16341_16357[(1)] = (3));
} else
{var statearr_16342_16358 = state_16331__$1;(statearr_16342_16358[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16301_16350,ret,map__16300,map__16300__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16301_16350,ret,map__16300,map__16300__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16346 = [null,null,null,null,null,null,null,null,null];(statearr_16346[(0)] = state_machine__6178__auto__);
(statearr_16346[(1)] = (1));
return statearr_16346;
});
var state_machine__6178__auto____1 = (function (state_16331){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16331);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16347){if((e16347 instanceof Object))
{var ex__6181__auto__ = e16347;var statearr_16348_16359 = state_16331;(statearr_16348_16359[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16331);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16360 = state_16331;
state_16331 = G__16360;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16331){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16301_16350,ret,map__16300,map__16300__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16349 = f__6193__auto__.call(null);(statearr_16349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16301_16350,ret,map__16300,map__16300__$1,args,id))
);
return c__6192__auto__;
});})(G__16301_16350,ret,map__16300,map__16300__$1,args,id))
);
G__16301_16350.fail(((function (G__16301_16350,ret,map__16300,map__16300__$1,args,id){
return (function (err){return console.log(err);
});})(G__16301_16350,ret,map__16300,map__16300__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
