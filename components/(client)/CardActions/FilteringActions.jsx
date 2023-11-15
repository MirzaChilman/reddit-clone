"use client";
import { TabsTrigger } from "@/components/ui/tabs";

import { RocketIcon, FlameIcon, BadgePlus, SunriseIcon } from "lucide-react";

const Options = [
  { label: "Best", value: "best", icon: <RocketIcon /> },
  { label: "Hot", value: "hot", icon: <FlameIcon /> },
  { label: "New", value: "new", icon: <BadgePlus /> },
  { label: "Top", value: "top", icon: <SunriseIcon /> },
];

export const FilteringActions = () => {
  return (
    <div className="flex gap-2">
      {Options.map((option, index) => {
        return (
          <TabsTrigger
            className="flex w-fit justify-start space-x-2 rounded-2xl"
            key={index}
            value={option.value}
          >
            <span>{option.icon}</span>
            <span>{option.label}</span>
          </TabsTrigger>
        );
      })}
    </div>
  );
};
