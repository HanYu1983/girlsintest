// Compiled by ClojureScript 0.0-2268
goog.provide('core.model');
goog.require('cljs.core');
core.model.CreatePage1Model = (function CreatePage1Model(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){var hp = (155);cljs.core.swap_BANG_.call(null,a_ctx,((function (hp,promise){
return (function (ctx){return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core._PLUS_,hp);
});})(hp,promise))
);
return promise.resolve((function (){var obj4987 = {"hp":new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,a_ctx)))};return obj4987;
})());
});})(promise))
);
return promise;
});
core.model.ChangeHP = (function ChangeHP(a_ctx){var ctx = cljs.core.deref.call(null,a_ctx);console.log(cljs.core.pr_str.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(ctx))));
return console.log(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(ctx)));
});
