import { CardFiltering } from "../components/(client)/Actions/CardFiltering";
import { ContentIndex } from "../components/(server)/Content";
import { LoadMore } from "@/components/(client)/LoadMore";
import { fetchPosts } from "./actions/fetchPosts";

export default async function Home() {
  const results = await fetchPosts();
  return (
    <main className="p-5">
      <CardFiltering />
      adasd
      {/* {results?.map((result) => {
        const {
          title,
          votes,
          subreddit,
          createdAt,
          comments,
          author,
          content,
        } = result;
        return (
          <ContentIndex
            key={result.id}
            title={title}
            votes={votes}
            subReddit={subreddit}
            createdAt={createdAt}
            comments={comments}
            author={author}
            content={content}
          />
        );
      })}

      <LoadMore /> */}
      {/* <button onClick={() => setTheme("light")}>light</button> */}
    </main>
  );
}
