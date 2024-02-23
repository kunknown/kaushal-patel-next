"use client";

import { TMonster } from "@/app/shared/types-interfaces/types";

type TMonsterSelection = {
  monsterList: TMonster[];
  monsterA: TMonster;
  monsterB: TMonster;
  setMonsterA: Function;
  setMonsterB: Function;
};

export default function MonsterSelection({
  monsterList,
  monsterA,
  monsterB,
  setMonsterA,
  setMonsterB,
}: TMonsterSelection) {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4">
      <div className="col-span-4 row-span-2">
        Select Monsters:
        <div>
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
        </div>
      </div>
      <div className="row-span-2">MonsterA: {monsterA?.name}</div>
      <div className="row-span-2 col-span-2">arena</div>
      <div className="row-span-2">MonsterB: {monsterB?.name}</div>
      <div className="col-span-4">UI</div>
    </div>
  );
}
