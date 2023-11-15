"use client";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { patchPost } from "@/app/actions/patchPost";
import { useParams, useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export const VotesAction = ({ id, votes }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const cookieStore = useCookies();
  const params = useParams();

  const handleVoteClick = async (votes) => {
    setIsLoading(true);
    try {
      await patchPost({ id, votes: votes });
      router.refresh();
    } catch (error) {
      toast({
        title: "Fail to update vote",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className={`${
        cookieStore.get("layout") === "classic" && !params.commentId
          ? "flex"
          : ""
      }`}
    >
      <ArrowBigUp
        color="gray"
        className={`cursor-pointer hover:bg-secondary ${
          isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading}
        onClick={() => {
          !isLoading && handleVoteClick(votes + 1);
        }}
      />
      <p>{votes}</p>
      <ArrowBigDown
        color="gray"
        className={`cursor-pointer hover:bg-secondary ${
          isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading}
        onClick={() => {
          !isLoading && handleVoteClick(votes - 1);
        }}
      />
    </section>
  );
};
