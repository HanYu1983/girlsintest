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
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__17421_17426 = app.fn.FetchFile.call(null,path);G__17421_17426.done(((function (G__17421_17426,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__17421_17426,p){
return (function iter__17422(s__17423){return (new cljs.core.LazySeq(null,((function (G__17421_17426,p){
return (function (){var s__17423__$1 = s__17423;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17423__$1);if(temp__4126__auto__)
{var s__17423__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17423__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__17423__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__17425 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__17424 = (0);while(true){
if((i__17424 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__17424);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__17425,encodeURIComponent(modelKey));
{
var G__17427 = (i__17424 + (1));
i__17424 = G__17427;
continue;
}
} else
{{
var G__17428 = (i__17424 + (1));
i__17424 = G__17428;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17425),iter__17422.call(null,cljs.core.chunk_rest.call(null,s__17423__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17425),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__17423__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__17422.call(null,cljs.core.rest.call(null,s__17423__$2)));
} else
{{
var G__17429 = cljs.core.rest.call(null,s__17423__$2);
s__17423__$1 = G__17429;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__17421_17426,p))
,null,null));
});})(G__17421_17426,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__17421_17426,p))
);
G__17421_17426.fail(((function (G__17421_17426,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__17421_17426,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__17435_17440 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__17436(s__17437){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__17437__$1 = s__17437;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17437__$1);if(temp__4126__auto__)
{var s__17437__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17437__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__17437__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__17439 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__17438 = (0);while(true){
if((i__17438 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__17438);cljs.core.chunk_append.call(null,b__17439,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__17441 = (i__17438 + (1));
i__17438 = G__17441;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17439),iter__17436.call(null,cljs.core.chunk_rest.call(null,s__17437__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17439),null);
}
} else
{var key = cljs.core.first.call(null,s__17437__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__17436.call(null,cljs.core.rest.call(null,s__17437__$2)));
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
})();G__17435_17440.done(((function (G__17435_17440,promise){
return (function() { 
var G__17442__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__17435_17440,promise){
return (function (data){return (data[(0)]);
});})(G__17435_17440,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__17442 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17442__delegate.call(this,args);};
G__17442.cljs$lang$maxFixedArity = 0;
G__17442.cljs$lang$applyTo = (function (arglist__17443){
var args = cljs.core.seq(arglist__17443);
return G__17442__delegate(args);
});
G__17442.cljs$core$IFn$_invoke$arity$variadic = G__17442__delegate;
return G__17442;
})()
;})(G__17435_17440,promise))
);
G__17435_17440.fail(((function (G__17435_17440,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__17435_17440,promise))
);
return promise;
});
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__17446_17448 = app.fn.FetchFile.call(null,configPath);G__17446_17448.done(((function (G__17446_17448,promise){
return (function (config){var pkgPath = (config[type]);var G__17447 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__17447.done(((function (G__17447,pkgPath,G__17446_17448,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__17447,pkgPath,G__17446_17448,promise))
);
G__17447.fail(((function (G__17447,pkgPath,G__17446_17448,promise){
return (function (err){return promise.reject(err);
});})(G__17447,pkgPath,G__17446_17448,promise))
);
return G__17447;
});})(G__17446_17448,promise))
);
G__17446_17448.fail(((function (G__17446_17448,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__17446_17448,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__17487_17523 = app.fn.FetchFile.call(null,configPath);G__17487_17523.done(((function (G__17487_17523,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__17488 = cljs.core._EQ_;var expr__17489 = which;if(cljs.core.truth_(pred__17488.call(null,"model",expr__17489)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__17491 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__17491.done(((function (G__17491,pathPair,where,modelKey,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise){
return (function (p1__17449_SHARP_){return promise.resolve(p1__17449_SHARP_);
});})(G__17491,pathPair,where,modelKey,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise))
);
G__17491.fail(((function (G__17491,pathPair,where,modelKey,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise){
return (function (p1__17450_SHARP_){return promise.reject(p1__17450_SHARP_);
});})(G__17491,pathPair,where,modelKey,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise))
);
return G__17491;
} else
{if(cljs.core.truth_(pred__17488.call(null,"key",expr__17489)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise){
return (function (state_17498){var state_val_17499 = (state_17498[(1)]);if((state_val_17499 === (1)))
{var inst_17494 = (pathInfo["key"]);var inst_17495 = {"ModelKey":inst_17494};var inst_17496 = promise.resolve(inst_17495);var state_17498__$1 = state_17498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17498__$1,inst_17496);
} else
{return null;
}
});})(c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17503 = [null,null,null,null,null,null,null];(statearr_17503[(0)] = state_machine__6178__auto__);
(statearr_17503[(1)] = (1));
return statearr_17503;
});
var state_machine__6178__auto____1 = (function (state_17498){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17498);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17504){if((e17504 instanceof Object))
{var ex__6181__auto__ = e17504;var statearr_17505_17524 = state_17498;(statearr_17505_17524[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17504;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17525 = state_17498;
state_17498 = G__17525;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17498){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise))
})();var state__6194__auto__ = (function (){var statearr_17506 = f__6193__auto__.call(null);(statearr_17506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise){
return (function (state_17513){var state_val_17514 = (state_17513[(1)]);if((state_val_17514 === (1)))
{var inst_17507 = console.log("which is not right:",which);var inst_17510 = {"ModelKey":""};var inst_17511 = promise.resolve(inst_17510);var state_17513__$1 = (function (){var statearr_17515 = state_17513;(statearr_17515[(7)] = inst_17507);
return statearr_17515;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17513__$1,inst_17511);
} else
{return null;
}
});})(c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_17519 = [null,null,null,null,null,null,null,null];(statearr_17519[(0)] = state_machine__6178__auto__);
(statearr_17519[(1)] = (1));
return statearr_17519;
});
var state_machine__6178__auto____1 = (function (state_17513){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_17513);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e17520){if((e17520 instanceof Object))
{var ex__6181__auto__ = e17520;var statearr_17521_17526 = state_17513;(statearr_17521_17526[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17527 = state_17513;
state_17513 = G__17527;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_17513){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_17513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise))
})();var state__6194__auto__ = (function (){var statearr_17522 = f__6193__auto__.call(null);(statearr_17522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_17522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__17488,expr__17489,pathInfo,which,G__17487_17523,promise))
);
return c__6192__auto__;
}
}
});})(G__17487_17523,promise))
);
G__17487_17523.fail(((function (G__17487_17523,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__17487_17523,promise))
);
return promise;
});
