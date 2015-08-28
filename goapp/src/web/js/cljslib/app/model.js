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
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16748_SHARP_){return cljs.core._EQ_.call(null,view,p1__16748_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16749_SHARP_){return cljs.core._EQ_.call(null,view,p1__16749_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16750_SHARP_){return cljs.core._EQ_.call(null,view,p1__16750_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16751_SHARP_){return cljs.core._EQ_.call(null,view,p1__16751_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16752_SHARP_){return cljs.core._EQ_.call(null,view,p1__16752_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16753_SHARP_){return cljs.core._EQ_.call(null,view,p1__16753_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16754_SHARP_){return cljs.core._EQ_.call(null,view,p1__16754_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16755_SHARP_){return cljs.core._EQ_.call(null,view,p1__16755_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16756_SHARP_){return cljs.core._EQ_.call(null,view,p1__16756_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__16760){var vec__16761 = p__16760;var model = cljs.core.nth.call(null,vec__16761,(0),null);var detail = cljs.core.nth.call(null,vec__16761,(1),null);var G__16762 = (new Date(detail.Date));G__16762.getTime();
return G__16762;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__16765){var vec__16766 = p__16765;var model = cljs.core.nth.call(null,vec__16766,(0),null);var detail = cljs.core.nth.call(null,vec__16766,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__16769){var vec__16770 = p__16769;var model = cljs.core.nth.call(null,vec__16770,(0),null);var detail = cljs.core.nth.call(null,vec__16770,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (p__16818,key,p__16819){var map__16820 = p__16818;var map__16820__$1 = ((cljs.core.seq_QMARK_.call(null,map__16820))?cljs.core.apply.call(null,cljs.core.hash_map,map__16820):map__16820);var ctx = map__16820__$1;var media_type = cljs.core.get.call(null,map__16820__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));var map__16821 = p__16819;var map__16821__$1 = ((cljs.core.seq_QMARK_.call(null,map__16821))?cljs.core.apply.call(null,cljs.core.hash_map,map__16821):map__16821);var args = map__16821__$1;var page = cljs.core.get.call(null,map__16821__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__16821__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__16822_16865 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__16822_16865.done(((function (G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey){
return (function (p__16823){var vec__16824 = p__16823;var model = cljs.core.nth.call(null,vec__16824,(0),null);var detail = cljs.core.nth.call(null,vec__16824,(1),null);var vec__16825 = (function (){var pred__16826 = cljs.core._EQ_;var expr__16827 = media_type;if(cljs.core.truth_(pred__16826.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),expr__16827)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(242),(363)], null);
} else
{if(cljs.core.truth_(pred__16826.call(null,new cljs.core.Keyword(null,"ipad","ipad",343134859),expr__16827)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{if(cljs.core.truth_(pred__16826.call(null,new cljs.core.Keyword(null,"iphone","iphone",1689490215),expr__16827)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(268),(402)], null);
}
}
}
})();var w = cljs.core.nth.call(null,vec__16825,(0),null);var h = cljs.core.nth.call(null,vec__16825,(1),null);var obj16830 = {"visibleDate":false,"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePathWH.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg"),w,h),"date":detail.Date};return obj16830;
});})(modelCountPerPage,filtered,totalPage,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey))
;var dto = (function (){var obj16832 = {"prev_href":((!((page <= (0))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))):null),"next_href":((!((page >= totalPage)))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/"):""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))):null),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj16832;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey){
return (function (state_16839){var state_val_16840 = (state_16839[(1)]);if((state_val_16840 === (2)))
{var inst_16836 = (state_16839[(2)]);var inst_16837 = cljs.core.async.close_BANG_.call(null,ret);var state_16839__$1 = (function (){var statearr_16841 = state_16839;(statearr_16841[(7)] = inst_16836);
return statearr_16841;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16839__$1,inst_16837);
} else
{if((state_val_16840 === (1)))
{var inst_16833 = [null,dto];var inst_16834 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16833,null));var state_16839__$1 = state_16839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16839__$1,(2),ret,inst_16834);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16845 = [null,null,null,null,null,null,null,null];(statearr_16845[(0)] = state_machine__6178__auto__);
(statearr_16845[(1)] = (1));
return statearr_16845;
});
var state_machine__6178__auto____1 = (function (state_16839){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16839);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16846){if((e16846 instanceof Object))
{var ex__6181__auto__ = e16846;var statearr_16847_16866 = state_16839;(statearr_16847_16866[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16867 = state_16839;
state_16839 = G__16867;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16839){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_16848 = f__6193__auto__.call(null);(statearr_16848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey))
);
G__16822_16865.fail(((function (G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey){
return (function (state_16855){var state_val_16856 = (state_16855[(1)]);if((state_val_16856 === (2)))
{var inst_16852 = (state_16855[(2)]);var inst_16853 = cljs.core.async.close_BANG_.call(null,ret);var state_16855__$1 = (function (){var statearr_16857 = state_16855;(statearr_16857[(7)] = inst_16852);
return statearr_16857;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16855__$1,inst_16853);
} else
{if((state_val_16856 === (1)))
{var inst_16849 = [err,null];var inst_16850 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16849,null));var state_16855__$1 = state_16855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16855__$1,(2),ret,inst_16850);
} else
{return null;
}
}
});})(c__6192__auto__,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16861 = [null,null,null,null,null,null,null,null];(statearr_16861[(0)] = state_machine__6178__auto__);
(statearr_16861[(1)] = (1));
return statearr_16861;
});
var state_machine__6178__auto____1 = (function (state_16855){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16855);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16862){if((e16862 instanceof Object))
{var ex__6181__auto__ = e16862;var statearr_16863_16868 = state_16855;(statearr_16863_16868[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16855);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16869 = state_16855;
state_16855 = G__16869;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16855){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_16864 = f__6193__auto__.call(null);(statearr_16864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__16822_16865,configType,ret,map__16820,map__16820__$1,ctx,media_type,map__16821,map__16821__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__16927){var map__16928 = p__16927;var map__16928__$1 = ((cljs.core.seq_QMARK_.call(null,map__16928))?cljs.core.apply.call(null,cljs.core.hash_map,map__16928):map__16928);var args = map__16928__$1;var id = cljs.core.get.call(null,map__16928__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__16929_16984 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__16929_16984.done(((function (G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function (p__16930){var vec__16931 = p__16930;var key__$1 = cljs.core.nth.call(null,vec__16931,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__16931,(1),null);var obj16933 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg?Width=200&Height=200"))};return obj16933;
});})(dir,detail,filtered,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function iter__16934(s__16935){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function (){var s__16935__$1 = s__16935;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16935__$1);if(temp__4126__auto__)
{var s__16935__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16935__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16935__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16937 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16936 = (0);while(true){
if((i__16936 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__16936);cljs.core.chunk_append.call(null,b__16937,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__16985 = (i__16936 + (1));
i__16936 = G__16985;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16937),iter__16934.call(null,cljs.core.chunk_rest.call(null,s__16935__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16937),null);
}
} else
{var idx = cljs.core.first.call(null,s__16935__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__16934.call(null,cljs.core.rest.call(null,s__16935__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function iter__16938(s__16939){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function (){var s__16939__$1 = s__16939;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16939__$1);if(temp__4126__auto__)
{var s__16939__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16939__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16939__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16941 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16940 = (0);while(true){
if((i__16940 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__16940);cljs.core.chunk_append.call(null,b__16941,(function (){var obj16947 = {"id":url,"url":ServeFn.call(null,url)};return obj16947;
})());
{
var G__16986 = (i__16940 + (1));
i__16940 = G__16986;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16941),iter__16938.call(null,cljs.core.chunk_rest.call(null,s__16939__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16941),null);
}
} else
{var url = cljs.core.first.call(null,s__16939__$2);return cljs.core.cons.call(null,(function (){var obj16949 = {"id":url,"url":ServeFn.call(null,url)};return obj16949;
})(),iter__16938.call(null,cljs.core.rest.call(null,s__16939__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
;var dto = (function (){var obj16951 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj16951;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function (state_16958){var state_val_16959 = (state_16958[(1)]);if((state_val_16959 === (2)))
{var inst_16955 = (state_16958[(2)]);var inst_16956 = cljs.core.async.close_BANG_.call(null,ret);var state_16958__$1 = (function (){var statearr_16960 = state_16958;(statearr_16960[(7)] = inst_16955);
return statearr_16960;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16958__$1,inst_16956);
} else
{if((state_val_16959 === (1)))
{var inst_16952 = [null,dto];var inst_16953 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16952,null));var state_16958__$1 = state_16958;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16958__$1,(2),ret,inst_16953);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16964 = [null,null,null,null,null,null,null,null];(statearr_16964[(0)] = state_machine__6178__auto__);
(statearr_16964[(1)] = (1));
return statearr_16964;
});
var state_machine__6178__auto____1 = (function (state_16958){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16958);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16965){if((e16965 instanceof Object))
{var ex__6181__auto__ = e16965;var statearr_16966_16987 = state_16958;(statearr_16966_16987[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16958);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16988 = state_16958;
state_16958 = G__16988;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16958){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16967 = f__6193__auto__.call(null);(statearr_16967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
);
return c__6192__auto__;
});})(G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
);
G__16929_16984.fail(((function (G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function (state_16974){var state_val_16975 = (state_16974[(1)]);if((state_val_16975 === (2)))
{var inst_16971 = (state_16974[(2)]);var inst_16972 = cljs.core.async.close_BANG_.call(null,ret);var state_16974__$1 = (function (){var statearr_16976 = state_16974;(statearr_16976[(7)] = inst_16971);
return statearr_16976;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16974__$1,inst_16972);
} else
{if((state_val_16975 === (1)))
{var inst_16968 = [err,null];var inst_16969 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16968,null));var state_16974__$1 = state_16974;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16974__$1,(2),ret,inst_16969);
} else
{return null;
}
}
});})(c__6192__auto__,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_16980 = [null,null,null,null,null,null,null,null];(statearr_16980[(0)] = state_machine__6178__auto__);
(statearr_16980[(1)] = (1));
return statearr_16980;
});
var state_machine__6178__auto____1 = (function (state_16974){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16974);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16981){if((e16981 instanceof Object))
{var ex__6181__auto__ = e16981;var statearr_16982_16989 = state_16974;(statearr_16982_16989[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16974);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16990 = state_16974;
state_16974 = G__16990;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16974){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_16983 = f__6193__auto__.call(null);(statearr_16983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_16983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
);
return c__6192__auto__;
});})(G__16929_16984,ret,configType,map__16928,map__16928__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__16992_17031 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__16992_17031.done(((function (G__16992_17031,ret){
return (function (where,modelKey,detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16992_17031,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16992_17031,ret){
return (function (state_17005){var state_val_17006 = (state_17005[(1)]);if((state_val_17006 === (2)))
{var inst_17002 = (state_17005[(2)]);var inst_17003 = cljs.core.async.close_BANG_.call(null,ret);var state_17005__$1 = (function (){var statearr_17007 = state_17005;(statearr_17007[(7)] = inst_17002);
return statearr_17007;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17005__$1,inst_17003);
} else
{if((state_val_17006 === (1)))
{var inst_16995 = detail.ModelKey;var inst_16996 = clojure.string.capitalize.call(null,where);var inst_16997 = ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16996)+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey));var inst_16998 = {"modelKey":inst_16995,"moreUrl":inst_16997};var inst_16999 = [null,inst_16998];var inst_17000 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16999,null));var state_17005__$1 = state_17005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17005__$1,(2),ret,inst_17000);
} else
{return null;
}
}
});})(c__6192__auto__,G__16992_17031,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16992_17031,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17011 = [null,null,null,null,null,null,null,null];(statearr_17011[(0)] = state_machine__6178__auto__);
(statearr_17011[(1)] = (1));
return statearr_17011;
});
var state_machine__6178__auto____1 = (function (state_17005){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17005);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17012){if((e17012 instanceof Object))
{var ex__6181__auto__ = e17012;var statearr_17013_17032 = state_17005;(statearr_17013_17032[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17033 = state_17005;
state_17005 = G__17033;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17005){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16992_17031,ret))
})();var state__6194__auto__ = (function (){var statearr_17014 = f__6193__auto__.call(null);(statearr_17014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16992_17031,ret))
);
return c__6192__auto__;
});})(G__16992_17031,ret))
);
G__16992_17031.fail(((function (G__16992_17031,ret){
return (function (p1__16991_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__16992_17031,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__16992_17031,ret){
return (function (state_17021){var state_val_17022 = (state_17021[(1)]);if((state_val_17022 === (2)))
{var inst_17018 = (state_17021[(2)]);var inst_17019 = cljs.core.async.close_BANG_.call(null,ret);var state_17021__$1 = (function (){var statearr_17023 = state_17021;(statearr_17023[(7)] = inst_17018);
return statearr_17023;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17021__$1,inst_17019);
} else
{if((state_val_17022 === (1)))
{var inst_17015 = [p1__16991_SHARP_,null];var inst_17016 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17015,null));var state_17021__$1 = state_17021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17021__$1,(2),ret,inst_17016);
} else
{return null;
}
}
});})(c__6192__auto__,G__16992_17031,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__16992_17031,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17027 = [null,null,null,null,null,null,null,null];(statearr_17027[(0)] = state_machine__6178__auto__);
(statearr_17027[(1)] = (1));
return statearr_17027;
});
var state_machine__6178__auto____1 = (function (state_17021){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17021);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17028){if((e17028 instanceof Object))
{var ex__6181__auto__ = e17028;var statearr_17029_17034 = state_17021;(statearr_17029_17034[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17035 = state_17021;
state_17021 = G__17035;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17021){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__16992_17031,ret))
})();var state__6194__auto__ = (function (){var statearr_17030 = f__6193__auto__.call(null);(statearr_17030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__16992_17031,ret))
);
return c__6192__auto__;
});})(G__16992_17031,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__17036){var map__17037 = p__17036;var map__17037__$1 = ((cljs.core.seq_QMARK_.call(null,map__17037))?cljs.core.apply.call(null,cljs.core.hash_map,map__17037):map__17037);var args = map__17037__$1;var url = cljs.core.get.call(null,map__17037__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___17057 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___17057,ret,map__17037,map__17037__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___17057,ret,map__17037,map__17037__$1,args,url){
return (function (state_17047){var state_val_17048 = (state_17047[(1)]);if((state_val_17048 === (2)))
{var inst_17044 = (state_17047[(2)]);var inst_17045 = cljs.core.async.close_BANG_.call(null,ret);var state_17047__$1 = (function (){var statearr_17049 = state_17047;(statearr_17049[(7)] = inst_17044);
return statearr_17049;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17047__$1,inst_17045);
} else
{if((state_val_17048 === (1)))
{var inst_17040 = {"url":url};var inst_17041 = [null,inst_17040];var inst_17042 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17041,null));var state_17047__$1 = state_17047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17047__$1,(2),ret,inst_17042);
} else
{return null;
}
}
});})(c__6192__auto___17057,ret,map__17037,map__17037__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___17057,ret,map__17037,map__17037__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17053 = [null,null,null,null,null,null,null,null];(statearr_17053[(0)] = state_machine__6178__auto__);
(statearr_17053[(1)] = (1));
return statearr_17053;
});
var state_machine__6178__auto____1 = (function (state_17047){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17054){if((e17054 instanceof Object))
{var ex__6181__auto__ = e17054;var statearr_17055_17058 = state_17047;(statearr_17055_17058[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17059 = state_17047;
state_17047 = G__17059;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17047){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___17057,ret,map__17037,map__17037__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_17056 = f__6193__auto__.call(null);(statearr_17056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___17057);
return statearr_17056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___17057,ret,map__17037,map__17037__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__17060){var map__17061 = p__17060;var map__17061__$1 = ((cljs.core.seq_QMARK_.call(null,map__17061))?cljs.core.apply.call(null,cljs.core.hash_map,map__17061):map__17061);var args = map__17061__$1;var id = cljs.core.get.call(null,map__17061__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___17078 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___17078,ret,map__17061,map__17061__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___17078,ret,map__17061,map__17061__$1,args,id){
return (function (state_17068){var state_val_17069 = (state_17068[(1)]);if((state_val_17069 === (2)))
{var inst_17065 = (state_17068[(2)]);var inst_17066 = cljs.core.async.close_BANG_.call(null,ret);var state_17068__$1 = (function (){var statearr_17070 = state_17068;(statearr_17070[(7)] = inst_17065);
return statearr_17070;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17068__$1,inst_17066);
} else
{if((state_val_17069 === (1)))
{var inst_17062 = [null,null];var inst_17063 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17062,null));var state_17068__$1 = state_17068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17068__$1,(2),ret,inst_17063);
} else
{return null;
}
}
});})(c__6192__auto___17078,ret,map__17061,map__17061__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___17078,ret,map__17061,map__17061__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17074 = [null,null,null,null,null,null,null,null];(statearr_17074[(0)] = state_machine__6178__auto__);
(statearr_17074[(1)] = (1));
return statearr_17074;
});
var state_machine__6178__auto____1 = (function (state_17068){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17068);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17075){if((e17075 instanceof Object))
{var ex__6181__auto__ = e17075;var statearr_17076_17079 = state_17068;(statearr_17076_17079[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17068);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17080 = state_17068;
state_17068 = G__17080;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17068){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___17078,ret,map__17061,map__17061__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_17077 = f__6193__auto__.call(null);(statearr_17077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___17078);
return statearr_17077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___17078,ret,map__17061,map__17061__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__17081 = cljs.core.rest.call(null,list);
var G__17082 = id;
var G__17083 = (start + (1));
list = G__17081;
id = G__17082;
start = G__17083;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__17085){var map__17086 = p__17085;var map__17086__$1 = ((cljs.core.seq_QMARK_.call(null,map__17086))?cljs.core.apply.call(null,cljs.core.hash_map,map__17086):map__17086);var args = map__17086__$1;var id = cljs.core.get.call(null,map__17086__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__17087_17136 = app.fn.GetAllModelOnce.call(null,"config.json","news");G__17087_17136.done(((function (G__17087_17136,ret,map__17086,map__17086__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__17087_17136,ret,map__17086,map__17086__$1,args,id){
return (function (p1__17084_SHARP_){var obj17089 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["news"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__17084_SHARP_ + (1)))+".jpg"))};return obj17089;
});})(filtered,evtId,evt,G__17087_17136,ret,map__17086,map__17086__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17087_17136,ret,map__17086,map__17086__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17087_17136,ret,map__17086,map__17086__$1,args,id){
return (function (state_17117){var state_val_17118 = (state_17117[(1)]);if((state_val_17118 === (8)))
{var inst_17098 = (state_17117[(7)]);var inst_17105 = (state_17117[(2)]);var inst_17106 = (evt["Title"]);var inst_17107 = (evt["Date"]);var inst_17108 = (evt["Content"]);var inst_17109 = (evt["Form"]);var inst_17110 = {"prev_href":inst_17098,"next_href":inst_17105,"title":inst_17106,"date":inst_17107,"sideList":photos,"content":inst_17108,"form":inst_17109};var inst_17111 = [null,inst_17110];var inst_17112 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17111,null));var state_17117__$1 = state_17117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17117__$1,(2),ret,inst_17112);
} else
{if((state_val_17118 === (7)))
{var state_17117__$1 = state_17117;var statearr_17119_17137 = state_17117__$1;(statearr_17119_17137[(2)] = null);
(statearr_17119_17137[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17118 === (6)))
{var inst_17100 = cljs.core.nth.call(null,filtered,nextId);var inst_17101 = cljs.core.first.call(null,inst_17100);var inst_17102 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17101));var state_17117__$1 = state_17117;var statearr_17120_17138 = state_17117__$1;(statearr_17120_17138[(2)] = inst_17102);
(statearr_17120_17138[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17118 === (5)))
{var inst_17098 = (state_17117[(2)]);var state_17117__$1 = (function (){var statearr_17121 = state_17117;(statearr_17121[(7)] = inst_17098);
return statearr_17121;
})();if(cljs.core.truth_(nextId))
{var statearr_17122_17139 = state_17117__$1;(statearr_17122_17139[(1)] = (6));
} else
{var statearr_17123_17140 = state_17117__$1;(statearr_17123_17140[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17118 === (4)))
{var state_17117__$1 = state_17117;var statearr_17124_17141 = state_17117__$1;(statearr_17124_17141[(2)] = null);
(statearr_17124_17141[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17118 === (3)))
{var inst_17093 = cljs.core.nth.call(null,filtered,prevId);var inst_17094 = cljs.core.first.call(null,inst_17093);var inst_17095 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17094));var state_17117__$1 = state_17117;var statearr_17125_17142 = state_17117__$1;(statearr_17125_17142[(2)] = inst_17095);
(statearr_17125_17142[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17118 === (2)))
{var inst_17114 = (state_17117[(2)]);var inst_17115 = cljs.core.async.close_BANG_.call(null,ret);var state_17117__$1 = (function (){var statearr_17126 = state_17117;(statearr_17126[(8)] = inst_17114);
return statearr_17126;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17117__$1,inst_17115);
} else
{if((state_val_17118 === (1)))
{var state_17117__$1 = state_17117;if(cljs.core.truth_(prevId))
{var statearr_17127_17143 = state_17117__$1;(statearr_17127_17143[(1)] = (3));
} else
{var statearr_17128_17144 = state_17117__$1;(statearr_17128_17144[(1)] = (4));
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
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17087_17136,ret,map__17086,map__17086__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17087_17136,ret,map__17086,map__17086__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17132 = [null,null,null,null,null,null,null,null,null];(statearr_17132[(0)] = state_machine__6178__auto__);
(statearr_17132[(1)] = (1));
return statearr_17132;
});
var state_machine__6178__auto____1 = (function (state_17117){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17117);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17133){if((e17133 instanceof Object))
{var ex__6181__auto__ = e17133;var statearr_17134_17145 = state_17117;(statearr_17134_17145[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17117);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17146 = state_17117;
state_17117 = G__17146;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17117){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17087_17136,ret,map__17086,map__17086__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_17135 = f__6193__auto__.call(null);(statearr_17135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,prevId,nextId,G__17087_17136,ret,map__17086,map__17086__$1,args,id))
);
return c__6192__auto__;
});})(G__17087_17136,ret,map__17086,map__17086__$1,args,id))
);
G__17087_17136.fail(((function (G__17087_17136,ret,map__17086,map__17086__$1,args,id){
return (function (err){return console.log(err);
});})(G__17087_17136,ret,map__17086,map__17086__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
