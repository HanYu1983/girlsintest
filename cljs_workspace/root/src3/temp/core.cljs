(ns temp.core)

(defrecord Blocks [width height blocks])

(defn createBlocks [width height]
  (let [blocks (->> (take (* w h) (repeat 0)) (apply vector))]
    (Block. width height blocks)))
    
(defn block [blocks [x y]]
  (if (or (< 0 x) (>= (.width blocks)) (< 0 y) (>= y (.height blocks)))
    nil
    (nth blocks (->> y (* w) (+ x)))))

(defn out? [blocks [x y]]
  (nil? (block [x y])))
  
(defn wall? [blocks [x y]]
  (if-not (out? blocks [x y])
    (= 1 (block [x y]))))
    
(defn ground? [blocks [x y]])

(defn wall-height [blocks [x y]] 1)
(defn hole? [blocks [x y]] false)
(defn hole-width [blocks [x y]] 1)
(defn hole-height [blocks [x y]] 1)

(defn peek-left [[x y]]
  ([(dec x) y]))
  
(defn peek-right [[x y]]
  ([(inc x) y]))

(defn find-roads [blocks [x y] {:keys [jump gojump] :as ability}]
  (let [check-jump (fn [peek roads]
                      (if-not (out? blocks peek)
                        (if (and (wall? blocks peek) (> jump (wall-height blocks peek)))
                          (conj roads [:jump peek])
                          roads)
                        roads))
        check-gojump (fn [peek roads]
                        (if (hole? blocks peek)
                          (reduce
                            (fn [roads dx]
                              (let [peekx (peek-right blocks [(+ (nth peek 0) dx) (nth peek 1)])
                                    hole-height (hole-height peekx)]
                                (conj roads [:gojump [(nth peekx 0) hole-height]])))
                            roads
                            (range 0 gojump))))
        check-walk (fn [peek roads]
                      (if (ground? peek)
                        (conj roads [:walk peek])
                        roads))
        check-one (fn [roads peek]
                    (->> 
                      [check-jump check-gojump check-walk]
                      (reduce (fn [road f] (f peek road)) road)))]
    (reduce check-one '() [(peek-right [x y]) (peek-left [x y])])))
    
(defn node-key [node])

(defn astar [net start end ability]
  (loop [open (sorted-set-by 
                (fn [node] 
                  (apply + 
                    (-> node (juxt :cost :estimate-cost))))
                {:pos start :cost 0 :estimate-cost (estimate-cost start end) :path nil})
         close #{}
         step 0]
    (cond
      (empty? open)
      [false nil]
      
      (= 1000 step)
      [false nil]
      
      :else
      (let [curr-node (first open)
            open-without-curr (disj open curr-node)
            newclose (conj close (:pos curr-node))]
        (if (some? ((:pos curr-node) close))
          (recur infos open-without-curr newclose (inc step))
          (let [{curr :pos curr-cost :cost} curr-node]
            (if (= end curr)
              [true (:path curr-node)]
              (let [nbrs
                    (map 
                      (fn [{next-pos :pos cost-to-next :cost action :action}] 
                        {:pos next-pos 
                         :cost (+ curr-cost cost-to-next)
                         :estimcate-cost (estimate-cost next-pos end)
                         :path (conj (:path curr-node) [(:pos curr-node) action])})
                      (node-nbrs curr ability))
                      
                    newopen
                    (into open-without-curr nbrs)]
                (recur newopen newclose (inc step)))))))))
              
                          

(defn astar [net start end ability]
  (loop [open (list (node-key start))
         nodes {(node-key start) [start nil nil 0]}
         times 0]
    (if (empty? open)
      [false nil]
      (let [sorted (sort-by (fn [key] (.cost (get nodes key))) open)
            [currnode _ _ allcost] (get nodes (node-key (first sorted)))]
        (cond
          (= end currnode)
          [true (build-path nodes currnode)]
        
          (> 10000 times)
          [false nil]
        
          :else
          (let [nopen (drop 1 sorted)
                roads (find-roads net currnode ability)
                modifyNodes (fn [nodes road]
                              (let [[action nextnode cost] road
                                    [_ _ _ oricost] (if (get nodes (node-key node))
                                                      (get nodes (node-key node))
                                                      [nil nil nil 99999])]
                                (if (< (+ allcost cost 10) (+ oricost 10))
                                  (assoc nodes (node-key nextnode) [nextnode currnode action (+ allcost cost 10)])
                                  nodes)))]
            (recur 
              (reduce conj nopen (map #(node-key (nth % 0)) roads))
              (reduce modifyNodes nodes roads)
              (inc times))))))))
        
(defn main []
  (let [ary [1 2 3]
        total (reduce (fn [sum curr] (+ sum curr)) 0 ary)
        ary2 (map (fn [v] {:id v :value (* v v)}) ary)]
    (.log js/console total)
    (.log js/console (pr-str ary2))))


(main)