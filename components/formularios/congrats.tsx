"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";

const Congrats = ({ source }: { source: string }) => {
  const router = useRouter();

  useEffect(() => {
    track("Completa formulario", {
      formulario:
        source === "ley-de-segunda-oportunidad"
          ? "LSO"
          : source === "negociacion-de-deuda"
            ? "NEGO"
            : "OTRO",
    });
  }, []);

  const handleContinuar = () => {
    router.push("/formulario/ley-de-segunda-oportunidad/datos");
  };
  return (
    <div className="flex justify-center">
      <Button
        className="mt-8 w-full md:w-auto md:px-16"
        onClick={handleContinuar}
      >
        Continuar
      </Button>
    </div>
  );
};

export default Congrats;
