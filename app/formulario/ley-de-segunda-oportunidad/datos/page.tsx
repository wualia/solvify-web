import React from "react";
import LeadForm from "@/components/formularios/lso/leadForm";

const DatosLSO = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 2xl:px-0 mt-4">
      <div className=" bg-card p-4 lg:p-8 rounded-lg mb-8">
        <div className="flex justify-center">
          <h1 className="text-primary text-center text-xs px-4 py-1 bg-primary/10 rounded-full">
            INFORMACIÓN
          </h1>
        </div>

        <h1 className="text-3xl font-medium pb-4 text-gray-700 dark:text-white text-center mt-4">
          Datos personales
        </h1>
        <p className="text-gray-500 dark:text-gray-300 text-center">
          Por favor, ingresa tus datos para continuar
        </p>
        <LeadForm />
      </div>
    </div>
  );
};

export default DatosLSO;
