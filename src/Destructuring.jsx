import React from "react";

const gamerInfo = {
  gamertag: "JiveTurkey131",
  name: "Anthony",
  favoriteGame: "Witcher 3",
  hoursPlayed: "25",
  favoriteCharacter: {
    name: "Geralt",
    weapon: "sword",
    hairColor: "gray",
  },
};
const {gamertag, name: gamerName, favoriteGame, favoriteCharacter} = gamerInfo;
const {name, weapon, hairColor} = favoriteCharacter;

const Gamer = () => {
  return (
    <div>
      <h1>
        My name is {gamerName} and my gamertag is {gamertag} and my favorite
        game is {favoriteGame}.
      </h1>
      <p>
        My favorite character in {favoriteGame} is {name}.
      </p>
      <p>
        {name} has {hairColor} hair and uses a {weapon}!
      </p>
    </div>
  );
};

export default Gamer;
