// Compiled by ClojureScript 0.0-2268
goog.provide('test.rxjs');
goog.require('cljs.core');
test.rxjs.main = (function main(){var elem = $("#rxjs");var onOver = Rx.Observable.fromEvent(elem,"mouseover");var onOut = Rx.Observable.fromEvent(elem,"mouseout");onOver.subscribe(((function (elem,onOver,onOut){
return (function (elem__$1){return console.log(elem__$1);
});})(elem,onOver,onOut))
);
return onOut.subscribe(((function (elem,onOver,onOut){
return (function (elem__$1){return console.log(elem__$1);
});})(elem,onOver,onOut))
);
});
test.rxjs.main.call(null);
