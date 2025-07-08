import React from "react";
import Categories from "@/components/blog/categories";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { Metadata, ResolvingMetadata } from "next";

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

export default BlogCategoryPage;
