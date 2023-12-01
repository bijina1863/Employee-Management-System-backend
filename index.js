//import express
const express=require('express');

//import cors
const cors=require('cors');

//import logic
const logic = require('./services/logic')

//create a server application using the express
const serverApp=express()

//use cors and express
serverApp.use(cors({//to connect two different ports
    origin:'http://localhost:3000'
}))

serverApp.use(express.json())

// server listen

serverApp.listen(8000,()=>{console.log('server listening on port 8000');})

//get all employees api call
serverApp.get('/getEmployees',(req,res)=>{
    logic.getAllEmployee().then((result)=>{
        res.status(result.statusCode).json(result) //array of employees
    })

})

//add an employee api call

serverApp.post('/addEmployees',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result) //array of employees
    })
})

//delete employee api call

serverApp.delete('/deleteEmployee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result) //array of employees
    })
})

//get a particular employee
serverApp.get('/getAnEmployee/:id',(req,res)=>{
    logic.getAnEmp(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result) //array of employees
    })
})

//update an employee details
serverApp.post('/updateAnEmployee/:id',(req,res)=>{
    logic.updateAnEmp(req.params.id,req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result) //array of employees
    })
})