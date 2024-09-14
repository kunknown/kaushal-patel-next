"use client";

import { useState } from "react";
import CardGrid from "@/lib/ui/memory-card-game/card-grid";
import Header from "@/lib/ui/memory-card-game/header";
import { TCard } from "@/lib/types-interfaces-enums/types";
import { shuffleCards } from "@/lib/utility/memory-card-game-utils";
import blueLadyImg from "@/public/blue_lady.jpg";
import cakeImg from "@/public/cake.jpg";
import dogImg from "@/public/dog.jpg";
import dolphinImg from "@/public/dolphin.jpg";
import foxImg from "@/public/fox.jpg";
import giftImg from "@/public/gift.jpg";
import astronautImg from "@/public/astronaut.jpg";
import purpleLadyImg from "@/public/purple_lady.jpg";

const memoryGameCards: TCard[] = [
  {
    id: 1,
    image: blueLadyImg,
    alt: "image of a lady in blue",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 2,
    image: cakeImg,
    alt: "image of a cake",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 3,
    image: dogImg,
    alt: "image of a dog",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 4,
    image: dolphinImg,
    alt: "image of a dolphin",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 5,
    image: foxImg,
    alt: "image of a fox",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 6,
    image: giftImg,
    alt: "image of a wrapped gift",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 7,
    image: astronautImg,
    alt: "image of an astronaut",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 8,
    image: purpleLadyImg,
    alt: "image of a lady in purple",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 9,
    image: blueLadyImg,
    alt: "image of a lady in blue",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 10,
    image: cakeImg,
    alt: "image of a cake",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 11,
    image: dogImg,
    alt: "image of a dog",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 12,
    image: dolphinImg,
    alt: "image of a dolphin",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 13,
    image: foxImg,
    alt: "image of a fox",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 14,
    image: giftImg,
    alt: "image of a wrapped gift",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 15,
    image: astronautImg,
    alt: "image of an astronaut",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 16,
    image: purpleLadyImg,
    alt: "image of a lady in purple",
    isFlipped: false,
    isMatched: false,
  },
];

export default function MemoryCardGame() {
  const [cards, setCards] = useState(shuffleCards(memoryGameCards));
  const [flippedCards, setFlippedCards] = useState<TCard[]>([]);

  const handleCardClick = (clickedCard: TCard) => {
    if (flippedCards.length < 2) {
      const updatedCards = cards.map((card) =>
        card.id === clickedCard.id ? { ...card, isFlipped: true } : card,
      );
      setCards(updatedCards);
      setFlippedCards([...flippedCards, clickedCard]);

      if (flippedCards.length === 1) {
        const [firstCard] = flippedCards;
        if (firstCard.image === clickedCard.image) {
          setCards((prevCards: TCard[]) =>
            prevCards.map((card) =>
              card.image === firstCard.image
                ? { ...card, isMatched: true }
                : card,
            ),
          );
          setFlippedCards([]);
        } else {
          setTimeout(() => {
            setCards((prevCards: TCard[]) =>
              prevCards.map((card) =>
                card.isFlipped && !card.isMatched
                  ? { ...card, isFlipped: false }
                  : card,
              ),
            );
            setFlippedCards([]);
          }, 1000);
        }
      }
    }
  };

  const resetGame = () => {
    setCards(shuffleCards(memoryGameCards));
    setFlippedCards([]);
  };
  return (
    <div className="border-2 border-zinc-600 dark:border-zinc-200 rounded-lg overflow-hidden">
      <Header
        resetGame={resetGame}
        hasWon={cards.every((card) => card.isMatched)}
      />
      <CardGrid onCardClick={handleCardClick} cards={cards} />
    </div>
  );
}
