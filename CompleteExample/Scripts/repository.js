class employee{
    constructor(id, name, email, salary, pic) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.pic = pic;
    }
}

class empRepository{
    
    constructor() {
        this.employees = [];//property called employees of the type array initialized to blank array...
    }

    addNewEmployee(emp){
        //Used to Post data into a REST server in an async manner....
        const url = "http://localhost:3000/employees";
        $.post(url, emp, (data)=>{
            alert("Employee inserted successfully to the Server")
        });
    }

    getAllEmployees(){
       const promise = new Promise((success, failure)=>{
           const url = "http://localhost:3000/employees";
           //get is async, so create a Promise Object and in the callback of the data, U return the success(data) with data of the get as arg(Return value)
           $.get(url, (data) => {
               this.employees = data;
               success(this.employees);
           }); 
       });
       return promise;  
    }

    getEmployee(id){
        const promise = new Promise((res, err)=>{
            const url = "http://localhost:3000/employees/" + id;
            $.get(url, (data)=>{
                res(data);
            })
        })
        return promise;
    }

    updateEmployee(emp){
        const url = "http://localhost:3000/employees/" + emp.id;
        $.ajax({
            url: url,
            data : emp,
            method:"PUT",
            success: (data)=>{
                alert("Employee updated successfully")
            }
        })
    }
}