//even numbers
//  var arr=[1,2,11,7,8,9]
// var evens=arr.filter(num=>num%2==0)
// console.log(evens);

// find employe with salary >25000
var employees=[
    {eid:1000,ename:"ajay",salary:25000,desig:"developer"},
    {eid:1000,ename:"vijay",salary:22000,desig:"qa"},
    {eid:1000,ename:"kjay",salary:26000,desig:"developer"}
    
]
var emps=employees.filter(emp=>emp.salary>25000)
console.log(emps);

var empd=employees.filter(emp=>emp.desig=="developer")
console.log(empd);
// only names
var empd=employees.filter(emp=>emp.desig=="developer").map(obj=>obj.ename)
console.log(empd);

var srtemp=employees.sort((emp1,emp2)=>emp1.salary-emp2.salary).map(obj=>obj.salary)
console.log(srtemp);
