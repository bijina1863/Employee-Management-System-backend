// import db
const db=require('./db')

// get all employee details
const getAllEmployee=()=>{
    return db.Employee.find().then((response)=>{
        if(response){
            return{
                statusCode:200,
                employee:response
            }
        }

        else{
            return{
                statusCode:404,
                message:'No such employee found'
            }
        }
    })

}

//add employee details

    const addEmployee=(id,name,age,designation,salary)=>{
        return db.Employee.findOne({id}).then((result)=>{
            if(result){
                return{
                    statusCode:401,
                    message:"Employee already exists"
                }
            }
            else{
                //store employee details in db
                const newEmployee=db.Employee({id,name,age,designation,salary})
                //to save employee details in db
                newEmployee.save()
                return{
                    statusCode:200,
                    message:"Employee added successfully"
                }
            }
        })
    }

// delete a particular employee from the database
const deleteEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:'Employee deleted successfully'
            }
        }
        else{
            return{
                statusCode:404,
                message:'Employee not found'
            }
        }
       
    })
}

//get a particular employee detail
const getAnEmp=(id)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
    })
}

//update a particular employee details
const updateAnEmp=(empId,id,name,age,designation,salary)=>{
    return db.Employee.findOne({id:empId}).then((result)=>{
        if(result){
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
            result.save();
            return{
                statusCode:200,
                message:"Employee has been updated successfully"
            }
          
        }
        else{
            return{
                statusCode:401,
                message:"Invalid Operation"
            } 
        }
    })
  
}

//view an employee from the database
const viewEmployee=(id)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                anEmployee:result
            }
        }
        else{
            return{
                statusCode:404,
                mess,
                age:"couldn't find employee"
            }
        }
    })
}
module.exports={
    getAllEmployee,
    addEmployee,
    deleteEmployee,
    getAnEmp,
    updateAnEmp


    
}