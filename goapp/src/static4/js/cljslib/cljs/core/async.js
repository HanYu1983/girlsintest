// Compiled by ClojureScript 0.0-2268
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9158 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9158 = (function (f,fn_handler,meta9159){
this.f = f;
this.fn_handler = fn_handler;
this.meta9159 = meta9159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9158.cljs$lang$type = true;
cljs.core.async.t9158.cljs$lang$ctorStr = "cljs.core.async/t9158";
cljs.core.async.t9158.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9158");
});
cljs.core.async.t9158.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9160){var self__ = this;
var _9160__$1 = this;return self__.meta9159;
});
cljs.core.async.t9158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9160,meta9159__$1){var self__ = this;
var _9160__$1 = this;return (new cljs.core.async.t9158(self__.f,self__.fn_handler,meta9159__$1));
});
cljs.core.async.__GT_t9158 = (function __GT_t9158(f__$1,fn_handler__$1,meta9159){return (new cljs.core.async.t9158(f__$1,fn_handler__$1,meta9159));
});
}
return (new cljs.core.async.t9158(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9162 = buff;if(G__9162)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__9162.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9162.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9162);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9162);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9163 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9163);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_9163,ret){
return (function (){return fn1.call(null,val_9163);
});})(val_9163,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___9164 = n;var x_9165 = (0);while(true){
if((x_9165 < n__4407__auto___9164))
{(a[x_9165] = (0));
{
var G__9166 = (x_9165 + (1));
x_9165 = G__9166;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9167 = (i + (1));
i = G__9167;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9171 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9171 = (function (flag,alt_flag,meta9172){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9172 = meta9172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9171.cljs$lang$type = true;
cljs.core.async.t9171.cljs$lang$ctorStr = "cljs.core.async/t9171";
cljs.core.async.t9171.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9171");
});})(flag))
;
cljs.core.async.t9171.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t9171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t9171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9173){var self__ = this;
var _9173__$1 = this;return self__.meta9172;
});})(flag))
;
cljs.core.async.t9171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9173,meta9172__$1){var self__ = this;
var _9173__$1 = this;return (new cljs.core.async.t9171(self__.flag,self__.alt_flag,meta9172__$1));
});})(flag))
;
cljs.core.async.__GT_t9171 = ((function (flag){
return (function __GT_t9171(flag__$1,alt_flag__$1,meta9172){return (new cljs.core.async.t9171(flag__$1,alt_flag__$1,meta9172));
});})(flag))
;
}
return (new cljs.core.async.t9171(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9177 = (function (cb,flag,alt_handler,meta9178){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9178 = meta9178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9177.cljs$lang$type = true;
cljs.core.async.t9177.cljs$lang$ctorStr = "cljs.core.async/t9177";
cljs.core.async.t9177.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9177");
});
cljs.core.async.t9177.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9179){var self__ = this;
var _9179__$1 = this;return self__.meta9178;
});
cljs.core.async.t9177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9179,meta9178__$1){var self__ = this;
var _9179__$1 = this;return (new cljs.core.async.t9177(self__.cb,self__.flag,self__.alt_handler,meta9178__$1));
});
cljs.core.async.__GT_t9177 = (function __GT_t9177(cb__$1,flag__$1,alt_handler__$1,meta9178){return (new cljs.core.async.t9177(cb__$1,flag__$1,alt_handler__$1,meta9178));
});
}
return (new cljs.core.async.t9177(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9180_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9180_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9181_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9181_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3551__auto__ = wport;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9182 = (i + (1));
i = G__9182;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3551__auto__ = ret;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3539__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3539__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3539__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9183){var map__9185 = p__9183;var map__9185__$1 = ((cljs.core.seq_QMARK_.call(null,map__9185))?cljs.core.apply.call(null,cljs.core.hash_map,map__9185):map__9185);var opts = map__9185__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__9183 = null;if (arguments.length > 1) {
  p__9183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9183);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9186){
var ports = cljs.core.first(arglist__9186);
var p__9183 = cljs.core.rest(arglist__9186);
return alts_BANG___delegate(ports,p__9183);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6344__auto___9281 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___9281){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___9281){
return (function (state_9257){var state_val_9258 = (state_9257[(1)]);if((state_val_9258 === (7)))
{var inst_9253 = (state_9257[(2)]);var state_9257__$1 = state_9257;var statearr_9259_9282 = state_9257__$1;(statearr_9259_9282[(2)] = inst_9253);
(statearr_9259_9282[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9258 === (1)))
{var state_9257__$1 = state_9257;var statearr_9260_9283 = state_9257__$1;(statearr_9260_9283[(2)] = null);
(statearr_9260_9283[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9258 === (4)))
{var inst_9236 = (state_9257[(7)]);var inst_9236__$1 = (state_9257[(2)]);var inst_9237 = (inst_9236__$1 == null);var state_9257__$1 = (function (){var statearr_9261 = state_9257;(statearr_9261[(7)] = inst_9236__$1);
return statearr_9261;
})();if(cljs.core.truth_(inst_9237))
{var statearr_9262_9284 = state_9257__$1;(statearr_9262_9284[(1)] = (5));
} else
{var statearr_9263_9285 = state_9257__$1;(statearr_9263_9285[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9258 === (13)))
{var state_9257__$1 = state_9257;var statearr_9264_9286 = state_9257__$1;(statearr_9264_9286[(2)] = null);
(statearr_9264_9286[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9258 === (6)))
{var inst_9236 = (state_9257[(7)]);var state_9257__$1 = state_9257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9257__$1,(11),to,inst_9236);
} else
{if((state_val_9258 === (3)))
{var inst_9255 = (state_9257[(2)]);var state_9257__$1 = state_9257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9257__$1,inst_9255);
} else
{if((state_val_9258 === (12)))
{var state_9257__$1 = state_9257;var statearr_9265_9287 = state_9257__$1;(statearr_9265_9287[(2)] = null);
(statearr_9265_9287[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9258 === (2)))
{var state_9257__$1 = state_9257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9257__$1,(4),from);
} else
{if((state_val_9258 === (11)))
{var inst_9246 = (state_9257[(2)]);var state_9257__$1 = state_9257;if(cljs.core.truth_(inst_9246))
{var statearr_9266_9288 = state_9257__$1;(statearr_9266_9288[(1)] = (12));
} else
{var statearr_9267_9289 = state_9257__$1;(statearr_9267_9289[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9258 === (9)))
{var state_9257__$1 = state_9257;var statearr_9268_9290 = state_9257__$1;(statearr_9268_9290[(2)] = null);
(statearr_9268_9290[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9258 === (5)))
{var state_9257__$1 = state_9257;if(cljs.core.truth_(close_QMARK_))
{var statearr_9269_9291 = state_9257__$1;(statearr_9269_9291[(1)] = (8));
} else
{var statearr_9270_9292 = state_9257__$1;(statearr_9270_9292[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9258 === (14)))
{var inst_9251 = (state_9257[(2)]);var state_9257__$1 = state_9257;var statearr_9271_9293 = state_9257__$1;(statearr_9271_9293[(2)] = inst_9251);
(statearr_9271_9293[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9258 === (10)))
{var inst_9243 = (state_9257[(2)]);var state_9257__$1 = state_9257;var statearr_9272_9294 = state_9257__$1;(statearr_9272_9294[(2)] = inst_9243);
(statearr_9272_9294[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9258 === (8)))
{var inst_9240 = cljs.core.async.close_BANG_.call(null,to);var state_9257__$1 = state_9257;var statearr_9273_9295 = state_9257__$1;(statearr_9273_9295[(2)] = inst_9240);
(statearr_9273_9295[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___9281))
;return ((function (switch__6329__auto__,c__6344__auto___9281){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_9277 = [null,null,null,null,null,null,null,null];(statearr_9277[(0)] = state_machine__6330__auto__);
(statearr_9277[(1)] = (1));
return statearr_9277;
});
var state_machine__6330__auto____1 = (function (state_9257){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_9257);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e9278){if((e9278 instanceof Object))
{var ex__6333__auto__ = e9278;var statearr_9279_9296 = state_9257;(statearr_9279_9296[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9257);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9297 = state_9257;
state_9257 = G__9297;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_9257){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_9257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___9281))
})();var state__6346__auto__ = (function (){var statearr_9280 = f__6345__auto__.call(null);(statearr_9280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___9281);
return statearr_9280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___9281))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__9480){var vec__9481 = p__9480;var v = cljs.core.nth.call(null,vec__9481,(0),null);var p = cljs.core.nth.call(null,vec__9481,(1),null);var job = vec__9481;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6344__auto___9662 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___9662,res,vec__9481,v,p,job,jobs,results){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___9662,res,vec__9481,v,p,job,jobs,results){
return (function (state_9486){var state_val_9487 = (state_9486[(1)]);if((state_val_9487 === (2)))
{var inst_9483 = (state_9486[(2)]);var inst_9484 = cljs.core.async.close_BANG_.call(null,res);var state_9486__$1 = (function (){var statearr_9488 = state_9486;(statearr_9488[(7)] = inst_9483);
return statearr_9488;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9486__$1,inst_9484);
} else
{if((state_val_9487 === (1)))
{var state_9486__$1 = state_9486;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9486__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6344__auto___9662,res,vec__9481,v,p,job,jobs,results))
;return ((function (switch__6329__auto__,c__6344__auto___9662,res,vec__9481,v,p,job,jobs,results){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_9492 = [null,null,null,null,null,null,null,null];(statearr_9492[(0)] = state_machine__6330__auto__);
(statearr_9492[(1)] = (1));
return statearr_9492;
});
var state_machine__6330__auto____1 = (function (state_9486){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_9486);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e9493){if((e9493 instanceof Object))
{var ex__6333__auto__ = e9493;var statearr_9494_9663 = state_9486;(statearr_9494_9663[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9486);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9664 = state_9486;
state_9486 = G__9664;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_9486){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_9486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___9662,res,vec__9481,v,p,job,jobs,results))
})();var state__6346__auto__ = (function (){var statearr_9495 = f__6345__auto__.call(null);(statearr_9495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___9662);
return statearr_9495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___9662,res,vec__9481,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__9496){var vec__9497 = p__9496;var v = cljs.core.nth.call(null,vec__9497,(0),null);var p = cljs.core.nth.call(null,vec__9497,(1),null);var job = vec__9497;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4407__auto___9665 = n;var __9666 = (0);while(true){
if((__9666 < n__4407__auto___9665))
{var G__9498_9667 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__9498_9667) {
case "async":
var c__6344__auto___9669 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__9666,c__6344__auto___9669,G__9498_9667,n__4407__auto___9665,jobs,results,process,async){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (__9666,c__6344__auto___9669,G__9498_9667,n__4407__auto___9665,jobs,results,process,async){
return (function (state_9511){var state_val_9512 = (state_9511[(1)]);if((state_val_9512 === (7)))
{var inst_9507 = (state_9511[(2)]);var state_9511__$1 = state_9511;var statearr_9513_9670 = state_9511__$1;(statearr_9513_9670[(2)] = inst_9507);
(statearr_9513_9670[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9512 === (6)))
{var state_9511__$1 = state_9511;var statearr_9514_9671 = state_9511__$1;(statearr_9514_9671[(2)] = null);
(statearr_9514_9671[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9512 === (5)))
{var state_9511__$1 = state_9511;var statearr_9515_9672 = state_9511__$1;(statearr_9515_9672[(2)] = null);
(statearr_9515_9672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9512 === (4)))
{var inst_9501 = (state_9511[(2)]);var inst_9502 = async.call(null,inst_9501);var state_9511__$1 = state_9511;if(cljs.core.truth_(inst_9502))
{var statearr_9516_9673 = state_9511__$1;(statearr_9516_9673[(1)] = (5));
} else
{var statearr_9517_9674 = state_9511__$1;(statearr_9517_9674[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9512 === (3)))
{var inst_9509 = (state_9511[(2)]);var state_9511__$1 = state_9511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9511__$1,inst_9509);
} else
{if((state_val_9512 === (2)))
{var state_9511__$1 = state_9511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9511__$1,(4),jobs);
} else
{if((state_val_9512 === (1)))
{var state_9511__$1 = state_9511;var statearr_9518_9675 = state_9511__$1;(statearr_9518_9675[(2)] = null);
(statearr_9518_9675[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__9666,c__6344__auto___9669,G__9498_9667,n__4407__auto___9665,jobs,results,process,async))
;return ((function (__9666,switch__6329__auto__,c__6344__auto___9669,G__9498_9667,n__4407__auto___9665,jobs,results,process,async){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_9522 = [null,null,null,null,null,null,null];(statearr_9522[(0)] = state_machine__6330__auto__);
(statearr_9522[(1)] = (1));
return statearr_9522;
});
var state_machine__6330__auto____1 = (function (state_9511){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_9511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e9523){if((e9523 instanceof Object))
{var ex__6333__auto__ = e9523;var statearr_9524_9676 = state_9511;(statearr_9524_9676[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9677 = state_9511;
state_9511 = G__9677;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_9511){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_9511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(__9666,switch__6329__auto__,c__6344__auto___9669,G__9498_9667,n__4407__auto___9665,jobs,results,process,async))
})();var state__6346__auto__ = (function (){var statearr_9525 = f__6345__auto__.call(null);(statearr_9525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___9669);
return statearr_9525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(__9666,c__6344__auto___9669,G__9498_9667,n__4407__auto___9665,jobs,results,process,async))
);

break;
case "compute":
var c__6344__auto___9678 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__9666,c__6344__auto___9678,G__9498_9667,n__4407__auto___9665,jobs,results,process,async){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (__9666,c__6344__auto___9678,G__9498_9667,n__4407__auto___9665,jobs,results,process,async){
return (function (state_9538){var state_val_9539 = (state_9538[(1)]);if((state_val_9539 === (7)))
{var inst_9534 = (state_9538[(2)]);var state_9538__$1 = state_9538;var statearr_9540_9679 = state_9538__$1;(statearr_9540_9679[(2)] = inst_9534);
(statearr_9540_9679[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9539 === (6)))
{var state_9538__$1 = state_9538;var statearr_9541_9680 = state_9538__$1;(statearr_9541_9680[(2)] = null);
(statearr_9541_9680[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9539 === (5)))
{var state_9538__$1 = state_9538;var statearr_9542_9681 = state_9538__$1;(statearr_9542_9681[(2)] = null);
(statearr_9542_9681[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9539 === (4)))
{var inst_9528 = (state_9538[(2)]);var inst_9529 = process.call(null,inst_9528);var state_9538__$1 = state_9538;if(cljs.core.truth_(inst_9529))
{var statearr_9543_9682 = state_9538__$1;(statearr_9543_9682[(1)] = (5));
} else
{var statearr_9544_9683 = state_9538__$1;(statearr_9544_9683[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9539 === (3)))
{var inst_9536 = (state_9538[(2)]);var state_9538__$1 = state_9538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9538__$1,inst_9536);
} else
{if((state_val_9539 === (2)))
{var state_9538__$1 = state_9538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9538__$1,(4),jobs);
} else
{if((state_val_9539 === (1)))
{var state_9538__$1 = state_9538;var statearr_9545_9684 = state_9538__$1;(statearr_9545_9684[(2)] = null);
(statearr_9545_9684[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__9666,c__6344__auto___9678,G__9498_9667,n__4407__auto___9665,jobs,results,process,async))
;return ((function (__9666,switch__6329__auto__,c__6344__auto___9678,G__9498_9667,n__4407__auto___9665,jobs,results,process,async){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_9549 = [null,null,null,null,null,null,null];(statearr_9549[(0)] = state_machine__6330__auto__);
(statearr_9549[(1)] = (1));
return statearr_9549;
});
var state_machine__6330__auto____1 = (function (state_9538){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_9538);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e9550){if((e9550 instanceof Object))
{var ex__6333__auto__ = e9550;var statearr_9551_9685 = state_9538;(statearr_9551_9685[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9538);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9686 = state_9538;
state_9538 = G__9686;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_9538){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_9538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(__9666,switch__6329__auto__,c__6344__auto___9678,G__9498_9667,n__4407__auto___9665,jobs,results,process,async))
})();var state__6346__auto__ = (function (){var statearr_9552 = f__6345__auto__.call(null);(statearr_9552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___9678);
return statearr_9552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(__9666,c__6344__auto___9678,G__9498_9667,n__4407__auto___9665,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__9687 = (__9666 + (1));
__9666 = G__9687;
continue;
}
} else
{}
break;
}
var c__6344__auto___9688 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___9688,jobs,results,process,async){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___9688,jobs,results,process,async){
return (function (state_9573){var state_val_9574 = (state_9573[(1)]);if((state_val_9574 === (9)))
{var inst_9566 = (state_9573[(2)]);var state_9573__$1 = (function (){var statearr_9575 = state_9573;(statearr_9575[(7)] = inst_9566);
return statearr_9575;
})();var statearr_9576_9689 = state_9573__$1;(statearr_9576_9689[(2)] = null);
(statearr_9576_9689[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9574 === (8)))
{var inst_9560 = (state_9573[(8)]);var inst_9564 = (state_9573[(2)]);var state_9573__$1 = (function (){var statearr_9577 = state_9573;(statearr_9577[(9)] = inst_9564);
return statearr_9577;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9573__$1,(9),results,inst_9560);
} else
{if((state_val_9574 === (7)))
{var inst_9569 = (state_9573[(2)]);var state_9573__$1 = state_9573;var statearr_9578_9690 = state_9573__$1;(statearr_9578_9690[(2)] = inst_9569);
(statearr_9578_9690[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9574 === (6)))
{var inst_9555 = (state_9573[(10)]);var inst_9560 = (state_9573[(8)]);var inst_9560__$1 = cljs.core.async.chan.call(null,(1));var inst_9561 = [inst_9555,inst_9560__$1];var inst_9562 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9561,null));var state_9573__$1 = (function (){var statearr_9579 = state_9573;(statearr_9579[(8)] = inst_9560__$1);
return statearr_9579;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9573__$1,(8),jobs,inst_9562);
} else
{if((state_val_9574 === (5)))
{var inst_9558 = cljs.core.async.close_BANG_.call(null,jobs);var state_9573__$1 = state_9573;var statearr_9580_9691 = state_9573__$1;(statearr_9580_9691[(2)] = inst_9558);
(statearr_9580_9691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9574 === (4)))
{var inst_9555 = (state_9573[(10)]);var inst_9555__$1 = (state_9573[(2)]);var inst_9556 = (inst_9555__$1 == null);var state_9573__$1 = (function (){var statearr_9581 = state_9573;(statearr_9581[(10)] = inst_9555__$1);
return statearr_9581;
})();if(cljs.core.truth_(inst_9556))
{var statearr_9582_9692 = state_9573__$1;(statearr_9582_9692[(1)] = (5));
} else
{var statearr_9583_9693 = state_9573__$1;(statearr_9583_9693[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9574 === (3)))
{var inst_9571 = (state_9573[(2)]);var state_9573__$1 = state_9573;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9573__$1,inst_9571);
} else
{if((state_val_9574 === (2)))
{var state_9573__$1 = state_9573;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9573__$1,(4),from);
} else
{if((state_val_9574 === (1)))
{var state_9573__$1 = state_9573;var statearr_9584_9694 = state_9573__$1;(statearr_9584_9694[(2)] = null);
(statearr_9584_9694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___9688,jobs,results,process,async))
;return ((function (switch__6329__auto__,c__6344__auto___9688,jobs,results,process,async){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_9588 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9588[(0)] = state_machine__6330__auto__);
(statearr_9588[(1)] = (1));
return statearr_9588;
});
var state_machine__6330__auto____1 = (function (state_9573){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_9573);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e9589){if((e9589 instanceof Object))
{var ex__6333__auto__ = e9589;var statearr_9590_9695 = state_9573;(statearr_9590_9695[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9573);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9589;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9696 = state_9573;
state_9573 = G__9696;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_9573){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_9573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___9688,jobs,results,process,async))
})();var state__6346__auto__ = (function (){var statearr_9591 = f__6345__auto__.call(null);(statearr_9591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___9688);
return statearr_9591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___9688,jobs,results,process,async))
);
var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,jobs,results,process,async){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,jobs,results,process,async){
return (function (state_9629){var state_val_9630 = (state_9629[(1)]);if((state_val_9630 === (7)))
{var inst_9625 = (state_9629[(2)]);var state_9629__$1 = state_9629;var statearr_9631_9697 = state_9629__$1;(statearr_9631_9697[(2)] = inst_9625);
(statearr_9631_9697[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (20)))
{var state_9629__$1 = state_9629;var statearr_9632_9698 = state_9629__$1;(statearr_9632_9698[(2)] = null);
(statearr_9632_9698[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (1)))
{var state_9629__$1 = state_9629;var statearr_9633_9699 = state_9629__$1;(statearr_9633_9699[(2)] = null);
(statearr_9633_9699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (4)))
{var inst_9594 = (state_9629[(7)]);var inst_9594__$1 = (state_9629[(2)]);var inst_9595 = (inst_9594__$1 == null);var state_9629__$1 = (function (){var statearr_9634 = state_9629;(statearr_9634[(7)] = inst_9594__$1);
return statearr_9634;
})();if(cljs.core.truth_(inst_9595))
{var statearr_9635_9700 = state_9629__$1;(statearr_9635_9700[(1)] = (5));
} else
{var statearr_9636_9701 = state_9629__$1;(statearr_9636_9701[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (15)))
{var inst_9607 = (state_9629[(8)]);var state_9629__$1 = state_9629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9629__$1,(18),to,inst_9607);
} else
{if((state_val_9630 === (21)))
{var inst_9620 = (state_9629[(2)]);var state_9629__$1 = state_9629;var statearr_9637_9702 = state_9629__$1;(statearr_9637_9702[(2)] = inst_9620);
(statearr_9637_9702[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (13)))
{var inst_9622 = (state_9629[(2)]);var state_9629__$1 = (function (){var statearr_9638 = state_9629;(statearr_9638[(9)] = inst_9622);
return statearr_9638;
})();var statearr_9639_9703 = state_9629__$1;(statearr_9639_9703[(2)] = null);
(statearr_9639_9703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (6)))
{var inst_9594 = (state_9629[(7)]);var state_9629__$1 = state_9629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9629__$1,(11),inst_9594);
} else
{if((state_val_9630 === (17)))
{var inst_9615 = (state_9629[(2)]);var state_9629__$1 = state_9629;if(cljs.core.truth_(inst_9615))
{var statearr_9640_9704 = state_9629__$1;(statearr_9640_9704[(1)] = (19));
} else
{var statearr_9641_9705 = state_9629__$1;(statearr_9641_9705[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (3)))
{var inst_9627 = (state_9629[(2)]);var state_9629__$1 = state_9629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9629__$1,inst_9627);
} else
{if((state_val_9630 === (12)))
{var inst_9604 = (state_9629[(10)]);var state_9629__$1 = state_9629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9629__$1,(14),inst_9604);
} else
{if((state_val_9630 === (2)))
{var state_9629__$1 = state_9629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9629__$1,(4),results);
} else
{if((state_val_9630 === (19)))
{var state_9629__$1 = state_9629;var statearr_9642_9706 = state_9629__$1;(statearr_9642_9706[(2)] = null);
(statearr_9642_9706[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (11)))
{var inst_9604 = (state_9629[(2)]);var state_9629__$1 = (function (){var statearr_9643 = state_9629;(statearr_9643[(10)] = inst_9604);
return statearr_9643;
})();var statearr_9644_9707 = state_9629__$1;(statearr_9644_9707[(2)] = null);
(statearr_9644_9707[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (9)))
{var state_9629__$1 = state_9629;var statearr_9645_9708 = state_9629__$1;(statearr_9645_9708[(2)] = null);
(statearr_9645_9708[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (5)))
{var state_9629__$1 = state_9629;if(cljs.core.truth_(close_QMARK_))
{var statearr_9646_9709 = state_9629__$1;(statearr_9646_9709[(1)] = (8));
} else
{var statearr_9647_9710 = state_9629__$1;(statearr_9647_9710[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (14)))
{var inst_9607 = (state_9629[(8)]);var inst_9609 = (state_9629[(11)]);var inst_9607__$1 = (state_9629[(2)]);var inst_9608 = (inst_9607__$1 == null);var inst_9609__$1 = cljs.core.not.call(null,inst_9608);var state_9629__$1 = (function (){var statearr_9648 = state_9629;(statearr_9648[(8)] = inst_9607__$1);
(statearr_9648[(11)] = inst_9609__$1);
return statearr_9648;
})();if(inst_9609__$1)
{var statearr_9649_9711 = state_9629__$1;(statearr_9649_9711[(1)] = (15));
} else
{var statearr_9650_9712 = state_9629__$1;(statearr_9650_9712[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (16)))
{var inst_9609 = (state_9629[(11)]);var state_9629__$1 = state_9629;var statearr_9651_9713 = state_9629__$1;(statearr_9651_9713[(2)] = inst_9609);
(statearr_9651_9713[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (10)))
{var inst_9601 = (state_9629[(2)]);var state_9629__$1 = state_9629;var statearr_9652_9714 = state_9629__$1;(statearr_9652_9714[(2)] = inst_9601);
(statearr_9652_9714[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (18)))
{var inst_9612 = (state_9629[(2)]);var state_9629__$1 = state_9629;var statearr_9653_9715 = state_9629__$1;(statearr_9653_9715[(2)] = inst_9612);
(statearr_9653_9715[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9630 === (8)))
{var inst_9598 = cljs.core.async.close_BANG_.call(null,to);var state_9629__$1 = state_9629;var statearr_9654_9716 = state_9629__$1;(statearr_9654_9716[(2)] = inst_9598);
(statearr_9654_9716[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto__,jobs,results,process,async))
;return ((function (switch__6329__auto__,c__6344__auto__,jobs,results,process,async){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_9658 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9658[(0)] = state_machine__6330__auto__);
(statearr_9658[(1)] = (1));
return statearr_9658;
});
var state_machine__6330__auto____1 = (function (state_9629){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_9629);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e9659){if((e9659 instanceof Object))
{var ex__6333__auto__ = e9659;var statearr_9660_9717 = state_9629;(statearr_9660_9717[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9629);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9718 = state_9629;
state_9629 = G__9718;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_9629){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_9629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,jobs,results,process,async))
})();var state__6346__auto__ = (function (){var statearr_9661 = f__6345__auto__.call(null);(statearr_9661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_9661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,jobs,results,process,async))
);
return c__6344__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6344__auto___9819 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___9819,tc,fc){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___9819,tc,fc){
return (function (state_9794){var state_val_9795 = (state_9794[(1)]);if((state_val_9795 === (7)))
{var inst_9790 = (state_9794[(2)]);var state_9794__$1 = state_9794;var statearr_9796_9820 = state_9794__$1;(statearr_9796_9820[(2)] = inst_9790);
(statearr_9796_9820[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (1)))
{var state_9794__$1 = state_9794;var statearr_9797_9821 = state_9794__$1;(statearr_9797_9821[(2)] = null);
(statearr_9797_9821[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (4)))
{var inst_9771 = (state_9794[(7)]);var inst_9771__$1 = (state_9794[(2)]);var inst_9772 = (inst_9771__$1 == null);var state_9794__$1 = (function (){var statearr_9798 = state_9794;(statearr_9798[(7)] = inst_9771__$1);
return statearr_9798;
})();if(cljs.core.truth_(inst_9772))
{var statearr_9799_9822 = state_9794__$1;(statearr_9799_9822[(1)] = (5));
} else
{var statearr_9800_9823 = state_9794__$1;(statearr_9800_9823[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (13)))
{var state_9794__$1 = state_9794;var statearr_9801_9824 = state_9794__$1;(statearr_9801_9824[(2)] = null);
(statearr_9801_9824[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (6)))
{var inst_9771 = (state_9794[(7)]);var inst_9777 = p.call(null,inst_9771);var state_9794__$1 = state_9794;if(cljs.core.truth_(inst_9777))
{var statearr_9802_9825 = state_9794__$1;(statearr_9802_9825[(1)] = (9));
} else
{var statearr_9803_9826 = state_9794__$1;(statearr_9803_9826[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (3)))
{var inst_9792 = (state_9794[(2)]);var state_9794__$1 = state_9794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9794__$1,inst_9792);
} else
{if((state_val_9795 === (12)))
{var state_9794__$1 = state_9794;var statearr_9804_9827 = state_9794__$1;(statearr_9804_9827[(2)] = null);
(statearr_9804_9827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (2)))
{var state_9794__$1 = state_9794;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9794__$1,(4),ch);
} else
{if((state_val_9795 === (11)))
{var inst_9771 = (state_9794[(7)]);var inst_9781 = (state_9794[(2)]);var state_9794__$1 = state_9794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9794__$1,(8),inst_9781,inst_9771);
} else
{if((state_val_9795 === (9)))
{var state_9794__$1 = state_9794;var statearr_9805_9828 = state_9794__$1;(statearr_9805_9828[(2)] = tc);
(statearr_9805_9828[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (5)))
{var inst_9774 = cljs.core.async.close_BANG_.call(null,tc);var inst_9775 = cljs.core.async.close_BANG_.call(null,fc);var state_9794__$1 = (function (){var statearr_9806 = state_9794;(statearr_9806[(8)] = inst_9774);
return statearr_9806;
})();var statearr_9807_9829 = state_9794__$1;(statearr_9807_9829[(2)] = inst_9775);
(statearr_9807_9829[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (14)))
{var inst_9788 = (state_9794[(2)]);var state_9794__$1 = state_9794;var statearr_9808_9830 = state_9794__$1;(statearr_9808_9830[(2)] = inst_9788);
(statearr_9808_9830[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (10)))
{var state_9794__$1 = state_9794;var statearr_9809_9831 = state_9794__$1;(statearr_9809_9831[(2)] = fc);
(statearr_9809_9831[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (8)))
{var inst_9783 = (state_9794[(2)]);var state_9794__$1 = state_9794;if(cljs.core.truth_(inst_9783))
{var statearr_9810_9832 = state_9794__$1;(statearr_9810_9832[(1)] = (12));
} else
{var statearr_9811_9833 = state_9794__$1;(statearr_9811_9833[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___9819,tc,fc))
;return ((function (switch__6329__auto__,c__6344__auto___9819,tc,fc){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_9815 = [null,null,null,null,null,null,null,null,null];(statearr_9815[(0)] = state_machine__6330__auto__);
(statearr_9815[(1)] = (1));
return statearr_9815;
});
var state_machine__6330__auto____1 = (function (state_9794){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_9794);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e9816){if((e9816 instanceof Object))
{var ex__6333__auto__ = e9816;var statearr_9817_9834 = state_9794;(statearr_9817_9834[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9794);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9835 = state_9794;
state_9794 = G__9835;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_9794){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_9794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___9819,tc,fc))
})();var state__6346__auto__ = (function (){var statearr_9818 = f__6345__auto__.call(null);(statearr_9818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___9819);
return statearr_9818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___9819,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__){
return (function (state_9882){var state_val_9883 = (state_9882[(1)]);if((state_val_9883 === (7)))
{var inst_9878 = (state_9882[(2)]);var state_9882__$1 = state_9882;var statearr_9884_9900 = state_9882__$1;(statearr_9884_9900[(2)] = inst_9878);
(statearr_9884_9900[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9883 === (6)))
{var inst_9868 = (state_9882[(7)]);var inst_9871 = (state_9882[(8)]);var inst_9875 = f.call(null,inst_9868,inst_9871);var inst_9868__$1 = inst_9875;var state_9882__$1 = (function (){var statearr_9885 = state_9882;(statearr_9885[(7)] = inst_9868__$1);
return statearr_9885;
})();var statearr_9886_9901 = state_9882__$1;(statearr_9886_9901[(2)] = null);
(statearr_9886_9901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9883 === (5)))
{var inst_9868 = (state_9882[(7)]);var state_9882__$1 = state_9882;var statearr_9887_9902 = state_9882__$1;(statearr_9887_9902[(2)] = inst_9868);
(statearr_9887_9902[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9883 === (4)))
{var inst_9871 = (state_9882[(8)]);var inst_9871__$1 = (state_9882[(2)]);var inst_9872 = (inst_9871__$1 == null);var state_9882__$1 = (function (){var statearr_9888 = state_9882;(statearr_9888[(8)] = inst_9871__$1);
return statearr_9888;
})();if(cljs.core.truth_(inst_9872))
{var statearr_9889_9903 = state_9882__$1;(statearr_9889_9903[(1)] = (5));
} else
{var statearr_9890_9904 = state_9882__$1;(statearr_9890_9904[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9883 === (3)))
{var inst_9880 = (state_9882[(2)]);var state_9882__$1 = state_9882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9882__$1,inst_9880);
} else
{if((state_val_9883 === (2)))
{var state_9882__$1 = state_9882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9882__$1,(4),ch);
} else
{if((state_val_9883 === (1)))
{var inst_9868 = init;var state_9882__$1 = (function (){var statearr_9891 = state_9882;(statearr_9891[(7)] = inst_9868);
return statearr_9891;
})();var statearr_9892_9905 = state_9882__$1;(statearr_9892_9905[(2)] = null);
(statearr_9892_9905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_9896 = [null,null,null,null,null,null,null,null,null];(statearr_9896[(0)] = state_machine__6330__auto__);
(statearr_9896[(1)] = (1));
return statearr_9896;
});
var state_machine__6330__auto____1 = (function (state_9882){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_9882);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e9897){if((e9897 instanceof Object))
{var ex__6333__auto__ = e9897;var statearr_9898_9906 = state_9882;(statearr_9898_9906[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9882);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9907 = state_9882;
state_9882 = G__9907;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_9882){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_9882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_9899 = f__6345__auto__.call(null);(statearr_9899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_9899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__))
);
return c__6344__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__){
return (function (state_9981){var state_val_9982 = (state_9981[(1)]);if((state_val_9982 === (7)))
{var inst_9963 = (state_9981[(2)]);var state_9981__$1 = state_9981;var statearr_9983_10006 = state_9981__$1;(statearr_9983_10006[(2)] = inst_9963);
(statearr_9983_10006[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9982 === (1)))
{var inst_9957 = cljs.core.seq.call(null,coll);var inst_9958 = inst_9957;var state_9981__$1 = (function (){var statearr_9984 = state_9981;(statearr_9984[(7)] = inst_9958);
return statearr_9984;
})();var statearr_9985_10007 = state_9981__$1;(statearr_9985_10007[(2)] = null);
(statearr_9985_10007[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9982 === (4)))
{var inst_9958 = (state_9981[(7)]);var inst_9961 = cljs.core.first.call(null,inst_9958);var state_9981__$1 = state_9981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9981__$1,(7),ch,inst_9961);
} else
{if((state_val_9982 === (13)))
{var inst_9975 = (state_9981[(2)]);var state_9981__$1 = state_9981;var statearr_9986_10008 = state_9981__$1;(statearr_9986_10008[(2)] = inst_9975);
(statearr_9986_10008[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9982 === (6)))
{var inst_9966 = (state_9981[(2)]);var state_9981__$1 = state_9981;if(cljs.core.truth_(inst_9966))
{var statearr_9987_10009 = state_9981__$1;(statearr_9987_10009[(1)] = (8));
} else
{var statearr_9988_10010 = state_9981__$1;(statearr_9988_10010[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9982 === (3)))
{var inst_9979 = (state_9981[(2)]);var state_9981__$1 = state_9981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9981__$1,inst_9979);
} else
{if((state_val_9982 === (12)))
{var state_9981__$1 = state_9981;var statearr_9989_10011 = state_9981__$1;(statearr_9989_10011[(2)] = null);
(statearr_9989_10011[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9982 === (2)))
{var inst_9958 = (state_9981[(7)]);var state_9981__$1 = state_9981;if(cljs.core.truth_(inst_9958))
{var statearr_9990_10012 = state_9981__$1;(statearr_9990_10012[(1)] = (4));
} else
{var statearr_9991_10013 = state_9981__$1;(statearr_9991_10013[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9982 === (11)))
{var inst_9972 = cljs.core.async.close_BANG_.call(null,ch);var state_9981__$1 = state_9981;var statearr_9992_10014 = state_9981__$1;(statearr_9992_10014[(2)] = inst_9972);
(statearr_9992_10014[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9982 === (9)))
{var state_9981__$1 = state_9981;if(cljs.core.truth_(close_QMARK_))
{var statearr_9993_10015 = state_9981__$1;(statearr_9993_10015[(1)] = (11));
} else
{var statearr_9994_10016 = state_9981__$1;(statearr_9994_10016[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9982 === (5)))
{var inst_9958 = (state_9981[(7)]);var state_9981__$1 = state_9981;var statearr_9995_10017 = state_9981__$1;(statearr_9995_10017[(2)] = inst_9958);
(statearr_9995_10017[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9982 === (10)))
{var inst_9977 = (state_9981[(2)]);var state_9981__$1 = state_9981;var statearr_9996_10018 = state_9981__$1;(statearr_9996_10018[(2)] = inst_9977);
(statearr_9996_10018[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9982 === (8)))
{var inst_9958 = (state_9981[(7)]);var inst_9968 = cljs.core.next.call(null,inst_9958);var inst_9958__$1 = inst_9968;var state_9981__$1 = (function (){var statearr_9997 = state_9981;(statearr_9997[(7)] = inst_9958__$1);
return statearr_9997;
})();var statearr_9998_10019 = state_9981__$1;(statearr_9998_10019[(2)] = null);
(statearr_9998_10019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_10002 = [null,null,null,null,null,null,null,null];(statearr_10002[(0)] = state_machine__6330__auto__);
(statearr_10002[(1)] = (1));
return statearr_10002;
});
var state_machine__6330__auto____1 = (function (state_9981){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_9981);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e10003){if((e10003 instanceof Object))
{var ex__6333__auto__ = e10003;var statearr_10004_10020 = state_9981;(statearr_10004_10020[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10021 = state_9981;
state_9981 = G__10021;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_9981){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_9981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_10005 = f__6345__auto__.call(null);(statearr_10005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_10005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__))
);
return c__6344__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10023 = {};return obj10023;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3539__auto__ = _;if(and__3539__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4178__auto__ = (((_ == null))?null:_);return (function (){var or__3551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10025 = {};return obj10025;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10247 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10247 = (function (cs,ch,mult,meta10248){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10248 = meta10248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10247.cljs$lang$type = true;
cljs.core.async.t10247.cljs$lang$ctorStr = "cljs.core.async/t10247";
cljs.core.async.t10247.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10247");
});})(cs))
;
cljs.core.async.t10247.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10247.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10247.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10247.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10247.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10249){var self__ = this;
var _10249__$1 = this;return self__.meta10248;
});})(cs))
;
cljs.core.async.t10247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10249,meta10248__$1){var self__ = this;
var _10249__$1 = this;return (new cljs.core.async.t10247(self__.cs,self__.ch,self__.mult,meta10248__$1));
});})(cs))
;
cljs.core.async.__GT_t10247 = ((function (cs){
return (function __GT_t10247(cs__$1,ch__$1,mult__$1,meta10248){return (new cljs.core.async.t10247(cs__$1,ch__$1,mult__$1,meta10248));
});})(cs))
;
}
return (new cljs.core.async.t10247(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6344__auto___10468 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___10468,cs,m,dchan,dctr,done){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___10468,cs,m,dchan,dctr,done){
return (function (state_10380){var state_val_10381 = (state_10380[(1)]);if((state_val_10381 === (7)))
{var inst_10376 = (state_10380[(2)]);var state_10380__$1 = state_10380;var statearr_10382_10469 = state_10380__$1;(statearr_10382_10469[(2)] = inst_10376);
(statearr_10382_10469[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (20)))
{var inst_10281 = (state_10380[(7)]);var inst_10291 = cljs.core.first.call(null,inst_10281);var inst_10292 = cljs.core.nth.call(null,inst_10291,(0),null);var inst_10293 = cljs.core.nth.call(null,inst_10291,(1),null);var state_10380__$1 = (function (){var statearr_10383 = state_10380;(statearr_10383[(8)] = inst_10292);
return statearr_10383;
})();if(cljs.core.truth_(inst_10293))
{var statearr_10384_10470 = state_10380__$1;(statearr_10384_10470[(1)] = (22));
} else
{var statearr_10385_10471 = state_10380__$1;(statearr_10385_10471[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (27)))
{var inst_10328 = (state_10380[(9)]);var inst_10321 = (state_10380[(10)]);var inst_10252 = (state_10380[(11)]);var inst_10323 = (state_10380[(12)]);var inst_10328__$1 = cljs.core._nth.call(null,inst_10321,inst_10323);var inst_10329 = cljs.core.async.put_BANG_.call(null,inst_10328__$1,inst_10252,done);var state_10380__$1 = (function (){var statearr_10386 = state_10380;(statearr_10386[(9)] = inst_10328__$1);
return statearr_10386;
})();if(cljs.core.truth_(inst_10329))
{var statearr_10387_10472 = state_10380__$1;(statearr_10387_10472[(1)] = (30));
} else
{var statearr_10388_10473 = state_10380__$1;(statearr_10388_10473[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (1)))
{var state_10380__$1 = state_10380;var statearr_10389_10474 = state_10380__$1;(statearr_10389_10474[(2)] = null);
(statearr_10389_10474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (24)))
{var inst_10281 = (state_10380[(7)]);var inst_10298 = (state_10380[(2)]);var inst_10299 = cljs.core.next.call(null,inst_10281);var inst_10261 = inst_10299;var inst_10262 = null;var inst_10263 = (0);var inst_10264 = (0);var state_10380__$1 = (function (){var statearr_10390 = state_10380;(statearr_10390[(13)] = inst_10262);
(statearr_10390[(14)] = inst_10261);
(statearr_10390[(15)] = inst_10263);
(statearr_10390[(16)] = inst_10264);
(statearr_10390[(17)] = inst_10298);
return statearr_10390;
})();var statearr_10391_10475 = state_10380__$1;(statearr_10391_10475[(2)] = null);
(statearr_10391_10475[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (39)))
{var state_10380__$1 = state_10380;var statearr_10395_10476 = state_10380__$1;(statearr_10395_10476[(2)] = null);
(statearr_10395_10476[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (4)))
{var inst_10252 = (state_10380[(11)]);var inst_10252__$1 = (state_10380[(2)]);var inst_10253 = (inst_10252__$1 == null);var state_10380__$1 = (function (){var statearr_10396 = state_10380;(statearr_10396[(11)] = inst_10252__$1);
return statearr_10396;
})();if(cljs.core.truth_(inst_10253))
{var statearr_10397_10477 = state_10380__$1;(statearr_10397_10477[(1)] = (5));
} else
{var statearr_10398_10478 = state_10380__$1;(statearr_10398_10478[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (15)))
{var inst_10262 = (state_10380[(13)]);var inst_10261 = (state_10380[(14)]);var inst_10263 = (state_10380[(15)]);var inst_10264 = (state_10380[(16)]);var inst_10277 = (state_10380[(2)]);var inst_10278 = (inst_10264 + (1));var tmp10392 = inst_10262;var tmp10393 = inst_10261;var tmp10394 = inst_10263;var inst_10261__$1 = tmp10393;var inst_10262__$1 = tmp10392;var inst_10263__$1 = tmp10394;var inst_10264__$1 = inst_10278;var state_10380__$1 = (function (){var statearr_10399 = state_10380;(statearr_10399[(13)] = inst_10262__$1);
(statearr_10399[(14)] = inst_10261__$1);
(statearr_10399[(15)] = inst_10263__$1);
(statearr_10399[(16)] = inst_10264__$1);
(statearr_10399[(18)] = inst_10277);
return statearr_10399;
})();var statearr_10400_10479 = state_10380__$1;(statearr_10400_10479[(2)] = null);
(statearr_10400_10479[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (21)))
{var inst_10302 = (state_10380[(2)]);var state_10380__$1 = state_10380;var statearr_10404_10480 = state_10380__$1;(statearr_10404_10480[(2)] = inst_10302);
(statearr_10404_10480[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (31)))
{var inst_10328 = (state_10380[(9)]);var inst_10332 = done.call(null,null);var inst_10333 = cljs.core.async.untap_STAR_.call(null,m,inst_10328);var state_10380__$1 = (function (){var statearr_10405 = state_10380;(statearr_10405[(19)] = inst_10332);
return statearr_10405;
})();var statearr_10406_10481 = state_10380__$1;(statearr_10406_10481[(2)] = inst_10333);
(statearr_10406_10481[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (32)))
{var inst_10322 = (state_10380[(20)]);var inst_10321 = (state_10380[(10)]);var inst_10320 = (state_10380[(21)]);var inst_10323 = (state_10380[(12)]);var inst_10335 = (state_10380[(2)]);var inst_10336 = (inst_10323 + (1));var tmp10401 = inst_10322;var tmp10402 = inst_10321;var tmp10403 = inst_10320;var inst_10320__$1 = tmp10403;var inst_10321__$1 = tmp10402;var inst_10322__$1 = tmp10401;var inst_10323__$1 = inst_10336;var state_10380__$1 = (function (){var statearr_10407 = state_10380;(statearr_10407[(20)] = inst_10322__$1);
(statearr_10407[(10)] = inst_10321__$1);
(statearr_10407[(21)] = inst_10320__$1);
(statearr_10407[(22)] = inst_10335);
(statearr_10407[(12)] = inst_10323__$1);
return statearr_10407;
})();var statearr_10408_10482 = state_10380__$1;(statearr_10408_10482[(2)] = null);
(statearr_10408_10482[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (40)))
{var inst_10348 = (state_10380[(23)]);var inst_10352 = done.call(null,null);var inst_10353 = cljs.core.async.untap_STAR_.call(null,m,inst_10348);var state_10380__$1 = (function (){var statearr_10409 = state_10380;(statearr_10409[(24)] = inst_10352);
return statearr_10409;
})();var statearr_10410_10483 = state_10380__$1;(statearr_10410_10483[(2)] = inst_10353);
(statearr_10410_10483[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (33)))
{var inst_10339 = (state_10380[(25)]);var inst_10341 = cljs.core.chunked_seq_QMARK_.call(null,inst_10339);var state_10380__$1 = state_10380;if(inst_10341)
{var statearr_10411_10484 = state_10380__$1;(statearr_10411_10484[(1)] = (36));
} else
{var statearr_10412_10485 = state_10380__$1;(statearr_10412_10485[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (13)))
{var inst_10271 = (state_10380[(26)]);var inst_10274 = cljs.core.async.close_BANG_.call(null,inst_10271);var state_10380__$1 = state_10380;var statearr_10413_10486 = state_10380__$1;(statearr_10413_10486[(2)] = inst_10274);
(statearr_10413_10486[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (22)))
{var inst_10292 = (state_10380[(8)]);var inst_10295 = cljs.core.async.close_BANG_.call(null,inst_10292);var state_10380__$1 = state_10380;var statearr_10414_10487 = state_10380__$1;(statearr_10414_10487[(2)] = inst_10295);
(statearr_10414_10487[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (36)))
{var inst_10339 = (state_10380[(25)]);var inst_10343 = cljs.core.chunk_first.call(null,inst_10339);var inst_10344 = cljs.core.chunk_rest.call(null,inst_10339);var inst_10345 = cljs.core.count.call(null,inst_10343);var inst_10320 = inst_10344;var inst_10321 = inst_10343;var inst_10322 = inst_10345;var inst_10323 = (0);var state_10380__$1 = (function (){var statearr_10415 = state_10380;(statearr_10415[(20)] = inst_10322);
(statearr_10415[(10)] = inst_10321);
(statearr_10415[(21)] = inst_10320);
(statearr_10415[(12)] = inst_10323);
return statearr_10415;
})();var statearr_10416_10488 = state_10380__$1;(statearr_10416_10488[(2)] = null);
(statearr_10416_10488[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (41)))
{var inst_10339 = (state_10380[(25)]);var inst_10355 = (state_10380[(2)]);var inst_10356 = cljs.core.next.call(null,inst_10339);var inst_10320 = inst_10356;var inst_10321 = null;var inst_10322 = (0);var inst_10323 = (0);var state_10380__$1 = (function (){var statearr_10417 = state_10380;(statearr_10417[(20)] = inst_10322);
(statearr_10417[(10)] = inst_10321);
(statearr_10417[(21)] = inst_10320);
(statearr_10417[(27)] = inst_10355);
(statearr_10417[(12)] = inst_10323);
return statearr_10417;
})();var statearr_10418_10489 = state_10380__$1;(statearr_10418_10489[(2)] = null);
(statearr_10418_10489[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (43)))
{var state_10380__$1 = state_10380;var statearr_10419_10490 = state_10380__$1;(statearr_10419_10490[(2)] = null);
(statearr_10419_10490[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (29)))
{var inst_10364 = (state_10380[(2)]);var state_10380__$1 = state_10380;var statearr_10420_10491 = state_10380__$1;(statearr_10420_10491[(2)] = inst_10364);
(statearr_10420_10491[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (44)))
{var inst_10373 = (state_10380[(2)]);var state_10380__$1 = (function (){var statearr_10421 = state_10380;(statearr_10421[(28)] = inst_10373);
return statearr_10421;
})();var statearr_10422_10492 = state_10380__$1;(statearr_10422_10492[(2)] = null);
(statearr_10422_10492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (6)))
{var inst_10312 = (state_10380[(29)]);var inst_10311 = cljs.core.deref.call(null,cs);var inst_10312__$1 = cljs.core.keys.call(null,inst_10311);var inst_10313 = cljs.core.count.call(null,inst_10312__$1);var inst_10314 = cljs.core.reset_BANG_.call(null,dctr,inst_10313);var inst_10319 = cljs.core.seq.call(null,inst_10312__$1);var inst_10320 = inst_10319;var inst_10321 = null;var inst_10322 = (0);var inst_10323 = (0);var state_10380__$1 = (function (){var statearr_10423 = state_10380;(statearr_10423[(20)] = inst_10322);
(statearr_10423[(10)] = inst_10321);
(statearr_10423[(29)] = inst_10312__$1);
(statearr_10423[(21)] = inst_10320);
(statearr_10423[(12)] = inst_10323);
(statearr_10423[(30)] = inst_10314);
return statearr_10423;
})();var statearr_10424_10493 = state_10380__$1;(statearr_10424_10493[(2)] = null);
(statearr_10424_10493[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (28)))
{var inst_10320 = (state_10380[(21)]);var inst_10339 = (state_10380[(25)]);var inst_10339__$1 = cljs.core.seq.call(null,inst_10320);var state_10380__$1 = (function (){var statearr_10425 = state_10380;(statearr_10425[(25)] = inst_10339__$1);
return statearr_10425;
})();if(inst_10339__$1)
{var statearr_10426_10494 = state_10380__$1;(statearr_10426_10494[(1)] = (33));
} else
{var statearr_10427_10495 = state_10380__$1;(statearr_10427_10495[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (25)))
{var inst_10322 = (state_10380[(20)]);var inst_10323 = (state_10380[(12)]);var inst_10325 = (inst_10323 < inst_10322);var inst_10326 = inst_10325;var state_10380__$1 = state_10380;if(cljs.core.truth_(inst_10326))
{var statearr_10428_10496 = state_10380__$1;(statearr_10428_10496[(1)] = (27));
} else
{var statearr_10429_10497 = state_10380__$1;(statearr_10429_10497[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (34)))
{var state_10380__$1 = state_10380;var statearr_10430_10498 = state_10380__$1;(statearr_10430_10498[(2)] = null);
(statearr_10430_10498[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (17)))
{var state_10380__$1 = state_10380;var statearr_10431_10499 = state_10380__$1;(statearr_10431_10499[(2)] = null);
(statearr_10431_10499[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (3)))
{var inst_10378 = (state_10380[(2)]);var state_10380__$1 = state_10380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10380__$1,inst_10378);
} else
{if((state_val_10381 === (12)))
{var inst_10307 = (state_10380[(2)]);var state_10380__$1 = state_10380;var statearr_10432_10500 = state_10380__$1;(statearr_10432_10500[(2)] = inst_10307);
(statearr_10432_10500[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (2)))
{var state_10380__$1 = state_10380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10380__$1,(4),ch);
} else
{if((state_val_10381 === (23)))
{var state_10380__$1 = state_10380;var statearr_10433_10501 = state_10380__$1;(statearr_10433_10501[(2)] = null);
(statearr_10433_10501[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (35)))
{var inst_10362 = (state_10380[(2)]);var state_10380__$1 = state_10380;var statearr_10434_10502 = state_10380__$1;(statearr_10434_10502[(2)] = inst_10362);
(statearr_10434_10502[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (19)))
{var inst_10281 = (state_10380[(7)]);var inst_10285 = cljs.core.chunk_first.call(null,inst_10281);var inst_10286 = cljs.core.chunk_rest.call(null,inst_10281);var inst_10287 = cljs.core.count.call(null,inst_10285);var inst_10261 = inst_10286;var inst_10262 = inst_10285;var inst_10263 = inst_10287;var inst_10264 = (0);var state_10380__$1 = (function (){var statearr_10435 = state_10380;(statearr_10435[(13)] = inst_10262);
(statearr_10435[(14)] = inst_10261);
(statearr_10435[(15)] = inst_10263);
(statearr_10435[(16)] = inst_10264);
return statearr_10435;
})();var statearr_10436_10503 = state_10380__$1;(statearr_10436_10503[(2)] = null);
(statearr_10436_10503[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (11)))
{var inst_10281 = (state_10380[(7)]);var inst_10261 = (state_10380[(14)]);var inst_10281__$1 = cljs.core.seq.call(null,inst_10261);var state_10380__$1 = (function (){var statearr_10437 = state_10380;(statearr_10437[(7)] = inst_10281__$1);
return statearr_10437;
})();if(inst_10281__$1)
{var statearr_10438_10504 = state_10380__$1;(statearr_10438_10504[(1)] = (16));
} else
{var statearr_10439_10505 = state_10380__$1;(statearr_10439_10505[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (9)))
{var inst_10309 = (state_10380[(2)]);var state_10380__$1 = state_10380;var statearr_10440_10506 = state_10380__$1;(statearr_10440_10506[(2)] = inst_10309);
(statearr_10440_10506[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (5)))
{var inst_10259 = cljs.core.deref.call(null,cs);var inst_10260 = cljs.core.seq.call(null,inst_10259);var inst_10261 = inst_10260;var inst_10262 = null;var inst_10263 = (0);var inst_10264 = (0);var state_10380__$1 = (function (){var statearr_10441 = state_10380;(statearr_10441[(13)] = inst_10262);
(statearr_10441[(14)] = inst_10261);
(statearr_10441[(15)] = inst_10263);
(statearr_10441[(16)] = inst_10264);
return statearr_10441;
})();var statearr_10442_10507 = state_10380__$1;(statearr_10442_10507[(2)] = null);
(statearr_10442_10507[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (14)))
{var state_10380__$1 = state_10380;var statearr_10443_10508 = state_10380__$1;(statearr_10443_10508[(2)] = null);
(statearr_10443_10508[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (45)))
{var inst_10370 = (state_10380[(2)]);var state_10380__$1 = state_10380;var statearr_10444_10509 = state_10380__$1;(statearr_10444_10509[(2)] = inst_10370);
(statearr_10444_10509[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (26)))
{var inst_10312 = (state_10380[(29)]);var inst_10366 = (state_10380[(2)]);var inst_10367 = cljs.core.seq.call(null,inst_10312);var state_10380__$1 = (function (){var statearr_10445 = state_10380;(statearr_10445[(31)] = inst_10366);
return statearr_10445;
})();if(inst_10367)
{var statearr_10446_10510 = state_10380__$1;(statearr_10446_10510[(1)] = (42));
} else
{var statearr_10447_10511 = state_10380__$1;(statearr_10447_10511[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (16)))
{var inst_10281 = (state_10380[(7)]);var inst_10283 = cljs.core.chunked_seq_QMARK_.call(null,inst_10281);var state_10380__$1 = state_10380;if(inst_10283)
{var statearr_10448_10512 = state_10380__$1;(statearr_10448_10512[(1)] = (19));
} else
{var statearr_10449_10513 = state_10380__$1;(statearr_10449_10513[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (38)))
{var inst_10359 = (state_10380[(2)]);var state_10380__$1 = state_10380;var statearr_10450_10514 = state_10380__$1;(statearr_10450_10514[(2)] = inst_10359);
(statearr_10450_10514[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (30)))
{var state_10380__$1 = state_10380;var statearr_10451_10515 = state_10380__$1;(statearr_10451_10515[(2)] = null);
(statearr_10451_10515[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (10)))
{var inst_10262 = (state_10380[(13)]);var inst_10264 = (state_10380[(16)]);var inst_10270 = cljs.core._nth.call(null,inst_10262,inst_10264);var inst_10271 = cljs.core.nth.call(null,inst_10270,(0),null);var inst_10272 = cljs.core.nth.call(null,inst_10270,(1),null);var state_10380__$1 = (function (){var statearr_10452 = state_10380;(statearr_10452[(26)] = inst_10271);
return statearr_10452;
})();if(cljs.core.truth_(inst_10272))
{var statearr_10453_10516 = state_10380__$1;(statearr_10453_10516[(1)] = (13));
} else
{var statearr_10454_10517 = state_10380__$1;(statearr_10454_10517[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (18)))
{var inst_10305 = (state_10380[(2)]);var state_10380__$1 = state_10380;var statearr_10455_10518 = state_10380__$1;(statearr_10455_10518[(2)] = inst_10305);
(statearr_10455_10518[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (42)))
{var state_10380__$1 = state_10380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10380__$1,(45),dchan);
} else
{if((state_val_10381 === (37)))
{var inst_10348 = (state_10380[(23)]);var inst_10252 = (state_10380[(11)]);var inst_10339 = (state_10380[(25)]);var inst_10348__$1 = cljs.core.first.call(null,inst_10339);var inst_10349 = cljs.core.async.put_BANG_.call(null,inst_10348__$1,inst_10252,done);var state_10380__$1 = (function (){var statearr_10456 = state_10380;(statearr_10456[(23)] = inst_10348__$1);
return statearr_10456;
})();if(cljs.core.truth_(inst_10349))
{var statearr_10457_10519 = state_10380__$1;(statearr_10457_10519[(1)] = (39));
} else
{var statearr_10458_10520 = state_10380__$1;(statearr_10458_10520[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10381 === (8)))
{var inst_10263 = (state_10380[(15)]);var inst_10264 = (state_10380[(16)]);var inst_10266 = (inst_10264 < inst_10263);var inst_10267 = inst_10266;var state_10380__$1 = state_10380;if(cljs.core.truth_(inst_10267))
{var statearr_10459_10521 = state_10380__$1;(statearr_10459_10521[(1)] = (10));
} else
{var statearr_10460_10522 = state_10380__$1;(statearr_10460_10522[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___10468,cs,m,dchan,dctr,done))
;return ((function (switch__6329__auto__,c__6344__auto___10468,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_10464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10464[(0)] = state_machine__6330__auto__);
(statearr_10464[(1)] = (1));
return statearr_10464;
});
var state_machine__6330__auto____1 = (function (state_10380){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_10380);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e10465){if((e10465 instanceof Object))
{var ex__6333__auto__ = e10465;var statearr_10466_10523 = state_10380;(statearr_10466_10523[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10524 = state_10380;
state_10380 = G__10524;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_10380){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_10380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___10468,cs,m,dchan,dctr,done))
})();var state__6346__auto__ = (function (){var statearr_10467 = f__6345__auto__.call(null);(statearr_10467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___10468);
return statearr_10467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___10468,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10526 = {};return obj10526;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__10527){var map__10532 = p__10527;var map__10532__$1 = ((cljs.core.seq_QMARK_.call(null,map__10532))?cljs.core.apply.call(null,cljs.core.hash_map,map__10532):map__10532);var opts = map__10532__$1;var statearr_10533_10536 = state;(statearr_10533_10536[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__10532,map__10532__$1,opts){
return (function (val){var statearr_10534_10537 = state;(statearr_10534_10537[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10532,map__10532__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_10535_10538 = state;(statearr_10535_10538[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__10527 = null;if (arguments.length > 3) {
  p__10527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__10527);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__10539){
var state = cljs.core.first(arglist__10539);
arglist__10539 = cljs.core.next(arglist__10539);
var cont_block = cljs.core.first(arglist__10539);
arglist__10539 = cljs.core.next(arglist__10539);
var ports = cljs.core.first(arglist__10539);
var p__10527 = cljs.core.rest(arglist__10539);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__10527);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10659 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10660){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10660 = meta10660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10659.cljs$lang$type = true;
cljs.core.async.t10659.cljs$lang$ctorStr = "cljs.core.async/t10659";
cljs.core.async.t10659.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10659");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10659.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10659.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10659.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10659.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10659.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10659.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10659.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10659.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10661){var self__ = this;
var _10661__$1 = this;return self__.meta10660;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10661,meta10660__$1){var self__ = this;
var _10661__$1 = this;return (new cljs.core.async.t10659(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10660__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10659 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10659(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10660){return (new cljs.core.async.t10659(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10660));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10659(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6344__auto___10778 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___10778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___10778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10731){var state_val_10732 = (state_10731[(1)]);if((state_val_10732 === (7)))
{var inst_10675 = (state_10731[(7)]);var inst_10680 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10675);var state_10731__$1 = state_10731;var statearr_10733_10779 = state_10731__$1;(statearr_10733_10779[(2)] = inst_10680);
(statearr_10733_10779[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (20)))
{var inst_10690 = (state_10731[(8)]);var state_10731__$1 = state_10731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10731__$1,(23),out,inst_10690);
} else
{if((state_val_10732 === (1)))
{var inst_10665 = (state_10731[(9)]);var inst_10665__$1 = calc_state.call(null);var inst_10666 = cljs.core.seq_QMARK_.call(null,inst_10665__$1);var state_10731__$1 = (function (){var statearr_10734 = state_10731;(statearr_10734[(9)] = inst_10665__$1);
return statearr_10734;
})();if(inst_10666)
{var statearr_10735_10780 = state_10731__$1;(statearr_10735_10780[(1)] = (2));
} else
{var statearr_10736_10781 = state_10731__$1;(statearr_10736_10781[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (24)))
{var inst_10683 = (state_10731[(10)]);var inst_10675 = inst_10683;var state_10731__$1 = (function (){var statearr_10737 = state_10731;(statearr_10737[(7)] = inst_10675);
return statearr_10737;
})();var statearr_10738_10782 = state_10731__$1;(statearr_10738_10782[(2)] = null);
(statearr_10738_10782[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (4)))
{var inst_10665 = (state_10731[(9)]);var inst_10671 = (state_10731[(2)]);var inst_10672 = cljs.core.get.call(null,inst_10671,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_10673 = cljs.core.get.call(null,inst_10671,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_10674 = cljs.core.get.call(null,inst_10671,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_10675 = inst_10665;var state_10731__$1 = (function (){var statearr_10739 = state_10731;(statearr_10739[(11)] = inst_10674);
(statearr_10739[(12)] = inst_10673);
(statearr_10739[(7)] = inst_10675);
(statearr_10739[(13)] = inst_10672);
return statearr_10739;
})();var statearr_10740_10783 = state_10731__$1;(statearr_10740_10783[(2)] = null);
(statearr_10740_10783[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (15)))
{var state_10731__$1 = state_10731;var statearr_10741_10784 = state_10731__$1;(statearr_10741_10784[(2)] = null);
(statearr_10741_10784[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (21)))
{var inst_10683 = (state_10731[(10)]);var inst_10675 = inst_10683;var state_10731__$1 = (function (){var statearr_10742 = state_10731;(statearr_10742[(7)] = inst_10675);
return statearr_10742;
})();var statearr_10743_10785 = state_10731__$1;(statearr_10743_10785[(2)] = null);
(statearr_10743_10785[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (13)))
{var inst_10727 = (state_10731[(2)]);var state_10731__$1 = state_10731;var statearr_10744_10786 = state_10731__$1;(statearr_10744_10786[(2)] = inst_10727);
(statearr_10744_10786[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (22)))
{var inst_10725 = (state_10731[(2)]);var state_10731__$1 = state_10731;var statearr_10745_10787 = state_10731__$1;(statearr_10745_10787[(2)] = inst_10725);
(statearr_10745_10787[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (6)))
{var inst_10729 = (state_10731[(2)]);var state_10731__$1 = state_10731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10731__$1,inst_10729);
} else
{if((state_val_10732 === (25)))
{var state_10731__$1 = state_10731;var statearr_10746_10788 = state_10731__$1;(statearr_10746_10788[(2)] = null);
(statearr_10746_10788[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (17)))
{var inst_10705 = (state_10731[(14)]);var state_10731__$1 = state_10731;var statearr_10747_10789 = state_10731__$1;(statearr_10747_10789[(2)] = inst_10705);
(statearr_10747_10789[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (3)))
{var inst_10665 = (state_10731[(9)]);var state_10731__$1 = state_10731;var statearr_10748_10790 = state_10731__$1;(statearr_10748_10790[(2)] = inst_10665);
(statearr_10748_10790[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (12)))
{var inst_10686 = (state_10731[(15)]);var inst_10691 = (state_10731[(16)]);var inst_10705 = (state_10731[(14)]);var inst_10705__$1 = inst_10686.call(null,inst_10691);var state_10731__$1 = (function (){var statearr_10749 = state_10731;(statearr_10749[(14)] = inst_10705__$1);
return statearr_10749;
})();if(cljs.core.truth_(inst_10705__$1))
{var statearr_10750_10791 = state_10731__$1;(statearr_10750_10791[(1)] = (17));
} else
{var statearr_10751_10792 = state_10731__$1;(statearr_10751_10792[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (2)))
{var inst_10665 = (state_10731[(9)]);var inst_10668 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10665);var state_10731__$1 = state_10731;var statearr_10752_10793 = state_10731__$1;(statearr_10752_10793[(2)] = inst_10668);
(statearr_10752_10793[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (23)))
{var inst_10716 = (state_10731[(2)]);var state_10731__$1 = state_10731;if(cljs.core.truth_(inst_10716))
{var statearr_10753_10794 = state_10731__$1;(statearr_10753_10794[(1)] = (24));
} else
{var statearr_10754_10795 = state_10731__$1;(statearr_10754_10795[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (19)))
{var inst_10713 = (state_10731[(2)]);var state_10731__$1 = state_10731;if(cljs.core.truth_(inst_10713))
{var statearr_10755_10796 = state_10731__$1;(statearr_10755_10796[(1)] = (20));
} else
{var statearr_10756_10797 = state_10731__$1;(statearr_10756_10797[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (11)))
{var inst_10690 = (state_10731[(8)]);var inst_10696 = (inst_10690 == null);var state_10731__$1 = state_10731;if(cljs.core.truth_(inst_10696))
{var statearr_10757_10798 = state_10731__$1;(statearr_10757_10798[(1)] = (14));
} else
{var statearr_10758_10799 = state_10731__$1;(statearr_10758_10799[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (9)))
{var inst_10683 = (state_10731[(10)]);var inst_10683__$1 = (state_10731[(2)]);var inst_10684 = cljs.core.get.call(null,inst_10683__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_10685 = cljs.core.get.call(null,inst_10683__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_10686 = cljs.core.get.call(null,inst_10683__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_10731__$1 = (function (){var statearr_10759 = state_10731;(statearr_10759[(15)] = inst_10686);
(statearr_10759[(10)] = inst_10683__$1);
(statearr_10759[(17)] = inst_10685);
return statearr_10759;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_10731__$1,(10),inst_10684);
} else
{if((state_val_10732 === (5)))
{var inst_10675 = (state_10731[(7)]);var inst_10678 = cljs.core.seq_QMARK_.call(null,inst_10675);var state_10731__$1 = state_10731;if(inst_10678)
{var statearr_10760_10800 = state_10731__$1;(statearr_10760_10800[(1)] = (7));
} else
{var statearr_10761_10801 = state_10731__$1;(statearr_10761_10801[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (14)))
{var inst_10691 = (state_10731[(16)]);var inst_10698 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10691);var state_10731__$1 = state_10731;var statearr_10762_10802 = state_10731__$1;(statearr_10762_10802[(2)] = inst_10698);
(statearr_10762_10802[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (26)))
{var inst_10721 = (state_10731[(2)]);var state_10731__$1 = state_10731;var statearr_10763_10803 = state_10731__$1;(statearr_10763_10803[(2)] = inst_10721);
(statearr_10763_10803[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (16)))
{var inst_10701 = (state_10731[(2)]);var inst_10702 = calc_state.call(null);var inst_10675 = inst_10702;var state_10731__$1 = (function (){var statearr_10764 = state_10731;(statearr_10764[(18)] = inst_10701);
(statearr_10764[(7)] = inst_10675);
return statearr_10764;
})();var statearr_10765_10804 = state_10731__$1;(statearr_10765_10804[(2)] = null);
(statearr_10765_10804[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (10)))
{var inst_10691 = (state_10731[(16)]);var inst_10690 = (state_10731[(8)]);var inst_10689 = (state_10731[(2)]);var inst_10690__$1 = cljs.core.nth.call(null,inst_10689,(0),null);var inst_10691__$1 = cljs.core.nth.call(null,inst_10689,(1),null);var inst_10692 = (inst_10690__$1 == null);var inst_10693 = cljs.core._EQ_.call(null,inst_10691__$1,change);var inst_10694 = (inst_10692) || (inst_10693);var state_10731__$1 = (function (){var statearr_10766 = state_10731;(statearr_10766[(16)] = inst_10691__$1);
(statearr_10766[(8)] = inst_10690__$1);
return statearr_10766;
})();if(cljs.core.truth_(inst_10694))
{var statearr_10767_10805 = state_10731__$1;(statearr_10767_10805[(1)] = (11));
} else
{var statearr_10768_10806 = state_10731__$1;(statearr_10768_10806[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (18)))
{var inst_10686 = (state_10731[(15)]);var inst_10685 = (state_10731[(17)]);var inst_10691 = (state_10731[(16)]);var inst_10708 = cljs.core.empty_QMARK_.call(null,inst_10686);var inst_10709 = inst_10685.call(null,inst_10691);var inst_10710 = cljs.core.not.call(null,inst_10709);var inst_10711 = (inst_10708) && (inst_10710);var state_10731__$1 = state_10731;var statearr_10769_10807 = state_10731__$1;(statearr_10769_10807[(2)] = inst_10711);
(statearr_10769_10807[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10732 === (8)))
{var inst_10675 = (state_10731[(7)]);var state_10731__$1 = state_10731;var statearr_10770_10808 = state_10731__$1;(statearr_10770_10808[(2)] = inst_10675);
(statearr_10770_10808[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___10778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6329__auto__,c__6344__auto___10778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_10774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10774[(0)] = state_machine__6330__auto__);
(statearr_10774[(1)] = (1));
return statearr_10774;
});
var state_machine__6330__auto____1 = (function (state_10731){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_10731);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e10775){if((e10775 instanceof Object))
{var ex__6333__auto__ = e10775;var statearr_10776_10809 = state_10731;(statearr_10776_10809[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10810 = state_10731;
state_10731 = G__10810;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_10731){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_10731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___10778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6346__auto__ = (function (){var statearr_10777 = f__6345__auto__.call(null);(statearr_10777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___10778);
return statearr_10777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___10778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10812 = {};return obj10812;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3551__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3551__auto__,mults){
return (function (p1__10813_SHARP_){if(cljs.core.truth_(p1__10813_SHARP_.call(null,topic)))
{return p1__10813_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10813_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10936 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10936 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10937){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10937 = meta10937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10936.cljs$lang$type = true;
cljs.core.async.t10936.cljs$lang$ctorStr = "cljs.core.async/t10936";
cljs.core.async.t10936.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10936");
});})(mults,ensure_mult))
;
cljs.core.async.t10936.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10936.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10936.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10936.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10936.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10936.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10938){var self__ = this;
var _10938__$1 = this;return self__.meta10937;
});})(mults,ensure_mult))
;
cljs.core.async.t10936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10938,meta10937__$1){var self__ = this;
var _10938__$1 = this;return (new cljs.core.async.t10936(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10937__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10936 = ((function (mults,ensure_mult){
return (function __GT_t10936(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10937){return (new cljs.core.async.t10936(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10937));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10936(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6344__auto___11058 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___11058,mults,ensure_mult,p){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___11058,mults,ensure_mult,p){
return (function (state_11010){var state_val_11011 = (state_11010[(1)]);if((state_val_11011 === (7)))
{var inst_11006 = (state_11010[(2)]);var state_11010__$1 = state_11010;var statearr_11012_11059 = state_11010__$1;(statearr_11012_11059[(2)] = inst_11006);
(statearr_11012_11059[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (20)))
{var state_11010__$1 = state_11010;var statearr_11013_11060 = state_11010__$1;(statearr_11013_11060[(2)] = null);
(statearr_11013_11060[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (1)))
{var state_11010__$1 = state_11010;var statearr_11014_11061 = state_11010__$1;(statearr_11014_11061[(2)] = null);
(statearr_11014_11061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (24)))
{var inst_10989 = (state_11010[(7)]);var inst_10998 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10989);var state_11010__$1 = state_11010;var statearr_11015_11062 = state_11010__$1;(statearr_11015_11062[(2)] = inst_10998);
(statearr_11015_11062[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (4)))
{var inst_10941 = (state_11010[(8)]);var inst_10941__$1 = (state_11010[(2)]);var inst_10942 = (inst_10941__$1 == null);var state_11010__$1 = (function (){var statearr_11016 = state_11010;(statearr_11016[(8)] = inst_10941__$1);
return statearr_11016;
})();if(cljs.core.truth_(inst_10942))
{var statearr_11017_11063 = state_11010__$1;(statearr_11017_11063[(1)] = (5));
} else
{var statearr_11018_11064 = state_11010__$1;(statearr_11018_11064[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (15)))
{var inst_10983 = (state_11010[(2)]);var state_11010__$1 = state_11010;var statearr_11019_11065 = state_11010__$1;(statearr_11019_11065[(2)] = inst_10983);
(statearr_11019_11065[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (21)))
{var inst_11003 = (state_11010[(2)]);var state_11010__$1 = (function (){var statearr_11020 = state_11010;(statearr_11020[(9)] = inst_11003);
return statearr_11020;
})();var statearr_11021_11066 = state_11010__$1;(statearr_11021_11066[(2)] = null);
(statearr_11021_11066[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (13)))
{var inst_10965 = (state_11010[(10)]);var inst_10967 = cljs.core.chunked_seq_QMARK_.call(null,inst_10965);var state_11010__$1 = state_11010;if(inst_10967)
{var statearr_11022_11067 = state_11010__$1;(statearr_11022_11067[(1)] = (16));
} else
{var statearr_11023_11068 = state_11010__$1;(statearr_11023_11068[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (22)))
{var inst_10995 = (state_11010[(2)]);var state_11010__$1 = state_11010;if(cljs.core.truth_(inst_10995))
{var statearr_11024_11069 = state_11010__$1;(statearr_11024_11069[(1)] = (23));
} else
{var statearr_11025_11070 = state_11010__$1;(statearr_11025_11070[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (6)))
{var inst_10991 = (state_11010[(11)]);var inst_10941 = (state_11010[(8)]);var inst_10989 = (state_11010[(7)]);var inst_10989__$1 = topic_fn.call(null,inst_10941);var inst_10990 = cljs.core.deref.call(null,mults);var inst_10991__$1 = cljs.core.get.call(null,inst_10990,inst_10989__$1);var state_11010__$1 = (function (){var statearr_11026 = state_11010;(statearr_11026[(11)] = inst_10991__$1);
(statearr_11026[(7)] = inst_10989__$1);
return statearr_11026;
})();if(cljs.core.truth_(inst_10991__$1))
{var statearr_11027_11071 = state_11010__$1;(statearr_11027_11071[(1)] = (19));
} else
{var statearr_11028_11072 = state_11010__$1;(statearr_11028_11072[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (25)))
{var inst_11000 = (state_11010[(2)]);var state_11010__$1 = state_11010;var statearr_11029_11073 = state_11010__$1;(statearr_11029_11073[(2)] = inst_11000);
(statearr_11029_11073[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (17)))
{var inst_10965 = (state_11010[(10)]);var inst_10974 = cljs.core.first.call(null,inst_10965);var inst_10975 = cljs.core.async.muxch_STAR_.call(null,inst_10974);var inst_10976 = cljs.core.async.close_BANG_.call(null,inst_10975);var inst_10977 = cljs.core.next.call(null,inst_10965);var inst_10951 = inst_10977;var inst_10952 = null;var inst_10953 = (0);var inst_10954 = (0);var state_11010__$1 = (function (){var statearr_11030 = state_11010;(statearr_11030[(12)] = inst_10951);
(statearr_11030[(13)] = inst_10953);
(statearr_11030[(14)] = inst_10976);
(statearr_11030[(15)] = inst_10954);
(statearr_11030[(16)] = inst_10952);
return statearr_11030;
})();var statearr_11031_11074 = state_11010__$1;(statearr_11031_11074[(2)] = null);
(statearr_11031_11074[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (3)))
{var inst_11008 = (state_11010[(2)]);var state_11010__$1 = state_11010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11010__$1,inst_11008);
} else
{if((state_val_11011 === (12)))
{var inst_10985 = (state_11010[(2)]);var state_11010__$1 = state_11010;var statearr_11032_11075 = state_11010__$1;(statearr_11032_11075[(2)] = inst_10985);
(statearr_11032_11075[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (2)))
{var state_11010__$1 = state_11010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11010__$1,(4),ch);
} else
{if((state_val_11011 === (23)))
{var state_11010__$1 = state_11010;var statearr_11033_11076 = state_11010__$1;(statearr_11033_11076[(2)] = null);
(statearr_11033_11076[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (19)))
{var inst_10991 = (state_11010[(11)]);var inst_10941 = (state_11010[(8)]);var inst_10993 = cljs.core.async.muxch_STAR_.call(null,inst_10991);var state_11010__$1 = state_11010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11010__$1,(22),inst_10993,inst_10941);
} else
{if((state_val_11011 === (11)))
{var inst_10951 = (state_11010[(12)]);var inst_10965 = (state_11010[(10)]);var inst_10965__$1 = cljs.core.seq.call(null,inst_10951);var state_11010__$1 = (function (){var statearr_11034 = state_11010;(statearr_11034[(10)] = inst_10965__$1);
return statearr_11034;
})();if(inst_10965__$1)
{var statearr_11035_11077 = state_11010__$1;(statearr_11035_11077[(1)] = (13));
} else
{var statearr_11036_11078 = state_11010__$1;(statearr_11036_11078[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (9)))
{var inst_10987 = (state_11010[(2)]);var state_11010__$1 = state_11010;var statearr_11037_11079 = state_11010__$1;(statearr_11037_11079[(2)] = inst_10987);
(statearr_11037_11079[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (5)))
{var inst_10948 = cljs.core.deref.call(null,mults);var inst_10949 = cljs.core.vals.call(null,inst_10948);var inst_10950 = cljs.core.seq.call(null,inst_10949);var inst_10951 = inst_10950;var inst_10952 = null;var inst_10953 = (0);var inst_10954 = (0);var state_11010__$1 = (function (){var statearr_11038 = state_11010;(statearr_11038[(12)] = inst_10951);
(statearr_11038[(13)] = inst_10953);
(statearr_11038[(15)] = inst_10954);
(statearr_11038[(16)] = inst_10952);
return statearr_11038;
})();var statearr_11039_11080 = state_11010__$1;(statearr_11039_11080[(2)] = null);
(statearr_11039_11080[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (14)))
{var state_11010__$1 = state_11010;var statearr_11043_11081 = state_11010__$1;(statearr_11043_11081[(2)] = null);
(statearr_11043_11081[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (16)))
{var inst_10965 = (state_11010[(10)]);var inst_10969 = cljs.core.chunk_first.call(null,inst_10965);var inst_10970 = cljs.core.chunk_rest.call(null,inst_10965);var inst_10971 = cljs.core.count.call(null,inst_10969);var inst_10951 = inst_10970;var inst_10952 = inst_10969;var inst_10953 = inst_10971;var inst_10954 = (0);var state_11010__$1 = (function (){var statearr_11044 = state_11010;(statearr_11044[(12)] = inst_10951);
(statearr_11044[(13)] = inst_10953);
(statearr_11044[(15)] = inst_10954);
(statearr_11044[(16)] = inst_10952);
return statearr_11044;
})();var statearr_11045_11082 = state_11010__$1;(statearr_11045_11082[(2)] = null);
(statearr_11045_11082[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (10)))
{var inst_10951 = (state_11010[(12)]);var inst_10953 = (state_11010[(13)]);var inst_10954 = (state_11010[(15)]);var inst_10952 = (state_11010[(16)]);var inst_10959 = cljs.core._nth.call(null,inst_10952,inst_10954);var inst_10960 = cljs.core.async.muxch_STAR_.call(null,inst_10959);var inst_10961 = cljs.core.async.close_BANG_.call(null,inst_10960);var inst_10962 = (inst_10954 + (1));var tmp11040 = inst_10951;var tmp11041 = inst_10953;var tmp11042 = inst_10952;var inst_10951__$1 = tmp11040;var inst_10952__$1 = tmp11042;var inst_10953__$1 = tmp11041;var inst_10954__$1 = inst_10962;var state_11010__$1 = (function (){var statearr_11046 = state_11010;(statearr_11046[(17)] = inst_10961);
(statearr_11046[(12)] = inst_10951__$1);
(statearr_11046[(13)] = inst_10953__$1);
(statearr_11046[(15)] = inst_10954__$1);
(statearr_11046[(16)] = inst_10952__$1);
return statearr_11046;
})();var statearr_11047_11083 = state_11010__$1;(statearr_11047_11083[(2)] = null);
(statearr_11047_11083[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (18)))
{var inst_10980 = (state_11010[(2)]);var state_11010__$1 = state_11010;var statearr_11048_11084 = state_11010__$1;(statearr_11048_11084[(2)] = inst_10980);
(statearr_11048_11084[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11011 === (8)))
{var inst_10953 = (state_11010[(13)]);var inst_10954 = (state_11010[(15)]);var inst_10956 = (inst_10954 < inst_10953);var inst_10957 = inst_10956;var state_11010__$1 = state_11010;if(cljs.core.truth_(inst_10957))
{var statearr_11049_11085 = state_11010__$1;(statearr_11049_11085[(1)] = (10));
} else
{var statearr_11050_11086 = state_11010__$1;(statearr_11050_11086[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___11058,mults,ensure_mult,p))
;return ((function (switch__6329__auto__,c__6344__auto___11058,mults,ensure_mult,p){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_11054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11054[(0)] = state_machine__6330__auto__);
(statearr_11054[(1)] = (1));
return statearr_11054;
});
var state_machine__6330__auto____1 = (function (state_11010){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_11010);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e11055){if((e11055 instanceof Object))
{var ex__6333__auto__ = e11055;var statearr_11056_11087 = state_11010;(statearr_11056_11087[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11055;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11088 = state_11010;
state_11010 = G__11088;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_11010){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_11010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___11058,mults,ensure_mult,p))
})();var state__6346__auto__ = (function (){var statearr_11057 = f__6345__auto__.call(null);(statearr_11057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___11058);
return statearr_11057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___11058,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6344__auto___11225 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___11225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___11225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11195){var state_val_11196 = (state_11195[(1)]);if((state_val_11196 === (7)))
{var state_11195__$1 = state_11195;var statearr_11197_11226 = state_11195__$1;(statearr_11197_11226[(2)] = null);
(statearr_11197_11226[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (1)))
{var state_11195__$1 = state_11195;var statearr_11198_11227 = state_11195__$1;(statearr_11198_11227[(2)] = null);
(statearr_11198_11227[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (4)))
{var inst_11159 = (state_11195[(7)]);var inst_11161 = (inst_11159 < cnt);var state_11195__$1 = state_11195;if(cljs.core.truth_(inst_11161))
{var statearr_11199_11228 = state_11195__$1;(statearr_11199_11228[(1)] = (6));
} else
{var statearr_11200_11229 = state_11195__$1;(statearr_11200_11229[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (15)))
{var inst_11191 = (state_11195[(2)]);var state_11195__$1 = state_11195;var statearr_11201_11230 = state_11195__$1;(statearr_11201_11230[(2)] = inst_11191);
(statearr_11201_11230[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (13)))
{var inst_11184 = cljs.core.async.close_BANG_.call(null,out);var state_11195__$1 = state_11195;var statearr_11202_11231 = state_11195__$1;(statearr_11202_11231[(2)] = inst_11184);
(statearr_11202_11231[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (6)))
{var state_11195__$1 = state_11195;var statearr_11203_11232 = state_11195__$1;(statearr_11203_11232[(2)] = null);
(statearr_11203_11232[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (3)))
{var inst_11193 = (state_11195[(2)]);var state_11195__$1 = state_11195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11195__$1,inst_11193);
} else
{if((state_val_11196 === (12)))
{var inst_11181 = (state_11195[(8)]);var inst_11181__$1 = (state_11195[(2)]);var inst_11182 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11181__$1);var state_11195__$1 = (function (){var statearr_11204 = state_11195;(statearr_11204[(8)] = inst_11181__$1);
return statearr_11204;
})();if(cljs.core.truth_(inst_11182))
{var statearr_11205_11233 = state_11195__$1;(statearr_11205_11233[(1)] = (13));
} else
{var statearr_11206_11234 = state_11195__$1;(statearr_11206_11234[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (2)))
{var inst_11158 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11159 = (0);var state_11195__$1 = (function (){var statearr_11207 = state_11195;(statearr_11207[(7)] = inst_11159);
(statearr_11207[(9)] = inst_11158);
return statearr_11207;
})();var statearr_11208_11235 = state_11195__$1;(statearr_11208_11235[(2)] = null);
(statearr_11208_11235[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (11)))
{var inst_11159 = (state_11195[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11195,(10),Object,null,(9));var inst_11168 = chs__$1.call(null,inst_11159);var inst_11169 = done.call(null,inst_11159);var inst_11170 = cljs.core.async.take_BANG_.call(null,inst_11168,inst_11169);var state_11195__$1 = state_11195;var statearr_11209_11236 = state_11195__$1;(statearr_11209_11236[(2)] = inst_11170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11195__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (9)))
{var inst_11159 = (state_11195[(7)]);var inst_11172 = (state_11195[(2)]);var inst_11173 = (inst_11159 + (1));var inst_11159__$1 = inst_11173;var state_11195__$1 = (function (){var statearr_11210 = state_11195;(statearr_11210[(7)] = inst_11159__$1);
(statearr_11210[(10)] = inst_11172);
return statearr_11210;
})();var statearr_11211_11237 = state_11195__$1;(statearr_11211_11237[(2)] = null);
(statearr_11211_11237[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (5)))
{var inst_11179 = (state_11195[(2)]);var state_11195__$1 = (function (){var statearr_11212 = state_11195;(statearr_11212[(11)] = inst_11179);
return statearr_11212;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11195__$1,(12),dchan);
} else
{if((state_val_11196 === (14)))
{var inst_11181 = (state_11195[(8)]);var inst_11186 = cljs.core.apply.call(null,f,inst_11181);var state_11195__$1 = state_11195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11195__$1,(16),out,inst_11186);
} else
{if((state_val_11196 === (16)))
{var inst_11188 = (state_11195[(2)]);var state_11195__$1 = (function (){var statearr_11213 = state_11195;(statearr_11213[(12)] = inst_11188);
return statearr_11213;
})();var statearr_11214_11238 = state_11195__$1;(statearr_11214_11238[(2)] = null);
(statearr_11214_11238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (10)))
{var inst_11163 = (state_11195[(2)]);var inst_11164 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11195__$1 = (function (){var statearr_11215 = state_11195;(statearr_11215[(13)] = inst_11163);
return statearr_11215;
})();var statearr_11216_11239 = state_11195__$1;(statearr_11216_11239[(2)] = inst_11164);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11195__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11196 === (8)))
{var inst_11177 = (state_11195[(2)]);var state_11195__$1 = state_11195;var statearr_11217_11240 = state_11195__$1;(statearr_11217_11240[(2)] = inst_11177);
(statearr_11217_11240[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___11225,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6329__auto__,c__6344__auto___11225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_11221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11221[(0)] = state_machine__6330__auto__);
(statearr_11221[(1)] = (1));
return statearr_11221;
});
var state_machine__6330__auto____1 = (function (state_11195){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_11195);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e11222){if((e11222 instanceof Object))
{var ex__6333__auto__ = e11222;var statearr_11223_11241 = state_11195;(statearr_11223_11241[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11242 = state_11195;
state_11195 = G__11242;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_11195){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_11195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___11225,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6346__auto__ = (function (){var statearr_11224 = f__6345__auto__.call(null);(statearr_11224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___11225);
return statearr_11224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___11225,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___11350 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___11350,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___11350,out){
return (function (state_11326){var state_val_11327 = (state_11326[(1)]);if((state_val_11327 === (7)))
{var inst_11305 = (state_11326[(7)]);var inst_11306 = (state_11326[(8)]);var inst_11305__$1 = (state_11326[(2)]);var inst_11306__$1 = cljs.core.nth.call(null,inst_11305__$1,(0),null);var inst_11307 = cljs.core.nth.call(null,inst_11305__$1,(1),null);var inst_11308 = (inst_11306__$1 == null);var state_11326__$1 = (function (){var statearr_11328 = state_11326;(statearr_11328[(9)] = inst_11307);
(statearr_11328[(7)] = inst_11305__$1);
(statearr_11328[(8)] = inst_11306__$1);
return statearr_11328;
})();if(cljs.core.truth_(inst_11308))
{var statearr_11329_11351 = state_11326__$1;(statearr_11329_11351[(1)] = (8));
} else
{var statearr_11330_11352 = state_11326__$1;(statearr_11330_11352[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11327 === (1)))
{var inst_11297 = cljs.core.vec.call(null,chs);var inst_11298 = inst_11297;var state_11326__$1 = (function (){var statearr_11331 = state_11326;(statearr_11331[(10)] = inst_11298);
return statearr_11331;
})();var statearr_11332_11353 = state_11326__$1;(statearr_11332_11353[(2)] = null);
(statearr_11332_11353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11327 === (4)))
{var inst_11298 = (state_11326[(10)]);var state_11326__$1 = state_11326;return cljs.core.async.ioc_alts_BANG_.call(null,state_11326__$1,(7),inst_11298);
} else
{if((state_val_11327 === (6)))
{var inst_11322 = (state_11326[(2)]);var state_11326__$1 = state_11326;var statearr_11333_11354 = state_11326__$1;(statearr_11333_11354[(2)] = inst_11322);
(statearr_11333_11354[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11327 === (3)))
{var inst_11324 = (state_11326[(2)]);var state_11326__$1 = state_11326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11326__$1,inst_11324);
} else
{if((state_val_11327 === (2)))
{var inst_11298 = (state_11326[(10)]);var inst_11300 = cljs.core.count.call(null,inst_11298);var inst_11301 = (inst_11300 > (0));var state_11326__$1 = state_11326;if(cljs.core.truth_(inst_11301))
{var statearr_11335_11355 = state_11326__$1;(statearr_11335_11355[(1)] = (4));
} else
{var statearr_11336_11356 = state_11326__$1;(statearr_11336_11356[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11327 === (11)))
{var inst_11298 = (state_11326[(10)]);var inst_11315 = (state_11326[(2)]);var tmp11334 = inst_11298;var inst_11298__$1 = tmp11334;var state_11326__$1 = (function (){var statearr_11337 = state_11326;(statearr_11337[(10)] = inst_11298__$1);
(statearr_11337[(11)] = inst_11315);
return statearr_11337;
})();var statearr_11338_11357 = state_11326__$1;(statearr_11338_11357[(2)] = null);
(statearr_11338_11357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11327 === (9)))
{var inst_11306 = (state_11326[(8)]);var state_11326__$1 = state_11326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11326__$1,(11),out,inst_11306);
} else
{if((state_val_11327 === (5)))
{var inst_11320 = cljs.core.async.close_BANG_.call(null,out);var state_11326__$1 = state_11326;var statearr_11339_11358 = state_11326__$1;(statearr_11339_11358[(2)] = inst_11320);
(statearr_11339_11358[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11327 === (10)))
{var inst_11318 = (state_11326[(2)]);var state_11326__$1 = state_11326;var statearr_11340_11359 = state_11326__$1;(statearr_11340_11359[(2)] = inst_11318);
(statearr_11340_11359[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11327 === (8)))
{var inst_11298 = (state_11326[(10)]);var inst_11307 = (state_11326[(9)]);var inst_11305 = (state_11326[(7)]);var inst_11306 = (state_11326[(8)]);var inst_11310 = (function (){var c = inst_11307;var v = inst_11306;var vec__11303 = inst_11305;var cs = inst_11298;return ((function (c,v,vec__11303,cs,inst_11298,inst_11307,inst_11305,inst_11306,state_val_11327,c__6344__auto___11350,out){
return (function (p1__11243_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11243_SHARP_);
});
;})(c,v,vec__11303,cs,inst_11298,inst_11307,inst_11305,inst_11306,state_val_11327,c__6344__auto___11350,out))
})();var inst_11311 = cljs.core.filterv.call(null,inst_11310,inst_11298);var inst_11298__$1 = inst_11311;var state_11326__$1 = (function (){var statearr_11341 = state_11326;(statearr_11341[(10)] = inst_11298__$1);
return statearr_11341;
})();var statearr_11342_11360 = state_11326__$1;(statearr_11342_11360[(2)] = null);
(statearr_11342_11360[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___11350,out))
;return ((function (switch__6329__auto__,c__6344__auto___11350,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_11346 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11346[(0)] = state_machine__6330__auto__);
(statearr_11346[(1)] = (1));
return statearr_11346;
});
var state_machine__6330__auto____1 = (function (state_11326){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_11326);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e11347){if((e11347 instanceof Object))
{var ex__6333__auto__ = e11347;var statearr_11348_11361 = state_11326;(statearr_11348_11361[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11362 = state_11326;
state_11326 = G__11362;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_11326){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_11326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___11350,out))
})();var state__6346__auto__ = (function (){var statearr_11349 = f__6345__auto__.call(null);(statearr_11349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___11350);
return statearr_11349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___11350,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___11455 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___11455,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___11455,out){
return (function (state_11432){var state_val_11433 = (state_11432[(1)]);if((state_val_11433 === (7)))
{var inst_11414 = (state_11432[(7)]);var inst_11414__$1 = (state_11432[(2)]);var inst_11415 = (inst_11414__$1 == null);var inst_11416 = cljs.core.not.call(null,inst_11415);var state_11432__$1 = (function (){var statearr_11434 = state_11432;(statearr_11434[(7)] = inst_11414__$1);
return statearr_11434;
})();if(inst_11416)
{var statearr_11435_11456 = state_11432__$1;(statearr_11435_11456[(1)] = (8));
} else
{var statearr_11436_11457 = state_11432__$1;(statearr_11436_11457[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (1)))
{var inst_11409 = (0);var state_11432__$1 = (function (){var statearr_11437 = state_11432;(statearr_11437[(8)] = inst_11409);
return statearr_11437;
})();var statearr_11438_11458 = state_11432__$1;(statearr_11438_11458[(2)] = null);
(statearr_11438_11458[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (4)))
{var state_11432__$1 = state_11432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11432__$1,(7),ch);
} else
{if((state_val_11433 === (6)))
{var inst_11427 = (state_11432[(2)]);var state_11432__$1 = state_11432;var statearr_11439_11459 = state_11432__$1;(statearr_11439_11459[(2)] = inst_11427);
(statearr_11439_11459[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (3)))
{var inst_11429 = (state_11432[(2)]);var inst_11430 = cljs.core.async.close_BANG_.call(null,out);var state_11432__$1 = (function (){var statearr_11440 = state_11432;(statearr_11440[(9)] = inst_11429);
return statearr_11440;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11432__$1,inst_11430);
} else
{if((state_val_11433 === (2)))
{var inst_11409 = (state_11432[(8)]);var inst_11411 = (inst_11409 < n);var state_11432__$1 = state_11432;if(cljs.core.truth_(inst_11411))
{var statearr_11441_11460 = state_11432__$1;(statearr_11441_11460[(1)] = (4));
} else
{var statearr_11442_11461 = state_11432__$1;(statearr_11442_11461[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (11)))
{var inst_11409 = (state_11432[(8)]);var inst_11419 = (state_11432[(2)]);var inst_11420 = (inst_11409 + (1));var inst_11409__$1 = inst_11420;var state_11432__$1 = (function (){var statearr_11443 = state_11432;(statearr_11443[(10)] = inst_11419);
(statearr_11443[(8)] = inst_11409__$1);
return statearr_11443;
})();var statearr_11444_11462 = state_11432__$1;(statearr_11444_11462[(2)] = null);
(statearr_11444_11462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (9)))
{var state_11432__$1 = state_11432;var statearr_11445_11463 = state_11432__$1;(statearr_11445_11463[(2)] = null);
(statearr_11445_11463[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (5)))
{var state_11432__$1 = state_11432;var statearr_11446_11464 = state_11432__$1;(statearr_11446_11464[(2)] = null);
(statearr_11446_11464[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (10)))
{var inst_11424 = (state_11432[(2)]);var state_11432__$1 = state_11432;var statearr_11447_11465 = state_11432__$1;(statearr_11447_11465[(2)] = inst_11424);
(statearr_11447_11465[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (8)))
{var inst_11414 = (state_11432[(7)]);var state_11432__$1 = state_11432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11432__$1,(11),out,inst_11414);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___11455,out))
;return ((function (switch__6329__auto__,c__6344__auto___11455,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_11451 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11451[(0)] = state_machine__6330__auto__);
(statearr_11451[(1)] = (1));
return statearr_11451;
});
var state_machine__6330__auto____1 = (function (state_11432){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_11432);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e11452){if((e11452 instanceof Object))
{var ex__6333__auto__ = e11452;var statearr_11453_11466 = state_11432;(statearr_11453_11466[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11467 = state_11432;
state_11432 = G__11467;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_11432){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_11432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___11455,out))
})();var state__6346__auto__ = (function (){var statearr_11454 = f__6345__auto__.call(null);(statearr_11454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___11455);
return statearr_11454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___11455,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11475 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11475 = (function (ch,f,map_LT_,meta11476){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11476 = meta11476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11475.cljs$lang$type = true;
cljs.core.async.t11475.cljs$lang$ctorStr = "cljs.core.async/t11475";
cljs.core.async.t11475.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11475");
});
cljs.core.async.t11475.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11475.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11478 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11478 = (function (fn1,_,meta11476,ch,f,map_LT_,meta11479){
this.fn1 = fn1;
this._ = _;
this.meta11476 = meta11476;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11479 = meta11479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11478.cljs$lang$type = true;
cljs.core.async.t11478.cljs$lang$ctorStr = "cljs.core.async/t11478";
cljs.core.async.t11478.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11478");
});})(___$1))
;
cljs.core.async.t11478.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11468_SHARP_){return f1.call(null,(((p1__11468_SHARP_ == null))?null:self__.f.call(null,p1__11468_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11480){var self__ = this;
var _11480__$1 = this;return self__.meta11479;
});})(___$1))
;
cljs.core.async.t11478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11480,meta11479__$1){var self__ = this;
var _11480__$1 = this;return (new cljs.core.async.t11478(self__.fn1,self__._,self__.meta11476,self__.ch,self__.f,self__.map_LT_,meta11479__$1));
});})(___$1))
;
cljs.core.async.__GT_t11478 = ((function (___$1){
return (function __GT_t11478(fn1__$1,___$2,meta11476__$1,ch__$2,f__$2,map_LT___$2,meta11479){return (new cljs.core.async.t11478(fn1__$1,___$2,meta11476__$1,ch__$2,f__$2,map_LT___$2,meta11479));
});})(___$1))
;
}
return (new cljs.core.async.t11478(fn1,___$1,self__.meta11476,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3539__auto__ = ret;if(cljs.core.truth_(and__3539__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3539__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11475.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11475.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11477){var self__ = this;
var _11477__$1 = this;return self__.meta11476;
});
cljs.core.async.t11475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11477,meta11476__$1){var self__ = this;
var _11477__$1 = this;return (new cljs.core.async.t11475(self__.ch,self__.f,self__.map_LT_,meta11476__$1));
});
cljs.core.async.__GT_t11475 = (function __GT_t11475(ch__$1,f__$1,map_LT___$1,meta11476){return (new cljs.core.async.t11475(ch__$1,f__$1,map_LT___$1,meta11476));
});
}
return (new cljs.core.async.t11475(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11484 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11484 = (function (ch,f,map_GT_,meta11485){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11485 = meta11485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11484.cljs$lang$type = true;
cljs.core.async.t11484.cljs$lang$ctorStr = "cljs.core.async/t11484";
cljs.core.async.t11484.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11484");
});
cljs.core.async.t11484.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11484.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11484.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11486){var self__ = this;
var _11486__$1 = this;return self__.meta11485;
});
cljs.core.async.t11484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11486,meta11485__$1){var self__ = this;
var _11486__$1 = this;return (new cljs.core.async.t11484(self__.ch,self__.f,self__.map_GT_,meta11485__$1));
});
cljs.core.async.__GT_t11484 = (function __GT_t11484(ch__$1,f__$1,map_GT___$1,meta11485){return (new cljs.core.async.t11484(ch__$1,f__$1,map_GT___$1,meta11485));
});
}
return (new cljs.core.async.t11484(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11490 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11490 = (function (ch,p,filter_GT_,meta11491){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11491 = meta11491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11490.cljs$lang$type = true;
cljs.core.async.t11490.cljs$lang$ctorStr = "cljs.core.async/t11490";
cljs.core.async.t11490.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11490");
});
cljs.core.async.t11490.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11490.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11490.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11490.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11490.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11490.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11490.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11492){var self__ = this;
var _11492__$1 = this;return self__.meta11491;
});
cljs.core.async.t11490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11492,meta11491__$1){var self__ = this;
var _11492__$1 = this;return (new cljs.core.async.t11490(self__.ch,self__.p,self__.filter_GT_,meta11491__$1));
});
cljs.core.async.__GT_t11490 = (function __GT_t11490(ch__$1,p__$1,filter_GT___$1,meta11491){return (new cljs.core.async.t11490(ch__$1,p__$1,filter_GT___$1,meta11491));
});
}
return (new cljs.core.async.t11490(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___11575 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___11575,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___11575,out){
return (function (state_11554){var state_val_11555 = (state_11554[(1)]);if((state_val_11555 === (7)))
{var inst_11550 = (state_11554[(2)]);var state_11554__$1 = state_11554;var statearr_11556_11576 = state_11554__$1;(statearr_11556_11576[(2)] = inst_11550);
(statearr_11556_11576[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (1)))
{var state_11554__$1 = state_11554;var statearr_11557_11577 = state_11554__$1;(statearr_11557_11577[(2)] = null);
(statearr_11557_11577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (4)))
{var inst_11536 = (state_11554[(7)]);var inst_11536__$1 = (state_11554[(2)]);var inst_11537 = (inst_11536__$1 == null);var state_11554__$1 = (function (){var statearr_11558 = state_11554;(statearr_11558[(7)] = inst_11536__$1);
return statearr_11558;
})();if(cljs.core.truth_(inst_11537))
{var statearr_11559_11578 = state_11554__$1;(statearr_11559_11578[(1)] = (5));
} else
{var statearr_11560_11579 = state_11554__$1;(statearr_11560_11579[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (6)))
{var inst_11536 = (state_11554[(7)]);var inst_11541 = p.call(null,inst_11536);var state_11554__$1 = state_11554;if(cljs.core.truth_(inst_11541))
{var statearr_11561_11580 = state_11554__$1;(statearr_11561_11580[(1)] = (8));
} else
{var statearr_11562_11581 = state_11554__$1;(statearr_11562_11581[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (3)))
{var inst_11552 = (state_11554[(2)]);var state_11554__$1 = state_11554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11554__$1,inst_11552);
} else
{if((state_val_11555 === (2)))
{var state_11554__$1 = state_11554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11554__$1,(4),ch);
} else
{if((state_val_11555 === (11)))
{var inst_11544 = (state_11554[(2)]);var state_11554__$1 = state_11554;var statearr_11563_11582 = state_11554__$1;(statearr_11563_11582[(2)] = inst_11544);
(statearr_11563_11582[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (9)))
{var state_11554__$1 = state_11554;var statearr_11564_11583 = state_11554__$1;(statearr_11564_11583[(2)] = null);
(statearr_11564_11583[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (5)))
{var inst_11539 = cljs.core.async.close_BANG_.call(null,out);var state_11554__$1 = state_11554;var statearr_11565_11584 = state_11554__$1;(statearr_11565_11584[(2)] = inst_11539);
(statearr_11565_11584[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (10)))
{var inst_11547 = (state_11554[(2)]);var state_11554__$1 = (function (){var statearr_11566 = state_11554;(statearr_11566[(8)] = inst_11547);
return statearr_11566;
})();var statearr_11567_11585 = state_11554__$1;(statearr_11567_11585[(2)] = null);
(statearr_11567_11585[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (8)))
{var inst_11536 = (state_11554[(7)]);var state_11554__$1 = state_11554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11554__$1,(11),out,inst_11536);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___11575,out))
;return ((function (switch__6329__auto__,c__6344__auto___11575,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_11571 = [null,null,null,null,null,null,null,null,null];(statearr_11571[(0)] = state_machine__6330__auto__);
(statearr_11571[(1)] = (1));
return statearr_11571;
});
var state_machine__6330__auto____1 = (function (state_11554){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_11554);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e11572){if((e11572 instanceof Object))
{var ex__6333__auto__ = e11572;var statearr_11573_11586 = state_11554;(statearr_11573_11586[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11554);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11587 = state_11554;
state_11554 = G__11587;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_11554){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_11554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___11575,out))
})();var state__6346__auto__ = (function (){var statearr_11574 = f__6345__auto__.call(null);(statearr_11574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___11575);
return statearr_11574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___11575,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6344__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__){
return (function (state_11753){var state_val_11754 = (state_11753[(1)]);if((state_val_11754 === (7)))
{var inst_11749 = (state_11753[(2)]);var state_11753__$1 = state_11753;var statearr_11755_11796 = state_11753__$1;(statearr_11755_11796[(2)] = inst_11749);
(statearr_11755_11796[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (20)))
{var inst_11719 = (state_11753[(7)]);var inst_11730 = (state_11753[(2)]);var inst_11731 = cljs.core.next.call(null,inst_11719);var inst_11705 = inst_11731;var inst_11706 = null;var inst_11707 = (0);var inst_11708 = (0);var state_11753__$1 = (function (){var statearr_11756 = state_11753;(statearr_11756[(8)] = inst_11706);
(statearr_11756[(9)] = inst_11730);
(statearr_11756[(10)] = inst_11705);
(statearr_11756[(11)] = inst_11708);
(statearr_11756[(12)] = inst_11707);
return statearr_11756;
})();var statearr_11757_11797 = state_11753__$1;(statearr_11757_11797[(2)] = null);
(statearr_11757_11797[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (1)))
{var state_11753__$1 = state_11753;var statearr_11758_11798 = state_11753__$1;(statearr_11758_11798[(2)] = null);
(statearr_11758_11798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (4)))
{var inst_11694 = (state_11753[(13)]);var inst_11694__$1 = (state_11753[(2)]);var inst_11695 = (inst_11694__$1 == null);var state_11753__$1 = (function (){var statearr_11759 = state_11753;(statearr_11759[(13)] = inst_11694__$1);
return statearr_11759;
})();if(cljs.core.truth_(inst_11695))
{var statearr_11760_11799 = state_11753__$1;(statearr_11760_11799[(1)] = (5));
} else
{var statearr_11761_11800 = state_11753__$1;(statearr_11761_11800[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (15)))
{var state_11753__$1 = state_11753;var statearr_11765_11801 = state_11753__$1;(statearr_11765_11801[(2)] = null);
(statearr_11765_11801[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (21)))
{var state_11753__$1 = state_11753;var statearr_11766_11802 = state_11753__$1;(statearr_11766_11802[(2)] = null);
(statearr_11766_11802[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (13)))
{var inst_11706 = (state_11753[(8)]);var inst_11705 = (state_11753[(10)]);var inst_11708 = (state_11753[(11)]);var inst_11707 = (state_11753[(12)]);var inst_11715 = (state_11753[(2)]);var inst_11716 = (inst_11708 + (1));var tmp11762 = inst_11706;var tmp11763 = inst_11705;var tmp11764 = inst_11707;var inst_11705__$1 = tmp11763;var inst_11706__$1 = tmp11762;var inst_11707__$1 = tmp11764;var inst_11708__$1 = inst_11716;var state_11753__$1 = (function (){var statearr_11767 = state_11753;(statearr_11767[(8)] = inst_11706__$1);
(statearr_11767[(10)] = inst_11705__$1);
(statearr_11767[(11)] = inst_11708__$1);
(statearr_11767[(12)] = inst_11707__$1);
(statearr_11767[(14)] = inst_11715);
return statearr_11767;
})();var statearr_11768_11803 = state_11753__$1;(statearr_11768_11803[(2)] = null);
(statearr_11768_11803[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (22)))
{var state_11753__$1 = state_11753;var statearr_11769_11804 = state_11753__$1;(statearr_11769_11804[(2)] = null);
(statearr_11769_11804[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (6)))
{var inst_11694 = (state_11753[(13)]);var inst_11703 = f.call(null,inst_11694);var inst_11704 = cljs.core.seq.call(null,inst_11703);var inst_11705 = inst_11704;var inst_11706 = null;var inst_11707 = (0);var inst_11708 = (0);var state_11753__$1 = (function (){var statearr_11770 = state_11753;(statearr_11770[(8)] = inst_11706);
(statearr_11770[(10)] = inst_11705);
(statearr_11770[(11)] = inst_11708);
(statearr_11770[(12)] = inst_11707);
return statearr_11770;
})();var statearr_11771_11805 = state_11753__$1;(statearr_11771_11805[(2)] = null);
(statearr_11771_11805[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (17)))
{var inst_11719 = (state_11753[(7)]);var inst_11723 = cljs.core.chunk_first.call(null,inst_11719);var inst_11724 = cljs.core.chunk_rest.call(null,inst_11719);var inst_11725 = cljs.core.count.call(null,inst_11723);var inst_11705 = inst_11724;var inst_11706 = inst_11723;var inst_11707 = inst_11725;var inst_11708 = (0);var state_11753__$1 = (function (){var statearr_11772 = state_11753;(statearr_11772[(8)] = inst_11706);
(statearr_11772[(10)] = inst_11705);
(statearr_11772[(11)] = inst_11708);
(statearr_11772[(12)] = inst_11707);
return statearr_11772;
})();var statearr_11773_11806 = state_11753__$1;(statearr_11773_11806[(2)] = null);
(statearr_11773_11806[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (3)))
{var inst_11751 = (state_11753[(2)]);var state_11753__$1 = state_11753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11753__$1,inst_11751);
} else
{if((state_val_11754 === (12)))
{var inst_11739 = (state_11753[(2)]);var state_11753__$1 = state_11753;var statearr_11774_11807 = state_11753__$1;(statearr_11774_11807[(2)] = inst_11739);
(statearr_11774_11807[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (2)))
{var state_11753__$1 = state_11753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11753__$1,(4),in$);
} else
{if((state_val_11754 === (23)))
{var inst_11747 = (state_11753[(2)]);var state_11753__$1 = state_11753;var statearr_11775_11808 = state_11753__$1;(statearr_11775_11808[(2)] = inst_11747);
(statearr_11775_11808[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (19)))
{var inst_11734 = (state_11753[(2)]);var state_11753__$1 = state_11753;var statearr_11776_11809 = state_11753__$1;(statearr_11776_11809[(2)] = inst_11734);
(statearr_11776_11809[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (11)))
{var inst_11705 = (state_11753[(10)]);var inst_11719 = (state_11753[(7)]);var inst_11719__$1 = cljs.core.seq.call(null,inst_11705);var state_11753__$1 = (function (){var statearr_11777 = state_11753;(statearr_11777[(7)] = inst_11719__$1);
return statearr_11777;
})();if(inst_11719__$1)
{var statearr_11778_11810 = state_11753__$1;(statearr_11778_11810[(1)] = (14));
} else
{var statearr_11779_11811 = state_11753__$1;(statearr_11779_11811[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (9)))
{var inst_11741 = (state_11753[(2)]);var inst_11742 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11753__$1 = (function (){var statearr_11780 = state_11753;(statearr_11780[(15)] = inst_11741);
return statearr_11780;
})();if(cljs.core.truth_(inst_11742))
{var statearr_11781_11812 = state_11753__$1;(statearr_11781_11812[(1)] = (21));
} else
{var statearr_11782_11813 = state_11753__$1;(statearr_11782_11813[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (5)))
{var inst_11697 = cljs.core.async.close_BANG_.call(null,out);var state_11753__$1 = state_11753;var statearr_11783_11814 = state_11753__$1;(statearr_11783_11814[(2)] = inst_11697);
(statearr_11783_11814[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (14)))
{var inst_11719 = (state_11753[(7)]);var inst_11721 = cljs.core.chunked_seq_QMARK_.call(null,inst_11719);var state_11753__$1 = state_11753;if(inst_11721)
{var statearr_11784_11815 = state_11753__$1;(statearr_11784_11815[(1)] = (17));
} else
{var statearr_11785_11816 = state_11753__$1;(statearr_11785_11816[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (16)))
{var inst_11737 = (state_11753[(2)]);var state_11753__$1 = state_11753;var statearr_11786_11817 = state_11753__$1;(statearr_11786_11817[(2)] = inst_11737);
(statearr_11786_11817[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11754 === (10)))
{var inst_11706 = (state_11753[(8)]);var inst_11708 = (state_11753[(11)]);var inst_11713 = cljs.core._nth.call(null,inst_11706,inst_11708);var state_11753__$1 = state_11753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11753__$1,(13),out,inst_11713);
} else
{if((state_val_11754 === (18)))
{var inst_11719 = (state_11753[(7)]);var inst_11728 = cljs.core.first.call(null,inst_11719);var state_11753__$1 = state_11753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11753__$1,(20),out,inst_11728);
} else
{if((state_val_11754 === (8)))
{var inst_11708 = (state_11753[(11)]);var inst_11707 = (state_11753[(12)]);var inst_11710 = (inst_11708 < inst_11707);var inst_11711 = inst_11710;var state_11753__$1 = state_11753;if(cljs.core.truth_(inst_11711))
{var statearr_11787_11818 = state_11753__$1;(statearr_11787_11818[(1)] = (10));
} else
{var statearr_11788_11819 = state_11753__$1;(statearr_11788_11819[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_11792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11792[(0)] = state_machine__6330__auto__);
(statearr_11792[(1)] = (1));
return statearr_11792;
});
var state_machine__6330__auto____1 = (function (state_11753){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_11753);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e11793){if((e11793 instanceof Object))
{var ex__6333__auto__ = e11793;var statearr_11794_11820 = state_11753;(statearr_11794_11820[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11753);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11821 = state_11753;
state_11753 = G__11821;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_11753){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_11753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_11795 = f__6345__auto__.call(null);(statearr_11795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_11795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__))
);
return c__6344__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___11918 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___11918,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___11918,out){
return (function (state_11893){var state_val_11894 = (state_11893[(1)]);if((state_val_11894 === (7)))
{var inst_11888 = (state_11893[(2)]);var state_11893__$1 = state_11893;var statearr_11895_11919 = state_11893__$1;(statearr_11895_11919[(2)] = inst_11888);
(statearr_11895_11919[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11894 === (1)))
{var inst_11870 = null;var state_11893__$1 = (function (){var statearr_11896 = state_11893;(statearr_11896[(7)] = inst_11870);
return statearr_11896;
})();var statearr_11897_11920 = state_11893__$1;(statearr_11897_11920[(2)] = null);
(statearr_11897_11920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11894 === (4)))
{var inst_11873 = (state_11893[(8)]);var inst_11873__$1 = (state_11893[(2)]);var inst_11874 = (inst_11873__$1 == null);var inst_11875 = cljs.core.not.call(null,inst_11874);var state_11893__$1 = (function (){var statearr_11898 = state_11893;(statearr_11898[(8)] = inst_11873__$1);
return statearr_11898;
})();if(inst_11875)
{var statearr_11899_11921 = state_11893__$1;(statearr_11899_11921[(1)] = (5));
} else
{var statearr_11900_11922 = state_11893__$1;(statearr_11900_11922[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11894 === (6)))
{var state_11893__$1 = state_11893;var statearr_11901_11923 = state_11893__$1;(statearr_11901_11923[(2)] = null);
(statearr_11901_11923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11894 === (3)))
{var inst_11890 = (state_11893[(2)]);var inst_11891 = cljs.core.async.close_BANG_.call(null,out);var state_11893__$1 = (function (){var statearr_11902 = state_11893;(statearr_11902[(9)] = inst_11890);
return statearr_11902;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11893__$1,inst_11891);
} else
{if((state_val_11894 === (2)))
{var state_11893__$1 = state_11893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11893__$1,(4),ch);
} else
{if((state_val_11894 === (11)))
{var inst_11873 = (state_11893[(8)]);var inst_11882 = (state_11893[(2)]);var inst_11870 = inst_11873;var state_11893__$1 = (function (){var statearr_11903 = state_11893;(statearr_11903[(7)] = inst_11870);
(statearr_11903[(10)] = inst_11882);
return statearr_11903;
})();var statearr_11904_11924 = state_11893__$1;(statearr_11904_11924[(2)] = null);
(statearr_11904_11924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11894 === (9)))
{var inst_11873 = (state_11893[(8)]);var state_11893__$1 = state_11893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11893__$1,(11),out,inst_11873);
} else
{if((state_val_11894 === (5)))
{var inst_11870 = (state_11893[(7)]);var inst_11873 = (state_11893[(8)]);var inst_11877 = cljs.core._EQ_.call(null,inst_11873,inst_11870);var state_11893__$1 = state_11893;if(inst_11877)
{var statearr_11906_11925 = state_11893__$1;(statearr_11906_11925[(1)] = (8));
} else
{var statearr_11907_11926 = state_11893__$1;(statearr_11907_11926[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11894 === (10)))
{var inst_11885 = (state_11893[(2)]);var state_11893__$1 = state_11893;var statearr_11908_11927 = state_11893__$1;(statearr_11908_11927[(2)] = inst_11885);
(statearr_11908_11927[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11894 === (8)))
{var inst_11870 = (state_11893[(7)]);var tmp11905 = inst_11870;var inst_11870__$1 = tmp11905;var state_11893__$1 = (function (){var statearr_11909 = state_11893;(statearr_11909[(7)] = inst_11870__$1);
return statearr_11909;
})();var statearr_11910_11928 = state_11893__$1;(statearr_11910_11928[(2)] = null);
(statearr_11910_11928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___11918,out))
;return ((function (switch__6329__auto__,c__6344__auto___11918,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_11914 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11914[(0)] = state_machine__6330__auto__);
(statearr_11914[(1)] = (1));
return statearr_11914;
});
var state_machine__6330__auto____1 = (function (state_11893){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_11893);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e11915){if((e11915 instanceof Object))
{var ex__6333__auto__ = e11915;var statearr_11916_11929 = state_11893;(statearr_11916_11929[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11930 = state_11893;
state_11893 = G__11930;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_11893){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_11893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___11918,out))
})();var state__6346__auto__ = (function (){var statearr_11917 = f__6345__auto__.call(null);(statearr_11917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___11918);
return statearr_11917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___11918,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___12065 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___12065,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___12065,out){
return (function (state_12035){var state_val_12036 = (state_12035[(1)]);if((state_val_12036 === (7)))
{var inst_12031 = (state_12035[(2)]);var state_12035__$1 = state_12035;var statearr_12037_12066 = state_12035__$1;(statearr_12037_12066[(2)] = inst_12031);
(statearr_12037_12066[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12036 === (1)))
{var inst_11998 = (new Array(n));var inst_11999 = inst_11998;var inst_12000 = (0);var state_12035__$1 = (function (){var statearr_12038 = state_12035;(statearr_12038[(7)] = inst_11999);
(statearr_12038[(8)] = inst_12000);
return statearr_12038;
})();var statearr_12039_12067 = state_12035__$1;(statearr_12039_12067[(2)] = null);
(statearr_12039_12067[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12036 === (4)))
{var inst_12003 = (state_12035[(9)]);var inst_12003__$1 = (state_12035[(2)]);var inst_12004 = (inst_12003__$1 == null);var inst_12005 = cljs.core.not.call(null,inst_12004);var state_12035__$1 = (function (){var statearr_12040 = state_12035;(statearr_12040[(9)] = inst_12003__$1);
return statearr_12040;
})();if(inst_12005)
{var statearr_12041_12068 = state_12035__$1;(statearr_12041_12068[(1)] = (5));
} else
{var statearr_12042_12069 = state_12035__$1;(statearr_12042_12069[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12036 === (15)))
{var inst_12025 = (state_12035[(2)]);var state_12035__$1 = state_12035;var statearr_12043_12070 = state_12035__$1;(statearr_12043_12070[(2)] = inst_12025);
(statearr_12043_12070[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12036 === (13)))
{var state_12035__$1 = state_12035;var statearr_12044_12071 = state_12035__$1;(statearr_12044_12071[(2)] = null);
(statearr_12044_12071[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12036 === (6)))
{var inst_12000 = (state_12035[(8)]);var inst_12021 = (inst_12000 > (0));var state_12035__$1 = state_12035;if(cljs.core.truth_(inst_12021))
{var statearr_12045_12072 = state_12035__$1;(statearr_12045_12072[(1)] = (12));
} else
{var statearr_12046_12073 = state_12035__$1;(statearr_12046_12073[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12036 === (3)))
{var inst_12033 = (state_12035[(2)]);var state_12035__$1 = state_12035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12035__$1,inst_12033);
} else
{if((state_val_12036 === (12)))
{var inst_11999 = (state_12035[(7)]);var inst_12023 = cljs.core.vec.call(null,inst_11999);var state_12035__$1 = state_12035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12035__$1,(15),out,inst_12023);
} else
{if((state_val_12036 === (2)))
{var state_12035__$1 = state_12035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12035__$1,(4),ch);
} else
{if((state_val_12036 === (11)))
{var inst_12015 = (state_12035[(2)]);var inst_12016 = (new Array(n));var inst_11999 = inst_12016;var inst_12000 = (0);var state_12035__$1 = (function (){var statearr_12047 = state_12035;(statearr_12047[(7)] = inst_11999);
(statearr_12047[(10)] = inst_12015);
(statearr_12047[(8)] = inst_12000);
return statearr_12047;
})();var statearr_12048_12074 = state_12035__$1;(statearr_12048_12074[(2)] = null);
(statearr_12048_12074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12036 === (9)))
{var inst_11999 = (state_12035[(7)]);var inst_12013 = cljs.core.vec.call(null,inst_11999);var state_12035__$1 = state_12035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12035__$1,(11),out,inst_12013);
} else
{if((state_val_12036 === (5)))
{var inst_11999 = (state_12035[(7)]);var inst_12003 = (state_12035[(9)]);var inst_12000 = (state_12035[(8)]);var inst_12008 = (state_12035[(11)]);var inst_12007 = (inst_11999[inst_12000] = inst_12003);var inst_12008__$1 = (inst_12000 + (1));var inst_12009 = (inst_12008__$1 < n);var state_12035__$1 = (function (){var statearr_12049 = state_12035;(statearr_12049[(12)] = inst_12007);
(statearr_12049[(11)] = inst_12008__$1);
return statearr_12049;
})();if(cljs.core.truth_(inst_12009))
{var statearr_12050_12075 = state_12035__$1;(statearr_12050_12075[(1)] = (8));
} else
{var statearr_12051_12076 = state_12035__$1;(statearr_12051_12076[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12036 === (14)))
{var inst_12028 = (state_12035[(2)]);var inst_12029 = cljs.core.async.close_BANG_.call(null,out);var state_12035__$1 = (function (){var statearr_12053 = state_12035;(statearr_12053[(13)] = inst_12028);
return statearr_12053;
})();var statearr_12054_12077 = state_12035__$1;(statearr_12054_12077[(2)] = inst_12029);
(statearr_12054_12077[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12036 === (10)))
{var inst_12019 = (state_12035[(2)]);var state_12035__$1 = state_12035;var statearr_12055_12078 = state_12035__$1;(statearr_12055_12078[(2)] = inst_12019);
(statearr_12055_12078[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12036 === (8)))
{var inst_11999 = (state_12035[(7)]);var inst_12008 = (state_12035[(11)]);var tmp12052 = inst_11999;var inst_11999__$1 = tmp12052;var inst_12000 = inst_12008;var state_12035__$1 = (function (){var statearr_12056 = state_12035;(statearr_12056[(7)] = inst_11999__$1);
(statearr_12056[(8)] = inst_12000);
return statearr_12056;
})();var statearr_12057_12079 = state_12035__$1;(statearr_12057_12079[(2)] = null);
(statearr_12057_12079[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___12065,out))
;return ((function (switch__6329__auto__,c__6344__auto___12065,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_12061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12061[(0)] = state_machine__6330__auto__);
(statearr_12061[(1)] = (1));
return statearr_12061;
});
var state_machine__6330__auto____1 = (function (state_12035){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_12035);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e12062){if((e12062 instanceof Object))
{var ex__6333__auto__ = e12062;var statearr_12063_12080 = state_12035;(statearr_12063_12080[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12035);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12062;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12081 = state_12035;
state_12035 = G__12081;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_12035){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_12035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___12065,out))
})();var state__6346__auto__ = (function (){var statearr_12064 = f__6345__auto__.call(null);(statearr_12064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___12065);
return statearr_12064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___12065,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___12224 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___12224,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___12224,out){
return (function (state_12194){var state_val_12195 = (state_12194[(1)]);if((state_val_12195 === (7)))
{var inst_12190 = (state_12194[(2)]);var state_12194__$1 = state_12194;var statearr_12196_12225 = state_12194__$1;(statearr_12196_12225[(2)] = inst_12190);
(statearr_12196_12225[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (1)))
{var inst_12153 = [];var inst_12154 = inst_12153;var inst_12155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_12194__$1 = (function (){var statearr_12197 = state_12194;(statearr_12197[(7)] = inst_12154);
(statearr_12197[(8)] = inst_12155);
return statearr_12197;
})();var statearr_12198_12226 = state_12194__$1;(statearr_12198_12226[(2)] = null);
(statearr_12198_12226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (4)))
{var inst_12158 = (state_12194[(9)]);var inst_12158__$1 = (state_12194[(2)]);var inst_12159 = (inst_12158__$1 == null);var inst_12160 = cljs.core.not.call(null,inst_12159);var state_12194__$1 = (function (){var statearr_12199 = state_12194;(statearr_12199[(9)] = inst_12158__$1);
return statearr_12199;
})();if(inst_12160)
{var statearr_12200_12227 = state_12194__$1;(statearr_12200_12227[(1)] = (5));
} else
{var statearr_12201_12228 = state_12194__$1;(statearr_12201_12228[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (15)))
{var inst_12184 = (state_12194[(2)]);var state_12194__$1 = state_12194;var statearr_12202_12229 = state_12194__$1;(statearr_12202_12229[(2)] = inst_12184);
(statearr_12202_12229[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (13)))
{var state_12194__$1 = state_12194;var statearr_12203_12230 = state_12194__$1;(statearr_12203_12230[(2)] = null);
(statearr_12203_12230[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (6)))
{var inst_12154 = (state_12194[(7)]);var inst_12179 = inst_12154.length;var inst_12180 = (inst_12179 > (0));var state_12194__$1 = state_12194;if(cljs.core.truth_(inst_12180))
{var statearr_12204_12231 = state_12194__$1;(statearr_12204_12231[(1)] = (12));
} else
{var statearr_12205_12232 = state_12194__$1;(statearr_12205_12232[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (3)))
{var inst_12192 = (state_12194[(2)]);var state_12194__$1 = state_12194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12194__$1,inst_12192);
} else
{if((state_val_12195 === (12)))
{var inst_12154 = (state_12194[(7)]);var inst_12182 = cljs.core.vec.call(null,inst_12154);var state_12194__$1 = state_12194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12194__$1,(15),out,inst_12182);
} else
{if((state_val_12195 === (2)))
{var state_12194__$1 = state_12194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12194__$1,(4),ch);
} else
{if((state_val_12195 === (11)))
{var inst_12158 = (state_12194[(9)]);var inst_12162 = (state_12194[(10)]);var inst_12172 = (state_12194[(2)]);var inst_12173 = [];var inst_12174 = inst_12173.push(inst_12158);var inst_12154 = inst_12173;var inst_12155 = inst_12162;var state_12194__$1 = (function (){var statearr_12206 = state_12194;(statearr_12206[(7)] = inst_12154);
(statearr_12206[(11)] = inst_12174);
(statearr_12206[(12)] = inst_12172);
(statearr_12206[(8)] = inst_12155);
return statearr_12206;
})();var statearr_12207_12233 = state_12194__$1;(statearr_12207_12233[(2)] = null);
(statearr_12207_12233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (9)))
{var inst_12154 = (state_12194[(7)]);var inst_12170 = cljs.core.vec.call(null,inst_12154);var state_12194__$1 = state_12194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12194__$1,(11),out,inst_12170);
} else
{if((state_val_12195 === (5)))
{var inst_12155 = (state_12194[(8)]);var inst_12158 = (state_12194[(9)]);var inst_12162 = (state_12194[(10)]);var inst_12162__$1 = f.call(null,inst_12158);var inst_12163 = cljs.core._EQ_.call(null,inst_12162__$1,inst_12155);var inst_12164 = cljs.core.keyword_identical_QMARK_.call(null,inst_12155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_12165 = (inst_12163) || (inst_12164);var state_12194__$1 = (function (){var statearr_12208 = state_12194;(statearr_12208[(10)] = inst_12162__$1);
return statearr_12208;
})();if(cljs.core.truth_(inst_12165))
{var statearr_12209_12234 = state_12194__$1;(statearr_12209_12234[(1)] = (8));
} else
{var statearr_12210_12235 = state_12194__$1;(statearr_12210_12235[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (14)))
{var inst_12187 = (state_12194[(2)]);var inst_12188 = cljs.core.async.close_BANG_.call(null,out);var state_12194__$1 = (function (){var statearr_12212 = state_12194;(statearr_12212[(13)] = inst_12187);
return statearr_12212;
})();var statearr_12213_12236 = state_12194__$1;(statearr_12213_12236[(2)] = inst_12188);
(statearr_12213_12236[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (10)))
{var inst_12177 = (state_12194[(2)]);var state_12194__$1 = state_12194;var statearr_12214_12237 = state_12194__$1;(statearr_12214_12237[(2)] = inst_12177);
(statearr_12214_12237[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (8)))
{var inst_12154 = (state_12194[(7)]);var inst_12158 = (state_12194[(9)]);var inst_12162 = (state_12194[(10)]);var inst_12167 = inst_12154.push(inst_12158);var tmp12211 = inst_12154;var inst_12154__$1 = tmp12211;var inst_12155 = inst_12162;var state_12194__$1 = (function (){var statearr_12215 = state_12194;(statearr_12215[(7)] = inst_12154__$1);
(statearr_12215[(8)] = inst_12155);
(statearr_12215[(14)] = inst_12167);
return statearr_12215;
})();var statearr_12216_12238 = state_12194__$1;(statearr_12216_12238[(2)] = null);
(statearr_12216_12238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___12224,out))
;return ((function (switch__6329__auto__,c__6344__auto___12224,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_12220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12220[(0)] = state_machine__6330__auto__);
(statearr_12220[(1)] = (1));
return statearr_12220;
});
var state_machine__6330__auto____1 = (function (state_12194){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_12194);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e12221){if((e12221 instanceof Object))
{var ex__6333__auto__ = e12221;var statearr_12222_12239 = state_12194;(statearr_12222_12239[(5)] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12194);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12240 = state_12194;
state_12194 = G__12240;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_12194){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_12194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___12224,out))
})();var state__6346__auto__ = (function (){var statearr_12223 = f__6345__auto__.call(null);(statearr_12223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___12224);
return statearr_12223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___12224,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
