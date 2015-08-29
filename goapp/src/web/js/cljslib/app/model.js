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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22213_SHARP_){return cljs.core._EQ_.call(null,view,p1__22213_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22214_SHARP_){return cljs.core._EQ_.call(null,view,p1__22214_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22215_SHARP_){return cljs.core._EQ_.call(null,view,p1__22215_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22216_SHARP_){return cljs.core._EQ_.call(null,view,p1__22216_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22217_SHARP_){return cljs.core._EQ_.call(null,view,p1__22217_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22218_SHARP_){return cljs.core._EQ_.call(null,view,p1__22218_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22219_SHARP_){return cljs.core._EQ_.call(null,view,p1__22219_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22220_SHARP_){return cljs.core._EQ_.call(null,view,p1__22220_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22221_SHARP_){return cljs.core._EQ_.call(null,view,p1__22221_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__22225){var vec__22226 = p__22225;var model = cljs.core.nth.call(null,vec__22226,(0),null);var detail = cljs.core.nth.call(null,vec__22226,(1),null);var G__22227 = (new Date(detail.Date));G__22227.getTime();
return G__22227;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__22230){var vec__22231 = p__22230;var model = cljs.core.nth.call(null,vec__22231,(0),null);var detail = cljs.core.nth.call(null,vec__22231,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__22234){var vec__22235 = p__22234;var model = cljs.core.nth.call(null,vec__22235,(0),null);var detail = cljs.core.nth.call(null,vec__22235,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.SearchRelative = (function SearchRelative(tags,details){return cljs.core.shuffle.call(null,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (tag){return cljs.core.filter.call(null,(function (p__22238){var vec__22239 = p__22238;var model = cljs.core.nth.call(null,vec__22239,(0),null);var detail = cljs.core.nth.call(null,vec__22239,(1),null);return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+".?")),detail.Tag);
}),details);
}),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,tags,/,/))))));
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__22287,key,p__22288){var map__22289 = p__22287;var map__22289__$1 = ((cljs.core.seq_QMARK_.call(null,map__22289))?cljs.core.apply.call(null,cljs.core.hash_map,map__22289):map__22289);var ctx = map__22289__$1;var media_type = cljs.core.get.call(null,map__22289__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__22290 = p__22288;var map__22290__$1 = ((cljs.core.seq_QMARK_.call(null,map__22290))?cljs.core.apply.call(null,cljs.core.hash_map,map__22290):map__22290);var args = map__22290__$1;var page = cljs.core.get.call(null,map__22290__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__22290__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__22291_22334 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__22291_22334.done(((function (G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey){
return (function (p__22292){var vec__22293 = p__22292;var model = cljs.core.nth.call(null,vec__22293,(0),null);var detail = cljs.core.nth.call(null,vec__22293,(1),null);var vec__22294 = (function (){var pred__22295 = cljs.core._EQ_;var expr__22296 = media_type;if(cljs.core.truth_(pred__22295.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__22296)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(242),(363)], null);
} else
{if(cljs.core.truth_(pred__22295.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__22296)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{if(cljs.core.truth_(pred__22295.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__22296)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__22294,(0),null);var h = cljs.core.nth.call(null,vec__22294,(1),null);var obj22299 = {"visibleDate":false,"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj22299;
});})(modelCountPerPage,filtered,totalPage,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey))
;var dto = (function (){var obj22301 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj22301;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey){
return (function (state_22308){var state_val_22309 = (state_22308[(1)]);if((state_val_22309 === (2)))
{var inst_22305 = (state_22308[(2)]);var inst_22306 = cljs.core.async.close_BANG_.call(null,ret);var state_22308__$1 = (function (){var statearr_22310 = state_22308;(statearr_22310[(7)] = inst_22305);
return statearr_22310;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22308__$1,inst_22306);
} else
{if((state_val_22309 === (1)))
{var inst_22302 = [null,dto];var inst_22303 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22302,null));var state_22308__$1 = state_22308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22308__$1,(2),ret,inst_22303);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22314 = [null,null,null,null,null,null,null,null];(statearr_22314[(0)] = state_machine__6178__auto__);
(statearr_22314[(1)] = (1));
return statearr_22314;
});
var state_machine__6178__auto____1 = (function (state_22308){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22308);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22315){if((e22315 instanceof Object))
{var ex__6181__auto__ = e22315;var statearr_22316_22335 = state_22308;(statearr_22316_22335[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22308);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22315;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22336 = state_22308;
state_22308 = G__22336;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22308){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_22317 = f__6193__auto__.call(null);(statearr_22317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey))
);
G__22291_22334.fail(((function (G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey){
return (function (state_22324){var state_val_22325 = (state_22324[(1)]);if((state_val_22325 === (2)))
{var inst_22321 = (state_22324[(2)]);var inst_22322 = cljs.core.async.close_BANG_.call(null,ret);var state_22324__$1 = (function (){var statearr_22326 = state_22324;(statearr_22326[(7)] = inst_22321);
return statearr_22326;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22324__$1,inst_22322);
} else
{if((state_val_22325 === (1)))
{var inst_22318 = [err,null];var inst_22319 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22318,null));var state_22324__$1 = state_22324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22324__$1,(2),ret,inst_22319);
} else
{return null;
}
}
});})(c__6192__auto__,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22330 = [null,null,null,null,null,null,null,null];(statearr_22330[(0)] = state_machine__6178__auto__);
(statearr_22330[(1)] = (1));
return statearr_22330;
});
var state_machine__6178__auto____1 = (function (state_22324){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22324);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22331){if((e22331 instanceof Object))
{var ex__6181__auto__ = e22331;var statearr_22332_22337 = state_22324;(statearr_22332_22337[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22324);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22331;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22338 = state_22324;
state_22324 = G__22338;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22324){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_22333 = f__6193__auto__.call(null);(statearr_22333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__22291_22334,configType,ret,map__22289,map__22289__$1,ctx,media_type,map__22290,map__22290__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__22398){var map__22399 = p__22398;var map__22399__$1 = ((cljs.core.seq_QMARK_.call(null,map__22399))?cljs.core.apply.call(null,cljs.core.hash_map,map__22399):map__22399);var args = map__22399__$1;var id = cljs.core.get.call(null,map__22399__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__22400_22457 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__22400_22457.done(((function (G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var relativeDetails = cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (dir,detail,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (p__22401){var vec__22402 = p__22401;var model = cljs.core.nth.call(null,vec__22402,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__22402,(1),null);return cljs.core.not_EQ_.call(null,model,id);
});})(dir,detail,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
,app.model.SearchRelative.call(null,detail.Tag,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertHeadDTO = ((function (dir,detail,relativeDetails,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (p__22403){var vec__22404 = p__22403;var key__$1 = cljs.core.nth.call(null,vec__22404,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__22404,(1),null);var obj22406 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj22406;
});})(dir,detail,relativeDetails,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function iter__22407(s__22408){return (new cljs.core.LazySeq(null,((function (dir,detail,relativeDetails,ConvertHeadDTO,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (){var s__22408__$1 = s__22408;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22408__$1);if(temp__4126__auto__)
{var s__22408__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22408__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__22408__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__22410 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__22409 = (0);while(true){
if((i__22409 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__22409);cljs.core.chunk_append.call(null,b__22410,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__22458 = (i__22409 + (1));
i__22409 = G__22458;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22410),iter__22407.call(null,cljs.core.chunk_rest.call(null,s__22408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22410),null);
}
} else
{var idx = cljs.core.first.call(null,s__22408__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__22407.call(null,cljs.core.rest.call(null,s__22408__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
,null,null));
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function iter__22411(s__22412){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (){var s__22412__$1 = s__22412;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22412__$1);if(temp__4126__auto__)
{var s__22412__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22412__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__22412__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__22414 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__22413 = (0);while(true){
if((i__22413 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__22413);cljs.core.chunk_append.call(null,b__22414,(function (){var obj22420 = {"id":url,"url":ServeFn.call(null,url)};return obj22420;
})());
{
var G__22459 = (i__22413 + (1));
i__22413 = G__22459;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22414),iter__22411.call(null,cljs.core.chunk_rest.call(null,s__22412__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22414),null);
}
} else
{var url = cljs.core.first.call(null,s__22412__$2);return cljs.core.cons.call(null,(function (){var obj22422 = {"id":url,"url":ServeFn.call(null,url)};return obj22422;
})(),iter__22411.call(null,cljs.core.rest.call(null,s__22412__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
,null,null));
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
;var dto = (function (){var obj22424 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,relativeDetails)),"date":detail.Date,"protalk":detail.Comment};return obj22424;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (state_22431){var state_val_22432 = (state_22431[(1)]);if((state_val_22432 === (2)))
{var inst_22428 = (state_22431[(2)]);var inst_22429 = cljs.core.async.close_BANG_.call(null,ret);var state_22431__$1 = (function (){var statearr_22433 = state_22431;(statearr_22433[(7)] = inst_22428);
return statearr_22433;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22431__$1,inst_22429);
} else
{if((state_val_22432 === (1)))
{var inst_22425 = [null,dto];var inst_22426 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22425,null));var state_22431__$1 = state_22431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22431__$1,(2),ret,inst_22426);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22437 = [null,null,null,null,null,null,null,null];(statearr_22437[(0)] = state_machine__6178__auto__);
(statearr_22437[(1)] = (1));
return statearr_22437;
});
var state_machine__6178__auto____1 = (function (state_22431){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22431);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22438){if((e22438 instanceof Object))
{var ex__6181__auto__ = e22438;var statearr_22439_22460 = state_22431;(statearr_22439_22460[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22431);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22461 = state_22431;
state_22431 = G__22461;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22431){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_22440 = f__6193__auto__.call(null);(statearr_22440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
);
return c__6192__auto__;
});})(G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
);
G__22400_22457.fail(((function (G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function (state_22447){var state_val_22448 = (state_22447[(1)]);if((state_val_22448 === (2)))
{var inst_22444 = (state_22447[(2)]);var inst_22445 = cljs.core.async.close_BANG_.call(null,ret);var state_22447__$1 = (function (){var statearr_22449 = state_22447;(statearr_22449[(7)] = inst_22444);
return statearr_22449;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22447__$1,inst_22445);
} else
{if((state_val_22448 === (1)))
{var inst_22441 = [err,null];var inst_22442 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22441,null));var state_22447__$1 = state_22447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22447__$1,(2),ret,inst_22442);
} else
{return null;
}
}
});})(c__6192__auto__,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22453 = [null,null,null,null,null,null,null,null];(statearr_22453[(0)] = state_machine__6178__auto__);
(statearr_22453[(1)] = (1));
return statearr_22453;
});
var state_machine__6178__auto____1 = (function (state_22447){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22447);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22454){if((e22454 instanceof Object))
{var ex__6181__auto__ = e22454;var statearr_22455_22462 = state_22447;(statearr_22455_22462[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22447);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22463 = state_22447;
state_22447 = G__22463;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22447){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_22456 = f__6193__auto__.call(null);(statearr_22456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
);
return c__6192__auto__;
});})(G__22400_22457,ret,configType,map__22399,map__22399__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__22465_22504 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__22465_22504.done(((function (G__22465_22504,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__22465_22504,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__22465_22504,ret){
return (function (state_22478){var state_val_22479 = (state_22478[(1)]);if((state_val_22479 === (2)))
{var inst_22475 = (state_22478[(2)]);var inst_22476 = cljs.core.async.close_BANG_.call(null,ret);var state_22478__$1 = (function (){var statearr_22480 = state_22478;(statearr_22480[(7)] = inst_22475);
return statearr_22480;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22478__$1,inst_22476);
} else
{if((state_val_22479 === (1)))
{var inst_22468 = detail.ModelKey;var inst_22469 = clojure.string.capitalize.call(null,where);var inst_22470 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22469)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_22471 = {"modelKey":inst_22468,"moreUrl":inst_22470};var inst_22472 = [null,inst_22471];var inst_22473 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22472,null));var state_22478__$1 = state_22478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22478__$1,(2),ret,inst_22473);
} else
{return null;
}
}
});})(c__6192__auto__,G__22465_22504,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__22465_22504,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22484 = [null,null,null,null,null,null,null,null];(statearr_22484[(0)] = state_machine__6178__auto__);
(statearr_22484[(1)] = (1));
return statearr_22484;
});
var state_machine__6178__auto____1 = (function (state_22478){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22478);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22485){if((e22485 instanceof Object))
{var ex__6181__auto__ = e22485;var statearr_22486_22505 = state_22478;(statearr_22486_22505[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22478);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22506 = state_22478;
state_22478 = G__22506;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22478){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__22465_22504,ret))
})();var state__6194__auto__ = (function (){var statearr_22487 = f__6193__auto__.call(null);(statearr_22487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__22465_22504,ret))
);
return c__6192__auto__;
});})(G__22465_22504,ret))
);
G__22465_22504.fail(((function (G__22465_22504,ret){
return (function (p1__22464_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__22465_22504,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__22465_22504,ret){
return (function (state_22494){var state_val_22495 = (state_22494[(1)]);if((state_val_22495 === (2)))
{var inst_22491 = (state_22494[(2)]);var inst_22492 = cljs.core.async.close_BANG_.call(null,ret);var state_22494__$1 = (function (){var statearr_22496 = state_22494;(statearr_22496[(7)] = inst_22491);
return statearr_22496;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22494__$1,inst_22492);
} else
{if((state_val_22495 === (1)))
{var inst_22488 = [p1__22464_SHARP_,null];var inst_22489 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22488,null));var state_22494__$1 = state_22494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22494__$1,(2),ret,inst_22489);
} else
{return null;
}
}
});})(c__6192__auto__,G__22465_22504,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__22465_22504,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22500 = [null,null,null,null,null,null,null,null];(statearr_22500[(0)] = state_machine__6178__auto__);
(statearr_22500[(1)] = (1));
return statearr_22500;
});
var state_machine__6178__auto____1 = (function (state_22494){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22494);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22501){if((e22501 instanceof Object))
{var ex__6181__auto__ = e22501;var statearr_22502_22507 = state_22494;(statearr_22502_22507[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22494);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22508 = state_22494;
state_22494 = G__22508;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22494){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__22465_22504,ret))
})();var state__6194__auto__ = (function (){var statearr_22503 = f__6193__auto__.call(null);(statearr_22503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__22465_22504,ret))
);
return c__6192__auto__;
});})(G__22465_22504,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__22509){var map__22510 = p__22509;var map__22510__$1 = ((cljs.core.seq_QMARK_.call(null,map__22510))?cljs.core.apply.call(null,cljs.core.hash_map,map__22510):map__22510);var args = map__22510__$1;var url = cljs.core.get.call(null,map__22510__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___22530 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___22530,ret,map__22510,map__22510__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___22530,ret,map__22510,map__22510__$1,args,url){
return (function (state_22520){var state_val_22521 = (state_22520[(1)]);if((state_val_22521 === (2)))
{var inst_22517 = (state_22520[(2)]);var inst_22518 = cljs.core.async.close_BANG_.call(null,ret);var state_22520__$1 = (function (){var statearr_22522 = state_22520;(statearr_22522[(7)] = inst_22517);
return statearr_22522;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22520__$1,inst_22518);
} else
{if((state_val_22521 === (1)))
{var inst_22513 = {"url":url};var inst_22514 = [null,inst_22513];var inst_22515 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22514,null));var state_22520__$1 = state_22520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22520__$1,(2),ret,inst_22515);
} else
{return null;
}
}
});})(c__6192__auto___22530,ret,map__22510,map__22510__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___22530,ret,map__22510,map__22510__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22526 = [null,null,null,null,null,null,null,null];(statearr_22526[(0)] = state_machine__6178__auto__);
(statearr_22526[(1)] = (1));
return statearr_22526;
});
var state_machine__6178__auto____1 = (function (state_22520){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22527){if((e22527 instanceof Object))
{var ex__6181__auto__ = e22527;var statearr_22528_22531 = state_22520;(statearr_22528_22531[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22532 = state_22520;
state_22520 = G__22532;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22520){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___22530,ret,map__22510,map__22510__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_22529 = f__6193__auto__.call(null);(statearr_22529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___22530);
return statearr_22529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___22530,ret,map__22510,map__22510__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__22533){var map__22534 = p__22533;var map__22534__$1 = ((cljs.core.seq_QMARK_.call(null,map__22534))?cljs.core.apply.call(null,cljs.core.hash_map,map__22534):map__22534);var args = map__22534__$1;var id = cljs.core.get.call(null,map__22534__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___22551 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___22551,ret,map__22534,map__22534__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___22551,ret,map__22534,map__22534__$1,args,id){
return (function (state_22541){var state_val_22542 = (state_22541[(1)]);if((state_val_22542 === (2)))
{var inst_22538 = (state_22541[(2)]);var inst_22539 = cljs.core.async.close_BANG_.call(null,ret);var state_22541__$1 = (function (){var statearr_22543 = state_22541;(statearr_22543[(7)] = inst_22538);
return statearr_22543;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22541__$1,inst_22539);
} else
{if((state_val_22542 === (1)))
{var inst_22535 = [null,null];var inst_22536 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22535,null));var state_22541__$1 = state_22541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22541__$1,(2),ret,inst_22536);
} else
{return null;
}
}
});})(c__6192__auto___22551,ret,map__22534,map__22534__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___22551,ret,map__22534,map__22534__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22547 = [null,null,null,null,null,null,null,null];(statearr_22547[(0)] = state_machine__6178__auto__);
(statearr_22547[(1)] = (1));
return statearr_22547;
});
var state_machine__6178__auto____1 = (function (state_22541){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22541);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22548){if((e22548 instanceof Object))
{var ex__6181__auto__ = e22548;var statearr_22549_22552 = state_22541;(statearr_22549_22552[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22541);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22553 = state_22541;
state_22541 = G__22553;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22541){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___22551,ret,map__22534,map__22534__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_22550 = f__6193__auto__.call(null);(statearr_22550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___22551);
return statearr_22550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___22551,ret,map__22534,map__22534__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__22554 = cljs.core.rest.call(null,list);
var G__22555 = id;
var G__22556 = (start + (1));
list = G__22554;
id = G__22555;
start = G__22556;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__22558){var map__22559 = p__22558;var map__22559__$1 = ((cljs.core.seq_QMARK_.call(null,map__22559))?cljs.core.apply.call(null,cljs.core.hash_map,map__22559):map__22559);var args = map__22559__$1;var id = cljs.core.get.call(null,map__22559__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__22560_22609 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__22560_22609.done(((function (G__22560_22609,ret,map__22559,map__22559__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__22560_22609,ret,map__22559,map__22559__$1,args,id){
return (function (p1__22557_SHARP_){var obj22562 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__22557_SHARP_ + (1)))+".jpg"))};return obj22562;
});})(filtered,evtId,evt,G__22560_22609,ret,map__22559,map__22559__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__22560_22609,ret,map__22559,map__22559__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__22560_22609,ret,map__22559,map__22559__$1,args,id){
return (function (state_22590){var state_val_22591 = (state_22590[(1)]);if((state_val_22591 === (8)))
{var inst_22571 = (state_22590[(7)]);var inst_22578 = (state_22590[(2)]);var inst_22579 = (evt["Title"]);var inst_22580 = (evt["Date"]);var inst_22581 = (evt["Content"]);var inst_22582 = (evt["Form"]);var inst_22583 = {"prev_href":inst_22571,"next_href":inst_22578,"title":inst_22579,"date":inst_22580,"sideList":photos,"content":inst_22581,"form":inst_22582};var inst_22584 = [null,inst_22583];var inst_22585 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22584,null));var state_22590__$1 = state_22590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22590__$1,(2),ret,inst_22585);
} else
{if((state_val_22591 === (7)))
{var state_22590__$1 = state_22590;var statearr_22592_22610 = state_22590__$1;(statearr_22592_22610[(2)] = null);
(statearr_22592_22610[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22591 === (6)))
{var inst_22573 = cljs.core.nth.call(null,filtered,nextId);var inst_22574 = cljs.core.first.call(null,inst_22573);var inst_22575 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22574));var state_22590__$1 = state_22590;var statearr_22593_22611 = state_22590__$1;(statearr_22593_22611[(2)] = inst_22575);
(statearr_22593_22611[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22591 === (5)))
{var inst_22571 = (state_22590[(2)]);var state_22590__$1 = (function (){var statearr_22594 = state_22590;(statearr_22594[(7)] = inst_22571);
return statearr_22594;
})();if(cljs.core.truth_(nextId))
{var statearr_22595_22612 = state_22590__$1;(statearr_22595_22612[(1)] = (6));
} else
{var statearr_22596_22613 = state_22590__$1;(statearr_22596_22613[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22591 === (4)))
{var state_22590__$1 = state_22590;var statearr_22597_22614 = state_22590__$1;(statearr_22597_22614[(2)] = null);
(statearr_22597_22614[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22591 === (3)))
{var inst_22566 = cljs.core.nth.call(null,filtered,prevId);var inst_22567 = cljs.core.first.call(null,inst_22566);var inst_22568 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22567));var state_22590__$1 = state_22590;var statearr_22598_22615 = state_22590__$1;(statearr_22598_22615[(2)] = inst_22568);
(statearr_22598_22615[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22591 === (2)))
{var inst_22587 = (state_22590[(2)]);var inst_22588 = cljs.core.async.close_BANG_.call(null,ret);var state_22590__$1 = (function (){var statearr_22599 = state_22590;(statearr_22599[(8)] = inst_22587);
return statearr_22599;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22590__$1,inst_22588);
} else
{if((state_val_22591 === (1)))
{var state_22590__$1 = state_22590;if(cljs.core.truth_(prevId))
{var statearr_22600_22616 = state_22590__$1;(statearr_22600_22616[(1)] = (3));
} else
{var statearr_22601_22617 = state_22590__$1;(statearr_22601_22617[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__22560_22609,ret,map__22559,map__22559__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__22560_22609,ret,map__22559,map__22559__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22605 = [null,null,null,null,null,null,null,null,null];(statearr_22605[(0)] = state_machine__6178__auto__);
(statearr_22605[(1)] = (1));
return statearr_22605;
});
var state_machine__6178__auto____1 = (function (state_22590){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22590);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22606){if((e22606 instanceof Object))
{var ex__6181__auto__ = e22606;var statearr_22607_22618 = state_22590;(statearr_22607_22618[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22619 = state_22590;
state_22590 = G__22619;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22590){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__22560_22609,ret,map__22559,map__22559__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_22608 = f__6193__auto__.call(null);(statearr_22608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__22560_22609,ret,map__22559,map__22559__$1,args,id))
);
return c__6192__auto__;
});})(G__22560_22609,ret,map__22559,map__22559__$1,args,id))
);
G__22560_22609.fail(((function (G__22560_22609,ret,map__22559,map__22559__$1,args,id){
return (function (err){return console.log(err);
});})(G__22560_22609,ret,map__22559,map__22559__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
