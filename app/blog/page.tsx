import Link from "next/link";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import Categories from "@/components/blog/categories";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solvify - Blog",
  description: "Blog de Solvify",
};

const BlogPage = async ({ searchParams }: { searchParams: any }) => {
  let posts;

  const categoria = await searchParams?.categoria;

  if (categoria) {
    const data = await fetch(
      `${process.env.BLOG_URL}/api/posts?where[categorySlug][equals]=${categoria}`
    );
    posts = await data.json();
  } else {
    const data = await fetch(`${process.env.BLOG_URL}/api/posts`);
    posts = await data.json();
  }

  const categoriesData = await fetch(`${process.env.BLOG_URL}/api/categories`);
  const categories = await categoriesData.json();

  return (
    <>
      <Categories categories={categories} />
      <div className="mx-auto max-w-7xl px-4 2xl:px-0 py-8">
        <div className=" grid md:grid-cols-2 gap-8 md:gap-16 md:py-8">
          {posts.docs?.map((post: any) => (
            <Link
              key={post.id}
              href={`/blog/${post.categorySlug}/${post.slug}`}
              className=""
            >
              <div className="flex items-center gap-4">
                <Image
                  src={process.env.BLOG_URL + post.featuredImage.url}
                  alt={post.featuredImage.alt}
                  width={400}
                  height={300}
                  className="h-16 w-16 object-cover rounded-lg"
                />
                <div>
                  <div className="flex items-center gap-4 pb-2">
                    <p className="text-sm text-primary">
                      {format(new Date(post.updatedAt), "dd MMMM yyyy", {
                        locale: es,
                      })}
                    </p>
                  </div>

                  <h2 className="md:text-xl font-medium pb-2">{post.title}</h2>
                </div>
              </div>

              {/* <div className="mt-4">
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </div> */}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
