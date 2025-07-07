"use client";

import React from "react";
import { scrollTo } from "@/lib/functions";

const TableOfContent = ({ content }: { content: any }) => {
  return (
    <div className="sticky top-24 hidden md:block">
      <h3 className="text-xl font-medium pb-4 text-gray-700 dark:text-white">
        Tabla de contenidos
      </h3>
      <ul>
        {content.map((link: any) => (
          <li
            key={link.id}
            className="pb-4 text-gray-500 dark:text-gray-200 cursor-pointer"
            onClick={() => scrollTo(link.section)}
          >
            {link.blockName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;
