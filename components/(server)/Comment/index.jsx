import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { displayDate } from "@/helpers/displayDate";
import { ArrowBigUp, ArrowBigDown, MessageSquare } from "lucide-react";

/**
 * Single comment component
 * @param {Object} props
 * @param {string} props.username - The username of the commenter.
 * @param {string} props.time - The time when the comment was posted.
 * @param {string} props.content - The content of the comment.
 * @param {number} props.upvotes - The number of upvotes the comment has received.
 * @param {number} props.downvotes - The number of downvotes the comment has received.
 * @param {Function} props.onReply - Function to call when the reply button is clicked.
 * @param {Function} props.onShare - Function to call when the share button is clicked.
 * @param {Function} props.onReport - Function to call when the report button is clicked.
 */
export const Comment = (props) => {
  const { author, content, createdAt, votes } = props;
  return (
    <section className="card flex gap-2 px-1 py-2">
      <aside>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shasdcn.png" alt="@shadcn" />
          <AvatarFallback>
            {author[0]}
            {author[1]}
          </AvatarFallback>
        </Avatar>
      </aside>
      <Card className="flex-1 p-2">
        <header>
          <p>
            {author} - <span className="text-sm">{displayDate(createdAt)}</span>
          </p>
        </header>
        <article>
          <p>{content}</p>
        </article>
        <footer className="flex gap-1">
          <div className="flex items-center gap-1">
            <ArrowBigUp size={24} className="hover:bg-secondary" />
            <small>{votes}</small>
            <ArrowBigDown size={24} className="hover:bg-secondary" />
          </div>

          <div className="flex cursor-pointer items-center gap-1 hover:bg-secondary">
            <MessageSquare size={20} />
            <p>Reply</p>
          </div>
        </footer>
      </Card>
      {/* <div className="absolute left-[18px]  w-2 border-l-2" /> */}
    </section>
  );
};
