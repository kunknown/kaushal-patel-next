// // import { GetServerSideProps } from "next";
// import { MongoClient } from "mongodb";

// const { MONGODB_URI } = process.env;

// if (!MONGODB_URI) {
//   throw new Error(
//     `Please define the MONGODB_URI environment variables inside .env.local`,
//   );
// }

// const client = new MongoClient(MONGODB_URI);

// export async function GET(req: Request) {
//   // const url = new URL(req.url);
//   // const urlSearchParams = new URLSearchParams(url.searchParams);
//   // console.log(urlSearchParams);
//   try {
//     await client.connect();
//     const database = client.db("users");
//     const todos = database.collection("user_data");
//     const user = await todos.findOne({ name: "Kush Patel" });
//     return Response.json(user);
//   } catch (e) {
//     console.dir(e);
//   } finally {
//     await client.close();
//   }
// }
