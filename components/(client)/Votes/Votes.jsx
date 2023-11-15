"use client";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { patchPost } from "@/app/actions/patchPost";
import { useParams, useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

export const VotesAction = ({ id, votes }) => {
  const router = useRouter();
  const cookieStore = useCookies();
  const params = useParams();
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
        className="cursor-pointer hover:bg-secondary"
        onClick={async () => {
          await patchPost({ id, votes: votes + 1 });
          router.refresh();
        }}
      />
      <p>{votes}</p>
      <ArrowBigDown
        color="gray"
        className="cursor-pointer hover:bg-secondary"
        onClick={async () => {
          await patchPost({ id, votes: votes - 1 });
          router.refresh();
        }}
      />
    </section>
  );
};
