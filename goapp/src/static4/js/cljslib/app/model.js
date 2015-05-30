// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15323_SHARP_){return cljs.core._EQ_.call(null,view,p1__15323_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15324_SHARP_){return cljs.core._EQ_.call(null,view,p1__15324_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15325_SHARP_){return cljs.core._EQ_.call(null,view,p1__15325_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15326_SHARP_){return cljs.core._EQ_.call(null,view,p1__15326_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15327_SHARP_){return cljs.core._EQ_.call(null,view,p1__15327_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15328_SHARP_){return cljs.core._EQ_.call(null,view,p1__15328_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15329_SHARP_){return cljs.core._EQ_.call(null,view,p1__15329_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15330_SHARP_){return cljs.core._EQ_.call(null,view,p1__15330_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__15331_SHARP_){return cljs.core._EQ_.call(null,view,p1__15331_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__15335){var vec__15336 = p__15335;var model = cljs.core.nth.call(null,vec__15336,(0),null);var detail = cljs.core.nth.call(null,vec__15336,(1),null);var G__15337 = (new Date(detail.Date));G__15337.getTime();
return G__15337;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__15340){var vec__15341 = p__15340;var model = cljs.core.nth.call(null,vec__15341,(0),null);var detail = cljs.core.nth.call(null,vec__15341,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__15383){var map__15384 = p__15383;var map__15384__$1 = ((cljs.core.seq_QMARK_.call(null,map__15384))?cljs.core.apply.call(null,cljs.core.hash_map,map__15384):map__15384);var args = map__15384__$1;var searchKey = cljs.core.get.call(null,map__15384__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__15385_15424 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__15385_15424.done(((function (G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey){
return (function() { 
var G__15425__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey){
return (function (p__15386){var vec__15387 = p__15386;var model = cljs.core.nth.call(null,vec__15387,(0),null);var detail = cljs.core.nth.call(null,vec__15387,(1),null);var obj15389 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj15389;
});})(config,details,filtered,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey))
;var dto = (function (){var obj15391 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj15391;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey){
return (function (state_15398){var state_val_15399 = (state_15398[(1)]);if((state_val_15399 === (2)))
{var inst_15395 = (state_15398[(2)]);var inst_15396 = cljs.core.async.close_BANG_.call(null,ret);var state_15398__$1 = (function (){var statearr_15400 = state_15398;(statearr_15400[(7)] = inst_15395);
return statearr_15400;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15398__$1,inst_15396);
} else
{if((state_val_15399 === (1)))
{var inst_15392 = [null,dto];var inst_15393 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15392,null));var state_15398__$1 = state_15398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15398__$1,(2),ret,inst_15393);
} else
{return null;
}
}
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15404 = [null,null,null,null,null,null,null,null];(statearr_15404[(0)] = state_machine__6178__auto__);
(statearr_15404[(1)] = (1));
return statearr_15404;
});
var state_machine__6178__auto____1 = (function (state_15398){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15398);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15405){if((e15405 instanceof Object))
{var ex__6181__auto__ = e15405;var statearr_15406_15426 = state_15398;(statearr_15406_15426[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15398);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15427 = state_15398;
state_15398 = G__15427;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15398){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_15407 = f__6193__auto__.call(null);(statearr_15407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey))
);
return c__6192__auto__;
};
var G__15425 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15425__delegate.call(this,args__$1);};
G__15425.cljs$lang$maxFixedArity = 0;
G__15425.cljs$lang$applyTo = (function (arglist__15428){
var args__$1 = cljs.core.seq(arglist__15428);
return G__15425__delegate(args__$1);
});
G__15425.cljs$core$IFn$_invoke$arity$variadic = G__15425__delegate;
return G__15425;
})()
;})(G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey))
);
G__15385_15424.fail(((function (G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey){
return (function (state_15414){var state_val_15415 = (state_15414[(1)]);if((state_val_15415 === (2)))
{var inst_15411 = (state_15414[(2)]);var inst_15412 = cljs.core.async.close_BANG_.call(null,ret);var state_15414__$1 = (function (){var statearr_15416 = state_15414;(statearr_15416[(7)] = inst_15411);
return statearr_15416;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15414__$1,inst_15412);
} else
{if((state_val_15415 === (1)))
{var inst_15408 = [err,null];var inst_15409 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15408,null));var state_15414__$1 = state_15414;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15414__$1,(2),ret,inst_15409);
} else
{return null;
}
}
});})(c__6192__auto__,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15420 = [null,null,null,null,null,null,null,null];(statearr_15420[(0)] = state_machine__6178__auto__);
(statearr_15420[(1)] = (1));
return statearr_15420;
});
var state_machine__6178__auto____1 = (function (state_15414){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15414);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15421){if((e15421 instanceof Object))
{var ex__6181__auto__ = e15421;var statearr_15422_15429 = state_15414;(statearr_15422_15429[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15414);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15430 = state_15414;
state_15414 = G__15430;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15414){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_15423 = f__6193__auto__.call(null);(statearr_15423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey))
);
return c__6192__auto__;
});})(G__15385_15424,configType,ret,map__15384,map__15384__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__15488){var map__15489 = p__15488;var map__15489__$1 = ((cljs.core.seq_QMARK_.call(null,map__15489))?cljs.core.apply.call(null,cljs.core.hash_map,map__15489):map__15489);var args = map__15489__$1;var id = cljs.core.get.call(null,map__15489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__15490_15545 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__15490_15545.done(((function (G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function() { 
var G__15546__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function (p__15491){var vec__15492 = p__15491;var key__$1 = cljs.core.nth.call(null,vec__15492,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__15492,(1),null);var obj15494 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj15494;
});})(config,dir,details,detail,filtered,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function iter__15495(s__15496){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function (){var s__15496__$1 = s__15496;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15496__$1);if(temp__4126__auto__)
{var s__15496__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15496__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__15496__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__15498 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__15497 = (0);while(true){
if((i__15497 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__15497);cljs.core.chunk_append.call(null,b__15498,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__15547 = (i__15497 + (1));
i__15497 = G__15547;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15498),iter__15495.call(null,cljs.core.chunk_rest.call(null,s__15496__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15498),null);
}
} else
{var idx = cljs.core.first.call(null,s__15496__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__15495.call(null,cljs.core.rest.call(null,s__15496__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function iter__15499(s__15500){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function (){var s__15500__$1 = s__15500;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15500__$1);if(temp__4126__auto__)
{var s__15500__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15500__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__15500__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__15502 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__15501 = (0);while(true){
if((i__15501 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__15501);cljs.core.chunk_append.call(null,b__15502,(function (){var obj15508 = {"id":url,"url":ServeFn.call(null,url)};return obj15508;
})());
{
var G__15548 = (i__15501 + (1));
i__15501 = G__15548;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15502),iter__15499.call(null,cljs.core.chunk_rest.call(null,s__15500__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15502),null);
}
} else
{var url = cljs.core.first.call(null,s__15500__$2);return cljs.core.cons.call(null,(function (){var obj15510 = {"id":url,"url":ServeFn.call(null,url)};return obj15510;
})(),iter__15499.call(null,cljs.core.rest.call(null,s__15500__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
;var dto = (function (){var obj15512 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj15512;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function (state_15519){var state_val_15520 = (state_15519[(1)]);if((state_val_15520 === (2)))
{var inst_15516 = (state_15519[(2)]);var inst_15517 = cljs.core.async.close_BANG_.call(null,ret);var state_15519__$1 = (function (){var statearr_15521 = state_15519;(statearr_15521[(7)] = inst_15516);
return statearr_15521;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15519__$1,inst_15517);
} else
{if((state_val_15520 === (1)))
{var inst_15513 = [null,dto];var inst_15514 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15513,null));var state_15519__$1 = state_15519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15519__$1,(2),ret,inst_15514);
} else
{return null;
}
}
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15525 = [null,null,null,null,null,null,null,null];(statearr_15525[(0)] = state_machine__6178__auto__);
(statearr_15525[(1)] = (1));
return statearr_15525;
});
var state_machine__6178__auto____1 = (function (state_15519){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15519);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15526){if((e15526 instanceof Object))
{var ex__6181__auto__ = e15526;var statearr_15527_15549 = state_15519;(statearr_15527_15549[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15519);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15550 = state_15519;
state_15519 = G__15550;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15519){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_15528 = f__6193__auto__.call(null);(statearr_15528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
);
return c__6192__auto__;
};
var G__15546 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15546__delegate.call(this,args__$1);};
G__15546.cljs$lang$maxFixedArity = 0;
G__15546.cljs$lang$applyTo = (function (arglist__15551){
var args__$1 = cljs.core.seq(arglist__15551);
return G__15546__delegate(args__$1);
});
G__15546.cljs$core$IFn$_invoke$arity$variadic = G__15546__delegate;
return G__15546;
})()
;})(G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
);
G__15490_15545.fail(((function (G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function (state_15535){var state_val_15536 = (state_15535[(1)]);if((state_val_15536 === (2)))
{var inst_15532 = (state_15535[(2)]);var inst_15533 = cljs.core.async.close_BANG_.call(null,ret);var state_15535__$1 = (function (){var statearr_15537 = state_15535;(statearr_15537[(7)] = inst_15532);
return statearr_15537;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15535__$1,inst_15533);
} else
{if((state_val_15536 === (1)))
{var inst_15529 = [err,null];var inst_15530 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15529,null));var state_15535__$1 = state_15535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15535__$1,(2),ret,inst_15530);
} else
{return null;
}
}
});})(c__6192__auto__,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15541 = [null,null,null,null,null,null,null,null];(statearr_15541[(0)] = state_machine__6178__auto__);
(statearr_15541[(1)] = (1));
return statearr_15541;
});
var state_machine__6178__auto____1 = (function (state_15535){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15535);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15542){if((e15542 instanceof Object))
{var ex__6181__auto__ = e15542;var statearr_15543_15552 = state_15535;(statearr_15543_15552[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15553 = state_15535;
state_15535 = G__15553;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15535){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_15544 = f__6193__auto__.call(null);(statearr_15544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
);
return c__6192__auto__;
});})(G__15490_15545,ret,configType,map__15489,map__15489__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__15555_15592 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__15555_15592.done(((function (G__15555_15592,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__15555_15592,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__15555_15592,ret){
return (function (state_15566){var state_val_15567 = (state_15566[(1)]);if((state_val_15567 === (2)))
{var inst_15563 = (state_15566[(2)]);var inst_15564 = cljs.core.async.close_BANG_.call(null,ret);var state_15566__$1 = (function (){var statearr_15568 = state_15566;(statearr_15568[(7)] = inst_15563);
return statearr_15568;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15566__$1,inst_15564);
} else
{if((state_val_15567 === (1)))
{var inst_15558 = detail.ModelKey;var inst_15559 = {"modelKey":inst_15558};var inst_15560 = [null,inst_15559];var inst_15561 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15560,null));var state_15566__$1 = state_15566;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15566__$1,(2),ret,inst_15561);
} else
{return null;
}
}
});})(c__6192__auto__,G__15555_15592,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__15555_15592,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15572 = [null,null,null,null,null,null,null,null];(statearr_15572[(0)] = state_machine__6178__auto__);
(statearr_15572[(1)] = (1));
return statearr_15572;
});
var state_machine__6178__auto____1 = (function (state_15566){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15566);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15573){if((e15573 instanceof Object))
{var ex__6181__auto__ = e15573;var statearr_15574_15593 = state_15566;(statearr_15574_15593[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15566);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15573;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15594 = state_15566;
state_15566 = G__15594;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15566){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__15555_15592,ret))
})();var state__6194__auto__ = (function (){var statearr_15575 = f__6193__auto__.call(null);(statearr_15575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15575;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__15555_15592,ret))
);
return c__6192__auto__;
});})(G__15555_15592,ret))
);
G__15555_15592.fail(((function (G__15555_15592,ret){
return (function (p1__15554_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__15555_15592,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__15555_15592,ret){
return (function (state_15582){var state_val_15583 = (state_15582[(1)]);if((state_val_15583 === (2)))
{var inst_15579 = (state_15582[(2)]);var inst_15580 = cljs.core.async.close_BANG_.call(null,ret);var state_15582__$1 = (function (){var statearr_15584 = state_15582;(statearr_15584[(7)] = inst_15579);
return statearr_15584;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15582__$1,inst_15580);
} else
{if((state_val_15583 === (1)))
{var inst_15576 = [p1__15554_SHARP_,null];var inst_15577 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15576,null));var state_15582__$1 = state_15582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15582__$1,(2),ret,inst_15577);
} else
{return null;
}
}
});})(c__6192__auto__,G__15555_15592,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__15555_15592,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15588 = [null,null,null,null,null,null,null,null];(statearr_15588[(0)] = state_machine__6178__auto__);
(statearr_15588[(1)] = (1));
return statearr_15588;
});
var state_machine__6178__auto____1 = (function (state_15582){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15582);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15589){if((e15589 instanceof Object))
{var ex__6181__auto__ = e15589;var statearr_15590_15595 = state_15582;(statearr_15590_15595[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15582);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15589;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15596 = state_15582;
state_15582 = G__15596;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15582){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__15555_15592,ret))
})();var state__6194__auto__ = (function (){var statearr_15591 = f__6193__auto__.call(null);(statearr_15591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__15555_15592,ret))
);
return c__6192__auto__;
});})(G__15555_15592,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__15597){var map__15598 = p__15597;var map__15598__$1 = ((cljs.core.seq_QMARK_.call(null,map__15598))?cljs.core.apply.call(null,cljs.core.hash_map,map__15598):map__15598);var args = map__15598__$1;var url = cljs.core.get.call(null,map__15598__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___15619 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___15619,ret,map__15598,map__15598__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___15619,ret,map__15598,map__15598__$1,args,url){
return (function (state_15609){var state_val_15610 = (state_15609[(1)]);if((state_val_15610 === (2)))
{var inst_15606 = (state_15609[(2)]);var inst_15607 = cljs.core.async.close_BANG_.call(null,ret);var state_15609__$1 = (function (){var statearr_15611 = state_15609;(statearr_15611[(7)] = inst_15606);
return statearr_15611;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15609__$1,inst_15607);
} else
{if((state_val_15610 === (1)))
{var inst_15601 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_15602 = {"url":inst_15601};var inst_15603 = [null,inst_15602];var inst_15604 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15603,null));var state_15609__$1 = state_15609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15609__$1,(2),ret,inst_15604);
} else
{return null;
}
}
});})(c__6192__auto___15619,ret,map__15598,map__15598__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___15619,ret,map__15598,map__15598__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15615 = [null,null,null,null,null,null,null,null];(statearr_15615[(0)] = state_machine__6178__auto__);
(statearr_15615[(1)] = (1));
return statearr_15615;
});
var state_machine__6178__auto____1 = (function (state_15609){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15609);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15616){if((e15616 instanceof Object))
{var ex__6181__auto__ = e15616;var statearr_15617_15620 = state_15609;(statearr_15617_15620[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15609);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15621 = state_15609;
state_15609 = G__15621;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15609){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___15619,ret,map__15598,map__15598__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_15618 = f__6193__auto__.call(null);(statearr_15618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___15619);
return statearr_15618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___15619,ret,map__15598,map__15598__$1,args,url))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
