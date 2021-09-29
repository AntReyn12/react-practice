import React from "react";

const employeeInfo = [
  {
    firstName: "John",
    lastName: "Smith",
    age: "24",
  },
  {
    firstName: "Kevin",
    lastName: "Hart",
    age: "19",
  },
  {
    firstName: "Anthony",
    lastName: "Reynolds",
    age: "25",
  },
  {
    firstName: "Nick",
    lastName: "Nickerboxer",
    age: "26",
  },
];

const Employee = (props) => {
  const {firstName, lastName, age} = props;
  return (
    <div>
      <h4>
        Employee Name: {firstName} {lastName}. {age} years old.
      </h4>
    </div>
  );
};

export default Employee;
