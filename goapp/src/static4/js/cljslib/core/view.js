// Compiled by ClojureScript 0.0-2268
goog.provide('core.view');
goog.require('cljs.core');
goog.require('core.event');
goog.require('core.event');
goog.require('core.app');
goog.require('core.app');
cljs.core._add_method.call(null,core.app.CreateAppView,new cljs.core.Keyword(null,"Page1","Page1",-154479013),(function (ctx,key,CreateModel){var CreateElem = (function (){return core.app.CreateElem.call(null,$("#tmpl_page1"),CreateModel,null);
});var view = core.app.CreateView.call(null,CreateElem,core.app.FadeIn,core.app.FadeOut);var G__4997_4998 = view.elemPromise;G__4997_4998.done(((function (G__4997_4998,CreateElem,view){
return (function (elem){var btn_page2 = elem.find("#btn_page2");var btn_addhp = elem.find("#btn_addhp");btn_page2.click(((function (btn_page2,btn_addhp,G__4997_4998,CreateElem,view){
return (function (){return core.event.OnPage1BtnClick.onNext("btn_page2");
});})(btn_page2,btn_addhp,G__4997_4998,CreateElem,view))
);
return btn_addhp.click(((function (btn_page2,btn_addhp,G__4997_4998,CreateElem,view){
return (function (){return core.event.OnPage1AddHpBtnClick.onNext(null);
});})(btn_page2,btn_addhp,G__4997_4998,CreateElem,view))
);
});})(G__4997_4998,CreateElem,view))
);
return view;
}));
cljs.core._add_method.call(null,core.app.CreateAppView,new cljs.core.Keyword(null,"Page2","Page2",-553759692),(function (ctx,key,CreateModel){var CreateElem = (function (){return core.app.CreateElem.call(null,$("#tmpl_page2"),CreateModel,null);
});var view = core.app.CreateView.call(null,CreateElem,core.app.FadeIn,core.app.FadeOut);var G__4999_5000 = view.elemPromise;G__4999_5000.done(((function (G__4999_5000,CreateElem,view){
return (function (elem){var btn_page1 = elem.find("#btn_page1");return btn_page1.click(((function (btn_page1,G__4999_5000,CreateElem,view){
return (function (){return core.event.OnPage2BtnClick.onNext("btn_page1");
});})(btn_page1,G__4999_5000,CreateElem,view))
);
});})(G__4999_5000,CreateElem,view))
);
return view;
}));
cljs.core._add_method.call(null,core.app.CreateAppView,new cljs.core.Keyword(null,"Home","Home",1521501280),(function (ctx,key,CreateModel){var CreateElem = (function (){return core.app.CreateElem.call(null,$("#tmpl_home"),CreateModel,null);
});var view = core.app.CreateView.call(null,CreateElem,core.app.FadeIn,core.app.FadeOut);var G__5001_5002 = view.elemPromise;G__5001_5002.done(((function (G__5001_5002,CreateElem,view){
return (function (elem){return null;
});})(G__5001_5002,CreateElem,view))
);
return view;
}));
cljs.core._add_method.call(null,core.app.CreateAppView,new cljs.core.Keyword(null,"StreetSnap","StreetSnap",-1105926986),(function (ctx,key,CreateModel){var CreateElem = (function (){return core.app.CreateElem.call(null,$("#tmpl_streetsnap_list"),CreateModel,null);
});var view = core.app.CreateView.call(null,CreateElem,core.app.FadeIn,core.app.FadeOut);var G__5003_5004 = view.elemPromise;G__5003_5004.done(((function (G__5003_5004,CreateElem,view){
return (function (elem){return null;
});})(G__5003_5004,CreateElem,view))
);
return view;
}));
