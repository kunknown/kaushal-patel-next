"use client";

import React, { useState, FormEvent } from "react";
import { submitLoginData } from "@/app/actions/user-actions";
import { Button, Input, Link } from "@nextui-org/react";
import { loginErrorStrings } from "@/lib/constants/constants";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{
    email: string;
    password: string;
    default: string;
  }>({ default: "", email: "", password: "" });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const clearError = { default: "", email: "", password: "" };
    const formData = new FormData(event.currentTarget);
    try {
      const err = await submitLoginData(formData);
      switch (err) {
        case loginErrorStrings.invalidEmail:
          setError({ ...clearError, email: loginErrorStrings.invalidEmail });
          break;
        case loginErrorStrings.invalidPassword:
          setError({
            ...clearError,
            password: loginErrorStrings.invalidPassword,
          });
          break;
        default:
          setError({ ...clearError, default: loginErrorStrings.default });
          break;
      }
    } catch (e) {
      setError({ ...clearError, default: loginErrorStrings.default });
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16">
      <form
        name="login-form"
        onSubmit={onSubmit}
        className="mt-16 mx-auto p-4 w-[500px] flex flex-col items-center bg-zinc-900 rounded-lg"
      >
        {/* <label htmlFor="email">Email</label> */}
        <div className="">
          <Input
            name="username"
            type="email"
            variant="underlined"
            autoComplete="email"
            isClearable
            isRequired
            label="Username"
            isInvalid={!!error.email}
            errorMessage={error.email}
          />
        </div>
        <div>
          <Input
            name="current-password"
            type="password"
            variant="underlined"
            autoComplete="current-password"
            isClearable
            isRequired
            label="password"
            isInvalid={!!error.password}
            errorMessage={error.password}
          />
        </div>
        <Button
          type="submit"
          isLoading={isLoading}
          className="mt-4 text-black font-bold bg-zinc-300"
        >
          Login
        </Button>
        {/* <label className="p-2 mt-4 h-10 w-20 flex justify-center items-center border bg-zinc-200 hover: bg-zinc-300 rounded-lg">
          {isLoading ? (
            <Image
              className="w-8 animate-spin"
              src="https://img.icons8.com/ios-glyphs/100/000000/spinner-frame-5.png"
              alt="spinner-frame-5"
              width={100}
              height={100}
            />
          ) : (
            "Login"
          )}
          <input type="submit" hidden />
        </label> */}
      </form>
      <div className="mt-4 text-center">
        {`Don't have an account?`}
        <Link
          href="/create-account"
          className="ml-2 px-4 py-2 text-base text-black bg-zinc-300 rounded-lg"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
