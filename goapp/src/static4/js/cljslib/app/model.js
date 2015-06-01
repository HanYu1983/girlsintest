// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20458_SHARP_){return cljs.core._EQ_.call(null,view,p1__20458_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20459_SHARP_){return cljs.core._EQ_.call(null,view,p1__20459_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20460_SHARP_){return cljs.core._EQ_.call(null,view,p1__20460_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20461_SHARP_){return cljs.core._EQ_.call(null,view,p1__20461_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20462_SHARP_){return cljs.core._EQ_.call(null,view,p1__20462_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20463_SHARP_){return cljs.core._EQ_.call(null,view,p1__20463_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20464_SHARP_){return cljs.core._EQ_.call(null,view,p1__20464_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20465_SHARP_){return cljs.core._EQ_.call(null,view,p1__20465_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20466_SHARP_){return cljs.core._EQ_.call(null,view,p1__20466_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__20470){var vec__20471 = p__20470;var model = cljs.core.nth.call(null,vec__20471,(0),null);var detail = cljs.core.nth.call(null,vec__20471,(1),null);var G__20472 = (new Date(detail.Date));G__20472.getTime();
return G__20472;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__20475){var vec__20476 = p__20475;var model = cljs.core.nth.call(null,vec__20476,(0),null);var detail = cljs.core.nth.call(null,vec__20476,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__20518){var map__20519 = p__20518;var map__20519__$1 = ((cljs.core.seq_QMARK_.call(null,map__20519))?cljs.core.apply.call(null,cljs.core.hash_map,map__20519):map__20519);var args = map__20519__$1;var searchKey = cljs.core.get.call(null,map__20519__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__20520_20559 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__20520_20559.done(((function (G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey){
return (function() { 
var G__20560__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey){
return (function (p__20521){var vec__20522 = p__20521;var model = cljs.core.nth.call(null,vec__20522,(0),null);var detail = cljs.core.nth.call(null,vec__20522,(1),null);var obj20524 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj20524;
});})(config,details,filtered,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey))
;var dto = (function (){var obj20526 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj20526;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey){
return (function (state_20533){var state_val_20534 = (state_20533[(1)]);if((state_val_20534 === (2)))
{var inst_20530 = (state_20533[(2)]);var inst_20531 = cljs.core.async.close_BANG_.call(null,ret);var state_20533__$1 = (function (){var statearr_20535 = state_20533;(statearr_20535[(7)] = inst_20530);
return statearr_20535;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20533__$1,inst_20531);
} else
{if((state_val_20534 === (1)))
{var inst_20527 = [null,dto];var inst_20528 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20527,null));var state_20533__$1 = state_20533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20533__$1,(2),ret,inst_20528);
} else
{return null;
}
}
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20539 = [null,null,null,null,null,null,null,null];(statearr_20539[(0)] = state_machine__6178__auto__);
(statearr_20539[(1)] = (1));
return statearr_20539;
});
var state_machine__6178__auto____1 = (function (state_20533){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20533);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20540){if((e20540 instanceof Object))
{var ex__6181__auto__ = e20540;var statearr_20541_20561 = state_20533;(statearr_20541_20561[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20533);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20562 = state_20533;
state_20533 = G__20562;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20533){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_20542 = f__6193__auto__.call(null);(statearr_20542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_20542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey))
);
return c__6192__auto__;
};
var G__20560 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20560__delegate.call(this,args__$1);};
G__20560.cljs$lang$maxFixedArity = 0;
G__20560.cljs$lang$applyTo = (function (arglist__20563){
var args__$1 = cljs.core.seq(arglist__20563);
return G__20560__delegate(args__$1);
});
G__20560.cljs$core$IFn$_invoke$arity$variadic = G__20560__delegate;
return G__20560;
})()
;})(G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey))
);
G__20520_20559.fail(((function (G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey){
return (function (state_20549){var state_val_20550 = (state_20549[(1)]);if((state_val_20550 === (2)))
{var inst_20546 = (state_20549[(2)]);var inst_20547 = cljs.core.async.close_BANG_.call(null,ret);var state_20549__$1 = (function (){var statearr_20551 = state_20549;(statearr_20551[(7)] = inst_20546);
return statearr_20551;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20549__$1,inst_20547);
} else
{if((state_val_20550 === (1)))
{var inst_20543 = [err,null];var inst_20544 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20543,null));var state_20549__$1 = state_20549;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20549__$1,(2),ret,inst_20544);
} else
{return null;
}
}
});})(c__6192__auto__,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20555 = [null,null,null,null,null,null,null,null];(statearr_20555[(0)] = state_machine__6178__auto__);
(statearr_20555[(1)] = (1));
return statearr_20555;
});
var state_machine__6178__auto____1 = (function (state_20549){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20549);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20556){if((e20556 instanceof Object))
{var ex__6181__auto__ = e20556;var statearr_20557_20564 = state_20549;(statearr_20557_20564[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20549);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20556;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20565 = state_20549;
state_20549 = G__20565;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20549){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_20558 = f__6193__auto__.call(null);(statearr_20558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_20558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey))
);
return c__6192__auto__;
});})(G__20520_20559,configType,ret,map__20519,map__20519__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__20623){var map__20624 = p__20623;var map__20624__$1 = ((cljs.core.seq_QMARK_.call(null,map__20624))?cljs.core.apply.call(null,cljs.core.hash_map,map__20624):map__20624);var args = map__20624__$1;var id = cljs.core.get.call(null,map__20624__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__20625_20680 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__20625_20680.done(((function (G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function() { 
var G__20681__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function (p__20626){var vec__20627 = p__20626;var key__$1 = cljs.core.nth.call(null,vec__20627,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__20627,(1),null);var obj20629 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj20629;
});})(config,dir,details,detail,filtered,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function iter__20630(s__20631){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function (){var s__20631__$1 = s__20631;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20631__$1);if(temp__4126__auto__)
{var s__20631__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20631__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__20631__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__20633 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__20632 = (0);while(true){
if((i__20632 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__20632);cljs.core.chunk_append.call(null,b__20633,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__20682 = (i__20632 + (1));
i__20632 = G__20682;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20633),iter__20630.call(null,cljs.core.chunk_rest.call(null,s__20631__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20633),null);
}
} else
{var idx = cljs.core.first.call(null,s__20631__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__20630.call(null,cljs.core.rest.call(null,s__20631__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function iter__20634(s__20635){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function (){var s__20635__$1 = s__20635;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20635__$1);if(temp__4126__auto__)
{var s__20635__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20635__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__20635__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__20637 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__20636 = (0);while(true){
if((i__20636 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__20636);cljs.core.chunk_append.call(null,b__20637,(function (){var obj20643 = {"id":url,"url":ServeFn.call(null,url)};return obj20643;
})());
{
var G__20683 = (i__20636 + (1));
i__20636 = G__20683;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20637),iter__20634.call(null,cljs.core.chunk_rest.call(null,s__20635__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20637),null);
}
} else
{var url = cljs.core.first.call(null,s__20635__$2);return cljs.core.cons.call(null,(function (){var obj20645 = {"id":url,"url":ServeFn.call(null,url)};return obj20645;
})(),iter__20634.call(null,cljs.core.rest.call(null,s__20635__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
;var dto = (function (){var obj20647 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj20647;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function (state_20654){var state_val_20655 = (state_20654[(1)]);if((state_val_20655 === (2)))
{var inst_20651 = (state_20654[(2)]);var inst_20652 = cljs.core.async.close_BANG_.call(null,ret);var state_20654__$1 = (function (){var statearr_20656 = state_20654;(statearr_20656[(7)] = inst_20651);
return statearr_20656;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20654__$1,inst_20652);
} else
{if((state_val_20655 === (1)))
{var inst_20648 = [null,dto];var inst_20649 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20648,null));var state_20654__$1 = state_20654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20654__$1,(2),ret,inst_20649);
} else
{return null;
}
}
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20660 = [null,null,null,null,null,null,null,null];(statearr_20660[(0)] = state_machine__6178__auto__);
(statearr_20660[(1)] = (1));
return statearr_20660;
});
var state_machine__6178__auto____1 = (function (state_20654){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20654);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20661){if((e20661 instanceof Object))
{var ex__6181__auto__ = e20661;var statearr_20662_20684 = state_20654;(statearr_20662_20684[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20661;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20685 = state_20654;
state_20654 = G__20685;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20654){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_20663 = f__6193__auto__.call(null);(statearr_20663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_20663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
);
return c__6192__auto__;
};
var G__20681 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20681__delegate.call(this,args__$1);};
G__20681.cljs$lang$maxFixedArity = 0;
G__20681.cljs$lang$applyTo = (function (arglist__20686){
var args__$1 = cljs.core.seq(arglist__20686);
return G__20681__delegate(args__$1);
});
G__20681.cljs$core$IFn$_invoke$arity$variadic = G__20681__delegate;
return G__20681;
})()
;})(G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
);
G__20625_20680.fail(((function (G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function (state_20670){var state_val_20671 = (state_20670[(1)]);if((state_val_20671 === (2)))
{var inst_20667 = (state_20670[(2)]);var inst_20668 = cljs.core.async.close_BANG_.call(null,ret);var state_20670__$1 = (function (){var statearr_20672 = state_20670;(statearr_20672[(7)] = inst_20667);
return statearr_20672;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20670__$1,inst_20668);
} else
{if((state_val_20671 === (1)))
{var inst_20664 = [err,null];var inst_20665 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20664,null));var state_20670__$1 = state_20670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20670__$1,(2),ret,inst_20665);
} else
{return null;
}
}
});})(c__6192__auto__,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20676 = [null,null,null,null,null,null,null,null];(statearr_20676[(0)] = state_machine__6178__auto__);
(statearr_20676[(1)] = (1));
return statearr_20676;
});
var state_machine__6178__auto____1 = (function (state_20670){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20670);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20677){if((e20677 instanceof Object))
{var ex__6181__auto__ = e20677;var statearr_20678_20687 = state_20670;(statearr_20678_20687[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20688 = state_20670;
state_20670 = G__20688;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20670){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_20679 = f__6193__auto__.call(null);(statearr_20679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_20679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
);
return c__6192__auto__;
});})(G__20625_20680,ret,configType,map__20624,map__20624__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__20690_20727 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__20690_20727.done(((function (G__20690_20727,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__20690_20727,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__20690_20727,ret){
return (function (state_20701){var state_val_20702 = (state_20701[(1)]);if((state_val_20702 === (2)))
{var inst_20698 = (state_20701[(2)]);var inst_20699 = cljs.core.async.close_BANG_.call(null,ret);var state_20701__$1 = (function (){var statearr_20703 = state_20701;(statearr_20703[(7)] = inst_20698);
return statearr_20703;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20701__$1,inst_20699);
} else
{if((state_val_20702 === (1)))
{var inst_20693 = detail.ModelKey;var inst_20694 = {"modelKey":inst_20693};var inst_20695 = [null,inst_20694];var inst_20696 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20695,null));var state_20701__$1 = state_20701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20701__$1,(2),ret,inst_20696);
} else
{return null;
}
}
});})(c__6192__auto__,G__20690_20727,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__20690_20727,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20707 = [null,null,null,null,null,null,null,null];(statearr_20707[(0)] = state_machine__6178__auto__);
(statearr_20707[(1)] = (1));
return statearr_20707;
});
var state_machine__6178__auto____1 = (function (state_20701){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20701);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20708){if((e20708 instanceof Object))
{var ex__6181__auto__ = e20708;var statearr_20709_20728 = state_20701;(statearr_20709_20728[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20729 = state_20701;
state_20701 = G__20729;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20701){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__20690_20727,ret))
})();var state__6194__auto__ = (function (){var statearr_20710 = f__6193__auto__.call(null);(statearr_20710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_20710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__20690_20727,ret))
);
return c__6192__auto__;
});})(G__20690_20727,ret))
);
G__20690_20727.fail(((function (G__20690_20727,ret){
return (function (p1__20689_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__20690_20727,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__20690_20727,ret){
return (function (state_20717){var state_val_20718 = (state_20717[(1)]);if((state_val_20718 === (2)))
{var inst_20714 = (state_20717[(2)]);var inst_20715 = cljs.core.async.close_BANG_.call(null,ret);var state_20717__$1 = (function (){var statearr_20719 = state_20717;(statearr_20719[(7)] = inst_20714);
return statearr_20719;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20717__$1,inst_20715);
} else
{if((state_val_20718 === (1)))
{var inst_20711 = [p1__20689_SHARP_,null];var inst_20712 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20711,null));var state_20717__$1 = state_20717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20717__$1,(2),ret,inst_20712);
} else
{return null;
}
}
});})(c__6192__auto__,G__20690_20727,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__20690_20727,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20723 = [null,null,null,null,null,null,null,null];(statearr_20723[(0)] = state_machine__6178__auto__);
(statearr_20723[(1)] = (1));
return statearr_20723;
});
var state_machine__6178__auto____1 = (function (state_20717){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20717);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20724){if((e20724 instanceof Object))
{var ex__6181__auto__ = e20724;var statearr_20725_20730 = state_20717;(statearr_20725_20730[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20717);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20731 = state_20717;
state_20717 = G__20731;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20717){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__20690_20727,ret))
})();var state__6194__auto__ = (function (){var statearr_20726 = f__6193__auto__.call(null);(statearr_20726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_20726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__20690_20727,ret))
);
return c__6192__auto__;
});})(G__20690_20727,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__20732){var map__20733 = p__20732;var map__20733__$1 = ((cljs.core.seq_QMARK_.call(null,map__20733))?cljs.core.apply.call(null,cljs.core.hash_map,map__20733):map__20733);var args = map__20733__$1;var url = cljs.core.get.call(null,map__20733__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___20754 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___20754,ret,map__20733,map__20733__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___20754,ret,map__20733,map__20733__$1,args,url){
return (function (state_20744){var state_val_20745 = (state_20744[(1)]);if((state_val_20745 === (2)))
{var inst_20741 = (state_20744[(2)]);var inst_20742 = cljs.core.async.close_BANG_.call(null,ret);var state_20744__$1 = (function (){var statearr_20746 = state_20744;(statearr_20746[(7)] = inst_20741);
return statearr_20746;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20744__$1,inst_20742);
} else
{if((state_val_20745 === (1)))
{var inst_20736 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_20737 = {"url":inst_20736};var inst_20738 = [null,inst_20737];var inst_20739 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20738,null));var state_20744__$1 = state_20744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20744__$1,(2),ret,inst_20739);
} else
{return null;
}
}
});})(c__6192__auto___20754,ret,map__20733,map__20733__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___20754,ret,map__20733,map__20733__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20750 = [null,null,null,null,null,null,null,null];(statearr_20750[(0)] = state_machine__6178__auto__);
(statearr_20750[(1)] = (1));
return statearr_20750;
});
var state_machine__6178__auto____1 = (function (state_20744){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20744);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20751){if((e20751 instanceof Object))
{var ex__6181__auto__ = e20751;var statearr_20752_20755 = state_20744;(statearr_20752_20755[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20756 = state_20744;
state_20744 = G__20756;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20744){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___20754,ret,map__20733,map__20733__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_20753 = f__6193__auto__.call(null);(statearr_20753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___20754);
return statearr_20753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___20754,ret,map__20733,map__20733__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__20757){var map__20758 = p__20757;var map__20758__$1 = ((cljs.core.seq_QMARK_.call(null,map__20758))?cljs.core.apply.call(null,cljs.core.hash_map,map__20758):map__20758);var args = map__20758__$1;var id = cljs.core.get.call(null,map__20758__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___20775 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___20775,ret,map__20758,map__20758__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___20775,ret,map__20758,map__20758__$1,args,id){
return (function (state_20765){var state_val_20766 = (state_20765[(1)]);if((state_val_20766 === (2)))
{var inst_20762 = (state_20765[(2)]);var inst_20763 = cljs.core.async.close_BANG_.call(null,ret);var state_20765__$1 = (function (){var statearr_20767 = state_20765;(statearr_20767[(7)] = inst_20762);
return statearr_20767;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20765__$1,inst_20763);
} else
{if((state_val_20766 === (1)))
{var inst_20759 = [null,null];var inst_20760 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20759,null));var state_20765__$1 = state_20765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20765__$1,(2),ret,inst_20760);
} else
{return null;
}
}
});})(c__6192__auto___20775,ret,map__20758,map__20758__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___20775,ret,map__20758,map__20758__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20771 = [null,null,null,null,null,null,null,null];(statearr_20771[(0)] = state_machine__6178__auto__);
(statearr_20771[(1)] = (1));
return statearr_20771;
});
var state_machine__6178__auto____1 = (function (state_20765){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20765);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20772){if((e20772 instanceof Object))
{var ex__6181__auto__ = e20772;var statearr_20773_20776 = state_20765;(statearr_20773_20776[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20765);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20777 = state_20765;
state_20765 = G__20777;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20765){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___20775,ret,map__20758,map__20758__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_20774 = f__6193__auto__.call(null);(statearr_20774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___20775);
return statearr_20774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___20775,ret,map__20758,map__20758__$1,args,id))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__20778){var map__20779 = p__20778;var map__20779__$1 = ((cljs.core.seq_QMARK_.call(null,map__20779))?cljs.core.apply.call(null,cljs.core.hash_map,map__20779):map__20779);var args = map__20779__$1;var id = cljs.core.get.call(null,map__20779__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___20803 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___20803,ret,map__20779,map__20779__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___20803,ret,map__20779,map__20779__$1,args,id){
return (function (state_20793){var state_val_20794 = (state_20793[(1)]);if((state_val_20794 === (2)))
{var inst_20790 = (state_20793[(2)]);var inst_20791 = cljs.core.async.close_BANG_.call(null,ret);var state_20793__$1 = (function (){var statearr_20795 = state_20793;(statearr_20795[(7)] = inst_20790);
return statearr_20795;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20793__$1,inst_20791);
} else
{if((state_val_20794 === (1)))
{var inst_20784 = {"path":""};var inst_20785 = [inst_20784];var inst_20786 = {"title":"test title","date":"2015/6/1","sideList":inst_20785,"content":"content","form":"form"};var inst_20787 = [null,inst_20786];var inst_20788 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20787,null));var state_20793__$1 = state_20793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20793__$1,(2),ret,inst_20788);
} else
{return null;
}
}
});})(c__6192__auto___20803,ret,map__20779,map__20779__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___20803,ret,map__20779,map__20779__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_20799 = [null,null,null,null,null,null,null,null];(statearr_20799[(0)] = state_machine__6178__auto__);
(statearr_20799[(1)] = (1));
return statearr_20799;
});
var state_machine__6178__auto____1 = (function (state_20793){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_20793);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e20800){if((e20800 instanceof Object))
{var ex__6181__auto__ = e20800;var statearr_20801_20804 = state_20793;(statearr_20801_20804[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20805 = state_20793;
state_20793 = G__20805;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_20793){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_20793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___20803,ret,map__20779,map__20779__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_20802 = f__6193__auto__.call(null);(statearr_20802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___20803);
return statearr_20802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___20803,ret,map__20779,map__20779__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
