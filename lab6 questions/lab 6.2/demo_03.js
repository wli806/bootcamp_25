// 常用的数组添加和删除方法
let arr = [1, 2, 3, 4, 5];
// 1. push()和unshift()
let len = arr.push(6);
console.log("push():",arr);
console.log('len=', len);
let len2 = arr.unshift(0);
console.log('unshift():', arr);
console.log('len2=', len2);


// push()和unshift()的方法返回值是什么？
// []
// 2. pop()和shift()
let a = arr.pop();
console.log("pop():",arr);
console.log('pop-a:', a);

let b = arr.shift();
console.log("shift():", arr);
console.log('shift-b:', b);
// pop()和shift()的方法返回值是什么？
