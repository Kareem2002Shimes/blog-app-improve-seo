import { BlogPost } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getPost(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
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
  return (
    <main>
      <section className="py-4 lg:py-12">
        <div className="container">
          <h1 className="text-4xl lg:text-5xl text-white font-bold mb-6">
            {post.title}
          </h1>
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={400}
            className="w-full h-96 object-cover mb-4"
          />
          <p className="text-gray-600">{post.content}</p>
        </div>
      </section>
    </main>
  );
}
