// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.encodePath = (function encodePath(path){return _.map(path.split("/"),encodeURIComponent).join("/");
});
app.fn.ServeImagePath = (function ServeImagePath(path){return ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
app.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
app.fn.FetchFile = (function FetchFile(path){return $.getJSON(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__6409_6414 = app.fn.FetchFile.call(null,path);G__6409_6414.done(((function (G__6409_6414,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__6409_6414,p){
return (function iter__6410(s__6411){return (new cljs.core.LazySeq(null,((function (G__6409_6414,p){
return (function (){var s__6411__$1 = s__6411;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6411__$1);if(temp__4126__auto__)
{var s__6411__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6411__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__6411__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__6413 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__6412 = (0);while(true){
if((i__6412 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__6412);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__6413,encodeURIComponent(modelKey));
{
var G__6415 = (i__6412 + (1));
i__6412 = G__6415;
continue;
}
} else
{{
var G__6416 = (i__6412 + (1));
i__6412 = G__6416;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6413),iter__6410.call(null,cljs.core.chunk_rest.call(null,s__6411__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6413),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__6411__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__6410.call(null,cljs.core.rest.call(null,s__6411__$2)));
} else
{{
var G__6417 = cljs.core.rest.call(null,s__6411__$2);
s__6411__$1 = G__6417;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__6409_6414,p))
,null,null));
});})(G__6409_6414,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__6409_6414,p))
);
G__6409_6414.fail(((function (G__6409_6414,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__6409_6414,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__6423_6428 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__6424(s__6425){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__6425__$1 = s__6425;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6425__$1);if(temp__4126__auto__)
{var s__6425__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6425__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__6425__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__6427 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__6426 = (0);while(true){
if((i__6426 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__6426);cljs.core.chunk_append.call(null,b__6427,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__6429 = (i__6426 + (1));
i__6426 = G__6429;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6427),iter__6424.call(null,cljs.core.chunk_rest.call(null,s__6425__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6427),null);
}
} else
{var key = cljs.core.first.call(null,s__6425__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__6424.call(null,cljs.core.rest.call(null,s__6425__$2)));
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
})();G__6423_6428.done(((function (G__6423_6428,promise){
return (function() { 
var G__6430__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__6423_6428,promise){
return (function (data){return (data[(0)]);
});})(G__6423_6428,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__6430 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6430__delegate.call(this,args);};
G__6430.cljs$lang$maxFixedArity = 0;
G__6430.cljs$lang$applyTo = (function (arglist__6431){
var args = cljs.core.seq(arglist__6431);
return G__6430__delegate(args);
});
G__6430.cljs$core$IFn$_invoke$arity$variadic = G__6430__delegate;
return G__6430;
})()
;})(G__6423_6428,promise))
);
G__6423_6428.fail(((function (G__6423_6428,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__6423_6428,promise))
);
return promise;
});
/**
* 多次request
*/
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__6434_6436 = app.fn.FetchFile.call(null,configPath);G__6434_6436.done(((function (G__6434_6436,promise){
return (function (config){var pkgPath = (config[type]);var G__6435 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__6435.done(((function (G__6435,pkgPath,G__6434_6436,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__6435,pkgPath,G__6434_6436,promise))
);
G__6435.fail(((function (G__6435,pkgPath,G__6434_6436,promise){
return (function (err){return promise.reject(err);
});})(G__6435,pkgPath,G__6434_6436,promise))
);
return G__6435;
});})(G__6434_6436,promise))
);
G__6434_6436.fail(((function (G__6434_6436,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__6434_6436,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__6439_6441 = app.fn.FetchFile.call(null,configPath);G__6439_6441.done(((function (G__6439_6441,promise){
return (function (config){var pkgPath = (config[type]);var G__6440 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__6440.done(((function (G__6440,pkgPath,G__6439_6441,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__6440,pkgPath,G__6439_6441,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__6440,pkgPath,G__6439_6441,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__6440,pkgPath,G__6439_6441,promise))
);
G__6440.fail(((function (G__6440,pkgPath,G__6439_6441,promise){
return (function (err){return promise.reject(err);
});})(G__6440,pkgPath,G__6439_6441,promise))
);
return G__6440;
});})(G__6439_6441,promise))
);
G__6439_6441.fail(((function (G__6439_6441,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__6439_6441,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__6480_6516 = app.fn.FetchFile.call(null,configPath);G__6480_6516.done(((function (G__6480_6516,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__6481 = cljs.core._EQ_;var expr__6482 = which;if(cljs.core.truth_(pred__6481.call(null,"model",expr__6482)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__6484 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__6484.done(((function (G__6484,pathPair,where,modelKey,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise){
return (function (p1__6442_SHARP_){return promise.resolve(where,modelKey,p1__6442_SHARP_);
});})(G__6484,pathPair,where,modelKey,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise))
);
G__6484.fail(((function (G__6484,pathPair,where,modelKey,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise){
return (function (p1__6443_SHARP_){return promise.reject(p1__6443_SHARP_);
});})(G__6484,pathPair,where,modelKey,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise))
);
return G__6484;
} else
{if(cljs.core.truth_(pred__6481.call(null,"key",expr__6482)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise){
return (function (state_6491){var state_val_6492 = (state_6491[(1)]);if((state_val_6492 === (1)))
{var inst_6487 = (pathInfo["key"]);var inst_6488 = {"ModelKey":inst_6487};var inst_6489 = promise.resolve(inst_6488);var state_6491__$1 = state_6491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6491__$1,inst_6489);
} else
{return null;
}
});})(c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_6496 = [null,null,null,null,null,null,null];(statearr_6496[(0)] = state_machine__6178__auto__);
(statearr_6496[(1)] = (1));
return statearr_6496;
});
var state_machine__6178__auto____1 = (function (state_6491){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_6491);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e6497){if((e6497 instanceof Object))
{var ex__6181__auto__ = e6497;var statearr_6498_6517 = state_6491;(statearr_6498_6517[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6491);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e6497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__6518 = state_6491;
state_6491 = G__6518;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_6491){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_6491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise))
})();var state__6194__auto__ = (function (){var statearr_6499 = f__6193__auto__.call(null);(statearr_6499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_6499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise){
return (function (state_6506){var state_val_6507 = (state_6506[(1)]);if((state_val_6507 === (1)))
{var inst_6500 = console.log("which is not right:",which);var inst_6503 = {"ModelKey":""};var inst_6504 = promise.resolve(inst_6503);var state_6506__$1 = (function (){var statearr_6508 = state_6506;(statearr_6508[(7)] = inst_6500);
return statearr_6508;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6506__$1,inst_6504);
} else
{return null;
}
});})(c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_6512 = [null,null,null,null,null,null,null,null];(statearr_6512[(0)] = state_machine__6178__auto__);
(statearr_6512[(1)] = (1));
return statearr_6512;
});
var state_machine__6178__auto____1 = (function (state_6506){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_6506);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e6513){if((e6513 instanceof Object))
{var ex__6181__auto__ = e6513;var statearr_6514_6519 = state_6506;(statearr_6514_6519[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6506);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e6513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__6520 = state_6506;
state_6506 = G__6520;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_6506){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_6506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise))
})();var state__6194__auto__ = (function (){var statearr_6515 = f__6193__auto__.call(null);(statearr_6515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_6515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__6481,expr__6482,pathInfo,which,G__6480_6516,promise))
);
return c__6192__auto__;
}
}
});})(G__6480_6516,promise))
);
G__6480_6516.fail(((function (G__6480_6516,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__6480_6516,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
app.fn.GetAllModelOnce = cljs.core.memoize.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = cljs.core.memoize.call(null,app.fn.GetHomeModelMaybeKey);
