import React from "react";
import Categories from "@/components/blog/categories";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";

const BlogCategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  const data = await fetch(
    `${process.env.BLOG_URL}/api/posts?where[categorySlug][equals]=${category}`
  );
  const posts = await data.json();

  const categoriesData = await fetch(`${process.env.BLOG_URL}/api/categories`);
  const categories = await categoriesData.json();

  return (
    <div className="mx-auto max-w-7xl px-4 2xl:px-0 py-8">
      <Categories categories={categories} />
      <div className=" grid md:grid-cols-2 gap-8 md:gap-16 py-8">
        {posts.docs?.map((post: any) => (
          <Link
            key={post.id}
            href={`/blog/${post.categorySlug}/${post.slug}`}
            className=""
          >
            <Image
              src={process.env.BLOG_URL + post.featuredImage.url}
              alt={post.featuredImage.alt}
              width={400}
              height={300}
              className="w-full h-56 object-cover rounded-lg"
            />

            <div className="mt-4">
              <div className="flex items-center gap-4 pb-2">
                <p className="text-sm text-primary">
                  {format(new Date(post.updatedAt), "dd MMMM yyyy", {
                    locale: es,
                  })}
                </p>
              </div>

              <h2 className="text-xl font-medium pb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryPage;
