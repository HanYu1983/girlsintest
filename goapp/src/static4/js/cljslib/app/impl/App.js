// Compiled by ClojureScript 0.0-2268
goog.provide('app.impl.App');
goog.require('cljs.core');
goog.require('app.impl.Injector');
goog.require('app.design.IApp');
goog.require('app.design.IApp');
goog.require('app.design.IInjector');
goog.require('app.design.IInjector');
goog.require('app.design.IEvent');
goog.require('app.design.IEvent');
app.impl.App.injector = app.impl.Injector.create.call(null);

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
app.impl.App.App = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
app.impl.App.App.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4137__auto__,k__4138__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core._lookup.call(null,this__4137__auto____$1,k__4138__auto__,null);
});
app.impl.App.App.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4139__auto__,k4991,else__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;var G__4993 = k4991;switch (G__4993) {
default:
return cljs.core.get.call(null,self__.__extmap,k4991,else__4140__auto__);

}
});
app.impl.App.App.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4151__auto__,writer__4152__auto__,opts__4153__auto__){var self__ = this;
var this__4151__auto____$1 = this;var pr_pair__4154__auto__ = ((function (this__4151__auto____$1){
return (function (keyval__4155__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,cljs.core.pr_writer,""," ","",opts__4153__auto__,keyval__4155__auto__);
});})(this__4151__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,pr_pair__4154__auto__,"#app.impl.App.App{",", ","}",opts__4153__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
app.impl.App.App.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4135__auto__){var self__ = this;
var this__4135__auto____$1 = this;return self__.__meta;
});
app.impl.App.App.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4131__auto__){var self__ = this;
var this__4131__auto____$1 = this;return (new app.impl.App.App(self__.__meta,self__.__extmap,self__.__hash));
});
app.impl.App.App.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
app.impl.App.App.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4132__auto__){var self__ = this;
var this__4132__auto____$1 = this;var h__3962__auto__ = self__.__hash;if(!((h__3962__auto__ == null)))
{return h__3962__auto__;
} else
{var h__3962__auto____$1 = cljs.core.hash_imap.call(null,this__4132__auto____$1);self__.__hash = h__3962__auto____$1;
return h__3962__auto____$1;
}
});
app.impl.App.App.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4133__auto__,other__4134__auto__){var self__ = this;
var this__4133__auto____$1 = this;if(cljs.core.truth_((function (){var and__3539__auto__ = other__4134__auto__;if(cljs.core.truth_(and__3539__auto__))
{return ((this__4133__auto____$1.constructor === other__4134__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4133__auto____$1,other__4134__auto__));
} else
{return and__3539__auto__;
}
})()))
{return true;
} else
{return false;
}
});
app.impl.App.App.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4146__auto__,k__4147__auto__){var self__ = this;
var this__4146__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4147__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4146__auto____$1),self__.__meta),k__4147__auto__);
} else
{return (new app.impl.App.App(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4147__auto__)),null));
}
});
app.impl.App.App.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4144__auto__,k__4145__auto__,G__4990){var self__ = this;
var this__4144__auto____$1 = this;var pred__4994 = cljs.core.keyword_identical_QMARK_;var expr__4995 = k__4145__auto__;return (new app.impl.App.App(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4145__auto__,G__4990),null));
});
app.impl.App.App.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
app.impl.App.App.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4136__auto__,G__4990){var self__ = this;
var this__4136__auto____$1 = this;return (new app.impl.App.App(G__4990,self__.__extmap,self__.__hash));
});
app.impl.App.App.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4142__auto__,entry__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4143__auto__))
{return cljs.core._assoc.call(null,this__4142__auto____$1,cljs.core._nth.call(null,entry__4143__auto__,(0)),cljs.core._nth.call(null,entry__4143__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4142__auto____$1,entry__4143__auto__);
}
});
app.impl.App.App.cljs$lang$type = true;
app.impl.App.App.cljs$lang$ctorPrSeq = (function (this__4171__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"app.impl.App/App");
});
app.impl.App.App.cljs$lang$ctorPrWriter = (function (this__4171__auto__,writer__4172__auto__){return cljs.core._write.call(null,writer__4172__auto__,"app.impl.App/App");
});
app.impl.App.__GT_App = (function __GT_App(){return (new app.impl.App.App());
});
app.impl.App.map__GT_App = (function map__GT_App(G__4992){return (new app.impl.App.App(null,cljs.core.dissoc.call(null,G__4992)));
});
app.impl.App.create = (function create(){return (new app.impl.App.App());
});
app.impl.App.onHeaderBtnBackhomeClick = (function onHeaderBtnBackhomeClick(this$,page){return console.log(this$);
});
app.impl.App.App.prototype.app$design$IApp$IApp$ = true;
app.impl.App.App.prototype.app$design$IApp$IApp$setup$arity$1 = (function (this$){var this$__$1 = this;app.design.IEvent.onHeaderBtnBackhomeClick.subscribe(cljs.core.partial.call(null,app.impl.App.onHeaderBtnBackhomeClick,this$__$1));
return console.log(app.design.IInjector.pageManager.call(null,app.impl.App.injector));
});