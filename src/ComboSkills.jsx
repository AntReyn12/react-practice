import React from "react";

const favoriteTeams = [
  {
    name: "Eagles",
    league: "NFL",
    city: "Philadelphia",
  },
  {
    name: "Flyers",
    league: "NHL",
    city: "Philadelphia",
  },
  {
    name: "Phillies",
    league: "MLB",
    city: "Philadelphia",
  },
  {
    name: "Sixers",
    league: "NBA",
    city: "Philadelphia",
  },
];

const TeamButton = () => {
  return (
    <div>
      {favoriteTeams.map((team) => {
        const {name, league, city} = team;
        return (
          <h2>
            My favorite {league} team is the {city} {name}!
          </h2>
        );
      })}
    </div>
  );
};

export default TeamButton;
