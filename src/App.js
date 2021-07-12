import React from "react";
import "./App.css";
import MappingPractice from "./Mapping";

const friends = [
  {
    name: "Ben",
    id: "123",
  },
  {
    name: "Andrew",
    id: "234",
  },
  {
    name: "Chris",
    id: "334",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {friends.map((friend) => (
          <MappingPractice key={friend.id} name={friend.name} id={friend.id} />
        ))}
      </header>
    </div>
  );
}

export default App;
