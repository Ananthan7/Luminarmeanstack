function sub(num1,num2){
    if(num1<num2){
        let temp=num1;
        num1=num2;
        num2=temp;
    }
    return num1-num2
}
console.log(sub(10,20));

// arrow function

var sub=(num1,num2) => {
    if(num1<num2){
        let temp=num1;
        num1=num2;
        num2=temp;
    }
    return num1-num2
}
console.log(sub(10,20));