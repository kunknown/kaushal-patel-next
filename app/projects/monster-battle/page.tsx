"use client";

import React, { useEffect, useState } from "react";
import { getMonsterBattleWinner } from "@/app/api/monster-arena/actions";
import { TBattleRecord, TMonster } from "@/app/shared/types-interfaces/types";
import monsterList from "./monster-list";

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
    <>
      {!monsterA || !monsterB ? (
        <div>
          Select Monsters:{" "}
          {monsterList.map((monster) => (
            <button
              key={monster.id}
              onClick={() =>
                monsterA ? setMonsterB(monster) : setMonsterA(monster)
              }
            >
              {monster.name}
            </button>
          ))}
          <div>MonsterA: {monsterA?.name}</div>
          <div>MonsterB: {monsterB?.name}</div>
        </div>
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
    </>
  );
}
