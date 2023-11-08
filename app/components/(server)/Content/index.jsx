import {
  Card,
  CardContent,
  CardFooter,
  CardSmall,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Forward, ArrowBigUp, ArrowBigDown } from "lucide-react";

export const ContentIndex = () => {
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
      </section>
    </Card>
  );
};
