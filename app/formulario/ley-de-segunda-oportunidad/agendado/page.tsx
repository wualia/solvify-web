import React from "react";
import BookDetail from "./bookDetail";

const AgendadoLSO = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 2xl:px-0 mt-4 md:mt-16 mb-16">
      <div className=" bg-card p-4 lg:p-8 rounded-lg mb-8 border border-gray-200 dark:border-white/10">
        <div className="flex justify-center">
          <h1 className="text-primary text-center text-xs px-4 py-1 bg-primary/10 rounded-full">
            AGENDADO
          </h1>
        </div>

        <h1 className="text-3xl font-medium pb-4 text-gray-700 dark:text-white text-center mt-4">
          LLamada agendada
        </h1>
        <p className="text-gray-500 dark:text-gray-300 text-center mx-auto max-w-xl">
          A continuación te dejamos los datos de la llamada agendada:
        </p>
        <BookDetail />
      </div>
    </div>
  );
};
export default AgendadoLSO;
