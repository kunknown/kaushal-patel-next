import { TCard } from "@/lib/types-interfaces-enums/types";

export const shuffleCards = (cards: TCard[]) => {
  const shuffled = [...cards].sort(() => 0.5 - Math.random());
  return shuffled.map((card, index) => ({ ...card, id: index + 1 }));
};
