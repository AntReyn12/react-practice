import React from "react";
import "./App.css";
import Employee from "./Employee";

const employeeInfo = ["Anthony", "Nick", "Rob"];

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      {employeeInfo.map((employee) => {
        return <h2>{employee}</h2>;
      })}
    </div>
  );
};

export default App;
