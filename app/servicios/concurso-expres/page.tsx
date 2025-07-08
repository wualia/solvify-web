import React from "react";
import HeroServices from "@/components/services/hero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concurso exprés | Solvify",
  description:
    "Si tienes una sociedad que tiene deudas y quieres cancelarlas, también tienes la oportunidad de hacerlo legalmente.",
};

const ConcursoExpres = () => {
  return (
    <div>
      <HeroServices
        title="Concurso exprés"
        description="Si tienes una sociedad que tiene deudas y quieres cancelarlas, también tienes la oportunidad de hacerlo legalmente."
        image="/services-concurso-expres.webp"
        link="/servicios"
        hasAction={true}
        buttonText="Realizar estudio gratuito"
      />
    </div>
  );
};

export default ConcursoExpres;
