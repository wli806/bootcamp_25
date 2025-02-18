function add(a, b){     // 函数的形参就是变量
    return a+b;
}

var sum = add(1, 2);    // 函数的实参
console.log(sum);

// 改写成箭头函数
const add = (a, b) => {
    return a+b;
}
// const add = (a, b) => a+b;
console.log(add(1,2));