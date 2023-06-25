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

const updateCourse = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const course = {
    enrolledYear: req.body.enrolledYear,
    enrolledDegree: req.body.enrolledDegree,
    major: req.body.major,
    registeredCourses: req.body.registeredCourses,
    collegeName: req.body.collegeName
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('courses')
    .replaceOne({ _id: userId }, course);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the course.');
  }
};

const deleteCourse = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('courses').deleteOne({ _id: userId });
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send('Course deleted');
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the Course.');
  }
};

module.exports = {
    getAllCourse,
    createCourse,
    deleteCourse,
    updateCourse
};