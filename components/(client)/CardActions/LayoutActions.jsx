"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setLayout } from "@/app/actions/setLayout";
import { useCookies } from "next-client-cookies";

export const LayoutActions = () => {
  const cookieStore = useCookies();
  return (
    <div>
      {JSON.stringify()}
      <Select
        onValueChange={(event) => {
          setLayout(event);
        }}
        defaultValue={cookieStore?.get("layout") ?? "card"}
      >
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
  );
};
