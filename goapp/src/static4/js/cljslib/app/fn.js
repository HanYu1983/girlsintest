// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
app.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
app.fn.FetchFile = (function FetchFile(path){return $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__4975_4980 = app.fn.FetchFile.call(null,path);G__4975_4980.done(((function (G__4975_4980,p){
return (function (data){var keylist = (function (){var iter__4293__auto__ = ((function (G__4975_4980,p){
return (function iter__4976(s__4977){return (new cljs.core.LazySeq(null,((function (G__4975_4980,p){
return (function (){var s__4977__$1 = s__4977;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__4977__$1);if(temp__4126__auto__)
{var s__4977__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4977__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__4977__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__4979 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__4978 = (0);while(true){
if((i__4978 < size__4292__auto__))
{var modelKey = cljs.core._nth.call(null,c__4291__auto__,i__4978);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__4979,modelKey);
{
var G__4981 = (i__4978 + (1));
i__4978 = G__4981;
continue;
}
} else
{{
var G__4982 = (i__4978 + (1));
i__4978 = G__4982;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4979),iter__4976.call(null,cljs.core.chunk_rest.call(null,s__4977__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4979),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__4977__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__4976.call(null,cljs.core.rest.call(null,s__4977__$2)));
} else
{{
var G__4983 = cljs.core.rest.call(null,s__4977__$2);
s__4977__$1 = G__4983;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__4975_4980,p))
,null,null));
});})(G__4975_4980,p))
;return iter__4293__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__4975_4980,p))
);
G__4975_4980.fail(((function (G__4975_4980,p){
return (function (p1__3381__3382__auto__){return p.reject(p1__3381__3382__auto__);
});})(G__4975_4980,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__4989_4994 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4293__auto__ = ((function (promise){
return (function iter__4990(s__4991){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__4991__$1 = s__4991;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__4991__$1);if(temp__4126__auto__)
{var s__4991__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4991__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__4991__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__4993 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__4992 = (0);while(true){
if((i__4992 < size__4292__auto__))
{var key = cljs.core._nth.call(null,c__4291__auto__,i__4992);cljs.core.chunk_append.call(null,b__4993,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__4995 = (i__4992 + (1));
i__4992 = G__4995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4993),iter__4990.call(null,cljs.core.chunk_rest.call(null,s__4991__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4993),null);
}
} else
{var key = cljs.core.first.call(null,s__4991__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__4990.call(null,cljs.core.rest.call(null,s__4991__$2)));
}
} else
{return null;
}
break;
}
});})(promise))
,null,null));
});})(promise))
;return iter__4293__auto__.call(null,keys);
})());return $.when.apply($,fetchFilePromise);
})();G__4989_4994.done(((function (G__4989_4994,promise){
return (function() { 
var G__4996__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__4989_4994,promise){
return (function (data){return (data[(0)]);
});})(G__4989_4994,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__4996 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__4996__delegate.call(this,args);};
G__4996.cljs$lang$maxFixedArity = 0;
G__4996.cljs$lang$applyTo = (function (arglist__4997){
var args = cljs.core.seq(arglist__4997);
return G__4996__delegate(args);
});
G__4996.cljs$core$IFn$_invoke$arity$variadic = G__4996__delegate;
return G__4996;
})()
;})(G__4989_4994,promise))
);
G__4989_4994.fail(((function (G__4989_4994,promise){
return (function (p1__3381__3382__auto__){return promise.reject(p1__3381__3382__auto__);
});})(G__4989_4994,promise))
);
return promise;
});
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__5000_5002 = app.fn.FetchFile.call(null,configPath);G__5000_5002.done(((function (G__5000_5002,promise){
return (function (config){var pkgPath = (config[type]);var G__5001 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__5001.done(((function (G__5001,pkgPath,G__5000_5002,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__5001,pkgPath,G__5000_5002,promise))
);
G__5001.fail(((function (G__5001,pkgPath,G__5000_5002,promise){
return (function (err){return promise.reject(err);
});})(G__5001,pkgPath,G__5000_5002,promise))
);
return G__5001;
});})(G__5000_5002,promise))
);
G__5000_5002.fail(((function (G__5000_5002,promise){
return (function (p1__3381__3382__auto__){return promise.reject(p1__3381__3382__auto__);
});})(G__5000_5002,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
