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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11668_SHARP_){return cljs.core._EQ_.call(null,view,p1__11668_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11669_SHARP_){return cljs.core._EQ_.call(null,view,p1__11669_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11670_SHARP_){return cljs.core._EQ_.call(null,view,p1__11670_SHARP_);
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
app.model.bottomTab0 = (function bottomTab0(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11671_SHARP_){return cljs.core._EQ_.call(null,view,p1__11671_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11672_SHARP_){return cljs.core._EQ_.call(null,view,p1__11672_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11673_SHARP_){return cljs.core._EQ_.call(null,view,p1__11673_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11674_SHARP_){return cljs.core._EQ_.call(null,view,p1__11674_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11675_SHARP_){return cljs.core._EQ_.call(null,view,p1__11675_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11676_SHARP_){return cljs.core._EQ_.call(null,view,p1__11676_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11677_SHARP_){return cljs.core._EQ_.call(null,view,p1__11677_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11678_SHARP_){return cljs.core._EQ_.call(null,view,p1__11678_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11679_SHARP_){return cljs.core._EQ_.call(null,view,p1__11679_SHARP_);
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
app.model.bottomTab3 = (function bottomTab3(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11680_SHARP_){return cljs.core._EQ_.call(null,view,p1__11680_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11681_SHARP_){return cljs.core._EQ_.call(null,view,p1__11681_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11682_SHARP_){return cljs.core._EQ_.call(null,view,p1__11682_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__11686){var vec__11687 = p__11686;var model = cljs.core.nth.call(null,vec__11687,(0),null);var detail = cljs.core.nth.call(null,vec__11687,(1),null);var G__11688 = (new Date(detail.Date));G__11688.getTime();
return G__11688;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__11691){var vec__11692 = p__11691;var model = cljs.core.nth.call(null,vec__11692,(0),null);var detail = cljs.core.nth.call(null,vec__11692,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__11695){var vec__11696 = p__11695;var model = cljs.core.nth.call(null,vec__11696,(0),null);var detail = cljs.core.nth.call(null,vec__11696,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.SearchRelative = (function SearchRelative(tags,details){return cljs.core.shuffle.call(null,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (tag){return cljs.core.filter.call(null,(function (p__11699){var vec__11700 = p__11699;var model = cljs.core.nth.call(null,vec__11700,(0),null);var detail = cljs.core.nth.call(null,vec__11700,(1),null);return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+".?")),detail.Tag);
}),details);
}),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,tags,/,/))))));
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__11748,key,p__11749){var map__11750 = p__11748;var map__11750__$1 = ((cljs.core.seq_QMARK_.call(null,map__11750))?cljs.core.apply.call(null,cljs.core.hash_map,map__11750):map__11750);var ctx = map__11750__$1;var media_type = cljs.core.get.call(null,map__11750__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__11751 = p__11749;var map__11751__$1 = ((cljs.core.seq_QMARK_.call(null,map__11751))?cljs.core.apply.call(null,cljs.core.hash_map,map__11751):map__11751);var args = map__11751__$1;var page = cljs.core.get.call(null,map__11751__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__11751__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__11752_11795 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11752_11795.done(((function (G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = (12);var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey){
return (function (p__11753){var vec__11754 = p__11753;var model = cljs.core.nth.call(null,vec__11754,(0),null);var detail = cljs.core.nth.call(null,vec__11754,(1),null);var vec__11755 = (function (){var pred__11756 = cljs.core._EQ_;var expr__11757 = media_type;if(cljs.core.truth_(pred__11756.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__11757)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(600)], null);
} else
{if(cljs.core.truth_(pred__11756.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__11757)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{if(cljs.core.truth_(pred__11756.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__11757)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__11755,(0),null);var h = cljs.core.nth.call(null,vec__11755,(1),null);var obj11760 = {"visibleDate":false,"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj11760;
});})(modelCountPerPage,filtered,totalPage,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey))
;var dto = (function (){var obj11762 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj11762;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey){
return (function (state_11769){var state_val_11770 = (state_11769[(1)]);if((state_val_11770 === (2)))
{var inst_11766 = (state_11769[(2)]);var inst_11767 = cljs.core.async.close_BANG_.call(null,ret);var state_11769__$1 = (function (){var statearr_11771 = state_11769;(statearr_11771[(7)] = inst_11766);
return statearr_11771;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11769__$1,inst_11767);
} else
{if((state_val_11770 === (1)))
{var inst_11763 = [null,dto];var inst_11764 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11763,null));var state_11769__$1 = state_11769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11769__$1,(2),ret,inst_11764);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11775 = [null,null,null,null,null,null,null,null];(statearr_11775[(0)] = state_machine__6178__auto__);
(statearr_11775[(1)] = (1));
return statearr_11775;
});
var state_machine__6178__auto____1 = (function (state_11769){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11769);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11776){if((e11776 instanceof Object))
{var ex__6181__auto__ = e11776;var statearr_11777_11796 = state_11769;(statearr_11777_11796[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11797 = state_11769;
state_11769 = G__11797;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11769){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11778 = f__6193__auto__.call(null);(statearr_11778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey))
);
G__11752_11795.fail(((function (G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey){
return (function (state_11785){var state_val_11786 = (state_11785[(1)]);if((state_val_11786 === (2)))
{var inst_11782 = (state_11785[(2)]);var inst_11783 = cljs.core.async.close_BANG_.call(null,ret);var state_11785__$1 = (function (){var statearr_11787 = state_11785;(statearr_11787[(7)] = inst_11782);
return statearr_11787;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11785__$1,inst_11783);
} else
{if((state_val_11786 === (1)))
{var inst_11779 = [err,null];var inst_11780 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11779,null));var state_11785__$1 = state_11785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11785__$1,(2),ret,inst_11780);
} else
{return null;
}
}
});})(c__6192__auto__,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11791 = [null,null,null,null,null,null,null,null];(statearr_11791[(0)] = state_machine__6178__auto__);
(statearr_11791[(1)] = (1));
return statearr_11791;
});
var state_machine__6178__auto____1 = (function (state_11785){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11785);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11792){if((e11792 instanceof Object))
{var ex__6181__auto__ = e11792;var statearr_11793_11798 = state_11785;(statearr_11793_11798[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11792;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11799 = state_11785;
state_11785 = G__11799;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11785){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_11794 = f__6193__auto__.call(null);(statearr_11794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__11752_11795,configType,ret,map__11750,map__11750__$1,ctx,media_type,map__11751,map__11751__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__11859){var map__11860 = p__11859;var map__11860__$1 = ((cljs.core.seq_QMARK_.call(null,map__11860))?cljs.core.apply.call(null,cljs.core.hash_map,map__11860):map__11860);var args = map__11860__$1;var id = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__11861_11918 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__11861_11918.done(((function (G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var relativeDetails = cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (dir,detail,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (p__11862){var vec__11863 = p__11862;var model = cljs.core.nth.call(null,vec__11863,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11863,(1),null);return cljs.core.not_EQ_.call(null,model,id);
});})(dir,detail,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
,app.model.SearchRelative.call(null,detail.Tag,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertHeadDTO = ((function (dir,detail,relativeDetails,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (p__11864){var vec__11865 = p__11864;var key__$1 = cljs.core.nth.call(null,vec__11865,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__11865,(1),null);var obj11867 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj11867;
});})(dir,detail,relativeDetails,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function iter__11868(s__11869){return (new cljs.core.LazySeq(null,((function (dir,detail,relativeDetails,ConvertHeadDTO,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (){var s__11869__$1 = s__11869;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11869__$1);if(temp__4126__auto__)
{var s__11869__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11869__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11869__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11871 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11870 = (0);while(true){
if((i__11870 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__11870);cljs.core.chunk_append.call(null,b__11871,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__11919 = (i__11870 + (1));
i__11870 = G__11919;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11871),iter__11868.call(null,cljs.core.chunk_rest.call(null,s__11869__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11871),null);
}
} else
{var idx = cljs.core.first.call(null,s__11869__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__11868.call(null,cljs.core.rest.call(null,s__11869__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
,null,null));
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function iter__11872(s__11873){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (){var s__11873__$1 = s__11873;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11873__$1);if(temp__4126__auto__)
{var s__11873__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11873__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11873__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11875 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11874 = (0);while(true){
if((i__11874 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__11874);cljs.core.chunk_append.call(null,b__11875,(function (){var obj11881 = {"id":url,"url":ServeFn.call(null,url)};return obj11881;
})());
{
var G__11920 = (i__11874 + (1));
i__11874 = G__11920;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11875),iter__11872.call(null,cljs.core.chunk_rest.call(null,s__11873__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11875),null);
}
} else
{var url = cljs.core.first.call(null,s__11873__$2);return cljs.core.cons.call(null,(function (){var obj11883 = {"id":url,"url":ServeFn.call(null,url)};return obj11883;
})(),iter__11872.call(null,cljs.core.rest.call(null,s__11873__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
,null,null));
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
;var dto = (function (){var obj11885 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"signUrl":(cljs.core.truth_(detail.Sign)?app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/sign.png")):null),"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab3":app.model.bottomTab3.call(null,name),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"bottomTab0":app.model.bottomTab0.call(null,name),"modelDetail":detail.Description,"visibleFullscreen":(cljs.core.truth_(mobileAndTabletcheck())?true:detail.Fullscreen),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,relativeDetails)),"date":detail.Date,"protalk":detail.Comment};return obj11885;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (state_11892){var state_val_11893 = (state_11892[(1)]);if((state_val_11893 === (2)))
{var inst_11889 = (state_11892[(2)]);var inst_11890 = cljs.core.async.close_BANG_.call(null,ret);var state_11892__$1 = (function (){var statearr_11894 = state_11892;(statearr_11894[(7)] = inst_11889);
return statearr_11894;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11892__$1,inst_11890);
} else
{if((state_val_11893 === (1)))
{var inst_11886 = [null,dto];var inst_11887 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11886,null));var state_11892__$1 = state_11892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11892__$1,(2),ret,inst_11887);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11898 = [null,null,null,null,null,null,null,null];(statearr_11898[(0)] = state_machine__6178__auto__);
(statearr_11898[(1)] = (1));
return statearr_11898;
});
var state_machine__6178__auto____1 = (function (state_11892){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11892);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11899){if((e11899 instanceof Object))
{var ex__6181__auto__ = e11899;var statearr_11900_11921 = state_11892;(statearr_11900_11921[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11892);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11922 = state_11892;
state_11892 = G__11922;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11892){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11901 = f__6193__auto__.call(null);(statearr_11901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
);
return c__6192__auto__;
});})(G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
);
G__11861_11918.fail(((function (G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function (state_11908){var state_val_11909 = (state_11908[(1)]);if((state_val_11909 === (2)))
{var inst_11905 = (state_11908[(2)]);var inst_11906 = cljs.core.async.close_BANG_.call(null,ret);var state_11908__$1 = (function (){var statearr_11910 = state_11908;(statearr_11910[(7)] = inst_11905);
return statearr_11910;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11908__$1,inst_11906);
} else
{if((state_val_11909 === (1)))
{var inst_11902 = [err,null];var inst_11903 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11902,null));var state_11908__$1 = state_11908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11908__$1,(2),ret,inst_11903);
} else
{return null;
}
}
});})(c__6192__auto__,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11914 = [null,null,null,null,null,null,null,null];(statearr_11914[(0)] = state_machine__6178__auto__);
(statearr_11914[(1)] = (1));
return statearr_11914;
});
var state_machine__6178__auto____1 = (function (state_11908){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11908);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11915){if((e11915 instanceof Object))
{var ex__6181__auto__ = e11915;var statearr_11916_11923 = state_11908;(statearr_11916_11923[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11908);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11924 = state_11908;
state_11908 = G__11924;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11908){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_11917 = f__6193__auto__.call(null);(statearr_11917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
);
return c__6192__auto__;
});})(G__11861_11918,ret,configType,map__11860,map__11860__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__11926_11965 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__11926_11965.done(((function (G__11926_11965,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11926_11965,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11926_11965,ret){
return (function (state_11939){var state_val_11940 = (state_11939[(1)]);if((state_val_11940 === (2)))
{var inst_11936 = (state_11939[(2)]);var inst_11937 = cljs.core.async.close_BANG_.call(null,ret);var state_11939__$1 = (function (){var statearr_11941 = state_11939;(statearr_11941[(7)] = inst_11936);
return statearr_11941;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11939__$1,inst_11937);
} else
{if((state_val_11940 === (1)))
{var inst_11929 = detail.ModelKey;var inst_11930 = clojure.string.capitalize.call(null,where);var inst_11931 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11930)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_11932 = {"modelKey":inst_11929,"moreUrl":inst_11931};var inst_11933 = [null,inst_11932];var inst_11934 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11933,null));var state_11939__$1 = state_11939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11939__$1,(2),ret,inst_11934);
} else
{return null;
}
}
});})(c__6192__auto__,G__11926_11965,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11926_11965,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11945 = [null,null,null,null,null,null,null,null];(statearr_11945[(0)] = state_machine__6178__auto__);
(statearr_11945[(1)] = (1));
return statearr_11945;
});
var state_machine__6178__auto____1 = (function (state_11939){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11939);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11946){if((e11946 instanceof Object))
{var ex__6181__auto__ = e11946;var statearr_11947_11966 = state_11939;(statearr_11947_11966[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11939);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11967 = state_11939;
state_11939 = G__11967;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11939){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11926_11965,ret))
})();var state__6194__auto__ = (function (){var statearr_11948 = f__6193__auto__.call(null);(statearr_11948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11926_11965,ret))
);
return c__6192__auto__;
});})(G__11926_11965,ret))
);
G__11926_11965.fail(((function (G__11926_11965,ret){
return (function (p1__11925_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__11926_11965,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__11926_11965,ret){
return (function (state_11955){var state_val_11956 = (state_11955[(1)]);if((state_val_11956 === (2)))
{var inst_11952 = (state_11955[(2)]);var inst_11953 = cljs.core.async.close_BANG_.call(null,ret);var state_11955__$1 = (function (){var statearr_11957 = state_11955;(statearr_11957[(7)] = inst_11952);
return statearr_11957;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11955__$1,inst_11953);
} else
{if((state_val_11956 === (1)))
{var inst_11949 = [p1__11925_SHARP_,null];var inst_11950 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11949,null));var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11955__$1,(2),ret,inst_11950);
} else
{return null;
}
}
});})(c__6192__auto__,G__11926_11965,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__11926_11965,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11961 = [null,null,null,null,null,null,null,null];(statearr_11961[(0)] = state_machine__6178__auto__);
(statearr_11961[(1)] = (1));
return statearr_11961;
});
var state_machine__6178__auto____1 = (function (state_11955){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11962){if((e11962 instanceof Object))
{var ex__6181__auto__ = e11962;var statearr_11963_11968 = state_11955;(statearr_11963_11968[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11955);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11969 = state_11955;
state_11955 = G__11969;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11955){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__11926_11965,ret))
})();var state__6194__auto__ = (function (){var statearr_11964 = f__6193__auto__.call(null);(statearr_11964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__11926_11965,ret))
);
return c__6192__auto__;
});})(G__11926_11965,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__11970){var map__11971 = p__11970;var map__11971__$1 = ((cljs.core.seq_QMARK_.call(null,map__11971))?cljs.core.apply.call(null,cljs.core.hash_map,map__11971):map__11971);var args = map__11971__$1;var url = cljs.core.get.call(null,map__11971__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___11991 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11991,ret,map__11971,map__11971__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11991,ret,map__11971,map__11971__$1,args,url){
return (function (state_11981){var state_val_11982 = (state_11981[(1)]);if((state_val_11982 === (2)))
{var inst_11978 = (state_11981[(2)]);var inst_11979 = cljs.core.async.close_BANG_.call(null,ret);var state_11981__$1 = (function (){var statearr_11983 = state_11981;(statearr_11983[(7)] = inst_11978);
return statearr_11983;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11981__$1,inst_11979);
} else
{if((state_val_11982 === (1)))
{var inst_11974 = {"url":url};var inst_11975 = [null,inst_11974];var inst_11976 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11975,null));var state_11981__$1 = state_11981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11981__$1,(2),ret,inst_11976);
} else
{return null;
}
}
});})(c__6192__auto___11991,ret,map__11971,map__11971__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___11991,ret,map__11971,map__11971__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11987 = [null,null,null,null,null,null,null,null];(statearr_11987[(0)] = state_machine__6178__auto__);
(statearr_11987[(1)] = (1));
return statearr_11987;
});
var state_machine__6178__auto____1 = (function (state_11981){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11981);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11988){if((e11988 instanceof Object))
{var ex__6181__auto__ = e11988;var statearr_11989_11992 = state_11981;(statearr_11989_11992[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11993 = state_11981;
state_11981 = G__11993;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11981){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11991,ret,map__11971,map__11971__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_11990 = f__6193__auto__.call(null);(statearr_11990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11991);
return statearr_11990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11991,ret,map__11971,map__11971__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__11994){var map__11995 = p__11994;var map__11995__$1 = ((cljs.core.seq_QMARK_.call(null,map__11995))?cljs.core.apply.call(null,cljs.core.hash_map,map__11995):map__11995);var args = map__11995__$1;var id = cljs.core.get.call(null,map__11995__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___12012 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___12012,ret,map__11995,map__11995__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___12012,ret,map__11995,map__11995__$1,args,id){
return (function (state_12002){var state_val_12003 = (state_12002[(1)]);if((state_val_12003 === (2)))
{var inst_11999 = (state_12002[(2)]);var inst_12000 = cljs.core.async.close_BANG_.call(null,ret);var state_12002__$1 = (function (){var statearr_12004 = state_12002;(statearr_12004[(7)] = inst_11999);
return statearr_12004;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12002__$1,inst_12000);
} else
{if((state_val_12003 === (1)))
{var inst_11996 = [null,null];var inst_11997 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11996,null));var state_12002__$1 = state_12002;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12002__$1,(2),ret,inst_11997);
} else
{return null;
}
}
});})(c__6192__auto___12012,ret,map__11995,map__11995__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___12012,ret,map__11995,map__11995__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12008 = [null,null,null,null,null,null,null,null];(statearr_12008[(0)] = state_machine__6178__auto__);
(statearr_12008[(1)] = (1));
return statearr_12008;
});
var state_machine__6178__auto____1 = (function (state_12002){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12002);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12009){if((e12009 instanceof Object))
{var ex__6181__auto__ = e12009;var statearr_12010_12013 = state_12002;(statearr_12010_12013[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12002);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12014 = state_12002;
state_12002 = G__12014;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12002){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___12012,ret,map__11995,map__11995__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12011 = f__6193__auto__.call(null);(statearr_12011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12012);
return statearr_12011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___12012,ret,map__11995,map__11995__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__12015 = cljs.core.rest.call(null,list);
var G__12016 = id;
var G__12017 = (start + (1));
list = G__12015;
id = G__12016;
start = G__12017;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__12019){var map__12020 = p__12019;var map__12020__$1 = ((cljs.core.seq_QMARK_.call(null,map__12020))?cljs.core.apply.call(null,cljs.core.hash_map,map__12020):map__12020);var args = map__12020__$1;var id = cljs.core.get.call(null,map__12020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__12021_12070 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__12021_12070.done(((function (G__12021_12070,ret,map__12020,map__12020__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__12021_12070,ret,map__12020,map__12020__$1,args,id){
return (function (p1__12018_SHARP_){var obj12023 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__12018_SHARP_ + (1)))+".jpg"))};return obj12023;
});})(filtered,evtId,evt,G__12021_12070,ret,map__12020,map__12020__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12021_12070,ret,map__12020,map__12020__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12021_12070,ret,map__12020,map__12020__$1,args,id){
return (function (state_12051){var state_val_12052 = (state_12051[(1)]);if((state_val_12052 === (8)))
{var inst_12032 = (state_12051[(7)]);var inst_12039 = (state_12051[(2)]);var inst_12040 = (evt["Title"]);var inst_12041 = (evt["Date"]);var inst_12042 = (evt["Content"]);var inst_12043 = (evt["Form"]);var inst_12044 = {"prev_href":inst_12032,"next_href":inst_12039,"title":inst_12040,"date":inst_12041,"sideList":photos,"content":inst_12042,"form":inst_12043};var inst_12045 = [null,inst_12044];var inst_12046 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12045,null));var state_12051__$1 = state_12051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12051__$1,(2),ret,inst_12046);
} else
{if((state_val_12052 === (7)))
{var state_12051__$1 = state_12051;var statearr_12053_12071 = state_12051__$1;(statearr_12053_12071[(2)] = null);
(statearr_12053_12071[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12052 === (6)))
{var inst_12034 = cljs.core.nth.call(null,filtered,nextId);var inst_12035 = cljs.core.first.call(null,inst_12034);var inst_12036 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12035));var state_12051__$1 = state_12051;var statearr_12054_12072 = state_12051__$1;(statearr_12054_12072[(2)] = inst_12036);
(statearr_12054_12072[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12052 === (5)))
{var inst_12032 = (state_12051[(2)]);var state_12051__$1 = (function (){var statearr_12055 = state_12051;(statearr_12055[(7)] = inst_12032);
return statearr_12055;
})();if(cljs.core.truth_(nextId))
{var statearr_12056_12073 = state_12051__$1;(statearr_12056_12073[(1)] = (6));
} else
{var statearr_12057_12074 = state_12051__$1;(statearr_12057_12074[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12052 === (4)))
{var state_12051__$1 = state_12051;var statearr_12058_12075 = state_12051__$1;(statearr_12058_12075[(2)] = null);
(statearr_12058_12075[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12052 === (3)))
{var inst_12027 = cljs.core.nth.call(null,filtered,prevId);var inst_12028 = cljs.core.first.call(null,inst_12027);var inst_12029 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12028));var state_12051__$1 = state_12051;var statearr_12059_12076 = state_12051__$1;(statearr_12059_12076[(2)] = inst_12029);
(statearr_12059_12076[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12052 === (2)))
{var inst_12048 = (state_12051[(2)]);var inst_12049 = cljs.core.async.close_BANG_.call(null,ret);var state_12051__$1 = (function (){var statearr_12060 = state_12051;(statearr_12060[(8)] = inst_12048);
return statearr_12060;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12051__$1,inst_12049);
} else
{if((state_val_12052 === (1)))
{var state_12051__$1 = state_12051;if(cljs.core.truth_(prevId))
{var statearr_12061_12077 = state_12051__$1;(statearr_12061_12077[(1)] = (3));
} else
{var statearr_12062_12078 = state_12051__$1;(statearr_12062_12078[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12021_12070,ret,map__12020,map__12020__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12021_12070,ret,map__12020,map__12020__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12066 = [null,null,null,null,null,null,null,null,null];(statearr_12066[(0)] = state_machine__6178__auto__);
(statearr_12066[(1)] = (1));
return statearr_12066;
});
var state_machine__6178__auto____1 = (function (state_12051){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12051);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12067){if((e12067 instanceof Object))
{var ex__6181__auto__ = e12067;var statearr_12068_12079 = state_12051;(statearr_12068_12079[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12051);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12080 = state_12051;
state_12051 = G__12080;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12051){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12021_12070,ret,map__12020,map__12020__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_12069 = f__6193__auto__.call(null);(statearr_12069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__12021_12070,ret,map__12020,map__12020__$1,args,id))
);
return c__6192__auto__;
});})(G__12021_12070,ret,map__12020,map__12020__$1,args,id))
);
G__12021_12070.fail(((function (G__12021_12070,ret,map__12020,map__12020__$1,args,id){
return (function (err){return console.log(err);
});})(G__12021_12070,ret,map__12020,map__12020__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
