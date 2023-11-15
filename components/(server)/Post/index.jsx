"use server";
import { VotesAction } from "@/components/(client)/Votes/Votes";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { formatUrlTitle } from "@/helpers/formatUrlTitle";
import clsx from "clsx";
import { cookies } from "next/headers";
import Link from "next/link";
import { PostHeader } from "./PostHeader";
import { PostFooter } from "./PostFooter";
const layoutClasses = {
  card: "my-3 px-3 py-1 ",
  classic: "mx-10 my-10",
  compact: "mx-0 my-0",
};

export const Post = ({
  title,
  votes,
  subReddit,
  createdAt,
  author,
  content,
  id,
  totalCommentsAndReplies,
}) => {
  const formattedTitle = formatUrlTitle(title);
  const cookieStore = cookies();
  return (
    <Card
      className={clsx(
        `flex cursor-pointer gap-1 hover:border-primary`,
        layoutClasses[cookieStore.get("layout")?.value ?? "card"]
      )}
    >
      <VotesAction id={id} votes={votes} />
      <section>
        <PostHeader
          subReddit={subReddit}
          author={author}
          createdAt={createdAt}
        />

        <Link href={`${subReddit}/comments/${id}/${formattedTitle}`}>
          <CardTitle>{title}</CardTitle>
          <CardContent>{content}</CardContent>
        </Link>

        <PostFooter totalCommentsAndReplies={totalCommentsAndReplies} />
      </section>
    </Card>
  );
};
