// Compiled by ClojureScript 0.0-2268
goog.provide('app.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('app.fn');
goog.require('app.fn');
goog.require('cljs.core.async');
app.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9642_SHARP_){return cljs.core._EQ_.call(null,view,p1__9642_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9643_SHARP_){return cljs.core._EQ_.call(null,view,p1__9643_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9644_SHARP_){return cljs.core._EQ_.call(null,view,p1__9644_SHARP_);
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
app.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9645_SHARP_){return cljs.core._EQ_.call(null,view,p1__9645_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9646_SHARP_){return cljs.core._EQ_.call(null,view,p1__9646_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9647_SHARP_){return cljs.core._EQ_.call(null,view,p1__9647_SHARP_);
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
app.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9648_SHARP_){return cljs.core._EQ_.call(null,view,p1__9648_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9649_SHARP_){return cljs.core._EQ_.call(null,view,p1__9649_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9650_SHARP_){return cljs.core._EQ_.call(null,view,p1__9650_SHARP_);
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
app.model.defcommonlistmodel = (function defcommonlistmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,args){var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__9690_9729 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__9690_9729.done(((function (G__9690_9729,ret,configType){
return (function() { 
var G__9730__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var ConvertDTO = ((function (config,details,G__9690_9729,ret,configType){
return (function (p__9691){var vec__9692 = p__9691;var model = cljs.core.nth.call(null,vec__9692,(0),null);var detail = cljs.core.nth.call(null,vec__9692,(1),null);var obj9694 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":app.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj9694;
});})(config,details,G__9690_9729,ret,configType))
;var dto = (function (){var obj9696 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj9696;
})();var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__,config,details,ConvertDTO,dto,G__9690_9729,ret,configType){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__,config,details,ConvertDTO,dto,G__9690_9729,ret,configType){
return (function (state_9703){var state_val_9704 = (state_9703[(1)]);if((state_val_9704 === (2)))
{var inst_9700 = (state_9703[(2)]);var inst_9701 = cljs.core.async.close_BANG_.call(null,ret);var state_9703__$1 = (function (){var statearr_9705 = state_9703;(statearr_9705[(7)] = inst_9700);
return statearr_9705;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9703__$1,inst_9701);
} else
{if((state_val_9704 === (1)))
{var inst_9697 = [null,dto];var inst_9698 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9697,null));var state_9703__$1 = state_9703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9703__$1,(2),ret,inst_9698);
} else
{return null;
}
}
});})(c__6225__auto__,config,details,ConvertDTO,dto,G__9690_9729,ret,configType))
;return ((function (switch__6210__auto__,c__6225__auto__,config,details,ConvertDTO,dto,G__9690_9729,ret,configType){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_9709 = [null,null,null,null,null,null,null,null];(statearr_9709[(0)] = state_machine__6211__auto__);
(statearr_9709[(1)] = (1));
return statearr_9709;
});
var state_machine__6211__auto____1 = (function (state_9703){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_9703);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e9710){if((e9710 instanceof Object))
{var ex__6214__auto__ = e9710;var statearr_9711_9731 = state_9703;(statearr_9711_9731[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9732 = state_9703;
state_9703 = G__9732;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_9703){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_9703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__,config,details,ConvertDTO,dto,G__9690_9729,ret,configType))
})();var state__6227__auto__ = (function (){var statearr_9712 = f__6226__auto__.call(null);(statearr_9712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_9712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__,config,details,ConvertDTO,dto,G__9690_9729,ret,configType))
);
return c__6225__auto__;
};
var G__9730 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9730__delegate.call(this,args__$1);};
G__9730.cljs$lang$maxFixedArity = 0;
G__9730.cljs$lang$applyTo = (function (arglist__9733){
var args__$1 = cljs.core.seq(arglist__9733);
return G__9730__delegate(args__$1);
});
G__9730.cljs$core$IFn$_invoke$arity$variadic = G__9730__delegate;
return G__9730;
})()
;})(G__9690_9729,ret,configType))
);
G__9690_9729.fail(((function (G__9690_9729,ret,configType){
return (function (err){var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__,G__9690_9729,ret,configType){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__,G__9690_9729,ret,configType){
return (function (state_9719){var state_val_9720 = (state_9719[(1)]);if((state_val_9720 === (2)))
{var inst_9716 = (state_9719[(2)]);var inst_9717 = cljs.core.async.close_BANG_.call(null,ret);var state_9719__$1 = (function (){var statearr_9721 = state_9719;(statearr_9721[(7)] = inst_9716);
return statearr_9721;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9719__$1,inst_9717);
} else
{if((state_val_9720 === (1)))
{var inst_9713 = [err,null];var inst_9714 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9713,null));var state_9719__$1 = state_9719;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9719__$1,(2),ret,inst_9714);
} else
{return null;
}
}
});})(c__6225__auto__,G__9690_9729,ret,configType))
;return ((function (switch__6210__auto__,c__6225__auto__,G__9690_9729,ret,configType){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_9725 = [null,null,null,null,null,null,null,null];(statearr_9725[(0)] = state_machine__6211__auto__);
(statearr_9725[(1)] = (1));
return statearr_9725;
});
var state_machine__6211__auto____1 = (function (state_9719){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_9719);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e9726){if((e9726 instanceof Object))
{var ex__6214__auto__ = e9726;var statearr_9727_9734 = state_9719;(statearr_9727_9734[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9719);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9726;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9735 = state_9719;
state_9719 = G__9735;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_9719){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_9719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__,G__9690_9729,ret,configType))
})();var state__6227__auto__ = (function (){var statearr_9728 = f__6226__auto__.call(null);(statearr_9728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_9728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__,G__9690_9729,ret,configType))
);
return c__6225__auto__;
});})(G__9690_9729,ret,configType))
);
return ret;
}));
});
app.model.defcommonmodel = (function defcommonmodel(name){return cljs.core._add_method.call(null,tool.react.model_ch,name,(function (ctx,key,p__9793){var map__9794 = p__9793;var map__9794__$1 = ((cljs.core.seq_QMARK_.call(null,map__9794))?cljs.core.apply.call(null,cljs.core.hash_map,map__9794):map__9794);var args = map__9794__$1;var id = cljs.core.get.call(null,map__9794__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var ret = cljs.core.async.chan.call(null);var configType = app.model.configType.call(null,name);var G__9795_9850 = app.fn.GetAllModelBy.call(null,"config.json",configType);G__9795_9850.done(((function (G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function() { 
var G__9851__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var ConvertHeadDTO = ((function (config,dir,details,detail,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function (p__9796){var vec__9797 = p__9796;var key__$1 = cljs.core.nth.call(null,vec__9797,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__9797,(1),null);var obj9799 = {"id":key__$1,"url":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+"/image_1.jpg"))};return obj9799;
});})(config,dir,details,detail,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,ConvertHeadDTO,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4293__auto__ = ((function (config,dir,details,detail,ConvertHeadDTO,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function iter__9800(s__9801){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,ConvertHeadDTO,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function (){var s__9801__$1 = s__9801;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9801__$1);if(temp__4126__auto__)
{var s__9801__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9801__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__9801__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__9803 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__9802 = (0);while(true){
if((i__9802 < size__4292__auto__))
{var idx = cljs.core._nth.call(null,c__4291__auto__,i__9802);cljs.core.chunk_append.call(null,b__9803,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__9852 = (i__9802 + (1));
i__9802 = G__9852;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9803),iter__9800.call(null,cljs.core.chunk_rest.call(null,s__9801__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9803),null);
}
} else
{var idx = cljs.core.first.call(null,s__9801__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__9800.call(null,cljs.core.rest.call(null,s__9801__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,ConvertHeadDTO,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
,null,null));
});})(config,dir,details,detail,ConvertHeadDTO,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
;return iter__4293__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4293__auto__ = ((function (urls,config,dir,details,detail,ConvertHeadDTO,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function iter__9804(s__9805){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,ConvertHeadDTO,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function (){var s__9805__$1 = s__9805;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9805__$1);if(temp__4126__auto__)
{var s__9805__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9805__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__9805__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__9807 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__9806 = (0);while(true){
if((i__9806 < size__4292__auto__))
{var url = cljs.core._nth.call(null,c__4291__auto__,i__9806);cljs.core.chunk_append.call(null,b__9807,(function (){var obj9813 = {"id":url,"url":ServeFn.call(null,url)};return obj9813;
})());
{
var G__9853 = (i__9806 + (1));
i__9806 = G__9853;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9807),iter__9804.call(null,cljs.core.chunk_rest.call(null,s__9805__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9807),null);
}
} else
{var url = cljs.core.first.call(null,s__9805__$2);return cljs.core.cons.call(null,(function (){var obj9815 = {"id":url,"url":ServeFn.call(null,url)};return obj9815;
})(),iter__9804.call(null,cljs.core.rest.call(null,s__9805__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
;return iter__4293__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,ConvertHeadDTO,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
;var dto = (function (){var obj9817 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":app.model.bottomTab1.call(null,name),"key":id,"bottomList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":app.model.bottomTab2.call(null,name),"styleUrl":app.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,app.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,details)),"date":detail.Date,"protalk":detail.Comment};return obj9817;
})();var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function (state_9824){var state_val_9825 = (state_9824[(1)]);if((state_val_9825 === (2)))
{var inst_9821 = (state_9824[(2)]);var inst_9822 = cljs.core.async.close_BANG_.call(null,ret);var state_9824__$1 = (function (){var statearr_9826 = state_9824;(statearr_9826[(7)] = inst_9821);
return statearr_9826;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9824__$1,inst_9822);
} else
{if((state_val_9825 === (1)))
{var inst_9818 = [null,dto];var inst_9819 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9818,null));var state_9824__$1 = state_9824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9824__$1,(2),ret,inst_9819);
} else
{return null;
}
}
});})(c__6225__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
;return ((function (switch__6210__auto__,c__6225__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_9830 = [null,null,null,null,null,null,null,null];(statearr_9830[(0)] = state_machine__6211__auto__);
(statearr_9830[(1)] = (1));
return statearr_9830;
});
var state_machine__6211__auto____1 = (function (state_9824){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_9824);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e9831){if((e9831 instanceof Object))
{var ex__6214__auto__ = e9831;var statearr_9832_9854 = state_9824;(statearr_9832_9854[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9824);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9855 = state_9824;
state_9824 = G__9855;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_9824){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_9824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
})();var state__6227__auto__ = (function (){var statearr_9833 = f__6226__auto__.call(null);(statearr_9833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_9833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__,config,dir,details,detail,ConvertHeadDTO,CreateImageDTO,dto,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
);
return c__6225__auto__;
};
var G__9851 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9851__delegate.call(this,args__$1);};
G__9851.cljs$lang$maxFixedArity = 0;
G__9851.cljs$lang$applyTo = (function (arglist__9856){
var args__$1 = cljs.core.seq(arglist__9856);
return G__9851__delegate(args__$1);
});
G__9851.cljs$core$IFn$_invoke$arity$variadic = G__9851__delegate;
return G__9851;
})()
;})(G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
);
G__9795_9850.fail(((function (G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function (err){var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function (state_9840){var state_val_9841 = (state_9840[(1)]);if((state_val_9841 === (2)))
{var inst_9837 = (state_9840[(2)]);var inst_9838 = cljs.core.async.close_BANG_.call(null,ret);var state_9840__$1 = (function (){var statearr_9842 = state_9840;(statearr_9842[(7)] = inst_9837);
return statearr_9842;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9840__$1,inst_9838);
} else
{if((state_val_9841 === (1)))
{var inst_9834 = [err,null];var inst_9835 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9834,null));var state_9840__$1 = state_9840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9840__$1,(2),ret,inst_9835);
} else
{return null;
}
}
});})(c__6225__auto__,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
;return ((function (switch__6210__auto__,c__6225__auto__,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_9846 = [null,null,null,null,null,null,null,null];(statearr_9846[(0)] = state_machine__6211__auto__);
(statearr_9846[(1)] = (1));
return statearr_9846;
});
var state_machine__6211__auto____1 = (function (state_9840){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_9840);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e9847){if((e9847 instanceof Object))
{var ex__6214__auto__ = e9847;var statearr_9848_9857 = state_9840;(statearr_9848_9857[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9840);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9858 = state_9840;
state_9840 = G__9858;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_9840){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_9840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
})();var state__6227__auto__ = (function (){var statearr_9849 = f__6226__auto__.call(null);(statearr_9849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_9849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__,G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
);
return c__6225__auto__;
});})(G__9795_9850,ret,configType,map__9794,map__9794__$1,args,id))
);
return ret;
}));
});
cljs.core._add_method.call(null,tool.react.model_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,args){var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__){
return (function (state_9863){var state_val_9864 = (state_9863[(1)]);if((state_val_9864 === (1)))
{var inst_9861 = {"modelKey":""};var state_9863__$1 = state_9863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9863__$1,inst_9861);
} else
{return null;
}
});})(c__6225__auto__))
;return ((function (switch__6210__auto__,c__6225__auto__){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_9868 = [null,null,null,null,null,null,null];(statearr_9868[(0)] = state_machine__6211__auto__);
(statearr_9868[(1)] = (1));
return statearr_9868;
});
var state_machine__6211__auto____1 = (function (state_9863){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_9863);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e9869){if((e9869 instanceof Object))
{var ex__6214__auto__ = e9869;var statearr_9870_9872 = state_9863;(statearr_9870_9872[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9863);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9873 = state_9863;
state_9863 = G__9873;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_9863){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_9863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__))
})();var state__6227__auto__ = (function (){var statearr_9871 = f__6226__auto__.call(null);(statearr_9871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_9871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__))
);
return c__6225__auto__;
}));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.model.defcommonlistmodel.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.model.defcommonmodel.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
