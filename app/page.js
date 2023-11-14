import { CardFiltering } from "../components/(client)/Actions/CardFiltering";
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
