// Compiled by ClojureScript 0.0-2268
goog.provide('core.main');
goog.require('cljs.core');
goog.require('core.view');
goog.require('tool.app');
goog.require('core.view');
goog.require('core.model');
goog.require('core.fn');
goog.require('core.fn');
goog.require('core.model');
goog.require('core.event');
goog.require('core.event');
goog.require('tool.app');
core.main.menubar = (function menubar(root){var menubar__$1 = root.find("#mc_menubar");var handleBtnMouseOut = ((function (menubar__$1){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj10034 = {"width":"0px"};return obj10034;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj10036 = {"width":"120px"};return obj10036;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;return core.event.OnMenubarBtnClick.onNext(that.id);
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
core.main.main = (function main(){var root = $(".root");var ctx = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),core.model.CreateStreetSnapListModel], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),core.model.CreateStreetSnapListModel], null),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),core.model.CreateStreetSnapListModel], null)], null),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),core.model.CreateStreetSnapModel], null)], null),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),core.model.CreateStreetSnapModel], null)], null),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),core.model.CreateStreetSnapModel], null)], null)], null)], null));core.main.menubar.call(null,root);
core.event.OnMenubarBtnClick.subscribe(((function (root,ctx){
return (function (id){var pred__10045 = cljs.core._EQ_;var expr__10046 = id;if(cljs.core.truth_(pred__10045.call(null,"btn_nav_celebrity",expr__10046)))
{return tool.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null);
} else
{if(cljs.core.truth_(pred__10045.call(null,"btn_nav_event",expr__10046)))
{return tool.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null);
} else
{if(cljs.core.truth_(pred__10045.call(null,"btn_nav_model",expr__10046)))
{return tool.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModelList","toModelList",591341987),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215)], null));
} else
{if(cljs.core.truth_(pred__10045.call(null,"btn_nav_streetSnap",expr__10046)))
{return tool.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"street","street",1870012303)], null));
} else
{if(cljs.core.truth_(pred__10045.call(null,"btn_nav_product",expr__10046)))
{return tool.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProductList","toProductList",1371494380),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"product","product",1363474257)], null));
} else
{return cljs.core.identity;
}
}
}
}
}
});})(root,ctx))
);
core.event.OnListBtnClick.subscribe(((function (root,ctx){
return (function (p__10048){var map__10049 = p__10048;var map__10049__$1 = ((cljs.core.seq_QMARK_.call(null,map__10049))?cljs.core.apply.call(null,cljs.core.hash_map,map__10049):map__10049);var args = map__10049__$1;var view = cljs.core.get.call(null,map__10049__$1,new cljs.core.Keyword(null,"view","view",1247994814));return tool.app.Route.call(null,ctx,view,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),args);
});})(root,ctx))
);
core.event.OnImgHistoryClick.subscribe(((function (root,ctx){
return (function (p__10050){var map__10051 = p__10050;var map__10051__$1 = ((cljs.core.seq_QMARK_.call(null,map__10051))?cljs.core.apply.call(null,cljs.core.hash_map,map__10051):map__10051);var args = map__10051__$1;var view = cljs.core.get.call(null,map__10051__$1,new cljs.core.Keyword(null,"view","view",1247994814));return tool.app.Route.call(null,ctx,view,new cljs.core.Keyword(null,"toDetail","toDetail",1490871748),args);
});})(root,ctx))
);
return cljs.core.swap_BANG_.call(null,ctx,((function (root,ctx){
return (function (p1__10037_SHARP_){return tool.app.OpenView.call(null,p1__10037_SHARP_,new cljs.core.Keyword(null,"Home","Home",1521501280),cljs.core.partial.call(null,core.model.CreateHomeModel,ctx));
});})(root,ctx))
);
});
core.main.main.call(null);
