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
return promise.resolve((function (){var obj5069 = {"hp":new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,a_ctx)))};return obj5069;
})());
});})(promise))
);
return promise;
});
core.model.ChangeHP = (function ChangeHP(a_ctx){var ctx = cljs.core.deref.call(null,a_ctx);console.log(cljs.core.pr_str.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(ctx))));
return console.log(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(ctx)));
});
core.model.CreateHomeModel = (function CreateHomeModel(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve((function (){var obj5073 = {"modelKey":(0)};return obj5073;
})());
});})(promise))
,(0));
return promise;
});
core.model.CreateStreetSnapListModel = (function CreateStreetSnapListModel(a_ctx,p__5074){var vec__5083 = p__5074;var type = cljs.core.nth.call(null,vec__5083,(0),null);var configType = cljs.core.name.call(null,type);var p = (new $.Deferred());var G__5084_5091 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__5084_5091.done(((function (G__5084_5091,p,configType,vec__5083,type){
return (function() { 
var G__5092__delegate = function (args){var config = cljs.core.first.call(null,args);var details = cljs.core.second.call(null,args);var ConvertDTO = ((function (config,details,G__5084_5091,p,configType,vec__5083,type){
return (function (p__5085){var vec__5086 = p__5085;var model = cljs.core.nth.call(null,vec__5086,(0),null);var detail = cljs.core.nth.call(null,vec__5086,(1),null);var obj5088 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj5088;
});})(config,details,G__5084_5091,p,configType,vec__5083,type))
;var dto = (function (){var obj5090 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj5090;
})();return p.resolve(dto);
};
var G__5092 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5092__delegate.call(this,args);};
G__5092.cljs$lang$maxFixedArity = 0;
G__5092.cljs$lang$applyTo = (function (arglist__5093){
var args = cljs.core.seq(arglist__5093);
return G__5092__delegate(args);
});
G__5092.cljs$core$IFn$_invoke$arity$variadic = G__5092__delegate;
return G__5092;
})()
;})(G__5084_5091,p,configType,vec__5083,type))
);
G__5084_5091.fail(((function (G__5084_5091,p,configType,vec__5083,type){
return (function (p1__4987__4988__auto__){return p.reject(p1__4987__4988__auto__);
});})(G__5084_5091,p,configType,vec__5083,type))
);
return p;
});
