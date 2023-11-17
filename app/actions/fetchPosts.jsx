"use server";
export async function fetchPosts({ type = "best", page = 0 } = {}) {
  let data = null;
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/posts?type=${type}&_limit=15&_page=${page}`,
      { next: { tags: ["fetchPosts"] }, cache: "no-store" }
    );
    data = await res.json();
  } catch {
    console.log("Failed Fetch Posts");
  }

  return { data };
}
