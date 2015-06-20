// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31453_SHARP_){return cljs.core._EQ_.call(null,view,p1__31453_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31454_SHARP_){return cljs.core._EQ_.call(null,view,p1__31454_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31455_SHARP_){return cljs.core._EQ_.call(null,view,p1__31455_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31456_SHARP_){return cljs.core._EQ_.call(null,view,p1__31456_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31457_SHARP_){return cljs.core._EQ_.call(null,view,p1__31457_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31458_SHARP_){return cljs.core._EQ_.call(null,view,p1__31458_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31459_SHARP_){return cljs.core._EQ_.call(null,view,p1__31459_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31460_SHARP_){return cljs.core._EQ_.call(null,view,p1__31460_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31461_SHARP_){return cljs.core._EQ_.call(null,view,p1__31461_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__31465){var vec__31466 = p__31465;var model = cljs.core.nth.call(null,vec__31466,(0),null);var detail = cljs.core.nth.call(null,vec__31466,(1),null);var G__31467 = (new Date(detail.Date));G__31467.getTime();
return G__31467;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__31470){var vec__31471 = p__31470;var model = cljs.core.nth.call(null,vec__31471,(0),null);var detail = cljs.core.nth.call(null,vec__31471,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__31474){var vec__31475 = p__31474;var model = cljs.core.nth.call(null,vec__31475,(0),null);var detail = cljs.core.nth.call(null,vec__31475,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__31517){var map__31518 = p__31517;var map__31518__$1 = ((cljs.core.seq_QMARK_.call(null,map__31518))?cljs.core.apply.call(null,cljs.core.hash_map,map__31518):map__31518);var args = map__31518__$1;var page = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__31519_31558 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__31519_31558.done(((function (G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey){
return (function (p__31520){var vec__31521 = p__31520;var model = cljs.core.nth.call(null,vec__31521,(0),null);var detail = cljs.core.nth.call(null,vec__31521,(1),null);var obj31523 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj31523;
});})(modelCountPerPage,filtered,totalPage,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey))
;var dto = (function (){var obj31525 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj31525;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey){
return (function (state_31532){var state_val_31533 = (state_31532[(1)]);if((state_val_31533 === (2)))
{var inst_31529 = (state_31532[(2)]);var inst_31530 = cljs.core.async.close_BANG_.call(null,ret);var state_31532__$1 = (function (){var statearr_31534 = state_31532;(statearr_31534[(7)] = inst_31529);
return statearr_31534;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31532__$1,inst_31530);
} else
{if((state_val_31533 === (1)))
{var inst_31526 = [null,dto];var inst_31527 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31526,null));var state_31532__$1 = state_31532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31532__$1,(2),ret,inst_31527);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31538 = [null,null,null,null,null,null,null,null];(statearr_31538[(0)] = state_machine__6178__auto__);
(statearr_31538[(1)] = (1));
return statearr_31538;
});
var state_machine__6178__auto____1 = (function (state_31532){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31532);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31539){if((e31539 instanceof Object))
{var ex__6181__auto__ = e31539;var statearr_31540_31559 = state_31532;(statearr_31540_31559[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31560 = state_31532;
state_31532 = G__31560;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31532){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_31541 = f__6193__auto__.call(null);(statearr_31541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey))
);
G__31519_31558.fail(((function (G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey){
return (function (state_31548){var state_val_31549 = (state_31548[(1)]);if((state_val_31549 === (2)))
{var inst_31545 = (state_31548[(2)]);var inst_31546 = cljs.core.async.close_BANG_.call(null,ret);var state_31548__$1 = (function (){var statearr_31550 = state_31548;(statearr_31550[(7)] = inst_31545);
return statearr_31550;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31548__$1,inst_31546);
} else
{if((state_val_31549 === (1)))
{var inst_31542 = [err,null];var inst_31543 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31542,null));var state_31548__$1 = state_31548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31548__$1,(2),ret,inst_31543);
} else
{return null;
}
}
});})(c__6192__auto__,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31554 = [null,null,null,null,null,null,null,null];(statearr_31554[(0)] = state_machine__6178__auto__);
(statearr_31554[(1)] = (1));
return statearr_31554;
});
var state_machine__6178__auto____1 = (function (state_31548){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31548);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31555){if((e31555 instanceof Object))
{var ex__6181__auto__ = e31555;var statearr_31556_31561 = state_31548;(statearr_31556_31561[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31548);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31562 = state_31548;
state_31548 = G__31562;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31548){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_31557 = f__6193__auto__.call(null);(statearr_31557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__31519_31558,configType,ret,map__31518,map__31518__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__31620){var map__31621 = p__31620;var map__31621__$1 = ((cljs.core.seq_QMARK_.call(null,map__31621))?cljs.core.apply.call(null,cljs.core.hash_map,map__31621):map__31621);var args = map__31621__$1;var id = cljs.core.get.call(null,map__31621__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__31622_31677 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__31622_31677.done(((function (G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function (p__31623){var vec__31624 = p__31623;var key__$1 = cljs.core.nth.call(null,vec__31624,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__31624,(1),null);var obj31626 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj31626;
});})(dir,detail,filtered,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function iter__31627(s__31628){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function (){var s__31628__$1 = s__31628;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31628__$1);if(temp__4126__auto__)
{var s__31628__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31628__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__31628__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__31630 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__31629 = (0);while(true){
if((i__31629 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__31629);cljs.core.chunk_append.call(null,b__31630,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__31678 = (i__31629 + (1));
i__31629 = G__31678;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31630),iter__31627.call(null,cljs.core.chunk_rest.call(null,s__31628__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31630),null);
}
} else
{var idx = cljs.core.first.call(null,s__31628__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__31627.call(null,cljs.core.rest.call(null,s__31628__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function iter__31631(s__31632){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function (){var s__31632__$1 = s__31632;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31632__$1);if(temp__4126__auto__)
{var s__31632__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31632__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__31632__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__31634 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__31633 = (0);while(true){
if((i__31633 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__31633);cljs.core.chunk_append.call(null,b__31634,(function (){var obj31640 = {"id":url,"url":ServeFn.call(null,url)};return obj31640;
})());
{
var G__31679 = (i__31633 + (1));
i__31633 = G__31679;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31634),iter__31631.call(null,cljs.core.chunk_rest.call(null,s__31632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31634),null);
}
} else
{var url = cljs.core.first.call(null,s__31632__$2);return cljs.core.cons.call(null,(function (){var obj31642 = {"id":url,"url":ServeFn.call(null,url)};return obj31642;
})(),iter__31631.call(null,cljs.core.rest.call(null,s__31632__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
;var dto = (function (){var obj31644 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj31644;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function (state_31651){var state_val_31652 = (state_31651[(1)]);if((state_val_31652 === (2)))
{var inst_31648 = (state_31651[(2)]);var inst_31649 = cljs.core.async.close_BANG_.call(null,ret);var state_31651__$1 = (function (){var statearr_31653 = state_31651;(statearr_31653[(7)] = inst_31648);
return statearr_31653;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31651__$1,inst_31649);
} else
{if((state_val_31652 === (1)))
{var inst_31645 = [null,dto];var inst_31646 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31645,null));var state_31651__$1 = state_31651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31651__$1,(2),ret,inst_31646);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31657 = [null,null,null,null,null,null,null,null];(statearr_31657[(0)] = state_machine__6178__auto__);
(statearr_31657[(1)] = (1));
return statearr_31657;
});
var state_machine__6178__auto____1 = (function (state_31651){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31651);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31658){if((e31658 instanceof Object))
{var ex__6181__auto__ = e31658;var statearr_31659_31680 = state_31651;(statearr_31659_31680[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31651);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31681 = state_31651;
state_31651 = G__31681;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31651){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_31660 = f__6193__auto__.call(null);(statearr_31660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31660;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
);
return c__6192__auto__;
});})(G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
);
G__31622_31677.fail(((function (G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function (state_31667){var state_val_31668 = (state_31667[(1)]);if((state_val_31668 === (2)))
{var inst_31664 = (state_31667[(2)]);var inst_31665 = cljs.core.async.close_BANG_.call(null,ret);var state_31667__$1 = (function (){var statearr_31669 = state_31667;(statearr_31669[(7)] = inst_31664);
return statearr_31669;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31667__$1,inst_31665);
} else
{if((state_val_31668 === (1)))
{var inst_31661 = [err,null];var inst_31662 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31661,null));var state_31667__$1 = state_31667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31667__$1,(2),ret,inst_31662);
} else
{return null;
}
}
});})(c__6192__auto__,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31673 = [null,null,null,null,null,null,null,null];(statearr_31673[(0)] = state_machine__6178__auto__);
(statearr_31673[(1)] = (1));
return statearr_31673;
});
var state_machine__6178__auto____1 = (function (state_31667){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31667);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31674){if((e31674 instanceof Object))
{var ex__6181__auto__ = e31674;var statearr_31675_31682 = state_31667;(statearr_31675_31682[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31683 = state_31667;
state_31667 = G__31683;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31667){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_31676 = f__6193__auto__.call(null);(statearr_31676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
);
return c__6192__auto__;
});})(G__31622_31677,ret,configType,map__31621,map__31621__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__31685_31722 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__31685_31722.done(((function (G__31685_31722,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__31685_31722,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__31685_31722,ret){
return (function (state_31696){var state_val_31697 = (state_31696[(1)]);if((state_val_31697 === (2)))
{var inst_31693 = (state_31696[(2)]);var inst_31694 = cljs.core.async.close_BANG_.call(null,ret);var state_31696__$1 = (function (){var statearr_31698 = state_31696;(statearr_31698[(7)] = inst_31693);
return statearr_31698;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31696__$1,inst_31694);
} else
{if((state_val_31697 === (1)))
{var inst_31688 = detail.ModelKey;var inst_31689 = {"modelKey":inst_31688};var inst_31690 = [null,inst_31689];var inst_31691 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31690,null));var state_31696__$1 = state_31696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31696__$1,(2),ret,inst_31691);
} else
{return null;
}
}
});})(c__6192__auto__,G__31685_31722,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__31685_31722,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31702 = [null,null,null,null,null,null,null,null];(statearr_31702[(0)] = state_machine__6178__auto__);
(statearr_31702[(1)] = (1));
return statearr_31702;
});
var state_machine__6178__auto____1 = (function (state_31696){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31696);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31703){if((e31703 instanceof Object))
{var ex__6181__auto__ = e31703;var statearr_31704_31723 = state_31696;(statearr_31704_31723[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31724 = state_31696;
state_31696 = G__31724;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31696){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__31685_31722,ret))
})();var state__6194__auto__ = (function (){var statearr_31705 = f__6193__auto__.call(null);(statearr_31705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__31685_31722,ret))
);
return c__6192__auto__;
});})(G__31685_31722,ret))
);
G__31685_31722.fail(((function (G__31685_31722,ret){
return (function (p1__31684_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__31685_31722,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__31685_31722,ret){
return (function (state_31712){var state_val_31713 = (state_31712[(1)]);if((state_val_31713 === (2)))
{var inst_31709 = (state_31712[(2)]);var inst_31710 = cljs.core.async.close_BANG_.call(null,ret);var state_31712__$1 = (function (){var statearr_31714 = state_31712;(statearr_31714[(7)] = inst_31709);
return statearr_31714;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31712__$1,inst_31710);
} else
{if((state_val_31713 === (1)))
{var inst_31706 = [p1__31684_SHARP_,null];var inst_31707 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31706,null));var state_31712__$1 = state_31712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31712__$1,(2),ret,inst_31707);
} else
{return null;
}
}
});})(c__6192__auto__,G__31685_31722,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__31685_31722,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31718 = [null,null,null,null,null,null,null,null];(statearr_31718[(0)] = state_machine__6178__auto__);
(statearr_31718[(1)] = (1));
return statearr_31718;
});
var state_machine__6178__auto____1 = (function (state_31712){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31712);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31719){if((e31719 instanceof Object))
{var ex__6181__auto__ = e31719;var statearr_31720_31725 = state_31712;(statearr_31720_31725[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31712);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31726 = state_31712;
state_31712 = G__31726;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31712){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__31685_31722,ret))
})();var state__6194__auto__ = (function (){var statearr_31721 = f__6193__auto__.call(null);(statearr_31721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__31685_31722,ret))
);
return c__6192__auto__;
});})(G__31685_31722,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__31727){var map__31728 = p__31727;var map__31728__$1 = ((cljs.core.seq_QMARK_.call(null,map__31728))?cljs.core.apply.call(null,cljs.core.hash_map,map__31728):map__31728);var args = map__31728__$1;var url = cljs.core.get.call(null,map__31728__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___31749 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___31749,ret,map__31728,map__31728__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___31749,ret,map__31728,map__31728__$1,args,url){
return (function (state_31739){var state_val_31740 = (state_31739[(1)]);if((state_val_31740 === (2)))
{var inst_31736 = (state_31739[(2)]);var inst_31737 = cljs.core.async.close_BANG_.call(null,ret);var state_31739__$1 = (function (){var statearr_31741 = state_31739;(statearr_31741[(7)] = inst_31736);
return statearr_31741;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31739__$1,inst_31737);
} else
{if((state_val_31740 === (1)))
{var inst_31731 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_31732 = {"url":inst_31731};var inst_31733 = [null,inst_31732];var inst_31734 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31733,null));var state_31739__$1 = state_31739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31739__$1,(2),ret,inst_31734);
} else
{return null;
}
}
});})(c__6192__auto___31749,ret,map__31728,map__31728__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___31749,ret,map__31728,map__31728__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31745 = [null,null,null,null,null,null,null,null];(statearr_31745[(0)] = state_machine__6178__auto__);
(statearr_31745[(1)] = (1));
return statearr_31745;
});
var state_machine__6178__auto____1 = (function (state_31739){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31739);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31746){if((e31746 instanceof Object))
{var ex__6181__auto__ = e31746;var statearr_31747_31750 = state_31739;(statearr_31747_31750[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31739);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31746;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31751 = state_31739;
state_31739 = G__31751;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___31749,ret,map__31728,map__31728__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_31748 = f__6193__auto__.call(null);(statearr_31748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___31749);
return statearr_31748;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___31749,ret,map__31728,map__31728__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__31752){var map__31753 = p__31752;var map__31753__$1 = ((cljs.core.seq_QMARK_.call(null,map__31753))?cljs.core.apply.call(null,cljs.core.hash_map,map__31753):map__31753);var args = map__31753__$1;var id = cljs.core.get.call(null,map__31753__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___31770 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___31770,ret,map__31753,map__31753__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___31770,ret,map__31753,map__31753__$1,args,id){
return (function (state_31760){var state_val_31761 = (state_31760[(1)]);if((state_val_31761 === (2)))
{var inst_31757 = (state_31760[(2)]);var inst_31758 = cljs.core.async.close_BANG_.call(null,ret);var state_31760__$1 = (function (){var statearr_31762 = state_31760;(statearr_31762[(7)] = inst_31757);
return statearr_31762;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31760__$1,inst_31758);
} else
{if((state_val_31761 === (1)))
{var inst_31754 = [null,null];var inst_31755 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31754,null));var state_31760__$1 = state_31760;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31760__$1,(2),ret,inst_31755);
} else
{return null;
}
}
});})(c__6192__auto___31770,ret,map__31753,map__31753__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___31770,ret,map__31753,map__31753__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31766 = [null,null,null,null,null,null,null,null];(statearr_31766[(0)] = state_machine__6178__auto__);
(statearr_31766[(1)] = (1));
return statearr_31766;
});
var state_machine__6178__auto____1 = (function (state_31760){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31760);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31767){if((e31767 instanceof Object))
{var ex__6181__auto__ = e31767;var statearr_31768_31771 = state_31760;(statearr_31768_31771[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31760);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31772 = state_31760;
state_31760 = G__31772;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31760){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___31770,ret,map__31753,map__31753__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_31769 = f__6193__auto__.call(null);(statearr_31769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___31770);
return statearr_31769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___31770,ret,map__31753,map__31753__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__31773 = cljs.core.rest.call(null,list);
var G__31774 = id;
var G__31775 = (start + (1));
list = G__31773;
id = G__31774;
start = G__31775;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__31777){var map__31778 = p__31777;var map__31778__$1 = ((cljs.core.seq_QMARK_.call(null,map__31778))?cljs.core.apply.call(null,cljs.core.hash_map,map__31778):map__31778);var args = map__31778__$1;var id = cljs.core.get.call(null,map__31778__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__31779_31811 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__31779_31811.done(((function (G__31779_31811,ret,map__31778,map__31778__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__31779_31811,ret,map__31778,map__31778__$1,args,id){
return (function (p1__31776_SHARP_){var obj31781 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__31776_SHARP_ + (1)))+".jpg"))};return obj31781;
});})(filtered,evtId,evt,G__31779_31811,ret,map__31778,map__31778__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__31779_31811,ret,map__31778,map__31778__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__31779_31811,ret,map__31778,map__31778__$1,args,id){
return (function (state_31801){var state_val_31802 = (state_31801[(1)]);if((state_val_31802 === (2)))
{var inst_31798 = (state_31801[(2)]);var inst_31799 = cljs.core.async.close_BANG_.call(null,ret);var state_31801__$1 = (function (){var statearr_31803 = state_31801;(statearr_31803[(7)] = inst_31798);
return statearr_31803;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31801__$1,inst_31799);
} else
{if((state_val_31802 === (1)))
{var inst_31784 = cljs.core.nth.call(null,filtered,idx);var inst_31785 = cljs.core.first.call(null,inst_31784);var inst_31786 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31785));var inst_31787 = cljs.core.nth.call(null,filtered,idx2);var inst_31788 = cljs.core.first.call(null,inst_31787);var inst_31789 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31788));var inst_31790 = (evt["Title"]);var inst_31791 = (evt["Date"]);var inst_31792 = (evt["Content"]);var inst_31793 = (evt["Form"]);var inst_31794 = {"prev_href":inst_31786,"next_href":inst_31789,"title":inst_31790,"date":inst_31791,"sideList":photos,"content":inst_31792,"form":inst_31793};var inst_31795 = [null,inst_31794];var inst_31796 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31795,null));var state_31801__$1 = state_31801;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31801__$1,(2),ret,inst_31796);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__31779_31811,ret,map__31778,map__31778__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__31779_31811,ret,map__31778,map__31778__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31807 = [null,null,null,null,null,null,null,null];(statearr_31807[(0)] = state_machine__6178__auto__);
(statearr_31807[(1)] = (1));
return statearr_31807;
});
var state_machine__6178__auto____1 = (function (state_31801){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31801);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31808){if((e31808 instanceof Object))
{var ex__6181__auto__ = e31808;var statearr_31809_31812 = state_31801;(statearr_31809_31812[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31801);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31808;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31813 = state_31801;
state_31801 = G__31813;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31801){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__31779_31811,ret,map__31778,map__31778__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_31810 = f__6193__auto__.call(null);(statearr_31810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__31779_31811,ret,map__31778,map__31778__$1,args,id))
);
return c__6192__auto__;
});})(G__31779_31811,ret,map__31778,map__31778__$1,args,id))
);
G__31779_31811.fail(((function (G__31779_31811,ret,map__31778,map__31778__$1,args,id){
return (function (err){return console.log(err);
});})(G__31779_31811,ret,map__31778,map__31778__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
