// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17437_SHARP_){return cljs.core._EQ_.call(null,view,p1__17437_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17438_SHARP_){return cljs.core._EQ_.call(null,view,p1__17438_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17439_SHARP_){return cljs.core._EQ_.call(null,view,p1__17439_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17440_SHARP_){return cljs.core._EQ_.call(null,view,p1__17440_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17441_SHARP_){return cljs.core._EQ_.call(null,view,p1__17441_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17442_SHARP_){return cljs.core._EQ_.call(null,view,p1__17442_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17443_SHARP_){return cljs.core._EQ_.call(null,view,p1__17443_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17444_SHARP_){return cljs.core._EQ_.call(null,view,p1__17444_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17445_SHARP_){return cljs.core._EQ_.call(null,view,p1__17445_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__17449){var vec__17450 = p__17449;var model = cljs.core.nth.call(null,vec__17450,(0),null);var detail = cljs.core.nth.call(null,vec__17450,(1),null);var G__17451 = (new Date(detail.Date));G__17451.getTime();
return G__17451;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__17454){var vec__17455 = p__17454;var model = cljs.core.nth.call(null,vec__17455,(0),null);var detail = cljs.core.nth.call(null,vec__17455,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__17497){var map__17498 = p__17497;var map__17498__$1 = ((cljs.core.seq_QMARK_.call(null,map__17498))?cljs.core.apply.call(null,cljs.core.hash_map,map__17498):map__17498);var args = map__17498__$1;var searchKey = cljs.core.get.call(null,map__17498__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__17499_17538 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__17499_17538.done(((function (G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey){
return (function() { 
var G__17539__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey){
return (function (p__17500){var vec__17501 = p__17500;var model = cljs.core.nth.call(null,vec__17501,(0),null);var detail = cljs.core.nth.call(null,vec__17501,(1),null);var obj17503 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj17503;
});})(config,details,filtered,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey))
;var dto = (function (){var obj17505 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj17505;
})();var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey){
return (function (state_17512){var state_val_17513 = (state_17512[(1)]);if((state_val_17513 === (2)))
{var inst_17509 = (state_17512[(2)]);var inst_17510 = cljs.core.async.close_BANG_.call(null,ret);var state_17512__$1 = (function (){var statearr_17514 = state_17512;(statearr_17514[(7)] = inst_17509);
return statearr_17514;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17512__$1,inst_17510);
} else
{if((state_val_17513 === (1)))
{var inst_17506 = [null,dto];var inst_17507 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17506,null));var state_17512__$1 = state_17512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17512__$1,(2),ret,inst_17507);
} else
{return null;
}
}
});})(c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey))
;return ((function (switch__6201__auto__,c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17518 = [null,null,null,null,null,null,null,null];(statearr_17518[(0)] = state_machine__6202__auto__);
(statearr_17518[(1)] = (1));
return statearr_17518;
});
var state_machine__6202__auto____1 = (function (state_17512){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17512);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17519){if((e17519 instanceof Object))
{var ex__6205__auto__ = e17519;var statearr_17520_17540 = state_17512;(statearr_17520_17540[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17512);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17541 = state_17512;
state_17512 = G__17541;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17512){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey))
})();var state__6218__auto__ = (function (){var statearr_17521 = f__6217__auto__.call(null);(statearr_17521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_17521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey))
);
return c__6216__auto__;
};
var G__17539 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17539__delegate.call(this,args__$1);};
G__17539.cljs$lang$maxFixedArity = 0;
G__17539.cljs$lang$applyTo = (function (arglist__17542){
var args__$1 = cljs.core.seq(arglist__17542);
return G__17539__delegate(args__$1);
});
G__17539.cljs$core$IFn$_invoke$arity$variadic = G__17539__delegate;
return G__17539;
})()
;})(G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey))
);
G__17499_17538.fail(((function (G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey){
return (function (err){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey){
return (function (state_17528){var state_val_17529 = (state_17528[(1)]);if((state_val_17529 === (2)))
{var inst_17525 = (state_17528[(2)]);var inst_17526 = cljs.core.async.close_BANG_.call(null,ret);var state_17528__$1 = (function (){var statearr_17530 = state_17528;(statearr_17530[(7)] = inst_17525);
return statearr_17530;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17528__$1,inst_17526);
} else
{if((state_val_17529 === (1)))
{var inst_17522 = [err,null];var inst_17523 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17522,null));var state_17528__$1 = state_17528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17528__$1,(2),ret,inst_17523);
} else
{return null;
}
}
});})(c__6216__auto__,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey))
;return ((function (switch__6201__auto__,c__6216__auto__,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17534 = [null,null,null,null,null,null,null,null];(statearr_17534[(0)] = state_machine__6202__auto__);
(statearr_17534[(1)] = (1));
return statearr_17534;
});
var state_machine__6202__auto____1 = (function (state_17528){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17528);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17535){if((e17535 instanceof Object))
{var ex__6205__auto__ = e17535;var statearr_17536_17543 = state_17528;(statearr_17536_17543[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17528);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17544 = state_17528;
state_17528 = G__17544;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17528){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey))
})();var state__6218__auto__ = (function (){var statearr_17537 = f__6217__auto__.call(null);(statearr_17537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_17537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey))
);
return c__6216__auto__;
});})(G__17499_17538,configType,ret,map__17498,map__17498__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__17602){var map__17603 = p__17602;var map__17603__$1 = ((cljs.core.seq_QMARK_.call(null,map__17603))?cljs.core.apply.call(null,cljs.core.hash_map,map__17603):map__17603);var args = map__17603__$1;var id = cljs.core.get.call(null,map__17603__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__17604_17659 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__17604_17659.done(((function (G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function() { 
var G__17660__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function (p__17605){var vec__17606 = p__17605;var key__$1 = cljs.core.nth.call(null,vec__17606,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__17606,(1),null);var obj17608 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj17608;
});})(config,dir,details,detail,filtered,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function iter__17609(s__17610){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function (){var s__17610__$1 = s__17610;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17610__$1);if(temp__4126__auto__)
{var s__17610__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17610__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__17610__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__17612 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__17611 = (0);while(true){
if((i__17611 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__17611);cljs.core.chunk_append.call(null,b__17612,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__17661 = (i__17611 + (1));
i__17611 = G__17661;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17612),iter__17609.call(null,cljs.core.chunk_rest.call(null,s__17610__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17612),null);
}
} else
{var idx = cljs.core.first.call(null,s__17610__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__17609.call(null,cljs.core.rest.call(null,s__17610__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function iter__17613(s__17614){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function (){var s__17614__$1 = s__17614;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17614__$1);if(temp__4126__auto__)
{var s__17614__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17614__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__17614__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__17616 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__17615 = (0);while(true){
if((i__17615 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__17615);cljs.core.chunk_append.call(null,b__17616,(function (){var obj17622 = {"id":url,"url":ServeFn.call(null,url)};return obj17622;
})());
{
var G__17662 = (i__17615 + (1));
i__17615 = G__17662;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17616),iter__17613.call(null,cljs.core.chunk_rest.call(null,s__17614__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17616),null);
}
} else
{var url = cljs.core.first.call(null,s__17614__$2);return cljs.core.cons.call(null,(function (){var obj17624 = {"id":url,"url":ServeFn.call(null,url)};return obj17624;
})(),iter__17613.call(null,cljs.core.rest.call(null,s__17614__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
;var dto = (function (){var obj17626 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj17626;
})();var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function (state_17633){var state_val_17634 = (state_17633[(1)]);if((state_val_17634 === (2)))
{var inst_17630 = (state_17633[(2)]);var inst_17631 = cljs.core.async.close_BANG_.call(null,ret);var state_17633__$1 = (function (){var statearr_17635 = state_17633;(statearr_17635[(7)] = inst_17630);
return statearr_17635;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17633__$1,inst_17631);
} else
{if((state_val_17634 === (1)))
{var inst_17627 = [null,dto];var inst_17628 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17627,null));var state_17633__$1 = state_17633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17633__$1,(2),ret,inst_17628);
} else
{return null;
}
}
});})(c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
;return ((function (switch__6201__auto__,c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17639 = [null,null,null,null,null,null,null,null];(statearr_17639[(0)] = state_machine__6202__auto__);
(statearr_17639[(1)] = (1));
return statearr_17639;
});
var state_machine__6202__auto____1 = (function (state_17633){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17633);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17640){if((e17640 instanceof Object))
{var ex__6205__auto__ = e17640;var statearr_17641_17663 = state_17633;(statearr_17641_17663[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17633);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17664 = state_17633;
state_17633 = G__17664;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17633){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
})();var state__6218__auto__ = (function (){var statearr_17642 = f__6217__auto__.call(null);(statearr_17642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_17642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
);
return c__6216__auto__;
};
var G__17660 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17660__delegate.call(this,args__$1);};
G__17660.cljs$lang$maxFixedArity = 0;
G__17660.cljs$lang$applyTo = (function (arglist__17665){
var args__$1 = cljs.core.seq(arglist__17665);
return G__17660__delegate(args__$1);
});
G__17660.cljs$core$IFn$_invoke$arity$variadic = G__17660__delegate;
return G__17660;
})()
;})(G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
);
G__17604_17659.fail(((function (G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function (err){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function (state_17649){var state_val_17650 = (state_17649[(1)]);if((state_val_17650 === (2)))
{var inst_17646 = (state_17649[(2)]);var inst_17647 = cljs.core.async.close_BANG_.call(null,ret);var state_17649__$1 = (function (){var statearr_17651 = state_17649;(statearr_17651[(7)] = inst_17646);
return statearr_17651;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17649__$1,inst_17647);
} else
{if((state_val_17650 === (1)))
{var inst_17643 = [err,null];var inst_17644 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17643,null));var state_17649__$1 = state_17649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17649__$1,(2),ret,inst_17644);
} else
{return null;
}
}
});})(c__6216__auto__,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
;return ((function (switch__6201__auto__,c__6216__auto__,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17655 = [null,null,null,null,null,null,null,null];(statearr_17655[(0)] = state_machine__6202__auto__);
(statearr_17655[(1)] = (1));
return statearr_17655;
});
var state_machine__6202__auto____1 = (function (state_17649){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17649);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17656){if((e17656 instanceof Object))
{var ex__6205__auto__ = e17656;var statearr_17657_17666 = state_17649;(statearr_17657_17666[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17649);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17667 = state_17649;
state_17649 = G__17667;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17649){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
})();var state__6218__auto__ = (function (){var statearr_17658 = f__6217__auto__.call(null);(statearr_17658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_17658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
);
return c__6216__auto__;
});})(G__17604_17659,ret,configType,map__17603,map__17603__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var configType = "model";var G__17669_17707 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__17669_17707.done(((function (G__17669_17707,ret,configType){
return (function() { 
var G__17708__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var vec__17670 = cljs.core.first.call(null,details);var modelKey = cljs.core.nth.call(null,vec__17670,(0),null);var detail = cljs.core.nth.call(null,vec__17670,(1),null);var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,config,details,vec__17670,modelKey,detail,G__17669_17707,ret,configType){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,config,details,vec__17670,modelKey,detail,G__17669_17707,ret,configType){
return (function (state_17681){var state_val_17682 = (state_17681[(1)]);if((state_val_17682 === (2)))
{var inst_17678 = (state_17681[(2)]);var inst_17679 = cljs.core.async.close_BANG_.call(null,ret);var state_17681__$1 = (function (){var statearr_17683 = state_17681;(statearr_17683[(7)] = inst_17678);
return statearr_17683;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17681__$1,inst_17679);
} else
{if((state_val_17682 === (1)))
{var inst_17673 = detail.ModelKey;var inst_17674 = {"modelKey":inst_17673};var inst_17675 = [null,inst_17674];var inst_17676 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17675,null));var state_17681__$1 = state_17681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17681__$1,(2),ret,inst_17676);
} else
{return null;
}
}
});})(c__6216__auto__,config,details,vec__17670,modelKey,detail,G__17669_17707,ret,configType))
;return ((function (switch__6201__auto__,c__6216__auto__,config,details,vec__17670,modelKey,detail,G__17669_17707,ret,configType){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17687 = [null,null,null,null,null,null,null,null];(statearr_17687[(0)] = state_machine__6202__auto__);
(statearr_17687[(1)] = (1));
return statearr_17687;
});
var state_machine__6202__auto____1 = (function (state_17681){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17688){if((e17688 instanceof Object))
{var ex__6205__auto__ = e17688;var statearr_17689_17709 = state_17681;(statearr_17689_17709[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17710 = state_17681;
state_17681 = G__17710;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17681){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,config,details,vec__17670,modelKey,detail,G__17669_17707,ret,configType))
})();var state__6218__auto__ = (function (){var statearr_17690 = f__6217__auto__.call(null);(statearr_17690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_17690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,config,details,vec__17670,modelKey,detail,G__17669_17707,ret,configType))
);
return c__6216__auto__;
};
var G__17708 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17708__delegate.call(this,args__$1);};
G__17708.cljs$lang$maxFixedArity = 0;
G__17708.cljs$lang$applyTo = (function (arglist__17711){
var args__$1 = cljs.core.seq(arglist__17711);
return G__17708__delegate(args__$1);
});
G__17708.cljs$core$IFn$_invoke$arity$variadic = G__17708__delegate;
return G__17708;
})()
;})(G__17669_17707,ret,configType))
);
G__17669_17707.fail(((function (G__17669_17707,ret,configType){
return (function (p1__17668_SHARP_){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,G__17669_17707,ret,configType){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,G__17669_17707,ret,configType){
return (function (state_17697){var state_val_17698 = (state_17697[(1)]);if((state_val_17698 === (2)))
{var inst_17694 = (state_17697[(2)]);var inst_17695 = cljs.core.async.close_BANG_.call(null,ret);var state_17697__$1 = (function (){var statearr_17699 = state_17697;(statearr_17699[(7)] = inst_17694);
return statearr_17699;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17697__$1,inst_17695);
} else
{if((state_val_17698 === (1)))
{var inst_17691 = [p1__17668_SHARP_,null];var inst_17692 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17691,null));var state_17697__$1 = state_17697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17697__$1,(2),ret,inst_17692);
} else
{return null;
}
}
});})(c__6216__auto__,G__17669_17707,ret,configType))
;return ((function (switch__6201__auto__,c__6216__auto__,G__17669_17707,ret,configType){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_17703 = [null,null,null,null,null,null,null,null];(statearr_17703[(0)] = state_machine__6202__auto__);
(statearr_17703[(1)] = (1));
return statearr_17703;
});
var state_machine__6202__auto____1 = (function (state_17697){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_17697);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e17704){if((e17704 instanceof Object))
{var ex__6205__auto__ = e17704;var statearr_17705_17712 = state_17697;(statearr_17705_17712[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17697);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17713 = state_17697;
state_17697 = G__17713;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_17697){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_17697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,G__17669_17707,ret,configType))
})();var state__6218__auto__ = (function (){var statearr_17706 = f__6217__auto__.call(null);(statearr_17706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_17706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,G__17669_17707,ret,configType))
);
return c__6216__auto__;
});})(G__17669_17707,ret,configType))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
