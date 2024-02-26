"use client";
import React, { MutableRefObject, useRef } from "react";
import ProjectSelectionCard from "./project-selection-card";
import Image from "next/image";

type TProjects = {
  available: boolean;
  description: string;
  id: number;
  link: string;
  title: string;
};
const PROJECTS: TProjects[] = [
  {
    available: true,
    description:
      "Pick your 2 favorite monsters to battle against each other in a turn based Monster Battle Arena! The winner is announced and the battle record details are available for the curious.",
    id: 1,
    link: "projects/monster-battle",
    title: "Monster Batle",
  },
  {
    available: false,
    description: "Coming soon...",
    id: 2,
    link: "",
    title: "Org Structure Tool",
  },
  {
    available: false,
    description: "Coming soon...",
    id: 3,
    link: "",
    title: "Other Projects",
  },
];

export default function ProjectSelection() {
  let projectSelectionRef = useRef(null);
  const leftScrollHandler = (ref: MutableRefObject<null | HTMLElement>) => {
    if (ref?.current) {
      const currentPosition = ref.current.scrollLeft;
      ref.current.scrollTo({ behavior: "smooth", left: currentPosition - 250 });
    }
  };
  const rightScrollHandler = (ref: MutableRefObject<null | HTMLElement>) => {
    if (ref?.current) {
      const currentPosition = ref.current.scrollLeft;
      ref.current.scrollTo({ behavior: "smooth", left: currentPosition + 250 });
    }
  };
  return (
    <div
      ref={projectSelectionRef}
      className="max-w-[500px] min-h-[450px] relative flex items-center gap-6 snap-x snap-mandatory overflow-x-scroll scrollbar-none rounded-lg border-2 border-zinc-900 dark:border-zinc-100"
    >
      <button
        className="z-10 min-w-[25px] h-[450px] sticky left-0 flex items-center bg-zinc-400 dark:bg-zinc-500"
        onClick={() => {
          leftScrollHandler(projectSelectionRef);
        }}
      >
        <Image
          src="https://img.icons8.com/pulsar-line/100/less-than.png"
          alt="scroll left"
          height={25}
          width={25}
        />
      </button>
      <ProjectSelectionCard blank={true} />
      {PROJECTS.map(({ title, description, available, id, link }) => (
        <ProjectSelectionCard
          key={id}
          title={title}
          description={description}
          available={available}
          link={link}
        />
      ))}
      <ProjectSelectionCard blank={true} />
      <button
        className="z-10 min-w-[25px] h-[450px] sticky right-0 flex items-center bg-zinc-400 dark:bg-zinc-500"
        onClick={() => {
          rightScrollHandler(projectSelectionRef);
        }}
      >
        <Image
          src="https://img.icons8.com/pulsar-line/100/more-than.png"
          alt="scroll left"
          height={25}
          width={25}
        />
      </button>
    </div>
  );
}
