"use server";

export const patchPost = async ({ id, votes } = {}) => {
  let data;
  try {
    const res = await fetch(`http://localhost:8080/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        votes: votes,
      }),
      cache: "no-store",
    });

    data = await res.json();
  } catch {
    console.error("Failed to patch post");
  }
  return { data };
};
