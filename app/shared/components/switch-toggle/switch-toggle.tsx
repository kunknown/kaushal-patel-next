"use client";

import React from "react";
import { Switch } from "@headlessui/react";

export interface TSwitchToggle {
  isToggleOn: boolean;
  setIsToggleOn: Function;
  labelTop: string;
}

export default function SwitchToggle({
  isToggleOn,
  setIsToggleOn,
  labelTop,
}: Readonly<TSwitchToggle>) {
  return (
    <div className="flex items-center justify-center">
      {/* Dark mode toggle */}
      <Switch.Group>
        <div className="w-full flex shrink-0 items-center justify-between">
          <Switch.Label
            className={
              "text-base font-semibold text-gray-800 text dark:text-gray-300"
            }
          >
            Toggle Dark Mode
          </Switch.Label>
          <Switch
            checked={isToggleOn}
            onChange={() => setIsToggleOn(!isToggleOn)}
            className={`${
              isToggleOn ? "bg-gray-300" : "bg-gray-800"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">{labelTop}</span>
            <span
              className={`${
                isToggleOn ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-900 transition`}
            />
          </Switch>
        </div>
      </Switch.Group>
    </div>
  );
}
