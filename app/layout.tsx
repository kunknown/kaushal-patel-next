import { Inter } from "next/font/google";
import Navbar from "./lib/ui/navbar/navbar";
import { PropsWithChildren } from "react";
import "./globals.css";
import { DarkThemeContextProvider } from "./shared/context/dark-theme-context";
import classNames from "classnames";
import Footer from "./lib/ui/footer/Footer";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { NextUiProvider } from "@/shared/context/next-ui";

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
      <SessionProvider>
        <body
          className={classNames(
            "font-sans bg-gray-100 dark:bg-gray-600",
            inter.className,
          )}
        >
          <NextUiProvider>
            <Navbar />
            <div className="my-16">{children}</div>
            <Footer />
          </NextUiProvider>
        </body>
      </SessionProvider>
    </DarkThemeContextProvider>
  );
}
