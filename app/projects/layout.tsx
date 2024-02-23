import React, { PropsWithChildren } from "react";

export default function ProjectsLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return <div className="mx-auto h-screen container">{children}</div>;
}
