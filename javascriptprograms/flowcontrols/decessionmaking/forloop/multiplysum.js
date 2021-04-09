var num=3;
var res=0;
var i=1;
var sum=0;

while(i<=num){
    res=res*10+num; // 0*10+3=3 3*10+3=33 33*10+3=333
    console.log(res);
    sum = sum + res;//0+3=3 3+33=36 36+333=369
    i++;

}
console.log(sum); 
// input is 3 then op is 3+33+333=369