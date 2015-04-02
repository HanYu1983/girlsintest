// Compiled by ClojureScript 0.0-2268
goog.provide('temp.core');
goog.require('cljs.core');
temp.core.make_blocks = (function make_blocks(w,h){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.take.call(null,(w * h),cljs.core.repeat.call(null,(0))));
});
temp.core.get_block = (function get_block(blocks,w,p__40647){var vec__40649 = p__40647;var x = cljs.core.nth.call(null,vec__40649,(0),null);var y = cljs.core.nth.call(null,vec__40649,(1),null);return cljs.core.nth.call(null,blocks,(x + (w * y)));
});
temp.core.rules = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gojump","gojump",2060557006),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fall","fall",-563374271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null)], null)], null)], null);
temp.core.choose_action = (function choose_action(blocks,w,rules,p__40650,face){var vec__40654 = p__40650;var sx = cljs.core.nth.call(null,vec__40654,(0),null);var sy = cljs.core.nth.call(null,vec__40654,(1),null);var check_block = ((function (vec__40654,sx,sy){
return (function (ox,oy,stock){return cljs.core._EQ_.call(null,temp.core.get_block.call(null,blocks,w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx + (ox * face)),(sy + oy)], null)),stock);
});})(vec__40654,sx,sy))
;var check_rule = ((function (check_block,vec__40654,sx,sy){
return (function (p__40655){var vec__40656 = p__40655;var action = cljs.core.nth.call(null,vec__40656,(0),null);var dess = cljs.core.nth.call(null,vec__40656,(1),null);if(cljs.core.every_QMARK_.call(null,check_block,dess))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last,dess], null)], null);
} else
{return null;
}
});})(check_block,vec__40654,sx,sy))
;var action = cljs.core.some.call(null,check_rule,rules);if(cljs.core.some_QMARK_.call(null,action))
{return action;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null)], null);
}
});
temp.core.find_ground = (function find_ground(blocks,w,p__40657){var vec__40659 = p__40657;var x = cljs.core.nth.call(null,vec__40659,(0),null);var y = cljs.core.nth.call(null,vec__40659,(1),null);return null;
});
temp.core.check_route = (function check_route(blocks,w,rules,p__40661,p__40662){var vec__40670 = p__40661;var ex = cljs.core.nth.call(null,vec__40670,(0),null);var ey = cljs.core.nth.call(null,vec__40670,(1),null);var map__40671 = p__40662;var map__40671__$1 = ((cljs.core.seq_QMARK_.call(null,map__40671))?cljs.core.apply.call(null,cljs.core.hash_map,map__40671):map__40671);var vec__40672 = cljs.core.get.call(null,map__40671__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var sx = cljs.core.nth.call(null,vec__40672,(0),null);var sy = cljs.core.nth.call(null,vec__40672,(1),null);var face = cljs.core.get.call(null,map__40671__$1,new cljs.core.Keyword(null,"face","face",-1356480717));var route = cljs.core.get.call(null,map__40671__$1,new cljs.core.Keyword(null,"route","route",329891309));var prev = cljs.core.get.call(null,map__40671__$1,new cljs.core.Keyword(null,"prev-action","prev-action",893917557));if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ex,ey], null)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,route], null);
} else
{var route_it = ((function (vec__40670,ex,ey,map__40671,map__40671__$1,vec__40672,sx,sy,face,route,prev){
return (function (face__$1){var vec__40673 = temp.core.choose_action.call(null,blocks,w,rules,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),face__$1);var action = cljs.core.nth.call(null,vec__40673,(0),null);var vec__40674 = cljs.core.nth.call(null,vec__40673,(1),null);var ox = cljs.core.nth.call(null,vec__40674,(0),null);var oy = cljs.core.nth.call(null,vec__40674,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__40673,action,vec__40674,ox,oy,vec__40670,ex,ey,map__40671,map__40671__$1,vec__40672,sx,sy,face,route,prev){
return (function (p1__40660_SHARP_){return cljs.core._EQ_.call(null,p1__40660_SHARP_,action);
});})(vec__40673,action,vec__40674,ox,oy,vec__40670,ex,ey,map__40671,map__40671__$1,vec__40672,sx,sy,face,route,prev))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"gojump","gojump",2060557006)], null))))
{return check_route.call(null,blocks,w,rules,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ex,ey], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx + (ox * face__$1)),(sy + (oy * face__$1))], null),new cljs.core.Keyword(null,"face","face",-1356480717),face__$1,new cljs.core.Keyword(null,"route","route",329891309),cljs.core.conj.call(null,route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ox,oy], null)], null)),new cljs.core.Keyword(null,"prev-action","prev-action",893917557),action], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fall","fall",-563374271),action))
{return check_route.call(null,blocks,w,rules,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ex,ey], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),temp.core.find_ground.call(null,blocks,w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null)),new cljs.core.Keyword(null,"face","face",-1356480717),face__$1,new cljs.core.Keyword(null,"route","route",329891309),cljs.core.conj.call(null,route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,temp.core.find_ground.call(null,blocks,w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null))], null)),new cljs.core.Keyword(null,"prev-action","prev-action",893917557),action], null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,route], null);
} else
{return null;
}
}
}
});})(vec__40670,ex,ey,map__40671,map__40671__$1,vec__40672,sx,sy,face,route,prev))
;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fall","fall",-563374271),prev))
{return cljs.core.first.call(null,cljs.core.sort_by.call(null,((function (route_it,vec__40670,ex,ey,map__40671,map__40671__$1,vec__40672,sx,sy,face,route,prev){
return (function (p__40675){var vec__40676 = p__40675;var find = cljs.core.nth.call(null,vec__40676,(0),null);var route__$1 = cljs.core.nth.call(null,vec__40676,(1),null);if(cljs.core.truth_(find))
{return cljs.core.count.call(null,route__$1);
} else
{return (9999);
}
});})(route_it,vec__40670,ex,ey,map__40671,map__40671__$1,vec__40672,sx,sy,face,route,prev))
,cljs.core.map.call(null,route_it,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [face,(face * (-1))], null))));
} else
{return route_it.call(null,face);
}
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
