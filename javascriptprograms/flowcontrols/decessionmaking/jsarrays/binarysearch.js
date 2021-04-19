// var arr=[10,8,11,7,12,6]
//  arr.sort((i,j) =>i-j)
//  console.log(arr);

//  descending order
// var arr=[10,8,11,7,12,6]
//  arr.sort((i,j) =>j-i)
//  console.log(arr);

 var arr=[7,3,6,2,8,1]
 var element=2;
 var flag=0;
 arr.sort((i,j)=>i+j)
 console.log(arr);


 var low=0, upp=arr.length-1;
 while(low<=upp){
     let mid = Math.floor((low+upp)/2)
     if(element>arr[mid]){
         low=mid+1;
     }else if(element<arr[mid]){
         upp=mid-1;

     }else if(element==arr[mid]){
         flag=1;
         break;
     }
 }
if(flag>0){
    console.log("element found");
}else{
    console.log("not found");
}   
