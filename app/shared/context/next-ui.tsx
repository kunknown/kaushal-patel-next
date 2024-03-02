"use client";

import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren, ReactNode } from "react";

export function NextUiProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
