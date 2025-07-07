import BackButton from "@/components/ui/backButton";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Content from "@/components/blog/content";
import type { Metadata, ResolvingMetadata } from "next";
import { Badge } from "@/components/ui/badge";
import CtaComponent from "@/components/blog/cta/ctaComponent";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  const data = await fetch(
    `${process.env.BLOG_URL}/api/posts?where[slug][equals]=${slug}`
  );

  const post = await data.json();

  // console.log("post:", post);

  return {
    title: post.docs[0].meta.title,
    description: post.docs[0].meta.description,
    metadataBase: new URL(`${process.env.SITE_URL}`),
    alternates: {
      canonical: `/blog/${post.docs[0].categorySlug}/${post.docs[0].slug}`,
    },
    openGraph: {
      title: post.docs[0].meta.title,
      description: post.docs[0].meta.description,
      siteName: "Solvify",
      type: "website",
      images: [process.env.BLOG_URL + post.docs[0].featuredImage.url],
    },
  };
}
const PostDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const data = await fetch(
    `${process.env.BLOG_URL}/api/posts?where[slug][equals]=${slug}`
  );

  const post = await data.json();

  // console.log("post:", post);
  // console.log(
  //   "post detail:",
  //   post.docs[0].content.root.children[0].children[0].text
  // );

  return (
    <article className="mx-auto max-w-7xl px-8 2xl:px-0 py-8">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <header className="pb-8">
          <h1 className="text-4xl font-medium pb-8 text-gray-700">
            {post.docs[0]?.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <Image
              src={process.env.BLOG_URL + post.docs[0].featuredImage.url}
              alt={post.docs[0].featuredImage.alt}
              width={400}
              height={300}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
                {post.docs[0]?.excerpt}
              </p>
              <div></div>
              <p className="py-6 text-gray-500 dark:text-gray-400">
                {format(new Date(post.docs[0].updatedAt), "dd MMMM yyyy", {
                  locale: es,
                })}
                {"  "}|{"  "}
                <span className="font-semibold">4 minutos de lectura</span>
              </p>
              <Badge className="text-sm">{post.docs[0].category.name}</Badge>
            </div>
          </div>
        </header>
      </div>
      <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        <div className="sticky top-20 hidden md:block">
          <h3 className="text-xl font-medium pb-4 text-gray-700">
            Tabla de contenidos
          </h3>
          <ul>
            {post.docs[0].tableOfContents.map((child: any, index: number) => (
              <li key={index} className="pb-4 text-gray-500 dark:text-gray-400">
                {child.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          {post.docs[0].content.root.children.map(
            (child: any, index: number) => (
              <Content child={child} key={index} />
            )
          )}{" "}
          <CtaComponent category={post.docs[0].categorySlug} />
          <div className="mt-8">
            <BackButton />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
