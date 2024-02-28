import monsterList from "@/app/projects/monster-battle/monster-list";
import { SALT_ROUNDS } from "@/shared/constants/constants";
import { insertMonsters, insertUser } from "@/shared/database/db";
import { NewUser } from "@/shared/types-interfaces-enums/types";
import { encryptPassword } from "@/shared/utility/user-utils";

async function main() {
  const newSeedUser: NewUser = {
    email: "seed@kp.com",
    name: "seed-kp",
    password: await encryptPassword("kp123", SALT_ROUNDS),
  };
  // const response = await insertUser(newSeedUser);

  const response = await insertMonsters(monsterList);
  console.log("insert seed monsters successful", response);
  process.exit();
}

main();
