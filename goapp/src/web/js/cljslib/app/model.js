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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23610_SHARP_){return cljs.core._EQ_.call(null,view,p1__23610_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23611_SHARP_){return cljs.core._EQ_.call(null,view,p1__23611_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23612_SHARP_){return cljs.core._EQ_.call(null,view,p1__23612_SHARP_);
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
app.model.bottomTab0 = (function bottomTab0(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23613_SHARP_){return cljs.core._EQ_.call(null,view,p1__23613_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23614_SHARP_){return cljs.core._EQ_.call(null,view,p1__23614_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23615_SHARP_){return cljs.core._EQ_.call(null,view,p1__23615_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23616_SHARP_){return cljs.core._EQ_.call(null,view,p1__23616_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23617_SHARP_){return cljs.core._EQ_.call(null,view,p1__23617_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23618_SHARP_){return cljs.core._EQ_.call(null,view,p1__23618_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23619_SHARP_){return cljs.core._EQ_.call(null,view,p1__23619_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23620_SHARP_){return cljs.core._EQ_.call(null,view,p1__23620_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23621_SHARP_){return cljs.core._EQ_.call(null,view,p1__23621_SHARP_);
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
app.model.bottomTab3 = (function bottomTab3(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23622_SHARP_){return cljs.core._EQ_.call(null,view,p1__23622_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23623_SHARP_){return cljs.core._EQ_.call(null,view,p1__23623_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23624_SHARP_){return cljs.core._EQ_.call(null,view,p1__23624_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__23628){var vec__23629 = p__23628;var model = cljs.core.nth.call(null,vec__23629,(0),null);var detail = cljs.core.nth.call(null,vec__23629,(1),null);var G__23630 = (new Date(detail.Date));G__23630.getTime();
return G__23630;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__23633){var vec__23634 = p__23633;var model = cljs.core.nth.call(null,vec__23634,(0),null);var detail = cljs.core.nth.call(null,vec__23634,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__23637){var vec__23638 = p__23637;var model = cljs.core.nth.call(null,vec__23638,(0),null);var detail = cljs.core.nth.call(null,vec__23638,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.SearchRelative = (function SearchRelative(tags,details){return cljs.core.shuffle.call(null,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (tag){return cljs.core.filter.call(null,(function (p__23641){var vec__23642 = p__23641;var model = cljs.core.nth.call(null,vec__23642,(0),null);var detail = cljs.core.nth.call(null,vec__23642,(1),null);return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+".?")),detail.Tag);
}),details);
}),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,tags,/,/))))));
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__23690,key,p__23691){var map__23692 = p__23690;var map__23692__$1 = ((cljs.core.seq_QMARK_.call(null,map__23692))?cljs.core.apply.call(null,cljs.core.hash_map,map__23692):map__23692);var ctx = map__23692__$1;var media_type = cljs.core.get.call(null,map__23692__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__23693 = p__23691;var map__23693__$1 = ((cljs.core.seq_QMARK_.call(null,map__23693))?cljs.core.apply.call(null,cljs.core.hash_map,map__23693):map__23693);var args = map__23693__$1;var page = cljs.core.get.call(null,map__23693__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__23693__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__23694_23737 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__23694_23737.done(((function (G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = (12);var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey){
return (function (p__23695){var vec__23696 = p__23695;var model = cljs.core.nth.call(null,vec__23696,(0),null);var detail = cljs.core.nth.call(null,vec__23696,(1),null);var vec__23697 = (function (){var pred__23698 = cljs.core._EQ_;var expr__23699 = media_type;if(cljs.core.truth_(pred__23698.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__23699)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(600)], null);
} else
{if(cljs.core.truth_(pred__23698.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__23699)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{if(cljs.core.truth_(pred__23698.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__23699)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__23697,(0),null);var h = cljs.core.nth.call(null,vec__23697,(1),null);var obj23702 = {"visibleDate":false,"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj23702;
});})(modelCountPerPage,filtered,totalPage,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey))
;var dto = (function (){var obj23704 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj23704;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey){
return (function (state_23711){var state_val_23712 = (state_23711[(1)]);if((state_val_23712 === (2)))
{var inst_23708 = (state_23711[(2)]);var inst_23709 = cljs.core.async.close_BANG_.call(null,ret);var state_23711__$1 = (function (){var statearr_23713 = state_23711;(statearr_23713[(7)] = inst_23708);
return statearr_23713;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23711__$1,inst_23709);
} else
{if((state_val_23712 === (1)))
{var inst_23705 = [null,dto];var inst_23706 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23705,null));var state_23711__$1 = state_23711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23711__$1,(2),ret,inst_23706);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23717 = [null,null,null,null,null,null,null,null];(statearr_23717[(0)] = state_machine__6178__auto__);
(statearr_23717[(1)] = (1));
return statearr_23717;
});
var state_machine__6178__auto____1 = (function (state_23711){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23711);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23718){if((e23718 instanceof Object))
{var ex__6181__auto__ = e23718;var statearr_23719_23738 = state_23711;(statearr_23719_23738[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23711);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23739 = state_23711;
state_23711 = G__23739;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23711){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_23720 = f__6193__auto__.call(null);(statearr_23720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey))
);
G__23694_23737.fail(((function (G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey){
return (function (state_23727){var state_val_23728 = (state_23727[(1)]);if((state_val_23728 === (2)))
{var inst_23724 = (state_23727[(2)]);var inst_23725 = cljs.core.async.close_BANG_.call(null,ret);var state_23727__$1 = (function (){var statearr_23729 = state_23727;(statearr_23729[(7)] = inst_23724);
return statearr_23729;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23727__$1,inst_23725);
} else
{if((state_val_23728 === (1)))
{var inst_23721 = [err,null];var inst_23722 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23721,null));var state_23727__$1 = state_23727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23727__$1,(2),ret,inst_23722);
} else
{return null;
}
}
});})(c__6192__auto__,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23733 = [null,null,null,null,null,null,null,null];(statearr_23733[(0)] = state_machine__6178__auto__);
(statearr_23733[(1)] = (1));
return statearr_23733;
});
var state_machine__6178__auto____1 = (function (state_23727){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23727);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23734){if((e23734 instanceof Object))
{var ex__6181__auto__ = e23734;var statearr_23735_23740 = state_23727;(statearr_23735_23740[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23741 = state_23727;
state_23727 = G__23741;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23727){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_23736 = f__6193__auto__.call(null);(statearr_23736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__23694_23737,configType,ret,map__23692,map__23692__$1,ctx,media_type,map__23693,map__23693__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__23801){var map__23802 = p__23801;var map__23802__$1 = ((cljs.core.seq_QMARK_.call(null,map__23802))?cljs.core.apply.call(null,cljs.core.hash_map,map__23802):map__23802);var args = map__23802__$1;var id = cljs.core.get.call(null,map__23802__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__23803_23860 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__23803_23860.done(((function (G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var relativeDetails = cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (dir,detail,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (p__23804){var vec__23805 = p__23804;var model = cljs.core.nth.call(null,vec__23805,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__23805,(1),null);return cljs.core.not_EQ_.call(null,model,id);
});})(dir,detail,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
,app.model.SearchRelative.call(null,detail.Tag,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertHeadDTO = ((function (dir,detail,relativeDetails,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (p__23806){var vec__23807 = p__23806;var key__$1 = cljs.core.nth.call(null,vec__23807,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__23807,(1),null);var obj23809 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj23809;
});})(dir,detail,relativeDetails,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function iter__23810(s__23811){return (new cljs.core.LazySeq(null,((function (dir,detail,relativeDetails,ConvertHeadDTO,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (){var s__23811__$1 = s__23811;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23811__$1);if(temp__4126__auto__)
{var s__23811__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23811__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__23811__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__23813 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__23812 = (0);while(true){
if((i__23812 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__23812);cljs.core.chunk_append.call(null,b__23813,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__23861 = (i__23812 + (1));
i__23812 = G__23861;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23813),iter__23810.call(null,cljs.core.chunk_rest.call(null,s__23811__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23813),null);
}
} else
{var idx = cljs.core.first.call(null,s__23811__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__23810.call(null,cljs.core.rest.call(null,s__23811__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
,null,null));
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function iter__23814(s__23815){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (){var s__23815__$1 = s__23815;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23815__$1);if(temp__4126__auto__)
{var s__23815__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23815__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__23815__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__23817 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__23816 = (0);while(true){
if((i__23816 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__23816);cljs.core.chunk_append.call(null,b__23817,(function (){var obj23823 = {"id":url,"url":ServeFn.call(null,url)};return obj23823;
})());
{
var G__23862 = (i__23816 + (1));
i__23816 = G__23862;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23817),iter__23814.call(null,cljs.core.chunk_rest.call(null,s__23815__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23817),null);
}
} else
{var url = cljs.core.first.call(null,s__23815__$2);return cljs.core.cons.call(null,(function (){var obj23825 = {"id":url,"url":ServeFn.call(null,url)};return obj23825;
})(),iter__23814.call(null,cljs.core.rest.call(null,s__23815__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
,null,null));
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
;var dto = (function (){var obj23827 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"signUrl":(cljs.core.truth_(detail.Sign)?app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/sign.png")):null),"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab3":app.model.bottomTab3.call(null,name),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"bottomTab0":app.model.bottomTab0.call(null,name),"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,relativeDetails)),"date":detail.Date,"protalk":detail.Comment};return obj23827;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (state_23834){var state_val_23835 = (state_23834[(1)]);if((state_val_23835 === (2)))
{var inst_23831 = (state_23834[(2)]);var inst_23832 = cljs.core.async.close_BANG_.call(null,ret);var state_23834__$1 = (function (){var statearr_23836 = state_23834;(statearr_23836[(7)] = inst_23831);
return statearr_23836;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23834__$1,inst_23832);
} else
{if((state_val_23835 === (1)))
{var inst_23828 = [null,dto];var inst_23829 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23828,null));var state_23834__$1 = state_23834;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23834__$1,(2),ret,inst_23829);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23840 = [null,null,null,null,null,null,null,null];(statearr_23840[(0)] = state_machine__6178__auto__);
(statearr_23840[(1)] = (1));
return statearr_23840;
});
var state_machine__6178__auto____1 = (function (state_23834){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23834);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23841){if((e23841 instanceof Object))
{var ex__6181__auto__ = e23841;var statearr_23842_23863 = state_23834;(statearr_23842_23863[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23834);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23864 = state_23834;
state_23834 = G__23864;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23834){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23843 = f__6193__auto__.call(null);(statearr_23843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
);
return c__6192__auto__;
});})(G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
);
G__23803_23860.fail(((function (G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function (state_23850){var state_val_23851 = (state_23850[(1)]);if((state_val_23851 === (2)))
{var inst_23847 = (state_23850[(2)]);var inst_23848 = cljs.core.async.close_BANG_.call(null,ret);var state_23850__$1 = (function (){var statearr_23852 = state_23850;(statearr_23852[(7)] = inst_23847);
return statearr_23852;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23850__$1,inst_23848);
} else
{if((state_val_23851 === (1)))
{var inst_23844 = [err,null];var inst_23845 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23844,null));var state_23850__$1 = state_23850;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23850__$1,(2),ret,inst_23845);
} else
{return null;
}
}
});})(c__6192__auto__,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23856 = [null,null,null,null,null,null,null,null];(statearr_23856[(0)] = state_machine__6178__auto__);
(statearr_23856[(1)] = (1));
return statearr_23856;
});
var state_machine__6178__auto____1 = (function (state_23850){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23850);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23857){if((e23857 instanceof Object))
{var ex__6181__auto__ = e23857;var statearr_23858_23865 = state_23850;(statearr_23858_23865[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23850);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23866 = state_23850;
state_23850 = G__23866;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23850){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23859 = f__6193__auto__.call(null);(statearr_23859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
);
return c__6192__auto__;
});})(G__23803_23860,ret,configType,map__23802,map__23802__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__23868_23907 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__23868_23907.done(((function (G__23868_23907,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23868_23907,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23868_23907,ret){
return (function (state_23881){var state_val_23882 = (state_23881[(1)]);if((state_val_23882 === (2)))
{var inst_23878 = (state_23881[(2)]);var inst_23879 = cljs.core.async.close_BANG_.call(null,ret);var state_23881__$1 = (function (){var statearr_23883 = state_23881;(statearr_23883[(7)] = inst_23878);
return statearr_23883;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23881__$1,inst_23879);
} else
{if((state_val_23882 === (1)))
{var inst_23871 = detail.ModelKey;var inst_23872 = clojure.string.capitalize.call(null,where);var inst_23873 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23872)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_23874 = {"modelKey":inst_23871,"moreUrl":inst_23873};var inst_23875 = [null,inst_23874];var inst_23876 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23875,null));var state_23881__$1 = state_23881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23881__$1,(2),ret,inst_23876);
} else
{return null;
}
}
});})(c__6192__auto__,G__23868_23907,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23868_23907,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23887 = [null,null,null,null,null,null,null,null];(statearr_23887[(0)] = state_machine__6178__auto__);
(statearr_23887[(1)] = (1));
return statearr_23887;
});
var state_machine__6178__auto____1 = (function (state_23881){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23881);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23888){if((e23888 instanceof Object))
{var ex__6181__auto__ = e23888;var statearr_23889_23908 = state_23881;(statearr_23889_23908[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23881);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23909 = state_23881;
state_23881 = G__23909;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23881){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23868_23907,ret))
})();var state__6194__auto__ = (function (){var statearr_23890 = f__6193__auto__.call(null);(statearr_23890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23868_23907,ret))
);
return c__6192__auto__;
});})(G__23868_23907,ret))
);
G__23868_23907.fail(((function (G__23868_23907,ret){
return (function (p1__23867_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__23868_23907,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__23868_23907,ret){
return (function (state_23897){var state_val_23898 = (state_23897[(1)]);if((state_val_23898 === (2)))
{var inst_23894 = (state_23897[(2)]);var inst_23895 = cljs.core.async.close_BANG_.call(null,ret);var state_23897__$1 = (function (){var statearr_23899 = state_23897;(statearr_23899[(7)] = inst_23894);
return statearr_23899;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23897__$1,inst_23895);
} else
{if((state_val_23898 === (1)))
{var inst_23891 = [p1__23867_SHARP_,null];var inst_23892 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23891,null));var state_23897__$1 = state_23897;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23897__$1,(2),ret,inst_23892);
} else
{return null;
}
}
});})(c__6192__auto__,G__23868_23907,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__23868_23907,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23903 = [null,null,null,null,null,null,null,null];(statearr_23903[(0)] = state_machine__6178__auto__);
(statearr_23903[(1)] = (1));
return statearr_23903;
});
var state_machine__6178__auto____1 = (function (state_23897){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23897);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23904){if((e23904 instanceof Object))
{var ex__6181__auto__ = e23904;var statearr_23905_23910 = state_23897;(statearr_23905_23910[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23897);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23904;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23911 = state_23897;
state_23897 = G__23911;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23897){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__23868_23907,ret))
})();var state__6194__auto__ = (function (){var statearr_23906 = f__6193__auto__.call(null);(statearr_23906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_23906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__23868_23907,ret))
);
return c__6192__auto__;
});})(G__23868_23907,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__23912){var map__23913 = p__23912;var map__23913__$1 = ((cljs.core.seq_QMARK_.call(null,map__23913))?cljs.core.apply.call(null,cljs.core.hash_map,map__23913):map__23913);var args = map__23913__$1;var url = cljs.core.get.call(null,map__23913__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___23933 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___23933,ret,map__23913,map__23913__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___23933,ret,map__23913,map__23913__$1,args,url){
return (function (state_23923){var state_val_23924 = (state_23923[(1)]);if((state_val_23924 === (2)))
{var inst_23920 = (state_23923[(2)]);var inst_23921 = cljs.core.async.close_BANG_.call(null,ret);var state_23923__$1 = (function (){var statearr_23925 = state_23923;(statearr_23925[(7)] = inst_23920);
return statearr_23925;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23923__$1,inst_23921);
} else
{if((state_val_23924 === (1)))
{var inst_23916 = {"url":url};var inst_23917 = [null,inst_23916];var inst_23918 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23917,null));var state_23923__$1 = state_23923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23923__$1,(2),ret,inst_23918);
} else
{return null;
}
}
});})(c__6192__auto___23933,ret,map__23913,map__23913__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___23933,ret,map__23913,map__23913__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23929 = [null,null,null,null,null,null,null,null];(statearr_23929[(0)] = state_machine__6178__auto__);
(statearr_23929[(1)] = (1));
return statearr_23929;
});
var state_machine__6178__auto____1 = (function (state_23923){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23923);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23930){if((e23930 instanceof Object))
{var ex__6181__auto__ = e23930;var statearr_23931_23934 = state_23923;(statearr_23931_23934[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23935 = state_23923;
state_23923 = G__23935;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23923){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___23933,ret,map__23913,map__23913__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_23932 = f__6193__auto__.call(null);(statearr_23932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___23933);
return statearr_23932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___23933,ret,map__23913,map__23913__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__23936){var map__23937 = p__23936;var map__23937__$1 = ((cljs.core.seq_QMARK_.call(null,map__23937))?cljs.core.apply.call(null,cljs.core.hash_map,map__23937):map__23937);var args = map__23937__$1;var id = cljs.core.get.call(null,map__23937__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___23954 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___23954,ret,map__23937,map__23937__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___23954,ret,map__23937,map__23937__$1,args,id){
return (function (state_23944){var state_val_23945 = (state_23944[(1)]);if((state_val_23945 === (2)))
{var inst_23941 = (state_23944[(2)]);var inst_23942 = cljs.core.async.close_BANG_.call(null,ret);var state_23944__$1 = (function (){var statearr_23946 = state_23944;(statearr_23946[(7)] = inst_23941);
return statearr_23946;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23944__$1,inst_23942);
} else
{if((state_val_23945 === (1)))
{var inst_23938 = [null,null];var inst_23939 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23938,null));var state_23944__$1 = state_23944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23944__$1,(2),ret,inst_23939);
} else
{return null;
}
}
});})(c__6192__auto___23954,ret,map__23937,map__23937__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___23954,ret,map__23937,map__23937__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_23950 = [null,null,null,null,null,null,null,null];(statearr_23950[(0)] = state_machine__6178__auto__);
(statearr_23950[(1)] = (1));
return statearr_23950;
});
var state_machine__6178__auto____1 = (function (state_23944){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23944);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e23951){if((e23951 instanceof Object))
{var ex__6181__auto__ = e23951;var statearr_23952_23955 = state_23944;(statearr_23952_23955[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23951;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23956 = state_23944;
state_23944 = G__23956;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23944){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___23954,ret,map__23937,map__23937__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_23953 = f__6193__auto__.call(null);(statearr_23953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___23954);
return statearr_23953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___23954,ret,map__23937,map__23937__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__23957 = cljs.core.rest.call(null,list);
var G__23958 = id;
var G__23959 = (start + (1));
list = G__23957;
id = G__23958;
start = G__23959;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__23961){var map__23962 = p__23961;var map__23962__$1 = ((cljs.core.seq_QMARK_.call(null,map__23962))?cljs.core.apply.call(null,cljs.core.hash_map,map__23962):map__23962);var args = map__23962__$1;var id = cljs.core.get.call(null,map__23962__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__23963_24012 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__23963_24012.done(((function (G__23963_24012,ret,map__23962,map__23962__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__23963_24012,ret,map__23962,map__23962__$1,args,id){
return (function (p1__23960_SHARP_){var obj23965 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__23960_SHARP_ + (1)))+".jpg"))};return obj23965;
});})(filtered,evtId,evt,G__23963_24012,ret,map__23962,map__23962__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__23963_24012,ret,map__23962,map__23962__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__23963_24012,ret,map__23962,map__23962__$1,args,id){
return (function (state_23993){var state_val_23994 = (state_23993[(1)]);if((state_val_23994 === (8)))
{var inst_23974 = (state_23993[(7)]);var inst_23981 = (state_23993[(2)]);var inst_23982 = (evt["Title"]);var inst_23983 = (evt["Date"]);var inst_23984 = (evt["Content"]);var inst_23985 = (evt["Form"]);var inst_23986 = {"prev_href":inst_23974,"next_href":inst_23981,"title":inst_23982,"date":inst_23983,"sideList":photos,"content":inst_23984,"form":inst_23985};var inst_23987 = [null,inst_23986];var inst_23988 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23987,null));var state_23993__$1 = state_23993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23993__$1,(2),ret,inst_23988);
} else
{if((state_val_23994 === (7)))
{var state_23993__$1 = state_23993;var statearr_23995_24013 = state_23993__$1;(statearr_23995_24013[(2)] = null);
(statearr_23995_24013[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23994 === (6)))
{var inst_23976 = cljs.core.nth.call(null,filtered,nextId);var inst_23977 = cljs.core.first.call(null,inst_23976);var inst_23978 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23977));var state_23993__$1 = state_23993;var statearr_23996_24014 = state_23993__$1;(statearr_23996_24014[(2)] = inst_23978);
(statearr_23996_24014[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23994 === (5)))
{var inst_23974 = (state_23993[(2)]);var state_23993__$1 = (function (){var statearr_23997 = state_23993;(statearr_23997[(7)] = inst_23974);
return statearr_23997;
})();if(cljs.core.truth_(nextId))
{var statearr_23998_24015 = state_23993__$1;(statearr_23998_24015[(1)] = (6));
} else
{var statearr_23999_24016 = state_23993__$1;(statearr_23999_24016[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23994 === (4)))
{var state_23993__$1 = state_23993;var statearr_24000_24017 = state_23993__$1;(statearr_24000_24017[(2)] = null);
(statearr_24000_24017[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23994 === (3)))
{var inst_23969 = cljs.core.nth.call(null,filtered,prevId);var inst_23970 = cljs.core.first.call(null,inst_23969);var inst_23971 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23970));var state_23993__$1 = state_23993;var statearr_24001_24018 = state_23993__$1;(statearr_24001_24018[(2)] = inst_23971);
(statearr_24001_24018[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23994 === (2)))
{var inst_23990 = (state_23993[(2)]);var inst_23991 = cljs.core.async.close_BANG_.call(null,ret);var state_23993__$1 = (function (){var statearr_24002 = state_23993;(statearr_24002[(8)] = inst_23990);
return statearr_24002;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23993__$1,inst_23991);
} else
{if((state_val_23994 === (1)))
{var state_23993__$1 = state_23993;if(cljs.core.truth_(prevId))
{var statearr_24003_24019 = state_23993__$1;(statearr_24003_24019[(1)] = (3));
} else
{var statearr_24004_24020 = state_23993__$1;(statearr_24004_24020[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__23963_24012,ret,map__23962,map__23962__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__23963_24012,ret,map__23962,map__23962__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24008 = [null,null,null,null,null,null,null,null,null];(statearr_24008[(0)] = state_machine__6178__auto__);
(statearr_24008[(1)] = (1));
return statearr_24008;
});
var state_machine__6178__auto____1 = (function (state_23993){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_23993);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24009){if((e24009 instanceof Object))
{var ex__6181__auto__ = e24009;var statearr_24010_24021 = state_23993;(statearr_24010_24021[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24022 = state_23993;
state_23993 = G__24022;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_23993){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_23993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__23963_24012,ret,map__23962,map__23962__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_24011 = f__6193__auto__.call(null);(statearr_24011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_24011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__23963_24012,ret,map__23962,map__23962__$1,args,id))
);
return c__6192__auto__;
});})(G__23963_24012,ret,map__23962,map__23962__$1,args,id))
);
G__23963_24012.fail(((function (G__23963_24012,ret,map__23962,map__23962__$1,args,id){
return (function (err){return console.log(err);
});})(G__23963_24012,ret,map__23962,map__23962__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
