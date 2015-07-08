// Compiled by ClojureScript 0.0-2268
goog.provide('app.auth');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
app.auth.nc = "00000001";
app.auth.calculateResponse = (function calculateResponse(p__13200){var map__13202 = p__13200;var map__13202__$1 = ((cljs.core.seq_QMARK_.call(null,map__13202))?cljs.core.apply.call(null,cljs.core.hash_map,map__13202):map__13202);var a1 = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"a1","a1",553780937));var method = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"method","method",55703592));var uri = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));var nonce = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"nonce","nonce",564330331));var realm = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"realm","realm",-635663575));var qop = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"qop","qop",1691971226));var cnonce = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"cnonce","cnonce",-2013440039));var a2 = CryptoJS.MD5((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)));var digest = CryptoJS.MD5(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,":",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,nonce,app.auth.nc,cnonce,qop,a2], null)))).toString();return digest;
});
app.auth.generateAuthorizationHeader = (function generateAuthorizationHeader(wwwAuthenticationHeader,p__13203){var map__13205 = p__13203;var map__13205__$1 = ((cljs.core.seq_QMARK_.call(null,map__13205))?cljs.core.apply.call(null,cljs.core.hash_map,map__13205):map__13205);var response = cljs.core.get.call(null,map__13205__$1,new cljs.core.Keyword(null,"response","response",-1068424192));var uri = cljs.core.get.call(null,map__13205__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));var username = cljs.core.get.call(null,map__13205__$1,new cljs.core.Keyword(null,"username","username",1605666410));var cnonce = cljs.core.get.call(null,map__13205__$1,new cljs.core.Keyword(null,"cnonce","cnonce",-2013440039));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(wwwAuthenticationHeader)+", username=\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)+"\", uri=\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+"\", response=\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)+"\", nc="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.auth.nc)+", cnonce=\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnonce)+"\"");
});
app.auth.digestAuthParams = (function digestAuthParams(authorization){var formated = clojure.string.replace.call(null,authorization,/Digest /,"");var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (formated){
return (function (p__13208){var vec__13209 = p__13208;var k = cljs.core.nth.call(null,vec__13209,(0),null);var v = cljs.core.nth.call(null,vec__13209,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),clojure.string.replace.call(null,v,/\"/,"")], null);
});})(formated))
,cljs.core.map.call(null,((function (formated){
return (function (pair){return clojure.string.split.call(null,pair,/=/);
});})(formated))
,clojure.string.split.call(null,formated,/, /))));return params;
});
app.auth.auth = (function auth(url){var p = $.Deferred();$.ajax((function (){var obj13216 = {"url":url,"success":((function (p){
return (function (){return p.resolve();
});})(p))
,"error":((function (p){
return (function (xhr){var authorization = xhr.getResponseHeader("WWW-Authenticate");if(cljs.core.truth_(authorization))
{var cnonce = "testCnonce";var map__13217 = app.auth.digestAuthParams.call(null,authorization);var map__13217__$1 = ((cljs.core.seq_QMARK_.call(null,map__13217))?cljs.core.apply.call(null,cljs.core.hash_map,map__13217):map__13217);var nonce = cljs.core.get.call(null,map__13217__$1,new cljs.core.Keyword(null,"nonce","nonce",564330331));var realm = cljs.core.get.call(null,map__13217__$1,new cljs.core.Keyword(null,"realm","realm",-635663575));var qop = cljs.core.get.call(null,map__13217__$1,new cljs.core.Keyword(null,"qop","qop",1691971226));var a1 = CryptoJS.MD5(("hanvic:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(realm)+":gaNGangAnfInAlstEve"));var response = app.auth.calculateResponse.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a1","a1",553780937),a1,new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),url,new cljs.core.Keyword(null,"nonce","nonce",564330331),nonce,new cljs.core.Keyword(null,"realm","realm",-635663575),realm,new cljs.core.Keyword(null,"qop","qop",1691971226),qop,new cljs.core.Keyword(null,"cnonce","cnonce",-2013440039),cnonce], null));var authorizationHeaderValue = app.auth.generateAuthorizationHeader.call(null,authorization,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response","response",-1068424192),response,new cljs.core.Keyword(null,"uri","uri",-774711847),url,new cljs.core.Keyword(null,"username","username",1605666410),"hanvic",new cljs.core.Keyword(null,"cnonce","cnonce",-2013440039),cnonce], null));$.cookie("Authorization",authorizationHeaderValue,(function (){var obj13219 = {"expires":0.1,"path":"/"};return obj13219;
})());
return p.resolve();
} else
{if(cljs.core.truth_($.cookie("Authorization")))
{return p.resolve();
} else
{return p.reject("can't not auth");
}
}
});})(p))
};return obj13216;
})());
return p;
});
app.auth.testFn = (function testFn(){console.log(app.auth.calculateResponse.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"a1","a1",553780937),"a1",new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"uri",new cljs.core.Keyword(null,"nonce","nonce",564330331),"nonce",new cljs.core.Keyword(null,"realm","realm",-635663575),"realm",new cljs.core.Keyword(null,"qop","qop",1691971226),"qop",new cljs.core.Keyword(null,"cnonce","cnonce",-2013440039),"cnonce"], null)));
console.log(app.auth.generateAuthorizationHeader.call(null,"header",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response","response",-1068424192),"res",new cljs.core.Keyword(null,"uri","uri",-774711847),"uri",new cljs.core.Keyword(null,"username","username",1605666410),"username",new cljs.core.Keyword(null,"cnonce","cnonce",-2013440039),"cnonce"], null)));
return console.log(cljs.core.pr_str.call(null,app.auth.digestAuthParams.call(null,"Digest realm=\"realm\", nonce=\"nonce\", opaque=\"opaque\", algorithm=\"algorithm\", qop=\"qop\"")));
});
