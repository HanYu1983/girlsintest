// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.cache = (function cache(f){var c = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (c){
return (function() { 
var G__14240__delegate = function (args){var p = $.Deferred();var ckey = cljs.core.keyword.call(null,cljs.core.pr_str.call(null,args));var ret = cljs.core.get.call(null,cljs.core.deref.call(null,c),ckey);if(cljs.core.truth_(ret))
{return p.resolve((ret[(0)]),(ret[(1)]),(ret[(2)]));
} else
{var G__14239 = cljs.core.apply.call(null,f,args);G__14239.done(((function (G__14239,p,ckey,ret,c){
return (function (){cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,ckey,[(arguments[(0)]),(arguments[(1)]),(arguments[(2)])]);
return p.resolve((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));
});})(G__14239,p,ckey,ret,c))
);
G__14239.fail(((function (G__14239,p,ckey,ret,c){
return (function (p1__14237_SHARP_){return p.reject(p1__14237_SHARP_);
});})(G__14239,p,ckey,ret,c))
);
return G__14239;
}
};
var G__14240 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14240__delegate.call(this,args);};
G__14240.cljs$lang$maxFixedArity = 0;
G__14240.cljs$lang$applyTo = (function (arglist__14241){
var args = cljs.core.seq(arglist__14241);
return G__14240__delegate(args);
});
G__14240.cljs$core$IFn$_invoke$arity$variadic = G__14240__delegate;
return G__14240;
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
app.fn.ServeImagePathWH = (function ServeImagePathWH(path,w,h){return ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)+"&Height="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h));
});
app.fn.FetchFile = (function FetchFile(path){return $.getJSON(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__14247_14252 = app.fn.FetchFile.call(null,path);G__14247_14252.done(((function (G__14247_14252,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__14247_14252,p){
return (function iter__14248(s__14249){return (new cljs.core.LazySeq(null,((function (G__14247_14252,p){
return (function (){var s__14249__$1 = s__14249;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14249__$1);if(temp__4126__auto__)
{var s__14249__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14249__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14249__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14251 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14250 = (0);while(true){
if((i__14250 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__14250);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__14251,encodeURIComponent(modelKey));
{
var G__14253 = (i__14250 + (1));
i__14250 = G__14253;
continue;
}
} else
{{
var G__14254 = (i__14250 + (1));
i__14250 = G__14254;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14251),iter__14248.call(null,cljs.core.chunk_rest.call(null,s__14249__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14251),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__14249__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__14248.call(null,cljs.core.rest.call(null,s__14249__$2)));
} else
{{
var G__14255 = cljs.core.rest.call(null,s__14249__$2);
s__14249__$1 = G__14255;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__14247_14252,p))
,null,null));
});})(G__14247_14252,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__14247_14252,p))
);
G__14247_14252.fail(((function (G__14247_14252,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__14247_14252,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__14261_14266 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__14262(s__14263){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__14263__$1 = s__14263;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14263__$1);if(temp__4126__auto__)
{var s__14263__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14263__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14263__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14265 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14264 = (0);while(true){
if((i__14264 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__14264);cljs.core.chunk_append.call(null,b__14265,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__14267 = (i__14264 + (1));
i__14264 = G__14267;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14265),iter__14262.call(null,cljs.core.chunk_rest.call(null,s__14263__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14265),null);
}
} else
{var key = cljs.core.first.call(null,s__14263__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__14262.call(null,cljs.core.rest.call(null,s__14263__$2)));
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
})();G__14261_14266.done(((function (G__14261_14266,promise){
return (function() { 
var G__14268__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__14261_14266,promise){
return (function (data){return (data[(0)]);
});})(G__14261_14266,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__14268 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14268__delegate.call(this,args);};
G__14268.cljs$lang$maxFixedArity = 0;
G__14268.cljs$lang$applyTo = (function (arglist__14269){
var args = cljs.core.seq(arglist__14269);
return G__14268__delegate(args);
});
G__14268.cljs$core$IFn$_invoke$arity$variadic = G__14268__delegate;
return G__14268;
})()
;})(G__14261_14266,promise))
);
G__14261_14266.fail(((function (G__14261_14266,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__14261_14266,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__14272_14274 = app.fn.FetchFile.call(null,configPath);G__14272_14274.done(((function (G__14272_14274,promise){
return (function (config){var pkgPath = (config[type]);var G__14273 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__14273.done(((function (G__14273,pkgPath,G__14272_14274,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__14273,pkgPath,G__14272_14274,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__14273,pkgPath,G__14272_14274,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__14273,pkgPath,G__14272_14274,promise))
);
G__14273.fail(((function (G__14273,pkgPath,G__14272_14274,promise){
return (function (err){return promise.reject(err);
});})(G__14273,pkgPath,G__14272_14274,promise))
);
return G__14273;
});})(G__14272_14274,promise))
);
G__14272_14274.fail(((function (G__14272_14274,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__14272_14274,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__14313_14349 = app.fn.FetchFile.call(null,configPath);G__14313_14349.done(((function (G__14313_14349,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__14314 = cljs.core._EQ_;var expr__14315 = which;if(cljs.core.truth_(pred__14314.call(null,"model",expr__14315)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__14317 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__14317.done(((function (G__14317,pathPair,where,modelKey,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise){
return (function (p1__14275_SHARP_){return promise.resolve(where,modelKey,p1__14275_SHARP_);
});})(G__14317,pathPair,where,modelKey,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise))
);
G__14317.fail(((function (G__14317,pathPair,where,modelKey,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise){
return (function (p1__14276_SHARP_){return promise.reject(p1__14276_SHARP_);
});})(G__14317,pathPair,where,modelKey,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise))
);
return G__14317;
} else
{if(cljs.core.truth_(pred__14314.call(null,"key",expr__14315)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise){
return (function (state_14324){var state_val_14325 = (state_14324[(1)]);if((state_val_14325 === (1)))
{var inst_14320 = (pathInfo["key"]);var inst_14321 = {"ModelKey":inst_14320};var inst_14322 = promise.resolve(inst_14321);var state_14324__$1 = state_14324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14324__$1,inst_14322);
} else
{return null;
}
});})(c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14329 = [null,null,null,null,null,null,null];(statearr_14329[(0)] = state_machine__6178__auto__);
(statearr_14329[(1)] = (1));
return statearr_14329;
});
var state_machine__6178__auto____1 = (function (state_14324){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14324);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14330){if((e14330 instanceof Object))
{var ex__6181__auto__ = e14330;var statearr_14331_14350 = state_14324;(statearr_14331_14350[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14324);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14351 = state_14324;
state_14324 = G__14351;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14324){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise))
})();var state__6194__auto__ = (function (){var statearr_14332 = f__6193__auto__.call(null);(statearr_14332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise){
return (function (state_14339){var state_val_14340 = (state_14339[(1)]);if((state_val_14340 === (1)))
{var inst_14333 = console.log("which is not right:",which);var inst_14336 = {"ModelKey":""};var inst_14337 = promise.resolve(inst_14336);var state_14339__$1 = (function (){var statearr_14341 = state_14339;(statearr_14341[(7)] = inst_14333);
return statearr_14341;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14339__$1,inst_14337);
} else
{return null;
}
});})(c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14345 = [null,null,null,null,null,null,null,null];(statearr_14345[(0)] = state_machine__6178__auto__);
(statearr_14345[(1)] = (1));
return statearr_14345;
});
var state_machine__6178__auto____1 = (function (state_14339){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14339);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14346){if((e14346 instanceof Object))
{var ex__6181__auto__ = e14346;var statearr_14347_14352 = state_14339;(statearr_14347_14352[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14339);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14353 = state_14339;
state_14339 = G__14353;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14339){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise))
})();var state__6194__auto__ = (function (){var statearr_14348 = f__6193__auto__.call(null);(statearr_14348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__14314,expr__14315,pathInfo,which,G__14313_14349,promise))
);
return c__6192__auto__;
}
}
});})(G__14313_14349,promise))
);
G__14313_14349.fail(((function (G__14313_14349,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__14313_14349,promise))
);
return promise;
});
app.fn.GetAllModelOnce = app.fn.cache.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = app.fn.cache.call(null,app.fn.GetHomeModelMaybeKey);
