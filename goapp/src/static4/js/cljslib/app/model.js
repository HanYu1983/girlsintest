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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13100_SHARP_){return cljs.core._EQ_.call(null,view,p1__13100_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13101_SHARP_){return cljs.core._EQ_.call(null,view,p1__13101_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13102_SHARP_){return cljs.core._EQ_.call(null,view,p1__13102_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13103_SHARP_){return cljs.core._EQ_.call(null,view,p1__13103_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13104_SHARP_){return cljs.core._EQ_.call(null,view,p1__13104_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13105_SHARP_){return cljs.core._EQ_.call(null,view,p1__13105_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13106_SHARP_){return cljs.core._EQ_.call(null,view,p1__13106_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13107_SHARP_){return cljs.core._EQ_.call(null,view,p1__13107_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13108_SHARP_){return cljs.core._EQ_.call(null,view,p1__13108_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__13112){var vec__13113 = p__13112;var model = cljs.core.nth.call(null,vec__13113,(0),null);var detail = cljs.core.nth.call(null,vec__13113,(1),null);var G__13114 = (new Date(detail.Date));G__13114.getTime();
return G__13114;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__13117){var vec__13118 = p__13117;var model = cljs.core.nth.call(null,vec__13118,(0),null);var detail = cljs.core.nth.call(null,vec__13118,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__13121){var vec__13122 = p__13121;var model = cljs.core.nth.call(null,vec__13122,(0),null);var detail = cljs.core.nth.call(null,vec__13122,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__13164){var map__13165 = p__13164;var map__13165__$1 = ((cljs.core.seq_QMARK_.call(null,map__13165))?cljs.core.apply.call(null,cljs.core.hash_map,map__13165):map__13165);var args = map__13165__$1;var page = cljs.core.get.call(null,map__13165__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__13165__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__13166_13205 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__13166_13205.done(((function (G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey){
return (function (p__13167){var vec__13168 = p__13167;var model = cljs.core.nth.call(null,vec__13168,(0),null);var detail = cljs.core.nth.call(null,vec__13168,(1),null);var obj13170 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj13170;
});})(modelCountPerPage,filtered,totalPage,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey))
;var dto = (function (){var obj13172 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj13172;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey){
return (function (state_13179){var state_val_13180 = (state_13179[(1)]);if((state_val_13180 === (2)))
{var inst_13176 = (state_13179[(2)]);var inst_13177 = cljs.core.async.close_BANG_.call(null,ret);var state_13179__$1 = (function (){var statearr_13181 = state_13179;(statearr_13181[(7)] = inst_13176);
return statearr_13181;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13179__$1,inst_13177);
} else
{if((state_val_13180 === (1)))
{var inst_13173 = [null,dto];var inst_13174 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13173,null));var state_13179__$1 = state_13179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13179__$1,(2),ret,inst_13174);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13185 = [null,null,null,null,null,null,null,null];(statearr_13185[(0)] = state_machine__6178__auto__);
(statearr_13185[(1)] = (1));
return statearr_13185;
});
var state_machine__6178__auto____1 = (function (state_13179){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13179);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13186){if((e13186 instanceof Object))
{var ex__6181__auto__ = e13186;var statearr_13187_13206 = state_13179;(statearr_13187_13206[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13186;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13207 = state_13179;
state_13179 = G__13207;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13179){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_13188 = f__6193__auto__.call(null);(statearr_13188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey))
);
G__13166_13205.fail(((function (G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey){
return (function (state_13195){var state_val_13196 = (state_13195[(1)]);if((state_val_13196 === (2)))
{var inst_13192 = (state_13195[(2)]);var inst_13193 = cljs.core.async.close_BANG_.call(null,ret);var state_13195__$1 = (function (){var statearr_13197 = state_13195;(statearr_13197[(7)] = inst_13192);
return statearr_13197;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13195__$1,inst_13193);
} else
{if((state_val_13196 === (1)))
{var inst_13189 = [err,null];var inst_13190 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13189,null));var state_13195__$1 = state_13195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13195__$1,(2),ret,inst_13190);
} else
{return null;
}
}
});})(c__6192__auto__,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13201 = [null,null,null,null,null,null,null,null];(statearr_13201[(0)] = state_machine__6178__auto__);
(statearr_13201[(1)] = (1));
return statearr_13201;
});
var state_machine__6178__auto____1 = (function (state_13195){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13195);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13202){if((e13202 instanceof Object))
{var ex__6181__auto__ = e13202;var statearr_13203_13208 = state_13195;(statearr_13203_13208[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13209 = state_13195;
state_13195 = G__13209;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13195){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_13204 = f__6193__auto__.call(null);(statearr_13204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__13166_13205,configType,ret,map__13165,map__13165__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__13267){var map__13268 = p__13267;var map__13268__$1 = ((cljs.core.seq_QMARK_.call(null,map__13268))?cljs.core.apply.call(null,cljs.core.hash_map,map__13268):map__13268);var args = map__13268__$1;var id = cljs.core.get.call(null,map__13268__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__13269_13324 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__13269_13324.done(((function (G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function (p__13270){var vec__13271 = p__13270;var key__$1 = cljs.core.nth.call(null,vec__13271,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__13271,(1),null);var obj13273 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj13273;
});})(dir,detail,filtered,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function iter__13274(s__13275){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function (){var s__13275__$1 = s__13275;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13275__$1);if(temp__4126__auto__)
{var s__13275__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13275__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13275__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13277 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13276 = (0);while(true){
if((i__13276 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__13276);cljs.core.chunk_append.call(null,b__13277,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__13325 = (i__13276 + (1));
i__13276 = G__13325;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13277),iter__13274.call(null,cljs.core.chunk_rest.call(null,s__13275__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13277),null);
}
} else
{var idx = cljs.core.first.call(null,s__13275__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__13274.call(null,cljs.core.rest.call(null,s__13275__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function iter__13278(s__13279){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function (){var s__13279__$1 = s__13279;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13279__$1);if(temp__4126__auto__)
{var s__13279__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13279__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13279__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13281 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13280 = (0);while(true){
if((i__13280 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__13280);cljs.core.chunk_append.call(null,b__13281,(function (){var obj13287 = {"id":url,"url":ServeFn.call(null,url)};return obj13287;
})());
{
var G__13326 = (i__13280 + (1));
i__13280 = G__13326;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13281),iter__13278.call(null,cljs.core.chunk_rest.call(null,s__13279__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13281),null);
}
} else
{var url = cljs.core.first.call(null,s__13279__$2);return cljs.core.cons.call(null,(function (){var obj13289 = {"id":url,"url":ServeFn.call(null,url)};return obj13289;
})(),iter__13278.call(null,cljs.core.rest.call(null,s__13279__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
;var dto = (function (){var obj13291 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj13291;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function (state_13298){var state_val_13299 = (state_13298[(1)]);if((state_val_13299 === (2)))
{var inst_13295 = (state_13298[(2)]);var inst_13296 = cljs.core.async.close_BANG_.call(null,ret);var state_13298__$1 = (function (){var statearr_13300 = state_13298;(statearr_13300[(7)] = inst_13295);
return statearr_13300;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13298__$1,inst_13296);
} else
{if((state_val_13299 === (1)))
{var inst_13292 = [null,dto];var inst_13293 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13292,null));var state_13298__$1 = state_13298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13298__$1,(2),ret,inst_13293);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13304 = [null,null,null,null,null,null,null,null];(statearr_13304[(0)] = state_machine__6178__auto__);
(statearr_13304[(1)] = (1));
return statearr_13304;
});
var state_machine__6178__auto____1 = (function (state_13298){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13298);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13305){if((e13305 instanceof Object))
{var ex__6181__auto__ = e13305;var statearr_13306_13327 = state_13298;(statearr_13306_13327[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13298);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13328 = state_13298;
state_13298 = G__13328;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13298){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13307 = f__6193__auto__.call(null);(statearr_13307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
);
return c__6192__auto__;
});})(G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
);
G__13269_13324.fail(((function (G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function (state_13314){var state_val_13315 = (state_13314[(1)]);if((state_val_13315 === (2)))
{var inst_13311 = (state_13314[(2)]);var inst_13312 = cljs.core.async.close_BANG_.call(null,ret);var state_13314__$1 = (function (){var statearr_13316 = state_13314;(statearr_13316[(7)] = inst_13311);
return statearr_13316;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13314__$1,inst_13312);
} else
{if((state_val_13315 === (1)))
{var inst_13308 = [err,null];var inst_13309 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13308,null));var state_13314__$1 = state_13314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13314__$1,(2),ret,inst_13309);
} else
{return null;
}
}
});})(c__6192__auto__,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13320 = [null,null,null,null,null,null,null,null];(statearr_13320[(0)] = state_machine__6178__auto__);
(statearr_13320[(1)] = (1));
return statearr_13320;
});
var state_machine__6178__auto____1 = (function (state_13314){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13314);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13321){if((e13321 instanceof Object))
{var ex__6181__auto__ = e13321;var statearr_13322_13329 = state_13314;(statearr_13322_13329[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13314);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13330 = state_13314;
state_13314 = G__13330;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13314){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13323 = f__6193__auto__.call(null);(statearr_13323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
);
return c__6192__auto__;
});})(G__13269_13324,ret,configType,map__13268,map__13268__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__13332_13371 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__13332_13371.done(((function (G__13332_13371,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13332_13371,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13332_13371,ret){
return (function (state_13345){var state_val_13346 = (state_13345[(1)]);if((state_val_13346 === (2)))
{var inst_13342 = (state_13345[(2)]);var inst_13343 = cljs.core.async.close_BANG_.call(null,ret);var state_13345__$1 = (function (){var statearr_13347 = state_13345;(statearr_13347[(7)] = inst_13342);
return statearr_13347;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13345__$1,inst_13343);
} else
{if((state_val_13346 === (1)))
{var inst_13335 = detail.ModelKey;var inst_13336 = clojure.string.capitalize.call(null,where);var inst_13337 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13336)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_13338 = {"modelKey":inst_13335,"moreUrl":inst_13337};var inst_13339 = [null,inst_13338];var inst_13340 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13339,null));var state_13345__$1 = state_13345;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13345__$1,(2),ret,inst_13340);
} else
{return null;
}
}
});})(c__6192__auto__,G__13332_13371,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13332_13371,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13351 = [null,null,null,null,null,null,null,null];(statearr_13351[(0)] = state_machine__6178__auto__);
(statearr_13351[(1)] = (1));
return statearr_13351;
});
var state_machine__6178__auto____1 = (function (state_13345){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13345);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13352){if((e13352 instanceof Object))
{var ex__6181__auto__ = e13352;var statearr_13353_13372 = state_13345;(statearr_13353_13372[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13345);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13373 = state_13345;
state_13345 = G__13373;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13345){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13332_13371,ret))
})();var state__6194__auto__ = (function (){var statearr_13354 = f__6193__auto__.call(null);(statearr_13354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13332_13371,ret))
);
return c__6192__auto__;
});})(G__13332_13371,ret))
);
G__13332_13371.fail(((function (G__13332_13371,ret){
return (function (p1__13331_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13332_13371,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13332_13371,ret){
return (function (state_13361){var state_val_13362 = (state_13361[(1)]);if((state_val_13362 === (2)))
{var inst_13358 = (state_13361[(2)]);var inst_13359 = cljs.core.async.close_BANG_.call(null,ret);var state_13361__$1 = (function (){var statearr_13363 = state_13361;(statearr_13363[(7)] = inst_13358);
return statearr_13363;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13361__$1,inst_13359);
} else
{if((state_val_13362 === (1)))
{var inst_13355 = [p1__13331_SHARP_,null];var inst_13356 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13355,null));var state_13361__$1 = state_13361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13361__$1,(2),ret,inst_13356);
} else
{return null;
}
}
});})(c__6192__auto__,G__13332_13371,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13332_13371,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13367 = [null,null,null,null,null,null,null,null];(statearr_13367[(0)] = state_machine__6178__auto__);
(statearr_13367[(1)] = (1));
return statearr_13367;
});
var state_machine__6178__auto____1 = (function (state_13361){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13361);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13368){if((e13368 instanceof Object))
{var ex__6181__auto__ = e13368;var statearr_13369_13374 = state_13361;(statearr_13369_13374[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13361);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13375 = state_13361;
state_13361 = G__13375;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13361){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13332_13371,ret))
})();var state__6194__auto__ = (function (){var statearr_13370 = f__6193__auto__.call(null);(statearr_13370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13332_13371,ret))
);
return c__6192__auto__;
});})(G__13332_13371,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__13376){var map__13377 = p__13376;var map__13377__$1 = ((cljs.core.seq_QMARK_.call(null,map__13377))?cljs.core.apply.call(null,cljs.core.hash_map,map__13377):map__13377);var args = map__13377__$1;var url = cljs.core.get.call(null,map__13377__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___13397 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13397,ret,map__13377,map__13377__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13397,ret,map__13377,map__13377__$1,args,url){
return (function (state_13387){var state_val_13388 = (state_13387[(1)]);if((state_val_13388 === (2)))
{var inst_13384 = (state_13387[(2)]);var inst_13385 = cljs.core.async.close_BANG_.call(null,ret);var state_13387__$1 = (function (){var statearr_13389 = state_13387;(statearr_13389[(7)] = inst_13384);
return statearr_13389;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13387__$1,inst_13385);
} else
{if((state_val_13388 === (1)))
{var inst_13380 = {"url":url};var inst_13381 = [null,inst_13380];var inst_13382 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13381,null));var state_13387__$1 = state_13387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13387__$1,(2),ret,inst_13382);
} else
{return null;
}
}
});})(c__6192__auto___13397,ret,map__13377,map__13377__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___13397,ret,map__13377,map__13377__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13393 = [null,null,null,null,null,null,null,null];(statearr_13393[(0)] = state_machine__6178__auto__);
(statearr_13393[(1)] = (1));
return statearr_13393;
});
var state_machine__6178__auto____1 = (function (state_13387){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13387);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13394){if((e13394 instanceof Object))
{var ex__6181__auto__ = e13394;var statearr_13395_13398 = state_13387;(statearr_13395_13398[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13399 = state_13387;
state_13387 = G__13399;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13387){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13397,ret,map__13377,map__13377__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_13396 = f__6193__auto__.call(null);(statearr_13396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13397);
return statearr_13396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13397,ret,map__13377,map__13377__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__13400){var map__13401 = p__13400;var map__13401__$1 = ((cljs.core.seq_QMARK_.call(null,map__13401))?cljs.core.apply.call(null,cljs.core.hash_map,map__13401):map__13401);var args = map__13401__$1;var id = cljs.core.get.call(null,map__13401__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___13418 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13418,ret,map__13401,map__13401__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13418,ret,map__13401,map__13401__$1,args,id){
return (function (state_13408){var state_val_13409 = (state_13408[(1)]);if((state_val_13409 === (2)))
{var inst_13405 = (state_13408[(2)]);var inst_13406 = cljs.core.async.close_BANG_.call(null,ret);var state_13408__$1 = (function (){var statearr_13410 = state_13408;(statearr_13410[(7)] = inst_13405);
return statearr_13410;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13408__$1,inst_13406);
} else
{if((state_val_13409 === (1)))
{var inst_13402 = [null,null];var inst_13403 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13402,null));var state_13408__$1 = state_13408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13408__$1,(2),ret,inst_13403);
} else
{return null;
}
}
});})(c__6192__auto___13418,ret,map__13401,map__13401__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___13418,ret,map__13401,map__13401__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13414 = [null,null,null,null,null,null,null,null];(statearr_13414[(0)] = state_machine__6178__auto__);
(statearr_13414[(1)] = (1));
return statearr_13414;
});
var state_machine__6178__auto____1 = (function (state_13408){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13408);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13415){if((e13415 instanceof Object))
{var ex__6181__auto__ = e13415;var statearr_13416_13419 = state_13408;(statearr_13416_13419[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13408);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13420 = state_13408;
state_13408 = G__13420;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13408){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13418,ret,map__13401,map__13401__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13417 = f__6193__auto__.call(null);(statearr_13417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13418);
return statearr_13417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13418,ret,map__13401,map__13401__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__13421 = cljs.core.rest.call(null,list);
var G__13422 = id;
var G__13423 = (start + (1));
list = G__13421;
id = G__13422;
start = G__13423;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__13425){var map__13426 = p__13425;var map__13426__$1 = ((cljs.core.seq_QMARK_.call(null,map__13426))?cljs.core.apply.call(null,cljs.core.hash_map,map__13426):map__13426);var args = map__13426__$1;var id = cljs.core.get.call(null,map__13426__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__13427_13476 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__13427_13476.done(((function (G__13427_13476,ret,map__13426,map__13426__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__13427_13476,ret,map__13426,map__13426__$1,args,id){
return (function (p1__13424_SHARP_){var obj13429 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__13424_SHARP_ + (1)))+".jpg"))};return obj13429;
});})(filtered,evtId,evt,G__13427_13476,ret,map__13426,map__13426__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13427_13476,ret,map__13426,map__13426__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13427_13476,ret,map__13426,map__13426__$1,args,id){
return (function (state_13457){var state_val_13458 = (state_13457[(1)]);if((state_val_13458 === (8)))
{var inst_13438 = (state_13457[(7)]);var inst_13445 = (state_13457[(2)]);var inst_13446 = (evt["Title"]);var inst_13447 = (evt["Date"]);var inst_13448 = (evt["Content"]);var inst_13449 = (evt["Form"]);var inst_13450 = {"prev_href":inst_13438,"next_href":inst_13445,"title":inst_13446,"date":inst_13447,"sideList":photos,"content":inst_13448,"form":inst_13449};var inst_13451 = [null,inst_13450];var inst_13452 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13451,null));var state_13457__$1 = state_13457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13457__$1,(2),ret,inst_13452);
} else
{if((state_val_13458 === (7)))
{var state_13457__$1 = state_13457;var statearr_13459_13477 = state_13457__$1;(statearr_13459_13477[(2)] = null);
(statearr_13459_13477[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13458 === (6)))
{var inst_13440 = cljs.core.nth.call(null,filtered,nextId);var inst_13441 = cljs.core.first.call(null,inst_13440);var inst_13442 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13441));var state_13457__$1 = state_13457;var statearr_13460_13478 = state_13457__$1;(statearr_13460_13478[(2)] = inst_13442);
(statearr_13460_13478[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13458 === (5)))
{var inst_13438 = (state_13457[(2)]);var state_13457__$1 = (function (){var statearr_13461 = state_13457;(statearr_13461[(7)] = inst_13438);
return statearr_13461;
})();if(cljs.core.truth_(nextId))
{var statearr_13462_13479 = state_13457__$1;(statearr_13462_13479[(1)] = (6));
} else
{var statearr_13463_13480 = state_13457__$1;(statearr_13463_13480[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13458 === (4)))
{var state_13457__$1 = state_13457;var statearr_13464_13481 = state_13457__$1;(statearr_13464_13481[(2)] = null);
(statearr_13464_13481[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13458 === (3)))
{var inst_13433 = cljs.core.nth.call(null,filtered,prevId);var inst_13434 = cljs.core.first.call(null,inst_13433);var inst_13435 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13434));var state_13457__$1 = state_13457;var statearr_13465_13482 = state_13457__$1;(statearr_13465_13482[(2)] = inst_13435);
(statearr_13465_13482[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13458 === (2)))
{var inst_13454 = (state_13457[(2)]);var inst_13455 = cljs.core.async.close_BANG_.call(null,ret);var state_13457__$1 = (function (){var statearr_13466 = state_13457;(statearr_13466[(8)] = inst_13454);
return statearr_13466;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13457__$1,inst_13455);
} else
{if((state_val_13458 === (1)))
{var state_13457__$1 = state_13457;if(cljs.core.truth_(prevId))
{var statearr_13467_13483 = state_13457__$1;(statearr_13467_13483[(1)] = (3));
} else
{var statearr_13468_13484 = state_13457__$1;(statearr_13468_13484[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13427_13476,ret,map__13426,map__13426__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13427_13476,ret,map__13426,map__13426__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13472 = [null,null,null,null,null,null,null,null,null];(statearr_13472[(0)] = state_machine__6178__auto__);
(statearr_13472[(1)] = (1));
return statearr_13472;
});
var state_machine__6178__auto____1 = (function (state_13457){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13457);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13473){if((e13473 instanceof Object))
{var ex__6181__auto__ = e13473;var statearr_13474_13485 = state_13457;(statearr_13474_13485[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13457);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13486 = state_13457;
state_13457 = G__13486;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13457){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13427_13476,ret,map__13426,map__13426__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13475 = f__6193__auto__.call(null);(statearr_13475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13427_13476,ret,map__13426,map__13426__$1,args,id))
);
return c__6192__auto__;
});})(G__13427_13476,ret,map__13426,map__13426__$1,args,id))
);
G__13427_13476.fail(((function (G__13427_13476,ret,map__13426,map__13426__$1,args,id){
return (function (err){return console.log(err);
});})(G__13427_13476,ret,map__13426,map__13426__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
