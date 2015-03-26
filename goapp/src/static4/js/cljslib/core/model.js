// Compiled by ClojureScript 0.0-2268
goog.provide('core.model');
goog.require('cljs.core');
goog.require('core.fn');
goog.require('core.fn');
core.model.CreateHomeModel = (function CreateHomeModel(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve((function (){var obj5075 = {"modelKey":(0)};return obj5075;
})());
});})(promise))
,(0));
return promise;
});
core.model.CreateStreetSnapListModel = (function CreateStreetSnapListModel(a_ctx,p__5076){var vec__5085 = p__5076;var type = cljs.core.nth.call(null,vec__5085,(0),null);var configType = cljs.core.name.call(null,type);var p = (new $.Deferred());var G__5086_5093 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__5086_5093.done(((function (G__5086_5093,p,configType,vec__5085,type){
return (function() { 
var G__5094__delegate = function (args){var config = cljs.core.first.call(null,args);var details = cljs.core.second.call(null,args);var ConvertDTO = ((function (config,details,G__5086_5093,p,configType,vec__5085,type){
return (function (p__5087){var vec__5088 = p__5087;var model = cljs.core.nth.call(null,vec__5088,(0),null);var detail = cljs.core.nth.call(null,vec__5088,(1),null);var obj5090 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj5090;
});})(config,details,G__5086_5093,p,configType,vec__5085,type))
;var dto = (function (){var obj5092 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj5092;
})();return p.resolve(dto);
};
var G__5094 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5094__delegate.call(this,args);};
G__5094.cljs$lang$maxFixedArity = 0;
G__5094.cljs$lang$applyTo = (function (arglist__5095){
var args = cljs.core.seq(arglist__5095);
return G__5094__delegate(args);
});
G__5094.cljs$core$IFn$_invoke$arity$variadic = G__5094__delegate;
return G__5094;
})()
;})(G__5086_5093,p,configType,vec__5085,type))
);
G__5086_5093.fail(((function (G__5086_5093,p,configType,vec__5085,type){
return (function (p1__3381__3382__auto__){return p.reject(p1__3381__3382__auto__);
});})(G__5086_5093,p,configType,vec__5085,type))
);
return p;
});
