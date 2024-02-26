"use client";

import React, { useState } from "react";
import MonsterArena from "./monster-arena";
import Image from "next/image";
import LoadingIcon from "@/public/icons8-sand-timer_transparent.gif";

export default function MonsterBattle() {
  return (
    <div className="mt-16 flex justify-center">
      <MonsterArena />
    </div>
  );
}
