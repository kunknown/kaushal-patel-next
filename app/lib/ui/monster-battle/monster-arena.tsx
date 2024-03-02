"use client";

import { TBattleRecord, TMonster } from "@/shared/types-interfaces-enums/types";
import { useState } from "react";
import MonsterCard from "./monster-card";
import MonsterBattleHistory from "./monster-battle-history";
import { MONSTER_ARENA_VIEWS } from "@/shared/types-interfaces-enums/enums";
import MonsterArenaButton from "./monster-arena-button";
import Link from "next/link";
import { getMonsterBattleWinner } from "@/app/actions/monster-battle-actions";

export default function MonsterArena({
  monsterList,
}: Readonly<{ monsterList: TMonster[] }>) {
  const [monsterA, setMonsterA] = useState<TMonster | null>(null);
  const [monsterB, setMonsterB] = useState<TMonster | null>(null);
  const [view, setView] = useState<MONSTER_ARENA_VIEWS>(
    MONSTER_ARENA_VIEWS.ARENA,
  );
  const [battleRecord, setBattleRecord] = useState<TBattleRecord | null>(null);
  const isArenaView = view === MONSTER_ARENA_VIEWS.ARENA;
  const isBattleRecordView = view === MONSTER_ARENA_VIEWS.BATTLE_RECORD;
  const selectMonsterHandler = (monster: TMonster): void => {
    if (!monsterA) {
      setMonsterA(monster);
    } else if (!monsterB) {
      setMonsterB(monster);
    }
  };
  return (
    <div className="w-screen h-screen lg:w-[1000px] lg:h-[800px] p-4 grid grid-cols-4 grid-rows-5 gap-4 bg-gradient-to-b from-emerald-900 to-black rounded-lg text-black">
      <div className="flex flex-col items-center col-span-4 row-span-2">
        <div className="relative w-full flex justify-center">
          <Link
            href="/projects"
            className="absolute left-0 mb-2 py-1 px-2 uppercase font-bold bg-zinc-200 rounded-lg hover:bg-zinc-300"
          >
            Back
          </Link>
          <div className="mb-2 mx-2 py-1 px-2 uppercase font-bold bg-zinc-200 rounded-lg">
            Select your monster
          </div>
        </div>
        <div className="w-full flex gap-2 md:gap-4 overflow-x-auto">
          {monsterList.map((monster) => (
            <MonsterCard
              key={monster.id}
              monster={monster}
              onClickHandler={() => selectMonsterHandler(monster)}
            />
          ))}
        </div>
      </div>
      <div className="p-2 flex flex-col items-center row-span-2 col-span-2 md:col-span-1 border-2 border-zinc-200 rounded-lg bg-red-700">
        <div className="mb-2 p-0_5 w-full flex justify-center uppercase font-bold bg-zinc-200 rounded-lg">
          Red Team
        </div>
        <MonsterCard
          monster={monsterA}
          onClickHandler={() => setMonsterA(null)}
        />
      </div>
      <div className="p-2 hidden md:flex flex-col items-center row-span-2 col-span-2 border-2 border-zinc-200 rounded-lg">
        <div className="mb-1 py-1 px-2 w-60 flex justify-between uppercase text-center">
          <MonsterArenaButton
            isDisabled={isArenaView}
            onClickHandler={() => {
              setView(MONSTER_ARENA_VIEWS.ARENA);
            }}
            label="Arena"
            isActive={isArenaView}
          />
          <MonsterArenaButton
            isDisabled={isBattleRecordView}
            onClickHandler={() => {
              setView(MONSTER_ARENA_VIEWS.BATTLE_RECORD);
            }}
            label="Battle Record"
            isActive={isBattleRecordView}
          />
        </div>
        <div className="overflow-y-auto">
          {battleRecord && (
            <MonsterBattleHistory
              battleRecord={battleRecord}
              isBattleRecordView={isBattleRecordView}
              isArenaView={isArenaView}
            />
          )}
        </div>
      </div>
      <div className="p-2 flex flex-col items-center row-span-2 col-span-2 md:col-span-1 border-2 border-zinc-200 rounded-lg bg-blue-700">
        <div className="mb-2 p-0_5 w-full flex justify-center uppercase font-bold bg-zinc-200 rounded-lg">
          Blue Team
        </div>
        <MonsterCard
          monster={monsterB}
          onClickHandler={() => setMonsterB(null)}
        />
      </div>
      <div className="p-1 flex md:hidden flex-col items-center row-span-2 col-span-4 border-2 border-zinc-200 rounded-lg overflow-x-auto">
        <div className="mb-1 py-1 px-1 w-60 flex justify-between uppercase text-center">
          <MonsterArenaButton
            isDisabled={isArenaView}
            onClickHandler={() => {
              setView(MONSTER_ARENA_VIEWS.ARENA);
            }}
            label="Arena"
            isActive={isArenaView}
          />
          <MonsterArenaButton
            isDisabled={isBattleRecordView}
            onClickHandler={() => {
              setView(MONSTER_ARENA_VIEWS.BATTLE_RECORD);
            }}
            label="Battle Record"
            isActive={isBattleRecordView}
          />
        </div>
        {battleRecord && (
          <MonsterBattleHistory
            battleRecord={battleRecord}
            isBattleRecordView={isBattleRecordView}
            isArenaView={isArenaView}
          />
        )}
      </div>
      <div className="p-2 flex justify-center items-center col-span-4 gap-2 md:gap-4 border-2 border-zinc-200 rounded-lg">
        <MonsterArenaButton
          isDisabled={!monsterA || !monsterB}
          onClickHandler={async () => {
            setBattleRecord(
              await getMonsterBattleWinner(
                monsterA as TMonster,
                monsterB as TMonster,
              ),
            );
          }}
          label="Start Battle"
        />
        <MonsterArenaButton
          isDisabled={!monsterA && !monsterB}
          onClickHandler={() => {
            setMonsterA(null);
            setMonsterB(null);
            setBattleRecord(null);
          }}
          label="Reset"
        />
      </div>
    </div>
  );
}
