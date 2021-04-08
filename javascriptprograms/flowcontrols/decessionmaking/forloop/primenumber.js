var num = 7;
var flag = 0;
for(let i=2;i<num;i++){//i=2 2<5
    if(num%i==0){
        flag=1;
        break;
    }
}
if(flag==0){
    console.log(`${num} is prime`);
}else{
    console.log(`${num} is not prime`);
}