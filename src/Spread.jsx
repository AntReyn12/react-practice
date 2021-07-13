import React from "react";

const SpreadPractice = (props) => {
  const {league, name, city} = props;
  return (
    <div>
      <h2>
        Anthony's favorite {league} team is the {city} {name}!
      </h2>
    </div>
  );
};

export default SpreadPractice;
