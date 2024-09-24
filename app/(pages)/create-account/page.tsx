"use client";

import React, { FormEvent, useState } from "react";
import { createNewUser } from "@/app/actions/user-actions";
import { Button, Input } from "@nextui-org/react";
import { createAccountErrorStrings } from "@/lib/constants/constants";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ email: string; default: string }>({
    default: "",
    email: "",
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    try {
      const err = await createNewUser(formData);
      if (err) {
        if (err === createAccountErrorStrings.invalidEmail) {
          setError({ default: "", email: err });
        } else {
          setError({ default: err, email: "" });
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      name="signup-form"
      onSubmit={onSubmit}
      className="mx-auto mt-16 p-4 w-[500px] flex flex-col items-center bg-zinc-900 rounded-lg"
    >
      <div>
        <Input
          name="name"
          type="text"
          autoComplete="name"
          isRequired
          variant="underlined"
          label="Full Name"
          className="text-black"
        />
      </div>
      <div>
        <Input
          id="signup-email"
          name="email"
          type="email"
          isRequired
          variant="underlined"
          label="Email"
          description="This will be your username."
          autoComplete="email"
          isInvalid={!!error.email}
          errorMessage={error.email}
        />
      </div>
      <div>
        <Input
          name="new-password"
          type="password"
          autoComplete="new-password"
          isRequired
          variant="underlined"
          label="Password"
        />
      </div>

      {/* <label className="p-2 mt-4 border bg-zinc-200 hover: bg-zinc-300 rounded-lg">
        Signup <input type="submit" hidden />
      </label> */}
      <Button
        type="submit"
        isLoading={isLoading}
        className="mt-4 text-black font-bold bg-zinc-300"
      >
        Create Account
      </Button>
    </form>
  );
}
