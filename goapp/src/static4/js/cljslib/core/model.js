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
return promise.resolve((function (){var obj5042 = {"hp":new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,a_ctx)))};return obj5042;
})());
});})(promise))
);
return promise;
});
core.model.ChangeHP = (function ChangeHP(a_ctx){var ctx = cljs.core.deref.call(null,a_ctx);console.log(cljs.core.pr_str.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(ctx))));
return console.log(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(ctx)));
});
core.model.CreateHomeModel = (function CreateHomeModel(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve((function (){var obj5046 = {"modelKey":(0)};return obj5046;
})());
});})(promise))
,(0));
return promise;
});
core.model.CreateStreetSnapListModel = (function CreateStreetSnapListModel(a_ctx,args){var promise = (new $.Deferred());var G__5055_5062 = core.fn.GetAllModelBy.call(null,"config.json","street");G__5055_5062.done(((function (G__5055_5062,promise){
return (function (){var config = (arguments[(0)]);var details = (arguments[(1)]);var ConvertDTO = ((function (config,details,G__5055_5062,promise){
return (function (p__5056){var vec__5057 = p__5056;var model = cljs.core.nth.call(null,vec__5057,(0),null);var detail = cljs.core.nth.call(null,vec__5057,(1),null);var obj5059 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config["street"]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj5059;
});})(config,details,G__5055_5062,promise))
;var dto = (function (){var obj5061 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj5061;
})();return promise.resolve(dto);
});})(G__5055_5062,promise))
);
G__5055_5062.fail(((function (G__5055_5062,promise){
return (function (p1__5047_SHARP_){return promise.reject(p1__5047_SHARP_);
});})(G__5055_5062,promise))
);
return promise;
});
