"use server";
export async function fetchPosts({ type = "best", page = 0 } = {}) {
  let data = null;
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/posts?type=${type}&_limit=15&_page=${page}`,
      { cache: "no-store", next: { tags: ["fetchPosts", String(page)] } }
    );
    data = await res.json();
  } catch {
    console.log("Failed Fetch Posts");
  }

  return { data };
}
