"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";
import { useFormStore } from "@/store/form";

const MotivoDescarte = () => {
  const { reason } = useFormStore();
  const router = useRouter();

  useEffect(() => {
    if (reason) {
      track("Descarte formulario", {
        motivo: reason,
        formulario: "LSO",
      });
    }
  }, [reason]);

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
