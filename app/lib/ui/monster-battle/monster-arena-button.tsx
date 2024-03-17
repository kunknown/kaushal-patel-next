"use client";
import { Button } from "@nextui-org/react";
import classNames from "classnames";
import React, { MouseEventHandler } from "react";

export default function MonsterArenaButton({
  label,
  onClickHandler,
  isDisabled,
  isActive,
  isAnimated,
}: Readonly<{
  label: string;
  onClickHandler: MouseEventHandler;
  isDisabled: boolean;
  isActive?: boolean;
  isAnimated?: boolean;
}>) {
  return (
    <Button
      className={classNames(
        "border-2 border-zinc-200 bg-zinc-200 rounded-lg text-sm font-bold text-black md:text-lg capitalize",
        { "bg-zinc-400": isActive },
        { "cursor-not-allowed": isDisabled },
        { "hover:bg-zinc-300": !isDisabled },
        { "animate-pulse": isAnimated },
      )}
      disabled={isDisabled}
      onClick={onClickHandler}
    >
      {label}
    </Button>
  );
}
