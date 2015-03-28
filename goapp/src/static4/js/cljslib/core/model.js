// Compiled by ClojureScript 0.0-2268
goog.provide('core.model');
goog.require('cljs.core');
goog.require('core.fn');
goog.require('core.fn');
core.model.configType = (function configType(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13085_SHARP_){return cljs.core._EQ_.call(null,view,p1__13085_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "street";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13086_SHARP_){return cljs.core._EQ_.call(null,view,p1__13086_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "model";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13087_SHARP_){return cljs.core._EQ_.call(null,view,p1__13087_SHARP_);
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
core.model.bottomTab1 = (function bottomTab1(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13088_SHARP_){return cljs.core._EQ_.call(null,view,p1__13088_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13089_SHARP_){return cljs.core._EQ_.call(null,view,p1__13089_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13090_SHARP_){return cljs.core._EQ_.call(null,view,p1__13090_SHARP_);
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
core.model.bottomTab2 = (function bottomTab2(view){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13091_SHARP_){return cljs.core._EQ_.call(null,view,p1__13091_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13092_SHARP_){return cljs.core._EQ_.call(null,view,p1__13092_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null))))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13093_SHARP_){return cljs.core._EQ_.call(null,view,p1__13093_SHARP_);
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
core.model.CreateHomeModel = (function CreateHomeModel(ctx,prev,view,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve((function (){var obj13097 = {"modelKey":(0)};return obj13097;
})());
});})(promise))
,(0));
return promise;
});
core.model.CreateStreetSnapListModel = (function CreateStreetSnapListModel(ctx,prev,view,args){var configType = core.model.configType.call(null,view);var p = (new $.Deferred());var G__13105_13112 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__13105_13112.done(((function (G__13105_13112,p,configType){
return (function() { 
var G__13113__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var ConvertDTO = ((function (config,details,G__13105_13112,p,configType){
return (function (p__13106){var vec__13107 = p__13106;var model = cljs.core.nth.call(null,vec__13107,(0),null);var detail = cljs.core.nth.call(null,vec__13107,(1),null);var obj13109 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj13109;
});})(config,details,G__13105_13112,p,configType))
;var dto = (function (){var obj13111 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj13111;
})();return p.resolve(dto);
};
var G__13113 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13113__delegate.call(this,args__$1);};
G__13113.cljs$lang$maxFixedArity = 0;
G__13113.cljs$lang$applyTo = (function (arglist__13114){
var args__$1 = cljs.core.seq(arglist__13114);
return G__13113__delegate(args__$1);
});
G__13113.cljs$core$IFn$_invoke$arity$variadic = G__13113__delegate;
return G__13113;
})()
;})(G__13105_13112,p,configType))
);
G__13105_13112.fail(((function (G__13105_13112,p,configType){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__13105_13112,p,configType))
);
return p;
});
core.model.CreateStreetSnapModel = (function CreateStreetSnapModel(ctx,prev,view,p__13115){var map__13140 = p__13115;var map__13140__$1 = ((cljs.core.seq_QMARK_.call(null,map__13140))?cljs.core.apply.call(null,cljs.core.hash_map,map__13140):map__13140);var args = map__13140__$1;var id = cljs.core.get.call(null,map__13140__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var configType = core.model.configType.call(null,view);var p = (new $.Deferred());var G__13141_13164 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__13141_13164.done(((function (G__13141_13164,p,configType,map__13140,map__13140__$1,args,id){
return (function() { 
var G__13165__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var ConvertHeadDTO = ((function (config,dir,details,detail,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id){
return (function (p__13142){var vec__13143 = p__13142;var key = cljs.core.nth.call(null,vec__13143,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__13143,(1),null);var obj13145 = {"id":key,"url":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/image_1.jpg"))};return obj13145;
});})(config,dir,details,detail,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,ConvertHeadDTO,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,ConvertHeadDTO,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id){
return (function iter__13146(s__13147){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,ConvertHeadDTO,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id){
return (function (){var s__13147__$1 = s__13147;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13147__$1);if(temp__4126__auto__)
{var s__13147__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13147__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13147__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13149 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13148 = (0);while(true){
if((i__13148 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__13148);cljs.core.chunk_append.call(null,b__13149,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__13166 = (i__13148 + (1));
i__13148 = G__13166;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13149),iter__13146.call(null,cljs.core.chunk_rest.call(null,s__13147__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13149),null);
}
} else
{var idx = cljs.core.first.call(null,s__13147__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__13146.call(null,cljs.core.rest.call(null,s__13147__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,ConvertHeadDTO,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id))
,null,null));
});})(config,dir,details,detail,ConvertHeadDTO,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,ConvertHeadDTO,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id){
return (function iter__13150(s__13151){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,ConvertHeadDTO,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id){
return (function (){var s__13151__$1 = s__13151;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13151__$1);if(temp__4126__auto__)
{var s__13151__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13151__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13151__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13153 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13152 = (0);while(true){
if((i__13152 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__13152);cljs.core.chunk_append.call(null,b__13153,(function (){var obj13159 = {"id":url,"url":ServeFn.call(null,url)};return obj13159;
})());
{
var G__13167 = (i__13152 + (1));
i__13152 = G__13167;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13153),iter__13150.call(null,cljs.core.chunk_rest.call(null,s__13151__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13153),null);
}
} else
{var url = cljs.core.first.call(null,s__13151__$2);return cljs.core.cons.call(null,(function (){var obj13161 = {"id":url,"url":ServeFn.call(null,url)};return obj13161;
})(),iter__13150.call(null,cljs.core.rest.call(null,s__13151__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,ConvertHeadDTO,G__13141_13164,p,configType,map__13140,map__13140__$1,args,id))
;var dto = (function (){var obj13163 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":core.model.bottomTab1.call(null,view),"key":id,"bottomList":CreateImageDTO.call(null,core.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":core.model.bottomTab2.call(null,view),"styleUrl":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,core.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,details)),"date":detail.Date,"protalk":detail.Comment};return obj13163;
})();return p.resolve(dto);
};
var G__13165 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13165__delegate.call(this,args__$1);};
G__13165.cljs$lang$maxFixedArity = 0;
G__13165.cljs$lang$applyTo = (function (arglist__13168){
var args__$1 = cljs.core.seq(arglist__13168);
return G__13165__delegate(args__$1);
});
G__13165.cljs$core$IFn$_invoke$arity$variadic = G__13165__delegate;
return G__13165;
})()
;})(G__13141_13164,p,configType,map__13140,map__13140__$1,args,id))
);
G__13141_13164.fail(((function (G__13141_13164,p,configType,map__13140,map__13140__$1,args,id){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__13141_13164,p,configType,map__13140,map__13140__$1,args,id))
);
return p;
});
