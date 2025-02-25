/**
 * ts中引入了一些类型校验
 * ts是js的一个超集，就是在js的基础之上引入了各种各样的类型，
 * 来使得js更加健壮。
 * 
 * vscode 增加了javascript的静态类型校验能力。
 * 静态校验能力：一门语言，在代码执行之前，就能进行错误预警，那么我们就说这个预备静态校验能力。
 */

if("" == ""){   // ts中不同类型之间是不允许进行比较的
    console.log("hello.");
}

function compare(x){
    if(1 < x && x < 3){  
        console.log("hello");
    }
}

let obj = {
    firstName: 'abc',
    lastName: 'Lee'
}

console.log(obj.firstName, obj.lastName);

// 基础类型： string, number, boolean
let teacherName: string = "Lee";
teacherName = "12";
let teacherAge: number = 20;
let isMale: boolean = true;

// 数组
let arrNumber: number[] = [1, 2, 3, 4];
let arrNumber1: Array<number> = [1,2,3,4,5];
let arrString: string[] = ['daf', 'dasf'];
let arrBoolean: Array<boolean> = [true, false];

// 对象
let user: {name: string, age: number} = {
    name: "daf",
    age: 20
}

// 联合类型
function union(id: string | number){
    // 类型收窄
    if(typeof id === 'string'){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}

// 类型别名，解决类型复用
type User = {name: string, age: number};
let userOne: User = {name: 'dasf', age: 20};
let userTwo: User = {name: 'eqwre', age: 18};

// any类型
function showMessage(message: any){ // message可能是任意类型
    console.log(message);
}

// 函数类型
function abc(message: string): number{  // 必须是一个number类型的返回值
    return 123;
}
let def: (age: number) => number = (age: number) => {
    return 123;
}

function getNumber(): void{
    return;
}

// 字面量
function getPosition(position: 'left' | 'right'): string{
    return position;
}

