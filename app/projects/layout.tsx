import React, { PropsWithChildren } from "react";

export default function ProjectsLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return <div className="container">{children}</div>;
}
