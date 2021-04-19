// print values from nested array
var employees=[
    [1000,"ram","developer",1,25000],
    [1001,"ravi","developer",2,25000],
    [1002,"raju","qa",3,30000],
    [1003,"nikhil","qa",4,30000],
]
// console.log(employees[0][1]);

for(let employee of employees){
    console.log(employee[1]);
}

// print employee name whose salary is >2200

for(let employ of employees){
    if(employ[4]>25000){
        console.log(employ[1]);
    }
}

// count of total employs
var count=0;
for (let employs of employees){
    if(employs[2]==="developer"){
        count++;
    }
}
console.log(count);