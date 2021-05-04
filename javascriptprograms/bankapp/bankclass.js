
class Bank{
    static getAccountDetails(){
        let users={
            1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
            1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
            1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
            1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
        }

        return users

    }
    static authenticate(acno,username,password){
        let users=Bank.getAccountDetails()

        if(acno in users){
            if(username==users[acno]["username"] & password==users[acno]["password"]){
                return 1;
            }else{
                return 0; //invalid username or password
            }
        }else{
            return -1;//invalid acno
        }

    }
    static login(){
        let accno=acno.value;
        let username=uname.value;
        let password=pwd.value;
        let user=Bank.authenticate(accno,username,password)
        if(user == 1){
            window.location.href="user.html"
        }
        else if(user == 0){
            alert("invalid username or password");
        }
        else if(user == -1){
            alert("invalid account number");
        }

    }
    static withdrawal(){
        let accno=acno.value;
        let username=uname.value;
        let password=pwd.value;
        let amount=amnt.value
        let user=Bank.authenticate(accno,username,password)
        let users=Bank.getAccountDetails()
        if (user == 1){
            let bal = users[accno]["balance"];
            bal -= amount;
            let value=`<h3>debited Rs : ${amount} balance is ${bal}</h3>`
            document.querySelector("#resultarea").innerHTML=value

        }

    }
    deposit(){
        let accno=acno.value;
        let username=uname.value;
        let password=pwd.value;
        let amount=amnt.value
        let user=Bank.authenticate(accno,username,password)
        let users=Bank.getAccountDetails()
        if (user == 1){
            let bal = users[accno]["balance"];
            bal += amount;
            let value=`<h3>Added Rs : ${amount} balance is ${bal}</h3>`
            document.querySelector("#resultarea").innerHTML=value

        }

    }
    static checkBalance(){
        let accno=acno.value;
        let username=uname.value;
        let password=pwd.value;
        let user=Bank.authenticate(accno,username,password)
        let users=Bank.getAccountDetails()
        if(user == 1){
            let bal=users[accno]["balance"];
            let value=`<h3>balance is ${bal}</h3>`
            document.querySelector("#result").innerHTML=value
        }
    }
}