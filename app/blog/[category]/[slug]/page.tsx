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

  console.log("post:", post);
  console.log(
    "post detail:",
    post.docs[0].content.root.children[0].children[0].text
  );

  return (
    <article className="mx-auto max-w-5xl px-8 2xl:px-0 pb-8">
      <Image
        src={process.env.BLOG_URL + post.docs[0].featuredImage.url}
        alt={post.docs[0].featuredImage.alt}
        width={400}
        height={300}
        className="w-full h-84 object-cover rounded-lg"
      />
      <Badge variant="secondary" className="text-sm">
        {post.docs[0].category.name}
      </Badge>
      <header>
        <h1 className="text-3xl font-bold pt-4">{post.docs[0]?.title}</h1>
        <p className="pt-2">
          <strong>Publicado:</strong>{" "}
          {format(new Date(post.docs[0].updatedAt), "dd MMMM yyyy", {
            locale: es,
          })}{" "}
          | <strong>Tiempo de lectura:</strong> 4 minutos
        </p>
      </header>
      <div className="my-4">
        <p className="text-sm text-muted-foreground pb-4">
          {post.docs[0]?.description}
        </p>
        {post.docs[0].content.root.children.map((child: any, index: number) => (
          <Content child={child} key={index} />
        ))}
      </div>
      <CtaComponent category={post.docs[0].categorySlug} />
      <div className="mt-8">
        <BackButton />
      </div>
    </article>
  );
};

export default PostDetail;
