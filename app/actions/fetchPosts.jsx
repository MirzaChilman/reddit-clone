"use server";
export async function fetchPosts({ type = "best", page = 0 } = {}) {
  const res = await fetch(
    `${process.env.BASE_URL}/posts?type=${type}&_limit=&_page=${page}`
  );
  const data = await res.json();
  return { data };
}
