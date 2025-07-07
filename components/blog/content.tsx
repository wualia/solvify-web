import React, { Fragment } from "react";
import { cn } from "@/lib/utils";

const Content = ({ child }: { child: any }) => {
  console.log("child:", child);

  return (
    <>
      {child?.type === "heading" && child?.tag === "h2" && (
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white pb-4">
          {child?.children[0]?.text}
        </h2>
      )}

      {child?.type === "heading" && child?.tag === "h3" && (
        <h3 className="text-xl font-semibold text-gray-700 dark:text-white pb-4">
          {child?.children[0]?.text}
        </h3>
      )}

      {child?.type === "heading" && child?.tag === "h4" && (
        <h4 className="text-lg font-semibold text-gray-700 dark:text-white pb-4">
          {child?.children[0]?.text}
        </h4>
      )}

      {child?.type === "paragraph" && (
        <p className="pb-6 leading-8 ">
          {child.children.map((item: any, index: number) => (
            <Fragment key={index}>
              {item.type === "text" && (
                <span
                  key={index}
                  className={cn(
                    item.format == 1
                      ? "font-semibold"
                      : "text-gray-500 dark:text-gray-400 leading-relaxed"
                  )}
                >
                  {item.text}
                </span>
              )}
              {item.type === "link" && (
                <a
                  href={item.fields.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className={cn(
                    "text-primary font-medium underline leading-relaxed"
                  )}
                >
                  {item.children[0].text}
                </a>
              )}
            </Fragment>
          ))}
        </p>
      )}

      {child?.type === "list" && child?.tag === "ul" && (
        <ul className="pb-6 list-disc list-outside pl-4  leading-relaxed">
          {child.children.map((item: any, index: number) => (
            <li key={index} className="pb-4">
              {item.children.map((item: any, index: number) => (
                <Fragment key={index}>
                  {item.type === "text" && (
                    <span
                      key={index}
                      className={cn(
                        item.format == 1
                          ? "font-medium"
                          : "text-gray-500 dark:text-gray-400 leading-relaxed"
                      )}
                    >
                      {item.text}
                    </span>
                  )}
                  {item.type === "link" && (
                    <a
                      href={item.fields.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      className={cn(
                        "text-primary font-medium underline leading-relaxed"
                      )}
                    >
                      {item.children[0].text}
                    </a>
                  )}
                </Fragment>
              ))}
            </li>
          ))}
        </ul>
      )}

      {child?.type === "list" && child?.tag === "ol" && (
        <ol className="pb-6 list-decimal list-outside pl-4 text-gray-500 dark:text-gray-400 leading-relaxed">
          {child.children.map((item: any, index: number) => (
            <li key={index} className="pb-4">
              {item.children[0].text}
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Content;
