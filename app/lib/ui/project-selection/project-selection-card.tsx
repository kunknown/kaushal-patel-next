"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectSelectionCard({
  title,
  description,
  available,
  link,
  blank,
}: Readonly<{
  available?: boolean;
  description?: string;
  title?: string;
  link?: string;
  blank?: boolean;
}>) {
  const formattedTitle = (
    <div className="my-4 row-span-1 text-xl font-bold uppercase">{title}</div>
  );
  const formattedDescription = (
    <div
      className={classNames("my-2 text-base", {
        "row-span-1": !available,
        "row-span-2": available,
      })}
    >
      {description}
    </div>
  );
  return (
    <Link
      href={link ?? ""}
      className={classNames(
        "h-[400px] p-2 grid",
        { "grid-row-3": !available, "grid-rows-4": available },
        {
          "bg-zinc-600 dark:bg-zinc-200 transition ease-in-out delay-0 hover:scale-110 text-white dark:hover:text-white  hover:bg-zinc-900 dark:hover:bg-zinc-900 duration-500":
            available,
          "bg-zinc-700 dark:bg-zinc-300 ": !available && !blank,
          "cursor-not-allowed": !available,
          "w-20 cursor-default": blank,
          "w-72": !blank,
        },
        "shrink-0 snap-always snap-center rounded-lg text-center text-white dark:text-black",
      )}
    >
      {!available && !blank && (
        <>
          {formattedTitle}
          {formattedDescription}
          <div className="mx-auto row-span-1">
            <Image
              className="hidden dark:block"
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/100/external-not-allowed-health-care-and-medical-flatart-icons-outline-flatarticons.png"
              alt="not allowed icon"
              height={100}
              width={100}
            />
            <Image
              className="block dark:hidden"
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/100/FFFFFF/external-not-allowed-health-care-and-medical-flatart-icons-outline-flatarticons.png"
              alt="not allowed icon"
              height={100}
              width={100}
            />
          </div>
        </>
      )}
      {available && (
        <>
          {formattedTitle}
          {formattedDescription}
        </>
      )}
    </Link>
  );
}
