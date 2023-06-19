const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('student').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getMsg= (req, res)=>{
  const msg=`
  <p>
  This is <strong>Node Server</strong> home page<br>
  for accessing all students from database access 
  <a href=http://localhost:8080/students>http://localhost:8080/students</a>
  </p>
  <p>
  for accessing all courses from database access 
  <a href=http://localhost:8080/courses>http://localhost:8080/courses</a>
  </p>
  `;

  res.send(msg);

};


const createStudent = async (req, res) => {
  
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dob,
    mobile: req.body.mobile,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country
  };
  const response = await mongodb.getDb().db().collection('student').insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};


module.exports = {
  getAll,
  createStudent,
  getMsg
};