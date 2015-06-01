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
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__21365_21370 = app.fn.FetchFile.call(null,path);G__21365_21370.done(((function (G__21365_21370,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__21365_21370,p){
return (function iter__21366(s__21367){return (new cljs.core.LazySeq(null,((function (G__21365_21370,p){
return (function (){var s__21367__$1 = s__21367;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21367__$1);if(temp__4126__auto__)
{var s__21367__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21367__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__21367__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__21369 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__21368 = (0);while(true){
if((i__21368 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__21368);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__21369,encodeURIComponent(modelKey));
{
var G__21371 = (i__21368 + (1));
i__21368 = G__21371;
continue;
}
} else
{{
var G__21372 = (i__21368 + (1));
i__21368 = G__21372;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21369),iter__21366.call(null,cljs.core.chunk_rest.call(null,s__21367__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21369),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__21367__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__21366.call(null,cljs.core.rest.call(null,s__21367__$2)));
} else
{{
var G__21373 = cljs.core.rest.call(null,s__21367__$2);
s__21367__$1 = G__21373;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__21365_21370,p))
,null,null));
});})(G__21365_21370,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__21365_21370,p))
);
G__21365_21370.fail(((function (G__21365_21370,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__21365_21370,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__21379_21384 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__21380(s__21381){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__21381__$1 = s__21381;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21381__$1);if(temp__4126__auto__)
{var s__21381__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21381__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__21381__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__21383 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__21382 = (0);while(true){
if((i__21382 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__21382);cljs.core.chunk_append.call(null,b__21383,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__21385 = (i__21382 + (1));
i__21382 = G__21385;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21383),iter__21380.call(null,cljs.core.chunk_rest.call(null,s__21381__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21383),null);
}
} else
{var key = cljs.core.first.call(null,s__21381__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__21380.call(null,cljs.core.rest.call(null,s__21381__$2)));
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
})();G__21379_21384.done(((function (G__21379_21384,promise){
return (function() { 
var G__21386__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__21379_21384,promise){
return (function (data){return (data[(0)]);
});})(G__21379_21384,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__21386 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21386__delegate.call(this,args);};
G__21386.cljs$lang$maxFixedArity = 0;
G__21386.cljs$lang$applyTo = (function (arglist__21387){
var args = cljs.core.seq(arglist__21387);
return G__21386__delegate(args);
});
G__21386.cljs$core$IFn$_invoke$arity$variadic = G__21386__delegate;
return G__21386;
})()
;})(G__21379_21384,promise))
);
G__21379_21384.fail(((function (G__21379_21384,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__21379_21384,promise))
);
return promise;
});
/**
* 多次request
*/
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__21390_21392 = app.fn.FetchFile.call(null,configPath);G__21390_21392.done(((function (G__21390_21392,promise){
return (function (config){var pkgPath = (config[type]);var G__21391 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__21391.done(((function (G__21391,pkgPath,G__21390_21392,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__21391,pkgPath,G__21390_21392,promise))
);
G__21391.fail(((function (G__21391,pkgPath,G__21390_21392,promise){
return (function (err){return promise.reject(err);
});})(G__21391,pkgPath,G__21390_21392,promise))
);
return G__21391;
});})(G__21390_21392,promise))
);
G__21390_21392.fail(((function (G__21390_21392,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__21390_21392,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__21395_21397 = app.fn.FetchFile.call(null,configPath);G__21395_21397.done(((function (G__21395_21397,promise){
return (function (config){var pkgPath = (config[type]);var G__21396 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__21396.done(((function (G__21396,pkgPath,G__21395_21397,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__21396,pkgPath,G__21395_21397,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__21396,pkgPath,G__21395_21397,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__21396,pkgPath,G__21395_21397,promise))
);
G__21396.fail(((function (G__21396,pkgPath,G__21395_21397,promise){
return (function (err){return promise.reject(err);
});})(G__21396,pkgPath,G__21395_21397,promise))
);
return G__21396;
});})(G__21395_21397,promise))
);
G__21395_21397.fail(((function (G__21395_21397,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__21395_21397,promise))
);
return promise;
});
app.fn.GetAllModelOnce = cljs.core.memoize.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__21436_21472 = app.fn.FetchFile.call(null,configPath);G__21436_21472.done(((function (G__21436_21472,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__21437 = cljs.core._EQ_;var expr__21438 = which;if(cljs.core.truth_(pred__21437.call(null,"model",expr__21438)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__21440 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__21440.done(((function (G__21440,pathPair,where,modelKey,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise){
return (function (p1__21398_SHARP_){return promise.resolve(p1__21398_SHARP_);
});})(G__21440,pathPair,where,modelKey,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise))
);
G__21440.fail(((function (G__21440,pathPair,where,modelKey,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise){
return (function (p1__21399_SHARP_){return promise.reject(p1__21399_SHARP_);
});})(G__21440,pathPair,where,modelKey,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise))
);
return G__21440;
} else
{if(cljs.core.truth_(pred__21437.call(null,"key",expr__21438)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise){
return (function (state_21447){var state_val_21448 = (state_21447[(1)]);if((state_val_21448 === (1)))
{var inst_21443 = (pathInfo["key"]);var inst_21444 = {"ModelKey":inst_21443};var inst_21445 = promise.resolve(inst_21444);var state_21447__$1 = state_21447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21447__$1,inst_21445);
} else
{return null;
}
});})(c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21452 = [null,null,null,null,null,null,null];(statearr_21452[(0)] = state_machine__6178__auto__);
(statearr_21452[(1)] = (1));
return statearr_21452;
});
var state_machine__6178__auto____1 = (function (state_21447){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21447);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21453){if((e21453 instanceof Object))
{var ex__6181__auto__ = e21453;var statearr_21454_21473 = state_21447;(statearr_21454_21473[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21447);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21474 = state_21447;
state_21447 = G__21474;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21447){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise))
})();var state__6194__auto__ = (function (){var statearr_21455 = f__6193__auto__.call(null);(statearr_21455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise){
return (function (state_21462){var state_val_21463 = (state_21462[(1)]);if((state_val_21463 === (1)))
{var inst_21456 = console.log("which is not right:",which);var inst_21459 = {"ModelKey":""};var inst_21460 = promise.resolve(inst_21459);var state_21462__$1 = (function (){var statearr_21464 = state_21462;(statearr_21464[(7)] = inst_21456);
return statearr_21464;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21462__$1,inst_21460);
} else
{return null;
}
});})(c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21468 = [null,null,null,null,null,null,null,null];(statearr_21468[(0)] = state_machine__6178__auto__);
(statearr_21468[(1)] = (1));
return statearr_21468;
});
var state_machine__6178__auto____1 = (function (state_21462){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21462);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21469){if((e21469 instanceof Object))
{var ex__6181__auto__ = e21469;var statearr_21470_21475 = state_21462;(statearr_21470_21475[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21462);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21476 = state_21462;
state_21462 = G__21476;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21462){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise))
})();var state__6194__auto__ = (function (){var statearr_21471 = f__6193__auto__.call(null);(statearr_21471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__21437,expr__21438,pathInfo,which,G__21436_21472,promise))
);
return c__6192__auto__;
}
}
});})(G__21436_21472,promise))
);
G__21436_21472.fail(((function (G__21436_21472,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__21436_21472,promise))
);
return promise;
});
