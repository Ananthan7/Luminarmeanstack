var num1 = 20;
var num2 = 10;
var num3 = 15;

// if num1 is largest
if (num1 > num2 && num1 > num3){
  if(num2 > num3){ 
    console.log(`2nd largest is ${num2}`);
  }else{
    console.log(`2nd largest is ${num3}`);
  }
}

// if num2 is largest
else if(num2 > num1 && num2 > num3){
  if(num1 > num3){
    console.log(`2nd largest is ${num1}`);
  }else{
    console.log(`2nd largest is ${num3}`);
  }
}

// if num3 is largest
else if(num1 > num2){
  console.log(`2nd largest is ${num1}`);
}
else{
  console.log(`2nd largest is ${num2}`);
}

