// key value pairs

var employee={
    id:1000,
    name:"ajay",
    exp:2,
    salary:25000,
    location:"kakkanad"
}

// fetching values by key
console.log(employee["name"]);  
console.log(employee.salary);

// check for gender
console.log("gender" in employee);

// adding new key value pair
employee["gender"]="male";
console.log(employee);

// update existing value
// employee["salary"] +=5000
employee.salary += 5000
console.log(employee);