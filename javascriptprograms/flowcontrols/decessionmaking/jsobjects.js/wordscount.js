// printing count of words by object accessing values by keys

var text="hello hai hello hai good";
// spliting words into array using split()
var words=text.split(" ") //words=[hello,hai,hello,hai,good]

// storing as an object
var result={}

for(let word of words){
    if(word in result){
        result[word]+=1;
    }else{
        result[word]=1;
    }
}
console.log(result);
// result hello:2 hai:2 good:1