import { CardFiltering } from "../components/(client)/Actions/CardFiltering";
import { ContentIndex } from "../components/(server)/Content";
import { LoadMore } from "@/components/(client)/LoadMore";
import { fetchPosts } from "./actions/fetchPosts";

export default async function Home({ searchParams }) {
  const typeParams = searchParams.type;
  const results = await fetchPosts({ type: typeParams });
  return (
    <main className="p-5">
      <CardFiltering />
      {results.data?.map((result) => {
        const {
          title,
          votes,
          subreddit,
          createdAt,
          author,
          content,
          id,
          totalCommentsAndReplies,
        } = result;
        return (
          <ContentIndex
            key={id}
            id={id}
            title={title}
            votes={votes}
            subReddit={subreddit}
            createdAt={createdAt}
            author={author}
            content={content}
            totalCommentsAndReplies={totalCommentsAndReplies}
          />
        );
      })}
      <LoadMore />
      {/* <button onClick={() => setTheme("light")}>light</button> */}
    </main>
  );
}
