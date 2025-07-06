"use client";

import React, { useEffect } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "l-ring": {
        size?: string | number;
        color?: string | number;
        speed?: string | number;
        stroke?: string | number;
      };
    }
  }
}

const Loader = ({ color, size }: any) => {
  useEffect(() => {
    async function getLoader() {
      const { ring } = await import("ldrs");
      ring.register();
    }
    getLoader();
  }, []);

  return <l-ring color={color} size={size} stroke="2"></l-ring>;
};

export default Loader;
