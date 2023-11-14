import { Spinner } from "@/components/(server)/Spinner";
import { CardFiltering } from "../components/(client)/Actions/CardFiltering";
import { ContentIndex } from "../components/(server)/Content";
import { LoadMore } from "@/components/(client)/LoadMore";

export async function fetchServerData() {
  "use server";
  const res = await fetch(`${process.env.BASE_URL}/posts?type=best&_limit=1`);
  const data = await res.json();
  return { data };
}

export default async function Home({ searchParams, params }) {
  console.log({ searchParams, params });
  const res = await fetchServerData();
  return (
    <main className="p-5">
      <CardFiltering />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      <ContentIndex />
      <LoadMore />
      {/* <button onClick={() => setTheme("light")}>light</button> */}
    </main>
  );
}
