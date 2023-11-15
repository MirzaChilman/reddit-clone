"use client";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { patchPost } from "@/app/actions/patchPost";
import { useRouter } from "next/navigation";

export const VotesAction = ({ id, votes }) => {
  const router = useRouter();
  return (
    <section>
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
