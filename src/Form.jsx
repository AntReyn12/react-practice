import React, {useState} from "react";

const FormButton = () => {
  const [name, setName] = useState({firstName: "", lastName: ""});
  const {firstName, lastName} = name;
  return (
    <div style={{display: "flex"}}>
      <form>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setName({...name, firstName: e.target.value})}
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setName({...name, lastName: e.target.value})}
          />
        </div>
        <h2>Your first name is - {firstName}</h2>
        <h2>Your last name is - {lastName}</h2>
      </form>
    </div>
  );
};

export default FormButton;
