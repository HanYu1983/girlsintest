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
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__12184_12189 = app.fn.FetchFile.call(null,path);G__12184_12189.done(((function (G__12184_12189,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__12184_12189,p){
return (function iter__12185(s__12186){return (new cljs.core.LazySeq(null,((function (G__12184_12189,p){
return (function (){var s__12186__$1 = s__12186;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12186__$1);if(temp__4126__auto__)
{var s__12186__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12186__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12186__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12188 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12187 = (0);while(true){
if((i__12187 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__12187);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__12188,encodeURIComponent(modelKey));
{
var G__12190 = (i__12187 + (1));
i__12187 = G__12190;
continue;
}
} else
{{
var G__12191 = (i__12187 + (1));
i__12187 = G__12191;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12188),iter__12185.call(null,cljs.core.chunk_rest.call(null,s__12186__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12188),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__12186__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__12185.call(null,cljs.core.rest.call(null,s__12186__$2)));
} else
{{
var G__12192 = cljs.core.rest.call(null,s__12186__$2);
s__12186__$1 = G__12192;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__12184_12189,p))
,null,null));
});})(G__12184_12189,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__12184_12189,p))
);
G__12184_12189.fail(((function (G__12184_12189,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__12184_12189,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__12198_12203 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__12199(s__12200){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__12200__$1 = s__12200;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12200__$1);if(temp__4126__auto__)
{var s__12200__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12200__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12200__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12202 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12201 = (0);while(true){
if((i__12201 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__12201);cljs.core.chunk_append.call(null,b__12202,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__12204 = (i__12201 + (1));
i__12201 = G__12204;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12202),iter__12199.call(null,cljs.core.chunk_rest.call(null,s__12200__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12202),null);
}
} else
{var key = cljs.core.first.call(null,s__12200__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__12199.call(null,cljs.core.rest.call(null,s__12200__$2)));
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
})();G__12198_12203.done(((function (G__12198_12203,promise){
return (function() { 
var G__12205__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__12198_12203,promise){
return (function (data){return (data[(0)]);
});})(G__12198_12203,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__12205 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12205__delegate.call(this,args);};
G__12205.cljs$lang$maxFixedArity = 0;
G__12205.cljs$lang$applyTo = (function (arglist__12206){
var args = cljs.core.seq(arglist__12206);
return G__12205__delegate(args);
});
G__12205.cljs$core$IFn$_invoke$arity$variadic = G__12205__delegate;
return G__12205;
})()
;})(G__12198_12203,promise))
);
G__12198_12203.fail(((function (G__12198_12203,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__12198_12203,promise))
);
return promise;
});
/**
* 多次request
*/
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__12209_12211 = app.fn.FetchFile.call(null,configPath);G__12209_12211.done(((function (G__12209_12211,promise){
return (function (config){var pkgPath = (config[type]);var G__12210 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__12210.done(((function (G__12210,pkgPath,G__12209_12211,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__12210,pkgPath,G__12209_12211,promise))
);
G__12210.fail(((function (G__12210,pkgPath,G__12209_12211,promise){
return (function (err){return promise.reject(err);
});})(G__12210,pkgPath,G__12209_12211,promise))
);
return G__12210;
});})(G__12209_12211,promise))
);
G__12209_12211.fail(((function (G__12209_12211,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__12209_12211,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__12214_12216 = app.fn.FetchFile.call(null,configPath);G__12214_12216.done(((function (G__12214_12216,promise){
return (function (config){var pkgPath = (config[type]);var G__12215 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__12215.done(((function (G__12215,pkgPath,G__12214_12216,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__12215,pkgPath,G__12214_12216,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__12215,pkgPath,G__12214_12216,promise))
);console.log(cljs.core.deref.call(null,ident));
return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__12215,pkgPath,G__12214_12216,promise))
);
G__12215.fail(((function (G__12215,pkgPath,G__12214_12216,promise){
return (function (err){return promise.reject(err);
});})(G__12215,pkgPath,G__12214_12216,promise))
);
return G__12215;
});})(G__12214_12216,promise))
);
G__12214_12216.fail(((function (G__12214_12216,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__12214_12216,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__12255_12291 = app.fn.FetchFile.call(null,configPath);G__12255_12291.done(((function (G__12255_12291,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__12256 = cljs.core._EQ_;var expr__12257 = which;if(cljs.core.truth_(pred__12256.call(null,"model",expr__12257)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__12259 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__12259.done(((function (G__12259,pathPair,where,modelKey,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise){
return (function (p1__12217_SHARP_){return promise.resolve(p1__12217_SHARP_);
});})(G__12259,pathPair,where,modelKey,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise))
);
G__12259.fail(((function (G__12259,pathPair,where,modelKey,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise){
return (function (p1__12218_SHARP_){return promise.reject(p1__12218_SHARP_);
});})(G__12259,pathPair,where,modelKey,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise))
);
return G__12259;
} else
{if(cljs.core.truth_(pred__12256.call(null,"key",expr__12257)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise){
return (function (state_12266){var state_val_12267 = (state_12266[(1)]);if((state_val_12267 === (1)))
{var inst_12262 = (pathInfo["key"]);var inst_12263 = {"ModelKey":inst_12262};var inst_12264 = promise.resolve(inst_12263);var state_12266__$1 = state_12266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12266__$1,inst_12264);
} else
{return null;
}
});})(c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12271 = [null,null,null,null,null,null,null];(statearr_12271[(0)] = state_machine__6178__auto__);
(statearr_12271[(1)] = (1));
return statearr_12271;
});
var state_machine__6178__auto____1 = (function (state_12266){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12266);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12272){if((e12272 instanceof Object))
{var ex__6181__auto__ = e12272;var statearr_12273_12292 = state_12266;(statearr_12273_12292[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12266);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12293 = state_12266;
state_12266 = G__12293;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12266){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise))
})();var state__6194__auto__ = (function (){var statearr_12274 = f__6193__auto__.call(null);(statearr_12274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise){
return (function (state_12281){var state_val_12282 = (state_12281[(1)]);if((state_val_12282 === (1)))
{var inst_12275 = console.log("which is not right:",which);var inst_12278 = {"ModelKey":""};var inst_12279 = promise.resolve(inst_12278);var state_12281__$1 = (function (){var statearr_12283 = state_12281;(statearr_12283[(7)] = inst_12275);
return statearr_12283;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12281__$1,inst_12279);
} else
{return null;
}
});})(c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12287 = [null,null,null,null,null,null,null,null];(statearr_12287[(0)] = state_machine__6178__auto__);
(statearr_12287[(1)] = (1));
return statearr_12287;
});
var state_machine__6178__auto____1 = (function (state_12281){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12281);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12288){if((e12288 instanceof Object))
{var ex__6181__auto__ = e12288;var statearr_12289_12294 = state_12281;(statearr_12289_12294[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12281);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12295 = state_12281;
state_12281 = G__12295;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12281){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise))
})();var state__6194__auto__ = (function (){var statearr_12290 = f__6193__auto__.call(null);(statearr_12290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__12256,expr__12257,pathInfo,which,G__12255_12291,promise))
);
return c__6192__auto__;
}
}
});})(G__12255_12291,promise))
);
G__12255_12291.fail(((function (G__12255_12291,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__12255_12291,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
app.fn.GetAllModelOnce = cljs.core.memoize.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = cljs.core.memoize.call(null,app.fn.GetHomeModelMaybeKey);
