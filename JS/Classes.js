//Syntax of creating Classes in js with ES6 version
//class keyword was introduced from ES6 onwards. 
class employee{
    constructor(id, name, address) {
        this.empId = id;
        this.empName = name;
        this.empAddress = address;
    }
    
    display(){
        alert("The Name is " + this.empName);
        alert("The Address is " + this.empAddress);
        alert("The Id is " + this.empId);
    }   
}

const empObj = new employee(123, "Phaniraj", "Bangalore");
console.log(empObj);//Object
console.log(JSON.stringify(empObj));//Data in string format...
