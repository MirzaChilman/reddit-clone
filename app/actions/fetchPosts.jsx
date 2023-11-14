"use server";

export async function fetchPosts({ type = "best", page = 0 } = {}) {
  const res = await fetch(
    `${process.env.BASE_URL}/posts?type=${type}&_limit=10&_page=${page}`
  );
  const data = await res.json();
  console.log({ data });
  return { data };
}
