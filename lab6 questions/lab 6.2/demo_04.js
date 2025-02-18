// 使用splice()方法在数组的指定索引处添加或删除数组元素
let arr = [1,2,3,4,5];
// arr.splice(2, 2);   // 从索引为2处，删除两个元素
// console.log(arr);

// 从索引1开始，删除1个元素，再添加元素100
// arr.splice(1, 1, 100);
// console.log(arr);

// 从索引1处添加200和300
arr.splice(1, 0, 200, 300);
console.log(arr);