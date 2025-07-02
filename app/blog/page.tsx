import Link from "next/link";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const BlogPage = async () => {
  const data = await fetch(`${process.env.BLOG_URL}/api/posts`);

  const posts = await data.json();

  console.log(posts);

  return (
    <div className="mx-auto max-w-5xl px-8 2xl:px-0 py-20">
      <h2 className="text-3xl font-bold pb-12">Posts</h2>

      <div className=" grid md:grid-cols-3 gap-8">
        {posts.docs.map((post: any) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="">
            <Image
              src={process.env.BLOG_URL + post.featuredImage.url}
              alt={post.featuredImage.alt}
              width={400}
              height={300}
              className="w-full h-56 object-cover rounded-lg"
            />

            <div className="mt-4">
              <p className="text-sm text-primary pb-1">
                {format(new Date(post.updatedAt), "dd MMMM yyyy", {
                  locale: es,
                })}
              </p>
              <h3 className="text-3xl font-bold pb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
