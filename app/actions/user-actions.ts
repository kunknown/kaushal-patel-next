"use server";
import { signIn, signOut } from "@/auth";
import {
  SALT_ROUNDS,
  createAccountErrorStrings,
  loginErrorStrings,
} from "@/lib/constants/constants";
import { getUser, insertUser } from "@/lib/database/sql/db";
import { encryptPassword } from "@/lib/utility/bcrypt-utils";
import { AuthError } from "next-auth";
import { DrizzleError } from "drizzle-orm";

export async function logout() {
  await signOut();
}

export async function login(
  email: string,
  password: string,
  redirectTo?: string,
  newAccount?: boolean,
) {
  let isEmailValid = false;
  if (!newAccount) {
    const user = await getUser(email);
    isEmailValid = !!user[0]?.id;
  }
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return isEmailValid
            ? loginErrorStrings.invalidPassword
            : loginErrorStrings.invalidEmail;
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
  return "Login successul.";
}

export async function submitLoginData(formData: FormData) {
  const email = formData.get("username")?.toString();
  const password = formData.get("current-password")?.toString();
  if (email && password) {
    const res = await login(email, password, "/", false);
    return res;
  }
}

export async function createNewUser(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("new-password")?.toString();
  const passwordHash = await encryptPassword(password as string, SALT_ROUNDS);
  let newUserArr = [];
  try {
    newUserArr = await insertUser({
      email: email as string,
      name: name as string,
      password: passwordHash,
    });
  } catch (error) {
    console.log(error instanceof DrizzleError, error instanceof Error);
    if (error instanceof Error && error?.message.includes("user_email_idx")) {
      return createAccountErrorStrings.invalidEmail;
    }
    throw error;
  }
  const newUser = newUserArr[0];
  if (newUser.email && password) {
    const res = await login(newUser.email, password, "/", true);
    return res;
  }
}
