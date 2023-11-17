"use server";
import { VotesAction } from "@/components/(client)/Votes/Votes";
import { CardContent, CardTitle } from "@/components/ui/card";
import { formatUrlTitle } from "@/helpers/formatUrlTitle";
import Link from "next/link";
import { PostHeader } from "./PostHeader";
import { PostFooter } from "./PostFooter";
import { Votes2 } from "@/components/(client)/Votes2";

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
      <Votes2 id={id} votes={votes} />
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
