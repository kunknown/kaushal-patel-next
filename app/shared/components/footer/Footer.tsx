"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-2 sm:px-6 lg:px-8 w-full bottom-0 bg-gray-300 dark:bg-gray-800">
      <ul className="mx-auto max-w-7xl py-2 flex justify-between items-center">
        <li className="">
          <Image
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="w-10"
            width={150}
            height={150}
          />
        </li>
        <li>
          <button
            onClick={() => {
              scrollTo({ behavior: "smooth", top: 0 });
            }}
          >
            Back to top
          </button>
        </li>
        <li>
          Contact
          <ul>
            <li>LinkedIn</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
