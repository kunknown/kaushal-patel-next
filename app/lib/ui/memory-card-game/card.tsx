import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TCard } from "@/lib/types-interfaces-enums/types";

type CardProps = {
  card: TCard;
  onClick: (card: TCard) => void;
};

export default function Card({ card, onClick }: Readonly<CardProps>) {
  // return card as a button for better accessibility. disable it when it's matched or 2 cards have been selected.
  return (
    <motion.button
      onClick={() => !card.isFlipped && !card.isMatched && onClick(card)}
      whileHover={{ y: card.isMatched ? 0 : -4 }}
      transition={{ duration: 0.3 }}
      className={"h-24 w-16 md:h-36 md:w-24 p-0 border-none bg-transparent"}
    >
      <motion.div
        className="relative w-full h-full"
        transition={{ duration: 0.5 }}
        animate={{ rotateY: card.isFlipped ? 180 : 0 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="absolute flex align-center justify-center h-full w-full text-xxl rounded-lg border-2 border-black overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src="/card_back.jpg"
            alt="facedown card's image"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          className="absolute flex align-center h-full w-full justify-center text-xxl rounded-lg border-2 border-black overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            opacity: card.isMatched ? 0.8 : 1,
            borderColor: card.isMatched ? "green" : "black",
          }}
        >
          <Image src={card.image} alt={card.alt} width={100} height={100} />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
