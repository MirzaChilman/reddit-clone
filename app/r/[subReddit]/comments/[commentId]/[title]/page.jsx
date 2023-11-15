import { fetchPost } from "@/app/actions/fetchPost";
import CommentWithReplies from "@/components/(server)/Comment/WithReplies";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardSmall,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { displayDate } from "@/helpers/displayDate";
import { MessageSquare, Forward } from "lucide-react";
import { VotesAction } from "../../../../../../components/(client)/Votes/Votes";
import Head from "next/head";
import { PostEvents } from "./components/(client)/PostEvents";

export async function generateMetadata({ params }) {
  const postId = params.commentId;

  const res = await fetchPost({ postId });
  const { title, content } = res.data;

  return {
    title: title,
    description: content,
  };
}

const SubRedditCommentsPage = async ({ params }) => {
  const postId = params.commentId;
  const res = await fetchPost({ postId });
  const {
    votes,
    subreddit,
    author,
    createdAt,
    title,
    content,
    comments,
    totalCommentsAndReplies,
  } = res.data;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:type" content="article" />
      </Head>
      <Card className="mx-4 my-5 flex gap-1 px-3 py-1 ">
        <VotesAction id={postId} votes={votes} />
        <section>
          <CardSmall>
            <div className="flex gap-1">
              <p className="font-bold">{subreddit}</p>
              <span>-</span>
              <span className="text-gray-700">
                Posted by u/{author} {displayDate(createdAt)}
              </span>
            </div>
          </CardSmall>
          <CardTitle>{title}</CardTitle>
          <CardContent>{content}</CardContent>
          <CardFooter>
            <div className="flex gap-3 text-sm">
              <div className="flex cursor-pointer items-center gap-1 rounded-sm p-1 hover:bg-secondary">
                <MessageSquare size={18} />
                <p>{totalCommentsAndReplies ?? 0}</p>
              </div>
              <div className="flex cursor-pointer items-center gap-1 rounded-sm p-1 hover:bg-secondary">
                <Forward size={18} />
                <p>Share</p>
              </div>
            </div>
          </CardFooter>
          <PostEvents author={author} />

          {comments.map((comment) => (
            <CommentWithReplies key={comment.id} comment={comment} />
          ))}
        </section>
      </Card>
    </>
  );
};

export default SubRedditCommentsPage;
