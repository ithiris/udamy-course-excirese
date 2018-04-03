/**
 * Created by ithir on 03-04-2018.
 */

function Dog(name,age) {
    this.name =name;
    this.age =age;
    this.bark =function () {
        console.log(this.name +"just barked!");
    }
}

var rusty =new Dog ("rusty",3);
var fido = new Dog("fido",1);

rusty.bark()
fido.bark()