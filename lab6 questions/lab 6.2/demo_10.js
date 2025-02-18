// 回调函数就是把函数作为参数传递给另一个函数

function cooking(flavour) {
    var food = '香辣土豆丝';
    food = flavour(food);
    return food;
}
var food = cooking(function (food) {
    return food += '微辣';
});
console.log(food);  // 香辣土豆丝微辣