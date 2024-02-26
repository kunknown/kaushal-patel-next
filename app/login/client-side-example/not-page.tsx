"use client";
import React from "react";
import { submitLoginData } from "./login-form-server";

// type TLoginFormClientParams = {
//   submit: (arg0: FormData) => Promise<void>;
//   create: () => Promise<void>;
// };

export default function LoginFormClient() {
  return (
    <>
      <form action={submitLoginData}>
        <label htmlFor="fullname">Full Name</label>
        <input name="fullname" type="text" />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <input type="submit" />
      </form>
      <button name="get-user" type="submit" onClick={() => {}}>
        Get User
      </button>
    </>
  );
}
