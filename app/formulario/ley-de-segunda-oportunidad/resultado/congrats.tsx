"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";

const Congrats = () => {
  const router = useRouter();

  useEffect(() => {
    track("Completa formulario", {
      formulario: "LSO",
    });
  }, []);

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
