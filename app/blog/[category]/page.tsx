import React, { Suspense } from "react";
import DesktopCategories from "@/components/blog/desktopCategories";
import MobileCategories from "@/components/blog/mobileCategories";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import BlogPostsSkeleton from "@/components/blog/skeleton";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;

  return {
    title: `Blog | ${
      category == "ley-de-segunda-oportunidad"
        ? "Ley de la Segunda Oportunidad"
        : category == "negociacion-de-deuda"
          ? "Negociación de deuda"
          : category == "tarjetas-revolving"
            ? "Tarjetas revolving"
            : category == "concurso-expres"
              ? "Concurso exprés"
              : "Cartel de coches"
    } | Solvify`,
    description: `Blog de Solvify, noticias y artículos sobre ${
      category == "ley-de-segunda-oportunidad"
        ? "Ley de la Segunda Oportunidad"
        : category == "negociacion-de-deuda"
          ? "Negociación de deuda"
          : category == "tarjetas-revolving"
            ? "Tarjetas revolving"
            : category == "concurso-expres"
              ? "Concurso exprés"
              : "Cartel de coches"
    }`,
    metadataBase: new URL(`${process.env.SITE_URL}`),
    alternates: {
      canonical: `/blog/${category}`,
    },
    openGraph: {
      title: `Blog | ${
        category == "ley-de-segunda-oportunidad"
          ? "Ley de la Segunda Oportunidad"
          : category == "negociacion-de-deuda"
            ? "Negociación de deuda"
            : category == "tarjetas-revolving"
              ? "Tarjetas revolving"
              : category == "concurso-expres"
                ? "Concurso exprés"
                : "Cartel de coches"
      } | Solvify`,
      description: `Blog de Solvify, noticias y artículos sobre ${
        category == "ley-de-segunda-oportunidad"
          ? "Ley de la Segunda Oportunidad"
          : category == "negociacion-de-deuda"
            ? "Negociación de deuda"
            : category == "tarjetas-revolving"
              ? "Tarjetas revolving"
              : category == "concurso-expres"
                ? "Concurso exprés"
                : "Cartel de coches"
      }`,
      siteName: "Solvify",
      type: "website",
    },
  };
}

const BlogPostsByCategory = async ({ category }: { category: string }) => {
  const data = await fetch(
    `${process.env.BLOG_URL}/api/posts?where[categorySlug][equals]=${category}`
  );
  const posts = await data.json();
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

const BlogCategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  const categoriesData = await fetch(
    `${process.env.BLOG_URL}/api/categories?where[slug][equals]=${category}`
  );
  const categoryData = await categoriesData.json();

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 2xl:px-0 py-8 border-b">
        <h1 className="text-3xl font-semibold text-gray-700 dark:text-white">
          Posts sobre {categoryData.docs[0].name}
        </h1>
        <p className="text-gray-500 dark:text-gray-300 text-lg pt-4 max-w-3xl">
          Descubre nuestros artículos y noticias sobre{" "}
          {categoryData.docs[0].name}.
        </p>
      </div>
      <div className="mx-auto max-w-7xl lg:py-8 grid lg:grid-cols-4 gap-4 items-start">
        <div className="hidden lg:block sticky top-20">
          <DesktopCategories />
        </div>
        <div className="sticky top-16 flex lg:hidden overflow-x-scroll no-scrollbar border-b border-gray-100 dark:border-white/10">
          <MobileCategories />
        </div>
        <div className="lg:col-span-3 space-y-4 px-4 2xl:px-0">
          <Suspense fallback={<BlogPostsSkeleton />}>
            <BlogPostsByCategory category={category} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryPage;
