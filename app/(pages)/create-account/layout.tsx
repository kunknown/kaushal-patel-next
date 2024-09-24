import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function Layout({
  children,
}: Readonly<PropsWithChildren>) {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return <div className="mx-auto h-screen container">{children}</div>;
}
