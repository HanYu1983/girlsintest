// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10833_SHARP_){return cljs.core._EQ_.call(null,view,p1__10833_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10834_SHARP_){return cljs.core._EQ_.call(null,view,p1__10834_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10835_SHARP_){return cljs.core._EQ_.call(null,view,p1__10835_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10836_SHARP_){return cljs.core._EQ_.call(null,view,p1__10836_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10837_SHARP_){return cljs.core._EQ_.call(null,view,p1__10837_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10838_SHARP_){return cljs.core._EQ_.call(null,view,p1__10838_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10839_SHARP_){return cljs.core._EQ_.call(null,view,p1__10839_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10840_SHARP_){return cljs.core._EQ_.call(null,view,p1__10840_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10841_SHARP_){return cljs.core._EQ_.call(null,view,p1__10841_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__10845){var vec__10846 = p__10845;var model = cljs.core.nth.call(null,vec__10846,(0),null);var detail = cljs.core.nth.call(null,vec__10846,(1),null);var G__10847 = (new Date(detail.Date));G__10847.getTime();
return G__10847;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__10850){var vec__10851 = p__10850;var model = cljs.core.nth.call(null,vec__10851,(0),null);var detail = cljs.core.nth.call(null,vec__10851,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__10854){var vec__10855 = p__10854;var model = cljs.core.nth.call(null,vec__10855,(0),null);var detail = cljs.core.nth.call(null,vec__10855,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__10897){var map__10898 = p__10897;var map__10898__$1 = ((cljs.core.seq_QMARK_.call(null,map__10898))?cljs.core.apply.call(null,cljs.core.hash_map,map__10898):map__10898);var args = map__10898__$1;var page = cljs.core.get.call(null,map__10898__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__10898__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__10899_10938 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__10899_10938.done(((function (G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey){
return (function (p__10900){var vec__10901 = p__10900;var model = cljs.core.nth.call(null,vec__10901,(0),null);var detail = cljs.core.nth.call(null,vec__10901,(1),null);var obj10903 = {"visibleDate":false,"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj10903;
});})(modelCountPerPage,filtered,totalPage,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey))
;var dto = (function (){var obj10905 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj10905;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey){
return (function (state_10912){var state_val_10913 = (state_10912[(1)]);if((state_val_10913 === (2)))
{var inst_10909 = (state_10912[(2)]);var inst_10910 = cljs.core.async.close_BANG_.call(null,ret);var state_10912__$1 = (function (){var statearr_10914 = state_10912;(statearr_10914[(7)] = inst_10909);
return statearr_10914;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10912__$1,inst_10910);
} else
{if((state_val_10913 === (1)))
{var inst_10906 = [null,dto];var inst_10907 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10906,null));var state_10912__$1 = state_10912;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10912__$1,(2),ret,inst_10907);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10918 = [null,null,null,null,null,null,null,null];(statearr_10918[(0)] = state_machine__6178__auto__);
(statearr_10918[(1)] = (1));
return statearr_10918;
});
var state_machine__6178__auto____1 = (function (state_10912){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10912);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10919){if((e10919 instanceof Object))
{var ex__6181__auto__ = e10919;var statearr_10920_10939 = state_10912;(statearr_10920_10939[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10912);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10940 = state_10912;
state_10912 = G__10940;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10912){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_10921 = f__6193__auto__.call(null);(statearr_10921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey))
);
G__10899_10938.fail(((function (G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey){
return (function (state_10928){var state_val_10929 = (state_10928[(1)]);if((state_val_10929 === (2)))
{var inst_10925 = (state_10928[(2)]);var inst_10926 = cljs.core.async.close_BANG_.call(null,ret);var state_10928__$1 = (function (){var statearr_10930 = state_10928;(statearr_10930[(7)] = inst_10925);
return statearr_10930;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10928__$1,inst_10926);
} else
{if((state_val_10929 === (1)))
{var inst_10922 = [err,null];var inst_10923 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10922,null));var state_10928__$1 = state_10928;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10928__$1,(2),ret,inst_10923);
} else
{return null;
}
}
});})(c__6192__auto__,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10934 = [null,null,null,null,null,null,null,null];(statearr_10934[(0)] = state_machine__6178__auto__);
(statearr_10934[(1)] = (1));
return statearr_10934;
});
var state_machine__6178__auto____1 = (function (state_10928){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10928);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10935){if((e10935 instanceof Object))
{var ex__6181__auto__ = e10935;var statearr_10936_10941 = state_10928;(statearr_10936_10941[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10942 = state_10928;
state_10928 = G__10942;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10928){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_10937 = f__6193__auto__.call(null);(statearr_10937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__10899_10938,configType,ret,map__10898,map__10898__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11000){var map__11001 = p__11000;var map__11001__$1 = ((cljs.core.seq_QMARK_.call(null,map__11001))?cljs.core.apply.call(null,cljs.core.hash_map,map__11001):map__11001);var args = map__11001__$1;var id = cljs.core.get.call(null,map__11001__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__11002_11057 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11002_11057.done(((function (G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function (p__11003){var vec__11004 = p__11003;var key__$1 = cljs.core.nth.call(null,vec__11004,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11004,(1),null);var obj11006 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj11006;
});})(dir,detail,filtered,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function iter__11007(s__11008){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function (){var s__11008__$1 = s__11008;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11008__$1);if(temp__4126__auto__)
{var s__11008__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11008__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11008__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11010 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11009 = (0);while(true){
if((i__11009 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__11009);cljs.core.chunk_append.call(null,b__11010,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__11058 = (i__11009 + (1));
i__11009 = G__11058;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11010),iter__11007.call(null,cljs.core.chunk_rest.call(null,s__11008__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11010),null);
}
} else
{var idx = cljs.core.first.call(null,s__11008__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__11007.call(null,cljs.core.rest.call(null,s__11008__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function iter__11011(s__11012){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function (){var s__11012__$1 = s__11012;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11012__$1);if(temp__4126__auto__)
{var s__11012__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11012__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11012__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11014 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11013 = (0);while(true){
if((i__11013 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__11013);cljs.core.chunk_append.call(null,b__11014,(function (){var obj11020 = {"id":url,"url":ServeFn.call(null,url)};return obj11020;
})());
{
var G__11059 = (i__11013 + (1));
i__11013 = G__11059;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11014),iter__11011.call(null,cljs.core.chunk_rest.call(null,s__11012__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11014),null);
}
} else
{var url = cljs.core.first.call(null,s__11012__$2);return cljs.core.cons.call(null,(function (){var obj11022 = {"id":url,"url":ServeFn.call(null,url)};return obj11022;
})(),iter__11011.call(null,cljs.core.rest.call(null,s__11012__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
;var dto = (function (){var obj11024 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj11024;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function (state_11031){var state_val_11032 = (state_11031[(1)]);if((state_val_11032 === (2)))
{var inst_11028 = (state_11031[(2)]);var inst_11029 = cljs.core.async.close_BANG_.call(null,ret);var state_11031__$1 = (function (){var statearr_11033 = state_11031;(statearr_11033[(7)] = inst_11028);
return statearr_11033;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11031__$1,inst_11029);
} else
{if((state_val_11032 === (1)))
{var inst_11025 = [null,dto];var inst_11026 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11025,null));var state_11031__$1 = state_11031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11031__$1,(2),ret,inst_11026);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11037 = [null,null,null,null,null,null,null,null];(statearr_11037[(0)] = state_machine__6178__auto__);
(statearr_11037[(1)] = (1));
return statearr_11037;
});
var state_machine__6178__auto____1 = (function (state_11031){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11031);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11038){if((e11038 instanceof Object))
{var ex__6181__auto__ = e11038;var statearr_11039_11060 = state_11031;(statearr_11039_11060[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11061 = state_11031;
state_11031 = G__11061;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11031){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11040 = f__6193__auto__.call(null);(statearr_11040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
);
return c__6192__auto__;
});})(G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
);
G__11002_11057.fail(((function (G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function (state_11047){var state_val_11048 = (state_11047[(1)]);if((state_val_11048 === (2)))
{var inst_11044 = (state_11047[(2)]);var inst_11045 = cljs.core.async.close_BANG_.call(null,ret);var state_11047__$1 = (function (){var statearr_11049 = state_11047;(statearr_11049[(7)] = inst_11044);
return statearr_11049;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11047__$1,inst_11045);
} else
{if((state_val_11048 === (1)))
{var inst_11041 = [err,null];var inst_11042 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11041,null));var state_11047__$1 = state_11047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11047__$1,(2),ret,inst_11042);
} else
{return null;
}
}
});})(c__6192__auto__,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11053 = [null,null,null,null,null,null,null,null];(statearr_11053[(0)] = state_machine__6178__auto__);
(statearr_11053[(1)] = (1));
return statearr_11053;
});
var state_machine__6178__auto____1 = (function (state_11047){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11054){if((e11054 instanceof Object))
{var ex__6181__auto__ = e11054;var statearr_11055_11062 = state_11047;(statearr_11055_11062[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11063 = state_11047;
state_11047 = G__11063;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11047){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11056 = f__6193__auto__.call(null);(statearr_11056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
);
return c__6192__auto__;
});})(G__11002_11057,ret,configType,map__11001,map__11001__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__11065_11104 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__11065_11104.done(((function (G__11065_11104,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11065_11104,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11065_11104,ret){
return (function (state_11078){var state_val_11079 = (state_11078[(1)]);if((state_val_11079 === (2)))
{var inst_11075 = (state_11078[(2)]);var inst_11076 = cljs.core.async.close_BANG_.call(null,ret);var state_11078__$1 = (function (){var statearr_11080 = state_11078;(statearr_11080[(7)] = inst_11075);
return statearr_11080;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11078__$1,inst_11076);
} else
{if((state_val_11079 === (1)))
{var inst_11068 = detail.ModelKey;var inst_11069 = clojure.string.capitalize.call(null,where);var inst_11070 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11069)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_11071 = {"modelKey":inst_11068,"moreUrl":inst_11070};var inst_11072 = [null,inst_11071];var inst_11073 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11072,null));var state_11078__$1 = state_11078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11078__$1,(2),ret,inst_11073);
} else
{return null;
}
}
});})(c__6192__auto__,G__11065_11104,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11065_11104,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11084 = [null,null,null,null,null,null,null,null];(statearr_11084[(0)] = state_machine__6178__auto__);
(statearr_11084[(1)] = (1));
return statearr_11084;
});
var state_machine__6178__auto____1 = (function (state_11078){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11078);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11085){if((e11085 instanceof Object))
{var ex__6181__auto__ = e11085;var statearr_11086_11105 = state_11078;(statearr_11086_11105[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11106 = state_11078;
state_11078 = G__11106;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11078){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11065_11104,ret))
})();var state__6194__auto__ = (function (){var statearr_11087 = f__6193__auto__.call(null);(statearr_11087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11065_11104,ret))
);
return c__6192__auto__;
});})(G__11065_11104,ret))
);
G__11065_11104.fail(((function (G__11065_11104,ret){
return (function (p1__11064_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11065_11104,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11065_11104,ret){
return (function (state_11094){var state_val_11095 = (state_11094[(1)]);if((state_val_11095 === (2)))
{var inst_11091 = (state_11094[(2)]);var inst_11092 = cljs.core.async.close_BANG_.call(null,ret);var state_11094__$1 = (function (){var statearr_11096 = state_11094;(statearr_11096[(7)] = inst_11091);
return statearr_11096;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11094__$1,inst_11092);
} else
{if((state_val_11095 === (1)))
{var inst_11088 = [p1__11064_SHARP_,null];var inst_11089 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11088,null));var state_11094__$1 = state_11094;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11094__$1,(2),ret,inst_11089);
} else
{return null;
}
}
});})(c__6192__auto__,G__11065_11104,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11065_11104,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11100 = [null,null,null,null,null,null,null,null];(statearr_11100[(0)] = state_machine__6178__auto__);
(statearr_11100[(1)] = (1));
return statearr_11100;
});
var state_machine__6178__auto____1 = (function (state_11094){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11094);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11101){if((e11101 instanceof Object))
{var ex__6181__auto__ = e11101;var statearr_11102_11107 = state_11094;(statearr_11102_11107[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11094);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11108 = state_11094;
state_11094 = G__11108;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11094){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11065_11104,ret))
})();var state__6194__auto__ = (function (){var statearr_11103 = f__6193__auto__.call(null);(statearr_11103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11065_11104,ret))
);
return c__6192__auto__;
});})(G__11065_11104,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__11109){var map__11110 = p__11109;var map__11110__$1 = ((cljs.core.seq_QMARK_.call(null,map__11110))?cljs.core.apply.call(null,cljs.core.hash_map,map__11110):map__11110);var args = map__11110__$1;var url = cljs.core.get.call(null,map__11110__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11130 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11130,ret,map__11110,map__11110__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11130,ret,map__11110,map__11110__$1,args,url){
return (function (state_11120){var state_val_11121 = (state_11120[(1)]);if((state_val_11121 === (2)))
{var inst_11117 = (state_11120[(2)]);var inst_11118 = cljs.core.async.close_BANG_.call(null,ret);var state_11120__$1 = (function (){var statearr_11122 = state_11120;(statearr_11122[(7)] = inst_11117);
return statearr_11122;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11120__$1,inst_11118);
} else
{if((state_val_11121 === (1)))
{var inst_11113 = {"url":url};var inst_11114 = [null,inst_11113];var inst_11115 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11114,null));var state_11120__$1 = state_11120;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11120__$1,(2),ret,inst_11115);
} else
{return null;
}
}
});})(c__6192__auto___11130,ret,map__11110,map__11110__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___11130,ret,map__11110,map__11110__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11126 = [null,null,null,null,null,null,null,null];(statearr_11126[(0)] = state_machine__6178__auto__);
(statearr_11126[(1)] = (1));
return statearr_11126;
});
var state_machine__6178__auto____1 = (function (state_11120){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11120);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11127){if((e11127 instanceof Object))
{var ex__6181__auto__ = e11127;var statearr_11128_11131 = state_11120;(statearr_11128_11131[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11120);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11132 = state_11120;
state_11120 = G__11132;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11120){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11130,ret,map__11110,map__11110__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_11129 = f__6193__auto__.call(null);(statearr_11129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11130);
return statearr_11129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11130,ret,map__11110,map__11110__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__11133){var map__11134 = p__11133;var map__11134__$1 = ((cljs.core.seq_QMARK_.call(null,map__11134))?cljs.core.apply.call(null,cljs.core.hash_map,map__11134):map__11134);var args = map__11134__$1;var id = cljs.core.get.call(null,map__11134__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11151 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11151,ret,map__11134,map__11134__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11151,ret,map__11134,map__11134__$1,args,id){
return (function (state_11141){var state_val_11142 = (state_11141[(1)]);if((state_val_11142 === (2)))
{var inst_11138 = (state_11141[(2)]);var inst_11139 = cljs.core.async.close_BANG_.call(null,ret);var state_11141__$1 = (function (){var statearr_11143 = state_11141;(statearr_11143[(7)] = inst_11138);
return statearr_11143;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11141__$1,inst_11139);
} else
{if((state_val_11142 === (1)))
{var inst_11135 = [null,null];var inst_11136 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11135,null));var state_11141__$1 = state_11141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11141__$1,(2),ret,inst_11136);
} else
{return null;
}
}
});})(c__6192__auto___11151,ret,map__11134,map__11134__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___11151,ret,map__11134,map__11134__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11147 = [null,null,null,null,null,null,null,null];(statearr_11147[(0)] = state_machine__6178__auto__);
(statearr_11147[(1)] = (1));
return statearr_11147;
});
var state_machine__6178__auto____1 = (function (state_11141){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11141);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11148){if((e11148 instanceof Object))
{var ex__6181__auto__ = e11148;var statearr_11149_11152 = state_11141;(statearr_11149_11152[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11141);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11148;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11153 = state_11141;
state_11141 = G__11153;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11141){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11151,ret,map__11134,map__11134__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11150 = f__6193__auto__.call(null);(statearr_11150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11151);
return statearr_11150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11151,ret,map__11134,map__11134__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__11154 = cljs.core.rest.call(null,list);
var G__11155 = id;
var G__11156 = (start + (1));
list = G__11154;
id = G__11155;
start = G__11156;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__11158){var map__11159 = p__11158;var map__11159__$1 = ((cljs.core.seq_QMARK_.call(null,map__11159))?cljs.core.apply.call(null,cljs.core.hash_map,map__11159):map__11159);var args = map__11159__$1;var id = cljs.core.get.call(null,map__11159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__11160_11209 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__11160_11209.done(((function (G__11160_11209,ret,map__11159,map__11159__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__11160_11209,ret,map__11159,map__11159__$1,args,id){
return (function (p1__11157_SHARP_){var obj11162 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__11157_SHARP_ + (1)))+".jpg"))};return obj11162;
});})(filtered,evtId,evt,G__11160_11209,ret,map__11159,map__11159__$1,args,id))
,cljs.core.range.call(null,(evt["Count"]))));var prevId = (function (){var find = (app.model.indexOf.call(null,filtered,evtId,(0)) - (1));if((find < (0)))
{return null;
} else
{if((find >= cljs.core.count.call(null,filtered)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return find;
} else
{return null;
}
}
}
})();var nextId = (function (){var find = (app.model.indexOf.call(null,filtered,evtId,(0)) + (1));if((find < (0)))
{return null;
} else
{if((find >= cljs.core.count.call(null,filtered)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return find;
} else
{return null;
}
}
}
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11160_11209,ret,map__11159,map__11159__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11160_11209,ret,map__11159,map__11159__$1,args,id){
return (function (state_11190){var state_val_11191 = (state_11190[(1)]);if((state_val_11191 === (8)))
{var inst_11171 = (state_11190[(7)]);var inst_11178 = (state_11190[(2)]);var inst_11179 = (evt["Title"]);var inst_11180 = (evt["Date"]);var inst_11181 = (evt["Content"]);var inst_11182 = (evt["Form"]);var inst_11183 = {"prev_href":inst_11171,"next_href":inst_11178,"title":inst_11179,"date":inst_11180,"sideList":photos,"content":inst_11181,"form":inst_11182};var inst_11184 = [null,inst_11183];var inst_11185 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11184,null));var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11190__$1,(2),ret,inst_11185);
} else
{if((state_val_11191 === (7)))
{var state_11190__$1 = state_11190;var statearr_11192_11210 = state_11190__$1;(statearr_11192_11210[(2)] = null);
(statearr_11192_11210[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (6)))
{var inst_11173 = cljs.core.nth.call(null,filtered,nextId);var inst_11174 = cljs.core.first.call(null,inst_11173);var inst_11175 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11174));var state_11190__$1 = state_11190;var statearr_11193_11211 = state_11190__$1;(statearr_11193_11211[(2)] = inst_11175);
(statearr_11193_11211[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (5)))
{var inst_11171 = (state_11190[(2)]);var state_11190__$1 = (function (){var statearr_11194 = state_11190;(statearr_11194[(7)] = inst_11171);
return statearr_11194;
})();if(cljs.core.truth_(nextId))
{var statearr_11195_11212 = state_11190__$1;(statearr_11195_11212[(1)] = (6));
} else
{var statearr_11196_11213 = state_11190__$1;(statearr_11196_11213[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (4)))
{var state_11190__$1 = state_11190;var statearr_11197_11214 = state_11190__$1;(statearr_11197_11214[(2)] = null);
(statearr_11197_11214[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (3)))
{var inst_11166 = cljs.core.nth.call(null,filtered,prevId);var inst_11167 = cljs.core.first.call(null,inst_11166);var inst_11168 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11167));var state_11190__$1 = state_11190;var statearr_11198_11215 = state_11190__$1;(statearr_11198_11215[(2)] = inst_11168);
(statearr_11198_11215[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (2)))
{var inst_11187 = (state_11190[(2)]);var inst_11188 = cljs.core.async.close_BANG_.call(null,ret);var state_11190__$1 = (function (){var statearr_11199 = state_11190;(statearr_11199[(8)] = inst_11187);
return statearr_11199;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11190__$1,inst_11188);
} else
{if((state_val_11191 === (1)))
{var state_11190__$1 = state_11190;if(cljs.core.truth_(prevId))
{var statearr_11200_11216 = state_11190__$1;(statearr_11200_11216[(1)] = (3));
} else
{var statearr_11201_11217 = state_11190__$1;(statearr_11201_11217[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11160_11209,ret,map__11159,map__11159__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11160_11209,ret,map__11159,map__11159__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11205 = [null,null,null,null,null,null,null,null,null];(statearr_11205[(0)] = state_machine__6178__auto__);
(statearr_11205[(1)] = (1));
return statearr_11205;
});
var state_machine__6178__auto____1 = (function (state_11190){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11190);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11206){if((e11206 instanceof Object))
{var ex__6181__auto__ = e11206;var statearr_11207_11218 = state_11190;(statearr_11207_11218[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11190);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11206;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11219 = state_11190;
state_11190 = G__11219;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11190){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11160_11209,ret,map__11159,map__11159__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11208 = f__6193__auto__.call(null);(statearr_11208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11208;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11160_11209,ret,map__11159,map__11159__$1,args,id))
);
return c__6192__auto__;
});})(G__11160_11209,ret,map__11159,map__11159__$1,args,id))
);
G__11160_11209.fail(((function (G__11160_11209,ret,map__11159,map__11159__$1,args,id){
return (function (err){return console.log(err);
});})(G__11160_11209,ret,map__11159,map__11159__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
