import { random } from "@/utils/random";
import cards from "../data/data.json";
import { useEffect, useState, MouseEvent } from "react";

export interface Cards {
  name: string;
  img: string;
}

export interface CardsUpdated extends Cards {
  name: string;
  img: string;
  flipped: boolean;
  matched: boolean;
}
export const Game = () => {
  const imgRoute = "src/assets/img/";
  const [cardsRandom, setCardsRandom] = useState<CardsUpdated[]>([]);

  const compareCards = (nombre1: string, nombre2: string) =>
    nombre1 === nombre2;

  const turnCard = (event: MouseEvent<HTMLDivElement>) => {
    const id = +(event.target as HTMLDivElement).id;
    const flippedCount = cardsRandom.filter((card) => card.flipped);
    setCardsRandom(
      cardsRandom.map((card, index) => {
        if (index == id && !card.matched && flippedCount.length < 2) {
          card.flipped = true;
        } else if (
          flippedCount.length == 2 &&
          compareCards(flippedCount[0].name, flippedCount[1].name)
        ) {
          card.matched = true;
        }
        return card;
      })
    );
  };

  // if ( 0 flipped or 1 flipped && matched: false){
  // i can turncard
  // }

  useEffect(() => {
    const randomize = random(cards);
    const updatedCards: CardsUpdated[] = randomize.map((card) => ({
      ...card,
      flipped: false, // Agrega la nueva propiedad "flipped" con el valor "false"
      matched: false,
    }));
    setCardsRandom(updatedCards);
  }, []);

  //display: none

  return (
    <>
      <div>
        <h1>Superhero Memory Game</h1>
      </div>
      <div id="memory_board" role="cards">
        {cardsRandom.map((card, i) => (
          <div
            className="card"
            id={i.toString()}
            style={
              card.flipped
                ? {
                    backgroundImage: `url(${imgRoute + card.img})`,
                  }
                : { background: "#000" }
            }
            onClick={turnCard}
          >
            <p>{card.name}</p>
          </div>
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
