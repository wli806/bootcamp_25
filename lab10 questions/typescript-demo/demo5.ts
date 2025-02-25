/**
 * 访问类型
 * private  允许在类的内部使用
 * protected    允许在类的内部以及继承的子类中使用
 * public   允许在类的内部和外部使用
 */
class Person8{
    protected name: string = "abc";   // 如果不写访问类型，默认的访问类型是public
    public sayHi(){
        console.log(this.name);
    } 
}

class Teacher2 extends Person8{
    public sayBay(){
        console.log(this.name);
    }
}


let person8 = new Person8();
//console.log(person8.name)

