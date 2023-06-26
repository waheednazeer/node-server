const mongodb= require('../db/connectDb.js');


const printName= (req, res)=>{
    res.send('Wellcome to Name program');
};
const story= (req, res)=>{
res.send('Story telling is interesting game');
};
const getAll= async (req, res)=>{
 
    const results= await mongodb.getDatabase().db().collection('student').find();
    results.toArray().then((lists)=>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
  
   };

module.exports={printName, story, getAll};