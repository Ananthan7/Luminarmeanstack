// polymorphism
// method overloading
// method overriding

class Calculation{
    add(){
        console.log("no arg");
    }
    add(num1){
        console.log("one arg");
    }
    add(num1,num2){
        console.log("2 arg");
    }
}

// same method name different number of arguements
var calc = new Calculation();
calc.add(10,20)
calc.add(10)
calc.add()