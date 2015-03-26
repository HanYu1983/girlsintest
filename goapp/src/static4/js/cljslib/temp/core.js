// Compiled by ClojureScript 0.0-2268
goog.provide('temp.core');
goog.require('cljs.core');
temp.core.main = (function main(){var root = $("#root");var car = root.find("#car");var x = (10);var y = (40);var ary = [x,y];var multiTwo = ((function (root,car,x,y,ary){
return (function (v){return (v * v);
});})(root,car,x,y,ary))
;var ary2 = _.map(ary,multiTwo);var ary3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(100)], null);var ary4 = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,multiTwo,ary3));var ary5 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(120)], null);var ary6 = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,multiTwo,ary3));console.log(ary4);
console.log(ary2);
console.log(ary);
return console.log(root,car,x,y);
});
temp.core.main.call(null);
