// var arr=[1,2,3,4,5];
// var squ=arr.map(num=>num**2);
// console.log(squ);
// error

var employees=[
    {eid:1000,ename:"ajay",salary:25000},
    {eid:1000,ename:"vijay",salary:22000},
    {eid:1000,ename:"kjay",salary:23000}
    
]
var enames=employees.map(emp=>emp.ename.toUpperCase()); 
console.log(enames);

var esla=employees.map(emp=>emp["salary"])
console.log(esla);