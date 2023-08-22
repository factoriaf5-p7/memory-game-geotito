import React from "react";

export const Game = () => {
  const cards = [
    { name: "aquaman", img: "aquaman.jpg" },
    { name: "batman", img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four", img: "fantastic-four.jpg" },
    { name: "flash", img: "flash.jpg" },
    { name: "green arrow", img: "green-arrow.jpg" },
    { name: "green lantern", img: "green-lantern.jpg" },
    { name: "ironman", img: "ironman.jpg" },
    { name: "spiderman", img: "spiderman.jpg" },
    { name: "superman", img: "superman.jpg" },
    { name: "the avengers", img: "the-avengers.jpg" },
    { name: "thor", img: "thor.jpg" },
    { name: "aquaman", img: "aquaman.jpg" },
    { name: "batman", img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four", img: "fantastic-four.jpg" },
    { name: "flash", img: "flash.jpg" },
    { name: "green arrow", img: "green-arrow.jpg" },
    { name: "green lantern", img: "green-lantern.jpg" },
    { name: "ironman", img: "ironman.jpg" },
    { name: "spiderman", img: "spiderman.jpg" },
    { name: "superman", img: "superman.jpg" },
    { name: "the avengers", img: "the-avengers.jpg" },
    { name: "thor", img: "thor.jpg" },
  ];
  return (
    <>
      <div>
        <h1>Superhero Memory Game</h1>
      </div>
      <div id="memory_board">
        {cards.map((card, i) => (
          <div className="card">{i}{card.name}</div>
        ))}
      </div>
      <div id="score">
        <h2>Score </h2>
        <p>
          Pairs Clicked: <span id="pairs_clicked">0</span>
        </p>
        <p>
          Pairs Guessed: <span id="pairs_guessed">0</span>
        </p>
      </div>
    </>
  );
};
