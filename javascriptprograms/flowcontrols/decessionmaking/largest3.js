var num1=30, num2=40, num3=50;

if((num1<num2) && (num2<num3)){
    console.log("largest is "+num3);
}
else if((num1<num2) && (num2>num3)){
    console.log("largest is "+num2);
}
else if((num1>num2) && (num1>num3)){
    console.log("largest is "+ num1);
}
else{
    console.log("numbers are equal");
}