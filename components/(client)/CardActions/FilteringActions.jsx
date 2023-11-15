"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { RocketIcon, FlameIcon, BadgePlus, SunriseIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { setLayout } from "@/app/actions/setLayout";
import { useCookies } from "next-client-cookies";
import { LayoutActions } from "./LayoutActions";

const Options = [
  { label: "Best", value: "best", icon: <RocketIcon /> },
  { label: "Hot", value: "hot", icon: <FlameIcon /> },
  { label: "New", value: "new", icon: <BadgePlus /> },
  { label: "Top", value: "top", icon: <SunriseIcon /> },
];

export const FilteringActions = () => {
  const router = useRouter();
  const cookieStore = useCookies();
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
