"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RocketIcon, FlameIcon, BadgePlus, SunriseIcon } from "lucide-react";

const Options = [
  { label: "Best", value: "best", icon: <RocketIcon /> },
  { label: "Hot", value: "hot", icon: <FlameIcon /> },
  { label: "New", value: "new", icon: <BadgePlus /> },
  { label: "Top", value: "top", icon: <SunriseIcon /> },
];

export const CardFiltering = () => {
  return (
    <Tabs
      defaultValue="best"
      onValueChange={(value) => {
        console.log(value);
      }}
    >
      <TabsList className="w-full justify-between px-2 py-7 ">
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
        <div>
          <Select>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue defaultValue="card" placeholder="Card" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="card">Card</SelectItem>
                <SelectItem value="classic">Classic</SelectItem>
                <SelectItem value="compact">Compact</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </TabsList>
      {/* <TabsContent value="best">Best</TabsContent>
      <TabsContent value="Hot">hot</TabsContent> */}
    </Tabs>
  );
};
