var arr=[2,3,4,6];
var num=7;
var flag=0;

for(var i of arr){//i=1 i=2
    for(var j of arr){ //j=1 j=2
        if(num==i+j && i!=j){ //i+j==7 1+2==6 1+3==7 1+4 1+
            console.log(i,j);
            break;
        }
        
    }
}



//  searching with position
// for (let i=0; i<arr; i++){
//     if(arr[i]==num){
//         flag=1;
//         break;
//     }
// } 