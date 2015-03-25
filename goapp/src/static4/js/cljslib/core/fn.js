// Compiled by ClojureScript 0.0-2268
goog.provide('core.fn');
goog.require('cljs.core');
core.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
core.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height"+(100));
});
core.fn.FetchFile = (function FetchFile(path){return $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
core.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__5001_5006 = core.fn.FetchFile.call(null,path);G__5001_5006.done(((function (G__5001_5006,p){
return (function (data){var keylist = (function (){var iter__4293__auto__ = ((function (G__5001_5006,p){
return (function iter__5002(s__5003){return (new cljs.core.LazySeq(null,((function (G__5001_5006,p){
return (function (){var s__5003__$1 = s__5003;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5003__$1);if(temp__4126__auto__)
{var s__5003__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5003__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__5003__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__5005 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__5004 = (0);while(true){
if((i__5004 < size__4292__auto__))
{var modelKey = cljs.core._nth.call(null,c__4291__auto__,i__5004);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__5005,modelKey);
{
var G__5007 = (i__5004 + (1));
i__5004 = G__5007;
continue;
}
} else
{{
var G__5008 = (i__5004 + (1));
i__5004 = G__5008;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5005),iter__5002.call(null,cljs.core.chunk_rest.call(null,s__5003__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5005),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__5003__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__5002.call(null,cljs.core.rest.call(null,s__5003__$2)));
} else
{{
var G__5009 = cljs.core.rest.call(null,s__5003__$2);
s__5003__$1 = G__5009;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__5001_5006,p))
,null,null));
});})(G__5001_5006,p))
;return iter__4293__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__5001_5006,p))
);
G__5001_5006.fail(((function (G__5001_5006,p){
return (function (p1__3381__3382__auto__){return p.reject(p1__3381__3382__auto__);
});})(G__5001_5006,p))
);
return p;
});
core.fn.FetchAllModel = (function FetchAllModel(path,keys){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4293__auto__ = (function iter__5015(s__5016){return (new cljs.core.LazySeq(null,(function (){var s__5016__$1 = s__5016;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5016__$1);if(temp__4126__auto__)
{var s__5016__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5016__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__5016__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__5018 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__5017 = (0);while(true){
if((i__5017 < size__4292__auto__))
{var key = cljs.core._nth.call(null,c__4291__auto__,i__5017);cljs.core.chunk_append.call(null,b__5018,core.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__5020 = (i__5017 + (1));
i__5017 = G__5020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5018),iter__5015.call(null,cljs.core.chunk_rest.call(null,s__5016__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5018),null);
}
} else
{var key = cljs.core.first.call(null,s__5016__$2);return cljs.core.cons.call(null,core.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__5015.call(null,cljs.core.rest.call(null,s__5016__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4293__auto__.call(null,keys);
})());var promise = (new $.Deferred());var G__5019_5021 = $.when.apply($,fetchFilePromise);G__5019_5021.done(((function (G__5019_5021,promise,fetchFilePromise){
return (function() { 
var G__5022__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(cljs.core.seq.call(null,new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false)));
} else
{var details = cljs.core.map.call(null,((function (G__5019_5021,promise,fetchFilePromise){
return (function (data){return (data[(0)]);
});})(G__5019_5021,promise,fetchFilePromise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__5022 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5022__delegate.call(this,args);};
G__5022.cljs$lang$maxFixedArity = 0;
G__5022.cljs$lang$applyTo = (function (arglist__5023){
var args = cljs.core.seq(arglist__5023);
return G__5022__delegate(args);
});
G__5022.cljs$core$IFn$_invoke$arity$variadic = G__5022__delegate;
return G__5022;
})()
;})(G__5019_5021,promise,fetchFilePromise))
);
G__5019_5021.fail(((function (G__5019_5021,promise,fetchFilePromise){
return (function (p1__3381__3382__auto__){return promise.reject(p1__3381__3382__auto__);
});})(G__5019_5021,promise,fetchFilePromise))
);
return promise;
});
core.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__5026_5028 = core.fn.FetchFile.call(null,configPath);G__5026_5028.done(((function (G__5026_5028,promise){
return (function (config){var pkgPath = (config[type]);var G__5027 = core.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,core.fn.FetchAllModel,pkgPath));G__5027.done(((function (G__5027,pkgPath,G__5026_5028,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__5027,pkgPath,G__5026_5028,promise))
);
G__5027.fail(((function (G__5027,pkgPath,G__5026_5028,promise){
return (function (err){return promise.reject(err);
});})(G__5027,pkgPath,G__5026_5028,promise))
);
return G__5027;
});})(G__5026_5028,promise))
);
G__5026_5028.fail(((function (G__5026_5028,promise){
return (function (p1__3381__3382__auto__){return promise.reject(p1__3381__3382__auto__);
});})(G__5026_5028,promise))
);
return promise;
});
