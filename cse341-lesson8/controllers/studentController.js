const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try{
      const result = await mongodb.getDb().db().collection('student').find();
      result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
      });
    }catch(error){
      const msg=`
    <p>
    Internal server error in (getAllCourse) function<br>
    Error: ${error.message}
    </p>
    `; 
    res.send(msg);
    console.log(error.message);
    }
};

const getMsg= (req, res)=>{
  const msg=`
  <p>
  This is <strong>Node Server</strong> home page<br>
  for accessing all students from database access 
  <a href=http://localhost:8080/students>Students</a>
  </p>
  <p>
  for accessing all courses from database access 
  <a href=http://localhost:8080/courses>Courses</a>
  </p>
  `;

  res.send(msg);

};


const createStudent = async (req, res) => {
  
  const student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dob,
    mobile: req.body.mobile,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country
  };
  const response = await mongodb.getDb().db().collection('student').insertOne(student);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const deleteStudent = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('student').deleteOne({ _id: userId });
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send('Student deleted');
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the Student.');
  }
};

const updateStudent = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dob,
    mobile: req.body.mobile,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('student')
    .replaceOne({ _id: userId }, student);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the student.');
  }
};

module.exports = {
  getAll,
  createStudent,
  getMsg,
  deleteStudent,
  updateStudent
};