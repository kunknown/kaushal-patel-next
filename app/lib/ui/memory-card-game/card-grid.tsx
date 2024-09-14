import { TCard } from "@/lib/types-interfaces-enums/types";
import Card from "@/lib/ui/memory-card-game/card";
import { MouseEventHandler, PropsWithChildren } from "react";

type CardGridProps = {
  onCardClick: (card: TCard) => void;
  cards: TCard[];
};

/**
 * This is a layout component that styles the array of cards in a grid layout.
 * @param CardGridProps
 * @returns CardGrid
 */

export default function CardGrid({
  cards,
  onCardClick,
}: PropsWithChildren<CardGridProps>) {
  // onclick handler is attached to notify parent when a child card is clicked;
  return (
    <div className="grid grid-rows-4 grid-cols-4 gap-2 align-center justify-center justify-items-center">
      {cards.map((card) => (
        <Card card={card} onClick={onCardClick} key={card.id} />
      ))}
    </div>
  );
}
