// print 3 numbers in sorting order

var num1=20;
var num2=15;
var num3=4;

// if num1 is largest
if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`${num3}, ${num2}, ${num1}`);
    }else{
        console.log(`${num2}, ${num3}, ${num1}`);
    } //if num2 is largest
}else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`${num3}, ${num1}, ${num2}`);
    }else{
        console.log(`${num1}, ${num3}, ${num2}`);
    }//if num3 is largest
}else if(num1>num2){
    console.log(`${num2}, ${num1}, ${num3}`);
}else{
    console.log(`${num1}, ${num2}, ${num3}`);
}