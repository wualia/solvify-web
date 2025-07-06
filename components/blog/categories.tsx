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
    <div className="pb-8 flex gap-2">
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
