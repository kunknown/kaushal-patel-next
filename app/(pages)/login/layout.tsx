import { PropsWithChildren } from "react";

export default async function Layout({
  children,
}: Readonly<PropsWithChildren>) {
  return <div className="mx-auto h-screen container">{children}</div>;
}
