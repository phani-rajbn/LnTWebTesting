//ES6 feature of extending a class into another
const getDate = function (dt) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = dt.getFullYear();
    const month = months[dt.getMonth()];
    const day = dt.getDate();
    return day + " " + month + " " + year;
}

//JS does not have private variables...
class Account{
    constructor(no, name, amount) {
        this.accNo = no;
        this.holder = name;
        this.balance = amount;
    }

    credit(amount){
        const stringExp = `The amount of Rs. ${amount} is added on ${getDate(new Date())}`;//Interpolation syntax in ES6

        //console.log("The amount of Rs. " + amount + "is addded on " + getDate(new Date()));
        console.log(stringExp);
        this.balance += amount;
    }

    debit(amount) {
        if(amount > this.balance)
         throw "Insufficient funds";//To raise an Exception within the function...
        this.balance -= amount; 
    }
}

class SBAccount extends Account{
    calculateInterest(){
        const rate = 6.5/100;
        const bal = this.balance;//U Can access the base members in the derived class...
        const term = 1/4;

        const interest = bal * rate * term;
        this.credit(interest);
    }
}

const acc = new SBAccount(111, "Phaniraj", 5000);
acc.credit(5000);
acc.calculateInterest();
//Exception handling in JS.....

try{
    acc.debit(450000);
}catch(ex){
    console.log(ex);
}finally{
    console.log("All is well!!!!");
}