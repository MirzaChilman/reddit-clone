import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardSmall,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Forward, ArrowBigUp, ArrowBigDown } from "lucide-react";

const SubRedditCommentsPage = () => {
  return (
    <Card className="my-3 flex cursor-pointer gap-1 px-3 py-1 hover:border-primary">
      <section>
        <ArrowBigUp color="gray" className="cursor-pointer" />
        <p>53</p>
        <ArrowBigDown color="gray" className="cursor-pointer" />
      </section>
      <section>
        <CardSmall>
          <div className="flex gap-1">
            <p className="font-bold">r/ReactJs</p>
            <span>-</span>
            <span className="text-gray-700">
              Posted by u/Spiritual Tank 4 days ago
            </span>
          </div>
        </CardSmall>
        <CardTitle>React Typescript?</CardTitle>
        <CardContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum vero
          quas tempore maiores dolorem praesentium repellendus deserunt aliquid,
          beatae, minima ipsam ratione, enim necessitatibus iste reprehenderit?
          Perspiciatis tenetur ea quis.
        </CardContent>
        <CardFooter>
          <div className="flex gap-3 text-sm">
            <div className="flex cursor-pointer items-center gap-1 rounded-sm p-1 hover:bg-secondary">
              <MessageSquare size={18} />
              <p>153 comments</p>
            </div>
            <div className="flex cursor-pointer items-center gap-1 rounded-sm p-1 hover:bg-secondary">
              <Forward size={18} />
              <p>Share</p>
            </div>
          </div>
        </CardFooter>
        <div className="my-5 text-sm">
          <p>
            Comment as <span className="text-blue-600">Spiritual Tank</span>{" "}
          </p>
          <Textarea />
          <Button size="sm" className="mt-3">
            Send Comment
          </Button>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>
              Username - <span className="text-sm">3 yr ago</span>
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </Card>
  );
};

export default SubRedditCommentsPage;
