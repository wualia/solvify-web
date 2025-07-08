import React from "react";
import Categories from "@/components/blog/categories";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { Metadata, ResolvingMetadata } from "next";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const category = (await params).category;

  const data = await fetch(
    `${process.env.BLOG_URL}/api/posts?where[categorySlug][equals]=${category}`
  );

  const categoriesData = await fetch(
    `${process.env.BLOG_URL}/api/categories?where[slug][equals]=${category}`
  );
  const categoryData = await categoriesData.json();

  console.log("categoryData:", categoryData);

  const post = await data.json();

  return {
    title: `Blog | ${categoryData.docs[0].name} | Solvify`,
    description: `Blog de Solvify, noticias y artículos sobre ${categoryData.docs[0].name}`,
    metadataBase: new URL(`${process.env.SITE_URL}`),
    alternates: {
      canonical: `/blog/${post.docs[0].categorySlug}`,
    },
    openGraph: {
      title: `Blog ${post.docs[0].categorySlug} | Solvify`,
      description: `Blog de Solvify, noticias y artículos sobre ${post.docs[0].categorySlug}`,
      siteName: "Solvify",
      type: "website",
    },
  };
}

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

  const categoriesData = await fetch(
    `${process.env.BLOG_URL}/api/categories?sort=order`
  );
  const categories = await categoriesData.json();

  return (
    <div className="mx-auto max-w-7xl px-4 2xl:px-0 py-8 grid lg:grid-cols-4 gap-4 items-start">
      <div className="hidden lg:block sticky top-20">
        <Categories categories={categories} />
      </div>
      <div className="col-span-3 space-y-4">
        {posts.docs?.map((post: any) => (
          <div className="border-b last-of-type:border-b-0 py-4">
            <Link
              key={post.id}
              href={`/blog/${post.categorySlug}/${post.slug}`}
              className=""
            >
              <div>
                <Badge variant="outline" className="text-sm">
                  {post.category.name}
                </Badge>
                <h2 className="md:text-2xl font-medium py-4 text-gray-700 dark:text-white">
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

export default BlogCategoryPage;
