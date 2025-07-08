import React from "react";
import { Badge } from "../ui/badge";
import { es } from "date-fns/locale";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const RelatedPosts = ({ relatedPosts }: { relatedPosts: any }) => {
  return (
    <div className="border-t py-8 mt-8">
      <div className="container mx-auto">
        <h3 className="text-2xl font-medium text-gray-700 pb-8">
          También te puede interesar
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {relatedPosts.map((post: any) => (
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
                className="w-full h-40 object-cover rounded-lg"
              />
              <h4 className="text-lg font-medium py-8">{post.title}</h4>
              {/* <div>
                  <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
                    {post?.excerpt}
                  </p>
                  <div className="flex space-x-4 py-6">
                    <p className=" text-gray-500 dark:text-gray-300">
                      {format(new Date(post.updatedAt), "dd MMMM yyyy", {
                        locale: es,
                      })}
                    </p>
                  </div>
                </div> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
