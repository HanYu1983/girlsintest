// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__24717_SHARP_){return cljs.core._EQ_.call(null,view,p1__24717_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__24718_SHARP_){return cljs.core._EQ_.call(null,view,p1__24718_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__24719_SHARP_){return cljs.core._EQ_.call(null,view,p1__24719_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__24720_SHARP_){return cljs.core._EQ_.call(null,view,p1__24720_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__24721_SHARP_){return cljs.core._EQ_.call(null,view,p1__24721_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__24722_SHARP_){return cljs.core._EQ_.call(null,view,p1__24722_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__24723_SHARP_){return cljs.core._EQ_.call(null,view,p1__24723_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__24724_SHARP_){return cljs.core._EQ_.call(null,view,p1__24724_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__24725_SHARP_){return cljs.core._EQ_.call(null,view,p1__24725_SHARP_);
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
app.model.SortByDate = (function SortByDate(details){return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p__24729){var vec__24730 = p__24729;var model = cljs.core.nth.call(null,vec__24730,(0),null);var detail = cljs.core.nth.call(null,vec__24730,(1),null);var G__24731 = (new Date(detail.Date));G__24731.getTime();
return G__24731;
}),details));
});
app.model.AvaliableIs = (function AvaliableIs(v,details){return cljs.core.filter.call(null,(function (p__24734){var vec__24735 = p__24734;var model = cljs.core.nth.call(null,vec__24735,(0),null);var detail = cljs.core.nth.call(null,vec__24735,(1),null);return cljs.core._EQ_.call(null,v,detail.Available);
}),details);
});
app.model.FilterBySearch = (function FilterBySearch(searchKey,details){if(cljs.core.some_QMARK_.call(null,searchKey))
{return cljs.core.filter.call(null,(function (p__24738){var vec__24739 = p__24738;var model = cljs.core.nth.call(null,vec__24739,(0),null);var detail = cljs.core.nth.call(null,vec__24739,(1),null);return cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,(".?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+".?")),detail.Tag));
}),details);
} else
{return details;
}
});
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__24781){var map__24782 = p__24781;var map__24782__$1 = ((cljs.core.seq_QMARK_.call(null,map__24782))?cljs.core.apply.call(null,cljs.core.hash_map,map__24782):map__24782);var args = map__24782__$1;var page = cljs.core.get.call(null,map__24782__$1,new cljs.core.Keyword(null,"page","page",849072397));var searchKey = cljs.core.get.call(null,map__24782__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var configType = app.model.configType.call(null,name);var ret = cljs.core.async.chan.call(null);var G__24783_24822 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__24783_24822.done(((function (G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey){
return (function (config,details){var modelCountPerPage = ((($(window).height() > (768)))?(9):(6));var filtered = cljs.core.take.call(null,modelCountPerPage,cljs.core.drop.call(null,(page * modelCountPerPage),app.model.FilterBySearch.call(null,searchKey,app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)))));var totalPage = ((cljs.core.count.call(null,filtered) / modelCountPerPage) | (0));var ConvertDTO = ((function (modelCountPerPage,filtered,totalPage,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey){
return (function (p__24784){var vec__24785 = p__24784;var model = cljs.core.nth.call(null,vec__24785,(0),null);var detail = cljs.core.nth.call(null,vec__24785,(1),null);var obj24787 = {"visibleDate":!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917))),"brand":detail.Brand,"id":model,"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"name":detail.Caption,"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg")),"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"date":detail.Date};return obj24787;
});})(modelCountPerPage,filtered,totalPage,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey))
;var dto = (function (){var obj24789 = {"prev_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page > (0)))?(page - (1)):page))),"next_href":("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((page < totalPage))?(page + (1)):page))),"searchWord":((cljs.core.some_QMARK_.call(null,searchKey))?searchKey:""),"streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,filtered))};return obj24789;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey){
return (function (state_24796){var state_val_24797 = (state_24796[(1)]);if((state_val_24797 === (2)))
{var inst_24793 = (state_24796[(2)]);var inst_24794 = cljs.core.async.close_BANG_.call(null,ret);var state_24796__$1 = (function (){var statearr_24798 = state_24796;(statearr_24798[(7)] = inst_24793);
return statearr_24798;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24796__$1,inst_24794);
} else
{if((state_val_24797 === (1)))
{var inst_24790 = [null,dto];var inst_24791 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24790,null));var state_24796__$1 = state_24796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24796__$1,(2),ret,inst_24791);
} else
{return null;
}
}
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24802 = [null,null,null,null,null,null,null,null];(statearr_24802[(0)] = state_machine__6178__auto__);
(statearr_24802[(1)] = (1));
return statearr_24802;
});
var state_machine__6178__auto____1 = (function (state_24796){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24796);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24803){if((e24803 instanceof Object))
{var ex__6181__auto__ = e24803;var statearr_24804_24823 = state_24796;(statearr_24804_24823[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24796);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24803;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24824 = state_24796;
state_24796 = G__24824;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24796){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_24805 = f__6193__auto__.call(null);(statearr_24805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_24805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,modelCountPerPage,filtered,totalPage,ConvertDTO,dto,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey))
);
G__24783_24822.fail(((function (G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey){
return (function (state_24812){var state_val_24813 = (state_24812[(1)]);if((state_val_24813 === (2)))
{var inst_24809 = (state_24812[(2)]);var inst_24810 = cljs.core.async.close_BANG_.call(null,ret);var state_24812__$1 = (function (){var statearr_24814 = state_24812;(statearr_24814[(7)] = inst_24809);
return statearr_24814;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24812__$1,inst_24810);
} else
{if((state_val_24813 === (1)))
{var inst_24806 = [err,null];var inst_24807 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24806,null));var state_24812__$1 = state_24812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24812__$1,(2),ret,inst_24807);
} else
{return null;
}
}
});})(c__6192__auto__,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey))
;return ((function (switch__6177__auto__,c__6192__auto__,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24818 = [null,null,null,null,null,null,null,null];(statearr_24818[(0)] = state_machine__6178__auto__);
(statearr_24818[(1)] = (1));
return statearr_24818;
});
var state_machine__6178__auto____1 = (function (state_24812){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24812);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24819){if((e24819 instanceof Object))
{var ex__6181__auto__ = e24819;var statearr_24820_24825 = state_24812;(statearr_24820_24825[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24812);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24826 = state_24812;
state_24812 = G__24826;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24812){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey))
})();var state__6194__auto__ = (function (){var statearr_24821 = f__6193__auto__.call(null);(statearr_24821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_24821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey))
);
return c__6192__auto__;
});})(G__24783_24822,configType,ret,map__24782,map__24782__$1,args,page,searchKey))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__24884){var map__24885 = p__24884;var map__24885__$1 = ((cljs.core.seq_QMARK_.call(null,map__24885))?cljs.core.apply.call(null,cljs.core.hash_map,map__24885):map__24885);var args = map__24885__$1;var id = cljs.core.get.call(null,map__24885__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__24886_24941 = app.fn.GetAllModelOnce.call(null,"config.json",configType);G__24886_24941.done(((function (G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function (config,details){var dir = (config[configType]);var detail = cljs.core.get.call(null,details,id);var filtered = cljs.core.take.call(null,(6),app.model.SortByDate.call(null,app.model.AvaliableIs.call(null,true,details)));var ConvertHeadDTO = ((function (dir,detail,filtered,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function (p__24887){var vec__24888 = p__24887;var key__$1 = cljs.core.nth.call(null,vec__24888,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__24888,(1),null);var obj24890 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj24890;
});})(dir,detail,filtered,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
;var CreateImageDTO = ((function (dir,detail,filtered,ConvertHeadDTO,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (dir,detail,filtered,ConvertHeadDTO,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function iter__24891(s__24892){return (new cljs.core.LazySeq(null,((function (dir,detail,filtered,ConvertHeadDTO,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function (){var s__24892__$1 = s__24892;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24892__$1);if(temp__4126__auto__)
{var s__24892__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24892__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__24892__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__24894 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__24893 = (0);while(true){
if((i__24893 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__24893);cljs.core.chunk_append.call(null,b__24894,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__24942 = (i__24893 + (1));
i__24893 = G__24942;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24894),iter__24891.call(null,cljs.core.chunk_rest.call(null,s__24892__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24894),null);
}
} else
{var idx = cljs.core.first.call(null,s__24892__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__24891.call(null,cljs.core.rest.call(null,s__24892__$2)));
}
} else
{return null;
}
break;
}
});})(dir,detail,filtered,ConvertHeadDTO,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
,null,null));
});})(dir,detail,filtered,ConvertHeadDTO,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,dir,detail,filtered,ConvertHeadDTO,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function iter__24895(s__24896){return (new cljs.core.LazySeq(null,((function (urls,dir,detail,filtered,ConvertHeadDTO,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function (){var s__24896__$1 = s__24896;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24896__$1);if(temp__4126__auto__)
{var s__24896__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24896__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__24896__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__24898 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__24897 = (0);while(true){
if((i__24897 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__24897);cljs.core.chunk_append.call(null,b__24898,(function (){var obj24904 = {"id":url,"url":ServeFn.call(null,url)};return obj24904;
})());
{
var G__24943 = (i__24897 + (1));
i__24897 = G__24943;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24898),iter__24895.call(null,cljs.core.chunk_rest.call(null,s__24896__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24898),null);
}
} else
{var url = cljs.core.first.call(null,s__24896__$2);return cljs.core.cons.call(null,(function (){var obj24906 = {"id":url,"url":ServeFn.call(null,url)};return obj24906;
})(),iter__24895.call(null,cljs.core.rest.call(null,s__24896__$2)));
}
} else
{return null;
}
break;
}
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
,null,null));
});})(urls,dir,detail,filtered,ConvertHeadDTO,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(dir,detail,filtered,ConvertHeadDTO,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
;var dto = (function (){var obj24908 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"visibleFullscreen":(detail.Fullscreen === true) || (false),"visibleFBComment":(detail.FBComment === true) || (false),"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,filtered)),"date":detail.Date,"protalk":detail.Comment};return obj24908;
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function (state_24915){var state_val_24916 = (state_24915[(1)]);if((state_val_24916 === (2)))
{var inst_24912 = (state_24915[(2)]);var inst_24913 = cljs.core.async.close_BANG_.call(null,ret);var state_24915__$1 = (function (){var statearr_24917 = state_24915;(statearr_24917[(7)] = inst_24912);
return statearr_24917;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24915__$1,inst_24913);
} else
{if((state_val_24916 === (1)))
{var inst_24909 = [null,dto];var inst_24910 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24909,null));var state_24915__$1 = state_24915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24915__$1,(2),ret,inst_24910);
} else
{return null;
}
}
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24921 = [null,null,null,null,null,null,null,null];(statearr_24921[(0)] = state_machine__6178__auto__);
(statearr_24921[(1)] = (1));
return statearr_24921;
});
var state_machine__6178__auto____1 = (function (state_24915){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24915);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24922){if((e24922 instanceof Object))
{var ex__6181__auto__ = e24922;var statearr_24923_24944 = state_24915;(statearr_24923_24944[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24945 = state_24915;
state_24915 = G__24945;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24915){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_24924 = f__6193__auto__.call(null);(statearr_24924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_24924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,dir,detail,filtered,ConvertHeadDTO,CreateImageDTO,dto,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
);
return c__6192__auto__;
});})(G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
);
G__24886_24941.fail(((function (G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function (err){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function (state_24931){var state_val_24932 = (state_24931[(1)]);if((state_val_24932 === (2)))
{var inst_24928 = (state_24931[(2)]);var inst_24929 = cljs.core.async.close_BANG_.call(null,ret);var state_24931__$1 = (function (){var statearr_24933 = state_24931;(statearr_24933[(7)] = inst_24928);
return statearr_24933;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24931__$1,inst_24929);
} else
{if((state_val_24932 === (1)))
{var inst_24925 = [err,null];var inst_24926 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24925,null));var state_24931__$1 = state_24931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24931__$1,(2),ret,inst_24926);
} else
{return null;
}
}
});})(c__6192__auto__,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24937 = [null,null,null,null,null,null,null,null];(statearr_24937[(0)] = state_machine__6178__auto__);
(statearr_24937[(1)] = (1));
return statearr_24937;
});
var state_machine__6178__auto____1 = (function (state_24931){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24931);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24938){if((e24938 instanceof Object))
{var ex__6181__auto__ = e24938;var statearr_24939_24946 = state_24931;(statearr_24939_24946[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24931);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24947 = state_24931;
state_24931 = G__24947;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24931){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_24940 = f__6193__auto__.call(null);(statearr_24940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_24940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
);
return c__6192__auto__;
});})(G__24886_24941,ret,configType,map__24885,map__24885__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var G__24949_24986 = app.fn.GetHomeModelMaybeKey.call(null,"config.json");G__24949_24986.done(((function (G__24949_24986,ret){
return (function (detail){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__24949_24986,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__24949_24986,ret){
return (function (state_24960){var state_val_24961 = (state_24960[(1)]);if((state_val_24961 === (2)))
{var inst_24957 = (state_24960[(2)]);var inst_24958 = cljs.core.async.close_BANG_.call(null,ret);var state_24960__$1 = (function (){var statearr_24962 = state_24960;(statearr_24962[(7)] = inst_24957);
return statearr_24962;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24960__$1,inst_24958);
} else
{if((state_val_24961 === (1)))
{var inst_24952 = detail.ModelKey;var inst_24953 = {"modelKey":inst_24952};var inst_24954 = [null,inst_24953];var inst_24955 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24954,null));var state_24960__$1 = state_24960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24960__$1,(2),ret,inst_24955);
} else
{return null;
}
}
});})(c__6192__auto__,G__24949_24986,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__24949_24986,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24966 = [null,null,null,null,null,null,null,null];(statearr_24966[(0)] = state_machine__6178__auto__);
(statearr_24966[(1)] = (1));
return statearr_24966;
});
var state_machine__6178__auto____1 = (function (state_24960){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24960);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24967){if((e24967 instanceof Object))
{var ex__6181__auto__ = e24967;var statearr_24968_24987 = state_24960;(statearr_24968_24987[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24960);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24988 = state_24960;
state_24960 = G__24988;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24960){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__24949_24986,ret))
})();var state__6194__auto__ = (function (){var statearr_24969 = f__6193__auto__.call(null);(statearr_24969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_24969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__24949_24986,ret))
);
return c__6192__auto__;
});})(G__24949_24986,ret))
);
G__24949_24986.fail(((function (G__24949_24986,ret){
return (function (p1__24948_SHARP_){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,G__24949_24986,ret){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,G__24949_24986,ret){
return (function (state_24976){var state_val_24977 = (state_24976[(1)]);if((state_val_24977 === (2)))
{var inst_24973 = (state_24976[(2)]);var inst_24974 = cljs.core.async.close_BANG_.call(null,ret);var state_24976__$1 = (function (){var statearr_24978 = state_24976;(statearr_24978[(7)] = inst_24973);
return statearr_24978;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24976__$1,inst_24974);
} else
{if((state_val_24977 === (1)))
{var inst_24970 = [p1__24948_SHARP_,null];var inst_24971 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24970,null));var state_24976__$1 = state_24976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24976__$1,(2),ret,inst_24971);
} else
{return null;
}
}
});})(c__6192__auto__,G__24949_24986,ret))
;return ((function (switch__6177__auto__,c__6192__auto__,G__24949_24986,ret){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_24982 = [null,null,null,null,null,null,null,null];(statearr_24982[(0)] = state_machine__6178__auto__);
(statearr_24982[(1)] = (1));
return statearr_24982;
});
var state_machine__6178__auto____1 = (function (state_24976){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_24976);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e24983){if((e24983 instanceof Object))
{var ex__6181__auto__ = e24983;var statearr_24984_24989 = state_24976;(statearr_24984_24989[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24976);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24990 = state_24976;
state_24976 = G__24990;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_24976){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_24976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,G__24949_24986,ret))
})();var state__6194__auto__ = (function (){var statearr_24985 = f__6193__auto__.call(null);(statearr_24985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_24985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,G__24949_24986,ret))
);
return c__6192__auto__;
});})(G__24949_24986,ret))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (ctx,key,p__24991){var map__24992 = p__24991;var map__24992__$1 = ((cljs.core.seq_QMARK_.call(null,map__24992))?cljs.core.apply.call(null,cljs.core.hash_map,map__24992):map__24992);var args = map__24992__$1;var url = cljs.core.get.call(null,map__24992__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));var ret = cljs.core.async.chan.call(null);var c__6192__auto___25013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___25013,ret,map__24992,map__24992__$1,args,url){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___25013,ret,map__24992,map__24992__$1,args,url){
return (function (state_25003){var state_val_25004 = (state_25003[(1)]);if((state_val_25004 === (2)))
{var inst_25000 = (state_25003[(2)]);var inst_25001 = cljs.core.async.close_BANG_.call(null,ret);var state_25003__$1 = (function (){var statearr_25005 = state_25003;(statearr_25005[(7)] = inst_25000);
return statearr_25005;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25003__$1,inst_25001);
} else
{if((state_val_25004 === (1)))
{var inst_24995 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?Width=600&Height=480");var inst_24996 = {"url":inst_24995};var inst_24997 = [null,inst_24996];var inst_24998 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24997,null));var state_25003__$1 = state_25003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25003__$1,(2),ret,inst_24998);
} else
{return null;
}
}
});})(c__6192__auto___25013,ret,map__24992,map__24992__$1,args,url))
;return ((function (switch__6177__auto__,c__6192__auto___25013,ret,map__24992,map__24992__$1,args,url){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_25009 = [null,null,null,null,null,null,null,null];(statearr_25009[(0)] = state_machine__6178__auto__);
(statearr_25009[(1)] = (1));
return statearr_25009;
});
var state_machine__6178__auto____1 = (function (state_25003){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_25003);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e25010){if((e25010 instanceof Object))
{var ex__6181__auto__ = e25010;var statearr_25011_25014 = state_25003;(statearr_25011_25014[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25015 = state_25003;
state_25003 = G__25015;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_25003){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_25003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___25013,ret,map__24992,map__24992__$1,args,url))
})();var state__6194__auto__ = (function (){var statearr_25012 = f__6193__auto__.call(null);(statearr_25012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___25013);
return statearr_25012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___25013,ret,map__24992,map__24992__$1,args,url))
);
return ret;
}));
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Event","Event",-475754196),(function (ctx,key,p__25016){var map__25017 = p__25016;var map__25017__$1 = ((cljs.core.seq_QMARK_.call(null,map__25017))?cljs.core.apply.call(null,cljs.core.hash_map,map__25017):map__25017);var args = map__25017__$1;var id = cljs.core.get.call(null,map__25017__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var c__6192__auto___25034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___25034,ret,map__25017,map__25017__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___25034,ret,map__25017,map__25017__$1,args,id){
return (function (state_25024){var state_val_25025 = (state_25024[(1)]);if((state_val_25025 === (2)))
{var inst_25021 = (state_25024[(2)]);var inst_25022 = cljs.core.async.close_BANG_.call(null,ret);var state_25024__$1 = (function (){var statearr_25026 = state_25024;(statearr_25026[(7)] = inst_25021);
return statearr_25026;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25024__$1,inst_25022);
} else
{if((state_val_25025 === (1)))
{var inst_25018 = [null,null];var inst_25019 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25018,null));var state_25024__$1 = state_25024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25024__$1,(2),ret,inst_25019);
} else
{return null;
}
}
});})(c__6192__auto___25034,ret,map__25017,map__25017__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto___25034,ret,map__25017,map__25017__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_25030 = [null,null,null,null,null,null,null,null];(statearr_25030[(0)] = state_machine__6178__auto__);
(statearr_25030[(1)] = (1));
return statearr_25030;
});
var state_machine__6178__auto____1 = (function (state_25024){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_25024);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e25031){if((e25031 instanceof Object))
{var ex__6181__auto__ = e25031;var statearr_25032_25035 = state_25024;(statearr_25032_25035[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25024);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25036 = state_25024;
state_25024 = G__25036;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_25024){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_25024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___25034,ret,map__25017,map__25017__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_25033 = f__6193__auto__.call(null);(statearr_25033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___25034);
return statearr_25033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___25034,ret,map__25017,map__25017__$1,args,id))
);
return ret;
}));
app.model.indexOf = (function indexOf(list,id,start){while(true){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,list)))
{return start;
} else
{{
var G__25037 = cljs.core.rest.call(null,list);
var G__25038 = id;
var G__25039 = (start + (1));
list = G__25037;
id = G__25038;
start = G__25039;
continue;
}
}
break;
}
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (ctx,key,p__25041){var map__25042 = p__25041;var map__25042__$1 = ((cljs.core.seq_QMARK_.call(null,map__25042))?cljs.core.apply.call(null,cljs.core.hash_map,map__25042):map__25042);var args = map__25042__$1;var id = cljs.core.get.call(null,map__25042__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var G__25043_25075 = app.fn.GetAllModelOnce.call(null,"config.json","event");G__25043_25075.done(((function (G__25043_25075,ret,map__25042,map__25042__$1,args,id){
return (function (config,data){var filtered = app.model.SortByDate.call(null,data);var evtId = ((cljs.core._EQ_.call(null,"null",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))))?cljs.core.ffirst.call(null,filtered):id);var evt = cljs.core.get.call(null,data,evtId);var photos = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,((function (filtered,evtId,evt,G__25043_25075,ret,map__25042,map__25042__$1,args,id){
return (function (p1__25040_SHARP_){var obj25045 = {"path":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["event"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(evtId)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__25040_SHARP_ + (1)))+".jpg"))};return obj25045;
});})(filtered,evtId,evt,G__25043_25075,ret,map__25042,map__25042__$1,args,id))
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
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__25043_25075,ret,map__25042,map__25042__$1,args,id){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__25043_25075,ret,map__25042,map__25042__$1,args,id){
return (function (state_25065){var state_val_25066 = (state_25065[(1)]);if((state_val_25066 === (2)))
{var inst_25062 = (state_25065[(2)]);var inst_25063 = cljs.core.async.close_BANG_.call(null,ret);var state_25065__$1 = (function (){var statearr_25067 = state_25065;(statearr_25067[(7)] = inst_25062);
return statearr_25067;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25065__$1,inst_25063);
} else
{if((state_val_25066 === (1)))
{var inst_25048 = cljs.core.nth.call(null,filtered,idx);var inst_25049 = cljs.core.first.call(null,inst_25048);var inst_25050 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25049));var inst_25051 = cljs.core.nth.call(null,filtered,idx2);var inst_25052 = cljs.core.first.call(null,inst_25051);var inst_25053 = ("#News/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25052));var inst_25054 = (evt["Title"]);var inst_25055 = (evt["Date"]);var inst_25056 = (evt["Content"]);var inst_25057 = (evt["Form"]);var inst_25058 = {"prev_href":inst_25050,"next_href":inst_25053,"title":inst_25054,"date":inst_25055,"sideList":photos,"content":inst_25056,"form":inst_25057};var inst_25059 = [null,inst_25058];var inst_25060 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25059,null));var state_25065__$1 = state_25065;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25065__$1,(2),ret,inst_25060);
} else
{return null;
}
}
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__25043_25075,ret,map__25042,map__25042__$1,args,id))
;return ((function (switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__25043_25075,ret,map__25042,map__25042__$1,args,id){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_25071 = [null,null,null,null,null,null,null,null];(statearr_25071[(0)] = state_machine__6178__auto__);
(statearr_25071[(1)] = (1));
return statearr_25071;
});
var state_machine__6178__auto____1 = (function (state_25065){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_25065);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e25072){if((e25072 instanceof Object))
{var ex__6181__auto__ = e25072;var statearr_25073_25076 = state_25065;(statearr_25073_25076[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25065);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25077 = state_25065;
state_25065 = G__25077;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_25065){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_25065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__25043_25075,ret,map__25042,map__25042__$1,args,id))
})();var state__6194__auto__ = (function (){var statearr_25074 = f__6193__auto__.call(null);(statearr_25074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_25074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,filtered,evtId,evt,photos,idx,idx2,G__25043_25075,ret,map__25042,map__25042__$1,args,id))
);
return c__6192__auto__;
});})(G__25043_25075,ret,map__25042,map__25042__$1,args,id))
);
G__25043_25075.fail(((function (G__25043_25075,ret,map__25042,map__25042__$1,args,id){
return (function (err){return console.log(err);
});})(G__25043_25075,ret,map__25042,map__25042__$1,args,id))
);
return ret;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
