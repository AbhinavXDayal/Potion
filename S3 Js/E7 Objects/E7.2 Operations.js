const InstaUser = {};

InstaUser.Id = "123abc";
InstaUser.Name = "Zack";
InstaUser.IsLoggedIn = false;

const RegularUser = 
{
  Email: "Zack@gmail.com",
  FullName: 
  {
    UserFullName: 
    {
      FirstName: "Zack",
      LastName: "Choi",
    },
  },
};

console.log(RegularUser.FullName.UserFullName.FirstName);

const Obj1 = {1: "a", 2: "b"};
const Obj2 = {3: "a", 4: "b"};

const Obj3 = {...Obj1, ...Obj2};
console.log(Obj3);

const Users = 
[
  {
    Id: 1,
    Email: "Abhi@gmail.com",
  },

  {
    Id: 2,
    Email: "Zack@gmail.com",
  },
];

console.log(Users[0].Email);

console.log(InstaUser);

console.log(Object.keys(InstaUser));
console.log(Object.values(InstaUser));
console.log(Object.entries(InstaUser));
console.log(InstaUser.hasOwnProperty(`IsLoggedIn`));

const Course = 
{
  CourseName: "Js by Hitesh sir",
  Price: "500",
  CourseInstructor: "Hitesh",
};

const {CourseInstructor} = Course;
console.log(CourseInstructor);

const {CourseInstructor: Instructor} = Course;
console.log(Instructor);