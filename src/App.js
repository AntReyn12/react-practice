import React from "react";
import "./App.css";
import Employee from "./Employee";

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

const App = () => {
  return (
    <div>
      <h1>Company Directory</h1>
      {employeeInfo.map((employee) => {
        return <Employee {...employee} />;
      })}
    </div>
  );
};

export default App;
