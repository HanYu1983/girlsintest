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
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__13526_13531 = app.fn.FetchFile.call(null,path);G__13526_13531.done(((function (G__13526_13531,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__13526_13531,p){
return (function iter__13527(s__13528){return (new cljs.core.LazySeq(null,((function (G__13526_13531,p){
return (function (){var s__13528__$1 = s__13528;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13528__$1);if(temp__4126__auto__)
{var s__13528__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13528__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13528__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13530 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13529 = (0);while(true){
if((i__13529 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__13529);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__13530,encodeURIComponent(modelKey));
{
var G__13532 = (i__13529 + (1));
i__13529 = G__13532;
continue;
}
} else
{{
var G__13533 = (i__13529 + (1));
i__13529 = G__13533;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13530),iter__13527.call(null,cljs.core.chunk_rest.call(null,s__13528__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13530),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__13528__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__13527.call(null,cljs.core.rest.call(null,s__13528__$2)));
} else
{{
var G__13534 = cljs.core.rest.call(null,s__13528__$2);
s__13528__$1 = G__13534;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__13526_13531,p))
,null,null));
});})(G__13526_13531,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__13526_13531,p))
);
G__13526_13531.fail(((function (G__13526_13531,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__13526_13531,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__13540_13545 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__13541(s__13542){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__13542__$1 = s__13542;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13542__$1);if(temp__4126__auto__)
{var s__13542__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13542__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13542__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13544 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13543 = (0);while(true){
if((i__13543 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__13543);cljs.core.chunk_append.call(null,b__13544,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__13546 = (i__13543 + (1));
i__13543 = G__13546;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13544),iter__13541.call(null,cljs.core.chunk_rest.call(null,s__13542__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13544),null);
}
} else
{var key = cljs.core.first.call(null,s__13542__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__13541.call(null,cljs.core.rest.call(null,s__13542__$2)));
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
})();G__13540_13545.done(((function (G__13540_13545,promise){
return (function() { 
var G__13547__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__13540_13545,promise){
return (function (data){return (data[(0)]);
});})(G__13540_13545,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__13547 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13547__delegate.call(this,args);};
G__13547.cljs$lang$maxFixedArity = 0;
G__13547.cljs$lang$applyTo = (function (arglist__13548){
var args = cljs.core.seq(arglist__13548);
return G__13547__delegate(args);
});
G__13547.cljs$core$IFn$_invoke$arity$variadic = G__13547__delegate;
return G__13547;
})()
;})(G__13540_13545,promise))
);
G__13540_13545.fail(((function (G__13540_13545,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__13540_13545,promise))
);
return promise;
});
/**
* 多次request
*/
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__13551_13553 = app.fn.FetchFile.call(null,configPath);G__13551_13553.done(((function (G__13551_13553,promise){
return (function (config){var pkgPath = (config[type]);var G__13552 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__13552.done(((function (G__13552,pkgPath,G__13551_13553,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__13552,pkgPath,G__13551_13553,promise))
);
G__13552.fail(((function (G__13552,pkgPath,G__13551_13553,promise){
return (function (err){return promise.reject(err);
});})(G__13552,pkgPath,G__13551_13553,promise))
);
return G__13552;
});})(G__13551_13553,promise))
);
G__13551_13553.fail(((function (G__13551_13553,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__13551_13553,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__13556_13558 = app.fn.FetchFile.call(null,configPath);G__13556_13558.done(((function (G__13556_13558,promise){
return (function (config){var pkgPath = (config[type]);var G__13557 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__13557.done(((function (G__13557,pkgPath,G__13556_13558,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__13557,pkgPath,G__13556_13558,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__13557,pkgPath,G__13556_13558,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__13557,pkgPath,G__13556_13558,promise))
);
G__13557.fail(((function (G__13557,pkgPath,G__13556_13558,promise){
return (function (err){return promise.reject(err);
});})(G__13557,pkgPath,G__13556_13558,promise))
);
return G__13557;
});})(G__13556_13558,promise))
);
G__13556_13558.fail(((function (G__13556_13558,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__13556_13558,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__13597_13633 = app.fn.FetchFile.call(null,configPath);G__13597_13633.done(((function (G__13597_13633,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__13598 = cljs.core._EQ_;var expr__13599 = which;if(cljs.core.truth_(pred__13598.call(null,"model",expr__13599)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__13601 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__13601.done(((function (G__13601,pathPair,where,modelKey,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise){
return (function (p1__13559_SHARP_){return promise.resolve(where,modelKey,p1__13559_SHARP_);
});})(G__13601,pathPair,where,modelKey,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise))
);
G__13601.fail(((function (G__13601,pathPair,where,modelKey,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise){
return (function (p1__13560_SHARP_){return promise.reject(p1__13560_SHARP_);
});})(G__13601,pathPair,where,modelKey,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise))
);
return G__13601;
} else
{if(cljs.core.truth_(pred__13598.call(null,"key",expr__13599)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise){
return (function (state_13608){var state_val_13609 = (state_13608[(1)]);if((state_val_13609 === (1)))
{var inst_13604 = (pathInfo["key"]);var inst_13605 = {"ModelKey":inst_13604};var inst_13606 = promise.resolve(inst_13605);var state_13608__$1 = state_13608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13608__$1,inst_13606);
} else
{return null;
}
});})(c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13613 = [null,null,null,null,null,null,null];(statearr_13613[(0)] = state_machine__6178__auto__);
(statearr_13613[(1)] = (1));
return statearr_13613;
});
var state_machine__6178__auto____1 = (function (state_13608){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13608);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13614){if((e13614 instanceof Object))
{var ex__6181__auto__ = e13614;var statearr_13615_13634 = state_13608;(statearr_13615_13634[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13608);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13635 = state_13608;
state_13608 = G__13635;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13608){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise))
})();var state__6194__auto__ = (function (){var statearr_13616 = f__6193__auto__.call(null);(statearr_13616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise){
return (function (state_13623){var state_val_13624 = (state_13623[(1)]);if((state_val_13624 === (1)))
{var inst_13617 = console.log("which is not right:",which);var inst_13620 = {"ModelKey":""};var inst_13621 = promise.resolve(inst_13620);var state_13623__$1 = (function (){var statearr_13625 = state_13623;(statearr_13625[(7)] = inst_13617);
return statearr_13625;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13623__$1,inst_13621);
} else
{return null;
}
});})(c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13629 = [null,null,null,null,null,null,null,null];(statearr_13629[(0)] = state_machine__6178__auto__);
(statearr_13629[(1)] = (1));
return statearr_13629;
});
var state_machine__6178__auto____1 = (function (state_13623){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13623);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13630){if((e13630 instanceof Object))
{var ex__6181__auto__ = e13630;var statearr_13631_13636 = state_13623;(statearr_13631_13636[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13623);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13630;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13637 = state_13623;
state_13623 = G__13637;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13623){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise))
})();var state__6194__auto__ = (function (){var statearr_13632 = f__6193__auto__.call(null);(statearr_13632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__13598,expr__13599,pathInfo,which,G__13597_13633,promise))
);
return c__6192__auto__;
}
}
});})(G__13597_13633,promise))
);
G__13597_13633.fail(((function (G__13597_13633,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__13597_13633,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
app.fn.GetAllModelOnce = cljs.core.memoize.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = cljs.core.memoize.call(null,app.fn.GetHomeModelMaybeKey);
