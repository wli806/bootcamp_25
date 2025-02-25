/**
 * ts中，interface和type关键字，都可以定义对象结构，但是它们有一些区别和使用场景上的不同
 */

// interface主要用于定义对象结构
// 基本用法
interface Person{
    name: string;
    age: number;
}
let person:Person = {
    name: 'daf',
    age: 20
}

// 可选属性
interface Person1{
    name: string;
    age?: number;   // 可选属性
}
let person1: Person1 = {
    name: 'dasfd'
}

// 方法
interface Person2{
    name: string;
    compare: Function;
}
let person2:Person2 = {
    name: 'Lee',
    compare: () => {
        console.log("hello.")
    }
}

// 只读属性
interface Person3{
    readonly id: number;    // 只读，不能修改
    name: string;
}
let person3:Person3 = {
    id: 1,
    name: 'Lee'
}
// person3.id = 2;
person3.name = "dasf";

// 接口继承
interface Animal2{
    species: string;
}
interface Person6 extends Animal2{
    name: string;
    age: number;
}
let person6:Person6 = {name: 'daf', age: 20, species: "Human"};
