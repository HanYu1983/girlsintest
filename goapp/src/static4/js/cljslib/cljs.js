goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../core/event.js", ['core.event'], ['cljs.core']);
goog.addDependency("../core/app.js", ['core.app'], ['cljs.core']);
goog.addDependency("../core/view.js", ['core.view'], ['cljs.core', 'core.event', 'core.app']);
goog.addDependency("../core/fn.js", ['core.fn'], ['cljs.core']);
goog.addDependency("../core/model.js", ['core.model'], ['core.fn', 'cljs.core']);
goog.addDependency("../core/main.js", ['core.main'], ['core.view', 'cljs.core', 'core.model', 'core.event', 'core.app']);