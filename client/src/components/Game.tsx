import { random } from "@/utils/random";
import cards from "../data/data.json";

export interface Cards {
  name: string;
  img: string;
}
export const Game = () => {
  const imgRoute = "src/assets/img/";

  const cardsRandom = random(cards);

  return (
    <>
      <div>
        <h1>Superhero Memory Game</h1>
      </div>
      <div id="memory_board">
        {cardsRandom.map((card, i) => (
          <div
            className="card"
            style={{
              backgroundImage: `url(${imgRoute + card.img})`,
            }}
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
