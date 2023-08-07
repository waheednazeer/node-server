const Student = require('../models/student');

const createStudent = (req, res) => {
    
    
    const student = new Student(req.body);
    student.save()
      .then((data) => {
        
        res.send(data);
      })
  
};

const getAllStudents = (req, res) => {
    
      Student.find({})
        .then((data) => {
          
          res.send(data);
        })
    
  };

  const getStudentById = (req, res) => {
    const id = req.params.id; 
    Student.findById(id)
      .then((data) => {
        
        res.send(data);
      })
  
};

const updateStudent = (req, res) => {
    const id = req.params.id; 
    Student.findByIdAndUpdate(id, req.body, { new: true })
      .then((data) => {
        
        res.send(data);
      })
  
};
const deleteStudent = (req, res) => {
    const id = req.params.id; 
    Student.findByIdAndDelete(id)
      .then((data) => {
        
        res.send(data);
      })
  
};


  module.exports= {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};