// Compiled by ClojureScript 0.0-2268
goog.provide('app.impl.Injector');
goog.require('cljs.core');
goog.require('app.impl.PageManager');
goog.require('app.design.IPageManager');
goog.require('app.design.IPageManager');
goog.require('app.design.IInjector');
goog.require('app.design.IInjector');

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
app.impl.Injector.Injector = (function (__meta,__extmap){
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
app.impl.Injector.Injector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4137__auto__,k__4138__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core._lookup.call(null,this__4137__auto____$1,k__4138__auto__,null);
});
app.impl.Injector.Injector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4139__auto__,k4998,else__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;var G__5000 = k4998;switch (G__5000) {
default:
return cljs.core.get.call(null,self__.__extmap,k4998,else__4140__auto__);

}
});
app.impl.Injector.Injector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4151__auto__,writer__4152__auto__,opts__4153__auto__){var self__ = this;
var this__4151__auto____$1 = this;var pr_pair__4154__auto__ = ((function (this__4151__auto____$1){
return (function (keyval__4155__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,cljs.core.pr_writer,""," ","",opts__4153__auto__,keyval__4155__auto__);
});})(this__4151__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,pr_pair__4154__auto__,"#app.impl.Injector.Injector{",", ","}",opts__4153__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
app.impl.Injector.Injector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4135__auto__){var self__ = this;
var this__4135__auto____$1 = this;return self__.__meta;
});
app.impl.Injector.Injector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4131__auto__){var self__ = this;
var this__4131__auto____$1 = this;return (new app.impl.Injector.Injector(self__.__meta,self__.__extmap,self__.__hash));
});
app.impl.Injector.Injector.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
app.impl.Injector.Injector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4132__auto__){var self__ = this;
var this__4132__auto____$1 = this;var h__3962__auto__ = self__.__hash;if(!((h__3962__auto__ == null)))
{return h__3962__auto__;
} else
{var h__3962__auto____$1 = cljs.core.hash_imap.call(null,this__4132__auto____$1);self__.__hash = h__3962__auto____$1;
return h__3962__auto____$1;
}
});
app.impl.Injector.Injector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4133__auto__,other__4134__auto__){var self__ = this;
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
app.impl.Injector.Injector.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4146__auto__,k__4147__auto__){var self__ = this;
var this__4146__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4147__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4146__auto____$1),self__.__meta),k__4147__auto__);
} else
{return (new app.impl.Injector.Injector(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4147__auto__)),null));
}
});
app.impl.Injector.Injector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4144__auto__,k__4145__auto__,G__4997){var self__ = this;
var this__4144__auto____$1 = this;var pred__5001 = cljs.core.keyword_identical_QMARK_;var expr__5002 = k__4145__auto__;return (new app.impl.Injector.Injector(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4145__auto__,G__4997),null));
});
app.impl.Injector.Injector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
app.impl.Injector.Injector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4136__auto__,G__4997){var self__ = this;
var this__4136__auto____$1 = this;return (new app.impl.Injector.Injector(G__4997,self__.__extmap,self__.__hash));
});
app.impl.Injector.Injector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4142__auto__,entry__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4143__auto__))
{return cljs.core._assoc.call(null,this__4142__auto____$1,cljs.core._nth.call(null,entry__4143__auto__,(0)),cljs.core._nth.call(null,entry__4143__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4142__auto____$1,entry__4143__auto__);
}
});
app.impl.Injector.Injector.cljs$lang$type = true;
app.impl.Injector.Injector.cljs$lang$ctorPrSeq = (function (this__4171__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"app.impl.Injector/Injector");
});
app.impl.Injector.Injector.cljs$lang$ctorPrWriter = (function (this__4171__auto__,writer__4172__auto__){return cljs.core._write.call(null,writer__4172__auto__,"app.impl.Injector/Injector");
});
app.impl.Injector.__GT_Injector = (function __GT_Injector(){return (new app.impl.Injector.Injector());
});
app.impl.Injector.map__GT_Injector = (function map__GT_Injector(G__4999){return (new app.impl.Injector.Injector(null,cljs.core.dissoc.call(null,G__4999)));
});
app.impl.Injector.create = (function create(){return cljs.core.merge.call(null,(new app.impl.Injector.Injector()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pageManager","pageManager",66557680),app.impl.PageManager.create.call(null)], null));
});
app.impl.Injector.Injector.prototype.app$design$IInjector$IInjector$ = true;
app.impl.Injector.Injector.prototype.app$design$IInjector$IInjector$pageManager$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.Keyword(null,"pageManager","pageManager",66557680).cljs$core$IFn$_invoke$arity$1(this$__$1);
});
