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
return (function (data){return promise.resolve((function (){var iter__4276__auto__ = ((function (G__4982_4987,promise){
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
})());
});})(G__4982_4987,promise))
);
G__4982_4987.fail(((function (G__4982_4987,promise){
return (function (err){return promise.reject(err);
});})(G__4982_4987,promise))
);
return promise;
});
