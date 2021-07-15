import React from "react";

const videoGames = ["Witcher 3", "Rocket League", "MLB The Show"];

const CondRendering = () => {
  return (
    <div>
      <h2>Here are some of my favorite games:</h2>
      {videoGames && videoGames.length > 0 && (
        <div>
          {videoGames.map((videoGame) => {
            return <li>{videoGame}</li>;
          })}
        </div>
      )}
    </div>
  );
};

export default CondRendering;
