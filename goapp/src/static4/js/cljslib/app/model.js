// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29465_SHARP_){return cljs.core._EQ_.call(null,view,p1__29465_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29466_SHARP_){return cljs.core._EQ_.call(null,view,p1__29466_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29467_SHARP_){return cljs.core._EQ_.call(null,view,p1__29467_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29468_SHARP_){return cljs.core._EQ_.call(null,view,p1__29468_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29469_SHARP_){return cljs.core._EQ_.call(null,view,p1__29469_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29470_SHARP_){return cljs.core._EQ_.call(null,view,p1__29470_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29471_SHARP_){return cljs.core._EQ_.call(null,view,p1__29471_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29472_SHARP_){return cljs.core._EQ_.call(null,view,p1__29472_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29473_SHARP_){return cljs.core._EQ_.call(null,view,p1__29473_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__29477){var vec__29478 = p__29477;var model = cljs.core.nth.call(null,vec__29478,(0),null);var detail = cljs.core.nth.call(null,vec__29478,(1),null);var G__29479 = (new Date(detail.Date));G__29479.getTime();
return G__29479;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__29482){var vec__29483 = p__29482;var model = cljs.core.nth.call(null,vec__29483,(0),null);var detail = cljs.core.nth.call(null,vec__29483,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__29525){var map__29526 = p__29525;var map__29526__$1 = ((cljs.core.seq_QMARK_.call(null,map__29526))?cljs.core.apply.call(null,cljs.core.hash_map,map__29526):map__29526);var args = map__29526__$1;var page = cljs.core.get.call(null,map__29526__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__29526__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__29527_29566 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__29527_29566.done(((function (G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = (6);var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details))));var ConvertDTO = ((function (modelCountPerPage,filtered,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey){
return (function (p__29528){var vec__29529 = p__29528;var model = cljs.core.nth.call(null,vec__29529,(0),null);var detail = cljs.core.nth.call(null,vec__29529,(1),null);var obj29531 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj29531;
});})(modelCountPerPage,filtered,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey))
;var dto = (function (){var obj29533 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page - (1)))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page + (1)))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj29533;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey){
return (function (state_29540){var state_val_29541 = (state_29540[(1)]);if((state_val_29541 === (2)))
{var inst_29537 = (state_29540[(2)]);var inst_29538 = cljs.core.async.close_BANG_.call(null,ret);var state_29540__$1 = (function (){var statearr_29542 = state_29540;(statearr_29542[(7)] = inst_29537);
return statearr_29542;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29540__$1,inst_29538);
} else
{if((state_val_29541 === (1)))
{var inst_29534 = [null,dto];var inst_29535 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29534,null));var state_29540__$1 = state_29540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29540__$1,(2),ret,inst_29535);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29546 = [null,null,null,null,null,null,null,null];(statearr_29546[(0)] = state_machine__6178__auto__);
(statearr_29546[(1)] = (1));
return statearr_29546;
});
var state_machine__6178__auto____1 = (function (state_29540){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29547){if((e29547 instanceof Object))
{var ex__6181__auto__ = e29547;var statearr_29548_29567 = state_29540;(statearr_29548_29567[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29547;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29568 = state_29540;
state_29540 = G__29568;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29540){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_29549 = f__6193__auto__.call(null);(statearr_29549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey))
);
G__29527_29566.fail(((function (G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey){
return (function (state_29556){var state_val_29557 = (state_29556[(1)]);if((state_val_29557 === (2)))
{var inst_29553 = (state_29556[(2)]);var inst_29554 = cljs.core.async.close_BANG_.call(null,ret);var state_29556__$1 = (function (){var statearr_29558 = state_29556;(statearr_29558[(7)] = inst_29553);
return statearr_29558;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29556__$1,inst_29554);
} else
{if((state_val_29557 === (1)))
{var inst_29550 = [err,null];var inst_29551 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29550,null));var state_29556__$1 = state_29556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29556__$1,(2),ret,inst_29551);
} else
{return null;
}
}
});})(c__6192__auto__,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29562 = [null,null,null,null,null,null,null,null];(statearr_29562[(0)] = state_machine__6178__auto__);
(statearr_29562[(1)] = (1));
return statearr_29562;
});
var state_machine__6178__auto____1 = (function (state_29556){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29556);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29563){if((e29563 instanceof Object))
{var ex__6181__auto__ = e29563;var statearr_29564_29569 = state_29556;(statearr_29564_29569[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29556);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29570 = state_29556;
state_29556 = G__29570;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29556){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_29565 = f__6193__auto__.call(null);(statearr_29565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__29527_29566,configType,ret,map__29526,map__29526__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__29628){var map__29629 = p__29628;var map__29629__$1 = ((cljs.core.seq_QMARK_.call(null,map__29629))?cljs.core.apply.call(null,cljs.core.hash_map,map__29629):map__29629);var args = map__29629__$1;var id = cljs.core.get.call(null,map__29629__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__29630_29685 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__29630_29685.done(((function (G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,details));var ConvertHeadDTO = ((function (dir,detail,filtered,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function (p__29631){var vec__29632 = p__29631;var key__$1 = cljs.core.nth.call(null,vec__29632,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__29632,(1),null);var obj29634 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj29634;
});})(dir,detail,filtered,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function iter__29635(s__29636){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function (){var s__29636__$1 = s__29636;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29636__$1);if(temp__4126__auto__)
{var s__29636__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29636__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__29636__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__29638 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__29637 = (0);while(true){
if((i__29637 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__29637);cljs.core.chunk_append.call(null,b__29638,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__29686 = (i__29637 + (1));
i__29637 = G__29686;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29638),iter__29635.call(null,cljs.core.chunk_rest.call(null,s__29636__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29638),null);
}
} else
{var idx = cljs.core.first.call(null,s__29636__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__29635.call(null,cljs.core.rest.call(null,s__29636__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function iter__29639(s__29640){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function (){var s__29640__$1 = s__29640;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29640__$1);if(temp__4126__auto__)
{var s__29640__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29640__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__29640__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__29642 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__29641 = (0);while(true){
if((i__29641 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__29641);cljs.core.chunk_append.call(null,b__29642,(function (){var obj29648 = {"id":url,"url":ServeFn.call(null,url)};return obj29648;
})());
{
var G__29687 = (i__29641 + (1));
i__29641 = G__29687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29642),iter__29639.call(null,cljs.core.chunk_rest.call(null,s__29640__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29642),null);
}
} else
{var url = cljs.core.first.call(null,s__29640__$2);return cljs.core.cons.call(null,(function (){var obj29650 = {"id":url,"url":ServeFn.call(null,url)};return obj29650;
})(),iter__29639.call(null,cljs.core.rest.call(null,s__29640__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
;var dto = (function (){var obj29652 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj29652;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function (state_29659){var state_val_29660 = (state_29659[(1)]);if((state_val_29660 === (2)))
{var inst_29656 = (state_29659[(2)]);var inst_29657 = cljs.core.async.close_BANG_.call(null,ret);var state_29659__$1 = (function (){var statearr_29661 = state_29659;(statearr_29661[(7)] = inst_29656);
return statearr_29661;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29659__$1,inst_29657);
} else
{if((state_val_29660 === (1)))
{var inst_29653 = [null,dto];var inst_29654 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29653,null));var state_29659__$1 = state_29659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29659__$1,(2),ret,inst_29654);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29665 = [null,null,null,null,null,null,null,null];(statearr_29665[(0)] = state_machine__6178__auto__);
(statearr_29665[(1)] = (1));
return statearr_29665;
});
var state_machine__6178__auto____1 = (function (state_29659){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29659);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29666){if((e29666 instanceof Object))
{var ex__6181__auto__ = e29666;var statearr_29667_29688 = state_29659;(statearr_29667_29688[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29689 = state_29659;
state_29659 = G__29689;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29659){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_29668 = f__6193__auto__.call(null);(statearr_29668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
);
return c__6192__auto__;
});})(G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
);
G__29630_29685.fail(((function (G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function (state_29675){var state_val_29676 = (state_29675[(1)]);if((state_val_29676 === (2)))
{var inst_29672 = (state_29675[(2)]);var inst_29673 = cljs.core.async.close_BANG_.call(null,ret);var state_29675__$1 = (function (){var statearr_29677 = state_29675;(statearr_29677[(7)] = inst_29672);
return statearr_29677;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29675__$1,inst_29673);
} else
{if((state_val_29676 === (1)))
{var inst_29669 = [err,null];var inst_29670 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29669,null));var state_29675__$1 = state_29675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29675__$1,(2),ret,inst_29670);
} else
{return null;
}
}
});})(c__6192__auto__,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29681 = [null,null,null,null,null,null,null,null];(statearr_29681[(0)] = state_machine__6178__auto__);
(statearr_29681[(1)] = (1));
return statearr_29681;
});
var state_machine__6178__auto____1 = (function (state_29675){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29675);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29682){if((e29682 instanceof Object))
{var ex__6181__auto__ = e29682;var statearr_29683_29690 = state_29675;(statearr_29683_29690[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29675);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29691 = state_29675;
state_29675 = G__29691;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29675){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_29684 = f__6193__auto__.call(null);(statearr_29684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
);
return c__6192__auto__;
});})(G__29630_29685,ret,configType,map__29629,map__29629__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__29693_29730 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__29693_29730.done(((function (G__29693_29730,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__29693_29730,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__29693_29730,ret){
return (function (state_29704){var state_val_29705 = (state_29704[(1)]);if((state_val_29705 === (2)))
{var inst_29701 = (state_29704[(2)]);var inst_29702 = cljs.core.async.close_BANG_.call(null,ret);var state_29704__$1 = (function (){var statearr_29706 = state_29704;(statearr_29706[(7)] = inst_29701);
return statearr_29706;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29704__$1,inst_29702);
} else
{if((state_val_29705 === (1)))
{var inst_29696 = detail.ModelKey;var inst_29697 = {"modelKey":inst_29696};var inst_29698 = [null,inst_29697];var inst_29699 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29698,null));var state_29704__$1 = state_29704;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29704__$1,(2),ret,inst_29699);
} else
{return null;
}
}
});})(c__6192__auto__,G__29693_29730,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__29693_29730,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29710 = [null,null,null,null,null,null,null,null];(statearr_29710[(0)] = state_machine__6178__auto__);
(statearr_29710[(1)] = (1));
return statearr_29710;
});
var state_machine__6178__auto____1 = (function (state_29704){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29704);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29711){if((e29711 instanceof Object))
{var ex__6181__auto__ = e29711;var statearr_29712_29731 = state_29704;(statearr_29712_29731[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29704);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29732 = state_29704;
state_29704 = G__29732;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29704){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__29693_29730,ret))
})();var state__6194__auto__ = (function (){var statearr_29713 = f__6193__auto__.call(null);(statearr_29713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__29693_29730,ret))
);
return c__6192__auto__;
});})(G__29693_29730,ret))
);
G__29693_29730.fail(((function (G__29693_29730,ret){
return (function (p1__29692_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__29693_29730,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__29693_29730,ret){
return (function (state_29720){var state_val_29721 = (state_29720[(1)]);if((state_val_29721 === (2)))
{var inst_29717 = (state_29720[(2)]);var inst_29718 = cljs.core.async.close_BANG_.call(null,ret);var state_29720__$1 = (function (){var statearr_29722 = state_29720;(statearr_29722[(7)] = inst_29717);
return statearr_29722;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29720__$1,inst_29718);
} else
{if((state_val_29721 === (1)))
{var inst_29714 = [p1__29692_SHARP_,null];var inst_29715 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29714,null));var state_29720__$1 = state_29720;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29720__$1,(2),ret,inst_29715);
} else
{return null;
}
}
});})(c__6192__auto__,G__29693_29730,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__29693_29730,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29726 = [null,null,null,null,null,null,null,null];(statearr_29726[(0)] = state_machine__6178__auto__);
(statearr_29726[(1)] = (1));
return statearr_29726;
});
var state_machine__6178__auto____1 = (function (state_29720){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29720);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29727){if((e29727 instanceof Object))
{var ex__6181__auto__ = e29727;var statearr_29728_29733 = state_29720;(statearr_29728_29733[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29720);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29734 = state_29720;
state_29720 = G__29734;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29720){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__29693_29730,ret))
})();var state__6194__auto__ = (function (){var statearr_29729 = f__6193__auto__.call(null);(statearr_29729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__29693_29730,ret))
);
return c__6192__auto__;
});})(G__29693_29730,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__29735){var map__29736 = p__29735;var map__29736__$1 = ((cljs.core.seq_QMARK_.call(null,map__29736))?cljs.core.apply.call(null,cljs.core.hash_map,map__29736):map__29736);var args = map__29736__$1;var url = cljs.core.get.call(null,map__29736__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___29757 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___29757,ret,map__29736,map__29736__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___29757,ret,map__29736,map__29736__$1,args,url){
return (function (state_29747){var state_val_29748 = (state_29747[(1)]);if((state_val_29748 === (2)))
{var inst_29744 = (state_29747[(2)]);var inst_29745 = cljs.core.async.close_BANG_.call(null,ret);var state_29747__$1 = (function (){var statearr_29749 = state_29747;(statearr_29749[(7)] = inst_29744);
return statearr_29749;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29747__$1,inst_29745);
} else
{if((state_val_29748 === (1)))
{var inst_29739 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_29740 = {"url":inst_29739};var inst_29741 = [null,inst_29740];var inst_29742 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29741,null));var state_29747__$1 = state_29747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29747__$1,(2),ret,inst_29742);
} else
{return null;
}
}
});})(c__6192__auto___29757,ret,map__29736,map__29736__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___29757,ret,map__29736,map__29736__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29753 = [null,null,null,null,null,null,null,null];(statearr_29753[(0)] = state_machine__6178__auto__);
(statearr_29753[(1)] = (1));
return statearr_29753;
});
var state_machine__6178__auto____1 = (function (state_29747){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29747);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29754){if((e29754 instanceof Object))
{var ex__6181__auto__ = e29754;var statearr_29755_29758 = state_29747;(statearr_29755_29758[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29759 = state_29747;
state_29747 = G__29759;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29747){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___29757,ret,map__29736,map__29736__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_29756 = f__6193__auto__.call(null);(statearr_29756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___29757);
return statearr_29756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___29757,ret,map__29736,map__29736__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__29760){var map__29761 = p__29760;var map__29761__$1 = ((cljs.core.seq_QMARK_.call(null,map__29761))?cljs.core.apply.call(null,cljs.core.hash_map,map__29761):map__29761);var args = map__29761__$1;var id = cljs.core.get.call(null,map__29761__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___29778 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___29778,ret,map__29761,map__29761__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___29778,ret,map__29761,map__29761__$1,args,id){
return (function (state_29768){var state_val_29769 = (state_29768[(1)]);if((state_val_29769 === (2)))
{var inst_29765 = (state_29768[(2)]);var inst_29766 = cljs.core.async.close_BANG_.call(null,ret);var state_29768__$1 = (function (){var statearr_29770 = state_29768;(statearr_29770[(7)] = inst_29765);
return statearr_29770;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29768__$1,inst_29766);
} else
{if((state_val_29769 === (1)))
{var inst_29762 = [null,null];var inst_29763 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29762,null));var state_29768__$1 = state_29768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29768__$1,(2),ret,inst_29763);
} else
{return null;
}
}
});})(c__6192__auto___29778,ret,map__29761,map__29761__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___29778,ret,map__29761,map__29761__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29774 = [null,null,null,null,null,null,null,null];(statearr_29774[(0)] = state_machine__6178__auto__);
(statearr_29774[(1)] = (1));
return statearr_29774;
});
var state_machine__6178__auto____1 = (function (state_29768){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29768);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29775){if((e29775 instanceof Object))
{var ex__6181__auto__ = e29775;var statearr_29776_29779 = state_29768;(statearr_29776_29779[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29780 = state_29768;
state_29768 = G__29780;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29768){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___29778,ret,map__29761,map__29761__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_29777 = f__6193__auto__.call(null);(statearr_29777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___29778);
return statearr_29777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___29778,ret,map__29761,map__29761__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__29781 = cljs.core.rest.call(null,list);
var G__29782 = id;
var G__29783 = (start + (1));
list = G__29781;
id = G__29782;
start = G__29783;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__29785){var map__29786 = p__29785;var map__29786__$1 = ((cljs.core.seq_QMARK_.call(null,map__29786))?cljs.core.apply.call(null,cljs.core.hash_map,map__29786):map__29786);var args = map__29786__$1;var id = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__29787_29819 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__29787_29819.done(((function (G__29787_29819,ret,map__29786,map__29786__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__29787_29819,ret,map__29786,map__29786__$1,args,id){
return (function (p1__29784_SHARP_){var obj29789 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__29784_SHARP_ + (1)))+".jpg"))};return obj29789;
});})(filtered,evtId,evt,G__29787_29819,ret,map__29786,map__29786__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29787_29819,ret,map__29786,map__29786__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29787_29819,ret,map__29786,map__29786__$1,args,id){
return (function (state_29809){var state_val_29810 = (state_29809[(1)]);if((state_val_29810 === (2)))
{var inst_29806 = (state_29809[(2)]);var inst_29807 = cljs.core.async.close_BANG_.call(null,ret);var state_29809__$1 = (function (){var statearr_29811 = state_29809;(statearr_29811[(7)] = inst_29806);
return statearr_29811;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29809__$1,inst_29807);
} else
{if((state_val_29810 === (1)))
{var inst_29792 = cljs.core.nth.call(null,filtered,idx);var inst_29793 = cljs.core.first.call(null,inst_29792);var inst_29794 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29793));var inst_29795 = cljs.core.nth.call(null,filtered,idx2);var inst_29796 = cljs.core.first.call(null,inst_29795);var inst_29797 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29796));var inst_29798 = (evt["Title"]);var inst_29799 = (evt["Date"]);var inst_29800 = (evt["Content"]);var inst_29801 = (evt["Form"]);var inst_29802 = {"prev_href":inst_29794,"next_href":inst_29797,"title":inst_29798,"date":inst_29799,"sideList":photos,"content":inst_29800,"form":inst_29801};var inst_29803 = [null,inst_29802];var inst_29804 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29803,null));var state_29809__$1 = state_29809;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29809__$1,(2),ret,inst_29804);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29787_29819,ret,map__29786,map__29786__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29787_29819,ret,map__29786,map__29786__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_29815 = [null,null,null,null,null,null,null,null];(statearr_29815[(0)] = state_machine__6178__auto__);
(statearr_29815[(1)] = (1));
return statearr_29815;
});
var state_machine__6178__auto____1 = (function (state_29809){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_29809);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e29816){if((e29816 instanceof Object))
{var ex__6181__auto__ = e29816;var statearr_29817_29820 = state_29809;(statearr_29817_29820[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29809);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29821 = state_29809;
state_29809 = G__29821;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_29809){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_29809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29787_29819,ret,map__29786,map__29786__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_29818 = f__6193__auto__.call(null);(statearr_29818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_29818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__29787_29819,ret,map__29786,map__29786__$1,args,id))
);
return c__6192__auto__;
});})(G__29787_29819,ret,map__29786,map__29786__$1,args,id))
);
G__29787_29819.fail(((function (G__29787_29819,ret,map__29786,map__29786__$1,args,id){
return (function (err){return console.log(err);
});})(G__29787_29819,ret,map__29786,map__29786__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
