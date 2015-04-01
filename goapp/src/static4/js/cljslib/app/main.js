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
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj32734 = {"width":"0px"};return obj32734;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj32736 = {"width":"120px"};return obj32736;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__32737 = cljs.core._EQ_;var expr__32738 = id;if(cljs.core.truth_(pred__32737.call(null,"btn_nav_celebrity",expr__32738)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__32737.call(null,"btn_nav_event",expr__32738)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__32737.call(null,"btn_nav_model",expr__32738)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__32737.call(null,"btn_nav_streetSnap",expr__32738)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__32737.call(null,"btn_nav_product",expr__32738)))
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
return (function (state_32743){var state_val_32744 = (state_32743[(1)]);if((state_val_32744 === (2)))
{var inst_32741 = (state_32743[(2)]);var state_32743__$1 = state_32743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32743__$1,inst_32741);
} else
{if((state_val_32744 === (1)))
{var state_32743__$1 = state_32743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32743__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6201__auto__,c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_32748 = [null,null,null,null,null,null,null];(statearr_32748[(0)] = state_machine__6202__auto__);
(statearr_32748[(1)] = (1));
return statearr_32748;
});
var state_machine__6202__auto____1 = (function (state_32743){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_32743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e32749){if((e32749 instanceof Object))
{var ex__6205__auto__ = e32749;var statearr_32750_32752 = state_32743;(statearr_32750_32752[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32753 = state_32743;
state_32743 = G__32753;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_32743){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_32743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6218__auto__ = (function (){var statearr_32751 = f__6217__auto__.call(null);(statearr_32751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_32751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,id,route,that,menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6216__auto__;
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
app.main.header = (function header(router,root){var btn_home = root.find("#btn_backhome");return btn_home.click(((function (btn_home){
return (function (){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,btn_home){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,btn_home){
return (function (state_32773){var state_val_32774 = (state_32773[(1)]);if((state_val_32774 === (2)))
{var inst_32771 = (state_32773[(2)]);var state_32773__$1 = state_32773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32773__$1,inst_32771);
} else
{if((state_val_32774 === (1)))
{var inst_32768 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_32769 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32768,null));var state_32773__$1 = state_32773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32773__$1,(2),tool.react.OnReact,inst_32769);
} else
{return null;
}
}
});})(c__6216__auto__,btn_home))
;return ((function (switch__6201__auto__,c__6216__auto__,btn_home){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_32778 = [null,null,null,null,null,null,null];(statearr_32778[(0)] = state_machine__6202__auto__);
(statearr_32778[(1)] = (1));
return statearr_32778;
});
var state_machine__6202__auto____1 = (function (state_32773){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_32773);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e32779){if((e32779 instanceof Object))
{var ex__6205__auto__ = e32779;var statearr_32780_32782 = state_32773;(statearr_32780_32782[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32773);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32783 = state_32773;
state_32773 = G__32783;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_32773){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_32773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,btn_home))
})();var state__6218__auto__ = (function (){var statearr_32781 = f__6217__auto__.call(null);(statearr_32781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_32781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,btn_home))
);
return c__6216__auto__;
});})(btn_home))
);
});
app.main.create_router = (function create_router(){var Router = Backbone.Router.extend((function (){var obj32837 = {"routes":(function (){var obj32839 = {"StreetSnap":"StreetSnap","StreetSnap/id=:id":"StreetSnap","StreetSnapList":"StreetSnapList","StreetSnapList/search=:search":"StreetSnapList","":"default"};return obj32839;
})(),"StreetSnap":(function (id){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_32848){var state_val_32849 = (state_32848[(1)]);if((state_val_32849 === (2)))
{var inst_32846 = (state_32848[(2)]);var state_32848__$1 = state_32848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32848__$1,inst_32846);
} else
{if((state_val_32849 === (1)))
{var inst_32840 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_32841 = [id];var inst_32842 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32840,inst_32841);var inst_32843 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),inst_32842];var inst_32844 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32843,null));var state_32848__$1 = state_32848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32848__$1,(2),tool.react.OnReact,inst_32844);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_32853 = [null,null,null,null,null,null,null];(statearr_32853[(0)] = state_machine__6202__auto__);
(statearr_32853[(1)] = (1));
return statearr_32853;
});
var state_machine__6202__auto____1 = (function (state_32848){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_32848);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e32854){if((e32854 instanceof Object))
{var ex__6205__auto__ = e32854;var statearr_32855_32888 = state_32848;(statearr_32855_32888[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32889 = state_32848;
state_32848 = G__32889;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_32848){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_32848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_32856 = f__6217__auto__.call(null);(statearr_32856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_32856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}),"StreetSnapList":(function (search){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_32865){var state_val_32866 = (state_32865[(1)]);if((state_val_32866 === (2)))
{var inst_32863 = (state_32865[(2)]);var state_32865__$1 = state_32865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32865__$1,inst_32863);
} else
{if((state_val_32866 === (1)))
{var inst_32857 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634)];var inst_32858 = [search];var inst_32859 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_32857,inst_32858);var inst_32860 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_32859];var inst_32861 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32860,null));var state_32865__$1 = state_32865;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32865__$1,(2),tool.react.OnReact,inst_32861);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_32870 = [null,null,null,null,null,null,null];(statearr_32870[(0)] = state_machine__6202__auto__);
(statearr_32870[(1)] = (1));
return statearr_32870;
});
var state_machine__6202__auto____1 = (function (state_32865){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_32865);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e32871){if((e32871 instanceof Object))
{var ex__6205__auto__ = e32871;var statearr_32872_32890 = state_32865;(statearr_32872_32890[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32865);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32891 = state_32865;
state_32865 = G__32891;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_32865){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_32865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_32873 = f__6217__auto__.call(null);(statearr_32873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_32873;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
}),"default":(function (){var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__){
return (function (state_32879){var state_val_32880 = (state_32879[(1)]);if((state_val_32880 === (2)))
{var inst_32877 = (state_32879[(2)]);var state_32879__$1 = state_32879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32879__$1,inst_32877);
} else
{if((state_val_32880 === (1)))
{var inst_32874 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toHome","toHome",-1352725795),null];var inst_32875 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32874,null));var state_32879__$1 = state_32879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32879__$1,(2),tool.react.OnReact,inst_32875);
} else
{return null;
}
}
});})(c__6216__auto__))
;return ((function (switch__6201__auto__,c__6216__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_32884 = [null,null,null,null,null,null,null];(statearr_32884[(0)] = state_machine__6202__auto__);
(statearr_32884[(1)] = (1));
return statearr_32884;
});
var state_machine__6202__auto____1 = (function (state_32879){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_32879);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e32885){if((e32885 instanceof Object))
{var ex__6205__auto__ = e32885;var statearr_32886_32892 = state_32879;(statearr_32886_32892[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32885;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32893 = state_32879;
state_32879 = G__32893;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_32879){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_32879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__))
})();var state__6218__auto__ = (function (){var statearr_32887 = f__6217__auto__.call(null);(statearr_32887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_32887;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__))
);
return c__6216__auto__;
})};return obj32837;
})());var router = (new Router());Backbone.history.start();
return router;
});
app.main.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__32894){var map__32896 = p__32894;var map__32896__$1 = ((cljs.core.seq_QMARK_.call(null,map__32896))?cljs.core.apply.call(null,cljs.core.hash_map,map__32896):map__32896);var args = map__32896__$1;var basicUrl = cljs.core.get.call(null,map__32896__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.main.ShowLogo = (function ShowLogo(p__32898,p__32899){var map__32912 = p__32898;var map__32912__$1 = ((cljs.core.seq_QMARK_.call(null,map__32912))?cljs.core.apply.call(null,cljs.core.hash_map,map__32912):map__32912);var ctx = map__32912__$1;var root = cljs.core.get.call(null,map__32912__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__32913 = p__32899;var map__32913__$1 = ((cljs.core.seq_QMARK_.call(null,map__32913))?cljs.core.apply.call(null,cljs.core.hash_map,map__32913):map__32913);var args = map__32913__$1;var curr_view = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_32924 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null)], null);var seq__32914_32925 = cljs.core.seq.call(null,logoNames_32924);var chunk__32915_32926 = null;var count__32916_32927 = (0);var i__32917_32928 = (0);while(true){
if((i__32917_32928 < count__32916_32927))
{var vec__32918_32929 = cljs.core._nth.call(null,chunk__32915_32926,i__32917_32928);var names_32930 = cljs.core.nth.call(null,vec__32918_32929,(0),null);var logoName_32931 = cljs.core.nth.call(null,vec__32918_32929,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__32914_32925,chunk__32915_32926,count__32916_32927,i__32917_32928,vec__32918_32929,names_32930,logoName_32931,logoNames_32924,map__32912,map__32912__$1,ctx,root,map__32913,map__32913__$1,args,curr_view){
return (function (p1__32897_SHARP_){return cljs.core._EQ_.call(null,p1__32897_SHARP_,curr_view);
});})(seq__32914_32925,chunk__32915_32926,count__32916_32927,i__32917_32928,vec__32918_32929,names_32930,logoName_32931,logoNames_32924,map__32912,map__32912__$1,ctx,root,map__32913,map__32913__$1,args,curr_view))
,names_32930)))
{var G__32919_32932 = root.find(logoName_32931);G__32919_32932.fadeIn((400));
} else
{var G__32920_32933 = root.find(logoName_32931);G__32920_32933.hide();
}
{
var G__32934 = seq__32914_32925;
var G__32935 = chunk__32915_32926;
var G__32936 = count__32916_32927;
var G__32937 = (i__32917_32928 + (1));
seq__32914_32925 = G__32934;
chunk__32915_32926 = G__32935;
count__32916_32927 = G__32936;
i__32917_32928 = G__32937;
continue;
}
} else
{var temp__4126__auto___32938 = cljs.core.seq.call(null,seq__32914_32925);if(temp__4126__auto___32938)
{var seq__32914_32939__$1 = temp__4126__auto___32938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32914_32939__$1))
{var c__4307__auto___32940 = cljs.core.chunk_first.call(null,seq__32914_32939__$1);{
var G__32941 = cljs.core.chunk_rest.call(null,seq__32914_32939__$1);
var G__32942 = c__4307__auto___32940;
var G__32943 = cljs.core.count.call(null,c__4307__auto___32940);
var G__32944 = (0);
seq__32914_32925 = G__32941;
chunk__32915_32926 = G__32942;
count__32916_32927 = G__32943;
i__32917_32928 = G__32944;
continue;
}
} else
{var vec__32921_32945 = cljs.core.first.call(null,seq__32914_32939__$1);var names_32946 = cljs.core.nth.call(null,vec__32921_32945,(0),null);var logoName_32947 = cljs.core.nth.call(null,vec__32921_32945,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__32914_32925,chunk__32915_32926,count__32916_32927,i__32917_32928,vec__32921_32945,names_32946,logoName_32947,seq__32914_32939__$1,temp__4126__auto___32938,logoNames_32924,map__32912,map__32912__$1,ctx,root,map__32913,map__32913__$1,args,curr_view){
return (function (p1__32897_SHARP_){return cljs.core._EQ_.call(null,p1__32897_SHARP_,curr_view);
});})(seq__32914_32925,chunk__32915_32926,count__32916_32927,i__32917_32928,vec__32921_32945,names_32946,logoName_32947,seq__32914_32939__$1,temp__4126__auto___32938,logoNames_32924,map__32912,map__32912__$1,ctx,root,map__32913,map__32913__$1,args,curr_view))
,names_32946)))
{var G__32922_32948 = root.find(logoName_32947);G__32922_32948.fadeIn((400));
} else
{var G__32923_32949 = root.find(logoName_32947);G__32923_32949.hide();
}
{
var G__32950 = cljs.core.next.call(null,seq__32914_32939__$1);
var G__32951 = null;
var G__32952 = (0);
var G__32953 = (0);
seq__32914_32925 = G__32950;
chunk__32915_32926 = G__32951;
count__32916_32927 = G__32952;
i__32917_32928 = G__32953;
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
app.main.Navigate = (function Navigate(p__32954,p__32955){var map__32960 = p__32954;var map__32960__$1 = ((cljs.core.seq_QMARK_.call(null,map__32960))?cljs.core.apply.call(null,cljs.core.hash_map,map__32960):map__32960);var ctx = map__32960__$1;var router = cljs.core.get.call(null,map__32960__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__32961 = p__32955;var map__32961__$1 = ((cljs.core.seq_QMARK_.call(null,map__32961))?cljs.core.apply.call(null,cljs.core.hash_map,map__32961):map__32961);var args = map__32961__$1;var react_action = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":cljs.core.name.call(null,react_action)),(function (){var obj32963 = {"trigger":true};return obj32963;
})());
return ctx;
});
app.main.main = (function main(){var urlRouter = app.main.create_router.call(null);var route = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),app.main.Navigate], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.main.Navigate], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.main.Navigate], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.main.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.main.OpenPhotoUrl], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"toHome","toHome",-1352725795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.main.ShowLogo], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.main.OpenPhotoUrl], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),app.main.OpenPhotoUrl], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null)], null)]);var sdyleColor = "rgb(185,71,132)";var root = $(".root");var tmpl_item = (function (){var obj32979 = {"brandToColor":((function (urlRouter,route,sdyleColor,root){
return (function (brand){if((brand.length > (0)))
{return sdyleColor;
} else
{return null;
}
});})(urlRouter,route,sdyleColor,root))
};return obj32979;
})();var ctx = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"router","router",1091916230),urlRouter,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701),tmpl_item], null);app.main.menubar.call(null,root);
app.main.header.call(null,urlRouter,root);
var c__6216__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6216__auto__,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = ((function (c__6216__auto__,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function (state_32983){var state_val_32984 = (state_32983[(1)]);if((state_val_32984 === (1)))
{var inst_32980 = cljs.core.partial.call(null,tool.react.React,route);var inst_32981 = cljs.core.async.reduce.call(null,inst_32980,ctx,tool.react.OnReact);var state_32983__$1 = state_32983;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32983__$1,inst_32981);
} else
{return null;
}
});})(c__6216__auto__,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
;return ((function (switch__6201__auto__,c__6216__auto__,urlRouter,route,sdyleColor,root,tmpl_item,ctx){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_32988 = [null,null,null,null,null,null,null];(statearr_32988[(0)] = state_machine__6202__auto__);
(statearr_32988[(1)] = (1));
return statearr_32988;
});
var state_machine__6202__auto____1 = (function (state_32983){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_32983);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e32989){if((e32989 instanceof Object))
{var ex__6205__auto__ = e32989;var statearr_32990_32992 = state_32983;(statearr_32990_32992[(5)] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32983);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32993 = state_32983;
state_32983 = G__32993;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_32983){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_32983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__,c__6216__auto__,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
})();var state__6218__auto__ = (function (){var statearr_32991 = f__6217__auto__.call(null);(statearr_32991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_32991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
});})(c__6216__auto__,urlRouter,route,sdyleColor,root,tmpl_item,ctx))
);
return c__6216__auto__;
});
app.main.main.call(null);
