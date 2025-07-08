import React from "react";
import { es } from "date-fns/locale";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const RelatedPosts = ({ relatedPosts }: { relatedPosts: any }) => {
  return (
    <div className="border-t py-8 mt-8">
      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-white pb-8">
          También te puede interesar
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post: any) => (
            <Link
              key={post.id}
              href={`/blog/${post.categorySlug}/${post.slug}`}
              className="bg-card p-4 rounded-lg"
            >
              <Image
                src={process.env.BLOG_URL + post.featuredImage.url}
                alt={post.featuredImage.alt}
                width={400}
                height={300}
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className=" text-primary py-4 text-sm">
                {format(new Date(post.updatedAt), "dd MMMM yyyy", {
                  locale: es,
                })}
              </p>
              <h4 className="text-lg font-medium">{post.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
