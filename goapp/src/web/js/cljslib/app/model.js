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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11410_SHARP_){return cljs.core._EQ_.call(null,view,p1__11410_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11411_SHARP_){return cljs.core._EQ_.call(null,view,p1__11411_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11412_SHARP_){return cljs.core._EQ_.call(null,view,p1__11412_SHARP_);
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
app.model.bottomTab0 = (function bottomTab0(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11413_SHARP_){return cljs.core._EQ_.call(null,view,p1__11413_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11414_SHARP_){return cljs.core._EQ_.call(null,view,p1__11414_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11415_SHARP_){return cljs.core._EQ_.call(null,view,p1__11415_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11416_SHARP_){return cljs.core._EQ_.call(null,view,p1__11416_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11417_SHARP_){return cljs.core._EQ_.call(null,view,p1__11417_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11418_SHARP_){return cljs.core._EQ_.call(null,view,p1__11418_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11419_SHARP_){return cljs.core._EQ_.call(null,view,p1__11419_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11420_SHARP_){return cljs.core._EQ_.call(null,view,p1__11420_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11421_SHARP_){return cljs.core._EQ_.call(null,view,p1__11421_SHARP_);
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
app.model.bottomTab3 = (function bottomTab3(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11422_SHARP_){return cljs.core._EQ_.call(null,view,p1__11422_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11423_SHARP_){return cljs.core._EQ_.call(null,view,p1__11423_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11424_SHARP_){return cljs.core._EQ_.call(null,view,p1__11424_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__11428){var vec__11429 = p__11428;var model = cljs.core.nth.call(null,vec__11429,(0),null);var detail = cljs.core.nth.call(null,vec__11429,(1),null);var G__11430 = (new Date(detail.Date));G__11430.getTime();
return G__11430;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__11433){var vec__11434 = p__11433;var model = cljs.core.nth.call(null,vec__11434,(0),null);var detail = cljs.core.nth.call(null,vec__11434,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__11437){var vec__11438 = p__11437;var model = cljs.core.nth.call(null,vec__11438,(0),null);var detail = cljs.core.nth.call(null,vec__11438,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.SearchRelative = (function SearchRelative(tags,details){return cljs.core.shuffle.call(null,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (tag){return cljs.core.filter.call(null,(function (p__11441){var vec__11442 = p__11441;var model = cljs.core.nth.call(null,vec__11442,(0),null);var detail = cljs.core.nth.call(null,vec__11442,(1),null);return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+".?")),detail.Tag);
}),details);
}),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,tags,/,/))))));
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__11490,key,p__11491){var map__11492 = p__11490;var map__11492__$1 = ((cljs.core.seq_QMARK_.call(null,map__11492))?cljs.core.apply.call(null,cljs.core.hash_map,map__11492):map__11492);var ctx = map__11492__$1;var media_type = cljs.core.get.call(null,map__11492__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__11493 = p__11491;var map__11493__$1 = ((cljs.core.seq_QMARK_.call(null,map__11493))?cljs.core.apply.call(null,cljs.core.hash_map,map__11493):map__11493);var args = map__11493__$1;var page = cljs.core.get.call(null,map__11493__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__11493__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__11494_11537 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11494_11537.done(((function (G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = (12);var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey){
return (function (p__11495){var vec__11496 = p__11495;var model = cljs.core.nth.call(null,vec__11496,(0),null);var detail = cljs.core.nth.call(null,vec__11496,(1),null);var vec__11497 = (function (){var pred__11498 = cljs.core._EQ_;var expr__11499 = media_type;if(cljs.core.truth_(pred__11498.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__11499)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(242),(363)], null);
} else
{if(cljs.core.truth_(pred__11498.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__11499)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{if(cljs.core.truth_(pred__11498.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__11499)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__11497,(0),null);var h = cljs.core.nth.call(null,vec__11497,(1),null);var obj11502 = {"visibleDate":false,"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj11502;
});})(modelCountPerPage,filtered,totalPage,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey))
;var dto = (function (){var obj11504 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj11504;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey){
return (function (state_11511){var state_val_11512 = (state_11511[(1)]);if((state_val_11512 === (2)))
{var inst_11508 = (state_11511[(2)]);var inst_11509 = cljs.core.async.close_BANG_.call(null,ret);var state_11511__$1 = (function (){var statearr_11513 = state_11511;(statearr_11513[(7)] = inst_11508);
return statearr_11513;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11511__$1,inst_11509);
} else
{if((state_val_11512 === (1)))
{var inst_11505 = [null,dto];var inst_11506 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11505,null));var state_11511__$1 = state_11511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11511__$1,(2),ret,inst_11506);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11517 = [null,null,null,null,null,null,null,null];(statearr_11517[(0)] = state_machine__6178__auto__);
(statearr_11517[(1)] = (1));
return statearr_11517;
});
var state_machine__6178__auto____1 = (function (state_11511){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11518){if((e11518 instanceof Object))
{var ex__6181__auto__ = e11518;var statearr_11519_11538 = state_11511;(statearr_11519_11538[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11539 = state_11511;
state_11511 = G__11539;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11511){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11520 = f__6193__auto__.call(null);(statearr_11520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey))
);
G__11494_11537.fail(((function (G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey){
return (function (state_11527){var state_val_11528 = (state_11527[(1)]);if((state_val_11528 === (2)))
{var inst_11524 = (state_11527[(2)]);var inst_11525 = cljs.core.async.close_BANG_.call(null,ret);var state_11527__$1 = (function (){var statearr_11529 = state_11527;(statearr_11529[(7)] = inst_11524);
return statearr_11529;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11527__$1,inst_11525);
} else
{if((state_val_11528 === (1)))
{var inst_11521 = [err,null];var inst_11522 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11521,null));var state_11527__$1 = state_11527;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11527__$1,(2),ret,inst_11522);
} else
{return null;
}
}
});})(c__6192__auto__,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11533 = [null,null,null,null,null,null,null,null];(statearr_11533[(0)] = state_machine__6178__auto__);
(statearr_11533[(1)] = (1));
return statearr_11533;
});
var state_machine__6178__auto____1 = (function (state_11527){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11527);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11534){if((e11534 instanceof Object))
{var ex__6181__auto__ = e11534;var statearr_11535_11540 = state_11527;(statearr_11535_11540[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11527);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11541 = state_11527;
state_11527 = G__11541;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11527){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11536 = f__6193__auto__.call(null);(statearr_11536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11494_11537,configType,ret,map__11492,map__11492__$1,ctx,media_type,map__11493,map__11493__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11601){var map__11602 = p__11601;var map__11602__$1 = ((cljs.core.seq_QMARK_.call(null,map__11602))?cljs.core.apply.call(null,cljs.core.hash_map,map__11602):map__11602);var args = map__11602__$1;var id = cljs.core.get.call(null,map__11602__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__11603_11660 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11603_11660.done(((function (G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var relativeDetails = cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (dir,detail,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (p__11604){var vec__11605 = p__11604;var model = cljs.core.nth.call(null,vec__11605,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11605,(1),null);return cljs.core.not_EQ_.call(null,model,id);
});})(dir,detail,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
,app.model.SearchRelative.call(null,detail.Tag,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertHeadDTO = ((function (dir,detail,relativeDetails,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (p__11606){var vec__11607 = p__11606;var key__$1 = cljs.core.nth.call(null,vec__11607,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11607,(1),null);var obj11609 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj11609;
});})(dir,detail,relativeDetails,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function iter__11610(s__11611){return (new cljs.core.LazySeq(null,((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (){var s__11611__$1 = s__11611;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11611__$1);if(temp__4126__auto__)
{var s__11611__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11611__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11611__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11613 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11612 = (0);while(true){
if((i__11612 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__11612);cljs.core.chunk_append.call(null,b__11613,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__11661 = (i__11612 + (1));
i__11612 = G__11661;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11613),iter__11610.call(null,cljs.core.chunk_rest.call(null,s__11611__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11613),null);
}
} else
{var idx = cljs.core.first.call(null,s__11611__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__11610.call(null,cljs.core.rest.call(null,s__11611__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
,null,null));
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function iter__11614(s__11615){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (){var s__11615__$1 = s__11615;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11615__$1);if(temp__4126__auto__)
{var s__11615__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11615__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11615__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11617 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11616 = (0);while(true){
if((i__11616 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__11616);cljs.core.chunk_append.call(null,b__11617,(function (){var obj11623 = {"id":url,"url":ServeFn.call(null,url)};return obj11623;
})());
{
var G__11662 = (i__11616 + (1));
i__11616 = G__11662;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11617),iter__11614.call(null,cljs.core.chunk_rest.call(null,s__11615__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11617),null);
}
} else
{var url = cljs.core.first.call(null,s__11615__$2);return cljs.core.cons.call(null,(function (){var obj11625 = {"id":url,"url":ServeFn.call(null,url)};return obj11625;
})(),iter__11614.call(null,cljs.core.rest.call(null,s__11615__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
,null,null));
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
;var dto = (function (){var obj11627 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab3":app.model.bottomTab3.call(null,name),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"bottomTab0":app.model.bottomTab0.call(null,name),"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,relativeDetails)),"date":detail.Date,"protalk":detail.Comment};return obj11627;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (state_11634){var state_val_11635 = (state_11634[(1)]);if((state_val_11635 === (2)))
{var inst_11631 = (state_11634[(2)]);var inst_11632 = cljs.core.async.close_BANG_.call(null,ret);var state_11634__$1 = (function (){var statearr_11636 = state_11634;(statearr_11636[(7)] = inst_11631);
return statearr_11636;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11634__$1,inst_11632);
} else
{if((state_val_11635 === (1)))
{var inst_11628 = [null,dto];var inst_11629 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11628,null));var state_11634__$1 = state_11634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11634__$1,(2),ret,inst_11629);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11640 = [null,null,null,null,null,null,null,null];(statearr_11640[(0)] = state_machine__6178__auto__);
(statearr_11640[(1)] = (1));
return statearr_11640;
});
var state_machine__6178__auto____1 = (function (state_11634){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11634);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11641){if((e11641 instanceof Object))
{var ex__6181__auto__ = e11641;var statearr_11642_11663 = state_11634;(statearr_11642_11663[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11634);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11664 = state_11634;
state_11634 = G__11664;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11634){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11643 = f__6193__auto__.call(null);(statearr_11643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
);
return c__6192__auto__;
});})(G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
);
G__11603_11660.fail(((function (G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function (state_11650){var state_val_11651 = (state_11650[(1)]);if((state_val_11651 === (2)))
{var inst_11647 = (state_11650[(2)]);var inst_11648 = cljs.core.async.close_BANG_.call(null,ret);var state_11650__$1 = (function (){var statearr_11652 = state_11650;(statearr_11652[(7)] = inst_11647);
return statearr_11652;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11650__$1,inst_11648);
} else
{if((state_val_11651 === (1)))
{var inst_11644 = [err,null];var inst_11645 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11644,null));var state_11650__$1 = state_11650;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11650__$1,(2),ret,inst_11645);
} else
{return null;
}
}
});})(c__6192__auto__,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11656 = [null,null,null,null,null,null,null,null];(statearr_11656[(0)] = state_machine__6178__auto__);
(statearr_11656[(1)] = (1));
return statearr_11656;
});
var state_machine__6178__auto____1 = (function (state_11650){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11650);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11657){if((e11657 instanceof Object))
{var ex__6181__auto__ = e11657;var statearr_11658_11665 = state_11650;(statearr_11658_11665[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11650);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11657;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11666 = state_11650;
state_11650 = G__11666;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11650){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11659 = f__6193__auto__.call(null);(statearr_11659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
);
return c__6192__auto__;
});})(G__11603_11660,ret,configType,map__11602,map__11602__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__11668_11707 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__11668_11707.done(((function (G__11668_11707,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11668_11707,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11668_11707,ret){
return (function (state_11681){var state_val_11682 = (state_11681[(1)]);if((state_val_11682 === (2)))
{var inst_11678 = (state_11681[(2)]);var inst_11679 = cljs.core.async.close_BANG_.call(null,ret);var state_11681__$1 = (function (){var statearr_11683 = state_11681;(statearr_11683[(7)] = inst_11678);
return statearr_11683;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11681__$1,inst_11679);
} else
{if((state_val_11682 === (1)))
{var inst_11671 = detail.ModelKey;var inst_11672 = clojure.string.capitalize.call(null,where);var inst_11673 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11672)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_11674 = {"modelKey":inst_11671,"moreUrl":inst_11673};var inst_11675 = [null,inst_11674];var inst_11676 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11675,null));var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11681__$1,(2),ret,inst_11676);
} else
{return null;
}
}
});})(c__6192__auto__,G__11668_11707,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11668_11707,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11687 = [null,null,null,null,null,null,null,null];(statearr_11687[(0)] = state_machine__6178__auto__);
(statearr_11687[(1)] = (1));
return statearr_11687;
});
var state_machine__6178__auto____1 = (function (state_11681){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11688){if((e11688 instanceof Object))
{var ex__6181__auto__ = e11688;var statearr_11689_11708 = state_11681;(statearr_11689_11708[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11709 = state_11681;
state_11681 = G__11709;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11681){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11668_11707,ret))
})();var state__6194__auto__ = (function (){var statearr_11690 = f__6193__auto__.call(null);(statearr_11690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11668_11707,ret))
);
return c__6192__auto__;
});})(G__11668_11707,ret))
);
G__11668_11707.fail(((function (G__11668_11707,ret){
return (function (p1__11667_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11668_11707,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11668_11707,ret){
return (function (state_11697){var state_val_11698 = (state_11697[(1)]);if((state_val_11698 === (2)))
{var inst_11694 = (state_11697[(2)]);var inst_11695 = cljs.core.async.close_BANG_.call(null,ret);var state_11697__$1 = (function (){var statearr_11699 = state_11697;(statearr_11699[(7)] = inst_11694);
return statearr_11699;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11697__$1,inst_11695);
} else
{if((state_val_11698 === (1)))
{var inst_11691 = [p1__11667_SHARP_,null];var inst_11692 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11691,null));var state_11697__$1 = state_11697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11697__$1,(2),ret,inst_11692);
} else
{return null;
}
}
});})(c__6192__auto__,G__11668_11707,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11668_11707,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11703 = [null,null,null,null,null,null,null,null];(statearr_11703[(0)] = state_machine__6178__auto__);
(statearr_11703[(1)] = (1));
return statearr_11703;
});
var state_machine__6178__auto____1 = (function (state_11697){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11697);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11704){if((e11704 instanceof Object))
{var ex__6181__auto__ = e11704;var statearr_11705_11710 = state_11697;(statearr_11705_11710[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11697);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11711 = state_11697;
state_11697 = G__11711;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11697){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11668_11707,ret))
})();var state__6194__auto__ = (function (){var statearr_11706 = f__6193__auto__.call(null);(statearr_11706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11668_11707,ret))
);
return c__6192__auto__;
});})(G__11668_11707,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__11712){var map__11713 = p__11712;var map__11713__$1 = ((cljs.core.seq_QMARK_.call(null,map__11713))?cljs.core.apply.call(null,cljs.core.hash_map,map__11713):map__11713);var args = map__11713__$1;var url = cljs.core.get.call(null,map__11713__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11733 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11733,ret,map__11713,map__11713__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11733,ret,map__11713,map__11713__$1,args,url){
return (function (state_11723){var state_val_11724 = (state_11723[(1)]);if((state_val_11724 === (2)))
{var inst_11720 = (state_11723[(2)]);var inst_11721 = cljs.core.async.close_BANG_.call(null,ret);var state_11723__$1 = (function (){var statearr_11725 = state_11723;(statearr_11725[(7)] = inst_11720);
return statearr_11725;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11723__$1,inst_11721);
} else
{if((state_val_11724 === (1)))
{var inst_11716 = {"url":url};var inst_11717 = [null,inst_11716];var inst_11718 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11717,null));var state_11723__$1 = state_11723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11723__$1,(2),ret,inst_11718);
} else
{return null;
}
}
});})(c__6192__auto___11733,ret,map__11713,map__11713__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___11733,ret,map__11713,map__11713__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11729 = [null,null,null,null,null,null,null,null];(statearr_11729[(0)] = state_machine__6178__auto__);
(statearr_11729[(1)] = (1));
return statearr_11729;
});
var state_machine__6178__auto____1 = (function (state_11723){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11723);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11730){if((e11730 instanceof Object))
{var ex__6181__auto__ = e11730;var statearr_11731_11734 = state_11723;(statearr_11731_11734[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11735 = state_11723;
state_11723 = G__11735;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11723){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11733,ret,map__11713,map__11713__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_11732 = f__6193__auto__.call(null);(statearr_11732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11733);
return statearr_11732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11733,ret,map__11713,map__11713__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__11736){var map__11737 = p__11736;var map__11737__$1 = ((cljs.core.seq_QMARK_.call(null,map__11737))?cljs.core.apply.call(null,cljs.core.hash_map,map__11737):map__11737);var args = map__11737__$1;var id = cljs.core.get.call(null,map__11737__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11754 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11754,ret,map__11737,map__11737__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11754,ret,map__11737,map__11737__$1,args,id){
return (function (state_11744){var state_val_11745 = (state_11744[(1)]);if((state_val_11745 === (2)))
{var inst_11741 = (state_11744[(2)]);var inst_11742 = cljs.core.async.close_BANG_.call(null,ret);var state_11744__$1 = (function (){var statearr_11746 = state_11744;(statearr_11746[(7)] = inst_11741);
return statearr_11746;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11744__$1,inst_11742);
} else
{if((state_val_11745 === (1)))
{var inst_11738 = [null,null];var inst_11739 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11738,null));var state_11744__$1 = state_11744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11744__$1,(2),ret,inst_11739);
} else
{return null;
}
}
});})(c__6192__auto___11754,ret,map__11737,map__11737__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___11754,ret,map__11737,map__11737__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11750 = [null,null,null,null,null,null,null,null];(statearr_11750[(0)] = state_machine__6178__auto__);
(statearr_11750[(1)] = (1));
return statearr_11750;
});
var state_machine__6178__auto____1 = (function (state_11744){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11744);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11751){if((e11751 instanceof Object))
{var ex__6181__auto__ = e11751;var statearr_11752_11755 = state_11744;(statearr_11752_11755[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11756 = state_11744;
state_11744 = G__11756;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11744){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11754,ret,map__11737,map__11737__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11753 = f__6193__auto__.call(null);(statearr_11753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11754);
return statearr_11753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11754,ret,map__11737,map__11737__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__11757 = cljs.core.rest.call(null,list);
var G__11758 = id;
var G__11759 = (start + (1));
list = G__11757;
id = G__11758;
start = G__11759;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__11761){var map__11762 = p__11761;var map__11762__$1 = ((cljs.core.seq_QMARK_.call(null,map__11762))?cljs.core.apply.call(null,cljs.core.hash_map,map__11762):map__11762);var args = map__11762__$1;var id = cljs.core.get.call(null,map__11762__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__11763_11812 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__11763_11812.done(((function (G__11763_11812,ret,map__11762,map__11762__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__11763_11812,ret,map__11762,map__11762__$1,args,id){
return (function (p1__11760_SHARP_){var obj11765 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__11760_SHARP_ + (1)))+".jpg"))};return obj11765;
});})(filtered,evtId,evt,G__11763_11812,ret,map__11762,map__11762__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11763_11812,ret,map__11762,map__11762__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11763_11812,ret,map__11762,map__11762__$1,args,id){
return (function (state_11793){var state_val_11794 = (state_11793[(1)]);if((state_val_11794 === (8)))
{var inst_11774 = (state_11793[(7)]);var inst_11781 = (state_11793[(2)]);var inst_11782 = (evt["Title"]);var inst_11783 = (evt["Date"]);var inst_11784 = (evt["Content"]);var inst_11785 = (evt["Form"]);var inst_11786 = {"prev_href":inst_11774,"next_href":inst_11781,"title":inst_11782,"date":inst_11783,"sideList":photos,"content":inst_11784,"form":inst_11785};var inst_11787 = [null,inst_11786];var inst_11788 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11787,null));var state_11793__$1 = state_11793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11793__$1,(2),ret,inst_11788);
} else
{if((state_val_11794 === (7)))
{var state_11793__$1 = state_11793;var statearr_11795_11813 = state_11793__$1;(statearr_11795_11813[(2)] = null);
(statearr_11795_11813[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11794 === (6)))
{var inst_11776 = cljs.core.nth.call(null,filtered,nextId);var inst_11777 = cljs.core.first.call(null,inst_11776);var inst_11778 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11777));var state_11793__$1 = state_11793;var statearr_11796_11814 = state_11793__$1;(statearr_11796_11814[(2)] = inst_11778);
(statearr_11796_11814[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11794 === (5)))
{var inst_11774 = (state_11793[(2)]);var state_11793__$1 = (function (){var statearr_11797 = state_11793;(statearr_11797[(7)] = inst_11774);
return statearr_11797;
})();if(cljs.core.truth_(nextId))
{var statearr_11798_11815 = state_11793__$1;(statearr_11798_11815[(1)] = (6));
} else
{var statearr_11799_11816 = state_11793__$1;(statearr_11799_11816[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11794 === (4)))
{var state_11793__$1 = state_11793;var statearr_11800_11817 = state_11793__$1;(statearr_11800_11817[(2)] = null);
(statearr_11800_11817[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11794 === (3)))
{var inst_11769 = cljs.core.nth.call(null,filtered,prevId);var inst_11770 = cljs.core.first.call(null,inst_11769);var inst_11771 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11770));var state_11793__$1 = state_11793;var statearr_11801_11818 = state_11793__$1;(statearr_11801_11818[(2)] = inst_11771);
(statearr_11801_11818[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11794 === (2)))
{var inst_11790 = (state_11793[(2)]);var inst_11791 = cljs.core.async.close_BANG_.call(null,ret);var state_11793__$1 = (function (){var statearr_11802 = state_11793;(statearr_11802[(8)] = inst_11790);
return statearr_11802;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11793__$1,inst_11791);
} else
{if((state_val_11794 === (1)))
{var state_11793__$1 = state_11793;if(cljs.core.truth_(prevId))
{var statearr_11803_11819 = state_11793__$1;(statearr_11803_11819[(1)] = (3));
} else
{var statearr_11804_11820 = state_11793__$1;(statearr_11804_11820[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11763_11812,ret,map__11762,map__11762__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11763_11812,ret,map__11762,map__11762__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11808 = [null,null,null,null,null,null,null,null,null];(statearr_11808[(0)] = state_machine__6178__auto__);
(statearr_11808[(1)] = (1));
return statearr_11808;
});
var state_machine__6178__auto____1 = (function (state_11793){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11793);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11809){if((e11809 instanceof Object))
{var ex__6181__auto__ = e11809;var statearr_11810_11821 = state_11793;(statearr_11810_11821[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11822 = state_11793;
state_11793 = G__11822;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11793){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11763_11812,ret,map__11762,map__11762__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11811 = f__6193__auto__.call(null);(statearr_11811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11763_11812,ret,map__11762,map__11762__$1,args,id))
);
return c__6192__auto__;
});})(G__11763_11812,ret,map__11762,map__11762__$1,args,id))
);
G__11763_11812.fail(((function (G__11763_11812,ret,map__11762,map__11762__$1,args,id){
return (function (err){return console.log(err);
});})(G__11763_11812,ret,map__11762,map__11762__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
