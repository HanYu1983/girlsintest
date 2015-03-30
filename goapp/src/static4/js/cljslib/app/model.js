// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21989_SHARP_){return cljs.core._EQ_.call(null,view,p1__21989_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21990_SHARP_){return cljs.core._EQ_.call(null,view,p1__21990_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21991_SHARP_){return cljs.core._EQ_.call(null,view,p1__21991_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21992_SHARP_){return cljs.core._EQ_.call(null,view,p1__21992_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21993_SHARP_){return cljs.core._EQ_.call(null,view,p1__21993_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21994_SHARP_){return cljs.core._EQ_.call(null,view,p1__21994_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21995_SHARP_){return cljs.core._EQ_.call(null,view,p1__21995_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21996_SHARP_){return cljs.core._EQ_.call(null,view,p1__21996_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21997_SHARP_){return cljs.core._EQ_.call(null,view,p1__21997_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__22001){var vec__22002 = p__22001;var model = cljs.core.nth.call(null,vec__22002,(0),null);var detail = cljs.core.nth.call(null,vec__22002,(1),null);var G__22003 = (new Date(detail.Date));G__22003.getTime();
return G__22003;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__22006){var vec__22007 = p__22006;var model = cljs.core.nth.call(null,vec__22007,(0),null);var detail = cljs.core.nth.call(null,vec__22007,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__22049){var map__22050 = p__22049;var map__22050__$1 = ((cljs.core.seq_QMARK_.call(null,map__22050))?cljs.core.apply.call(null,cljs.core.hash_map,map__22050):map__22050);var args = map__22050__$1;var searchKey = cljs.core.get.call(null,map__22050__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__22051_22090 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__22051_22090.done(((function (G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey){
return (function() { 
var G__22091__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var filtered = app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details));var ConvertDTO = ((function (config,details,filtered,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey){
return (function (p__22052){var vec__22053 = p__22052;var model = cljs.core.nth.call(null,vec__22053,(0),null);var detail = cljs.core.nth.call(null,vec__22053,(1),null);var obj22055 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj22055;
});})(config,details,filtered,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey))
;var dto = (function (){var obj22057 = {"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj22057;
})();var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey){
return (function (state_22064){var state_val_22065 = (state_22064[(1)]);if((state_val_22065 === (2)))
{var inst_22061 = (state_22064[(2)]);var inst_22062 = cljs.core.async.close_BANG_.call(null,ret);var state_22064__$1 = (function (){var statearr_22066 = state_22064;(statearr_22066[(7)] = inst_22061);
return statearr_22066;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22064__$1,inst_22062);
} else
{if((state_val_22065 === (1)))
{var inst_22058 = [null,dto];var inst_22059 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22058,null));var state_22064__$1 = state_22064;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22064__$1,(2),ret,inst_22059);
} else
{return null;
}
}
});})(c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey))
;return ((function (switch__6201__auto__,c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_22070 = [null,null,null,null,null,null,null,null];(statearr_22070[(0)] = state_machine__6202__auto__);
(statearr_22070[(1)] = (1));
return statearr_22070;
});
var state_machine__6202__auto____1 = (function (state_22064){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_22064);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e22071){if((e22071 instanceof Object))
{var ex__6205__auto__ = e22071;var statearr_22072_22092 = state_22064;(statearr_22072_22092[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22064);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22071;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22093 = state_22064;
state_22064 = G__22093;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_22064){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_22064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey))
})();var state__6218__auto__ = (function (){var statearr_22073 = f__6217__auto__.call(null);(statearr_22073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_22073;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,config,details,filtered,ConvertDTO,dto,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey))
);
return c__6216__auto__;
};
var G__22091 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22091__delegate.call(this,args__$1);};
G__22091.cljs$lang$maxFixedArity = 0;
G__22091.cljs$lang$applyTo = (function (arglist__22094){
var args__$1 = cljs.core.seq(arglist__22094);
return G__22091__delegate(args__$1);
});
G__22091.cljs$core$IFn$_invoke$arity$variadic = G__22091__delegate;
return G__22091;
})()
;})(G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey))
);
G__22051_22090.fail(((function (G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey){
return (function (err){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey){
return (function (state_22080){var state_val_22081 = (state_22080[(1)]);if((state_val_22081 === (2)))
{var inst_22077 = (state_22080[(2)]);var inst_22078 = cljs.core.async.close_BANG_.call(null,ret);var state_22080__$1 = (function (){var statearr_22082 = state_22080;(statearr_22082[(7)] = inst_22077);
return statearr_22082;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22080__$1,inst_22078);
} else
{if((state_val_22081 === (1)))
{var inst_22074 = [err,null];var inst_22075 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22074,null));var state_22080__$1 = state_22080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22080__$1,(2),ret,inst_22075);
} else
{return null;
}
}
});})(c__6216__auto__,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey))
;return ((function (switch__6201__auto__,c__6216__auto__,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_22086 = [null,null,null,null,null,null,null,null];(statearr_22086[(0)] = state_machine__6202__auto__);
(statearr_22086[(1)] = (1));
return statearr_22086;
});
var state_machine__6202__auto____1 = (function (state_22080){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_22080);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e22087){if((e22087 instanceof Object))
{var ex__6205__auto__ = e22087;var statearr_22088_22095 = state_22080;(statearr_22088_22095[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22080);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22096 = state_22080;
state_22080 = G__22096;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_22080){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_22080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey))
})();var state__6218__auto__ = (function (){var statearr_22089 = f__6217__auto__.call(null);(statearr_22089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_22089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey))
);
return c__6216__auto__;
});})(G__22051_22090,configType,ret,map__22050,map__22050__$1,args,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__22154){var map__22155 = p__22154;var map__22155__$1 = ((cljs.core.seq_QMARK_.call(null,map__22155))?cljs.core.apply.call(null,cljs.core.hash_map,map__22155):map__22155);var args = map__22155__$1;var id = cljs.core.get.call(null,map__22155__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__22156_22211 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__22156_22211.done(((function (G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function() { 
var G__22212__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var filtered = app.model.SortByDate.call(null,details);var ConvertHeadDTO = ((function (config,dir,details,detail,filtered,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function (p__22157){var vec__22158 = p__22157;var key__$1 = cljs.core.nth.call(null,vec__22158,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__22158,(1),null);var obj22160 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj22160;
});})(config,dir,details,detail,filtered,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function iter__22161(s__22162){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,filtered,ConvertHeadDTO,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function (){var s__22162__$1 = s__22162;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22162__$1);if(temp__4126__auto__)
{var s__22162__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22162__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__22162__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__22164 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__22163 = (0);while(true){
if((i__22163 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__22163);cljs.core.chunk_append.call(null,b__22164,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__22213 = (i__22163 + (1));
i__22163 = G__22213;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22164),iter__22161.call(null,cljs.core.chunk_rest.call(null,s__22162__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22164),null);
}
} else
{var idx = cljs.core.first.call(null,s__22162__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__22161.call(null,cljs.core.rest.call(null,s__22162__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
,null,null));
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function iter__22165(s__22166){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function (){var s__22166__$1 = s__22166;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22166__$1);if(temp__4126__auto__)
{var s__22166__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22166__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__22166__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__22168 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__22167 = (0);while(true){
if((i__22167 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__22167);cljs.core.chunk_append.call(null,b__22168,(function (){var obj22174 = {"id":url,"url":ServeFn.call(null,url)};return obj22174;
})());
{
var G__22214 = (i__22167 + (1));
i__22167 = G__22214;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22168),iter__22165.call(null,cljs.core.chunk_rest.call(null,s__22166__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22168),null);
}
} else
{var url = cljs.core.first.call(null,s__22166__$2);return cljs.core.cons.call(null,(function (){var obj22176 = {"id":url,"url":ServeFn.call(null,url)};return obj22176;
})(),iter__22165.call(null,cljs.core.rest.call(null,s__22166__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,filtered,ConvertHeadDTO,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,filtered,ConvertHeadDTO,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
;var dto = (function (){var obj22178 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj22178;
})();var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function (state_22185){var state_val_22186 = (state_22185[(1)]);if((state_val_22186 === (2)))
{var inst_22182 = (state_22185[(2)]);var inst_22183 = cljs.core.async.close_BANG_.call(null,ret);var state_22185__$1 = (function (){var statearr_22187 = state_22185;(statearr_22187[(7)] = inst_22182);
return statearr_22187;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22185__$1,inst_22183);
} else
{if((state_val_22186 === (1)))
{var inst_22179 = [null,dto];var inst_22180 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22179,null));var state_22185__$1 = state_22185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22185__$1,(2),ret,inst_22180);
} else
{return null;
}
}
});})(c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
;return ((function (switch__6201__auto__,c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_22191 = [null,null,null,null,null,null,null,null];(statearr_22191[(0)] = state_machine__6202__auto__);
(statearr_22191[(1)] = (1));
return statearr_22191;
});
var state_machine__6202__auto____1 = (function (state_22185){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_22185);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e22192){if((e22192 instanceof Object))
{var ex__6205__auto__ = e22192;var statearr_22193_22215 = state_22185;(statearr_22193_22215[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22185);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22216 = state_22185;
state_22185 = G__22216;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_22185){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_22185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
})();var state__6218__auto__ = (function (){var statearr_22194 = f__6217__auto__.call(null);(statearr_22194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_22194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,config,dir,details,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
);
return c__6216__auto__;
};
var G__22212 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22212__delegate.call(this,args__$1);};
G__22212.cljs$lang$maxFixedArity = 0;
G__22212.cljs$lang$applyTo = (function (arglist__22217){
var args__$1 = cljs.core.seq(arglist__22217);
return G__22212__delegate(args__$1);
});
G__22212.cljs$core$IFn$_invoke$arity$variadic = G__22212__delegate;
return G__22212;
})()
;})(G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
);
G__22156_22211.fail(((function (G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function (err){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function (state_22201){var state_val_22202 = (state_22201[(1)]);if((state_val_22202 === (2)))
{var inst_22198 = (state_22201[(2)]);var inst_22199 = cljs.core.async.close_BANG_.call(null,ret);var state_22201__$1 = (function (){var statearr_22203 = state_22201;(statearr_22203[(7)] = inst_22198);
return statearr_22203;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22201__$1,inst_22199);
} else
{if((state_val_22202 === (1)))
{var inst_22195 = [err,null];var inst_22196 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22195,null));var state_22201__$1 = state_22201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22201__$1,(2),ret,inst_22196);
} else
{return null;
}
}
});})(c__6216__auto__,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
;return ((function (switch__6201__auto__,c__6216__auto__,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_22207 = [null,null,null,null,null,null,null,null];(statearr_22207[(0)] = state_machine__6202__auto__);
(statearr_22207[(1)] = (1));
return statearr_22207;
});
var state_machine__6202__auto____1 = (function (state_22201){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_22201);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e22208){if((e22208 instanceof Object))
{var ex__6205__auto__ = e22208;var statearr_22209_22218 = state_22201;(statearr_22209_22218[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22201);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22219 = state_22201;
state_22201 = G__22219;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_22201){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_22201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
})();var state__6218__auto__ = (function (){var statearr_22210 = f__6217__auto__.call(null);(statearr_22210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_22210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
);
return c__6216__auto__;
});})(G__22156_22211,ret,configType,map__22155,map__22155__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_22224){var state_val_22225 = (state_22224[(1)]);if((state_val_22225 === (1)))
{var inst_22222 = {"modelKey":""};var state_22224__$1 = state_22224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22224__$1,inst_22222);
} else
{return null;
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_22229 = [null,null,null,null,null,null,null];(statearr_22229[(0)] = state_machine__6202__auto__);
(statearr_22229[(1)] = (1));
return statearr_22229;
});
var state_machine__6202__auto____1 = (function (state_22224){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_22224);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e22230){if((e22230 instanceof Object))
{var ex__6205__auto__ = e22230;var statearr_22231_22233 = state_22224;(statearr_22231_22233[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22224);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22234 = state_22224;
state_22224 = G__22234;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_22224){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_22224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_22232 = f__6217__auto__.call(null);(statearr_22232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_22232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
