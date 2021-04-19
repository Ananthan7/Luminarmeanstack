var text="ABABCC"
// find first recursiv e character

var res={}
for(let ch of text){//A 
    if(ch in res){//A in res B
        console.log(ch+" is the first recursive chara");
        break;
    }else{
        res[ch]=1
    }
}
// res k