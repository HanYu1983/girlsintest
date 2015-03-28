// Compiled by ClojureScript 0.0-2268
goog.provide('core.view');
goog.require('cljs.core');
goog.require('core.event');
goog.require('core.event');
goog.require('tool.app');
goog.require('tool.app');
cljs.core._add_method.call(null,tool.app.CreateAppView,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,CreateModel){var CreateElem = (function (){return tool.app.CreateElem.call(null,$("#tmpl_home"),CreateModel,null);
});var view = tool.app.CreateView.call(null,CreateElem,cljs.core.partial.call(null,tool.app.FadeIn,(400)),tool.app.NormalOut);var G__14266_14267 = view.elemPromise;G__14266_14267.done(((function (G__14266_14267,CreateElem,view){
return (function (elem){return null;
});})(G__14266_14267,CreateElem,view))
);
return view;
}));
core.view.defcommonlist = (function defcommonlist(name){var CloseFn = (function (elem,Complete){return tool.app.NormalOut.call(null,elem,(function (){var mc_modelContainer = elem.find("#mc_modelContainer");mc_modelContainer.undelegate("div[modelFrame]","click");
return Complete.call(null);
}));
});return cljs.core._add_method.call(null,tool.app.CreateAppView,name,((function (CloseFn){
return (function (ctx,key,CreateModel){var CreateElem = ((function (CloseFn){
return (function (){return tool.app.CreateElem.call(null,$("#tmpl_streetsnap_list"),CreateModel,null);
});})(CloseFn))
;var view = tool.app.CreateView.call(null,CreateElem,cljs.core.partial.call(null,tool.app.FadeIn,(400)),CloseFn);var G__14287_14306 = view.elemPromise;G__14287_14306.done(((function (G__14287_14306,CreateElem,view,CloseFn){
return (function (elem){var mc_modelContainer = elem.find("#mc_modelContainer");return mc_modelContainer.delegate("div[modelFrame]","click",((function (mc_modelContainer,G__14287_14306,CreateElem,view,CloseFn){
return (function (){var that = this;var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,that,mc_modelContainer,G__14287_14306,CreateElem,view,CloseFn){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,that,mc_modelContainer,G__14287_14306,CreateElem,view,CloseFn){
return (function (state_14297){var state_val_14298 = (state_14297[(1)]);if((state_val_14298 === (2)))
{var inst_14295 = (state_14297[(2)]);var state_14297__$1 = state_14297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14297__$1,inst_14295);
} else
{if((state_val_14298 === (1)))
{var inst_14288 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_14289 = that.id;var inst_14290 = [inst_14289];var inst_14291 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14288,inst_14290);var inst_14292 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_14291];var inst_14293 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14292,null));var state_14297__$1 = state_14297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14297__$1,(2),core.event.OnReact,inst_14293);
} else
{return null;
}
}
});})(c__6344__auto__,that,mc_modelContainer,G__14287_14306,CreateElem,view,CloseFn))
;return ((function (switch__6329__auto__,c__6344__auto__,that,mc_modelContainer,G__14287_14306,CreateElem,view,CloseFn){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_14302 = [null,null,null,null,null,null,null];(statearr_14302[(0)] = state_machine__6330__auto__);
(statearr_14302[(1)] = (1));
return statearr_14302;
});
var state_machine__6330__auto____1 = (function (state_14297){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_14297);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e14303){if((e14303 instanceof Object))
{var ex__6333__auto__ = e14303;var statearr_14304_14307 = state_14297;(statearr_14304_14307[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14297);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14308 = state_14297;
state_14297 = G__14308;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_14297){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_14297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,that,mc_modelContainer,G__14287_14306,CreateElem,view,CloseFn))
})();var state__6346__auto__ = (function (){var statearr_14305 = f__6345__auto__.call(null);(statearr_14305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_14305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,that,mc_modelContainer,G__14287_14306,CreateElem,view,CloseFn))
);
return c__6344__auto__;
});})(mc_modelContainer,G__14287_14306,CreateElem,view,CloseFn))
);
});})(G__14287_14306,CreateElem,view,CloseFn))
);
return view;
});})(CloseFn))
);
});
core.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
core.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
core.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
core.view.defcommondetail = (function defcommondetail(viewname){var CloseFn = (function (elem,Complete){return tool.app.NormalOut.call(null,elem,(function (){var mc_modelContainer = elem.find("#mc_historyContainer");mc_modelContainer.undelegate("img","click");
return Complete.call(null);
}));
});return cljs.core._add_method.call(null,tool.app.CreateAppView,viewname,((function (CloseFn){
return (function (ctx,key,CreateModel){var CreateElem = ((function (CloseFn){
return (function (){return tool.app.CreateElem.call(null,$("#tmpl_streetsnap"),CreateModel,null);
});})(CloseFn))
;var view = tool.app.CreateView.call(null,CreateElem,cljs.core.partial.call(null,tool.app.FadeIn,(400)),CloseFn);var G__14348_14387 = view.elemPromise;G__14348_14387.done(((function (G__14348_14387,CreateElem,view,CloseFn){
return (function (elem){var mc_historyContainer = elem.find("#mc_historyContainer");var mc_sideContainer = elem.find("#mc_sideContainer");mc_sideContainer.delegate("img","click",((function (mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn){
return (function (){var that = this;var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn){
return (function (state_14359){var state_val_14360 = (state_14359[(1)]);if((state_val_14360 === (2)))
{var inst_14357 = (state_14359[(2)]);var state_14359__$1 = state_14359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14359__$1,inst_14357);
} else
{if((state_val_14360 === (1)))
{var inst_14349 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dto","dto",-2048364190)];var inst_14350 = that.id;var inst_14351 = elem.DTO;var inst_14352 = [inst_14350,inst_14351];var inst_14353 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14349,inst_14352);var inst_14354 = [viewname,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_14353];var inst_14355 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14354,null));var state_14359__$1 = state_14359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14359__$1,(2),core.event.OnReact,inst_14355);
} else
{return null;
}
}
});})(c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn))
;return ((function (switch__6329__auto__,c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_14364 = [null,null,null,null,null,null,null];(statearr_14364[(0)] = state_machine__6330__auto__);
(statearr_14364[(1)] = (1));
return statearr_14364;
});
var state_machine__6330__auto____1 = (function (state_14359){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_14359);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e14365){if((e14365 instanceof Object))
{var ex__6333__auto__ = e14365;var statearr_14366_14388 = state_14359;(statearr_14366_14388[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14359);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14389 = state_14359;
state_14359 = G__14389;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_14359){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_14359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn))
})();var state__6346__auto__ = (function (){var statearr_14367 = f__6345__auto__.call(null);(statearr_14367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_14367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn))
);
return c__6344__auto__;
});})(mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn))
);
return mc_historyContainer.delegate("img","click",((function (mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn){
return (function (){var that = this;var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn){
return (function (state_14378){var state_val_14379 = (state_14378[(1)]);if((state_val_14379 === (2)))
{var inst_14376 = (state_14378[(2)]);var state_14378__$1 = state_14378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14378__$1,inst_14376);
} else
{if((state_val_14379 === (1)))
{var inst_14368 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dto","dto",-2048364190)];var inst_14369 = that.id;var inst_14370 = elem.DTO;var inst_14371 = [inst_14369,inst_14370];var inst_14372 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14368,inst_14371);var inst_14373 = [viewname,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_14372];var inst_14374 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14373,null));var state_14378__$1 = state_14378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14378__$1,(2),core.event.OnReact,inst_14374);
} else
{return null;
}
}
});})(c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn))
;return ((function (switch__6329__auto__,c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_14383 = [null,null,null,null,null,null,null];(statearr_14383[(0)] = state_machine__6330__auto__);
(statearr_14383[(1)] = (1));
return statearr_14383;
});
var state_machine__6330__auto____1 = (function (state_14378){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_14378);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e14384){if((e14384 instanceof Object))
{var ex__6333__auto__ = e14384;var statearr_14385_14390 = state_14378;(statearr_14385_14390[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14378);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14391 = state_14378;
state_14378 = G__14391;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_14378){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_14378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn))
})();var state__6346__auto__ = (function (){var statearr_14386 = f__6345__auto__.call(null);(statearr_14386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_14386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,that,mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn))
);
return c__6344__auto__;
});})(mc_historyContainer,mc_sideContainer,G__14348_14387,CreateElem,view,CloseFn))
);
});})(G__14348_14387,CreateElem,view,CloseFn))
);
return view;
});})(CloseFn))
);
});
core.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
core.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
core.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
