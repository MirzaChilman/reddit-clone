"use server";
export async function fetchPost({ postId }) {
  const res = await fetch(`${process.env.BASE_URL}/posts/${postId}`);
  const data = await res.json();
  return { data };
}
