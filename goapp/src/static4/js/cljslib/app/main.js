// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('app.fn');
goog.require('app.view');
goog.require('app.model');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('app.fn');
goog.require('cljs.core.async');
goog.require('app.model');
goog.require('tool.react');
goog.require('app.view');
app.main.menubar = (function menubar(root){var menubar__$1 = root.find("#mc_menubar");var handleBtnMouseOut = ((function (menubar__$1){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj21809 = {"width":"0px"};return obj21809;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj21811 = {"width":"120px"};return obj21811;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__21812 = cljs.core._EQ_;var expr__21813 = id;if(cljs.core.truth_(pred__21812.call(null,"btn_nav_celebrity",expr__21813)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__21812.call(null,"btn_nav_event",expr__21813)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__21812.call(null,"btn_nav_model",expr__21813)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__21812.call(null,"btn_nav_streetSnap",expr__21813)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__21812.call(null,"btn_nav_product",expr__21813)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),null], null);
} else
{return cljs.core.identity;
}
}
}
}
}
})();var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (state_21818){var state_val_21819 = (state_21818[(1)]);if((state_val_21819 === (2)))
{var inst_21816 = (state_21818[(2)]);var state_21818__$1 = state_21818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21818__$1,inst_21816);
} else
{if((state_val_21819 === (1)))
{var state_21818__$1 = state_21818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21818__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6201__auto__,c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_21823 = [null,null,null,null,null,null,null];(statearr_21823[(0)] = state_machine__6202__auto__);
(statearr_21823[(1)] = (1));
return statearr_21823;
});
var state_machine__6202__auto____1 = (function (state_21818){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_21818);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e21824){if((e21824 instanceof Object))
{var ex__6205__auto__ = e21824;var statearr_21825_21827 = state_21818;(statearr_21825_21827[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21828 = state_21818;
state_21818 = G__21828;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_21818){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_21818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6218__auto__ = (function (){var statearr_21826 = f__6217__auto__.call(null);(statearr_21826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_21826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6216__auto__;
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
app.main.header = (function header(root){var btn_home = root.find("#btn_backhome");return btn_home.click(((function (btn_home){
return (function (){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,btn_home){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,btn_home){
return (function (state_21848){var state_val_21849 = (state_21848[(1)]);if((state_val_21849 === (2)))
{var inst_21846 = (state_21848[(2)]);var state_21848__$1 = state_21848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21848__$1,inst_21846);
} else
{if((state_val_21849 === (1)))
{var inst_21843 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_21844 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21843,null));var state_21848__$1 = state_21848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21848__$1,(2),tool.react.OnReact,inst_21844);
} else
{return null;
}
}
});})(c__6216__auto__,btn_home))
;return ((function (switch__6201__auto__,c__6216__auto__,btn_home){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_21853 = [null,null,null,null,null,null,null];(statearr_21853[(0)] = state_machine__6202__auto__);
(statearr_21853[(1)] = (1));
return statearr_21853;
});
var state_machine__6202__auto____1 = (function (state_21848){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_21848);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e21854){if((e21854 instanceof Object))
{var ex__6205__auto__ = e21854;var statearr_21855_21857 = state_21848;(statearr_21855_21857[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21858 = state_21848;
state_21848 = G__21858;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_21848){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_21848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,btn_home))
})();var state__6218__auto__ = (function (){var statearr_21856 = f__6217__auto__.call(null);(statearr_21856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_21856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,btn_home))
);
return c__6216__auto__;
});})(btn_home))
);
});
app.main.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__21859){var map__21861 = p__21859;var map__21861__$1 = ((cljs.core.seq_QMARK_.call(null,map__21861))?cljs.core.apply.call(null,cljs.core.hash_map,map__21861):map__21861);var args = map__21861__$1;var basicUrl = cljs.core.get.call(null,map__21861__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.main.ShowLogo = (function ShowLogo(p__21863,p__21864){var map__21877 = p__21863;var map__21877__$1 = ((cljs.core.seq_QMARK_.call(null,map__21877))?cljs.core.apply.call(null,cljs.core.hash_map,map__21877):map__21877);var ctx = map__21877__$1;var root = cljs.core.get.call(null,map__21877__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__21878 = p__21864;var map__21878__$1 = ((cljs.core.seq_QMARK_.call(null,map__21878))?cljs.core.apply.call(null,cljs.core.hash_map,map__21878):map__21878);var args = map__21878__$1;var curr_view = cljs.core.get.call(null,map__21878__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_21889 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__21879_21890 = cljs.core.seq.call(null,logoNames_21889);var chunk__21880_21891 = null;var count__21881_21892 = (0);var i__21882_21893 = (0);while(true){
if((i__21882_21893 < count__21881_21892))
{var vec__21883_21894 = cljs.core._nth.call(null,chunk__21880_21891,i__21882_21893);var names_21895 = cljs.core.nth.call(null,vec__21883_21894,(0),null);var logoName_21896 = cljs.core.nth.call(null,vec__21883_21894,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__21879_21890,chunk__21880_21891,count__21881_21892,i__21882_21893,vec__21883_21894,names_21895,logoName_21896,logoNames_21889,map__21877,map__21877__$1,ctx,root,map__21878,map__21878__$1,args,curr_view){
return (function (p1__21862_SHARP_){return cljs.core._EQ_.call(null,p1__21862_SHARP_,curr_view);
});})(seq__21879_21890,chunk__21880_21891,count__21881_21892,i__21882_21893,vec__21883_21894,names_21895,logoName_21896,logoNames_21889,map__21877,map__21877__$1,ctx,root,map__21878,map__21878__$1,args,curr_view))
,names_21895)))
{var G__21884_21897 = root.find(logoName_21896);G__21884_21897.fadeIn((400));
} else
{var G__21885_21898 = root.find(logoName_21896);G__21885_21898.hide();
}
{
var G__21899 = seq__21879_21890;
var G__21900 = chunk__21880_21891;
var G__21901 = count__21881_21892;
var G__21902 = (i__21882_21893 + (1));
seq__21879_21890 = G__21899;
chunk__21880_21891 = G__21900;
count__21881_21892 = G__21901;
i__21882_21893 = G__21902;
continue;
}
} else
{var temp__4126__auto___21903 = cljs.core.seq.call(null,seq__21879_21890);if(temp__4126__auto___21903)
{var seq__21879_21904__$1 = temp__4126__auto___21903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21879_21904__$1))
{var c__4307__auto___21905 = cljs.core.chunk_first.call(null,seq__21879_21904__$1);{
var G__21906 = cljs.core.chunk_rest.call(null,seq__21879_21904__$1);
var G__21907 = c__4307__auto___21905;
var G__21908 = cljs.core.count.call(null,c__4307__auto___21905);
var G__21909 = (0);
seq__21879_21890 = G__21906;
chunk__21880_21891 = G__21907;
count__21881_21892 = G__21908;
i__21882_21893 = G__21909;
continue;
}
} else
{var vec__21886_21910 = cljs.core.first.call(null,seq__21879_21904__$1);var names_21911 = cljs.core.nth.call(null,vec__21886_21910,(0),null);var logoName_21912 = cljs.core.nth.call(null,vec__21886_21910,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__21879_21890,chunk__21880_21891,count__21881_21892,i__21882_21893,vec__21886_21910,names_21911,logoName_21912,seq__21879_21904__$1,temp__4126__auto___21903,logoNames_21889,map__21877,map__21877__$1,ctx,root,map__21878,map__21878__$1,args,curr_view){
return (function (p1__21862_SHARP_){return cljs.core._EQ_.call(null,p1__21862_SHARP_,curr_view);
});})(seq__21879_21890,chunk__21880_21891,count__21881_21892,i__21882_21893,vec__21886_21910,names_21911,logoName_21912,seq__21879_21904__$1,temp__4126__auto___21903,logoNames_21889,map__21877,map__21877__$1,ctx,root,map__21878,map__21878__$1,args,curr_view))
,names_21911)))
{var G__21887_21913 = root.find(logoName_21912);G__21887_21913.fadeIn((400));
} else
{var G__21888_21914 = root.find(logoName_21912);G__21888_21914.hide();
}
{
var G__21915 = cljs.core.next.call(null,seq__21879_21904__$1);
var G__21916 = null;
var G__21917 = (0);
var G__21918 = (0);
seq__21879_21890 = G__21915;
chunk__21880_21891 = G__21916;
count__21881_21892 = G__21917;
i__21882_21893 = G__21918;
continue;
}
}
} else
{}
}
break;
}
return ctx;
});
app.main.main = (function main(){var route = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.main.ShowLogo], null)], null),new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.OpenView], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null)], null),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.main.OpenPhotoUrl], null)], null),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.main.OpenPhotoUrl], null)], null),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.main.OpenPhotoUrl], null)], null)], null);var sdyleColor = "rgb(185,71,132)";var root = $(".root");var tmpl_item = (function (){var obj21948 = {"brandToColor":((function (route,sdyleColor,root){
return (function (brand){if((brand.length > (0)))
{return sdyleColor;
} else
{return null;
}
});})(route,sdyleColor,root))
};return obj21948;
})();var ctx = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701),tmpl_item], null);app.main.menubar.call(null,root);
app.main.header.call(null,root);
var c__6216__auto___21975 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto___21975,route,sdyleColor,root,tmpl_item,ctx){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto___21975,route,sdyleColor,root,tmpl_item,ctx){
return (function (state_21952){var state_val_21953 = (state_21952[(1)]);if((state_val_21953 === (1)))
{var inst_21949 = cljs.core.partial.call(null,tool.react.React,route);var inst_21950 = cljs.core.async.reduce.call(null,inst_21949,ctx,tool.react.OnReact);var state_21952__$1 = state_21952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21952__$1,inst_21950);
} else
{return null;
}
});})(c__6216__auto___21975,route,sdyleColor,root,tmpl_item,ctx))
;return ((function (switch__6201__auto__,c__6216__auto___21975,route,sdyleColor,root,tmpl_item,ctx){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_21957 = [null,null,null,null,null,null,null];(statearr_21957[(0)] = state_machine__6202__auto__);
(statearr_21957[(1)] = (1));
return statearr_21957;
});
var state_machine__6202__auto____1 = (function (state_21952){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_21952);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e21958){if((e21958 instanceof Object))
{var ex__6205__auto__ = e21958;var statearr_21959_21976 = state_21952;(statearr_21959_21976[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21952);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21977 = state_21952;
state_21952 = G__21977;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_21952){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_21952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto___21975,route,sdyleColor,root,tmpl_item,ctx))
})();var state__6218__auto__ = (function (){var statearr_21960 = f__6217__auto__.call(null);(statearr_21960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___21975);
return statearr_21960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto___21975,route,sdyleColor,root,tmpl_item,ctx))
);
var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,route,sdyleColor,root,tmpl_item,ctx){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,route,sdyleColor,root,tmpl_item,ctx){
return (function (state_21966){var state_val_21967 = (state_21966[(1)]);if((state_val_21967 === (2)))
{var inst_21964 = (state_21966[(2)]);var state_21966__$1 = state_21966;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21966__$1,inst_21964);
} else
{if((state_val_21967 === (1)))
{var inst_21961 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"open","open",-1763596448),null];var inst_21962 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21961,null));var state_21966__$1 = state_21966;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21966__$1,(2),tool.react.OnReact,inst_21962);
} else
{return null;
}
}
});})(c__6216__auto__,route,sdyleColor,root,tmpl_item,ctx))
;return ((function (switch__6201__auto__,c__6216__auto__,route,sdyleColor,root,tmpl_item,ctx){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_21971 = [null,null,null,null,null,null,null];(statearr_21971[(0)] = state_machine__6202__auto__);
(statearr_21971[(1)] = (1));
return statearr_21971;
});
var state_machine__6202__auto____1 = (function (state_21966){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_21966);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e21972){if((e21972 instanceof Object))
{var ex__6205__auto__ = e21972;var statearr_21973_21978 = state_21966;(statearr_21973_21978[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21966);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21979 = state_21966;
state_21966 = G__21979;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_21966){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_21966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,route,sdyleColor,root,tmpl_item,ctx))
})();var state__6218__auto__ = (function (){var statearr_21974 = f__6217__auto__.call(null);(statearr_21974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_21974;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,route,sdyleColor,root,tmpl_item,ctx))
);
return c__6216__auto__;
});
app.main.main.call(null);
