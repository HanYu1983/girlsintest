(ns temp.core)


(defn main []
  (let [root (js/$ "#root")
        car (.find root "#car")
        x 10
        y 40
        ary (array x y)
        multiTwo (fn [v] (* v v))
        ary2 (.map js/_ ary multiTwo)
        
        ary3 [10 100]
        ary4 (->> (map multiTwo ary3)
                (apply array))
        ary5 [100 120]
        ary6 (apply array (map multiTwo ary3))]
    (.log js/console ary4)
    (.log js/console ary2)
    (.log js/console ary)
    (.log js/console root car x y)))

(main)