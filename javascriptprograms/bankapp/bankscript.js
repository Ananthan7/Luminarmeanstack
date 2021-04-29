var users={
    1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
    1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
    1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
}

// bal of user with acno 1000
// console.log(users[1000]['balance']);

function login(){
    var username=document.querySelector("#username")
    var acno=document.querySelector("#acnum")
    var password=document.querySelector("#password")

    if(acno in users){
        if(username==users[acno]["username"] & password==users[acno]["password"]){
                alert("login success");
            }else{
                alert("invalid");
            }
        }else{
            alert("invalid acount number");
        }
    }