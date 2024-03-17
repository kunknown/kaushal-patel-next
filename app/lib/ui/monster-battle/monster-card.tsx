"use client";
import { TMonster } from "@/app/shared/types-interfaces-enums/types";
import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

export default function MonsterCard({
  monster,
  onClickHandler,
}: Readonly<{
  monster: TMonster | null;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}>) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <button
      className={classNames(
        "p-2 min-h-[200px] min-w-[150px] w-36 lg:w-44 flex flex-col items-center justify-between rounded-lg bg-zinc-400 border-2 border-zinc-200 hover:bg-zinc-500 cursor-pointer",
      )}
      onClick={(e) => {
        setIsActive(!isActive);
        onClickHandler(e);
      }}
    >
      <div>
        <Image
          src={
            monster?.image ??
            "https://img.icons8.com/clouds/100/question-mark.png"
          }
          alt=""
          className="w-16 md:w-16 lg:w-24 border border-zinc-200 rounded-lg md:rounded-md bg-white"
          width={100}
          height={100}
        />
      </div>
      <div className="mt-1 text-xs md:text-sm text-wrap font-bold uppercase">
        {monster?.name ? `${monster.name}(${monster.initials})` : "?"}
      </div>
      <div className="text-xs md:text-base uppercase text-left">
        <ul>
          <li>{`HP: ${monster?.health ?? "?"}`}</li>
          <li>{`ATK: ${monster?.attack ?? "?"}`}</li>
          <li>{`DEF: ${monster?.defense ?? "?"}`}</li>
          <li>{`AGI: ${monster?.agility ?? "?"}`}</li>
        </ul>
      </div>
    </button>
  );
}

("use client");
import { TMonster } from "@/app/shared/types-interfaces-enums/types";
import classNames from "classnames";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useState } from "react";

export default function MonsterCard({
  monster,
  onClickHandler,
  isAnimated,
}: Readonly<{
  isAnimated?: boolean;
  monster: TMonster | null;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}>) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <button
      className={classNames("")}
      onClick={(e) => {
        setIsActive(!isActive);
        onClickHandler(e);
      }}
    >
      <Card
        className={classNames(
          "p-2 min-h-[225px] md:min-h-[200px] min-w-[150px] w-36 lg:w-44 flex flex-col items-center justify-between rounded-lg bg-zinc-400 border-2 border-zinc-200 hover:bg-zinc-500 cursor-pointer",
          { "animate-pulse": isAnimated },
        )}
      >
        <CardHeader className="flex flex-col">
          <div className="text-xs text-wrap font-bold uppercase">
            {monster?.name ? `${monster.name}(${monster.initials})` : "?"}
          </div>
          <div>
            <Image
              src={
                monster?.image ??
                "https://img.icons8.com/clouds/100/question-mark.png"
              }
              alt=""
              className="w-16 md:w-16 lg:w-24 border border-zinc-200 rounded-lg md:rounded-md bg-white"
              width={100}
              height={100}
            />
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex justify-center">
            <ul className="w-fit text-xs md:text-sm uppercase text-left">
              <li>{`HP: ${monster?.health ?? "?"}`}</li>
              <li>{`ATK: ${monster?.attack ?? "?"}`}</li>
              <li>{`DEF: ${monster?.defense ?? "?"}`}</li>
              <li>{`AGI: ${monster?.agility ?? "?"}`}</li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </button>
  );
}
