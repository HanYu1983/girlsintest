// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30536_SHARP_){return cljs.core._EQ_.call(null,view,p1__30536_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30537_SHARP_){return cljs.core._EQ_.call(null,view,p1__30537_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30538_SHARP_){return cljs.core._EQ_.call(null,view,p1__30538_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30539_SHARP_){return cljs.core._EQ_.call(null,view,p1__30539_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30540_SHARP_){return cljs.core._EQ_.call(null,view,p1__30540_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30541_SHARP_){return cljs.core._EQ_.call(null,view,p1__30541_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30542_SHARP_){return cljs.core._EQ_.call(null,view,p1__30542_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30543_SHARP_){return cljs.core._EQ_.call(null,view,p1__30543_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30544_SHARP_){return cljs.core._EQ_.call(null,view,p1__30544_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__30548){var vec__30549 = p__30548;var model = cljs.core.nth.call(null,vec__30549,(0),null);var detail = cljs.core.nth.call(null,vec__30549,(1),null);var G__30550 = (new Date(detail.Date));G__30550.getTime();
return G__30550;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__30553){var vec__30554 = p__30553;var model = cljs.core.nth.call(null,vec__30554,(0),null);var detail = cljs.core.nth.call(null,vec__30554,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__30596){var map__30597 = p__30596;var map__30597__$1 = ((cljs.core.seq_QMARK_.call(null,map__30597))?cljs.core.apply.call(null,cljs.core.hash_map,map__30597):map__30597);var args = map__30597__$1;var page = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__30598_30637 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__30598_30637.done(((function (G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details))));var ConvertDTO = ((function (modelCountPerPage,filtered,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey){
return (function (p__30599){var vec__30600 = p__30599;var model = cljs.core.nth.call(null,vec__30600,(0),null);var detail = cljs.core.nth.call(null,vec__30600,(1),null);var obj30602 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj30602;
});})(modelCountPerPage,filtered,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey))
;var dto = (function (){var obj30604 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page - (1)))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page + (1)))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj30604;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey){
return (function (state_30611){var state_val_30612 = (state_30611[(1)]);if((state_val_30612 === (2)))
{var inst_30608 = (state_30611[(2)]);var inst_30609 = cljs.core.async.close_BANG_.call(null,ret);var state_30611__$1 = (function (){var statearr_30613 = state_30611;(statearr_30613[(7)] = inst_30608);
return statearr_30613;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30611__$1,inst_30609);
} else
{if((state_val_30612 === (1)))
{var inst_30605 = [null,dto];var inst_30606 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30605,null));var state_30611__$1 = state_30611;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30611__$1,(2),ret,inst_30606);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30617 = [null,null,null,null,null,null,null,null];(statearr_30617[(0)] = state_machine__6178__auto__);
(statearr_30617[(1)] = (1));
return statearr_30617;
});
var state_machine__6178__auto____1 = (function (state_30611){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30611);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30618){if((e30618 instanceof Object))
{var ex__6181__auto__ = e30618;var statearr_30619_30638 = state_30611;(statearr_30619_30638[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30639 = state_30611;
state_30611 = G__30639;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30611){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_30620 = f__6193__auto__.call(null);(statearr_30620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_30620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey))
);
G__30598_30637.fail(((function (G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey){
return (function (state_30627){var state_val_30628 = (state_30627[(1)]);if((state_val_30628 === (2)))
{var inst_30624 = (state_30627[(2)]);var inst_30625 = cljs.core.async.close_BANG_.call(null,ret);var state_30627__$1 = (function (){var statearr_30629 = state_30627;(statearr_30629[(7)] = inst_30624);
return statearr_30629;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30627__$1,inst_30625);
} else
{if((state_val_30628 === (1)))
{var inst_30621 = [err,null];var inst_30622 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30621,null));var state_30627__$1 = state_30627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30627__$1,(2),ret,inst_30622);
} else
{return null;
}
}
});})(c__6192__auto__,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30633 = [null,null,null,null,null,null,null,null];(statearr_30633[(0)] = state_machine__6178__auto__);
(statearr_30633[(1)] = (1));
return statearr_30633;
});
var state_machine__6178__auto____1 = (function (state_30627){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30627);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30634){if((e30634 instanceof Object))
{var ex__6181__auto__ = e30634;var statearr_30635_30640 = state_30627;(statearr_30635_30640[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30627);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30641 = state_30627;
state_30627 = G__30641;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30627){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_30636 = f__6193__auto__.call(null);(statearr_30636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_30636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__30598_30637,configType,ret,map__30597,map__30597__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__30699){var map__30700 = p__30699;var map__30700__$1 = ((cljs.core.seq_QMARK_.call(null,map__30700))?cljs.core.apply.call(null,cljs.core.hash_map,map__30700):map__30700);var args = map__30700__$1;var id = cljs.core.get.call(null,map__30700__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__30701_30756 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__30701_30756.done(((function (G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,details));var ConvertHeadDTO = ((function (dir,detail,filtered,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function (p__30702){var vec__30703 = p__30702;var key__$1 = cljs.core.nth.call(null,vec__30703,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__30703,(1),null);var obj30705 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj30705;
});})(dir,detail,filtered,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function iter__30706(s__30707){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function (){var s__30707__$1 = s__30707;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30707__$1);if(temp__4126__auto__)
{var s__30707__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30707__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__30707__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__30709 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__30708 = (0);while(true){
if((i__30708 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__30708);cljs.core.chunk_append.call(null,b__30709,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__30757 = (i__30708 + (1));
i__30708 = G__30757;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30709),iter__30706.call(null,cljs.core.chunk_rest.call(null,s__30707__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30709),null);
}
} else
{var idx = cljs.core.first.call(null,s__30707__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__30706.call(null,cljs.core.rest.call(null,s__30707__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function iter__30710(s__30711){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function (){var s__30711__$1 = s__30711;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30711__$1);if(temp__4126__auto__)
{var s__30711__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30711__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__30711__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__30713 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__30712 = (0);while(true){
if((i__30712 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__30712);cljs.core.chunk_append.call(null,b__30713,(function (){var obj30719 = {"id":url,"url":ServeFn.call(null,url)};return obj30719;
})());
{
var G__30758 = (i__30712 + (1));
i__30712 = G__30758;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30713),iter__30710.call(null,cljs.core.chunk_rest.call(null,s__30711__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30713),null);
}
} else
{var url = cljs.core.first.call(null,s__30711__$2);return cljs.core.cons.call(null,(function (){var obj30721 = {"id":url,"url":ServeFn.call(null,url)};return obj30721;
})(),iter__30710.call(null,cljs.core.rest.call(null,s__30711__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
;var dto = (function (){var obj30723 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj30723;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function (state_30730){var state_val_30731 = (state_30730[(1)]);if((state_val_30731 === (2)))
{var inst_30727 = (state_30730[(2)]);var inst_30728 = cljs.core.async.close_BANG_.call(null,ret);var state_30730__$1 = (function (){var statearr_30732 = state_30730;(statearr_30732[(7)] = inst_30727);
return statearr_30732;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30730__$1,inst_30728);
} else
{if((state_val_30731 === (1)))
{var inst_30724 = [null,dto];var inst_30725 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30724,null));var state_30730__$1 = state_30730;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30730__$1,(2),ret,inst_30725);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30736 = [null,null,null,null,null,null,null,null];(statearr_30736[(0)] = state_machine__6178__auto__);
(statearr_30736[(1)] = (1));
return statearr_30736;
});
var state_machine__6178__auto____1 = (function (state_30730){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30730);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30737){if((e30737 instanceof Object))
{var ex__6181__auto__ = e30737;var statearr_30738_30759 = state_30730;(statearr_30738_30759[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30760 = state_30730;
state_30730 = G__30760;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30730){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_30739 = f__6193__auto__.call(null);(statearr_30739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_30739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
);
return c__6192__auto__;
});})(G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
);
G__30701_30756.fail(((function (G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function (state_30746){var state_val_30747 = (state_30746[(1)]);if((state_val_30747 === (2)))
{var inst_30743 = (state_30746[(2)]);var inst_30744 = cljs.core.async.close_BANG_.call(null,ret);var state_30746__$1 = (function (){var statearr_30748 = state_30746;(statearr_30748[(7)] = inst_30743);
return statearr_30748;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30746__$1,inst_30744);
} else
{if((state_val_30747 === (1)))
{var inst_30740 = [err,null];var inst_30741 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30740,null));var state_30746__$1 = state_30746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30746__$1,(2),ret,inst_30741);
} else
{return null;
}
}
});})(c__6192__auto__,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30752 = [null,null,null,null,null,null,null,null];(statearr_30752[(0)] = state_machine__6178__auto__);
(statearr_30752[(1)] = (1));
return statearr_30752;
});
var state_machine__6178__auto____1 = (function (state_30746){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30746);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30753){if((e30753 instanceof Object))
{var ex__6181__auto__ = e30753;var statearr_30754_30761 = state_30746;(statearr_30754_30761[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30746);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30762 = state_30746;
state_30746 = G__30762;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30746){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_30755 = f__6193__auto__.call(null);(statearr_30755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_30755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
);
return c__6192__auto__;
});})(G__30701_30756,ret,configType,map__30700,map__30700__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__30764_30801 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__30764_30801.done(((function (G__30764_30801,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__30764_30801,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__30764_30801,ret){
return (function (state_30775){var state_val_30776 = (state_30775[(1)]);if((state_val_30776 === (2)))
{var inst_30772 = (state_30775[(2)]);var inst_30773 = cljs.core.async.close_BANG_.call(null,ret);var state_30775__$1 = (function (){var statearr_30777 = state_30775;(statearr_30777[(7)] = inst_30772);
return statearr_30777;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30775__$1,inst_30773);
} else
{if((state_val_30776 === (1)))
{var inst_30767 = detail.ModelKey;var inst_30768 = {"modelKey":inst_30767};var inst_30769 = [null,inst_30768];var inst_30770 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30769,null));var state_30775__$1 = state_30775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30775__$1,(2),ret,inst_30770);
} else
{return null;
}
}
});})(c__6192__auto__,G__30764_30801,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__30764_30801,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30781 = [null,null,null,null,null,null,null,null];(statearr_30781[(0)] = state_machine__6178__auto__);
(statearr_30781[(1)] = (1));
return statearr_30781;
});
var state_machine__6178__auto____1 = (function (state_30775){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30775);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30782){if((e30782 instanceof Object))
{var ex__6181__auto__ = e30782;var statearr_30783_30802 = state_30775;(statearr_30783_30802[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30782;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30803 = state_30775;
state_30775 = G__30803;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30775){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__30764_30801,ret))
})();var state__6194__auto__ = (function (){var statearr_30784 = f__6193__auto__.call(null);(statearr_30784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_30784;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__30764_30801,ret))
);
return c__6192__auto__;
});})(G__30764_30801,ret))
);
G__30764_30801.fail(((function (G__30764_30801,ret){
return (function (p1__30763_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__30764_30801,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__30764_30801,ret){
return (function (state_30791){var state_val_30792 = (state_30791[(1)]);if((state_val_30792 === (2)))
{var inst_30788 = (state_30791[(2)]);var inst_30789 = cljs.core.async.close_BANG_.call(null,ret);var state_30791__$1 = (function (){var statearr_30793 = state_30791;(statearr_30793[(7)] = inst_30788);
return statearr_30793;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30791__$1,inst_30789);
} else
{if((state_val_30792 === (1)))
{var inst_30785 = [p1__30763_SHARP_,null];var inst_30786 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30785,null));var state_30791__$1 = state_30791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30791__$1,(2),ret,inst_30786);
} else
{return null;
}
}
});})(c__6192__auto__,G__30764_30801,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__30764_30801,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30797 = [null,null,null,null,null,null,null,null];(statearr_30797[(0)] = state_machine__6178__auto__);
(statearr_30797[(1)] = (1));
return statearr_30797;
});
var state_machine__6178__auto____1 = (function (state_30791){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30791);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30798){if((e30798 instanceof Object))
{var ex__6181__auto__ = e30798;var statearr_30799_30804 = state_30791;(statearr_30799_30804[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30798;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30805 = state_30791;
state_30791 = G__30805;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30791){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__30764_30801,ret))
})();var state__6194__auto__ = (function (){var statearr_30800 = f__6193__auto__.call(null);(statearr_30800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_30800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__30764_30801,ret))
);
return c__6192__auto__;
});})(G__30764_30801,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__30806){var map__30807 = p__30806;var map__30807__$1 = ((cljs.core.seq_QMARK_.call(null,map__30807))?cljs.core.apply.call(null,cljs.core.hash_map,map__30807):map__30807);var args = map__30807__$1;var url = cljs.core.get.call(null,map__30807__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___30828 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___30828,ret,map__30807,map__30807__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___30828,ret,map__30807,map__30807__$1,args,url){
return (function (state_30818){var state_val_30819 = (state_30818[(1)]);if((state_val_30819 === (2)))
{var inst_30815 = (state_30818[(2)]);var inst_30816 = cljs.core.async.close_BANG_.call(null,ret);var state_30818__$1 = (function (){var statearr_30820 = state_30818;(statearr_30820[(7)] = inst_30815);
return statearr_30820;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30818__$1,inst_30816);
} else
{if((state_val_30819 === (1)))
{var inst_30810 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_30811 = {"url":inst_30810};var inst_30812 = [null,inst_30811];var inst_30813 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30812,null));var state_30818__$1 = state_30818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30818__$1,(2),ret,inst_30813);
} else
{return null;
}
}
});})(c__6192__auto___30828,ret,map__30807,map__30807__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___30828,ret,map__30807,map__30807__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30824 = [null,null,null,null,null,null,null,null];(statearr_30824[(0)] = state_machine__6178__auto__);
(statearr_30824[(1)] = (1));
return statearr_30824;
});
var state_machine__6178__auto____1 = (function (state_30818){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30818);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30825){if((e30825 instanceof Object))
{var ex__6181__auto__ = e30825;var statearr_30826_30829 = state_30818;(statearr_30826_30829[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30825;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30830 = state_30818;
state_30818 = G__30830;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30818){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___30828,ret,map__30807,map__30807__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_30827 = f__6193__auto__.call(null);(statearr_30827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___30828);
return statearr_30827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___30828,ret,map__30807,map__30807__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__30831){var map__30832 = p__30831;var map__30832__$1 = ((cljs.core.seq_QMARK_.call(null,map__30832))?cljs.core.apply.call(null,cljs.core.hash_map,map__30832):map__30832);var args = map__30832__$1;var id = cljs.core.get.call(null,map__30832__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___30849 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___30849,ret,map__30832,map__30832__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___30849,ret,map__30832,map__30832__$1,args,id){
return (function (state_30839){var state_val_30840 = (state_30839[(1)]);if((state_val_30840 === (2)))
{var inst_30836 = (state_30839[(2)]);var inst_30837 = cljs.core.async.close_BANG_.call(null,ret);var state_30839__$1 = (function (){var statearr_30841 = state_30839;(statearr_30841[(7)] = inst_30836);
return statearr_30841;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30839__$1,inst_30837);
} else
{if((state_val_30840 === (1)))
{var inst_30833 = [null,null];var inst_30834 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30833,null));var state_30839__$1 = state_30839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30839__$1,(2),ret,inst_30834);
} else
{return null;
}
}
});})(c__6192__auto___30849,ret,map__30832,map__30832__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___30849,ret,map__30832,map__30832__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30845 = [null,null,null,null,null,null,null,null];(statearr_30845[(0)] = state_machine__6178__auto__);
(statearr_30845[(1)] = (1));
return statearr_30845;
});
var state_machine__6178__auto____1 = (function (state_30839){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30839);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30846){if((e30846 instanceof Object))
{var ex__6181__auto__ = e30846;var statearr_30847_30850 = state_30839;(statearr_30847_30850[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30851 = state_30839;
state_30839 = G__30851;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30839){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___30849,ret,map__30832,map__30832__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_30848 = f__6193__auto__.call(null);(statearr_30848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___30849);
return statearr_30848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___30849,ret,map__30832,map__30832__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__30852 = cljs.core.rest.call(null,list);
var G__30853 = id;
var G__30854 = (start + (1));
list = G__30852;
id = G__30853;
start = G__30854;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__30856){var map__30857 = p__30856;var map__30857__$1 = ((cljs.core.seq_QMARK_.call(null,map__30857))?cljs.core.apply.call(null,cljs.core.hash_map,map__30857):map__30857);var args = map__30857__$1;var id = cljs.core.get.call(null,map__30857__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__30858_30890 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__30858_30890.done(((function (G__30858_30890,ret,map__30857,map__30857__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__30858_30890,ret,map__30857,map__30857__$1,args,id){
return (function (p1__30855_SHARP_){var obj30860 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__30855_SHARP_ + (1)))+".jpg"))};return obj30860;
});})(filtered,evtId,evt,G__30858_30890,ret,map__30857,map__30857__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__30858_30890,ret,map__30857,map__30857__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__30858_30890,ret,map__30857,map__30857__$1,args,id){
return (function (state_30880){var state_val_30881 = (state_30880[(1)]);if((state_val_30881 === (2)))
{var inst_30877 = (state_30880[(2)]);var inst_30878 = cljs.core.async.close_BANG_.call(null,ret);var state_30880__$1 = (function (){var statearr_30882 = state_30880;(statearr_30882[(7)] = inst_30877);
return statearr_30882;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30880__$1,inst_30878);
} else
{if((state_val_30881 === (1)))
{var inst_30863 = cljs.core.nth.call(null,filtered,idx);var inst_30864 = cljs.core.first.call(null,inst_30863);var inst_30865 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30864));var inst_30866 = cljs.core.nth.call(null,filtered,idx2);var inst_30867 = cljs.core.first.call(null,inst_30866);var inst_30868 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30867));var inst_30869 = (evt["Title"]);var inst_30870 = (evt["Date"]);var inst_30871 = (evt["Content"]);var inst_30872 = (evt["Form"]);var inst_30873 = {"prev_href":inst_30865,"next_href":inst_30868,"title":inst_30869,"date":inst_30870,"sideList":photos,"content":inst_30871,"form":inst_30872};var inst_30874 = [null,inst_30873];var inst_30875 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30874,null));var state_30880__$1 = state_30880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30880__$1,(2),ret,inst_30875);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__30858_30890,ret,map__30857,map__30857__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__30858_30890,ret,map__30857,map__30857__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30886 = [null,null,null,null,null,null,null,null];(statearr_30886[(0)] = state_machine__6178__auto__);
(statearr_30886[(1)] = (1));
return statearr_30886;
});
var state_machine__6178__auto____1 = (function (state_30880){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30880);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30887){if((e30887 instanceof Object))
{var ex__6181__auto__ = e30887;var statearr_30888_30891 = state_30880;(statearr_30888_30891[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30880);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30892 = state_30880;
state_30880 = G__30892;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30880){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__30858_30890,ret,map__30857,map__30857__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_30889 = f__6193__auto__.call(null);(statearr_30889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_30889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__30858_30890,ret,map__30857,map__30857__$1,args,id))
);
return c__6192__auto__;
});})(G__30858_30890,ret,map__30857,map__30857__$1,args,id))
);
G__30858_30890.fail(((function (G__30858_30890,ret,map__30857,map__30857__$1,args,id){
return (function (err){return console.log(err);
});})(G__30858_30890,ret,map__30857,map__30857__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
