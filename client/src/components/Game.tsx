import { Card } from "./Card";
import cards from "../data/data.json"

interface Cards {
  name: string;
  img: string;

}
export const Game = () => {
  const imgRoute ="src/assets/img/"

  const shuffle = (array: Cards[]) => { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
  }; 
  const cardsRandom  = shuffle(cards)
  // console.log(cards);
  // console.log(cardsRandom);
  return (
    <>
      <div>
        <h1>Superhero Memory Game</h1>
      </div>
      <div id="memory_board">
        {cardsRandom.map((card, i) => (  
          <div className="card">{card.name}<img src={`${imgRoute}${card.img}`} /></div>
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