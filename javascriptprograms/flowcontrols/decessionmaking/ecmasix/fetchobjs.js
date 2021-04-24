var temp=[
    {distname:"tvm", temp:24},
    {distname:"ekm", temp:25},
    {distname:"tsr", temp:26},
    {distname:"apy", temp:27},
    {distname:"ktm", temp:30},
    {distname:"pkd", temp:28},
    {distname:"knr", temp:24},
    {distname:"tvm", temp:25},
    {distname:"ekm", temp:29},
    {distname:"tsr", temp:25},
    {distname:"apy", temp:26},
    {distname:"ktm", temp:28},
    {distname:"pkd", temp:29},
    {distname:"knr", temp:27},
]

var result={}
for(let data of temp){
    if(data.distname in result){

    }else{
        result[data.distname]=data["temp"]
    }
}
console.log(result);
