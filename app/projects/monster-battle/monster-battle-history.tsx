"use client";

import { TBattleRecord } from "@/app/shared/types-interfaces-enums/types";
import React from "react";

export default function MonsterBattleHistory({
  battleRecord,
  isArenaView,
  isBattleRecordView,
}: Readonly<{
  battleRecord: TBattleRecord;
  isArenaView?: boolean;
  isBattleRecordView?: boolean;
}>) {
  return (
    <div className="flex flex-col text-center text-zinc-100 uppercase">
      {isArenaView && (
        <React.Fragment>
          <div className="my-2">
            {`${battleRecord?.monsterA.name} vs. ${battleRecord?.monsterB.name}`}
          </div>
          <div>the winner is</div>
          <div className="font-bold">{`*** ${battleRecord?.winner.name} ***`}</div>
        </React.Fragment>
      )}

      {isBattleRecordView &&
        battleRecord?.battleHistory.map((round) => (
          <div
            key={round.turn}
            className="text-sm md:text-base text-left"
          >{`T: ${round.turn} - (${round.attackMonster.initials}) did ${round.damage} dmg - (${round.attackMonster.initials})'s HP: ${round.attackMonster.health} & (${round.defenseMonster.initials})'s hp: ${round.defenseMonster.health}`}</div>
        ))}
    </div>
  );
}
