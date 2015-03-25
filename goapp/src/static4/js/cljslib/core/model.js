// Compiled by ClojureScript 0.0-2268
goog.provide('core.model');
goog.require('cljs.core');
goog.require('core.fn');
goog.require('core.fn');
core.model.CreatePage1Model = (function CreatePage1Model(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){var hp = (155);cljs.core.swap_BANG_.call(null,a_ctx,((function (hp,promise){
return (function (ctx){return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core._PLUS_,hp);
});})(hp,promise))
);
return promise.resolve((function (){var obj5059 = {"hp":new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,a_ctx)))};return obj5059;
})());
});})(promise))
);
return promise;
});
core.model.ChangeHP = (function ChangeHP(a_ctx){var ctx = cljs.core.deref.call(null,a_ctx);console.log(cljs.core.pr_str.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(ctx))));
return console.log(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(ctx)));
});
core.model.CreateHomeModel = (function CreateHomeModel(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve((function (){var obj5063 = {"modelKey":(0)};return obj5063;
})());
});})(promise))
,(0));
return promise;
});
core.model.CreateStreetSnapListModel = (function CreateStreetSnapListModel(a_ctx,args){var p = (new $.Deferred());var G__5071_5078 = core.fn.GetAllModelBy.call(null,"config.json","street");G__5071_5078.done(((function (G__5071_5078,p){
return (function() { 
var G__5079__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var ConvertDTO = ((function (config,details,G__5071_5078,p){
return (function (p__5072){var vec__5073 = p__5072;var model = cljs.core.nth.call(null,vec__5073,(0),null);var detail = cljs.core.nth.call(null,vec__5073,(1),null);var obj5075 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj5075;
});})(config,details,G__5071_5078,p))
;var dto = (function (){var obj5077 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj5077;
})();return p.resolve(dto);
};
var G__5079 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5079__delegate.call(this,args__$1);};
G__5079.cljs$lang$maxFixedArity = 0;
G__5079.cljs$lang$applyTo = (function (arglist__5080){
var args__$1 = cljs.core.seq(arglist__5080);
return G__5079__delegate(args__$1);
});
G__5079.cljs$core$IFn$_invoke$arity$variadic = G__5079__delegate;
return G__5079;
})()
;})(G__5071_5078,p))
);
G__5071_5078.fail(((function (G__5071_5078,p){
return (function (p1__4987__4988__auto__){return p.reject(p1__4987__4988__auto__);
});})(G__5071_5078,p))
);
return p;
});
