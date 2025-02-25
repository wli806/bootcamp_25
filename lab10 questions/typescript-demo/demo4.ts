/**
 * 类
 */
class Person7{
    name: string = "dasf";  // 属性
    getName(){  // 方法
        return this.name;
    }
}
let person7 = new Person7();
console.log(person7.getName())

/**
 * 安装 ts-node工具
 * npm install -g ts-node typescript
 * 运行文件：
 * npx ts-node 文件名
 * 生成一个tsconfig.json文件     npx tsc --init
 */

class Teacher extends Person7{
    getTeacherName(){
        return "Lee";
    }
    // 重写
    getName(){
        let str = super.getName() + "***";  // 调用父类的方法
        return str;
    }
}

let teacher1 = new Teacher();
console.log(teacher1.getName());
console.log(teacher1.getTeacherName());
