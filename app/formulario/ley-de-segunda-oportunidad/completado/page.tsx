import React from "react";
import Agendar from "./agendar";

const CompletadoLSO = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 2xl:px-0 mt-4">
      <div className=" bg-card p-4 lg:p-8 rounded-lg mb-8">
        <div className="flex justify-center">
          <h1 className="text-primary text-center text-xs px-4 py-1 bg-primary/10 rounded-full">
            COMPLETADO
          </h1>
        </div>

        <h1 className="text-3xl font-medium pb-4 text-gray-700 dark:text-white text-center mt-4">
          Información recibida
        </h1>
        <p className="text-gray-500 dark:text-gray-300 text-center mx-auto max-w-xl">
          En breves nos pondremos en contacto contigo, pero si lo prefieres
          puedes agendar una llamada con nosotros cuando te vaya mejor.
        </p>
        <Agendar />
      </div>
    </div>
  );
};

export default CompletadoLSO;
