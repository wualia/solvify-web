import React from "react";

const Content = ({ child }: { child: any }) => {
  return (
    <>
      {child?.type === "heading" && child?.tag === "h2" && (
        <h2 className="text-2xl font-bold pb-6">{child?.children[0]?.text}</h2>
      )}

      {child?.type === "heading" && child?.tag === "h3" && (
        <h3 className="text-2xl font-bold pb-6">{child?.children[0]?.text}</h3>
      )}

      {child?.type === "heading" && child?.tag === "h4" && (
        <h4 className="text-2xl font-bold pb-6">{child?.children[0]?.text}</h4>
      )}

      {child?.type === "paragraph" && (
        <p className="pb-6">{child?.children[0]?.text}</p>
      )}

      {child?.type === "list" && child?.tag === "ul" && (
        <ul className="pb-6 list-disc list-inside">
          {child.children.map((item: any, index: number) => (
            <li key={index}>{item.children[0].text}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Content;
