// Compiled by ClojureScript 0.0-2268
goog.provide('app.fn');
goog.require('cljs.core');
app.fn.cache = (function cache(f){var c = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (c){
return (function() { 
var G__11696__delegate = function (args){var p = $.Deferred();var ckey = cljs.core.keyword.call(null,cljs.core.pr_str.call(null,args));var ret = cljs.core.get.call(null,cljs.core.deref.call(null,c),ckey);if(cljs.core.truth_(ret))
{return p.resolve((ret[(0)]),(ret[(1)]),(ret[(2)]));
} else
{var G__11695 = cljs.core.apply.call(null,f,args);G__11695.done(((function (G__11695,p,ckey,ret,c){
return (function (){cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,ckey,[(arguments[(0)]),(arguments[(1)]),(arguments[(2)])]);
return p.resolve((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));
});})(G__11695,p,ckey,ret,c))
);
G__11695.fail(((function (G__11695,p,ckey,ret,c){
return (function (p1__11693_SHARP_){return p.reject(p1__11693_SHARP_);
});})(G__11695,p,ckey,ret,c))
);
return G__11695;
}
};
var G__11696 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11696__delegate.call(this,args);};
G__11696.cljs$lang$maxFixedArity = 0;
G__11696.cljs$lang$applyTo = (function (arglist__11697){
var args = cljs.core.seq(arglist__11697);
return G__11696__delegate(args);
});
G__11696.cljs$core$IFn$_invoke$arity$variadic = G__11696__delegate;
return G__11696;
})()
;
;})(c))
});
app.fn.encodePath = (function encodePath(path){return _.map(path.split("/"),encodeURIComponent).join("/");
});
app.fn.ServeImagePath = (function ServeImagePath(path){return ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/goapp/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});
app.fn.ServeImagePath100 = (function ServeImagePath100(path){return ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/goapp/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+(100)+"&Height="+(100));
});
app.fn.ServeImagePathWH = (function ServeImagePathWH(path,w,h){return ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/goapp/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?Width="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)+"&Height="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h));
});
app.fn.FetchFile = (function FetchFile(path){return $.getJSON(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/goapp/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
});
app.fn.FetchModelKeyList = (function FetchModelKeyList(path){var p = (new $.Deferred());var G__11703_11708 = app.fn.FetchFile.call(null,path);G__11703_11708.done(((function (G__11703_11708,p){
return (function (data){var keylist = (function (){var iter__4276__auto__ = ((function (G__11703_11708,p){
return (function iter__11704(s__11705){return (new cljs.core.LazySeq(null,((function (G__11703_11708,p){
return (function (){var s__11705__$1 = s__11705;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11705__$1);if(temp__4126__auto__)
{var s__11705__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11705__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11705__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11707 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11706 = (0);while(true){
if((i__11706 < size__4275__auto__))
{var modelKey = cljs.core._nth.call(null,c__4274__auto__,i__11706);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{cljs.core.chunk_append.call(null,b__11707,encodeURIComponent(modelKey));
{
var G__11709 = (i__11706 + (1));
i__11706 = G__11709;
continue;
}
} else
{{
var G__11710 = (i__11706 + (1));
i__11706 = G__11710;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11707),iter__11704.call(null,cljs.core.chunk_rest.call(null,s__11705__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11707),null);
}
} else
{var modelKey = cljs.core.first.call(null,s__11705__$2);if(cljs.core.not_EQ_.call(null,modelKey,"config.json"))
{return cljs.core.cons.call(null,encodeURIComponent(modelKey),iter__11704.call(null,cljs.core.rest.call(null,s__11705__$2)));
} else
{{
var G__11711 = cljs.core.rest.call(null,s__11705__$2);
s__11705__$1 = G__11711;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__11703_11708,p))
,null,null));
});})(G__11703_11708,p))
;return iter__4276__auto__.call(null,data);
})();return p.resolve(keylist);
});})(G__11703_11708,p))
);
G__11703_11708.fail(((function (G__11703_11708,p){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__11703_11708,p))
);
return p;
});
app.fn.FetchAllModel = (function FetchAllModel(path,keys){var promise = (new $.Deferred());var G__11717_11722 = (function (){var fetchFilePromise = cljs.core.apply.call(null,cljs.core.array,(function (){var iter__4276__auto__ = ((function (promise){
return (function iter__11718(s__11719){return (new cljs.core.LazySeq(null,((function (promise){
return (function (){var s__11719__$1 = s__11719;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11719__$1);if(temp__4126__auto__)
{var s__11719__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11719__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11719__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11721 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11720 = (0);while(true){
if((i__11720 < size__4275__auto__))
{var key = cljs.core._nth.call(null,c__4274__auto__,i__11720);cljs.core.chunk_append.call(null,b__11721,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")));
{
var G__11723 = (i__11720 + (1));
i__11720 = G__11723;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11721),iter__11718.call(null,cljs.core.chunk_rest.call(null,s__11719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11721),null);
}
} else
{var key = cljs.core.first.call(null,s__11719__$2);return cljs.core.cons.call(null,app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+"/config.json")),iter__11718.call(null,cljs.core.rest.call(null,s__11719__$2)));
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
})();G__11717_11722.done(((function (G__11717_11722,promise){
return (function() { 
var G__11724__delegate = function (args){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,keys)))
{var detail = cljs.core.first.call(null,args);return promise.resolve(new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,keys),detail], true, false));
} else
{var details = cljs.core.map.call(null,((function (G__11717_11722,promise){
return (function (data){return (data[(0)]);
});})(G__11717_11722,promise))
,args);return promise.resolve(cljs.core.zipmap.call(null,keys,details));
}
};
var G__11724 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11724__delegate.call(this,args);};
G__11724.cljs$lang$maxFixedArity = 0;
G__11724.cljs$lang$applyTo = (function (arglist__11725){
var args = cljs.core.seq(arglist__11725);
return G__11724__delegate(args);
});
G__11724.cljs$core$IFn$_invoke$arity$variadic = G__11724__delegate;
return G__11724;
})()
;})(G__11717_11722,promise))
);
G__11717_11722.fail(((function (G__11717_11722,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__11717_11722,promise))
);
return promise;
});
/**
* 一次request
*/
app.fn.GetAllModelOnce = (function GetAllModelOnce(configPath,type){var promise = (new $.Deferred());var G__11728_11730 = app.fn.FetchFile.call(null,configPath);G__11728_11730.done(((function (G__11728_11730,promise){
return (function (config){var pkgPath = (config[type]);var G__11729 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgPath)+"/?Path=config.json"));G__11729.done(((function (G__11729,pkgPath,G__11728_11730,promise){
return (function (ret){var ident = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var process = _.mapObject(ret,((function (ident,G__11729,pkgPath,G__11728_11730,promise){
return (function (v,k){return cljs.core.swap_BANG_.call(null,ident,cljs.core.assoc,k,v);
});})(ident,G__11729,pkgPath,G__11728_11730,promise))
);return promise.resolve(config,cljs.core.deref.call(null,ident));
});})(G__11729,pkgPath,G__11728_11730,promise))
);
G__11729.fail(((function (G__11729,pkgPath,G__11728_11730,promise){
return (function (err){return promise.reject(err);
});})(G__11729,pkgPath,G__11728_11730,promise))
);
return G__11729;
});})(G__11728_11730,promise))
);
G__11728_11730.fail(((function (G__11728_11730,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__11728_11730,promise))
);
return promise;
});
/**
* 用來取得首頁的3D-Key
*/
app.fn.GetHomeModelMaybeKey = (function GetHomeModelMaybeKey(configPath){var promise = (new $.Deferred());var G__11769_11805 = app.fn.FetchFile.call(null,configPath);G__11769_11805.done(((function (G__11769_11805,promise){
return (function (config){var pathInfo = (config["app"]["home-model-key"]);var which = (pathInfo["which"]);var pred__11770 = cljs.core._EQ_;var expr__11771 = which;if(cljs.core.truth_(pred__11770.call(null,"model",expr__11771)))
{var pathPair = (pathInfo["model"]);var where = (config[(pathPair[(0)])]);var modelKey = (pathPair[(1)]);var G__11773 = app.fn.FetchFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modelKey)+"/config.json"));G__11773.done(((function (G__11773,pathPair,where,modelKey,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise){
return (function (p1__11731_SHARP_){return promise.resolve(where,modelKey,p1__11731_SHARP_);
});})(G__11773,pathPair,where,modelKey,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise))
);
G__11773.fail(((function (G__11773,pathPair,where,modelKey,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise){
return (function (p1__11732_SHARP_){return promise.reject(p1__11732_SHARP_);
});})(G__11773,pathPair,where,modelKey,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise))
);
return G__11773;
} else
{if(cljs.core.truth_(pred__11770.call(null,"key",expr__11771)))
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise){
return (function (state_11780){var state_val_11781 = (state_11780[(1)]);if((state_val_11781 === (1)))
{var inst_11776 = (pathInfo["key"]);var inst_11777 = {"ModelKey":inst_11776};var inst_11778 = promise.resolve(inst_11777);var state_11780__$1 = state_11780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11780__$1,inst_11778);
} else
{return null;
}
});})(c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11785 = [null,null,null,null,null,null,null];(statearr_11785[(0)] = state_machine__6178__auto__);
(statearr_11785[(1)] = (1));
return statearr_11785;
});
var state_machine__6178__auto____1 = (function (state_11780){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11780);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11786){if((e11786 instanceof Object))
{var ex__6181__auto__ = e11786;var statearr_11787_11806 = state_11780;(statearr_11787_11806[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11780);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11807 = state_11780;
state_11780 = G__11807;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11780){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise))
})();var state__6194__auto__ = (function (){var statearr_11788 = f__6193__auto__.call(null);(statearr_11788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise))
);
return c__6192__auto__;
} else
{var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise){
return (function (state_11795){var state_val_11796 = (state_11795[(1)]);if((state_val_11796 === (1)))
{var inst_11789 = console.log("which is not right:",which);var inst_11792 = {"ModelKey":""};var inst_11793 = promise.resolve(inst_11792);var state_11795__$1 = (function (){var statearr_11797 = state_11795;(statearr_11797[(7)] = inst_11789);
return statearr_11797;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11795__$1,inst_11793);
} else
{return null;
}
});})(c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise))
;return ((function (switch__6177__auto__,c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11801 = [null,null,null,null,null,null,null,null];(statearr_11801[(0)] = state_machine__6178__auto__);
(statearr_11801[(1)] = (1));
return statearr_11801;
});
var state_machine__6178__auto____1 = (function (state_11795){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11795);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11802){if((e11802 instanceof Object))
{var ex__6181__auto__ = e11802;var statearr_11803_11808 = state_11795;(statearr_11803_11808[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11795);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11809 = state_11795;
state_11795 = G__11809;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11795){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise))
})();var state__6194__auto__ = (function (){var statearr_11804 = f__6193__auto__.call(null);(statearr_11804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,pred__11770,expr__11771,pathInfo,which,G__11769_11805,promise))
);
return c__6192__auto__;
}
}
});})(G__11769_11805,promise))
);
G__11769_11805.fail(((function (G__11769_11805,promise){
return (function (p1__4963__4964__auto__){return promise.reject(p1__4963__4964__auto__);
});})(G__11769_11805,promise))
);
return promise;
});
app.fn.GetAllModelOnce = app.fn.cache.call(null,app.fn.GetAllModelOnce);
app.fn.GetHomeModelMaybeKey = app.fn.cache.call(null,app.fn.GetHomeModelMaybeKey);
