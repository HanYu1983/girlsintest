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
temp.core.Blocks.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4139__auto__,k14334,else__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;var G__14336 = (((k14334 instanceof cljs.core.Keyword))?k14334.fqn:null);switch (G__14336) {
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
return cljs.core.get.call(null,self__.__extmap,k14334,else__4140__auto__);

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
temp.core.Blocks.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4144__auto__,k__4145__auto__,G__14333){var self__ = this;
var this__4144__auto____$1 = this;var pred__14337 = cljs.core.keyword_identical_QMARK_;var expr__14338 = k__4145__auto__;if(cljs.core.truth_(pred__14337.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__14338)))
{return (new temp.core.Blocks(G__14333,self__.height,self__.blocks,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14337.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__14338)))
{return (new temp.core.Blocks(self__.width,G__14333,self__.blocks,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14337.call(null,new cljs.core.Keyword(null,"blocks","blocks",-610462153),expr__14338)))
{return (new temp.core.Blocks(self__.width,self__.height,G__14333,self__.__meta,self__.__extmap,null));
} else
{return (new temp.core.Blocks(self__.width,self__.height,self__.blocks,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4145__auto__,G__14333),null));
}
}
}
});
temp.core.Blocks.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blocks","blocks",-610462153),self__.blocks],null))], null),self__.__extmap));
});
temp.core.Blocks.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4136__auto__,G__14333){var self__ = this;
var this__4136__auto____$1 = this;return (new temp.core.Blocks(self__.width,self__.height,self__.blocks,G__14333,self__.__extmap,self__.__hash));
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
temp.core.map__GT_Blocks = (function map__GT_Blocks(G__14335){return (new temp.core.Blocks(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__14335),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__14335),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(G__14335),null,cljs.core.dissoc.call(null,G__14335,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"blocks","blocks",-610462153))));
});
temp.core.createBlocks = (function createBlocks(width,height){var blocks = cljs.core.apply.call(null,cljs.core.vector,cljs.core.take.call(null,(temp.core.w * temp.core.h),cljs.core.repeat.call(null,(0))));return (new temp.core.Block(width,height,blocks));
});
temp.core.block = (function block(blocks,p__14341){var vec__14343 = p__14341;var x = cljs.core.nth.call(null,vec__14343,(0),null);var y = cljs.core.nth.call(null,vec__14343,(1),null);if((((0) < x)) || (true) || (((0) < y)) || ((y >= blocks.height())))
{return null;
} else
{return cljs.core.nth.call(null,blocks,(x + (temp.core.w * y)));
}
});
temp.core.out_QMARK_ = (function out_QMARK_(blocks,p__14344){var vec__14346 = p__14344;var x = cljs.core.nth.call(null,vec__14346,(0),null);var y = cljs.core.nth.call(null,vec__14346,(1),null);return (temp.core.block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)) == null);
});
temp.core.wall_QMARK_ = (function wall_QMARK_(blocks,p__14347){var vec__14349 = p__14347;var x = cljs.core.nth.call(null,vec__14349,(0),null);var y = cljs.core.nth.call(null,vec__14349,(1),null);if(!(temp.core.out_QMARK_.call(null,blocks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))
{return cljs.core._EQ_.call(null,(1),temp.core.block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else
{return null;
}
});
temp.core.ground_QMARK_ = (function ground_QMARK_(blocks,p__14350){var vec__14352 = p__14350;var x = cljs.core.nth.call(null,vec__14352,(0),null);var y = cljs.core.nth.call(null,vec__14352,(1),null);return null;
});
temp.core.wall_height = (function wall_height(blocks,p__14353){var vec__14355 = p__14353;var x = cljs.core.nth.call(null,vec__14355,(0),null);var y = cljs.core.nth.call(null,vec__14355,(1),null);return (1);
});
temp.core.hole_QMARK_ = (function hole_QMARK_(blocks,p__14356){var vec__14358 = p__14356;var x = cljs.core.nth.call(null,vec__14358,(0),null);var y = cljs.core.nth.call(null,vec__14358,(1),null);return false;
});
temp.core.hole_width = (function hole_width(blocks,p__14359){var vec__14361 = p__14359;var x = cljs.core.nth.call(null,vec__14361,(0),null);var y = cljs.core.nth.call(null,vec__14361,(1),null);return (1);
});
temp.core.hole_height = (function hole_height(blocks,p__14362){var vec__14364 = p__14362;var x = cljs.core.nth.call(null,vec__14364,(0),null);var y = cljs.core.nth.call(null,vec__14364,(1),null);return (1);
});
temp.core.peek_left = (function peek_left(p__14365){var vec__14367 = p__14365;var x = cljs.core.nth.call(null,vec__14367,(0),null);var y = cljs.core.nth.call(null,vec__14367,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null).call(null);
});
temp.core.peek_right = (function peek_right(p__14368){var vec__14370 = p__14368;var x = cljs.core.nth.call(null,vec__14370,(0),null);var y = cljs.core.nth.call(null,vec__14370,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null).call(null);
});
temp.core.find_roads = (function find_roads(blocks,p__14371,p__14372){var vec__14375 = p__14371;var x = cljs.core.nth.call(null,vec__14375,(0),null);var y = cljs.core.nth.call(null,vec__14375,(1),null);var map__14376 = p__14372;var map__14376__$1 = ((cljs.core.seq_QMARK_.call(null,map__14376))?cljs.core.apply.call(null,cljs.core.hash_map,map__14376):map__14376);var ability = map__14376__$1;var gojump = cljs.core.get.call(null,map__14376__$1,new cljs.core.Keyword(null,"gojump","gojump",2060557006));var jump = cljs.core.get.call(null,map__14376__$1,new cljs.core.Keyword(null,"jump","jump",-971319427));var check_jump = ((function (vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump){
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
});})(vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump))
;var check_gojump = ((function (check_jump,vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump){
return (function (peek,roads){if(temp.core.hole_QMARK_.call(null,blocks,peek))
{return cljs.core.reduce.call(null,((function (check_jump,vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump){
return (function (roads__$1,dx){var peekx = temp.core.peek_right.call(null,blocks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.nth.call(null,peek,(0)) + dx),cljs.core.nth.call(null,peek,(1))], null));var hole_height = temp.core.hole_height.call(null,peekx);return cljs.core.conj.call(null,roads__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gojump","gojump",2060557006),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,peekx,(0)),hole_height], null)], null));
});})(check_jump,vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump))
,roads,cljs.core.range.call(null,(0),gojump));
} else
{return null;
}
});})(check_jump,vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump))
;var check_walk = ((function (check_jump,check_gojump,vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump){
return (function (peek,roads){if(cljs.core.truth_(temp.core.ground_QMARK_.call(null,peek)))
{return cljs.core.conj.call(null,roads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk","walk",32921637),peek], null));
} else
{return roads;
}
});})(check_jump,check_gojump,vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump))
;var check_one = ((function (check_jump,check_gojump,check_walk,vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump){
return (function (roads,peek){return cljs.core.reduce.call(null,((function (check_jump,check_gojump,check_walk,vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump){
return (function (road,f){return f.call(null,peek,road);
});})(check_jump,check_gojump,check_walk,vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump))
,temp.core.road,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [check_jump,check_gojump,check_walk], null));
});})(check_jump,check_gojump,check_walk,vec__14375,x,y,map__14376,map__14376__$1,ability,gojump,jump))
;return cljs.core.reduce.call(null,check_one,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [temp.core.peek_right.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),temp.core.peek_left.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null));
});
temp.core.node_key = (function node_key(node){return null;
});
temp.core.astar = (function astar(net,start,end,ability){var open = cljs.core._conj.call(null,cljs.core.List.EMPTY,temp.core.node_key.call(null,start));var nodes = new cljs.core.PersistentArrayMap.fromArray([temp.core.node_key.call(null,start),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,null,null,(0)], null)], true, false);var times = (0);while(true){
if(cljs.core.empty_QMARK_.call(null,open))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null);
} else
{var sorted = cljs.core.sort_by.call(null,((function (open,nodes,times){
return (function (key){return cljs.core.get.call(null,nodes,key).cost();
});})(open,nodes,times))
,open);var vec__14381 = cljs.core.get.call(null,nodes,temp.core.node_key.call(null,cljs.core.first.call(null,sorted)));var currnode = cljs.core.nth.call(null,vec__14381,(0),null);var _ = cljs.core.nth.call(null,vec__14381,(1),null);var ___$1 = cljs.core.nth.call(null,vec__14381,(2),null);var allcost = cljs.core.nth.call(null,vec__14381,(3),null);if(cljs.core._EQ_.call(null,end,currnode))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,temp.core.build_path.call(null,nodes,currnode)], null);
} else
{if(((10000) > times))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var nopen = cljs.core.drop.call(null,(1),sorted);var roads = temp.core.find_roads.call(null,net,currnode,ability);var modifyNodes = ((function (open,nodes,times,nopen,roads,sorted,vec__14381,currnode,_,___$1,allcost){
return (function (nodes__$1,road){var vec__14382 = road;var action = cljs.core.nth.call(null,vec__14382,(0),null);var nextnode = cljs.core.nth.call(null,vec__14382,(1),null);var cost = cljs.core.nth.call(null,vec__14382,(2),null);var vec__14383 = (cljs.core.truth_(cljs.core.get.call(null,nodes__$1,temp.core.node_key.call(null,temp.core.node)))?cljs.core.get.call(null,nodes__$1,temp.core.node_key.call(null,temp.core.node)):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,(99999)], null));var ___$2 = cljs.core.nth.call(null,vec__14383,(0),null);var ___$3 = cljs.core.nth.call(null,vec__14383,(1),null);var ___$4 = cljs.core.nth.call(null,vec__14383,(2),null);var oricost = cljs.core.nth.call(null,vec__14383,(3),null);if((((allcost + cost) + (10)) < (oricost + (10))))
{return cljs.core.assoc.call(null,nodes__$1,temp.core.node_key.call(null,nextnode),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextnode,currnode,action,((allcost + cost) + (10))], null));
} else
{return nodes__$1;
}
});})(open,nodes,times,nopen,roads,sorted,vec__14381,currnode,_,___$1,allcost))
;{
var G__14384 = cljs.core.reduce.call(null,cljs.core.conj,nopen,cljs.core.map.call(null,((function (open,nodes,times,nopen,roads,modifyNodes,sorted,vec__14381,currnode,_,___$1,allcost){
return (function (p1__14377_SHARP_){return temp.core.node_key.call(null,cljs.core.nth.call(null,p1__14377_SHARP_,(0)));
});})(open,nodes,times,nopen,roads,modifyNodes,sorted,vec__14381,currnode,_,___$1,allcost))
,roads));
var G__14385 = cljs.core.reduce.call(null,modifyNodes,nodes,roads);
var G__14386 = (times + (1));
open = G__14384;
nodes = G__14385;
times = G__14386;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
temp.core.main = (function main(){var ary = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null);var total = cljs.core.reduce.call(null,((function (ary){
return (function (sum,curr){return (sum + curr);
});})(ary))
,(0),ary);var ary2 = cljs.core.map.call(null,((function (ary,total){
return (function (v){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),v,new cljs.core.Keyword(null,"value","value",305978217),(v * v)], null);
});})(ary,total))
,ary);console.log(total);
return console.log(cljs.core.pr_str.call(null,ary2));
});
temp.core.main.call(null);
