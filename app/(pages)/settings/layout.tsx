import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";

export default async function ProjectsLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const session = await auth();
  if (session) {
    return <div className="mx-auto h-screen container">{children}</div>;
  }
  redirect("/login");
}
