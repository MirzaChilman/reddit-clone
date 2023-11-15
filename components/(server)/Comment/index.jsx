import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { displayDate } from "@/helpers/displayDate";
import { ArrowBigUp, ArrowBigDown, MessageSquare } from "lucide-react";

export const Comment = (props) => {
  const { author, content, createdAt } = props;
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
