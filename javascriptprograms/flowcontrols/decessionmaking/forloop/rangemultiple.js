//inp multiple power with num and add summ of num 3 b/w 8 and 28 o/p is 2 3
var num=3;
var low=8;
var upper=28;

for(let i=1; i<=num; i++){// 1 2 3
    let digit = i**num//1**3=1 2**3=8 3**3=27
    if(digit>=low && digit <= upper){ //8==8
        console.log(i);
    }
        // console.log(low);
    
}
