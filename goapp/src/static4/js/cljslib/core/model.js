// Compiled by ClojureScript 0.0-2268
goog.provide('core.model');
goog.require('cljs.core');
goog.require('core.fn');
goog.require('core.fn');
core.model.configType = (function configType(view){if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)))
{return "street";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)))
{return "model";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)))
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
core.model.bottomTab1 = (function bottomTab1(view){if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)))
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
core.model.bottomTab2 = (function bottomTab2(view){if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)))
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
core.model.CreateHomeModel = (function CreateHomeModel(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve((function (){var obj8726 = {"modelKey":(0)};return obj8726;
})());
});})(promise))
,(0));
return promise;
});
core.model.CreateStreetSnapListModel = (function CreateStreetSnapListModel(a_ctx,p__8727){var vec__8736 = p__8727;var type = cljs.core.nth.call(null,vec__8736,(0),null);var configType = cljs.core.name.call(null,type);var p = (new $.Deferred());var G__8737_8744 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__8737_8744.done(((function (G__8737_8744,p,configType,vec__8736,type){
return (function() { 
var G__8745__delegate = function (args){var config = cljs.core.first.call(null,args);var details = cljs.core.second.call(null,args);var ConvertDTO = ((function (config,details,G__8737_8744,p,configType,vec__8736,type){
return (function (p__8738){var vec__8739 = p__8738;var model = cljs.core.nth.call(null,vec__8739,(0),null);var detail = cljs.core.nth.call(null,vec__8739,(1),null);var obj8741 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj8741;
});})(config,details,G__8737_8744,p,configType,vec__8736,type))
;var dto = (function (){var obj8743 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj8743;
})();return p.resolve(dto);
};
var G__8745 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8745__delegate.call(this,args);};
G__8745.cljs$lang$maxFixedArity = 0;
G__8745.cljs$lang$applyTo = (function (arglist__8746){
var args = cljs.core.seq(arglist__8746);
return G__8745__delegate(args);
});
G__8745.cljs$core$IFn$_invoke$arity$variadic = G__8745__delegate;
return G__8745;
})()
;})(G__8737_8744,p,configType,vec__8736,type))
);
G__8737_8744.fail(((function (G__8737_8744,p,configType,vec__8736,type){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__8737_8744,p,configType,vec__8736,type))
);
return p;
});
core.model.CreateStreetSnapModel = (function CreateStreetSnapModel(a_ctx,p__8747){var map__8772 = p__8747;var map__8772__$1 = ((cljs.core.seq_QMARK_.call(null,map__8772))?cljs.core.apply.call(null,cljs.core.hash_map,map__8772):map__8772);var args = map__8772__$1;var id = cljs.core.get.call(null,map__8772__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var view = cljs.core.get.call(null,map__8772__$1,new cljs.core.Keyword(null,"view","view",1247994814));var configType = core.model.configType.call(null,view);var p = (new $.Deferred());var G__8773_8796 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__8773_8796.done(((function (G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view){
return (function() { 
var G__8797__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var ConvertHeadDTO = ((function (config,dir,details,detail,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view){
return (function (p__8774){var vec__8775 = p__8774;var key = cljs.core.nth.call(null,vec__8775,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__8775,(1),null);var obj8777 = {"id":key,"url":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/image_1.jpg"))};return obj8777;
});})(config,dir,details,detail,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view))
;var CreateImageDTO = ((function (config,dir,details,detail,ConvertHeadDTO,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,ConvertHeadDTO,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view){
return (function iter__8778(s__8779){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,ConvertHeadDTO,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view){
return (function (){var s__8779__$1 = s__8779;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8779__$1);if(temp__4126__auto__)
{var s__8779__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8779__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__8779__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__8781 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__8780 = (0);while(true){
if((i__8780 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__8780);cljs.core.chunk_append.call(null,b__8781,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__8798 = (i__8780 + (1));
i__8780 = G__8798;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8781),iter__8778.call(null,cljs.core.chunk_rest.call(null,s__8779__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8781),null);
}
} else
{var idx = cljs.core.first.call(null,s__8779__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__8778.call(null,cljs.core.rest.call(null,s__8779__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,ConvertHeadDTO,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view))
,null,null));
});})(config,dir,details,detail,ConvertHeadDTO,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,ConvertHeadDTO,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view){
return (function iter__8782(s__8783){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,ConvertHeadDTO,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view){
return (function (){var s__8783__$1 = s__8783;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8783__$1);if(temp__4126__auto__)
{var s__8783__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8783__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__8783__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__8785 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__8784 = (0);while(true){
if((i__8784 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__8784);cljs.core.chunk_append.call(null,b__8785,(function (){var obj8791 = {"id":url,"url":ServeFn.call(null,url)};return obj8791;
})());
{
var G__8799 = (i__8784 + (1));
i__8784 = G__8799;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8785),iter__8782.call(null,cljs.core.chunk_rest.call(null,s__8783__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8785),null);
}
} else
{var url = cljs.core.first.call(null,s__8783__$2);return cljs.core.cons.call(null,(function (){var obj8793 = {"id":url,"url":ServeFn.call(null,url)};return obj8793;
})(),iter__8782.call(null,cljs.core.rest.call(null,s__8783__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view))
,null,null));
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,ConvertHeadDTO,G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view))
;var dto = (function (){var obj8795 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":core.model.bottomTab1.call(null,view),"key":id,"bottomList":CreateImageDTO.call(null,core.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":core.model.bottomTab2.call(null,view),"styleUrl":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,core.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,details)),"date":detail.Date,"protalk":detail.Comment};return obj8795;
})();return p.resolve(dto);
};
var G__8797 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8797__delegate.call(this,args__$1);};
G__8797.cljs$lang$maxFixedArity = 0;
G__8797.cljs$lang$applyTo = (function (arglist__8800){
var args__$1 = cljs.core.seq(arglist__8800);
return G__8797__delegate(args__$1);
});
G__8797.cljs$core$IFn$_invoke$arity$variadic = G__8797__delegate;
return G__8797;
})()
;})(G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view))
);
G__8773_8796.fail(((function (G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__8773_8796,p,configType,map__8772,map__8772__$1,args,id,view))
);
return p;
});
