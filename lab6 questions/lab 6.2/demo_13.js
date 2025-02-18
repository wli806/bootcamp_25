// reverse() sort()

// reverse() 反转数组
var arr = [1, 2, 30, 0, 20];
arr.reverse();
console.log(arr);      // 输出结果为：[20, 0, 30, 2, 1]

// sort()
// 升序排序
var arr01 = [23, 3, 43, 33, 13];
arr01.sort(function (a, b) {
    return a - b;
});
console.log(arr01);     // 输出结果为：(5) [3, 13, 23, 33, 43]
// 降序排序
arr01.sort(function (a, b) {
    return b - a;
});
console.log(arr01);  // 输出结果为：(5) [43, 33, 23, 13, 3]