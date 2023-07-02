const validator = require('../helpers/validate');

const saveStudent = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    dob: 'required|string',
    mobile: 'required|string',
    email: 'required|email',
    address: 'required|string',
    city: 'required|string',
    country: 'required|string'
  }
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveCourse = (req, res, next) => {
    const validationRule = {
        enrolledYear: 'required|integer',
        enrolledDegree: 'required|string',
        major: 'required|string',
        registeredCourses: 'required|string',
        collegeName: 'required|string',
    }
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };

module.exports = {
  saveStudent,
  saveCourse
};