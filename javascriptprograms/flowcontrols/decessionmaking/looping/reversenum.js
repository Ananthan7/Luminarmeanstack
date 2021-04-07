var num=123;
var res="";
while(num!=0){//123!=0 12!=0 1!=0 0!=0
    let digit=num%10; //3, 12%10=2 1%10=1
    console.log(digit);//3 2 1
    res=res+digit;
    num=Math.floor(num/10)//12, 12/10=1, 1/10=0
    
}
console.log(res);