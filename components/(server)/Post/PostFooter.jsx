import { CardFooter } from "@/components/ui/card";
import { MessageSquare, Forward } from "lucide-react";

export const PostFooter = ({ totalCommentsAndReplies }) => {
  return (
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
  );
};
