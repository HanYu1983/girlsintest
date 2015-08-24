// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.cache = (function cache(f){var c = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (c){
return (function() { 
var G__12273__delegate = function (args){var p = $.Deferred();var ckey = cljs.core.keyword.call(null,cljs.core.pr_str.call(null,args));var ret = cljs.core.get.call(null,cljs.core.deref.call(null,c),ckey);if(cljs.core.truth_(ret))
{return p.resolve((ret[(0)]),(ret[(1)]),(ret[(2)]));
} else
{var G__12272 = cljs.core.apply.call(null,f,args);G__12272.done(((function (G__12272,p,ckey,ret,c){
return (function (){cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,ckey,[(arguments[(0)]),(arguments[(1)]),(arguments[(2)])]);
return p.resolve((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));
});})(G__12272,p,ckey,ret,c))
);
G__12272.fail(((function (G__12272,p,ckey,ret,c){
return (function (p1__12270_SHARP_){return p.reject(p1__12270_SHARP_);
});})(G__12272,p,ckey,ret,c))
);
return G__12272;
}
};
var G__12273 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12273__delegate.call(this,args);};
G__12273.cljs$lang$maxFixedArity = 0;
G__12273.cljs$lang$applyTo = (function (arglist__12274){
var args = cljs.core.seq(arglist__12274);
return G__12273__delegate(args);
});
G__12273.cljs$core$IFn$_invoke$arity$variadic = G__12273__delegate;
return G__12273;
})()
;
;})(c))
});
app.fn.encodePath = (function encodePath(path){return _.map(path.split("/"),encodeURIComponent).join("/");
});
app.fn.ServeImagePath = (function ServeImagePath(path){return ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
app.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
app.fn.FetchFile = (function FetchFile(path){return $.getJSON(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__12280_12285 = app.fn.FetchFile.call(null,path);G__12280_12285.done(((function (G__12280_12285,p){
return (function (data){var keylist = (function (){var iter__4293__auto__ = ((function (G__12280_12285,p){
return (function iter__12281(s__12282){return (new cljs.core.LazySeq(null,((function (G__12280_12285,p){
return (function (){var s__12282__$1 = s__12282;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12282__$1);if(temp__4126__auto__)
{var s__12282__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12282__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__12282__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__12284 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__12283 = (0);while(true){
if((i__12283 < size__4292__auto__))
{var modelKey = cljs.core._nth.call(null,c__4291__auto__,i__12283);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__12284,encodeURIComponent(modelKey));
{
var G__12286 = (i__12283 + (1));
i__12283 = G__12286;
continue;
}
} else
{{
var G__12287 = (i__12283 + (1));
i__12283 = G__12287;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12284),iter__12281.call(null,cljs.core.chunk_rest.call(null,s__12282__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12284),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__12282__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__12281.call(null,cljs.core.rest.call(null,s__12282__$2)));
} else
{{
var G__12288 = cljs.core.rest.call(null,s__12282__$2);
s__12282__$1 = G__12288;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__12280_12285,p))
,null,null));
});})(G__12280_12285,p))
;return iter__4293__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__12280_12285,p))
);
G__12280_12285.fail(((function (G__12280_12285,p){
return (function (p1__12142__12143__auto__){return p.reject(p1__12142__12143__auto__);
});})(G__12280_12285,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__12294_12299 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4293__auto__ = ((function (promise){
return (function iter__12295(s__12296){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__12296__$1 = s__12296;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12296__$1);if(temp__4126__auto__)
{var s__12296__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12296__$2))
{var c__4291__auto__ = cljs.core.chunk_first.call(null,s__12296__$2);var size__4292__auto__ = cljs.core.count.call(null,c__4291__auto__);var b__12298 = cljs.core.chunk_buffer.call(null,size__4292__auto__);if((function (){var i__12297 = (0);while(true){
if((i__12297 < size__4292__auto__))
{var key = cljs.core._nth.call(null,c__4291__auto__,i__12297);cljs.core.chunk_append.call(null,b__12298,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__12300 = (i__12297 + (1));
i__12297 = G__12300;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12298),iter__12295.call(null,cljs.core.chunk_rest.call(null,s__12296__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12298),null);
}
} else
{var key = cljs.core.first.call(null,s__12296__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__12295.call(null,cljs.core.rest.call(null,s__12296__$2)));
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
})();G__12294_12299.done(((function (G__12294_12299,promise){
return (function() { 
var G__12301__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__12294_12299,promise){
return (function (data){return (data[(0)]);
});})(G__12294_12299,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__12301 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12301__delegate.call(this,args);};
G__12301.cljs$lang$maxFixedArity = 0;
G__12301.cljs$lang$applyTo = (function (arglist__12302){
var args = cljs.core.seq(arglist__12302);
return G__12301__delegate(args);
});
G__12301.cljs$core$IFn$_invoke$arity$variadic = G__12301__delegate;
return G__12301;
})()
;})(G__12294_12299,promise))
);
G__12294_12299.fail(((function (G__12294_12299,promise){
return (function (p1__12142__12143__auto__){return promise.reject(p1__12142__12143__auto__);
});})(G__12294_12299,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__12305_12307 = app.fn.FetchFile.call(null,configPath);G__12305_12307.done(((function (G__12305_12307,promise){
return (function (config){var pkgPath = (config[type]);var G__12306 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__12306.done(((function (G__12306,pkgPath,G__12305_12307,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__12306,pkgPath,G__12305_12307,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__12306,pkgPath,G__12305_12307,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__12306,pkgPath,G__12305_12307,promise))
);
G__12306.fail(((function (G__12306,pkgPath,G__12305_12307,promise){
return (function (err){return promise.reject(err);
});})(G__12306,pkgPath,G__12305_12307,promise))
);
return G__12306;
});})(G__12305_12307,promise))
);
G__12305_12307.fail(((function (G__12305_12307,promise){
return (function (p1__12142__12143__auto__){return promise.reject(p1__12142__12143__auto__);
});})(G__12305_12307,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__12346_12382 = app.fn.FetchFile.call(null,configPath);G__12346_12382.done(((function (G__12346_12382,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__12347 = cljs.core._EQ_;var expr__12348 = which;if(cljs.core.truth_(pred__12347.call(null,"model",expr__12348)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__12350 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__12350.done(((function (G__12350,pathPair,where,modelKey,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise){
return (function (p1__12308_SHARP_){return promise.resolve(where,modelKey,p1__12308_SHARP_);
});})(G__12350,pathPair,where,modelKey,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise))
);
G__12350.fail(((function (G__12350,pathPair,where,modelKey,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise){
return (function (p1__12309_SHARP_){return promise.reject(p1__12309_SHARP_);
});})(G__12350,pathPair,where,modelKey,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise))
);
return G__12350;
} else
{if(cljs.core.truth_(pred__12347.call(null,"key",expr__12348)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise){
return (function (state_12357){var state_val_12358 = (state_12357[(1)]);if((state_val_12358 === (1)))
{var inst_12353 = (pathInfo["key"]);var inst_12354 = {"ModelKey":inst_12353};var inst_12355 = promise.resolve(inst_12354);var state_12357__$1 = state_12357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12357__$1,inst_12355);
} else
{return null;
}
});})(c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12362 = [null,null,null,null,null,null,null];(statearr_12362[(0)] = state_machine__6178__auto__);
(statearr_12362[(1)] = (1));
return statearr_12362;
});
var state_machine__6178__auto____1 = (function (state_12357){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12357);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12363){if((e12363 instanceof Object))
{var ex__6181__auto__ = e12363;var statearr_12364_12383 = state_12357;(statearr_12364_12383[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12384 = state_12357;
state_12357 = G__12384;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12357){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise))
})();var state__6194__auto__ = (function (){var statearr_12365 = f__6193__auto__.call(null);(statearr_12365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise){
return (function (state_12372){var state_val_12373 = (state_12372[(1)]);if((state_val_12373 === (1)))
{var inst_12366 = console.log("which is not right:",which);var inst_12369 = {"ModelKey":""};var inst_12370 = promise.resolve(inst_12369);var state_12372__$1 = (function (){var statearr_12374 = state_12372;(statearr_12374[(7)] = inst_12366);
return statearr_12374;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12372__$1,inst_12370);
} else
{return null;
}
});})(c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12378 = [null,null,null,null,null,null,null,null];(statearr_12378[(0)] = state_machine__6178__auto__);
(statearr_12378[(1)] = (1));
return statearr_12378;
});
var state_machine__6178__auto____1 = (function (state_12372){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12372);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12379){if((e12379 instanceof Object))
{var ex__6181__auto__ = e12379;var statearr_12380_12385 = state_12372;(statearr_12380_12385[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12372);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12386 = state_12372;
state_12372 = G__12386;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12372){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise))
})();var state__6194__auto__ = (function (){var statearr_12381 = f__6193__auto__.call(null);(statearr_12381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__12347,expr__12348,pathInfo,which,G__12346_12382,promise))
);
return c__6192__auto__;
}
}
});})(G__12346_12382,promise))
);
G__12346_12382.fail(((function (G__12346_12382,promise){
return (function (p1__12142__12143__auto__){return promise.reject(p1__12142__12143__auto__);
});})(G__12346_12382,promise))
);
return promise;
});
app.fn.GetAllModelOnce = app.fn.cache.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = app.fn.cache.call(null,app.fn.GetHomeModelMaybeKey);
