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
import { MessageSquare, Forward, ArrowBigUp, ArrowBigDown } from "lucide-react";

const mock = [
  {
    id: 1,
    username: "User123",
    time: "2 hours ago",
    content: "Really insightful post, thanks for sharing!",
    upvotes: 23,
    downvotes: 0,
    replies: [
      {
        id: 3,
        username: "Commentator",
        time: "1 hour ago",
        content: "I agree, it was a great read.",
        upvotes: 15,
        downvotes: 0,
        replies: [
          {
            id: 6,
            username: "User456",
            time: "30 minutes ago",
            content: "Yes, it was very informative!",
            upvotes: 8,
            downvotes: 0,
          },
        ],
      },
      {
        id: 7,
        username: "AnotherCommentator",
        time: "45 minutes ago",
        content: "I found this interesting too!",
        upvotes: 10,
        downvotes: 0,
      },
    ],
  },
  {
    id: 2,
    username: "JaneDoe",
    time: "3 hours ago",
    content: "This is a great example of a comment section in React.",
    upvotes: 40,
    downvotes: 2,
    replies: [
      {
        id: 8,
        username: "User789",
        time: "2 hours ago",
        content: "Indeed, it's well-organized!",
        upvotes: 12,
        downvotes: 0,
      },
    ],
  },
  {
    id: 4,
    username: "TechGuru",
    time: "4 hours ago",
    content:
      "Has anyone considered the implications of this approach on performance?",
    upvotes: 5,
    downvotes: 1,
    replies: [],
  },
];

const SubRedditCommentsPage = () => {
  return (
    <Card className="my-3 flex gap-1 px-3 py-1 hover:border-primary">
      <section>
        <ArrowBigUp
          color="gray"
          className="cursor-pointer hover:bg-secondary"
        />
        <p>53</p>
        <ArrowBigDown
          color="gray"
          className="cursor-pointer hover:bg-secondary"
        />
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

        {mock.map((comment) => (
          <CommentWithReplies key={comment.id} comment={comment} />
        ))}
      </section>
    </Card>
  );
};

export default SubRedditCommentsPage;
