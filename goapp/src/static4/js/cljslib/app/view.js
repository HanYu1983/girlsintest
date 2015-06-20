// Compiled by ClojureScript 0.0-2268
goog.provide('app.view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('tool.react');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30734,key,view){var map__30735 = p__30734;var map__30735__$1 = ((cljs.core.seq_QMARK_.call(null,map__30735))?cljs.core.apply.call(null,cljs.core.hash_map,map__30735):map__30735);var ctx = map__30735__$1;var container = cljs.core.get.call(null,map__30735__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__30736_30755 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__30736_30755.appendTo(container);
G__30736_30755.fadeIn((400));
var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__30735,map__30735__$1,ctx,container){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__30735,map__30735__$1,ctx,container){
return (function (state_30746){var state_val_30747 = (state_30746[(1)]);if((state_val_30747 === (2)))
{var inst_30744 = (state_30746[(2)]);var state_30746__$1 = state_30746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30746__$1,inst_30744);
} else
{if((state_val_30747 === (1)))
{var inst_30737 = [new cljs.core.Keyword(null,"curr-view","curr-view",1805336094),new cljs.core.Keyword(null,"view-obj","view-obj",-756361017)];var inst_30738 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(view);var inst_30739 = [inst_30738,view];var inst_30740 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30737,inst_30739);var inst_30741 = [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),inst_30740];var inst_30742 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30741,null));var state_30746__$1 = state_30746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30746__$1,(2),tool.react.OnReact,inst_30742);
} else
{return null;
}
}
});})(c__6192__auto__,map__30735,map__30735__$1,ctx,container))
;return ((function (switch__6177__auto__,c__6192__auto__,map__30735,map__30735__$1,ctx,container){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30751 = [null,null,null,null,null,null,null];(statearr_30751[(0)] = state_machine__6178__auto__);
(statearr_30751[(1)] = (1));
return statearr_30751;
});
var state_machine__6178__auto____1 = (function (state_30746){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30746);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30752){if((e30752 instanceof Object))
{var ex__6181__auto__ = e30752;var statearr_30753_30756 = state_30746;(statearr_30753_30756[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30746);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30757 = state_30746;
state_30746 = G__30757;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30746){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__30735,map__30735__$1,ctx,container))
})();var state__6194__auto__ = (function (){var statearr_30754 = f__6193__auto__.call(null);(statearr_30754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_30754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__30735,map__30735__$1,ctx,container))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30758,key,view){var map__30759 = p__30758;var map__30759__$1 = ((cljs.core.seq_QMARK_.call(null,map__30759))?cljs.core.apply.call(null,cljs.core.hash_map,map__30759):map__30759);var ctx = map__30759__$1;var container = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var G__30760 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__30760.remove();
return G__30760;
}));
app.view.defcommonlist = (function defcommonlist(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,view){var mc_modelContainer_30923 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#mc_modelContainer");var btn_search_30924 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_search");var btn_return_30925 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view).find("#btn_return");btn_return_30925.off("click");
btn_search_30924.off("click");
mc_modelContainer_30923.undelegate("div[modelFrame]","click");
return tool.react.AnimateClose.call(null,name,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__30842,key,modelChan){var map__30843 = p__30842;var map__30843__$1 = ((cljs.core.seq_QMARK_.call(null,map__30843))?cljs.core.apply.call(null,cljs.core.hash_map,map__30843):map__30843);var ctx = map__30843__$1;var tmpl_item = cljs.core.get.call(null,map__30843__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (state_30864){var state_val_30865 = (state_30864[(1)]);if((state_val_30865 === (2)))
{var inst_30846 = (state_30864[(2)]);var inst_30847 = cljs.core.nth.call(null,inst_30846,(0),null);var inst_30848 = cljs.core.nth.call(null,inst_30846,(1),null);var inst_30849 = $("#tmpl_streetsnap_list");var inst_30850 = inst_30849.tmpl(inst_30848,tmpl_item);var inst_30851 = inst_30850.find("#mc_modelContainer");var inst_30852 = inst_30850.find("#btn_search");var inst_30853 = inst_30850.find("#btn_return");var inst_30854 = (function (){var btn_return = inst_30853;var btn_search = inst_30852;var mc_modelContainer = inst_30851;var elem = inst_30850;var tmpl = inst_30849;var model = inst_30848;var err = inst_30847;var vec__30844 = inst_30846;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (state_30871){var state_val_30872 = (state_30871[(1)]);if((state_val_30872 === (2)))
{var inst_30869 = (state_30871[(2)]);var state_30871__$1 = state_30871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30871__$1,inst_30869);
} else
{if((state_val_30872 === (1)))
{var inst_30866 = [name,new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_30867 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30866,null));var state_30871__$1 = state_30871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30871__$1,(2),tool.react.OnReact,inst_30867);
} else
{return null;
}
}
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30876 = [null,null,null,null,null,null,null];(statearr_30876[(0)] = state_machine__6178__auto__);
(statearr_30876[(1)] = (1));
return statearr_30876;
});
var state_machine__6178__auto____1 = (function (state_30871){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30871);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30877){if((e30877 instanceof Object))
{var ex__6181__auto__ = e30877;var statearr_30878_30926 = state_30871;(statearr_30878_30926[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30871);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30927 = state_30871;
state_30871 = G__30927;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30871){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_30879 = f__6193__auto__.call(null);(statearr_30879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_30879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
})();var inst_30855 = inst_30853.click(inst_30854);var inst_30856 = (function (){var btn_return = inst_30853;var btn_search = inst_30852;var mc_modelContainer = inst_30851;var elem = inst_30850;var tmpl = inst_30849;var model = inst_30848;var err = inst_30847;var vec__30844 = inst_30846;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (){var searchKey = elem.find("#input_search").val();if((searchKey.length > (0)))
{var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (state_30888){var state_val_30889 = (state_30888[(1)]);if((state_val_30889 === (2)))
{var inst_30886 = (state_30888[(2)]);var state_30888__$1 = state_30888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30888__$1,inst_30886);
} else
{if((state_val_30889 === (1)))
{var inst_30880 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_30881 = [searchKey];var inst_30882 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30880,inst_30881);var inst_30883 = [name,new cljs.core.Keyword(null,"search","search",1564939822),inst_30882];var inst_30884 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30883,null));var state_30888__$1 = state_30888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30888__$1,(2),tool.react.OnReact,inst_30884);
} else
{return null;
}
}
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30893 = [null,null,null,null,null,null,null];(statearr_30893[(0)] = state_machine__6178__auto__);
(statearr_30893[(1)] = (1));
return statearr_30893;
});
var state_machine__6178__auto____1 = (function (state_30888){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30888);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30894){if((e30894 instanceof Object))
{var ex__6181__auto__ = e30894;var statearr_30895_30928 = state_30888;(statearr_30895_30928[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30888);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30929 = state_30888;
state_30888 = G__30929;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30888){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_30896 = f__6193__auto__.call(null);(statearr_30896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_30896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,searchKey,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
} else
{return null;
}
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
})();var inst_30857 = inst_30852.click(inst_30856);var inst_30858 = (function (){var btn_return = inst_30853;var btn_search = inst_30852;var mc_modelContainer = inst_30851;var elem = inst_30850;var tmpl = inst_30849;var model = inst_30848;var err = inst_30847;var vec__30844 = inst_30846;return ((function (btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,inst_30856,inst_30857,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,inst_30856,inst_30857,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,inst_30856,inst_30857,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function (state_30906){var state_val_30907 = (state_30906[(1)]);if((state_val_30907 === (2)))
{var inst_30904 = (state_30906[(2)]);var state_30906__$1 = state_30906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30906__$1,inst_30904);
} else
{if((state_val_30907 === (1)))
{var inst_30897 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_30898 = that.id;var inst_30899 = [inst_30898];var inst_30900 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30897,inst_30899);var inst_30901 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_30900];var inst_30902 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30901,null));var state_30906__$1 = state_30906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30906__$1,(2),tool.react.OnReact,inst_30902);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,inst_30856,inst_30857,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,inst_30856,inst_30857,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30911 = [null,null,null,null,null,null,null];(statearr_30911[(0)] = state_machine__6178__auto__);
(statearr_30911[(1)] = (1));
return statearr_30911;
});
var state_machine__6178__auto____1 = (function (state_30906){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30906);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30912){if((e30912 instanceof Object))
{var ex__6181__auto__ = e30912;var statearr_30913_30930 = state_30906;(statearr_30913_30930[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30912;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30931 = state_30906;
state_30906 = G__30931;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30906){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,inst_30856,inst_30857,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_30914 = f__6193__auto__.call(null);(statearr_30914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_30914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,inst_30856,inst_30857,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(btn_return,btn_search,mc_modelContainer,elem,tmpl,model,err,vec__30844,inst_30846,inst_30847,inst_30848,inst_30849,inst_30850,inst_30851,inst_30852,inst_30853,inst_30854,inst_30855,inst_30856,inst_30857,state_val_30865,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
})();var inst_30859 = inst_30851.delegate("div[modelFrame]","click",inst_30858);var inst_30860 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_30861 = [inst_30850,name];var inst_30862 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30860,inst_30861);var state_30864__$1 = (function (){var statearr_30915 = state_30864;(statearr_30915[(7)] = inst_30855);
(statearr_30915[(8)] = inst_30857);
(statearr_30915[(9)] = inst_30859);
return statearr_30915;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30864__$1,inst_30862);
} else
{if((state_val_30865 === (1)))
{var state_30864__$1 = state_30864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30864__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30919 = [null,null,null,null,null,null,null,null,null,null];(statearr_30919[(0)] = state_machine__6178__auto__);
(statearr_30919[(1)] = (1));
return statearr_30919;
});
var state_machine__6178__auto____1 = (function (state_30864){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30864);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30920){if((e30920 instanceof Object))
{var ex__6181__auto__ = e30920;var statearr_30921_30932 = state_30864;(statearr_30921_30932[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30864);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30933 = state_30864;
state_30864 = G__30933;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30864){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_30922 = f__6193__auto__.call(null);(statearr_30922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_30922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__30843,map__30843__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
/**
* 詳細頁
*/
app.view.defcommondetail = (function defcommondetail(name){cljs.core._add_method.call(null,tool.react.AnimateClose,name,(function (ctx,key,p__31119){var map__31120 = p__31119;var map__31120__$1 = ((cljs.core.seq_QMARK_.call(null,map__31120))?cljs.core.apply.call(null,cljs.core.hash_map,map__31120):map__31120);var view = map__31120__$1;var elem = cljs.core.get.call(null,map__31120__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_modelContainer_31304 = elem.find("#mc_historyContainer");var mc_sideContainer_31305 = elem.find("#mc_sideContainer");var mc_bottomContainer_31306 = elem.find("#mc_bottomContainer");var img_stylePicture_31307 = elem.find("#img_stylePicture");var btn_share_31308 = elem.find("#btn_share");var btn_fullscreen_31309 = elem.find("#btn_fullscreen");var btn_more_31310 = elem.find("#btn_more");mc_modelContainer_31304.undelegate("img","click");
mc_sideContainer_31305.undelegate("img","click");
mc_bottomContainer_31306.undelegate("img","click");
img_stylePicture_31307.off("click");
btn_share_31308.off("click");
btn_fullscreen_31309.off("click");
btn_more_31310.off("click");
return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,name,(function (ctx,key,p__31121){var map__31122 = p__31121;var map__31122__$1 = ((cljs.core.seq_QMARK_.call(null,map__31122))?cljs.core.apply.call(null,cljs.core.hash_map,map__31122):map__31122);var view = map__31122__$1;var elem = cljs.core.get.call(null,map__31122__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_31311 = elem.find("#mc_3dmask");var c__6192__auto___31312 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___31312,mc_3dmask_31311,map__31122,map__31122__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___31312,mc_3dmask_31311,map__31122,map__31122__$1,view,elem){
return (function (state_31128){var state_val_31129 = (state_31128[(1)]);if((state_val_31129 === (2)))
{var inst_31125 = (state_31128[(2)]);var inst_31126 = mc_3dmask_31311.fadeOut((400));var state_31128__$1 = (function (){var statearr_31130 = state_31128;(statearr_31130[(7)] = inst_31125);
return statearr_31130;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31128__$1,inst_31126);
} else
{if((state_val_31129 === (1)))
{var inst_31123 = cljs.core.async.timeout.call(null,(2000));var state_31128__$1 = state_31128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31128__$1,(2),inst_31123);
} else
{return null;
}
}
});})(c__6192__auto___31312,mc_3dmask_31311,map__31122,map__31122__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___31312,mc_3dmask_31311,map__31122,map__31122__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31134 = [null,null,null,null,null,null,null,null];(statearr_31134[(0)] = state_machine__6178__auto__);
(statearr_31134[(1)] = (1));
return statearr_31134;
});
var state_machine__6178__auto____1 = (function (state_31128){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31128);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31135){if((e31135 instanceof Object))
{var ex__6181__auto__ = e31135;var statearr_31136_31313 = state_31128;(statearr_31136_31313[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31314 = state_31128;
state_31128 = G__31314;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31128){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___31312,mc_3dmask_31311,map__31122,map__31122__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_31137 = f__6193__auto__.call(null);(statearr_31137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___31312);
return statearr_31137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___31312,mc_3dmask_31311,map__31122,map__31122__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
return cljs.core._add_method.call(null,tool.react.view_ch,name,(function (p__31138,key,modelChan){var map__31139 = p__31138;var map__31139__$1 = ((cljs.core.seq_QMARK_.call(null,map__31139))?cljs.core.apply.call(null,cljs.core.hash_map,map__31139):map__31139);var ctx = map__31139__$1;var tmpl_item = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (state_31172){var state_val_31173 = (state_31172[(1)]);if((state_val_31173 === (2)))
{var inst_31142 = (state_31172[(2)]);var inst_31143 = cljs.core.nth.call(null,inst_31142,(0),null);var inst_31144 = cljs.core.nth.call(null,inst_31142,(1),null);var inst_31145 = $("#tmpl_streetsnap");var inst_31146 = inst_31145.tmpl(inst_31144,tmpl_item);var inst_31147 = inst_31146.find("#mc_historyContainer");var inst_31148 = inst_31146.find("#mc_sideContainer");var inst_31149 = inst_31146.find("#mc_bottomContainer");var inst_31150 = inst_31146.find("#img_stylePicture");var inst_31151 = inst_31146.find("#btn_share");var inst_31152 = inst_31146.find("#btn_fullscreen");var inst_31153 = inst_31146.find("#btn_more");var inst_31154 = (function (){var model = inst_31144;var btn_more = inst_31153;var mc_sideContainer = inst_31148;var mc_historyContainer = inst_31147;var vec__31140 = inst_31142;var err = inst_31143;var tmpl = inst_31145;var img_stylePicture = inst_31150;var elem = inst_31146;var btn_share = inst_31151;var mc_bottomContainer = inst_31149;var btn_fullscreen = inst_31152;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (state_31179){var state_val_31180 = (state_31179[(1)]);if((state_val_31180 === (2)))
{var inst_31177 = (state_31179[(2)]);var state_31179__$1 = state_31179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31179__$1,inst_31177);
} else
{if((state_val_31180 === (1)))
{var inst_31174 = [name,new cljs.core.Keyword(null,"toList","toList",-1707783010),cljs.core.PersistentHashMap.EMPTY];var inst_31175 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31174,null));var state_31179__$1 = state_31179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31179__$1,(2),tool.react.OnReact,inst_31175);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31184 = [null,null,null,null,null,null,null];(statearr_31184[(0)] = state_machine__6178__auto__);
(statearr_31184[(1)] = (1));
return statearr_31184;
});
var state_machine__6178__auto____1 = (function (state_31179){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31179);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31185){if((e31185 instanceof Object))
{var ex__6181__auto__ = e31185;var statearr_31186_31315 = state_31179;(statearr_31186_31315[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31316 = state_31179;
state_31179 = G__31316;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31179){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31187 = f__6193__auto__.call(null);(statearr_31187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var inst_31155 = inst_31153.on("click",inst_31154);var inst_31156 = (function (){var model = inst_31144;var btn_more = inst_31153;var mc_sideContainer = inst_31148;var mc_historyContainer = inst_31147;var vec__31140 = inst_31142;var err = inst_31143;var tmpl = inst_31145;var img_stylePicture = inst_31150;var elem = inst_31146;var btn_share = inst_31151;var mc_bottomContainer = inst_31149;var btn_fullscreen = inst_31152;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (state_31196){var state_val_31197 = (state_31196[(1)]);if((state_val_31197 === (2)))
{var inst_31194 = (state_31196[(2)]);var state_31196__$1 = state_31196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31196__$1,inst_31194);
} else
{if((state_val_31197 === (1)))
{var inst_31188 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_31189 = [model];var inst_31190 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31188,inst_31189);var inst_31191 = [name,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),inst_31190];var inst_31192 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31191,null));var state_31196__$1 = state_31196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31196__$1,(2),tool.react.OnReact,inst_31192);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31201 = [null,null,null,null,null,null,null];(statearr_31201[(0)] = state_machine__6178__auto__);
(statearr_31201[(1)] = (1));
return statearr_31201;
});
var state_machine__6178__auto____1 = (function (state_31196){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31196);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31202){if((e31202 instanceof Object))
{var ex__6181__auto__ = e31202;var statearr_31203_31317 = state_31196;(statearr_31203_31317[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31196);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31318 = state_31196;
state_31196 = G__31318;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31196){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31204 = f__6193__auto__.call(null);(statearr_31204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var inst_31157 = inst_31152.on("click",inst_31156);var inst_31158 = (function (){var model = inst_31144;var btn_more = inst_31153;var mc_sideContainer = inst_31148;var mc_historyContainer = inst_31147;var vec__31140 = inst_31142;var err = inst_31143;var tmpl = inst_31145;var img_stylePicture = inst_31150;var elem = inst_31146;var btn_share = inst_31151;var mc_bottomContainer = inst_31149;var btn_fullscreen = inst_31152;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (state_31214){var state_val_31215 = (state_31214[(1)]);if((state_val_31215 === (2)))
{var inst_31212 = (state_31214[(2)]);var state_31214__$1 = state_31214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31214__$1,inst_31212);
} else
{if((state_val_31215 === (1)))
{var inst_31205 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_31206 = model.styleUrl;var inst_31207 = [inst_31206];var inst_31208 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31205,inst_31207);var inst_31209 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_31208];var inst_31210 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31209,null));var state_31214__$1 = state_31214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31214__$1,(2),tool.react.OnReact,inst_31210);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31219 = [null,null,null,null,null,null,null];(statearr_31219[(0)] = state_machine__6178__auto__);
(statearr_31219[(1)] = (1));
return statearr_31219;
});
var state_machine__6178__auto____1 = (function (state_31214){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31214);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31220){if((e31220 instanceof Object))
{var ex__6181__auto__ = e31220;var statearr_31221_31319 = state_31214;(statearr_31221_31319[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31214);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31320 = state_31214;
state_31214 = G__31320;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31214){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31222 = f__6193__auto__.call(null);(statearr_31222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var inst_31159 = inst_31150.on("click",inst_31158);var inst_31160 = (function (){var model = inst_31144;var btn_more = inst_31153;var mc_sideContainer = inst_31148;var mc_historyContainer = inst_31147;var vec__31140 = inst_31142;var err = inst_31143;var tmpl = inst_31145;var img_stylePicture = inst_31150;var elem = inst_31146;var btn_share = inst_31151;var mc_bottomContainer = inst_31149;var btn_fullscreen = inst_31152;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (state_31231){var state_val_31232 = (state_31231[(1)]);if((state_val_31232 === (2)))
{var inst_31229 = (state_31231[(2)]);var state_31231__$1 = state_31231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31231__$1,inst_31229);
} else
{if((state_val_31232 === (1)))
{var inst_31223 = [new cljs.core.Keyword(null,"model","model",331153215)];var inst_31224 = [model];var inst_31225 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31223,inst_31224);var inst_31226 = [name,new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),inst_31225];var inst_31227 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31226,null));var state_31231__$1 = state_31231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31231__$1,(2),tool.react.OnReact,inst_31227);
} else
{return null;
}
}
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31236 = [null,null,null,null,null,null,null];(statearr_31236[(0)] = state_machine__6178__auto__);
(statearr_31236[(1)] = (1));
return statearr_31236;
});
var state_machine__6178__auto____1 = (function (state_31231){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31231);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31237){if((e31237 instanceof Object))
{var ex__6181__auto__ = e31237;var statearr_31238_31321 = state_31231;(statearr_31238_31321[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31231);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31322 = state_31231;
state_31231 = G__31322;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31231){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31239 = f__6193__auto__.call(null);(statearr_31239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var inst_31161 = inst_31151.on("click",inst_31160);var inst_31162 = (function (){var model = inst_31144;var btn_more = inst_31153;var mc_sideContainer = inst_31148;var mc_historyContainer = inst_31147;var vec__31140 = inst_31142;var err = inst_31143;var tmpl = inst_31145;var img_stylePicture = inst_31150;var elem = inst_31146;var btn_share = inst_31151;var mc_bottomContainer = inst_31149;var btn_fullscreen = inst_31152;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (state_31250){var state_val_31251 = (state_31250[(1)]);if((state_val_31251 === (2)))
{var inst_31248 = (state_31250[(2)]);var state_31250__$1 = state_31250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31250__$1,inst_31248);
} else
{if((state_val_31251 === (1)))
{var inst_31240 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_31241 = that.id;var inst_31242 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31241));var inst_31243 = [inst_31242];var inst_31244 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31240,inst_31243);var inst_31245 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_31244];var inst_31246 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31245,null));var state_31250__$1 = state_31250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31250__$1,(2),tool.react.OnReact,inst_31246);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31255 = [null,null,null,null,null,null,null];(statearr_31255[(0)] = state_machine__6178__auto__);
(statearr_31255[(1)] = (1));
return statearr_31255;
});
var state_machine__6178__auto____1 = (function (state_31250){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31250);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31256){if((e31256 instanceof Object))
{var ex__6181__auto__ = e31256;var statearr_31257_31323 = state_31250;(statearr_31257_31323[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31250);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31256;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31324 = state_31250;
state_31250 = G__31324;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31250){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31258 = f__6193__auto__.call(null);(statearr_31258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var inst_31163 = inst_31148.delegate("img","click",inst_31162);var inst_31164 = (function (){var model = inst_31144;var btn_more = inst_31153;var mc_sideContainer = inst_31148;var mc_historyContainer = inst_31147;var vec__31140 = inst_31142;var err = inst_31143;var tmpl = inst_31145;var img_stylePicture = inst_31150;var elem = inst_31146;var btn_share = inst_31151;var mc_bottomContainer = inst_31149;var btn_fullscreen = inst_31152;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (state_31269){var state_val_31270 = (state_31269[(1)]);if((state_val_31270 === (2)))
{var inst_31267 = (state_31269[(2)]);var state_31269__$1 = state_31269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31269__$1,inst_31267);
} else
{if((state_val_31270 === (1)))
{var inst_31259 = [new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881)];var inst_31260 = that.id;var inst_31261 = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31260));var inst_31262 = [inst_31261];var inst_31263 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31259,inst_31262);var inst_31264 = [name,new cljs.core.Keyword(null,"toBig","toBig",-1136569839),inst_31263];var inst_31265 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31264,null));var state_31269__$1 = state_31269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31269__$1,(2),tool.react.OnReact,inst_31265);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31274 = [null,null,null,null,null,null,null];(statearr_31274[(0)] = state_machine__6178__auto__);
(statearr_31274[(1)] = (1));
return statearr_31274;
});
var state_machine__6178__auto____1 = (function (state_31269){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31269);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31275){if((e31275 instanceof Object))
{var ex__6181__auto__ = e31275;var statearr_31276_31325 = state_31269;(statearr_31276_31325[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31269);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31326 = state_31269;
state_31269 = G__31326;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31269){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31277 = f__6193__auto__.call(null);(statearr_31277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var inst_31165 = inst_31149.delegate("img","click",inst_31164);var inst_31166 = (function (){var model = inst_31144;var btn_more = inst_31153;var mc_sideContainer = inst_31148;var mc_historyContainer = inst_31147;var vec__31140 = inst_31142;var err = inst_31143;var tmpl = inst_31145;var img_stylePicture = inst_31150;var elem = inst_31146;var btn_share = inst_31151;var mc_bottomContainer = inst_31149;var btn_fullscreen = inst_31152;return ((function (model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,inst_31164,inst_31165,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var that = this;var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,inst_31164,inst_31165,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,inst_31164,inst_31165,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function (state_31287){var state_val_31288 = (state_31287[(1)]);if((state_val_31288 === (2)))
{var inst_31285 = (state_31287[(2)]);var state_31287__$1 = state_31287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31287__$1,inst_31285);
} else
{if((state_val_31288 === (1)))
{var inst_31278 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_31279 = that.id;var inst_31280 = [inst_31279];var inst_31281 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31278,inst_31280);var inst_31282 = [name,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_31281];var inst_31283 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31282,null));var state_31287__$1 = state_31287;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31287__$1,(2),tool.react.OnReact,inst_31283);
} else
{return null;
}
}
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,inst_31164,inst_31165,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,inst_31164,inst_31165,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31292 = [null,null,null,null,null,null,null];(statearr_31292[(0)] = state_machine__6178__auto__);
(statearr_31292[(1)] = (1));
return statearr_31292;
});
var state_machine__6178__auto____1 = (function (state_31287){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31287);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31293){if((e31293 instanceof Object))
{var ex__6181__auto__ = e31293;var statearr_31294_31327 = state_31287;(statearr_31294_31327[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31328 = state_31287;
state_31287 = G__31328;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31287){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,inst_31164,inst_31165,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31295 = f__6193__auto__.call(null);(statearr_31295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,that,model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,inst_31164,inst_31165,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(model,btn_more,mc_sideContainer,mc_historyContainer,vec__31140,err,tmpl,img_stylePicture,elem,btn_share,mc_bottomContainer,btn_fullscreen,inst_31142,inst_31143,inst_31144,inst_31145,inst_31146,inst_31147,inst_31148,inst_31149,inst_31150,inst_31151,inst_31152,inst_31153,inst_31154,inst_31155,inst_31156,inst_31157,inst_31158,inst_31159,inst_31160,inst_31161,inst_31162,inst_31163,inst_31164,inst_31165,state_val_31173,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var inst_31167 = inst_31147.delegate("img","click",inst_31166);var inst_31168 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_31169 = [inst_31146,name];var inst_31170 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31168,inst_31169);var state_31172__$1 = (function (){var statearr_31296 = state_31172;(statearr_31296[(7)] = inst_31159);
(statearr_31296[(8)] = inst_31167);
(statearr_31296[(9)] = inst_31157);
(statearr_31296[(10)] = inst_31163);
(statearr_31296[(11)] = inst_31155);
(statearr_31296[(12)] = inst_31165);
(statearr_31296[(13)] = inst_31161);
return statearr_31296;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31172__$1,inst_31170);
} else
{if((state_val_31173 === (1)))
{var state_31172__$1 = state_31172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31172__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31300[(0)] = state_machine__6178__auto__);
(statearr_31300[(1)] = (1));
return statearr_31300;
});
var state_machine__6178__auto____1 = (function (state_31172){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31172);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31301){if((e31301 instanceof Object))
{var ex__6181__auto__ = e31301;var statearr_31302_31329 = state_31172;(statearr_31302_31329[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31172);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31330 = state_31172;
state_31172 = G__31330;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31172){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31303 = f__6193__auto__.call(null);(statearr_31303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__31139,map__31139__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
});
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,p__31331){var map__31332 = p__31331;var map__31332__$1 = ((cljs.core.seq_QMARK_.call(null,map__31332))?cljs.core.apply.call(null,cljs.core.hash_map,map__31332):map__31332);var view = map__31332__$1;var elem = cljs.core.get.call(null,map__31332__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var mc_3dmask_31348 = elem.find("#mc_3dmask");var c__6192__auto___31349 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___31349,mc_3dmask_31348,map__31332,map__31332__$1,view,elem){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___31349,mc_3dmask_31348,map__31332,map__31332__$1,view,elem){
return (function (state_31338){var state_val_31339 = (state_31338[(1)]);if((state_val_31339 === (2)))
{var inst_31335 = (state_31338[(2)]);var inst_31336 = mc_3dmask_31348.fadeOut((400));var state_31338__$1 = (function (){var statearr_31340 = state_31338;(statearr_31340[(7)] = inst_31335);
return statearr_31340;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31338__$1,inst_31336);
} else
{if((state_val_31339 === (1)))
{var inst_31333 = cljs.core.async.timeout.call(null,(2000));var state_31338__$1 = state_31338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31338__$1,(2),inst_31333);
} else
{return null;
}
}
});})(c__6192__auto___31349,mc_3dmask_31348,map__31332,map__31332__$1,view,elem))
;return ((function (switch__6177__auto__,c__6192__auto___31349,mc_3dmask_31348,map__31332,map__31332__$1,view,elem){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31344 = [null,null,null,null,null,null,null,null];(statearr_31344[(0)] = state_machine__6178__auto__);
(statearr_31344[(1)] = (1));
return statearr_31344;
});
var state_machine__6178__auto____1 = (function (state_31338){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31338);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31345){if((e31345 instanceof Object))
{var ex__6181__auto__ = e31345;var statearr_31346_31350 = state_31338;(statearr_31346_31350[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31338);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31351 = state_31338;
state_31338 = G__31351;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31338){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___31349,mc_3dmask_31348,map__31332,map__31332__$1,view,elem))
})();var state__6194__auto__ = (function (){var statearr_31347 = f__6193__auto__.call(null);(statearr_31347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___31349);
return statearr_31347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___31349,mc_3dmask_31348,map__31332,map__31332__$1,view,elem))
);
return tool.react.AnimateOpen.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (p__31352,key,modelChan){var map__31353 = p__31352;var map__31353__$1 = ((cljs.core.seq_QMARK_.call(null,map__31353))?cljs.core.apply.call(null,cljs.core.hash_map,map__31353):map__31353);var ctx = map__31353__$1;var tmpl_item = cljs.core.get.call(null,map__31353__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__31353,map__31353__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__31353,map__31353__$1,ctx,tmpl_item){
return (function (state_31365){var state_val_31366 = (state_31365[(1)]);if((state_val_31366 === (2)))
{var inst_31356 = (state_31365[(2)]);var inst_31357 = cljs.core.nth.call(null,inst_31356,(0),null);var inst_31358 = cljs.core.nth.call(null,inst_31356,(1),null);var inst_31359 = $("#tmpl_home");var inst_31360 = inst_31359.tmpl(inst_31358,tmpl_item);var inst_31361 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_31362 = [inst_31360,key];var inst_31363 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31361,inst_31362);var state_31365__$1 = (function (){var statearr_31367 = state_31365;(statearr_31367[(7)] = inst_31357);
return statearr_31367;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31365__$1,inst_31363);
} else
{if((state_val_31366 === (1)))
{var state_31365__$1 = state_31365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31365__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__31353,map__31353__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__31353,map__31353__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31371 = [null,null,null,null,null,null,null,null];(statearr_31371[(0)] = state_machine__6178__auto__);
(statearr_31371[(1)] = (1));
return statearr_31371;
});
var state_machine__6178__auto____1 = (function (state_31365){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31365);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31372){if((e31372 instanceof Object))
{var ex__6181__auto__ = e31372;var statearr_31373_31375 = state_31365;(statearr_31373_31375[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31365);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31376 = state_31365;
state_31365 = G__31376;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31365){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__31353,map__31353__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31374 = f__6193__auto__.call(null);(statearr_31374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__31353,map__31353__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.AnimateOpen,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__31377,key,view){var map__31378 = p__31377;var map__31378__$1 = ((cljs.core.seq_QMARK_.call(null,map__31378))?cljs.core.apply.call(null,cljs.core.hash_map,map__31378):map__31378);var ctx = map__31378__$1;var popupContainer = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852));var G__31379 = new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(view);G__31379.appendTo(popupContainer);
G__31379.fadeIn((400));
return G__31379;
}));
cljs.core._add_method.call(null,tool.react.AnimateClose,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__31380,key,p__31381){var map__31382 = p__31380;var map__31382__$1 = ((cljs.core.seq_QMARK_.call(null,map__31382))?cljs.core.apply.call(null,cljs.core.hash_map,map__31382):map__31382);var ctx = map__31382__$1;var container = cljs.core.get.call(null,map__31382__$1,new cljs.core.Keyword(null,"container","container",-1736937707));var map__31383 = p__31381;var map__31383__$1 = ((cljs.core.seq_QMARK_.call(null,map__31383))?cljs.core.apply.call(null,cljs.core.hash_map,map__31383):map__31383);var view = map__31383__$1;var elem = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"elem","elem",618631056));var back = elem.find("#mc_bigPhotoFixPosition");back.off("click");
return elem.fadeOut((400),((function (back,map__31382,map__31382__$1,ctx,container,map__31383,map__31383__$1,view,elem){
return (function (){return tool.react.AnimateClose.call(null,ctx,new cljs.core.Keyword(null,"default","default",-1987822328),view);
});})(back,map__31382,map__31382__$1,ctx,container,map__31383,map__31383__$1,view,elem))
);
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"Big","Big",-1370423625),(function (p__31384,key,modelChan){var map__31385 = p__31384;var map__31385__$1 = ((cljs.core.seq_QMARK_.call(null,map__31385))?cljs.core.apply.call(null,cljs.core.hash_map,map__31385):map__31385);var ctx = map__31385__$1;var tmpl_item = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item){
return (function (state_31400){var state_val_31401 = (state_31400[(1)]);if((state_val_31401 === (2)))
{var inst_31388 = (state_31400[(2)]);var inst_31389 = cljs.core.nth.call(null,inst_31388,(0),null);var inst_31390 = cljs.core.nth.call(null,inst_31388,(1),null);var inst_31391 = $("#tmpl_bigPhoto");var inst_31392 = inst_31391.tmpl(inst_31390,tmpl_item);var inst_31393 = inst_31392.find("#mc_bigPhotoFixPosition");var inst_31394 = (function (){var back = inst_31393;var elem = inst_31392;var tmpl = inst_31391;var model = inst_31390;var err = inst_31389;var vec__31386 = inst_31388;return ((function (back,elem,tmpl,model,err,vec__31386,inst_31388,inst_31389,inst_31390,inst_31391,inst_31392,inst_31393,state_val_31401,c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item){
return (function (){var c__6192__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__31386,inst_31388,inst_31389,inst_31390,inst_31391,inst_31392,inst_31393,state_val_31401,c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto____$1,back,elem,tmpl,model,err,vec__31386,inst_31388,inst_31389,inst_31390,inst_31391,inst_31392,inst_31393,state_val_31401,c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item){
return (function (state_31407){var state_val_31408 = (state_31407[(1)]);if((state_val_31408 === (2)))
{var inst_31405 = (state_31407[(2)]);var state_31407__$1 = state_31407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31407__$1,inst_31405);
} else
{if((state_val_31408 === (1)))
{var inst_31402 = [key,new cljs.core.Keyword(null,"close","close",1835149582),null];var inst_31403 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31402,null));var state_31407__$1 = state_31407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31407__$1,(2),tool.react.OnReact,inst_31403);
} else
{return null;
}
}
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__31386,inst_31388,inst_31389,inst_31390,inst_31391,inst_31392,inst_31393,state_val_31401,c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__31386,inst_31388,inst_31389,inst_31390,inst_31391,inst_31392,inst_31393,state_val_31401,c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31412 = [null,null,null,null,null,null,null];(statearr_31412[(0)] = state_machine__6178__auto__);
(statearr_31412[(1)] = (1));
return statearr_31412;
});
var state_machine__6178__auto____1 = (function (state_31407){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31407);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31413){if((e31413 instanceof Object))
{var ex__6181__auto__ = e31413;var statearr_31414_31424 = state_31407;(statearr_31414_31424[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31407);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31425 = state_31407;
state_31407 = G__31425;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31407){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto____$1,back,elem,tmpl,model,err,vec__31386,inst_31388,inst_31389,inst_31390,inst_31391,inst_31392,inst_31393,state_val_31401,c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31415 = f__6193__auto__.call(null);(statearr_31415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto____$1);
return statearr_31415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto____$1,back,elem,tmpl,model,err,vec__31386,inst_31388,inst_31389,inst_31390,inst_31391,inst_31392,inst_31393,state_val_31401,c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item))
);
return c__6192__auto____$1;
});
;})(back,elem,tmpl,model,err,vec__31386,inst_31388,inst_31389,inst_31390,inst_31391,inst_31392,inst_31393,state_val_31401,c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item))
})();var inst_31395 = inst_31393.on("click",inst_31394);var inst_31396 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_31397 = [inst_31392,key];var inst_31398 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31396,inst_31397);var state_31400__$1 = (function (){var statearr_31416 = state_31400;(statearr_31416[(7)] = inst_31395);
return statearr_31416;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31400__$1,inst_31398);
} else
{if((state_val_31401 === (1)))
{var state_31400__$1 = state_31400;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31400__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31420 = [null,null,null,null,null,null,null,null];(statearr_31420[(0)] = state_machine__6178__auto__);
(statearr_31420[(1)] = (1));
return statearr_31420;
});
var state_machine__6178__auto____1 = (function (state_31400){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31400);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31421){if((e31421 instanceof Object))
{var ex__6181__auto__ = e31421;var statearr_31422_31426 = state_31400;(statearr_31422_31426[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31400);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31427 = state_31400;
state_31400 = G__31427;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31400){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31423 = f__6193__auto__.call(null);(statearr_31423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__31385,map__31385__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
cljs.core._add_method.call(null,tool.react.view_ch,new cljs.core.Keyword(null,"News","News",942909716),(function (p__31428,key,modelChan){var map__31429 = p__31428;var map__31429__$1 = ((cljs.core.seq_QMARK_.call(null,map__31429))?cljs.core.apply.call(null,cljs.core.hash_map,map__31429):map__31429);var ctx = map__31429__$1;var tmpl_item = cljs.core.get.call(null,map__31429__$1,new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,map__31429,map__31429__$1,ctx,tmpl_item){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,map__31429,map__31429__$1,ctx,tmpl_item){
return (function (state_31441){var state_val_31442 = (state_31441[(1)]);if((state_val_31442 === (2)))
{var inst_31432 = (state_31441[(2)]);var inst_31433 = cljs.core.nth.call(null,inst_31432,(0),null);var inst_31434 = cljs.core.nth.call(null,inst_31432,(1),null);var inst_31435 = $("#tmpl_news");var inst_31436 = inst_31435.tmpl(inst_31434,tmpl_item);var inst_31437 = [new cljs.core.Keyword(null,"elem","elem",618631056),new cljs.core.Keyword(null,"name","name",1843675177)];var inst_31438 = [inst_31436,key];var inst_31439 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31437,inst_31438);var state_31441__$1 = (function (){var statearr_31443 = state_31441;(statearr_31443[(7)] = inst_31433);
return statearr_31443;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31441__$1,inst_31439);
} else
{if((state_val_31442 === (1)))
{var state_31441__$1 = state_31441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31441__$1,(2),modelChan);
} else
{return null;
}
}
});})(c__6192__auto__,map__31429,map__31429__$1,ctx,tmpl_item))
;return ((function (switch__6177__auto__,c__6192__auto__,map__31429,map__31429__$1,ctx,tmpl_item){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_31447 = [null,null,null,null,null,null,null,null];(statearr_31447[(0)] = state_machine__6178__auto__);
(statearr_31447[(1)] = (1));
return statearr_31447;
});
var state_machine__6178__auto____1 = (function (state_31441){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_31441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e31448){if((e31448 instanceof Object))
{var ex__6181__auto__ = e31448;var statearr_31449_31451 = state_31441;(statearr_31449_31451[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31441);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31448;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31452 = state_31441;
state_31441 = G__31452;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_31441){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_31441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,map__31429,map__31429__$1,ctx,tmpl_item))
})();var state__6194__auto__ = (function (){var statearr_31450 = f__6193__auto__.call(null);(statearr_31450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_31450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,map__31429,map__31429__$1,ctx,tmpl_item))
);
return c__6192__auto__;
}));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ModelList","ModelList",1484397832));
app.view.defcommonlist.call(null,new cljs.core.Keyword(null,"ProductList","ProductList",-600506917));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Model","Model",-1633340081));
app.view.defcommondetail.call(null,new cljs.core.Keyword(null,"Product","Product",1806927075));
