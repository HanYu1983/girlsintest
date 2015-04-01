// Compiled by ClojureScript 0.0-2268
goog.provide('temp.core');
goog.require('cljs.core');
temp.core.make_blocks = (function make_blocks(w,h){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.take.call(null,(w * h),cljs.core.repeat.call(null,(0))));
});
temp.core.get_block = (function get_block(blocks,w,p__10465){var vec__10467 = p__10465;var x = cljs.core.nth.call(null,vec__10467,(0),null);var y = cljs.core.nth.call(null,vec__10467,(1),null);return cljs.core.nth.call(null,blocks,(x + (w * y)));
});
temp.core.rules = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gojump","gojump",2060557006),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fall","fall",-563374271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null)], null)], null)], null);
temp.core.choose_action = (function choose_action(blocks,w,rules,p__10468,face){var vec__10472 = p__10468;var sx = cljs.core.nth.call(null,vec__10472,(0),null);var sy = cljs.core.nth.call(null,vec__10472,(1),null);var check_block = ((function (vec__10472,sx,sy){
return (function (ox,oy,stock){return cljs.core._EQ_.call(null,temp.core.get_block.call(null,blocks,w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx + (ox * face)),(sy + oy)], null)),stock);
});})(vec__10472,sx,sy))
;var check_rule = ((function (check_block,vec__10472,sx,sy){
return (function (p__10473){var vec__10474 = p__10473;var action = cljs.core.nth.call(null,vec__10474,(0),null);var dess = cljs.core.nth.call(null,vec__10474,(1),null);if(cljs.core.every_QMARK_.call(null,check_block,dess))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last,dess], null)], null);
} else
{return null;
}
});})(check_block,vec__10472,sx,sy))
;var action = cljs.core.some.call(null,check_rule,rules);if(cljs.core.some_QMARK_.call(null,action))
{return action;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null)], null);
}
});
temp.core.find_ground = (function find_ground(blocks,w,p__10475){var vec__10477 = p__10475;var x = cljs.core.nth.call(null,vec__10477,(0),null);var y = cljs.core.nth.call(null,vec__10477,(1),null);return null;
});
temp.core.check_route = (function check_route(blocks,w,rules,p__10479,p__10480){var vec__10488 = p__10479;var ex = cljs.core.nth.call(null,vec__10488,(0),null);var ey = cljs.core.nth.call(null,vec__10488,(1),null);var map__10489 = p__10480;var map__10489__$1 = ((cljs.core.seq_QMARK_.call(null,map__10489))?cljs.core.apply.call(null,cljs.core.hash_map,map__10489):map__10489);var vec__10490 = cljs.core.get.call(null,map__10489__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var sx = cljs.core.nth.call(null,vec__10490,(0),null);var sy = cljs.core.nth.call(null,vec__10490,(1),null);var face = cljs.core.get.call(null,map__10489__$1,new cljs.core.Keyword(null,"face","face",-1356480717));var route = cljs.core.get.call(null,map__10489__$1,new cljs.core.Keyword(null,"route","route",329891309));var prev = cljs.core.get.call(null,map__10489__$1,new cljs.core.Keyword(null,"prev-action","prev-action",893917557));if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ex,ey], null)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,route], null);
} else
{var route_it = ((function (vec__10488,ex,ey,map__10489,map__10489__$1,vec__10490,sx,sy,face,route,prev){
return (function (face__$1){var vec__10491 = temp.core.choose_action.call(null,blocks,w,rules,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),face__$1);var action = cljs.core.nth.call(null,vec__10491,(0),null);var vec__10492 = cljs.core.nth.call(null,vec__10491,(1),null);var ox = cljs.core.nth.call(null,vec__10492,(0),null);var oy = cljs.core.nth.call(null,vec__10492,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__10491,action,vec__10492,ox,oy,vec__10488,ex,ey,map__10489,map__10489__$1,vec__10490,sx,sy,face,route,prev){
return (function (p1__10478_SHARP_){return cljs.core._EQ_.call(null,p1__10478_SHARP_,action);
});})(vec__10491,action,vec__10492,ox,oy,vec__10488,ex,ey,map__10489,map__10489__$1,vec__10490,sx,sy,face,route,prev))
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
});})(vec__10488,ex,ey,map__10489,map__10489__$1,vec__10490,sx,sy,face,route,prev))
;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fall","fall",-563374271),prev))
{return cljs.core.first.call(null,cljs.core.sort_by.call(null,((function (route_it,vec__10488,ex,ey,map__10489,map__10489__$1,vec__10490,sx,sy,face,route,prev){
return (function (p__10493){var vec__10494 = p__10493;var find = cljs.core.nth.call(null,vec__10494,(0),null);var route__$1 = cljs.core.nth.call(null,vec__10494,(1),null);if(cljs.core.truth_(find))
{return cljs.core.count.call(null,route__$1);
} else
{return (9999);
}
});})(route_it,vec__10488,ex,ey,map__10489,map__10489__$1,vec__10490,sx,sy,face,route,prev))
,cljs.core.map.call(null,route_it,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [face,(face * (-1))], null))));
} else
{return route_it.call(null,face);
}
}
});
temp.core.main = (function main(){var root = $("#root");var car = root.find("#car");var x = (10);var y = (40);var ary = [x,y];var multiTwo = ((function (root,car,x,y,ary){
return (function (v){return (v * v);
});})(root,car,x,y,ary))
;var ary2 = _.map(ary,multiTwo);var ary3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(100)], null);var ary4 = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,multiTwo,ary3));var ary5 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(120)], null);var ary6 = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,multiTwo,ary3));console.log(ary4);
console.log(ary2);
console.log(ary);
return console.log(root,car,x,y);
});
temp.core.main.call(null);
