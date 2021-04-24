var arr=[1,2,11,8,9];

// sum of nums
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

// minimum value
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);

// find highest salary
var employees=[
    {eid:1000,ename:"ajay",salary:25000},
    {eid:1000,ename:"vijay",salary:22000},
    {eid:1000,ename:"kjay",salary:26000}
    
]

var emp=employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
console.log(emp.ename+","+emp.salary);

// sorting
var srt=arr.sort((num1,num2)=>num1-num2)
console.log(srt);
