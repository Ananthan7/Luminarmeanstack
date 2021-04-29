function displayBox(num){
    var input=document.querySelector("#inpt")
    input.value+=num
}
function evaluateExpression(equalto){
    var res=inpt.value
    var op=eval(res)
    inpt.value+=equalto+op
}
function clearBox(){
    inpt.value=""
}

function cancel(){
    inpt.value=inpt.value.slice(0, -1)
    
}