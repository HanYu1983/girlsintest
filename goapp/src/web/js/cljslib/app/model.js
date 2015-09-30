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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11483_SHARP_){return cljs.core._EQ_.call(null,view,p1__11483_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11484_SHARP_){return cljs.core._EQ_.call(null,view,p1__11484_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11485_SHARP_){return cljs.core._EQ_.call(null,view,p1__11485_SHARP_);
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
app.model.bottomTab0 = (function bottomTab0(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11486_SHARP_){return cljs.core._EQ_.call(null,view,p1__11486_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11487_SHARP_){return cljs.core._EQ_.call(null,view,p1__11487_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11488_SHARP_){return cljs.core._EQ_.call(null,view,p1__11488_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11489_SHARP_){return cljs.core._EQ_.call(null,view,p1__11489_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11490_SHARP_){return cljs.core._EQ_.call(null,view,p1__11490_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11491_SHARP_){return cljs.core._EQ_.call(null,view,p1__11491_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11492_SHARP_){return cljs.core._EQ_.call(null,view,p1__11492_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11493_SHARP_){return cljs.core._EQ_.call(null,view,p1__11493_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11494_SHARP_){return cljs.core._EQ_.call(null,view,p1__11494_SHARP_);
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
app.model.bottomTab3 = (function bottomTab3(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11495_SHARP_){return cljs.core._EQ_.call(null,view,p1__11495_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11496_SHARP_){return cljs.core._EQ_.call(null,view,p1__11496_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11497_SHARP_){return cljs.core._EQ_.call(null,view,p1__11497_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__11501){var vec__11502 = p__11501;var model = cljs.core.nth.call(null,vec__11502,(0),null);var detail = cljs.core.nth.call(null,vec__11502,(1),null);var G__11503 = (new Date(detail.Date));G__11503.getTime();
return G__11503;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__11506){var vec__11507 = p__11506;var model = cljs.core.nth.call(null,vec__11507,(0),null);var detail = cljs.core.nth.call(null,vec__11507,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__11510){var vec__11511 = p__11510;var model = cljs.core.nth.call(null,vec__11511,(0),null);var detail = cljs.core.nth.call(null,vec__11511,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.SearchRelative = (function SearchRelative(tags,details){return cljs.core.shuffle.call(null,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (tag){return cljs.core.filter.call(null,(function (p__11514){var vec__11515 = p__11514;var model = cljs.core.nth.call(null,vec__11515,(0),null);var detail = cljs.core.nth.call(null,vec__11515,(1),null);return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+".?")),detail.Tag);
}),details);
}),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,tags,/,/))))));
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__11563,key,p__11564){var map__11565 = p__11563;var map__11565__$1 = ((cljs.core.seq_QMARK_.call(null,map__11565))?cljs.core.apply.call(null,cljs.core.hash_map,map__11565):map__11565);var ctx = map__11565__$1;var media_type = cljs.core.get.call(null,map__11565__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__11566 = p__11564;var map__11566__$1 = ((cljs.core.seq_QMARK_.call(null,map__11566))?cljs.core.apply.call(null,cljs.core.hash_map,map__11566):map__11566);var args = map__11566__$1;var page = cljs.core.get.call(null,map__11566__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__11566__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__11567_11610 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11567_11610.done(((function (G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = (12);var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey){
return (function (p__11568){var vec__11569 = p__11568;var model = cljs.core.nth.call(null,vec__11569,(0),null);var detail = cljs.core.nth.call(null,vec__11569,(1),null);var vec__11570 = (function (){var pred__11571 = cljs.core._EQ_;var expr__11572 = media_type;if(cljs.core.truth_(pred__11571.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__11572)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(600)], null);
} else
{if(cljs.core.truth_(pred__11571.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__11572)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(450)], null);
} else
{if(cljs.core.truth_(pred__11571.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__11572)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(450)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(450)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__11570,(0),null);var h = cljs.core.nth.call(null,vec__11570,(1),null);var obj11575 = {"visibleDate":false,"brand":detail.Brand,"signUrl":(cljs.core.truth_(detail.Sign)?app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/sign.png")):null),"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj11575;
});})(modelCountPerPage,filtered,totalPage,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey))
;var dto = (function (){var obj11577 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj11577;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey){
return (function (state_11584){var state_val_11585 = (state_11584[(1)]);if((state_val_11585 === (2)))
{var inst_11581 = (state_11584[(2)]);var inst_11582 = cljs.core.async.close_BANG_.call(null,ret);var state_11584__$1 = (function (){var statearr_11586 = state_11584;(statearr_11586[(7)] = inst_11581);
return statearr_11586;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11584__$1,inst_11582);
} else
{if((state_val_11585 === (1)))
{var inst_11578 = [null,dto];var inst_11579 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11578,null));var state_11584__$1 = state_11584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11584__$1,(2),ret,inst_11579);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11590 = [null,null,null,null,null,null,null,null];(statearr_11590[(0)] = state_machine__6178__auto__);
(statearr_11590[(1)] = (1));
return statearr_11590;
});
var state_machine__6178__auto____1 = (function (state_11584){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11584);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11591){if((e11591 instanceof Object))
{var ex__6181__auto__ = e11591;var statearr_11592_11611 = state_11584;(statearr_11592_11611[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11584);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11591;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11612 = state_11584;
state_11584 = G__11612;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11584){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11593 = f__6193__auto__.call(null);(statearr_11593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11593;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey))
);
G__11567_11610.fail(((function (G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey){
return (function (state_11600){var state_val_11601 = (state_11600[(1)]);if((state_val_11601 === (2)))
{var inst_11597 = (state_11600[(2)]);var inst_11598 = cljs.core.async.close_BANG_.call(null,ret);var state_11600__$1 = (function (){var statearr_11602 = state_11600;(statearr_11602[(7)] = inst_11597);
return statearr_11602;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11600__$1,inst_11598);
} else
{if((state_val_11601 === (1)))
{var inst_11594 = [err,null];var inst_11595 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11594,null));var state_11600__$1 = state_11600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11600__$1,(2),ret,inst_11595);
} else
{return null;
}
}
});})(c__6192__auto__,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11606 = [null,null,null,null,null,null,null,null];(statearr_11606[(0)] = state_machine__6178__auto__);
(statearr_11606[(1)] = (1));
return statearr_11606;
});
var state_machine__6178__auto____1 = (function (state_11600){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11600);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11607){if((e11607 instanceof Object))
{var ex__6181__auto__ = e11607;var statearr_11608_11613 = state_11600;(statearr_11608_11613[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11600);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11614 = state_11600;
state_11600 = G__11614;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11600){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11609 = f__6193__auto__.call(null);(statearr_11609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11567_11610,configType,ret,map__11565,map__11565__$1,ctx,media_type,map__11566,map__11566__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11674){var map__11675 = p__11674;var map__11675__$1 = ((cljs.core.seq_QMARK_.call(null,map__11675))?cljs.core.apply.call(null,cljs.core.hash_map,map__11675):map__11675);var args = map__11675__$1;var id = cljs.core.get.call(null,map__11675__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__11676_11733 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11676_11733.done(((function (G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var relativeDetails = cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (dir,detail,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (p__11677){var vec__11678 = p__11677;var model = cljs.core.nth.call(null,vec__11678,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11678,(1),null);return cljs.core.not_EQ_.call(null,model,id);
});})(dir,detail,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
,app.model.SearchRelative.call(null,detail.Tag,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertHeadDTO = ((function (dir,detail,relativeDetails,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (p__11679){var vec__11680 = p__11679;var key__$1 = cljs.core.nth.call(null,vec__11680,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11680,(1),null);var obj11682 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj11682;
});})(dir,detail,relativeDetails,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function iter__11683(s__11684){return (new cljs.core.LazySeq(null,((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (){var s__11684__$1 = s__11684;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11684__$1);if(temp__4126__auto__)
{var s__11684__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11684__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11684__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11686 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11685 = (0);while(true){
if((i__11685 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__11685);cljs.core.chunk_append.call(null,b__11686,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__11734 = (i__11685 + (1));
i__11685 = G__11734;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11686),iter__11683.call(null,cljs.core.chunk_rest.call(null,s__11684__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11686),null);
}
} else
{var idx = cljs.core.first.call(null,s__11684__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__11683.call(null,cljs.core.rest.call(null,s__11684__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
,null,null));
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function iter__11687(s__11688){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (){var s__11688__$1 = s__11688;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11688__$1);if(temp__4126__auto__)
{var s__11688__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11688__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11688__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11690 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11689 = (0);while(true){
if((i__11689 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__11689);cljs.core.chunk_append.call(null,b__11690,(function (){var obj11696 = {"id":url,"url":ServeFn.call(null,url)};return obj11696;
})());
{
var G__11735 = (i__11689 + (1));
i__11689 = G__11735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11690),iter__11687.call(null,cljs.core.chunk_rest.call(null,s__11688__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11690),null);
}
} else
{var url = cljs.core.first.call(null,s__11688__$2);return cljs.core.cons.call(null,(function (){var obj11698 = {"id":url,"url":ServeFn.call(null,url)};return obj11698;
})(),iter__11687.call(null,cljs.core.rest.call(null,s__11688__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
,null,null));
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
;var dto = (function (){var obj11700 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"signUrl":(cljs.core.truth_(detail.Sign)?app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/sign.png")):null),"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab3":app.model.bottomTab3.call(null,name),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"bottomTab0":app.model.bottomTab0.call(null,name),"modelDetail":detail.Description,"visibleFullscreen":(cljs.core.truth_(mobileAndTabletcheck())?true:detail.Fullscreen),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,relativeDetails)),"date":detail.Date,"protalk":detail.Comment};return obj11700;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (state_11707){var state_val_11708 = (state_11707[(1)]);if((state_val_11708 === (2)))
{var inst_11704 = (state_11707[(2)]);var inst_11705 = cljs.core.async.close_BANG_.call(null,ret);var state_11707__$1 = (function (){var statearr_11709 = state_11707;(statearr_11709[(7)] = inst_11704);
return statearr_11709;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11707__$1,inst_11705);
} else
{if((state_val_11708 === (1)))
{var inst_11701 = [null,dto];var inst_11702 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11701,null));var state_11707__$1 = state_11707;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11707__$1,(2),ret,inst_11702);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11713 = [null,null,null,null,null,null,null,null];(statearr_11713[(0)] = state_machine__6178__auto__);
(statearr_11713[(1)] = (1));
return statearr_11713;
});
var state_machine__6178__auto____1 = (function (state_11707){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11707);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11714){if((e11714 instanceof Object))
{var ex__6181__auto__ = e11714;var statearr_11715_11736 = state_11707;(statearr_11715_11736[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11707);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11737 = state_11707;
state_11707 = G__11737;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11707){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11716 = f__6193__auto__.call(null);(statearr_11716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
);
return c__6192__auto__;
});})(G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
);
G__11676_11733.fail(((function (G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
return (function (state_11723){var state_val_11724 = (state_11723[(1)]);if((state_val_11724 === (2)))
{var inst_11720 = (state_11723[(2)]);var inst_11721 = cljs.core.async.close_BANG_.call(null,ret);var state_11723__$1 = (function (){var statearr_11725 = state_11723;(statearr_11725[(7)] = inst_11720);
return statearr_11725;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11723__$1,inst_11721);
} else
{if((state_val_11724 === (1)))
{var inst_11717 = [err,null];var inst_11718 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11717,null));var state_11723__$1 = state_11723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11723__$1,(2),ret,inst_11718);
} else
{return null;
}
}
});})(c__6192__auto__,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id){
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
{var ex__6181__auto__ = e11730;var statearr_11731_11738 = state_11723;(statearr_11731_11738[(5)] = ex__6181__auto__);
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
var G__11739 = state_11723;
state_11723 = G__11739;
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
;})(switch__6177__auto__,c__6192__auto__,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11732 = f__6193__auto__.call(null);(statearr_11732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
);
return c__6192__auto__;
});})(G__11676_11733,ret,configType,map__11675,map__11675__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__11741_11780 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__11741_11780.done(((function (G__11741_11780,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11741_11780,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11741_11780,ret){
return (function (state_11754){var state_val_11755 = (state_11754[(1)]);if((state_val_11755 === (2)))
{var inst_11751 = (state_11754[(2)]);var inst_11752 = cljs.core.async.close_BANG_.call(null,ret);var state_11754__$1 = (function (){var statearr_11756 = state_11754;(statearr_11756[(7)] = inst_11751);
return statearr_11756;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11754__$1,inst_11752);
} else
{if((state_val_11755 === (1)))
{var inst_11744 = detail.ModelKey;var inst_11745 = clojure.string.capitalize.call(null,where);var inst_11746 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11745)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_11747 = {"modelKey":inst_11744,"moreUrl":inst_11746};var inst_11748 = [null,inst_11747];var inst_11749 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11748,null));var state_11754__$1 = state_11754;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11754__$1,(2),ret,inst_11749);
} else
{return null;
}
}
});})(c__6192__auto__,G__11741_11780,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11741_11780,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11760 = [null,null,null,null,null,null,null,null];(statearr_11760[(0)] = state_machine__6178__auto__);
(statearr_11760[(1)] = (1));
return statearr_11760;
});
var state_machine__6178__auto____1 = (function (state_11754){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11754);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11761){if((e11761 instanceof Object))
{var ex__6181__auto__ = e11761;var statearr_11762_11781 = state_11754;(statearr_11762_11781[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11754);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11761;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11782 = state_11754;
state_11754 = G__11782;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11754){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11741_11780,ret))
})();var state__6194__auto__ = (function (){var statearr_11763 = f__6193__auto__.call(null);(statearr_11763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11741_11780,ret))
);
return c__6192__auto__;
});})(G__11741_11780,ret))
);
G__11741_11780.fail(((function (G__11741_11780,ret){
return (function (p1__11740_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11741_11780,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11741_11780,ret){
return (function (state_11770){var state_val_11771 = (state_11770[(1)]);if((state_val_11771 === (2)))
{var inst_11767 = (state_11770[(2)]);var inst_11768 = cljs.core.async.close_BANG_.call(null,ret);var state_11770__$1 = (function (){var statearr_11772 = state_11770;(statearr_11772[(7)] = inst_11767);
return statearr_11772;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11770__$1,inst_11768);
} else
{if((state_val_11771 === (1)))
{var inst_11764 = [p1__11740_SHARP_,null];var inst_11765 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11764,null));var state_11770__$1 = state_11770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11770__$1,(2),ret,inst_11765);
} else
{return null;
}
}
});})(c__6192__auto__,G__11741_11780,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11741_11780,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11776 = [null,null,null,null,null,null,null,null];(statearr_11776[(0)] = state_machine__6178__auto__);
(statearr_11776[(1)] = (1));
return statearr_11776;
});
var state_machine__6178__auto____1 = (function (state_11770){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11770);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11777){if((e11777 instanceof Object))
{var ex__6181__auto__ = e11777;var statearr_11778_11783 = state_11770;(statearr_11778_11783[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11770);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11784 = state_11770;
state_11770 = G__11784;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11770){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11741_11780,ret))
})();var state__6194__auto__ = (function (){var statearr_11779 = f__6193__auto__.call(null);(statearr_11779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11741_11780,ret))
);
return c__6192__auto__;
});})(G__11741_11780,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__11785){var map__11786 = p__11785;var map__11786__$1 = ((cljs.core.seq_QMARK_.call(null,map__11786))?cljs.core.apply.call(null,cljs.core.hash_map,map__11786):map__11786);var args = map__11786__$1;var url = cljs.core.get.call(null,map__11786__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11806 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11806,ret,map__11786,map__11786__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11806,ret,map__11786,map__11786__$1,args,url){
return (function (state_11796){var state_val_11797 = (state_11796[(1)]);if((state_val_11797 === (2)))
{var inst_11793 = (state_11796[(2)]);var inst_11794 = cljs.core.async.close_BANG_.call(null,ret);var state_11796__$1 = (function (){var statearr_11798 = state_11796;(statearr_11798[(7)] = inst_11793);
return statearr_11798;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11796__$1,inst_11794);
} else
{if((state_val_11797 === (1)))
{var inst_11789 = {"url":url};var inst_11790 = [null,inst_11789];var inst_11791 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11790,null));var state_11796__$1 = state_11796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11796__$1,(2),ret,inst_11791);
} else
{return null;
}
}
});})(c__6192__auto___11806,ret,map__11786,map__11786__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___11806,ret,map__11786,map__11786__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11802 = [null,null,null,null,null,null,null,null];(statearr_11802[(0)] = state_machine__6178__auto__);
(statearr_11802[(1)] = (1));
return statearr_11802;
});
var state_machine__6178__auto____1 = (function (state_11796){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11796);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11803){if((e11803 instanceof Object))
{var ex__6181__auto__ = e11803;var statearr_11804_11807 = state_11796;(statearr_11804_11807[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11796);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11803;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11808 = state_11796;
state_11796 = G__11808;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11796){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11806,ret,map__11786,map__11786__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_11805 = f__6193__auto__.call(null);(statearr_11805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11806);
return statearr_11805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11806,ret,map__11786,map__11786__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__11809){var map__11810 = p__11809;var map__11810__$1 = ((cljs.core.seq_QMARK_.call(null,map__11810))?cljs.core.apply.call(null,cljs.core.hash_map,map__11810):map__11810);var args = map__11810__$1;var id = cljs.core.get.call(null,map__11810__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11827 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11827,ret,map__11810,map__11810__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11827,ret,map__11810,map__11810__$1,args,id){
return (function (state_11817){var state_val_11818 = (state_11817[(1)]);if((state_val_11818 === (2)))
{var inst_11814 = (state_11817[(2)]);var inst_11815 = cljs.core.async.close_BANG_.call(null,ret);var state_11817__$1 = (function (){var statearr_11819 = state_11817;(statearr_11819[(7)] = inst_11814);
return statearr_11819;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11817__$1,inst_11815);
} else
{if((state_val_11818 === (1)))
{var inst_11811 = [null,null];var inst_11812 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11811,null));var state_11817__$1 = state_11817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11817__$1,(2),ret,inst_11812);
} else
{return null;
}
}
});})(c__6192__auto___11827,ret,map__11810,map__11810__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___11827,ret,map__11810,map__11810__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11823 = [null,null,null,null,null,null,null,null];(statearr_11823[(0)] = state_machine__6178__auto__);
(statearr_11823[(1)] = (1));
return statearr_11823;
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
}catch (e11824){if((e11824 instanceof Object))
{var ex__6181__auto__ = e11824;var statearr_11825_11828 = state_11817;(statearr_11825_11828[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11817);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11829 = state_11817;
state_11817 = G__11829;
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
;})(switch__6177__auto__,c__6192__auto___11827,ret,map__11810,map__11810__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11826 = f__6193__auto__.call(null);(statearr_11826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11827);
return statearr_11826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11827,ret,map__11810,map__11810__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__11830 = cljs.core.rest.call(null,list);
var G__11831 = id;
var G__11832 = (start + (1));
list = G__11830;
id = G__11831;
start = G__11832;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__11834){var map__11835 = p__11834;var map__11835__$1 = ((cljs.core.seq_QMARK_.call(null,map__11835))?cljs.core.apply.call(null,cljs.core.hash_map,map__11835):map__11835);var args = map__11835__$1;var id = cljs.core.get.call(null,map__11835__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__11836_11885 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__11836_11885.done(((function (G__11836_11885,ret,map__11835,map__11835__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__11836_11885,ret,map__11835,map__11835__$1,args,id){
return (function (p1__11833_SHARP_){var obj11838 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__11833_SHARP_ + (1)))+".jpg"))};return obj11838;
});})(filtered,evtId,evt,G__11836_11885,ret,map__11835,map__11835__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11836_11885,ret,map__11835,map__11835__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11836_11885,ret,map__11835,map__11835__$1,args,id){
return (function (state_11866){var state_val_11867 = (state_11866[(1)]);if((state_val_11867 === (8)))
{var inst_11847 = (state_11866[(7)]);var inst_11854 = (state_11866[(2)]);var inst_11855 = (evt["Title"]);var inst_11856 = (evt["Date"]);var inst_11857 = (evt["Content"]);var inst_11858 = (evt["Form"]);var inst_11859 = {"prev_href":inst_11847,"next_href":inst_11854,"title":inst_11855,"date":inst_11856,"sideList":photos,"content":inst_11857,"form":inst_11858};var inst_11860 = [null,inst_11859];var inst_11861 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11860,null));var state_11866__$1 = state_11866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11866__$1,(2),ret,inst_11861);
} else
{if((state_val_11867 === (7)))
{var state_11866__$1 = state_11866;var statearr_11868_11886 = state_11866__$1;(statearr_11868_11886[(2)] = null);
(statearr_11868_11886[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11867 === (6)))
{var inst_11849 = cljs.core.nth.call(null,filtered,nextId);var inst_11850 = cljs.core.first.call(null,inst_11849);var inst_11851 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11850));var state_11866__$1 = state_11866;var statearr_11869_11887 = state_11866__$1;(statearr_11869_11887[(2)] = inst_11851);
(statearr_11869_11887[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11867 === (5)))
{var inst_11847 = (state_11866[(2)]);var state_11866__$1 = (function (){var statearr_11870 = state_11866;(statearr_11870[(7)] = inst_11847);
return statearr_11870;
})();if(cljs.core.truth_(nextId))
{var statearr_11871_11888 = state_11866__$1;(statearr_11871_11888[(1)] = (6));
} else
{var statearr_11872_11889 = state_11866__$1;(statearr_11872_11889[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11867 === (4)))
{var state_11866__$1 = state_11866;var statearr_11873_11890 = state_11866__$1;(statearr_11873_11890[(2)] = null);
(statearr_11873_11890[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11867 === (3)))
{var inst_11842 = cljs.core.nth.call(null,filtered,prevId);var inst_11843 = cljs.core.first.call(null,inst_11842);var inst_11844 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11843));var state_11866__$1 = state_11866;var statearr_11874_11891 = state_11866__$1;(statearr_11874_11891[(2)] = inst_11844);
(statearr_11874_11891[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11867 === (2)))
{var inst_11863 = (state_11866[(2)]);var inst_11864 = cljs.core.async.close_BANG_.call(null,ret);var state_11866__$1 = (function (){var statearr_11875 = state_11866;(statearr_11875[(8)] = inst_11863);
return statearr_11875;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11866__$1,inst_11864);
} else
{if((state_val_11867 === (1)))
{var state_11866__$1 = state_11866;if(cljs.core.truth_(prevId))
{var statearr_11876_11892 = state_11866__$1;(statearr_11876_11892[(1)] = (3));
} else
{var statearr_11877_11893 = state_11866__$1;(statearr_11877_11893[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11836_11885,ret,map__11835,map__11835__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11836_11885,ret,map__11835,map__11835__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11881 = [null,null,null,null,null,null,null,null,null];(statearr_11881[(0)] = state_machine__6178__auto__);
(statearr_11881[(1)] = (1));
return statearr_11881;
});
var state_machine__6178__auto____1 = (function (state_11866){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11866);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11882){if((e11882 instanceof Object))
{var ex__6181__auto__ = e11882;var statearr_11883_11894 = state_11866;(statearr_11883_11894[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11866);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11895 = state_11866;
state_11866 = G__11895;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11866){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11836_11885,ret,map__11835,map__11835__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11884 = f__6193__auto__.call(null);(statearr_11884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__11836_11885,ret,map__11835,map__11835__$1,args,id))
);
return c__6192__auto__;
});})(G__11836_11885,ret,map__11835,map__11835__$1,args,id))
);
G__11836_11885.fail(((function (G__11836_11885,ret,map__11835,map__11835__$1,args,id){
return (function (err){return console.log(err);
});})(G__11836_11885,ret,map__11835,map__11835__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
