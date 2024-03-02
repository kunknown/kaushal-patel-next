"use client";
import classNames from "classnames";
import React, { MouseEventHandler } from "react";

export default function MonsterArenaButton({
  label,
  onClickHandler,
  isDisabled,
  isActive,
}: Readonly<{
  label: string;
  onClickHandler: MouseEventHandler;
  isDisabled: boolean;
  isActive?: boolean;
}>) {
  return (
    <button
      className={classNames(
        "max-h-12 p-2 border-2 border-zinc-200 bg-zinc-200 rounded-lg text-sm md:text-lg capitalize",
        { "bg-zinc-400": isActive },
        { "cursor-not-allowed": isDisabled },
        { "hover:bg-zinc-300": !isDisabled },
      )}
      disabled={isDisabled}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
}
