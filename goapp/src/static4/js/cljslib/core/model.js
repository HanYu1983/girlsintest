// Compiled by ClojureScript 0.0-2268
goog.provide('core.model');
goog.require('cljs.core');
goog.require('core.fn');
goog.require('core.fn');
core.model.CreateHomeModel = (function CreateHomeModel(a_ctx,args){var promise = (new $.Deferred());setTimeout(((function (promise){
return (function (){return promise.resolve((function (){var obj5079 = {"modelKey":(0)};return obj5079;
})());
});})(promise))
,(0));
return promise;
});
core.model.CreateStreetSnapListModel = (function CreateStreetSnapListModel(a_ctx,p__5080){var vec__5089 = p__5080;var type = cljs.core.nth.call(null,vec__5089,(0),null);var configType = cljs.core.name.call(null,type);var p = (new $.Deferred());var G__5090_5097 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__5090_5097.done(((function (G__5090_5097,p,configType,vec__5089,type){
return (function() { 
var G__5098__delegate = function (args){var config = cljs.core.first.call(null,args);var details = cljs.core.second.call(null,args);var ConvertDTO = ((function (config,details,G__5090_5097,p,configType,vec__5089,type){
return (function (p__5091){var vec__5092 = p__5091;var model = cljs.core.nth.call(null,vec__5092,(0),null);var detail = cljs.core.nth.call(null,vec__5092,(1),null);var obj5094 = {"id":model,"name":detail.Caption,"date":detail.Date,"brand":detail.Brand,"imgStylePath":core.fn.ServeImagePath.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_2.jpg")),"imgSideAPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_3.jpg")),"imgSideBPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_4.jpg")),"imgSideCPath":core.fn.ServeImagePath100.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((config[configType]))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)+"/image_5.jpg"))};return obj5094;
});})(config,details,G__5090_5097,p,configType,vec__5089,type))
;var dto = (function (){var obj5096 = {"searchWord":"","streetsnapList":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,ConvertDTO,details))};return obj5096;
})();return p.resolve(dto);
};
var G__5098 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5098__delegate.call(this,args);};
G__5098.cljs$lang$maxFixedArity = 0;
G__5098.cljs$lang$applyTo = (function (arglist__5099){
var args = cljs.core.seq(arglist__5099);
return G__5098__delegate(args);
});
G__5098.cljs$core$IFn$_invoke$arity$variadic = G__5098__delegate;
return G__5098;
})()
;})(G__5090_5097,p,configType,vec__5089,type))
);
G__5090_5097.fail(((function (G__5090_5097,p,configType,vec__5089,type){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__5090_5097,p,configType,vec__5089,type))
);
return p;
});
core.model.CreateStreetSnapModel = (function CreateStreetSnapModel(a_ctx,p__5100){var map__5106 = p__5100;var map__5106__$1 = ((cljs.core.seq_QMARK_.call(null,map__5106))?cljs.core.apply.call(null,cljs.core.hash_map,map__5106):map__5106);var args = map__5106__$1;var id = cljs.core.get.call(null,map__5106__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var view = cljs.core.get.call(null,map__5106__$1,new cljs.core.Keyword(null,"view","view",1247994814));var configType = "street";var p = (new $.Deferred());var G__5107_5111 = core.fn.GetAllModelBy.call(null,"config.json",configType);G__5107_5111.done(((function (G__5107_5111,p,configType,map__5106,map__5106__$1,args,id,view){
return (function() { 
var G__5112__delegate = function (args__$1){var config = cljs.core.first.call(null,args__$1);var details = cljs.core.second.call(null,args__$1);var vec__5108 = cljs.core.first.call(null,details);var model = cljs.core.nth.call(null,vec__5108,(0),null);var detail = cljs.core.nth.call(null,vec__5108,(1),null);var dto = (function (){var obj5110 = {"modelKey":detail.ModelKey,"talk":detail.Talk,"bottomTab1":"bottomTab1","key":model,"bottomList":[],"bottomTab2":"bottomTab2","styleUrl":"","name":detail.Caption,"modelDetail":detail.Description,"sideList":[],"historyList":[],"date":detail.Date,"protalk":detail.Comment};return obj5110;
})();return p.resolve(dto);
};
var G__5112 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5112__delegate.call(this,args__$1);};
G__5112.cljs$lang$maxFixedArity = 0;
G__5112.cljs$lang$applyTo = (function (arglist__5113){
var args__$1 = cljs.core.seq(arglist__5113);
return G__5112__delegate(args__$1);
});
G__5112.cljs$core$IFn$_invoke$arity$variadic = G__5112__delegate;
return G__5112;
})()
;})(G__5107_5111,p,configType,map__5106,map__5106__$1,args,id,view))
);
G__5107_5111.fail(((function (G__5107_5111,p,configType,map__5106,map__5106__$1,args,id,view){
return (function (p1__4963__4964__auto__){return p.reject(p1__4963__4964__auto__);
});})(G__5107_5111,p,configType,map__5106,map__5106__$1,args,id,view))
);
return p;
});
