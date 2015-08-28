// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('app.fn');
goog.require('app.action');
goog.require('app.view');
goog.require('app.model');
goog.require('app.auth');
goog.require('cljs.core.async');
goog.require('tool.react');
goog.require('app.fn');
goog.require('cljs.core.async');
goog.require('app.model');
goog.require('tool.react');
goog.require('app.auth');
goog.require('app.action');
goog.require('app.view');
app.main.main = (function main(){var G__11862 = app.auth.auth.call(null,"/auth");G__11862.done(app.main.startapp);
G__11862.fail(((function (G__11862){
return (function (){return console.log("fail!");
});})(G__11862))
);
return G__11862;
});
app.main.startapp = (function startapp(){var urlRouter = app.main.create_router.call(null);var route = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"Event","Event",-475754196),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Big","Big",-1370423625),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)],[new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),cljs.core.identity], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),app.action.Navigate], null),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),app.action.Navigate], null),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),app.action.Navigate], null),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.ComposeAction.call(null,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.ComposeAction.call(null,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.ComposeAction.call(null,app.action.ToggleMenu,app.action.Navigate)], null),new cljs.core.Keyword(null,"menuClick","menuClick",-1553687936),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ToggleMenu], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.Keyword(null,"toNews","toNews",1841267218),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),new cljs.core.Keyword(null,"toHome","toHome",-1352725795)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Event","Event",-475754196),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),tool.react.ChangeView], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),tool.react.ChangeView], null)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.ComposeAction.call(null,app.action.ShowLoadingImage,app.action.ChangeLogo,app.action.Unuse.call(null,app.action.ShowFooterOrNot))], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toList","toList",-1707783010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),app.action.OpenFullScreen], null),new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.Navigate], null),new cljs.core.Keyword(null,"toBig","toBig",-1136569839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.OpenView], null),new cljs.core.Keyword(null,"shareFB","shareFB",1567835303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),app.action.ShareFB], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Big","Big",-1370423625),tool.react.CloseView], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),app.action.Navigate], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),app.action.Navigate], null),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),app.action.Navigate], null)], null)]);var sdyleColor = "rgb(185,71,132)";var root = $(".root");var tmpl_item = (function (){var obj11885 = {"brandToColor":((function (urlRouter,route,sdyleColor,root){
return (function (brand){if((brand.length > (0)))
{return sdyleColor;
} else
{return "rgb(122,122,122)";
}
});})(urlRouter,route,sdyleColor,root))
,"checkHot":((function (urlRouter,route,sdyleColor,root){
return (function (timestr){var tomorrow = Date.today().add((function (){var obj11887 = {"days":(1)};return obj11887;
})());var startday = Date.today().add((function (){var obj11889 = {"days":(-1)};return obj11889;
})());var now = Date.parse(timestr);return now.between(startday,tomorrow);
});})(urlRouter,route,sdyleColor,root))
};return obj11885;
})();var menubarElem = root.find("#mc_menubar");var media_query_info = $("#media-query-info");var media_type = (function (){var pred__11890 = cljs.core._EQ_;var expr__11891 = media_query_info.css("left");if(cljs.core.truth_(pred__11890.call(null,"0px",expr__11891)))
{return new cljs.core.Keyword(null,"pc","pc",512913453);
} else
{if(cljs.core.truth_(pred__11890.call(null,"1px",expr__11891)))
{return new cljs.core.Keyword(null,"ipad","ipad",343134859);
} else
{if(cljs.core.truth_(pred__11890.call(null,"2px",expr__11891)))
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
} else
{return new cljs.core.Keyword(null,"iphone","iphone",1689490215);
}
}
}
})();var ctx = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"router","router",1091916230),urlRouter,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"popupContainer","popupContainer",-71727852),root.find("#mc_popupContainer"),new cljs.core.Keyword(null,"tmpl-item","tmpl-item",931981701),tmpl_item,new cljs.core.Keyword(null,"media-type","media-type",-764436129),media_type], null);app.main.menubar.call(null,menubarElem);
app.main.header.call(null,urlRouter,root);
var c__6192__auto___11905 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto___11905,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto___11905,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx){
return (function (state_11896){var state_val_11897 = (state_11896[(1)]);if((state_val_11897 === (1)))
{var inst_11893 = cljs.core.partial.call(null,tool.react.React,route);var inst_11894 = cljs.core.async.reduce.call(null,inst_11893,ctx,tool.react.OnReact);var state_11896__$1 = state_11896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11896__$1,inst_11894);
} else
{return null;
}
});})(c__6192__auto___11905,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx))
;return ((function (switch__6177__auto__,c__6192__auto___11905,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11901 = [null,null,null,null,null,null,null];(statearr_11901[(0)] = state_machine__6178__auto__);
(statearr_11901[(1)] = (1));
return statearr_11901;
});
var state_machine__6178__auto____1 = (function (state_11896){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11896);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11902){if((e11902 instanceof Object))
{var ex__6181__auto__ = e11902;var statearr_11903_11906 = state_11896;(statearr_11903_11906[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11896);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11907 = state_11896;
state_11896 = G__11907;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11896){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto___11905,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx))
})();var state__6194__auto__ = (function (){var statearr_11904 = f__6193__auto__.call(null);(statearr_11904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11905);
return statearr_11904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto___11905,urlRouter,route,sdyleColor,root,tmpl_item,menubarElem,media_query_info,media_type,ctx))
);
return Backbone.history.start();
});
app.main.menubar = (function menubar(elem){var handleBtnMouseOut = (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".btn_nav_over");return btnOver.animate((function (){var obj11928 = {"width":"0px"};return obj11928;
})(),(300));
});var handleBtnMouseOver = ((function (handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".btn_nav_over");return btnOver.animate((function (){var obj11930 = {"width":"120px"};return obj11930;
})(),(300));
});})(handleBtnMouseOut))
;elem.delegate("div","mouseover",handleBtnMouseOver);
elem.delegate("div","mouseout",handleBtnMouseOut);
return elem.delegate("div","click",((function (handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;var id = that.id;var route = (function (){var pred__11931 = cljs.core._EQ_;var expr__11932 = id;if(cljs.core.truth_(pred__11931.call(null,"btn_nav_celebrity",expr__11932)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null], null);
} else
{if(cljs.core.truth_(pred__11931.call(null,"btn_nav_event",expr__11932)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null], null);
} else
{if(cljs.core.truth_(pred__11931.call(null,"btn_nav_model",expr__11932)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),null], null);
} else
{if(cljs.core.truth_(pred__11931.call(null,"btn_nav_streetSnap",expr__11932)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),null], null);
} else
{if(cljs.core.truth_(pred__11931.call(null,"btn_nav_product",expr__11932)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),null], null);
} else
{if(cljs.core.truth_(pred__11931.call(null,"btn_nav_news",expr__11932)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toNews","toNews",1841267218),null], null);
} else
{console.log("no menu ",id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),null], null);
}
}
}
}
}
}
})();var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver){
return (function (state_11937){var state_val_11938 = (state_11937[(1)]);if((state_val_11938 === (2)))
{var inst_11935 = (state_11937[(2)]);var state_11937__$1 = state_11937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11937__$1,inst_11935);
} else
{if((state_val_11938 === (1)))
{var state_11937__$1 = state_11937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11937__$1,(2),tool.react.OnReact,route);
} else
{return null;
}
}
});})(c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver))
;return ((function (switch__6177__auto__,c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11942 = [null,null,null,null,null,null,null];(statearr_11942[(0)] = state_machine__6178__auto__);
(statearr_11942[(1)] = (1));
return statearr_11942;
});
var state_machine__6178__auto____1 = (function (state_11937){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11937);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11943){if((e11943 instanceof Object))
{var ex__6181__auto__ = e11943;var statearr_11944_11946 = state_11937;(statearr_11944_11946[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11937);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11947 = state_11937;
state_11937 = G__11947;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11937){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver))
})();var state__6194__auto__ = (function (){var statearr_11945 = f__6193__auto__.call(null);(statearr_11945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,id,route,that,handleBtnMouseOut,handleBtnMouseOver))
);
return c__6192__auto__;
});})(handleBtnMouseOut,handleBtnMouseOver))
);
});
app.main.header = (function header(router,root){var btn_home = root.find("#btn_backhome");var btn_menu = root.find("#btn_menu");btn_home.click(((function (btn_home,btn_menu){
return (function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,btn_home,btn_menu){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,btn_home,btn_menu){
return (function (state_11981){var state_val_11982 = (state_11981[(1)]);if((state_val_11982 === (2)))
{var inst_11979 = (state_11981[(2)]);var state_11981__$1 = state_11981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11981__$1,inst_11979);
} else
{if((state_val_11982 === (1)))
{var inst_11976 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"reset","reset",-800929946),null];var inst_11977 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11976,null));var state_11981__$1 = state_11981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11981__$1,(2),tool.react.OnReact,inst_11977);
} else
{return null;
}
}
});})(c__6192__auto__,btn_home,btn_menu))
;return ((function (switch__6177__auto__,c__6192__auto__,btn_home,btn_menu){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11986 = [null,null,null,null,null,null,null];(statearr_11986[(0)] = state_machine__6178__auto__);
(statearr_11986[(1)] = (1));
return statearr_11986;
});
var state_machine__6178__auto____1 = (function (state_11981){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11981);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11987){if((e11987 instanceof Object))
{var ex__6181__auto__ = e11987;var statearr_11988_12004 = state_11981;(statearr_11988_12004[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12005 = state_11981;
state_11981 = G__12005;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11981){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,btn_home,btn_menu))
})();var state__6194__auto__ = (function (){var statearr_11989 = f__6193__auto__.call(null);(statearr_11989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,btn_home,btn_menu))
);
return c__6192__auto__;
});})(btn_home,btn_menu))
);
return btn_menu.click(((function (btn_home,btn_menu){
return (function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,btn_home,btn_menu){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,btn_home,btn_menu){
return (function (state_11995){var state_val_11996 = (state_11995[(1)]);if((state_val_11996 === (2)))
{var inst_11993 = (state_11995[(2)]);var state_11995__$1 = state_11995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11995__$1,inst_11993);
} else
{if((state_val_11996 === (1)))
{var inst_11990 = [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"menuClick","menuClick",-1553687936),null];var inst_11991 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11990,null));var state_11995__$1 = state_11995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11995__$1,(2),tool.react.OnReact,inst_11991);
} else
{return null;
}
}
});})(c__6192__auto__,btn_home,btn_menu))
;return ((function (switch__6177__auto__,c__6192__auto__,btn_home,btn_menu){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12000 = [null,null,null,null,null,null,null];(statearr_12000[(0)] = state_machine__6178__auto__);
(statearr_12000[(1)] = (1));
return statearr_12000;
});
var state_machine__6178__auto____1 = (function (state_11995){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11995);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12001){if((e12001 instanceof Object))
{var ex__6181__auto__ = e12001;var statearr_12002_12006 = state_11995;(statearr_12002_12006[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11995);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12007 = state_11995;
state_11995 = G__12007;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11995){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,btn_home,btn_menu))
})();var state__6194__auto__ = (function (){var statearr_12003 = f__6193__auto__.call(null);(statearr_12003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,btn_home,btn_menu))
);
return c__6192__auto__;
});})(btn_home,btn_menu))
);
});
app.main.create_router = (function create_router(){var Router = Backbone.Router.extend((function (){var obj12222 = {"ProductListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12232){var state_val_12233 = (state_12232[(1)]);if((state_val_12233 === (2)))
{var inst_12230 = (state_12232[(2)]);var state_12232__$1 = state_12232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12232__$1,inst_12230);
} else
{if((state_val_12233 === (1)))
{var inst_12223 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_12224 = (page | (0));var inst_12225 = [search,inst_12224];var inst_12226 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12223,inst_12225);var inst_12227 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_12226];var inst_12228 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12227,null));var state_12232__$1 = state_12232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12232__$1,(2),tool.react.OnReact,inst_12228);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12237 = [null,null,null,null,null,null,null];(statearr_12237[(0)] = state_machine__6178__auto__);
(statearr_12237[(1)] = (1));
return statearr_12237;
});
var state_machine__6178__auto____1 = (function (state_12232){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12232);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12238){if((e12238 instanceof Object))
{var ex__6181__auto__ = e12238;var statearr_12239_12434 = state_12232;(statearr_12239_12434[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12238;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12435 = state_12232;
state_12232 = G__12435;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12232){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12240 = f__6193__auto__.call(null);(statearr_12240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"ModelList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_12249){var state_val_12250 = (state_12249[(1)]);if((state_val_12250 === (2)))
{var inst_12247 = (state_12249[(2)]);var state_12249__$1 = state_12249;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12249__$1,inst_12247);
} else
{if((state_val_12250 === (1)))
{var inst_12241 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_12242 = [real];var inst_12243 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12241,inst_12242);var inst_12244 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_12243];var inst_12245 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12244,null));var state_12249__$1 = state_12249;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12249__$1,(2),tool.react.OnReact,inst_12245);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12254 = [null,null,null,null,null,null,null];(statearr_12254[(0)] = state_machine__6178__auto__);
(statearr_12254[(1)] = (1));
return statearr_12254;
});
var state_machine__6178__auto____1 = (function (state_12249){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12249);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12255){if((e12255 instanceof Object))
{var ex__6181__auto__ = e12255;var statearr_12256_12436 = state_12249;(statearr_12256_12436[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12249);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12437 = state_12249;
state_12249 = G__12437;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12249){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_12257 = f__6193__auto__.call(null);(statearr_12257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"StreetSnap":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12267){var state_val_12268 = (state_12267[(1)]);if((state_val_12268 === (2)))
{var inst_12265 = (state_12267[(2)]);var state_12267__$1 = state_12267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12267__$1,inst_12265);
} else
{if((state_val_12268 === (1)))
{var inst_12258 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12259 = encodeURIComponent(id);var inst_12260 = [inst_12259];var inst_12261 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12258,inst_12260);var inst_12262 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),inst_12261];var inst_12263 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12262,null));var state_12267__$1 = state_12267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12267__$1,(2),tool.react.OnReact,inst_12263);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12272 = [null,null,null,null,null,null,null];(statearr_12272[(0)] = state_machine__6178__auto__);
(statearr_12272[(1)] = (1));
return statearr_12272;
});
var state_machine__6178__auto____1 = (function (state_12267){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12267);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12273){if((e12273 instanceof Object))
{var ex__6181__auto__ = e12273;var statearr_12274_12438 = state_12267;(statearr_12274_12438[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12273;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12439 = state_12267;
state_12267 = G__12439;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12267){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12275 = f__6193__auto__.call(null);(statearr_12275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"News":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12285){var state_val_12286 = (state_12285[(1)]);if((state_val_12286 === (2)))
{var inst_12283 = (state_12285[(2)]);var state_12285__$1 = state_12285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12285__$1,inst_12283);
} else
{if((state_val_12286 === (1)))
{var inst_12276 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12277 = encodeURIComponent(id);var inst_12278 = [inst_12277];var inst_12279 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12276,inst_12278);var inst_12280 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toNews","toNews",1841267218),inst_12279];var inst_12281 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12280,null));var state_12285__$1 = state_12285;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12285__$1,(2),tool.react.OnReact,inst_12281);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12290 = [null,null,null,null,null,null,null];(statearr_12290[(0)] = state_machine__6178__auto__);
(statearr_12290[(1)] = (1));
return statearr_12290;
});
var state_machine__6178__auto____1 = (function (state_12285){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12285);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12291){if((e12291 instanceof Object))
{var ex__6181__auto__ = e12291;var statearr_12292_12440 = state_12285;(statearr_12292_12440[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12285);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12441 = state_12285;
state_12285 = G__12441;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12285){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12293 = f__6193__auto__.call(null);(statearr_12293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Product":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12303){var state_val_12304 = (state_12303[(1)]);if((state_val_12304 === (2)))
{var inst_12301 = (state_12303[(2)]);var state_12303__$1 = state_12303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12303__$1,inst_12301);
} else
{if((state_val_12304 === (1)))
{var inst_12294 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12295 = encodeURIComponent(id);var inst_12296 = [inst_12295];var inst_12297 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12294,inst_12296);var inst_12298 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),inst_12297];var inst_12299 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12298,null));var state_12303__$1 = state_12303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12303__$1,(2),tool.react.OnReact,inst_12299);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12308 = [null,null,null,null,null,null,null];(statearr_12308[(0)] = state_machine__6178__auto__);
(statearr_12308[(1)] = (1));
return statearr_12308;
});
var state_machine__6178__auto____1 = (function (state_12303){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12303);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12309){if((e12309 instanceof Object))
{var ex__6181__auto__ = e12309;var statearr_12310_12442 = state_12303;(statearr_12310_12442[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12443 = state_12303;
state_12303 = G__12443;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12303){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12311 = f__6193__auto__.call(null);(statearr_12311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnapList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_12320){var state_val_12321 = (state_12320[(1)]);if((state_val_12321 === (2)))
{var inst_12318 = (state_12320[(2)]);var state_12320__$1 = state_12320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12320__$1,inst_12318);
} else
{if((state_val_12321 === (1)))
{var inst_12312 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_12313 = [real];var inst_12314 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12312,inst_12313);var inst_12315 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_12314];var inst_12316 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12315,null));var state_12320__$1 = state_12320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12320__$1,(2),tool.react.OnReact,inst_12316);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12325 = [null,null,null,null,null,null,null];(statearr_12325[(0)] = state_machine__6178__auto__);
(statearr_12325[(1)] = (1));
return statearr_12325;
});
var state_machine__6178__auto____1 = (function (state_12320){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12320);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12326){if((e12326 instanceof Object))
{var ex__6181__auto__ = e12326;var statearr_12327_12444 = state_12320;(statearr_12327_12444[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12320);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12326;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12445 = state_12320;
state_12320 = G__12445;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12320){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_12328 = f__6193__auto__.call(null);(statearr_12328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12328;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"ProductList":(function (page){var real = (((page == null))?(0):(page | (0)));var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__,real){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__,real){
return (function (state_12337){var state_val_12338 = (state_12337[(1)]);if((state_val_12338 === (2)))
{var inst_12335 = (state_12337[(2)]);var state_12337__$1 = state_12337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12337__$1,inst_12335);
} else
{if((state_val_12338 === (1)))
{var inst_12329 = [new cljs.core.Keyword(null,"page","page",849072397)];var inst_12330 = [real];var inst_12331 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12329,inst_12330);var inst_12332 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),inst_12331];var inst_12333 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12332,null));var state_12337__$1 = state_12337;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12337__$1,(2),tool.react.OnReact,inst_12333);
} else
{return null;
}
}
});})(c__6192__auto__,real))
;return ((function (switch__6177__auto__,c__6192__auto__,real){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12342 = [null,null,null,null,null,null,null];(statearr_12342[(0)] = state_machine__6178__auto__);
(statearr_12342[(1)] = (1));
return statearr_12342;
});
var state_machine__6178__auto____1 = (function (state_12337){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12337);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12343){if((e12343 instanceof Object))
{var ex__6181__auto__ = e12343;var statearr_12344_12446 = state_12337;(statearr_12344_12446[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12337);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12447 = state_12337;
state_12337 = G__12447;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12337){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__,real))
})();var state__6194__auto__ = (function (){var statearr_12345 = f__6193__auto__.call(null);(statearr_12345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__,real))
);
return c__6192__auto__;
}),"ModelListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12355){var state_val_12356 = (state_12355[(1)]);if((state_val_12356 === (2)))
{var inst_12353 = (state_12355[(2)]);var state_12355__$1 = state_12355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12355__$1,inst_12353);
} else
{if((state_val_12356 === (1)))
{var inst_12346 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_12347 = (page | (0));var inst_12348 = [search,inst_12347];var inst_12349 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12346,inst_12348);var inst_12350 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),inst_12349];var inst_12351 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12350,null));var state_12355__$1 = state_12355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12355__$1,(2),tool.react.OnReact,inst_12351);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12360 = [null,null,null,null,null,null,null];(statearr_12360[(0)] = state_machine__6178__auto__);
(statearr_12360[(1)] = (1));
return statearr_12360;
});
var state_machine__6178__auto____1 = (function (state_12355){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12355);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12361){if((e12361 instanceof Object))
{var ex__6181__auto__ = e12361;var statearr_12362_12448 = state_12355;(statearr_12362_12448[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12449 = state_12355;
state_12355 = G__12449;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12355){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12363 = f__6193__auto__.call(null);(statearr_12363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Event":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12373){var state_val_12374 = (state_12373[(1)]);if((state_val_12374 === (2)))
{var inst_12371 = (state_12373[(2)]);var state_12373__$1 = state_12373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12373__$1,inst_12371);
} else
{if((state_val_12374 === (1)))
{var inst_12364 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12365 = encodeURIComponent(id);var inst_12366 = [inst_12365];var inst_12367 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12364,inst_12366);var inst_12368 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),inst_12367];var inst_12369 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12368,null));var state_12373__$1 = state_12373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12373__$1,(2),tool.react.OnReact,inst_12369);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12378 = [null,null,null,null,null,null,null];(statearr_12378[(0)] = state_machine__6178__auto__);
(statearr_12378[(1)] = (1));
return statearr_12378;
});
var state_machine__6178__auto____1 = (function (state_12373){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12373);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12379){if((e12379 instanceof Object))
{var ex__6181__auto__ = e12379;var statearr_12380_12450 = state_12373;(statearr_12380_12450[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12373);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12451 = state_12373;
state_12373 = G__12451;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12373){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12381 = f__6193__auto__.call(null);(statearr_12381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"Model":(function (id){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12391){var state_val_12392 = (state_12391[(1)]);if((state_val_12392 === (2)))
{var inst_12389 = (state_12391[(2)]);var state_12391__$1 = state_12391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12391__$1,inst_12389);
} else
{if((state_val_12392 === (1)))
{var inst_12382 = [new cljs.core.Keyword(null,"id","id",-1388402092)];var inst_12383 = encodeURIComponent(id);var inst_12384 = [inst_12383];var inst_12385 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12382,inst_12384);var inst_12386 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),inst_12385];var inst_12387 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12386,null));var state_12391__$1 = state_12391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12391__$1,(2),tool.react.OnReact,inst_12387);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12396 = [null,null,null,null,null,null,null];(statearr_12396[(0)] = state_machine__6178__auto__);
(statearr_12396[(1)] = (1));
return statearr_12396;
});
var state_machine__6178__auto____1 = (function (state_12391){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12391);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12397){if((e12397 instanceof Object))
{var ex__6181__auto__ = e12397;var statearr_12398_12452 = state_12391;(statearr_12398_12452[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12391);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12453 = state_12391;
state_12391 = G__12453;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12391){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12399 = f__6193__auto__.call(null);(statearr_12399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"StreetSnapListSearch":(function (search,page){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12409){var state_val_12410 = (state_12409[(1)]);if((state_val_12410 === (2)))
{var inst_12407 = (state_12409[(2)]);var state_12409__$1 = state_12409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12409__$1,inst_12407);
} else
{if((state_val_12410 === (1)))
{var inst_12400 = [new cljs.core.Keyword(null,"searchKey","searchKey",1779634634),new cljs.core.Keyword(null,"page","page",849072397)];var inst_12401 = (page | (0));var inst_12402 = [search,inst_12401];var inst_12403 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12400,inst_12402);var inst_12404 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),inst_12403];var inst_12405 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12404,null));var state_12409__$1 = state_12409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12409__$1,(2),tool.react.OnReact,inst_12405);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12414 = [null,null,null,null,null,null,null];(statearr_12414[(0)] = state_machine__6178__auto__);
(statearr_12414[(1)] = (1));
return statearr_12414;
});
var state_machine__6178__auto____1 = (function (state_12409){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12409);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12415){if((e12415 instanceof Object))
{var ex__6181__auto__ = e12415;var statearr_12416_12454 = state_12409;(statearr_12416_12454[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12409);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12455 = state_12409;
state_12409 = G__12455;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12409){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12417 = f__6193__auto__.call(null);(statearr_12417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"default":(function (){var c__6192__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6192__auto__){
return (function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = ((function (c__6192__auto__){
return (function (state_12423){var state_val_12424 = (state_12423[(1)]);if((state_val_12424 === (2)))
{var inst_12421 = (state_12423[(2)]);var state_12423__$1 = state_12423;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12423__$1,inst_12421);
} else
{if((state_val_12424 === (1)))
{var inst_12418 = [new cljs.core.Keyword(null,"Router","Router",1225596421),new cljs.core.Keyword(null,"toHome","toHome",-1352725795),null];var inst_12419 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12418,null));var state_12423__$1 = state_12423;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12423__$1,(2),tool.react.OnReact,inst_12419);
} else
{return null;
}
}
});})(c__6192__auto__))
;return ((function (switch__6177__auto__,c__6192__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12428 = [null,null,null,null,null,null,null];(statearr_12428[(0)] = state_machine__6178__auto__);
(statearr_12428[(1)] = (1));
return statearr_12428;
});
var state_machine__6178__auto____1 = (function (state_12423){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12423);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12429){if((e12429 instanceof Object))
{var ex__6181__auto__ = e12429;var statearr_12430_12456 = state_12423;(statearr_12430_12456[(5)] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12423);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12457 = state_12423;
state_12423 = G__12457;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12423){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__,c__6192__auto__))
})();var state__6194__auto__ = (function (){var statearr_12431 = f__6193__auto__.call(null);(statearr_12431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
});})(c__6192__auto__))
);
return c__6192__auto__;
}),"routes":(function (){var obj12433 = {"":"default","ModelList/:search/:page":"ModelListSearch","ModelList":"ModelList","StreetSnap":"StreetSnap","News":"News","Product":"Product","Model/id=:id":"Model","StreetSnapList":"StreetSnapList","ProductList/:search/:page":"ProductListSearch","ProductList":"ProductList","Event":"Event","Product/id=:id":"Product","Model":"Model","ProductList/:page":"ProductList","StreetSnapList/:page":"StreetSnapList","News/id=:id":"News","StreetSnapList/:search/:page":"StreetSnapListSearch","StreetSnap/id=:id":"StreetSnap","ModelList/:page":"ModelList"};return obj12433;
})()};return obj12222;
})());var router = (new Router());return router;
});
app.main.main.call(null);
