"use client";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { useParams } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { fetchPost } from "@/app/actions/fetchPost";

export const VotesAction = ({ id }) => {
  const { toast } = useToast();
  const [votes, setVotes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingPost, setFetchingPost] = useState(false);
  const cookieStore = useCookies();
  const params = useParams();

  useEffect(() => {
    const handleFetchPost = async () => {
      setFetchingPost(true);

      try {
        const res = await fetchPost({ postId: id });
        setVotes(res.data.votes);
      } catch {
        toast({
          title: "Failed to fetch post",
          variant: "destructive",
        });
      } finally {
        setFetchingPost(false);
      }
    };
    handleFetchPost();
  }, [id, toast]);

  const handleVoteClick = async (votes) => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:8080/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          votes: votes,
        }),
      });
      const json = await res.json();

      setVotes(json.votes);
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
      {fetchingPost || !votes ? (
        <p className="text-white">10</p>
      ) : (
        <p>{votes}</p>
      )}
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
