import React from "react";
import { Metadata } from "next";
import LSOForm from "@/components/formularios/lso/form";

export const metadata: Metadata = {
  title: "Formulario de la Ley de Segunda Oportunidad",
  description:
    "Realiza el formulario de la Ley de Segunda Oportunidad para saber si puedes acogerte.",
};

const FormularioLSO = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 2xl:px-0 mt-4">
      <div className=" bg-gray-50 p-8 rounded-lg mb-8">
        <h1 className="text-2xl font-medium pb-4 text-gray-700 text-center">
          Formulario de la Ley de Segunda Oportunidad
        </h1>
        <p className="text-gray-500 text-center">
          Realiza el formulario de la Ley de Segunda Oportunidad para saber si
          puedes acogerte.
        </p>
      </div>
      <div className="">
        <LSOForm />
      </div>
    </div>
  );
};

export default FormularioLSO;
