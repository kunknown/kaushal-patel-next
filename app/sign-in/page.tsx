"use client";

import React from "react";
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  Controller,
} from "react-hook-form";

export type TSignInFormData = {
  username: string;
  password: string;
};

export default function Profile() {
  const {
    control,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<TSignInFormData>();
  const onSubmit: SubmitHandler<TSignInFormData> = (data) => console.log(data);
  const onError: SubmitErrorHandler<TSignInFormData> = (errors) =>
    console.log(errors);
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <label htmlFor="username">Username</label>
      <Controller
        name="username"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input {...field} type="text" autoComplete="username" />
        )}
      />
      <label htmlFor="password">Password</label>
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input {...field} type="password" autoComplete="current-password" />
        )}
      />
      <input type="submit" />
    </form>
  );
}
