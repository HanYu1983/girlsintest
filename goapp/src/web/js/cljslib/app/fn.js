// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.cache = (function cache(f){var c = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (c){
return (function() { 
var G__6432__delegate = function (args){var p = $.Deferred();var ckey = cljs.core.keyword.call(null,cljs.core.pr_str.call(null,args));var ret = cljs.core.get.call(null,cljs.core.deref.call(null,c),ckey);if(cljs.core.truth_(ret))
{return p.resolve((ret[(0)]),(ret[(1)]),(ret[(2)]));
} else
{var G__6431 = cljs.core.apply.call(null,f,args);G__6431.done(((function (G__6431,p,ckey,ret,c){
return (function (){cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,ckey,[(arguments[(0)]),(arguments[(1)]),(arguments[(2)])]);
return p.resolve((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));
});})(G__6431,p,ckey,ret,c))
);
G__6431.fail(((function (G__6431,p,ckey,ret,c){
return (function (p1__6429_SHARP_){return p.reject(p1__6429_SHARP_);
});})(G__6431,p,ckey,ret,c))
);
return G__6431;
}
};
var G__6432 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6432__delegate.call(this,args);};
G__6432.cljs$lang$maxFixedArity = 0;
G__6432.cljs$lang$applyTo = (function (arglist__6433){
var args = cljs.core.seq(arglist__6433);
return G__6432__delegate(args);
});
G__6432.cljs$core$IFn$_invoke$arity$variadic = G__6432__delegate;
return G__6432;
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
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__6439_6444 = app.fn.FetchFile.call(null,path);G__6439_6444.done(((function (G__6439_6444,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__6439_6444,p){
return (function iter__6440(s__6441){return (new cljs.core.LazySeq(null,((function (G__6439_6444,p){
return (function (){var s__6441__$1 = s__6441;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6441__$1);if(temp__4126__auto__)
{var s__6441__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6441__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__6441__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__6443 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__6442 = (0);while(true){
if((i__6442 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__6442);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__6443,encodeURIComponent(modelKey));
{
var G__6445 = (i__6442 + (1));
i__6442 = G__6445;
continue;
}
} else
{{
var G__6446 = (i__6442 + (1));
i__6442 = G__6446;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6443),iter__6440.call(null,cljs.core.chunk_rest.call(null,s__6441__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6443),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__6441__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__6440.call(null,cljs.core.rest.call(null,s__6441__$2)));
} else
{{
var G__6447 = cljs.core.rest.call(null,s__6441__$2);
s__6441__$1 = G__6447;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__6439_6444,p))
,null,null));
});})(G__6439_6444,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__6439_6444,p))
);
G__6439_6444.fail(((function (G__6439_6444,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__6439_6444,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__6453_6458 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__6454(s__6455){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__6455__$1 = s__6455;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6455__$1);if(temp__4126__auto__)
{var s__6455__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6455__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__6455__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__6457 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__6456 = (0);while(true){
if((i__6456 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__6456);cljs.core.chunk_append.call(null,b__6457,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__6459 = (i__6456 + (1));
i__6456 = G__6459;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6457),iter__6454.call(null,cljs.core.chunk_rest.call(null,s__6455__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6457),null);
}
} else
{var key = cljs.core.first.call(null,s__6455__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__6454.call(null,cljs.core.rest.call(null,s__6455__$2)));
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
})();G__6453_6458.done(((function (G__6453_6458,promise){
return (function() { 
var G__6460__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__6453_6458,promise){
return (function (data){return (data[(0)]);
});})(G__6453_6458,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__6460 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6460__delegate.call(this,args);};
G__6460.cljs$lang$maxFixedArity = 0;
G__6460.cljs$lang$applyTo = (function (arglist__6461){
var args = cljs.core.seq(arglist__6461);
return G__6460__delegate(args);
});
G__6460.cljs$core$IFn$_invoke$arity$variadic = G__6460__delegate;
return G__6460;
})()
;})(G__6453_6458,promise))
);
G__6453_6458.fail(((function (G__6453_6458,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__6453_6458,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__6464_6466 = app.fn.FetchFile.call(null,configPath);G__6464_6466.done(((function (G__6464_6466,promise){
return (function (config){var pkgPath = (config[type]);var G__6465 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__6465.done(((function (G__6465,pkgPath,G__6464_6466,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__6465,pkgPath,G__6464_6466,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__6465,pkgPath,G__6464_6466,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__6465,pkgPath,G__6464_6466,promise))
);
G__6465.fail(((function (G__6465,pkgPath,G__6464_6466,promise){
return (function (err){return promise.reject(err);
});})(G__6465,pkgPath,G__6464_6466,promise))
);
return G__6465;
});})(G__6464_6466,promise))
);
G__6464_6466.fail(((function (G__6464_6466,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__6464_6466,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__6505_6541 = app.fn.FetchFile.call(null,configPath);G__6505_6541.done(((function (G__6505_6541,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__6506 = cljs.core._EQ_;var expr__6507 = which;if(cljs.core.truth_(pred__6506.call(null,"model",expr__6507)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__6509 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__6509.done(((function (G__6509,pathPair,where,modelKey,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise){
return (function (p1__6467_SHARP_){return promise.resolve(where,modelKey,p1__6467_SHARP_);
});})(G__6509,pathPair,where,modelKey,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise))
);
G__6509.fail(((function (G__6509,pathPair,where,modelKey,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise){
return (function (p1__6468_SHARP_){return promise.reject(p1__6468_SHARP_);
});})(G__6509,pathPair,where,modelKey,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise))
);
return G__6509;
} else
{if(cljs.core.truth_(pred__6506.call(null,"key",expr__6507)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise){
return (function (state_6516){var state_val_6517 = (state_6516[(1)]);if((state_val_6517 === (1)))
{var inst_6512 = (pathInfo["key"]);var inst_6513 = {"ModelKey":inst_6512};var inst_6514 = promise.resolve(inst_6513);var state_6516__$1 = state_6516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6516__$1,inst_6514);
} else
{return null;
}
});})(c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_6521 = [null,null,null,null,null,null,null];(statearr_6521[(0)] = state_machine__6178__auto__);
(statearr_6521[(1)] = (1));
return statearr_6521;
});
var state_machine__6178__auto____1 = (function (state_6516){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_6516);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e6522){if((e6522 instanceof Object))
{var ex__6181__auto__ = e6522;var statearr_6523_6542 = state_6516;(statearr_6523_6542[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6516);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e6522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__6543 = state_6516;
state_6516 = G__6543;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_6516){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_6516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise))
})();var state__6194__auto__ = (function (){var statearr_6524 = f__6193__auto__.call(null);(statearr_6524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_6524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise){
return (function (state_6531){var state_val_6532 = (state_6531[(1)]);if((state_val_6532 === (1)))
{var inst_6525 = console.log("which is not right:",which);var inst_6528 = {"ModelKey":""};var inst_6529 = promise.resolve(inst_6528);var state_6531__$1 = (function (){var statearr_6533 = state_6531;(statearr_6533[(7)] = inst_6525);
return statearr_6533;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6531__$1,inst_6529);
} else
{return null;
}
});})(c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_6537 = [null,null,null,null,null,null,null,null];(statearr_6537[(0)] = state_machine__6178__auto__);
(statearr_6537[(1)] = (1));
return statearr_6537;
});
var state_machine__6178__auto____1 = (function (state_6531){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_6531);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e6538){if((e6538 instanceof Object))
{var ex__6181__auto__ = e6538;var statearr_6539_6544 = state_6531;(statearr_6539_6544[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6531);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e6538;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__6545 = state_6531;
state_6531 = G__6545;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_6531){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_6531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise))
})();var state__6194__auto__ = (function (){var statearr_6540 = f__6193__auto__.call(null);(statearr_6540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_6540;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__6506,expr__6507,pathInfo,which,G__6505_6541,promise))
);
return c__6192__auto__;
}
}
});})(G__6505_6541,promise))
);
G__6505_6541.fail(((function (G__6505_6541,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__6505_6541,promise))
);
return promise;
});
app.fn.GetAllModelOnce = app.fn.cache.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = app.fn.cache.call(null,app.fn.GetHomeModelMaybeKey);
