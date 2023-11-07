"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <main className="p-5">
      <Card>
        <CardContent>test</CardContent>
      </Card>
    </main>
  );
}
