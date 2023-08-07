const graphql = require('graphql');
const Student = require('../models/student');

const { 
    GraphQLObjectType, GraphQLString, 
    GraphQLID, GraphQLInt,GraphQLSchema, 
    GraphQLList,GraphQLNonNull,
    GraphQLInputObjectType  
} = graphql;



/******************************************
 * student type for graphql
 * 
 * ***************************************/
const profile_type = new GraphQLObjectType({
    name: 'profile',
    fields: () => ({
      name: { type: GraphQLString },
      imgUrl: { type: GraphQLString },
      phone: { type: GraphQLString },
      address: { type: GraphQLString },
    }),
  });

  // input type

  const profile_input_type = new GraphQLInputObjectType({
    name: 'profile_input',
    fields: () => ({
      name: { type: GraphQLString },
      imgUrl: { type: GraphQLString },
      phone: { type: GraphQLString },
      address: { type: GraphQLString },
    }),
  });

const StudentType = new GraphQLObjectType({
    name: 'Student',
    //We are wrapping fields in the function as we dont want to execute this ultil 
    //everything is inilized. For example below code will throw error AuthorType not 
    //found if not wrapped in a function
    fields: () => ({
        id: { type: GraphQLID  },
        year: { type: GraphQLInt },
        semester: { type: GraphQLString },
        profile: { type: profile_type },
        courses: { type: new GraphQLList(GraphQLString) },
    })
});

// student definition ends

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        student:{
            type: StudentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Student.findById(args.id);
            }
        },
        students:{
            type: new GraphQLList(StudentType),
            resolve(parent, args) {
                return Student.find({});
            }
        }
    }
});
 
//Very similar to RootQuery helps user to add/update to the database.
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addStudent: {
            type: StudentType,
            args: {
                //GraphQLNonNull make these field required
                year: { type: new GraphQLNonNull(GraphQLInt) },
                semester: { type: new GraphQLNonNull(GraphQLString) },
                profile: { type: new GraphQLNonNull(profile_input_type) },
                courses: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
            },
            resolve(parent, args) {
                let student = new Student({
                    year: args.year,
                    semester: args.semester,
                    profile: args.profile,
                    courses: args.courses,
                    
                });
                return student.save();
            }
        },
    deleteStudent: {
        type: StudentType,
        args: {
            //GraphQLNonNull make these field required
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {

            return Student.findByIdAndDelete(args.id);
        }
    },
    updateStudent: {
      type: StudentType,
      args: {
        id: { type: GraphQLID  },
        year: { type: GraphQLInt },
        semester: { type: GraphQLString },
        profile: { type: profile_input_type },
        courses: { type: new GraphQLList(GraphQLString) },
          
      },
      resolve(parent, args) {
        
        return Student.findByIdAndUpdate(args.id, args, {new: true});
      }
  }
}
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
});

/****************************************************************************
Queries

// student mutation 

mutation{
  addStudent(
    year: 2022, 
    semester: "Fall",
    profile: {
      name: "Saeed Ullah",
      imgUrl: "fake img",
      phone: "0321 9232025",
    address: "Islamabad, Pakistan"
    },
    courses: ["CS340", "CS341"]
    
  )
  {
    year
    semester
    courses
    profile{
      name
      imgUrl
      phone
      address   
    }
      
  
}
}

//
mutation{
  updateStudent(
    id: "64d089a11f093a19bc0223e8",
    courses: ["MATH 112X", "GESCI 205"]
  
  )
  {
    courses
  }
  
  
}

// for all studetns query
{
  students{
    id
    year
    profile{
      name
      phone
      address
    }
    courses
  }
}
// for single query
{
  student(id: "64d089a11f093a19bc0223e8"){
    id
    year
    profile{
      name
      phone
      address
    }
    courses
  }
}

// delete
mutation{
  deleteStudent(id: "64d08a807c7abd230b045a53"){
    id
  }
}
******************************************************************************/