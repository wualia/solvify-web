"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} className="w-full md:w-auto">
      Volver atrás
    </Button>
  );
};

export default BackButton;
