"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="w-full md:w-auto flex items-center gap-2 bg-black"
    >
      <ArrowLeft className="w-4 h-4" />
      Volver atrás
    </Button>
  );
};

export default BackButton;
