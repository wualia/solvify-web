"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const MotivoDescarte = () => {
  const router = useRouter();

  const handleVolver = () => {
    router.push("/servicios/ley-de-segunda-oportunidad/");
  };

  return (
    <div>
      <p className="text-gray-500 text-center">
        No puedes acogerte a la Ley de Segunda Oportunidad
      </p>
      <div className="flex justify-center">
        <Button className="mt-8 w-full md:w-auto" onClick={handleVolver}>
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default MotivoDescarte;
