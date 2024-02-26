"use server";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error(
    `Please define the MONGODB_URI environment variables inside .env.local`,
  );
}

export async function submitLoginData(formData: FormData) {
  try {
    console.log(formData);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("finally...");
  }
}

export async function createNewUser() {
  try {
    console.log("testing");
    // await mongoose.connect(MONGODB_URI as string);
    // const userSchema = new mongoose.Schema({ name: String });
    // const Users = mongoose.model("users", userSchema);
    // const user = await Users.find({ name: "Kush Patel" });
    // console.log("user", user);
    // return Response.json(user);
  } catch (e) {
    console.dir(e);
  } finally {
    console.log("closing test");
    // await mongoose.disconnect();
  }
}

// export default async function Page() {
//   return <LoginFormClient />;
// }
