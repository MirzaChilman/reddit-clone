import { CardSmall } from "@/components/ui/card";
import { displayDate } from "@/helpers/displayDate";

export const PostHeader = ({ subReddit, author, createdAt }) => {
  return (
    <CardSmall>
      <div className="flex gap-1">
        <p className="font-bold">{subReddit}</p>
        <span>-</span>
        <span className="text-gray-700">
          Posted by u/{author} {displayDate(createdAt)}
        </span>
      </div>
    </CardSmall>
  );
};
