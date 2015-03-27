// Compiled by ClojureScript 0.0-2268
goog.provide('core.model');
goog.require('cljs.core');
goog.require('core.fn');
goog.require('core.fn');
core.model.configType = (function configType(view){if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)))
{return "street";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"Model","Model",-1633340081)))
{return "model";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"Product","Product",1806927075)))
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
core.model.bottomTab1 = (function bottomTab1(view){if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"Model","Model",-1633340081)))
{return "MODEL\u8CC7\u6599";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"Product","Product",1806927075)))
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
core.model.bottomTab2 = (function bottomTab2(view){if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"Model","Model",-1633340081)))
{return "MODEL\u8A2A\u8AC7";
} else
{if(cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"Product","Product",1806927075)))
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
return (function (){return promise.resolve((function (){var obj5874 = {"modelKey":(0)};return obj5874;
})());
});})(promise))
,(0));
return promise;
});
core.model.CreateStreetSnapListModel = (function CreateStreetSnapListModel(a_ctx,prev,view,p__5875){var vec__5884 = p__5875;var type = cljs.core.nth.call(null,vec__5884,(0),null);var configType = cljs.core.name.call(null,type);var p = (new $.Deferred());var G__5885_5892 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__5885_5892.done(((function (G__5885_5892,p,configType,vec__5884,type){
return (function() { 
var G__5893__delegate = function (args){var config = cljs.core.first.call(null,args);var details = cljs.core.second.call(null,args);var ConvertDTO = ((function (config,details,G__5885_5892,p,configType,vec__5884,type){
return (function (p__5886){var vec__5887 = p__5886;var model = cljs.core.nth.call(null,vec__5887,(0),null);var detail = cljs.core.nth.call(null,vec__5887,(1),null);var obj5889 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj5889;
});})(config,details,G__5885_5892,p,configType,vec__5884,type))
;var dto = (function (){var obj5891 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj5891;
})();return p.resolve(dto);
};
var G__5893 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5893__delegate.call(this,args);};
G__5893.cljs$lang$maxFixedArity = 0;
G__5893.cljs$lang$applyTo = (function (arglist__5894){
var args = cljs.core.seq(arglist__5894);
return G__5893__delegate(args);
});
G__5893.cljs$core$IFn$_invoke$arity$variadic = G__5893__delegate;
return G__5893;
})()
;})(G__5885_5892,p,configType,vec__5884,type))
);
G__5885_5892.fail(((function (G__5885_5892,p,configType,vec__5884,type){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__5885_5892,p,configType,vec__5884,type))
);
return p;
});
core.model.CreateStreetSnapModel = (function CreateStreetSnapModel(a_ctx,prev,view,p__5895){var map__5920 = p__5895;var map__5920__$1 = ((cljs.core.seq_QMARK_.call(null,map__5920))?cljs.core.apply.call(null,cljs.core.hash_map,map__5920):map__5920);var args = map__5920__$1;var id = cljs.core.get.call(null,map__5920__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var configType = core.model.configType.call(null,view);var p = (new $.Deferred());var G__5921_5944 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__5921_5944.done(((function (G__5921_5944,p,configType,map__5920,map__5920__$1,args,id){
return (function() { 
var G__5945__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var dir = (config[configType]);var details = cljs.core.second.call(null,args__$1);var detail = cljs.core.get.call(null,details,id);var ConvertHeadDTO = ((function (config,dir,details,detail,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id){
return (function (p__5922){var vec__5923 = p__5922;var key = cljs.core.nth.call(null,vec__5923,(0),null);var detail__$1 = cljs.core.nth.call(null,vec__5923,(1),null);var obj5925 = {"id":key,"url":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/image_1.jpg"))};return obj5925;
});})(config,dir,details,detail,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id))
;var CreateImageDTO = ((function (config,dir,details,detail,ConvertHeadDTO,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id){
return (function (ServeFn,idxs){var urls = (function (){var iter__4276__auto__ = ((function (config,dir,details,detail,ConvertHeadDTO,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id){
return (function iter__5926(s__5927){return (new cljs.core.LazySeq(null,((function (config,dir,details,detail,ConvertHeadDTO,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id){
return (function (){var s__5927__$1 = s__5927;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5927__$1);if(temp__4126__auto__)
{var s__5927__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5927__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5927__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5929 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5928 = (0);while(true){
if((i__5928 < size__4275__auto__))
{var idx = cljs.core._nth.call(null,c__4274__auto__,i__5928);cljs.core.chunk_append.call(null,b__5929,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"));
{
var G__5946 = (i__5928 + (1));
i__5928 = G__5946;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5929),iter__5926.call(null,cljs.core.chunk_rest.call(null,s__5927__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5929),null);
}
} else
{var idx = cljs.core.first.call(null,s__5927__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+".jpg"),iter__5926.call(null,cljs.core.rest.call(null,s__5927__$2)));
}
} else
{return null;
}
break;
}
});})(config,dir,details,detail,ConvertHeadDTO,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id))
,null,null));
});})(config,dir,details,detail,ConvertHeadDTO,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id))
;return iter__4276__auto__.call(null,idxs);
})();var dtos = (function (){var iter__4276__auto__ = ((function (urls,config,dir,details,detail,ConvertHeadDTO,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id){
return (function iter__5930(s__5931){return (new cljs.core.LazySeq(null,((function (urls,config,dir,details,detail,ConvertHeadDTO,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id){
return (function (){var s__5931__$1 = s__5931;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5931__$1);if(temp__4126__auto__)
{var s__5931__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5931__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5931__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5933 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5932 = (0);while(true){
if((i__5932 < size__4275__auto__))
{var url = cljs.core._nth.call(null,c__4274__auto__,i__5932);cljs.core.chunk_append.call(null,b__5933,(function (){var obj5939 = {"id":url,"url":ServeFn.call(null,url)};return obj5939;
})());
{
var G__5947 = (i__5932 + (1));
i__5932 = G__5947;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5933),iter__5930.call(null,cljs.core.chunk_rest.call(null,s__5931__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5933),null);
}
} else
{var url = cljs.core.first.call(null,s__5931__$2);return cljs.core.cons.call(null,(function (){var obj5941 = {"id":url,"url":ServeFn.call(null,url)};return obj5941;
})(),iter__5930.call(null,cljs.core.rest.call(null,s__5931__$2)));
}
} else
{return null;
}
break;
}
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id))
,null,null));
});})(urls,config,dir,details,detail,ConvertHeadDTO,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id))
;return iter__4276__auto__.call(null,urls);
})();return cljs.core.apply.call(null,cljs.core.array,dtos);
});})(config,dir,details,detail,ConvertHeadDTO,G__5921_5944,p,configType,map__5920,map__5920__$1,args,id))
;var dto = (function (){var obj5943 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":core.model.bottomTab1.call(null,view),"key":id,"bottomList":CreateImageDTO.call(null,core.fn.ServeImagePath100,cljs.core.range.call(null,(6),(detail.ImageCount + (1)))),"bottomTab2":core.model.bottomTab2.call(null,view),"styleUrl":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/image_2.jpg")),"name":detail.Caption,"modelDetail":detail.Description,"sideList":CreateImageDTO.call(null,core.fn.ServeImagePath100,cljs.core.range.call(null,(3),(6))),"historyList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertHeadDTO,details)),"date":detail.Date,"protalk":detail.Comment};return obj5943;
})();return p.resolve(dto);
};
var G__5945 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5945__delegate.call(this,args__$1);};
G__5945.cljs$lang$maxFixedArity = 0;
G__5945.cljs$lang$applyTo = (function (arglist__5948){
var args__$1 = cljs.core.seq(arglist__5948);
return G__5945__delegate(args__$1);
});
G__5945.cljs$core$IFn$_invoke$arity$variadic = G__5945__delegate;
return G__5945;
})()
;})(G__5921_5944,p,configType,map__5920,map__5920__$1,args,id))
);
G__5921_5944.fail(((function (G__5921_5944,p,configType,map__5920,map__5920__$1,args,id){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__5921_5944,p,configType,map__5920,map__5920__$1,args,id))
);
return p;
});
