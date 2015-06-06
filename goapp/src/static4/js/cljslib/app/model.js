// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12477_SHARP_){return cljs.core._EQ_.call(null,view,p1__12477_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12478_SHARP_){return cljs.core._EQ_.call(null,view,p1__12478_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12479_SHARP_){return cljs.core._EQ_.call(null,view,p1__12479_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12480_SHARP_){return cljs.core._EQ_.call(null,view,p1__12480_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12481_SHARP_){return cljs.core._EQ_.call(null,view,p1__12481_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12482_SHARP_){return cljs.core._EQ_.call(null,view,p1__12482_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12483_SHARP_){return cljs.core._EQ_.call(null,view,p1__12483_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12484_SHARP_){return cljs.core._EQ_.call(null,view,p1__12484_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12485_SHARP_){return cljs.core._EQ_.call(null,view,p1__12485_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__12489){var vec__12490 = p__12489;var model = cljs.core.nth.call(null,vec__12490,(0),null);var detail = cljs.core.nth.call(null,vec__12490,(1),null);var G__12491 = (new Date(detail.Date));G__12491.getTime();
return G__12491;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__12494){var vec__12495 = p__12494;var model = cljs.core.nth.call(null,vec__12495,(0),null);var detail = cljs.core.nth.call(null,vec__12495,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__12537){var map__12538 = p__12537;var map__12538__$1 = ((cljs.core.seq_QMARK_.call(null,map__12538))?cljs.core.apply.call(null,cljs.core.hash_map,map__12538):map__12538);var args = map__12538__$1;var searchKey = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__12539_12578 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__12539_12578.done(((function (G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey){
return (function (config,details){var filtered = cljs.core.take.call(null,(6),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details)));var ConvertDTO = ((function (filtered,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey){
return (function (p__12540){var vec__12541 = p__12540;var model = cljs.core.nth.call(null,vec__12541,(0),null);var detail = cljs.core.nth.call(null,vec__12541,(1),null);var obj12543 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj12543;
});})(filtered,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey))
;var dto = (function (){var obj12545 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj12545;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,ConvertDTO,dto,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,ConvertDTO,dto,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey){
return (function (state_12552){var state_val_12553 = (state_12552[(1)]);if((state_val_12553 === (2)))
{var inst_12549 = (state_12552[(2)]);var inst_12550 = cljs.core.async.close_BANG_.call(null,ret);var state_12552__$1 = (function (){var statearr_12554 = state_12552;(statearr_12554[(7)] = inst_12549);
return statearr_12554;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12552__$1,inst_12550);
} else
{if((state_val_12553 === (1)))
{var inst_12546 = [null,dto];var inst_12547 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12546,null));var state_12552__$1 = state_12552;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12552__$1,(2),ret,inst_12547);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,ConvertDTO,dto,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,ConvertDTO,dto,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12558 = [null,null,null,null,null,null,null,null];(statearr_12558[(0)] = state_machine__6178__auto__);
(statearr_12558[(1)] = (1));
return statearr_12558;
});
var state_machine__6178__auto____1 = (function (state_12552){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12552);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12559){if((e12559 instanceof Object))
{var ex__6181__auto__ = e12559;var statearr_12560_12579 = state_12552;(statearr_12560_12579[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12552);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12580 = state_12552;
state_12552 = G__12580;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12552){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,ConvertDTO,dto,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_12561 = f__6193__auto__.call(null);(statearr_12561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,ConvertDTO,dto,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey))
);
return c__6192__auto__;
});})(G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey))
);
G__12539_12578.fail(((function (G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey){
return (function (state_12568){var state_val_12569 = (state_12568[(1)]);if((state_val_12569 === (2)))
{var inst_12565 = (state_12568[(2)]);var inst_12566 = cljs.core.async.close_BANG_.call(null,ret);var state_12568__$1 = (function (){var statearr_12570 = state_12568;(statearr_12570[(7)] = inst_12565);
return statearr_12570;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12568__$1,inst_12566);
} else
{if((state_val_12569 === (1)))
{var inst_12562 = [err,null];var inst_12563 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12562,null));var state_12568__$1 = state_12568;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12568__$1,(2),ret,inst_12563);
} else
{return null;
}
}
});})(c__6192__auto__,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12574 = [null,null,null,null,null,null,null,null];(statearr_12574[(0)] = state_machine__6178__auto__);
(statearr_12574[(1)] = (1));
return statearr_12574;
});
var state_machine__6178__auto____1 = (function (state_12568){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12568);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12575){if((e12575 instanceof Object))
{var ex__6181__auto__ = e12575;var statearr_12576_12581 = state_12568;(statearr_12576_12581[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12568);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12582 = state_12568;
state_12568 = G__12582;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12568){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_12577 = f__6193__auto__.call(null);(statearr_12577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey))
);
return c__6192__auto__;
});})(G__12539_12578,configType,ret,map__12538,map__12538__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__12640){var map__12641 = p__12640;var map__12641__$1 = ((cljs.core.seq_QMARK_.call(null,map__12641))?cljs.core.apply.call(null,cljs.core.hash_map,map__12641):map__12641);var args = map__12641__$1;var id = cljs.core.get.call(null,map__12641__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__12642_12697 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__12642_12697.done(((function (G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (dir,detail,filtered,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function (p__12643){var vec__12644 = p__12643;var key__$1 = cljs.core.nth.call(null,vec__12644,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__12644,(1),null);var obj12646 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj12646;
});})(dir,detail,filtered,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function iter__12647(s__12648){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function (){var s__12648__$1 = s__12648;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12648__$1);if(temp__4126__auto__)
{var s__12648__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12648__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12648__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12650 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12649 = (0);while(true){
if((i__12649 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__12649);cljs.core.chunk_append.call(null,b__12650,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__12698 = (i__12649 + (1));
i__12649 = G__12698;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12650),iter__12647.call(null,cljs.core.chunk_rest.call(null,s__12648__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12650),null);
}
} else
{var idx = cljs.core.first.call(null,s__12648__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__12647.call(null,cljs.core.rest.call(null,s__12648__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function iter__12651(s__12652){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function (){var s__12652__$1 = s__12652;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12652__$1);if(temp__4126__auto__)
{var s__12652__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12652__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12652__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12654 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12653 = (0);while(true){
if((i__12653 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__12653);cljs.core.chunk_append.call(null,b__12654,(function (){var obj12660 = {"id":url,"url":ServeFn.call(null,url)};return obj12660;
})());
{
var G__12699 = (i__12653 + (1));
i__12653 = G__12699;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12654),iter__12651.call(null,cljs.core.chunk_rest.call(null,s__12652__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12654),null);
}
} else
{var url = cljs.core.first.call(null,s__12652__$2);return cljs.core.cons.call(null,(function (){var obj12662 = {"id":url,"url":ServeFn.call(null,url)};return obj12662;
})(),iter__12651.call(null,cljs.core.rest.call(null,s__12652__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
;var dto = (function (){var obj12664 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj12664;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function (state_12671){var state_val_12672 = (state_12671[(1)]);if((state_val_12672 === (2)))
{var inst_12668 = (state_12671[(2)]);var inst_12669 = cljs.core.async.close_BANG_.call(null,ret);var state_12671__$1 = (function (){var statearr_12673 = state_12671;(statearr_12673[(7)] = inst_12668);
return statearr_12673;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12671__$1,inst_12669);
} else
{if((state_val_12672 === (1)))
{var inst_12665 = [null,dto];var inst_12666 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12665,null));var state_12671__$1 = state_12671;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12671__$1,(2),ret,inst_12666);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12677 = [null,null,null,null,null,null,null,null];(statearr_12677[(0)] = state_machine__6178__auto__);
(statearr_12677[(1)] = (1));
return statearr_12677;
});
var state_machine__6178__auto____1 = (function (state_12671){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12671);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12678){if((e12678 instanceof Object))
{var ex__6181__auto__ = e12678;var statearr_12679_12700 = state_12671;(statearr_12679_12700[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12701 = state_12671;
state_12671 = G__12701;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12671){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12680 = f__6193__auto__.call(null);(statearr_12680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
);
return c__6192__auto__;
});})(G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
);
G__12642_12697.fail(((function (G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function (state_12687){var state_val_12688 = (state_12687[(1)]);if((state_val_12688 === (2)))
{var inst_12684 = (state_12687[(2)]);var inst_12685 = cljs.core.async.close_BANG_.call(null,ret);var state_12687__$1 = (function (){var statearr_12689 = state_12687;(statearr_12689[(7)] = inst_12684);
return statearr_12689;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12687__$1,inst_12685);
} else
{if((state_val_12688 === (1)))
{var inst_12681 = [err,null];var inst_12682 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12681,null));var state_12687__$1 = state_12687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12687__$1,(2),ret,inst_12682);
} else
{return null;
}
}
});})(c__6192__auto__,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12693 = [null,null,null,null,null,null,null,null];(statearr_12693[(0)] = state_machine__6178__auto__);
(statearr_12693[(1)] = (1));
return statearr_12693;
});
var state_machine__6178__auto____1 = (function (state_12687){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12694){if((e12694 instanceof Object))
{var ex__6181__auto__ = e12694;var statearr_12695_12702 = state_12687;(statearr_12695_12702[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12694;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12703 = state_12687;
state_12687 = G__12703;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12696 = f__6193__auto__.call(null);(statearr_12696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
);
return c__6192__auto__;
});})(G__12642_12697,ret,configType,map__12641,map__12641__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__12705_12742 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__12705_12742.done(((function (G__12705_12742,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12705_12742,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12705_12742,ret){
return (function (state_12716){var state_val_12717 = (state_12716[(1)]);if((state_val_12717 === (2)))
{var inst_12713 = (state_12716[(2)]);var inst_12714 = cljs.core.async.close_BANG_.call(null,ret);var state_12716__$1 = (function (){var statearr_12718 = state_12716;(statearr_12718[(7)] = inst_12713);
return statearr_12718;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12716__$1,inst_12714);
} else
{if((state_val_12717 === (1)))
{var inst_12708 = detail.ModelKey;var inst_12709 = {"modelKey":inst_12708};var inst_12710 = [null,inst_12709];var inst_12711 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12710,null));var state_12716__$1 = state_12716;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12716__$1,(2),ret,inst_12711);
} else
{return null;
}
}
});})(c__6192__auto__,G__12705_12742,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12705_12742,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12722 = [null,null,null,null,null,null,null,null];(statearr_12722[(0)] = state_machine__6178__auto__);
(statearr_12722[(1)] = (1));
return statearr_12722;
});
var state_machine__6178__auto____1 = (function (state_12716){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12716);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12723){if((e12723 instanceof Object))
{var ex__6181__auto__ = e12723;var statearr_12724_12743 = state_12716;(statearr_12724_12743[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12716);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12744 = state_12716;
state_12716 = G__12744;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12716){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12705_12742,ret))
})();var state__6194__auto__ = (function (){var statearr_12725 = f__6193__auto__.call(null);(statearr_12725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12705_12742,ret))
);
return c__6192__auto__;
});})(G__12705_12742,ret))
);
G__12705_12742.fail(((function (G__12705_12742,ret){
return (function (p1__12704_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12705_12742,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12705_12742,ret){
return (function (state_12732){var state_val_12733 = (state_12732[(1)]);if((state_val_12733 === (2)))
{var inst_12729 = (state_12732[(2)]);var inst_12730 = cljs.core.async.close_BANG_.call(null,ret);var state_12732__$1 = (function (){var statearr_12734 = state_12732;(statearr_12734[(7)] = inst_12729);
return statearr_12734;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12732__$1,inst_12730);
} else
{if((state_val_12733 === (1)))
{var inst_12726 = [p1__12704_SHARP_,null];var inst_12727 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12726,null));var state_12732__$1 = state_12732;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12732__$1,(2),ret,inst_12727);
} else
{return null;
}
}
});})(c__6192__auto__,G__12705_12742,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12705_12742,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12738 = [null,null,null,null,null,null,null,null];(statearr_12738[(0)] = state_machine__6178__auto__);
(statearr_12738[(1)] = (1));
return statearr_12738;
});
var state_machine__6178__auto____1 = (function (state_12732){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12732);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12739){if((e12739 instanceof Object))
{var ex__6181__auto__ = e12739;var statearr_12740_12745 = state_12732;(statearr_12740_12745[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12732);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12746 = state_12732;
state_12732 = G__12746;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12732){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12705_12742,ret))
})();var state__6194__auto__ = (function (){var statearr_12741 = f__6193__auto__.call(null);(statearr_12741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12705_12742,ret))
);
return c__6192__auto__;
});})(G__12705_12742,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__12747){var map__12748 = p__12747;var map__12748__$1 = ((cljs.core.seq_QMARK_.call(null,map__12748))?cljs.core.apply.call(null,cljs.core.hash_map,map__12748):map__12748);var args = map__12748__$1;var url = cljs.core.get.call(null,map__12748__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___12769 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___12769,ret,map__12748,map__12748__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___12769,ret,map__12748,map__12748__$1,args,url){
return (function (state_12759){var state_val_12760 = (state_12759[(1)]);if((state_val_12760 === (2)))
{var inst_12756 = (state_12759[(2)]);var inst_12757 = cljs.core.async.close_BANG_.call(null,ret);var state_12759__$1 = (function (){var statearr_12761 = state_12759;(statearr_12761[(7)] = inst_12756);
return statearr_12761;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12759__$1,inst_12757);
} else
{if((state_val_12760 === (1)))
{var inst_12751 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_12752 = {"url":inst_12751};var inst_12753 = [null,inst_12752];var inst_12754 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12753,null));var state_12759__$1 = state_12759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12759__$1,(2),ret,inst_12754);
} else
{return null;
}
}
});})(c__6192__auto___12769,ret,map__12748,map__12748__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___12769,ret,map__12748,map__12748__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12765 = [null,null,null,null,null,null,null,null];(statearr_12765[(0)] = state_machine__6178__auto__);
(statearr_12765[(1)] = (1));
return statearr_12765;
});
var state_machine__6178__auto____1 = (function (state_12759){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12759);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12766){if((e12766 instanceof Object))
{var ex__6181__auto__ = e12766;var statearr_12767_12770 = state_12759;(statearr_12767_12770[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12771 = state_12759;
state_12759 = G__12771;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12759){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___12769,ret,map__12748,map__12748__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_12768 = f__6193__auto__.call(null);(statearr_12768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12769);
return statearr_12768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___12769,ret,map__12748,map__12748__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__12772){var map__12773 = p__12772;var map__12773__$1 = ((cljs.core.seq_QMARK_.call(null,map__12773))?cljs.core.apply.call(null,cljs.core.hash_map,map__12773):map__12773);var args = map__12773__$1;var id = cljs.core.get.call(null,map__12773__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___12790 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___12790,ret,map__12773,map__12773__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___12790,ret,map__12773,map__12773__$1,args,id){
return (function (state_12780){var state_val_12781 = (state_12780[(1)]);if((state_val_12781 === (2)))
{var inst_12777 = (state_12780[(2)]);var inst_12778 = cljs.core.async.close_BANG_.call(null,ret);var state_12780__$1 = (function (){var statearr_12782 = state_12780;(statearr_12782[(7)] = inst_12777);
return statearr_12782;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12780__$1,inst_12778);
} else
{if((state_val_12781 === (1)))
{var inst_12774 = [null,null];var inst_12775 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12774,null));var state_12780__$1 = state_12780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12780__$1,(2),ret,inst_12775);
} else
{return null;
}
}
});})(c__6192__auto___12790,ret,map__12773,map__12773__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___12790,ret,map__12773,map__12773__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12786 = [null,null,null,null,null,null,null,null];(statearr_12786[(0)] = state_machine__6178__auto__);
(statearr_12786[(1)] = (1));
return statearr_12786;
});
var state_machine__6178__auto____1 = (function (state_12780){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12780);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12787){if((e12787 instanceof Object))
{var ex__6181__auto__ = e12787;var statearr_12788_12791 = state_12780;(statearr_12788_12791[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12780);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12792 = state_12780;
state_12780 = G__12792;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12780){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___12790,ret,map__12773,map__12773__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12789 = f__6193__auto__.call(null);(statearr_12789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12790);
return statearr_12789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___12790,ret,map__12773,map__12773__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__12793 = cljs.core.rest.call(null,list);
var G__12794 = id;
var G__12795 = (start + (1));
list = G__12793;
id = G__12794;
start = G__12795;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__12797){var map__12798 = p__12797;var map__12798__$1 = ((cljs.core.seq_QMARK_.call(null,map__12798))?cljs.core.apply.call(null,cljs.core.hash_map,map__12798):map__12798);var args = map__12798__$1;var id = cljs.core.get.call(null,map__12798__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__12799_12831 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__12799_12831.done(((function (G__12799_12831,ret,map__12798,map__12798__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__12799_12831,ret,map__12798,map__12798__$1,args,id){
return (function (p1__12796_SHARP_){var obj12801 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__12796_SHARP_ + (1)))+".jpg"))};return obj12801;
});})(filtered,evtId,evt,G__12799_12831,ret,map__12798,map__12798__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__12799_12831,ret,map__12798,map__12798__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__12799_12831,ret,map__12798,map__12798__$1,args,id){
return (function (state_12821){var state_val_12822 = (state_12821[(1)]);if((state_val_12822 === (2)))
{var inst_12818 = (state_12821[(2)]);var inst_12819 = cljs.core.async.close_BANG_.call(null,ret);var state_12821__$1 = (function (){var statearr_12823 = state_12821;(statearr_12823[(7)] = inst_12818);
return statearr_12823;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12821__$1,inst_12819);
} else
{if((state_val_12822 === (1)))
{var inst_12804 = cljs.core.nth.call(null,filtered,idx);var inst_12805 = cljs.core.first.call(null,inst_12804);var inst_12806 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12805));var inst_12807 = cljs.core.nth.call(null,filtered,idx2);var inst_12808 = cljs.core.first.call(null,inst_12807);var inst_12809 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12808));var inst_12810 = (evt["Title"]);var inst_12811 = (evt["Date"]);var inst_12812 = (evt["Content"]);var inst_12813 = (evt["Form"]);var inst_12814 = {"prev_href":inst_12806,"next_href":inst_12809,"title":inst_12810,"date":inst_12811,"sideList":photos,"content":inst_12812,"form":inst_12813};var inst_12815 = [null,inst_12814];var inst_12816 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12815,null));var state_12821__$1 = state_12821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12821__$1,(2),ret,inst_12816);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__12799_12831,ret,map__12798,map__12798__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__12799_12831,ret,map__12798,map__12798__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12827 = [null,null,null,null,null,null,null,null];(statearr_12827[(0)] = state_machine__6178__auto__);
(statearr_12827[(1)] = (1));
return statearr_12827;
});
var state_machine__6178__auto____1 = (function (state_12821){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12821);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12828){if((e12828 instanceof Object))
{var ex__6181__auto__ = e12828;var statearr_12829_12832 = state_12821;(statearr_12829_12832[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12821);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12833 = state_12821;
state_12821 = G__12833;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12821){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__12799_12831,ret,map__12798,map__12798__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12830 = f__6193__auto__.call(null);(statearr_12830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__12799_12831,ret,map__12798,map__12798__$1,args,id))
);
return c__6192__auto__;
});})(G__12799_12831,ret,map__12798,map__12798__$1,args,id))
);
G__12799_12831.fail(((function (G__12799_12831,ret,map__12798,map__12798__$1,args,id){
return (function (err){return console.log(err);
});})(G__12799_12831,ret,map__12798,map__12798__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
