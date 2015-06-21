// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11024_SHARP_){return cljs.core._EQ_.call(null,view,p1__11024_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11025_SHARP_){return cljs.core._EQ_.call(null,view,p1__11025_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11026_SHARP_){return cljs.core._EQ_.call(null,view,p1__11026_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11027_SHARP_){return cljs.core._EQ_.call(null,view,p1__11027_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11028_SHARP_){return cljs.core._EQ_.call(null,view,p1__11028_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11029_SHARP_){return cljs.core._EQ_.call(null,view,p1__11029_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11030_SHARP_){return cljs.core._EQ_.call(null,view,p1__11030_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11031_SHARP_){return cljs.core._EQ_.call(null,view,p1__11031_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11032_SHARP_){return cljs.core._EQ_.call(null,view,p1__11032_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__11036){var vec__11037 = p__11036;var model = cljs.core.nth.call(null,vec__11037,(0),null);var detail = cljs.core.nth.call(null,vec__11037,(1),null);var G__11038 = (new Date(detail.Date));G__11038.getTime();
return G__11038;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__11041){var vec__11042 = p__11041;var model = cljs.core.nth.call(null,vec__11042,(0),null);var detail = cljs.core.nth.call(null,vec__11042,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__11045){var vec__11046 = p__11045;var model = cljs.core.nth.call(null,vec__11046,(0),null);var detail = cljs.core.nth.call(null,vec__11046,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11088){var map__11089 = p__11088;var map__11089__$1 = ((cljs.core.seq_QMARK_.call(null,map__11089))?cljs.core.apply.call(null,cljs.core.hash_map,map__11089):map__11089);var args = map__11089__$1;var page = cljs.core.get.call(null,map__11089__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__11089__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__11090_11129 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11090_11129.done(((function (G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey){
return (function (p__11091){var vec__11092 = p__11091;var model = cljs.core.nth.call(null,vec__11092,(0),null);var detail = cljs.core.nth.call(null,vec__11092,(1),null);var obj11094 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj11094;
});})(modelCountPerPage,filtered,totalPage,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey))
;var dto = (function (){var obj11096 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj11096;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey){
return (function (state_11103){var state_val_11104 = (state_11103[(1)]);if((state_val_11104 === (2)))
{var inst_11100 = (state_11103[(2)]);var inst_11101 = cljs.core.async.close_BANG_.call(null,ret);var state_11103__$1 = (function (){var statearr_11105 = state_11103;(statearr_11105[(7)] = inst_11100);
return statearr_11105;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11103__$1,inst_11101);
} else
{if((state_val_11104 === (1)))
{var inst_11097 = [null,dto];var inst_11098 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11097,null));var state_11103__$1 = state_11103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11103__$1,(2),ret,inst_11098);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11109 = [null,null,null,null,null,null,null,null];(statearr_11109[(0)] = state_machine__6178__auto__);
(statearr_11109[(1)] = (1));
return statearr_11109;
});
var state_machine__6178__auto____1 = (function (state_11103){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11103);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11110){if((e11110 instanceof Object))
{var ex__6181__auto__ = e11110;var statearr_11111_11130 = state_11103;(statearr_11111_11130[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11131 = state_11103;
state_11103 = G__11131;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11103){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11112 = f__6193__auto__.call(null);(statearr_11112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey))
);
G__11090_11129.fail(((function (G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey){
return (function (state_11119){var state_val_11120 = (state_11119[(1)]);if((state_val_11120 === (2)))
{var inst_11116 = (state_11119[(2)]);var inst_11117 = cljs.core.async.close_BANG_.call(null,ret);var state_11119__$1 = (function (){var statearr_11121 = state_11119;(statearr_11121[(7)] = inst_11116);
return statearr_11121;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11119__$1,inst_11117);
} else
{if((state_val_11120 === (1)))
{var inst_11113 = [err,null];var inst_11114 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11113,null));var state_11119__$1 = state_11119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11119__$1,(2),ret,inst_11114);
} else
{return null;
}
}
});})(c__6192__auto__,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11125 = [null,null,null,null,null,null,null,null];(statearr_11125[(0)] = state_machine__6178__auto__);
(statearr_11125[(1)] = (1));
return statearr_11125;
});
var state_machine__6178__auto____1 = (function (state_11119){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11119);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11126){if((e11126 instanceof Object))
{var ex__6181__auto__ = e11126;var statearr_11127_11132 = state_11119;(statearr_11127_11132[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11133 = state_11119;
state_11119 = G__11133;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11119){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11128 = f__6193__auto__.call(null);(statearr_11128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11090_11129,configType,ret,map__11089,map__11089__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11191){var map__11192 = p__11191;var map__11192__$1 = ((cljs.core.seq_QMARK_.call(null,map__11192))?cljs.core.apply.call(null,cljs.core.hash_map,map__11192):map__11192);var args = map__11192__$1;var id = cljs.core.get.call(null,map__11192__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__11193_11248 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11193_11248.done(((function (G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function (p__11194){var vec__11195 = p__11194;var key__$1 = cljs.core.nth.call(null,vec__11195,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11195,(1),null);var obj11197 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj11197;
});})(dir,detail,filtered,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function iter__11198(s__11199){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function (){var s__11199__$1 = s__11199;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11199__$1);if(temp__4126__auto__)
{var s__11199__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11199__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11199__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11201 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11200 = (0);while(true){
if((i__11200 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__11200);cljs.core.chunk_append.call(null,b__11201,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__11249 = (i__11200 + (1));
i__11200 = G__11249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11201),iter__11198.call(null,cljs.core.chunk_rest.call(null,s__11199__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11201),null);
}
} else
{var idx = cljs.core.first.call(null,s__11199__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__11198.call(null,cljs.core.rest.call(null,s__11199__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function iter__11202(s__11203){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function (){var s__11203__$1 = s__11203;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11203__$1);if(temp__4126__auto__)
{var s__11203__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11203__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11203__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11205 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11204 = (0);while(true){
if((i__11204 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__11204);cljs.core.chunk_append.call(null,b__11205,(function (){var obj11211 = {"id":url,"url":ServeFn.call(null,url)};return obj11211;
})());
{
var G__11250 = (i__11204 + (1));
i__11204 = G__11250;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11205),iter__11202.call(null,cljs.core.chunk_rest.call(null,s__11203__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11205),null);
}
} else
{var url = cljs.core.first.call(null,s__11203__$2);return cljs.core.cons.call(null,(function (){var obj11213 = {"id":url,"url":ServeFn.call(null,url)};return obj11213;
})(),iter__11202.call(null,cljs.core.rest.call(null,s__11203__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
;var dto = (function (){var obj11215 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj11215;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function (state_11222){var state_val_11223 = (state_11222[(1)]);if((state_val_11223 === (2)))
{var inst_11219 = (state_11222[(2)]);var inst_11220 = cljs.core.async.close_BANG_.call(null,ret);var state_11222__$1 = (function (){var statearr_11224 = state_11222;(statearr_11224[(7)] = inst_11219);
return statearr_11224;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11222__$1,inst_11220);
} else
{if((state_val_11223 === (1)))
{var inst_11216 = [null,dto];var inst_11217 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11216,null));var state_11222__$1 = state_11222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11222__$1,(2),ret,inst_11217);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11228 = [null,null,null,null,null,null,null,null];(statearr_11228[(0)] = state_machine__6178__auto__);
(statearr_11228[(1)] = (1));
return statearr_11228;
});
var state_machine__6178__auto____1 = (function (state_11222){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11229){if((e11229 instanceof Object))
{var ex__6181__auto__ = e11229;var statearr_11230_11251 = state_11222;(statearr_11230_11251[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11252 = state_11222;
state_11222 = G__11252;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11222){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11231 = f__6193__auto__.call(null);(statearr_11231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
);
return c__6192__auto__;
});})(G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
);
G__11193_11248.fail(((function (G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function (state_11238){var state_val_11239 = (state_11238[(1)]);if((state_val_11239 === (2)))
{var inst_11235 = (state_11238[(2)]);var inst_11236 = cljs.core.async.close_BANG_.call(null,ret);var state_11238__$1 = (function (){var statearr_11240 = state_11238;(statearr_11240[(7)] = inst_11235);
return statearr_11240;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11238__$1,inst_11236);
} else
{if((state_val_11239 === (1)))
{var inst_11232 = [err,null];var inst_11233 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11232,null));var state_11238__$1 = state_11238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11238__$1,(2),ret,inst_11233);
} else
{return null;
}
}
});})(c__6192__auto__,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11244 = [null,null,null,null,null,null,null,null];(statearr_11244[(0)] = state_machine__6178__auto__);
(statearr_11244[(1)] = (1));
return statearr_11244;
});
var state_machine__6178__auto____1 = (function (state_11238){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11245){if((e11245 instanceof Object))
{var ex__6181__auto__ = e11245;var statearr_11246_11253 = state_11238;(statearr_11246_11253[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11238);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11245;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11254 = state_11238;
state_11238 = G__11254;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11238){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11247 = f__6193__auto__.call(null);(statearr_11247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
);
return c__6192__auto__;
});})(G__11193_11248,ret,configType,map__11192,map__11192__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__11256_11293 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__11256_11293.done(((function (G__11256_11293,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11256_11293,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11256_11293,ret){
return (function (state_11267){var state_val_11268 = (state_11267[(1)]);if((state_val_11268 === (2)))
{var inst_11264 = (state_11267[(2)]);var inst_11265 = cljs.core.async.close_BANG_.call(null,ret);var state_11267__$1 = (function (){var statearr_11269 = state_11267;(statearr_11269[(7)] = inst_11264);
return statearr_11269;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11267__$1,inst_11265);
} else
{if((state_val_11268 === (1)))
{var inst_11259 = detail.ModelKey;var inst_11260 = {"modelKey":inst_11259,"moreUrl":"#"};var inst_11261 = [null,inst_11260];var inst_11262 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11261,null));var state_11267__$1 = state_11267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11267__$1,(2),ret,inst_11262);
} else
{return null;
}
}
});})(c__6192__auto__,G__11256_11293,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11256_11293,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11273 = [null,null,null,null,null,null,null,null];(statearr_11273[(0)] = state_machine__6178__auto__);
(statearr_11273[(1)] = (1));
return statearr_11273;
});
var state_machine__6178__auto____1 = (function (state_11267){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11267);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11274){if((e11274 instanceof Object))
{var ex__6181__auto__ = e11274;var statearr_11275_11294 = state_11267;(statearr_11275_11294[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11295 = state_11267;
state_11267 = G__11295;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11267){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11256_11293,ret))
})();var state__6194__auto__ = (function (){var statearr_11276 = f__6193__auto__.call(null);(statearr_11276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11256_11293,ret))
);
return c__6192__auto__;
});})(G__11256_11293,ret))
);
G__11256_11293.fail(((function (G__11256_11293,ret){
return (function (p1__11255_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11256_11293,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11256_11293,ret){
return (function (state_11283){var state_val_11284 = (state_11283[(1)]);if((state_val_11284 === (2)))
{var inst_11280 = (state_11283[(2)]);var inst_11281 = cljs.core.async.close_BANG_.call(null,ret);var state_11283__$1 = (function (){var statearr_11285 = state_11283;(statearr_11285[(7)] = inst_11280);
return statearr_11285;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11283__$1,inst_11281);
} else
{if((state_val_11284 === (1)))
{var inst_11277 = [p1__11255_SHARP_,null];var inst_11278 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11277,null));var state_11283__$1 = state_11283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11283__$1,(2),ret,inst_11278);
} else
{return null;
}
}
});})(c__6192__auto__,G__11256_11293,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11256_11293,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11289 = [null,null,null,null,null,null,null,null];(statearr_11289[(0)] = state_machine__6178__auto__);
(statearr_11289[(1)] = (1));
return statearr_11289;
});
var state_machine__6178__auto____1 = (function (state_11283){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11290){if((e11290 instanceof Object))
{var ex__6181__auto__ = e11290;var statearr_11291_11296 = state_11283;(statearr_11291_11296[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11297 = state_11283;
state_11283 = G__11297;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11283){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11256_11293,ret))
})();var state__6194__auto__ = (function (){var statearr_11292 = f__6193__auto__.call(null);(statearr_11292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11256_11293,ret))
);
return c__6192__auto__;
});})(G__11256_11293,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__11298){var map__11299 = p__11298;var map__11299__$1 = ((cljs.core.seq_QMARK_.call(null,map__11299))?cljs.core.apply.call(null,cljs.core.hash_map,map__11299):map__11299);var args = map__11299__$1;var url = cljs.core.get.call(null,map__11299__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11320 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11320,ret,map__11299,map__11299__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11320,ret,map__11299,map__11299__$1,args,url){
return (function (state_11310){var state_val_11311 = (state_11310[(1)]);if((state_val_11311 === (2)))
{var inst_11307 = (state_11310[(2)]);var inst_11308 = cljs.core.async.close_BANG_.call(null,ret);var state_11310__$1 = (function (){var statearr_11312 = state_11310;(statearr_11312[(7)] = inst_11307);
return statearr_11312;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11310__$1,inst_11308);
} else
{if((state_val_11311 === (1)))
{var inst_11302 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_11303 = {"url":inst_11302};var inst_11304 = [null,inst_11303];var inst_11305 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11304,null));var state_11310__$1 = state_11310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11310__$1,(2),ret,inst_11305);
} else
{return null;
}
}
});})(c__6192__auto___11320,ret,map__11299,map__11299__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___11320,ret,map__11299,map__11299__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11316 = [null,null,null,null,null,null,null,null];(statearr_11316[(0)] = state_machine__6178__auto__);
(statearr_11316[(1)] = (1));
return statearr_11316;
});
var state_machine__6178__auto____1 = (function (state_11310){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11310);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11317){if((e11317 instanceof Object))
{var ex__6181__auto__ = e11317;var statearr_11318_11321 = state_11310;(statearr_11318_11321[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11310);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11317;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11322 = state_11310;
state_11310 = G__11322;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11310){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11320,ret,map__11299,map__11299__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_11319 = f__6193__auto__.call(null);(statearr_11319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11320);
return statearr_11319;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11320,ret,map__11299,map__11299__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__11323){var map__11324 = p__11323;var map__11324__$1 = ((cljs.core.seq_QMARK_.call(null,map__11324))?cljs.core.apply.call(null,cljs.core.hash_map,map__11324):map__11324);var args = map__11324__$1;var id = cljs.core.get.call(null,map__11324__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11341 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11341,ret,map__11324,map__11324__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11341,ret,map__11324,map__11324__$1,args,id){
return (function (state_11331){var state_val_11332 = (state_11331[(1)]);if((state_val_11332 === (2)))
{var inst_11328 = (state_11331[(2)]);var inst_11329 = cljs.core.async.close_BANG_.call(null,ret);var state_11331__$1 = (function (){var statearr_11333 = state_11331;(statearr_11333[(7)] = inst_11328);
return statearr_11333;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11331__$1,inst_11329);
} else
{if((state_val_11332 === (1)))
{var inst_11325 = [null,null];var inst_11326 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11325,null));var state_11331__$1 = state_11331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11331__$1,(2),ret,inst_11326);
} else
{return null;
}
}
});})(c__6192__auto___11341,ret,map__11324,map__11324__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___11341,ret,map__11324,map__11324__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11337 = [null,null,null,null,null,null,null,null];(statearr_11337[(0)] = state_machine__6178__auto__);
(statearr_11337[(1)] = (1));
return statearr_11337;
});
var state_machine__6178__auto____1 = (function (state_11331){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11331);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11338){if((e11338 instanceof Object))
{var ex__6181__auto__ = e11338;var statearr_11339_11342 = state_11331;(statearr_11339_11342[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11331);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11343 = state_11331;
state_11331 = G__11343;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11331){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11341,ret,map__11324,map__11324__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11340 = f__6193__auto__.call(null);(statearr_11340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11341);
return statearr_11340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11341,ret,map__11324,map__11324__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__11344 = cljs.core.rest.call(null,list);
var G__11345 = id;
var G__11346 = (start + (1));
list = G__11344;
id = G__11345;
start = G__11346;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__11348){var map__11349 = p__11348;var map__11349__$1 = ((cljs.core.seq_QMARK_.call(null,map__11349))?cljs.core.apply.call(null,cljs.core.hash_map,map__11349):map__11349);var args = map__11349__$1;var id = cljs.core.get.call(null,map__11349__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__11350_11382 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__11350_11382.done(((function (G__11350_11382,ret,map__11349,map__11349__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__11350_11382,ret,map__11349,map__11349__$1,args,id){
return (function (p1__11347_SHARP_){var obj11352 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__11347_SHARP_ + (1)))+".jpg"))};return obj11352;
});})(filtered,evtId,evt,G__11350_11382,ret,map__11349,map__11349__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11350_11382,ret,map__11349,map__11349__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11350_11382,ret,map__11349,map__11349__$1,args,id){
return (function (state_11372){var state_val_11373 = (state_11372[(1)]);if((state_val_11373 === (2)))
{var inst_11369 = (state_11372[(2)]);var inst_11370 = cljs.core.async.close_BANG_.call(null,ret);var state_11372__$1 = (function (){var statearr_11374 = state_11372;(statearr_11374[(7)] = inst_11369);
return statearr_11374;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11372__$1,inst_11370);
} else
{if((state_val_11373 === (1)))
{var inst_11355 = cljs.core.nth.call(null,filtered,idx);var inst_11356 = cljs.core.first.call(null,inst_11355);var inst_11357 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11356));var inst_11358 = cljs.core.nth.call(null,filtered,idx2);var inst_11359 = cljs.core.first.call(null,inst_11358);var inst_11360 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11359));var inst_11361 = (evt["Title"]);var inst_11362 = (evt["Date"]);var inst_11363 = (evt["Content"]);var inst_11364 = (evt["Form"]);var inst_11365 = {"prev_href":inst_11357,"next_href":inst_11360,"title":inst_11361,"date":inst_11362,"sideList":photos,"content":inst_11363,"form":inst_11364};var inst_11366 = [null,inst_11365];var inst_11367 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11366,null));var state_11372__$1 = state_11372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11372__$1,(2),ret,inst_11367);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11350_11382,ret,map__11349,map__11349__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11350_11382,ret,map__11349,map__11349__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11378 = [null,null,null,null,null,null,null,null];(statearr_11378[(0)] = state_machine__6178__auto__);
(statearr_11378[(1)] = (1));
return statearr_11378;
});
var state_machine__6178__auto____1 = (function (state_11372){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11372);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11379){if((e11379 instanceof Object))
{var ex__6181__auto__ = e11379;var statearr_11380_11383 = state_11372;(statearr_11380_11383[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11372);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11384 = state_11372;
state_11372 = G__11384;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11372){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11350_11382,ret,map__11349,map__11349__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11381 = f__6193__auto__.call(null);(statearr_11381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__11350_11382,ret,map__11349,map__11349__$1,args,id))
);
return c__6192__auto__;
});})(G__11350_11382,ret,map__11349,map__11349__$1,args,id))
);
G__11350_11382.fail(((function (G__11350_11382,ret,map__11349,map__11349__$1,args,id){
return (function (err){return console.log(err);
});})(G__11350_11382,ret,map__11349,map__11349__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
