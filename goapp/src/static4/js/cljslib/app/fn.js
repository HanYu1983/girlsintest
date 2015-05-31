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
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__15865_15870 = app.fn.FetchFile.call(null,path);G__15865_15870.done(((function (G__15865_15870,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__15865_15870,p){
return (function iter__15866(s__15867){return (new cljs.core.LazySeq(null,((function (G__15865_15870,p){
return (function (){var s__15867__$1 = s__15867;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15867__$1);if(temp__4126__auto__)
{var s__15867__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15867__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__15867__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__15869 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__15868 = (0);while(true){
if((i__15868 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__15868);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__15869,encodeURIComponent(modelKey));
{
var G__15871 = (i__15868 + (1));
i__15868 = G__15871;
continue;
}
} else
{{
var G__15872 = (i__15868 + (1));
i__15868 = G__15872;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15869),iter__15866.call(null,cljs.core.chunk_rest.call(null,s__15867__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15869),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__15867__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__15866.call(null,cljs.core.rest.call(null,s__15867__$2)));
} else
{{
var G__15873 = cljs.core.rest.call(null,s__15867__$2);
s__15867__$1 = G__15873;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__15865_15870,p))
,null,null));
});})(G__15865_15870,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__15865_15870,p))
);
G__15865_15870.fail(((function (G__15865_15870,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__15865_15870,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__15879_15884 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__15880(s__15881){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__15881__$1 = s__15881;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15881__$1);if(temp__4126__auto__)
{var s__15881__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15881__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__15881__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__15883 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__15882 = (0);while(true){
if((i__15882 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__15882);cljs.core.chunk_append.call(null,b__15883,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__15885 = (i__15882 + (1));
i__15882 = G__15885;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15883),iter__15880.call(null,cljs.core.chunk_rest.call(null,s__15881__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15883),null);
}
} else
{var key = cljs.core.first.call(null,s__15881__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__15880.call(null,cljs.core.rest.call(null,s__15881__$2)));
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
})();G__15879_15884.done(((function (G__15879_15884,promise){
return (function() { 
var G__15886__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__15879_15884,promise){
return (function (data){return (data[(0)]);
});})(G__15879_15884,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__15886 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15886__delegate.call(this,args);};
G__15886.cljs$lang$maxFixedArity = 0;
G__15886.cljs$lang$applyTo = (function (arglist__15887){
var args = cljs.core.seq(arglist__15887);
return G__15886__delegate(args);
});
G__15886.cljs$core$IFn$_invoke$arity$variadic = G__15886__delegate;
return G__15886;
})()
;})(G__15879_15884,promise))
);
G__15879_15884.fail(((function (G__15879_15884,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__15879_15884,promise))
);
return promise;
});
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__15890_15892 = app.fn.FetchFile.call(null,configPath);G__15890_15892.done(((function (G__15890_15892,promise){
return (function (config){var pkgPath = (config[type]);var G__15891 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__15891.done(((function (G__15891,pkgPath,G__15890_15892,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__15891,pkgPath,G__15890_15892,promise))
);
G__15891.fail(((function (G__15891,pkgPath,G__15890_15892,promise){
return (function (err){return promise.reject(err);
});})(G__15891,pkgPath,G__15890_15892,promise))
);
return G__15891;
});})(G__15890_15892,promise))
);
G__15890_15892.fail(((function (G__15890_15892,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__15890_15892,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__15931_15967 = app.fn.FetchFile.call(null,configPath);G__15931_15967.done(((function (G__15931_15967,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__15932 = cljs.core._EQ_;var expr__15933 = which;if(cljs.core.truth_(pred__15932.call(null,"model",expr__15933)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__15935 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__15935.done(((function (G__15935,pathPair,where,modelKey,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise){
return (function (p1__15893_SHARP_){return promise.resolve(p1__15893_SHARP_);
});})(G__15935,pathPair,where,modelKey,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise))
);
G__15935.fail(((function (G__15935,pathPair,where,modelKey,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise){
return (function (p1__15894_SHARP_){return promise.reject(p1__15894_SHARP_);
});})(G__15935,pathPair,where,modelKey,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise))
);
return G__15935;
} else
{if(cljs.core.truth_(pred__15932.call(null,"key",expr__15933)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise){
return (function (state_15942){var state_val_15943 = (state_15942[(1)]);if((state_val_15943 === (1)))
{var inst_15938 = (pathInfo["key"]);var inst_15939 = {"ModelKey":inst_15938};var inst_15940 = promise.resolve(inst_15939);var state_15942__$1 = state_15942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15942__$1,inst_15940);
} else
{return null;
}
});})(c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15947 = [null,null,null,null,null,null,null];(statearr_15947[(0)] = state_machine__6178__auto__);
(statearr_15947[(1)] = (1));
return statearr_15947;
});
var state_machine__6178__auto____1 = (function (state_15942){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15942);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15948){if((e15948 instanceof Object))
{var ex__6181__auto__ = e15948;var statearr_15949_15968 = state_15942;(statearr_15949_15968[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15969 = state_15942;
state_15942 = G__15969;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15942){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise))
})();var state__6194__auto__ = (function (){var statearr_15950 = f__6193__auto__.call(null);(statearr_15950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise){
return (function (state_15957){var state_val_15958 = (state_15957[(1)]);if((state_val_15958 === (1)))
{var inst_15951 = console.log("which is not right:",which);var inst_15954 = {"ModelKey":""};var inst_15955 = promise.resolve(inst_15954);var state_15957__$1 = (function (){var statearr_15959 = state_15957;(statearr_15959[(7)] = inst_15951);
return statearr_15959;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15957__$1,inst_15955);
} else
{return null;
}
});})(c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_15963 = [null,null,null,null,null,null,null,null];(statearr_15963[(0)] = state_machine__6178__auto__);
(statearr_15963[(1)] = (1));
return statearr_15963;
});
var state_machine__6178__auto____1 = (function (state_15957){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15957);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15964){if((e15964 instanceof Object))
{var ex__6181__auto__ = e15964;var statearr_15965_15970 = state_15957;(statearr_15965_15970[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15957);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15971 = state_15957;
state_15957 = G__15971;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15957){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise))
})();var state__6194__auto__ = (function (){var statearr_15966 = f__6193__auto__.call(null);(statearr_15966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__15932,expr__15933,pathInfo,which,G__15931_15967,promise))
);
return c__6192__auto__;
}
}
});})(G__15931_15967,promise))
);
G__15931_15967.fail(((function (G__15931_15967,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__15931_15967,promise))
);
return promise;
});
