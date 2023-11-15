"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const PostEvents = ({ author }) => {
  const { toast } = useToast();
  return (
    <div className="my-5 text-sm">
      <p>
        Comment as <span className="text-blue-600">{author}</span>{" "}
      </p>
      <Textarea />
      <Button
        size="sm"
        className="mt-3"
        onClick={() => {
          toast({ title: "This is dummy handler", variant: "destructive" });
        }}
      >
        Send Comment
      </Button>
    </div>
  );
};
