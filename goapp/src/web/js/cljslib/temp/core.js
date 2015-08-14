// Compiled by ClojureScript 0.0-2268
goog.provide('temp.core');
goog.require('cljs.core');

/**
* @constructor
* @param {*} width
* @param {*} height
* @param {*} blocks
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
temp.core.Blocks = (function (width,height,blocks,__meta,__extmap){
this.width = width;
this.height = height;
this.blocks = blocks;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
temp.core.Blocks.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4137__auto__,k__4138__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core._lookup.call(null,this__4137__auto____$1,k__4138__auto__,null);
});
temp.core.Blocks.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4139__auto__,k11076,else__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;var G__11078 = (((k11076 instanceof cljs.core.Keyword))?k11076.fqn:null);switch (G__11078) {
case "blocks":
return self__.blocks;

break;
case "height":
return self__.height;

break;
case "width":
return self__.width;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11076,else__4140__auto__);

}
});
temp.core.Blocks.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4151__auto__,writer__4152__auto__,opts__4153__auto__){var self__ = this;
var this__4151__auto____$1 = this;var pr_pair__4154__auto__ = ((function (this__4151__auto____$1){
return (function (keyval__4155__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,cljs.core.pr_writer,""," ","",opts__4153__auto__,keyval__4155__auto__);
});})(this__4151__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,pr_pair__4154__auto__,"#temp.core.Blocks{",", ","}",opts__4153__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blocks","blocks",-610462153),self__.blocks],null))], null),self__.__extmap));
});
temp.core.Blocks.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4135__auto__){var self__ = this;
var this__4135__auto____$1 = this;return self__.__meta;
});
temp.core.Blocks.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4131__auto__){var self__ = this;
var this__4131__auto____$1 = this;return (new temp.core.Blocks(self__.width,self__.height,self__.blocks,self__.__meta,self__.__extmap,self__.__hash));
});
temp.core.Blocks.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
temp.core.Blocks.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4132__auto__){var self__ = this;
var this__4132__auto____$1 = this;var h__3962__auto__ = self__.__hash;if(!((h__3962__auto__ == null)))
{return h__3962__auto__;
} else
{var h__3962__auto____$1 = cljs.core.hash_imap.call(null,this__4132__auto____$1);self__.__hash = h__3962__auto____$1;
return h__3962__auto____$1;
}
});
temp.core.Blocks.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4133__auto__,other__4134__auto__){var self__ = this;
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
temp.core.Blocks.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4146__auto__,k__4147__auto__){var self__ = this;
var this__4146__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"blocks","blocks",-610462153),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__4147__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4146__auto____$1),self__.__meta),k__4147__auto__);
} else
{return (new temp.core.Blocks(self__.width,self__.height,self__.blocks,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4147__auto__)),null));
}
});
temp.core.Blocks.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4144__auto__,k__4145__auto__,G__11075){var self__ = this;
var this__4144__auto____$1 = this;var pred__11079 = cljs.core.keyword_identical_QMARK_;var expr__11080 = k__4145__auto__;if(cljs.core.truth_(pred__11079.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__11080)))
{return (new temp.core.Blocks(G__11075,self__.height,self__.blocks,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11079.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__11080)))
{return (new temp.core.Blocks(self__.width,G__11075,self__.blocks,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11079.call(null,new cljs.core.Keyword(null,"blocks","blocks",-610462153),expr__11080)))
{return (new temp.core.Blocks(self__.width,self__.height,G__11075,self__.__meta,self__.__extmap,null));
} else
{return (new temp.core.Blocks(self__.width,self__.height,self__.blocks,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4145__auto__,G__11075),null));
}
}
}
});
temp.core.Blocks.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blocks","blocks",-610462153),self__.blocks],null))], null),self__.__extmap));
});
temp.core.Blocks.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4136__auto__,G__11075){var self__ = this;
var this__4136__auto____$1 = this;return (new temp.core.Blocks(self__.width,self__.height,self__.blocks,G__11075,self__.__extmap,self__.__hash));
});
temp.core.Blocks.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4142__auto__,entry__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4143__auto__))
{return cljs.core._assoc.call(null,this__4142__auto____$1,cljs.core._nth.call(null,entry__4143__auto__,(0)),cljs.core._nth.call(null,entry__4143__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4142__auto____$1,entry__4143__auto__);
}
});
temp.core.Blocks.cljs$lang$type = true;
temp.core.Blocks.cljs$lang$ctorPrSeq = (function (this__4171__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"temp.core/Blocks");
});
temp.core.Blocks.cljs$lang$ctorPrWriter = (function (this__4171__auto__,writer__4172__auto__){return cljs.core._write.call(null,writer__4172__auto__,"temp.core/Blocks");
});
temp.core.__GT_Blocks = (function __GT_Blocks(width,height,blocks){return (new temp.core.Blocks(width,height,blocks));
});
temp.core.map__GT_Blocks = (function map__GT_Blocks(G__11077){return (new temp.core.Blocks(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__11077),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__11077),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(G__11077),null,cljs.core.dissoc.call(null,G__11077,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"blocks","blocks",-610462153))));
});
temp.core.createBlocks = (function createBlocks(width,height){var blocks = cljs.core.apply.call(null,cljs.core.vector,cljs.core.take.call(null,(temp.core.w * temp.core.h),cljs.core.repeat.call(null,(0))));return (new temp.core.Block(width,height,blocks));
});
temp.core.block = (function block(blocks,p__11083){var vec__11085 = p__11083;var x = cljs.core.nth.call(null,vec__11085,(0),null);var y = cljs.core.nth.call(null,vec__11085,(1),null);if((((0) < x)) || (true) || (((0) < y)) || ((y >= blocks.height())))
{return null;
} else
{return cljs.core.nth.call(null,blocks,(x + (temp.core.w * y)));
}
});
temp.core.out_QMARK_ = (function out_QMARK_(blocks,p__11086){var vec__11088 = p__11086;var x = cljs.core.nth.call(null,vec__11088,(0),null);var y = cljs.core.nth.call(null,vec__11088,(1),null);return (temp.core.block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)) == null);
});
temp.core.wall_QMARK_ = (function wall_QMARK_(blocks,p__11089){var vec__11091 = p__11089;var x = cljs.core.nth.call(null,vec__11091,(0),null);var y = cljs.core.nth.call(null,vec__11091,(1),null);if(!(temp.core.out_QMARK_.call(null,blocks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))
{return cljs.core._EQ_.call(null,(1),temp.core.block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else
{return null;
}
});
temp.core.ground_QMARK_ = (function ground_QMARK_(blocks,p__11092){var vec__11094 = p__11092;var x = cljs.core.nth.call(null,vec__11094,(0),null);var y = cljs.core.nth.call(null,vec__11094,(1),null);return null;
});
temp.core.wall_height = (function wall_height(blocks,p__11095){var vec__11097 = p__11095;var x = cljs.core.nth.call(null,vec__11097,(0),null);var y = cljs.core.nth.call(null,vec__11097,(1),null);return (1);
});
temp.core.hole_QMARK_ = (function hole_QMARK_(blocks,p__11098){var vec__11100 = p__11098;var x = cljs.core.nth.call(null,vec__11100,(0),null);var y = cljs.core.nth.call(null,vec__11100,(1),null);return false;
});
temp.core.hole_width = (function hole_width(blocks,p__11101){var vec__11103 = p__11101;var x = cljs.core.nth.call(null,vec__11103,(0),null);var y = cljs.core.nth.call(null,vec__11103,(1),null);return (1);
});
temp.core.hole_height = (function hole_height(blocks,p__11104){var vec__11106 = p__11104;var x = cljs.core.nth.call(null,vec__11106,(0),null);var y = cljs.core.nth.call(null,vec__11106,(1),null);return (1);
});
temp.core.peek_left = (function peek_left(p__11107){var vec__11109 = p__11107;var x = cljs.core.nth.call(null,vec__11109,(0),null);var y = cljs.core.nth.call(null,vec__11109,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null).call(null);
});
temp.core.peek_right = (function peek_right(p__11110){var vec__11112 = p__11110;var x = cljs.core.nth.call(null,vec__11112,(0),null);var y = cljs.core.nth.call(null,vec__11112,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null).call(null);
});
temp.core.find_roads = (function find_roads(blocks,p__11113,p__11114){var vec__11117 = p__11113;var x = cljs.core.nth.call(null,vec__11117,(0),null);var y = cljs.core.nth.call(null,vec__11117,(1),null);var map__11118 = p__11114;var map__11118__$1 = ((cljs.core.seq_QMARK_.call(null,map__11118))?cljs.core.apply.call(null,cljs.core.hash_map,map__11118):map__11118);var ability = map__11118__$1;var gojump = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"gojump","gojump",2060557006));var jump = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"jump","jump",-971319427));var check_jump = ((function (vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump){
return (function (peek,roads){if(!(temp.core.out_QMARK_.call(null,blocks,peek)))
{if(cljs.core.truth_((function (){var and__3539__auto__ = temp.core.wall_QMARK_.call(null,blocks,peek);if(cljs.core.truth_(and__3539__auto__))
{return (jump > temp.core.wall_height.call(null,blocks,peek));
} else
{return and__3539__auto__;
}
})()))
{return cljs.core.conj.call(null,roads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump","jump",-971319427),peek], null));
} else
{return roads;
}
} else
{return roads;
}
});})(vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump))
;var check_gojump = ((function (check_jump,vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump){
return (function (peek,roads){if(temp.core.hole_QMARK_.call(null,blocks,peek))
{return cljs.core.reduce.call(null,((function (check_jump,vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump){
return (function (roads__$1,dx){var peekx = temp.core.peek_right.call(null,blocks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.nth.call(null,peek,(0)) + dx),cljs.core.nth.call(null,peek,(1))], null));var hole_height = temp.core.hole_height.call(null,peekx);return cljs.core.conj.call(null,roads__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gojump","gojump",2060557006),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,peekx,(0)),hole_height], null)], null));
});})(check_jump,vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump))
,roads,cljs.core.range.call(null,(0),gojump));
} else
{return null;
}
});})(check_jump,vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump))
;var check_walk = ((function (check_jump,check_gojump,vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump){
return (function (peek,roads){if(cljs.core.truth_(temp.core.ground_QMARK_.call(null,peek)))
{return cljs.core.conj.call(null,roads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk","walk",32921637),peek], null));
} else
{return roads;
}
});})(check_jump,check_gojump,vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump))
;var check_one = ((function (check_jump,check_gojump,check_walk,vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump){
return (function (roads,peek){return cljs.core.reduce.call(null,((function (check_jump,check_gojump,check_walk,vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump){
return (function (road,f){return f.call(null,peek,road);
});})(check_jump,check_gojump,check_walk,vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump))
,temp.core.road,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [check_jump,check_gojump,check_walk], null));
});})(check_jump,check_gojump,check_walk,vec__11117,x,y,map__11118,map__11118__$1,ability,gojump,jump))
;return cljs.core.reduce.call(null,check_one,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [temp.core.peek_right.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),temp.core.peek_left.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null));
});
temp.core.node_key = (function node_key(node){return null;
});
