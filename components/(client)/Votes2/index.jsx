"use server";

import { fetchPosts } from "@/app/actions/fetchPosts";
import { Suspense } from "react";
import { VotesActionClient } from "./VotesClient";

export const Votes2 = async ({ id }) => {
  const res = await fetchPosts();

  const currentIdAndVotes = res.data.filter((datum) => {
    return datum.id === id;
  })[0];
  console.log({ res: currentIdAndVotes });

  return (
    <Suspense>
      <VotesActionClient
        id={currentIdAndVotes.id}
        votes={currentIdAndVotes.votes}
      />
    </Suspense>
  );
};
