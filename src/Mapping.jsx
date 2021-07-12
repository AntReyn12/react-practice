import React from "react";

const MappingPractice = (props) => {
  const {name, id} = props;
  return (
    <div>
      <h1>
        Name: {name}, ID: {id}
      </h1>
    </div>
  );
};

export default MappingPractice;
