// Compiled by ClojureScript 0.0-2268
goog.provide('app.core');
goog.require('cljs.core');
goog.require('app.event');
goog.require('app.event');
goog.require('app.page.HeaderView');
goog.require('app.page.core');
goog.require('app.page.core');
app.core.main = (function main(){var this$ = cljs.core.atom.call(null,null);var coll_pages = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var mc_pageContainer = $("#mc_pageContainer");var mc_popupContainer = $("#mc_popupContainer");var mc_loading = $("#mc_loading");var header = app.page.HeaderView.create.call(null,$("#mc_header"));app.event.onHeaderBtnBackhomeClick.subscribe(cljs.core.partial.call(null,app.core.onHeaderBtnBackhomeClick,this$));
app.page.core.open.call(null,header);
return cljs.core.reset_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coll_pages","coll_pages",14662193),coll_pages,new cljs.core.Keyword(null,"mc_pageContainer","mc_pageContainer",2102405956),mc_pageContainer,new cljs.core.Keyword(null,"mc_popupContainer","mc_popupContainer",954307790),mc_popupContainer,new cljs.core.Keyword(null,"mc_loading","mc_loading",-49304577),mc_loading], null));
});
app.core.onHeaderBtnBackhomeClick = (function onHeaderBtnBackhomeClick(this$,view){return console.log(cljs.core.deref.call(null,this$),view);
});
app.core.main.call(null);
