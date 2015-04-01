(ns temp.core)



(defn make-blocks [w h]
  (->> (take (* w h) (repeat 0))
    (apply vector)))

(defn get-block [blocks w [x y]]
  (nth blocks (->> y (* w) (+ x))))
  
(def rules [
  [:walk [[1 0 0] [1 1 1]]]
  [:jump [[1 0 1] [1 -1 0]]]
  [:gojump [[1 0 0] [1 -1 0] [2 0 0]]]
  [:fall [[1 0 0] [1 1 0]]]])

(defn choose-action [blocks w rules [sx sy] face]
  (let [check-block (fn [ox oy stock]
                      (-> (get-block blocks w [(+ sx (* ox face)) (+ sy oy)]) 
                        (= stock)))
        check-rule (fn [[action dess]]
                      (when (every? check-block dess)
                        [action [last dess]]))
        action (some check-rule rules)]
    (if (some? action)
      action
      [:stop [sx sy]])))
      
(defn find-ground [blocks w [x y]])

(defn check-route [blocks w rules [ex ey] {[sx sy] :pos face :face route :route prev :prev-action}]
  (if (= [sx sy] [ex ey])
    [true route]
    (let [route-it (fn [face]
                    (let [[action [ox oy]] (choose-action blocks w rules [sx sy] face)]
                      (cond
                        (some #(= % action) [:walk :jump :gojump])
                        (check-route blocks w rules [ex ey]
                          {:pos [(+ sx (* ox face)) (+ sy (* oy face))]
                           :face face 
                           :route (conj route [action [ox oy]])
                           :prev-action action})
          
                        (= :fall action)
                        (check-route blocks w rules [ex ey]
                          {:pos (find-ground blocks w [sx sy])
                           :face face
                           :route (conj route [action (find-ground blocks w [sx sy])])
                           :prev-action action})
        
                        :else
                        [false route])))]
      (if (= :fall prev)
        (->> [face (* face -1)]
          (map route-it)
          (sort-by (fn [[find route]] (if find (count route) 9999)))
          first)
        (route-it face)))))
        
(defn main []
  (let [ary [1 2 3]
        total (reduce (fn [sum curr] (+ sum curr)) 0 ary)
        ary2 (map (fn [v] {:id v :value (* v v)}) ary)]
    (.log js/console total)
    (.log js/console (pr-str ary2))))


(main)