import React from "react";
import { Metadata } from "next";
import MotivoDescarte from "./motivo";

export const metadata: Metadata = {
  title: "Descarte Ley de Segunda Oportunidad",
  description: "Descarte Ley de Segunda Oportunidad",
};

const DescarteLSO = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 2xl:px-0 mt-4 md:mt-16 mb-16">
      <div className=" bg-card p-4 lg:p-8 rounded-lg mb-8 border border-gray-200 dark:border-white/10">
        <div className="flex justify-center">
          <h1 className="text-primary text-center text-xs px-4 py-1 bg-primary/10 rounded-full">
            DESCARTE
          </h1>
        </div>

        <h1 className="text-3xl font-medium pb-4 text-gray-700 dark:text-white text-center mt-4">
          Lo sentimos
        </h1>
        <MotivoDescarte />
      </div>
    </div>
  );
};

export default DescarteLSO;
