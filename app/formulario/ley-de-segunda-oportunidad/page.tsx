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
    <div className="mx-auto max-w-5xl px-4 2xl:px-0 mt-4 md:mt-16 mb-16">
      <div className=" bg-card p-4 lg:p-8 rounded-lg mb-8 border border-gray-200 dark:border-white/10">
        <div className="border-b border-gray-200 dark:border-white/10 mb-8">
          <h1 className="text-2xl font-medium pb-4 text-gray-700 dark:text-white text-center">
            Formulario de la Ley de Segunda Oportunidad
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-center pb-8 hidden lg:block">
            Realiza el formulario de la Ley de Segunda Oportunidad para saber si
            puedes acogerte.
          </p>
        </div>

        <LSOForm />
      </div>
    </div>
  );
};

export default FormularioLSO;
