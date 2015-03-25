// Compiled by ClojureScript 0.0-2268
goog.provide('core.fn');
goog.require('cljs.core');
core.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
core.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height"+(100));
});
core.fn.FetchFile = (function FetchFile(path){return $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
core.fn.FetchModelKeyList = (function FetchModelKeyList(path){var promise = (new $.Deferred());var G__4982_4987 = core.fn.FetchFile.call(null,path);G__4982_4987.done(((function (G__4982_4987,promise){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__4982_4987,promise){
return (function iter__4983(s__4984){return (new cljs.core.LazySeq(null,((function (G__4982_4987,promise){
return (function (){var s__4984__$1 = s__4984;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__4984__$1);if(temp__4126__auto__)
{var s__4984__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4984__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__4984__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__4986 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__4985 = (0);while(true){
if((i__4985 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__4985);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__4986,modelKey);
{
var G__4988 = (i__4985 + (1));
i__4985 = G__4988;
continue;
}
} else
{{
var G__4989 = (i__4985 + (1));
i__4985 = G__4989;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4986),iter__4983.call(null,cljs.core.chunk_rest.call(null,s__4984__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4986),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__4984__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__4983.call(null,cljs.core.rest.call(null,s__4984__$2)));
} else
{{
var G__4990 = cljs.core.rest.call(null,s__4984__$2);
s__4984__$1 = G__4990;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__4982_4987,promise))
,null,null));
});})(G__4982_4987,promise))
;return iter__4276__auto__.call(null,data);
})();return promise.resolve(keylist);
});})(G__4982_4987,promise))
);
G__4982_4987.fail(((function (G__4982_4987,promise){
return (function (err){return promise.reject(err);
});})(G__4982_4987,promise))
);
return promise;
});
core.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__4997(s__4998){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__4998__$1 = s__4998;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__4998__$1);if(temp__4126__auto__)
{var s__4998__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4998__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__4998__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5000 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__4999 = (0);while(true){
if((i__4999 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__4999);cljs.core.chunk_append.call(null,b__5000,core.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__5002 = (i__4999 + (1));
i__4999 = G__5002;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5000),iter__4997.call(null,cljs.core.chunk_rest.call(null,s__4998__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5000),null);
}
} else
{var key = cljs.core.first.call(null,s__4998__$2);return cljs.core.cons.call(null,core.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__4997.call(null,cljs.core.rest.call(null,s__4998__$2)));
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
})());var G__5001_5003 = $.when.apply($,fetchFilePromise);G__5001_5003.done(((function (G__5001_5003,promise,fetchFilePromise){
return (function() { 
var G__5004__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(cljs.core.seq.call(null,new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false)));
} else
{var details = cljs.core.map.call(null,((function (G__5001_5003,promise,fetchFilePromise){
return (function (data){return (data[(0)]);
});})(G__5001_5003,promise,fetchFilePromise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__5004 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5004__delegate.call(this,args);};
G__5004.cljs$lang$maxFixedArity = 0;
G__5004.cljs$lang$applyTo = (function (arglist__5005){
var args = cljs.core.seq(arglist__5005);
return G__5004__delegate(args);
});
G__5004.cljs$core$IFn$_invoke$arity$variadic = G__5004__delegate;
return G__5004;
})()
;})(G__5001_5003,promise,fetchFilePromise))
);
G__5001_5003.fail(((function (G__5001_5003,promise,fetchFilePromise){
return (function (p1__4991_SHARP_){return promise.reject(p1__4991_SHARP_);
});})(G__5001_5003,promise,fetchFilePromise))
);
return promise;
});
core.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__5008_5010 = core.fn.FetchFile.call(null,configPath);G__5008_5010.done(((function (G__5008_5010,promise){
return (function (config){var pkgPath = (config[type]);var G__5009 = core.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,core.fn.FetchAllModel,pkgPath));G__5009.done(((function (G__5009,pkgPath,G__5008_5010,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__5009,pkgPath,G__5008_5010,promise))
);
G__5009.fail(((function (G__5009,pkgPath,G__5008_5010,promise){
return (function (err){return promise.reject(err);
});})(G__5009,pkgPath,G__5008_5010,promise))
);
return G__5009;
});})(G__5008_5010,promise))
);
G__5008_5010.fail(((function (G__5008_5010,promise){
return (function (err){return promise.reject(err);
});})(G__5008_5010,promise))
);
return promise;
});
