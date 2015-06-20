// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16986_SHARP_){return cljs.core._EQ_.call(null,view,p1__16986_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16987_SHARP_){return cljs.core._EQ_.call(null,view,p1__16987_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16988_SHARP_){return cljs.core._EQ_.call(null,view,p1__16988_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16989_SHARP_){return cljs.core._EQ_.call(null,view,p1__16989_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16990_SHARP_){return cljs.core._EQ_.call(null,view,p1__16990_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16991_SHARP_){return cljs.core._EQ_.call(null,view,p1__16991_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16992_SHARP_){return cljs.core._EQ_.call(null,view,p1__16992_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16993_SHARP_){return cljs.core._EQ_.call(null,view,p1__16993_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16994_SHARP_){return cljs.core._EQ_.call(null,view,p1__16994_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__16998){var vec__16999 = p__16998;var model = cljs.core.nth.call(null,vec__16999,(0),null);var detail = cljs.core.nth.call(null,vec__16999,(1),null);var G__17000 = (new Date(detail.Date));G__17000.getTime();
return G__17000;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__17003){var vec__17004 = p__17003;var model = cljs.core.nth.call(null,vec__17004,(0),null);var detail = cljs.core.nth.call(null,vec__17004,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__17007){var vec__17008 = p__17007;var model = cljs.core.nth.call(null,vec__17008,(0),null);var detail = cljs.core.nth.call(null,vec__17008,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__17050){var map__17051 = p__17050;var map__17051__$1 = ((cljs.core.seq_QMARK_.call(null,map__17051))?cljs.core.apply.call(null,cljs.core.hash_map,map__17051):map__17051);var args = map__17051__$1;var page = cljs.core.get.call(null,map__17051__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__17051__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__17052_17091 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__17052_17091.done(((function (G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertDTO = ((function (modelCountPerPage,filtered,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey){
return (function (p__17053){var vec__17054 = p__17053;var model = cljs.core.nth.call(null,vec__17054,(0),null);var detail = cljs.core.nth.call(null,vec__17054,(1),null);var obj17056 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj17056;
});})(modelCountPerPage,filtered,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey))
;var dto = (function (){var obj17058 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page - (1)))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page + (1)))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj17058;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey){
return (function (state_17065){var state_val_17066 = (state_17065[(1)]);if((state_val_17066 === (2)))
{var inst_17062 = (state_17065[(2)]);var inst_17063 = cljs.core.async.close_BANG_.call(null,ret);var state_17065__$1 = (function (){var statearr_17067 = state_17065;(statearr_17067[(7)] = inst_17062);
return statearr_17067;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17065__$1,inst_17063);
} else
{if((state_val_17066 === (1)))
{var inst_17059 = [null,dto];var inst_17060 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17059,null));var state_17065__$1 = state_17065;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17065__$1,(2),ret,inst_17060);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17071 = [null,null,null,null,null,null,null,null];(statearr_17071[(0)] = state_machine__6178__auto__);
(statearr_17071[(1)] = (1));
return statearr_17071;
});
var state_machine__6178__auto____1 = (function (state_17065){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17065);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17072){if((e17072 instanceof Object))
{var ex__6181__auto__ = e17072;var statearr_17073_17092 = state_17065;(statearr_17073_17092[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17065);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17093 = state_17065;
state_17065 = G__17093;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17065){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_17074 = f__6193__auto__.call(null);(statearr_17074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey))
);
G__17052_17091.fail(((function (G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey){
return (function (state_17081){var state_val_17082 = (state_17081[(1)]);if((state_val_17082 === (2)))
{var inst_17078 = (state_17081[(2)]);var inst_17079 = cljs.core.async.close_BANG_.call(null,ret);var state_17081__$1 = (function (){var statearr_17083 = state_17081;(statearr_17083[(7)] = inst_17078);
return statearr_17083;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17081__$1,inst_17079);
} else
{if((state_val_17082 === (1)))
{var inst_17075 = [err,null];var inst_17076 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17075,null));var state_17081__$1 = state_17081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17081__$1,(2),ret,inst_17076);
} else
{return null;
}
}
});})(c__6192__auto__,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17087 = [null,null,null,null,null,null,null,null];(statearr_17087[(0)] = state_machine__6178__auto__);
(statearr_17087[(1)] = (1));
return statearr_17087;
});
var state_machine__6178__auto____1 = (function (state_17081){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17081);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17088){if((e17088 instanceof Object))
{var ex__6181__auto__ = e17088;var statearr_17089_17094 = state_17081;(statearr_17089_17094[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17095 = state_17081;
state_17081 = G__17095;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17081){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_17090 = f__6193__auto__.call(null);(statearr_17090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__17052_17091,configType,ret,map__17051,map__17051__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__17153){var map__17154 = p__17153;var map__17154__$1 = ((cljs.core.seq_QMARK_.call(null,map__17154))?cljs.core.apply.call(null,cljs.core.hash_map,map__17154):map__17154);var args = map__17154__$1;var id = cljs.core.get.call(null,map__17154__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__17155_17210 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__17155_17210.done(((function (G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function (p__17156){var vec__17157 = p__17156;var key__$1 = cljs.core.nth.call(null,vec__17157,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__17157,(1),null);var obj17159 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj17159;
});})(dir,detail,filtered,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function iter__17160(s__17161){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function (){var s__17161__$1 = s__17161;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17161__$1);if(temp__4126__auto__)
{var s__17161__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17161__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__17161__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__17163 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__17162 = (0);while(true){
if((i__17162 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__17162);cljs.core.chunk_append.call(null,b__17163,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__17211 = (i__17162 + (1));
i__17162 = G__17211;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17163),iter__17160.call(null,cljs.core.chunk_rest.call(null,s__17161__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17163),null);
}
} else
{var idx = cljs.core.first.call(null,s__17161__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__17160.call(null,cljs.core.rest.call(null,s__17161__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function iter__17164(s__17165){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function (){var s__17165__$1 = s__17165;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17165__$1);if(temp__4126__auto__)
{var s__17165__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17165__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__17165__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__17167 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__17166 = (0);while(true){
if((i__17166 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__17166);cljs.core.chunk_append.call(null,b__17167,(function (){var obj17173 = {"id":url,"url":ServeFn.call(null,url)};return obj17173;
})());
{
var G__17212 = (i__17166 + (1));
i__17166 = G__17212;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17167),iter__17164.call(null,cljs.core.chunk_rest.call(null,s__17165__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17167),null);
}
} else
{var url = cljs.core.first.call(null,s__17165__$2);return cljs.core.cons.call(null,(function (){var obj17175 = {"id":url,"url":ServeFn.call(null,url)};return obj17175;
})(),iter__17164.call(null,cljs.core.rest.call(null,s__17165__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
;var dto = (function (){var obj17177 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj17177;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function (state_17184){var state_val_17185 = (state_17184[(1)]);if((state_val_17185 === (2)))
{var inst_17181 = (state_17184[(2)]);var inst_17182 = cljs.core.async.close_BANG_.call(null,ret);var state_17184__$1 = (function (){var statearr_17186 = state_17184;(statearr_17186[(7)] = inst_17181);
return statearr_17186;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17184__$1,inst_17182);
} else
{if((state_val_17185 === (1)))
{var inst_17178 = [null,dto];var inst_17179 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17178,null));var state_17184__$1 = state_17184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17184__$1,(2),ret,inst_17179);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17190 = [null,null,null,null,null,null,null,null];(statearr_17190[(0)] = state_machine__6178__auto__);
(statearr_17190[(1)] = (1));
return statearr_17190;
});
var state_machine__6178__auto____1 = (function (state_17184){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17184);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17191){if((e17191 instanceof Object))
{var ex__6181__auto__ = e17191;var statearr_17192_17213 = state_17184;(statearr_17192_17213[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17184);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17214 = state_17184;
state_17184 = G__17214;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17184){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_17193 = f__6193__auto__.call(null);(statearr_17193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
);
return c__6192__auto__;
});})(G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
);
G__17155_17210.fail(((function (G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function (state_17200){var state_val_17201 = (state_17200[(1)]);if((state_val_17201 === (2)))
{var inst_17197 = (state_17200[(2)]);var inst_17198 = cljs.core.async.close_BANG_.call(null,ret);var state_17200__$1 = (function (){var statearr_17202 = state_17200;(statearr_17202[(7)] = inst_17197);
return statearr_17202;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17200__$1,inst_17198);
} else
{if((state_val_17201 === (1)))
{var inst_17194 = [err,null];var inst_17195 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17194,null));var state_17200__$1 = state_17200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17200__$1,(2),ret,inst_17195);
} else
{return null;
}
}
});})(c__6192__auto__,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17206 = [null,null,null,null,null,null,null,null];(statearr_17206[(0)] = state_machine__6178__auto__);
(statearr_17206[(1)] = (1));
return statearr_17206;
});
var state_machine__6178__auto____1 = (function (state_17200){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17200);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17207){if((e17207 instanceof Object))
{var ex__6181__auto__ = e17207;var statearr_17208_17215 = state_17200;(statearr_17208_17215[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17200);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17216 = state_17200;
state_17200 = G__17216;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17200){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_17209 = f__6193__auto__.call(null);(statearr_17209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
);
return c__6192__auto__;
});})(G__17155_17210,ret,configType,map__17154,map__17154__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__17218_17255 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__17218_17255.done(((function (G__17218_17255,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__17218_17255,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__17218_17255,ret){
return (function (state_17229){var state_val_17230 = (state_17229[(1)]);if((state_val_17230 === (2)))
{var inst_17226 = (state_17229[(2)]);var inst_17227 = cljs.core.async.close_BANG_.call(null,ret);var state_17229__$1 = (function (){var statearr_17231 = state_17229;(statearr_17231[(7)] = inst_17226);
return statearr_17231;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17229__$1,inst_17227);
} else
{if((state_val_17230 === (1)))
{var inst_17221 = detail.ModelKey;var inst_17222 = {"modelKey":inst_17221};var inst_17223 = [null,inst_17222];var inst_17224 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17223,null));var state_17229__$1 = state_17229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17229__$1,(2),ret,inst_17224);
} else
{return null;
}
}
});})(c__6192__auto__,G__17218_17255,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__17218_17255,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17235 = [null,null,null,null,null,null,null,null];(statearr_17235[(0)] = state_machine__6178__auto__);
(statearr_17235[(1)] = (1));
return statearr_17235;
});
var state_machine__6178__auto____1 = (function (state_17229){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17229);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17236){if((e17236 instanceof Object))
{var ex__6181__auto__ = e17236;var statearr_17237_17256 = state_17229;(statearr_17237_17256[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17229);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17257 = state_17229;
state_17229 = G__17257;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17229){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__17218_17255,ret))
})();var state__6194__auto__ = (function (){var statearr_17238 = f__6193__auto__.call(null);(statearr_17238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__17218_17255,ret))
);
return c__6192__auto__;
});})(G__17218_17255,ret))
);
G__17218_17255.fail(((function (G__17218_17255,ret){
return (function (p1__17217_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__17218_17255,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__17218_17255,ret){
return (function (state_17245){var state_val_17246 = (state_17245[(1)]);if((state_val_17246 === (2)))
{var inst_17242 = (state_17245[(2)]);var inst_17243 = cljs.core.async.close_BANG_.call(null,ret);var state_17245__$1 = (function (){var statearr_17247 = state_17245;(statearr_17247[(7)] = inst_17242);
return statearr_17247;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17245__$1,inst_17243);
} else
{if((state_val_17246 === (1)))
{var inst_17239 = [p1__17217_SHARP_,null];var inst_17240 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17239,null));var state_17245__$1 = state_17245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17245__$1,(2),ret,inst_17240);
} else
{return null;
}
}
});})(c__6192__auto__,G__17218_17255,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__17218_17255,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17251 = [null,null,null,null,null,null,null,null];(statearr_17251[(0)] = state_machine__6178__auto__);
(statearr_17251[(1)] = (1));
return statearr_17251;
});
var state_machine__6178__auto____1 = (function (state_17245){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17245);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17252){if((e17252 instanceof Object))
{var ex__6181__auto__ = e17252;var statearr_17253_17258 = state_17245;(statearr_17253_17258[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17245);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17252;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17259 = state_17245;
state_17245 = G__17259;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17245){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__17218_17255,ret))
})();var state__6194__auto__ = (function (){var statearr_17254 = f__6193__auto__.call(null);(statearr_17254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__17218_17255,ret))
);
return c__6192__auto__;
});})(G__17218_17255,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__17260){var map__17261 = p__17260;var map__17261__$1 = ((cljs.core.seq_QMARK_.call(null,map__17261))?cljs.core.apply.call(null,cljs.core.hash_map,map__17261):map__17261);var args = map__17261__$1;var url = cljs.core.get.call(null,map__17261__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___17282 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___17282,ret,map__17261,map__17261__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___17282,ret,map__17261,map__17261__$1,args,url){
return (function (state_17272){var state_val_17273 = (state_17272[(1)]);if((state_val_17273 === (2)))
{var inst_17269 = (state_17272[(2)]);var inst_17270 = cljs.core.async.close_BANG_.call(null,ret);var state_17272__$1 = (function (){var statearr_17274 = state_17272;(statearr_17274[(7)] = inst_17269);
return statearr_17274;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17272__$1,inst_17270);
} else
{if((state_val_17273 === (1)))
{var inst_17264 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_17265 = {"url":inst_17264};var inst_17266 = [null,inst_17265];var inst_17267 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17266,null));var state_17272__$1 = state_17272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17272__$1,(2),ret,inst_17267);
} else
{return null;
}
}
});})(c__6192__auto___17282,ret,map__17261,map__17261__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___17282,ret,map__17261,map__17261__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17278 = [null,null,null,null,null,null,null,null];(statearr_17278[(0)] = state_machine__6178__auto__);
(statearr_17278[(1)] = (1));
return statearr_17278;
});
var state_machine__6178__auto____1 = (function (state_17272){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17272);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17279){if((e17279 instanceof Object))
{var ex__6181__auto__ = e17279;var statearr_17280_17283 = state_17272;(statearr_17280_17283[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17272);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17284 = state_17272;
state_17272 = G__17284;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17272){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___17282,ret,map__17261,map__17261__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_17281 = f__6193__auto__.call(null);(statearr_17281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___17282);
return statearr_17281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___17282,ret,map__17261,map__17261__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__17285){var map__17286 = p__17285;var map__17286__$1 = ((cljs.core.seq_QMARK_.call(null,map__17286))?cljs.core.apply.call(null,cljs.core.hash_map,map__17286):map__17286);var args = map__17286__$1;var id = cljs.core.get.call(null,map__17286__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___17303 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___17303,ret,map__17286,map__17286__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___17303,ret,map__17286,map__17286__$1,args,id){
return (function (state_17293){var state_val_17294 = (state_17293[(1)]);if((state_val_17294 === (2)))
{var inst_17290 = (state_17293[(2)]);var inst_17291 = cljs.core.async.close_BANG_.call(null,ret);var state_17293__$1 = (function (){var statearr_17295 = state_17293;(statearr_17295[(7)] = inst_17290);
return statearr_17295;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17293__$1,inst_17291);
} else
{if((state_val_17294 === (1)))
{var inst_17287 = [null,null];var inst_17288 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17287,null));var state_17293__$1 = state_17293;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17293__$1,(2),ret,inst_17288);
} else
{return null;
}
}
});})(c__6192__auto___17303,ret,map__17286,map__17286__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___17303,ret,map__17286,map__17286__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17299 = [null,null,null,null,null,null,null,null];(statearr_17299[(0)] = state_machine__6178__auto__);
(statearr_17299[(1)] = (1));
return statearr_17299;
});
var state_machine__6178__auto____1 = (function (state_17293){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17293);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17300){if((e17300 instanceof Object))
{var ex__6181__auto__ = e17300;var statearr_17301_17304 = state_17293;(statearr_17301_17304[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17305 = state_17293;
state_17293 = G__17305;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17293){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___17303,ret,map__17286,map__17286__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_17302 = f__6193__auto__.call(null);(statearr_17302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___17303);
return statearr_17302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___17303,ret,map__17286,map__17286__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__17306 = cljs.core.rest.call(null,list);
var G__17307 = id;
var G__17308 = (start + (1));
list = G__17306;
id = G__17307;
start = G__17308;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__17310){var map__17311 = p__17310;var map__17311__$1 = ((cljs.core.seq_QMARK_.call(null,map__17311))?cljs.core.apply.call(null,cljs.core.hash_map,map__17311):map__17311);var args = map__17311__$1;var id = cljs.core.get.call(null,map__17311__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__17312_17344 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__17312_17344.done(((function (G__17312_17344,ret,map__17311,map__17311__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__17312_17344,ret,map__17311,map__17311__$1,args,id){
return (function (p1__17309_SHARP_){var obj17314 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__17309_SHARP_ + (1)))+".jpg"))};return obj17314;
});})(filtered,evtId,evt,G__17312_17344,ret,map__17311,map__17311__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__17312_17344,ret,map__17311,map__17311__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__17312_17344,ret,map__17311,map__17311__$1,args,id){
return (function (state_17334){var state_val_17335 = (state_17334[(1)]);if((state_val_17335 === (2)))
{var inst_17331 = (state_17334[(2)]);var inst_17332 = cljs.core.async.close_BANG_.call(null,ret);var state_17334__$1 = (function (){var statearr_17336 = state_17334;(statearr_17336[(7)] = inst_17331);
return statearr_17336;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17334__$1,inst_17332);
} else
{if((state_val_17335 === (1)))
{var inst_17317 = cljs.core.nth.call(null,filtered,idx);var inst_17318 = cljs.core.first.call(null,inst_17317);var inst_17319 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17318));var inst_17320 = cljs.core.nth.call(null,filtered,idx2);var inst_17321 = cljs.core.first.call(null,inst_17320);var inst_17322 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17321));var inst_17323 = (evt["Title"]);var inst_17324 = (evt["Date"]);var inst_17325 = (evt["Content"]);var inst_17326 = (evt["Form"]);var inst_17327 = {"prev_href":inst_17319,"next_href":inst_17322,"title":inst_17323,"date":inst_17324,"sideList":photos,"content":inst_17325,"form":inst_17326};var inst_17328 = [null,inst_17327];var inst_17329 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17328,null));var state_17334__$1 = state_17334;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17334__$1,(2),ret,inst_17329);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__17312_17344,ret,map__17311,map__17311__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__17312_17344,ret,map__17311,map__17311__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17340 = [null,null,null,null,null,null,null,null];(statearr_17340[(0)] = state_machine__6178__auto__);
(statearr_17340[(1)] = (1));
return statearr_17340;
});
var state_machine__6178__auto____1 = (function (state_17334){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17334);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17341){if((e17341 instanceof Object))
{var ex__6181__auto__ = e17341;var statearr_17342_17345 = state_17334;(statearr_17342_17345[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17334);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17346 = state_17334;
state_17334 = G__17346;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17334){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__17312_17344,ret,map__17311,map__17311__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_17343 = f__6193__auto__.call(null);(statearr_17343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__17312_17344,ret,map__17311,map__17311__$1,args,id))
);
return c__6192__auto__;
});})(G__17312_17344,ret,map__17311,map__17311__$1,args,id))
);
G__17312_17344.fail(((function (G__17312_17344,ret,map__17311,map__17311__$1,args,id){
return (function (err){return console.log(err);
});})(G__17312_17344,ret,map__17311,map__17311__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
