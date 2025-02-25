// constructor

class Person9{
    private name: string;

    constructor(name: string){
        console.log("name===========", name)
        this.name = name;
    }
}
class Teach3 extends Person9{
    constructor(age: number){
        super('dell');
    }
}

let person9 = new Person9("Lee");
let teach3 = new Teach3(20);