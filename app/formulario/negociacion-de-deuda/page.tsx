import React from "react";
import { Metadata } from "next";
import FormNego from "@/components/formularios/nego/form";

export const metadata: Metadata = {
  title: "Formulario de negociación de deuda",
  description:
    "Realiza el formulario de negociación de deuda para saber si puedes negociar tus deudas.",
};

const FormularioNEGO = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 2xl:px-0 mt-4 md:mt-16 mb-16">
      <div className=" bg-card p-4 lg:p-8 rounded-lg mb-8 border border-gray-200 dark:border-white/10">
        <div className="border-b border-gray-200 dark:border-white/10 mb-8">
          <h1 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white text-center">
            Formulario de negociación de deuda
          </h1>
        </div>

        <div className="mt-8">
          <FormNego />
        </div>
      </div>
    </div>
  );
};

export default FormularioNEGO;
