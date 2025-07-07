import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resultado Ley de Segunda Oportunidad",
  description: "Resultado Ley de Segunda Oportunidad",
};

const ResultadoLSO = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 2xl:px-0 mt-4">
      <div className=" p-8 rounded-lg mb-8">
        <div className="flex justify-center">
          <h1 className="text-primary text-center text-xs px-4 py-1 bg-primary/10 rounded-full">
            RESULTADO
          </h1>
        </div>
        <h1 className="text-3xl font-medium pb-4 text-gray-700 text-center mt-4">
          Felicidades
        </h1>
        <p className="text-gray-500 text-center">
          Segun tus respuestas, puedes acogerte a la Ley de Segunda Oportunidad
        </p>
        <div className="flex justify-center">
          <Button className="mt-8 w-full md:w-auto">Ver mis opciones</Button>
        </div>
      </div>
    </div>
  );
};

export default ResultadoLSO;
