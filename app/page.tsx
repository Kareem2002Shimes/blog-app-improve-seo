import Link from "next/link";
import { BlogPost } from "@/types";
import BlogItem from "./_components/BlogItem";

async function getPosts(): Promise<BlogPost[]> {
  const res = await fetch("http://localhost:3000/api/blog");
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <section className="py-4 lg:py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 pb-4 lg:pb-24">
            <div className="order-last md:order-none">
              <h1 className="text-4xl lg:text-5xl text-white font-bold mb-4">
                Welcome to My Blog
              </h1>
              <p className="text-lg text-gray-500 my-6">
                Explore insights on web development, SEO, and performance
                optimization.
              </p>
              <Link
                href="/blog"
                className="bg-blue-500 text-white w-28 flex items-center justify-center h-10 rounded-md"
              >
                Discover
              </Link>
            </div>
            <img
              src="/images/hero-img.jpg"
              alt="Blog Hero"
              className="rounded-lg"
            />
          </div>

          <h2 className="text-4xl font-bold text-center mb-6">
            Latest Blog Posts
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <BlogItem key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
