// JSON.parse()     // 把对象的字符串转换成对象
// JSON.stringify() // 把对象转换成字符串

const jsonString = '{"name": "Alice", "age": 25}';
const user = JSON.parse(jsonString);
console.log(user.name); // 输出: Alice

let obj = {title: 'abc', content: '456'};
let str = JSON.stringify(obj);
console.log(str, typeof str);
