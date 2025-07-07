"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

const BlogProgress = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const [scrollPosition, setScrollPosition] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest);
  });

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, originX: 0 }}
      className={cn(
        scrollPosition < 200 ? "hidden" : "",
        "bg-primary h-1 fixed inset-x-0 top-[68px]"
      )}
    />
  );
};

export default BlogProgress;
