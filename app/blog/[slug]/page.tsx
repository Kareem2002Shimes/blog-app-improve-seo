import { BlogPost } from "@/types";
import { notFound } from "next/navigation";

async function getPost(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  console.log(res.status);
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();
  console.log(post);
  return (
    <main>
      <section className="py-4 lg:py-12">
        <div className="container">
          <h1 className="text-4xl lg:text-5xl text-white font-bold mb-6">
            {post.title}
          </h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover mb-4"
          />
          <p className="text-gray-600">{post.content}</p>
        </div>
      </section>
    </main>
  );
}
