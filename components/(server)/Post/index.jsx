"use server";
import { VotesAction } from "@/components/(client)/Votes/Votes";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { formatUrlTitle } from "@/helpers/formatUrlTitle";
import clsx from "clsx";
import { cookies } from "next/headers";
import Link from "next/link";
import { PostHeader } from "./PostHeader";
import { PostFooter } from "./PostFooter";
import Head from "next/head";

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
  const url = `/${subReddit}/comments/${id}/${formattedTitle}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/${url}`}
        />
      </Head>
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

          <Link href={url}>
            <CardTitle>{title}</CardTitle>
            <CardContent>{content}</CardContent>
          </Link>

          <PostFooter totalCommentsAndReplies={totalCommentsAndReplies} />
        </section>
      </Card>
    </>
  );
};
