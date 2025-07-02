// import BackButton from "@/components/shared/backButton";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Content from "@/components/blog/content";

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

  console.log("post:", post.docs[0].content.root.children);
  console.log("post:", post.docs[0].content.root.children[0].children[0].text);

  return (
    <div className="mx-auto max-w-5xl px-8 2xl:px-0 py-20">
      <Image
        src={process.env.BLOG_URL + post.docs[0].featuredImage.url}
        alt={post.docs[0].featuredImage.alt}
        width={400}
        height={300}
        className="w-full h-56 object-cover rounded-lg"
      />
      <p className="text-sm text-primary pb-1 pt-12">
        {format(new Date(post.docs[0].updatedAt), "dd MMMM yyyy", {
          locale: es,
        })}
      </p>
      <h1 className="text-3xl font-bold pt-4">{post.docs[0]?.title}</h1>
      <div className="my-4">
        <p className="text-sm text-muted-foreground pb-4">
          {post.docs[0]?.description}
        </p>
        {post.docs[0].content.root.children.map((child: any, index: number) => (
          <Content child={child} key={index} />
        ))}
      </div>
      {/* <BackButton /> */}
    </div>
  );
};

export default PostDetail;
