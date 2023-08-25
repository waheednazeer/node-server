const Employee = require('../model/database');

const createEmployee = (req, res) => {
    const employee = new Employee(req.body);
    employee.save()
      .then((data) => { 
        res.send(data);
      }) 
};

const getAllEmployees = (req, res) => {
    
    Employee.find({})
      .then((data) => { 
        res.send(data);
      }) 
};



  module.exports= {
    createEmployee,
    getAllEmployees
};