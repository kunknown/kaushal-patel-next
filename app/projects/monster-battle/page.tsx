"use client";

import React, { useEffect, useState } from "react";
import { getMonsterBattleWinner } from "@/app/api/monster-arena/actions";
import { TBattleRecord, TMonster } from "@/app/shared/types-interfaces/types";
import monsterList from "./monster-list";
import MonsterSelection from "./monster-selection";

export default function Page() {
  const [monsterA, setMonsterA] = useState<TMonster | null>(null);
  const [monsterB, setMonsterB] = useState<TMonster | null>(null);
  const [battleRecord, setBattleRecord] = useState<TBattleRecord | null>(null);
  useEffect(() => {
    if (monsterA && monsterB) {
      (async () => {
        const res = await getMonsterBattleWinner(monsterA, monsterB);
        setBattleRecord(res);
      })();
    }
  }, [monsterA, monsterB]);
  return (
    <div className="h-96">
      {!(monsterA && monsterB) ? (
        <MonsterSelection
          monsterList={monsterList}
          monsterA={monsterA as TMonster}
          monsterB={monsterB as TMonster}
          setMonsterA={setMonsterA}
          setMonsterB={setMonsterB}
        />
      ) : (
        <>
          <div>
            Mosnter Battle!{" "}
            {`${battleRecord?.monsterA.name} vs. ${battleRecord?.monsterB.name}`}
          </div>
          {battleRecord?.battleHistory.map((round, index) => (
            <div
              key={index + 1}
            >{`turn: ${round.turn} - ${round.attackMonster.name} attacks ${round.defenseMonster.name} for ${round.damage} damage - ${round.attackMonster.name}'s health: ${round.attackMonster.health} & ${round.defenseMonster.name}'s health: ${round.defenseMonster.health}`}</div>
          ))}
          <div>Winner is {`${battleRecord?.winner.name}`}</div>
        </>
      )}
    </div>
  );
}
