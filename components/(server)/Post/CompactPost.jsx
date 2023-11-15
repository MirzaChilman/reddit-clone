"use server";
import { VotesAction } from "@/components/(client)/Votes/Votes";
import { CardContent, CardTitle } from "@/components/ui/card";
import { formatUrlTitle } from "@/helpers/formatUrlTitle";
import Link from "next/link";
import { PostHeader } from "./PostHeader";
import { PostFooter } from "./PostFooter";

export const CompactPost = ({
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
  const url = `/${subReddit}/comments/${id}/${formattedTitle}`;
  return (
    <>
      <VotesAction id={id} votes={votes} />
      <section>
        <PostHeader
          subReddit={subReddit}
          author={author}
          createdAt={createdAt}
        />

        <Link href={url}>
          <CardTitle>{title}</CardTitle>
          <CardContent>{content}</CardContent>
        </Link>

        <PostFooter totalCommentsAndReplies={totalCommentsAndReplies} />
      </section>
    </>
  );
};
