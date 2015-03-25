// Compiled by ClojureScript 0.0-2268
goog.provide('core.main');
goog.require('cljs.core');
goog.require('core.view');
goog.require('core.view');
goog.require('core.model');
goog.require('core.fn');
goog.require('core.fn');
goog.require('core.model');
goog.require('core.event');
goog.require('core.event');
goog.require('core.app');
goog.require('core.app');
core.main.testCreateElem2 = (function testCreateElem2(){var ctx = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100)], null),new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),$("#mc_pageContainer"),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Page1","Page1",-154479013),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"addhp","addhp",-302288219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,core.model.ChangeHP], null),new cljs.core.Keyword(null,"topage2","topage2",208808139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Page2","Page2",-553759692),core.app.emptyModel], null)], null),new cljs.core.Keyword(null,"Page2","Page2",-553759692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topage1","topage1",1739412532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Page1","Page1",-154479013),core.model.CreatePage1Model], null)], null)], null)], null));core.event.OnPage1BtnClick.subscribe(cljs.core.partial.call(null,core.app.Route,ctx,new cljs.core.Keyword(null,"Page1","Page1",-154479013),new cljs.core.Keyword(null,"topage2","topage2",208808139)));
core.event.OnPage2BtnClick.subscribe(cljs.core.partial.call(null,core.app.Route,ctx,new cljs.core.Keyword(null,"Page2","Page2",-553759692),new cljs.core.Keyword(null,"topage1","topage1",1739412532)));
core.event.OnPage1AddHpBtnClick.subscribe(cljs.core.partial.call(null,core.app.Route,ctx,new cljs.core.Keyword(null,"Page1","Page1",-154479013),new cljs.core.Keyword(null,"addhp","addhp",-302288219)));
return cljs.core.swap_BANG_.call(null,ctx,((function (ctx){
return (function (p1__5028_SHARP_){return core.app.OpenView.call(null,p1__5028_SHARP_,new cljs.core.Keyword(null,"Page1","Page1",-154479013),cljs.core.partial.call(null,core.model.CreatePage1Model,ctx));
});})(ctx))
);
});
core.main.initHeader = (function initHeader(root){var menubar = root.find("#mc_menubar");return menubar.delegate("div","click",((function (menubar){
return (function (evt){var that = this;return core.event.OnMenubarBtnClick.onNext(that.id);
});})(menubar))
);
});
core.main.testIndex3 = (function testIndex3(){var root = $(".root");var ctx = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),root.find("#mc_pageContainer"),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toModel","toModel",-1645669175),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),core.app.emptyModel], null),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),core.model.CreateStreetSnapListModel], null),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),core.app.emptyModel], null)], null)], null)], null));core.main.initHeader.call(null,root);
core.event.OnMenubarBtnClick.subscribe(((function (root,ctx){
return (function (id){var pred__5033 = cljs.core._EQ_;var expr__5034 = id;if(cljs.core.truth_(pred__5033.call(null,"btn_nav_celebrity",expr__5034)))
{return core.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toCelebrity","toCelebrity",1684481862),null);
} else
{if(cljs.core.truth_(pred__5033.call(null,"btn_nav_event",expr__5034)))
{return core.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toEvent","toEvent",-687326363),null);
} else
{if(cljs.core.truth_(pred__5033.call(null,"btn_nav_model",expr__5034)))
{return core.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toModel","toModel",-1645669175),null);
} else
{if(cljs.core.truth_(pred__5033.call(null,"btn_nav_streetSnap",expr__5034)))
{return core.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toStreetSnap","toStreetSnap",-1729169818),null);
} else
{if(cljs.core.truth_(pred__5033.call(null,"btn_nav_product",expr__5034)))
{return core.app.Route.call(null,ctx,new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"toProduct","toProduct",-912176427),null);
} else
{return cljs.core.identity;
}
}
}
}
}
});})(root,ctx))
);
return cljs.core.swap_BANG_.call(null,ctx,((function (root,ctx){
return (function (p1__5029_SHARP_){return core.app.OpenView.call(null,p1__5029_SHARP_,new cljs.core.Keyword(null,"Home","Home",1521501280),cljs.core.partial.call(null,core.model.CreateHomeModel,ctx));
});})(root,ctx))
);
});
core.main.testFn = (function testFn(){var G__5037 = core.fn.GetAllModelBy.call(null,"config.json","product");G__5037.done(((function (G__5037){
return (function (){return console.log(arguments);
});})(G__5037))
);
G__5037.fail(((function (G__5037){
return (function (err){return alert(err);
});})(G__5037))
);
return G__5037;
});
core.main.testIndex3.call(null);
