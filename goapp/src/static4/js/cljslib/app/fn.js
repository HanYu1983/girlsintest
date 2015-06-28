// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.encodePath = (function encodePath(path){return _.map(path.split("/"),encodeURIComponent).join("/");
});
app.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
app.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
app.fn.FetchFile = (function FetchFile(path){return $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__11492_11497 = app.fn.FetchFile.call(null,path);G__11492_11497.done(((function (G__11492_11497,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__11492_11497,p){
return (function iter__11493(s__11494){return (new cljs.core.LazySeq(null,((function (G__11492_11497,p){
return (function (){var s__11494__$1 = s__11494;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11494__$1);if(temp__4126__auto__)
{var s__11494__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11494__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11494__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11496 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11495 = (0);while(true){
if((i__11495 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__11495);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__11496,encodeURIComponent(modelKey));
{
var G__11498 = (i__11495 + (1));
i__11495 = G__11498;
continue;
}
} else
{{
var G__11499 = (i__11495 + (1));
i__11495 = G__11499;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11496),iter__11493.call(null,cljs.core.chunk_rest.call(null,s__11494__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11496),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__11494__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__11493.call(null,cljs.core.rest.call(null,s__11494__$2)));
} else
{{
var G__11500 = cljs.core.rest.call(null,s__11494__$2);
s__11494__$1 = G__11500;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__11492_11497,p))
,null,null));
});})(G__11492_11497,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__11492_11497,p))
);
G__11492_11497.fail(((function (G__11492_11497,p){
return (function (p1__8996__8997__auto__){return p.reject(p1__8996__8997__auto__);
});})(G__11492_11497,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__11506_11511 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__11507(s__11508){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__11508__$1 = s__11508;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11508__$1);if(temp__4126__auto__)
{var s__11508__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11508__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11508__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11510 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11509 = (0);while(true){
if((i__11509 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__11509);cljs.core.chunk_append.call(null,b__11510,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__11512 = (i__11509 + (1));
i__11509 = G__11512;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11510),iter__11507.call(null,cljs.core.chunk_rest.call(null,s__11508__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11510),null);
}
} else
{var key = cljs.core.first.call(null,s__11508__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__11507.call(null,cljs.core.rest.call(null,s__11508__$2)));
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
})();G__11506_11511.done(((function (G__11506_11511,promise){
return (function() { 
var G__11513__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__11506_11511,promise){
return (function (data){return (data[(0)]);
});})(G__11506_11511,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__11513 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11513__delegate.call(this,args);};
G__11513.cljs$lang$maxFixedArity = 0;
G__11513.cljs$lang$applyTo = (function (arglist__11514){
var args = cljs.core.seq(arglist__11514);
return G__11513__delegate(args);
});
G__11513.cljs$core$IFn$_invoke$arity$variadic = G__11513__delegate;
return G__11513;
})()
;})(G__11506_11511,promise))
);
G__11506_11511.fail(((function (G__11506_11511,promise){
return (function (p1__8996__8997__auto__){return promise.reject(p1__8996__8997__auto__);
});})(G__11506_11511,promise))
);
return promise;
});
/**
* 多次request
*/
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__11517_11519 = app.fn.FetchFile.call(null,configPath);G__11517_11519.done(((function (G__11517_11519,promise){
return (function (config){var pkgPath = (config[type]);var G__11518 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__11518.done(((function (G__11518,pkgPath,G__11517_11519,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__11518,pkgPath,G__11517_11519,promise))
);
G__11518.fail(((function (G__11518,pkgPath,G__11517_11519,promise){
return (function (err){return promise.reject(err);
});})(G__11518,pkgPath,G__11517_11519,promise))
);
return G__11518;
});})(G__11517_11519,promise))
);
G__11517_11519.fail(((function (G__11517_11519,promise){
return (function (p1__8996__8997__auto__){return promise.reject(p1__8996__8997__auto__);
});})(G__11517_11519,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__11522_11524 = app.fn.FetchFile.call(null,configPath);G__11522_11524.done(((function (G__11522_11524,promise){
return (function (config){var pkgPath = (config[type]);var G__11523 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__11523.done(((function (G__11523,pkgPath,G__11522_11524,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__11523,pkgPath,G__11522_11524,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__11523,pkgPath,G__11522_11524,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__11523,pkgPath,G__11522_11524,promise))
);
G__11523.fail(((function (G__11523,pkgPath,G__11522_11524,promise){
return (function (err){return promise.reject(err);
});})(G__11523,pkgPath,G__11522_11524,promise))
);
return G__11523;
});})(G__11522_11524,promise))
);
G__11522_11524.fail(((function (G__11522_11524,promise){
return (function (p1__8996__8997__auto__){return promise.reject(p1__8996__8997__auto__);
});})(G__11522_11524,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__11563_11599 = app.fn.FetchFile.call(null,configPath);G__11563_11599.done(((function (G__11563_11599,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__11564 = cljs.core._EQ_;var expr__11565 = which;if(cljs.core.truth_(pred__11564.call(null,"model",expr__11565)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__11567 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__11567.done(((function (G__11567,pathPair,where,modelKey,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise){
return (function (p1__11525_SHARP_){return promise.resolve(where,modelKey,p1__11525_SHARP_);
});})(G__11567,pathPair,where,modelKey,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise))
);
G__11567.fail(((function (G__11567,pathPair,where,modelKey,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise){
return (function (p1__11526_SHARP_){return promise.reject(p1__11526_SHARP_);
});})(G__11567,pathPair,where,modelKey,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise))
);
return G__11567;
} else
{if(cljs.core.truth_(pred__11564.call(null,"key",expr__11565)))
{var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise){
return (function (state_11574){var state_val_11575 = (state_11574[(1)]);if((state_val_11575 === (1)))
{var inst_11570 = (pathInfo["key"]);var inst_11571 = {"ModelKey":inst_11570};var inst_11572 = promise.resolve(inst_11571);var state_11574__$1 = state_11574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11574__$1,inst_11572);
} else
{return null;
}
});})(c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise))
;return ((function (switch__6178__auto__,c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_11579 = [null,null,null,null,null,null,null];(statearr_11579[(0)] = state_machine__6179__auto__);
(statearr_11579[(1)] = (1));
return statearr_11579;
});
var state_machine__6179__auto____1 = (function (state_11574){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_11574);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e11580){if((e11580 instanceof Object))
{var ex__6182__auto__ = e11580;var statearr_11581_11600 = state_11574;(statearr_11581_11600[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11580;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11601 = state_11574;
state_11574 = G__11601;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_11574){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_11574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise))
})();var state__6236__auto__ = (function (){var statearr_11582 = f__6235__auto__.call(null);(statearr_11582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_11582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise))
);
return c__6234__auto__;
} else
{var c__6234__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise){
return (function (){var f__6235__auto__ = (function (){var switch__6178__auto__ = ((function (c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise){
return (function (state_11589){var state_val_11590 = (state_11589[(1)]);if((state_val_11590 === (1)))
{var inst_11583 = console.log("which is not right:",which);var inst_11586 = {"ModelKey":""};var inst_11587 = promise.resolve(inst_11586);var state_11589__$1 = (function (){var statearr_11591 = state_11589;(statearr_11591[(7)] = inst_11583);
return statearr_11591;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11589__$1,inst_11587);
} else
{return null;
}
});})(c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise))
;return ((function (switch__6178__auto__,c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_11595 = [null,null,null,null,null,null,null,null];(statearr_11595[(0)] = state_machine__6179__auto__);
(statearr_11595[(1)] = (1));
return statearr_11595;
});
var state_machine__6179__auto____1 = (function (state_11589){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_11589);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e11596){if((e11596 instanceof Object))
{var ex__6182__auto__ = e11596;var statearr_11597_11602 = state_11589;(statearr_11597_11602[(5)] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11603 = state_11589;
state_11589 = G__11603;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_11589){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_11589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__,c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise))
})();var state__6236__auto__ = (function (){var statearr_11598 = f__6235__auto__.call(null);(statearr_11598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6234__auto__);
return statearr_11598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6236__auto__);
});})(c__6234__auto__,pred__11564,expr__11565,pathInfo,which,G__11563_11599,promise))
);
return c__6234__auto__;
}
}
});})(G__11563_11599,promise))
);
G__11563_11599.fail(((function (G__11563_11599,promise){
return (function (p1__8996__8997__auto__){return promise.reject(p1__8996__8997__auto__);
});})(G__11563_11599,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
app.fn.GetAllModelOnce = cljs.core.memoize.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = cljs.core.memoize.call(null,app.fn.GetHomeModelMaybeKey);
