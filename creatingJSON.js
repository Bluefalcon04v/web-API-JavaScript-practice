const json = {
  students: [
    {
      name: "Sam",
      age: 23,
      city: "San Francisco",
    },
    {
      name: "Brusel",
      age: 19,
      city: "New York",
    },
    {
      name: "Ashely",
      age: 21,
      city: "Brazil",
    },
  ],
};

// create JSON object and validate it on jsonlint website if its valid or not

json.students.forEach(function (student) {
  console.log(student.name);
});
