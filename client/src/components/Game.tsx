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
  const [flippedCards, setFlippedCards] = useState<CardsUpdated[]>([]);

  const compareCards = (nombre1: string, nombre2: string) =>
    nombre1 === nombre2;

  // const flippedTrue = () => {
  //   // Utiliza map para crear un nuevo array con las propiedades actualizadas
  //   return array.map(() => ({
  //     ...card,
  //     flipped: index === id ? true : card.flipped,
  //   }));
  // };

  const matchCards = (array: CardsUpdated[]) => {
    // Utiliza map para crear un nuevo array con las propiedades actualizadas
    return array.map((card) => ({
      ...card,
      matched: true,
    }));
  };

  //FUNCION UBICA LAS CARTAS FLIPPED SIN MATCH
  const flippedCount = (array: CardsUpdated[]) => {
    return array.filter((card) => card.flipped && !card.matched);
  };

  //FUNCION AL HACER CLICK
  const turnCard = (event: MouseEvent<HTMLDivElement>) => {
    const id = +(event.target as HTMLDivElement).id;
    console.log(id);
    console.log(cardsRandom);
    console.log(flippedCards);

    setCardsRandom(
      cardsRandom.map((card, index) => {
        if (
          index == id &&
          !card.matched &&
          flippedCount(cardsRandom).length < 2
        ) {
          card.flipped = true;
          console.log("hola");
          console.log(cardsRandom);
          if (
            flippedCount(cardsRandom).length == 2 &&
            compareCards(
              flippedCount(cardsRandom)[0].name,
              flippedCount(cardsRandom)[1].name
            )
          ) {
            console.log("hola otra vez");
            matchCards(flippedCount(cardsRandom));
            setCardsRandom(matchCards(flippedCount(cardsRandom)));
            console.log(matchCards(flippedCount(cardsRandom)));
          }
        }
        return card;
      })
    );
    console.log("hola");
    console.log(cardsRandom);
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

// export const Game = () => {
//   const imgRoute = "src/assets/img/";
//   const [cardsRandom, setCardsRandom] = useState<CardsUpdated[]>([]);
//   const [flippedCards, setFlippedCards] = useState<CardsUpdated[]>([]);

//   const compareCards = (nombre1: string, nombre2: string) =>
//     nombre1 === nombre2;

//   const flippedTrue = (array: CardsUpdated[]) => {
//     // Utiliza map para crear un nuevo array con las propiedades actualizadas
//     return array.map((card) => ({
//       ...card,
//       flipped: true,
//     }));
//   };

//   const matchCards = (array: CardsUpdated[]) => {
//     // Utiliza map para crear un nuevo array con las propiedades actualizadas
//     return array.map((card) => ({
//       ...card,
//       matched: true,
//     }));
//   };

//   //FUNCION UBICA LAS CARTAS FLIPPED SIN MATCH
//   const flippedCount = (array: CardsUpdated[]) => {
//     return array.filter((card) => card.flipped && !card.matched);
//   };

//   //FUNCION AL HACER CLICK
//   const turnCard = (event: MouseEvent<HTMLDivElement>) => {
//     const id = +(event.target as HTMLDivElement).id;
//     console.log(id);
//     console.log(cardsRandom);
//     console.log(flippedCards);

//     // if (flippedCards.length < 2) {
//     //   flippedTrue(cardsRandom);
//     //   setFlippedCards(flippedCards.concat(cardsRandom[id]));
//     //   console.log(flippedCards);
//     // }
// card.flipped = true;
//     // flippedCount(cardsRandom);

//     setCardsRandom(
//       cardsRandom.map((card, index) => {
//         if (
//           index == id &&
//           !card.matched &&
//           flippedCount(cardsRandom).length < 2
//         ) {
//           flippedTrue;
//           console.log("hola");

//           if (
//             flippedCount(cardsRandom).length == 2 &&
//             compareCards(
//               flippedCount(cardsRandom)[0].name,
//               flippedCount(cardsRandom)[1].name
//             )
//           ) {
//             console.log("hola otra vez");
//             matchCards(flippedCount(cardsRandom));
//             setCardsRandom(matchCards(flippedCount(cardsRandom)));
//             console.log(matchCards(flippedCount(cardsRandom)));
//           }
//         }
//         return card;
//       })
//     );
//   };

//   // if ( 0 flipped or 1 flipped && matched: false){
//   // i can turncard
//   // }

//   useEffect(() => {
//     const randomize = random(cards);
//     const updatedCards: CardsUpdated[] = randomize.map((card) => ({
//       ...card,
//       flipped: false, // Agrega la nueva propiedad "flipped" con el valor "false"
//       matched: false,
//     }));
//     setCardsRandom(updatedCards);
//   }, []);

//   //display: none

//   return (
//     <>
//       <div>
//         <h1>Superhero Memory Game</h1>
//       </div>
//       <div id="memory_board" role="cards">
//         {cardsRandom.map((card, i) => (
//           <div
//             className="card"
//             id={i.toString()}
//             style={
//               card.flipped
//                 ? {
//                     backgroundImage: `url(${imgRoute + card.img})`,
//                   }
//                 : { background: "#000" }
//             }
//             onClick={turnCard}
//           >
//             <p>{card.name}</p>
//           </div>
//         ))}
//       </div>
//       <div id="score">
//         <h2>Score </h2>
//         <p>
//           Pairs Clicked: <span id="pairs_clicked">0</span>
//         </p>
//         <p>
//           Pairs Guessed: <span id="pairs_guessed">0</span>
//         </p>
//       </div>
//     </>
//   );
// };
