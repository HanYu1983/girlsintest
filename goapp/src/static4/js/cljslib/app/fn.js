// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
app.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
app.fn.FetchFile = (function FetchFile(path){return $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__24873_24878 = app.fn.FetchFile.call(null,path);G__24873_24878.done(((function (G__24873_24878,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__24873_24878,p){
return (function iter__24874(s__24875){return (new cljs.core.LazySeq(null,((function (G__24873_24878,p){
return (function (){var s__24875__$1 = s__24875;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24875__$1);if(temp__4126__auto__)
{var s__24875__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24875__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__24875__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__24877 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__24876 = (0);while(true){
if((i__24876 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__24876);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__24877,modelKey);
{
var G__24879 = (i__24876 + (1));
i__24876 = G__24879;
continue;
}
} else
{{
var G__24880 = (i__24876 + (1));
i__24876 = G__24880;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24877),iter__24874.call(null,cljs.core.chunk_rest.call(null,s__24875__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24877),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__24875__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__24874.call(null,cljs.core.rest.call(null,s__24875__$2)));
} else
{{
var G__24881 = cljs.core.rest.call(null,s__24875__$2);
s__24875__$1 = G__24881;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__24873_24878,p))
,null,null));
});})(G__24873_24878,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__24873_24878,p))
);
G__24873_24878.fail(((function (G__24873_24878,p){
return (function (p1__4503__4504__auto__){return p.reject(p1__4503__4504__auto__);
});})(G__24873_24878,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__24887_24892 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__24888(s__24889){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__24889__$1 = s__24889;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24889__$1);if(temp__4126__auto__)
{var s__24889__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24889__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__24889__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__24891 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__24890 = (0);while(true){
if((i__24890 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__24890);cljs.core.chunk_append.call(null,b__24891,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__24893 = (i__24890 + (1));
i__24890 = G__24893;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24891),iter__24888.call(null,cljs.core.chunk_rest.call(null,s__24889__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24891),null);
}
} else
{var key = cljs.core.first.call(null,s__24889__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__24888.call(null,cljs.core.rest.call(null,s__24889__$2)));
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
})();G__24887_24892.done(((function (G__24887_24892,promise){
return (function() { 
var G__24894__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__24887_24892,promise){
return (function (data){return (data[(0)]);
});})(G__24887_24892,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__24894 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24894__delegate.call(this,args);};
G__24894.cljs$lang$maxFixedArity = 0;
G__24894.cljs$lang$applyTo = (function (arglist__24895){
var args = cljs.core.seq(arglist__24895);
return G__24894__delegate(args);
});
G__24894.cljs$core$IFn$_invoke$arity$variadic = G__24894__delegate;
return G__24894;
})()
;})(G__24887_24892,promise))
);
G__24887_24892.fail(((function (G__24887_24892,promise){
return (function (p1__4503__4504__auto__){return promise.reject(p1__4503__4504__auto__);
});})(G__24887_24892,promise))
);
return promise;
});
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__24898_24900 = app.fn.FetchFile.call(null,configPath);G__24898_24900.done(((function (G__24898_24900,promise){
return (function (config){var pkgPath = (config[type]);var G__24899 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__24899.done(((function (G__24899,pkgPath,G__24898_24900,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__24899,pkgPath,G__24898_24900,promise))
);
G__24899.fail(((function (G__24899,pkgPath,G__24898_24900,promise){
return (function (err){return promise.reject(err);
});})(G__24899,pkgPath,G__24898_24900,promise))
);
return G__24899;
});})(G__24898_24900,promise))
);
G__24898_24900.fail(((function (G__24898_24900,promise){
return (function (p1__4503__4504__auto__){return promise.reject(p1__4503__4504__auto__);
});})(G__24898_24900,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
