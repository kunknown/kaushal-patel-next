import {
  TBattleHistory,
  TBattleRecord,
  TMonster,
} from "@/lib/types-interfaces-enums/types";

export function getFirstTurnMonster(
  monsterA: TMonster,
  monsterB: TMonster,
): {
  firstTurnMonster: TMonster;
  secondTurnMonster: TMonster;
} {
  let firstTurnMonster;
  if (monsterA.agility > monsterB.agility) {
    firstTurnMonster = monsterA;
  } else if (monsterA.agility === monsterB.agility) {
    firstTurnMonster = monsterA.attack > monsterB.attack ? monsterA : monsterB;
  } else {
    firstTurnMonster = monsterB;
  }
  const secondTurnMonster =
    firstTurnMonster.id === monsterA.id ? monsterB : monsterA;
  return { firstTurnMonster, secondTurnMonster };
}

export function battle(
  atkMonster: TMonster,
  defMonster: TMonster,
): TBattleRecord {
  let attackMonster = atkMonster;
  let defenseMonster = defMonster;
  let turn = 1;
  let winner;
  const battleHistory: TBattleHistory[] = [];
  while (attackMonster.health > 0 && defenseMonster.health > 0) {
    if (turn !== 1) {
      const tempDefMonster = defenseMonster;
      defenseMonster = attackMonster;
      attackMonster = tempDefMonster;
    }
    const { updatedAtkMonster, updatedDefMonster, damage } =
      battleRoundCalculation(attackMonster, defenseMonster);
    battleHistory.push({
      attackMonster: { ...updatedAtkMonster },
      damage,
      defenseMonster: { ...updatedDefMonster },
      turn,
    });
    turn++;
  }
  if (attackMonster.health <= 0) {
    winner = defenseMonster.id === atkMonster.id ? atkMonster : defMonster;
  } else {
    winner = attackMonster.id === atkMonster.id ? atkMonster : defMonster;
  }
  return { battleHistory, monsterA: atkMonster, monsterB: defMonster, winner };
}

export function battleRoundCalculation(
  atkMonster: TMonster,
  defMonster: TMonster,
): {
  updatedAtkMonster: TMonster;
  updatedDefMonster: TMonster;
  damage: number;
} {
  let damage = atkMonster.attack - defMonster.defense;
  damage = damage <= 0 ? 1 : damage;
  const updatedAtkMonster = atkMonster;
  const updatedDefMonster = defMonster;
  updatedDefMonster.health = defMonster.health - damage;

  return { damage, updatedAtkMonster, updatedDefMonster };
}
