import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./shared/components/navbar/navbar";
import React, { PropsWithChildren } from "react";
import "./globals.css";
import { DarkThemeContextProvider } from "./shared/context/dark-theme-context";
import classNames from "classnames";
import { AuthContextProvider } from "./shared/context/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Kunknown's Website",
  title: "Kunknown",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <DarkThemeContextProvider>
      <AuthContextProvider>
        <body
          className={classNames(
            "font-sans bg-gray-100 dark:bg-gray-600",
            inter.className,
          )}
        >
          <Navbar />
          {children}
          <footer>Footer</footer>
        </body>
      </AuthContextProvider>
    </DarkThemeContextProvider>
  );
}
