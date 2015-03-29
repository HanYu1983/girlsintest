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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11328 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11328 = (function (f,fn_handler,meta11329){
this.f = f;
this.fn_handler = fn_handler;
this.meta11329 = meta11329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11328.cljs$lang$type = true;
cljs.core.async.t11328.cljs$lang$ctorStr = "cljs.core.async/t11328";
cljs.core.async.t11328.cljs$lang$ctorPrWriter = (function (this__4135__auto__,writer__4136__auto__,opt__4137__auto__){return cljs.core._write.call(null,writer__4136__auto__,"cljs.core.async/t11328");
});
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11330){var self__ = this;
var _11330__$1 = this;return self__.meta11329;
});
cljs.core.async.t11328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11330,meta11329__$1){var self__ = this;
var _11330__$1 = this;return (new cljs.core.async.t11328(self__.f,self__.fn_handler,meta11329__$1));
});
cljs.core.async.__GT_t11328 = (function __GT_t11328(f__$1,fn_handler__$1,meta11329){return (new cljs.core.async.t11328(f__$1,fn_handler__$1,meta11329));
});
}
return (new cljs.core.async.t11328(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11332 = buff;if(G__11332)
{var bit__4218__auto__ = null;if(cljs.core.truth_((function (){var or__3568__auto__ = bit__4218__auto__;if(cljs.core.truth_(or__3568__auto__))
{return or__3568__auto__;
} else
{return G__11332.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11332.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11332);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11332);
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
{var val_11333 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11333);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11333,ret){
return (function (){return fn1.call(null,val_11333);
});})(val_11333,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4424__auto___11334 = n;var x_11335 = (0);while(true){
if((x_11335 < n__4424__auto___11334))
{(a[x_11335] = (0));
{
var G__11336 = (x_11335 + (1));
x_11335 = G__11336;
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
var G__11337 = (i + (1));
i = G__11337;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11341 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11341 = (function (flag,alt_flag,meta11342){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11342 = meta11342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11341.cljs$lang$type = true;
cljs.core.async.t11341.cljs$lang$ctorStr = "cljs.core.async/t11341";
cljs.core.async.t11341.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4135__auto__,writer__4136__auto__,opt__4137__auto__){return cljs.core._write.call(null,writer__4136__auto__,"cljs.core.async/t11341");
});})(flag))
;
cljs.core.async.t11341.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11343){var self__ = this;
var _11343__$1 = this;return self__.meta11342;
});})(flag))
;
cljs.core.async.t11341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11343,meta11342__$1){var self__ = this;
var _11343__$1 = this;return (new cljs.core.async.t11341(self__.flag,self__.alt_flag,meta11342__$1));
});})(flag))
;
cljs.core.async.__GT_t11341 = ((function (flag){
return (function __GT_t11341(flag__$1,alt_flag__$1,meta11342){return (new cljs.core.async.t11341(flag__$1,alt_flag__$1,meta11342));
});})(flag))
;
}
return (new cljs.core.async.t11341(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11347 = (function (cb,flag,alt_handler,meta11348){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11348 = meta11348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11347.cljs$lang$type = true;
cljs.core.async.t11347.cljs$lang$ctorStr = "cljs.core.async/t11347";
cljs.core.async.t11347.cljs$lang$ctorPrWriter = (function (this__4135__auto__,writer__4136__auto__,opt__4137__auto__){return cljs.core._write.call(null,writer__4136__auto__,"cljs.core.async/t11347");
});
cljs.core.async.t11347.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11349){var self__ = this;
var _11349__$1 = this;return self__.meta11348;
});
cljs.core.async.t11347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11349,meta11348__$1){var self__ = this;
var _11349__$1 = this;return (new cljs.core.async.t11347(self__.cb,self__.flag,self__.alt_handler,meta11348__$1));
});
cljs.core.async.__GT_t11347 = (function __GT_t11347(cb__$1,flag__$1,alt_handler__$1,meta11348){return (new cljs.core.async.t11347(cb__$1,flag__$1,alt_handler__$1,meta11348));
});
}
return (new cljs.core.async.t11347(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11350_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11350_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11351_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11351_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3568__auto__ = wport;if(cljs.core.truth_(or__3568__auto__))
{return or__3568__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11352 = (i + (1));
i = G__11352;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3568__auto__ = ret;if(cljs.core.truth_(or__3568__auto__))
{return or__3568__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3556__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3556__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3556__auto__;
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
var alts_BANG___delegate = function (ports,p__11353){var map__11355 = p__11353;var map__11355__$1 = ((cljs.core.seq_QMARK_.call(null,map__11355))?cljs.core.apply.call(null,cljs.core.hash_map,map__11355):map__11355);var opts = map__11355__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11353 = null;if (arguments.length > 1) {
  p__11353 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11353);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11356){
var ports = cljs.core.first(arglist__11356);
var p__11353 = cljs.core.rest(arglist__11356);
return alts_BANG___delegate(ports,p__11353);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6225__auto___11451 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___11451){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___11451){
return (function (state_11427){var state_val_11428 = (state_11427[(1)]);if((state_val_11428 === (7)))
{var inst_11423 = (state_11427[(2)]);var state_11427__$1 = state_11427;var statearr_11429_11452 = state_11427__$1;(statearr_11429_11452[(2)] = inst_11423);
(statearr_11429_11452[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11428 === (1)))
{var state_11427__$1 = state_11427;var statearr_11430_11453 = state_11427__$1;(statearr_11430_11453[(2)] = null);
(statearr_11430_11453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11428 === (4)))
{var inst_11406 = (state_11427[(7)]);var inst_11406__$1 = (state_11427[(2)]);var inst_11407 = (inst_11406__$1 == null);var state_11427__$1 = (function (){var statearr_11431 = state_11427;(statearr_11431[(7)] = inst_11406__$1);
return statearr_11431;
})();if(cljs.core.truth_(inst_11407))
{var statearr_11432_11454 = state_11427__$1;(statearr_11432_11454[(1)] = (5));
} else
{var statearr_11433_11455 = state_11427__$1;(statearr_11433_11455[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11428 === (13)))
{var state_11427__$1 = state_11427;var statearr_11434_11456 = state_11427__$1;(statearr_11434_11456[(2)] = null);
(statearr_11434_11456[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11428 === (6)))
{var inst_11406 = (state_11427[(7)]);var state_11427__$1 = state_11427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11427__$1,(11),to,inst_11406);
} else
{if((state_val_11428 === (3)))
{var inst_11425 = (state_11427[(2)]);var state_11427__$1 = state_11427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11427__$1,inst_11425);
} else
{if((state_val_11428 === (12)))
{var state_11427__$1 = state_11427;var statearr_11435_11457 = state_11427__$1;(statearr_11435_11457[(2)] = null);
(statearr_11435_11457[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11428 === (2)))
{var state_11427__$1 = state_11427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11427__$1,(4),from);
} else
{if((state_val_11428 === (11)))
{var inst_11416 = (state_11427[(2)]);var state_11427__$1 = state_11427;if(cljs.core.truth_(inst_11416))
{var statearr_11436_11458 = state_11427__$1;(statearr_11436_11458[(1)] = (12));
} else
{var statearr_11437_11459 = state_11427__$1;(statearr_11437_11459[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11428 === (9)))
{var state_11427__$1 = state_11427;var statearr_11438_11460 = state_11427__$1;(statearr_11438_11460[(2)] = null);
(statearr_11438_11460[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11428 === (5)))
{var state_11427__$1 = state_11427;if(cljs.core.truth_(close_QMARK_))
{var statearr_11439_11461 = state_11427__$1;(statearr_11439_11461[(1)] = (8));
} else
{var statearr_11440_11462 = state_11427__$1;(statearr_11440_11462[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11428 === (14)))
{var inst_11421 = (state_11427[(2)]);var state_11427__$1 = state_11427;var statearr_11441_11463 = state_11427__$1;(statearr_11441_11463[(2)] = inst_11421);
(statearr_11441_11463[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11428 === (10)))
{var inst_11413 = (state_11427[(2)]);var state_11427__$1 = state_11427;var statearr_11442_11464 = state_11427__$1;(statearr_11442_11464[(2)] = inst_11413);
(statearr_11442_11464[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11428 === (8)))
{var inst_11410 = cljs.core.async.close_BANG_.call(null,to);var state_11427__$1 = state_11427;var statearr_11443_11465 = state_11427__$1;(statearr_11443_11465[(2)] = inst_11410);
(statearr_11443_11465[(1)] = (10));
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
});})(c__6225__auto___11451))
;return ((function (switch__6210__auto__,c__6225__auto___11451){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_11447 = [null,null,null,null,null,null,null,null];(statearr_11447[(0)] = state_machine__6211__auto__);
(statearr_11447[(1)] = (1));
return statearr_11447;
});
var state_machine__6211__auto____1 = (function (state_11427){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_11427);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e11448){if((e11448 instanceof Object))
{var ex__6214__auto__ = e11448;var statearr_11449_11466 = state_11427;(statearr_11449_11466[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11427);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11448;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11467 = state_11427;
state_11427 = G__11467;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_11427){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_11427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___11451))
})();var state__6227__auto__ = (function (){var statearr_11450 = f__6226__auto__.call(null);(statearr_11450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___11451);
return statearr_11450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___11451))
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
return (function (p__11650){var vec__11651 = p__11650;var v = cljs.core.nth.call(null,vec__11651,(0),null);var p = cljs.core.nth.call(null,vec__11651,(1),null);var job = vec__11651;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6225__auto___11832 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___11832,res,vec__11651,v,p,job,jobs,results){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___11832,res,vec__11651,v,p,job,jobs,results){
return (function (state_11656){var state_val_11657 = (state_11656[(1)]);if((state_val_11657 === (2)))
{var inst_11653 = (state_11656[(2)]);var inst_11654 = cljs.core.async.close_BANG_.call(null,res);var state_11656__$1 = (function (){var statearr_11658 = state_11656;(statearr_11658[(7)] = inst_11653);
return statearr_11658;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11656__$1,inst_11654);
} else
{if((state_val_11657 === (1)))
{var state_11656__$1 = state_11656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11656__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6225__auto___11832,res,vec__11651,v,p,job,jobs,results))
;return ((function (switch__6210__auto__,c__6225__auto___11832,res,vec__11651,v,p,job,jobs,results){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_11662 = [null,null,null,null,null,null,null,null];(statearr_11662[(0)] = state_machine__6211__auto__);
(statearr_11662[(1)] = (1));
return statearr_11662;
});
var state_machine__6211__auto____1 = (function (state_11656){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_11656);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e11663){if((e11663 instanceof Object))
{var ex__6214__auto__ = e11663;var statearr_11664_11833 = state_11656;(statearr_11664_11833[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11834 = state_11656;
state_11656 = G__11834;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_11656){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_11656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___11832,res,vec__11651,v,p,job,jobs,results))
})();var state__6227__auto__ = (function (){var statearr_11665 = f__6226__auto__.call(null);(statearr_11665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___11832);
return statearr_11665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___11832,res,vec__11651,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__11666){var vec__11667 = p__11666;var v = cljs.core.nth.call(null,vec__11667,(0),null);var p = cljs.core.nth.call(null,vec__11667,(1),null);var job = vec__11667;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4424__auto___11835 = n;var __11836 = (0);while(true){
if((__11836 < n__4424__auto___11835))
{var G__11668_11837 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__11668_11837) {
case "async":
var c__6225__auto___11839 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11836,c__6225__auto___11839,G__11668_11837,n__4424__auto___11835,jobs,results,process,async){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (__11836,c__6225__auto___11839,G__11668_11837,n__4424__auto___11835,jobs,results,process,async){
return (function (state_11681){var state_val_11682 = (state_11681[(1)]);if((state_val_11682 === (7)))
{var inst_11677 = (state_11681[(2)]);var state_11681__$1 = state_11681;var statearr_11683_11840 = state_11681__$1;(statearr_11683_11840[(2)] = inst_11677);
(statearr_11683_11840[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (6)))
{var state_11681__$1 = state_11681;var statearr_11684_11841 = state_11681__$1;(statearr_11684_11841[(2)] = null);
(statearr_11684_11841[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (5)))
{var state_11681__$1 = state_11681;var statearr_11685_11842 = state_11681__$1;(statearr_11685_11842[(2)] = null);
(statearr_11685_11842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (4)))
{var inst_11671 = (state_11681[(2)]);var inst_11672 = async.call(null,inst_11671);var state_11681__$1 = state_11681;if(cljs.core.truth_(inst_11672))
{var statearr_11686_11843 = state_11681__$1;(statearr_11686_11843[(1)] = (5));
} else
{var statearr_11687_11844 = state_11681__$1;(statearr_11687_11844[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (3)))
{var inst_11679 = (state_11681[(2)]);var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11681__$1,inst_11679);
} else
{if((state_val_11682 === (2)))
{var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11681__$1,(4),jobs);
} else
{if((state_val_11682 === (1)))
{var state_11681__$1 = state_11681;var statearr_11688_11845 = state_11681__$1;(statearr_11688_11845[(2)] = null);
(statearr_11688_11845[(1)] = (2));
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
});})(__11836,c__6225__auto___11839,G__11668_11837,n__4424__auto___11835,jobs,results,process,async))
;return ((function (__11836,switch__6210__auto__,c__6225__auto___11839,G__11668_11837,n__4424__auto___11835,jobs,results,process,async){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_11692 = [null,null,null,null,null,null,null];(statearr_11692[(0)] = state_machine__6211__auto__);
(statearr_11692[(1)] = (1));
return statearr_11692;
});
var state_machine__6211__auto____1 = (function (state_11681){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_11681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e11693){if((e11693 instanceof Object))
{var ex__6214__auto__ = e11693;var statearr_11694_11846 = state_11681;(statearr_11694_11846[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11847 = state_11681;
state_11681 = G__11847;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_11681){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_11681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(__11836,switch__6210__auto__,c__6225__auto___11839,G__11668_11837,n__4424__auto___11835,jobs,results,process,async))
})();var state__6227__auto__ = (function (){var statearr_11695 = f__6226__auto__.call(null);(statearr_11695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___11839);
return statearr_11695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(__11836,c__6225__auto___11839,G__11668_11837,n__4424__auto___11835,jobs,results,process,async))
);

break;
case "compute":
var c__6225__auto___11848 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11836,c__6225__auto___11848,G__11668_11837,n__4424__auto___11835,jobs,results,process,async){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (__11836,c__6225__auto___11848,G__11668_11837,n__4424__auto___11835,jobs,results,process,async){
return (function (state_11708){var state_val_11709 = (state_11708[(1)]);if((state_val_11709 === (7)))
{var inst_11704 = (state_11708[(2)]);var state_11708__$1 = state_11708;var statearr_11710_11849 = state_11708__$1;(statearr_11710_11849[(2)] = inst_11704);
(statearr_11710_11849[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11709 === (6)))
{var state_11708__$1 = state_11708;var statearr_11711_11850 = state_11708__$1;(statearr_11711_11850[(2)] = null);
(statearr_11711_11850[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11709 === (5)))
{var state_11708__$1 = state_11708;var statearr_11712_11851 = state_11708__$1;(statearr_11712_11851[(2)] = null);
(statearr_11712_11851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11709 === (4)))
{var inst_11698 = (state_11708[(2)]);var inst_11699 = process.call(null,inst_11698);var state_11708__$1 = state_11708;if(cljs.core.truth_(inst_11699))
{var statearr_11713_11852 = state_11708__$1;(statearr_11713_11852[(1)] = (5));
} else
{var statearr_11714_11853 = state_11708__$1;(statearr_11714_11853[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11709 === (3)))
{var inst_11706 = (state_11708[(2)]);var state_11708__$1 = state_11708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11708__$1,inst_11706);
} else
{if((state_val_11709 === (2)))
{var state_11708__$1 = state_11708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11708__$1,(4),jobs);
} else
{if((state_val_11709 === (1)))
{var state_11708__$1 = state_11708;var statearr_11715_11854 = state_11708__$1;(statearr_11715_11854[(2)] = null);
(statearr_11715_11854[(1)] = (2));
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
});})(__11836,c__6225__auto___11848,G__11668_11837,n__4424__auto___11835,jobs,results,process,async))
;return ((function (__11836,switch__6210__auto__,c__6225__auto___11848,G__11668_11837,n__4424__auto___11835,jobs,results,process,async){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_11719 = [null,null,null,null,null,null,null];(statearr_11719[(0)] = state_machine__6211__auto__);
(statearr_11719[(1)] = (1));
return statearr_11719;
});
var state_machine__6211__auto____1 = (function (state_11708){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_11708);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e11720){if((e11720 instanceof Object))
{var ex__6214__auto__ = e11720;var statearr_11721_11855 = state_11708;(statearr_11721_11855[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11708);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11720;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11856 = state_11708;
state_11708 = G__11856;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_11708){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_11708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(__11836,switch__6210__auto__,c__6225__auto___11848,G__11668_11837,n__4424__auto___11835,jobs,results,process,async))
})();var state__6227__auto__ = (function (){var statearr_11722 = f__6226__auto__.call(null);(statearr_11722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___11848);
return statearr_11722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(__11836,c__6225__auto___11848,G__11668_11837,n__4424__auto___11835,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__11857 = (__11836 + (1));
__11836 = G__11857;
continue;
}
} else
{}
break;
}
var c__6225__auto___11858 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___11858,jobs,results,process,async){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___11858,jobs,results,process,async){
return (function (state_11743){var state_val_11744 = (state_11743[(1)]);if((state_val_11744 === (9)))
{var inst_11736 = (state_11743[(2)]);var state_11743__$1 = (function (){var statearr_11745 = state_11743;(statearr_11745[(7)] = inst_11736);
return statearr_11745;
})();var statearr_11746_11859 = state_11743__$1;(statearr_11746_11859[(2)] = null);
(statearr_11746_11859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11744 === (8)))
{var inst_11730 = (state_11743[(8)]);var inst_11734 = (state_11743[(2)]);var state_11743__$1 = (function (){var statearr_11747 = state_11743;(statearr_11747[(9)] = inst_11734);
return statearr_11747;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11743__$1,(9),results,inst_11730);
} else
{if((state_val_11744 === (7)))
{var inst_11739 = (state_11743[(2)]);var state_11743__$1 = state_11743;var statearr_11748_11860 = state_11743__$1;(statearr_11748_11860[(2)] = inst_11739);
(statearr_11748_11860[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11744 === (6)))
{var inst_11725 = (state_11743[(10)]);var inst_11730 = (state_11743[(8)]);var inst_11730__$1 = cljs.core.async.chan.call(null,(1));var inst_11731 = [inst_11725,inst_11730__$1];var inst_11732 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11731,null));var state_11743__$1 = (function (){var statearr_11749 = state_11743;(statearr_11749[(8)] = inst_11730__$1);
return statearr_11749;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11743__$1,(8),jobs,inst_11732);
} else
{if((state_val_11744 === (5)))
{var inst_11728 = cljs.core.async.close_BANG_.call(null,jobs);var state_11743__$1 = state_11743;var statearr_11750_11861 = state_11743__$1;(statearr_11750_11861[(2)] = inst_11728);
(statearr_11750_11861[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11744 === (4)))
{var inst_11725 = (state_11743[(10)]);var inst_11725__$1 = (state_11743[(2)]);var inst_11726 = (inst_11725__$1 == null);var state_11743__$1 = (function (){var statearr_11751 = state_11743;(statearr_11751[(10)] = inst_11725__$1);
return statearr_11751;
})();if(cljs.core.truth_(inst_11726))
{var statearr_11752_11862 = state_11743__$1;(statearr_11752_11862[(1)] = (5));
} else
{var statearr_11753_11863 = state_11743__$1;(statearr_11753_11863[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11744 === (3)))
{var inst_11741 = (state_11743[(2)]);var state_11743__$1 = state_11743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11743__$1,inst_11741);
} else
{if((state_val_11744 === (2)))
{var state_11743__$1 = state_11743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11743__$1,(4),from);
} else
{if((state_val_11744 === (1)))
{var state_11743__$1 = state_11743;var statearr_11754_11864 = state_11743__$1;(statearr_11754_11864[(2)] = null);
(statearr_11754_11864[(1)] = (2));
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
});})(c__6225__auto___11858,jobs,results,process,async))
;return ((function (switch__6210__auto__,c__6225__auto___11858,jobs,results,process,async){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_11758 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11758[(0)] = state_machine__6211__auto__);
(statearr_11758[(1)] = (1));
return statearr_11758;
});
var state_machine__6211__auto____1 = (function (state_11743){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_11743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e11759){if((e11759 instanceof Object))
{var ex__6214__auto__ = e11759;var statearr_11760_11865 = state_11743;(statearr_11760_11865[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11866 = state_11743;
state_11743 = G__11866;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_11743){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_11743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___11858,jobs,results,process,async))
})();var state__6227__auto__ = (function (){var statearr_11761 = f__6226__auto__.call(null);(statearr_11761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___11858);
return statearr_11761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___11858,jobs,results,process,async))
);
var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__,jobs,results,process,async){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__,jobs,results,process,async){
return (function (state_11799){var state_val_11800 = (state_11799[(1)]);if((state_val_11800 === (7)))
{var inst_11795 = (state_11799[(2)]);var state_11799__$1 = state_11799;var statearr_11801_11867 = state_11799__$1;(statearr_11801_11867[(2)] = inst_11795);
(statearr_11801_11867[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (20)))
{var state_11799__$1 = state_11799;var statearr_11802_11868 = state_11799__$1;(statearr_11802_11868[(2)] = null);
(statearr_11802_11868[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (1)))
{var state_11799__$1 = state_11799;var statearr_11803_11869 = state_11799__$1;(statearr_11803_11869[(2)] = null);
(statearr_11803_11869[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (4)))
{var inst_11764 = (state_11799[(7)]);var inst_11764__$1 = (state_11799[(2)]);var inst_11765 = (inst_11764__$1 == null);var state_11799__$1 = (function (){var statearr_11804 = state_11799;(statearr_11804[(7)] = inst_11764__$1);
return statearr_11804;
})();if(cljs.core.truth_(inst_11765))
{var statearr_11805_11870 = state_11799__$1;(statearr_11805_11870[(1)] = (5));
} else
{var statearr_11806_11871 = state_11799__$1;(statearr_11806_11871[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (15)))
{var inst_11777 = (state_11799[(8)]);var state_11799__$1 = state_11799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11799__$1,(18),to,inst_11777);
} else
{if((state_val_11800 === (21)))
{var inst_11790 = (state_11799[(2)]);var state_11799__$1 = state_11799;var statearr_11807_11872 = state_11799__$1;(statearr_11807_11872[(2)] = inst_11790);
(statearr_11807_11872[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (13)))
{var inst_11792 = (state_11799[(2)]);var state_11799__$1 = (function (){var statearr_11808 = state_11799;(statearr_11808[(9)] = inst_11792);
return statearr_11808;
})();var statearr_11809_11873 = state_11799__$1;(statearr_11809_11873[(2)] = null);
(statearr_11809_11873[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (6)))
{var inst_11764 = (state_11799[(7)]);var state_11799__$1 = state_11799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11799__$1,(11),inst_11764);
} else
{if((state_val_11800 === (17)))
{var inst_11785 = (state_11799[(2)]);var state_11799__$1 = state_11799;if(cljs.core.truth_(inst_11785))
{var statearr_11810_11874 = state_11799__$1;(statearr_11810_11874[(1)] = (19));
} else
{var statearr_11811_11875 = state_11799__$1;(statearr_11811_11875[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (3)))
{var inst_11797 = (state_11799[(2)]);var state_11799__$1 = state_11799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11799__$1,inst_11797);
} else
{if((state_val_11800 === (12)))
{var inst_11774 = (state_11799[(10)]);var state_11799__$1 = state_11799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11799__$1,(14),inst_11774);
} else
{if((state_val_11800 === (2)))
{var state_11799__$1 = state_11799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11799__$1,(4),results);
} else
{if((state_val_11800 === (19)))
{var state_11799__$1 = state_11799;var statearr_11812_11876 = state_11799__$1;(statearr_11812_11876[(2)] = null);
(statearr_11812_11876[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (11)))
{var inst_11774 = (state_11799[(2)]);var state_11799__$1 = (function (){var statearr_11813 = state_11799;(statearr_11813[(10)] = inst_11774);
return statearr_11813;
})();var statearr_11814_11877 = state_11799__$1;(statearr_11814_11877[(2)] = null);
(statearr_11814_11877[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (9)))
{var state_11799__$1 = state_11799;var statearr_11815_11878 = state_11799__$1;(statearr_11815_11878[(2)] = null);
(statearr_11815_11878[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (5)))
{var state_11799__$1 = state_11799;if(cljs.core.truth_(close_QMARK_))
{var statearr_11816_11879 = state_11799__$1;(statearr_11816_11879[(1)] = (8));
} else
{var statearr_11817_11880 = state_11799__$1;(statearr_11817_11880[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (14)))
{var inst_11779 = (state_11799[(11)]);var inst_11777 = (state_11799[(8)]);var inst_11777__$1 = (state_11799[(2)]);var inst_11778 = (inst_11777__$1 == null);var inst_11779__$1 = cljs.core.not.call(null,inst_11778);var state_11799__$1 = (function (){var statearr_11818 = state_11799;(statearr_11818[(11)] = inst_11779__$1);
(statearr_11818[(8)] = inst_11777__$1);
return statearr_11818;
})();if(inst_11779__$1)
{var statearr_11819_11881 = state_11799__$1;(statearr_11819_11881[(1)] = (15));
} else
{var statearr_11820_11882 = state_11799__$1;(statearr_11820_11882[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (16)))
{var inst_11779 = (state_11799[(11)]);var state_11799__$1 = state_11799;var statearr_11821_11883 = state_11799__$1;(statearr_11821_11883[(2)] = inst_11779);
(statearr_11821_11883[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (10)))
{var inst_11771 = (state_11799[(2)]);var state_11799__$1 = state_11799;var statearr_11822_11884 = state_11799__$1;(statearr_11822_11884[(2)] = inst_11771);
(statearr_11822_11884[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (18)))
{var inst_11782 = (state_11799[(2)]);var state_11799__$1 = state_11799;var statearr_11823_11885 = state_11799__$1;(statearr_11823_11885[(2)] = inst_11782);
(statearr_11823_11885[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11800 === (8)))
{var inst_11768 = cljs.core.async.close_BANG_.call(null,to);var state_11799__$1 = state_11799;var statearr_11824_11886 = state_11799__$1;(statearr_11824_11886[(2)] = inst_11768);
(statearr_11824_11886[(1)] = (10));
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
});})(c__6225__auto__,jobs,results,process,async))
;return ((function (switch__6210__auto__,c__6225__auto__,jobs,results,process,async){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_11828 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11828[(0)] = state_machine__6211__auto__);
(statearr_11828[(1)] = (1));
return statearr_11828;
});
var state_machine__6211__auto____1 = (function (state_11799){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_11799);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e11829){if((e11829 instanceof Object))
{var ex__6214__auto__ = e11829;var statearr_11830_11887 = state_11799;(statearr_11830_11887[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11799);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11888 = state_11799;
state_11799 = G__11888;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_11799){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_11799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__,jobs,results,process,async))
})();var state__6227__auto__ = (function (){var statearr_11831 = f__6226__auto__.call(null);(statearr_11831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_11831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__,jobs,results,process,async))
);
return c__6225__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6225__auto___11989 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___11989,tc,fc){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___11989,tc,fc){
return (function (state_11964){var state_val_11965 = (state_11964[(1)]);if((state_val_11965 === (7)))
{var inst_11960 = (state_11964[(2)]);var state_11964__$1 = state_11964;var statearr_11966_11990 = state_11964__$1;(statearr_11966_11990[(2)] = inst_11960);
(statearr_11966_11990[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11965 === (1)))
{var state_11964__$1 = state_11964;var statearr_11967_11991 = state_11964__$1;(statearr_11967_11991[(2)] = null);
(statearr_11967_11991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11965 === (4)))
{var inst_11941 = (state_11964[(7)]);var inst_11941__$1 = (state_11964[(2)]);var inst_11942 = (inst_11941__$1 == null);var state_11964__$1 = (function (){var statearr_11968 = state_11964;(statearr_11968[(7)] = inst_11941__$1);
return statearr_11968;
})();if(cljs.core.truth_(inst_11942))
{var statearr_11969_11992 = state_11964__$1;(statearr_11969_11992[(1)] = (5));
} else
{var statearr_11970_11993 = state_11964__$1;(statearr_11970_11993[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11965 === (13)))
{var state_11964__$1 = state_11964;var statearr_11971_11994 = state_11964__$1;(statearr_11971_11994[(2)] = null);
(statearr_11971_11994[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11965 === (6)))
{var inst_11941 = (state_11964[(7)]);var inst_11947 = p.call(null,inst_11941);var state_11964__$1 = state_11964;if(cljs.core.truth_(inst_11947))
{var statearr_11972_11995 = state_11964__$1;(statearr_11972_11995[(1)] = (9));
} else
{var statearr_11973_11996 = state_11964__$1;(statearr_11973_11996[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11965 === (3)))
{var inst_11962 = (state_11964[(2)]);var state_11964__$1 = state_11964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11964__$1,inst_11962);
} else
{if((state_val_11965 === (12)))
{var state_11964__$1 = state_11964;var statearr_11974_11997 = state_11964__$1;(statearr_11974_11997[(2)] = null);
(statearr_11974_11997[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11965 === (2)))
{var state_11964__$1 = state_11964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11964__$1,(4),ch);
} else
{if((state_val_11965 === (11)))
{var inst_11941 = (state_11964[(7)]);var inst_11951 = (state_11964[(2)]);var state_11964__$1 = state_11964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11964__$1,(8),inst_11951,inst_11941);
} else
{if((state_val_11965 === (9)))
{var state_11964__$1 = state_11964;var statearr_11975_11998 = state_11964__$1;(statearr_11975_11998[(2)] = tc);
(statearr_11975_11998[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11965 === (5)))
{var inst_11944 = cljs.core.async.close_BANG_.call(null,tc);var inst_11945 = cljs.core.async.close_BANG_.call(null,fc);var state_11964__$1 = (function (){var statearr_11976 = state_11964;(statearr_11976[(8)] = inst_11944);
return statearr_11976;
})();var statearr_11977_11999 = state_11964__$1;(statearr_11977_11999[(2)] = inst_11945);
(statearr_11977_11999[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11965 === (14)))
{var inst_11958 = (state_11964[(2)]);var state_11964__$1 = state_11964;var statearr_11978_12000 = state_11964__$1;(statearr_11978_12000[(2)] = inst_11958);
(statearr_11978_12000[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11965 === (10)))
{var state_11964__$1 = state_11964;var statearr_11979_12001 = state_11964__$1;(statearr_11979_12001[(2)] = fc);
(statearr_11979_12001[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11965 === (8)))
{var inst_11953 = (state_11964[(2)]);var state_11964__$1 = state_11964;if(cljs.core.truth_(inst_11953))
{var statearr_11980_12002 = state_11964__$1;(statearr_11980_12002[(1)] = (12));
} else
{var statearr_11981_12003 = state_11964__$1;(statearr_11981_12003[(1)] = (13));
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
});})(c__6225__auto___11989,tc,fc))
;return ((function (switch__6210__auto__,c__6225__auto___11989,tc,fc){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_11985 = [null,null,null,null,null,null,null,null,null];(statearr_11985[(0)] = state_machine__6211__auto__);
(statearr_11985[(1)] = (1));
return statearr_11985;
});
var state_machine__6211__auto____1 = (function (state_11964){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_11964);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e11986){if((e11986 instanceof Object))
{var ex__6214__auto__ = e11986;var statearr_11987_12004 = state_11964;(statearr_11987_12004[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11964);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12005 = state_11964;
state_11964 = G__12005;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_11964){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_11964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___11989,tc,fc))
})();var state__6227__auto__ = (function (){var statearr_11988 = f__6226__auto__.call(null);(statearr_11988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___11989);
return statearr_11988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___11989,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__){
return (function (state_12052){var state_val_12053 = (state_12052[(1)]);if((state_val_12053 === (7)))
{var inst_12048 = (state_12052[(2)]);var state_12052__$1 = state_12052;var statearr_12054_12070 = state_12052__$1;(statearr_12054_12070[(2)] = inst_12048);
(statearr_12054_12070[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12053 === (6)))
{var inst_12041 = (state_12052[(7)]);var inst_12038 = (state_12052[(8)]);var inst_12045 = f.call(null,inst_12038,inst_12041);var inst_12038__$1 = inst_12045;var state_12052__$1 = (function (){var statearr_12055 = state_12052;(statearr_12055[(8)] = inst_12038__$1);
return statearr_12055;
})();var statearr_12056_12071 = state_12052__$1;(statearr_12056_12071[(2)] = null);
(statearr_12056_12071[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12053 === (5)))
{var inst_12038 = (state_12052[(8)]);var state_12052__$1 = state_12052;var statearr_12057_12072 = state_12052__$1;(statearr_12057_12072[(2)] = inst_12038);
(statearr_12057_12072[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12053 === (4)))
{var inst_12041 = (state_12052[(7)]);var inst_12041__$1 = (state_12052[(2)]);var inst_12042 = (inst_12041__$1 == null);var state_12052__$1 = (function (){var statearr_12058 = state_12052;(statearr_12058[(7)] = inst_12041__$1);
return statearr_12058;
})();if(cljs.core.truth_(inst_12042))
{var statearr_12059_12073 = state_12052__$1;(statearr_12059_12073[(1)] = (5));
} else
{var statearr_12060_12074 = state_12052__$1;(statearr_12060_12074[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12053 === (3)))
{var inst_12050 = (state_12052[(2)]);var state_12052__$1 = state_12052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12052__$1,inst_12050);
} else
{if((state_val_12053 === (2)))
{var state_12052__$1 = state_12052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12052__$1,(4),ch);
} else
{if((state_val_12053 === (1)))
{var inst_12038 = init;var state_12052__$1 = (function (){var statearr_12061 = state_12052;(statearr_12061[(8)] = inst_12038);
return statearr_12061;
})();var statearr_12062_12075 = state_12052__$1;(statearr_12062_12075[(2)] = null);
(statearr_12062_12075[(1)] = (2));
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
});})(c__6225__auto__))
;return ((function (switch__6210__auto__,c__6225__auto__){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_12066 = [null,null,null,null,null,null,null,null,null];(statearr_12066[(0)] = state_machine__6211__auto__);
(statearr_12066[(1)] = (1));
return statearr_12066;
});
var state_machine__6211__auto____1 = (function (state_12052){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_12052);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e12067){if((e12067 instanceof Object))
{var ex__6214__auto__ = e12067;var statearr_12068_12076 = state_12052;(statearr_12068_12076[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12052);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12077 = state_12052;
state_12052 = G__12077;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_12052){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_12052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__))
})();var state__6227__auto__ = (function (){var statearr_12069 = f__6226__auto__.call(null);(statearr_12069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_12069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__))
);
return c__6225__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__){
return (function (state_12151){var state_val_12152 = (state_12151[(1)]);if((state_val_12152 === (7)))
{var inst_12133 = (state_12151[(2)]);var state_12151__$1 = state_12151;var statearr_12153_12176 = state_12151__$1;(statearr_12153_12176[(2)] = inst_12133);
(statearr_12153_12176[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12152 === (1)))
{var inst_12127 = cljs.core.seq.call(null,coll);var inst_12128 = inst_12127;var state_12151__$1 = (function (){var statearr_12154 = state_12151;(statearr_12154[(7)] = inst_12128);
return statearr_12154;
})();var statearr_12155_12177 = state_12151__$1;(statearr_12155_12177[(2)] = null);
(statearr_12155_12177[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12152 === (4)))
{var inst_12128 = (state_12151[(7)]);var inst_12131 = cljs.core.first.call(null,inst_12128);var state_12151__$1 = state_12151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12151__$1,(7),ch,inst_12131);
} else
{if((state_val_12152 === (13)))
{var inst_12145 = (state_12151[(2)]);var state_12151__$1 = state_12151;var statearr_12156_12178 = state_12151__$1;(statearr_12156_12178[(2)] = inst_12145);
(statearr_12156_12178[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12152 === (6)))
{var inst_12136 = (state_12151[(2)]);var state_12151__$1 = state_12151;if(cljs.core.truth_(inst_12136))
{var statearr_12157_12179 = state_12151__$1;(statearr_12157_12179[(1)] = (8));
} else
{var statearr_12158_12180 = state_12151__$1;(statearr_12158_12180[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12152 === (3)))
{var inst_12149 = (state_12151[(2)]);var state_12151__$1 = state_12151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12151__$1,inst_12149);
} else
{if((state_val_12152 === (12)))
{var state_12151__$1 = state_12151;var statearr_12159_12181 = state_12151__$1;(statearr_12159_12181[(2)] = null);
(statearr_12159_12181[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12152 === (2)))
{var inst_12128 = (state_12151[(7)]);var state_12151__$1 = state_12151;if(cljs.core.truth_(inst_12128))
{var statearr_12160_12182 = state_12151__$1;(statearr_12160_12182[(1)] = (4));
} else
{var statearr_12161_12183 = state_12151__$1;(statearr_12161_12183[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12152 === (11)))
{var inst_12142 = cljs.core.async.close_BANG_.call(null,ch);var state_12151__$1 = state_12151;var statearr_12162_12184 = state_12151__$1;(statearr_12162_12184[(2)] = inst_12142);
(statearr_12162_12184[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12152 === (9)))
{var state_12151__$1 = state_12151;if(cljs.core.truth_(close_QMARK_))
{var statearr_12163_12185 = state_12151__$1;(statearr_12163_12185[(1)] = (11));
} else
{var statearr_12164_12186 = state_12151__$1;(statearr_12164_12186[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12152 === (5)))
{var inst_12128 = (state_12151[(7)]);var state_12151__$1 = state_12151;var statearr_12165_12187 = state_12151__$1;(statearr_12165_12187[(2)] = inst_12128);
(statearr_12165_12187[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12152 === (10)))
{var inst_12147 = (state_12151[(2)]);var state_12151__$1 = state_12151;var statearr_12166_12188 = state_12151__$1;(statearr_12166_12188[(2)] = inst_12147);
(statearr_12166_12188[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12152 === (8)))
{var inst_12128 = (state_12151[(7)]);var inst_12138 = cljs.core.next.call(null,inst_12128);var inst_12128__$1 = inst_12138;var state_12151__$1 = (function (){var statearr_12167 = state_12151;(statearr_12167[(7)] = inst_12128__$1);
return statearr_12167;
})();var statearr_12168_12189 = state_12151__$1;(statearr_12168_12189[(2)] = null);
(statearr_12168_12189[(1)] = (2));
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
});})(c__6225__auto__))
;return ((function (switch__6210__auto__,c__6225__auto__){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_12172 = [null,null,null,null,null,null,null,null];(statearr_12172[(0)] = state_machine__6211__auto__);
(statearr_12172[(1)] = (1));
return statearr_12172;
});
var state_machine__6211__auto____1 = (function (state_12151){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_12151);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e12173){if((e12173 instanceof Object))
{var ex__6214__auto__ = e12173;var statearr_12174_12190 = state_12151;(statearr_12174_12190[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12151);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12173;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12191 = state_12151;
state_12151 = G__12191;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_12151){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_12151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__))
})();var state__6227__auto__ = (function (){var statearr_12175 = f__6226__auto__.call(null);(statearr_12175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_12175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__))
);
return c__6225__auto__;
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
cljs.core.async.Mux = (function (){var obj12193 = {};return obj12193;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3556__auto__ = _;if(and__3556__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3556__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4195__auto__ = (((_ == null))?null:_);return (function (){var or__3568__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12195 = {};return obj12195;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3556__auto__ = m;if(and__3556__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3556__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4195__auto__ = (((m == null))?null:m);return (function (){var or__3568__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3556__auto__ = m;if(and__3556__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3556__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4195__auto__ = (((m == null))?null:m);return (function (){var or__3568__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3556__auto__ = m;if(and__3556__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3556__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4195__auto__ = (((m == null))?null:m);return (function (){var or__3568__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12417 = (function (cs,ch,mult,meta12418){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12418 = meta12418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12417.cljs$lang$type = true;
cljs.core.async.t12417.cljs$lang$ctorStr = "cljs.core.async/t12417";
cljs.core.async.t12417.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4135__auto__,writer__4136__auto__,opt__4137__auto__){return cljs.core._write.call(null,writer__4136__auto__,"cljs.core.async/t12417");
});})(cs))
;
cljs.core.async.t12417.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12417.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12417.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12417.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12417.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12419){var self__ = this;
var _12419__$1 = this;return self__.meta12418;
});})(cs))
;
cljs.core.async.t12417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12419,meta12418__$1){var self__ = this;
var _12419__$1 = this;return (new cljs.core.async.t12417(self__.cs,self__.ch,self__.mult,meta12418__$1));
});})(cs))
;
cljs.core.async.__GT_t12417 = ((function (cs){
return (function __GT_t12417(cs__$1,ch__$1,mult__$1,meta12418){return (new cljs.core.async.t12417(cs__$1,ch__$1,mult__$1,meta12418));
});})(cs))
;
}
return (new cljs.core.async.t12417(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6225__auto___12638 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___12638,cs,m,dchan,dctr,done){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___12638,cs,m,dchan,dctr,done){
return (function (state_12550){var state_val_12551 = (state_12550[(1)]);if((state_val_12551 === (7)))
{var inst_12546 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12552_12639 = state_12550__$1;(statearr_12552_12639[(2)] = inst_12546);
(statearr_12552_12639[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (20)))
{var inst_12451 = (state_12550[(7)]);var inst_12461 = cljs.core.first.call(null,inst_12451);var inst_12462 = cljs.core.nth.call(null,inst_12461,(0),null);var inst_12463 = cljs.core.nth.call(null,inst_12461,(1),null);var state_12550__$1 = (function (){var statearr_12553 = state_12550;(statearr_12553[(8)] = inst_12462);
return statearr_12553;
})();if(cljs.core.truth_(inst_12463))
{var statearr_12554_12640 = state_12550__$1;(statearr_12554_12640[(1)] = (22));
} else
{var statearr_12555_12641 = state_12550__$1;(statearr_12555_12641[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (27)))
{var inst_12491 = (state_12550[(9)]);var inst_12422 = (state_12550[(10)]);var inst_12498 = (state_12550[(11)]);var inst_12493 = (state_12550[(12)]);var inst_12498__$1 = cljs.core._nth.call(null,inst_12491,inst_12493);var inst_12499 = cljs.core.async.put_BANG_.call(null,inst_12498__$1,inst_12422,done);var state_12550__$1 = (function (){var statearr_12556 = state_12550;(statearr_12556[(11)] = inst_12498__$1);
return statearr_12556;
})();if(cljs.core.truth_(inst_12499))
{var statearr_12557_12642 = state_12550__$1;(statearr_12557_12642[(1)] = (30));
} else
{var statearr_12558_12643 = state_12550__$1;(statearr_12558_12643[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (1)))
{var state_12550__$1 = state_12550;var statearr_12559_12644 = state_12550__$1;(statearr_12559_12644[(2)] = null);
(statearr_12559_12644[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (24)))
{var inst_12451 = (state_12550[(7)]);var inst_12468 = (state_12550[(2)]);var inst_12469 = cljs.core.next.call(null,inst_12451);var inst_12431 = inst_12469;var inst_12432 = null;var inst_12433 = (0);var inst_12434 = (0);var state_12550__$1 = (function (){var statearr_12560 = state_12550;(statearr_12560[(13)] = inst_12432);
(statearr_12560[(14)] = inst_12433);
(statearr_12560[(15)] = inst_12431);
(statearr_12560[(16)] = inst_12434);
(statearr_12560[(17)] = inst_12468);
return statearr_12560;
})();var statearr_12561_12645 = state_12550__$1;(statearr_12561_12645[(2)] = null);
(statearr_12561_12645[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (39)))
{var state_12550__$1 = state_12550;var statearr_12565_12646 = state_12550__$1;(statearr_12565_12646[(2)] = null);
(statearr_12565_12646[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (4)))
{var inst_12422 = (state_12550[(10)]);var inst_12422__$1 = (state_12550[(2)]);var inst_12423 = (inst_12422__$1 == null);var state_12550__$1 = (function (){var statearr_12566 = state_12550;(statearr_12566[(10)] = inst_12422__$1);
return statearr_12566;
})();if(cljs.core.truth_(inst_12423))
{var statearr_12567_12647 = state_12550__$1;(statearr_12567_12647[(1)] = (5));
} else
{var statearr_12568_12648 = state_12550__$1;(statearr_12568_12648[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (15)))
{var inst_12432 = (state_12550[(13)]);var inst_12433 = (state_12550[(14)]);var inst_12431 = (state_12550[(15)]);var inst_12434 = (state_12550[(16)]);var inst_12447 = (state_12550[(2)]);var inst_12448 = (inst_12434 + (1));var tmp12562 = inst_12432;var tmp12563 = inst_12433;var tmp12564 = inst_12431;var inst_12431__$1 = tmp12564;var inst_12432__$1 = tmp12562;var inst_12433__$1 = tmp12563;var inst_12434__$1 = inst_12448;var state_12550__$1 = (function (){var statearr_12569 = state_12550;(statearr_12569[(18)] = inst_12447);
(statearr_12569[(13)] = inst_12432__$1);
(statearr_12569[(14)] = inst_12433__$1);
(statearr_12569[(15)] = inst_12431__$1);
(statearr_12569[(16)] = inst_12434__$1);
return statearr_12569;
})();var statearr_12570_12649 = state_12550__$1;(statearr_12570_12649[(2)] = null);
(statearr_12570_12649[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (21)))
{var inst_12472 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12574_12650 = state_12550__$1;(statearr_12574_12650[(2)] = inst_12472);
(statearr_12574_12650[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (31)))
{var inst_12498 = (state_12550[(11)]);var inst_12502 = done.call(null,null);var inst_12503 = cljs.core.async.untap_STAR_.call(null,m,inst_12498);var state_12550__$1 = (function (){var statearr_12575 = state_12550;(statearr_12575[(19)] = inst_12502);
return statearr_12575;
})();var statearr_12576_12651 = state_12550__$1;(statearr_12576_12651[(2)] = inst_12503);
(statearr_12576_12651[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (32)))
{var inst_12490 = (state_12550[(20)]);var inst_12491 = (state_12550[(9)]);var inst_12493 = (state_12550[(12)]);var inst_12492 = (state_12550[(21)]);var inst_12505 = (state_12550[(2)]);var inst_12506 = (inst_12493 + (1));var tmp12571 = inst_12490;var tmp12572 = inst_12491;var tmp12573 = inst_12492;var inst_12490__$1 = tmp12571;var inst_12491__$1 = tmp12572;var inst_12492__$1 = tmp12573;var inst_12493__$1 = inst_12506;var state_12550__$1 = (function (){var statearr_12577 = state_12550;(statearr_12577[(20)] = inst_12490__$1);
(statearr_12577[(9)] = inst_12491__$1);
(statearr_12577[(22)] = inst_12505);
(statearr_12577[(12)] = inst_12493__$1);
(statearr_12577[(21)] = inst_12492__$1);
return statearr_12577;
})();var statearr_12578_12652 = state_12550__$1;(statearr_12578_12652[(2)] = null);
(statearr_12578_12652[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (40)))
{var inst_12518 = (state_12550[(23)]);var inst_12522 = done.call(null,null);var inst_12523 = cljs.core.async.untap_STAR_.call(null,m,inst_12518);var state_12550__$1 = (function (){var statearr_12579 = state_12550;(statearr_12579[(24)] = inst_12522);
return statearr_12579;
})();var statearr_12580_12653 = state_12550__$1;(statearr_12580_12653[(2)] = inst_12523);
(statearr_12580_12653[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (33)))
{var inst_12509 = (state_12550[(25)]);var inst_12511 = cljs.core.chunked_seq_QMARK_.call(null,inst_12509);var state_12550__$1 = state_12550;if(inst_12511)
{var statearr_12581_12654 = state_12550__$1;(statearr_12581_12654[(1)] = (36));
} else
{var statearr_12582_12655 = state_12550__$1;(statearr_12582_12655[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (13)))
{var inst_12441 = (state_12550[(26)]);var inst_12444 = cljs.core.async.close_BANG_.call(null,inst_12441);var state_12550__$1 = state_12550;var statearr_12583_12656 = state_12550__$1;(statearr_12583_12656[(2)] = inst_12444);
(statearr_12583_12656[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (22)))
{var inst_12462 = (state_12550[(8)]);var inst_12465 = cljs.core.async.close_BANG_.call(null,inst_12462);var state_12550__$1 = state_12550;var statearr_12584_12657 = state_12550__$1;(statearr_12584_12657[(2)] = inst_12465);
(statearr_12584_12657[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (36)))
{var inst_12509 = (state_12550[(25)]);var inst_12513 = cljs.core.chunk_first.call(null,inst_12509);var inst_12514 = cljs.core.chunk_rest.call(null,inst_12509);var inst_12515 = cljs.core.count.call(null,inst_12513);var inst_12490 = inst_12514;var inst_12491 = inst_12513;var inst_12492 = inst_12515;var inst_12493 = (0);var state_12550__$1 = (function (){var statearr_12585 = state_12550;(statearr_12585[(20)] = inst_12490);
(statearr_12585[(9)] = inst_12491);
(statearr_12585[(12)] = inst_12493);
(statearr_12585[(21)] = inst_12492);
return statearr_12585;
})();var statearr_12586_12658 = state_12550__$1;(statearr_12586_12658[(2)] = null);
(statearr_12586_12658[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (41)))
{var inst_12509 = (state_12550[(25)]);var inst_12525 = (state_12550[(2)]);var inst_12526 = cljs.core.next.call(null,inst_12509);var inst_12490 = inst_12526;var inst_12491 = null;var inst_12492 = (0);var inst_12493 = (0);var state_12550__$1 = (function (){var statearr_12587 = state_12550;(statearr_12587[(27)] = inst_12525);
(statearr_12587[(20)] = inst_12490);
(statearr_12587[(9)] = inst_12491);
(statearr_12587[(12)] = inst_12493);
(statearr_12587[(21)] = inst_12492);
return statearr_12587;
})();var statearr_12588_12659 = state_12550__$1;(statearr_12588_12659[(2)] = null);
(statearr_12588_12659[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (43)))
{var state_12550__$1 = state_12550;var statearr_12589_12660 = state_12550__$1;(statearr_12589_12660[(2)] = null);
(statearr_12589_12660[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (29)))
{var inst_12534 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12590_12661 = state_12550__$1;(statearr_12590_12661[(2)] = inst_12534);
(statearr_12590_12661[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (44)))
{var inst_12543 = (state_12550[(2)]);var state_12550__$1 = (function (){var statearr_12591 = state_12550;(statearr_12591[(28)] = inst_12543);
return statearr_12591;
})();var statearr_12592_12662 = state_12550__$1;(statearr_12592_12662[(2)] = null);
(statearr_12592_12662[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (6)))
{var inst_12482 = (state_12550[(29)]);var inst_12481 = cljs.core.deref.call(null,cs);var inst_12482__$1 = cljs.core.keys.call(null,inst_12481);var inst_12483 = cljs.core.count.call(null,inst_12482__$1);var inst_12484 = cljs.core.reset_BANG_.call(null,dctr,inst_12483);var inst_12489 = cljs.core.seq.call(null,inst_12482__$1);var inst_12490 = inst_12489;var inst_12491 = null;var inst_12492 = (0);var inst_12493 = (0);var state_12550__$1 = (function (){var statearr_12593 = state_12550;(statearr_12593[(29)] = inst_12482__$1);
(statearr_12593[(20)] = inst_12490);
(statearr_12593[(9)] = inst_12491);
(statearr_12593[(30)] = inst_12484);
(statearr_12593[(12)] = inst_12493);
(statearr_12593[(21)] = inst_12492);
return statearr_12593;
})();var statearr_12594_12663 = state_12550__$1;(statearr_12594_12663[(2)] = null);
(statearr_12594_12663[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (28)))
{var inst_12490 = (state_12550[(20)]);var inst_12509 = (state_12550[(25)]);var inst_12509__$1 = cljs.core.seq.call(null,inst_12490);var state_12550__$1 = (function (){var statearr_12595 = state_12550;(statearr_12595[(25)] = inst_12509__$1);
return statearr_12595;
})();if(inst_12509__$1)
{var statearr_12596_12664 = state_12550__$1;(statearr_12596_12664[(1)] = (33));
} else
{var statearr_12597_12665 = state_12550__$1;(statearr_12597_12665[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (25)))
{var inst_12493 = (state_12550[(12)]);var inst_12492 = (state_12550[(21)]);var inst_12495 = (inst_12493 < inst_12492);var inst_12496 = inst_12495;var state_12550__$1 = state_12550;if(cljs.core.truth_(inst_12496))
{var statearr_12598_12666 = state_12550__$1;(statearr_12598_12666[(1)] = (27));
} else
{var statearr_12599_12667 = state_12550__$1;(statearr_12599_12667[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (34)))
{var state_12550__$1 = state_12550;var statearr_12600_12668 = state_12550__$1;(statearr_12600_12668[(2)] = null);
(statearr_12600_12668[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (17)))
{var state_12550__$1 = state_12550;var statearr_12601_12669 = state_12550__$1;(statearr_12601_12669[(2)] = null);
(statearr_12601_12669[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (3)))
{var inst_12548 = (state_12550[(2)]);var state_12550__$1 = state_12550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12550__$1,inst_12548);
} else
{if((state_val_12551 === (12)))
{var inst_12477 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12602_12670 = state_12550__$1;(statearr_12602_12670[(2)] = inst_12477);
(statearr_12602_12670[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (2)))
{var state_12550__$1 = state_12550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12550__$1,(4),ch);
} else
{if((state_val_12551 === (23)))
{var state_12550__$1 = state_12550;var statearr_12603_12671 = state_12550__$1;(statearr_12603_12671[(2)] = null);
(statearr_12603_12671[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (35)))
{var inst_12532 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12604_12672 = state_12550__$1;(statearr_12604_12672[(2)] = inst_12532);
(statearr_12604_12672[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (19)))
{var inst_12451 = (state_12550[(7)]);var inst_12455 = cljs.core.chunk_first.call(null,inst_12451);var inst_12456 = cljs.core.chunk_rest.call(null,inst_12451);var inst_12457 = cljs.core.count.call(null,inst_12455);var inst_12431 = inst_12456;var inst_12432 = inst_12455;var inst_12433 = inst_12457;var inst_12434 = (0);var state_12550__$1 = (function (){var statearr_12605 = state_12550;(statearr_12605[(13)] = inst_12432);
(statearr_12605[(14)] = inst_12433);
(statearr_12605[(15)] = inst_12431);
(statearr_12605[(16)] = inst_12434);
return statearr_12605;
})();var statearr_12606_12673 = state_12550__$1;(statearr_12606_12673[(2)] = null);
(statearr_12606_12673[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (11)))
{var inst_12451 = (state_12550[(7)]);var inst_12431 = (state_12550[(15)]);var inst_12451__$1 = cljs.core.seq.call(null,inst_12431);var state_12550__$1 = (function (){var statearr_12607 = state_12550;(statearr_12607[(7)] = inst_12451__$1);
return statearr_12607;
})();if(inst_12451__$1)
{var statearr_12608_12674 = state_12550__$1;(statearr_12608_12674[(1)] = (16));
} else
{var statearr_12609_12675 = state_12550__$1;(statearr_12609_12675[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (9)))
{var inst_12479 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12610_12676 = state_12550__$1;(statearr_12610_12676[(2)] = inst_12479);
(statearr_12610_12676[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (5)))
{var inst_12429 = cljs.core.deref.call(null,cs);var inst_12430 = cljs.core.seq.call(null,inst_12429);var inst_12431 = inst_12430;var inst_12432 = null;var inst_12433 = (0);var inst_12434 = (0);var state_12550__$1 = (function (){var statearr_12611 = state_12550;(statearr_12611[(13)] = inst_12432);
(statearr_12611[(14)] = inst_12433);
(statearr_12611[(15)] = inst_12431);
(statearr_12611[(16)] = inst_12434);
return statearr_12611;
})();var statearr_12612_12677 = state_12550__$1;(statearr_12612_12677[(2)] = null);
(statearr_12612_12677[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (14)))
{var state_12550__$1 = state_12550;var statearr_12613_12678 = state_12550__$1;(statearr_12613_12678[(2)] = null);
(statearr_12613_12678[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (45)))
{var inst_12540 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12614_12679 = state_12550__$1;(statearr_12614_12679[(2)] = inst_12540);
(statearr_12614_12679[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (26)))
{var inst_12482 = (state_12550[(29)]);var inst_12536 = (state_12550[(2)]);var inst_12537 = cljs.core.seq.call(null,inst_12482);var state_12550__$1 = (function (){var statearr_12615 = state_12550;(statearr_12615[(31)] = inst_12536);
return statearr_12615;
})();if(inst_12537)
{var statearr_12616_12680 = state_12550__$1;(statearr_12616_12680[(1)] = (42));
} else
{var statearr_12617_12681 = state_12550__$1;(statearr_12617_12681[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (16)))
{var inst_12451 = (state_12550[(7)]);var inst_12453 = cljs.core.chunked_seq_QMARK_.call(null,inst_12451);var state_12550__$1 = state_12550;if(inst_12453)
{var statearr_12618_12682 = state_12550__$1;(statearr_12618_12682[(1)] = (19));
} else
{var statearr_12619_12683 = state_12550__$1;(statearr_12619_12683[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (38)))
{var inst_12529 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12620_12684 = state_12550__$1;(statearr_12620_12684[(2)] = inst_12529);
(statearr_12620_12684[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (30)))
{var state_12550__$1 = state_12550;var statearr_12621_12685 = state_12550__$1;(statearr_12621_12685[(2)] = null);
(statearr_12621_12685[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (10)))
{var inst_12432 = (state_12550[(13)]);var inst_12434 = (state_12550[(16)]);var inst_12440 = cljs.core._nth.call(null,inst_12432,inst_12434);var inst_12441 = cljs.core.nth.call(null,inst_12440,(0),null);var inst_12442 = cljs.core.nth.call(null,inst_12440,(1),null);var state_12550__$1 = (function (){var statearr_12622 = state_12550;(statearr_12622[(26)] = inst_12441);
return statearr_12622;
})();if(cljs.core.truth_(inst_12442))
{var statearr_12623_12686 = state_12550__$1;(statearr_12623_12686[(1)] = (13));
} else
{var statearr_12624_12687 = state_12550__$1;(statearr_12624_12687[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (18)))
{var inst_12475 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12625_12688 = state_12550__$1;(statearr_12625_12688[(2)] = inst_12475);
(statearr_12625_12688[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (42)))
{var state_12550__$1 = state_12550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12550__$1,(45),dchan);
} else
{if((state_val_12551 === (37)))
{var inst_12518 = (state_12550[(23)]);var inst_12509 = (state_12550[(25)]);var inst_12422 = (state_12550[(10)]);var inst_12518__$1 = cljs.core.first.call(null,inst_12509);var inst_12519 = cljs.core.async.put_BANG_.call(null,inst_12518__$1,inst_12422,done);var state_12550__$1 = (function (){var statearr_12626 = state_12550;(statearr_12626[(23)] = inst_12518__$1);
return statearr_12626;
})();if(cljs.core.truth_(inst_12519))
{var statearr_12627_12689 = state_12550__$1;(statearr_12627_12689[(1)] = (39));
} else
{var statearr_12628_12690 = state_12550__$1;(statearr_12628_12690[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (8)))
{var inst_12433 = (state_12550[(14)]);var inst_12434 = (state_12550[(16)]);var inst_12436 = (inst_12434 < inst_12433);var inst_12437 = inst_12436;var state_12550__$1 = state_12550;if(cljs.core.truth_(inst_12437))
{var statearr_12629_12691 = state_12550__$1;(statearr_12629_12691[(1)] = (10));
} else
{var statearr_12630_12692 = state_12550__$1;(statearr_12630_12692[(1)] = (11));
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
});})(c__6225__auto___12638,cs,m,dchan,dctr,done))
;return ((function (switch__6210__auto__,c__6225__auto___12638,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_12634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12634[(0)] = state_machine__6211__auto__);
(statearr_12634[(1)] = (1));
return statearr_12634;
});
var state_machine__6211__auto____1 = (function (state_12550){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_12550);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e12635){if((e12635 instanceof Object))
{var ex__6214__auto__ = e12635;var statearr_12636_12693 = state_12550;(statearr_12636_12693[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12550);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12694 = state_12550;
state_12550 = G__12694;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_12550){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_12550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___12638,cs,m,dchan,dctr,done))
})();var state__6227__auto__ = (function (){var statearr_12637 = f__6226__auto__.call(null);(statearr_12637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___12638);
return statearr_12637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___12638,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12696 = {};return obj12696;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3556__auto__ = m;if(and__3556__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3556__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4195__auto__ = (((m == null))?null:m);return (function (){var or__3568__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3556__auto__ = m;if(and__3556__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3556__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4195__auto__ = (((m == null))?null:m);return (function (){var or__3568__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3556__auto__ = m;if(and__3556__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3556__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4195__auto__ = (((m == null))?null:m);return (function (){var or__3568__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3556__auto__ = m;if(and__3556__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3556__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4195__auto__ = (((m == null))?null:m);return (function (){var or__3568__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3556__auto__ = m;if(and__3556__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3556__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4195__auto__ = (((m == null))?null:m);return (function (){var or__3568__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12697){var map__12702 = p__12697;var map__12702__$1 = ((cljs.core.seq_QMARK_.call(null,map__12702))?cljs.core.apply.call(null,cljs.core.hash_map,map__12702):map__12702);var opts = map__12702__$1;var statearr_12703_12706 = state;(statearr_12703_12706[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12702,map__12702__$1,opts){
return (function (val){var statearr_12704_12707 = state;(statearr_12704_12707[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12702,map__12702__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_12705_12708 = state;(statearr_12705_12708[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12697 = null;if (arguments.length > 3) {
  p__12697 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12697);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12709){
var state = cljs.core.first(arglist__12709);
arglist__12709 = cljs.core.next(arglist__12709);
var cont_block = cljs.core.first(arglist__12709);
arglist__12709 = cljs.core.next(arglist__12709);
var ports = cljs.core.first(arglist__12709);
var p__12697 = cljs.core.rest(arglist__12709);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12697);
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
;var m = (function (){if(typeof cljs.core.async.t12829 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12829 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12830){
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
this.meta12830 = meta12830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12829.cljs$lang$type = true;
cljs.core.async.t12829.cljs$lang$ctorStr = "cljs.core.async/t12829";
cljs.core.async.t12829.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4135__auto__,writer__4136__auto__,opt__4137__auto__){return cljs.core._write.call(null,writer__4136__auto__,"cljs.core.async/t12829");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12829.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12829.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12829.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12829.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12829.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12829.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12829.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12831){var self__ = this;
var _12831__$1 = this;return self__.meta12830;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12831,meta12830__$1){var self__ = this;
var _12831__$1 = this;return (new cljs.core.async.t12829(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12830__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12829 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12829(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12830){return (new cljs.core.async.t12829(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12830));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12829(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6225__auto___12948 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___12948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___12948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12901){var state_val_12902 = (state_12901[(1)]);if((state_val_12902 === (7)))
{var inst_12845 = (state_12901[(7)]);var inst_12850 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12845);var state_12901__$1 = state_12901;var statearr_12903_12949 = state_12901__$1;(statearr_12903_12949[(2)] = inst_12850);
(statearr_12903_12949[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (20)))
{var inst_12860 = (state_12901[(8)]);var state_12901__$1 = state_12901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12901__$1,(23),out,inst_12860);
} else
{if((state_val_12902 === (1)))
{var inst_12835 = (state_12901[(9)]);var inst_12835__$1 = calc_state.call(null);var inst_12836 = cljs.core.seq_QMARK_.call(null,inst_12835__$1);var state_12901__$1 = (function (){var statearr_12904 = state_12901;(statearr_12904[(9)] = inst_12835__$1);
return statearr_12904;
})();if(inst_12836)
{var statearr_12905_12950 = state_12901__$1;(statearr_12905_12950[(1)] = (2));
} else
{var statearr_12906_12951 = state_12901__$1;(statearr_12906_12951[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (24)))
{var inst_12853 = (state_12901[(10)]);var inst_12845 = inst_12853;var state_12901__$1 = (function (){var statearr_12907 = state_12901;(statearr_12907[(7)] = inst_12845);
return statearr_12907;
})();var statearr_12908_12952 = state_12901__$1;(statearr_12908_12952[(2)] = null);
(statearr_12908_12952[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (4)))
{var inst_12835 = (state_12901[(9)]);var inst_12841 = (state_12901[(2)]);var inst_12842 = cljs.core.get.call(null,inst_12841,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12843 = cljs.core.get.call(null,inst_12841,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12844 = cljs.core.get.call(null,inst_12841,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12845 = inst_12835;var state_12901__$1 = (function (){var statearr_12909 = state_12901;(statearr_12909[(7)] = inst_12845);
(statearr_12909[(11)] = inst_12844);
(statearr_12909[(12)] = inst_12843);
(statearr_12909[(13)] = inst_12842);
return statearr_12909;
})();var statearr_12910_12953 = state_12901__$1;(statearr_12910_12953[(2)] = null);
(statearr_12910_12953[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (15)))
{var state_12901__$1 = state_12901;var statearr_12911_12954 = state_12901__$1;(statearr_12911_12954[(2)] = null);
(statearr_12911_12954[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (21)))
{var inst_12853 = (state_12901[(10)]);var inst_12845 = inst_12853;var state_12901__$1 = (function (){var statearr_12912 = state_12901;(statearr_12912[(7)] = inst_12845);
return statearr_12912;
})();var statearr_12913_12955 = state_12901__$1;(statearr_12913_12955[(2)] = null);
(statearr_12913_12955[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (13)))
{var inst_12897 = (state_12901[(2)]);var state_12901__$1 = state_12901;var statearr_12914_12956 = state_12901__$1;(statearr_12914_12956[(2)] = inst_12897);
(statearr_12914_12956[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (22)))
{var inst_12895 = (state_12901[(2)]);var state_12901__$1 = state_12901;var statearr_12915_12957 = state_12901__$1;(statearr_12915_12957[(2)] = inst_12895);
(statearr_12915_12957[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (6)))
{var inst_12899 = (state_12901[(2)]);var state_12901__$1 = state_12901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12901__$1,inst_12899);
} else
{if((state_val_12902 === (25)))
{var state_12901__$1 = state_12901;var statearr_12916_12958 = state_12901__$1;(statearr_12916_12958[(2)] = null);
(statearr_12916_12958[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (17)))
{var inst_12875 = (state_12901[(14)]);var state_12901__$1 = state_12901;var statearr_12917_12959 = state_12901__$1;(statearr_12917_12959[(2)] = inst_12875);
(statearr_12917_12959[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (3)))
{var inst_12835 = (state_12901[(9)]);var state_12901__$1 = state_12901;var statearr_12918_12960 = state_12901__$1;(statearr_12918_12960[(2)] = inst_12835);
(statearr_12918_12960[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (12)))
{var inst_12856 = (state_12901[(15)]);var inst_12861 = (state_12901[(16)]);var inst_12875 = (state_12901[(14)]);var inst_12875__$1 = inst_12856.call(null,inst_12861);var state_12901__$1 = (function (){var statearr_12919 = state_12901;(statearr_12919[(14)] = inst_12875__$1);
return statearr_12919;
})();if(cljs.core.truth_(inst_12875__$1))
{var statearr_12920_12961 = state_12901__$1;(statearr_12920_12961[(1)] = (17));
} else
{var statearr_12921_12962 = state_12901__$1;(statearr_12921_12962[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (2)))
{var inst_12835 = (state_12901[(9)]);var inst_12838 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12835);var state_12901__$1 = state_12901;var statearr_12922_12963 = state_12901__$1;(statearr_12922_12963[(2)] = inst_12838);
(statearr_12922_12963[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (23)))
{var inst_12886 = (state_12901[(2)]);var state_12901__$1 = state_12901;if(cljs.core.truth_(inst_12886))
{var statearr_12923_12964 = state_12901__$1;(statearr_12923_12964[(1)] = (24));
} else
{var statearr_12924_12965 = state_12901__$1;(statearr_12924_12965[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (19)))
{var inst_12883 = (state_12901[(2)]);var state_12901__$1 = state_12901;if(cljs.core.truth_(inst_12883))
{var statearr_12925_12966 = state_12901__$1;(statearr_12925_12966[(1)] = (20));
} else
{var statearr_12926_12967 = state_12901__$1;(statearr_12926_12967[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (11)))
{var inst_12860 = (state_12901[(8)]);var inst_12866 = (inst_12860 == null);var state_12901__$1 = state_12901;if(cljs.core.truth_(inst_12866))
{var statearr_12927_12968 = state_12901__$1;(statearr_12927_12968[(1)] = (14));
} else
{var statearr_12928_12969 = state_12901__$1;(statearr_12928_12969[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (9)))
{var inst_12853 = (state_12901[(10)]);var inst_12853__$1 = (state_12901[(2)]);var inst_12854 = cljs.core.get.call(null,inst_12853__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12855 = cljs.core.get.call(null,inst_12853__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12856 = cljs.core.get.call(null,inst_12853__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12901__$1 = (function (){var statearr_12929 = state_12901;(statearr_12929[(15)] = inst_12856);
(statearr_12929[(17)] = inst_12855);
(statearr_12929[(10)] = inst_12853__$1);
return statearr_12929;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_12901__$1,(10),inst_12854);
} else
{if((state_val_12902 === (5)))
{var inst_12845 = (state_12901[(7)]);var inst_12848 = cljs.core.seq_QMARK_.call(null,inst_12845);var state_12901__$1 = state_12901;if(inst_12848)
{var statearr_12930_12970 = state_12901__$1;(statearr_12930_12970[(1)] = (7));
} else
{var statearr_12931_12971 = state_12901__$1;(statearr_12931_12971[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (14)))
{var inst_12861 = (state_12901[(16)]);var inst_12868 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12861);var state_12901__$1 = state_12901;var statearr_12932_12972 = state_12901__$1;(statearr_12932_12972[(2)] = inst_12868);
(statearr_12932_12972[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (26)))
{var inst_12891 = (state_12901[(2)]);var state_12901__$1 = state_12901;var statearr_12933_12973 = state_12901__$1;(statearr_12933_12973[(2)] = inst_12891);
(statearr_12933_12973[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (16)))
{var inst_12871 = (state_12901[(2)]);var inst_12872 = calc_state.call(null);var inst_12845 = inst_12872;var state_12901__$1 = (function (){var statearr_12934 = state_12901;(statearr_12934[(7)] = inst_12845);
(statearr_12934[(18)] = inst_12871);
return statearr_12934;
})();var statearr_12935_12974 = state_12901__$1;(statearr_12935_12974[(2)] = null);
(statearr_12935_12974[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (10)))
{var inst_12861 = (state_12901[(16)]);var inst_12860 = (state_12901[(8)]);var inst_12859 = (state_12901[(2)]);var inst_12860__$1 = cljs.core.nth.call(null,inst_12859,(0),null);var inst_12861__$1 = cljs.core.nth.call(null,inst_12859,(1),null);var inst_12862 = (inst_12860__$1 == null);var inst_12863 = cljs.core._EQ_.call(null,inst_12861__$1,change);var inst_12864 = (inst_12862) || (inst_12863);var state_12901__$1 = (function (){var statearr_12936 = state_12901;(statearr_12936[(16)] = inst_12861__$1);
(statearr_12936[(8)] = inst_12860__$1);
return statearr_12936;
})();if(cljs.core.truth_(inst_12864))
{var statearr_12937_12975 = state_12901__$1;(statearr_12937_12975[(1)] = (11));
} else
{var statearr_12938_12976 = state_12901__$1;(statearr_12938_12976[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (18)))
{var inst_12856 = (state_12901[(15)]);var inst_12861 = (state_12901[(16)]);var inst_12855 = (state_12901[(17)]);var inst_12878 = cljs.core.empty_QMARK_.call(null,inst_12856);var inst_12879 = inst_12855.call(null,inst_12861);var inst_12880 = cljs.core.not.call(null,inst_12879);var inst_12881 = (inst_12878) && (inst_12880);var state_12901__$1 = state_12901;var statearr_12939_12977 = state_12901__$1;(statearr_12939_12977[(2)] = inst_12881);
(statearr_12939_12977[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (8)))
{var inst_12845 = (state_12901[(7)]);var state_12901__$1 = state_12901;var statearr_12940_12978 = state_12901__$1;(statearr_12940_12978[(2)] = inst_12845);
(statearr_12940_12978[(1)] = (9));
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
});})(c__6225__auto___12948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6210__auto__,c__6225__auto___12948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_12944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12944[(0)] = state_machine__6211__auto__);
(statearr_12944[(1)] = (1));
return statearr_12944;
});
var state_machine__6211__auto____1 = (function (state_12901){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_12901);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e12945){if((e12945 instanceof Object))
{var ex__6214__auto__ = e12945;var statearr_12946_12979 = state_12901;(statearr_12946_12979[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12901);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12980 = state_12901;
state_12901 = G__12980;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_12901){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_12901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___12948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6227__auto__ = (function (){var statearr_12947 = f__6226__auto__.call(null);(statearr_12947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___12948);
return statearr_12947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___12948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12982 = {};return obj12982;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3556__auto__ = p;if(and__3556__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3556__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4195__auto__ = (((p == null))?null:p);return (function (){var or__3568__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3556__auto__ = p;if(and__3556__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3556__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4195__auto__ = (((p == null))?null:p);return (function (){var or__3568__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3556__auto__ = p;if(and__3556__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3556__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4195__auto__ = (((p == null))?null:p);return (function (){var or__3568__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3556__auto__ = p;if(and__3556__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3556__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4195__auto__ = (((p == null))?null:p);return (function (){var or__3568__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
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
return (function (topic){var or__3568__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3568__auto__))
{return or__3568__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3568__auto__,mults){
return (function (p1__12983_SHARP_){if(cljs.core.truth_(p1__12983_SHARP_.call(null,topic)))
{return p1__12983_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12983_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3568__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13106 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13106 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13107){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13107 = meta13107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13106.cljs$lang$type = true;
cljs.core.async.t13106.cljs$lang$ctorStr = "cljs.core.async/t13106";
cljs.core.async.t13106.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4135__auto__,writer__4136__auto__,opt__4137__auto__){return cljs.core._write.call(null,writer__4136__auto__,"cljs.core.async/t13106");
});})(mults,ensure_mult))
;
cljs.core.async.t13106.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13106.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13106.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13106.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13106.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13106.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13108){var self__ = this;
var _13108__$1 = this;return self__.meta13107;
});})(mults,ensure_mult))
;
cljs.core.async.t13106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13108,meta13107__$1){var self__ = this;
var _13108__$1 = this;return (new cljs.core.async.t13106(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13107__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13106 = ((function (mults,ensure_mult){
return (function __GT_t13106(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13107){return (new cljs.core.async.t13106(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13107));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13106(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6225__auto___13228 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___13228,mults,ensure_mult,p){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___13228,mults,ensure_mult,p){
return (function (state_13180){var state_val_13181 = (state_13180[(1)]);if((state_val_13181 === (7)))
{var inst_13176 = (state_13180[(2)]);var state_13180__$1 = state_13180;var statearr_13182_13229 = state_13180__$1;(statearr_13182_13229[(2)] = inst_13176);
(statearr_13182_13229[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (20)))
{var state_13180__$1 = state_13180;var statearr_13183_13230 = state_13180__$1;(statearr_13183_13230[(2)] = null);
(statearr_13183_13230[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (1)))
{var state_13180__$1 = state_13180;var statearr_13184_13231 = state_13180__$1;(statearr_13184_13231[(2)] = null);
(statearr_13184_13231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (24)))
{var inst_13159 = (state_13180[(7)]);var inst_13168 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13159);var state_13180__$1 = state_13180;var statearr_13185_13232 = state_13180__$1;(statearr_13185_13232[(2)] = inst_13168);
(statearr_13185_13232[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (4)))
{var inst_13111 = (state_13180[(8)]);var inst_13111__$1 = (state_13180[(2)]);var inst_13112 = (inst_13111__$1 == null);var state_13180__$1 = (function (){var statearr_13186 = state_13180;(statearr_13186[(8)] = inst_13111__$1);
return statearr_13186;
})();if(cljs.core.truth_(inst_13112))
{var statearr_13187_13233 = state_13180__$1;(statearr_13187_13233[(1)] = (5));
} else
{var statearr_13188_13234 = state_13180__$1;(statearr_13188_13234[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (15)))
{var inst_13153 = (state_13180[(2)]);var state_13180__$1 = state_13180;var statearr_13189_13235 = state_13180__$1;(statearr_13189_13235[(2)] = inst_13153);
(statearr_13189_13235[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (21)))
{var inst_13173 = (state_13180[(2)]);var state_13180__$1 = (function (){var statearr_13190 = state_13180;(statearr_13190[(9)] = inst_13173);
return statearr_13190;
})();var statearr_13191_13236 = state_13180__$1;(statearr_13191_13236[(2)] = null);
(statearr_13191_13236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (13)))
{var inst_13135 = (state_13180[(10)]);var inst_13137 = cljs.core.chunked_seq_QMARK_.call(null,inst_13135);var state_13180__$1 = state_13180;if(inst_13137)
{var statearr_13192_13237 = state_13180__$1;(statearr_13192_13237[(1)] = (16));
} else
{var statearr_13193_13238 = state_13180__$1;(statearr_13193_13238[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (22)))
{var inst_13165 = (state_13180[(2)]);var state_13180__$1 = state_13180;if(cljs.core.truth_(inst_13165))
{var statearr_13194_13239 = state_13180__$1;(statearr_13194_13239[(1)] = (23));
} else
{var statearr_13195_13240 = state_13180__$1;(statearr_13195_13240[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (6)))
{var inst_13159 = (state_13180[(7)]);var inst_13161 = (state_13180[(11)]);var inst_13111 = (state_13180[(8)]);var inst_13159__$1 = topic_fn.call(null,inst_13111);var inst_13160 = cljs.core.deref.call(null,mults);var inst_13161__$1 = cljs.core.get.call(null,inst_13160,inst_13159__$1);var state_13180__$1 = (function (){var statearr_13196 = state_13180;(statearr_13196[(7)] = inst_13159__$1);
(statearr_13196[(11)] = inst_13161__$1);
return statearr_13196;
})();if(cljs.core.truth_(inst_13161__$1))
{var statearr_13197_13241 = state_13180__$1;(statearr_13197_13241[(1)] = (19));
} else
{var statearr_13198_13242 = state_13180__$1;(statearr_13198_13242[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (25)))
{var inst_13170 = (state_13180[(2)]);var state_13180__$1 = state_13180;var statearr_13199_13243 = state_13180__$1;(statearr_13199_13243[(2)] = inst_13170);
(statearr_13199_13243[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (17)))
{var inst_13135 = (state_13180[(10)]);var inst_13144 = cljs.core.first.call(null,inst_13135);var inst_13145 = cljs.core.async.muxch_STAR_.call(null,inst_13144);var inst_13146 = cljs.core.async.close_BANG_.call(null,inst_13145);var inst_13147 = cljs.core.next.call(null,inst_13135);var inst_13121 = inst_13147;var inst_13122 = null;var inst_13123 = (0);var inst_13124 = (0);var state_13180__$1 = (function (){var statearr_13200 = state_13180;(statearr_13200[(12)] = inst_13121);
(statearr_13200[(13)] = inst_13146);
(statearr_13200[(14)] = inst_13123);
(statearr_13200[(15)] = inst_13122);
(statearr_13200[(16)] = inst_13124);
return statearr_13200;
})();var statearr_13201_13244 = state_13180__$1;(statearr_13201_13244[(2)] = null);
(statearr_13201_13244[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (3)))
{var inst_13178 = (state_13180[(2)]);var state_13180__$1 = state_13180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13180__$1,inst_13178);
} else
{if((state_val_13181 === (12)))
{var inst_13155 = (state_13180[(2)]);var state_13180__$1 = state_13180;var statearr_13202_13245 = state_13180__$1;(statearr_13202_13245[(2)] = inst_13155);
(statearr_13202_13245[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (2)))
{var state_13180__$1 = state_13180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13180__$1,(4),ch);
} else
{if((state_val_13181 === (23)))
{var state_13180__$1 = state_13180;var statearr_13203_13246 = state_13180__$1;(statearr_13203_13246[(2)] = null);
(statearr_13203_13246[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (19)))
{var inst_13161 = (state_13180[(11)]);var inst_13111 = (state_13180[(8)]);var inst_13163 = cljs.core.async.muxch_STAR_.call(null,inst_13161);var state_13180__$1 = state_13180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13180__$1,(22),inst_13163,inst_13111);
} else
{if((state_val_13181 === (11)))
{var inst_13121 = (state_13180[(12)]);var inst_13135 = (state_13180[(10)]);var inst_13135__$1 = cljs.core.seq.call(null,inst_13121);var state_13180__$1 = (function (){var statearr_13204 = state_13180;(statearr_13204[(10)] = inst_13135__$1);
return statearr_13204;
})();if(inst_13135__$1)
{var statearr_13205_13247 = state_13180__$1;(statearr_13205_13247[(1)] = (13));
} else
{var statearr_13206_13248 = state_13180__$1;(statearr_13206_13248[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (9)))
{var inst_13157 = (state_13180[(2)]);var state_13180__$1 = state_13180;var statearr_13207_13249 = state_13180__$1;(statearr_13207_13249[(2)] = inst_13157);
(statearr_13207_13249[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (5)))
{var inst_13118 = cljs.core.deref.call(null,mults);var inst_13119 = cljs.core.vals.call(null,inst_13118);var inst_13120 = cljs.core.seq.call(null,inst_13119);var inst_13121 = inst_13120;var inst_13122 = null;var inst_13123 = (0);var inst_13124 = (0);var state_13180__$1 = (function (){var statearr_13208 = state_13180;(statearr_13208[(12)] = inst_13121);
(statearr_13208[(14)] = inst_13123);
(statearr_13208[(15)] = inst_13122);
(statearr_13208[(16)] = inst_13124);
return statearr_13208;
})();var statearr_13209_13250 = state_13180__$1;(statearr_13209_13250[(2)] = null);
(statearr_13209_13250[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (14)))
{var state_13180__$1 = state_13180;var statearr_13213_13251 = state_13180__$1;(statearr_13213_13251[(2)] = null);
(statearr_13213_13251[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (16)))
{var inst_13135 = (state_13180[(10)]);var inst_13139 = cljs.core.chunk_first.call(null,inst_13135);var inst_13140 = cljs.core.chunk_rest.call(null,inst_13135);var inst_13141 = cljs.core.count.call(null,inst_13139);var inst_13121 = inst_13140;var inst_13122 = inst_13139;var inst_13123 = inst_13141;var inst_13124 = (0);var state_13180__$1 = (function (){var statearr_13214 = state_13180;(statearr_13214[(12)] = inst_13121);
(statearr_13214[(14)] = inst_13123);
(statearr_13214[(15)] = inst_13122);
(statearr_13214[(16)] = inst_13124);
return statearr_13214;
})();var statearr_13215_13252 = state_13180__$1;(statearr_13215_13252[(2)] = null);
(statearr_13215_13252[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (10)))
{var inst_13121 = (state_13180[(12)]);var inst_13123 = (state_13180[(14)]);var inst_13122 = (state_13180[(15)]);var inst_13124 = (state_13180[(16)]);var inst_13129 = cljs.core._nth.call(null,inst_13122,inst_13124);var inst_13130 = cljs.core.async.muxch_STAR_.call(null,inst_13129);var inst_13131 = cljs.core.async.close_BANG_.call(null,inst_13130);var inst_13132 = (inst_13124 + (1));var tmp13210 = inst_13121;var tmp13211 = inst_13123;var tmp13212 = inst_13122;var inst_13121__$1 = tmp13210;var inst_13122__$1 = tmp13212;var inst_13123__$1 = tmp13211;var inst_13124__$1 = inst_13132;var state_13180__$1 = (function (){var statearr_13216 = state_13180;(statearr_13216[(17)] = inst_13131);
(statearr_13216[(12)] = inst_13121__$1);
(statearr_13216[(14)] = inst_13123__$1);
(statearr_13216[(15)] = inst_13122__$1);
(statearr_13216[(16)] = inst_13124__$1);
return statearr_13216;
})();var statearr_13217_13253 = state_13180__$1;(statearr_13217_13253[(2)] = null);
(statearr_13217_13253[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (18)))
{var inst_13150 = (state_13180[(2)]);var state_13180__$1 = state_13180;var statearr_13218_13254 = state_13180__$1;(statearr_13218_13254[(2)] = inst_13150);
(statearr_13218_13254[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13181 === (8)))
{var inst_13123 = (state_13180[(14)]);var inst_13124 = (state_13180[(16)]);var inst_13126 = (inst_13124 < inst_13123);var inst_13127 = inst_13126;var state_13180__$1 = state_13180;if(cljs.core.truth_(inst_13127))
{var statearr_13219_13255 = state_13180__$1;(statearr_13219_13255[(1)] = (10));
} else
{var statearr_13220_13256 = state_13180__$1;(statearr_13220_13256[(1)] = (11));
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
});})(c__6225__auto___13228,mults,ensure_mult,p))
;return ((function (switch__6210__auto__,c__6225__auto___13228,mults,ensure_mult,p){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_13224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13224[(0)] = state_machine__6211__auto__);
(statearr_13224[(1)] = (1));
return statearr_13224;
});
var state_machine__6211__auto____1 = (function (state_13180){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_13180);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e13225){if((e13225 instanceof Object))
{var ex__6214__auto__ = e13225;var statearr_13226_13257 = state_13180;(statearr_13226_13257[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13225;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13258 = state_13180;
state_13180 = G__13258;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_13180){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_13180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___13228,mults,ensure_mult,p))
})();var state__6227__auto__ = (function (){var statearr_13227 = f__6226__auto__.call(null);(statearr_13227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___13228);
return statearr_13227;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___13228,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6225__auto___13395 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___13395,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___13395,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13365){var state_val_13366 = (state_13365[(1)]);if((state_val_13366 === (7)))
{var state_13365__$1 = state_13365;var statearr_13367_13396 = state_13365__$1;(statearr_13367_13396[(2)] = null);
(statearr_13367_13396[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (1)))
{var state_13365__$1 = state_13365;var statearr_13368_13397 = state_13365__$1;(statearr_13368_13397[(2)] = null);
(statearr_13368_13397[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (4)))
{var inst_13329 = (state_13365[(7)]);var inst_13331 = (inst_13329 < cnt);var state_13365__$1 = state_13365;if(cljs.core.truth_(inst_13331))
{var statearr_13369_13398 = state_13365__$1;(statearr_13369_13398[(1)] = (6));
} else
{var statearr_13370_13399 = state_13365__$1;(statearr_13370_13399[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (15)))
{var inst_13361 = (state_13365[(2)]);var state_13365__$1 = state_13365;var statearr_13371_13400 = state_13365__$1;(statearr_13371_13400[(2)] = inst_13361);
(statearr_13371_13400[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (13)))
{var inst_13354 = cljs.core.async.close_BANG_.call(null,out);var state_13365__$1 = state_13365;var statearr_13372_13401 = state_13365__$1;(statearr_13372_13401[(2)] = inst_13354);
(statearr_13372_13401[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (6)))
{var state_13365__$1 = state_13365;var statearr_13373_13402 = state_13365__$1;(statearr_13373_13402[(2)] = null);
(statearr_13373_13402[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (3)))
{var inst_13363 = (state_13365[(2)]);var state_13365__$1 = state_13365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13365__$1,inst_13363);
} else
{if((state_val_13366 === (12)))
{var inst_13351 = (state_13365[(8)]);var inst_13351__$1 = (state_13365[(2)]);var inst_13352 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13351__$1);var state_13365__$1 = (function (){var statearr_13374 = state_13365;(statearr_13374[(8)] = inst_13351__$1);
return statearr_13374;
})();if(cljs.core.truth_(inst_13352))
{var statearr_13375_13403 = state_13365__$1;(statearr_13375_13403[(1)] = (13));
} else
{var statearr_13376_13404 = state_13365__$1;(statearr_13376_13404[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (2)))
{var inst_13328 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13329 = (0);var state_13365__$1 = (function (){var statearr_13377 = state_13365;(statearr_13377[(9)] = inst_13328);
(statearr_13377[(7)] = inst_13329);
return statearr_13377;
})();var statearr_13378_13405 = state_13365__$1;(statearr_13378_13405[(2)] = null);
(statearr_13378_13405[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (11)))
{var inst_13329 = (state_13365[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13365,(10),Object,null,(9));var inst_13338 = chs__$1.call(null,inst_13329);var inst_13339 = done.call(null,inst_13329);var inst_13340 = cljs.core.async.take_BANG_.call(null,inst_13338,inst_13339);var state_13365__$1 = state_13365;var statearr_13379_13406 = state_13365__$1;(statearr_13379_13406[(2)] = inst_13340);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13365__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (9)))
{var inst_13329 = (state_13365[(7)]);var inst_13342 = (state_13365[(2)]);var inst_13343 = (inst_13329 + (1));var inst_13329__$1 = inst_13343;var state_13365__$1 = (function (){var statearr_13380 = state_13365;(statearr_13380[(10)] = inst_13342);
(statearr_13380[(7)] = inst_13329__$1);
return statearr_13380;
})();var statearr_13381_13407 = state_13365__$1;(statearr_13381_13407[(2)] = null);
(statearr_13381_13407[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (5)))
{var inst_13349 = (state_13365[(2)]);var state_13365__$1 = (function (){var statearr_13382 = state_13365;(statearr_13382[(11)] = inst_13349);
return statearr_13382;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13365__$1,(12),dchan);
} else
{if((state_val_13366 === (14)))
{var inst_13351 = (state_13365[(8)]);var inst_13356 = cljs.core.apply.call(null,f,inst_13351);var state_13365__$1 = state_13365;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13365__$1,(16),out,inst_13356);
} else
{if((state_val_13366 === (16)))
{var inst_13358 = (state_13365[(2)]);var state_13365__$1 = (function (){var statearr_13383 = state_13365;(statearr_13383[(12)] = inst_13358);
return statearr_13383;
})();var statearr_13384_13408 = state_13365__$1;(statearr_13384_13408[(2)] = null);
(statearr_13384_13408[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (10)))
{var inst_13333 = (state_13365[(2)]);var inst_13334 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13365__$1 = (function (){var statearr_13385 = state_13365;(statearr_13385[(13)] = inst_13333);
return statearr_13385;
})();var statearr_13386_13409 = state_13365__$1;(statearr_13386_13409[(2)] = inst_13334);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13365__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13366 === (8)))
{var inst_13347 = (state_13365[(2)]);var state_13365__$1 = state_13365;var statearr_13387_13410 = state_13365__$1;(statearr_13387_13410[(2)] = inst_13347);
(statearr_13387_13410[(1)] = (5));
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
});})(c__6225__auto___13395,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6210__auto__,c__6225__auto___13395,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_13391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13391[(0)] = state_machine__6211__auto__);
(statearr_13391[(1)] = (1));
return statearr_13391;
});
var state_machine__6211__auto____1 = (function (state_13365){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_13365);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e13392){if((e13392 instanceof Object))
{var ex__6214__auto__ = e13392;var statearr_13393_13411 = state_13365;(statearr_13393_13411[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13365);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13412 = state_13365;
state_13365 = G__13412;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_13365){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_13365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___13395,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6227__auto__ = (function (){var statearr_13394 = f__6226__auto__.call(null);(statearr_13394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___13395);
return statearr_13394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___13395,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6225__auto___13520 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___13520,out){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___13520,out){
return (function (state_13496){var state_val_13497 = (state_13496[(1)]);if((state_val_13497 === (7)))
{var inst_13475 = (state_13496[(7)]);var inst_13476 = (state_13496[(8)]);var inst_13475__$1 = (state_13496[(2)]);var inst_13476__$1 = cljs.core.nth.call(null,inst_13475__$1,(0),null);var inst_13477 = cljs.core.nth.call(null,inst_13475__$1,(1),null);var inst_13478 = (inst_13476__$1 == null);var state_13496__$1 = (function (){var statearr_13498 = state_13496;(statearr_13498[(9)] = inst_13477);
(statearr_13498[(7)] = inst_13475__$1);
(statearr_13498[(8)] = inst_13476__$1);
return statearr_13498;
})();if(cljs.core.truth_(inst_13478))
{var statearr_13499_13521 = state_13496__$1;(statearr_13499_13521[(1)] = (8));
} else
{var statearr_13500_13522 = state_13496__$1;(statearr_13500_13522[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (1)))
{var inst_13467 = cljs.core.vec.call(null,chs);var inst_13468 = inst_13467;var state_13496__$1 = (function (){var statearr_13501 = state_13496;(statearr_13501[(10)] = inst_13468);
return statearr_13501;
})();var statearr_13502_13523 = state_13496__$1;(statearr_13502_13523[(2)] = null);
(statearr_13502_13523[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (4)))
{var inst_13468 = (state_13496[(10)]);var state_13496__$1 = state_13496;return cljs.core.async.ioc_alts_BANG_.call(null,state_13496__$1,(7),inst_13468);
} else
{if((state_val_13497 === (6)))
{var inst_13492 = (state_13496[(2)]);var state_13496__$1 = state_13496;var statearr_13503_13524 = state_13496__$1;(statearr_13503_13524[(2)] = inst_13492);
(statearr_13503_13524[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (3)))
{var inst_13494 = (state_13496[(2)]);var state_13496__$1 = state_13496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13496__$1,inst_13494);
} else
{if((state_val_13497 === (2)))
{var inst_13468 = (state_13496[(10)]);var inst_13470 = cljs.core.count.call(null,inst_13468);var inst_13471 = (inst_13470 > (0));var state_13496__$1 = state_13496;if(cljs.core.truth_(inst_13471))
{var statearr_13505_13525 = state_13496__$1;(statearr_13505_13525[(1)] = (4));
} else
{var statearr_13506_13526 = state_13496__$1;(statearr_13506_13526[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (11)))
{var inst_13468 = (state_13496[(10)]);var inst_13485 = (state_13496[(2)]);var tmp13504 = inst_13468;var inst_13468__$1 = tmp13504;var state_13496__$1 = (function (){var statearr_13507 = state_13496;(statearr_13507[(11)] = inst_13485);
(statearr_13507[(10)] = inst_13468__$1);
return statearr_13507;
})();var statearr_13508_13527 = state_13496__$1;(statearr_13508_13527[(2)] = null);
(statearr_13508_13527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (9)))
{var inst_13476 = (state_13496[(8)]);var state_13496__$1 = state_13496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13496__$1,(11),out,inst_13476);
} else
{if((state_val_13497 === (5)))
{var inst_13490 = cljs.core.async.close_BANG_.call(null,out);var state_13496__$1 = state_13496;var statearr_13509_13528 = state_13496__$1;(statearr_13509_13528[(2)] = inst_13490);
(statearr_13509_13528[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (10)))
{var inst_13488 = (state_13496[(2)]);var state_13496__$1 = state_13496;var statearr_13510_13529 = state_13496__$1;(statearr_13510_13529[(2)] = inst_13488);
(statearr_13510_13529[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (8)))
{var inst_13477 = (state_13496[(9)]);var inst_13468 = (state_13496[(10)]);var inst_13475 = (state_13496[(7)]);var inst_13476 = (state_13496[(8)]);var inst_13480 = (function (){var c = inst_13477;var v = inst_13476;var vec__13473 = inst_13475;var cs = inst_13468;return ((function (c,v,vec__13473,cs,inst_13477,inst_13468,inst_13475,inst_13476,state_val_13497,c__6225__auto___13520,out){
return (function (p1__13413_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13413_SHARP_);
});
;})(c,v,vec__13473,cs,inst_13477,inst_13468,inst_13475,inst_13476,state_val_13497,c__6225__auto___13520,out))
})();var inst_13481 = cljs.core.filterv.call(null,inst_13480,inst_13468);var inst_13468__$1 = inst_13481;var state_13496__$1 = (function (){var statearr_13511 = state_13496;(statearr_13511[(10)] = inst_13468__$1);
return statearr_13511;
})();var statearr_13512_13530 = state_13496__$1;(statearr_13512_13530[(2)] = null);
(statearr_13512_13530[(1)] = (2));
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
});})(c__6225__auto___13520,out))
;return ((function (switch__6210__auto__,c__6225__auto___13520,out){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_13516 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13516[(0)] = state_machine__6211__auto__);
(statearr_13516[(1)] = (1));
return statearr_13516;
});
var state_machine__6211__auto____1 = (function (state_13496){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_13496);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e13517){if((e13517 instanceof Object))
{var ex__6214__auto__ = e13517;var statearr_13518_13531 = state_13496;(statearr_13518_13531[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13532 = state_13496;
state_13496 = G__13532;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_13496){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_13496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___13520,out))
})();var state__6227__auto__ = (function (){var statearr_13519 = f__6226__auto__.call(null);(statearr_13519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___13520);
return statearr_13519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___13520,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6225__auto___13625 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___13625,out){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___13625,out){
return (function (state_13602){var state_val_13603 = (state_13602[(1)]);if((state_val_13603 === (7)))
{var inst_13584 = (state_13602[(7)]);var inst_13584__$1 = (state_13602[(2)]);var inst_13585 = (inst_13584__$1 == null);var inst_13586 = cljs.core.not.call(null,inst_13585);var state_13602__$1 = (function (){var statearr_13604 = state_13602;(statearr_13604[(7)] = inst_13584__$1);
return statearr_13604;
})();if(inst_13586)
{var statearr_13605_13626 = state_13602__$1;(statearr_13605_13626[(1)] = (8));
} else
{var statearr_13606_13627 = state_13602__$1;(statearr_13606_13627[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13603 === (1)))
{var inst_13579 = (0);var state_13602__$1 = (function (){var statearr_13607 = state_13602;(statearr_13607[(8)] = inst_13579);
return statearr_13607;
})();var statearr_13608_13628 = state_13602__$1;(statearr_13608_13628[(2)] = null);
(statearr_13608_13628[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13603 === (4)))
{var state_13602__$1 = state_13602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13602__$1,(7),ch);
} else
{if((state_val_13603 === (6)))
{var inst_13597 = (state_13602[(2)]);var state_13602__$1 = state_13602;var statearr_13609_13629 = state_13602__$1;(statearr_13609_13629[(2)] = inst_13597);
(statearr_13609_13629[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13603 === (3)))
{var inst_13599 = (state_13602[(2)]);var inst_13600 = cljs.core.async.close_BANG_.call(null,out);var state_13602__$1 = (function (){var statearr_13610 = state_13602;(statearr_13610[(9)] = inst_13599);
return statearr_13610;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13602__$1,inst_13600);
} else
{if((state_val_13603 === (2)))
{var inst_13579 = (state_13602[(8)]);var inst_13581 = (inst_13579 < n);var state_13602__$1 = state_13602;if(cljs.core.truth_(inst_13581))
{var statearr_13611_13630 = state_13602__$1;(statearr_13611_13630[(1)] = (4));
} else
{var statearr_13612_13631 = state_13602__$1;(statearr_13612_13631[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13603 === (11)))
{var inst_13579 = (state_13602[(8)]);var inst_13589 = (state_13602[(2)]);var inst_13590 = (inst_13579 + (1));var inst_13579__$1 = inst_13590;var state_13602__$1 = (function (){var statearr_13613 = state_13602;(statearr_13613[(10)] = inst_13589);
(statearr_13613[(8)] = inst_13579__$1);
return statearr_13613;
})();var statearr_13614_13632 = state_13602__$1;(statearr_13614_13632[(2)] = null);
(statearr_13614_13632[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13603 === (9)))
{var state_13602__$1 = state_13602;var statearr_13615_13633 = state_13602__$1;(statearr_13615_13633[(2)] = null);
(statearr_13615_13633[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13603 === (5)))
{var state_13602__$1 = state_13602;var statearr_13616_13634 = state_13602__$1;(statearr_13616_13634[(2)] = null);
(statearr_13616_13634[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13603 === (10)))
{var inst_13594 = (state_13602[(2)]);var state_13602__$1 = state_13602;var statearr_13617_13635 = state_13602__$1;(statearr_13617_13635[(2)] = inst_13594);
(statearr_13617_13635[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13603 === (8)))
{var inst_13584 = (state_13602[(7)]);var state_13602__$1 = state_13602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13602__$1,(11),out,inst_13584);
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
});})(c__6225__auto___13625,out))
;return ((function (switch__6210__auto__,c__6225__auto___13625,out){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_13621 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13621[(0)] = state_machine__6211__auto__);
(statearr_13621[(1)] = (1));
return statearr_13621;
});
var state_machine__6211__auto____1 = (function (state_13602){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_13602);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e13622){if((e13622 instanceof Object))
{var ex__6214__auto__ = e13622;var statearr_13623_13636 = state_13602;(statearr_13623_13636[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13602);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13637 = state_13602;
state_13602 = G__13637;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_13602){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_13602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___13625,out))
})();var state__6227__auto__ = (function (){var statearr_13624 = f__6226__auto__.call(null);(statearr_13624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___13625);
return statearr_13624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___13625,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13645 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13645 = (function (ch,f,map_LT_,meta13646){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13646 = meta13646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13645.cljs$lang$type = true;
cljs.core.async.t13645.cljs$lang$ctorStr = "cljs.core.async/t13645";
cljs.core.async.t13645.cljs$lang$ctorPrWriter = (function (this__4135__auto__,writer__4136__auto__,opt__4137__auto__){return cljs.core._write.call(null,writer__4136__auto__,"cljs.core.async/t13645");
});
cljs.core.async.t13645.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13645.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13648 = (function (fn1,_,meta13646,ch,f,map_LT_,meta13649){
this.fn1 = fn1;
this._ = _;
this.meta13646 = meta13646;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13649 = meta13649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13648.cljs$lang$type = true;
cljs.core.async.t13648.cljs$lang$ctorStr = "cljs.core.async/t13648";
cljs.core.async.t13648.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4135__auto__,writer__4136__auto__,opt__4137__auto__){return cljs.core._write.call(null,writer__4136__auto__,"cljs.core.async/t13648");
});})(___$1))
;
cljs.core.async.t13648.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13638_SHARP_){return f1.call(null,(((p1__13638_SHARP_ == null))?null:self__.f.call(null,p1__13638_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13650){var self__ = this;
var _13650__$1 = this;return self__.meta13649;
});})(___$1))
;
cljs.core.async.t13648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13650,meta13649__$1){var self__ = this;
var _13650__$1 = this;return (new cljs.core.async.t13648(self__.fn1,self__._,self__.meta13646,self__.ch,self__.f,self__.map_LT_,meta13649__$1));
});})(___$1))
;
cljs.core.async.__GT_t13648 = ((function (___$1){
return (function __GT_t13648(fn1__$1,___$2,meta13646__$1,ch__$2,f__$2,map_LT___$2,meta13649){return (new cljs.core.async.t13648(fn1__$1,___$2,meta13646__$1,ch__$2,f__$2,map_LT___$2,meta13649));
});})(___$1))
;
}
return (new cljs.core.async.t13648(fn1,___$1,self__.meta13646,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3556__auto__ = ret;if(cljs.core.truth_(and__3556__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3556__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13645.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13645.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13647){var self__ = this;
var _13647__$1 = this;return self__.meta13646;
});
cljs.core.async.t13645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13647,meta13646__$1){var self__ = this;
var _13647__$1 = this;return (new cljs.core.async.t13645(self__.ch,self__.f,self__.map_LT_,meta13646__$1));
});
cljs.core.async.__GT_t13645 = (function __GT_t13645(ch__$1,f__$1,map_LT___$1,meta13646){return (new cljs.core.async.t13645(ch__$1,f__$1,map_LT___$1,meta13646));
});
}
return (new cljs.core.async.t13645(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13654 = (function (ch,f,map_GT_,meta13655){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13655 = meta13655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13654.cljs$lang$type = true;
cljs.core.async.t13654.cljs$lang$ctorStr = "cljs.core.async/t13654";
cljs.core.async.t13654.cljs$lang$ctorPrWriter = (function (this__4135__auto__,writer__4136__auto__,opt__4137__auto__){return cljs.core._write.call(null,writer__4136__auto__,"cljs.core.async/t13654");
});
cljs.core.async.t13654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13654.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13656){var self__ = this;
var _13656__$1 = this;return self__.meta13655;
});
cljs.core.async.t13654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13656,meta13655__$1){var self__ = this;
var _13656__$1 = this;return (new cljs.core.async.t13654(self__.ch,self__.f,self__.map_GT_,meta13655__$1));
});
cljs.core.async.__GT_t13654 = (function __GT_t13654(ch__$1,f__$1,map_GT___$1,meta13655){return (new cljs.core.async.t13654(ch__$1,f__$1,map_GT___$1,meta13655));
});
}
return (new cljs.core.async.t13654(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13660 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13660 = (function (ch,p,filter_GT_,meta13661){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13661 = meta13661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13660.cljs$lang$type = true;
cljs.core.async.t13660.cljs$lang$ctorStr = "cljs.core.async/t13660";
cljs.core.async.t13660.cljs$lang$ctorPrWriter = (function (this__4135__auto__,writer__4136__auto__,opt__4137__auto__){return cljs.core._write.call(null,writer__4136__auto__,"cljs.core.async/t13660");
});
cljs.core.async.t13660.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13660.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13660.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13660.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13662){var self__ = this;
var _13662__$1 = this;return self__.meta13661;
});
cljs.core.async.t13660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13662,meta13661__$1){var self__ = this;
var _13662__$1 = this;return (new cljs.core.async.t13660(self__.ch,self__.p,self__.filter_GT_,meta13661__$1));
});
cljs.core.async.__GT_t13660 = (function __GT_t13660(ch__$1,p__$1,filter_GT___$1,meta13661){return (new cljs.core.async.t13660(ch__$1,p__$1,filter_GT___$1,meta13661));
});
}
return (new cljs.core.async.t13660(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6225__auto___13745 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___13745,out){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___13745,out){
return (function (state_13724){var state_val_13725 = (state_13724[(1)]);if((state_val_13725 === (7)))
{var inst_13720 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13726_13746 = state_13724__$1;(statearr_13726_13746[(2)] = inst_13720);
(statearr_13726_13746[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (1)))
{var state_13724__$1 = state_13724;var statearr_13727_13747 = state_13724__$1;(statearr_13727_13747[(2)] = null);
(statearr_13727_13747[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (4)))
{var inst_13706 = (state_13724[(7)]);var inst_13706__$1 = (state_13724[(2)]);var inst_13707 = (inst_13706__$1 == null);var state_13724__$1 = (function (){var statearr_13728 = state_13724;(statearr_13728[(7)] = inst_13706__$1);
return statearr_13728;
})();if(cljs.core.truth_(inst_13707))
{var statearr_13729_13748 = state_13724__$1;(statearr_13729_13748[(1)] = (5));
} else
{var statearr_13730_13749 = state_13724__$1;(statearr_13730_13749[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (6)))
{var inst_13706 = (state_13724[(7)]);var inst_13711 = p.call(null,inst_13706);var state_13724__$1 = state_13724;if(cljs.core.truth_(inst_13711))
{var statearr_13731_13750 = state_13724__$1;(statearr_13731_13750[(1)] = (8));
} else
{var statearr_13732_13751 = state_13724__$1;(statearr_13732_13751[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (3)))
{var inst_13722 = (state_13724[(2)]);var state_13724__$1 = state_13724;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13724__$1,inst_13722);
} else
{if((state_val_13725 === (2)))
{var state_13724__$1 = state_13724;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13724__$1,(4),ch);
} else
{if((state_val_13725 === (11)))
{var inst_13714 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13733_13752 = state_13724__$1;(statearr_13733_13752[(2)] = inst_13714);
(statearr_13733_13752[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (9)))
{var state_13724__$1 = state_13724;var statearr_13734_13753 = state_13724__$1;(statearr_13734_13753[(2)] = null);
(statearr_13734_13753[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (5)))
{var inst_13709 = cljs.core.async.close_BANG_.call(null,out);var state_13724__$1 = state_13724;var statearr_13735_13754 = state_13724__$1;(statearr_13735_13754[(2)] = inst_13709);
(statearr_13735_13754[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (10)))
{var inst_13717 = (state_13724[(2)]);var state_13724__$1 = (function (){var statearr_13736 = state_13724;(statearr_13736[(8)] = inst_13717);
return statearr_13736;
})();var statearr_13737_13755 = state_13724__$1;(statearr_13737_13755[(2)] = null);
(statearr_13737_13755[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (8)))
{var inst_13706 = (state_13724[(7)]);var state_13724__$1 = state_13724;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13724__$1,(11),out,inst_13706);
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
});})(c__6225__auto___13745,out))
;return ((function (switch__6210__auto__,c__6225__auto___13745,out){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_13741 = [null,null,null,null,null,null,null,null,null];(statearr_13741[(0)] = state_machine__6211__auto__);
(statearr_13741[(1)] = (1));
return statearr_13741;
});
var state_machine__6211__auto____1 = (function (state_13724){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_13724);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e13742){if((e13742 instanceof Object))
{var ex__6214__auto__ = e13742;var statearr_13743_13756 = state_13724;(statearr_13743_13756[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13724);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13757 = state_13724;
state_13724 = G__13757;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_13724){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_13724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___13745,out))
})();var state__6227__auto__ = (function (){var statearr_13744 = f__6226__auto__.call(null);(statearr_13744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___13745);
return statearr_13744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___13745,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6225__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto__){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto__){
return (function (state_13923){var state_val_13924 = (state_13923[(1)]);if((state_val_13924 === (7)))
{var inst_13919 = (state_13923[(2)]);var state_13923__$1 = state_13923;var statearr_13925_13966 = state_13923__$1;(statearr_13925_13966[(2)] = inst_13919);
(statearr_13925_13966[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (20)))
{var inst_13889 = (state_13923[(7)]);var inst_13900 = (state_13923[(2)]);var inst_13901 = cljs.core.next.call(null,inst_13889);var inst_13875 = inst_13901;var inst_13876 = null;var inst_13877 = (0);var inst_13878 = (0);var state_13923__$1 = (function (){var statearr_13926 = state_13923;(statearr_13926[(8)] = inst_13877);
(statearr_13926[(9)] = inst_13900);
(statearr_13926[(10)] = inst_13878);
(statearr_13926[(11)] = inst_13875);
(statearr_13926[(12)] = inst_13876);
return statearr_13926;
})();var statearr_13927_13967 = state_13923__$1;(statearr_13927_13967[(2)] = null);
(statearr_13927_13967[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (1)))
{var state_13923__$1 = state_13923;var statearr_13928_13968 = state_13923__$1;(statearr_13928_13968[(2)] = null);
(statearr_13928_13968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (4)))
{var inst_13864 = (state_13923[(13)]);var inst_13864__$1 = (state_13923[(2)]);var inst_13865 = (inst_13864__$1 == null);var state_13923__$1 = (function (){var statearr_13929 = state_13923;(statearr_13929[(13)] = inst_13864__$1);
return statearr_13929;
})();if(cljs.core.truth_(inst_13865))
{var statearr_13930_13969 = state_13923__$1;(statearr_13930_13969[(1)] = (5));
} else
{var statearr_13931_13970 = state_13923__$1;(statearr_13931_13970[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (15)))
{var state_13923__$1 = state_13923;var statearr_13935_13971 = state_13923__$1;(statearr_13935_13971[(2)] = null);
(statearr_13935_13971[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (21)))
{var state_13923__$1 = state_13923;var statearr_13936_13972 = state_13923__$1;(statearr_13936_13972[(2)] = null);
(statearr_13936_13972[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (13)))
{var inst_13877 = (state_13923[(8)]);var inst_13878 = (state_13923[(10)]);var inst_13875 = (state_13923[(11)]);var inst_13876 = (state_13923[(12)]);var inst_13885 = (state_13923[(2)]);var inst_13886 = (inst_13878 + (1));var tmp13932 = inst_13877;var tmp13933 = inst_13875;var tmp13934 = inst_13876;var inst_13875__$1 = tmp13933;var inst_13876__$1 = tmp13934;var inst_13877__$1 = tmp13932;var inst_13878__$1 = inst_13886;var state_13923__$1 = (function (){var statearr_13937 = state_13923;(statearr_13937[(14)] = inst_13885);
(statearr_13937[(8)] = inst_13877__$1);
(statearr_13937[(10)] = inst_13878__$1);
(statearr_13937[(11)] = inst_13875__$1);
(statearr_13937[(12)] = inst_13876__$1);
return statearr_13937;
})();var statearr_13938_13973 = state_13923__$1;(statearr_13938_13973[(2)] = null);
(statearr_13938_13973[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (22)))
{var state_13923__$1 = state_13923;var statearr_13939_13974 = state_13923__$1;(statearr_13939_13974[(2)] = null);
(statearr_13939_13974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (6)))
{var inst_13864 = (state_13923[(13)]);var inst_13873 = f.call(null,inst_13864);var inst_13874 = cljs.core.seq.call(null,inst_13873);var inst_13875 = inst_13874;var inst_13876 = null;var inst_13877 = (0);var inst_13878 = (0);var state_13923__$1 = (function (){var statearr_13940 = state_13923;(statearr_13940[(8)] = inst_13877);
(statearr_13940[(10)] = inst_13878);
(statearr_13940[(11)] = inst_13875);
(statearr_13940[(12)] = inst_13876);
return statearr_13940;
})();var statearr_13941_13975 = state_13923__$1;(statearr_13941_13975[(2)] = null);
(statearr_13941_13975[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (17)))
{var inst_13889 = (state_13923[(7)]);var inst_13893 = cljs.core.chunk_first.call(null,inst_13889);var inst_13894 = cljs.core.chunk_rest.call(null,inst_13889);var inst_13895 = cljs.core.count.call(null,inst_13893);var inst_13875 = inst_13894;var inst_13876 = inst_13893;var inst_13877 = inst_13895;var inst_13878 = (0);var state_13923__$1 = (function (){var statearr_13942 = state_13923;(statearr_13942[(8)] = inst_13877);
(statearr_13942[(10)] = inst_13878);
(statearr_13942[(11)] = inst_13875);
(statearr_13942[(12)] = inst_13876);
return statearr_13942;
})();var statearr_13943_13976 = state_13923__$1;(statearr_13943_13976[(2)] = null);
(statearr_13943_13976[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (3)))
{var inst_13921 = (state_13923[(2)]);var state_13923__$1 = state_13923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13923__$1,inst_13921);
} else
{if((state_val_13924 === (12)))
{var inst_13909 = (state_13923[(2)]);var state_13923__$1 = state_13923;var statearr_13944_13977 = state_13923__$1;(statearr_13944_13977[(2)] = inst_13909);
(statearr_13944_13977[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (2)))
{var state_13923__$1 = state_13923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13923__$1,(4),in$);
} else
{if((state_val_13924 === (23)))
{var inst_13917 = (state_13923[(2)]);var state_13923__$1 = state_13923;var statearr_13945_13978 = state_13923__$1;(statearr_13945_13978[(2)] = inst_13917);
(statearr_13945_13978[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (19)))
{var inst_13904 = (state_13923[(2)]);var state_13923__$1 = state_13923;var statearr_13946_13979 = state_13923__$1;(statearr_13946_13979[(2)] = inst_13904);
(statearr_13946_13979[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (11)))
{var inst_13889 = (state_13923[(7)]);var inst_13875 = (state_13923[(11)]);var inst_13889__$1 = cljs.core.seq.call(null,inst_13875);var state_13923__$1 = (function (){var statearr_13947 = state_13923;(statearr_13947[(7)] = inst_13889__$1);
return statearr_13947;
})();if(inst_13889__$1)
{var statearr_13948_13980 = state_13923__$1;(statearr_13948_13980[(1)] = (14));
} else
{var statearr_13949_13981 = state_13923__$1;(statearr_13949_13981[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (9)))
{var inst_13911 = (state_13923[(2)]);var inst_13912 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13923__$1 = (function (){var statearr_13950 = state_13923;(statearr_13950[(15)] = inst_13911);
return statearr_13950;
})();if(cljs.core.truth_(inst_13912))
{var statearr_13951_13982 = state_13923__$1;(statearr_13951_13982[(1)] = (21));
} else
{var statearr_13952_13983 = state_13923__$1;(statearr_13952_13983[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (5)))
{var inst_13867 = cljs.core.async.close_BANG_.call(null,out);var state_13923__$1 = state_13923;var statearr_13953_13984 = state_13923__$1;(statearr_13953_13984[(2)] = inst_13867);
(statearr_13953_13984[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (14)))
{var inst_13889 = (state_13923[(7)]);var inst_13891 = cljs.core.chunked_seq_QMARK_.call(null,inst_13889);var state_13923__$1 = state_13923;if(inst_13891)
{var statearr_13954_13985 = state_13923__$1;(statearr_13954_13985[(1)] = (17));
} else
{var statearr_13955_13986 = state_13923__$1;(statearr_13955_13986[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (16)))
{var inst_13907 = (state_13923[(2)]);var state_13923__$1 = state_13923;var statearr_13956_13987 = state_13923__$1;(statearr_13956_13987[(2)] = inst_13907);
(statearr_13956_13987[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13924 === (10)))
{var inst_13878 = (state_13923[(10)]);var inst_13876 = (state_13923[(12)]);var inst_13883 = cljs.core._nth.call(null,inst_13876,inst_13878);var state_13923__$1 = state_13923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13923__$1,(13),out,inst_13883);
} else
{if((state_val_13924 === (18)))
{var inst_13889 = (state_13923[(7)]);var inst_13898 = cljs.core.first.call(null,inst_13889);var state_13923__$1 = state_13923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13923__$1,(20),out,inst_13898);
} else
{if((state_val_13924 === (8)))
{var inst_13877 = (state_13923[(8)]);var inst_13878 = (state_13923[(10)]);var inst_13880 = (inst_13878 < inst_13877);var inst_13881 = inst_13880;var state_13923__$1 = state_13923;if(cljs.core.truth_(inst_13881))
{var statearr_13957_13988 = state_13923__$1;(statearr_13957_13988[(1)] = (10));
} else
{var statearr_13958_13989 = state_13923__$1;(statearr_13958_13989[(1)] = (11));
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
});})(c__6225__auto__))
;return ((function (switch__6210__auto__,c__6225__auto__){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_13962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13962[(0)] = state_machine__6211__auto__);
(statearr_13962[(1)] = (1));
return statearr_13962;
});
var state_machine__6211__auto____1 = (function (state_13923){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_13923);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e13963){if((e13963 instanceof Object))
{var ex__6214__auto__ = e13963;var statearr_13964_13990 = state_13923;(statearr_13964_13990[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13963;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13991 = state_13923;
state_13923 = G__13991;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_13923){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_13923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto__))
})();var state__6227__auto__ = (function (){var statearr_13965 = f__6226__auto__.call(null);(statearr_13965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto__);
return statearr_13965;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto__))
);
return c__6225__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6225__auto___14088 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___14088,out){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___14088,out){
return (function (state_14063){var state_val_14064 = (state_14063[(1)]);if((state_val_14064 === (7)))
{var inst_14058 = (state_14063[(2)]);var state_14063__$1 = state_14063;var statearr_14065_14089 = state_14063__$1;(statearr_14065_14089[(2)] = inst_14058);
(statearr_14065_14089[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14064 === (1)))
{var inst_14040 = null;var state_14063__$1 = (function (){var statearr_14066 = state_14063;(statearr_14066[(7)] = inst_14040);
return statearr_14066;
})();var statearr_14067_14090 = state_14063__$1;(statearr_14067_14090[(2)] = null);
(statearr_14067_14090[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14064 === (4)))
{var inst_14043 = (state_14063[(8)]);var inst_14043__$1 = (state_14063[(2)]);var inst_14044 = (inst_14043__$1 == null);var inst_14045 = cljs.core.not.call(null,inst_14044);var state_14063__$1 = (function (){var statearr_14068 = state_14063;(statearr_14068[(8)] = inst_14043__$1);
return statearr_14068;
})();if(inst_14045)
{var statearr_14069_14091 = state_14063__$1;(statearr_14069_14091[(1)] = (5));
} else
{var statearr_14070_14092 = state_14063__$1;(statearr_14070_14092[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14064 === (6)))
{var state_14063__$1 = state_14063;var statearr_14071_14093 = state_14063__$1;(statearr_14071_14093[(2)] = null);
(statearr_14071_14093[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14064 === (3)))
{var inst_14060 = (state_14063[(2)]);var inst_14061 = cljs.core.async.close_BANG_.call(null,out);var state_14063__$1 = (function (){var statearr_14072 = state_14063;(statearr_14072[(9)] = inst_14060);
return statearr_14072;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14063__$1,inst_14061);
} else
{if((state_val_14064 === (2)))
{var state_14063__$1 = state_14063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14063__$1,(4),ch);
} else
{if((state_val_14064 === (11)))
{var inst_14043 = (state_14063[(8)]);var inst_14052 = (state_14063[(2)]);var inst_14040 = inst_14043;var state_14063__$1 = (function (){var statearr_14073 = state_14063;(statearr_14073[(10)] = inst_14052);
(statearr_14073[(7)] = inst_14040);
return statearr_14073;
})();var statearr_14074_14094 = state_14063__$1;(statearr_14074_14094[(2)] = null);
(statearr_14074_14094[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14064 === (9)))
{var inst_14043 = (state_14063[(8)]);var state_14063__$1 = state_14063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14063__$1,(11),out,inst_14043);
} else
{if((state_val_14064 === (5)))
{var inst_14043 = (state_14063[(8)]);var inst_14040 = (state_14063[(7)]);var inst_14047 = cljs.core._EQ_.call(null,inst_14043,inst_14040);var state_14063__$1 = state_14063;if(inst_14047)
{var statearr_14076_14095 = state_14063__$1;(statearr_14076_14095[(1)] = (8));
} else
{var statearr_14077_14096 = state_14063__$1;(statearr_14077_14096[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14064 === (10)))
{var inst_14055 = (state_14063[(2)]);var state_14063__$1 = state_14063;var statearr_14078_14097 = state_14063__$1;(statearr_14078_14097[(2)] = inst_14055);
(statearr_14078_14097[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14064 === (8)))
{var inst_14040 = (state_14063[(7)]);var tmp14075 = inst_14040;var inst_14040__$1 = tmp14075;var state_14063__$1 = (function (){var statearr_14079 = state_14063;(statearr_14079[(7)] = inst_14040__$1);
return statearr_14079;
})();var statearr_14080_14098 = state_14063__$1;(statearr_14080_14098[(2)] = null);
(statearr_14080_14098[(1)] = (2));
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
});})(c__6225__auto___14088,out))
;return ((function (switch__6210__auto__,c__6225__auto___14088,out){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_14084 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14084[(0)] = state_machine__6211__auto__);
(statearr_14084[(1)] = (1));
return statearr_14084;
});
var state_machine__6211__auto____1 = (function (state_14063){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_14063);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e14085){if((e14085 instanceof Object))
{var ex__6214__auto__ = e14085;var statearr_14086_14099 = state_14063;(statearr_14086_14099[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14063);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14100 = state_14063;
state_14063 = G__14100;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_14063){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_14063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___14088,out))
})();var state__6227__auto__ = (function (){var statearr_14087 = f__6226__auto__.call(null);(statearr_14087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___14088);
return statearr_14087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___14088,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6225__auto___14235 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___14235,out){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___14235,out){
return (function (state_14205){var state_val_14206 = (state_14205[(1)]);if((state_val_14206 === (7)))
{var inst_14201 = (state_14205[(2)]);var state_14205__$1 = state_14205;var statearr_14207_14236 = state_14205__$1;(statearr_14207_14236[(2)] = inst_14201);
(statearr_14207_14236[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (1)))
{var inst_14168 = (new Array(n));var inst_14169 = inst_14168;var inst_14170 = (0);var state_14205__$1 = (function (){var statearr_14208 = state_14205;(statearr_14208[(7)] = inst_14170);
(statearr_14208[(8)] = inst_14169);
return statearr_14208;
})();var statearr_14209_14237 = state_14205__$1;(statearr_14209_14237[(2)] = null);
(statearr_14209_14237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (4)))
{var inst_14173 = (state_14205[(9)]);var inst_14173__$1 = (state_14205[(2)]);var inst_14174 = (inst_14173__$1 == null);var inst_14175 = cljs.core.not.call(null,inst_14174);var state_14205__$1 = (function (){var statearr_14210 = state_14205;(statearr_14210[(9)] = inst_14173__$1);
return statearr_14210;
})();if(inst_14175)
{var statearr_14211_14238 = state_14205__$1;(statearr_14211_14238[(1)] = (5));
} else
{var statearr_14212_14239 = state_14205__$1;(statearr_14212_14239[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (15)))
{var inst_14195 = (state_14205[(2)]);var state_14205__$1 = state_14205;var statearr_14213_14240 = state_14205__$1;(statearr_14213_14240[(2)] = inst_14195);
(statearr_14213_14240[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (13)))
{var state_14205__$1 = state_14205;var statearr_14214_14241 = state_14205__$1;(statearr_14214_14241[(2)] = null);
(statearr_14214_14241[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (6)))
{var inst_14170 = (state_14205[(7)]);var inst_14191 = (inst_14170 > (0));var state_14205__$1 = state_14205;if(cljs.core.truth_(inst_14191))
{var statearr_14215_14242 = state_14205__$1;(statearr_14215_14242[(1)] = (12));
} else
{var statearr_14216_14243 = state_14205__$1;(statearr_14216_14243[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (3)))
{var inst_14203 = (state_14205[(2)]);var state_14205__$1 = state_14205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14205__$1,inst_14203);
} else
{if((state_val_14206 === (12)))
{var inst_14169 = (state_14205[(8)]);var inst_14193 = cljs.core.vec.call(null,inst_14169);var state_14205__$1 = state_14205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14205__$1,(15),out,inst_14193);
} else
{if((state_val_14206 === (2)))
{var state_14205__$1 = state_14205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14205__$1,(4),ch);
} else
{if((state_val_14206 === (11)))
{var inst_14185 = (state_14205[(2)]);var inst_14186 = (new Array(n));var inst_14169 = inst_14186;var inst_14170 = (0);var state_14205__$1 = (function (){var statearr_14217 = state_14205;(statearr_14217[(7)] = inst_14170);
(statearr_14217[(8)] = inst_14169);
(statearr_14217[(10)] = inst_14185);
return statearr_14217;
})();var statearr_14218_14244 = state_14205__$1;(statearr_14218_14244[(2)] = null);
(statearr_14218_14244[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (9)))
{var inst_14169 = (state_14205[(8)]);var inst_14183 = cljs.core.vec.call(null,inst_14169);var state_14205__$1 = state_14205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14205__$1,(11),out,inst_14183);
} else
{if((state_val_14206 === (5)))
{var inst_14170 = (state_14205[(7)]);var inst_14173 = (state_14205[(9)]);var inst_14169 = (state_14205[(8)]);var inst_14178 = (state_14205[(11)]);var inst_14177 = (inst_14169[inst_14170] = inst_14173);var inst_14178__$1 = (inst_14170 + (1));var inst_14179 = (inst_14178__$1 < n);var state_14205__$1 = (function (){var statearr_14219 = state_14205;(statearr_14219[(11)] = inst_14178__$1);
(statearr_14219[(12)] = inst_14177);
return statearr_14219;
})();if(cljs.core.truth_(inst_14179))
{var statearr_14220_14245 = state_14205__$1;(statearr_14220_14245[(1)] = (8));
} else
{var statearr_14221_14246 = state_14205__$1;(statearr_14221_14246[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (14)))
{var inst_14198 = (state_14205[(2)]);var inst_14199 = cljs.core.async.close_BANG_.call(null,out);var state_14205__$1 = (function (){var statearr_14223 = state_14205;(statearr_14223[(13)] = inst_14198);
return statearr_14223;
})();var statearr_14224_14247 = state_14205__$1;(statearr_14224_14247[(2)] = inst_14199);
(statearr_14224_14247[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (10)))
{var inst_14189 = (state_14205[(2)]);var state_14205__$1 = state_14205;var statearr_14225_14248 = state_14205__$1;(statearr_14225_14248[(2)] = inst_14189);
(statearr_14225_14248[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (8)))
{var inst_14169 = (state_14205[(8)]);var inst_14178 = (state_14205[(11)]);var tmp14222 = inst_14169;var inst_14169__$1 = tmp14222;var inst_14170 = inst_14178;var state_14205__$1 = (function (){var statearr_14226 = state_14205;(statearr_14226[(7)] = inst_14170);
(statearr_14226[(8)] = inst_14169__$1);
return statearr_14226;
})();var statearr_14227_14249 = state_14205__$1;(statearr_14227_14249[(2)] = null);
(statearr_14227_14249[(1)] = (2));
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
});})(c__6225__auto___14235,out))
;return ((function (switch__6210__auto__,c__6225__auto___14235,out){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_14231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14231[(0)] = state_machine__6211__auto__);
(statearr_14231[(1)] = (1));
return statearr_14231;
});
var state_machine__6211__auto____1 = (function (state_14205){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_14205);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e14232){if((e14232 instanceof Object))
{var ex__6214__auto__ = e14232;var statearr_14233_14250 = state_14205;(statearr_14233_14250[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14251 = state_14205;
state_14205 = G__14251;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_14205){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_14205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___14235,out))
})();var state__6227__auto__ = (function (){var statearr_14234 = f__6226__auto__.call(null);(statearr_14234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___14235);
return statearr_14234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___14235,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6225__auto___14394 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6225__auto___14394,out){
return (function (){var f__6226__auto__ = (function (){var switch__6210__auto__ = ((function (c__6225__auto___14394,out){
return (function (state_14364){var state_val_14365 = (state_14364[(1)]);if((state_val_14365 === (7)))
{var inst_14360 = (state_14364[(2)]);var state_14364__$1 = state_14364;var statearr_14366_14395 = state_14364__$1;(statearr_14366_14395[(2)] = inst_14360);
(statearr_14366_14395[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (1)))
{var inst_14323 = [];var inst_14324 = inst_14323;var inst_14325 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14364__$1 = (function (){var statearr_14367 = state_14364;(statearr_14367[(7)] = inst_14325);
(statearr_14367[(8)] = inst_14324);
return statearr_14367;
})();var statearr_14368_14396 = state_14364__$1;(statearr_14368_14396[(2)] = null);
(statearr_14368_14396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (4)))
{var inst_14328 = (state_14364[(9)]);var inst_14328__$1 = (state_14364[(2)]);var inst_14329 = (inst_14328__$1 == null);var inst_14330 = cljs.core.not.call(null,inst_14329);var state_14364__$1 = (function (){var statearr_14369 = state_14364;(statearr_14369[(9)] = inst_14328__$1);
return statearr_14369;
})();if(inst_14330)
{var statearr_14370_14397 = state_14364__$1;(statearr_14370_14397[(1)] = (5));
} else
{var statearr_14371_14398 = state_14364__$1;(statearr_14371_14398[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (15)))
{var inst_14354 = (state_14364[(2)]);var state_14364__$1 = state_14364;var statearr_14372_14399 = state_14364__$1;(statearr_14372_14399[(2)] = inst_14354);
(statearr_14372_14399[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (13)))
{var state_14364__$1 = state_14364;var statearr_14373_14400 = state_14364__$1;(statearr_14373_14400[(2)] = null);
(statearr_14373_14400[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (6)))
{var inst_14324 = (state_14364[(8)]);var inst_14349 = inst_14324.length;var inst_14350 = (inst_14349 > (0));var state_14364__$1 = state_14364;if(cljs.core.truth_(inst_14350))
{var statearr_14374_14401 = state_14364__$1;(statearr_14374_14401[(1)] = (12));
} else
{var statearr_14375_14402 = state_14364__$1;(statearr_14375_14402[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (3)))
{var inst_14362 = (state_14364[(2)]);var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14364__$1,inst_14362);
} else
{if((state_val_14365 === (12)))
{var inst_14324 = (state_14364[(8)]);var inst_14352 = cljs.core.vec.call(null,inst_14324);var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14364__$1,(15),out,inst_14352);
} else
{if((state_val_14365 === (2)))
{var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14364__$1,(4),ch);
} else
{if((state_val_14365 === (11)))
{var inst_14328 = (state_14364[(9)]);var inst_14332 = (state_14364[(10)]);var inst_14342 = (state_14364[(2)]);var inst_14343 = [];var inst_14344 = inst_14343.push(inst_14328);var inst_14324 = inst_14343;var inst_14325 = inst_14332;var state_14364__$1 = (function (){var statearr_14376 = state_14364;(statearr_14376[(7)] = inst_14325);
(statearr_14376[(8)] = inst_14324);
(statearr_14376[(11)] = inst_14342);
(statearr_14376[(12)] = inst_14344);
return statearr_14376;
})();var statearr_14377_14403 = state_14364__$1;(statearr_14377_14403[(2)] = null);
(statearr_14377_14403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (9)))
{var inst_14324 = (state_14364[(8)]);var inst_14340 = cljs.core.vec.call(null,inst_14324);var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14364__$1,(11),out,inst_14340);
} else
{if((state_val_14365 === (5)))
{var inst_14328 = (state_14364[(9)]);var inst_14325 = (state_14364[(7)]);var inst_14332 = (state_14364[(10)]);var inst_14332__$1 = f.call(null,inst_14328);var inst_14333 = cljs.core._EQ_.call(null,inst_14332__$1,inst_14325);var inst_14334 = cljs.core.keyword_identical_QMARK_.call(null,inst_14325,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14335 = (inst_14333) || (inst_14334);var state_14364__$1 = (function (){var statearr_14378 = state_14364;(statearr_14378[(10)] = inst_14332__$1);
return statearr_14378;
})();if(cljs.core.truth_(inst_14335))
{var statearr_14379_14404 = state_14364__$1;(statearr_14379_14404[(1)] = (8));
} else
{var statearr_14380_14405 = state_14364__$1;(statearr_14380_14405[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (14)))
{var inst_14357 = (state_14364[(2)]);var inst_14358 = cljs.core.async.close_BANG_.call(null,out);var state_14364__$1 = (function (){var statearr_14382 = state_14364;(statearr_14382[(13)] = inst_14357);
return statearr_14382;
})();var statearr_14383_14406 = state_14364__$1;(statearr_14383_14406[(2)] = inst_14358);
(statearr_14383_14406[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (10)))
{var inst_14347 = (state_14364[(2)]);var state_14364__$1 = state_14364;var statearr_14384_14407 = state_14364__$1;(statearr_14384_14407[(2)] = inst_14347);
(statearr_14384_14407[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (8)))
{var inst_14328 = (state_14364[(9)]);var inst_14332 = (state_14364[(10)]);var inst_14324 = (state_14364[(8)]);var inst_14337 = inst_14324.push(inst_14328);var tmp14381 = inst_14324;var inst_14324__$1 = tmp14381;var inst_14325 = inst_14332;var state_14364__$1 = (function (){var statearr_14385 = state_14364;(statearr_14385[(7)] = inst_14325);
(statearr_14385[(8)] = inst_14324__$1);
(statearr_14385[(14)] = inst_14337);
return statearr_14385;
})();var statearr_14386_14408 = state_14364__$1;(statearr_14386_14408[(2)] = null);
(statearr_14386_14408[(1)] = (2));
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
});})(c__6225__auto___14394,out))
;return ((function (switch__6210__auto__,c__6225__auto___14394,out){
return (function() {
var state_machine__6211__auto__ = null;
var state_machine__6211__auto____0 = (function (){var statearr_14390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14390[(0)] = state_machine__6211__auto__);
(statearr_14390[(1)] = (1));
return statearr_14390;
});
var state_machine__6211__auto____1 = (function (state_14364){while(true){
var ret_value__6212__auto__ = (function (){try{while(true){
var result__6213__auto__ = switch__6210__auto__.call(null,state_14364);if(cljs.core.keyword_identical_QMARK_.call(null,result__6213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6213__auto__;
}
break;
}
}catch (e14391){if((e14391 instanceof Object))
{var ex__6214__auto__ = e14391;var statearr_14392_14409 = state_14364;(statearr_14392_14409[(5)] = ex__6214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14364);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14391;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14410 = state_14364;
state_14364 = G__14410;
continue;
}
} else
{return ret_value__6212__auto__;
}
break;
}
});
state_machine__6211__auto__ = function(state_14364){
switch(arguments.length){
case 0:
return state_machine__6211__auto____0.call(this);
case 1:
return state_machine__6211__auto____1.call(this,state_14364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6211__auto____0;
state_machine__6211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6211__auto____1;
return state_machine__6211__auto__;
})()
;})(switch__6210__auto__,c__6225__auto___14394,out))
})();var state__6227__auto__ = (function (){var statearr_14393 = f__6226__auto__.call(null);(statearr_14393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6225__auto___14394);
return statearr_14393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6227__auto__);
});})(c__6225__auto___14394,out))
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
