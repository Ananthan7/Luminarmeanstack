var arr=[10,11,12,13,14,15]
var odd=[]
var even=[]
for(let num of arr){
    if(num%2==0){
        even.push(num);
    }else{
        odd.push(num)
    }
}
console.log(even);
console.log(odd);

// var arr=[]