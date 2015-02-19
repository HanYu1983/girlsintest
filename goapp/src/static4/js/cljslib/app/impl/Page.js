// Compiled by ClojureScript 0.0-2268
goog.provide('app.impl.Page');
goog.require('cljs.core');
goog.require('app.design.IPage');
goog.require('app.design.IPage');
cljs.core._add_method.call(null,app.design.IPage.create,new cljs.core.Keyword(null,"default","default",-1987822328),(function (page,p__5041){var map__5042 = p__5041;var map__5042__$1 = ((cljs.core.seq_QMARK_.call(null,map__5042))?cljs.core.apply.call(null,cljs.core.hash_map,map__5042):map__5042);var elem = cljs.core.get.call(null,map__5042__$1,new cljs.core.Keyword(null,"elem","elem",618631056));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"elem","elem",618631056),elem], null);
}));
cljs.core._add_method.call(null,app.design.IPage.open,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,cb){new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(this$).fadeIn((400));
return cb.call(null,null);
}));
cljs.core._add_method.call(null,app.design.IPage.close,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$){return new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(this$).fadeOut((400));
}));
