var texts = ["吃東西","耍廢","追劇"]                // 陣列
var speed = 1000;                               // 打字速度
var index = 0;                                  // 編號
var count = 0;                                  // 字數
var id = "type-box"

// // 測試
// document.getElementById("type-box").innerHTML = texts[0];

// 定義方法
function type(){
    var box = document.getElementById(id);

    // 宣告變數 切割完的文字 = 文字陣列[編號].切割(開始位置,切幾個);
    var slice = texts[index].slice(0.2);
    // 盒子.插入內容 = 切割完的文字;
    box.innerHTML = slice;
}

// 當頁面載入完成時執行方法 type
document.addEventListener("DOMContentLoaded",type);