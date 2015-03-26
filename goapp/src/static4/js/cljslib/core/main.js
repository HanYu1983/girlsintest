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
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj5058 = {"width":"0px"};return obj5058;
})(),(300));
});})(menubar__$1))
;var handleBtnMouseOver = ((function (menubar__$1,handleBtnMouseOut){
return (function (evt){var that = this;var btnSelf = $(that);var btnOver = btnSelf.find(".navover");return btnOver.animate((function (){var obj5060 = {"width":"120px"};return obj5060;
})(),(300));
});})(menubar__$1,handleBtnMouseOut))
;menubar__$1.delegate("div","mouseover",handleBtnMouseOver);
menubar__$1.delegate("div","mouseout",handleBtnMouseOut);
return menubar__$1.delegate("div","click",((function (menubar__$1,handleBtnMouseOut,handleBtnMouseOver){
return (function (evt){var that = this;return core.event.OnMenubarBtnClick.onNext(that.id);
});})(menubar__$1,handleBtnMouseOut,handleBtnMouseOver))
);
});
core.main.main = (function main(){var root = $(".root");var ctx = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toModel","toModel",-1645669175),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),core.model.CreateStreetSnapListModel], null),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),core.model.CreateStreetSnapListModel], null),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ProductList","ProductList",-600506917),core.model.CreateStreetSnapListModel], null)], null),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),core.model.CreateStreetSnapModel], null)], null)], null)], null));core.main.menubar.call(null,root);
core.event.OnMenubarBtnClick.subscribe(((function (root,ctx){
return (function (id){var pred__5065 = cljs.core._EQ_;var expr__5066 = id;if(cljs.core.truth_(pred__5065.call(null,"btn_nav_celebrity",expr__5066)))
{return tool.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null);
} else
{if(cljs.core.truth_(pred__5065.call(null,"btn_nav_event",expr__5066)))
{return tool.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null);
} else
{if(cljs.core.truth_(pred__5065.call(null,"btn_nav_model",expr__5066)))
{return tool.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215)], null));
} else
{if(cljs.core.truth_(pred__5065.call(null,"btn_nav_streetSnap",expr__5066)))
{return tool.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnapList","toStreetSnapList",1144464750),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"street","street",1870012303)], null));
} else
{if(cljs.core.truth_(pred__5065.call(null,"btn_nav_product",expr__5066)))
{return tool.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"product","product",1363474257)], null));
} else
{return cljs.core.identity;
}
}
}
}
}
});})(root,ctx))
);
core.event.OnStreetSnapListBtnClick.subscribe(cljs.core.partial.call(null,tool.app.Route,ctx,new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818)));
return cljs.core.swap_BANG_.call(null,ctx,((function (root,ctx){
return (function (p1__5061_SHARP_){return tool.app.OpenView.call(null,p1__5061_SHARP_,new cljs.core.Keyword(null,"Home","Home",1521501280),cljs.core.partial.call(null,core.model.CreateHomeModel,ctx));
});})(root,ctx))
);
});
core.main.main.call(null);
