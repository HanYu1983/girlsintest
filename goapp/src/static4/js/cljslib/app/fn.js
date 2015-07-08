// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.cache = (function cache(f){var c = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (c){
return (function() { 
var G__19428__delegate = function (args){var p = $.Deferred();var ckey = cljs.core.keyword.call(null,cljs.core.pr_str.call(null,args));var ret = cljs.core.get.call(null,cljs.core.deref.call(null,c),ckey);if(cljs.core.truth_(ret))
{return p.resolve((ret[(0)]),(ret[(1)]),(ret[(2)]));
} else
{var G__19427 = cljs.core.apply.call(null,f,args);G__19427.done(((function (G__19427,p,ckey,ret,c){
return (function (){cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,ckey,[(arguments[(0)]),(arguments[(1)]),(arguments[(2)])]);
return p.resolve((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));
});})(G__19427,p,ckey,ret,c))
);
G__19427.fail(((function (G__19427,p,ckey,ret,c){
return (function (p1__19425_SHARP_){return p.reject(p1__19425_SHARP_);
});})(G__19427,p,ckey,ret,c))
);
return G__19427;
}
};
var G__19428 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19428__delegate.call(this,args);};
G__19428.cljs$lang$maxFixedArity = 0;
G__19428.cljs$lang$applyTo = (function (arglist__19429){
var args = cljs.core.seq(arglist__19429);
return G__19428__delegate(args);
});
G__19428.cljs$core$IFn$_invoke$arity$variadic = G__19428__delegate;
return G__19428;
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
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__19435_19440 = app.fn.FetchFile.call(null,path);G__19435_19440.done(((function (G__19435_19440,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__19435_19440,p){
return (function iter__19436(s__19437){return (new cljs.core.LazySeq(null,((function (G__19435_19440,p){
return (function (){var s__19437__$1 = s__19437;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19437__$1);if(temp__4126__auto__)
{var s__19437__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19437__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__19437__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__19439 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__19438 = (0);while(true){
if((i__19438 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__19438);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__19439,encodeURIComponent(modelKey));
{
var G__19441 = (i__19438 + (1));
i__19438 = G__19441;
continue;
}
} else
{{
var G__19442 = (i__19438 + (1));
i__19438 = G__19442;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19439),iter__19436.call(null,cljs.core.chunk_rest.call(null,s__19437__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19439),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__19437__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__19436.call(null,cljs.core.rest.call(null,s__19437__$2)));
} else
{{
var G__19443 = cljs.core.rest.call(null,s__19437__$2);
s__19437__$1 = G__19443;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__19435_19440,p))
,null,null));
});})(G__19435_19440,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__19435_19440,p))
);
G__19435_19440.fail(((function (G__19435_19440,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__19435_19440,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__19449_19454 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__19450(s__19451){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__19451__$1 = s__19451;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19451__$1);if(temp__4126__auto__)
{var s__19451__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19451__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__19451__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__19453 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__19452 = (0);while(true){
if((i__19452 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__19452);cljs.core.chunk_append.call(null,b__19453,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__19455 = (i__19452 + (1));
i__19452 = G__19455;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19453),iter__19450.call(null,cljs.core.chunk_rest.call(null,s__19451__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19453),null);
}
} else
{var key = cljs.core.first.call(null,s__19451__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__19450.call(null,cljs.core.rest.call(null,s__19451__$2)));
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
})();G__19449_19454.done(((function (G__19449_19454,promise){
return (function() { 
var G__19456__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__19449_19454,promise){
return (function (data){return (data[(0)]);
});})(G__19449_19454,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__19456 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19456__delegate.call(this,args);};
G__19456.cljs$lang$maxFixedArity = 0;
G__19456.cljs$lang$applyTo = (function (arglist__19457){
var args = cljs.core.seq(arglist__19457);
return G__19456__delegate(args);
});
G__19456.cljs$core$IFn$_invoke$arity$variadic = G__19456__delegate;
return G__19456;
})()
;})(G__19449_19454,promise))
);
G__19449_19454.fail(((function (G__19449_19454,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__19449_19454,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__19460_19462 = app.fn.FetchFile.call(null,configPath);G__19460_19462.done(((function (G__19460_19462,promise){
return (function (config){var pkgPath = (config[type]);var G__19461 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__19461.done(((function (G__19461,pkgPath,G__19460_19462,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__19461,pkgPath,G__19460_19462,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__19461,pkgPath,G__19460_19462,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__19461,pkgPath,G__19460_19462,promise))
);
G__19461.fail(((function (G__19461,pkgPath,G__19460_19462,promise){
return (function (err){return promise.reject(err);
});})(G__19461,pkgPath,G__19460_19462,promise))
);
return G__19461;
});})(G__19460_19462,promise))
);
G__19460_19462.fail(((function (G__19460_19462,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__19460_19462,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__19501_19537 = app.fn.FetchFile.call(null,configPath);G__19501_19537.done(((function (G__19501_19537,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__19502 = cljs.core._EQ_;var expr__19503 = which;if(cljs.core.truth_(pred__19502.call(null,"model",expr__19503)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__19505 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__19505.done(((function (G__19505,pathPair,where,modelKey,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise){
return (function (p1__19463_SHARP_){return promise.resolve(where,modelKey,p1__19463_SHARP_);
});})(G__19505,pathPair,where,modelKey,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise))
);
G__19505.fail(((function (G__19505,pathPair,where,modelKey,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise){
return (function (p1__19464_SHARP_){return promise.reject(p1__19464_SHARP_);
});})(G__19505,pathPair,where,modelKey,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise))
);
return G__19505;
} else
{if(cljs.core.truth_(pred__19502.call(null,"key",expr__19503)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise){
return (function (state_19512){var state_val_19513 = (state_19512[(1)]);if((state_val_19513 === (1)))
{var inst_19508 = (pathInfo["key"]);var inst_19509 = {"ModelKey":inst_19508};var inst_19510 = promise.resolve(inst_19509);var state_19512__$1 = state_19512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19512__$1,inst_19510);
} else
{return null;
}
});})(c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_19517 = [null,null,null,null,null,null,null];(statearr_19517[(0)] = state_machine__6178__auto__);
(statearr_19517[(1)] = (1));
return statearr_19517;
});
var state_machine__6178__auto____1 = (function (state_19512){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_19512);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e19518){if((e19518 instanceof Object))
{var ex__6181__auto__ = e19518;var statearr_19519_19538 = state_19512;(statearr_19519_19538[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19512);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19539 = state_19512;
state_19512 = G__19539;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_19512){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_19512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise))
})();var state__6194__auto__ = (function (){var statearr_19520 = f__6193__auto__.call(null);(statearr_19520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_19520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise){
return (function (state_19527){var state_val_19528 = (state_19527[(1)]);if((state_val_19528 === (1)))
{var inst_19521 = console.log("which is not right:",which);var inst_19524 = {"ModelKey":""};var inst_19525 = promise.resolve(inst_19524);var state_19527__$1 = (function (){var statearr_19529 = state_19527;(statearr_19529[(7)] = inst_19521);
return statearr_19529;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19527__$1,inst_19525);
} else
{return null;
}
});})(c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_19533 = [null,null,null,null,null,null,null,null];(statearr_19533[(0)] = state_machine__6178__auto__);
(statearr_19533[(1)] = (1));
return statearr_19533;
});
var state_machine__6178__auto____1 = (function (state_19527){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_19527);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e19534){if((e19534 instanceof Object))
{var ex__6181__auto__ = e19534;var statearr_19535_19540 = state_19527;(statearr_19535_19540[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19527);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19541 = state_19527;
state_19527 = G__19541;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_19527){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_19527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise))
})();var state__6194__auto__ = (function (){var statearr_19536 = f__6193__auto__.call(null);(statearr_19536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_19536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__19502,expr__19503,pathInfo,which,G__19501_19537,promise))
);
return c__6192__auto__;
}
}
});})(G__19501_19537,promise))
);
G__19501_19537.fail(((function (G__19501_19537,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__19501_19537,promise))
);
return promise;
});
app.fn.GetAllModelOnce = app.fn.cache.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = app.fn.cache.call(null,app.fn.GetHomeModelMaybeKey);
