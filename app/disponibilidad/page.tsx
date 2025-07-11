import React, { Suspense } from "react";
import { Metadata } from "next";
import DisponibilidadComponent from "@/components/disponibilidad/form";

export const metadata: Metadata = {
  title: "Disponibilidad",
  description: "Disponibilidad",
};

const Disponibilidad = () => {
  return (
    <div className="text-center py-8 pb-24 mx-auto max-w-2xl px-4 2xl:px-0">
      <DisponibilidadComponent source="web" />
    </div>
  );
};

const DisponibilidadPage = () => {
  return (
    <Suspense>
      <Disponibilidad />
    </Suspense>
  );
};

export default DisponibilidadPage;
