"use client";

import React, { useCallback, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Categories = ({ categories }: { categories: any }) => {
  const router = useRouter();
  const pathname = usePathname();

  console.log("pathname:", pathname);

  // const [activeCategory, setActiveCategory] = useState(categoria);

  return (
    <div className="py-4 px-4 2xl:px-0 flex gap-2 sticky bg-white z-10 top-16 inset-x-0 overflow-x-auto border-b mx-auto max-w-7xl md:border-none">
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
