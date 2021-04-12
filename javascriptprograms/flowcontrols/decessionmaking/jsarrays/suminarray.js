var arr=[2,3,4,6];
var num=7;
var flag=0;

for(var i of arr){
    for(var j of arr){
        if(num==i+j){
            console.log(i,j);
        }
        
    }
}