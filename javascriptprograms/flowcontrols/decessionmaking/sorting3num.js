// print 3 numbers in sorting order

var num = [2,5,4]

console.log(num.sort());

var num1=170,num2=50,num3=1000
var great1,great2,great3
if((num1>num2)&&(num1>num3)){
        great1=num1
    if(num2>num3){
        great2=num2;
        great3=num3;
    }
    else{
        great2=num3;
        great3=num2
    }
    console.log(`sorted no are ${great1}, ${great2}, ${great3}` )
}
else if((num2>num1)&(num2>num3)){
     great1=num2
    if(num1>num3){
        great2=num1
        great3=num3
    }
    else{
       great2=num3
       great3=num1
    }
    console.log(`sorted no are ${great1}, ${great2}, ${great3}` )
}
else if((num3>num1)&(num3>num2)){
        great1=num3
    if(num1>num2){
        great2=num1
        great3=num2
    }
    else{
        great2=num2
        great3=num1
    }
    
    console.log(`sorted no are ${great1}, ${great2}, ${great3}` )
}