// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
app.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
app.fn.FetchFile = (function FetchFile(path){return $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__12229_12234 = app.fn.FetchFile.call(null,path);G__12229_12234.done(((function (G__12229_12234,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__12229_12234,p){
return (function iter__12230(s__12231){return (new cljs.core.LazySeq(null,((function (G__12229_12234,p){
return (function (){var s__12231__$1 = s__12231;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12231__$1);if(temp__4126__auto__)
{var s__12231__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12231__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12231__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12233 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12232 = (0);while(true){
if((i__12232 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__12232);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__12233,modelKey);
{
var G__12235 = (i__12232 + (1));
i__12232 = G__12235;
continue;
}
} else
{{
var G__12236 = (i__12232 + (1));
i__12232 = G__12236;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12233),iter__12230.call(null,cljs.core.chunk_rest.call(null,s__12231__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12233),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__12231__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__12230.call(null,cljs.core.rest.call(null,s__12231__$2)));
} else
{{
var G__12237 = cljs.core.rest.call(null,s__12231__$2);
s__12231__$1 = G__12237;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__12229_12234,p))
,null,null));
});})(G__12229_12234,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__12229_12234,p))
);
G__12229_12234.fail(((function (G__12229_12234,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__12229_12234,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__12243_12248 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__12244(s__12245){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__12245__$1 = s__12245;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12245__$1);if(temp__4126__auto__)
{var s__12245__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12245__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12245__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12247 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12246 = (0);while(true){
if((i__12246 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__12246);cljs.core.chunk_append.call(null,b__12247,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__12249 = (i__12246 + (1));
i__12246 = G__12249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12247),iter__12244.call(null,cljs.core.chunk_rest.call(null,s__12245__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12247),null);
}
} else
{var key = cljs.core.first.call(null,s__12245__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__12244.call(null,cljs.core.rest.call(null,s__12245__$2)));
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
})();G__12243_12248.done(((function (G__12243_12248,promise){
return (function() { 
var G__12250__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__12243_12248,promise){
return (function (data){return (data[(0)]);
});})(G__12243_12248,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__12250 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12250__delegate.call(this,args);};
G__12250.cljs$lang$maxFixedArity = 0;
G__12250.cljs$lang$applyTo = (function (arglist__12251){
var args = cljs.core.seq(arglist__12251);
return G__12250__delegate(args);
});
G__12250.cljs$core$IFn$_invoke$arity$variadic = G__12250__delegate;
return G__12250;
})()
;})(G__12243_12248,promise))
);
G__12243_12248.fail(((function (G__12243_12248,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__12243_12248,promise))
);
return promise;
});
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__12254_12256 = app.fn.FetchFile.call(null,configPath);G__12254_12256.done(((function (G__12254_12256,promise){
return (function (config){var pkgPath = (config[type]);var G__12255 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__12255.done(((function (G__12255,pkgPath,G__12254_12256,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__12255,pkgPath,G__12254_12256,promise))
);
G__12255.fail(((function (G__12255,pkgPath,G__12254_12256,promise){
return (function (err){return promise.reject(err);
});})(G__12255,pkgPath,G__12254_12256,promise))
);
return G__12255;
});})(G__12254_12256,promise))
);
G__12254_12256.fail(((function (G__12254_12256,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__12254_12256,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__12295_12331 = app.fn.FetchFile.call(null,configPath);G__12295_12331.done(((function (G__12295_12331,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__12296 = cljs.core._EQ_;var expr__12297 = which;if(cljs.core.truth_(pred__12296.call(null,"model",expr__12297)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__12299 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__12299.done(((function (G__12299,pathPair,where,modelKey,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise){
return (function (p1__12257_SHARP_){return promise.resolve(p1__12257_SHARP_);
});})(G__12299,pathPair,where,modelKey,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise))
);
G__12299.fail(((function (G__12299,pathPair,where,modelKey,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise){
return (function (p1__12258_SHARP_){return promise.reject(p1__12258_SHARP_);
});})(G__12299,pathPair,where,modelKey,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise))
);
return G__12299;
} else
{if(cljs.core.truth_(pred__12296.call(null,"key",expr__12297)))
{var c__6323__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise){
return (function (){var f__6324__auto__ = (function (){var switch__6308__auto__ = ((function (c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise){
return (function (state_12306){var state_val_12307 = (state_12306[(1)]);if((state_val_12307 === (1)))
{var inst_12302 = (pathInfo["key"]);var inst_12303 = {"ModelKey":inst_12302};var inst_12304 = promise.resolve(inst_12303);var state_12306__$1 = state_12306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12306__$1,inst_12304);
} else
{return null;
}
});})(c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise))
;return ((function (switch__6308__auto__,c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise){
return (function() {
var state_machine__6309__auto__ = null;
var state_machine__6309__auto____0 = (function (){var statearr_12311 = [null,null,null,null,null,null,null];(statearr_12311[(0)] = state_machine__6309__auto__);
(statearr_12311[(1)] = (1));
return statearr_12311;
});
var state_machine__6309__auto____1 = (function (state_12306){while(true){
var ret_value__6310__auto__ = (function (){try{while(true){
var result__6311__auto__ = switch__6308__auto__.call(null,state_12306);if(cljs.core.keyword_identical_QMARK_.call(null,result__6311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6311__auto__;
}
break;
}
}catch (e12312){if((e12312 instanceof Object))
{var ex__6312__auto__ = e12312;var statearr_12313_12332 = state_12306;(statearr_12313_12332[(5)] = ex__6312__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12333 = state_12306;
state_12306 = G__12333;
continue;
}
} else
{return ret_value__6310__auto__;
}
break;
}
});
state_machine__6309__auto__ = function(state_12306){
switch(arguments.length){
case 0:
return state_machine__6309__auto____0.call(this);
case 1:
return state_machine__6309__auto____1.call(this,state_12306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6309__auto____0;
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6309__auto____1;
return state_machine__6309__auto__;
})()
;})(switch__6308__auto__,c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise))
})();var state__6325__auto__ = (function (){var statearr_12314 = f__6324__auto__.call(null);(statearr_12314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6323__auto__);
return statearr_12314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6325__auto__);
});})(c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise))
);
return c__6323__auto__;
} else
{var c__6323__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise){
return (function (){var f__6324__auto__ = (function (){var switch__6308__auto__ = ((function (c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise){
return (function (state_12321){var state_val_12322 = (state_12321[(1)]);if((state_val_12322 === (1)))
{var inst_12315 = console.log("which is not right:",which);var inst_12318 = {"ModelKey":""};var inst_12319 = promise.resolve(inst_12318);var state_12321__$1 = (function (){var statearr_12323 = state_12321;(statearr_12323[(7)] = inst_12315);
return statearr_12323;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12321__$1,inst_12319);
} else
{return null;
}
});})(c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise))
;return ((function (switch__6308__auto__,c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise){
return (function() {
var state_machine__6309__auto__ = null;
var state_machine__6309__auto____0 = (function (){var statearr_12327 = [null,null,null,null,null,null,null,null];(statearr_12327[(0)] = state_machine__6309__auto__);
(statearr_12327[(1)] = (1));
return statearr_12327;
});
var state_machine__6309__auto____1 = (function (state_12321){while(true){
var ret_value__6310__auto__ = (function (){try{while(true){
var result__6311__auto__ = switch__6308__auto__.call(null,state_12321);if(cljs.core.keyword_identical_QMARK_.call(null,result__6311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6311__auto__;
}
break;
}
}catch (e12328){if((e12328 instanceof Object))
{var ex__6312__auto__ = e12328;var statearr_12329_12334 = state_12321;(statearr_12329_12334[(5)] = ex__6312__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12321);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12335 = state_12321;
state_12321 = G__12335;
continue;
}
} else
{return ret_value__6310__auto__;
}
break;
}
});
state_machine__6309__auto__ = function(state_12321){
switch(arguments.length){
case 0:
return state_machine__6309__auto____0.call(this);
case 1:
return state_machine__6309__auto____1.call(this,state_12321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6309__auto____0;
state_machine__6309__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6309__auto____1;
return state_machine__6309__auto__;
})()
;})(switch__6308__auto__,c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise))
})();var state__6325__auto__ = (function (){var statearr_12330 = f__6324__auto__.call(null);(statearr_12330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6323__auto__);
return statearr_12330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6325__auto__);
});})(c__6323__auto__,pred__12296,expr__12297,pathInfo,which,G__12295_12331,promise))
);
return c__6323__auto__;
}
}
});})(G__12295_12331,promise))
);
G__12295_12331.fail(((function (G__12295_12331,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__12295_12331,promise))
);
return promise;
});
app.fn.GetHomeModel = cljs.core.memoize.call(null,app.fn.GetHomeModel);
