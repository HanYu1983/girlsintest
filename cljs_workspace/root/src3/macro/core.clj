(ns macro.core)

(defmacro makepromise [promise next done]
  `(let [~promise (new js/$.Deferred)]
    (doto ~next
      (.done ~done)
      (.fail #(.reject ~promise %)))
    ~promise))
    
    
(defmacro defview [viewname elemName OpenFn CloseFn [ctx] Body]
  `(defmethod app/CreateAppView ~viewname [~ctx ~'key ~'CreateModel]
      (let [~'CreateElem #(tool.app/CreateElem (js/$ ~elemName) ~'CreateModel nil)
            ~'view (tool.app/CreateView ~'CreateElem ~OpenFn ~CloseFn)]
         (doto (.-elemPromise ~'view)
           (.done ~Body))
          ~'view)))