import { getMonsters } from "@/lib/database/sql/db";
import { TMonster } from "@/lib/types-interfaces-enums/types";
import {
  battle,
  getFirstTurnMonster,
} from "@/lib/utility/monster-battle-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const monsterAId = searchParams.get("monsterAId");
  const monsterBId = searchParams.get("monsterBId");
  if (!monsterAId || !monsterBId) {
    return NextResponse.json(
      "Invalid params: monsterAId and monsterBId cannot be empty.",
      { status: 400 },
    );
  }
  const [monsterA, monsterB]: TMonster[] = await getMonsters([
    monsterAId,
    monsterBId,
  ]);
  const { firstTurnMonster, secondTurnMonster } = getFirstTurnMonster(
    monsterA,
    monsterB,
  );
  const battleResult = battle(firstTurnMonster, secondTurnMonster);
  return NextResponse.json(battleResult, { status: 200 });
}

export async function POST(req: NextRequest) {
  return NextResponse.json("post message", { status: 200 });
}
