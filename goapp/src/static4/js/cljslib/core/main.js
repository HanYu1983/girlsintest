// Compiled by ClojureScript 0.0-2268
goog.provide('core.main');
goog.require('cljs.core');
goog.require('core.event');
goog.require('core.event');
goog.require('core.view');
goog.require('core.view');
goog.require('core.model');
goog.require('core.model');
goog.require('core.app');
goog.require('core.app');
core.main.testCreateElem2 = (function testCreateElem2(){var ctx = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100)], null),new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),$("#mc_pageContainer"),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Page1","Page1",-154479013),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"addhp","addhp",-302288219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,core.model.ChangeHP], null),new cljs.core.Keyword(null,"topage2","topage2",208808139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Page2","Page2",-553759692),core.app.emptyModel], null)], null),new cljs.core.Keyword(null,"Page2","Page2",-553759692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topage1","topage1",1739412532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Page1","Page1",-154479013),core.model.CreatePage1Model], null)], null)], null)], null));core.event.OnPage1BtnClick.subscribe(cljs.core.partial.call(null,core.app.Route,ctx,new cljs.core.Keyword(null,"Page1","Page1",-154479013),new cljs.core.Keyword(null,"topage2","topage2",208808139)));
core.event.OnPage2BtnClick.subscribe(cljs.core.partial.call(null,core.app.Route,ctx,new cljs.core.Keyword(null,"Page2","Page2",-553759692),new cljs.core.Keyword(null,"topage1","topage1",1739412532)));
core.event.OnPage1AddHpBtnClick.subscribe(cljs.core.partial.call(null,core.app.Route,ctx,new cljs.core.Keyword(null,"Page1","Page1",-154479013),new cljs.core.Keyword(null,"addhp","addhp",-302288219)));
return cljs.core.swap_BANG_.call(null,ctx,((function (ctx){
return (function (p1__4979_SHARP_){return core.app.OpenView.call(null,p1__4979_SHARP_,new cljs.core.Keyword(null,"Page1","Page1",-154479013),cljs.core.partial.call(null,core.model.CreatePage1Model,ctx));
});})(ctx))
);
});
core.main.testCreateElem2.call(null);
