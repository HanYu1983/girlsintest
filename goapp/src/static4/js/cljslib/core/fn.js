// Compiled by ClojureScript 0.0-2268
goog.provide('core.fn');
goog.require('cljs.core');
core.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
core.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height"+(100));
});
core.fn.FetchFile = (function FetchFile(path){return $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
core.fn.FetchModelKeyList = (function FetchModelKeyList(path){var promise = (new $.Deferred());var G__4999_5004 = core.fn.FetchFile.call(null,path);G__4999_5004.done(((function (G__4999_5004,promise){
return (function (data){var keylist = (function (){var iter__4291__auto__ = ((function (G__4999_5004,promise){
return (function iter__5000(s__5001){return (new cljs.core.LazySeq(null,((function (G__4999_5004,promise){
return (function (){var s__5001__$1 = s__5001;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5001__$1);if(temp__4126__auto__)
{var s__5001__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5001__$2))
{var c__4289__auto__ = cljs.core.chunk_first.call(null,s__5001__$2);var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);var b__5003 = cljs.core.chunk_buffer.call(null,size__4290__auto__);if((function (){var i__5002 = (0);while(true){
if((i__5002 < size__4290__auto__))
{var modelKey = cljs.core._nth.call(null,c__4289__auto__,i__5002);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__5003,modelKey);
{
var G__5005 = (i__5002 + (1));
i__5002 = G__5005;
continue;
}
} else
{{
var G__5006 = (i__5002 + (1));
i__5002 = G__5006;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5003),iter__5000.call(null,cljs.core.chunk_rest.call(null,s__5001__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5003),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__5001__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__5000.call(null,cljs.core.rest.call(null,s__5001__$2)));
} else
{{
var G__5007 = cljs.core.rest.call(null,s__5001__$2);
s__5001__$1 = G__5007;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__4999_5004,promise))
,null,null));
});})(G__4999_5004,promise))
;return iter__4291__auto__.call(null,data);
})();return promise.resolve(keylist);
});})(G__4999_5004,promise))
);
G__4999_5004.fail(((function (G__4999_5004,promise){
return (function (err){return promise.reject(err);
});})(G__4999_5004,promise))
);
return promise;
});
core.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4291__auto__ = ((function (promise){
return (function iter__5014(s__5015){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__5015__$1 = s__5015;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5015__$1);if(temp__4126__auto__)
{var s__5015__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5015__$2))
{var c__4289__auto__ = cljs.core.chunk_first.call(null,s__5015__$2);var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);var b__5017 = cljs.core.chunk_buffer.call(null,size__4290__auto__);if((function (){var i__5016 = (0);while(true){
if((i__5016 < size__4290__auto__))
{var key = cljs.core._nth.call(null,c__4289__auto__,i__5016);cljs.core.chunk_append.call(null,b__5017,core.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__5019 = (i__5016 + (1));
i__5016 = G__5019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5017),iter__5014.call(null,cljs.core.chunk_rest.call(null,s__5015__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5017),null);
}
} else
{var key = cljs.core.first.call(null,s__5015__$2);return cljs.core.cons.call(null,core.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__5014.call(null,cljs.core.rest.call(null,s__5015__$2)));
}
} else
{return null;
}
break;
}
});})(promise))
,null,null));
});})(promise))
;return iter__4291__auto__.call(null,keys);
})());var G__5018_5020 = $.when.apply($,fetchFilePromise);G__5018_5020.done(((function (G__5018_5020,promise,fetchFilePromise){
return (function() { 
var G__5021__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(cljs.core.seq.call(null,new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false)));
} else
{var details = cljs.core.map.call(null,((function (G__5018_5020,promise,fetchFilePromise){
return (function (data){return (data[(0)]);
});})(G__5018_5020,promise,fetchFilePromise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__5021 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5021__delegate.call(this,args);};
G__5021.cljs$lang$maxFixedArity = 0;
G__5021.cljs$lang$applyTo = (function (arglist__5022){
var args = cljs.core.seq(arglist__5022);
return G__5021__delegate(args);
});
G__5021.cljs$core$IFn$_invoke$arity$variadic = G__5021__delegate;
return G__5021;
})()
;})(G__5018_5020,promise,fetchFilePromise))
);
G__5018_5020.fail(((function (G__5018_5020,promise,fetchFilePromise){
return (function (p1__5008_SHARP_){return promise.reject(p1__5008_SHARP_);
});})(G__5018_5020,promise,fetchFilePromise))
);
return promise;
});
core.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__5025_5027 = core.fn.FetchFile.call(null,configPath);G__5025_5027.done(((function (G__5025_5027,promise){
return (function (config){var pkgPath = (config[type]);var G__5026 = core.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,core.fn.FetchAllModel,pkgPath));G__5026.done(((function (G__5026,pkgPath,G__5025_5027,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__5026,pkgPath,G__5025_5027,promise))
);
G__5026.fail(((function (G__5026,pkgPath,G__5025_5027,promise){
return (function (err){return promise.reject(err);
});})(G__5026,pkgPath,G__5025_5027,promise))
);
return G__5026;
});})(G__5025_5027,promise))
);
G__5025_5027.fail(((function (G__5025_5027,promise){
return (function (err){return promise.reject(err);
});})(G__5025_5027,promise))
);
return promise;
});
