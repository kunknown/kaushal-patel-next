import MemoryCardGame from "@/lib/ui/memory-card-game/memory-card-game";
import React from "react";

export default async function MemoryCardGamePage() {
  return (
    <div className="flex justify-center flex-col m-2 md:m-0">
      <MemoryCardGame />
    </div>
  );
}
