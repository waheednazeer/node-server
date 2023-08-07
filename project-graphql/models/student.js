const mongoose = require('mongoose');
const Schema = mongoose.Schema;
   
   const studentSchema = new Schema(
        {
            "year": {
                "type": "Number"
            },
            "semester": {
                "type": "String"
            },
           "profile": {
                "name": {
                    "type": "String"
                },
                "imgUrl": {
                    "type": "String"
                },
                "phone":{
                    "type": "String"
                },
                "address": {
                    "type": "String"
                }
            },
            "courses": {
                "type": [
                    "String"
                ]
            }         
            
        });
  
    module.exports = mongoose.model('Student', studentSchema);
 
    