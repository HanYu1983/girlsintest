// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22168,key,view){var map__22169 = p__22168;var map__22169__$1 = ((cljs.core.seq_QMARK_.call(null,map__22169))?cljs.core.apply.call(null,cljs.core.hash_map,map__22169):map__22169);var ctx = map__22169__$1;var container = cljs.core.get.call(null,map__22169__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__22170_22189 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__22170_22189.appendTo(container);
G__22170_22189.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__22169,map__22169__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__22169,map__22169__$1,ctx,container){
return (function (state_22180){var state_val_22181 = (state_22180[(1)]);if((state_val_22181 === (2)))
{var inst_22178 = (state_22180[(2)]);var state_22180__$1 = state_22180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22180__$1,inst_22178);
} else
{if((state_val_22181 === (1)))
{var inst_22171 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_22172 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_22173 = [inst_22172,view];var inst_22174 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22171,inst_22173);var inst_22175 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_22174];var inst_22176 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22175,null));var state_22180__$1 = state_22180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22180__$1,(2),tool.react.OnReact,inst_22176);
} else
{return null;
}
}
});})(c__6192__auto__,map__22169,map__22169__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__22169,map__22169__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22185 = [null,null,null,null,null,null,null];(statearr_22185[(0)] = state_machine__6178__auto__);
(statearr_22185[(1)] = (1));
return statearr_22185;
});
var state_machine__6178__auto____1 = (function (state_22180){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22180);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22186){if((e22186 instanceof Object))
{var ex__6181__auto__ = e22186;var statearr_22187_22190 = state_22180;(statearr_22187_22190[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22186;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22191 = state_22180;
state_22180 = G__22191;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22180){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__22169,map__22169__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_22188 = f__6193__auto__.call(null);(statearr_22188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__22169,map__22169__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22192,key,view){var map__22193 = p__22192;var map__22193__$1 = ((cljs.core.seq_QMARK_.call(null,map__22193))?cljs.core.apply.call(null,cljs.core.hash_map,map__22193):map__22193);var ctx = map__22193__$1;var container = cljs.core.get.call(null,map__22193__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__22194 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__22194.remove();
return G__22194;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_22357 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_22358 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_22359 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_22359.off("click");
btn_search_22358.off("click");
mc_modelContainer_22357.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__22276,key,modelChan){var map__22277 = p__22276;var map__22277__$1 = ((cljs.core.seq_QMARK_.call(null,map__22277))?cljs.core.apply.call(null,cljs.core.hash_map,map__22277):map__22277);var ctx = map__22277__$1;var tmpl_item = cljs.core.get.call(null,map__22277__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (state_22298){var state_val_22299 = (state_22298[(1)]);if((state_val_22299 === (2)))
{var inst_22280 = (state_22298[(2)]);var inst_22281 = cljs.core.nth.call(null,inst_22280,(0),null);var inst_22282 = cljs.core.nth.call(null,inst_22280,(1),null);var inst_22283 = $("#tmpl_streetsnap_list");var inst_22284 = inst_22283.tmpl(inst_22282,tmpl_item);var inst_22285 = inst_22284.find("#mc_modelContainer");var inst_22286 = inst_22284.find("#btn_search");var inst_22287 = inst_22284.find("#btn_return");var inst_22288 = (function (){var btn_return = inst_22287;var btn_search = inst_22286;var mc_modelContainer = inst_22285;var elem = inst_22284;var tmpl = inst_22283;var model = inst_22282;var err = inst_22281;var vec__22278 = inst_22280;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (state_22305){var state_val_22306 = (state_22305[(1)]);if((state_val_22306 === (2)))
{var inst_22303 = (state_22305[(2)]);var state_22305__$1 = state_22305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22305__$1,inst_22303);
} else
{if((state_val_22306 === (1)))
{var inst_22300 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_22301 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22300,null));var state_22305__$1 = state_22305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22305__$1,(2),tool.react.OnReact,inst_22301);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22310 = [null,null,null,null,null,null,null];(statearr_22310[(0)] = state_machine__6178__auto__);
(statearr_22310[(1)] = (1));
return statearr_22310;
});
var state_machine__6178__auto____1 = (function (state_22305){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22305);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22311){if((e22311 instanceof Object))
{var ex__6181__auto__ = e22311;var statearr_22312_22360 = state_22305;(statearr_22312_22360[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22305);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22361 = state_22305;
state_22305 = G__22361;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22305){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22313 = f__6193__auto__.call(null);(statearr_22313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
})();var inst_22289 = inst_22287.click(inst_22288);var inst_22290 = (function (){var btn_return = inst_22287;var btn_search = inst_22286;var mc_modelContainer = inst_22285;var elem = inst_22284;var tmpl = inst_22283;var model = inst_22282;var err = inst_22281;var vec__22278 = inst_22280;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (state_22322){var state_val_22323 = (state_22322[(1)]);if((state_val_22323 === (2)))
{var inst_22320 = (state_22322[(2)]);var state_22322__$1 = state_22322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22322__$1,inst_22320);
} else
{if((state_val_22323 === (1)))
{var inst_22314 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_22315 = [searchKey];var inst_22316 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22314,inst_22315);var inst_22317 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_22316];var inst_22318 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22317,null));var state_22322__$1 = state_22322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22322__$1,(2),tool.react.OnReact,inst_22318);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22327 = [null,null,null,null,null,null,null];(statearr_22327[(0)] = state_machine__6178__auto__);
(statearr_22327[(1)] = (1));
return statearr_22327;
});
var state_machine__6178__auto____1 = (function (state_22322){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22322);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22328){if((e22328 instanceof Object))
{var ex__6181__auto__ = e22328;var statearr_22329_22362 = state_22322;(statearr_22329_22362[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22322);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22363 = state_22322;
state_22322 = G__22363;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22322){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22330 = f__6193__auto__.call(null);(statearr_22330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
})();var inst_22291 = inst_22286.click(inst_22290);var inst_22292 = (function (){var btn_return = inst_22287;var btn_search = inst_22286;var mc_modelContainer = inst_22285;var elem = inst_22284;var tmpl = inst_22283;var model = inst_22282;var err = inst_22281;var vec__22278 = inst_22280;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,inst_22290,inst_22291,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,inst_22290,inst_22291,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,inst_22290,inst_22291,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function (state_22340){var state_val_22341 = (state_22340[(1)]);if((state_val_22341 === (2)))
{var inst_22338 = (state_22340[(2)]);var state_22340__$1 = state_22340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22340__$1,inst_22338);
} else
{if((state_val_22341 === (1)))
{var inst_22331 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_22332 = that.id;var inst_22333 = [inst_22332];var inst_22334 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22331,inst_22333);var inst_22335 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_22334];var inst_22336 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22335,null));var state_22340__$1 = state_22340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22340__$1,(2),tool.react.OnReact,inst_22336);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,inst_22290,inst_22291,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,inst_22290,inst_22291,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22345 = [null,null,null,null,null,null,null];(statearr_22345[(0)] = state_machine__6178__auto__);
(statearr_22345[(1)] = (1));
return statearr_22345;
});
var state_machine__6178__auto____1 = (function (state_22340){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22340);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22346){if((e22346 instanceof Object))
{var ex__6181__auto__ = e22346;var statearr_22347_22364 = state_22340;(statearr_22347_22364[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22365 = state_22340;
state_22340 = G__22365;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22340){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,inst_22290,inst_22291,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22348 = f__6193__auto__.call(null);(statearr_22348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,inst_22290,inst_22291,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__22278,inst_22280,inst_22281,inst_22282,inst_22283,inst_22284,inst_22285,inst_22286,inst_22287,inst_22288,inst_22289,inst_22290,inst_22291,state_val_22299,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
})();var inst_22293 = inst_22285.delegate("div[modelFrame]","click",inst_22292);var inst_22294 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_22295 = [inst_22284,name];var inst_22296 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22294,inst_22295);var state_22298__$1 = (function (){var statearr_22349 = state_22298;(statearr_22349[(7)] = inst_22293);
(statearr_22349[(8)] = inst_22289);
(statearr_22349[(9)] = inst_22291);
return statearr_22349;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22298__$1,inst_22296);
} else
{if((state_val_22299 === (1)))
{var state_22298__$1 = state_22298;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22298__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22353 = [null,null,null,null,null,null,null,null,null,null];(statearr_22353[(0)] = state_machine__6178__auto__);
(statearr_22353[(1)] = (1));
return statearr_22353;
});
var state_machine__6178__auto____1 = (function (state_22298){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22298);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22354){if((e22354 instanceof Object))
{var ex__6181__auto__ = e22354;var statearr_22355_22366 = state_22298;(statearr_22355_22366[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22298);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22367 = state_22298;
state_22298 = G__22367;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22298){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22356 = f__6193__auto__.call(null);(statearr_22356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__22277,map__22277__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__22553){var map__22554 = p__22553;var map__22554__$1 = ((cljs.core.seq_QMARK_.call(null,map__22554))?cljs.core.apply.call(null,cljs.core.hash_map,map__22554):map__22554);var view = map__22554__$1;var elem = cljs.core.get.call(null,map__22554__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_22738 = elem.find("#mc_historyContainer");var mc_sideContainer_22739 = elem.find("#mc_sideContainer");var mc_bottomContainer_22740 = elem.find("#mc_bottomContainer");var img_stylePicture_22741 = elem.find("#img_stylePicture");var btn_share_22742 = elem.find("#btn_share");var btn_fullscreen_22743 = elem.find("#btn_fullscreen");var btn_more_22744 = elem.find("#btn_more");mc_modelContainer_22738.undelegate("img","click");
mc_sideContainer_22739.undelegate("img","click");
mc_bottomContainer_22740.undelegate("img","click");
img_stylePicture_22741.off("click");
btn_share_22742.off("click");
btn_fullscreen_22743.off("click");
btn_more_22744.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__22555){var map__22556 = p__22555;var map__22556__$1 = ((cljs.core.seq_QMARK_.call(null,map__22556))?cljs.core.apply.call(null,cljs.core.hash_map,map__22556):map__22556);var view = map__22556__$1;var elem = cljs.core.get.call(null,map__22556__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_22745 = elem.find("#mc_3dmask");var c__6192__auto___22746 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___22746,mc_3dmask_22745,map__22556,map__22556__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___22746,mc_3dmask_22745,map__22556,map__22556__$1,view,elem){
return (function (state_22562){var state_val_22563 = (state_22562[(1)]);if((state_val_22563 === (2)))
{var inst_22559 = (state_22562[(2)]);var inst_22560 = mc_3dmask_22745.fadeOut((400));var state_22562__$1 = (function (){var statearr_22564 = state_22562;(statearr_22564[(7)] = inst_22559);
return statearr_22564;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22562__$1,inst_22560);
} else
{if((state_val_22563 === (1)))
{var inst_22557 = cljs.core.async.timeout.call(null,(3000));var state_22562__$1 = state_22562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22562__$1,(2),inst_22557);
} else
{return null;
}
}
});})(c__6192__auto___22746,mc_3dmask_22745,map__22556,map__22556__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___22746,mc_3dmask_22745,map__22556,map__22556__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22568 = [null,null,null,null,null,null,null,null];(statearr_22568[(0)] = state_machine__6178__auto__);
(statearr_22568[(1)] = (1));
return statearr_22568;
});
var state_machine__6178__auto____1 = (function (state_22562){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22562);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22569){if((e22569 instanceof Object))
{var ex__6181__auto__ = e22569;var statearr_22570_22747 = state_22562;(statearr_22570_22747[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22562);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22748 = state_22562;
state_22562 = G__22748;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22562){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___22746,mc_3dmask_22745,map__22556,map__22556__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_22571 = f__6193__auto__.call(null);(statearr_22571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___22746);
return statearr_22571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___22746,mc_3dmask_22745,map__22556,map__22556__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__22572,key,modelChan){var map__22573 = p__22572;var map__22573__$1 = ((cljs.core.seq_QMARK_.call(null,map__22573))?cljs.core.apply.call(null,cljs.core.hash_map,map__22573):map__22573);var ctx = map__22573__$1;var tmpl_item = cljs.core.get.call(null,map__22573__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (state_22606){var state_val_22607 = (state_22606[(1)]);if((state_val_22607 === (2)))
{var inst_22576 = (state_22606[(2)]);var inst_22577 = cljs.core.nth.call(null,inst_22576,(0),null);var inst_22578 = cljs.core.nth.call(null,inst_22576,(1),null);var inst_22579 = $("#tmpl_streetsnap");var inst_22580 = inst_22579.tmpl(inst_22578,tmpl_item);var inst_22581 = inst_22580.find("#mc_historyContainer");var inst_22582 = inst_22580.find("#mc_sideContainer");var inst_22583 = inst_22580.find("#mc_bottomContainer");var inst_22584 = inst_22580.find("#img_stylePicture");var inst_22585 = inst_22580.find("#btn_share");var inst_22586 = inst_22580.find("#btn_fullscreen");var inst_22587 = inst_22580.find("#btn_more");var inst_22588 = (function (){var vec__22574 = inst_22576;var model = inst_22578;var btn_more = inst_22587;var mc_sideContainer = inst_22582;var mc_historyContainer = inst_22581;var err = inst_22577;var tmpl = inst_22579;var img_stylePicture = inst_22584;var elem = inst_22580;var btn_share = inst_22585;var mc_bottomContainer = inst_22583;var btn_fullscreen = inst_22586;return ((function (vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (state_22613){var state_val_22614 = (state_22613[(1)]);if((state_val_22614 === (2)))
{var inst_22611 = (state_22613[(2)]);var state_22613__$1 = state_22613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22613__$1,inst_22611);
} else
{if((state_val_22614 === (1)))
{var inst_22608 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_22609 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22608,null));var state_22613__$1 = state_22613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22613__$1,(2),tool.react.OnReact,inst_22609);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22618 = [null,null,null,null,null,null,null];(statearr_22618[(0)] = state_machine__6178__auto__);
(statearr_22618[(1)] = (1));
return statearr_22618;
});
var state_machine__6178__auto____1 = (function (state_22613){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22613);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22619){if((e22619 instanceof Object))
{var ex__6181__auto__ = e22619;var statearr_22620_22749 = state_22613;(statearr_22620_22749[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22613);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22750 = state_22613;
state_22613 = G__22750;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22613){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22621 = f__6193__auto__.call(null);(statearr_22621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var inst_22589 = inst_22587.on("click",inst_22588);var inst_22590 = (function (){var vec__22574 = inst_22576;var model = inst_22578;var btn_more = inst_22587;var mc_sideContainer = inst_22582;var mc_historyContainer = inst_22581;var err = inst_22577;var tmpl = inst_22579;var img_stylePicture = inst_22584;var elem = inst_22580;var btn_share = inst_22585;var mc_bottomContainer = inst_22583;var btn_fullscreen = inst_22586;return ((function (vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (state_22630){var state_val_22631 = (state_22630[(1)]);if((state_val_22631 === (2)))
{var inst_22628 = (state_22630[(2)]);var state_22630__$1 = state_22630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22630__$1,inst_22628);
} else
{if((state_val_22631 === (1)))
{var inst_22622 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_22623 = [model];var inst_22624 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22622,inst_22623);var inst_22625 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_22624];var inst_22626 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22625,null));var state_22630__$1 = state_22630;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22630__$1,(2),tool.react.OnReact,inst_22626);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22635 = [null,null,null,null,null,null,null];(statearr_22635[(0)] = state_machine__6178__auto__);
(statearr_22635[(1)] = (1));
return statearr_22635;
});
var state_machine__6178__auto____1 = (function (state_22630){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22630);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22636){if((e22636 instanceof Object))
{var ex__6181__auto__ = e22636;var statearr_22637_22751 = state_22630;(statearr_22637_22751[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22752 = state_22630;
state_22630 = G__22752;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22630){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22638 = f__6193__auto__.call(null);(statearr_22638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var inst_22591 = inst_22586.on("click",inst_22590);var inst_22592 = (function (){var vec__22574 = inst_22576;var model = inst_22578;var btn_more = inst_22587;var mc_sideContainer = inst_22582;var mc_historyContainer = inst_22581;var err = inst_22577;var tmpl = inst_22579;var img_stylePicture = inst_22584;var elem = inst_22580;var btn_share = inst_22585;var mc_bottomContainer = inst_22583;var btn_fullscreen = inst_22586;return ((function (vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (state_22648){var state_val_22649 = (state_22648[(1)]);if((state_val_22649 === (2)))
{var inst_22646 = (state_22648[(2)]);var state_22648__$1 = state_22648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22648__$1,inst_22646);
} else
{if((state_val_22649 === (1)))
{var inst_22639 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_22640 = model.styleUrl;var inst_22641 = [inst_22640];var inst_22642 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22639,inst_22641);var inst_22643 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_22642];var inst_22644 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22643,null));var state_22648__$1 = state_22648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22648__$1,(2),tool.react.OnReact,inst_22644);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22653 = [null,null,null,null,null,null,null];(statearr_22653[(0)] = state_machine__6178__auto__);
(statearr_22653[(1)] = (1));
return statearr_22653;
});
var state_machine__6178__auto____1 = (function (state_22648){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22648);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22654){if((e22654 instanceof Object))
{var ex__6181__auto__ = e22654;var statearr_22655_22753 = state_22648;(statearr_22655_22753[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22648);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22754 = state_22648;
state_22648 = G__22754;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22648){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22656 = f__6193__auto__.call(null);(statearr_22656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var inst_22593 = inst_22584.on("click",inst_22592);var inst_22594 = (function (){var vec__22574 = inst_22576;var model = inst_22578;var btn_more = inst_22587;var mc_sideContainer = inst_22582;var mc_historyContainer = inst_22581;var err = inst_22577;var tmpl = inst_22579;var img_stylePicture = inst_22584;var elem = inst_22580;var btn_share = inst_22585;var mc_bottomContainer = inst_22583;var btn_fullscreen = inst_22586;return ((function (vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (state_22665){var state_val_22666 = (state_22665[(1)]);if((state_val_22666 === (2)))
{var inst_22663 = (state_22665[(2)]);var state_22665__$1 = state_22665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22665__$1,inst_22663);
} else
{if((state_val_22666 === (1)))
{var inst_22657 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_22658 = [model];var inst_22659 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22657,inst_22658);var inst_22660 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_22659];var inst_22661 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22660,null));var state_22665__$1 = state_22665;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22665__$1,(2),tool.react.OnReact,inst_22661);
} else
{return null;
}
}
});})(c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22670 = [null,null,null,null,null,null,null];(statearr_22670[(0)] = state_machine__6178__auto__);
(statearr_22670[(1)] = (1));
return statearr_22670;
});
var state_machine__6178__auto____1 = (function (state_22665){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22665);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22671){if((e22671 instanceof Object))
{var ex__6181__auto__ = e22671;var statearr_22672_22755 = state_22665;(statearr_22672_22755[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22665);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22756 = state_22665;
state_22665 = G__22756;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22665){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22673 = f__6193__auto__.call(null);(statearr_22673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var inst_22595 = inst_22585.on("click",inst_22594);var inst_22596 = (function (){var vec__22574 = inst_22576;var model = inst_22578;var btn_more = inst_22587;var mc_sideContainer = inst_22582;var mc_historyContainer = inst_22581;var err = inst_22577;var tmpl = inst_22579;var img_stylePicture = inst_22584;var elem = inst_22580;var btn_share = inst_22585;var mc_bottomContainer = inst_22583;var btn_fullscreen = inst_22586;return ((function (vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (state_22684){var state_val_22685 = (state_22684[(1)]);if((state_val_22685 === (2)))
{var inst_22682 = (state_22684[(2)]);var state_22684__$1 = state_22684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22684__$1,inst_22682);
} else
{if((state_val_22685 === (1)))
{var inst_22674 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_22675 = that.id;var inst_22676 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22675));var inst_22677 = [inst_22676];var inst_22678 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22674,inst_22677);var inst_22679 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_22678];var inst_22680 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22679,null));var state_22684__$1 = state_22684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22684__$1,(2),tool.react.OnReact,inst_22680);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22689 = [null,null,null,null,null,null,null];(statearr_22689[(0)] = state_machine__6178__auto__);
(statearr_22689[(1)] = (1));
return statearr_22689;
});
var state_machine__6178__auto____1 = (function (state_22684){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22684);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22690){if((e22690 instanceof Object))
{var ex__6181__auto__ = e22690;var statearr_22691_22757 = state_22684;(statearr_22691_22757[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22690;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22758 = state_22684;
state_22684 = G__22758;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22684){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22692 = f__6193__auto__.call(null);(statearr_22692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22692;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var inst_22597 = inst_22582.delegate("img","click",inst_22596);var inst_22598 = (function (){var vec__22574 = inst_22576;var model = inst_22578;var btn_more = inst_22587;var mc_sideContainer = inst_22582;var mc_historyContainer = inst_22581;var err = inst_22577;var tmpl = inst_22579;var img_stylePicture = inst_22584;var elem = inst_22580;var btn_share = inst_22585;var mc_bottomContainer = inst_22583;var btn_fullscreen = inst_22586;return ((function (vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (state_22703){var state_val_22704 = (state_22703[(1)]);if((state_val_22704 === (2)))
{var inst_22701 = (state_22703[(2)]);var state_22703__$1 = state_22703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22703__$1,inst_22701);
} else
{if((state_val_22704 === (1)))
{var inst_22693 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_22694 = that.id;var inst_22695 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22694));var inst_22696 = [inst_22695];var inst_22697 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22693,inst_22696);var inst_22698 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_22697];var inst_22699 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22698,null));var state_22703__$1 = state_22703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22703__$1,(2),tool.react.OnReact,inst_22699);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22708 = [null,null,null,null,null,null,null];(statearr_22708[(0)] = state_machine__6178__auto__);
(statearr_22708[(1)] = (1));
return statearr_22708;
});
var state_machine__6178__auto____1 = (function (state_22703){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22703);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22709){if((e22709 instanceof Object))
{var ex__6181__auto__ = e22709;var statearr_22710_22759 = state_22703;(statearr_22710_22759[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22760 = state_22703;
state_22703 = G__22760;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22703){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22711 = f__6193__auto__.call(null);(statearr_22711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var inst_22599 = inst_22583.delegate("img","click",inst_22598);var inst_22600 = (function (){var vec__22574 = inst_22576;var model = inst_22578;var btn_more = inst_22587;var mc_sideContainer = inst_22582;var mc_historyContainer = inst_22581;var err = inst_22577;var tmpl = inst_22579;var img_stylePicture = inst_22584;var elem = inst_22580;var btn_share = inst_22585;var mc_bottomContainer = inst_22583;var btn_fullscreen = inst_22586;return ((function (vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,inst_22598,inst_22599,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,inst_22598,inst_22599,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,inst_22598,inst_22599,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function (state_22721){var state_val_22722 = (state_22721[(1)]);if((state_val_22722 === (2)))
{var inst_22719 = (state_22721[(2)]);var state_22721__$1 = state_22721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22721__$1,inst_22719);
} else
{if((state_val_22722 === (1)))
{var inst_22712 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_22713 = that.id;var inst_22714 = [inst_22713];var inst_22715 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22712,inst_22714);var inst_22716 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_22715];var inst_22717 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22716,null));var state_22721__$1 = state_22721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22721__$1,(2),tool.react.OnReact,inst_22717);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,inst_22598,inst_22599,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,inst_22598,inst_22599,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22726 = [null,null,null,null,null,null,null];(statearr_22726[(0)] = state_machine__6178__auto__);
(statearr_22726[(1)] = (1));
return statearr_22726;
});
var state_machine__6178__auto____1 = (function (state_22721){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22721);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22727){if((e22727 instanceof Object))
{var ex__6181__auto__ = e22727;var statearr_22728_22761 = state_22721;(statearr_22728_22761[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22721);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22762 = state_22721;
state_22721 = G__22762;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22721){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,inst_22598,inst_22599,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22729 = f__6193__auto__.call(null);(statearr_22729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,inst_22598,inst_22599,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(vec__22574,model,btn_more,mc_sideContainer,mc_historyContainer,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_22576,inst_22577,inst_22578,inst_22579,inst_22580,inst_22581,inst_22582,inst_22583,inst_22584,inst_22585,inst_22586,inst_22587,inst_22588,inst_22589,inst_22590,inst_22591,inst_22592,inst_22593,inst_22594,inst_22595,inst_22596,inst_22597,inst_22598,inst_22599,state_val_22607,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var inst_22601 = inst_22581.delegate("img","click",inst_22600);var inst_22602 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_22603 = [inst_22580,name];var inst_22604 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22602,inst_22603);var state_22606__$1 = (function (){var statearr_22730 = state_22606;(statearr_22730[(7)] = inst_22599);
(statearr_22730[(8)] = inst_22593);
(statearr_22730[(9)] = inst_22597);
(statearr_22730[(10)] = inst_22595);
(statearr_22730[(11)] = inst_22601);
(statearr_22730[(12)] = inst_22591);
(statearr_22730[(13)] = inst_22589);
return statearr_22730;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22606__$1,inst_22604);
} else
{if((state_val_22607 === (1)))
{var state_22606__$1 = state_22606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22606__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22734[(0)] = state_machine__6178__auto__);
(statearr_22734[(1)] = (1));
return statearr_22734;
});
var state_machine__6178__auto____1 = (function (state_22606){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22606);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22735){if((e22735 instanceof Object))
{var ex__6181__auto__ = e22735;var statearr_22736_22763 = state_22606;(statearr_22736_22763[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22606);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22735;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22764 = state_22606;
state_22606 = G__22764;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22606){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22737 = f__6193__auto__.call(null);(statearr_22737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__22573,map__22573__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__22765){var map__22766 = p__22765;var map__22766__$1 = ((cljs.core.seq_QMARK_.call(null,map__22766))?cljs.core.apply.call(null,cljs.core.hash_map,map__22766):map__22766);var view = map__22766__$1;var elem = cljs.core.get.call(null,map__22766__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_22782 = elem.find("#mc_3dmask");var c__6192__auto___22783 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___22783,mc_3dmask_22782,map__22766,map__22766__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___22783,mc_3dmask_22782,map__22766,map__22766__$1,view,elem){
return (function (state_22772){var state_val_22773 = (state_22772[(1)]);if((state_val_22773 === (2)))
{var inst_22769 = (state_22772[(2)]);var inst_22770 = mc_3dmask_22782.fadeOut((400));var state_22772__$1 = (function (){var statearr_22774 = state_22772;(statearr_22774[(7)] = inst_22769);
return statearr_22774;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22772__$1,inst_22770);
} else
{if((state_val_22773 === (1)))
{var inst_22767 = cljs.core.async.timeout.call(null,(3000));var state_22772__$1 = state_22772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22772__$1,(2),inst_22767);
} else
{return null;
}
}
});})(c__6192__auto___22783,mc_3dmask_22782,map__22766,map__22766__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___22783,mc_3dmask_22782,map__22766,map__22766__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22778 = [null,null,null,null,null,null,null,null];(statearr_22778[(0)] = state_machine__6178__auto__);
(statearr_22778[(1)] = (1));
return statearr_22778;
});
var state_machine__6178__auto____1 = (function (state_22772){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22772);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22779){if((e22779 instanceof Object))
{var ex__6181__auto__ = e22779;var statearr_22780_22784 = state_22772;(statearr_22780_22784[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22785 = state_22772;
state_22772 = G__22785;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22772){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___22783,mc_3dmask_22782,map__22766,map__22766__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_22781 = f__6193__auto__.call(null);(statearr_22781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___22783);
return statearr_22781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___22783,mc_3dmask_22782,map__22766,map__22766__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__22786,key,modelChan){var map__22787 = p__22786;var map__22787__$1 = ((cljs.core.seq_QMARK_.call(null,map__22787))?cljs.core.apply.call(null,cljs.core.hash_map,map__22787):map__22787);var ctx = map__22787__$1;var tmpl_item = cljs.core.get.call(null,map__22787__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__22787,map__22787__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__22787,map__22787__$1,ctx,tmpl_item){
return (function (state_22799){var state_val_22800 = (state_22799[(1)]);if((state_val_22800 === (2)))
{var inst_22790 = (state_22799[(2)]);var inst_22791 = cljs.core.nth.call(null,inst_22790,(0),null);var inst_22792 = cljs.core.nth.call(null,inst_22790,(1),null);var inst_22793 = $("#tmpl_home");var inst_22794 = inst_22793.tmpl(inst_22792,tmpl_item);var inst_22795 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_22796 = [inst_22794,key];var inst_22797 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22795,inst_22796);var state_22799__$1 = (function (){var statearr_22801 = state_22799;(statearr_22801[(7)] = inst_22791);
return statearr_22801;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22799__$1,inst_22797);
} else
{if((state_val_22800 === (1)))
{var state_22799__$1 = state_22799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22799__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__22787,map__22787__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__22787,map__22787__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22805 = [null,null,null,null,null,null,null,null];(statearr_22805[(0)] = state_machine__6178__auto__);
(statearr_22805[(1)] = (1));
return statearr_22805;
});
var state_machine__6178__auto____1 = (function (state_22799){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22799);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22806){if((e22806 instanceof Object))
{var ex__6181__auto__ = e22806;var statearr_22807_22809 = state_22799;(statearr_22807_22809[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22799);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22810 = state_22799;
state_22799 = G__22810;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22799){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__22787,map__22787__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22808 = f__6193__auto__.call(null);(statearr_22808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__22787,map__22787__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__22811,key,view){var map__22812 = p__22811;var map__22812__$1 = ((cljs.core.seq_QMARK_.call(null,map__22812))?cljs.core.apply.call(null,cljs.core.hash_map,map__22812):map__22812);var ctx = map__22812__$1;var popupContainer = cljs.core.get.call(null,map__22812__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__22813 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__22813.appendTo(popupContainer);
G__22813.fadeIn((400));
return G__22813;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__22814,key,p__22815){var map__22816 = p__22814;var map__22816__$1 = ((cljs.core.seq_QMARK_.call(null,map__22816))?cljs.core.apply.call(null,cljs.core.hash_map,map__22816):map__22816);var ctx = map__22816__$1;var container = cljs.core.get.call(null,map__22816__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__22817 = p__22815;var map__22817__$1 = ((cljs.core.seq_QMARK_.call(null,map__22817))?cljs.core.apply.call(null,cljs.core.hash_map,map__22817):map__22817);var view = map__22817__$1;var elem = cljs.core.get.call(null,map__22817__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__22816,map__22816__$1,ctx,container,map__22817,map__22817__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__22816,map__22816__$1,ctx,container,map__22817,map__22817__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__22818,key,modelChan){var map__22819 = p__22818;var map__22819__$1 = ((cljs.core.seq_QMARK_.call(null,map__22819))?cljs.core.apply.call(null,cljs.core.hash_map,map__22819):map__22819);var ctx = map__22819__$1;var tmpl_item = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item){
return (function (state_22839){var state_val_22840 = (state_22839[(1)]);if((state_val_22840 === (2)))
{var inst_22822 = (state_22839[(2)]);var inst_22823 = cljs.core.nth.call(null,inst_22822,(0),null);var inst_22824 = cljs.core.nth.call(null,inst_22822,(1),null);var inst_22825 = $("body");var inst_22826 = inst_22824.url;var inst_22827 = inst_22825.width();var inst_22828 = inst_22825.height();var inst_22829 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22826)+"?Width="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22827)+"&Height="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22828));var inst_22830 = inst_22824.url = inst_22829;var inst_22831 = $("#tmpl_bigPhoto");var inst_22832 = inst_22831.tmpl(inst_22824,tmpl_item);var inst_22833 = (function (){var back = inst_22832;var elem = inst_22832;var tmpl = inst_22831;var _ = inst_22830;var root_elem = inst_22825;var model = inst_22824;var err = inst_22823;var vec__22820 = inst_22822;return ((function (back,elem,tmpl,_,root_elem,model,err,vec__22820,inst_22822,inst_22823,inst_22824,inst_22825,inst_22826,inst_22827,inst_22828,inst_22829,inst_22830,inst_22831,inst_22832,state_val_22840,c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__22820,inst_22822,inst_22823,inst_22824,inst_22825,inst_22826,inst_22827,inst_22828,inst_22829,inst_22830,inst_22831,inst_22832,state_val_22840,c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__22820,inst_22822,inst_22823,inst_22824,inst_22825,inst_22826,inst_22827,inst_22828,inst_22829,inst_22830,inst_22831,inst_22832,state_val_22840,c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item){
return (function (state_22846){var state_val_22847 = (state_22846[(1)]);if((state_val_22847 === (2)))
{var inst_22844 = (state_22846[(2)]);var state_22846__$1 = state_22846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22846__$1,inst_22844);
} else
{if((state_val_22847 === (1)))
{var inst_22841 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_22842 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22841,null));var state_22846__$1 = state_22846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22846__$1,(2),tool.react.OnReact,inst_22842);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__22820,inst_22822,inst_22823,inst_22824,inst_22825,inst_22826,inst_22827,inst_22828,inst_22829,inst_22830,inst_22831,inst_22832,state_val_22840,c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__22820,inst_22822,inst_22823,inst_22824,inst_22825,inst_22826,inst_22827,inst_22828,inst_22829,inst_22830,inst_22831,inst_22832,state_val_22840,c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22851 = [null,null,null,null,null,null,null];(statearr_22851[(0)] = state_machine__6178__auto__);
(statearr_22851[(1)] = (1));
return statearr_22851;
});
var state_machine__6178__auto____1 = (function (state_22846){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22846);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22852){if((e22852 instanceof Object))
{var ex__6181__auto__ = e22852;var statearr_22853_22863 = state_22846;(statearr_22853_22863[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22846);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22864 = state_22846;
state_22846 = G__22864;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22846){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__22820,inst_22822,inst_22823,inst_22824,inst_22825,inst_22826,inst_22827,inst_22828,inst_22829,inst_22830,inst_22831,inst_22832,state_val_22840,c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22854 = f__6193__auto__.call(null);(statearr_22854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_22854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,_,root_elem,model,err,vec__22820,inst_22822,inst_22823,inst_22824,inst_22825,inst_22826,inst_22827,inst_22828,inst_22829,inst_22830,inst_22831,inst_22832,state_val_22840,c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,_,root_elem,model,err,vec__22820,inst_22822,inst_22823,inst_22824,inst_22825,inst_22826,inst_22827,inst_22828,inst_22829,inst_22830,inst_22831,inst_22832,state_val_22840,c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item))
})();var inst_22834 = inst_22832.on("click",inst_22833);var inst_22835 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_22836 = [inst_22832,key];var inst_22837 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22835,inst_22836);var state_22839__$1 = (function (){var statearr_22855 = state_22839;(statearr_22855[(7)] = inst_22834);
return statearr_22855;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22839__$1,inst_22837);
} else
{if((state_val_22840 === (1)))
{var state_22839__$1 = state_22839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22839__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22859 = [null,null,null,null,null,null,null,null];(statearr_22859[(0)] = state_machine__6178__auto__);
(statearr_22859[(1)] = (1));
return statearr_22859;
});
var state_machine__6178__auto____1 = (function (state_22839){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22839);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22860){if((e22860 instanceof Object))
{var ex__6181__auto__ = e22860;var statearr_22861_22865 = state_22839;(statearr_22861_22865[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22866 = state_22839;
state_22839 = G__22866;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22839){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22862 = f__6193__auto__.call(null);(statearr_22862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__22819,map__22819__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__22867,key,modelChan){var map__22868 = p__22867;var map__22868__$1 = ((cljs.core.seq_QMARK_.call(null,map__22868))?cljs.core.apply.call(null,cljs.core.hash_map,map__22868):map__22868);var ctx = map__22868__$1;var tmpl_item = cljs.core.get.call(null,map__22868__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__22868,map__22868__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__22868,map__22868__$1,ctx,tmpl_item){
return (function (state_22880){var state_val_22881 = (state_22880[(1)]);if((state_val_22881 === (2)))
{var inst_22871 = (state_22880[(2)]);var inst_22872 = cljs.core.nth.call(null,inst_22871,(0),null);var inst_22873 = cljs.core.nth.call(null,inst_22871,(1),null);var inst_22874 = $("#tmpl_news");var inst_22875 = inst_22874.tmpl(inst_22873,tmpl_item);var inst_22876 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_22877 = [inst_22875,key];var inst_22878 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22876,inst_22877);var state_22880__$1 = (function (){var statearr_22882 = state_22880;(statearr_22882[(7)] = inst_22872);
return statearr_22882;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22880__$1,inst_22878);
} else
{if((state_val_22881 === (1)))
{var state_22880__$1 = state_22880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22880__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__22868,map__22868__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__22868,map__22868__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_22886 = [null,null,null,null,null,null,null,null];(statearr_22886[(0)] = state_machine__6178__auto__);
(statearr_22886[(1)] = (1));
return statearr_22886;
});
var state_machine__6178__auto____1 = (function (state_22880){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22880);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22887){if((e22887 instanceof Object))
{var ex__6181__auto__ = e22887;var statearr_22888_22890 = state_22880;(statearr_22888_22890[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22880);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22891 = state_22880;
state_22880 = G__22891;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22880){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__22868,map__22868__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_22889 = f__6193__auto__.call(null);(statearr_22889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__22868,map__22868__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
