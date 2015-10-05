(ns tool.macro)

(defmacro makepromise [promise next done]
  `(let [~promise (new js/$.Deferred)]
    (doto ~next
      (.done ~done)
      (.fail #(.reject ~promise %)))
    ~promise))