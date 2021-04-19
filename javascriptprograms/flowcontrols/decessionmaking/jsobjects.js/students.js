// create an object named student with ..

var students={
    rol:100,
    name:"vinu",
    course:"bca",
    total:150
}
// print student names only

console.log(students.name);

// check for grade key is exist or not
var grade
if(grade in students){
    console.log(" grade exists");
}else{
    console.log("grade not exists");
}

// add new key value pair grade=blus

students["grade"]="b plus";
console.log(students);

// update mark with current mark+50
students["total"] += 50
console.log(students);

for(let key in students){
    console.log(key,":",students[key]);
    
}