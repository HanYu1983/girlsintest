// Compiled by ClojureScript 0.0-2268
goog.provide('core.fn');
goog.require('cljs.core');
core.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
core.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height"+(100));
});
core.fn.FetchFile = (function FetchFile(path){return $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
core.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__5008_5013 = core.fn.FetchFile.call(null,path);G__5008_5013.done(((function (G__5008_5013,p){
return (function (data){var keylist = (function (){var iter__4300__auto__ = ((function (G__5008_5013,p){
return (function iter__5009(s__5010){return (new cljs.core.LazySeq(null,((function (G__5008_5013,p){
return (function (){var s__5010__$1 = s__5010;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5010__$1);if(temp__4126__auto__)
{var s__5010__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5010__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__5010__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__5012 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__5011 = (0);while(true){
if((i__5011 < size__4299__auto__))
{var modelKey = cljs.core._nth.call(null,c__4298__auto__,i__5011);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__5012,modelKey);
{
var G__5014 = (i__5011 + (1));
i__5011 = G__5014;
continue;
}
} else
{{
var G__5015 = (i__5011 + (1));
i__5011 = G__5015;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5012),iter__5009.call(null,cljs.core.chunk_rest.call(null,s__5010__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5012),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__5010__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__5009.call(null,cljs.core.rest.call(null,s__5010__$2)));
} else
{{
var G__5016 = cljs.core.rest.call(null,s__5010__$2);
s__5010__$1 = G__5016;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__5008_5013,p))
,null,null));
});})(G__5008_5013,p))
;return iter__4300__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__5008_5013,p))
);
G__5008_5013.fail(((function (G__5008_5013,p){
return (function (p1__3381__3382__auto__){return p.reject(p1__3381__3382__auto__);
});})(G__5008_5013,p))
);
return p;
});
core.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__5022_5027 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4300__auto__ = ((function (promise){
return (function iter__5023(s__5024){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__5024__$1 = s__5024;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5024__$1);if(temp__4126__auto__)
{var s__5024__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5024__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__5024__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__5026 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__5025 = (0);while(true){
if((i__5025 < size__4299__auto__))
{var key = cljs.core._nth.call(null,c__4298__auto__,i__5025);cljs.core.chunk_append.call(null,b__5026,core.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__5028 = (i__5025 + (1));
i__5025 = G__5028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5026),iter__5023.call(null,cljs.core.chunk_rest.call(null,s__5024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5026),null);
}
} else
{var key = cljs.core.first.call(null,s__5024__$2);return cljs.core.cons.call(null,core.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__5023.call(null,cljs.core.rest.call(null,s__5024__$2)));
}
} else
{return null;
}
break;
}
});})(promise))
,null,null));
});})(promise))
;return iter__4300__auto__.call(null,keys);
})());return $.when.apply($,fetchFilePromise);
})();G__5022_5027.done(((function (G__5022_5027,promise){
return (function() { 
var G__5029__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(cljs.core.seq.call(null,new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false)));
} else
{var details = cljs.core.map.call(null,((function (G__5022_5027,promise){
return (function (data){return (data[(0)]);
});})(G__5022_5027,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__5029 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5029__delegate.call(this,args);};
G__5029.cljs$lang$maxFixedArity = 0;
G__5029.cljs$lang$applyTo = (function (arglist__5030){
var args = cljs.core.seq(arglist__5030);
return G__5029__delegate(args);
});
G__5029.cljs$core$IFn$_invoke$arity$variadic = G__5029__delegate;
return G__5029;
})()
;})(G__5022_5027,promise))
);
G__5022_5027.fail(((function (G__5022_5027,promise){
return (function (p1__3381__3382__auto__){return promise.reject(p1__3381__3382__auto__);
});})(G__5022_5027,promise))
);
return promise;
});
core.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__5033_5035 = core.fn.FetchFile.call(null,configPath);G__5033_5035.done(((function (G__5033_5035,promise){
return (function (config){var pkgPath = (config[type]);var G__5034 = core.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,core.fn.FetchAllModel,pkgPath));G__5034.done(((function (G__5034,pkgPath,G__5033_5035,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__5034,pkgPath,G__5033_5035,promise))
);
G__5034.fail(((function (G__5034,pkgPath,G__5033_5035,promise){
return (function (err){return promise.reject(err);
});})(G__5034,pkgPath,G__5033_5035,promise))
);
return G__5034;
});})(G__5033_5035,promise))
);
G__5033_5035.fail(((function (G__5033_5035,promise){
return (function (p1__3381__3382__auto__){return promise.reject(p1__3381__3382__auto__);
});})(G__5033_5035,promise))
);
return promise;
});
