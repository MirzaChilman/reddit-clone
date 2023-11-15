"use server";

export async function fetchPost({ postId }) {
  let data = null;
  try {
    const res = await fetch(`${process.env.BASE_URL}/posts/${postId}`, {
      cache: "no-store",
    });
    data = await res.json();
  } catch {
    console.error("Failed Fetch Post");
  }

  return { data };
}
