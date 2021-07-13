import React from "react";
import "./App.css";
import SpreadPractice from "./Spread";

const anthonyFavoriteTeams = [
  {
    league: "NFL",
    name: "Eagles",
    city: "Philadelphia",
  },
  {
    league: "MLB",
    name: "Phillies",
    city: "Philadelphia",
  },
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {anthonyFavoriteTeams.map((team) => {
          return <SpreadPractice {...team} />;
        })}
      </header>
    </div>
  );
};

export default App;
