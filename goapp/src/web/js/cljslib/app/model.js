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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16423_SHARP_){return cljs.core._EQ_.call(null,view,p1__16423_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16424_SHARP_){return cljs.core._EQ_.call(null,view,p1__16424_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16425_SHARP_){return cljs.core._EQ_.call(null,view,p1__16425_SHARP_);
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
app.model.bottomTab0 = (function bottomTab0(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16426_SHARP_){return cljs.core._EQ_.call(null,view,p1__16426_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16427_SHARP_){return cljs.core._EQ_.call(null,view,p1__16427_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16428_SHARP_){return cljs.core._EQ_.call(null,view,p1__16428_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16429_SHARP_){return cljs.core._EQ_.call(null,view,p1__16429_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16430_SHARP_){return cljs.core._EQ_.call(null,view,p1__16430_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16431_SHARP_){return cljs.core._EQ_.call(null,view,p1__16431_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16432_SHARP_){return cljs.core._EQ_.call(null,view,p1__16432_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16433_SHARP_){return cljs.core._EQ_.call(null,view,p1__16433_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16434_SHARP_){return cljs.core._EQ_.call(null,view,p1__16434_SHARP_);
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
app.model.bottomTab3 = (function bottomTab3(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16435_SHARP_){return cljs.core._EQ_.call(null,view,p1__16435_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16436_SHARP_){return cljs.core._EQ_.call(null,view,p1__16436_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16437_SHARP_){return cljs.core._EQ_.call(null,view,p1__16437_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__16441){var vec__16442 = p__16441;var model = cljs.core.nth.call(null,vec__16442,(0),null);var detail = cljs.core.nth.call(null,vec__16442,(1),null);var G__16443 = (new Date(detail.Date));G__16443.getTime();
return G__16443;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__16446){var vec__16447 = p__16446;var model = cljs.core.nth.call(null,vec__16447,(0),null);var detail = cljs.core.nth.call(null,vec__16447,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__16450){var vec__16451 = p__16450;var model = cljs.core.nth.call(null,vec__16451,(0),null);var detail = cljs.core.nth.call(null,vec__16451,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.SearchRelative = (function SearchRelative(tags,details){return cljs.core.shuffle.call(null,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (tag){return cljs.core.filter.call(null,(function (p__16454){var vec__16455 = p__16454;var model = cljs.core.nth.call(null,vec__16455,(0),null);var detail = cljs.core.nth.call(null,vec__16455,(1),null);return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+".?")),detail.Tag);
}),details);
}),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,tags,/,/))))));
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__16503,key,p__16504){var map__16505 = p__16503;var map__16505__$1 = ((cljs.core.seq_QMARK_.call(null,map__16505))?cljs.core.apply.call(null,cljs.core.hash_map,map__16505):map__16505);var ctx = map__16505__$1;var media_type = cljs.core.get.call(null,map__16505__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__16506 = p__16504;var map__16506__$1 = ((cljs.core.seq_QMARK_.call(null,map__16506))?cljs.core.apply.call(null,cljs.core.hash_map,map__16506):map__16506);var args = map__16506__$1;var page = cljs.core.get.call(null,map__16506__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__16506__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__16507_16550 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__16507_16550.done(((function (G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = (12);var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey){
return (function (p__16508){var vec__16509 = p__16508;var model = cljs.core.nth.call(null,vec__16509,(0),null);var detail = cljs.core.nth.call(null,vec__16509,(1),null);var vec__16510 = (function (){var pred__16511 = cljs.core._EQ_;var expr__16512 = media_type;if(cljs.core.truth_(pred__16511.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__16512)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(600)], null);
} else
{if(cljs.core.truth_(pred__16511.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__16512)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(450)], null);
} else
{if(cljs.core.truth_(pred__16511.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__16512)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(450)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(450)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__16510,(0),null);var h = cljs.core.nth.call(null,vec__16510,(1),null);var obj16515 = {"visibleDate":false,"brand":detail.Brand,"signUrl":(cljs.core.truth_(detail.Sign)?app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/sign.png")):null),"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj16515;
});})(modelCountPerPage,filtered,totalPage,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey))
;var dto = (function (){var obj16517 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj16517;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey){
return (function (state_16524){var state_val_16525 = (state_16524[(1)]);if((state_val_16525 === (2)))
{var inst_16521 = (state_16524[(2)]);var inst_16522 = cljs.core.async.close_BANG_.call(null,ret);var state_16524__$1 = (function (){var statearr_16526 = state_16524;(statearr_16526[(7)] = inst_16521);
return statearr_16526;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16524__$1,inst_16522);
} else
{if((state_val_16525 === (1)))
{var inst_16518 = [null,dto];var inst_16519 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16518,null));var state_16524__$1 = state_16524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16524__$1,(2),ret,inst_16519);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16530 = [null,null,null,null,null,null,null,null];(statearr_16530[(0)] = state_machine__6178__auto__);
(statearr_16530[(1)] = (1));
return statearr_16530;
});
var state_machine__6178__auto____1 = (function (state_16524){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16524);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16531){if((e16531 instanceof Object))
{var ex__6181__auto__ = e16531;var statearr_16532_16551 = state_16524;(statearr_16532_16551[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16524);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16552 = state_16524;
state_16524 = G__16552;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16524){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_16533 = f__6193__auto__.call(null);(statearr_16533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey))
);
G__16507_16550.fail(((function (G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey){
return (function (err){console.log("package\u88E1\u53EF\u80FD\u6709\u4E0D\u8A72\u5B58\u5728\u7684\u6A94\u6848(ex. zip, ...)\uFF0C\u8ACB\u6AA2\u67E5\uFF01\uFF01");
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey){
return (function (state_16540){var state_val_16541 = (state_16540[(1)]);if((state_val_16541 === (2)))
{var inst_16537 = (state_16540[(2)]);var inst_16538 = cljs.core.async.close_BANG_.call(null,ret);var state_16540__$1 = (function (){var statearr_16542 = state_16540;(statearr_16542[(7)] = inst_16537);
return statearr_16542;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16540__$1,inst_16538);
} else
{if((state_val_16541 === (1)))
{var inst_16534 = [err,null];var inst_16535 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16534,null));var state_16540__$1 = state_16540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16540__$1,(2),ret,inst_16535);
} else
{return null;
}
}
});})(c__6192__auto__,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16546 = [null,null,null,null,null,null,null,null];(statearr_16546[(0)] = state_machine__6178__auto__);
(statearr_16546[(1)] = (1));
return statearr_16546;
});
var state_machine__6178__auto____1 = (function (state_16540){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16547){if((e16547 instanceof Object))
{var ex__6181__auto__ = e16547;var statearr_16548_16553 = state_16540;(statearr_16548_16553[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16547;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16554 = state_16540;
state_16540 = G__16554;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16540){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_16549 = f__6193__auto__.call(null);(statearr_16549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__16507_16550,configType,ret,map__16505,map__16505__$1,ctx,media_type,map__16506,map__16506__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__16614){var map__16615 = p__16614;var map__16615__$1 = ((cljs.core.seq_QMARK_.call(null,map__16615))?cljs.core.apply.call(null,cljs.core.hash_map,map__16615):map__16615);var args = map__16615__$1;var id = cljs.core.get.call(null,map__16615__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__16616_16673 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__16616_16673.done(((function (G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var relativeDetails = cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (dir,detail,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (p__16617){var vec__16618 = p__16617;var model = cljs.core.nth.call(null,vec__16618,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__16618,(1),null);return cljs.core.not_EQ_.call(null,model,id);
});})(dir,detail,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
,app.model.SearchRelative.call(null,detail.Tag,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertHeadDTO = ((function (dir,detail,relativeDetails,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (p__16619){var vec__16620 = p__16619;var key__$1 = cljs.core.nth.call(null,vec__16620,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__16620,(1),null);var obj16622 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj16622;
});})(dir,detail,relativeDetails,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function iter__16623(s__16624){return (new cljs.core.LazySeq(null,((function (dir,detail,relativeDetails,ConvertHeadDTO,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (){var s__16624__$1 = s__16624;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16624__$1);if(temp__4126__auto__)
{var s__16624__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16624__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16624__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16626 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16625 = (0);while(true){
if((i__16625 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__16625);cljs.core.chunk_append.call(null,b__16626,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__16674 = (i__16625 + (1));
i__16625 = G__16674;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16626),iter__16623.call(null,cljs.core.chunk_rest.call(null,s__16624__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16626),null);
}
} else
{var idx = cljs.core.first.call(null,s__16624__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__16623.call(null,cljs.core.rest.call(null,s__16624__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
,null,null));
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function iter__16627(s__16628){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (){var s__16628__$1 = s__16628;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16628__$1);if(temp__4126__auto__)
{var s__16628__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16628__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16628__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16630 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16629 = (0);while(true){
if((i__16629 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__16629);cljs.core.chunk_append.call(null,b__16630,(function (){var obj16636 = {"id":url,"url":ServeFn.call(null,url)};return obj16636;
})());
{
var G__16675 = (i__16629 + (1));
i__16629 = G__16675;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16630),iter__16627.call(null,cljs.core.chunk_rest.call(null,s__16628__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16630),null);
}
} else
{var url = cljs.core.first.call(null,s__16628__$2);return cljs.core.cons.call(null,(function (){var obj16638 = {"id":url,"url":ServeFn.call(null,url)};return obj16638;
})(),iter__16627.call(null,cljs.core.rest.call(null,s__16628__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
,null,null));
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
;var dto = (function (){var obj16640 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"signUrl":(cljs.core.truth_(detail.Sign)?app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/sign.png")):null),"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab3":app.model.bottomTab3.call(null,name),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"bottomTab0":app.model.bottomTab0.call(null,name),"modelDetail":detail.Description,"visibleFullscreen":(cljs.core.truth_(mobileAndTabletcheck())?true:detail.Fullscreen),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,relativeDetails)),"date":detail.Date,"protalk":detail.Comment};return obj16640;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (state_16647){var state_val_16648 = (state_16647[(1)]);if((state_val_16648 === (2)))
{var inst_16644 = (state_16647[(2)]);var inst_16645 = cljs.core.async.close_BANG_.call(null,ret);var state_16647__$1 = (function (){var statearr_16649 = state_16647;(statearr_16649[(7)] = inst_16644);
return statearr_16649;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16647__$1,inst_16645);
} else
{if((state_val_16648 === (1)))
{var inst_16641 = [null,dto];var inst_16642 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16641,null));var state_16647__$1 = state_16647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16647__$1,(2),ret,inst_16642);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16653 = [null,null,null,null,null,null,null,null];(statearr_16653[(0)] = state_machine__6178__auto__);
(statearr_16653[(1)] = (1));
return statearr_16653;
});
var state_machine__6178__auto____1 = (function (state_16647){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16647);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16654){if((e16654 instanceof Object))
{var ex__6181__auto__ = e16654;var statearr_16655_16676 = state_16647;(statearr_16655_16676[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16647);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16677 = state_16647;
state_16647 = G__16677;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16647){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16656 = f__6193__auto__.call(null);(statearr_16656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
);
return c__6192__auto__;
});})(G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
);
G__16616_16673.fail(((function (G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function (state_16663){var state_val_16664 = (state_16663[(1)]);if((state_val_16664 === (2)))
{var inst_16660 = (state_16663[(2)]);var inst_16661 = cljs.core.async.close_BANG_.call(null,ret);var state_16663__$1 = (function (){var statearr_16665 = state_16663;(statearr_16665[(7)] = inst_16660);
return statearr_16665;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16663__$1,inst_16661);
} else
{if((state_val_16664 === (1)))
{var inst_16657 = [err,null];var inst_16658 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16657,null));var state_16663__$1 = state_16663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16663__$1,(2),ret,inst_16658);
} else
{return null;
}
}
});})(c__6192__auto__,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16669 = [null,null,null,null,null,null,null,null];(statearr_16669[(0)] = state_machine__6178__auto__);
(statearr_16669[(1)] = (1));
return statearr_16669;
});
var state_machine__6178__auto____1 = (function (state_16663){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16663);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16670){if((e16670 instanceof Object))
{var ex__6181__auto__ = e16670;var statearr_16671_16678 = state_16663;(statearr_16671_16678[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16663);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16679 = state_16663;
state_16663 = G__16679;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16663){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16672 = f__6193__auto__.call(null);(statearr_16672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
);
return c__6192__auto__;
});})(G__16616_16673,ret,configType,map__16615,map__16615__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__16681_16720 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__16681_16720.done(((function (G__16681_16720,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16681_16720,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16681_16720,ret){
return (function (state_16694){var state_val_16695 = (state_16694[(1)]);if((state_val_16695 === (2)))
{var inst_16691 = (state_16694[(2)]);var inst_16692 = cljs.core.async.close_BANG_.call(null,ret);var state_16694__$1 = (function (){var statearr_16696 = state_16694;(statearr_16696[(7)] = inst_16691);
return statearr_16696;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16694__$1,inst_16692);
} else
{if((state_val_16695 === (1)))
{var inst_16684 = detail.ModelKey;var inst_16685 = clojure.string.capitalize.call(null,where);var inst_16686 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16685)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_16687 = {"modelKey":inst_16684,"moreUrl":inst_16686};var inst_16688 = [null,inst_16687];var inst_16689 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16688,null));var state_16694__$1 = state_16694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16694__$1,(2),ret,inst_16689);
} else
{return null;
}
}
});})(c__6192__auto__,G__16681_16720,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16681_16720,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16700 = [null,null,null,null,null,null,null,null];(statearr_16700[(0)] = state_machine__6178__auto__);
(statearr_16700[(1)] = (1));
return statearr_16700;
});
var state_machine__6178__auto____1 = (function (state_16694){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16694);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16701){if((e16701 instanceof Object))
{var ex__6181__auto__ = e16701;var statearr_16702_16721 = state_16694;(statearr_16702_16721[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16694);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16722 = state_16694;
state_16694 = G__16722;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16694){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16681_16720,ret))
})();var state__6194__auto__ = (function (){var statearr_16703 = f__6193__auto__.call(null);(statearr_16703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16681_16720,ret))
);
return c__6192__auto__;
});})(G__16681_16720,ret))
);
G__16681_16720.fail(((function (G__16681_16720,ret){
return (function (p1__16680_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16681_16720,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16681_16720,ret){
return (function (state_16710){var state_val_16711 = (state_16710[(1)]);if((state_val_16711 === (2)))
{var inst_16707 = (state_16710[(2)]);var inst_16708 = cljs.core.async.close_BANG_.call(null,ret);var state_16710__$1 = (function (){var statearr_16712 = state_16710;(statearr_16712[(7)] = inst_16707);
return statearr_16712;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16710__$1,inst_16708);
} else
{if((state_val_16711 === (1)))
{var inst_16704 = [p1__16680_SHARP_,null];var inst_16705 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16704,null));var state_16710__$1 = state_16710;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16710__$1,(2),ret,inst_16705);
} else
{return null;
}
}
});})(c__6192__auto__,G__16681_16720,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16681_16720,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16716 = [null,null,null,null,null,null,null,null];(statearr_16716[(0)] = state_machine__6178__auto__);
(statearr_16716[(1)] = (1));
return statearr_16716;
});
var state_machine__6178__auto____1 = (function (state_16710){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16710);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16717){if((e16717 instanceof Object))
{var ex__6181__auto__ = e16717;var statearr_16718_16723 = state_16710;(statearr_16718_16723[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16710);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16724 = state_16710;
state_16710 = G__16724;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16710){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16681_16720,ret))
})();var state__6194__auto__ = (function (){var statearr_16719 = f__6193__auto__.call(null);(statearr_16719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16681_16720,ret))
);
return c__6192__auto__;
});})(G__16681_16720,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__16725){var map__16726 = p__16725;var map__16726__$1 = ((cljs.core.seq_QMARK_.call(null,map__16726))?cljs.core.apply.call(null,cljs.core.hash_map,map__16726):map__16726);var args = map__16726__$1;var url = cljs.core.get.call(null,map__16726__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___16746 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___16746,ret,map__16726,map__16726__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___16746,ret,map__16726,map__16726__$1,args,url){
return (function (state_16736){var state_val_16737 = (state_16736[(1)]);if((state_val_16737 === (2)))
{var inst_16733 = (state_16736[(2)]);var inst_16734 = cljs.core.async.close_BANG_.call(null,ret);var state_16736__$1 = (function (){var statearr_16738 = state_16736;(statearr_16738[(7)] = inst_16733);
return statearr_16738;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16736__$1,inst_16734);
} else
{if((state_val_16737 === (1)))
{var inst_16729 = {"url":url};var inst_16730 = [null,inst_16729];var inst_16731 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16730,null));var state_16736__$1 = state_16736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16736__$1,(2),ret,inst_16731);
} else
{return null;
}
}
});})(c__6192__auto___16746,ret,map__16726,map__16726__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___16746,ret,map__16726,map__16726__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16742 = [null,null,null,null,null,null,null,null];(statearr_16742[(0)] = state_machine__6178__auto__);
(statearr_16742[(1)] = (1));
return statearr_16742;
});
var state_machine__6178__auto____1 = (function (state_16736){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16736);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16743){if((e16743 instanceof Object))
{var ex__6181__auto__ = e16743;var statearr_16744_16747 = state_16736;(statearr_16744_16747[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16736);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16748 = state_16736;
state_16736 = G__16748;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16736){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___16746,ret,map__16726,map__16726__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_16745 = f__6193__auto__.call(null);(statearr_16745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___16746);
return statearr_16745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___16746,ret,map__16726,map__16726__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__16749){var map__16750 = p__16749;var map__16750__$1 = ((cljs.core.seq_QMARK_.call(null,map__16750))?cljs.core.apply.call(null,cljs.core.hash_map,map__16750):map__16750);var args = map__16750__$1;var id = cljs.core.get.call(null,map__16750__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___16767 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___16767,ret,map__16750,map__16750__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___16767,ret,map__16750,map__16750__$1,args,id){
return (function (state_16757){var state_val_16758 = (state_16757[(1)]);if((state_val_16758 === (2)))
{var inst_16754 = (state_16757[(2)]);var inst_16755 = cljs.core.async.close_BANG_.call(null,ret);var state_16757__$1 = (function (){var statearr_16759 = state_16757;(statearr_16759[(7)] = inst_16754);
return statearr_16759;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16757__$1,inst_16755);
} else
{if((state_val_16758 === (1)))
{var inst_16751 = [null,null];var inst_16752 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16751,null));var state_16757__$1 = state_16757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16757__$1,(2),ret,inst_16752);
} else
{return null;
}
}
});})(c__6192__auto___16767,ret,map__16750,map__16750__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___16767,ret,map__16750,map__16750__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16763 = [null,null,null,null,null,null,null,null];(statearr_16763[(0)] = state_machine__6178__auto__);
(statearr_16763[(1)] = (1));
return statearr_16763;
});
var state_machine__6178__auto____1 = (function (state_16757){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16757);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16764){if((e16764 instanceof Object))
{var ex__6181__auto__ = e16764;var statearr_16765_16768 = state_16757;(statearr_16765_16768[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16769 = state_16757;
state_16757 = G__16769;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16757){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___16767,ret,map__16750,map__16750__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16766 = f__6193__auto__.call(null);(statearr_16766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___16767);
return statearr_16766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___16767,ret,map__16750,map__16750__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__16770 = cljs.core.rest.call(null,list);
var G__16771 = id;
var G__16772 = (start + (1));
list = G__16770;
id = G__16771;
start = G__16772;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__16774){var map__16775 = p__16774;var map__16775__$1 = ((cljs.core.seq_QMARK_.call(null,map__16775))?cljs.core.apply.call(null,cljs.core.hash_map,map__16775):map__16775);var args = map__16775__$1;var id = cljs.core.get.call(null,map__16775__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__16776_16825 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__16776_16825.done(((function (G__16776_16825,ret,map__16775,map__16775__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__16776_16825,ret,map__16775,map__16775__$1,args,id){
return (function (p1__16773_SHARP_){var obj16778 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__16773_SHARP_ + (1)))+".jpg"))};return obj16778;
});})(filtered,evtId,evt,G__16776_16825,ret,map__16775,map__16775__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16776_16825,ret,map__16775,map__16775__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16776_16825,ret,map__16775,map__16775__$1,args,id){
return (function (state_16806){var state_val_16807 = (state_16806[(1)]);if((state_val_16807 === (8)))
{var inst_16787 = (state_16806[(7)]);var inst_16794 = (state_16806[(2)]);var inst_16795 = (evt["Title"]);var inst_16796 = (evt["Date"]);var inst_16797 = (evt["Content"]);var inst_16798 = (evt["Form"]);var inst_16799 = {"prev_href":inst_16787,"next_href":inst_16794,"title":inst_16795,"date":inst_16796,"sideList":photos,"content":inst_16797,"form":inst_16798};var inst_16800 = [null,inst_16799];var inst_16801 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16800,null));var state_16806__$1 = state_16806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16806__$1,(2),ret,inst_16801);
} else
{if((state_val_16807 === (7)))
{var state_16806__$1 = state_16806;var statearr_16808_16826 = state_16806__$1;(statearr_16808_16826[(2)] = null);
(statearr_16808_16826[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16807 === (6)))
{var inst_16789 = cljs.core.nth.call(null,filtered,nextId);var inst_16790 = cljs.core.first.call(null,inst_16789);var inst_16791 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16790));var state_16806__$1 = state_16806;var statearr_16809_16827 = state_16806__$1;(statearr_16809_16827[(2)] = inst_16791);
(statearr_16809_16827[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16807 === (5)))
{var inst_16787 = (state_16806[(2)]);var state_16806__$1 = (function (){var statearr_16810 = state_16806;(statearr_16810[(7)] = inst_16787);
return statearr_16810;
})();if(cljs.core.truth_(nextId))
{var statearr_16811_16828 = state_16806__$1;(statearr_16811_16828[(1)] = (6));
} else
{var statearr_16812_16829 = state_16806__$1;(statearr_16812_16829[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16807 === (4)))
{var state_16806__$1 = state_16806;var statearr_16813_16830 = state_16806__$1;(statearr_16813_16830[(2)] = null);
(statearr_16813_16830[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16807 === (3)))
{var inst_16782 = cljs.core.nth.call(null,filtered,prevId);var inst_16783 = cljs.core.first.call(null,inst_16782);var inst_16784 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16783));var state_16806__$1 = state_16806;var statearr_16814_16831 = state_16806__$1;(statearr_16814_16831[(2)] = inst_16784);
(statearr_16814_16831[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16807 === (2)))
{var inst_16803 = (state_16806[(2)]);var inst_16804 = cljs.core.async.close_BANG_.call(null,ret);var state_16806__$1 = (function (){var statearr_16815 = state_16806;(statearr_16815[(8)] = inst_16803);
return statearr_16815;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16806__$1,inst_16804);
} else
{if((state_val_16807 === (1)))
{var state_16806__$1 = state_16806;if(cljs.core.truth_(prevId))
{var statearr_16816_16832 = state_16806__$1;(statearr_16816_16832[(1)] = (3));
} else
{var statearr_16817_16833 = state_16806__$1;(statearr_16817_16833[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16776_16825,ret,map__16775,map__16775__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16776_16825,ret,map__16775,map__16775__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16821 = [null,null,null,null,null,null,null,null,null];(statearr_16821[(0)] = state_machine__6178__auto__);
(statearr_16821[(1)] = (1));
return statearr_16821;
});
var state_machine__6178__auto____1 = (function (state_16806){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16806);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16822){if((e16822 instanceof Object))
{var ex__6181__auto__ = e16822;var statearr_16823_16834 = state_16806;(statearr_16823_16834[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16806);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16835 = state_16806;
state_16806 = G__16835;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16806){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16776_16825,ret,map__16775,map__16775__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16824 = f__6193__auto__.call(null);(statearr_16824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__16776_16825,ret,map__16775,map__16775__$1,args,id))
);
return c__6192__auto__;
});})(G__16776_16825,ret,map__16775,map__16775__$1,args,id))
);
G__16776_16825.fail(((function (G__16776_16825,ret,map__16775,map__16775__$1,args,id){
return (function (err){return console.log(err);
});})(G__16776_16825,ret,map__16775,map__16775__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
