var num=123;
var sum=0;
// var numString = num.toString().length;

while(num!=0){//123!=0 12!=0 1!=0 0!=0
    let digit = num%10; //3, 12%10=2 1%10=1
    console.log(digit);//3 2 1
    sum += digit**3; //0+3**3=27, 27+2**3=35, 35+1**3=36
    num=Math.floor(num/10 )//12, 12/10=1
    
}

console.log(sum);