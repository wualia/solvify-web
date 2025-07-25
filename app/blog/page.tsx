import Link from "next/link";
import React, { Suspense } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import DesktopCategories from "@/components/blog/desktopCategories";
import MobileCategories from "@/components/blog/mobileCategories";

import type { Metadata } from "next";
import BlogPostsSkeleton from "@/components/blog/skeleton";

export const metadata: Metadata = {
  title: "Blog | Solvify",
  description:
    "Blog de Solvify, noticias y artículos sobre la ley de segunda oportunidad, tarjetas revolving, negociación de deuda, etc.",
  metadataBase: new URL(`${process.env.SITE_URL}`),
  alternates: {
    canonical: `/blog/`,
  },
  openGraph: {
    title: "Blog | Solvify",
    description:
      "Blog de Solvify, noticias y artículos sobre la ley de segunda oportunidad, tarjetas revolving, negociación de deuda, etc.",
    siteName: "Solvify",
    type: "website",
  },
};

const BlogPosts = async () => {
  const data = await fetch(
    `${process.env.BLOG_URL}/api/posts?select[title]=true&select[excerpt]=true&select[updatedAt]=true&select[categorySlug]=true&select[slug]=true&select[category]=true`
  );
  const posts = await data.json();

  console.log("posts:", posts);

  return (
    <>
      {posts.docs?.map((post: any) => (
        <div key={post.id} className="border-b last-of-type:border-b-0 py-4">
          <Link href={`/blog/${post.categorySlug}/${post.slug}`}>
            <div>
              <Badge variant="outline" className="text-sm">
                {post.category.name}
              </Badge>
              <h2 className="text-2xl md:text-2xl font-semibold py-4 text-gray-700 dark:text-white max-w-2xl">
                {post.title}
              </h2>
              <p className="text-muted-foreground max-w-3xl">{post.excerpt}</p>
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
    </>
  );
};

const BlogPage = async () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 2xl:px-0 py-8 border-b">
        <h1 className="text-3xl font-semibold text-gray-700 dark:text-white">
          Blog de Solvify
        </h1>{" "}
        <p className="text-gray-500 dark:text-gray-300 text-lg pt-4 max-w-3xl">
          Descubre nuestros artículos y noticias sobre la ley de segunda
          oportunidad, tarjetas revolving, negociación de deuda, etc.
        </p>
      </div>

      <div className="mx-auto max-w-7xl lg:py-8 grid lg:grid-cols-4 gap-4 items-start">
        <div className="hidden lg:block sticky top-20">
          <DesktopCategories />
        </div>
        <div className="sticky top-16 flex lg:hidden overflow-x-scroll no-scrollbar border-b border-gray-100 dark:border-white/10 ">
          <MobileCategories />
        </div>
        <div className="lg:col-span-3 space-y-4 px-4 2xl:px-0">
          <Suspense fallback={<BlogPostsSkeleton />}>
            <BlogPosts />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
