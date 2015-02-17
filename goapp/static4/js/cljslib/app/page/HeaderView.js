// Compiled by ClojureScript 0.0-2268
goog.provide('app.page.HeaderView');
goog.require('cljs.core');
goog.require('app.page.DefaultView');
goog.require('app.page.DefaultView');
goog.require('app.event');
goog.require('app.event');
goog.require('app.page');
goog.require('app.page');

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
app.page.HeaderView.HeaderView = (function (__meta,__extmap){
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
app.page.HeaderView.HeaderView.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4137__auto__,k__4138__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core._lookup.call(null,this__4137__auto____$1,k__4138__auto__,null);
});
app.page.HeaderView.HeaderView.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4139__auto__,k4965,else__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;var G__4967 = k4965;switch (G__4967) {
default:
return cljs.core.get.call(null,self__.__extmap,k4965,else__4140__auto__);

}
});
app.page.HeaderView.HeaderView.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4151__auto__,writer__4152__auto__,opts__4153__auto__){var self__ = this;
var this__4151__auto____$1 = this;var pr_pair__4154__auto__ = ((function (this__4151__auto____$1){
return (function (keyval__4155__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,cljs.core.pr_writer,""," ","",opts__4153__auto__,keyval__4155__auto__);
});})(this__4151__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,pr_pair__4154__auto__,"#app.page.HeaderView.HeaderView{",", ","}",opts__4153__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
app.page.HeaderView.HeaderView.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4135__auto__){var self__ = this;
var this__4135__auto____$1 = this;return self__.__meta;
});
app.page.HeaderView.HeaderView.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4131__auto__){var self__ = this;
var this__4131__auto____$1 = this;return (new app.page.HeaderView.HeaderView(self__.__meta,self__.__extmap,self__.__hash));
});
app.page.HeaderView.HeaderView.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
app.page.HeaderView.HeaderView.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4132__auto__){var self__ = this;
var this__4132__auto____$1 = this;var h__3962__auto__ = self__.__hash;if(!((h__3962__auto__ == null)))
{return h__3962__auto__;
} else
{var h__3962__auto____$1 = cljs.core.hash_imap.call(null,this__4132__auto____$1);self__.__hash = h__3962__auto____$1;
return h__3962__auto____$1;
}
});
app.page.HeaderView.HeaderView.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4133__auto__,other__4134__auto__){var self__ = this;
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
app.page.HeaderView.HeaderView.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4146__auto__,k__4147__auto__){var self__ = this;
var this__4146__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4147__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4146__auto____$1),self__.__meta),k__4147__auto__);
} else
{return (new app.page.HeaderView.HeaderView(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4147__auto__)),null));
}
});
app.page.HeaderView.HeaderView.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4144__auto__,k__4145__auto__,G__4964){var self__ = this;
var this__4144__auto____$1 = this;var pred__4968 = cljs.core.keyword_identical_QMARK_;var expr__4969 = k__4145__auto__;return (new app.page.HeaderView.HeaderView(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4145__auto__,G__4964),null));
});
app.page.HeaderView.HeaderView.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
app.page.HeaderView.HeaderView.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4136__auto__,G__4964){var self__ = this;
var this__4136__auto____$1 = this;return (new app.page.HeaderView.HeaderView(G__4964,self__.__extmap,self__.__hash));
});
app.page.HeaderView.HeaderView.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4142__auto__,entry__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4143__auto__))
{return cljs.core._assoc.call(null,this__4142__auto____$1,cljs.core._nth.call(null,entry__4143__auto__,(0)),cljs.core._nth.call(null,entry__4143__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4142__auto____$1,entry__4143__auto__);
}
});
app.page.HeaderView.HeaderView.cljs$lang$type = true;
app.page.HeaderView.HeaderView.cljs$lang$ctorPrSeq = (function (this__4171__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"app.page.HeaderView/HeaderView");
});
app.page.HeaderView.HeaderView.cljs$lang$ctorPrWriter = (function (this__4171__auto__,writer__4172__auto__){return cljs.core._write.call(null,writer__4172__auto__,"app.page.HeaderView/HeaderView");
});
app.page.HeaderView.__GT_HeaderView = (function __GT_HeaderView(){return (new app.page.HeaderView.HeaderView());
});
app.page.HeaderView.map__GT_HeaderView = (function map__GT_HeaderView(G__4966){return (new app.page.HeaderView.HeaderView(null,cljs.core.dissoc.call(null,G__4966)));
});
app.page.HeaderView.create = (function create(elem){var this$ = cljs.core.atom.call(null,null);var btn_backhome = (function (){var G__4973 = elem.find("#btn_backhome");G__4973.click(((function (G__4973,this$){
return (function (){return app.event.onHeaderBtnBackhomeClick.onNext(cljs.core.deref.call(null,this$));
});})(G__4973,this$))
);
return G__4973;
})();var img_homeLogo = elem.find("#img_homeLogo");var img_streetSnapLogo = elem.find("#img_streetSnapLogo");var img_streetNewsLogo = elem.find("#img_streetNewsLogo");var img_streetModelsLogo = elem.find("#img_streetModelsLogo");var img_streetEventLogo = elem.find("#img_streetEventLogo");var img_streetCelebrityLogo = elem.find("#img_streetCelebrityLogo");return cljs.core.reset_BANG_.call(null,this$,cljs.core.merge.call(null,(new app.page.HeaderView.HeaderView()),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"btn_backhome","btn_backhome",220539220),btn_backhome,new cljs.core.Keyword(null,"Home","Home",1521501280),img_homeLogo,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),img_streetSnapLogo,new cljs.core.Keyword(null,"StreetNews","StreetNews",1399822125),img_streetNewsLogo,new cljs.core.Keyword(null,"StreetModels","StreetModels",-643658470),img_streetModelsLogo,new cljs.core.Keyword(null,"StreetEvent","StreetEvent",-530516872),img_streetEventLogo,new cljs.core.Keyword(null,"StreetCelebrity","StreetCelebrity",-422187416),img_streetCelebrityLogo], null)));
});
app.page.HeaderView.show = (function show(this$,logo){var seq__4980_4986 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetNews","StreetNews",1399822125),new cljs.core.Keyword(null,"StreetModels","StreetModels",-643658470),new cljs.core.Keyword(null,"StreetEvent","StreetEvent",-530516872),new cljs.core.Keyword(null,"StreetCelebrity","StreetCelebrity",-422187416)], null));var chunk__4982_4987 = null;var count__4983_4988 = (0);var i__4984_4989 = (0);while(true){
if((i__4984_4989 < count__4983_4988))
{var elem_4990 = cljs.core._nth.call(null,chunk__4982_4987,i__4984_4989);if(cljs.core.truth_(((cljs.core._EQ_.call(null,logo,elem_4990))?null:null)))
{elem_4990.call(null,this$).hide();
{
var G__4991 = seq__4980_4986;
var G__4992 = chunk__4982_4987;
var G__4993 = count__4983_4988;
var G__4994 = (i__4984_4989 + (1));
seq__4980_4986 = G__4991;
chunk__4982_4987 = G__4992;
count__4983_4988 = G__4993;
i__4984_4989 = G__4994;
continue;
}
} else
{{
var G__4995 = seq__4980_4986;
var G__4996 = chunk__4982_4987;
var G__4997 = count__4983_4988;
var G__4998 = (i__4984_4989 + (1));
seq__4980_4986 = G__4995;
chunk__4982_4987 = G__4996;
count__4983_4988 = G__4997;
i__4984_4989 = G__4998;
continue;
}
}
} else
{var temp__4126__auto___4999 = cljs.core.seq.call(null,seq__4980_4986);if(temp__4126__auto___4999)
{var seq__4980_5000__$1 = temp__4126__auto___4999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4980_5000__$1))
{var c__4307__auto___5001 = cljs.core.chunk_first.call(null,seq__4980_5000__$1);{
var G__5002 = cljs.core.chunk_rest.call(null,seq__4980_5000__$1);
var G__5003 = c__4307__auto___5001;
var G__5004 = cljs.core.count.call(null,c__4307__auto___5001);
var G__5005 = (0);
seq__4980_4986 = G__5002;
chunk__4982_4987 = G__5003;
count__4983_4988 = G__5004;
i__4984_4989 = G__5005;
continue;
}
} else
{var elem_5006 = cljs.core.first.call(null,seq__4980_5000__$1);if(cljs.core.truth_(((cljs.core._EQ_.call(null,logo,elem_5006))?null:null)))
{elem_5006.call(null,this$).hide();
{
var G__5007 = cljs.core.next.call(null,seq__4980_5000__$1);
var G__5008 = null;
var G__5009 = (0);
var G__5010 = (0);
seq__4980_4986 = G__5007;
chunk__4982_4987 = G__5008;
count__4983_4988 = G__5009;
i__4984_4989 = G__5010;
continue;
}
} else
{{
var G__5011 = cljs.core.next.call(null,seq__4980_5000__$1);
var G__5012 = null;
var G__5013 = (0);
var G__5014 = (0);
seq__4980_4986 = G__5011;
chunk__4982_4987 = G__5012;
count__4983_4988 = G__5013;
i__4984_4989 = G__5014;
continue;
}
}
}
} else
{}
}
break;
}
return logo.call(null,this$).fadeIn((400));
});
app.page.HeaderView.HeaderView.prototype.app$page$IPage$ = true;
app.page.HeaderView.HeaderView.prototype.app$page$IPage$open$arity$1 = (function (this$){var this$__$1 = this;return app.page.DefaultView.open.call(null,this$__$1);
});
app.page.HeaderView.HeaderView.prototype.app$page$IPage$close$arity$1 = (function (this$){var this$__$1 = this;return app.page.DefaultView.close.call(null,this$__$1);
});
