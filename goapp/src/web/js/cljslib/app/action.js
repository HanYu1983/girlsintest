// Compiled by ClojureScript 0.0-2268
goog.provide('app.action');
goog.require('cljs.core');
goog.require('app.fn');
goog.require('app.fn');
app.action.Unuse = (function Unuse(fns){return (function (ctx,args){return ctx;
});
});
/**
* @param {...*} var_args
*/
app.action.ComposeAction = (function() { 
var ComposeAction__delegate = function (fns){return (function (ctx,args){return cljs.core.reduce.call(null,(function (ctx__$1,f){return f.call(null,ctx__$1,args);
}),ctx,cljs.core.apply.call(null,cljs.core.vector,fns));
});
};
var ComposeAction = function (var_args){
var fns = null;if (arguments.length > 0) {
  fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ComposeAction__delegate.call(this,fns);};
ComposeAction.cljs$lang$maxFixedArity = 0;
ComposeAction.cljs$lang$applyTo = (function (arglist__12149){
var fns = cljs.core.seq(arglist__12149);
return ComposeAction__delegate(fns);
});
ComposeAction.cljs$core$IFn$_invoke$arity$variadic = ComposeAction__delegate;
return ComposeAction;
})()
;
app.action.OpenFullScreen = (function OpenFullScreen(ctx,p__12150){var map__12152 = p__12150;var map__12152__$1 = ((cljs.core.seq_QMARK_.call(null,map__12152))?cljs.core.apply.call(null,cljs.core.hash_map,map__12152):map__12152);var args = map__12152__$1;var model = cljs.core.get.call(null,map__12152__$1,new cljs.core.Keyword(null,"model","model",331153215));window.open(("indexIframe.html?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model.modelKey)));
return ctx;
});
app.action.OpenPhotoUrl = (function OpenPhotoUrl(ctx,p__12153){var map__12155 = p__12153;var map__12155__$1 = ((cljs.core.seq_QMARK_.call(null,map__12155))?cljs.core.apply.call(null,cljs.core.hash_map,map__12155):map__12155);var args = map__12155__$1;var basicUrl = cljs.core.get.call(null,map__12155__$1,new cljs.core.Keyword(null,"basicUrl","basicUrl",148043881));window.open(app.fn.ServeImagePath.call(null,basicUrl),"_blank");
return ctx;
});
app.action.ChangeLogo = (function ChangeLogo(p__12157,p__12158){var map__12171 = p__12157;var map__12171__$1 = ((cljs.core.seq_QMARK_.call(null,map__12171))?cljs.core.apply.call(null,cljs.core.hash_map,map__12171):map__12171);var ctx = map__12171__$1;var root = cljs.core.get.call(null,map__12171__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__12172 = p__12158;var map__12172__$1 = ((cljs.core.seq_QMARK_.call(null,map__12172))?cljs.core.apply.call(null,cljs.core.hash_map,map__12172):map__12172);var args = map__12172__$1;var curr_view = cljs.core.get.call(null,map__12172__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var logoNames_12183 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null),"#img_streetProductLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816)], null),"#img_streetSnapLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832)], null),"#img_streetModelsLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Home","Home",1521501280),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"#img_homeLogo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"News","News",942909716)], null),"#img_streetNewsLogo"], null)], null);var seq__12173_12184 = cljs.core.seq.call(null,logoNames_12183);var chunk__12174_12185 = null;var count__12175_12186 = (0);var i__12176_12187 = (0);while(true){
if((i__12176_12187 < count__12175_12186))
{var vec__12177_12188 = cljs.core._nth.call(null,chunk__12174_12185,i__12176_12187);var names_12189 = cljs.core.nth.call(null,vec__12177_12188,(0),null);var logoName_12190 = cljs.core.nth.call(null,vec__12177_12188,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__12173_12184,chunk__12174_12185,count__12175_12186,i__12176_12187,vec__12177_12188,names_12189,logoName_12190,logoNames_12183,map__12171,map__12171__$1,ctx,root,map__12172,map__12172__$1,args,curr_view){
return (function (p1__12156_SHARP_){return cljs.core._EQ_.call(null,p1__12156_SHARP_,curr_view);
});})(seq__12173_12184,chunk__12174_12185,count__12175_12186,i__12176_12187,vec__12177_12188,names_12189,logoName_12190,logoNames_12183,map__12171,map__12171__$1,ctx,root,map__12172,map__12172__$1,args,curr_view))
,names_12189)))
{var G__12178_12191 = root.find(logoName_12190);G__12178_12191.fadeIn((400));
} else
{var G__12179_12192 = root.find(logoName_12190);G__12179_12192.hide();
}
{
var G__12193 = seq__12173_12184;
var G__12194 = chunk__12174_12185;
var G__12195 = count__12175_12186;
var G__12196 = (i__12176_12187 + (1));
seq__12173_12184 = G__12193;
chunk__12174_12185 = G__12194;
count__12175_12186 = G__12195;
i__12176_12187 = G__12196;
continue;
}
} else
{var temp__4126__auto___12197 = cljs.core.seq.call(null,seq__12173_12184);if(temp__4126__auto___12197)
{var seq__12173_12198__$1 = temp__4126__auto___12197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12173_12198__$1))
{var c__4324__auto___12199 = cljs.core.chunk_first.call(null,seq__12173_12198__$1);{
var G__12200 = cljs.core.chunk_rest.call(null,seq__12173_12198__$1);
var G__12201 = c__4324__auto___12199;
var G__12202 = cljs.core.count.call(null,c__4324__auto___12199);
var G__12203 = (0);
seq__12173_12184 = G__12200;
chunk__12174_12185 = G__12201;
count__12175_12186 = G__12202;
i__12176_12187 = G__12203;
continue;
}
} else
{var vec__12180_12204 = cljs.core.first.call(null,seq__12173_12198__$1);var names_12205 = cljs.core.nth.call(null,vec__12180_12204,(0),null);var logoName_12206 = cljs.core.nth.call(null,vec__12180_12204,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__12173_12184,chunk__12174_12185,count__12175_12186,i__12176_12187,vec__12180_12204,names_12205,logoName_12206,seq__12173_12198__$1,temp__4126__auto___12197,logoNames_12183,map__12171,map__12171__$1,ctx,root,map__12172,map__12172__$1,args,curr_view){
return (function (p1__12156_SHARP_){return cljs.core._EQ_.call(null,p1__12156_SHARP_,curr_view);
});})(seq__12173_12184,chunk__12174_12185,count__12175_12186,i__12176_12187,vec__12180_12204,names_12205,logoName_12206,seq__12173_12198__$1,temp__4126__auto___12197,logoNames_12183,map__12171,map__12171__$1,ctx,root,map__12172,map__12172__$1,args,curr_view))
,names_12205)))
{var G__12181_12207 = root.find(logoName_12206);G__12181_12207.fadeIn((400));
} else
{var G__12182_12208 = root.find(logoName_12206);G__12182_12208.hide();
}
{
var G__12209 = cljs.core.next.call(null,seq__12173_12198__$1);
var G__12210 = null;
var G__12211 = (0);
var G__12212 = (0);
seq__12173_12184 = G__12209;
chunk__12174_12185 = G__12210;
count__12175_12186 = G__12211;
i__12176_12187 = G__12212;
continue;
}
}
} else
{}
}
break;
}
return ctx;
});
app.action.ShowFooterOrNot = (function ShowFooterOrNot(p__12214,p__12215){var map__12220 = p__12214;var map__12220__$1 = ((cljs.core.seq_QMARK_.call(null,map__12220))?cljs.core.apply.call(null,cljs.core.hash_map,map__12220):map__12220);var ctx = map__12220__$1;var root = cljs.core.get.call(null,map__12220__$1,new cljs.core.Keyword(null,"root","root",-448657453));var map__12221 = p__12215;var map__12221__$1 = ((cljs.core.seq_QMARK_.call(null,map__12221))?cljs.core.apply.call(null,cljs.core.hash_map,map__12221):map__12221);var args = map__12221__$1;var curr_view = cljs.core.get.call(null,map__12221__$1,new cljs.core.Keyword(null,"curr-view","curr-view",1805336094));var shouldHide_12224 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Product","Product",1806927075),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986)], null);if(cljs.core.truth_(cljs.core.some.call(null,((function (shouldHide_12224,map__12220,map__12220__$1,ctx,root,map__12221,map__12221__$1,args,curr_view){
return (function (p1__12213_SHARP_){return cljs.core._EQ_.call(null,p1__12213_SHARP_,curr_view);
});})(shouldHide_12224,map__12220,map__12220__$1,ctx,root,map__12221,map__12221__$1,args,curr_view))
,shouldHide_12224)))
{var G__12222_12225 = root.find("#mc_footer");G__12222_12225.fadeOut();
} else
{var G__12223_12226 = root.find("#mc_footer");G__12223_12226.fadeIn((400));
}
return ctx;
});
app.action.Navigate = (function Navigate(p__12229,p__12230){var map__12235 = p__12229;var map__12235__$1 = ((cljs.core.seq_QMARK_.call(null,map__12235))?cljs.core.apply.call(null,cljs.core.hash_map,map__12235):map__12235);var ctx = map__12235__$1;var router = cljs.core.get.call(null,map__12235__$1,new cljs.core.Keyword(null,"router","router",1091916230));var map__12236 = p__12230;var map__12236__$1 = ((cljs.core.seq_QMARK_.call(null,map__12236))?cljs.core.apply.call(null,cljs.core.hash_map,map__12236):map__12236);var args = map__12236__$1;var searchKey = cljs.core.get.call(null,map__12236__$1,new cljs.core.Keyword(null,"searchKey","searchKey",1779634634));var id = cljs.core.get.call(null,map__12236__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var react_action = cljs.core.get.call(null,map__12236__$1,new cljs.core.Keyword(null,"react-action","react-action",-1116711177));router.navigate(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Home","Home",1521501280),react_action))?"":(cljs.core.truth_(cljs.core.some.call(null,((function (map__12235,map__12235__$1,ctx,router,map__12236,map__12236__$1,args,searchKey,id,react_action){
return (function (p1__12227_SHARP_){return cljs.core._EQ_.call(null,p1__12227_SHARP_,react_action);
});})(map__12235,map__12235__$1,ctx,router,map__12236,map__12236__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),new cljs.core.Keyword(null,"Model","Model",-1633340081),new cljs.core.Keyword(null,"Product","Product",1806927075)], null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)):(cljs.core.truth_(cljs.core.some.call(null,((function (map__12235,map__12235__$1,ctx,router,map__12236,map__12236__$1,args,searchKey,id,react_action){
return (function (p1__12228_SHARP_){return cljs.core._EQ_.call(null,p1__12228_SHARP_,react_action);
});})(map__12235,map__12235__$1,ctx,router,map__12236,map__12236__$1,args,searchKey,id,react_action))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"StreetSnapList","StreetSnapList",-230935816),new cljs.core.Keyword(null,"ModelList","ModelList",1484397832),new cljs.core.Keyword(null,"ProductList","ProductList",-600506917)], null)))?((cljs.core.some_QMARK_.call(null,searchKey))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,react_action))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(searchKey)+"/0"):cljs.core.name.call(null,react_action)):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.name.call(null,react_action):null)))),(function (){var obj12238 = {"trigger":true};return obj12238;
})());
return ctx;
});
app.action.ShareFB = (function ShareFB(ctx,p__12240){var map__12244 = p__12240;var map__12244__$1 = ((cljs.core.seq_QMARK_.call(null,map__12244))?cljs.core.apply.call(null,cljs.core.hash_map,map__12244):map__12244);var args = map__12244__$1;var model = cljs.core.get.call(null,map__12244__$1,new cljs.core.Keyword(null,"model","model",331153215));vic.facebook.postMessageToMyboard((function (){var obj12246 = {"name":"sdyle","link":(window["location"]["href"]),"picture":("https"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["styleUrl"]))),"caption":(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((model["name"]))+" in sdyle"),"description":(model["modelDetail"]),"callback":((function (map__12244,map__12244__$1,args,model){
return (function (res){if(cljs.core.truth_(res))
{return alert("\u5206\u4EAB\u6210\u529F\uFF01");
} else
{return null;
}
});})(map__12244,map__12244__$1,args,model))
,"err":((function (map__12244,map__12244__$1,args,model){
return (function (p1__12239_SHARP_){return alert(p1__12239_SHARP_);
});})(map__12244,map__12244__$1,args,model))
};return obj12246;
})());
return ctx;
});
app.action.ShowLoadingImage = (function ShowLoadingImage(ctx,p__12247){var map__12249 = p__12247;var map__12249__$1 = ((cljs.core.seq_QMARK_.call(null,map__12249))?cljs.core.apply.call(null,cljs.core.hash_map,map__12249):map__12249);var args = map__12249__$1;var view_obj = cljs.core.get.call(null,map__12249__$1,new cljs.core.Keyword(null,"view-obj","view-obj",-756361017));waitForImages();
return ctx;
});
