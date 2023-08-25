const mongoose = require('mongoose');
const Schema = mongoose.Schema;
   
   const employeeSchema = new Schema(
        {
            "employee_id" : {"type" : "Number"},
            "first_name": {"type":  "String" },
            "last_name": {"type":  "String" },
            "dob": {"type":  "String" }         
            
        });
  
    module.exports = mongoose.model('Employee', employeeSchema);
 
    