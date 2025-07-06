import React from "react";
import HeroServices from "@/components/services/hero";

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
