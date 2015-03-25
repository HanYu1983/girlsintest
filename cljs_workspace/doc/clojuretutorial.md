##基本

* 沒有語法，只有list
* '(0 1 2)代表list
* 但寫成(0 1 2)代表執行一個函數
    * 0 函數
    * 1 參數1
    * 2 參數2
* 這就是為什麼要加上'
* [] 也代表list
* (defn eat [food] food)
    * defn 定義一個方法的函數
    * eat 該方法的名稱
    * [food] 又是一個list。該方法的參數
    * food 回傳了food
    * 這行定義了一個新函數
    
* (eat :apple)
    * eat 函數
    * :apple 參數
    * 這行呼叫了新函數

####定義常數
    (def gamescreen [1024 768])
    
####定義變數
    (def x (atom 0))
    (swap! x inc)  ; x = 1
    (swap! x + 30) ; x = 31
    (reset! x 30)  ; x = 30
    
####定義方法
    (defn function [&args]
        (.log js/console args))
        
> 變數在FP裡的含義是一個記憶體的定點，用來分享資料。基本上FP沒有OOP變數的概念
> 以下方式不是FP的概念
    
    (def power (atom 0))
    (defn addPower [value]
        (swap! power + value))
####arguments和& args
    (def fn []
        (.log js/console js/arguments)  ; js的array
        (.log js/console (aget js/arguments 0)) ; js的array的第一個元素使用aget
        (->>
            (.map js/_ js/arguments #(%)) ; 使用underscore處理js的array
            (apply array)))   ; 將clojure(惰性)序列轉為js的array
        
    (def fn [& args]
        (.log js/console args)  ; clojure的序列
        (.log js/console (first args))  ; clojure的序列的第一個元素使用first
        (->>
            (map #(%) args) ; 使用clojure的map
            (apply array))) ; 將clojure(惰性)序列轉為js的array
###FP如何用常數處理變數