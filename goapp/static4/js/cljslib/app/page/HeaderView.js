// Compiled by ClojureScript 0.0-2268
goog.provide('app.page.HeaderView');
goog.require('cljs.core');
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
app.page.HeaderView.HeaderView.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4139__auto__,k4974,else__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;var G__4976 = k4974;switch (G__4976) {
default:
return cljs.core.get.call(null,self__.__extmap,k4974,else__4140__auto__);

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
app.page.HeaderView.HeaderView.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4144__auto__,k__4145__auto__,G__4973){var self__ = this;
var this__4144__auto____$1 = this;var pred__4977 = cljs.core.keyword_identical_QMARK_;var expr__4978 = k__4145__auto__;return (new app.page.HeaderView.HeaderView(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4145__auto__,G__4973),null));
});
app.page.HeaderView.HeaderView.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
app.page.HeaderView.HeaderView.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4136__auto__,G__4973){var self__ = this;
var this__4136__auto____$1 = this;return (new app.page.HeaderView.HeaderView(G__4973,self__.__extmap,self__.__hash));
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
app.page.HeaderView.map__GT_HeaderView = (function map__GT_HeaderView(G__4975){return (new app.page.HeaderView.HeaderView(null,cljs.core.dissoc.call(null,G__4975)));
});
app.page.HeaderView.create = (function create(elem){var this$ = cljs.core.atom.call(null,null);var btn_backhome = (function (){var G__4982 = elem.find("#btn_backhome");G__4982.click(((function (G__4982,this$){
return (function (){return app.event.onHeaderBtnBackhomeClick.onNext(cljs.core.deref.call(null,this$));
});})(G__4982,this$))
);
return G__4982;
})();var img_homeLogo = elem.find("#img_homeLogo");var img_streetSnapLogo = elem.find("#img_streetSnapLogo");var img_streetNewsLogo = elem.find("#img_streetNewsLogo");var img_streetModelsLogo = elem.find("#img_streetModelsLogo");var img_streetEventLogo = elem.find("#img_streetEventLogo");var img_streetCelebrityLogo = elem.find("#img_streetCelebrityLogo");return cljs.core.reset_BANG_.call(null,this$,cljs.core.merge.call(null,(new app.page.HeaderView.HeaderView()),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"btn_backhome","btn_backhome",220539220),btn_backhome,new cljs.core.Keyword(null,"Home","Home",1521501280),img_homeLogo,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),img_streetSnapLogo,new cljs.core.Keyword(null,"StreetNews","StreetNews",1399822125),img_streetNewsLogo,new cljs.core.Keyword(null,"StreetModels","StreetModels",-643658470),img_streetModelsLogo,new cljs.core.Keyword(null,"StreetEvent","StreetEvent",-530516872),img_streetEventLogo,new cljs.core.Keyword(null,"StreetCelebrity","StreetCelebrity",-422187416),img_streetCelebrityLogo], null)));
});
app.page.HeaderView.show = (function show(this$,logo){var seq__4989_4995 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetNews","StreetNews",1399822125),new cljs.core.Keyword(null,"StreetModels","StreetModels",-643658470),new cljs.core.Keyword(null,"StreetEvent","StreetEvent",-530516872),new cljs.core.Keyword(null,"StreetCelebrity","StreetCelebrity",-422187416)], null));var chunk__4991_4996 = null;var count__4992_4997 = (0);var i__4993_4998 = (0);while(true){
if((i__4993_4998 < count__4992_4997))
{var elem_4999 = cljs.core._nth.call(null,chunk__4991_4996,i__4993_4998);if(cljs.core.truth_(((cljs.core._EQ_.call(null,logo,elem_4999))?null:null)))
{elem_4999.call(null,this$).hide();
{
var G__5000 = seq__4989_4995;
var G__5001 = chunk__4991_4996;
var G__5002 = count__4992_4997;
var G__5003 = (i__4993_4998 + (1));
seq__4989_4995 = G__5000;
chunk__4991_4996 = G__5001;
count__4992_4997 = G__5002;
i__4993_4998 = G__5003;
continue;
}
} else
{{
var G__5004 = seq__4989_4995;
var G__5005 = chunk__4991_4996;
var G__5006 = count__4992_4997;
var G__5007 = (i__4993_4998 + (1));
seq__4989_4995 = G__5004;
chunk__4991_4996 = G__5005;
count__4992_4997 = G__5006;
i__4993_4998 = G__5007;
continue;
}
}
} else
{var temp__4126__auto___5008 = cljs.core.seq.call(null,seq__4989_4995);if(temp__4126__auto___5008)
{var seq__4989_5009__$1 = temp__4126__auto___5008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4989_5009__$1))
{var c__4307__auto___5010 = cljs.core.chunk_first.call(null,seq__4989_5009__$1);{
var G__5011 = cljs.core.chunk_rest.call(null,seq__4989_5009__$1);
var G__5012 = c__4307__auto___5010;
var G__5013 = cljs.core.count.call(null,c__4307__auto___5010);
var G__5014 = (0);
seq__4989_4995 = G__5011;
chunk__4991_4996 = G__5012;
count__4992_4997 = G__5013;
i__4993_4998 = G__5014;
continue;
}
} else
{var elem_5015 = cljs.core.first.call(null,seq__4989_5009__$1);if(cljs.core.truth_(((cljs.core._EQ_.call(null,logo,elem_5015))?null:null)))
{elem_5015.call(null,this$).hide();
{
var G__5016 = cljs.core.next.call(null,seq__4989_5009__$1);
var G__5017 = null;
var G__5018 = (0);
var G__5019 = (0);
seq__4989_4995 = G__5016;
chunk__4991_4996 = G__5017;
count__4992_4997 = G__5018;
i__4993_4998 = G__5019;
continue;
}
} else
{{
var G__5020 = cljs.core.next.call(null,seq__4989_5009__$1);
var G__5021 = null;
var G__5022 = (0);
var G__5023 = (0);
seq__4989_4995 = G__5020;
chunk__4991_4996 = G__5021;
count__4992_4997 = G__5022;
i__4993_4998 = G__5023;
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
app.page.HeaderView.open = (function open(this$){if(cljs.core.contains_QMARK_.call(null,this$,new cljs.core.Keyword(null,"elem","elem",618631056)))
{return new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(this$).fadeIn((400));
} else
{return null;
}
});
app.page.HeaderView.close = (function close(this$){if(cljs.core.contains_QMARK_.call(null,this$,new cljs.core.Keyword(null,"elem","elem",618631056)))
{return new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(this$).fadeOut((400));
} else
{return null;
}
});
app.page.HeaderView.HeaderView.prototype.app$page$IPage$ = true;
app.page.HeaderView.HeaderView.prototype.app$page$IPage$open$arity$1 = (function (this$){var this$__$1 = this;return app.page.HeaderView.open.call(null,this$__$1);
});
app.page.HeaderView.HeaderView.prototype.app$page$IPage$close$arity$1 = (function (this$){var this$__$1 = this;return app.page.HeaderView.close.call(null,this$__$1);
});
