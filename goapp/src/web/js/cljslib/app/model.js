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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26085_SHARP_){return cljs.core._EQ_.call(null,view,p1__26085_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26086_SHARP_){return cljs.core._EQ_.call(null,view,p1__26086_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26087_SHARP_){return cljs.core._EQ_.call(null,view,p1__26087_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26088_SHARP_){return cljs.core._EQ_.call(null,view,p1__26088_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26089_SHARP_){return cljs.core._EQ_.call(null,view,p1__26089_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26090_SHARP_){return cljs.core._EQ_.call(null,view,p1__26090_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26091_SHARP_){return cljs.core._EQ_.call(null,view,p1__26091_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26092_SHARP_){return cljs.core._EQ_.call(null,view,p1__26092_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26093_SHARP_){return cljs.core._EQ_.call(null,view,p1__26093_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__26097){var vec__26098 = p__26097;var model = cljs.core.nth.call(null,vec__26098,(0),null);var detail = cljs.core.nth.call(null,vec__26098,(1),null);var G__26099 = (new Date(detail.Date));G__26099.getTime();
return G__26099;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__26102){var vec__26103 = p__26102;var model = cljs.core.nth.call(null,vec__26103,(0),null);var detail = cljs.core.nth.call(null,vec__26103,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__26106){var vec__26107 = p__26106;var model = cljs.core.nth.call(null,vec__26107,(0),null);var detail = cljs.core.nth.call(null,vec__26107,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__26149){var map__26150 = p__26149;var map__26150__$1 = ((cljs.core.seq_QMARK_.call(null,map__26150))?cljs.core.apply.call(null,cljs.core.hash_map,map__26150):map__26150);var args = map__26150__$1;var page = cljs.core.get.call(null,map__26150__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__26150__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__26151_26190 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__26151_26190.done(((function (G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey){
return (function (p__26152){var vec__26153 = p__26152;var model = cljs.core.nth.call(null,vec__26153,(0),null);var detail = cljs.core.nth.call(null,vec__26153,(1),null);var obj26155 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),name)),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj26155;
});})(modelCountPerPage,filtered,totalPage,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey))
;var dto = (function (){var obj26157 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj26157;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey){
return (function (state_26164){var state_val_26165 = (state_26164[(1)]);if((state_val_26165 === (2)))
{var inst_26161 = (state_26164[(2)]);var inst_26162 = cljs.core.async.close_BANG_.call(null,ret);var state_26164__$1 = (function (){var statearr_26166 = state_26164;(statearr_26166[(7)] = inst_26161);
return statearr_26166;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26164__$1,inst_26162);
} else
{if((state_val_26165 === (1)))
{var inst_26158 = [null,dto];var inst_26159 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26158,null));var state_26164__$1 = state_26164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26164__$1,(2),ret,inst_26159);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26170 = [null,null,null,null,null,null,null,null];(statearr_26170[(0)] = state_machine__6178__auto__);
(statearr_26170[(1)] = (1));
return statearr_26170;
});
var state_machine__6178__auto____1 = (function (state_26164){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26164);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26171){if((e26171 instanceof Object))
{var ex__6181__auto__ = e26171;var statearr_26172_26191 = state_26164;(statearr_26172_26191[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26164);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26192 = state_26164;
state_26164 = G__26192;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26164){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_26173 = f__6193__auto__.call(null);(statearr_26173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_26173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey))
);
G__26151_26190.fail(((function (G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey){
return (function (state_26180){var state_val_26181 = (state_26180[(1)]);if((state_val_26181 === (2)))
{var inst_26177 = (state_26180[(2)]);var inst_26178 = cljs.core.async.close_BANG_.call(null,ret);var state_26180__$1 = (function (){var statearr_26182 = state_26180;(statearr_26182[(7)] = inst_26177);
return statearr_26182;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26180__$1,inst_26178);
} else
{if((state_val_26181 === (1)))
{var inst_26174 = [err,null];var inst_26175 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26174,null));var state_26180__$1 = state_26180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26180__$1,(2),ret,inst_26175);
} else
{return null;
}
}
});})(c__6192__auto__,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26186 = [null,null,null,null,null,null,null,null];(statearr_26186[(0)] = state_machine__6178__auto__);
(statearr_26186[(1)] = (1));
return statearr_26186;
});
var state_machine__6178__auto____1 = (function (state_26180){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26180);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26187){if((e26187 instanceof Object))
{var ex__6181__auto__ = e26187;var statearr_26188_26193 = state_26180;(statearr_26188_26193[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26194 = state_26180;
state_26180 = G__26194;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26180){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_26189 = f__6193__auto__.call(null);(statearr_26189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_26189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__26151_26190,configType,ret,map__26150,map__26150__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__26252){var map__26253 = p__26252;var map__26253__$1 = ((cljs.core.seq_QMARK_.call(null,map__26253))?cljs.core.apply.call(null,cljs.core.hash_map,map__26253):map__26253);var args = map__26253__$1;var id = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__26254_26309 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__26254_26309.done(((function (G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function (p__26255){var vec__26256 = p__26255;var key__$1 = cljs.core.nth.call(null,vec__26256,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__26256,(1),null);var obj26258 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj26258;
});})(dir,detail,filtered,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4293__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function iter__26259(s__26260){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function (){var s__26260__$1 = s__26260;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26260__$1);if(temp__4126__auto__)
{var s__26260__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26260__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__26260__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__26262 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__26261 = (0);while(true){
if((i__26261 < size__4292__auto__))
{var idx = cljs.core._nth.call(null,c__4291__auto__,i__26261);cljs.core.chunk_append.call(null,b__26262,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__26310 = (i__26261 + (1));
i__26261 = G__26310;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26262),iter__26259.call(null,cljs.core.chunk_rest.call(null,s__26260__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26262),null);
}
} else
{var idx = cljs.core.first.call(null,s__26260__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__26259.call(null,cljs.core.rest.call(null,s__26260__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
;return iter__4293__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4293__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function iter__26263(s__26264){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function (){var s__26264__$1 = s__26264;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26264__$1);if(temp__4126__auto__)
{var s__26264__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26264__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__26264__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__26266 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__26265 = (0);while(true){
if((i__26265 < size__4292__auto__))
{var url = cljs.core._nth.call(null,c__4291__auto__,i__26265);cljs.core.chunk_append.call(null,b__26266,(function (){var obj26272 = {"id":url,"url":ServeFn.call(null,url)};return obj26272;
})());
{
var G__26311 = (i__26265 + (1));
i__26265 = G__26311;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26266),iter__26263.call(null,cljs.core.chunk_rest.call(null,s__26264__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26266),null);
}
} else
{var url = cljs.core.first.call(null,s__26264__$2);return cljs.core.cons.call(null,(function (){var obj26274 = {"id":url,"url":ServeFn.call(null,url)};return obj26274;
})(),iter__26263.call(null,cljs.core.rest.call(null,s__26264__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
;return iter__4293__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
;var dto = (function (){var obj26276 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj26276;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function (state_26283){var state_val_26284 = (state_26283[(1)]);if((state_val_26284 === (2)))
{var inst_26280 = (state_26283[(2)]);var inst_26281 = cljs.core.async.close_BANG_.call(null,ret);var state_26283__$1 = (function (){var statearr_26285 = state_26283;(statearr_26285[(7)] = inst_26280);
return statearr_26285;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26283__$1,inst_26281);
} else
{if((state_val_26284 === (1)))
{var inst_26277 = [null,dto];var inst_26278 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26277,null));var state_26283__$1 = state_26283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26283__$1,(2),ret,inst_26278);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26289 = [null,null,null,null,null,null,null,null];(statearr_26289[(0)] = state_machine__6178__auto__);
(statearr_26289[(1)] = (1));
return statearr_26289;
});
var state_machine__6178__auto____1 = (function (state_26283){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26290){if((e26290 instanceof Object))
{var ex__6181__auto__ = e26290;var statearr_26291_26312 = state_26283;(statearr_26291_26312[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26313 = state_26283;
state_26283 = G__26313;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26283){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_26292 = f__6193__auto__.call(null);(statearr_26292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_26292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
);
return c__6192__auto__;
});})(G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
);
G__26254_26309.fail(((function (G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function (state_26299){var state_val_26300 = (state_26299[(1)]);if((state_val_26300 === (2)))
{var inst_26296 = (state_26299[(2)]);var inst_26297 = cljs.core.async.close_BANG_.call(null,ret);var state_26299__$1 = (function (){var statearr_26301 = state_26299;(statearr_26301[(7)] = inst_26296);
return statearr_26301;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26299__$1,inst_26297);
} else
{if((state_val_26300 === (1)))
{var inst_26293 = [err,null];var inst_26294 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26293,null));var state_26299__$1 = state_26299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26299__$1,(2),ret,inst_26294);
} else
{return null;
}
}
});})(c__6192__auto__,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26305 = [null,null,null,null,null,null,null,null];(statearr_26305[(0)] = state_machine__6178__auto__);
(statearr_26305[(1)] = (1));
return statearr_26305;
});
var state_machine__6178__auto____1 = (function (state_26299){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26299);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26306){if((e26306 instanceof Object))
{var ex__6181__auto__ = e26306;var statearr_26307_26314 = state_26299;(statearr_26307_26314[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26299);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26315 = state_26299;
state_26299 = G__26315;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26299){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_26308 = f__6193__auto__.call(null);(statearr_26308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_26308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
);
return c__6192__auto__;
});})(G__26254_26309,ret,configType,map__26253,map__26253__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__26317_26356 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__26317_26356.done(((function (G__26317_26356,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__26317_26356,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__26317_26356,ret){
return (function (state_26330){var state_val_26331 = (state_26330[(1)]);if((state_val_26331 === (2)))
{var inst_26327 = (state_26330[(2)]);var inst_26328 = cljs.core.async.close_BANG_.call(null,ret);var state_26330__$1 = (function (){var statearr_26332 = state_26330;(statearr_26332[(7)] = inst_26327);
return statearr_26332;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26330__$1,inst_26328);
} else
{if((state_val_26331 === (1)))
{var inst_26320 = detail.ModelKey;var inst_26321 = clojure.string.capitalize.call(null,where);var inst_26322 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26321)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_26323 = {"modelKey":inst_26320,"moreUrl":inst_26322};var inst_26324 = [null,inst_26323];var inst_26325 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26324,null));var state_26330__$1 = state_26330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26330__$1,(2),ret,inst_26325);
} else
{return null;
}
}
});})(c__6192__auto__,G__26317_26356,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__26317_26356,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26336 = [null,null,null,null,null,null,null,null];(statearr_26336[(0)] = state_machine__6178__auto__);
(statearr_26336[(1)] = (1));
return statearr_26336;
});
var state_machine__6178__auto____1 = (function (state_26330){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26330);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26337){if((e26337 instanceof Object))
{var ex__6181__auto__ = e26337;var statearr_26338_26357 = state_26330;(statearr_26338_26357[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26358 = state_26330;
state_26330 = G__26358;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26330){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__26317_26356,ret))
})();var state__6194__auto__ = (function (){var statearr_26339 = f__6193__auto__.call(null);(statearr_26339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_26339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__26317_26356,ret))
);
return c__6192__auto__;
});})(G__26317_26356,ret))
);
G__26317_26356.fail(((function (G__26317_26356,ret){
return (function (p1__26316_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__26317_26356,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__26317_26356,ret){
return (function (state_26346){var state_val_26347 = (state_26346[(1)]);if((state_val_26347 === (2)))
{var inst_26343 = (state_26346[(2)]);var inst_26344 = cljs.core.async.close_BANG_.call(null,ret);var state_26346__$1 = (function (){var statearr_26348 = state_26346;(statearr_26348[(7)] = inst_26343);
return statearr_26348;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26346__$1,inst_26344);
} else
{if((state_val_26347 === (1)))
{var inst_26340 = [p1__26316_SHARP_,null];var inst_26341 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26340,null));var state_26346__$1 = state_26346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26346__$1,(2),ret,inst_26341);
} else
{return null;
}
}
});})(c__6192__auto__,G__26317_26356,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__26317_26356,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26352 = [null,null,null,null,null,null,null,null];(statearr_26352[(0)] = state_machine__6178__auto__);
(statearr_26352[(1)] = (1));
return statearr_26352;
});
var state_machine__6178__auto____1 = (function (state_26346){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26346);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26353){if((e26353 instanceof Object))
{var ex__6181__auto__ = e26353;var statearr_26354_26359 = state_26346;(statearr_26354_26359[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26346);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26360 = state_26346;
state_26346 = G__26360;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26346){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__26317_26356,ret))
})();var state__6194__auto__ = (function (){var statearr_26355 = f__6193__auto__.call(null);(statearr_26355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_26355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__26317_26356,ret))
);
return c__6192__auto__;
});})(G__26317_26356,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__26361){var map__26362 = p__26361;var map__26362__$1 = ((cljs.core.seq_QMARK_.call(null,map__26362))?cljs.core.apply.call(null,cljs.core.hash_map,map__26362):map__26362);var args = map__26362__$1;var url = cljs.core.get.call(null,map__26362__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___26382 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___26382,ret,map__26362,map__26362__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___26382,ret,map__26362,map__26362__$1,args,url){
return (function (state_26372){var state_val_26373 = (state_26372[(1)]);if((state_val_26373 === (2)))
{var inst_26369 = (state_26372[(2)]);var inst_26370 = cljs.core.async.close_BANG_.call(null,ret);var state_26372__$1 = (function (){var statearr_26374 = state_26372;(statearr_26374[(7)] = inst_26369);
return statearr_26374;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26372__$1,inst_26370);
} else
{if((state_val_26373 === (1)))
{var inst_26365 = {"url":url};var inst_26366 = [null,inst_26365];var inst_26367 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26366,null));var state_26372__$1 = state_26372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26372__$1,(2),ret,inst_26367);
} else
{return null;
}
}
});})(c__6192__auto___26382,ret,map__26362,map__26362__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___26382,ret,map__26362,map__26362__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26378 = [null,null,null,null,null,null,null,null];(statearr_26378[(0)] = state_machine__6178__auto__);
(statearr_26378[(1)] = (1));
return statearr_26378;
});
var state_machine__6178__auto____1 = (function (state_26372){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26372);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26379){if((e26379 instanceof Object))
{var ex__6181__auto__ = e26379;var statearr_26380_26383 = state_26372;(statearr_26380_26383[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26372);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26384 = state_26372;
state_26372 = G__26384;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26372){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___26382,ret,map__26362,map__26362__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_26381 = f__6193__auto__.call(null);(statearr_26381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___26382);
return statearr_26381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___26382,ret,map__26362,map__26362__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__26385){var map__26386 = p__26385;var map__26386__$1 = ((cljs.core.seq_QMARK_.call(null,map__26386))?cljs.core.apply.call(null,cljs.core.hash_map,map__26386):map__26386);var args = map__26386__$1;var id = cljs.core.get.call(null,map__26386__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___26403 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___26403,ret,map__26386,map__26386__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___26403,ret,map__26386,map__26386__$1,args,id){
return (function (state_26393){var state_val_26394 = (state_26393[(1)]);if((state_val_26394 === (2)))
{var inst_26390 = (state_26393[(2)]);var inst_26391 = cljs.core.async.close_BANG_.call(null,ret);var state_26393__$1 = (function (){var statearr_26395 = state_26393;(statearr_26395[(7)] = inst_26390);
return statearr_26395;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26393__$1,inst_26391);
} else
{if((state_val_26394 === (1)))
{var inst_26387 = [null,null];var inst_26388 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26387,null));var state_26393__$1 = state_26393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26393__$1,(2),ret,inst_26388);
} else
{return null;
}
}
});})(c__6192__auto___26403,ret,map__26386,map__26386__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___26403,ret,map__26386,map__26386__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26399 = [null,null,null,null,null,null,null,null];(statearr_26399[(0)] = state_machine__6178__auto__);
(statearr_26399[(1)] = (1));
return statearr_26399;
});
var state_machine__6178__auto____1 = (function (state_26393){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26393);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26400){if((e26400 instanceof Object))
{var ex__6181__auto__ = e26400;var statearr_26401_26404 = state_26393;(statearr_26401_26404[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26393);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26405 = state_26393;
state_26393 = G__26405;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26393){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___26403,ret,map__26386,map__26386__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_26402 = f__6193__auto__.call(null);(statearr_26402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___26403);
return statearr_26402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___26403,ret,map__26386,map__26386__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__26406 = cljs.core.rest.call(null,list);
var G__26407 = id;
var G__26408 = (start + (1));
list = G__26406;
id = G__26407;
start = G__26408;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__26410){var map__26411 = p__26410;var map__26411__$1 = ((cljs.core.seq_QMARK_.call(null,map__26411))?cljs.core.apply.call(null,cljs.core.hash_map,map__26411):map__26411);var args = map__26411__$1;var id = cljs.core.get.call(null,map__26411__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__26412_26461 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__26412_26461.done(((function (G__26412_26461,ret,map__26411,map__26411__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__26412_26461,ret,map__26411,map__26411__$1,args,id){
return (function (p1__26409_SHARP_){var obj26414 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__26409_SHARP_ + (1)))+".jpg"))};return obj26414;
});})(filtered,evtId,evt,G__26412_26461,ret,map__26411,map__26411__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__26412_26461,ret,map__26411,map__26411__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__26412_26461,ret,map__26411,map__26411__$1,args,id){
return (function (state_26442){var state_val_26443 = (state_26442[(1)]);if((state_val_26443 === (8)))
{var inst_26423 = (state_26442[(7)]);var inst_26430 = (state_26442[(2)]);var inst_26431 = (evt["Title"]);var inst_26432 = (evt["Date"]);var inst_26433 = (evt["Content"]);var inst_26434 = (evt["Form"]);var inst_26435 = {"prev_href":inst_26423,"next_href":inst_26430,"title":inst_26431,"date":inst_26432,"sideList":photos,"content":inst_26433,"form":inst_26434};var inst_26436 = [null,inst_26435];var inst_26437 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26436,null));var state_26442__$1 = state_26442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26442__$1,(2),ret,inst_26437);
} else
{if((state_val_26443 === (7)))
{var state_26442__$1 = state_26442;var statearr_26444_26462 = state_26442__$1;(statearr_26444_26462[(2)] = null);
(statearr_26444_26462[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26443 === (6)))
{var inst_26425 = cljs.core.nth.call(null,filtered,nextId);var inst_26426 = cljs.core.first.call(null,inst_26425);var inst_26427 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26426));var state_26442__$1 = state_26442;var statearr_26445_26463 = state_26442__$1;(statearr_26445_26463[(2)] = inst_26427);
(statearr_26445_26463[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26443 === (5)))
{var inst_26423 = (state_26442[(2)]);var state_26442__$1 = (function (){var statearr_26446 = state_26442;(statearr_26446[(7)] = inst_26423);
return statearr_26446;
})();if(cljs.core.truth_(nextId))
{var statearr_26447_26464 = state_26442__$1;(statearr_26447_26464[(1)] = (6));
} else
{var statearr_26448_26465 = state_26442__$1;(statearr_26448_26465[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26443 === (4)))
{var state_26442__$1 = state_26442;var statearr_26449_26466 = state_26442__$1;(statearr_26449_26466[(2)] = null);
(statearr_26449_26466[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26443 === (3)))
{var inst_26418 = cljs.core.nth.call(null,filtered,prevId);var inst_26419 = cljs.core.first.call(null,inst_26418);var inst_26420 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26419));var state_26442__$1 = state_26442;var statearr_26450_26467 = state_26442__$1;(statearr_26450_26467[(2)] = inst_26420);
(statearr_26450_26467[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26443 === (2)))
{var inst_26439 = (state_26442[(2)]);var inst_26440 = cljs.core.async.close_BANG_.call(null,ret);var state_26442__$1 = (function (){var statearr_26451 = state_26442;(statearr_26451[(8)] = inst_26439);
return statearr_26451;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26442__$1,inst_26440);
} else
{if((state_val_26443 === (1)))
{var state_26442__$1 = state_26442;if(cljs.core.truth_(prevId))
{var statearr_26452_26468 = state_26442__$1;(statearr_26452_26468[(1)] = (3));
} else
{var statearr_26453_26469 = state_26442__$1;(statearr_26453_26469[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__26412_26461,ret,map__26411,map__26411__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__26412_26461,ret,map__26411,map__26411__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_26457 = [null,null,null,null,null,null,null,null,null];(statearr_26457[(0)] = state_machine__6178__auto__);
(statearr_26457[(1)] = (1));
return statearr_26457;
});
var state_machine__6178__auto____1 = (function (state_26442){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_26442);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e26458){if((e26458 instanceof Object))
{var ex__6181__auto__ = e26458;var statearr_26459_26470 = state_26442;(statearr_26459_26470[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26442);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26471 = state_26442;
state_26442 = G__26471;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_26442){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_26442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__26412_26461,ret,map__26411,map__26411__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_26460 = f__6193__auto__.call(null);(statearr_26460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_26460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__26412_26461,ret,map__26411,map__26411__$1,args,id))
);
return c__6192__auto__;
});})(G__26412_26461,ret,map__26411,map__26411__$1,args,id))
);
G__26412_26461.fail(((function (G__26412_26461,ret,map__26411,map__26411__$1,args,id){
return (function (err){return console.log(err);
});})(G__26412_26461,ret,map__26411,map__26411__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
