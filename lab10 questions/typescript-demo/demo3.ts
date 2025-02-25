/**
 * type关键字主要用于定义类型别名，它要比interface更灵活，可以用于联合类型，交叉类型等。
 */

// 基本用法
type Person4 = {
    name: string;
    age: number;
}
let person4: Person4 = {
    name: 'dasf',
    age: 20
}

// 联合类型
type Status = "loading" | "success" | "error";
function handleRequest(status: Status){
    if(status === 'loading'){
        console.log('加载中....')
    }
    if(status === 'success'){
        console.log('请求成功！');
    }
    if(status === 'error'){
        console.log('请求失败！')
    }
}

// 交叉类型
type Animal = {species: string};
type Person5 = {name: string; age: number};
type Employee = Animal & Person5;
let employee: Employee={
    species: 'Human',
    name: 'daf',
    age: 20
}

// 区别：需要定义这种联合类型或交叉类型时，可以使用type。interface继承用extends，而type用&
