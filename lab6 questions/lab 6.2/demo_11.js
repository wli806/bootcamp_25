// 字符串的常用操作
var str = 'HelloWorld';
console.log(str.concat('!')); 		// 在字符串末尾拼接字符   HelloWorld!
console.log(str.slice(1, 6)); 		// 截取从索引1开始到索引6的内容  elloW
console.log(str.substring(7)); 	                 // 截取从索引7开始到最后的内容    rld
console.log(str.substring(6, 8)); 	// 截取从索引6开始到索引8的内容 or
console.log(str.substr(3)); 		// 截取从索引3开始到字符串结尾的内容  loWorld
console.log(str.substring(5, 7)); 	// 截取从索引5开始到索引7的内容 Wo
console.log(str.toLowerCase());	// 将字符串转换为小写  helloworld
console.log(str.toUpperCase());	// 将字符串转换为大写  HELLOWORLD
console.log(str.split('l')); 		// 使用'l'切割字符串   ['He', '', 'oWor', 'd']
console.log(str.split('l', 3)); 		// 限制最多切割3份  ['He', '', 'oWor']
console.log(str.replace('World', '!')); 	// 替换字符串    Hello!

// https://xxx?title=abc&content=456
let param = "title=abc&content=456";
let arr = param.split("&");   
console.log(arr);   // ['title=abc', 'content=456']
let obj = {};
for(let i = 0; i < arr.length; i++){
    let itemArr = arr[i].split('=');
    obj[itemArr[0]] = itemArr[1];
}
console.log(obj);   // {title: 'abc', content: '456'}