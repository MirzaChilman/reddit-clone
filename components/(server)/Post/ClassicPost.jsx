"use server";
import { VotesAction } from "@/components/(client)/Votes/Votes";
import { CardContent, CardTitle } from "@/components/ui/card";
import { formatUrlTitle } from "@/helpers/formatUrlTitle";

import Link from "next/link";
import { PostHeader } from "./PostHeader";
import { PostFooter } from "./PostFooter";

const layoutClasses = {
  card: "my-3 px-3 py-1",
  classic: "mx-1 my-1 bg-gray-100 rounded-lg shadow-lg",
  compact: "mx-0 my-0 p-2",
};

export const ClassicPost = ({
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
    <div>
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
    </div>
  );
};
