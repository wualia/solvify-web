"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Congrats = () => {
  const router = useRouter();

  const handleContinuar = () => {
    router.push("/formulario/ley-de-segunda-oportunidad/datos");
  };
  return (
    <div className="flex justify-center">
      <Button className="mt-8 w-full md:w-auto" onClick={handleContinuar}>
        Continuar
      </Button>
    </div>
  );
};

export default Congrats;
