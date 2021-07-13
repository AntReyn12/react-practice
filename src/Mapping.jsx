import React from "react";

const friends = [
  {
    name: "Ben",
    id: "123",
  },
  {
    name: "Andrew",
    id: "223",
  },
  {
    name: "Chris",
    id: "333",
  },
];

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
