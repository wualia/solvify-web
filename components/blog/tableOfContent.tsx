"use client";

import React from "react";

const TableOfContent = ({ content }: { content: any }) => {
  const scrollTo = (slug: string): void => {
    console.log("slug:", slug);

    const element = document.querySelector(`#${slug}`);

    console.log("element:", element);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="sticky top-24 hidden md:block">
      <h3 className="text-xl font-medium pb-4 text-gray-700">
        Tabla de contenidos
      </h3>
      <ul>
        {content.map((link: any) => (
          <li
            key={link.id}
            className="pb-4 text-gray-500 dark:text-gray-400 cursor-pointer"
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
