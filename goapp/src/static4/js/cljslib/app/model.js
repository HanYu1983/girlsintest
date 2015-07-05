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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16749_SHARP_){return cljs.core._EQ_.call(null,view,p1__16749_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16750_SHARP_){return cljs.core._EQ_.call(null,view,p1__16750_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16751_SHARP_){return cljs.core._EQ_.call(null,view,p1__16751_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16752_SHARP_){return cljs.core._EQ_.call(null,view,p1__16752_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16753_SHARP_){return cljs.core._EQ_.call(null,view,p1__16753_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16754_SHARP_){return cljs.core._EQ_.call(null,view,p1__16754_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16755_SHARP_){return cljs.core._EQ_.call(null,view,p1__16755_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16756_SHARP_){return cljs.core._EQ_.call(null,view,p1__16756_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16757_SHARP_){return cljs.core._EQ_.call(null,view,p1__16757_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__16761){var vec__16762 = p__16761;var model = cljs.core.nth.call(null,vec__16762,(0),null);var detail = cljs.core.nth.call(null,vec__16762,(1),null);var G__16763 = (new Date(detail.Date));G__16763.getTime();
return G__16763;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__16766){var vec__16767 = p__16766;var model = cljs.core.nth.call(null,vec__16767,(0),null);var detail = cljs.core.nth.call(null,vec__16767,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__16770){var vec__16771 = p__16770;var model = cljs.core.nth.call(null,vec__16771,(0),null);var detail = cljs.core.nth.call(null,vec__16771,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__16813){var map__16814 = p__16813;var map__16814__$1 = ((cljs.core.seq_QMARK_.call(null,map__16814))?cljs.core.apply.call(null,cljs.core.hash_map,map__16814):map__16814);var args = map__16814__$1;var page = cljs.core.get.call(null,map__16814__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__16814__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__16815_16854 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__16815_16854.done(((function (G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey){
return (function (p__16816){var vec__16817 = p__16816;var model = cljs.core.nth.call(null,vec__16817,(0),null);var detail = cljs.core.nth.call(null,vec__16817,(1),null);var obj16819 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj16819;
});})(modelCountPerPage,filtered,totalPage,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey))
;var dto = (function (){var obj16821 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj16821;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey){
return (function (state_16828){var state_val_16829 = (state_16828[(1)]);if((state_val_16829 === (2)))
{var inst_16825 = (state_16828[(2)]);var inst_16826 = cljs.core.async.close_BANG_.call(null,ret);var state_16828__$1 = (function (){var statearr_16830 = state_16828;(statearr_16830[(7)] = inst_16825);
return statearr_16830;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16828__$1,inst_16826);
} else
{if((state_val_16829 === (1)))
{var inst_16822 = [null,dto];var inst_16823 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16822,null));var state_16828__$1 = state_16828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16828__$1,(2),ret,inst_16823);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16834 = [null,null,null,null,null,null,null,null];(statearr_16834[(0)] = state_machine__6178__auto__);
(statearr_16834[(1)] = (1));
return statearr_16834;
});
var state_machine__6178__auto____1 = (function (state_16828){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16828);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16835){if((e16835 instanceof Object))
{var ex__6181__auto__ = e16835;var statearr_16836_16855 = state_16828;(statearr_16836_16855[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16856 = state_16828;
state_16828 = G__16856;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16828){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_16837 = f__6193__auto__.call(null);(statearr_16837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey))
);
G__16815_16854.fail(((function (G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey){
return (function (state_16844){var state_val_16845 = (state_16844[(1)]);if((state_val_16845 === (2)))
{var inst_16841 = (state_16844[(2)]);var inst_16842 = cljs.core.async.close_BANG_.call(null,ret);var state_16844__$1 = (function (){var statearr_16846 = state_16844;(statearr_16846[(7)] = inst_16841);
return statearr_16846;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16844__$1,inst_16842);
} else
{if((state_val_16845 === (1)))
{var inst_16838 = [err,null];var inst_16839 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16838,null));var state_16844__$1 = state_16844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16844__$1,(2),ret,inst_16839);
} else
{return null;
}
}
});})(c__6192__auto__,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16850 = [null,null,null,null,null,null,null,null];(statearr_16850[(0)] = state_machine__6178__auto__);
(statearr_16850[(1)] = (1));
return statearr_16850;
});
var state_machine__6178__auto____1 = (function (state_16844){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16844);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16851){if((e16851 instanceof Object))
{var ex__6181__auto__ = e16851;var statearr_16852_16857 = state_16844;(statearr_16852_16857[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16844);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16858 = state_16844;
state_16844 = G__16858;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16844){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_16853 = f__6193__auto__.call(null);(statearr_16853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__16815_16854,configType,ret,map__16814,map__16814__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__16916){var map__16917 = p__16916;var map__16917__$1 = ((cljs.core.seq_QMARK_.call(null,map__16917))?cljs.core.apply.call(null,cljs.core.hash_map,map__16917):map__16917);var args = map__16917__$1;var id = cljs.core.get.call(null,map__16917__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__16918_16973 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__16918_16973.done(((function (G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function (p__16919){var vec__16920 = p__16919;var key__$1 = cljs.core.nth.call(null,vec__16920,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__16920,(1),null);var obj16922 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj16922;
});})(dir,detail,filtered,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function iter__16923(s__16924){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function (){var s__16924__$1 = s__16924;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16924__$1);if(temp__4126__auto__)
{var s__16924__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16924__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16924__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16926 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16925 = (0);while(true){
if((i__16925 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__16925);cljs.core.chunk_append.call(null,b__16926,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__16974 = (i__16925 + (1));
i__16925 = G__16974;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16926),iter__16923.call(null,cljs.core.chunk_rest.call(null,s__16924__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16926),null);
}
} else
{var idx = cljs.core.first.call(null,s__16924__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__16923.call(null,cljs.core.rest.call(null,s__16924__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function iter__16927(s__16928){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function (){var s__16928__$1 = s__16928;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16928__$1);if(temp__4126__auto__)
{var s__16928__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16928__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16928__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16930 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16929 = (0);while(true){
if((i__16929 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__16929);cljs.core.chunk_append.call(null,b__16930,(function (){var obj16936 = {"id":url,"url":ServeFn.call(null,url)};return obj16936;
})());
{
var G__16975 = (i__16929 + (1));
i__16929 = G__16975;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16930),iter__16927.call(null,cljs.core.chunk_rest.call(null,s__16928__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16930),null);
}
} else
{var url = cljs.core.first.call(null,s__16928__$2);return cljs.core.cons.call(null,(function (){var obj16938 = {"id":url,"url":ServeFn.call(null,url)};return obj16938;
})(),iter__16927.call(null,cljs.core.rest.call(null,s__16928__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
;var dto = (function (){var obj16940 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj16940;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function (state_16947){var state_val_16948 = (state_16947[(1)]);if((state_val_16948 === (2)))
{var inst_16944 = (state_16947[(2)]);var inst_16945 = cljs.core.async.close_BANG_.call(null,ret);var state_16947__$1 = (function (){var statearr_16949 = state_16947;(statearr_16949[(7)] = inst_16944);
return statearr_16949;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16947__$1,inst_16945);
} else
{if((state_val_16948 === (1)))
{var inst_16941 = [null,dto];var inst_16942 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16941,null));var state_16947__$1 = state_16947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16947__$1,(2),ret,inst_16942);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16953 = [null,null,null,null,null,null,null,null];(statearr_16953[(0)] = state_machine__6178__auto__);
(statearr_16953[(1)] = (1));
return statearr_16953;
});
var state_machine__6178__auto____1 = (function (state_16947){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16947);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16954){if((e16954 instanceof Object))
{var ex__6181__auto__ = e16954;var statearr_16955_16976 = state_16947;(statearr_16955_16976[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16954;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16977 = state_16947;
state_16947 = G__16977;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16947){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16956 = f__6193__auto__.call(null);(statearr_16956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
);
return c__6192__auto__;
});})(G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
);
G__16918_16973.fail(((function (G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function (state_16963){var state_val_16964 = (state_16963[(1)]);if((state_val_16964 === (2)))
{var inst_16960 = (state_16963[(2)]);var inst_16961 = cljs.core.async.close_BANG_.call(null,ret);var state_16963__$1 = (function (){var statearr_16965 = state_16963;(statearr_16965[(7)] = inst_16960);
return statearr_16965;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16963__$1,inst_16961);
} else
{if((state_val_16964 === (1)))
{var inst_16957 = [err,null];var inst_16958 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16957,null));var state_16963__$1 = state_16963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16963__$1,(2),ret,inst_16958);
} else
{return null;
}
}
});})(c__6192__auto__,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16969 = [null,null,null,null,null,null,null,null];(statearr_16969[(0)] = state_machine__6178__auto__);
(statearr_16969[(1)] = (1));
return statearr_16969;
});
var state_machine__6178__auto____1 = (function (state_16963){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16963);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16970){if((e16970 instanceof Object))
{var ex__6181__auto__ = e16970;var statearr_16971_16978 = state_16963;(statearr_16971_16978[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16963);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16979 = state_16963;
state_16963 = G__16979;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16963){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16972 = f__6193__auto__.call(null);(statearr_16972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
);
return c__6192__auto__;
});})(G__16918_16973,ret,configType,map__16917,map__16917__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__16981_17020 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__16981_17020.done(((function (G__16981_17020,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16981_17020,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16981_17020,ret){
return (function (state_16994){var state_val_16995 = (state_16994[(1)]);if((state_val_16995 === (2)))
{var inst_16991 = (state_16994[(2)]);var inst_16992 = cljs.core.async.close_BANG_.call(null,ret);var state_16994__$1 = (function (){var statearr_16996 = state_16994;(statearr_16996[(7)] = inst_16991);
return statearr_16996;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16994__$1,inst_16992);
} else
{if((state_val_16995 === (1)))
{var inst_16984 = detail.ModelKey;var inst_16985 = clojure.string.capitalize.call(null,where);var inst_16986 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16985)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_16987 = {"modelKey":inst_16984,"moreUrl":inst_16986};var inst_16988 = [null,inst_16987];var inst_16989 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16988,null));var state_16994__$1 = state_16994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16994__$1,(2),ret,inst_16989);
} else
{return null;
}
}
});})(c__6192__auto__,G__16981_17020,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16981_17020,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17000 = [null,null,null,null,null,null,null,null];(statearr_17000[(0)] = state_machine__6178__auto__);
(statearr_17000[(1)] = (1));
return statearr_17000;
});
var state_machine__6178__auto____1 = (function (state_16994){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16994);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17001){if((e17001 instanceof Object))
{var ex__6181__auto__ = e17001;var statearr_17002_17021 = state_16994;(statearr_17002_17021[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16994);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17022 = state_16994;
state_16994 = G__17022;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16994){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16981_17020,ret))
})();var state__6194__auto__ = (function (){var statearr_17003 = f__6193__auto__.call(null);(statearr_17003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16981_17020,ret))
);
return c__6192__auto__;
});})(G__16981_17020,ret))
);
G__16981_17020.fail(((function (G__16981_17020,ret){
return (function (p1__16980_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16981_17020,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16981_17020,ret){
return (function (state_17010){var state_val_17011 = (state_17010[(1)]);if((state_val_17011 === (2)))
{var inst_17007 = (state_17010[(2)]);var inst_17008 = cljs.core.async.close_BANG_.call(null,ret);var state_17010__$1 = (function (){var statearr_17012 = state_17010;(statearr_17012[(7)] = inst_17007);
return statearr_17012;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17010__$1,inst_17008);
} else
{if((state_val_17011 === (1)))
{var inst_17004 = [p1__16980_SHARP_,null];var inst_17005 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17004,null));var state_17010__$1 = state_17010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17010__$1,(2),ret,inst_17005);
} else
{return null;
}
}
});})(c__6192__auto__,G__16981_17020,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16981_17020,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17016 = [null,null,null,null,null,null,null,null];(statearr_17016[(0)] = state_machine__6178__auto__);
(statearr_17016[(1)] = (1));
return statearr_17016;
});
var state_machine__6178__auto____1 = (function (state_17010){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17010);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17017){if((e17017 instanceof Object))
{var ex__6181__auto__ = e17017;var statearr_17018_17023 = state_17010;(statearr_17018_17023[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17024 = state_17010;
state_17010 = G__17024;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17010){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16981_17020,ret))
})();var state__6194__auto__ = (function (){var statearr_17019 = f__6193__auto__.call(null);(statearr_17019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16981_17020,ret))
);
return c__6192__auto__;
});})(G__16981_17020,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__17025){var map__17026 = p__17025;var map__17026__$1 = ((cljs.core.seq_QMARK_.call(null,map__17026))?cljs.core.apply.call(null,cljs.core.hash_map,map__17026):map__17026);var args = map__17026__$1;var url = cljs.core.get.call(null,map__17026__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___17047 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___17047,ret,map__17026,map__17026__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___17047,ret,map__17026,map__17026__$1,args,url){
return (function (state_17037){var state_val_17038 = (state_17037[(1)]);if((state_val_17038 === (2)))
{var inst_17034 = (state_17037[(2)]);var inst_17035 = cljs.core.async.close_BANG_.call(null,ret);var state_17037__$1 = (function (){var statearr_17039 = state_17037;(statearr_17039[(7)] = inst_17034);
return statearr_17039;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17037__$1,inst_17035);
} else
{if((state_val_17038 === (1)))
{var inst_17029 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_17030 = {"url":inst_17029};var inst_17031 = [null,inst_17030];var inst_17032 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17031,null));var state_17037__$1 = state_17037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17037__$1,(2),ret,inst_17032);
} else
{return null;
}
}
});})(c__6192__auto___17047,ret,map__17026,map__17026__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___17047,ret,map__17026,map__17026__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17043 = [null,null,null,null,null,null,null,null];(statearr_17043[(0)] = state_machine__6178__auto__);
(statearr_17043[(1)] = (1));
return statearr_17043;
});
var state_machine__6178__auto____1 = (function (state_17037){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17037);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17044){if((e17044 instanceof Object))
{var ex__6181__auto__ = e17044;var statearr_17045_17048 = state_17037;(statearr_17045_17048[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17037);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17049 = state_17037;
state_17037 = G__17049;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17037){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___17047,ret,map__17026,map__17026__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_17046 = f__6193__auto__.call(null);(statearr_17046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___17047);
return statearr_17046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___17047,ret,map__17026,map__17026__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__17050){var map__17051 = p__17050;var map__17051__$1 = ((cljs.core.seq_QMARK_.call(null,map__17051))?cljs.core.apply.call(null,cljs.core.hash_map,map__17051):map__17051);var args = map__17051__$1;var id = cljs.core.get.call(null,map__17051__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___17068 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___17068,ret,map__17051,map__17051__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___17068,ret,map__17051,map__17051__$1,args,id){
return (function (state_17058){var state_val_17059 = (state_17058[(1)]);if((state_val_17059 === (2)))
{var inst_17055 = (state_17058[(2)]);var inst_17056 = cljs.core.async.close_BANG_.call(null,ret);var state_17058__$1 = (function (){var statearr_17060 = state_17058;(statearr_17060[(7)] = inst_17055);
return statearr_17060;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17058__$1,inst_17056);
} else
{if((state_val_17059 === (1)))
{var inst_17052 = [null,null];var inst_17053 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17052,null));var state_17058__$1 = state_17058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17058__$1,(2),ret,inst_17053);
} else
{return null;
}
}
});})(c__6192__auto___17068,ret,map__17051,map__17051__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___17068,ret,map__17051,map__17051__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17064 = [null,null,null,null,null,null,null,null];(statearr_17064[(0)] = state_machine__6178__auto__);
(statearr_17064[(1)] = (1));
return statearr_17064;
});
var state_machine__6178__auto____1 = (function (state_17058){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17058);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17065){if((e17065 instanceof Object))
{var ex__6181__auto__ = e17065;var statearr_17066_17069 = state_17058;(statearr_17066_17069[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17070 = state_17058;
state_17058 = G__17070;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17058){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___17068,ret,map__17051,map__17051__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_17067 = f__6193__auto__.call(null);(statearr_17067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___17068);
return statearr_17067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___17068,ret,map__17051,map__17051__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__17071 = cljs.core.rest.call(null,list);
var G__17072 = id;
var G__17073 = (start + (1));
list = G__17071;
id = G__17072;
start = G__17073;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__17075){var map__17076 = p__17075;var map__17076__$1 = ((cljs.core.seq_QMARK_.call(null,map__17076))?cljs.core.apply.call(null,cljs.core.hash_map,map__17076):map__17076);var args = map__17076__$1;var id = cljs.core.get.call(null,map__17076__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__17077_17126 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__17077_17126.done(((function (G__17077_17126,ret,map__17076,map__17076__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__17077_17126,ret,map__17076,map__17076__$1,args,id){
return (function (p1__17074_SHARP_){var obj17079 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__17074_SHARP_ + (1)))+".jpg"))};return obj17079;
});})(filtered,evtId,evt,G__17077_17126,ret,map__17076,map__17076__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17077_17126,ret,map__17076,map__17076__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17077_17126,ret,map__17076,map__17076__$1,args,id){
return (function (state_17107){var state_val_17108 = (state_17107[(1)]);if((state_val_17108 === (8)))
{var inst_17088 = (state_17107[(7)]);var inst_17095 = (state_17107[(2)]);var inst_17096 = (evt["Title"]);var inst_17097 = (evt["Date"]);var inst_17098 = (evt["Content"]);var inst_17099 = (evt["Form"]);var inst_17100 = {"prev_href":inst_17088,"next_href":inst_17095,"title":inst_17096,"date":inst_17097,"sideList":photos,"content":inst_17098,"form":inst_17099};var inst_17101 = [null,inst_17100];var inst_17102 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17101,null));var state_17107__$1 = state_17107;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17107__$1,(2),ret,inst_17102);
} else
{if((state_val_17108 === (7)))
{var state_17107__$1 = state_17107;var statearr_17109_17127 = state_17107__$1;(statearr_17109_17127[(2)] = null);
(statearr_17109_17127[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17108 === (6)))
{var inst_17090 = cljs.core.nth.call(null,filtered,nextId);var inst_17091 = cljs.core.first.call(null,inst_17090);var inst_17092 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17091));var state_17107__$1 = state_17107;var statearr_17110_17128 = state_17107__$1;(statearr_17110_17128[(2)] = inst_17092);
(statearr_17110_17128[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17108 === (5)))
{var inst_17088 = (state_17107[(2)]);var state_17107__$1 = (function (){var statearr_17111 = state_17107;(statearr_17111[(7)] = inst_17088);
return statearr_17111;
})();if(cljs.core.truth_(nextId))
{var statearr_17112_17129 = state_17107__$1;(statearr_17112_17129[(1)] = (6));
} else
{var statearr_17113_17130 = state_17107__$1;(statearr_17113_17130[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17108 === (4)))
{var state_17107__$1 = state_17107;var statearr_17114_17131 = state_17107__$1;(statearr_17114_17131[(2)] = null);
(statearr_17114_17131[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17108 === (3)))
{var inst_17083 = cljs.core.nth.call(null,filtered,prevId);var inst_17084 = cljs.core.first.call(null,inst_17083);var inst_17085 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17084));var state_17107__$1 = state_17107;var statearr_17115_17132 = state_17107__$1;(statearr_17115_17132[(2)] = inst_17085);
(statearr_17115_17132[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17108 === (2)))
{var inst_17104 = (state_17107[(2)]);var inst_17105 = cljs.core.async.close_BANG_.call(null,ret);var state_17107__$1 = (function (){var statearr_17116 = state_17107;(statearr_17116[(8)] = inst_17104);
return statearr_17116;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17107__$1,inst_17105);
} else
{if((state_val_17108 === (1)))
{var state_17107__$1 = state_17107;if(cljs.core.truth_(prevId))
{var statearr_17117_17133 = state_17107__$1;(statearr_17117_17133[(1)] = (3));
} else
{var statearr_17118_17134 = state_17107__$1;(statearr_17118_17134[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17077_17126,ret,map__17076,map__17076__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17077_17126,ret,map__17076,map__17076__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17122 = [null,null,null,null,null,null,null,null,null];(statearr_17122[(0)] = state_machine__6178__auto__);
(statearr_17122[(1)] = (1));
return statearr_17122;
});
var state_machine__6178__auto____1 = (function (state_17107){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17107);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17123){if((e17123 instanceof Object))
{var ex__6181__auto__ = e17123;var statearr_17124_17135 = state_17107;(statearr_17124_17135[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17107);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17136 = state_17107;
state_17107 = G__17136;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17107){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17077_17126,ret,map__17076,map__17076__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_17125 = f__6193__auto__.call(null);(statearr_17125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17077_17126,ret,map__17076,map__17076__$1,args,id))
);
return c__6192__auto__;
});})(G__17077_17126,ret,map__17076,map__17076__$1,args,id))
);
G__17077_17126.fail(((function (G__17077_17126,ret,map__17076,map__17076__$1,args,id){
return (function (err){return console.log(err);
});})(G__17077_17126,ret,map__17076,map__17076__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
