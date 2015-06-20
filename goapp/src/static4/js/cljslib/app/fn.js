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
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__21684_21689 = app.fn.FetchFile.call(null,path);G__21684_21689.done(((function (G__21684_21689,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__21684_21689,p){
return (function iter__21685(s__21686){return (new cljs.core.LazySeq(null,((function (G__21684_21689,p){
return (function (){var s__21686__$1 = s__21686;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21686__$1);if(temp__4126__auto__)
{var s__21686__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21686__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__21686__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__21688 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__21687 = (0);while(true){
if((i__21687 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__21687);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__21688,encodeURIComponent(modelKey));
{
var G__21690 = (i__21687 + (1));
i__21687 = G__21690;
continue;
}
} else
{{
var G__21691 = (i__21687 + (1));
i__21687 = G__21691;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21688),iter__21685.call(null,cljs.core.chunk_rest.call(null,s__21686__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21688),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__21686__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__21685.call(null,cljs.core.rest.call(null,s__21686__$2)));
} else
{{
var G__21692 = cljs.core.rest.call(null,s__21686__$2);
s__21686__$1 = G__21692;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__21684_21689,p))
,null,null));
});})(G__21684_21689,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__21684_21689,p))
);
G__21684_21689.fail(((function (G__21684_21689,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__21684_21689,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__21698_21703 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__21699(s__21700){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__21700__$1 = s__21700;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21700__$1);if(temp__4126__auto__)
{var s__21700__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21700__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__21700__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__21702 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__21701 = (0);while(true){
if((i__21701 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__21701);cljs.core.chunk_append.call(null,b__21702,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__21704 = (i__21701 + (1));
i__21701 = G__21704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21702),iter__21699.call(null,cljs.core.chunk_rest.call(null,s__21700__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21702),null);
}
} else
{var key = cljs.core.first.call(null,s__21700__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__21699.call(null,cljs.core.rest.call(null,s__21700__$2)));
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
})();G__21698_21703.done(((function (G__21698_21703,promise){
return (function() { 
var G__21705__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__21698_21703,promise){
return (function (data){return (data[(0)]);
});})(G__21698_21703,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__21705 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21705__delegate.call(this,args);};
G__21705.cljs$lang$maxFixedArity = 0;
G__21705.cljs$lang$applyTo = (function (arglist__21706){
var args = cljs.core.seq(arglist__21706);
return G__21705__delegate(args);
});
G__21705.cljs$core$IFn$_invoke$arity$variadic = G__21705__delegate;
return G__21705;
})()
;})(G__21698_21703,promise))
);
G__21698_21703.fail(((function (G__21698_21703,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__21698_21703,promise))
);
return promise;
});
/**
* 多次request
*/
app.fn.GetAllModelBy = (function GetAllModelBy(configPath,type){var promise = (new $.Deferred());var G__21709_21711 = app.fn.FetchFile.call(null,configPath);G__21709_21711.done(((function (G__21709_21711,promise){
return (function (config){var pkgPath = (config[type]);var G__21710 = app.fn.FetchModelKeyList.call(null,pkgPath).pipe(cljs.core.partial.call(null,app.fn.FetchAllModel,pkgPath));G__21710.done(((function (G__21710,pkgPath,G__21709_21711,promise){
return (function (ret){return promise.resolve(config,ret);
});})(G__21710,pkgPath,G__21709_21711,promise))
);
G__21710.fail(((function (G__21710,pkgPath,G__21709_21711,promise){
return (function (err){return promise.reject(err);
});})(G__21710,pkgPath,G__21709_21711,promise))
);
return G__21710;
});})(G__21709_21711,promise))
);
G__21709_21711.fail(((function (G__21709_21711,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__21709_21711,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__21714_21716 = app.fn.FetchFile.call(null,configPath);G__21714_21716.done(((function (G__21714_21716,promise){
return (function (config){var pkgPath = (config[type]);var G__21715 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__21715.done(((function (G__21715,pkgPath,G__21714_21716,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__21715,pkgPath,G__21714_21716,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__21715,pkgPath,G__21714_21716,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__21715,pkgPath,G__21714_21716,promise))
);
G__21715.fail(((function (G__21715,pkgPath,G__21714_21716,promise){
return (function (err){return promise.reject(err);
});})(G__21715,pkgPath,G__21714_21716,promise))
);
return G__21715;
});})(G__21714_21716,promise))
);
G__21714_21716.fail(((function (G__21714_21716,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__21714_21716,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__21755_21791 = app.fn.FetchFile.call(null,configPath);G__21755_21791.done(((function (G__21755_21791,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__21756 = cljs.core._EQ_;var expr__21757 = which;if(cljs.core.truth_(pred__21756.call(null,"model",expr__21757)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__21759 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__21759.done(((function (G__21759,pathPair,where,modelKey,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise){
return (function (p1__21717_SHARP_){return promise.resolve(p1__21717_SHARP_);
});})(G__21759,pathPair,where,modelKey,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise))
);
G__21759.fail(((function (G__21759,pathPair,where,modelKey,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise){
return (function (p1__21718_SHARP_){return promise.reject(p1__21718_SHARP_);
});})(G__21759,pathPair,where,modelKey,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise))
);
return G__21759;
} else
{if(cljs.core.truth_(pred__21756.call(null,"key",expr__21757)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise){
return (function (state_21766){var state_val_21767 = (state_21766[(1)]);if((state_val_21767 === (1)))
{var inst_21762 = (pathInfo["key"]);var inst_21763 = {"ModelKey":inst_21762};var inst_21764 = promise.resolve(inst_21763);var state_21766__$1 = state_21766;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21766__$1,inst_21764);
} else
{return null;
}
});})(c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21771 = [null,null,null,null,null,null,null];(statearr_21771[(0)] = state_machine__6178__auto__);
(statearr_21771[(1)] = (1));
return statearr_21771;
});
var state_machine__6178__auto____1 = (function (state_21766){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21766);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21772){if((e21772 instanceof Object))
{var ex__6181__auto__ = e21772;var statearr_21773_21792 = state_21766;(statearr_21773_21792[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21766);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21793 = state_21766;
state_21766 = G__21793;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21766){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise))
})();var state__6194__auto__ = (function (){var statearr_21774 = f__6193__auto__.call(null);(statearr_21774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise){
return (function (state_21781){var state_val_21782 = (state_21781[(1)]);if((state_val_21782 === (1)))
{var inst_21775 = console.log("which is not right:",which);var inst_21778 = {"ModelKey":""};var inst_21779 = promise.resolve(inst_21778);var state_21781__$1 = (function (){var statearr_21783 = state_21781;(statearr_21783[(7)] = inst_21775);
return statearr_21783;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21781__$1,inst_21779);
} else
{return null;
}
});})(c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_21787 = [null,null,null,null,null,null,null,null];(statearr_21787[(0)] = state_machine__6178__auto__);
(statearr_21787[(1)] = (1));
return statearr_21787;
});
var state_machine__6178__auto____1 = (function (state_21781){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_21781);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e21788){if((e21788 instanceof Object))
{var ex__6181__auto__ = e21788;var statearr_21789_21794 = state_21781;(statearr_21789_21794[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21781);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21795 = state_21781;
state_21781 = G__21795;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_21781){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_21781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise))
})();var state__6194__auto__ = (function (){var statearr_21790 = f__6193__auto__.call(null);(statearr_21790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_21790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__21756,expr__21757,pathInfo,which,G__21755_21791,promise))
);
return c__6192__auto__;
}
}
});})(G__21755_21791,promise))
);
G__21755_21791.fail(((function (G__21755_21791,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__21755_21791,promise))
);
return promise;
});
app.fn.GetAllModelBy = cljs.core.memoize.call(null,app.fn.GetAllModelBy);
app.fn.GetAllModelOnce = cljs.core.memoize.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = cljs.core.memoize.call(null,app.fn.GetHomeModelMaybeKey);
