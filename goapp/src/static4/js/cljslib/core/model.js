// Compiled by ClojureScript 0.0-2268
goog.provide('core.model');
goog.require('cljs.core');
goog.require('core.fn');
goog.require('core.fn');
core.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5668_SHARP_){return cljs.core._EQ_.call(null,view,p1__5668_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5669_SHARP_){return cljs.core._EQ_.call(null,view,p1__5669_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5670_SHARP_){return cljs.core._EQ_.call(null,view,p1__5670_SHARP_);
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
core.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5671_SHARP_){return cljs.core._EQ_.call(null,view,p1__5671_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5672_SHARP_){return cljs.core._EQ_.call(null,view,p1__5672_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5673_SHARP_){return cljs.core._EQ_.call(null,view,p1__5673_SHARP_);
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
core.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5674_SHARP_){return cljs.core._EQ_.call(null,view,p1__5674_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5675_SHARP_){return cljs.core._EQ_.call(null,view,p1__5675_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5676_SHARP_){return cljs.core._EQ_.call(null,view,p1__5676_SHARP_);
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
core.model.CreateHomeModel = (function CreateHomeModel(a_ctx,prev,view,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve((function (){var obj5680 = {"modelKey":(0)};return obj5680;
})());
});})(promise))
,(0));
return promise;
});
core.model.CreateStreetSnapListModel = (function CreateStreetSnapListModel(a_ctx,prev,view,args){var configType = core.model.configType.call(null,view);var p = (new $.Deferred());var G__5688_5695 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__5688_5695.done(((function (G__5688_5695,p,configType){
return (function() { 
var G__5696__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var ConvertDTO = ((function (config,details,G__5688_5695,p,configType){
return (function (p__5689){var vec__5690 = p__5689;var model = cljs.core.nth.call(null,vec__5690,(0),null);var detail = cljs.core.nth.call(null,vec__5690,(1),null);var obj5692 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj5692;
});})(config,details,G__5688_5695,p,configType))
;var dto = (function (){var obj5694 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj5694;
})();return p.resolve(dto);
};
var G__5696 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5696__delegate.call(this,args__$1);};
G__5696.cljs$lang$maxFixedArity = 0;
G__5696.cljs$lang$applyTo = (function (arglist__5697){
var args__$1 = cljs.core.seq(arglist__5697);
return G__5696__delegate(args__$1);
});
G__5696.cljs$core$IFn$_invoke$arity$variadic = G__5696__delegate;
return G__5696;
})()
;})(G__5688_5695,p,configType))
);
G__5688_5695.fail(((function (G__5688_5695,p,configType){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__5688_5695,p,configType))
);
return p;
});
core.model.CreateStreetSnapModel = (function CreateStreetSnapModel(a_ctx,prev,view,p__5698){var map__5723 = p__5698;var map__5723__$1 = ((cljs.core.seq_QMARK_.call(null,map__5723))?cljs.core.apply.call(null,cljs.core.hash_map,map__5723):map__5723);var args = map__5723__$1;var id = cljs.core.get.call(null,map__5723__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var configType = core.model.configType.call(null,view);var p = (new $.Deferred());var G__5724_5747 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__5724_5747.done(((function (G__5724_5747,p,configType,map__5723,map__5723__$1,args,id){
return (function() { 
var G__5748__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var ConvertHeadDTO = ((function (config,dir,details,detail,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id){
return (function (p__5725){var vec__5726 = p__5725;var key = cljs.core.nth.call(null,vec__5726,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__5726,(1),null);var obj5728 = {"id":key,"url":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/image_1.jpg"))};return obj5728;
});})(config,dir,details,detail,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,ConvertHeadDTO,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,ConvertHeadDTO,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id){
return (function iter__5729(s__5730){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,ConvertHeadDTO,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id){
return (function (){var s__5730__$1 = s__5730;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5730__$1);if(temp__4126__auto__)
{var s__5730__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5730__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5730__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5732 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5731 = (0);while(true){
if((i__5731 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__5731);cljs.core.chunk_append.call(null,b__5732,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__5749 = (i__5731 + (1));
i__5731 = G__5749;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5732),iter__5729.call(null,cljs.core.chunk_rest.call(null,s__5730__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5732),null);
}
} else
{var idx = cljs.core.first.call(null,s__5730__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__5729.call(null,cljs.core.rest.call(null,s__5730__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,ConvertHeadDTO,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id))
,null,null));
});})(config,dir,details,detail,ConvertHeadDTO,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,ConvertHeadDTO,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id){
return (function iter__5733(s__5734){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,ConvertHeadDTO,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id){
return (function (){var s__5734__$1 = s__5734;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5734__$1);if(temp__4126__auto__)
{var s__5734__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5734__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5734__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5736 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5735 = (0);while(true){
if((i__5735 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__5735);cljs.core.chunk_append.call(null,b__5736,(function (){var obj5742 = {"id":url,"url":ServeFn.call(null,url)};return obj5742;
})());
{
var G__5750 = (i__5735 + (1));
i__5735 = G__5750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5736),iter__5733.call(null,cljs.core.chunk_rest.call(null,s__5734__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5736),null);
}
} else
{var url = cljs.core.first.call(null,s__5734__$2);return cljs.core.cons.call(null,(function (){var obj5744 = {"id":url,"url":ServeFn.call(null,url)};return obj5744;
})(),iter__5733.call(null,cljs.core.rest.call(null,s__5734__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,ConvertHeadDTO,G__5724_5747,p,configType,map__5723,map__5723__$1,args,id))
;var dto = (function (){var obj5746 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":core.model.bottomTab1.call(null,view),"key":id,"bottomList":CreateImageDTO.call(null,core.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":core.model.bottomTab2.call(null,view),"styleUrl":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,core.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,details)),"date":detail.Date,"protalk":detail.Comment};return obj5746;
})();return p.resolve(dto);
};
var G__5748 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5748__delegate.call(this,args__$1);};
G__5748.cljs$lang$maxFixedArity = 0;
G__5748.cljs$lang$applyTo = (function (arglist__5751){
var args__$1 = cljs.core.seq(arglist__5751);
return G__5748__delegate(args__$1);
});
G__5748.cljs$core$IFn$_invoke$arity$variadic = G__5748__delegate;
return G__5748;
})()
;})(G__5724_5747,p,configType,map__5723,map__5723__$1,args,id))
);
G__5724_5747.fail(((function (G__5724_5747,p,configType,map__5723,map__5723__$1,args,id){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__5724_5747,p,configType,map__5723,map__5723__$1,args,id))
);
return p;
});
