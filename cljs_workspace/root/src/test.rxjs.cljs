(ns test.rxjs)

(defn main []
  (let [elem (js/$ "#rxjs")
        onOver (.fromEvent js/Rx.Observable elem "mouseover")
        onOut (.fromEvent js/Rx.Observable elem "mouseout")]
    (.subscribe onOver (fn [elem] (.log js/console elem)))
    (.subscribe onOut (fn [elem] (.log js/console elem)))))

(main)