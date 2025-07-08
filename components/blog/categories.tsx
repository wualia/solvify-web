"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Categories = ({ categories }: { categories: any }) => {
  const pathname = usePathname();

  return (
    <div className="py-4 px-4 2xl:px-0 flex flex-col gap-6  bg-white dark:bg-background ">
      <Link href="/blog" className="cursor-pointer">
        <Badge
          variant={pathname === "/blog" ? "default" : "secondary"}
          className="text-sm"
        >
          Todos
        </Badge>
      </Link>
      {categories.docs.map((category: any) => (
        <Link
          key={category.id}
          href={`/blog/${category.slug}`}
          className="cursor-pointer"
        >
          <Badge
            key={category.id}
            variant={pathname.includes(category.slug) ? "default" : "secondary"}
            className="text-sm"
          >
            {category.name}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
