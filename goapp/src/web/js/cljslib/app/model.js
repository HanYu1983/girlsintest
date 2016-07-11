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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11434_SHARP_){return cljs.core._EQ_.call(null,view,p1__11434_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11435_SHARP_){return cljs.core._EQ_.call(null,view,p1__11435_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11436_SHARP_){return cljs.core._EQ_.call(null,view,p1__11436_SHARP_);
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
app.model.bottomTab0 = (function bottomTab0(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11437_SHARP_){return cljs.core._EQ_.call(null,view,p1__11437_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11438_SHARP_){return cljs.core._EQ_.call(null,view,p1__11438_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11439_SHARP_){return cljs.core._EQ_.call(null,view,p1__11439_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null))))
{return "\u7522\u54C1\u7167\u7247";
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error(("no bottomTab0 with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
} else
{return null;
}
}
}
}
});
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11440_SHARP_){return cljs.core._EQ_.call(null,view,p1__11440_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "Basic Information";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11441_SHARP_){return cljs.core._EQ_.call(null,view,p1__11441_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "Basic Information";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11442_SHARP_){return cljs.core._EQ_.call(null,view,p1__11442_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11443_SHARP_){return cljs.core._EQ_.call(null,view,p1__11443_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "Interview";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11444_SHARP_){return cljs.core._EQ_.call(null,view,p1__11444_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "Interview";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11445_SHARP_){return cljs.core._EQ_.call(null,view,p1__11445_SHARP_);
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
app.model.bottomTab3 = (function bottomTab3(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11446_SHARP_){return cljs.core._EQ_.call(null,view,p1__11446_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11447_SHARP_){return cljs.core._EQ_.call(null,view,p1__11447_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11448_SHARP_){return cljs.core._EQ_.call(null,view,p1__11448_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null))))
{return "\u76F8\u95DC\u7522\u54C1";
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__11452){var vec__11453 = p__11452;var model = cljs.core.nth.call(null,vec__11453,(0),null);var detail = cljs.core.nth.call(null,vec__11453,(1),null);var G__11454 = (new Date(detail.Date));G__11454.getTime();
return G__11454;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__11457){var vec__11458 = p__11457;var model = cljs.core.nth.call(null,vec__11458,(0),null);var detail = cljs.core.nth.call(null,vec__11458,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__11461){var vec__11462 = p__11461;var model = cljs.core.nth.call(null,vec__11462,(0),null);var detail = cljs.core.nth.call(null,vec__11462,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.SearchRelative = (function SearchRelative(tags,details){return cljs.core.shuffle.call(null,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (tag){return cljs.core.filter.call(null,(function (p__11465){var vec__11466 = p__11465;var model = cljs.core.nth.call(null,vec__11466,(0),null);var detail = cljs.core.nth.call(null,vec__11466,(1),null);return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+".?")),detail.Tag);
}),details);
}),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,tags,/,/))))));
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__11514,key,p__11515){var map__11516 = p__11514;var map__11516__$1 = ((cljs.core.seq_QMARK_.call(null,map__11516))?cljs.core.apply.call(null,cljs.core.hash_map,map__11516):map__11516);var ctx = map__11516__$1;var media_type = cljs.core.get.call(null,map__11516__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__11517 = p__11515;var map__11517__$1 = ((cljs.core.seq_QMARK_.call(null,map__11517))?cljs.core.apply.call(null,cljs.core.hash_map,map__11517):map__11517);var args = map__11517__$1;var page = cljs.core.get.call(null,map__11517__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__11517__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__11518_11561 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11518_11561.done(((function (G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = (12);var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey){
return (function (p__11519){var vec__11520 = p__11519;var model = cljs.core.nth.call(null,vec__11520,(0),null);var detail = cljs.core.nth.call(null,vec__11520,(1),null);var vec__11521 = (function (){var pred__11522 = cljs.core._EQ_;var expr__11523 = media_type;if(cljs.core.truth_(pred__11522.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__11523)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(600)], null);
} else
{if(cljs.core.truth_(pred__11522.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__11523)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(450)], null);
} else
{if(cljs.core.truth_(pred__11522.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__11523)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(450)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(450)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__11521,(0),null);var h = cljs.core.nth.call(null,vec__11521,(1),null);var obj11526 = {"visibleDate":false,"brand":detail.Brand,"signUrl":(cljs.core.truth_(detail.Sign)?app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/sign.png")):null),"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj11526;
});})(modelCountPerPage,filtered,totalPage,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey))
;var dto = (function (){var obj11528 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj11528;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey){
return (function (state_11535){var state_val_11536 = (state_11535[(1)]);if((state_val_11536 === (2)))
{var inst_11532 = (state_11535[(2)]);var inst_11533 = cljs.core.async.close_BANG_.call(null,ret);var state_11535__$1 = (function (){var statearr_11537 = state_11535;(statearr_11537[(7)] = inst_11532);
return statearr_11537;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11535__$1,inst_11533);
} else
{if((state_val_11536 === (1)))
{var inst_11529 = [null,dto];var inst_11530 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11529,null));var state_11535__$1 = state_11535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11535__$1,(2),ret,inst_11530);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11541 = [null,null,null,null,null,null,null,null];(statearr_11541[(0)] = state_machine__6178__auto__);
(statearr_11541[(1)] = (1));
return statearr_11541;
});
var state_machine__6178__auto____1 = (function (state_11535){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11535);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11542){if((e11542 instanceof Object))
{var ex__6181__auto__ = e11542;var statearr_11543_11562 = state_11535;(statearr_11543_11562[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11563 = state_11535;
state_11535 = G__11563;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11535){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11544 = f__6193__auto__.call(null);(statearr_11544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey))
);
G__11518_11561.fail(((function (G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey){
return (function (err){console.log("package\u88E1\u53EF\u80FD\u6709\u4E0D\u8A72\u5B58\u5728\u7684\u6A94\u6848(ex. zip, ...)\uFF0C\u8ACB\u6AA2\u67E5\uFF01\uFF01");
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey){
return (function (state_11551){var state_val_11552 = (state_11551[(1)]);if((state_val_11552 === (2)))
{var inst_11548 = (state_11551[(2)]);var inst_11549 = cljs.core.async.close_BANG_.call(null,ret);var state_11551__$1 = (function (){var statearr_11553 = state_11551;(statearr_11553[(7)] = inst_11548);
return statearr_11553;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11551__$1,inst_11549);
} else
{if((state_val_11552 === (1)))
{var inst_11545 = [err,null];var inst_11546 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11545,null));var state_11551__$1 = state_11551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11551__$1,(2),ret,inst_11546);
} else
{return null;
}
}
});})(c__6192__auto__,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11557 = [null,null,null,null,null,null,null,null];(statearr_11557[(0)] = state_machine__6178__auto__);
(statearr_11557[(1)] = (1));
return statearr_11557;
});
var state_machine__6178__auto____1 = (function (state_11551){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11551);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11558){if((e11558 instanceof Object))
{var ex__6181__auto__ = e11558;var statearr_11559_11564 = state_11551;(statearr_11559_11564[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11565 = state_11551;
state_11551 = G__11565;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11551){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11560 = f__6193__auto__.call(null);(statearr_11560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11518_11561,configType,ret,map__11516,map__11516__$1,ctx,media_type,map__11517,map__11517__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11625){var map__11626 = p__11625;var map__11626__$1 = ((cljs.core.seq_QMARK_.call(null,map__11626))?cljs.core.apply.call(null,cljs.core.hash_map,map__11626):map__11626);var args = map__11626__$1;var id = cljs.core.get.call(null,map__11626__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__11627_11684 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11627_11684.done(((function (G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var relativeDetails = cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (dir,detail,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (p__11628){var vec__11629 = p__11628;var model = cljs.core.nth.call(null,vec__11629,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11629,(1),null);return cljs.core.not_EQ_.call(null,model,id);
});})(dir,detail,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
,app.model.SearchRelative.call(null,detail.Tag,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertHeadDTO = ((function (dir,detail,relativeDetails,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (p__11630){var vec__11631 = p__11630;var key__$1 = cljs.core.nth.call(null,vec__11631,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11631,(1),null);var obj11633 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj11633;
});})(dir,detail,relativeDetails,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function iter__11634(s__11635){return (new cljs.core.LazySeq(null,((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (){var s__11635__$1 = s__11635;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11635__$1);if(temp__4126__auto__)
{var s__11635__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11635__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11635__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11637 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11636 = (0);while(true){
if((i__11636 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__11636);cljs.core.chunk_append.call(null,b__11637,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__11685 = (i__11636 + (1));
i__11636 = G__11685;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11637),iter__11634.call(null,cljs.core.chunk_rest.call(null,s__11635__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11637),null);
}
} else
{var idx = cljs.core.first.call(null,s__11635__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__11634.call(null,cljs.core.rest.call(null,s__11635__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
,null,null));
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function iter__11638(s__11639){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (){var s__11639__$1 = s__11639;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11639__$1);if(temp__4126__auto__)
{var s__11639__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11639__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11639__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11641 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11640 = (0);while(true){
if((i__11640 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__11640);cljs.core.chunk_append.call(null,b__11641,(function (){var obj11647 = {"id":url,"url":ServeFn.call(null,url)};return obj11647;
})());
{
var G__11686 = (i__11640 + (1));
i__11640 = G__11686;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11641),iter__11638.call(null,cljs.core.chunk_rest.call(null,s__11639__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11641),null);
}
} else
{var url = cljs.core.first.call(null,s__11639__$2);return cljs.core.cons.call(null,(function (){var obj11649 = {"id":url,"url":ServeFn.call(null,url)};return obj11649;
})(),iter__11638.call(null,cljs.core.rest.call(null,s__11639__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
,null,null));
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
;var dto = (function (){var obj11651 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"signUrl":(cljs.core.truth_(detail.Sign)?app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/sign.png")):null),"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab3":app.model.bottomTab3.call(null,name),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"bottomTab0":app.model.bottomTab0.call(null,name),"modelDetail":detail.Description,"visibleFullscreen":(cljs.core.truth_(mobileAndTabletcheck())?true:detail.Fullscreen),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,relativeDetails)),"date":detail.Date,"protalk":detail.Comment};return obj11651;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (state_11658){var state_val_11659 = (state_11658[(1)]);if((state_val_11659 === (2)))
{var inst_11655 = (state_11658[(2)]);var inst_11656 = cljs.core.async.close_BANG_.call(null,ret);var state_11658__$1 = (function (){var statearr_11660 = state_11658;(statearr_11660[(7)] = inst_11655);
return statearr_11660;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11658__$1,inst_11656);
} else
{if((state_val_11659 === (1)))
{var inst_11652 = [null,dto];var inst_11653 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11652,null));var state_11658__$1 = state_11658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11658__$1,(2),ret,inst_11653);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11664 = [null,null,null,null,null,null,null,null];(statearr_11664[(0)] = state_machine__6178__auto__);
(statearr_11664[(1)] = (1));
return statearr_11664;
});
var state_machine__6178__auto____1 = (function (state_11658){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11658);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11665){if((e11665 instanceof Object))
{var ex__6181__auto__ = e11665;var statearr_11666_11687 = state_11658;(statearr_11666_11687[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11658);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11688 = state_11658;
state_11658 = G__11688;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11658){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11667 = f__6193__auto__.call(null);(statearr_11667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11667;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
);
return c__6192__auto__;
});})(G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
);
G__11627_11684.fail(((function (G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function (state_11674){var state_val_11675 = (state_11674[(1)]);if((state_val_11675 === (2)))
{var inst_11671 = (state_11674[(2)]);var inst_11672 = cljs.core.async.close_BANG_.call(null,ret);var state_11674__$1 = (function (){var statearr_11676 = state_11674;(statearr_11676[(7)] = inst_11671);
return statearr_11676;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11674__$1,inst_11672);
} else
{if((state_val_11675 === (1)))
{var inst_11668 = [err,null];var inst_11669 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11668,null));var state_11674__$1 = state_11674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11674__$1,(2),ret,inst_11669);
} else
{return null;
}
}
});})(c__6192__auto__,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11680 = [null,null,null,null,null,null,null,null];(statearr_11680[(0)] = state_machine__6178__auto__);
(statearr_11680[(1)] = (1));
return statearr_11680;
});
var state_machine__6178__auto____1 = (function (state_11674){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11674);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11681){if((e11681 instanceof Object))
{var ex__6181__auto__ = e11681;var statearr_11682_11689 = state_11674;(statearr_11682_11689[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11690 = state_11674;
state_11674 = G__11690;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11674){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11683 = f__6193__auto__.call(null);(statearr_11683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
);
return c__6192__auto__;
});})(G__11627_11684,ret,configType,map__11626,map__11626__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__11692_11731 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__11692_11731.done(((function (G__11692_11731,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11692_11731,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11692_11731,ret){
return (function (state_11705){var state_val_11706 = (state_11705[(1)]);if((state_val_11706 === (2)))
{var inst_11702 = (state_11705[(2)]);var inst_11703 = cljs.core.async.close_BANG_.call(null,ret);var state_11705__$1 = (function (){var statearr_11707 = state_11705;(statearr_11707[(7)] = inst_11702);
return statearr_11707;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11705__$1,inst_11703);
} else
{if((state_val_11706 === (1)))
{var inst_11695 = detail.ModelKey;var inst_11696 = clojure.string.capitalize.call(null,where);var inst_11697 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11696)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_11698 = {"modelKey":inst_11695,"moreUrl":inst_11697};var inst_11699 = [null,inst_11698];var inst_11700 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11699,null));var state_11705__$1 = state_11705;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11705__$1,(2),ret,inst_11700);
} else
{return null;
}
}
});})(c__6192__auto__,G__11692_11731,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11692_11731,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11711 = [null,null,null,null,null,null,null,null];(statearr_11711[(0)] = state_machine__6178__auto__);
(statearr_11711[(1)] = (1));
return statearr_11711;
});
var state_machine__6178__auto____1 = (function (state_11705){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11705);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11712){if((e11712 instanceof Object))
{var ex__6181__auto__ = e11712;var statearr_11713_11732 = state_11705;(statearr_11713_11732[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11705);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11733 = state_11705;
state_11705 = G__11733;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11705){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11692_11731,ret))
})();var state__6194__auto__ = (function (){var statearr_11714 = f__6193__auto__.call(null);(statearr_11714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11692_11731,ret))
);
return c__6192__auto__;
});})(G__11692_11731,ret))
);
G__11692_11731.fail(((function (G__11692_11731,ret){
return (function (p1__11691_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11692_11731,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11692_11731,ret){
return (function (state_11721){var state_val_11722 = (state_11721[(1)]);if((state_val_11722 === (2)))
{var inst_11718 = (state_11721[(2)]);var inst_11719 = cljs.core.async.close_BANG_.call(null,ret);var state_11721__$1 = (function (){var statearr_11723 = state_11721;(statearr_11723[(7)] = inst_11718);
return statearr_11723;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11721__$1,inst_11719);
} else
{if((state_val_11722 === (1)))
{var inst_11715 = [p1__11691_SHARP_,null];var inst_11716 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11715,null));var state_11721__$1 = state_11721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11721__$1,(2),ret,inst_11716);
} else
{return null;
}
}
});})(c__6192__auto__,G__11692_11731,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11692_11731,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11727 = [null,null,null,null,null,null,null,null];(statearr_11727[(0)] = state_machine__6178__auto__);
(statearr_11727[(1)] = (1));
return statearr_11727;
});
var state_machine__6178__auto____1 = (function (state_11721){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11721);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11728){if((e11728 instanceof Object))
{var ex__6181__auto__ = e11728;var statearr_11729_11734 = state_11721;(statearr_11729_11734[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11721);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11735 = state_11721;
state_11721 = G__11735;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11721){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11692_11731,ret))
})();var state__6194__auto__ = (function (){var statearr_11730 = f__6193__auto__.call(null);(statearr_11730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11692_11731,ret))
);
return c__6192__auto__;
});})(G__11692_11731,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__11736){var map__11737 = p__11736;var map__11737__$1 = ((cljs.core.seq_QMARK_.call(null,map__11737))?cljs.core.apply.call(null,cljs.core.hash_map,map__11737):map__11737);var args = map__11737__$1;var url = cljs.core.get.call(null,map__11737__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11757 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11757,ret,map__11737,map__11737__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11757,ret,map__11737,map__11737__$1,args,url){
return (function (state_11747){var state_val_11748 = (state_11747[(1)]);if((state_val_11748 === (2)))
{var inst_11744 = (state_11747[(2)]);var inst_11745 = cljs.core.async.close_BANG_.call(null,ret);var state_11747__$1 = (function (){var statearr_11749 = state_11747;(statearr_11749[(7)] = inst_11744);
return statearr_11749;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11747__$1,inst_11745);
} else
{if((state_val_11748 === (1)))
{var inst_11740 = {"url":url};var inst_11741 = [null,inst_11740];var inst_11742 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11741,null));var state_11747__$1 = state_11747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11747__$1,(2),ret,inst_11742);
} else
{return null;
}
}
});})(c__6192__auto___11757,ret,map__11737,map__11737__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___11757,ret,map__11737,map__11737__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11753 = [null,null,null,null,null,null,null,null];(statearr_11753[(0)] = state_machine__6178__auto__);
(statearr_11753[(1)] = (1));
return statearr_11753;
});
var state_machine__6178__auto____1 = (function (state_11747){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11747);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11754){if((e11754 instanceof Object))
{var ex__6181__auto__ = e11754;var statearr_11755_11758 = state_11747;(statearr_11755_11758[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11759 = state_11747;
state_11747 = G__11759;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11747){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11757,ret,map__11737,map__11737__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_11756 = f__6193__auto__.call(null);(statearr_11756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11757);
return statearr_11756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11757,ret,map__11737,map__11737__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__11760){var map__11761 = p__11760;var map__11761__$1 = ((cljs.core.seq_QMARK_.call(null,map__11761))?cljs.core.apply.call(null,cljs.core.hash_map,map__11761):map__11761);var args = map__11761__$1;var id = cljs.core.get.call(null,map__11761__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11778 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11778,ret,map__11761,map__11761__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11778,ret,map__11761,map__11761__$1,args,id){
return (function (state_11768){var state_val_11769 = (state_11768[(1)]);if((state_val_11769 === (2)))
{var inst_11765 = (state_11768[(2)]);var inst_11766 = cljs.core.async.close_BANG_.call(null,ret);var state_11768__$1 = (function (){var statearr_11770 = state_11768;(statearr_11770[(7)] = inst_11765);
return statearr_11770;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11768__$1,inst_11766);
} else
{if((state_val_11769 === (1)))
{var inst_11762 = [null,null];var inst_11763 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11762,null));var state_11768__$1 = state_11768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11768__$1,(2),ret,inst_11763);
} else
{return null;
}
}
});})(c__6192__auto___11778,ret,map__11761,map__11761__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___11778,ret,map__11761,map__11761__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11774 = [null,null,null,null,null,null,null,null];(statearr_11774[(0)] = state_machine__6178__auto__);
(statearr_11774[(1)] = (1));
return statearr_11774;
});
var state_machine__6178__auto____1 = (function (state_11768){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11768);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11775){if((e11775 instanceof Object))
{var ex__6181__auto__ = e11775;var statearr_11776_11779 = state_11768;(statearr_11776_11779[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11780 = state_11768;
state_11768 = G__11780;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11768){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11778,ret,map__11761,map__11761__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11777 = f__6193__auto__.call(null);(statearr_11777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11778);
return statearr_11777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11778,ret,map__11761,map__11761__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__11781 = cljs.core.rest.call(null,list);
var G__11782 = id;
var G__11783 = (start + (1));
list = G__11781;
id = G__11782;
start = G__11783;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__11785){var map__11786 = p__11785;var map__11786__$1 = ((cljs.core.seq_QMARK_.call(null,map__11786))?cljs.core.apply.call(null,cljs.core.hash_map,map__11786):map__11786);var args = map__11786__$1;var id = cljs.core.get.call(null,map__11786__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__11787_11836 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__11787_11836.done(((function (G__11787_11836,ret,map__11786,map__11786__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__11787_11836,ret,map__11786,map__11786__$1,args,id){
return (function (p1__11784_SHARP_){var obj11789 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__11784_SHARP_ + (1)))+".jpg"))};return obj11789;
});})(filtered,evtId,evt,G__11787_11836,ret,map__11786,map__11786__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11787_11836,ret,map__11786,map__11786__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11787_11836,ret,map__11786,map__11786__$1,args,id){
return (function (state_11817){var state_val_11818 = (state_11817[(1)]);if((state_val_11818 === (8)))
{var inst_11798 = (state_11817[(7)]);var inst_11805 = (state_11817[(2)]);var inst_11806 = (evt["Title"]);var inst_11807 = (evt["Date"]);var inst_11808 = (evt["Content"]);var inst_11809 = (evt["Form"]);var inst_11810 = {"prev_href":inst_11798,"next_href":inst_11805,"title":inst_11806,"date":inst_11807,"sideList":photos,"content":inst_11808,"form":inst_11809};var inst_11811 = [null,inst_11810];var inst_11812 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11811,null));var state_11817__$1 = state_11817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11817__$1,(2),ret,inst_11812);
} else
{if((state_val_11818 === (7)))
{var state_11817__$1 = state_11817;var statearr_11819_11837 = state_11817__$1;(statearr_11819_11837[(2)] = null);
(statearr_11819_11837[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11818 === (6)))
{var inst_11800 = cljs.core.nth.call(null,filtered,nextId);var inst_11801 = cljs.core.first.call(null,inst_11800);var inst_11802 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11801));var state_11817__$1 = state_11817;var statearr_11820_11838 = state_11817__$1;(statearr_11820_11838[(2)] = inst_11802);
(statearr_11820_11838[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11818 === (5)))
{var inst_11798 = (state_11817[(2)]);var state_11817__$1 = (function (){var statearr_11821 = state_11817;(statearr_11821[(7)] = inst_11798);
return statearr_11821;
})();if(cljs.core.truth_(nextId))
{var statearr_11822_11839 = state_11817__$1;(statearr_11822_11839[(1)] = (6));
} else
{var statearr_11823_11840 = state_11817__$1;(statearr_11823_11840[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11818 === (4)))
{var state_11817__$1 = state_11817;var statearr_11824_11841 = state_11817__$1;(statearr_11824_11841[(2)] = null);
(statearr_11824_11841[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11818 === (3)))
{var inst_11793 = cljs.core.nth.call(null,filtered,prevId);var inst_11794 = cljs.core.first.call(null,inst_11793);var inst_11795 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11794));var state_11817__$1 = state_11817;var statearr_11825_11842 = state_11817__$1;(statearr_11825_11842[(2)] = inst_11795);
(statearr_11825_11842[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11818 === (2)))
{var inst_11814 = (state_11817[(2)]);var inst_11815 = cljs.core.async.close_BANG_.call(null,ret);var state_11817__$1 = (function (){var statearr_11826 = state_11817;(statearr_11826[(8)] = inst_11814);
return statearr_11826;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11817__$1,inst_11815);
} else
{if((state_val_11818 === (1)))
{var state_11817__$1 = state_11817;if(cljs.core.truth_(prevId))
{var statearr_11827_11843 = state_11817__$1;(statearr_11827_11843[(1)] = (3));
} else
{var statearr_11828_11844 = state_11817__$1;(statearr_11828_11844[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11787_11836,ret,map__11786,map__11786__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11787_11836,ret,map__11786,map__11786__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11832 = [null,null,null,null,null,null,null,null,null];(statearr_11832[(0)] = state_machine__6178__auto__);
(statearr_11832[(1)] = (1));
return statearr_11832;
});
var state_machine__6178__auto____1 = (function (state_11817){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11817);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11833){if((e11833 instanceof Object))
{var ex__6181__auto__ = e11833;var statearr_11834_11845 = state_11817;(statearr_11834_11845[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11817);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11833;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11846 = state_11817;
state_11817 = G__11846;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11817){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11787_11836,ret,map__11786,map__11786__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11835 = f__6193__auto__.call(null);(statearr_11835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11835;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11787_11836,ret,map__11786,map__11786__$1,args,id))
);
return c__6192__auto__;
});})(G__11787_11836,ret,map__11786,map__11786__$1,args,id))
);
G__11787_11836.fail(((function (G__11787_11836,ret,map__11786,map__11786__$1,args,id){
return (function (err){return console.log(err);
});})(G__11787_11836,ret,map__11786,map__11786__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
