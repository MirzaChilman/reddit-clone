"use client";
import { VotesAction } from "@/components/(client)/Votes/Votes";
import {
  Card,
  CardContent,
  CardFooter,
  CardSmall,
  CardTitle,
} from "@/components/ui/card";
import { displayDate } from "@/helpers/displayDate";
import { formatUrlTitle } from "@/helpers/formatUrlTitle";
import { MessageSquare, Forward, ArrowBigUp, ArrowBigDown } from "lucide-react";
import Link from "next/link";

export const ContentIndex = ({
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
  return (
    <Card className="my-3 flex cursor-pointer gap-1 px-3 py-1 hover:border-primary">
      <VotesAction id={id} votes={votes} />
      <section>
        <CardSmall>
          <div className="flex gap-1">
            <p className="font-bold">{subReddit}</p>
            <span>-</span>
            <span className="text-gray-700">
              Posted by u/{author} {displayDate(createdAt)}
            </span>
          </div>
        </CardSmall>

        <Link href={`${subReddit}/comments/${id}/${formattedTitle}`}>
          <CardTitle>{title}</CardTitle>
          <CardContent>{content}</CardContent>
        </Link>

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
      </section>
    </Card>
  );
};
