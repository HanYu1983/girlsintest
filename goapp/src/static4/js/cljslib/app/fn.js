// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.ServeImagePath = (function ServeImagePath(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
app.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
app.fn.FetchFile = (function FetchFile(path){return $.getJSON(("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__38507_38512 = app.fn.FetchFile.call(null,path);G__38507_38512.done(((function (G__38507_38512,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__38507_38512,p){
return (function iter__38508(s__38509){return (new cljs.core.LazySeq(null,((function (G__38507_38512,p){
return (function (){var s__38509__$1 = s__38509;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38509__$1);if(temp__4126__auto__)
{var s__38509__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38509__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__38509__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__38511 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__38510 = (0);while(true){
if((i__38510 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__38510);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__38511,modelKey);
{
var G__38513 = (i__38510 + (1));
i__38510 = G__38513;
continue;
}
} else
{{
var G__38514 = (i__38510 + (1));
i__38510 = G__38514;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38511),iter__38508.call(null,cljs.core.chunk_rest.call(null,s__38509__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38511),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__38509__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,modelKey,iter__38508.call(null,cljs.core.rest.call(null,s__38509__$2)));
} else
{{
var G__38515 = cljs.core.rest.call(null,s__38509__$2);
s__38509__$1 = G__38515;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__38507_38512,p))
,null,null));
});})(G__38507_38512,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__38507_38512,p))
);
G__38507_38512.fail(((function (G__38507_38512,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__38507_38512,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__38521_38526 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__38522(s__38523){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__38523__$1 = s__38523;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38523__$1);if(temp__4126__auto__)
{var s__38523__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38523__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__38523__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__38525 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__38524 = (0);while(true){
if((i__38524 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__38524);cljs.core.chunk_append.call(null,b__38525,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__38527 = (i__38524 + (1));
i__38524 = G__38527;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38525),iter__38522.call(null,cljs.core.chunk_rest.call(null,s__38523__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38525),null);
}
} else
{var key = cljs.core.first.call(null,s__38523__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__38522.call(null,cljs.core.rest.call(null,s__38523__$2)));
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
})();G__38521_38526.done(((function (G__38521_38526,promise){
return (function() { 
var G__38528__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__38521_38526,promise){
return (function (data){return (data[(0)]);
});})(G__38521_38526,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__38528 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38528__delegate.call(this,args);};
G__38528.cljs$lang$maxFixedArity = 0;
G__38528.cljs$lang$applyTo = (function (arglist__38529){
var args = cljs.core.seq(arglist__38529);
return G__38528__delegate(args);
});
G__38528.cljs$core$IFn$_invoke$arity$variadic = G__38528__delegate;
return G__38528;
})()
;})(G__38521_38526,promise))
);
G__38521_38526.fail(((function (G__38521_38526,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__38521_38526,promise))
);
return promise;
});
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__38532_38534 = app.fn.FetchFile.call(null,configPath);G__38532_38534.done(((function (G__38532_38534,promise){
return (function (config){var pkgPath = (config[type]);var G__38533 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__38533.done(((function (G__38533,pkgPath,G__38532_38534,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__38533,pkgPath,G__38532_38534,promise))
);
G__38533.fail(((function (G__38533,pkgPath,G__38532_38534,promise){
return (function (err){return promise.reject(err);
});})(G__38533,pkgPath,G__38532_38534,promise))
);
return G__38533;
});})(G__38532_38534,promise))
);
G__38532_38534.fail(((function (G__38532_38534,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__38532_38534,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__38573_38609 = app.fn.FetchFile.call(null,configPath);G__38573_38609.done(((function (G__38573_38609,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__38574 = cljs.core._EQ_;var expr__38575 = which;if(cljs.core.truth_(pred__38574.call(null,"model",expr__38575)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__38577 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__38577.done(((function (G__38577,pathPair,where,modelKey,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise){
return (function (p1__38535_SHARP_){return promise.resolve(p1__38535_SHARP_);
});})(G__38577,pathPair,where,modelKey,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise))
);
G__38577.fail(((function (G__38577,pathPair,where,modelKey,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise){
return (function (p1__38536_SHARP_){return promise.reject(p1__38536_SHARP_);
});})(G__38577,pathPair,where,modelKey,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise))
);
return G__38577;
} else
{if(cljs.core.truth_(pred__38574.call(null,"key",expr__38575)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise){
return (function (state_38584){var state_val_38585 = (state_38584[(1)]);if((state_val_38585 === (1)))
{var inst_38580 = (pathInfo["key"]);var inst_38581 = {"ModelKey":inst_38580};var inst_38582 = promise.resolve(inst_38581);var state_38584__$1 = state_38584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38584__$1,inst_38582);
} else
{return null;
}
});})(c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_38589 = [null,null,null,null,null,null,null];(statearr_38589[(0)] = state_machine__6178__auto__);
(statearr_38589[(1)] = (1));
return statearr_38589;
});
var state_machine__6178__auto____1 = (function (state_38584){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_38584);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e38590){if((e38590 instanceof Object))
{var ex__6181__auto__ = e38590;var statearr_38591_38610 = state_38584;(statearr_38591_38610[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38584);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38611 = state_38584;
state_38584 = G__38611;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_38584){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_38584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise))
})();var state__6194__auto__ = (function (){var statearr_38592 = f__6193__auto__.call(null);(statearr_38592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_38592;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise){
return (function (state_38599){var state_val_38600 = (state_38599[(1)]);if((state_val_38600 === (1)))
{var inst_38593 = console.log("which is not right:",which);var inst_38596 = {"ModelKey":""};var inst_38597 = promise.resolve(inst_38596);var state_38599__$1 = (function (){var statearr_38601 = state_38599;(statearr_38601[(7)] = inst_38593);
return statearr_38601;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38599__$1,inst_38597);
} else
{return null;
}
});})(c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_38605 = [null,null,null,null,null,null,null,null];(statearr_38605[(0)] = state_machine__6178__auto__);
(statearr_38605[(1)] = (1));
return statearr_38605;
});
var state_machine__6178__auto____1 = (function (state_38599){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_38599);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e38606){if((e38606 instanceof Object))
{var ex__6181__auto__ = e38606;var statearr_38607_38612 = state_38599;(statearr_38607_38612[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38613 = state_38599;
state_38599 = G__38613;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_38599){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_38599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise))
})();var state__6194__auto__ = (function (){var statearr_38608 = f__6193__auto__.call(null);(statearr_38608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_38608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__38574,expr__38575,pathInfo,which,G__38573_38609,promise))
);
return c__6192__auto__;
}
}
});})(G__38573_38609,promise))
);
G__38573_38609.fail(((function (G__38573_38609,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__38573_38609,promise))
);
return promise;
});
