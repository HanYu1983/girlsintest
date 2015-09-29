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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12494_SHARP_){return cljs.core._EQ_.call(null,view,p1__12494_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12495_SHARP_){return cljs.core._EQ_.call(null,view,p1__12495_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12496_SHARP_){return cljs.core._EQ_.call(null,view,p1__12496_SHARP_);
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
app.model.bottomTab0 = (function bottomTab0(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12497_SHARP_){return cljs.core._EQ_.call(null,view,p1__12497_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12498_SHARP_){return cljs.core._EQ_.call(null,view,p1__12498_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12499_SHARP_){return cljs.core._EQ_.call(null,view,p1__12499_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12500_SHARP_){return cljs.core._EQ_.call(null,view,p1__12500_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12501_SHARP_){return cljs.core._EQ_.call(null,view,p1__12501_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12502_SHARP_){return cljs.core._EQ_.call(null,view,p1__12502_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12503_SHARP_){return cljs.core._EQ_.call(null,view,p1__12503_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12504_SHARP_){return cljs.core._EQ_.call(null,view,p1__12504_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12505_SHARP_){return cljs.core._EQ_.call(null,view,p1__12505_SHARP_);
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
app.model.bottomTab3 = (function bottomTab3(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12506_SHARP_){return cljs.core._EQ_.call(null,view,p1__12506_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12507_SHARP_){return cljs.core._EQ_.call(null,view,p1__12507_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12508_SHARP_){return cljs.core._EQ_.call(null,view,p1__12508_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__12512){var vec__12513 = p__12512;var model = cljs.core.nth.call(null,vec__12513,(0),null);var detail = cljs.core.nth.call(null,vec__12513,(1),null);var G__12514 = (new Date(detail.Date));G__12514.getTime();
return G__12514;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__12517){var vec__12518 = p__12517;var model = cljs.core.nth.call(null,vec__12518,(0),null);var detail = cljs.core.nth.call(null,vec__12518,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__12521){var vec__12522 = p__12521;var model = cljs.core.nth.call(null,vec__12522,(0),null);var detail = cljs.core.nth.call(null,vec__12522,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.SearchRelative = (function SearchRelative(tags,details){return cljs.core.shuffle.call(null,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (tag){return cljs.core.filter.call(null,(function (p__12525){var vec__12526 = p__12525;var model = cljs.core.nth.call(null,vec__12526,(0),null);var detail = cljs.core.nth.call(null,vec__12526,(1),null);return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+".?")),detail.Tag);
}),details);
}),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,tags,/,/))))));
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__12574,key,p__12575){var map__12576 = p__12574;var map__12576__$1 = ((cljs.core.seq_QMARK_.call(null,map__12576))?cljs.core.apply.call(null,cljs.core.hash_map,map__12576):map__12576);var ctx = map__12576__$1;var media_type = cljs.core.get.call(null,map__12576__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__12577 = p__12575;var map__12577__$1 = ((cljs.core.seq_QMARK_.call(null,map__12577))?cljs.core.apply.call(null,cljs.core.hash_map,map__12577):map__12577);var args = map__12577__$1;var page = cljs.core.get.call(null,map__12577__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__12577__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__12578_12621 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__12578_12621.done(((function (G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = (12);var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey){
return (function (p__12579){var vec__12580 = p__12579;var model = cljs.core.nth.call(null,vec__12580,(0),null);var detail = cljs.core.nth.call(null,vec__12580,(1),null);var vec__12581 = (function (){var pred__12582 = cljs.core._EQ_;var expr__12583 = media_type;if(cljs.core.truth_(pred__12582.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__12583)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(600)], null);
} else
{if(cljs.core.truth_(pred__12582.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__12583)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{if(cljs.core.truth_(pred__12582.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__12583)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__12581,(0),null);var h = cljs.core.nth.call(null,vec__12581,(1),null);var obj12586 = {"visibleDate":false,"brand":detail.Brand,"signUrl":(cljs.core.truth_(detail.Sign)?app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/sign.png")):null),"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj12586;
});})(modelCountPerPage,filtered,totalPage,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey))
;var dto = (function (){var obj12588 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj12588;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey){
return (function (state_12595){var state_val_12596 = (state_12595[(1)]);if((state_val_12596 === (2)))
{var inst_12592 = (state_12595[(2)]);var inst_12593 = cljs.core.async.close_BANG_.call(null,ret);var state_12595__$1 = (function (){var statearr_12597 = state_12595;(statearr_12597[(7)] = inst_12592);
return statearr_12597;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12595__$1,inst_12593);
} else
{if((state_val_12596 === (1)))
{var inst_12589 = [null,dto];var inst_12590 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12589,null));var state_12595__$1 = state_12595;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12595__$1,(2),ret,inst_12590);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12601 = [null,null,null,null,null,null,null,null];(statearr_12601[(0)] = state_machine__6178__auto__);
(statearr_12601[(1)] = (1));
return statearr_12601;
});
var state_machine__6178__auto____1 = (function (state_12595){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12595);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12602){if((e12602 instanceof Object))
{var ex__6181__auto__ = e12602;var statearr_12603_12622 = state_12595;(statearr_12603_12622[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12595);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12623 = state_12595;
state_12595 = G__12623;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12595){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_12604 = f__6193__auto__.call(null);(statearr_12604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey))
);
G__12578_12621.fail(((function (G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey){
return (function (state_12611){var state_val_12612 = (state_12611[(1)]);if((state_val_12612 === (2)))
{var inst_12608 = (state_12611[(2)]);var inst_12609 = cljs.core.async.close_BANG_.call(null,ret);var state_12611__$1 = (function (){var statearr_12613 = state_12611;(statearr_12613[(7)] = inst_12608);
return statearr_12613;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12611__$1,inst_12609);
} else
{if((state_val_12612 === (1)))
{var inst_12605 = [err,null];var inst_12606 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12605,null));var state_12611__$1 = state_12611;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12611__$1,(2),ret,inst_12606);
} else
{return null;
}
}
});})(c__6192__auto__,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12617 = [null,null,null,null,null,null,null,null];(statearr_12617[(0)] = state_machine__6178__auto__);
(statearr_12617[(1)] = (1));
return statearr_12617;
});
var state_machine__6178__auto____1 = (function (state_12611){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12611);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12618){if((e12618 instanceof Object))
{var ex__6181__auto__ = e12618;var statearr_12619_12624 = state_12611;(statearr_12619_12624[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12625 = state_12611;
state_12611 = G__12625;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12611){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_12620 = f__6193__auto__.call(null);(statearr_12620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__12578_12621,configType,ret,map__12576,map__12576__$1,ctx,media_type,map__12577,map__12577__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__12685){var map__12686 = p__12685;var map__12686__$1 = ((cljs.core.seq_QMARK_.call(null,map__12686))?cljs.core.apply.call(null,cljs.core.hash_map,map__12686):map__12686);var args = map__12686__$1;var id = cljs.core.get.call(null,map__12686__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__12687_12744 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__12687_12744.done(((function (G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var relativeDetails = cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (dir,detail,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (p__12688){var vec__12689 = p__12688;var model = cljs.core.nth.call(null,vec__12689,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__12689,(1),null);return cljs.core.not_EQ_.call(null,model,id);
});})(dir,detail,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
,app.model.SearchRelative.call(null,detail.Tag,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertHeadDTO = ((function (dir,detail,relativeDetails,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (p__12690){var vec__12691 = p__12690;var key__$1 = cljs.core.nth.call(null,vec__12691,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__12691,(1),null);var obj12693 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj12693;
});})(dir,detail,relativeDetails,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function iter__12694(s__12695){return (new cljs.core.LazySeq(null,((function (dir,detail,relativeDetails,ConvertHeadDTO,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (){var s__12695__$1 = s__12695;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12695__$1);if(temp__4126__auto__)
{var s__12695__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12695__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12695__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12697 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12696 = (0);while(true){
if((i__12696 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__12696);cljs.core.chunk_append.call(null,b__12697,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__12745 = (i__12696 + (1));
i__12696 = G__12745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12697),iter__12694.call(null,cljs.core.chunk_rest.call(null,s__12695__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12697),null);
}
} else
{var idx = cljs.core.first.call(null,s__12695__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__12694.call(null,cljs.core.rest.call(null,s__12695__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
,null,null));
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function iter__12698(s__12699){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (){var s__12699__$1 = s__12699;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12699__$1);if(temp__4126__auto__)
{var s__12699__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12699__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12699__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12701 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12700 = (0);while(true){
if((i__12700 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__12700);cljs.core.chunk_append.call(null,b__12701,(function (){var obj12707 = {"id":url,"url":ServeFn.call(null,url)};return obj12707;
})());
{
var G__12746 = (i__12700 + (1));
i__12700 = G__12746;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12701),iter__12698.call(null,cljs.core.chunk_rest.call(null,s__12699__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12701),null);
}
} else
{var url = cljs.core.first.call(null,s__12699__$2);return cljs.core.cons.call(null,(function (){var obj12709 = {"id":url,"url":ServeFn.call(null,url)};return obj12709;
})(),iter__12698.call(null,cljs.core.rest.call(null,s__12699__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
,null,null));
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
;var dto = (function (){var obj12711 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"signUrl":(cljs.core.truth_(detail.Sign)?app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/sign.png")):null),"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab3":app.model.bottomTab3.call(null,name),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"bottomTab0":app.model.bottomTab0.call(null,name),"modelDetail":detail.Description,"visibleFullscreen":(cljs.core.truth_(mobileAndTabletcheck())?true:detail.Fullscreen),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,relativeDetails)),"date":detail.Date,"protalk":detail.Comment};return obj12711;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (state_12718){var state_val_12719 = (state_12718[(1)]);if((state_val_12719 === (2)))
{var inst_12715 = (state_12718[(2)]);var inst_12716 = cljs.core.async.close_BANG_.call(null,ret);var state_12718__$1 = (function (){var statearr_12720 = state_12718;(statearr_12720[(7)] = inst_12715);
return statearr_12720;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12718__$1,inst_12716);
} else
{if((state_val_12719 === (1)))
{var inst_12712 = [null,dto];var inst_12713 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12712,null));var state_12718__$1 = state_12718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12718__$1,(2),ret,inst_12713);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12724 = [null,null,null,null,null,null,null,null];(statearr_12724[(0)] = state_machine__6178__auto__);
(statearr_12724[(1)] = (1));
return statearr_12724;
});
var state_machine__6178__auto____1 = (function (state_12718){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12718);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12725){if((e12725 instanceof Object))
{var ex__6181__auto__ = e12725;var statearr_12726_12747 = state_12718;(statearr_12726_12747[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12748 = state_12718;
state_12718 = G__12748;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12718){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12727 = f__6193__auto__.call(null);(statearr_12727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
);
return c__6192__auto__;
});})(G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
);
G__12687_12744.fail(((function (G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function (state_12734){var state_val_12735 = (state_12734[(1)]);if((state_val_12735 === (2)))
{var inst_12731 = (state_12734[(2)]);var inst_12732 = cljs.core.async.close_BANG_.call(null,ret);var state_12734__$1 = (function (){var statearr_12736 = state_12734;(statearr_12736[(7)] = inst_12731);
return statearr_12736;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12734__$1,inst_12732);
} else
{if((state_val_12735 === (1)))
{var inst_12728 = [err,null];var inst_12729 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12728,null));var state_12734__$1 = state_12734;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12734__$1,(2),ret,inst_12729);
} else
{return null;
}
}
});})(c__6192__auto__,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12740 = [null,null,null,null,null,null,null,null];(statearr_12740[(0)] = state_machine__6178__auto__);
(statearr_12740[(1)] = (1));
return statearr_12740;
});
var state_machine__6178__auto____1 = (function (state_12734){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12734);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12741){if((e12741 instanceof Object))
{var ex__6181__auto__ = e12741;var statearr_12742_12749 = state_12734;(statearr_12742_12749[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12734);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12750 = state_12734;
state_12734 = G__12750;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12734){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12743 = f__6193__auto__.call(null);(statearr_12743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
);
return c__6192__auto__;
});})(G__12687_12744,ret,configType,map__12686,map__12686__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__12752_12791 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__12752_12791.done(((function (G__12752_12791,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12752_12791,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12752_12791,ret){
return (function (state_12765){var state_val_12766 = (state_12765[(1)]);if((state_val_12766 === (2)))
{var inst_12762 = (state_12765[(2)]);var inst_12763 = cljs.core.async.close_BANG_.call(null,ret);var state_12765__$1 = (function (){var statearr_12767 = state_12765;(statearr_12767[(7)] = inst_12762);
return statearr_12767;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12765__$1,inst_12763);
} else
{if((state_val_12766 === (1)))
{var inst_12755 = detail.ModelKey;var inst_12756 = clojure.string.capitalize.call(null,where);var inst_12757 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12756)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_12758 = {"modelKey":inst_12755,"moreUrl":inst_12757};var inst_12759 = [null,inst_12758];var inst_12760 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12759,null));var state_12765__$1 = state_12765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12765__$1,(2),ret,inst_12760);
} else
{return null;
}
}
});})(c__6192__auto__,G__12752_12791,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12752_12791,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12771 = [null,null,null,null,null,null,null,null];(statearr_12771[(0)] = state_machine__6178__auto__);
(statearr_12771[(1)] = (1));
return statearr_12771;
});
var state_machine__6178__auto____1 = (function (state_12765){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12765);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12772){if((e12772 instanceof Object))
{var ex__6181__auto__ = e12772;var statearr_12773_12792 = state_12765;(statearr_12773_12792[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12765);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12793 = state_12765;
state_12765 = G__12793;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12765){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12752_12791,ret))
})();var state__6194__auto__ = (function (){var statearr_12774 = f__6193__auto__.call(null);(statearr_12774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12752_12791,ret))
);
return c__6192__auto__;
});})(G__12752_12791,ret))
);
G__12752_12791.fail(((function (G__12752_12791,ret){
return (function (p1__12751_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__12752_12791,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__12752_12791,ret){
return (function (state_12781){var state_val_12782 = (state_12781[(1)]);if((state_val_12782 === (2)))
{var inst_12778 = (state_12781[(2)]);var inst_12779 = cljs.core.async.close_BANG_.call(null,ret);var state_12781__$1 = (function (){var statearr_12783 = state_12781;(statearr_12783[(7)] = inst_12778);
return statearr_12783;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12781__$1,inst_12779);
} else
{if((state_val_12782 === (1)))
{var inst_12775 = [p1__12751_SHARP_,null];var inst_12776 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12775,null));var state_12781__$1 = state_12781;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12781__$1,(2),ret,inst_12776);
} else
{return null;
}
}
});})(c__6192__auto__,G__12752_12791,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__12752_12791,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12787 = [null,null,null,null,null,null,null,null];(statearr_12787[(0)] = state_machine__6178__auto__);
(statearr_12787[(1)] = (1));
return statearr_12787;
});
var state_machine__6178__auto____1 = (function (state_12781){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12781);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12788){if((e12788 instanceof Object))
{var ex__6181__auto__ = e12788;var statearr_12789_12794 = state_12781;(statearr_12789_12794[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12781);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12795 = state_12781;
state_12781 = G__12795;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12781){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__12752_12791,ret))
})();var state__6194__auto__ = (function (){var statearr_12790 = f__6193__auto__.call(null);(statearr_12790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__12752_12791,ret))
);
return c__6192__auto__;
});})(G__12752_12791,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__12796){var map__12797 = p__12796;var map__12797__$1 = ((cljs.core.seq_QMARK_.call(null,map__12797))?cljs.core.apply.call(null,cljs.core.hash_map,map__12797):map__12797);var args = map__12797__$1;var url = cljs.core.get.call(null,map__12797__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___12817 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___12817,ret,map__12797,map__12797__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___12817,ret,map__12797,map__12797__$1,args,url){
return (function (state_12807){var state_val_12808 = (state_12807[(1)]);if((state_val_12808 === (2)))
{var inst_12804 = (state_12807[(2)]);var inst_12805 = cljs.core.async.close_BANG_.call(null,ret);var state_12807__$1 = (function (){var statearr_12809 = state_12807;(statearr_12809[(7)] = inst_12804);
return statearr_12809;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12807__$1,inst_12805);
} else
{if((state_val_12808 === (1)))
{var inst_12800 = {"url":url};var inst_12801 = [null,inst_12800];var inst_12802 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12801,null));var state_12807__$1 = state_12807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12807__$1,(2),ret,inst_12802);
} else
{return null;
}
}
});})(c__6192__auto___12817,ret,map__12797,map__12797__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___12817,ret,map__12797,map__12797__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12813 = [null,null,null,null,null,null,null,null];(statearr_12813[(0)] = state_machine__6178__auto__);
(statearr_12813[(1)] = (1));
return statearr_12813;
});
var state_machine__6178__auto____1 = (function (state_12807){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12807);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12814){if((e12814 instanceof Object))
{var ex__6181__auto__ = e12814;var statearr_12815_12818 = state_12807;(statearr_12815_12818[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12819 = state_12807;
state_12807 = G__12819;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12807){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___12817,ret,map__12797,map__12797__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_12816 = f__6193__auto__.call(null);(statearr_12816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12817);
return statearr_12816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___12817,ret,map__12797,map__12797__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__12820){var map__12821 = p__12820;var map__12821__$1 = ((cljs.core.seq_QMARK_.call(null,map__12821))?cljs.core.apply.call(null,cljs.core.hash_map,map__12821):map__12821);var args = map__12821__$1;var id = cljs.core.get.call(null,map__12821__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___12838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___12838,ret,map__12821,map__12821__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___12838,ret,map__12821,map__12821__$1,args,id){
return (function (state_12828){var state_val_12829 = (state_12828[(1)]);if((state_val_12829 === (2)))
{var inst_12825 = (state_12828[(2)]);var inst_12826 = cljs.core.async.close_BANG_.call(null,ret);var state_12828__$1 = (function (){var statearr_12830 = state_12828;(statearr_12830[(7)] = inst_12825);
return statearr_12830;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12828__$1,inst_12826);
} else
{if((state_val_12829 === (1)))
{var inst_12822 = [null,null];var inst_12823 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12822,null));var state_12828__$1 = state_12828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12828__$1,(2),ret,inst_12823);
} else
{return null;
}
}
});})(c__6192__auto___12838,ret,map__12821,map__12821__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___12838,ret,map__12821,map__12821__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12834 = [null,null,null,null,null,null,null,null];(statearr_12834[(0)] = state_machine__6178__auto__);
(statearr_12834[(1)] = (1));
return statearr_12834;
});
var state_machine__6178__auto____1 = (function (state_12828){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12828);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12835){if((e12835 instanceof Object))
{var ex__6181__auto__ = e12835;var statearr_12836_12839 = state_12828;(statearr_12836_12839[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12840 = state_12828;
state_12828 = G__12840;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12828){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___12838,ret,map__12821,map__12821__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12837 = f__6193__auto__.call(null);(statearr_12837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12838);
return statearr_12837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___12838,ret,map__12821,map__12821__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__12841 = cljs.core.rest.call(null,list);
var G__12842 = id;
var G__12843 = (start + (1));
list = G__12841;
id = G__12842;
start = G__12843;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__12845){var map__12846 = p__12845;var map__12846__$1 = ((cljs.core.seq_QMARK_.call(null,map__12846))?cljs.core.apply.call(null,cljs.core.hash_map,map__12846):map__12846);var args = map__12846__$1;var id = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__12847_12896 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__12847_12896.done(((function (G__12847_12896,ret,map__12846,map__12846__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__12847_12896,ret,map__12846,map__12846__$1,args,id){
return (function (p1__12844_SHARP_){var obj12849 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__12844_SHARP_ + (1)))+".jpg"))};return obj12849;
});})(filtered,evtId,evt,G__12847_12896,ret,map__12846,map__12846__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12847_12896,ret,map__12846,map__12846__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12847_12896,ret,map__12846,map__12846__$1,args,id){
return (function (state_12877){var state_val_12878 = (state_12877[(1)]);if((state_val_12878 === (8)))
{var inst_12858 = (state_12877[(7)]);var inst_12865 = (state_12877[(2)]);var inst_12866 = (evt["Title"]);var inst_12867 = (evt["Date"]);var inst_12868 = (evt["Content"]);var inst_12869 = (evt["Form"]);var inst_12870 = {"prev_href":inst_12858,"next_href":inst_12865,"title":inst_12866,"date":inst_12867,"sideList":photos,"content":inst_12868,"form":inst_12869};var inst_12871 = [null,inst_12870];var inst_12872 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12871,null));var state_12877__$1 = state_12877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12877__$1,(2),ret,inst_12872);
} else
{if((state_val_12878 === (7)))
{var state_12877__$1 = state_12877;var statearr_12879_12897 = state_12877__$1;(statearr_12879_12897[(2)] = null);
(statearr_12879_12897[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12878 === (6)))
{var inst_12860 = cljs.core.nth.call(null,filtered,nextId);var inst_12861 = cljs.core.first.call(null,inst_12860);var inst_12862 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12861));var state_12877__$1 = state_12877;var statearr_12880_12898 = state_12877__$1;(statearr_12880_12898[(2)] = inst_12862);
(statearr_12880_12898[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12878 === (5)))
{var inst_12858 = (state_12877[(2)]);var state_12877__$1 = (function (){var statearr_12881 = state_12877;(statearr_12881[(7)] = inst_12858);
return statearr_12881;
})();if(cljs.core.truth_(nextId))
{var statearr_12882_12899 = state_12877__$1;(statearr_12882_12899[(1)] = (6));
} else
{var statearr_12883_12900 = state_12877__$1;(statearr_12883_12900[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12878 === (4)))
{var state_12877__$1 = state_12877;var statearr_12884_12901 = state_12877__$1;(statearr_12884_12901[(2)] = null);
(statearr_12884_12901[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12878 === (3)))
{var inst_12853 = cljs.core.nth.call(null,filtered,prevId);var inst_12854 = cljs.core.first.call(null,inst_12853);var inst_12855 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12854));var state_12877__$1 = state_12877;var statearr_12885_12902 = state_12877__$1;(statearr_12885_12902[(2)] = inst_12855);
(statearr_12885_12902[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12878 === (2)))
{var inst_12874 = (state_12877[(2)]);var inst_12875 = cljs.core.async.close_BANG_.call(null,ret);var state_12877__$1 = (function (){var statearr_12886 = state_12877;(statearr_12886[(8)] = inst_12874);
return statearr_12886;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12877__$1,inst_12875);
} else
{if((state_val_12878 === (1)))
{var state_12877__$1 = state_12877;if(cljs.core.truth_(prevId))
{var statearr_12887_12903 = state_12877__$1;(statearr_12887_12903[(1)] = (3));
} else
{var statearr_12888_12904 = state_12877__$1;(statearr_12888_12904[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12847_12896,ret,map__12846,map__12846__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12847_12896,ret,map__12846,map__12846__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12892 = [null,null,null,null,null,null,null,null,null];(statearr_12892[(0)] = state_machine__6178__auto__);
(statearr_12892[(1)] = (1));
return statearr_12892;
});
var state_machine__6178__auto____1 = (function (state_12877){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12877);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12893){if((e12893 instanceof Object))
{var ex__6181__auto__ = e12893;var statearr_12894_12905 = state_12877;(statearr_12894_12905[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12877);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12906 = state_12877;
state_12877 = G__12906;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12877){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12847_12896,ret,map__12846,map__12846__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12895 = f__6193__auto__.call(null);(statearr_12895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12847_12896,ret,map__12846,map__12846__$1,args,id))
);
return c__6192__auto__;
});})(G__12847_12896,ret,map__12846,map__12846__$1,args,id))
);
G__12847_12896.fail(((function (G__12847_12896,ret,map__12846,map__12846__$1,args,id){
return (function (err){return console.log(err);
});})(G__12847_12896,ret,map__12846,map__12846__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
