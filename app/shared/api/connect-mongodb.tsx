import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DB_NAME}/`;
const client = new MongoClient(uri);
console.log("testing...");
async function run() {
  try {
    const database = client.db("kaushal-patel");
    const todos = database.collection("todos");

    const query = { name: "groceries" };
    const todoItem = await todos.findOne(query);
    console.log(todoItem);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
