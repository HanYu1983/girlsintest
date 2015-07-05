// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.encodePath = (function encodePath(path){return _.map(path.split("/"),encodeURIComponent).join("/");
});
app.fn.ServeImagePath = (function ServeImagePath(path){return ("https://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
app.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("https://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
app.fn.FetchFile = (function FetchFile(path){return $.getJSON(("https://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__11177_11182 = app.fn.FetchFile.call(null,path);G__11177_11182.done(((function (G__11177_11182,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__11177_11182,p){
return (function iter__11178(s__11179){return (new cljs.core.LazySeq(null,((function (G__11177_11182,p){
return (function (){var s__11179__$1 = s__11179;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11179__$1);if(temp__4126__auto__)
{var s__11179__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11179__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11179__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11181 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11180 = (0);while(true){
if((i__11180 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__11180);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__11181,encodeURIComponent(modelKey));
{
var G__11183 = (i__11180 + (1));
i__11180 = G__11183;
continue;
}
} else
{{
var G__11184 = (i__11180 + (1));
i__11180 = G__11184;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11181),iter__11178.call(null,cljs.core.chunk_rest.call(null,s__11179__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11181),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__11179__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__11178.call(null,cljs.core.rest.call(null,s__11179__$2)));
} else
{{
var G__11185 = cljs.core.rest.call(null,s__11179__$2);
s__11179__$1 = G__11185;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__11177_11182,p))
,null,null));
});})(G__11177_11182,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__11177_11182,p))
);
G__11177_11182.fail(((function (G__11177_11182,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__11177_11182,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__11191_11196 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__11192(s__11193){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__11193__$1 = s__11193;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11193__$1);if(temp__4126__auto__)
{var s__11193__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11193__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11193__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11195 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11194 = (0);while(true){
if((i__11194 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__11194);cljs.core.chunk_append.call(null,b__11195,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__11197 = (i__11194 + (1));
i__11194 = G__11197;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11195),iter__11192.call(null,cljs.core.chunk_rest.call(null,s__11193__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11195),null);
}
} else
{var key = cljs.core.first.call(null,s__11193__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__11192.call(null,cljs.core.rest.call(null,s__11193__$2)));
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
})();G__11191_11196.done(((function (G__11191_11196,promise){
return (function() { 
var G__11198__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__11191_11196,promise){
return (function (data){return (data[(0)]);
});})(G__11191_11196,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__11198 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11198__delegate.call(this,args);};
G__11198.cljs$lang$maxFixedArity = 0;
G__11198.cljs$lang$applyTo = (function (arglist__11199){
var args = cljs.core.seq(arglist__11199);
return G__11198__delegate(args);
});
G__11198.cljs$core$IFn$_invoke$arity$variadic = G__11198__delegate;
return G__11198;
})()
;})(G__11191_11196,promise))
);
G__11191_11196.fail(((function (G__11191_11196,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__11191_11196,promise))
);
return promise;
});
/**
* 多次request
*/
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__11202_11204 = app.fn.FetchFile.call(null,configPath);G__11202_11204.done(((function (G__11202_11204,promise){
return (function (config){var pkgPath = (config[type]);var G__11203 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__11203.done(((function (G__11203,pkgPath,G__11202_11204,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__11203,pkgPath,G__11202_11204,promise))
);
G__11203.fail(((function (G__11203,pkgPath,G__11202_11204,promise){
return (function (err){return promise.reject(err);
});})(G__11203,pkgPath,G__11202_11204,promise))
);
return G__11203;
});})(G__11202_11204,promise))
);
G__11202_11204.fail(((function (G__11202_11204,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__11202_11204,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__11207_11209 = app.fn.FetchFile.call(null,configPath);G__11207_11209.done(((function (G__11207_11209,promise){
return (function (config){var pkgPath = (config[type]);var G__11208 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__11208.done(((function (G__11208,pkgPath,G__11207_11209,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__11208,pkgPath,G__11207_11209,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__11208,pkgPath,G__11207_11209,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__11208,pkgPath,G__11207_11209,promise))
);
G__11208.fail(((function (G__11208,pkgPath,G__11207_11209,promise){
return (function (err){return promise.reject(err);
});})(G__11208,pkgPath,G__11207_11209,promise))
);
return G__11208;
});})(G__11207_11209,promise))
);
G__11207_11209.fail(((function (G__11207_11209,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__11207_11209,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__11248_11284 = app.fn.FetchFile.call(null,configPath);G__11248_11284.done(((function (G__11248_11284,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__11249 = cljs.core._EQ_;var expr__11250 = which;if(cljs.core.truth_(pred__11249.call(null,"model",expr__11250)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__11252 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__11252.done(((function (G__11252,pathPair,where,modelKey,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise){
return (function (p1__11210_SHARP_){return promise.resolve(where,modelKey,p1__11210_SHARP_);
});})(G__11252,pathPair,where,modelKey,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise))
);
G__11252.fail(((function (G__11252,pathPair,where,modelKey,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise){
return (function (p1__11211_SHARP_){return promise.reject(p1__11211_SHARP_);
});})(G__11252,pathPair,where,modelKey,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise))
);
return G__11252;
} else
{if(cljs.core.truth_(pred__11249.call(null,"key",expr__11250)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise){
return (function (state_11259){var state_val_11260 = (state_11259[(1)]);if((state_val_11260 === (1)))
{var inst_11255 = (pathInfo["key"]);var inst_11256 = {"ModelKey":inst_11255};var inst_11257 = promise.resolve(inst_11256);var state_11259__$1 = state_11259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11259__$1,inst_11257);
} else
{return null;
}
});})(c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11264 = [null,null,null,null,null,null,null];(statearr_11264[(0)] = state_machine__6178__auto__);
(statearr_11264[(1)] = (1));
return statearr_11264;
});
var state_machine__6178__auto____1 = (function (state_11259){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11259);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11265){if((e11265 instanceof Object))
{var ex__6181__auto__ = e11265;var statearr_11266_11285 = state_11259;(statearr_11266_11285[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11259);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11286 = state_11259;
state_11259 = G__11286;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11259){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise))
})();var state__6194__auto__ = (function (){var statearr_11267 = f__6193__auto__.call(null);(statearr_11267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise){
return (function (state_11274){var state_val_11275 = (state_11274[(1)]);if((state_val_11275 === (1)))
{var inst_11268 = console.log("which is not right:",which);var inst_11271 = {"ModelKey":""};var inst_11272 = promise.resolve(inst_11271);var state_11274__$1 = (function (){var statearr_11276 = state_11274;(statearr_11276[(7)] = inst_11268);
return statearr_11276;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11274__$1,inst_11272);
} else
{return null;
}
});})(c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11280 = [null,null,null,null,null,null,null,null];(statearr_11280[(0)] = state_machine__6178__auto__);
(statearr_11280[(1)] = (1));
return statearr_11280;
});
var state_machine__6178__auto____1 = (function (state_11274){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11274);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11281){if((e11281 instanceof Object))
{var ex__6181__auto__ = e11281;var statearr_11282_11287 = state_11274;(statearr_11282_11287[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11281;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11288 = state_11274;
state_11274 = G__11288;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11274){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise))
})();var state__6194__auto__ = (function (){var statearr_11283 = f__6193__auto__.call(null);(statearr_11283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__11249,expr__11250,pathInfo,which,G__11248_11284,promise))
);
return c__6192__auto__;
}
}
});})(G__11248_11284,promise))
);
G__11248_11284.fail(((function (G__11248_11284,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__11248_11284,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
app.fn.GetAllModelOnce = cljs.core.memoize.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = cljs.core.memoize.call(null,app.fn.GetHomeModelMaybeKey);
