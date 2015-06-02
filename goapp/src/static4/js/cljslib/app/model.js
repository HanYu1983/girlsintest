// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__49026_SHARP_){return cljs.core._EQ_.call(null,view,p1__49026_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__49027_SHARP_){return cljs.core._EQ_.call(null,view,p1__49027_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__49028_SHARP_){return cljs.core._EQ_.call(null,view,p1__49028_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__49029_SHARP_){return cljs.core._EQ_.call(null,view,p1__49029_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__49030_SHARP_){return cljs.core._EQ_.call(null,view,p1__49030_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__49031_SHARP_){return cljs.core._EQ_.call(null,view,p1__49031_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__49032_SHARP_){return cljs.core._EQ_.call(null,view,p1__49032_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__49033_SHARP_){return cljs.core._EQ_.call(null,view,p1__49033_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__49034_SHARP_){return cljs.core._EQ_.call(null,view,p1__49034_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__49038){var vec__49039 = p__49038;var model = cljs.core.nth.call(null,vec__49039,(0),null);var detail = cljs.core.nth.call(null,vec__49039,(1),null);var G__49040 = (new Date(detail.Date));G__49040.getTime();
return G__49040;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__49043){var vec__49044 = p__49043;var model = cljs.core.nth.call(null,vec__49044,(0),null);var detail = cljs.core.nth.call(null,vec__49044,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__49086){var map__49087 = p__49086;var map__49087__$1 = ((cljs.core.seq_QMARK_.call(null,map__49087))?cljs.core.apply.call(null,cljs.core.hash_map,map__49087):map__49087);var args = map__49087__$1;var searchKey = cljs.core.get.call(null,map__49087__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__49088_49127 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__49088_49127.done(((function (G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey){
return (function() { 
var G__49128__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey){
return (function (p__49089){var vec__49090 = p__49089;var model = cljs.core.nth.call(null,vec__49090,(0),null);var detail = cljs.core.nth.call(null,vec__49090,(1),null);var obj49092 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj49092;
});})(config,details,filtered,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey))
;var dto = (function (){var obj49094 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj49094;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey){
return (function (state_49101){var state_val_49102 = (state_49101[(1)]);if((state_val_49102 === (2)))
{var inst_49098 = (state_49101[(2)]);var inst_49099 = cljs.core.async.close_BANG_.call(null,ret);var state_49101__$1 = (function (){var statearr_49103 = state_49101;(statearr_49103[(7)] = inst_49098);
return statearr_49103;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49101__$1,inst_49099);
} else
{if((state_val_49102 === (1)))
{var inst_49095 = [null,dto];var inst_49096 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49095,null));var state_49101__$1 = state_49101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49101__$1,(2),ret,inst_49096);
} else
{return null;
}
}
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_49107 = [null,null,null,null,null,null,null,null];(statearr_49107[(0)] = state_machine__6178__auto__);
(statearr_49107[(1)] = (1));
return statearr_49107;
});
var state_machine__6178__auto____1 = (function (state_49101){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_49101);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e49108){if((e49108 instanceof Object))
{var ex__6181__auto__ = e49108;var statearr_49109_49129 = state_49101;(statearr_49109_49129[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49130 = state_49101;
state_49101 = G__49130;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_49101){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_49101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_49110 = f__6193__auto__.call(null);(statearr_49110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_49110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,details,filtered,ConvertDTO,dto,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey))
);
return c__6192__auto__;
};
var G__49128 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49128__delegate.call(this,args__$1);};
G__49128.cljs$lang$maxFixedArity = 0;
G__49128.cljs$lang$applyTo = (function (arglist__49131){
var args__$1 = cljs.core.seq(arglist__49131);
return G__49128__delegate(args__$1);
});
G__49128.cljs$core$IFn$_invoke$arity$variadic = G__49128__delegate;
return G__49128;
})()
;})(G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey))
);
G__49088_49127.fail(((function (G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey){
return (function (state_49117){var state_val_49118 = (state_49117[(1)]);if((state_val_49118 === (2)))
{var inst_49114 = (state_49117[(2)]);var inst_49115 = cljs.core.async.close_BANG_.call(null,ret);var state_49117__$1 = (function (){var statearr_49119 = state_49117;(statearr_49119[(7)] = inst_49114);
return statearr_49119;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49117__$1,inst_49115);
} else
{if((state_val_49118 === (1)))
{var inst_49111 = [err,null];var inst_49112 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49111,null));var state_49117__$1 = state_49117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49117__$1,(2),ret,inst_49112);
} else
{return null;
}
}
});})(c__6192__auto__,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_49123 = [null,null,null,null,null,null,null,null];(statearr_49123[(0)] = state_machine__6178__auto__);
(statearr_49123[(1)] = (1));
return statearr_49123;
});
var state_machine__6178__auto____1 = (function (state_49117){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_49117);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e49124){if((e49124 instanceof Object))
{var ex__6181__auto__ = e49124;var statearr_49125_49132 = state_49117;(statearr_49125_49132[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49117);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49133 = state_49117;
state_49117 = G__49133;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_49117){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_49117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey))
})();var state__6194__auto__ = (function (){var statearr_49126 = f__6193__auto__.call(null);(statearr_49126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_49126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey))
);
return c__6192__auto__;
});})(G__49088_49127,configType,ret,map__49087,map__49087__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__49191){var map__49192 = p__49191;var map__49192__$1 = ((cljs.core.seq_QMARK_.call(null,map__49192))?cljs.core.apply.call(null,cljs.core.hash_map,map__49192):map__49192);var args = map__49192__$1;var id = cljs.core.get.call(null,map__49192__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__49193_49248 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__49193_49248.done(((function (G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function() { 
var G__49249__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function (p__49194){var vec__49195 = p__49194;var key__$1 = cljs.core.nth.call(null,vec__49195,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__49195,(1),null);var obj49197 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj49197;
});})(config,dir,details,detail,filtered,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function iter__49198(s__49199){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function (){var s__49199__$1 = s__49199;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49199__$1);if(temp__4126__auto__)
{var s__49199__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49199__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__49199__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__49201 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__49200 = (0);while(true){
if((i__49200 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__49200);cljs.core.chunk_append.call(null,b__49201,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__49250 = (i__49200 + (1));
i__49200 = G__49250;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49201),iter__49198.call(null,cljs.core.chunk_rest.call(null,s__49199__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49201),null);
}
} else
{var idx = cljs.core.first.call(null,s__49199__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__49198.call(null,cljs.core.rest.call(null,s__49199__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function iter__49202(s__49203){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function (){var s__49203__$1 = s__49203;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49203__$1);if(temp__4126__auto__)
{var s__49203__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49203__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__49203__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__49205 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__49204 = (0);while(true){
if((i__49204 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__49204);cljs.core.chunk_append.call(null,b__49205,(function (){var obj49211 = {"id":url,"url":ServeFn.call(null,url)};return obj49211;
})());
{
var G__49251 = (i__49204 + (1));
i__49204 = G__49251;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49205),iter__49202.call(null,cljs.core.chunk_rest.call(null,s__49203__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49205),null);
}
} else
{var url = cljs.core.first.call(null,s__49203__$2);return cljs.core.cons.call(null,(function (){var obj49213 = {"id":url,"url":ServeFn.call(null,url)};return obj49213;
})(),iter__49202.call(null,cljs.core.rest.call(null,s__49203__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
;var dto = (function (){var obj49215 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj49215;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function (state_49222){var state_val_49223 = (state_49222[(1)]);if((state_val_49223 === (2)))
{var inst_49219 = (state_49222[(2)]);var inst_49220 = cljs.core.async.close_BANG_.call(null,ret);var state_49222__$1 = (function (){var statearr_49224 = state_49222;(statearr_49224[(7)] = inst_49219);
return statearr_49224;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49222__$1,inst_49220);
} else
{if((state_val_49223 === (1)))
{var inst_49216 = [null,dto];var inst_49217 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49216,null));var state_49222__$1 = state_49222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49222__$1,(2),ret,inst_49217);
} else
{return null;
}
}
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_49228 = [null,null,null,null,null,null,null,null];(statearr_49228[(0)] = state_machine__6178__auto__);
(statearr_49228[(1)] = (1));
return statearr_49228;
});
var state_machine__6178__auto____1 = (function (state_49222){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_49222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e49229){if((e49229 instanceof Object))
{var ex__6181__auto__ = e49229;var statearr_49230_49252 = state_49222;(statearr_49230_49252[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49253 = state_49222;
state_49222 = G__49253;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_49222){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_49222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_49231 = f__6193__auto__.call(null);(statearr_49231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_49231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
);
return c__6192__auto__;
};
var G__49249 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49249__delegate.call(this,args__$1);};
G__49249.cljs$lang$maxFixedArity = 0;
G__49249.cljs$lang$applyTo = (function (arglist__49254){
var args__$1 = cljs.core.seq(arglist__49254);
return G__49249__delegate(args__$1);
});
G__49249.cljs$core$IFn$_invoke$arity$variadic = G__49249__delegate;
return G__49249;
})()
;})(G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
);
G__49193_49248.fail(((function (G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function (state_49238){var state_val_49239 = (state_49238[(1)]);if((state_val_49239 === (2)))
{var inst_49235 = (state_49238[(2)]);var inst_49236 = cljs.core.async.close_BANG_.call(null,ret);var state_49238__$1 = (function (){var statearr_49240 = state_49238;(statearr_49240[(7)] = inst_49235);
return statearr_49240;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49238__$1,inst_49236);
} else
{if((state_val_49239 === (1)))
{var inst_49232 = [err,null];var inst_49233 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49232,null));var state_49238__$1 = state_49238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49238__$1,(2),ret,inst_49233);
} else
{return null;
}
}
});})(c__6192__auto__,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_49244 = [null,null,null,null,null,null,null,null];(statearr_49244[(0)] = state_machine__6178__auto__);
(statearr_49244[(1)] = (1));
return statearr_49244;
});
var state_machine__6178__auto____1 = (function (state_49238){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_49238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e49245){if((e49245 instanceof Object))
{var ex__6181__auto__ = e49245;var statearr_49246_49255 = state_49238;(statearr_49246_49255[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49238);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49245;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49256 = state_49238;
state_49238 = G__49256;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_49238){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_49238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_49247 = f__6193__auto__.call(null);(statearr_49247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_49247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
);
return c__6192__auto__;
});})(G__49193_49248,ret,configType,map__49192,map__49192__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__49258_49295 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__49258_49295.done(((function (G__49258_49295,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__49258_49295,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__49258_49295,ret){
return (function (state_49269){var state_val_49270 = (state_49269[(1)]);if((state_val_49270 === (2)))
{var inst_49266 = (state_49269[(2)]);var inst_49267 = cljs.core.async.close_BANG_.call(null,ret);var state_49269__$1 = (function (){var statearr_49271 = state_49269;(statearr_49271[(7)] = inst_49266);
return statearr_49271;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49269__$1,inst_49267);
} else
{if((state_val_49270 === (1)))
{var inst_49261 = detail.ModelKey;var inst_49262 = {"modelKey":inst_49261};var inst_49263 = [null,inst_49262];var inst_49264 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49263,null));var state_49269__$1 = state_49269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49269__$1,(2),ret,inst_49264);
} else
{return null;
}
}
});})(c__6192__auto__,G__49258_49295,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__49258_49295,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_49275 = [null,null,null,null,null,null,null,null];(statearr_49275[(0)] = state_machine__6178__auto__);
(statearr_49275[(1)] = (1));
return statearr_49275;
});
var state_machine__6178__auto____1 = (function (state_49269){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_49269);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e49276){if((e49276 instanceof Object))
{var ex__6181__auto__ = e49276;var statearr_49277_49296 = state_49269;(statearr_49277_49296[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49269);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49297 = state_49269;
state_49269 = G__49297;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_49269){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_49269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__49258_49295,ret))
})();var state__6194__auto__ = (function (){var statearr_49278 = f__6193__auto__.call(null);(statearr_49278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_49278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__49258_49295,ret))
);
return c__6192__auto__;
});})(G__49258_49295,ret))
);
G__49258_49295.fail(((function (G__49258_49295,ret){
return (function (p1__49257_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__49258_49295,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__49258_49295,ret){
return (function (state_49285){var state_val_49286 = (state_49285[(1)]);if((state_val_49286 === (2)))
{var inst_49282 = (state_49285[(2)]);var inst_49283 = cljs.core.async.close_BANG_.call(null,ret);var state_49285__$1 = (function (){var statearr_49287 = state_49285;(statearr_49287[(7)] = inst_49282);
return statearr_49287;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49285__$1,inst_49283);
} else
{if((state_val_49286 === (1)))
{var inst_49279 = [p1__49257_SHARP_,null];var inst_49280 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49279,null));var state_49285__$1 = state_49285;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49285__$1,(2),ret,inst_49280);
} else
{return null;
}
}
});})(c__6192__auto__,G__49258_49295,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__49258_49295,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_49291 = [null,null,null,null,null,null,null,null];(statearr_49291[(0)] = state_machine__6178__auto__);
(statearr_49291[(1)] = (1));
return statearr_49291;
});
var state_machine__6178__auto____1 = (function (state_49285){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_49285);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e49292){if((e49292 instanceof Object))
{var ex__6181__auto__ = e49292;var statearr_49293_49298 = state_49285;(statearr_49293_49298[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49285);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49299 = state_49285;
state_49285 = G__49299;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_49285){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_49285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__49258_49295,ret))
})();var state__6194__auto__ = (function (){var statearr_49294 = f__6193__auto__.call(null);(statearr_49294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_49294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__49258_49295,ret))
);
return c__6192__auto__;
});})(G__49258_49295,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__49300){var map__49301 = p__49300;var map__49301__$1 = ((cljs.core.seq_QMARK_.call(null,map__49301))?cljs.core.apply.call(null,cljs.core.hash_map,map__49301):map__49301);var args = map__49301__$1;var url = cljs.core.get.call(null,map__49301__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___49322 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___49322,ret,map__49301,map__49301__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___49322,ret,map__49301,map__49301__$1,args,url){
return (function (state_49312){var state_val_49313 = (state_49312[(1)]);if((state_val_49313 === (2)))
{var inst_49309 = (state_49312[(2)]);var inst_49310 = cljs.core.async.close_BANG_.call(null,ret);var state_49312__$1 = (function (){var statearr_49314 = state_49312;(statearr_49314[(7)] = inst_49309);
return statearr_49314;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49312__$1,inst_49310);
} else
{if((state_val_49313 === (1)))
{var inst_49304 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_49305 = {"url":inst_49304};var inst_49306 = [null,inst_49305];var inst_49307 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49306,null));var state_49312__$1 = state_49312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49312__$1,(2),ret,inst_49307);
} else
{return null;
}
}
});})(c__6192__auto___49322,ret,map__49301,map__49301__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___49322,ret,map__49301,map__49301__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_49318 = [null,null,null,null,null,null,null,null];(statearr_49318[(0)] = state_machine__6178__auto__);
(statearr_49318[(1)] = (1));
return statearr_49318;
});
var state_machine__6178__auto____1 = (function (state_49312){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_49312);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e49319){if((e49319 instanceof Object))
{var ex__6181__auto__ = e49319;var statearr_49320_49323 = state_49312;(statearr_49320_49323[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49324 = state_49312;
state_49312 = G__49324;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_49312){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_49312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___49322,ret,map__49301,map__49301__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_49321 = f__6193__auto__.call(null);(statearr_49321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___49322);
return statearr_49321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___49322,ret,map__49301,map__49301__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__49325){var map__49326 = p__49325;var map__49326__$1 = ((cljs.core.seq_QMARK_.call(null,map__49326))?cljs.core.apply.call(null,cljs.core.hash_map,map__49326):map__49326);var args = map__49326__$1;var id = cljs.core.get.call(null,map__49326__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___49343 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___49343,ret,map__49326,map__49326__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___49343,ret,map__49326,map__49326__$1,args,id){
return (function (state_49333){var state_val_49334 = (state_49333[(1)]);if((state_val_49334 === (2)))
{var inst_49330 = (state_49333[(2)]);var inst_49331 = cljs.core.async.close_BANG_.call(null,ret);var state_49333__$1 = (function (){var statearr_49335 = state_49333;(statearr_49335[(7)] = inst_49330);
return statearr_49335;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49333__$1,inst_49331);
} else
{if((state_val_49334 === (1)))
{var inst_49327 = [null,null];var inst_49328 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49327,null));var state_49333__$1 = state_49333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49333__$1,(2),ret,inst_49328);
} else
{return null;
}
}
});})(c__6192__auto___49343,ret,map__49326,map__49326__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___49343,ret,map__49326,map__49326__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_49339 = [null,null,null,null,null,null,null,null];(statearr_49339[(0)] = state_machine__6178__auto__);
(statearr_49339[(1)] = (1));
return statearr_49339;
});
var state_machine__6178__auto____1 = (function (state_49333){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_49333);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e49340){if((e49340 instanceof Object))
{var ex__6181__auto__ = e49340;var statearr_49341_49344 = state_49333;(statearr_49341_49344[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49333);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49345 = state_49333;
state_49333 = G__49345;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_49333){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_49333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___49343,ret,map__49326,map__49326__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_49342 = f__6193__auto__.call(null);(statearr_49342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___49343);
return statearr_49342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___49343,ret,map__49326,map__49326__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__49346 = cljs.core.rest.call(null,list);
var G__49347 = id;
var G__49348 = (start + (1));
list = G__49346;
id = G__49347;
start = G__49348;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__49350){var map__49351 = p__49350;var map__49351__$1 = ((cljs.core.seq_QMARK_.call(null,map__49351))?cljs.core.apply.call(null,cljs.core.hash_map,map__49351):map__49351);var args = map__49351__$1;var id = cljs.core.get.call(null,map__49351__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__49352_49384 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__49352_49384.done(((function (G__49352_49384,ret,map__49351,map__49351__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__49352_49384,ret,map__49351,map__49351__$1,args,id){
return (function (p1__49349_SHARP_){var obj49354 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__49349_SHARP_ + (1)))+".jpg"))};return obj49354;
});})(filtered,evtId,evt,G__49352_49384,ret,map__49351,map__49351__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__49352_49384,ret,map__49351,map__49351__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__49352_49384,ret,map__49351,map__49351__$1,args,id){
return (function (state_49374){var state_val_49375 = (state_49374[(1)]);if((state_val_49375 === (2)))
{var inst_49371 = (state_49374[(2)]);var inst_49372 = cljs.core.async.close_BANG_.call(null,ret);var state_49374__$1 = (function (){var statearr_49376 = state_49374;(statearr_49376[(7)] = inst_49371);
return statearr_49376;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49374__$1,inst_49372);
} else
{if((state_val_49375 === (1)))
{var inst_49357 = cljs.core.nth.call(null,filtered,idx);var inst_49358 = cljs.core.first.call(null,inst_49357);var inst_49359 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49358));var inst_49360 = cljs.core.nth.call(null,filtered,idx2);var inst_49361 = cljs.core.first.call(null,inst_49360);var inst_49362 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49361));var inst_49363 = (evt["Title"]);var inst_49364 = (evt["Date"]);var inst_49365 = (evt["Content"]);var inst_49366 = (evt["Form"]);var inst_49367 = {"prev_href":inst_49359,"next_href":inst_49362,"title":inst_49363,"date":inst_49364,"sideList":photos,"content":inst_49365,"form":inst_49366};var inst_49368 = [null,inst_49367];var inst_49369 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49368,null));var state_49374__$1 = state_49374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49374__$1,(2),ret,inst_49369);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__49352_49384,ret,map__49351,map__49351__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__49352_49384,ret,map__49351,map__49351__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_49380 = [null,null,null,null,null,null,null,null];(statearr_49380[(0)] = state_machine__6178__auto__);
(statearr_49380[(1)] = (1));
return statearr_49380;
});
var state_machine__6178__auto____1 = (function (state_49374){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_49374);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e49381){if((e49381 instanceof Object))
{var ex__6181__auto__ = e49381;var statearr_49382_49385 = state_49374;(statearr_49382_49385[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49374);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49386 = state_49374;
state_49374 = G__49386;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_49374){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_49374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__49352_49384,ret,map__49351,map__49351__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_49383 = f__6193__auto__.call(null);(statearr_49383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_49383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__49352_49384,ret,map__49351,map__49351__$1,args,id))
);
return c__6192__auto__;
});})(G__49352_49384,ret,map__49351,map__49351__$1,args,id))
);
G__49352_49384.fail(((function (G__49352_49384,ret,map__49351,map__49351__$1,args,id){
return (function (err){return console.log(err);
});})(G__49352_49384,ret,map__49351,map__49351__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
