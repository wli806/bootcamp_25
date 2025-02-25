/**
 * js 底层经常进行一些隐式转换，隐藏了一些潜在bug，
 * 所以，在开发应用时，javascript可能就更容易的出错。
 */

// js 底层进行了一个类型转换——隐式的类型转换
if("" == 0){
    console.log("hello.");
}

function compare(x){
    if(1 < x < 3){  // 始终为true
        console.log("hello");
    }
}

let obj = {
    firstName: 'abc',
    lastName: 'Lee'
}
// js是弱类型的语言，不会做类型的校验
console.log(obj.daf, obj.dasfa, c);