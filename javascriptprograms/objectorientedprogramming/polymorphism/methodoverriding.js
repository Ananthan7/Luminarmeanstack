//method overriding
class Parent{
    phone(){
        console.log("note 30")
    }
}
class Child extends Parent{

    phone(){
        console.log("iphone 13");
    }
}

var ch = new Child()
ch.phone()