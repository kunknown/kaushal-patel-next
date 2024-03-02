import React from "react";
import MonsterArena from "../../lib/ui/monster-battle/monster-arena";
import { getMonsters } from "@/shared/database/sql/db";

export default async function MonsterBattle() {
  const monsterList = await getMonsters();
  return (
    <div className="mt-16 flex justify-center">
      <MonsterArena monsterList={monsterList} />
    </div>
  );
}
