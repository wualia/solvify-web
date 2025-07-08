import Link from "next/link";
import React, { Suspense } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import Categories from "@/components/blog/categories";

import type { Metadata } from "next";
import Loading from "@/components/blog/loading";

export const metadata: Metadata = {
  title: "Blog | Solvify",
  description:
    "Blog de Solvify, noticias y artículos sobre la ley de segunda oportunidad, tarjetas revolving, negociación de deuda, etc.",
};

const BlogPage = async () => {
  const data = await fetch(`${process.env.BLOG_URL}/api/posts`);
  const posts = await data.json();

  return (
    <div className="mx-auto max-w-7xl px-4 2xl:px-0 py-8 grid lg:grid-cols-4 gap-4 items-start">
      <div className="hidden lg:block sticky top-20">
        <Categories />
      </div>

      <div className="col-span-3 space-y-4">
        {posts.docs?.map((post: any) => (
          <div key={post.id} className="border-b last-of-type:border-b-0 py-4">
            <Link href={`/blog/${post.categorySlug}/${post.slug}`}>
              <div>
                <Badge variant="outline" className="text-sm">
                  {post.category.name}
                </Badge>
                <h2 className="text-2xl md:text-2xl font-medium py-4 text-gray-700 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-muted-foreground max-w-3xl">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-4 py-4">
                <p className="text-sm text-primary">
                  {format(new Date(post.updatedAt), "dd MMMM yyyy", {
                    locale: es,
                  })}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
