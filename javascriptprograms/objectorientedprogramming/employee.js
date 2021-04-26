// class is blueprint base of a modal

class Employee{
    setEmployee(id,name,desig,salary){
        this.id=id
        this.name=name
        this.desig=desig
        this.salary=salary
    }
    printEmployee(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.desig);
        console.log(this.salary);
    }
}
var obj1 =new Employee()
obj1.setEmployee(1,"akhil","dev",10000)
obj1.printEmployee()