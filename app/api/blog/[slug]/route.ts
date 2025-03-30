import posts from "@/data/posts.json";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(post), { status: 200 });
}
