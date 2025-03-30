export async function GET() {
  const posts = [
    {
      id: 1,
      title: "SEO in Next.js",
      slug: "seo-nextjs",
      content: "Learn how to optimize Next.js for SEO...",
    },
    {
      id: 2,
      title: "Image Optimization",
      slug: "image-optimization",
      content: "Using next/image for better performance.",
    },
  ];

  return Response.json(posts);
}
