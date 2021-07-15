import React, {useState} from "react";
import "./App.css";
import TeamButton from "./ComboSkills";

const App = () => {
  const [showTeams, setShowTeams] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>My favorite teams</h1>
        <button onClick={() => setShowTeams(!showTeams)}>
          {showTeams ? "Hide favorite teams" : "Show favorite teams"}
        </button>
        {showTeams && <TeamButton />}
      </header>
    </div>
  );
};

export default App;
