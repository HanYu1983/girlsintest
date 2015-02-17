// Compiled by ClojureScript 0.0-2268
goog.provide('app.page.HeaderController');
goog.require('cljs.core');
goog.require('app.page.DefaultController');
goog.require('app.page.DefaultController');
goog.require('app.controller');
goog.require('app.controller');

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
app.page.HeaderController.HeaderController = (function (__meta,__extmap){
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
app.page.HeaderController.HeaderController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4137__auto__,k__4138__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core._lookup.call(null,this__4137__auto____$1,k__4138__auto__,null);
});
app.page.HeaderController.HeaderController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4139__auto__,k4956,else__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;var G__4958 = k4956;switch (G__4958) {
default:
return cljs.core.get.call(null,self__.__extmap,k4956,else__4140__auto__);

}
});
app.page.HeaderController.HeaderController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4151__auto__,writer__4152__auto__,opts__4153__auto__){var self__ = this;
var this__4151__auto____$1 = this;var pr_pair__4154__auto__ = ((function (this__4151__auto____$1){
return (function (keyval__4155__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,cljs.core.pr_writer,""," ","",opts__4153__auto__,keyval__4155__auto__);
});})(this__4151__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,pr_pair__4154__auto__,"#app.page.HeaderController.HeaderController{",", ","}",opts__4153__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
app.page.HeaderController.HeaderController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4135__auto__){var self__ = this;
var this__4135__auto____$1 = this;return self__.__meta;
});
app.page.HeaderController.HeaderController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4131__auto__){var self__ = this;
var this__4131__auto____$1 = this;return (new app.page.HeaderController.HeaderController(self__.__meta,self__.__extmap,self__.__hash));
});
app.page.HeaderController.HeaderController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
app.page.HeaderController.HeaderController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4132__auto__){var self__ = this;
var this__4132__auto____$1 = this;var h__3962__auto__ = self__.__hash;if(!((h__3962__auto__ == null)))
{return h__3962__auto__;
} else
{var h__3962__auto____$1 = cljs.core.hash_imap.call(null,this__4132__auto____$1);self__.__hash = h__3962__auto____$1;
return h__3962__auto____$1;
}
});
app.page.HeaderController.HeaderController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4133__auto__,other__4134__auto__){var self__ = this;
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
app.page.HeaderController.HeaderController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4146__auto__,k__4147__auto__){var self__ = this;
var this__4146__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4147__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4146__auto____$1),self__.__meta),k__4147__auto__);
} else
{return (new app.page.HeaderController.HeaderController(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4147__auto__)),null));
}
});
app.page.HeaderController.HeaderController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4144__auto__,k__4145__auto__,G__4955){var self__ = this;
var this__4144__auto____$1 = this;var pred__4959 = cljs.core.keyword_identical_QMARK_;var expr__4960 = k__4145__auto__;return (new app.page.HeaderController.HeaderController(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4145__auto__,G__4955),null));
});
app.page.HeaderController.HeaderController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
app.page.HeaderController.HeaderController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4136__auto__,G__4955){var self__ = this;
var this__4136__auto____$1 = this;return (new app.page.HeaderController.HeaderController(G__4955,self__.__extmap,self__.__hash));
});
app.page.HeaderController.HeaderController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4142__auto__,entry__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4143__auto__))
{return cljs.core._assoc.call(null,this__4142__auto____$1,cljs.core._nth.call(null,entry__4143__auto__,(0)),cljs.core._nth.call(null,entry__4143__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4142__auto____$1,entry__4143__auto__);
}
});
app.page.HeaderController.HeaderController.cljs$lang$type = true;
app.page.HeaderController.HeaderController.cljs$lang$ctorPrSeq = (function (this__4171__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"app.page.HeaderController/HeaderController");
});
app.page.HeaderController.HeaderController.cljs$lang$ctorPrWriter = (function (this__4171__auto__,writer__4172__auto__){return cljs.core._write.call(null,writer__4172__auto__,"app.page.HeaderController/HeaderController");
});
app.page.HeaderController.__GT_HeaderController = (function __GT_HeaderController(){return (new app.page.HeaderController.HeaderController());
});
app.page.HeaderController.map__GT_HeaderController = (function map__GT_HeaderController(G__4957){return (new app.page.HeaderController.HeaderController(null,cljs.core.dissoc.call(null,G__4957)));
});
app.page.HeaderController.create = (function create(){return cljs.core.merge.call(null,(new app.page.HeaderController.HeaderController()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),cljs.core.atom.call(null,null)], null));
});
app.page.HeaderController.create_model = (function create_model(this$,param,cb){return cb.call(null,null);
});
app.page.HeaderController.open = (function open(this$){return app.page.HeaderView.show.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"Home","Home",1521501280));
});
app.page.HeaderController.HeaderController.prototype.app$controller$IController$ = true;
app.page.HeaderController.HeaderController.prototype.app$controller$IController$open$arity$1 = (function (this$){var this$__$1 = this;return app.page.HeaderController.open.call(null,this$__$1);
});
app.page.HeaderController.HeaderController.prototype.app$controller$IController$close$arity$1 = (function (this$){var this$__$1 = this;return app.page.DefaultController.close.call(null,this$__$1);
});
app.page.HeaderController.HeaderController.prototype.app$controller$IController$set_view$arity$2 = (function (this$,view){var this$__$1 = this;return app.page.DefaultController.set_view.call(null,this$__$1,view);
});
app.page.HeaderController.HeaderController.prototype.app$controller$IController$create_model$arity$3 = (function (this$,param,cb){var this$__$1 = this;return app.page.HeaderController.create_model.call(null,this$__$1,param,cb);
});
