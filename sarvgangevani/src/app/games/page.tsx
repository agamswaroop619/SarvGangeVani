// Topic: River Ganga
"use client"; // Add this line to specify that this component is a Client Component
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Types
interface IKard {
  id: number;
  flipped: boolean;
  matched: boolean;
  defaultImage: string;
  image?: string;
}

// Kard Component
const Kard: React.FC<{
  card: IKard;
  handleFlip: (id: number, matched: boolean) => void;
}> = ({ card, handleFlip }) => {
  const handleClick = () => {
    handleFlip(card.id, card.matched);
  };

  return (
    <div key={card.id} className="w-[75px] h-[100px]" onClick={handleClick}>
      <Image
        src={card.flipped ? card.image ?? card.defaultImage : card.defaultImage}
        alt="Card Image"
        width={75}
        height={100}
        className="object-fill h-full rounded"
      />
    </div>
  );
};

// ListKards Component
const ListKards: React.FC<{
  cards: IKard[];
  attempts: number;
  setAttempts: (attempts: number) => void;
  win: boolean;
  setWin: (win: boolean) => void;
}> = ({ cards: initialCards, attempts, setAttempts, win, setWin }) => {
  const [cards, setCards] = useState<IKard[]>(initialCards);
  const [cardsClicked, setCardsClicked] = useState<number[]>([]);
  const [canClick, setCanClick] = useState(true);

  const flipCard = (id: number) => {
    if (
      !canClick ||
      cardsClicked.length === 2 ||
      cardsClicked.includes(id) ||
      win
    ) {
      return;
    }

    const newCardsClicked = [...cardsClicked, id];
    setCardsClicked(newCardsClicked);

    const newCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          flipped: !card.flipped,
        };
      }
      return card;
    });

    setCards(newCards);

    if (newCardsClicked.length === 2) {
      setCanClick(false);

      const [firstCard, secondCard] = newCardsClicked;

      const firstCardObject = newCards.find(
        (card) => card.id === firstCard
      ) as IKard;
      const secondCardObject = newCards.find(
        (card) => card.id === secondCard
      ) as IKard;

      if (firstCardObject.image !== secondCardObject.image) {
        setTimeout(() => {
          const resetCards = newCards.map((card) => {
            if (card.id === firstCard || card.id === secondCard) {
              return {
                ...card,
                flipped: false,
              };
            }
            return card;
          });

          setCards(resetCards);
          setCardsClicked([]);
          setCanClick(true);
          setAttempts(attempts + 1);
        }, 1000);
      } else {
        const matchedCards = newCards.map((card) => {
          if (card.id === firstCard || card.id === secondCard) {
            return {
              ...card,
              matched: true,
            };
          }
          return card;
        });

        setCards(matchedCards);

        const win = matchedCards.every((card) => card.matched);

        if (win) {
          setWin(true);
        }

        setAttempts(attempts + 1);
        setCardsClicked([]);
        setCanClick(true);
      }
    }
  };

  useEffect(() => {
    if (cardsClicked.length === 2) {
      setCanClick(false);
    } else {
      setCanClick(true);
    }
  }, [cardsClicked]);

  return (
    <div className="flex flex-row flex-wrap justify-center w-full gap-2">
      {cards.map((card) => (
        <Kard key={card.id} card={card} handleFlip={flipCard} />
      ))}
    </div>
  );
};

// KardForm Component
const KardForm: React.FC<{
  theme: string;
  setTheme: (theme: string) => void;
  handleGenerateKards: (e: React.FormEvent) => void;
}> = ({ theme, setTheme, handleGenerateKards }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  return (
    <form
      onSubmit={handleGenerateKards}
      className="w-full text-center md:w-3/4 lg:w-1/2"
    >
      <div className="relative w-full">
        <input
          type="text"
          value={theme}
          onChange={handleChange}
          required={true}
          className="w-full px-4 py-3 text-center placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder='Enter theme: e.g., "car ferrari"'
        />
        <button
          type="submit"
          className="block px-4 py-2 mx-auto mt-4 text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-700"
        >
          Generate Cards
        </button>
      </div>
    </form>
  );
};

// Game Component
const Game: React.FC = () => {
  const {
    attempts,
    win,
    theme,
    kards,
    startGame,
    setTheme,
    handleGenerateKards,
    setAttempts,
    setWin,
  } = useGameLogic();

  return (
    <>
      {!startGame && (
        <KardForm
          theme={theme}
          setTheme={setTheme}
          handleGenerateKards={handleGenerateKards}
        />
      )}

      {startGame && (
        <>
          <h2 className="text-xl font-bold text-center text-gray-900">
            Theme: <strong>{theme}</strong>
          </h2>

          {!win && (
            <h2 className="text-xl font-bold text-center text-gray-900">
              Moves: <strong>{attempts}</strong>
            </h2>
          )}

          <ListKards
            cards={kards}
            attempts={attempts}
            setAttempts={setAttempts}
            win={win}
            setWin={setWin}
          />

          {win && (
            <h2 className="text-xl font-bold text-center text-gray-900">
              You won in <strong>{attempts}</strong> moves!
            </h2>
          )}

          <button className="px-4 py-2 mt-4 text-white uppercase bg-red-500 rounded hover:bg-red-700">
            <a href="/">Play Again</a>
          </button>
        </>
      )}
    </>
  );
};

// useGameLogic Hook
const useGameLogic = () => {
  const [attempts, setAttempts] = useState<number>(0);
  const [win, setWin] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("");
  const [kards, setKards] = useState<IKard[]>([]);
  const [startGame, setStartGame] = useState<boolean>(false);

  const handleGenerateKards = async (e: React.FormEvent) => {
    e.preventDefault();

    // Replace the following block with your actual logic for generating cards
    // Simulated code:
    const newKards: IKard[] = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      flipped: false,
      matched: false,
      defaultImage: "/path-to-default-image.jpg",
      image: "/path-to-image.jpg",
    }));

    setKards(newKards);
    setAttempts(0);
    setWin(false);
    setStartGame(true);
  };

  return {
    attempts,
    win,
    theme,
    kards,
    startGame,
    setTheme,
    handleGenerateKards,
    setAttempts,
    setWin,
  };
};

export default Game;
