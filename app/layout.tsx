import { Inter } from "next/font/google";
import Navbar from "./shared/components/navbar/navbar";
import React, { PropsWithChildren } from "react";
import "./globals.css";
import { DarkThemeContextProvider } from "./shared/context/dark-theme-context";
import classNames from "classnames";
import { AuthContextProvider } from "./shared/context/auth-context";
import Footer from "./shared/components/footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Website build using NextJs, React, Node, Vercel",
  icons: {
    icon: [
      {
        href: "/kush_2024_cartoon-icon.png",
        url: "/kush_2024_cartoon-icon.png",
      },
    ],
  },
  title: "Kaushal Patel",
};
const inter = Inter({ subsets: ["latin"] });

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
          <Footer />
        </body>
      </AuthContextProvider>
    </DarkThemeContextProvider>
  );
}
