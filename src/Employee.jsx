import React from "react";

const Employee = (props) => {

    const { firstName, lastName, age } = props;
    return(
        <h4>
            Employee Name: {firstName} {lastName}. {age} years old.
        </h4>
    );
};

export default Employee;