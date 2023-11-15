"use client";
import { Tabs, TabsList } from "@/components/ui/tabs";

import { useRouter } from "next/navigation";

import { LayoutActions } from "./LayoutActions";
import { FilteringActions } from "./FilteringActions";

export const CardActions = () => {
  const router = useRouter();
  return (
    <Tabs
      defaultValue="best"
      onValueChange={(value) => {
        router.push(`?type=${value}`);
      }}
    >
      <TabsList className="w-full justify-between px-2 py-7 ">
        <FilteringActions />
        <LayoutActions />
      </TabsList>
    </Tabs>
  );
};
