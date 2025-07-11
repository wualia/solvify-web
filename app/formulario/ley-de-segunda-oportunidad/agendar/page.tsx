import React from "react";
import DisponibilidadComponent from "@/components/disponibilidad/form";

const AgendarLSO = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 2xl:px-0 mt-4 md:mt-16 mb-16">
      <div className=" bg-card p-4 lg:p-8 rounded-lg mb-8 border border-gray-200 dark:border-white/10">
        <div className="flex justify-center">
          <h1 className="text-primary text-center text-xs px-4 py-1 bg-primary/10 rounded-full">
            AGENDAR LLAMADA
          </h1>
        </div>
        <DisponibilidadComponent
          source="ley-de-segunda-oportunidad"
          deal_id={null}
        />
      </div>
    </div>
  );
};

export default AgendarLSO;
