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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13454_SHARP_){return cljs.core._EQ_.call(null,view,p1__13454_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13455_SHARP_){return cljs.core._EQ_.call(null,view,p1__13455_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13456_SHARP_){return cljs.core._EQ_.call(null,view,p1__13456_SHARP_);
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
app.model.bottomTab0 = (function bottomTab0(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13457_SHARP_){return cljs.core._EQ_.call(null,view,p1__13457_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13458_SHARP_){return cljs.core._EQ_.call(null,view,p1__13458_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13459_SHARP_){return cljs.core._EQ_.call(null,view,p1__13459_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13460_SHARP_){return cljs.core._EQ_.call(null,view,p1__13460_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13461_SHARP_){return cljs.core._EQ_.call(null,view,p1__13461_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13462_SHARP_){return cljs.core._EQ_.call(null,view,p1__13462_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13463_SHARP_){return cljs.core._EQ_.call(null,view,p1__13463_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13464_SHARP_){return cljs.core._EQ_.call(null,view,p1__13464_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13465_SHARP_){return cljs.core._EQ_.call(null,view,p1__13465_SHARP_);
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
app.model.bottomTab3 = (function bottomTab3(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13466_SHARP_){return cljs.core._EQ_.call(null,view,p1__13466_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13467_SHARP_){return cljs.core._EQ_.call(null,view,p1__13467_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13468_SHARP_){return cljs.core._EQ_.call(null,view,p1__13468_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__13472){var vec__13473 = p__13472;var model = cljs.core.nth.call(null,vec__13473,(0),null);var detail = cljs.core.nth.call(null,vec__13473,(1),null);var G__13474 = (new Date(detail.Date));G__13474.getTime();
return G__13474;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__13477){var vec__13478 = p__13477;var model = cljs.core.nth.call(null,vec__13478,(0),null);var detail = cljs.core.nth.call(null,vec__13478,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__13481){var vec__13482 = p__13481;var model = cljs.core.nth.call(null,vec__13482,(0),null);var detail = cljs.core.nth.call(null,vec__13482,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.SearchRelative = (function SearchRelative(tags,details){return cljs.core.shuffle.call(null,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (tag){return cljs.core.filter.call(null,(function (p__13485){var vec__13486 = p__13485;var model = cljs.core.nth.call(null,vec__13486,(0),null);var detail = cljs.core.nth.call(null,vec__13486,(1),null);return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+".?")),detail.Tag);
}),details);
}),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,tags,/,/))))));
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__13534,key,p__13535){var map__13536 = p__13534;var map__13536__$1 = ((cljs.core.seq_QMARK_.call(null,map__13536))?cljs.core.apply.call(null,cljs.core.hash_map,map__13536):map__13536);var ctx = map__13536__$1;var media_type = cljs.core.get.call(null,map__13536__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__13537 = p__13535;var map__13537__$1 = ((cljs.core.seq_QMARK_.call(null,map__13537))?cljs.core.apply.call(null,cljs.core.hash_map,map__13537):map__13537);var args = map__13537__$1;var page = cljs.core.get.call(null,map__13537__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__13537__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__13538_13581 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__13538_13581.done(((function (G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey){
return (function (p__13539){var vec__13540 = p__13539;var model = cljs.core.nth.call(null,vec__13540,(0),null);var detail = cljs.core.nth.call(null,vec__13540,(1),null);var vec__13541 = (function (){var pred__13542 = cljs.core._EQ_;var expr__13543 = media_type;if(cljs.core.truth_(pred__13542.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__13543)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(254),(256)], null);
} else
{if(cljs.core.truth_(pred__13542.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__13543)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{if(cljs.core.truth_(pred__13542.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__13543)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__13541,(0),null);var h = cljs.core.nth.call(null,vec__13541,(1),null);var obj13546 = {"visibleDate":false,"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj13546;
});})(modelCountPerPage,filtered,totalPage,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey))
;var dto = (function (){var obj13548 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj13548;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey){
return (function (state_13555){var state_val_13556 = (state_13555[(1)]);if((state_val_13556 === (2)))
{var inst_13552 = (state_13555[(2)]);var inst_13553 = cljs.core.async.close_BANG_.call(null,ret);var state_13555__$1 = (function (){var statearr_13557 = state_13555;(statearr_13557[(7)] = inst_13552);
return statearr_13557;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13555__$1,inst_13553);
} else
{if((state_val_13556 === (1)))
{var inst_13549 = [null,dto];var inst_13550 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13549,null));var state_13555__$1 = state_13555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13555__$1,(2),ret,inst_13550);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13561 = [null,null,null,null,null,null,null,null];(statearr_13561[(0)] = state_machine__6178__auto__);
(statearr_13561[(1)] = (1));
return statearr_13561;
});
var state_machine__6178__auto____1 = (function (state_13555){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13555);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13562){if((e13562 instanceof Object))
{var ex__6181__auto__ = e13562;var statearr_13563_13582 = state_13555;(statearr_13563_13582[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13555);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13583 = state_13555;
state_13555 = G__13583;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13555){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_13564 = f__6193__auto__.call(null);(statearr_13564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey))
);
G__13538_13581.fail(((function (G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey){
return (function (state_13571){var state_val_13572 = (state_13571[(1)]);if((state_val_13572 === (2)))
{var inst_13568 = (state_13571[(2)]);var inst_13569 = cljs.core.async.close_BANG_.call(null,ret);var state_13571__$1 = (function (){var statearr_13573 = state_13571;(statearr_13573[(7)] = inst_13568);
return statearr_13573;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13571__$1,inst_13569);
} else
{if((state_val_13572 === (1)))
{var inst_13565 = [err,null];var inst_13566 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13565,null));var state_13571__$1 = state_13571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13571__$1,(2),ret,inst_13566);
} else
{return null;
}
}
});})(c__6192__auto__,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13577 = [null,null,null,null,null,null,null,null];(statearr_13577[(0)] = state_machine__6178__auto__);
(statearr_13577[(1)] = (1));
return statearr_13577;
});
var state_machine__6178__auto____1 = (function (state_13571){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13571);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13578){if((e13578 instanceof Object))
{var ex__6181__auto__ = e13578;var statearr_13579_13584 = state_13571;(statearr_13579_13584[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13571);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13585 = state_13571;
state_13571 = G__13585;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13571){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_13580 = f__6193__auto__.call(null);(statearr_13580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__13538_13581,configType,ret,map__13536,map__13536__$1,ctx,media_type,map__13537,map__13537__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__13645){var map__13646 = p__13645;var map__13646__$1 = ((cljs.core.seq_QMARK_.call(null,map__13646))?cljs.core.apply.call(null,cljs.core.hash_map,map__13646):map__13646);var args = map__13646__$1;var id = cljs.core.get.call(null,map__13646__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__13647_13704 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__13647_13704.done(((function (G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var relativeDetails = cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (dir,detail,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (p__13648){var vec__13649 = p__13648;var model = cljs.core.nth.call(null,vec__13649,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__13649,(1),null);return cljs.core.not_EQ_.call(null,model,id);
});})(dir,detail,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
,app.model.SearchRelative.call(null,detail.Tag,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertHeadDTO = ((function (dir,detail,relativeDetails,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (p__13650){var vec__13651 = p__13650;var key__$1 = cljs.core.nth.call(null,vec__13651,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__13651,(1),null);var obj13653 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj13653;
});})(dir,detail,relativeDetails,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function iter__13654(s__13655){return (new cljs.core.LazySeq(null,((function (dir,detail,relativeDetails,ConvertHeadDTO,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (){var s__13655__$1 = s__13655;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13655__$1);if(temp__4126__auto__)
{var s__13655__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13655__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13655__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13657 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13656 = (0);while(true){
if((i__13656 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__13656);cljs.core.chunk_append.call(null,b__13657,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__13705 = (i__13656 + (1));
i__13656 = G__13705;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13657),iter__13654.call(null,cljs.core.chunk_rest.call(null,s__13655__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13657),null);
}
} else
{var idx = cljs.core.first.call(null,s__13655__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__13654.call(null,cljs.core.rest.call(null,s__13655__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
,null,null));
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function iter__13658(s__13659){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (){var s__13659__$1 = s__13659;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13659__$1);if(temp__4126__auto__)
{var s__13659__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13659__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13659__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13661 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13660 = (0);while(true){
if((i__13660 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__13660);cljs.core.chunk_append.call(null,b__13661,(function (){var obj13667 = {"id":url,"url":ServeFn.call(null,url)};return obj13667;
})());
{
var G__13706 = (i__13660 + (1));
i__13660 = G__13706;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13661),iter__13658.call(null,cljs.core.chunk_rest.call(null,s__13659__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13661),null);
}
} else
{var url = cljs.core.first.call(null,s__13659__$2);return cljs.core.cons.call(null,(function (){var obj13669 = {"id":url,"url":ServeFn.call(null,url)};return obj13669;
})(),iter__13658.call(null,cljs.core.rest.call(null,s__13659__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
,null,null));
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
;var dto = (function (){var obj13671 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab3":app.model.bottomTab3.call(null,name),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"bottomTab0":app.model.bottomTab0.call(null,name),"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,relativeDetails)),"date":detail.Date,"protalk":detail.Comment};return obj13671;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (state_13678){var state_val_13679 = (state_13678[(1)]);if((state_val_13679 === (2)))
{var inst_13675 = (state_13678[(2)]);var inst_13676 = cljs.core.async.close_BANG_.call(null,ret);var state_13678__$1 = (function (){var statearr_13680 = state_13678;(statearr_13680[(7)] = inst_13675);
return statearr_13680;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13678__$1,inst_13676);
} else
{if((state_val_13679 === (1)))
{var inst_13672 = [null,dto];var inst_13673 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13672,null));var state_13678__$1 = state_13678;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13678__$1,(2),ret,inst_13673);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13684 = [null,null,null,null,null,null,null,null];(statearr_13684[(0)] = state_machine__6178__auto__);
(statearr_13684[(1)] = (1));
return statearr_13684;
});
var state_machine__6178__auto____1 = (function (state_13678){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13678);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13685){if((e13685 instanceof Object))
{var ex__6181__auto__ = e13685;var statearr_13686_13707 = state_13678;(statearr_13686_13707[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13678);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13708 = state_13678;
state_13678 = G__13708;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13678){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13687 = f__6193__auto__.call(null);(statearr_13687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
);
return c__6192__auto__;
});})(G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
);
G__13647_13704.fail(((function (G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function (state_13694){var state_val_13695 = (state_13694[(1)]);if((state_val_13695 === (2)))
{var inst_13691 = (state_13694[(2)]);var inst_13692 = cljs.core.async.close_BANG_.call(null,ret);var state_13694__$1 = (function (){var statearr_13696 = state_13694;(statearr_13696[(7)] = inst_13691);
return statearr_13696;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13694__$1,inst_13692);
} else
{if((state_val_13695 === (1)))
{var inst_13688 = [err,null];var inst_13689 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13688,null));var state_13694__$1 = state_13694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13694__$1,(2),ret,inst_13689);
} else
{return null;
}
}
});})(c__6192__auto__,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13700 = [null,null,null,null,null,null,null,null];(statearr_13700[(0)] = state_machine__6178__auto__);
(statearr_13700[(1)] = (1));
return statearr_13700;
});
var state_machine__6178__auto____1 = (function (state_13694){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13694);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13701){if((e13701 instanceof Object))
{var ex__6181__auto__ = e13701;var statearr_13702_13709 = state_13694;(statearr_13702_13709[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13694);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13710 = state_13694;
state_13694 = G__13710;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13694){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13703 = f__6193__auto__.call(null);(statearr_13703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
);
return c__6192__auto__;
});})(G__13647_13704,ret,configType,map__13646,map__13646__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__13712_13751 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__13712_13751.done(((function (G__13712_13751,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13712_13751,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13712_13751,ret){
return (function (state_13725){var state_val_13726 = (state_13725[(1)]);if((state_val_13726 === (2)))
{var inst_13722 = (state_13725[(2)]);var inst_13723 = cljs.core.async.close_BANG_.call(null,ret);var state_13725__$1 = (function (){var statearr_13727 = state_13725;(statearr_13727[(7)] = inst_13722);
return statearr_13727;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13725__$1,inst_13723);
} else
{if((state_val_13726 === (1)))
{var inst_13715 = detail.ModelKey;var inst_13716 = clojure.string.capitalize.call(null,where);var inst_13717 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13716)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_13718 = {"modelKey":inst_13715,"moreUrl":inst_13717};var inst_13719 = [null,inst_13718];var inst_13720 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13719,null));var state_13725__$1 = state_13725;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13725__$1,(2),ret,inst_13720);
} else
{return null;
}
}
});})(c__6192__auto__,G__13712_13751,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13712_13751,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13731 = [null,null,null,null,null,null,null,null];(statearr_13731[(0)] = state_machine__6178__auto__);
(statearr_13731[(1)] = (1));
return statearr_13731;
});
var state_machine__6178__auto____1 = (function (state_13725){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13725);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13732){if((e13732 instanceof Object))
{var ex__6181__auto__ = e13732;var statearr_13733_13752 = state_13725;(statearr_13733_13752[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13725);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13753 = state_13725;
state_13725 = G__13753;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13725){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13712_13751,ret))
})();var state__6194__auto__ = (function (){var statearr_13734 = f__6193__auto__.call(null);(statearr_13734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13712_13751,ret))
);
return c__6192__auto__;
});})(G__13712_13751,ret))
);
G__13712_13751.fail(((function (G__13712_13751,ret){
return (function (p1__13711_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__13712_13751,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__13712_13751,ret){
return (function (state_13741){var state_val_13742 = (state_13741[(1)]);if((state_val_13742 === (2)))
{var inst_13738 = (state_13741[(2)]);var inst_13739 = cljs.core.async.close_BANG_.call(null,ret);var state_13741__$1 = (function (){var statearr_13743 = state_13741;(statearr_13743[(7)] = inst_13738);
return statearr_13743;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13741__$1,inst_13739);
} else
{if((state_val_13742 === (1)))
{var inst_13735 = [p1__13711_SHARP_,null];var inst_13736 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13735,null));var state_13741__$1 = state_13741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13741__$1,(2),ret,inst_13736);
} else
{return null;
}
}
});})(c__6192__auto__,G__13712_13751,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__13712_13751,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13747 = [null,null,null,null,null,null,null,null];(statearr_13747[(0)] = state_machine__6178__auto__);
(statearr_13747[(1)] = (1));
return statearr_13747;
});
var state_machine__6178__auto____1 = (function (state_13741){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13741);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13748){if((e13748 instanceof Object))
{var ex__6181__auto__ = e13748;var statearr_13749_13754 = state_13741;(statearr_13749_13754[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13741);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13748;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13755 = state_13741;
state_13741 = G__13755;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13741){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__13712_13751,ret))
})();var state__6194__auto__ = (function (){var statearr_13750 = f__6193__auto__.call(null);(statearr_13750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13750;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__13712_13751,ret))
);
return c__6192__auto__;
});})(G__13712_13751,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__13756){var map__13757 = p__13756;var map__13757__$1 = ((cljs.core.seq_QMARK_.call(null,map__13757))?cljs.core.apply.call(null,cljs.core.hash_map,map__13757):map__13757);var args = map__13757__$1;var url = cljs.core.get.call(null,map__13757__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___13777 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13777,ret,map__13757,map__13757__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13777,ret,map__13757,map__13757__$1,args,url){
return (function (state_13767){var state_val_13768 = (state_13767[(1)]);if((state_val_13768 === (2)))
{var inst_13764 = (state_13767[(2)]);var inst_13765 = cljs.core.async.close_BANG_.call(null,ret);var state_13767__$1 = (function (){var statearr_13769 = state_13767;(statearr_13769[(7)] = inst_13764);
return statearr_13769;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13767__$1,inst_13765);
} else
{if((state_val_13768 === (1)))
{var inst_13760 = {"url":url};var inst_13761 = [null,inst_13760];var inst_13762 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13761,null));var state_13767__$1 = state_13767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13767__$1,(2),ret,inst_13762);
} else
{return null;
}
}
});})(c__6192__auto___13777,ret,map__13757,map__13757__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___13777,ret,map__13757,map__13757__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13773 = [null,null,null,null,null,null,null,null];(statearr_13773[(0)] = state_machine__6178__auto__);
(statearr_13773[(1)] = (1));
return statearr_13773;
});
var state_machine__6178__auto____1 = (function (state_13767){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13767);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13774){if((e13774 instanceof Object))
{var ex__6181__auto__ = e13774;var statearr_13775_13778 = state_13767;(statearr_13775_13778[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13767);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13779 = state_13767;
state_13767 = G__13779;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13767){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13777,ret,map__13757,map__13757__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_13776 = f__6193__auto__.call(null);(statearr_13776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13777);
return statearr_13776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13777,ret,map__13757,map__13757__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__13780){var map__13781 = p__13780;var map__13781__$1 = ((cljs.core.seq_QMARK_.call(null,map__13781))?cljs.core.apply.call(null,cljs.core.hash_map,map__13781):map__13781);var args = map__13781__$1;var id = cljs.core.get.call(null,map__13781__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___13798 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___13798,ret,map__13781,map__13781__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___13798,ret,map__13781,map__13781__$1,args,id){
return (function (state_13788){var state_val_13789 = (state_13788[(1)]);if((state_val_13789 === (2)))
{var inst_13785 = (state_13788[(2)]);var inst_13786 = cljs.core.async.close_BANG_.call(null,ret);var state_13788__$1 = (function (){var statearr_13790 = state_13788;(statearr_13790[(7)] = inst_13785);
return statearr_13790;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13788__$1,inst_13786);
} else
{if((state_val_13789 === (1)))
{var inst_13782 = [null,null];var inst_13783 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13782,null));var state_13788__$1 = state_13788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13788__$1,(2),ret,inst_13783);
} else
{return null;
}
}
});})(c__6192__auto___13798,ret,map__13781,map__13781__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___13798,ret,map__13781,map__13781__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13794 = [null,null,null,null,null,null,null,null];(statearr_13794[(0)] = state_machine__6178__auto__);
(statearr_13794[(1)] = (1));
return statearr_13794;
});
var state_machine__6178__auto____1 = (function (state_13788){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13788);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13795){if((e13795 instanceof Object))
{var ex__6181__auto__ = e13795;var statearr_13796_13799 = state_13788;(statearr_13796_13799[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13788);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13800 = state_13788;
state_13788 = G__13800;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13788){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___13798,ret,map__13781,map__13781__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13797 = f__6193__auto__.call(null);(statearr_13797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13798);
return statearr_13797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___13798,ret,map__13781,map__13781__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__13801 = cljs.core.rest.call(null,list);
var G__13802 = id;
var G__13803 = (start + (1));
list = G__13801;
id = G__13802;
start = G__13803;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__13805){var map__13806 = p__13805;var map__13806__$1 = ((cljs.core.seq_QMARK_.call(null,map__13806))?cljs.core.apply.call(null,cljs.core.hash_map,map__13806):map__13806);var args = map__13806__$1;var id = cljs.core.get.call(null,map__13806__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__13807_13856 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__13807_13856.done(((function (G__13807_13856,ret,map__13806,map__13806__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__13807_13856,ret,map__13806,map__13806__$1,args,id){
return (function (p1__13804_SHARP_){var obj13809 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__13804_SHARP_ + (1)))+".jpg"))};return obj13809;
});})(filtered,evtId,evt,G__13807_13856,ret,map__13806,map__13806__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13807_13856,ret,map__13806,map__13806__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13807_13856,ret,map__13806,map__13806__$1,args,id){
return (function (state_13837){var state_val_13838 = (state_13837[(1)]);if((state_val_13838 === (8)))
{var inst_13818 = (state_13837[(7)]);var inst_13825 = (state_13837[(2)]);var inst_13826 = (evt["Title"]);var inst_13827 = (evt["Date"]);var inst_13828 = (evt["Content"]);var inst_13829 = (evt["Form"]);var inst_13830 = {"prev_href":inst_13818,"next_href":inst_13825,"title":inst_13826,"date":inst_13827,"sideList":photos,"content":inst_13828,"form":inst_13829};var inst_13831 = [null,inst_13830];var inst_13832 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13831,null));var state_13837__$1 = state_13837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13837__$1,(2),ret,inst_13832);
} else
{if((state_val_13838 === (7)))
{var state_13837__$1 = state_13837;var statearr_13839_13857 = state_13837__$1;(statearr_13839_13857[(2)] = null);
(statearr_13839_13857[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (6)))
{var inst_13820 = cljs.core.nth.call(null,filtered,nextId);var inst_13821 = cljs.core.first.call(null,inst_13820);var inst_13822 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13821));var state_13837__$1 = state_13837;var statearr_13840_13858 = state_13837__$1;(statearr_13840_13858[(2)] = inst_13822);
(statearr_13840_13858[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (5)))
{var inst_13818 = (state_13837[(2)]);var state_13837__$1 = (function (){var statearr_13841 = state_13837;(statearr_13841[(7)] = inst_13818);
return statearr_13841;
})();if(cljs.core.truth_(nextId))
{var statearr_13842_13859 = state_13837__$1;(statearr_13842_13859[(1)] = (6));
} else
{var statearr_13843_13860 = state_13837__$1;(statearr_13843_13860[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (4)))
{var state_13837__$1 = state_13837;var statearr_13844_13861 = state_13837__$1;(statearr_13844_13861[(2)] = null);
(statearr_13844_13861[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (3)))
{var inst_13813 = cljs.core.nth.call(null,filtered,prevId);var inst_13814 = cljs.core.first.call(null,inst_13813);var inst_13815 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13814));var state_13837__$1 = state_13837;var statearr_13845_13862 = state_13837__$1;(statearr_13845_13862[(2)] = inst_13815);
(statearr_13845_13862[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (2)))
{var inst_13834 = (state_13837[(2)]);var inst_13835 = cljs.core.async.close_BANG_.call(null,ret);var state_13837__$1 = (function (){var statearr_13846 = state_13837;(statearr_13846[(8)] = inst_13834);
return statearr_13846;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13837__$1,inst_13835);
} else
{if((state_val_13838 === (1)))
{var state_13837__$1 = state_13837;if(cljs.core.truth_(prevId))
{var statearr_13847_13863 = state_13837__$1;(statearr_13847_13863[(1)] = (3));
} else
{var statearr_13848_13864 = state_13837__$1;(statearr_13848_13864[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13807_13856,ret,map__13806,map__13806__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13807_13856,ret,map__13806,map__13806__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13852 = [null,null,null,null,null,null,null,null,null];(statearr_13852[(0)] = state_machine__6178__auto__);
(statearr_13852[(1)] = (1));
return statearr_13852;
});
var state_machine__6178__auto____1 = (function (state_13837){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13837);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13853){if((e13853 instanceof Object))
{var ex__6181__auto__ = e13853;var statearr_13854_13865 = state_13837;(statearr_13854_13865[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13866 = state_13837;
state_13837 = G__13866;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13837){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13807_13856,ret,map__13806,map__13806__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_13855 = f__6193__auto__.call(null);(statearr_13855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__13807_13856,ret,map__13806,map__13806__$1,args,id))
);
return c__6192__auto__;
});})(G__13807_13856,ret,map__13806,map__13806__$1,args,id))
);
G__13807_13856.fail(((function (G__13807_13856,ret,map__13806,map__13806__$1,args,id){
return (function (err){return console.log(err);
});})(G__13807_13856,ret,map__13806,map__13806__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
