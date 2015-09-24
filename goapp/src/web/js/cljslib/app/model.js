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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14693_SHARP_){return cljs.core._EQ_.call(null,view,p1__14693_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14694_SHARP_){return cljs.core._EQ_.call(null,view,p1__14694_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14695_SHARP_){return cljs.core._EQ_.call(null,view,p1__14695_SHARP_);
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
app.model.bottomTab0 = (function bottomTab0(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14696_SHARP_){return cljs.core._EQ_.call(null,view,p1__14696_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14697_SHARP_){return cljs.core._EQ_.call(null,view,p1__14697_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u7167\u7247";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14698_SHARP_){return cljs.core._EQ_.call(null,view,p1__14698_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14699_SHARP_){return cljs.core._EQ_.call(null,view,p1__14699_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14700_SHARP_){return cljs.core._EQ_.call(null,view,p1__14700_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14701_SHARP_){return cljs.core._EQ_.call(null,view,p1__14701_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14702_SHARP_){return cljs.core._EQ_.call(null,view,p1__14702_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14703_SHARP_){return cljs.core._EQ_.call(null,view,p1__14703_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14704_SHARP_){return cljs.core._EQ_.call(null,view,p1__14704_SHARP_);
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
app.model.bottomTab3 = (function bottomTab3(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14705_SHARP_){return cljs.core._EQ_.call(null,view,p1__14705_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14706_SHARP_){return cljs.core._EQ_.call(null,view,p1__14706_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "\u76F8\u95DCMODEL";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14707_SHARP_){return cljs.core._EQ_.call(null,view,p1__14707_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__14711){var vec__14712 = p__14711;var model = cljs.core.nth.call(null,vec__14712,(0),null);var detail = cljs.core.nth.call(null,vec__14712,(1),null);var G__14713 = (new Date(detail.Date));G__14713.getTime();
return G__14713;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__14716){var vec__14717 = p__14716;var model = cljs.core.nth.call(null,vec__14717,(0),null);var detail = cljs.core.nth.call(null,vec__14717,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__14720){var vec__14721 = p__14720;var model = cljs.core.nth.call(null,vec__14721,(0),null);var detail = cljs.core.nth.call(null,vec__14721,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.SearchRelative = (function SearchRelative(tags,details){return cljs.core.shuffle.call(null,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (tag){return cljs.core.filter.call(null,(function (p__14724){var vec__14725 = p__14724;var model = cljs.core.nth.call(null,vec__14725,(0),null);var detail = cljs.core.nth.call(null,vec__14725,(1),null);return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+".?")),detail.Tag);
}),details);
}),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,tags,/,/))))));
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__14773,key,p__14774){var map__14775 = p__14773;var map__14775__$1 = ((cljs.core.seq_QMARK_.call(null,map__14775))?cljs.core.apply.call(null,cljs.core.hash_map,map__14775):map__14775);var ctx = map__14775__$1;var media_type = cljs.core.get.call(null,map__14775__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__14776 = p__14774;var map__14776__$1 = ((cljs.core.seq_QMARK_.call(null,map__14776))?cljs.core.apply.call(null,cljs.core.hash_map,map__14776):map__14776);var args = map__14776__$1;var page = cljs.core.get.call(null,map__14776__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__14776__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__14777_14820 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__14777_14820.done(((function (G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = (12);var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey){
return (function (p__14778){var vec__14779 = p__14778;var model = cljs.core.nth.call(null,vec__14779,(0),null);var detail = cljs.core.nth.call(null,vec__14779,(1),null);var vec__14780 = (function (){var pred__14781 = cljs.core._EQ_;var expr__14782 = media_type;if(cljs.core.truth_(pred__14781.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__14782)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(254),(256)], null);
} else
{if(cljs.core.truth_(pred__14781.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__14782)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{if(cljs.core.truth_(pred__14781.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__14782)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__14780,(0),null);var h = cljs.core.nth.call(null,vec__14780,(1),null);var obj14785 = {"visibleDate":false,"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj14785;
});})(modelCountPerPage,filtered,totalPage,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey))
;var dto = (function (){var obj14787 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj14787;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey){
return (function (state_14794){var state_val_14795 = (state_14794[(1)]);if((state_val_14795 === (2)))
{var inst_14791 = (state_14794[(2)]);var inst_14792 = cljs.core.async.close_BANG_.call(null,ret);var state_14794__$1 = (function (){var statearr_14796 = state_14794;(statearr_14796[(7)] = inst_14791);
return statearr_14796;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14794__$1,inst_14792);
} else
{if((state_val_14795 === (1)))
{var inst_14788 = [null,dto];var inst_14789 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14788,null));var state_14794__$1 = state_14794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14794__$1,(2),ret,inst_14789);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14800 = [null,null,null,null,null,null,null,null];(statearr_14800[(0)] = state_machine__6178__auto__);
(statearr_14800[(1)] = (1));
return statearr_14800;
});
var state_machine__6178__auto____1 = (function (state_14794){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14794);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14801){if((e14801 instanceof Object))
{var ex__6181__auto__ = e14801;var statearr_14802_14821 = state_14794;(statearr_14802_14821[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14794);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14822 = state_14794;
state_14794 = G__14822;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14794){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_14803 = f__6193__auto__.call(null);(statearr_14803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey))
);
G__14777_14820.fail(((function (G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey){
return (function (state_14810){var state_val_14811 = (state_14810[(1)]);if((state_val_14811 === (2)))
{var inst_14807 = (state_14810[(2)]);var inst_14808 = cljs.core.async.close_BANG_.call(null,ret);var state_14810__$1 = (function (){var statearr_14812 = state_14810;(statearr_14812[(7)] = inst_14807);
return statearr_14812;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14810__$1,inst_14808);
} else
{if((state_val_14811 === (1)))
{var inst_14804 = [err,null];var inst_14805 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14804,null));var state_14810__$1 = state_14810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14810__$1,(2),ret,inst_14805);
} else
{return null;
}
}
});})(c__6192__auto__,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14816 = [null,null,null,null,null,null,null,null];(statearr_14816[(0)] = state_machine__6178__auto__);
(statearr_14816[(1)] = (1));
return statearr_14816;
});
var state_machine__6178__auto____1 = (function (state_14810){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14810);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14817){if((e14817 instanceof Object))
{var ex__6181__auto__ = e14817;var statearr_14818_14823 = state_14810;(statearr_14818_14823[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14824 = state_14810;
state_14810 = G__14824;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14810){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_14819 = f__6193__auto__.call(null);(statearr_14819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__14777_14820,configType,ret,map__14775,map__14775__$1,ctx,media_type,map__14776,map__14776__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__14884){var map__14885 = p__14884;var map__14885__$1 = ((cljs.core.seq_QMARK_.call(null,map__14885))?cljs.core.apply.call(null,cljs.core.hash_map,map__14885):map__14885);var args = map__14885__$1;var id = cljs.core.get.call(null,map__14885__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__14886_14943 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__14886_14943.done(((function (G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var relativeDetails = cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (dir,detail,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (p__14887){var vec__14888 = p__14887;var model = cljs.core.nth.call(null,vec__14888,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__14888,(1),null);return cljs.core.not_EQ_.call(null,model,id);
});})(dir,detail,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
,app.model.SearchRelative.call(null,detail.Tag,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var ConvertHeadDTO = ((function (dir,detail,relativeDetails,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (p__14889){var vec__14890 = p__14889;var key__$1 = cljs.core.nth.call(null,vec__14890,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__14890,(1),null);var obj14892 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj14892;
});})(dir,detail,relativeDetails,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,relativeDetails,ConvertHeadDTO,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function iter__14893(s__14894){return (new cljs.core.LazySeq(null,((function (dir,detail,relativeDetails,ConvertHeadDTO,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (){var s__14894__$1 = s__14894;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14894__$1);if(temp__4126__auto__)
{var s__14894__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14894__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14894__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14896 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14895 = (0);while(true){
if((i__14895 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__14895);cljs.core.chunk_append.call(null,b__14896,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__14944 = (i__14895 + (1));
i__14895 = G__14944;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14896),iter__14893.call(null,cljs.core.chunk_rest.call(null,s__14894__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14896),null);
}
} else
{var idx = cljs.core.first.call(null,s__14894__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__14893.call(null,cljs.core.rest.call(null,s__14894__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
,null,null));
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function iter__14897(s__14898){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,relativeDetails,ConvertHeadDTO,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (){var s__14898__$1 = s__14898;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14898__$1);if(temp__4126__auto__)
{var s__14898__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14898__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14898__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14900 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14899 = (0);while(true){
if((i__14899 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__14899);cljs.core.chunk_append.call(null,b__14900,(function (){var obj14906 = {"id":url,"url":ServeFn.call(null,url)};return obj14906;
})());
{
var G__14945 = (i__14899 + (1));
i__14899 = G__14945;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14900),iter__14897.call(null,cljs.core.chunk_rest.call(null,s__14898__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14900),null);
}
} else
{var url = cljs.core.first.call(null,s__14898__$2);return cljs.core.cons.call(null,(function (){var obj14908 = {"id":url,"url":ServeFn.call(null,url)};return obj14908;
})(),iter__14897.call(null,cljs.core.rest.call(null,s__14898__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
,null,null));
});})(urls,dir,detail,relativeDetails,ConvertHeadDTO,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,relativeDetails,ConvertHeadDTO,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
;var dto = (function (){var obj14910 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab3":app.model.bottomTab3.call(null,name),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"bottomTab0":app.model.bottomTab0.call(null,name),"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,relativeDetails)),"date":detail.Date,"protalk":detail.Comment};return obj14910;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (state_14917){var state_val_14918 = (state_14917[(1)]);if((state_val_14918 === (2)))
{var inst_14914 = (state_14917[(2)]);var inst_14915 = cljs.core.async.close_BANG_.call(null,ret);var state_14917__$1 = (function (){var statearr_14919 = state_14917;(statearr_14919[(7)] = inst_14914);
return statearr_14919;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14917__$1,inst_14915);
} else
{if((state_val_14918 === (1)))
{var inst_14911 = [null,dto];var inst_14912 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14911,null));var state_14917__$1 = state_14917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14917__$1,(2),ret,inst_14912);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14923 = [null,null,null,null,null,null,null,null];(statearr_14923[(0)] = state_machine__6178__auto__);
(statearr_14923[(1)] = (1));
return statearr_14923;
});
var state_machine__6178__auto____1 = (function (state_14917){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14917);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14924){if((e14924 instanceof Object))
{var ex__6181__auto__ = e14924;var statearr_14925_14946 = state_14917;(statearr_14925_14946[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14924;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14947 = state_14917;
state_14917 = G__14947;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14917){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_14926 = f__6193__auto__.call(null);(statearr_14926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,relativeDetails,ConvertHeadDTO,CreateImageDTO,dto,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
);
return c__6192__auto__;
});})(G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
);
G__14886_14943.fail(((function (G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function (state_14933){var state_val_14934 = (state_14933[(1)]);if((state_val_14934 === (2)))
{var inst_14930 = (state_14933[(2)]);var inst_14931 = cljs.core.async.close_BANG_.call(null,ret);var state_14933__$1 = (function (){var statearr_14935 = state_14933;(statearr_14935[(7)] = inst_14930);
return statearr_14935;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14933__$1,inst_14931);
} else
{if((state_val_14934 === (1)))
{var inst_14927 = [err,null];var inst_14928 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14927,null));var state_14933__$1 = state_14933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14933__$1,(2),ret,inst_14928);
} else
{return null;
}
}
});})(c__6192__auto__,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14939 = [null,null,null,null,null,null,null,null];(statearr_14939[(0)] = state_machine__6178__auto__);
(statearr_14939[(1)] = (1));
return statearr_14939;
});
var state_machine__6178__auto____1 = (function (state_14933){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14933);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14940){if((e14940 instanceof Object))
{var ex__6181__auto__ = e14940;var statearr_14941_14948 = state_14933;(statearr_14941_14948[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14949 = state_14933;
state_14933 = G__14949;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14933){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_14942 = f__6193__auto__.call(null);(statearr_14942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
);
return c__6192__auto__;
});})(G__14886_14943,ret,configType,map__14885,map__14885__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__14951_14990 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__14951_14990.done(((function (G__14951_14990,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__14951_14990,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__14951_14990,ret){
return (function (state_14964){var state_val_14965 = (state_14964[(1)]);if((state_val_14965 === (2)))
{var inst_14961 = (state_14964[(2)]);var inst_14962 = cljs.core.async.close_BANG_.call(null,ret);var state_14964__$1 = (function (){var statearr_14966 = state_14964;(statearr_14966[(7)] = inst_14961);
return statearr_14966;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14964__$1,inst_14962);
} else
{if((state_val_14965 === (1)))
{var inst_14954 = detail.ModelKey;var inst_14955 = clojure.string.capitalize.call(null,where);var inst_14956 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14955)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_14957 = {"modelKey":inst_14954,"moreUrl":inst_14956};var inst_14958 = [null,inst_14957];var inst_14959 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14958,null));var state_14964__$1 = state_14964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14964__$1,(2),ret,inst_14959);
} else
{return null;
}
}
});})(c__6192__auto__,G__14951_14990,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__14951_14990,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14970 = [null,null,null,null,null,null,null,null];(statearr_14970[(0)] = state_machine__6178__auto__);
(statearr_14970[(1)] = (1));
return statearr_14970;
});
var state_machine__6178__auto____1 = (function (state_14964){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14964);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14971){if((e14971 instanceof Object))
{var ex__6181__auto__ = e14971;var statearr_14972_14991 = state_14964;(statearr_14972_14991[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14964);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14992 = state_14964;
state_14964 = G__14992;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14964){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__14951_14990,ret))
})();var state__6194__auto__ = (function (){var statearr_14973 = f__6193__auto__.call(null);(statearr_14973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__14951_14990,ret))
);
return c__6192__auto__;
});})(G__14951_14990,ret))
);
G__14951_14990.fail(((function (G__14951_14990,ret){
return (function (p1__14950_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__14951_14990,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__14951_14990,ret){
return (function (state_14980){var state_val_14981 = (state_14980[(1)]);if((state_val_14981 === (2)))
{var inst_14977 = (state_14980[(2)]);var inst_14978 = cljs.core.async.close_BANG_.call(null,ret);var state_14980__$1 = (function (){var statearr_14982 = state_14980;(statearr_14982[(7)] = inst_14977);
return statearr_14982;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14980__$1,inst_14978);
} else
{if((state_val_14981 === (1)))
{var inst_14974 = [p1__14950_SHARP_,null];var inst_14975 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14974,null));var state_14980__$1 = state_14980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14980__$1,(2),ret,inst_14975);
} else
{return null;
}
}
});})(c__6192__auto__,G__14951_14990,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__14951_14990,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14986 = [null,null,null,null,null,null,null,null];(statearr_14986[(0)] = state_machine__6178__auto__);
(statearr_14986[(1)] = (1));
return statearr_14986;
});
var state_machine__6178__auto____1 = (function (state_14980){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14980);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14987){if((e14987 instanceof Object))
{var ex__6181__auto__ = e14987;var statearr_14988_14993 = state_14980;(statearr_14988_14993[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14980);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14994 = state_14980;
state_14980 = G__14994;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14980){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__14951_14990,ret))
})();var state__6194__auto__ = (function (){var statearr_14989 = f__6193__auto__.call(null);(statearr_14989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__14951_14990,ret))
);
return c__6192__auto__;
});})(G__14951_14990,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__14995){var map__14996 = p__14995;var map__14996__$1 = ((cljs.core.seq_QMARK_.call(null,map__14996))?cljs.core.apply.call(null,cljs.core.hash_map,map__14996):map__14996);var args = map__14996__$1;var url = cljs.core.get.call(null,map__14996__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___15016 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___15016,ret,map__14996,map__14996__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___15016,ret,map__14996,map__14996__$1,args,url){
return (function (state_15006){var state_val_15007 = (state_15006[(1)]);if((state_val_15007 === (2)))
{var inst_15003 = (state_15006[(2)]);var inst_15004 = cljs.core.async.close_BANG_.call(null,ret);var state_15006__$1 = (function (){var statearr_15008 = state_15006;(statearr_15008[(7)] = inst_15003);
return statearr_15008;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15006__$1,inst_15004);
} else
{if((state_val_15007 === (1)))
{var inst_14999 = {"url":url};var inst_15000 = [null,inst_14999];var inst_15001 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15000,null));var state_15006__$1 = state_15006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15006__$1,(2),ret,inst_15001);
} else
{return null;
}
}
});})(c__6192__auto___15016,ret,map__14996,map__14996__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___15016,ret,map__14996,map__14996__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15012 = [null,null,null,null,null,null,null,null];(statearr_15012[(0)] = state_machine__6178__auto__);
(statearr_15012[(1)] = (1));
return statearr_15012;
});
var state_machine__6178__auto____1 = (function (state_15006){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15006);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15013){if((e15013 instanceof Object))
{var ex__6181__auto__ = e15013;var statearr_15014_15017 = state_15006;(statearr_15014_15017[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15018 = state_15006;
state_15006 = G__15018;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15006){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___15016,ret,map__14996,map__14996__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_15015 = f__6193__auto__.call(null);(statearr_15015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___15016);
return statearr_15015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___15016,ret,map__14996,map__14996__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__15019){var map__15020 = p__15019;var map__15020__$1 = ((cljs.core.seq_QMARK_.call(null,map__15020))?cljs.core.apply.call(null,cljs.core.hash_map,map__15020):map__15020);var args = map__15020__$1;var id = cljs.core.get.call(null,map__15020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___15037 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___15037,ret,map__15020,map__15020__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___15037,ret,map__15020,map__15020__$1,args,id){
return (function (state_15027){var state_val_15028 = (state_15027[(1)]);if((state_val_15028 === (2)))
{var inst_15024 = (state_15027[(2)]);var inst_15025 = cljs.core.async.close_BANG_.call(null,ret);var state_15027__$1 = (function (){var statearr_15029 = state_15027;(statearr_15029[(7)] = inst_15024);
return statearr_15029;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15027__$1,inst_15025);
} else
{if((state_val_15028 === (1)))
{var inst_15021 = [null,null];var inst_15022 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15021,null));var state_15027__$1 = state_15027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15027__$1,(2),ret,inst_15022);
} else
{return null;
}
}
});})(c__6192__auto___15037,ret,map__15020,map__15020__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___15037,ret,map__15020,map__15020__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15033 = [null,null,null,null,null,null,null,null];(statearr_15033[(0)] = state_machine__6178__auto__);
(statearr_15033[(1)] = (1));
return statearr_15033;
});
var state_machine__6178__auto____1 = (function (state_15027){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15027);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15034){if((e15034 instanceof Object))
{var ex__6181__auto__ = e15034;var statearr_15035_15038 = state_15027;(statearr_15035_15038[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15039 = state_15027;
state_15027 = G__15039;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15027){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___15037,ret,map__15020,map__15020__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_15036 = f__6193__auto__.call(null);(statearr_15036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___15037);
return statearr_15036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___15037,ret,map__15020,map__15020__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__15040 = cljs.core.rest.call(null,list);
var G__15041 = id;
var G__15042 = (start + (1));
list = G__15040;
id = G__15041;
start = G__15042;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__15044){var map__15045 = p__15044;var map__15045__$1 = ((cljs.core.seq_QMARK_.call(null,map__15045))?cljs.core.apply.call(null,cljs.core.hash_map,map__15045):map__15045);var args = map__15045__$1;var id = cljs.core.get.call(null,map__15045__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__15046_15095 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__15046_15095.done(((function (G__15046_15095,ret,map__15045,map__15045__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__15046_15095,ret,map__15045,map__15045__$1,args,id){
return (function (p1__15043_SHARP_){var obj15048 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__15043_SHARP_ + (1)))+".jpg"))};return obj15048;
});})(filtered,evtId,evt,G__15046_15095,ret,map__15045,map__15045__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__15046_15095,ret,map__15045,map__15045__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__15046_15095,ret,map__15045,map__15045__$1,args,id){
return (function (state_15076){var state_val_15077 = (state_15076[(1)]);if((state_val_15077 === (8)))
{var inst_15057 = (state_15076[(7)]);var inst_15064 = (state_15076[(2)]);var inst_15065 = (evt["Title"]);var inst_15066 = (evt["Date"]);var inst_15067 = (evt["Content"]);var inst_15068 = (evt["Form"]);var inst_15069 = {"prev_href":inst_15057,"next_href":inst_15064,"title":inst_15065,"date":inst_15066,"sideList":photos,"content":inst_15067,"form":inst_15068};var inst_15070 = [null,inst_15069];var inst_15071 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15070,null));var state_15076__$1 = state_15076;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15076__$1,(2),ret,inst_15071);
} else
{if((state_val_15077 === (7)))
{var state_15076__$1 = state_15076;var statearr_15078_15096 = state_15076__$1;(statearr_15078_15096[(2)] = null);
(statearr_15078_15096[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15077 === (6)))
{var inst_15059 = cljs.core.nth.call(null,filtered,nextId);var inst_15060 = cljs.core.first.call(null,inst_15059);var inst_15061 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15060));var state_15076__$1 = state_15076;var statearr_15079_15097 = state_15076__$1;(statearr_15079_15097[(2)] = inst_15061);
(statearr_15079_15097[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15077 === (5)))
{var inst_15057 = (state_15076[(2)]);var state_15076__$1 = (function (){var statearr_15080 = state_15076;(statearr_15080[(7)] = inst_15057);
return statearr_15080;
})();if(cljs.core.truth_(nextId))
{var statearr_15081_15098 = state_15076__$1;(statearr_15081_15098[(1)] = (6));
} else
{var statearr_15082_15099 = state_15076__$1;(statearr_15082_15099[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15077 === (4)))
{var state_15076__$1 = state_15076;var statearr_15083_15100 = state_15076__$1;(statearr_15083_15100[(2)] = null);
(statearr_15083_15100[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15077 === (3)))
{var inst_15052 = cljs.core.nth.call(null,filtered,prevId);var inst_15053 = cljs.core.first.call(null,inst_15052);var inst_15054 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15053));var state_15076__$1 = state_15076;var statearr_15084_15101 = state_15076__$1;(statearr_15084_15101[(2)] = inst_15054);
(statearr_15084_15101[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15077 === (2)))
{var inst_15073 = (state_15076[(2)]);var inst_15074 = cljs.core.async.close_BANG_.call(null,ret);var state_15076__$1 = (function (){var statearr_15085 = state_15076;(statearr_15085[(8)] = inst_15073);
return statearr_15085;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15076__$1,inst_15074);
} else
{if((state_val_15077 === (1)))
{var state_15076__$1 = state_15076;if(cljs.core.truth_(prevId))
{var statearr_15086_15102 = state_15076__$1;(statearr_15086_15102[(1)] = (3));
} else
{var statearr_15087_15103 = state_15076__$1;(statearr_15087_15103[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__15046_15095,ret,map__15045,map__15045__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__15046_15095,ret,map__15045,map__15045__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15091 = [null,null,null,null,null,null,null,null,null];(statearr_15091[(0)] = state_machine__6178__auto__);
(statearr_15091[(1)] = (1));
return statearr_15091;
});
var state_machine__6178__auto____1 = (function (state_15076){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15076);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15092){if((e15092 instanceof Object))
{var ex__6181__auto__ = e15092;var statearr_15093_15104 = state_15076;(statearr_15093_15104[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15076);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15105 = state_15076;
state_15076 = G__15105;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15076){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__15046_15095,ret,map__15045,map__15045__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_15094 = f__6193__auto__.call(null);(statearr_15094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__15046_15095,ret,map__15045,map__15045__$1,args,id))
);
return c__6192__auto__;
});})(G__15046_15095,ret,map__15045,map__15045__$1,args,id))
);
G__15046_15095.fail(((function (G__15046_15095,ret,map__15045,map__15045__$1,args,id){
return (function (err){return console.log(err);
});})(G__15046_15095,ret,map__15045,map__15045__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
