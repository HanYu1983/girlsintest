// Compiled by ClojureScript 0.0-2268
goog.provide('core.fn');
goog.require('cljs.core');
core.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
core.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
core.fn.FetchFile = (function FetchFile(path){return $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
core.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__8938_8943 = core.fn.FetchFile.call(null,path);G__8938_8943.done(((function (G__8938_8943,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__8938_8943,p){
return (function iter__8939(s__8940){return (new cljs.core.LazySeq(null,((function (G__8938_8943,p){
return (function (){var s__8940__$1 = s__8940;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8940__$1);if(temp__4126__auto__)
{var s__8940__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8940__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__8940__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__8942 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__8941 = (0);while(true){
if((i__8941 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__8941);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__8942,modelKey);
{
var G__8944 = (i__8941 + (1));
i__8941 = G__8944;
continue;
}
} else
{{
var G__8945 = (i__8941 + (1));
i__8941 = G__8945;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8942),iter__8939.call(null,cljs.core.chunk_rest.call(null,s__8940__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8942),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__8940__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__8939.call(null,cljs.core.rest.call(null,s__8940__$2)));
} else
{{
var G__8946 = cljs.core.rest.call(null,s__8940__$2);
s__8940__$1 = G__8946;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__8938_8943,p))
,null,null));
});})(G__8938_8943,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__8938_8943,p))
);
G__8938_8943.fail(((function (G__8938_8943,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__8938_8943,p))
);
return p;
});
core.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__8952_8957 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__8953(s__8954){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__8954__$1 = s__8954;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8954__$1);if(temp__4126__auto__)
{var s__8954__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8954__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__8954__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__8956 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__8955 = (0);while(true){
if((i__8955 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__8955);cljs.core.chunk_append.call(null,b__8956,core.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__8958 = (i__8955 + (1));
i__8955 = G__8958;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8956),iter__8953.call(null,cljs.core.chunk_rest.call(null,s__8954__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8956),null);
}
} else
{var key = cljs.core.first.call(null,s__8954__$2);return cljs.core.cons.call(null,core.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__8953.call(null,cljs.core.rest.call(null,s__8954__$2)));
}
} else
{return null;
}
break;
}
});})(promise))
,null,null));
});})(promise))
;return iter__4276__auto__.call(null,keys);
})());return $.when.apply($,fetchFilePromise);
})();G__8952_8957.done(((function (G__8952_8957,promise){
return (function() { 
var G__8959__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__8952_8957,promise){
return (function (data){return (data[(0)]);
});})(G__8952_8957,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__8959 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8959__delegate.call(this,args);};
G__8959.cljs$lang$maxFixedArity = 0;
G__8959.cljs$lang$applyTo = (function (arglist__8960){
var args = cljs.core.seq(arglist__8960);
return G__8959__delegate(args);
});
G__8959.cljs$core$IFn$_invoke$arity$variadic = G__8959__delegate;
return G__8959;
})()
;})(G__8952_8957,promise))
);
G__8952_8957.fail(((function (G__8952_8957,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__8952_8957,promise))
);
return promise;
});
core.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__8963_8965 = core.fn.FetchFile.call(null,configPath);G__8963_8965.done(((function (G__8963_8965,promise){
return (function (config){var pkgPath = (config[type]);var G__8964 = core.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,core.fn.FetchAllModel,pkgPath));G__8964.done(((function (G__8964,pkgPath,G__8963_8965,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__8964,pkgPath,G__8963_8965,promise))
);
G__8964.fail(((function (G__8964,pkgPath,G__8963_8965,promise){
return (function (err){return promise.reject(err);
});})(G__8964,pkgPath,G__8963_8965,promise))
);
return G__8964;
});})(G__8963_8965,promise))
);
G__8963_8965.fail(((function (G__8963_8965,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__8963_8965,promise))
);
return promise;
});
core.fn.GetAllModelBy = cljs.core.memoize.call(null,core.fn.GetAllModelBy);
