"use client";

import React from "react";
import { scrollTo } from "@/lib/functions";
import { Button } from "../ui/button";

const HeroButton = () => {
  return (
    <Button
      className=" w-full md:w-auto bg-white text-black hover:bg-white/80"
      size="lg"
      onClick={() => scrollTo("servicios")}
    >
      Ver nuestros servicios
    </Button>
  );
};

export default HeroButton;
