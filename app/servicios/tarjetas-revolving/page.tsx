import React from "react";
import HeroServices from "@/components/services/hero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarjetas Revolving | Solvify",
  description:
    "Estás pagando la deuda de tu tarjeta de crédito, pero parece que nunca terminas de pagarlo?",
};

const RevolvingPage = () => {
  return (
    <div>
      <HeroServices
        title="Tarjetas Revolving"
        description="Estás pagando la deuda de tu tarjeta de crédito, pero parece que nunca terminas de pagarlo?"
        image="/services-revolving.webp"
        link="/servicios"
        hasAction={true}
        buttonText="Realizar estudio gratuito"
      />
    </div>
  );
};

export default RevolvingPage;
