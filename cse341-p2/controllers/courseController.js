const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllCourse = async (req, res) => {
   
  const result = await mongodb.getDb().db().collection('courses').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};


const createCourse = async (req, res) => {
  
  const course = {
    enrolledYear: req.body.enrolledYear,
    enrolledDegree: req.body.enrolledDegree,
    major: req.body.major,
    registeredCourses: req.body.registeredCourses,
    collegeName: req.body.collegeName
    
  };
  const response = await mongodb.getDb().db().collection('courses').insertOne(course);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};


module.exports = {
    getAllCourse,
    createCourse
};