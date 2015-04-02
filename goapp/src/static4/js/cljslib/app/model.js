// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12885_SHARP_){return cljs.core._EQ_.call(null,view,p1__12885_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12886_SHARP_){return cljs.core._EQ_.call(null,view,p1__12886_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12887_SHARP_){return cljs.core._EQ_.call(null,view,p1__12887_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12888_SHARP_){return cljs.core._EQ_.call(null,view,p1__12888_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12889_SHARP_){return cljs.core._EQ_.call(null,view,p1__12889_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12890_SHARP_){return cljs.core._EQ_.call(null,view,p1__12890_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12891_SHARP_){return cljs.core._EQ_.call(null,view,p1__12891_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12892_SHARP_){return cljs.core._EQ_.call(null,view,p1__12892_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12893_SHARP_){return cljs.core._EQ_.call(null,view,p1__12893_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__12897){var vec__12898 = p__12897;var model = cljs.core.nth.call(null,vec__12898,(0),null);var detail = cljs.core.nth.call(null,vec__12898,(1),null);var G__12899 = (new Date(detail.Date));G__12899.getTime();
return G__12899;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__12902){var vec__12903 = p__12902;var model = cljs.core.nth.call(null,vec__12903,(0),null);var detail = cljs.core.nth.call(null,vec__12903,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__12945){var map__12946 = p__12945;var map__12946__$1 = ((cljs.core.seq_QMARK_.call(null,map__12946))?cljs.core.apply.call(null,cljs.core.hash_map,map__12946):map__12946);var args = map__12946__$1;var searchKey = cljs.core.get.call(null,map__12946__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__12947_12986 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__12947_12986.done(((function (G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey){
return (function() { 
var G__12987__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey){
return (function (p__12948){var vec__12949 = p__12948;var model = cljs.core.nth.call(null,vec__12949,(0),null);var detail = cljs.core.nth.call(null,vec__12949,(1),null);var obj12951 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj12951;
});})(config,details,filtered,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey))
;var dto = (function (){var obj12953 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj12953;
})();var c__6323__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6323__auto__,config,details,filtered,ConvertDTO,dto,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey){
return (function (){var f__6324__auto__ = (function (){var switch__6308__auto__ = ((function (c__6323__auto__,config,details,filtered,ConvertDTO,dto,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey){
return (function (state_12960){var state_val_12961 = (state_12960[(1)]);if((state_val_12961 === (2)))
{var inst_12957 = (state_12960[(2)]);var inst_12958 = cljs.core.async.close_BANG_.call(null,ret);var state_12960__$1 = (function (){var statearr_12962 = state_12960;(statearr_12962[(7)] = inst_12957);
return statearr_12962;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12960__$1,inst_12958);
} else
{if((state_val_12961 === (1)))
{var inst_12954 = [null,dto];var inst_12955 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12954,null));var state_12960__$1 = state_12960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12960__$1,(2),ret,inst_12955);
} else
{return null;
}
}
});})(c__6323__auto__,config,details,filtered,ConvertDTO,dto,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey))
;return ((function (switch__6308__auto__,c__6323__auto__,config,details,filtered,ConvertDTO,dto,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey){
return (function() {
var state_machine__6309__auto__ = null;
var state_machine__6309__auto____0 = (function (){var statearr_12966 = [null,null,null,null,null,null,null,null];(statearr_12966[(0)] = state_machine__6309__auto__);
(statearr_12966[(1)] = (1));
return statearr_12966;
});
var state_machine__6309__auto____1 = (function (state_12960){while(true){
var ret_value__6310__auto__ = (function (){try{while(true){
var result__6311__auto__ = switch__6308__auto__.call(null,state_12960);if(cljs.core.keyword_identical_QMARK_.call(null,result__6311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6311__auto__;
}
break;
}
}catch (e12967){if((e12967 instanceof Object))
{var ex__6312__auto__ = e12967;var statearr_12968_12988 = state_12960;(statearr_12968_12988[(5)] = ex__6312__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12960);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12989 = state_12960;
state_12960 = G__12989;
continue;
}
} else
{return ret_value__6310__auto__;
}
break;
}
});
state_machine__6309__auto__ = function(state_12960){
switch(arguments.length){
case 0:
return state_machine__6309__auto____0.call(this);
case 1:
return state_machine__6309__auto____1.call(this,state_12960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6309__auto____0;
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6309__auto____1;
return state_machine__6309__auto__;
})()
;})(switch__6308__auto__,c__6323__auto__,config,details,filtered,ConvertDTO,dto,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey))
})();var state__6325__auto__ = (function (){var statearr_12969 = f__6324__auto__.call(null);(statearr_12969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6323__auto__);
return statearr_12969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6325__auto__);
});})(c__6323__auto__,config,details,filtered,ConvertDTO,dto,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey))
);
return c__6323__auto__;
};
var G__12987 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12987__delegate.call(this,args__$1);};
G__12987.cljs$lang$maxFixedArity = 0;
G__12987.cljs$lang$applyTo = (function (arglist__12990){
var args__$1 = cljs.core.seq(arglist__12990);
return G__12987__delegate(args__$1);
});
G__12987.cljs$core$IFn$_invoke$arity$variadic = G__12987__delegate;
return G__12987;
})()
;})(G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey))
);
G__12947_12986.fail(((function (G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey){
return (function (err){var c__6323__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6323__auto__,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey){
return (function (){var f__6324__auto__ = (function (){var switch__6308__auto__ = ((function (c__6323__auto__,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey){
return (function (state_12976){var state_val_12977 = (state_12976[(1)]);if((state_val_12977 === (2)))
{var inst_12973 = (state_12976[(2)]);var inst_12974 = cljs.core.async.close_BANG_.call(null,ret);var state_12976__$1 = (function (){var statearr_12978 = state_12976;(statearr_12978[(7)] = inst_12973);
return statearr_12978;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12976__$1,inst_12974);
} else
{if((state_val_12977 === (1)))
{var inst_12970 = [err,null];var inst_12971 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12970,null));var state_12976__$1 = state_12976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12976__$1,(2),ret,inst_12971);
} else
{return null;
}
}
});})(c__6323__auto__,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey))
;return ((function (switch__6308__auto__,c__6323__auto__,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey){
return (function() {
var state_machine__6309__auto__ = null;
var state_machine__6309__auto____0 = (function (){var statearr_12982 = [null,null,null,null,null,null,null,null];(statearr_12982[(0)] = state_machine__6309__auto__);
(statearr_12982[(1)] = (1));
return statearr_12982;
});
var state_machine__6309__auto____1 = (function (state_12976){while(true){
var ret_value__6310__auto__ = (function (){try{while(true){
var result__6311__auto__ = switch__6308__auto__.call(null,state_12976);if(cljs.core.keyword_identical_QMARK_.call(null,result__6311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6311__auto__;
}
break;
}
}catch (e12983){if((e12983 instanceof Object))
{var ex__6312__auto__ = e12983;var statearr_12984_12991 = state_12976;(statearr_12984_12991[(5)] = ex__6312__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12976);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12992 = state_12976;
state_12976 = G__12992;
continue;
}
} else
{return ret_value__6310__auto__;
}
break;
}
});
state_machine__6309__auto__ = function(state_12976){
switch(arguments.length){
case 0:
return state_machine__6309__auto____0.call(this);
case 1:
return state_machine__6309__auto____1.call(this,state_12976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6309__auto____0;
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6309__auto____1;
return state_machine__6309__auto__;
})()
;})(switch__6308__auto__,c__6323__auto__,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey))
})();var state__6325__auto__ = (function (){var statearr_12985 = f__6324__auto__.call(null);(statearr_12985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6323__auto__);
return statearr_12985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6325__auto__);
});})(c__6323__auto__,G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey))
);
return c__6323__auto__;
});})(G__12947_12986,configType,ret,map__12946,map__12946__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__13050){var map__13051 = p__13050;var map__13051__$1 = ((cljs.core.seq_QMARK_.call(null,map__13051))?cljs.core.apply.call(null,cljs.core.hash_map,map__13051):map__13051);var args = map__13051__$1;var id = cljs.core.get.call(null,map__13051__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__13052_13107 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__13052_13107.done(((function (G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function() { 
var G__13108__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function (p__13053){var vec__13054 = p__13053;var key__$1 = cljs.core.nth.call(null,vec__13054,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__13054,(1),null);var obj13056 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj13056;
});})(config,dir,details,detail,filtered,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function iter__13057(s__13058){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function (){var s__13058__$1 = s__13058;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13058__$1);if(temp__4126__auto__)
{var s__13058__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13058__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13058__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13060 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13059 = (0);while(true){
if((i__13059 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__13059);cljs.core.chunk_append.call(null,b__13060,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__13109 = (i__13059 + (1));
i__13059 = G__13109;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13060),iter__13057.call(null,cljs.core.chunk_rest.call(null,s__13058__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13060),null);
}
} else
{var idx = cljs.core.first.call(null,s__13058__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__13057.call(null,cljs.core.rest.call(null,s__13058__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function iter__13061(s__13062){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function (){var s__13062__$1 = s__13062;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13062__$1);if(temp__4126__auto__)
{var s__13062__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13062__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13062__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13064 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13063 = (0);while(true){
if((i__13063 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__13063);cljs.core.chunk_append.call(null,b__13064,(function (){var obj13070 = {"id":url,"url":ServeFn.call(null,url)};return obj13070;
})());
{
var G__13110 = (i__13063 + (1));
i__13063 = G__13110;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13064),iter__13061.call(null,cljs.core.chunk_rest.call(null,s__13062__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13064),null);
}
} else
{var url = cljs.core.first.call(null,s__13062__$2);return cljs.core.cons.call(null,(function (){var obj13072 = {"id":url,"url":ServeFn.call(null,url)};return obj13072;
})(),iter__13061.call(null,cljs.core.rest.call(null,s__13062__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
;var dto = (function (){var obj13074 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj13074;
})();var c__6323__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6323__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function (){var f__6324__auto__ = (function (){var switch__6308__auto__ = ((function (c__6323__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function (state_13081){var state_val_13082 = (state_13081[(1)]);if((state_val_13082 === (2)))
{var inst_13078 = (state_13081[(2)]);var inst_13079 = cljs.core.async.close_BANG_.call(null,ret);var state_13081__$1 = (function (){var statearr_13083 = state_13081;(statearr_13083[(7)] = inst_13078);
return statearr_13083;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13081__$1,inst_13079);
} else
{if((state_val_13082 === (1)))
{var inst_13075 = [null,dto];var inst_13076 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13075,null));var state_13081__$1 = state_13081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13081__$1,(2),ret,inst_13076);
} else
{return null;
}
}
});})(c__6323__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
;return ((function (switch__6308__auto__,c__6323__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function() {
var state_machine__6309__auto__ = null;
var state_machine__6309__auto____0 = (function (){var statearr_13087 = [null,null,null,null,null,null,null,null];(statearr_13087[(0)] = state_machine__6309__auto__);
(statearr_13087[(1)] = (1));
return statearr_13087;
});
var state_machine__6309__auto____1 = (function (state_13081){while(true){
var ret_value__6310__auto__ = (function (){try{while(true){
var result__6311__auto__ = switch__6308__auto__.call(null,state_13081);if(cljs.core.keyword_identical_QMARK_.call(null,result__6311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6311__auto__;
}
break;
}
}catch (e13088){if((e13088 instanceof Object))
{var ex__6312__auto__ = e13088;var statearr_13089_13111 = state_13081;(statearr_13089_13111[(5)] = ex__6312__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13112 = state_13081;
state_13081 = G__13112;
continue;
}
} else
{return ret_value__6310__auto__;
}
break;
}
});
state_machine__6309__auto__ = function(state_13081){
switch(arguments.length){
case 0:
return state_machine__6309__auto____0.call(this);
case 1:
return state_machine__6309__auto____1.call(this,state_13081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6309__auto____0;
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6309__auto____1;
return state_machine__6309__auto__;
})()
;})(switch__6308__auto__,c__6323__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
})();var state__6325__auto__ = (function (){var statearr_13090 = f__6324__auto__.call(null);(statearr_13090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6323__auto__);
return statearr_13090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6325__auto__);
});})(c__6323__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
);
return c__6323__auto__;
};
var G__13108 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13108__delegate.call(this,args__$1);};
G__13108.cljs$lang$maxFixedArity = 0;
G__13108.cljs$lang$applyTo = (function (arglist__13113){
var args__$1 = cljs.core.seq(arglist__13113);
return G__13108__delegate(args__$1);
});
G__13108.cljs$core$IFn$_invoke$arity$variadic = G__13108__delegate;
return G__13108;
})()
;})(G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
);
G__13052_13107.fail(((function (G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function (err){var c__6323__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6323__auto__,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function (){var f__6324__auto__ = (function (){var switch__6308__auto__ = ((function (c__6323__auto__,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function (state_13097){var state_val_13098 = (state_13097[(1)]);if((state_val_13098 === (2)))
{var inst_13094 = (state_13097[(2)]);var inst_13095 = cljs.core.async.close_BANG_.call(null,ret);var state_13097__$1 = (function (){var statearr_13099 = state_13097;(statearr_13099[(7)] = inst_13094);
return statearr_13099;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13097__$1,inst_13095);
} else
{if((state_val_13098 === (1)))
{var inst_13091 = [err,null];var inst_13092 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13091,null));var state_13097__$1 = state_13097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13097__$1,(2),ret,inst_13092);
} else
{return null;
}
}
});})(c__6323__auto__,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
;return ((function (switch__6308__auto__,c__6323__auto__,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id){
return (function() {
var state_machine__6309__auto__ = null;
var state_machine__6309__auto____0 = (function (){var statearr_13103 = [null,null,null,null,null,null,null,null];(statearr_13103[(0)] = state_machine__6309__auto__);
(statearr_13103[(1)] = (1));
return statearr_13103;
});
var state_machine__6309__auto____1 = (function (state_13097){while(true){
var ret_value__6310__auto__ = (function (){try{while(true){
var result__6311__auto__ = switch__6308__auto__.call(null,state_13097);if(cljs.core.keyword_identical_QMARK_.call(null,result__6311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6311__auto__;
}
break;
}
}catch (e13104){if((e13104 instanceof Object))
{var ex__6312__auto__ = e13104;var statearr_13105_13114 = state_13097;(statearr_13105_13114[(5)] = ex__6312__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13097);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13115 = state_13097;
state_13097 = G__13115;
continue;
}
} else
{return ret_value__6310__auto__;
}
break;
}
});
state_machine__6309__auto__ = function(state_13097){
switch(arguments.length){
case 0:
return state_machine__6309__auto____0.call(this);
case 1:
return state_machine__6309__auto____1.call(this,state_13097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6309__auto____0;
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6309__auto____1;
return state_machine__6309__auto__;
})()
;})(switch__6308__auto__,c__6323__auto__,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
})();var state__6325__auto__ = (function (){var statearr_13106 = f__6324__auto__.call(null);(statearr_13106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6323__auto__);
return statearr_13106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6325__auto__);
});})(c__6323__auto__,G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
);
return c__6323__auto__;
});})(G__13052_13107,ret,configType,map__13051,map__13051__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__13117_13154 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__13117_13154.done(((function (G__13117_13154,ret){
return (function (detail){var c__6323__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6323__auto__,G__13117_13154,ret){
return (function (){var f__6324__auto__ = (function (){var switch__6308__auto__ = ((function (c__6323__auto__,G__13117_13154,ret){
return (function (state_13128){var state_val_13129 = (state_13128[(1)]);if((state_val_13129 === (2)))
{var inst_13125 = (state_13128[(2)]);var inst_13126 = cljs.core.async.close_BANG_.call(null,ret);var state_13128__$1 = (function (){var statearr_13130 = state_13128;(statearr_13130[(7)] = inst_13125);
return statearr_13130;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13128__$1,inst_13126);
} else
{if((state_val_13129 === (1)))
{var inst_13120 = detail.ModelKey;var inst_13121 = {"modelKey":inst_13120};var inst_13122 = [null,inst_13121];var inst_13123 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13122,null));var state_13128__$1 = state_13128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13128__$1,(2),ret,inst_13123);
} else
{return null;
}
}
});})(c__6323__auto__,G__13117_13154,ret))
;return ((function (switch__6308__auto__,c__6323__auto__,G__13117_13154,ret){
return (function() {
var state_machine__6309__auto__ = null;
var state_machine__6309__auto____0 = (function (){var statearr_13134 = [null,null,null,null,null,null,null,null];(statearr_13134[(0)] = state_machine__6309__auto__);
(statearr_13134[(1)] = (1));
return statearr_13134;
});
var state_machine__6309__auto____1 = (function (state_13128){while(true){
var ret_value__6310__auto__ = (function (){try{while(true){
var result__6311__auto__ = switch__6308__auto__.call(null,state_13128);if(cljs.core.keyword_identical_QMARK_.call(null,result__6311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6311__auto__;
}
break;
}
}catch (e13135){if((e13135 instanceof Object))
{var ex__6312__auto__ = e13135;var statearr_13136_13155 = state_13128;(statearr_13136_13155[(5)] = ex__6312__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13156 = state_13128;
state_13128 = G__13156;
continue;
}
} else
{return ret_value__6310__auto__;
}
break;
}
});
state_machine__6309__auto__ = function(state_13128){
switch(arguments.length){
case 0:
return state_machine__6309__auto____0.call(this);
case 1:
return state_machine__6309__auto____1.call(this,state_13128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6309__auto____0;
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6309__auto____1;
return state_machine__6309__auto__;
})()
;})(switch__6308__auto__,c__6323__auto__,G__13117_13154,ret))
})();var state__6325__auto__ = (function (){var statearr_13137 = f__6324__auto__.call(null);(statearr_13137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6323__auto__);
return statearr_13137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6325__auto__);
});})(c__6323__auto__,G__13117_13154,ret))
);
return c__6323__auto__;
});})(G__13117_13154,ret))
);
G__13117_13154.fail(((function (G__13117_13154,ret){
return (function (p1__13116_SHARP_){var c__6323__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6323__auto__,G__13117_13154,ret){
return (function (){var f__6324__auto__ = (function (){var switch__6308__auto__ = ((function (c__6323__auto__,G__13117_13154,ret){
return (function (state_13144){var state_val_13145 = (state_13144[(1)]);if((state_val_13145 === (2)))
{var inst_13141 = (state_13144[(2)]);var inst_13142 = cljs.core.async.close_BANG_.call(null,ret);var state_13144__$1 = (function (){var statearr_13146 = state_13144;(statearr_13146[(7)] = inst_13141);
return statearr_13146;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13144__$1,inst_13142);
} else
{if((state_val_13145 === (1)))
{var inst_13138 = [p1__13116_SHARP_,null];var inst_13139 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13138,null));var state_13144__$1 = state_13144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13144__$1,(2),ret,inst_13139);
} else
{return null;
}
}
});})(c__6323__auto__,G__13117_13154,ret))
;return ((function (switch__6308__auto__,c__6323__auto__,G__13117_13154,ret){
return (function() {
var state_machine__6309__auto__ = null;
var state_machine__6309__auto____0 = (function (){var statearr_13150 = [null,null,null,null,null,null,null,null];(statearr_13150[(0)] = state_machine__6309__auto__);
(statearr_13150[(1)] = (1));
return statearr_13150;
});
var state_machine__6309__auto____1 = (function (state_13144){while(true){
var ret_value__6310__auto__ = (function (){try{while(true){
var result__6311__auto__ = switch__6308__auto__.call(null,state_13144);if(cljs.core.keyword_identical_QMARK_.call(null,result__6311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6311__auto__;
}
break;
}
}catch (e13151){if((e13151 instanceof Object))
{var ex__6312__auto__ = e13151;var statearr_13152_13157 = state_13144;(statearr_13152_13157[(5)] = ex__6312__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13144);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13158 = state_13144;
state_13144 = G__13158;
continue;
}
} else
{return ret_value__6310__auto__;
}
break;
}
});
state_machine__6309__auto__ = function(state_13144){
switch(arguments.length){
case 0:
return state_machine__6309__auto____0.call(this);
case 1:
return state_machine__6309__auto____1.call(this,state_13144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6309__auto____0;
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6309__auto____1;
return state_machine__6309__auto__;
})()
;})(switch__6308__auto__,c__6323__auto__,G__13117_13154,ret))
})();var state__6325__auto__ = (function (){var statearr_13153 = f__6324__auto__.call(null);(statearr_13153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6323__auto__);
return statearr_13153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6325__auto__);
});})(c__6323__auto__,G__13117_13154,ret))
);
return c__6323__auto__;
});})(G__13117_13154,ret))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
