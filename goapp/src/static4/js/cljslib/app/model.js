// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14102_SHARP_){return cljs.core._EQ_.call(null,view,p1__14102_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14103_SHARP_){return cljs.core._EQ_.call(null,view,p1__14103_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14104_SHARP_){return cljs.core._EQ_.call(null,view,p1__14104_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14105_SHARP_){return cljs.core._EQ_.call(null,view,p1__14105_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14106_SHARP_){return cljs.core._EQ_.call(null,view,p1__14106_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14107_SHARP_){return cljs.core._EQ_.call(null,view,p1__14107_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14108_SHARP_){return cljs.core._EQ_.call(null,view,p1__14108_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14109_SHARP_){return cljs.core._EQ_.call(null,view,p1__14109_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14110_SHARP_){return cljs.core._EQ_.call(null,view,p1__14110_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__14114){var vec__14115 = p__14114;var model = cljs.core.nth.call(null,vec__14115,(0),null);var detail = cljs.core.nth.call(null,vec__14115,(1),null);var G__14116 = (new Date(detail.Date));G__14116.getTime();
return G__14116;
}),details));
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__14119){var vec__14120 = p__14119;var model = cljs.core.nth.call(null,vec__14120,(0),null);var detail = cljs.core.nth.call(null,vec__14120,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__14162){var map__14163 = p__14162;var map__14163__$1 = ((cljs.core.seq_QMARK_.call(null,map__14163))?cljs.core.apply.call(null,cljs.core.hash_map,map__14163):map__14163);var args = map__14163__$1;var page = cljs.core.get.call(null,map__14163__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__14163__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__14164_14203 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__14164_14203.done(((function (G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,details))));var ConvertDTO = ((function (modelCountPerPage,filtered,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey){
return (function (p__14165){var vec__14166 = p__14165;var model = cljs.core.nth.call(null,vec__14166,(0),null);var detail = cljs.core.nth.call(null,vec__14166,(1),null);var obj14168 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj14168;
});})(modelCountPerPage,filtered,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey))
;var dto = (function (){var obj14170 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page - (1)))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((page + (1)))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj14170;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey){
return (function (state_14177){var state_val_14178 = (state_14177[(1)]);if((state_val_14178 === (2)))
{var inst_14174 = (state_14177[(2)]);var inst_14175 = cljs.core.async.close_BANG_.call(null,ret);var state_14177__$1 = (function (){var statearr_14179 = state_14177;(statearr_14179[(7)] = inst_14174);
return statearr_14179;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14177__$1,inst_14175);
} else
{if((state_val_14178 === (1)))
{var inst_14171 = [null,dto];var inst_14172 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14171,null));var state_14177__$1 = state_14177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14177__$1,(2),ret,inst_14172);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14183 = [null,null,null,null,null,null,null,null];(statearr_14183[(0)] = state_machine__6178__auto__);
(statearr_14183[(1)] = (1));
return statearr_14183;
});
var state_machine__6178__auto____1 = (function (state_14177){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14177);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14184){if((e14184 instanceof Object))
{var ex__6181__auto__ = e14184;var statearr_14185_14204 = state_14177;(statearr_14185_14204[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14205 = state_14177;
state_14177 = G__14205;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14177){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_14186 = f__6193__auto__.call(null);(statearr_14186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,ConvertDTO,dto,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey))
);
G__14164_14203.fail(((function (G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey){
return (function (state_14193){var state_val_14194 = (state_14193[(1)]);if((state_val_14194 === (2)))
{var inst_14190 = (state_14193[(2)]);var inst_14191 = cljs.core.async.close_BANG_.call(null,ret);var state_14193__$1 = (function (){var statearr_14195 = state_14193;(statearr_14195[(7)] = inst_14190);
return statearr_14195;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14193__$1,inst_14191);
} else
{if((state_val_14194 === (1)))
{var inst_14187 = [err,null];var inst_14188 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14187,null));var state_14193__$1 = state_14193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14193__$1,(2),ret,inst_14188);
} else
{return null;
}
}
});})(c__6192__auto__,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14199 = [null,null,null,null,null,null,null,null];(statearr_14199[(0)] = state_machine__6178__auto__);
(statearr_14199[(1)] = (1));
return statearr_14199;
});
var state_machine__6178__auto____1 = (function (state_14193){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14193);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14200){if((e14200 instanceof Object))
{var ex__6181__auto__ = e14200;var statearr_14201_14206 = state_14193;(statearr_14201_14206[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14207 = state_14193;
state_14193 = G__14207;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14193){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_14202 = f__6193__auto__.call(null);(statearr_14202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__14164_14203,configType,ret,map__14163,map__14163__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__14265){var map__14266 = p__14265;var map__14266__$1 = ((cljs.core.seq_QMARK_.call(null,map__14266))?cljs.core.apply.call(null,cljs.core.hash_map,map__14266):map__14266);var args = map__14266__$1;var id = cljs.core.get.call(null,map__14266__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__14267_14322 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__14267_14322.done(((function (G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,details));var ConvertHeadDTO = ((function (dir,detail,filtered,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function (p__14268){var vec__14269 = p__14268;var key__$1 = cljs.core.nth.call(null,vec__14269,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__14269,(1),null);var obj14271 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj14271;
});})(dir,detail,filtered,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function iter__14272(s__14273){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function (){var s__14273__$1 = s__14273;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14273__$1);if(temp__4126__auto__)
{var s__14273__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14273__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14273__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14275 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14274 = (0);while(true){
if((i__14274 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__14274);cljs.core.chunk_append.call(null,b__14275,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__14323 = (i__14274 + (1));
i__14274 = G__14323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14275),iter__14272.call(null,cljs.core.chunk_rest.call(null,s__14273__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14275),null);
}
} else
{var idx = cljs.core.first.call(null,s__14273__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__14272.call(null,cljs.core.rest.call(null,s__14273__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function iter__14276(s__14277){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function (){var s__14277__$1 = s__14277;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14277__$1);if(temp__4126__auto__)
{var s__14277__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14277__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14277__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14279 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14278 = (0);while(true){
if((i__14278 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__14278);cljs.core.chunk_append.call(null,b__14279,(function (){var obj14285 = {"id":url,"url":ServeFn.call(null,url)};return obj14285;
})());
{
var G__14324 = (i__14278 + (1));
i__14278 = G__14324;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14279),iter__14276.call(null,cljs.core.chunk_rest.call(null,s__14277__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14279),null);
}
} else
{var url = cljs.core.first.call(null,s__14277__$2);return cljs.core.cons.call(null,(function (){var obj14287 = {"id":url,"url":ServeFn.call(null,url)};return obj14287;
})(),iter__14276.call(null,cljs.core.rest.call(null,s__14277__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
;var dto = (function (){var obj14289 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj14289;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function (state_14296){var state_val_14297 = (state_14296[(1)]);if((state_val_14297 === (2)))
{var inst_14293 = (state_14296[(2)]);var inst_14294 = cljs.core.async.close_BANG_.call(null,ret);var state_14296__$1 = (function (){var statearr_14298 = state_14296;(statearr_14298[(7)] = inst_14293);
return statearr_14298;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14296__$1,inst_14294);
} else
{if((state_val_14297 === (1)))
{var inst_14290 = [null,dto];var inst_14291 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14290,null));var state_14296__$1 = state_14296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14296__$1,(2),ret,inst_14291);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14302 = [null,null,null,null,null,null,null,null];(statearr_14302[(0)] = state_machine__6178__auto__);
(statearr_14302[(1)] = (1));
return statearr_14302;
});
var state_machine__6178__auto____1 = (function (state_14296){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14296);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14303){if((e14303 instanceof Object))
{var ex__6181__auto__ = e14303;var statearr_14304_14325 = state_14296;(statearr_14304_14325[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14296);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14326 = state_14296;
state_14296 = G__14326;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14296){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_14305 = f__6193__auto__.call(null);(statearr_14305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
);
return c__6192__auto__;
});})(G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
);
G__14267_14322.fail(((function (G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function (state_14312){var state_val_14313 = (state_14312[(1)]);if((state_val_14313 === (2)))
{var inst_14309 = (state_14312[(2)]);var inst_14310 = cljs.core.async.close_BANG_.call(null,ret);var state_14312__$1 = (function (){var statearr_14314 = state_14312;(statearr_14314[(7)] = inst_14309);
return statearr_14314;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14312__$1,inst_14310);
} else
{if((state_val_14313 === (1)))
{var inst_14306 = [err,null];var inst_14307 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14306,null));var state_14312__$1 = state_14312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14312__$1,(2),ret,inst_14307);
} else
{return null;
}
}
});})(c__6192__auto__,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14318 = [null,null,null,null,null,null,null,null];(statearr_14318[(0)] = state_machine__6178__auto__);
(statearr_14318[(1)] = (1));
return statearr_14318;
});
var state_machine__6178__auto____1 = (function (state_14312){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14312);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14319){if((e14319 instanceof Object))
{var ex__6181__auto__ = e14319;var statearr_14320_14327 = state_14312;(statearr_14320_14327[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14328 = state_14312;
state_14312 = G__14328;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14312){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_14321 = f__6193__auto__.call(null);(statearr_14321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
);
return c__6192__auto__;
});})(G__14267_14322,ret,configType,map__14266,map__14266__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__14330_14367 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__14330_14367.done(((function (G__14330_14367,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__14330_14367,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__14330_14367,ret){
return (function (state_14341){var state_val_14342 = (state_14341[(1)]);if((state_val_14342 === (2)))
{var inst_14338 = (state_14341[(2)]);var inst_14339 = cljs.core.async.close_BANG_.call(null,ret);var state_14341__$1 = (function (){var statearr_14343 = state_14341;(statearr_14343[(7)] = inst_14338);
return statearr_14343;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14341__$1,inst_14339);
} else
{if((state_val_14342 === (1)))
{var inst_14333 = detail.ModelKey;var inst_14334 = {"modelKey":inst_14333};var inst_14335 = [null,inst_14334];var inst_14336 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14335,null));var state_14341__$1 = state_14341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14341__$1,(2),ret,inst_14336);
} else
{return null;
}
}
});})(c__6192__auto__,G__14330_14367,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__14330_14367,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14347 = [null,null,null,null,null,null,null,null];(statearr_14347[(0)] = state_machine__6178__auto__);
(statearr_14347[(1)] = (1));
return statearr_14347;
});
var state_machine__6178__auto____1 = (function (state_14341){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14341);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14348){if((e14348 instanceof Object))
{var ex__6181__auto__ = e14348;var statearr_14349_14368 = state_14341;(statearr_14349_14368[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14369 = state_14341;
state_14341 = G__14369;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14341){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__14330_14367,ret))
})();var state__6194__auto__ = (function (){var statearr_14350 = f__6193__auto__.call(null);(statearr_14350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__14330_14367,ret))
);
return c__6192__auto__;
});})(G__14330_14367,ret))
);
G__14330_14367.fail(((function (G__14330_14367,ret){
return (function (p1__14329_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__14330_14367,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__14330_14367,ret){
return (function (state_14357){var state_val_14358 = (state_14357[(1)]);if((state_val_14358 === (2)))
{var inst_14354 = (state_14357[(2)]);var inst_14355 = cljs.core.async.close_BANG_.call(null,ret);var state_14357__$1 = (function (){var statearr_14359 = state_14357;(statearr_14359[(7)] = inst_14354);
return statearr_14359;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14357__$1,inst_14355);
} else
{if((state_val_14358 === (1)))
{var inst_14351 = [p1__14329_SHARP_,null];var inst_14352 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14351,null));var state_14357__$1 = state_14357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14357__$1,(2),ret,inst_14352);
} else
{return null;
}
}
});})(c__6192__auto__,G__14330_14367,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__14330_14367,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14363 = [null,null,null,null,null,null,null,null];(statearr_14363[(0)] = state_machine__6178__auto__);
(statearr_14363[(1)] = (1));
return statearr_14363;
});
var state_machine__6178__auto____1 = (function (state_14357){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14357);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14364){if((e14364 instanceof Object))
{var ex__6181__auto__ = e14364;var statearr_14365_14370 = state_14357;(statearr_14365_14370[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14371 = state_14357;
state_14357 = G__14371;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14357){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__14330_14367,ret))
})();var state__6194__auto__ = (function (){var statearr_14366 = f__6193__auto__.call(null);(statearr_14366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__14330_14367,ret))
);
return c__6192__auto__;
});})(G__14330_14367,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__14372){var map__14373 = p__14372;var map__14373__$1 = ((cljs.core.seq_QMARK_.call(null,map__14373))?cljs.core.apply.call(null,cljs.core.hash_map,map__14373):map__14373);var args = map__14373__$1;var url = cljs.core.get.call(null,map__14373__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___14394 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___14394,ret,map__14373,map__14373__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___14394,ret,map__14373,map__14373__$1,args,url){
return (function (state_14384){var state_val_14385 = (state_14384[(1)]);if((state_val_14385 === (2)))
{var inst_14381 = (state_14384[(2)]);var inst_14382 = cljs.core.async.close_BANG_.call(null,ret);var state_14384__$1 = (function (){var statearr_14386 = state_14384;(statearr_14386[(7)] = inst_14381);
return statearr_14386;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14384__$1,inst_14382);
} else
{if((state_val_14385 === (1)))
{var inst_14376 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_14377 = {"url":inst_14376};var inst_14378 = [null,inst_14377];var inst_14379 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14378,null));var state_14384__$1 = state_14384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14384__$1,(2),ret,inst_14379);
} else
{return null;
}
}
});})(c__6192__auto___14394,ret,map__14373,map__14373__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___14394,ret,map__14373,map__14373__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14390 = [null,null,null,null,null,null,null,null];(statearr_14390[(0)] = state_machine__6178__auto__);
(statearr_14390[(1)] = (1));
return statearr_14390;
});
var state_machine__6178__auto____1 = (function (state_14384){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14384);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14391){if((e14391 instanceof Object))
{var ex__6181__auto__ = e14391;var statearr_14392_14395 = state_14384;(statearr_14392_14395[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14384);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14391;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14396 = state_14384;
state_14384 = G__14396;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14384){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___14394,ret,map__14373,map__14373__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_14393 = f__6193__auto__.call(null);(statearr_14393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14394);
return statearr_14393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___14394,ret,map__14373,map__14373__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__14397){var map__14398 = p__14397;var map__14398__$1 = ((cljs.core.seq_QMARK_.call(null,map__14398))?cljs.core.apply.call(null,cljs.core.hash_map,map__14398):map__14398);var args = map__14398__$1;var id = cljs.core.get.call(null,map__14398__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___14415 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___14415,ret,map__14398,map__14398__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___14415,ret,map__14398,map__14398__$1,args,id){
return (function (state_14405){var state_val_14406 = (state_14405[(1)]);if((state_val_14406 === (2)))
{var inst_14402 = (state_14405[(2)]);var inst_14403 = cljs.core.async.close_BANG_.call(null,ret);var state_14405__$1 = (function (){var statearr_14407 = state_14405;(statearr_14407[(7)] = inst_14402);
return statearr_14407;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14405__$1,inst_14403);
} else
{if((state_val_14406 === (1)))
{var inst_14399 = [null,null];var inst_14400 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14399,null));var state_14405__$1 = state_14405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14405__$1,(2),ret,inst_14400);
} else
{return null;
}
}
});})(c__6192__auto___14415,ret,map__14398,map__14398__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___14415,ret,map__14398,map__14398__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14411 = [null,null,null,null,null,null,null,null];(statearr_14411[(0)] = state_machine__6178__auto__);
(statearr_14411[(1)] = (1));
return statearr_14411;
});
var state_machine__6178__auto____1 = (function (state_14405){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14405);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14412){if((e14412 instanceof Object))
{var ex__6181__auto__ = e14412;var statearr_14413_14416 = state_14405;(statearr_14413_14416[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14412;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14417 = state_14405;
state_14405 = G__14417;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14405){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___14415,ret,map__14398,map__14398__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_14414 = f__6193__auto__.call(null);(statearr_14414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14415);
return statearr_14414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___14415,ret,map__14398,map__14398__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__14418 = cljs.core.rest.call(null,list);
var G__14419 = id;
var G__14420 = (start + (1));
list = G__14418;
id = G__14419;
start = G__14420;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__14422){var map__14423 = p__14422;var map__14423__$1 = ((cljs.core.seq_QMARK_.call(null,map__14423))?cljs.core.apply.call(null,cljs.core.hash_map,map__14423):map__14423);var args = map__14423__$1;var id = cljs.core.get.call(null,map__14423__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__14424_14456 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__14424_14456.done(((function (G__14424_14456,ret,map__14423,map__14423__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__14424_14456,ret,map__14423,map__14423__$1,args,id){
return (function (p1__14421_SHARP_){var obj14426 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__14421_SHARP_ + (1)))+".jpg"))};return obj14426;
});})(filtered,evtId,evt,G__14424_14456,ret,map__14423,map__14423__$1,args,id))
,cljs.core.range.call(null,(evt["Count"]))));var idx = (function (){var find = (app.model.indexOf.call(null,filtered,evtId,(0)) - (1));if((find < (0)))
{return (cljs.core.count.call(null,filtered) - (1));
} else
{if((find >= cljs.core.count.call(null,filtered)))
{return (0);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return find;
} else
{return null;
}
}
}
})();var idx2 = (function (){var find = (app.model.indexOf.call(null,filtered,evtId,(0)) + (1));if((find < (0)))
{return (cljs.core.count.call(null,filtered) - (1));
} else
{if((find >= cljs.core.count.call(null,filtered)))
{return (0);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return find;
} else
{return null;
}
}
}
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__14424_14456,ret,map__14423,map__14423__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__14424_14456,ret,map__14423,map__14423__$1,args,id){
return (function (state_14446){var state_val_14447 = (state_14446[(1)]);if((state_val_14447 === (2)))
{var inst_14443 = (state_14446[(2)]);var inst_14444 = cljs.core.async.close_BANG_.call(null,ret);var state_14446__$1 = (function (){var statearr_14448 = state_14446;(statearr_14448[(7)] = inst_14443);
return statearr_14448;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14446__$1,inst_14444);
} else
{if((state_val_14447 === (1)))
{var inst_14429 = cljs.core.nth.call(null,filtered,idx);var inst_14430 = cljs.core.first.call(null,inst_14429);var inst_14431 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14430));var inst_14432 = cljs.core.nth.call(null,filtered,idx2);var inst_14433 = cljs.core.first.call(null,inst_14432);var inst_14434 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14433));var inst_14435 = (evt["Title"]);var inst_14436 = (evt["Date"]);var inst_14437 = (evt["Content"]);var inst_14438 = (evt["Form"]);var inst_14439 = {"prev_href":inst_14431,"next_href":inst_14434,"title":inst_14435,"date":inst_14436,"sideList":photos,"content":inst_14437,"form":inst_14438};var inst_14440 = [null,inst_14439];var inst_14441 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14440,null));var state_14446__$1 = state_14446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14446__$1,(2),ret,inst_14441);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__14424_14456,ret,map__14423,map__14423__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__14424_14456,ret,map__14423,map__14423__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14452 = [null,null,null,null,null,null,null,null];(statearr_14452[(0)] = state_machine__6178__auto__);
(statearr_14452[(1)] = (1));
return statearr_14452;
});
var state_machine__6178__auto____1 = (function (state_14446){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14446);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14453){if((e14453 instanceof Object))
{var ex__6181__auto__ = e14453;var statearr_14454_14457 = state_14446;(statearr_14454_14457[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14458 = state_14446;
state_14446 = G__14458;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14446){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__14424_14456,ret,map__14423,map__14423__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_14455 = f__6193__auto__.call(null);(statearr_14455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__14424_14456,ret,map__14423,map__14423__$1,args,id))
);
return c__6192__auto__;
});})(G__14424_14456,ret,map__14423,map__14423__$1,args,id))
);
G__14424_14456.fail(((function (G__14424_14456,ret,map__14423,map__14423__$1,args,id){
return (function (err){return console.log(err);
});})(G__14424_14456,ret,map__14423,map__14423__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
