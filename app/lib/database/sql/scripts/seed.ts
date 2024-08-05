import monsterList from "@/lib/database/sql/_mocks/monster-list";
import { SALT_ROUNDS } from "@/lib/constants/constants";
import { insertMonsters, insertUser } from "@/lib/database/sql/db";
import { NewUser } from "@/app/lib/types-interfaces-enums/types";
import { encryptPassword } from "@/lib/utility/bcrypt-utils";

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
