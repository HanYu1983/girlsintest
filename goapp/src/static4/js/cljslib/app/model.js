// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__40408_SHARP_){return cljs.core._EQ_.call(null,view,p1__40408_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__40409_SHARP_){return cljs.core._EQ_.call(null,view,p1__40409_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__40410_SHARP_){return cljs.core._EQ_.call(null,view,p1__40410_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__40411_SHARP_){return cljs.core._EQ_.call(null,view,p1__40411_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__40412_SHARP_){return cljs.core._EQ_.call(null,view,p1__40412_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__40413_SHARP_){return cljs.core._EQ_.call(null,view,p1__40413_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__40414_SHARP_){return cljs.core._EQ_.call(null,view,p1__40414_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__40415_SHARP_){return cljs.core._EQ_.call(null,view,p1__40415_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__40416_SHARP_){return cljs.core._EQ_.call(null,view,p1__40416_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__40420){var vec__40421 = p__40420;var model = cljs.core.nth.call(null,vec__40421,(0),null);var detail = cljs.core.nth.call(null,vec__40421,(1),null);var G__40422 = (new Date(detail.Date));G__40422.getTime();
return G__40422;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__40425){var vec__40426 = p__40425;var model = cljs.core.nth.call(null,vec__40426,(0),null);var detail = cljs.core.nth.call(null,vec__40426,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__40468){var map__40469 = p__40468;var map__40469__$1 = ((cljs.core.seq_QMARK_.call(null,map__40469))?cljs.core.apply.call(null,cljs.core.hash_map,map__40469):map__40469);var args = map__40469__$1;var searchKey = cljs.core.get.call(null,map__40469__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__40470_40509 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__40470_40509.done(((function (G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey){
return (function() { 
var G__40510__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey){
return (function (p__40471){var vec__40472 = p__40471;var model = cljs.core.nth.call(null,vec__40472,(0),null);var detail = cljs.core.nth.call(null,vec__40472,(1),null);var obj40474 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj40474;
});})(config,details,filtered,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey))
;var dto = (function (){var obj40476 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj40476;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey){
return (function (state_40483){var state_val_40484 = (state_40483[(1)]);if((state_val_40484 === (2)))
{var inst_40480 = (state_40483[(2)]);var inst_40481 = cljs.core.async.close_BANG_.call(null,ret);var state_40483__$1 = (function (){var statearr_40485 = state_40483;(statearr_40485[(7)] = inst_40480);
return statearr_40485;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40483__$1,inst_40481);
} else
{if((state_val_40484 === (1)))
{var inst_40477 = [null,dto];var inst_40478 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40477,null));var state_40483__$1 = state_40483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40483__$1,(2),ret,inst_40478);
} else
{return null;
}
}
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_40489 = [null,null,null,null,null,null,null,null];(statearr_40489[(0)] = state_machine__6178__auto__);
(statearr_40489[(1)] = (1));
return statearr_40489;
});
var state_machine__6178__auto____1 = (function (state_40483){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_40483);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e40490){if((e40490 instanceof Object))
{var ex__6181__auto__ = e40490;var statearr_40491_40511 = state_40483;(statearr_40491_40511[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40483);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40512 = state_40483;
state_40483 = G__40512;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_40483){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_40483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_40492 = f__6193__auto__.call(null);(statearr_40492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_40492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey))
);
return c__6192__auto__;
};
var G__40510 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__40510__delegate.call(this,args__$1);};
G__40510.cljs$lang$maxFixedArity = 0;
G__40510.cljs$lang$applyTo = (function (arglist__40513){
var args__$1 = cljs.core.seq(arglist__40513);
return G__40510__delegate(args__$1);
});
G__40510.cljs$core$IFn$_invoke$arity$variadic = G__40510__delegate;
return G__40510;
})()
;})(G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey))
);
G__40470_40509.fail(((function (G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey){
return (function (state_40499){var state_val_40500 = (state_40499[(1)]);if((state_val_40500 === (2)))
{var inst_40496 = (state_40499[(2)]);var inst_40497 = cljs.core.async.close_BANG_.call(null,ret);var state_40499__$1 = (function (){var statearr_40501 = state_40499;(statearr_40501[(7)] = inst_40496);
return statearr_40501;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40499__$1,inst_40497);
} else
{if((state_val_40500 === (1)))
{var inst_40493 = [err,null];var inst_40494 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40493,null));var state_40499__$1 = state_40499;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40499__$1,(2),ret,inst_40494);
} else
{return null;
}
}
});})(c__6192__auto__,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_40505 = [null,null,null,null,null,null,null,null];(statearr_40505[(0)] = state_machine__6178__auto__);
(statearr_40505[(1)] = (1));
return statearr_40505;
});
var state_machine__6178__auto____1 = (function (state_40499){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_40499);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e40506){if((e40506 instanceof Object))
{var ex__6181__auto__ = e40506;var statearr_40507_40514 = state_40499;(statearr_40507_40514[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40499);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40515 = state_40499;
state_40499 = G__40515;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_40499){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_40499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_40508 = f__6193__auto__.call(null);(statearr_40508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_40508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey))
);
return c__6192__auto__;
});})(G__40470_40509,configType,ret,map__40469,map__40469__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__40573){var map__40574 = p__40573;var map__40574__$1 = ((cljs.core.seq_QMARK_.call(null,map__40574))?cljs.core.apply.call(null,cljs.core.hash_map,map__40574):map__40574);var args = map__40574__$1;var id = cljs.core.get.call(null,map__40574__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__40575_40630 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__40575_40630.done(((function (G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function() { 
var G__40631__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function (p__40576){var vec__40577 = p__40576;var key__$1 = cljs.core.nth.call(null,vec__40577,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__40577,(1),null);var obj40579 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj40579;
});})(config,dir,details,detail,filtered,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function iter__40580(s__40581){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function (){var s__40581__$1 = s__40581;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40581__$1);if(temp__4126__auto__)
{var s__40581__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40581__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__40581__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__40583 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__40582 = (0);while(true){
if((i__40582 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__40582);cljs.core.chunk_append.call(null,b__40583,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__40632 = (i__40582 + (1));
i__40582 = G__40632;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40583),iter__40580.call(null,cljs.core.chunk_rest.call(null,s__40581__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40583),null);
}
} else
{var idx = cljs.core.first.call(null,s__40581__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__40580.call(null,cljs.core.rest.call(null,s__40581__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function iter__40584(s__40585){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function (){var s__40585__$1 = s__40585;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40585__$1);if(temp__4126__auto__)
{var s__40585__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40585__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__40585__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__40587 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__40586 = (0);while(true){
if((i__40586 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__40586);cljs.core.chunk_append.call(null,b__40587,(function (){var obj40593 = {"id":url,"url":ServeFn.call(null,url)};return obj40593;
})());
{
var G__40633 = (i__40586 + (1));
i__40586 = G__40633;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40587),iter__40584.call(null,cljs.core.chunk_rest.call(null,s__40585__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40587),null);
}
} else
{var url = cljs.core.first.call(null,s__40585__$2);return cljs.core.cons.call(null,(function (){var obj40595 = {"id":url,"url":ServeFn.call(null,url)};return obj40595;
})(),iter__40584.call(null,cljs.core.rest.call(null,s__40585__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
;var dto = (function (){var obj40597 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj40597;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function (state_40604){var state_val_40605 = (state_40604[(1)]);if((state_val_40605 === (2)))
{var inst_40601 = (state_40604[(2)]);var inst_40602 = cljs.core.async.close_BANG_.call(null,ret);var state_40604__$1 = (function (){var statearr_40606 = state_40604;(statearr_40606[(7)] = inst_40601);
return statearr_40606;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40604__$1,inst_40602);
} else
{if((state_val_40605 === (1)))
{var inst_40598 = [null,dto];var inst_40599 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40598,null));var state_40604__$1 = state_40604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40604__$1,(2),ret,inst_40599);
} else
{return null;
}
}
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_40610 = [null,null,null,null,null,null,null,null];(statearr_40610[(0)] = state_machine__6178__auto__);
(statearr_40610[(1)] = (1));
return statearr_40610;
});
var state_machine__6178__auto____1 = (function (state_40604){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_40604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e40611){if((e40611 instanceof Object))
{var ex__6181__auto__ = e40611;var statearr_40612_40634 = state_40604;(statearr_40612_40634[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40635 = state_40604;
state_40604 = G__40635;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_40604){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_40604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_40613 = f__6193__auto__.call(null);(statearr_40613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_40613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
);
return c__6192__auto__;
};
var G__40631 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__40631__delegate.call(this,args__$1);};
G__40631.cljs$lang$maxFixedArity = 0;
G__40631.cljs$lang$applyTo = (function (arglist__40636){
var args__$1 = cljs.core.seq(arglist__40636);
return G__40631__delegate(args__$1);
});
G__40631.cljs$core$IFn$_invoke$arity$variadic = G__40631__delegate;
return G__40631;
})()
;})(G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
);
G__40575_40630.fail(((function (G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function (state_40620){var state_val_40621 = (state_40620[(1)]);if((state_val_40621 === (2)))
{var inst_40617 = (state_40620[(2)]);var inst_40618 = cljs.core.async.close_BANG_.call(null,ret);var state_40620__$1 = (function (){var statearr_40622 = state_40620;(statearr_40622[(7)] = inst_40617);
return statearr_40622;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40620__$1,inst_40618);
} else
{if((state_val_40621 === (1)))
{var inst_40614 = [err,null];var inst_40615 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40614,null));var state_40620__$1 = state_40620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40620__$1,(2),ret,inst_40615);
} else
{return null;
}
}
});})(c__6192__auto__,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_40626 = [null,null,null,null,null,null,null,null];(statearr_40626[(0)] = state_machine__6178__auto__);
(statearr_40626[(1)] = (1));
return statearr_40626;
});
var state_machine__6178__auto____1 = (function (state_40620){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_40620);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e40627){if((e40627 instanceof Object))
{var ex__6181__auto__ = e40627;var statearr_40628_40637 = state_40620;(statearr_40628_40637[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40620);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40638 = state_40620;
state_40620 = G__40638;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_40620){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_40620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_40629 = f__6193__auto__.call(null);(statearr_40629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_40629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
);
return c__6192__auto__;
});})(G__40575_40630,ret,configType,map__40574,map__40574__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__40640_40677 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__40640_40677.done(((function (G__40640_40677,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__40640_40677,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__40640_40677,ret){
return (function (state_40651){var state_val_40652 = (state_40651[(1)]);if((state_val_40652 === (2)))
{var inst_40648 = (state_40651[(2)]);var inst_40649 = cljs.core.async.close_BANG_.call(null,ret);var state_40651__$1 = (function (){var statearr_40653 = state_40651;(statearr_40653[(7)] = inst_40648);
return statearr_40653;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40651__$1,inst_40649);
} else
{if((state_val_40652 === (1)))
{var inst_40643 = detail.ModelKey;var inst_40644 = {"modelKey":inst_40643};var inst_40645 = [null,inst_40644];var inst_40646 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40645,null));var state_40651__$1 = state_40651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40651__$1,(2),ret,inst_40646);
} else
{return null;
}
}
});})(c__6192__auto__,G__40640_40677,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__40640_40677,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_40657 = [null,null,null,null,null,null,null,null];(statearr_40657[(0)] = state_machine__6178__auto__);
(statearr_40657[(1)] = (1));
return statearr_40657;
});
var state_machine__6178__auto____1 = (function (state_40651){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_40651);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e40658){if((e40658 instanceof Object))
{var ex__6181__auto__ = e40658;var statearr_40659_40678 = state_40651;(statearr_40659_40678[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40651);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40679 = state_40651;
state_40651 = G__40679;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_40651){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_40651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__40640_40677,ret))
})();var state__6194__auto__ = (function (){var statearr_40660 = f__6193__auto__.call(null);(statearr_40660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_40660;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__40640_40677,ret))
);
return c__6192__auto__;
});})(G__40640_40677,ret))
);
G__40640_40677.fail(((function (G__40640_40677,ret){
return (function (p1__40639_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__40640_40677,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__40640_40677,ret){
return (function (state_40667){var state_val_40668 = (state_40667[(1)]);if((state_val_40668 === (2)))
{var inst_40664 = (state_40667[(2)]);var inst_40665 = cljs.core.async.close_BANG_.call(null,ret);var state_40667__$1 = (function (){var statearr_40669 = state_40667;(statearr_40669[(7)] = inst_40664);
return statearr_40669;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40667__$1,inst_40665);
} else
{if((state_val_40668 === (1)))
{var inst_40661 = [p1__40639_SHARP_,null];var inst_40662 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40661,null));var state_40667__$1 = state_40667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40667__$1,(2),ret,inst_40662);
} else
{return null;
}
}
});})(c__6192__auto__,G__40640_40677,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__40640_40677,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_40673 = [null,null,null,null,null,null,null,null];(statearr_40673[(0)] = state_machine__6178__auto__);
(statearr_40673[(1)] = (1));
return statearr_40673;
});
var state_machine__6178__auto____1 = (function (state_40667){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_40667);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e40674){if((e40674 instanceof Object))
{var ex__6181__auto__ = e40674;var statearr_40675_40680 = state_40667;(statearr_40675_40680[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40681 = state_40667;
state_40667 = G__40681;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_40667){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_40667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__40640_40677,ret))
})();var state__6194__auto__ = (function (){var statearr_40676 = f__6193__auto__.call(null);(statearr_40676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_40676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__40640_40677,ret))
);
return c__6192__auto__;
});})(G__40640_40677,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__40682){var map__40683 = p__40682;var map__40683__$1 = ((cljs.core.seq_QMARK_.call(null,map__40683))?cljs.core.apply.call(null,cljs.core.hash_map,map__40683):map__40683);var args = map__40683__$1;var url = cljs.core.get.call(null,map__40683__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___40704 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___40704,ret,map__40683,map__40683__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___40704,ret,map__40683,map__40683__$1,args,url){
return (function (state_40694){var state_val_40695 = (state_40694[(1)]);if((state_val_40695 === (2)))
{var inst_40691 = (state_40694[(2)]);var inst_40692 = cljs.core.async.close_BANG_.call(null,ret);var state_40694__$1 = (function (){var statearr_40696 = state_40694;(statearr_40696[(7)] = inst_40691);
return statearr_40696;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40694__$1,inst_40692);
} else
{if((state_val_40695 === (1)))
{var inst_40686 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_40687 = {"url":inst_40686};var inst_40688 = [null,inst_40687];var inst_40689 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40688,null));var state_40694__$1 = state_40694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40694__$1,(2),ret,inst_40689);
} else
{return null;
}
}
});})(c__6192__auto___40704,ret,map__40683,map__40683__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___40704,ret,map__40683,map__40683__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_40700 = [null,null,null,null,null,null,null,null];(statearr_40700[(0)] = state_machine__6178__auto__);
(statearr_40700[(1)] = (1));
return statearr_40700;
});
var state_machine__6178__auto____1 = (function (state_40694){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_40694);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e40701){if((e40701 instanceof Object))
{var ex__6181__auto__ = e40701;var statearr_40702_40705 = state_40694;(statearr_40702_40705[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40694);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40706 = state_40694;
state_40694 = G__40706;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_40694){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_40694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___40704,ret,map__40683,map__40683__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_40703 = f__6193__auto__.call(null);(statearr_40703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___40704);
return statearr_40703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___40704,ret,map__40683,map__40683__$1,args,url))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
