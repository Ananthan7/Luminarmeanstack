class Bank{
    // method for creating account
    constructor(acno,bname,minbal,ifsc_code,actype){
        this.acno=acno;
        this.bname=bname;
        this.bal=minbal;
        this.ifsc_code=ifsc_code;
        this.actype=actype;
    }
    deposit(amount){
        this.bal+=amount;
        console.log(`your ${this.bname} account ${this.acno} has been credited with amount ${amount} aval balance is ${this.bal}`);
    }
    withdraw(amount){
        if(amount<this.bal){
            this.bal-=amount;
            console.log(`your ${this.bname} account ${this.acno} ${this.actype} has been debited with amount ${amount} aval balance is ${this.bal}`);
        }else{
            console.log(`transaction has been cancelled due to insuficient fund`);
        }
    }
    balEnq(){
        console.log(`your aval balance is ${this.bal}`);
    }
}

var obj1=new Bank(10023,"sbi",5000,"sbi123444","savings")
var obj2=new Bank(10021,"sbi",15000,"sbi123444","current")
var obj3=new Bank(10022,"sbi",52000,"sbi123444","savings")
var obj4=new Bank(10033,"sbi",25000,"sbi123444","current")
obj1.withdraw(500)

var users=[];
users.push(obj1)
users.push(obj2)
users.push(obj3)
users.push(obj4)

var savingsusers = users.filter(user=>user.actype=="savings");
console.log(savingsusers);
// sort users according with thier balance
var balSort = users.sort((user1,user2)=>user1.bal-user2.bal);
console.log(balSort);
// print user who have high balance   
var maxbal = users.reduce((user1,user2)=>user1.bal>user2.bal?user1.bal:user2.bal);
console.log(`max balance ${maxbal}`);