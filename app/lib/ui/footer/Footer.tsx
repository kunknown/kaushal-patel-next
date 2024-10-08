"use client";

import React from "react";
import Image from "next/image";
import classNames from "classnames";
import KushIcon from "@/public/kush_2024_cartoon-icon.png";
import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="px-2 sm:px-6 lg:px-8 w-full bottom-0 bg-gray-300 dark:bg-gray-800">
      <ul className="mx-auto max-w-7xl py-2 flex justify-between items-center">
        <li className="">
          <Image
            src={KushIcon}
            alt=""
            className="w-16 rounded-lg"
            width={150}
            height={150}
          />
        </li>
        <li>
          <button
            className={classNames(
              "text-gray-800 hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium",
            )}
            onClick={() => {
              console.log(document.URL.endsWith("/"));
              if (
                document.URL.endsWith("/") &&
                document.getElementById("home-page-container")
              ) {
                document
                  .getElementById("home-page-container")
                  ?.scrollTo({ behavior: "smooth", top: 0 });
              }
              scrollTo({ behavior: "smooth", top: 0 });
            }}
          >
            Back to top
          </button>
        </li>
        <li className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/kaushal-patel-119a20113/"
            target="_blank"
          >
            <Image
              src="https://img.icons8.com/color/480/linkedin.png"
              alt="LinkedIn Icon"
              className="w-20"
              width={100}
              height={100}
            />
          </Link>
          <Link href="https://github.com/kunknown" target="_blank">
            <Image
              src="./github.svg"
              width={100}
              height={100}
              alt="github link"
              className="w-16"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
