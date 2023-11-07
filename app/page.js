"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { CardFiltering } from "./components/(server)/Actions/CardFiltering";
export default function Home() {
  const { setTheme } = useTheme();
  return (
    <main className="p-5">
      <CardFiltering />
      {/* <button onClick={() => setTheme("light")}>light</button> */}
    </main>
  );
}
