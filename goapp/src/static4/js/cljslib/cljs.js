goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../tool/app.js", ['tool.app'], ['cljs.core']);
goog.addDependency("../core/fn.js", ['core.fn'], ['cljs.core']);
goog.addDependency("../core/event.js", ['core.event'], ['cljs.core']);
goog.addDependency("../core/view.js", ['core.view'], ['tool.app', 'cljs.core', 'core.event']);
goog.addDependency("../core/model.js", ['core.model'], ['core.fn', 'cljs.core']);
goog.addDependency("../core/main.js", ['core.main'], ['core.view', 'tool.app', 'core.fn', 'cljs.core', 'core.model', 'core.event']);
goog.addDependency("../temp/core.js", ['temp.core'], ['cljs.core']);