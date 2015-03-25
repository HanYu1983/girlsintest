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
return promise.resolve((function (){var obj5068 = {"hp":new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,a_ctx)))};return obj5068;
})());
});})(promise))
);
return promise;
});
core.model.ChangeHP = (function ChangeHP(a_ctx){var ctx = cljs.core.deref.call(null,a_ctx);console.log(cljs.core.pr_str.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(ctx))));
return console.log(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(ctx)));
});
core.model.CreateHomeModel = (function CreateHomeModel(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve((function (){var obj5072 = {"modelKey":(0)};return obj5072;
})());
});})(promise))
,(0));
return promise;
});
core.model.CreateStreetSnapListModel = (function CreateStreetSnapListModel(a_ctx,args){var promise = (new $.Deferred());var G__5081_5088 = core.fn.GetAllModelBy.call(null,"config.json","street");G__5081_5088.done(((function (G__5081_5088,promise){
return (function() { 
var G__5089__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var ConvertDTO = ((function (config,details,G__5081_5088,promise){
return (function (p__5082){var vec__5083 = p__5082;var model = cljs.core.nth.call(null,vec__5083,(0),null);var detail = cljs.core.nth.call(null,vec__5083,(1),null);var obj5085 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj5085;
});})(config,details,G__5081_5088,promise))
;var dto = (function (){var obj5087 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj5087;
})();return promise.resolve(dto);
};
var G__5089 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5089__delegate.call(this,args__$1);};
G__5089.cljs$lang$maxFixedArity = 0;
G__5089.cljs$lang$applyTo = (function (arglist__5090){
var args__$1 = cljs.core.seq(arglist__5090);
return G__5089__delegate(args__$1);
});
G__5089.cljs$core$IFn$_invoke$arity$variadic = G__5089__delegate;
return G__5089;
})()
;})(G__5081_5088,promise))
);
G__5081_5088.fail(((function (G__5081_5088,promise){
return (function (p1__5073_SHARP_){return promise.reject(p1__5073_SHARP_);
});})(G__5081_5088,promise))
);
return promise;
});
