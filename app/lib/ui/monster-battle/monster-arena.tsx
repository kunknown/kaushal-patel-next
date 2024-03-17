"use client";

import { TBattleRecord, TMonster } from "@/shared/types-interfaces-enums/types";
import { useEffect, useState } from "react";
import MonsterCard from "./monster-card";
import MonsterBattleHistory from "./monster-battle-history";
import {
  MONSTER_ARENA_STEPS,
  MONSTER_ARENA_VIEWS,
} from "@/shared/types-interfaces-enums/enums";
import MonsterArenaButton from "./monster-arena-button";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { getMonsterBattleWinner } from "@/app/actions/monster-battle-actions";
import classNames from "classnames";

export default function MonsterArena({
  monsterList,
}: Readonly<{ monsterList: TMonster[] }>) {
  const [monsterA, setMonsterA] = useState<TMonster | null>(null);
  const [monsterB, setMonsterB] = useState<TMonster | null>(null);
  const [view, setView] = useState<MONSTER_ARENA_VIEWS>(
    MONSTER_ARENA_VIEWS.ARENA,
  );
  const isArenaView = view === MONSTER_ARENA_VIEWS.ARENA;
  const isBattleRecordView = view === MONSTER_ARENA_VIEWS.BATTLE_RECORD;
  const [step, setStep] = useState<MONSTER_ARENA_STEPS>(
    MONSTER_ARENA_STEPS.SELECTION,
  );
  const isSelectionStep = step === MONSTER_ARENA_STEPS.SELECTION;
  const isBattleStep = step === MONSTER_ARENA_STEPS.BATTLE;
  const isHistoryStep = step === MONSTER_ARENA_STEPS.HISTORY;
  const [battleRecord, setBattleRecord] = useState<TBattleRecord | null>(null);
  const selectMonsterHandler = (monster: TMonster): void => {
    if (!monsterA) {
      setMonsterA(monster);
    } else if (!monsterB) {
      setMonsterB(monster);
    }
  };
  useEffect(() => {
    if (battleRecord) {
      setStep(MONSTER_ARENA_STEPS.HISTORY);
    } else if (monsterA && monsterB) {
      setStep(MONSTER_ARENA_STEPS.BATTLE);
    } else {
      setStep(MONSTER_ARENA_STEPS.SELECTION);
    }
  }, [monsterA, monsterB, battleRecord]);
  return (
    <Card>
      <CardHeader>
        <div className="grid grid-cols-6 w-full flex justify-center">
          <div className="col-span-1">
            <Button
              href="/projects"
              as={Link}
              className="uppercase font-bold text-black bg-zinc-200 hover:bg-zinc-300"
            >
              Back
            </Button>
          </div>
          <div className="col-span-4 flex justify-center items-center uppercase font-bold">
            <Breadcrumbs>
              <BreadcrumbItem
                key={MONSTER_ARENA_STEPS.SELECTION}
                isCurrent={isSelectionStep}
                isDisabled
                className={classNames({ "animate-bounce": isSelectionStep })}
              >
                Select your monsters
              </BreadcrumbItem>
              <BreadcrumbItem
                key={MONSTER_ARENA_STEPS.BATTLE}
                isCurrent={isBattleStep}
                isDisabled
                className={classNames({ "animate-bounce": isBattleStep })}
              >
                Start battle
              </BreadcrumbItem>
              <BreadcrumbItem
                key={MONSTER_ARENA_STEPS.HISTORY}
                isCurrent={isHistoryStep}
                isDisabled
                className={classNames({ "animate-bounce": isHistoryStep })}
              >
                explore the results
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="w-fit h-auto grid grid-cols-4 grid-rows-5 gap-4 rounded-lg text-black">
          <div className="flex flex-col items-center col-span-4 row-span-2">
            <div className="w-full flex gap-2 md:gap-4 overflow-x-auto">
              {monsterList.map((monster) => (
                <MonsterCard
                  key={monster.id}
                  monster={monster}
                  onClickHandler={() => selectMonsterHandler(monster)}
                  isAnimated={isSelectionStep}
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
            <Tabs
              selectedKey={view}
              onSelectionChange={(key) => setView(key as MONSTER_ARENA_VIEWS)}
              className={classNames({ "animate-pulse": isHistoryStep })}
            >
              <Tab key={MONSTER_ARENA_VIEWS.ARENA} title="Arena" />
              <Tab
                key={MONSTER_ARENA_VIEWS.BATTLE_RECORD}
                title="Battle Record"
              />
            </Tabs>
            <div className="mt-2 max-h-[225px] overflow-y-auto">
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
          <div className="p-1 max-h-[150px] flex md:hidden flex-col items-center row-span-2 col-span-4 border-2 border-zinc-200 rounded-lg overflow-x-auto">
            <Tabs
              selectedKey={view}
              onSelectionChange={(key) => setView(key as MONSTER_ARENA_VIEWS)}
            >
              <Tab key={MONSTER_ARENA_VIEWS.ARENA} title="Arena" />
              <Tab
                key={MONSTER_ARENA_VIEWS.BATTLE_RECORD}
                title="Battle Record"
              />
            </Tabs>
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
          <div className="p-2 flex justify-center items-center col-span-4 gap-2 md:gap-4">
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
              isAnimated={isBattleStep}
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
      </CardBody>
    </Card>
  );
}
