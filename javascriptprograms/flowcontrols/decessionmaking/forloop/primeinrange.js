var lowerlimit = 5;
var upperlimit = 25;

// for iterating from low limit to upper limit
for(let i = lowerlimit; i<=upperlimit; i++){      //5 6
    let flag = 0;
    // looping from 2 to upperlimit
    for(let j = 2; j < i; j++){        // 2<5  2<6
        if(i%j==0){      //2%5==0
            flag=1;   // flag=0
            break;
        }
    }
    if(flag==0){
        console.log(i);  //5,
    }
}