"use client";

import { CardFiltering } from "../components/(server)/Actions/CardFiltering";
import { ContentIndex } from "../components/(server)/Content";

export default function Home() {
  return (
    <main className="p-5">
      <CardFiltering />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      {/* <button onClick={() => setTheme("light")}>light</button> */}
    </main>
  );
}
