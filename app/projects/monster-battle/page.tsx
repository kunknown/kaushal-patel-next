import React from "react";
import MonsterArena from "./monster-arena";
import { getMonsters } from "@/shared/database/db";

export default async function MonsterBattle() {
  const monsterList = await getMonsters();
  return (
    <div className="mt-16 flex justify-center">
      <MonsterArena monsterList={monsterList} />
    </div>
  );
}
