
## Queries

## student mutation 

mutation{
  addStudent(
    year: 2022, 
    semester: "Fall",
    profile: {
      name: "Mady",
      imgUrl: "fake img",
      phone: "111 222 3333",
    address: "City"
    },
    courses: ["course 1", "course 2"]
    
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

## Updating entry

mutation{
  updateStudent(
    id: "64d089a11f093a19bc0223e8",
    courses: ["MATH 112X", "GESCI 205"]
  
  )
  {
    courses
  }
  
  
}

## for all studetns query
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

## for single query
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

## delete

mutation{
  deleteStudent(id: "64d08a807c7abd230b045a53"){
    id
  }
}
