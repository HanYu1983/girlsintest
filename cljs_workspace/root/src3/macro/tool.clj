(ns macro.tool)

(defmacro xxx [& args]
  `~args)