"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useFormStore } from "@/store/form";

const HeroButton = ({
  buttonText,
  link,
}: {
  buttonText: string;
  link: string;
}) => {
  const { setSource } = useFormStore();

  const router = useRouter();

  const handleClick = () => {
    router.push(link);
    setSource("landing");
  };

  return (
    <Button
      className=" w-full md:w-auto bg-black dark:bg-white dark:text-black"
      size="lg"
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  );
};

export default HeroButton;
